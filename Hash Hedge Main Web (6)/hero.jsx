// Hash Hedge – Hero variants (Classic / Cosmic / Terminal)
// Exposes: Hero, HeroCanvas
const { useEffect: _useE, useRef: _useR, useState: _useS } = React;

// ==== Animated canvas background – trading terminal vibe ====
// Live candlestick chart + MA line + order-book ladder + streaming prints
function HeroCanvas({ anim = "medium", mode = "particles" }) {
  const canvasRef = _useR(null);
  _useE(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, w, h, dpr;

    // ---------- Data model ----------
    // Rolling candles – each candle has o/h/l/c. We shift left over time.
    const CANDLE_COUNT = 60;
    const CANDLE_W = 18;
    const CANDLE_GAP = 6;
    let price = 67500;             // "BTCUSDT"
    let candles = [];
    let ma = [];                   // moving-average values, aligned to candles
    const prints = [];             // tape prints drifting up
    const orders = [];             // order-book ladder rows
    let currentCandle = null;
    let candleStartT = 0;
    const CANDLE_MS = 1800;        // 1.8s per candle – fast but readable

    const rand = (a, b) => a + Math.random() * (b - a);

    const seedCandles = () => {
      candles = [];
      let p = price;
      for (let i = 0; i < CANDLE_COUNT; i++) {
        const o = p;
        const move = rand(-80, 80);
        const c = o + move;
        const h = Math.max(o, c) + rand(5, 40);
        const l = Math.min(o, c) - rand(5, 40);
        candles.push({ o, h, l, c });
        p = c;
      }
      price = p;
      currentCandle = { o: p, h: p, l: p, c: p };
      recomputeMA();
    };

    const recomputeMA = () => {
      const N = 12;
      ma = candles.map((_, i) => {
        const slice = candles.slice(Math.max(0, i - N + 1), i + 1);
        return slice.reduce((s, c) => s + c.c, 0) / slice.length;
      });
    };

    const seedOrders = () => {
      orders.length = 0;
      for (let i = 0; i < 14; i++) {
        orders.push({
          side: i < 7 ? "ask" : "bid",
          offset: i < 7 ? (7 - i) : (i - 6),
          size: rand(0.1, 4.2),
          life: rand(0.4, 1.0),
        });
      }
    };

    // ---------- Size / resize ----------
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // ---------- Drawing ----------
    const draw = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, w, h);

      // === Background grid ===
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      const gs = 96;
      // horizontal price lines
      for (let y = 40; y < h; y += 64) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      // vertical time lines, drift
      for (let x = (now * 0.02) % gs; x < w; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }

      // === Advance candles ===
      if (!candleStartT) candleStartT = now;
      const elapsed = now - candleStartT;
      // update current candle with live price walk
      const drift = rand(-12, 12) + (Math.sin(now * 0.0008) * 6);
      price += drift;
      if (currentCandle) {
        currentCandle.c = price;
        if (price > currentCandle.h) currentCandle.h = price;
        if (price < currentCandle.l) currentCandle.l = price;
      }
      if (elapsed > CANDLE_MS) {
        candles.push(currentCandle);
        if (candles.length > CANDLE_COUNT) candles.shift();
        currentCandle = { o: price, h: price, l: price, c: price };
        candleStartT = now;
        recomputeMA();
        // emit a tape print
        prints.push({
          x: w - 40 - Math.random() * 220,
          y: h - 30,
          side: drift > 0 ? "buy" : "sell",
          size: (Math.random() * 3.4 + 0.12).toFixed(3),
          price: price.toFixed(1),
          life: 1,
        });
        if (prints.length > 14) prints.shift();
      }

      // === Price range for scaling ===
      const allVals = candles.flatMap(c => [c.h, c.l]).concat([price]);
      const minP = Math.min(...allVals);
      const maxP = Math.max(...allVals);
      const pad = (maxP - minP) * 0.15 || 10;
      const pMin = minP - pad;
      const pMax = maxP + pad;
      const chartTop = 40;
      const chartBot = h - 60;
      const chartH = chartBot - chartTop;
      const yOf = (p) => chartTop + (1 - (p - pMin) / (pMax - pMin)) * chartH;

      // === Chart plot area on the right 2/3 of canvas ===
      const chartRight = w - 120;
      const totalCandles = candles.length + 1; // + current
      const chartLeft = chartRight - totalCandles * (CANDLE_W + CANDLE_GAP);

      // Horizontal price labels (faded)
      ctx.fillStyle = "rgba(245,244,240,0.22)";
      ctx.font = "10px Akrobat, Onest, sans-serif";
      ctx.textAlign = "right";
      for (let i = 0; i <= 5; i++) {
        const py = chartTop + (chartH / 5) * i;
        const pv = pMax - ((pMax - pMin) / 5) * i;
        ctx.fillText(pv.toFixed(0), chartRight - 8, py + 3);
        ctx.strokeStyle = "rgba(255,255,255,0.025)";
        ctx.beginPath(); ctx.moveTo(chartLeft, py); ctx.lineTo(chartRight, py); ctx.stroke();
      }

      // === Draw candles ===
      const drawCandle = (c, cx) => {
        const up = c.c >= c.o;
        const green = "rgba(24, 169, 101, ";
        const red   = "rgba(230, 70, 70, ";
        const body = up ? green : red;
        const yO = yOf(c.o);
        const yC = yOf(c.c);
        const yH = yOf(c.h);
        const yL = yOf(c.l);
        // wick
        ctx.strokeStyle = body + "0.9)";
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(cx, yH); ctx.lineTo(cx, yL); ctx.stroke();
        // body
        const top = Math.min(yO, yC);
        const bh = Math.max(1.5, Math.abs(yC - yO));
        ctx.fillStyle = body + "0.55)";
        ctx.fillRect(cx - CANDLE_W / 2, top, CANDLE_W, bh);
        ctx.strokeStyle = body + "1)";
        ctx.lineWidth = 1;
        ctx.strokeRect(cx - CANDLE_W / 2 + 0.5, top + 0.5, CANDLE_W - 1, bh - 1);
      };
      candles.forEach((c, i) => {
        const cx = chartLeft + i * (CANDLE_W + CANDLE_GAP) + CANDLE_W / 2;
        drawCandle(c, cx);
      });
      // current live candle – pulses
      const pulse = 0.7 + Math.sin(now * 0.006) * 0.3;
      ctx.globalAlpha = pulse;
      const liveCx = chartLeft + candles.length * (CANDLE_W + CANDLE_GAP) + CANDLE_W / 2;
      if (currentCandle) drawCandle(currentCandle, liveCx);
      ctx.globalAlpha = 1;

      // === Moving-average line (brand gold) ===
      if (ma.length > 1) {
        ctx.strokeStyle = "rgba(252,213,53,0.9)";
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(252,213,53,0.8)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ma.forEach((v, i) => {
          const cx = chartLeft + i * (CANDLE_W + CANDLE_GAP) + CANDLE_W / 2;
          const py = yOf(v);
          if (i === 0) ctx.moveTo(cx, py); else ctx.lineTo(cx, py);
        });
        // extend to live
        ctx.lineTo(liveCx, yOf(price));
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // === Last-price label (right edge, gold pill) ===
      const py = yOf(price);
      // dashed horizontal "last" line
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = "rgba(252,213,53,0.55)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(chartLeft, py); ctx.lineTo(chartRight, py); ctx.stroke();
      ctx.setLineDash([]);
      // pill
      const lbl = price.toFixed(1);
      const lblW = 74;
      ctx.fillStyle = "rgba(252,213,53,0.95)";
      ctx.fillRect(chartRight - lblW, py - 10, lblW, 20);
      ctx.fillStyle = "#0b0b0d";
      ctx.font = "700 12px Akrobat, Onest, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(lbl, chartRight - 8, py + 4);

      // === Order-book ladder (far left) ===
      const obX = 24;
      const obW = 180;
      const obTop = chartTop + 10;
      const rowH = 16;
      ctx.fillStyle = "rgba(245,244,240,0.35)";
      ctx.font = "9px Akrobat, Onest, sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("ORDER BOOK", obX, obTop - 8);
      orders.forEach((o, i) => {
        o.life -= 0.006;
        if (o.life <= 0) {
          o.size = rand(0.1, 4.2);
          o.life = rand(0.5, 1);
        }
        const rowY = obTop + i * rowH;
        const sideColor = o.side === "bid" ? "24,169,101" : "230,70,70";
        const barLen = (o.size / 4.2) * obW;
        // bar
        ctx.fillStyle = `rgba(${sideColor},${0.1 + o.life * 0.2})`;
        ctx.fillRect(o.side === "bid" ? obX : obX + obW - barLen, rowY, barLen, rowH - 2);
        // price
        ctx.fillStyle = `rgba(${sideColor},${0.5 + o.life * 0.5})`;
        ctx.textAlign = "left";
        ctx.fillText((price + (o.side === "bid" ? -o.offset * 2.5 : o.offset * 2.5)).toFixed(1), obX + 4, rowY + 11);
        // size
        ctx.fillStyle = `rgba(245,244,240,${0.25 + o.life * 0.35})`;
        ctx.textAlign = "right";
        ctx.fillText(o.size.toFixed(3), obX + obW - 4, rowY + 11);
      });

      // === Tape prints drifting up-right ===
      for (const p of prints) {
        p.y -= 0.6;
        p.life -= 0.005;
        if (p.life <= 0) continue;
        const col = p.side === "buy" ? "24,169,101" : "230,70,70";
        ctx.fillStyle = `rgba(${col},${p.life * 0.7})`;
        ctx.font = "10px Akrobat, Onest, sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(`${p.side === "buy" ? "▲" : "▼"} ${p.size} @ ${p.price}`, p.x, p.y);
      }

      // === Top "ticker" chips – 10 live crypto + commodity markets ===
      const ticker = [
        { s: "BTC/USDT",  v: price.toFixed(1),                                   chg: ((price - 67500) / 67500 * 100) },
        { s: "ETH/USDT",  v: (3420 + Math.sin(now * 0.0005) * 60).toFixed(2),    chg: Math.sin(now * 0.0005) * 2 },
        { s: "SOL/USDT",  v: (185 + Math.sin(now * 0.0007) * 8).toFixed(2),      chg: Math.sin(now * 0.0007) * 3 },
        { s: "XRP/USDT",  v: (2.48 + Math.sin(now * 0.0004) * 0.08).toFixed(3),  chg: Math.sin(now * 0.0004) * 1.2 },
        { s: "DOGE/USDT", v: (0.162 + Math.sin(now * 0.0006) * 0.005).toFixed(4),chg: Math.sin(now * 0.0006) * 2.4 },
        { s: "XAU/USDT",  v: (2384 + Math.sin(now * 0.0003) * 12).toFixed(1),    chg: Math.sin(now * 0.0003) * 0.6 },
        { s: "XAG/USDT",  v: (31.62 + Math.sin(now * 0.00055) * 0.4).toFixed(2), chg: Math.sin(now * 0.00055) * 1.1 },
        { s: "BRENT",     v: (82.10 + Math.sin(now * 0.00045) * 0.6).toFixed(2), chg: Math.sin(now * 0.00045) * 0.9 },
        { s: "WTI",       v: (78.40 + Math.sin(now * 0.00048) * 0.5).toFixed(2), chg: -Math.sin(now * 0.00048) * 0.8 },
        { s: "SPY",       v: (548.20 + Math.sin(now * 0.0004) * 1.8).toFixed(2), chg: Math.sin(now * 0.0004) * 0.4 },
      ];
      // Horizontal scroll – offset so tickers drift left continuously
      const tickerOffset = (now * 0.015) % 180;
      let tx = 24 - tickerOffset;
      ctx.font = "600 11px Akrobat, Onest, sans-serif";
      ctx.save();
      // clip to canvas width so tickers wrap cleanly off the left edge
      ctx.beginPath(); ctx.rect(0, 0, w, 36); ctx.clip();
      for (let pass = 0; pass < 2; pass++) {
        for (const t of ticker) {
          ctx.textAlign = "left";
          ctx.fillStyle = "rgba(245,244,240,0.55)";
          ctx.fillText(t.s, tx, 24);
          ctx.fillStyle = "rgba(245,244,240,0.95)";
          ctx.fillText(t.v, tx + 68, 24);
          const cgCol = t.chg >= 0 ? "24,169,101" : "230,70,70";
          ctx.fillStyle = `rgba(${cgCol},0.95)`;
          ctx.fillText((t.chg >= 0 ? "+" : "") + t.chg.toFixed(2) + "%", tx + 130, 24);
          tx += 180;
        }
      }
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    resize(); seedCandles(); seedOrders(); draw();
    const onResize = () => { resize(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [anim, mode]);
  return <canvas ref={canvasRef} className="hero-canvas" />;
}

// ==== Cosmic stats panel – Apscale-style, used on Cosmic hero ====
function CosmicStatsPanel() {
  const [tick, setTick] = _useS(0);
  _useE(() => {
    const i = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(i);
  }, []);
  const jitter = (base, pct) => Math.round(base * (1 + Math.sin(tick * 0.7) * pct));

  const primary = [
    {
      k: "Platform volume",
      big: `$${(jitter(178_400_000_000, 0.0003) / 1_000_000_000).toFixed(1)}B`,
      sub: "lifetime volume",
      day: `$${(jitter(195_000_000, 0.18) / 1_000_000).toFixed(0)}M`,
      dayLbl: "today",
      color: "var(--accent)",
    },
    {
      k: "Paid to traders",
      big: `$${(jitter(12_410_000, 0.001) / 1_000_000).toFixed(2)}M`,
      sub: "lifetime",
      day: `$${jitter(48_300, 0.02).toLocaleString()}`,
      dayLbl: "last 24h",
      color: "var(--green)",
    },
    {
      k: "Funded traders",
      big: jitter(5_120, 0.001).toLocaleString(),
      sub: "active accounts",
      day: `+${jitter(47, 0.12)}`,
      dayLbl: "joined today",
      color: "var(--fg)",
    },
    {
      k: "Payouts processed",
      big: jitter(17_800, 0.001).toLocaleString(),
      sub: "lifetime",
      day: `+${jitter(62, 0.1)}`,
      dayLbl: "last 24h",
      color: "var(--fg)",
    },
  ];

  return (
    <div style={{ marginTop: 80 }}>
      {/* header strip */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
        marginBottom: 28, color: "var(--fg-dim)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
        fontFamily: "Akrobat, Onest, sans-serif",
      }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 12px var(--green)", animation: "pulse 1.8s ease-in-out infinite" }} />
        <span>Live · updated {tick % 60}s ago</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span>Institutional feed · on-chain verified</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {primary.map((s, i) => (
          <div key={i} className="card" style={{
            padding: "32px 28px",
            textAlign: "left",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(31,29,37,0.9), rgba(17,15,22,0.9))",
            backdropFilter: "blur(12px)",
          }}>
            {/* corner accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, width: 3, height: 36,
              background: s.color, borderRadius: "0 0 3px 0",
            }} />
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 14 }}>
              {s.k}
            </div>
            <div style={{
              fontSize: 38, fontWeight: 800, color: s.color,
              letterSpacing: "-0.03em", lineHeight: 1,
              fontFamily: "Akrobat, Onest, sans-serif",
              marginBottom: 6,
            }}>
              {s.big}
            </div>
            <div style={{ fontSize: 12, color: "var(--fg-low)", marginBottom: 16 }}>
              {s.sub}
            </div>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 14px", borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--line)",
            }}>
              <span style={{ fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.dayLbl}
              </span>
              <span style={{
                fontSize: 15, fontWeight: 800, color: "var(--green)",
                fontFamily: "Akrobat, Onest, sans-serif",
              }}>
                ▲ {s.day}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==== Platform KPIs panel (classic hero variant) ====
// Three big stats – all-time total + today's delta – live-ticking.
function LivePayoutsTable() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick(t => t + 1), 1600);
    return () => clearInterval(i);
  }, []);
  const jitter = (base, pct) => base * (1 + Math.sin(tick * 0.6 + base) * pct);

  // baselines – all-time since launch + today's delta. Small sinusoidal jitter to feel alive.
  const volumeTotal = jitter(178_400_000_000, 0.0003);   // ~$8.4B lifetime
  const volumeToday = jitter(195_000_000, 0.18);        // ~$150–240M/day swing
  const tradersTotal = Math.round(jitter(27_840, 0.0008));
  const tradersToday = Math.round(jitter(142, 0.08));
  const payoutsTotal = jitter(12_410_000, 0.0006);     // ~$47M
  const payoutsToday = jitter(48_300, 0.03);

  const fmtMoney = (n) => n >= 1_000_000_000 ? `$${(n/1_000_000_000).toFixed(2)}B`
                        : n >= 1_000_000     ? `$${(n/1_000_000).toFixed(2)}M`
                        : n >= 1_000         ? `$${(n/1_000).toFixed(1)}K`
                                             : `$${Math.round(n).toLocaleString()}`;
  const fmtCount = (n) => n.toLocaleString("en-US");

  const stats = [
    { k: "Total trading volume", v: fmtMoney(volumeTotal), sub: "today",       subV: `+${fmtMoney(volumeToday)}`,  color: "var(--accent)", chart: [0.55,0.48,0.62,0.58,0.70,0.66,0.78,0.74,0.82,0.88,0.84,0.95] },
    { k: "Active traders",       v: fmtCount(tradersTotal), sub: "today",      subV: `+${fmtCount(tradersToday)}`, color: "var(--fg)",     chart: [0.42,0.48,0.52,0.56,0.58,0.63,0.61,0.68,0.72,0.76,0.81,0.86] },
    { k: "Total payouts",        v: fmtMoney(payoutsTotal), sub: "today",      subV: `+${fmtMoney(payoutsToday)}`, color: "var(--green)",  chart: [0.38,0.45,0.42,0.55,0.60,0.58,0.66,0.72,0.70,0.78,0.85,0.92] },
  ];

  return (
    <div style={{
      background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(21,19,26,0.95))",
      border: "1px solid var(--line)",
      borderRadius: 20,
      overflow: "hidden",
      backdropFilter: "blur(12px)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)",
      transition: "transform .35s var(--ease-out), box-shadow .35s var(--ease-out)",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.015)";
      e.currentTarget.style.boxShadow = "0 60px 120px -20px rgba(0,0,0,0.7), 0 0 120px rgba(252,213,53,0.12)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)";
    }}
    >
      <div style={{ padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 12px var(--green)", animation: "pulse 1.8s ease-in-out infinite" }} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg)" }}>Platform stats</span>
        </div>
        <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>updated live</span>
      </div>

      <div style={{ padding: "4px 0" }}>
        {stats.map((s, i) => (
          <div key={s.k} style={{
            display: "grid",
            gridTemplateColumns: "1fr 110px auto",
            gap: 20, padding: "20px 22px", alignItems: "center",
            borderBottom: i < stats.length - 1 ? "1px solid var(--line)" : "none",
            opacity: 0, animation: `fadeInRow .4s var(--ease-out) ${i * 0.12}s forwards`,
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-dim)", marginBottom: 6 }}>{s.k}</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: s.color, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums", lineHeight: 1 }} className="mono">{s.v}</div>
            </div>

            {/* sparkline */}
            <svg viewBox="0 0 110 36" width="110" height="36" style={{ overflow: "visible" }}>
              <defs>
                <linearGradient id={`sparkgrad-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor={s.color} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={s.color} stopOpacity="0" />
                </linearGradient>
              </defs>
              {(() => {
                const pts = s.chart.map((v, j) => [j * (110 / (s.chart.length - 1)), 36 - v * 32]);
                const d = pts.map((p, j) => `${j === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
                const area = `${d} L110,36 L0,36 Z`;
                return (
                  <>
                    <path d={area} fill={`url(#sparkgrad-${i})`} />
                    <path d={d} fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="2.8" fill={s.color} />
                    <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="5.5" fill={s.color} opacity="0.25">
                      <animate attributeName="r" values="3;7;3" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.35;0;0.35" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                  </>
                );
              })()}
            </svg>

            <div style={{ textAlign: "right", minWidth: 96 }}>
              <div style={{ fontSize: 11, color: "var(--fg-dim)", marginBottom: 4, letterSpacing: "0.05em" }}>{s.sub}</div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                fontSize: 13, fontWeight: 800, color: "var(--green)",
                padding: "4px 9px", borderRadius: 999,
                background: "rgba(124,216,160,0.12)", border: "1px solid rgba(124,216,160,0.22)",
                fontVariantNumeric: "tabular-nums",
              }} className="mono">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="currentColor"><path d="M4.5 0 L9 5 H6 V9 H3 V5 H0 Z"/></svg>
                {s.subV}
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`@keyframes fadeInRow { to { opacity: 1; } }`}</style>
    </div>
  );
}

// ==== Terminal-style trade feed (terminal variant) ====
// ==== Platform stats panel – replaces TradingTerminal for 'terminal' hero variant.
// Apscale-style: big eagle mascot on top, 6 stat tiles underneath (30d total + 24h for volume, traders, payouts).
function TradingTerminal() {
  const [tick, setTick] = _useS(0);
  _useE(() => {
    const i = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(i);
  }, []);
  // Small ±jitter so numbers feel live
  const jitter = (base, pct) => Math.round(base * (1 + Math.sin(tick * 0.7) * pct));
  const stats = [
    { k: "30d volume",    v: `$${(jitter(178_400_000_000, 0.001) / 1_000_000_000).toFixed(2)}B`, sub: "today",        subV: `$${(jitter(195_000_000, 0.18) / 1_000_000).toFixed(0)}M`, color: "var(--accent)" },
    { k: "Total payouts", v: `$${(jitter(12_410_000, 0.001) / 1_000_000).toFixed(2)}M`,  sub: "last 24h",     subV: `$${jitter(48_300, 0.02).toLocaleString()}`,            color: "var(--green)" },
    { k: "Funded traders",v: jitter(5_120, 0.001).toLocaleString(),                       sub: "joined today", subV: `+${jitter(47, 0.12)}`,                                   color: "var(--fg)" },
    { k: "Payouts count", v: jitter(17_800, 0.001).toLocaleString(),                      sub: "last 24h",     subV: `+${jitter(62, 0.1)}`,                                    color: "var(--fg)" },
  ];
  // Mini sparkline, 32 points, gently modulated by tick so it feels alive
  const spark = Array.from({ length: 32 }, (_, i) => {
    const t = i / 31;
    const base = 40 + Math.sin(i * 0.45 + tick * 0.08) * 18 + t * 22;
    return Math.max(8, Math.min(88, base));
  });
  const sparkPath = spark.map((y, i) => `${i === 0 ? "M" : "L"} ${(i / 31) * 100} ${100 - y}`).join(" ");

  return (
    <div style={{
      background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(17,15,22,0.98))",
      border: "1px solid var(--line)",
      borderRadius: 20,
      overflow: "hidden",
      backdropFilter: "blur(12px)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)",
    }}>
      {/* header strip */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px", borderBottom: "1px solid var(--line)",
        background: "rgba(255,255,255,0.015)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 12px var(--green)", animation: "pulse 1.8s ease-in-out infinite" }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg)" }}>HashHedge · live stats</span>
        </div>
        <span style={{ fontSize: 11, color: "var(--fg-dim)", fontFamily: "Akrobat, Onest, sans-serif" }}>UPDATED · {tick % 60}s ago</span>
      </div>

      {/* Eagle mascot zone */}
      <div style={{
        position: "relative",
        padding: "28px 24px 16px",
        background: "radial-gradient(circle at 50% 30%, rgba(252,213,53,0.12), transparent 60%)",
        borderBottom: "1px solid var(--line)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
      }}>
        {/* Eagle placeholder – user will drop brand eagle asset here */}
        <div style={{
          width: 140, height: 140,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
        }}>
          {/* Stylized heraldic placeholder until real eagle asset arrives */}
          <svg viewBox="0 0 140 140" width="140" height="140" style={{ position: "absolute", inset: 0 }}>
            <defs>
              <radialGradient id="eagleGlow" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="70" cy="70" r="60" fill="url(#eagleGlow)" />
            {/* simple eagle silhouette – wings + body, will be replaced by real asset */}
            <g transform="translate(70 72)" fill="var(--accent)" stroke="var(--accent-dark)" strokeWidth="1">
              <path d="M 0 -30 L -6 -18 L -28 -22 L -44 -6 L -22 -2 L -40 10 L -18 10 L -8 20 L 0 26 L 8 20 L 18 10 L 40 10 L 22 -2 L 44 -6 L 28 -22 L 6 -18 Z" />
              <circle cx="0" cy="-22" r="4" fill="#0b0a0e" />
            </g>
          </svg>
          <div style={{
            position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
            fontSize: 9, color: "var(--fg-low)", fontFamily: "Akrobat, Onest, sans-serif",
            letterSpacing: "0.1em", whiteSpace: "nowrap",
          }}>[ brand eagle placeholder ]</div>
        </div>

        {/* Volume mini-sparkline */}
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, marginTop: 8 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 4 }}>Platform volume · 30d</div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: 44 }}>
              <defs>
                <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={sparkPath + " L 100 100 L 0 100 Z"} fill="url(#sparkFill)" />
              <path d={sparkPath} fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" style={{ transition: "d .8s var(--ease)" }} />
            </svg>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: "var(--accent)", fontFamily: "Akrobat, Onest, sans-serif", letterSpacing: "-0.02em", lineHeight: 1 }}>
              {stats[0].v}
            </div>
            <div style={{ fontSize: 11, color: "var(--green)", marginTop: 4 }} className="mono">▲ +12.4% vs prev</div>
          </div>
        </div>
      </div>

      {/* 3 primary metric rows · big + day-over-day */}
      <div style={{ padding: "4px 0" }}>
        {[
          { big: stats[1], accent: "var(--green)" },
          { big: stats[2], accent: "var(--fg)" },
          { big: stats[3], accent: "var(--fg)" },
        ].map((row, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 12, padding: "16px 24px",
            borderTop: i > 0 ? "1px solid var(--line)" : "none",
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--fg-dim)", textTransform: "uppercase" }}>{row.big.k}</div>
              <div style={{ fontSize: 11, color: "var(--fg-low)", marginTop: 3 }}>{row.big.sub}: <span style={{ color: "var(--green)", fontWeight: 700 }} className="mono">{row.big.subV}</span></div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: row.accent, fontFamily: "Akrobat, Onest, sans-serif", letterSpacing: "-0.02em", lineHeight: 1 }}>
                {row.big.v}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div style={{
        padding: "14px 24px", borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(255,255,255,0.015)",
      }}>
        <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>Institutional feed · on-chain verified</span>
        <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em" }}>→ DASHBOARD</span>
      </div>
    </div>
  );
}

// ==== Hero ====
function Hero({ variant = "classic", anim = "medium" }) {
  useRevealOnScroll();
  const showCanvas = variant === "cosmic" || anim === "max";
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 820, display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 120 }}>
      {showCanvas && <HeroCanvas anim={anim} />}
      {/* Readability vignette – darkens canvas behind hero content so text stays legible */}
      {showCanvas && (
        <React.Fragment>
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: variant === "cosmic"
              ? "radial-gradient(ellipse 75% 60% at 50% 50%, rgba(6,6,10,0.88) 0%, rgba(6,6,10,0.68) 42%, rgba(6,6,10,0.15) 72%, rgba(6,6,10,0) 90%)"
              : "linear-gradient(90deg, rgba(6,6,10,0.92) 0%, rgba(6,6,10,0.78) 30%, rgba(6,6,10,0.45) 55%, rgba(6,6,10,0.1) 80%, rgba(6,6,10,0) 100%)",
          }} />
          {/* Extra darkening pool right under the headline so chart ink never fights the type */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: variant === "cosmic"
              ? "radial-gradient(ellipse 50% 35% at 50% 45%, rgba(6,6,10,0.55) 0%, rgba(6,6,10,0) 70%)"
              : "radial-gradient(ellipse 45% 55% at 28% 50%, rgba(6,6,10,0.6) 0%, rgba(6,6,10,0) 70%)",
          }} />
          {/* Subtle top + bottom fade to blend into the page */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            background: "linear-gradient(180deg, rgba(6,6,10,0.55) 0%, rgba(6,6,10,0) 18%, rgba(6,6,10,0) 80%, rgba(6,6,10,0.6) 100%)",
          }} />
        </React.Fragment>
      )}
      <div className="glow" style={{ width: 600, height: 600, background: "var(--accent)", left: "-20%", top: "10%", opacity: .08 }} />
      <div className="glow" style={{ width: 500, height: 500, background: "#4a90e2", right: "-15%", top: "30%", opacity: .05 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: variant === "cosmic" ? "1fr" : "1.1fr 0.9fr", gap: 80, alignItems: "center" }}>
          <div style={{ textAlign: variant === "cosmic" ? "center" : "left", maxWidth: variant === "cosmic" ? 980 : "none", margin: variant === "cosmic" ? "0 auto" : "0" }}>
            <Reveal>
              <span className="eyebrow" style={{ marginBottom: 24 }}>
                <span className="dot" />
                #1 CRYPTO PROP TRADING FIRM · WEB3 NATIVE
              </span>
            </Reveal>
            <Reveal delay="1">
              <h1 className="display" style={{ margin: "20px 0 24px", color: "var(--fg)" }}>
                Trade <span style={{ color: "var(--accent)", position: "relative" }}>
                  crypto capital
                  <svg style={{ position: "absolute", bottom: -8, left: 0, width: "100%", height: 12 }} viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                    <path d="M0,8 Q50,2 100,6 T200,8" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                  </svg>
                </span>.<br />
                Get paid like a pro.
              </h1>
            </Reveal>
            <Reveal delay="2">
              <p style={{ fontSize: 20, lineHeight: 1.45, color: "var(--fg-muted)", maxWidth: 580, margin: variant === "cosmic" ? "0 auto 40px" : "0 0 40px", fontWeight: 400 }}>
                We back skilled crypto traders with up to <span style={{ color: "var(--fg)", fontWeight: 700 }}>$200,000</span> in live capital – no risk to your own funds.
                160+ crypto pairs. Two-phase Hash Hedge Challenge – pass Phases 1 and 2, then trade funded. Leverage 1:5.
              </p>
            </Reveal>
            <Reveal delay="3">
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: variant === "cosmic" ? "center" : "flex-start" }}>
                <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                  Start Challenge · from $79
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="#how" className="btn btn-ghost btn-lg">How it works</a>
              </div>
            </Reveal>
            <Reveal delay="4">
              <div style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 48, flexWrap: "wrap", justifyContent: variant === "cosmic" ? "center" : "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1, 2, 3, 4].map(i => <TPStar key={i} size={18} />)}
                    <TPStar size={18} half />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>4.4 · Trustpilot</div>
                    <div style={{ fontSize: 12, color: "var(--fg-dim)" }}>5,100+ funded traders</div>
                  </div>
                </div>
                <div style={{ height: 32, width: 1, background: "var(--line)" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className="chip green"><span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} /> VERIFIED COMPANY</span>
                </div>
              </div>
            </Reveal>
          </div>

          {variant === "classic" && (
            <Reveal delay="2">
              <LivePayoutsTable />
            </Reveal>
          )}
          {variant === "terminal" && (
            <Reveal delay="2">
              <TradingTerminal />
            </Reveal>
          )}
          {variant === "cosmic" && (
            <Reveal delay="4">
              <CosmicStatsPanel />
            </Reveal>
          )}
        </div>

        {variant !== "cosmic" && (
          <Reveal delay="5">
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 96,
              padding: "32px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
            }}>
              {[
                { v: 17800, suf: "+", l: "Payouts completed", sub: "Fast, seamless, and always on time." },
                { v: 5100, suf: "+", l: "Active funded traders", sub: "Scaling every single month." },
                { v: 160, suf: "+", l: "Crypto pairs", sub: "Spot liquidity across majors + alts." },
                { v: 4.4, suf: "/5", dec: 1, l: "Trustpilot rating", sub: "Based on 79 verified reviews." },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "var(--fg)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                    <Counter to={s.v} prefix={s.pre || ""} suffix={s.suf} decimals={s.dec || 0} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)", marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.l}</div>
                  <div style={{ fontSize: 13, color: "var(--fg-dim)", marginTop: 6 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Hero, HeroCanvas, LivePayoutsTable, TradingTerminal });
