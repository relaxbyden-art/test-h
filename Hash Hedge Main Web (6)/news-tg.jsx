// Hash Hedge – Press / Investing.com banner / Telegram community

function PressStrip() {
  useRevealOnScroll();
  // Press logos as compact wordmarks – on a dark site, white text wordmarks read as "logos" the way FTMO-style sites do it.
  // Real press list taken from the Hash Hedge Figma (New-landing press strip).
  // 8 outlets in this exact order: AP · Yahoo Finance · MarketWatch · Benzinga · Cointelegraph · Bitcoin.com · BeInCrypto · Investing.com.
  const press = [
    { name: "Associated Press", w: "ASSOCIATED PRESS", url: "https://apnews.com/press-release/globenewswire-mobile/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-5c993de719de65a8308e000bf7f6e5be", style: { fontFamily: "Akrobat, Onest, sans-serif", fontWeight: 700, letterSpacing: "0.02em", fontSize: 16 } },
    { name: "Yahoo Finance",    w: "yahoo!finance",    url: "https://markets.businessinsider.com/news/stocks/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-1035197550", style: { fontFamily: "Onest, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: 20 } },
    { name: "MarketWatch",      w: "MarketWatch",      url: "https://www.marketwatch.com/press-release/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-ae085ab9?mod=search_headline", style: { fontFamily: "Onest, sans-serif", fontWeight: 800, letterSpacing: "-0.01em", fontSize: 19 } },
    { name: "Benzinga",         w: "Benzinga",         url: "https://www.investing.com/news/press-releases/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-4253896", style: { fontFamily: "Onest, sans-serif", fontWeight: 800, letterSpacing: "-0.01em", fontSize: 21 } },
    { name: "Cointelegraph",    w: "Cointelegraph",    url: "https://cointelegraph.com/press-releases/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai", style: { fontFamily: "Onest, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: 20 } },
    { name: "Bitcoin.com",      w: "Bitcoin.com",      url: "https://news.bitcoin.com/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai/", style: { fontFamily: "'Open Sans', Onest, sans-serif", fontWeight: 700, letterSpacing: "-0.04em", fontSize: 20 } },
    { name: "BeInCrypto",       w: "BeInCrypto",       url: "https://beincrypto.com/hash-hedge-walbi-launch-wsct/", style: { fontFamily: "Onest, sans-serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: 19 } },
    { name: "Investing.com",    w: "Investing.com",    url: "https://www.investing.com/news/press-releases/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-4253896", style: { fontFamily: "Onest, sans-serif", fontWeight: 700, letterSpacing: "-0.01em", fontSize: 19 } },
  ];
  return (
    <section id="press" style={{ padding: "56px 0 56px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
      <div className="container">
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 36 }}>
            <div style={{ flex: 1, height: 1, background: "var(--line)" }} />
            <span className="eyebrow" style={{ margin: 0 }}>
              <span className="dot" />AS FEATURED IN
            </span>
            <div style={{ flex: 1, height: 1, background: "var(--line)" }} />
          </div>
        </Reveal>
        <Reveal delay="1">
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 12,
            alignItems: "center",
          }}>
            {press.map((p, i) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{
                height: 64, display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--fg-muted)", opacity: 0.85,
                borderLeft: i === 0 ? "none" : "1px solid var(--line)",
                transition: "opacity .2s, color .2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = "var(--fg)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0.85; e.currentTarget.style.color = "var(--fg-muted)"; }}
              >
                <span style={{ ...p.style, whiteSpace: "nowrap" }}>{p.w}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EventsTournaments() {
  useRevealOnScroll();
  // Real Hash Hedge team in the wild – photos provided directly by the team.
  // Featured = WSCT Qualifying Tour winner moment, São Paulo Brazil (the actual winner-with-prize shot).
  // Featured = the Dubai Main Stage moment – the biggest, most cinematic shot.
  const featured = {
    city: "São Paulo",
    flag: "🇧🇷",
    event: "WSCT Qualifying Tour · Brazil",
    role: "Organizer · Winner Ceremony",
    date: "2025",
    stat: { v: "$10K+", l: "prize pool" },
    blurb: "Hash Hedge crowning the WSCT Qualifying Tour Brazil winner – one of the four live qualifiers we ran across LATAM last year.",
    img: "assets/team/event-headliner-yarik.webp",
  };
  const events = [
    { city: "Dubai",     flag: "🇦🇪", event: "WSCT Main Stage · Global Finals",           role: "Host",      date: "Oct 2025", img: "assets/team/event-bcl-dubai-stage.webp" },
    { city: "São Paulo", flag: "🇧🇷", event: "Brand Ambassador on Main Stage",            role: "Sponsor",   date: "2025",     img: "assets/team/event-wsct-booth.jpg" },
    { city: "Dubai",     flag: "🇦🇪", event: "WSCT Dubai · Live Trading Floor",          role: "Host",      date: "Oct 2025", img: "assets/team/event-afterparty.jpg" },
    { city: "Moscow",    flag: "🇷🇺", event: "Affiliates Meet-up",                       role: "Host",      date: "2026",     img: "assets/team/event-qualifier-winner.jpg" },
    { city: "São Paulo", flag: "🇧🇷", event: "Live Trading Showcase · WSCT Brazil",      role: "Organizer", date: "2025",     img: "assets/team/event-booth-screens.webp" },
    { city: "Moscow",    flag: "🇷🇺", event: "Top Affiliate Awards 2026",                 role: "Host",      date: "2026",     img: "assets/team/awards-top-affiliate.jpg" },
  ];
  return (
    <section style={{ padding: "100px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* soft top wash so the YouTube section above doesn't end on a hard edge */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 320,
        background: "linear-gradient(180deg, rgba(252,213,53,0.025) 0%, transparent 80%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="container">
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 40, flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow"><span className="dot" />THE TEAM · IN THE WILD</span>
              <h2 className="h1" style={{ margin: "20px 0 0", maxWidth: 760, letterSpacing: "-0.025em" }}>
                We show up. <span style={{ color: "var(--accent)" }}>Everywhere it matters.</span>
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--fg-muted)", maxWidth: 380, margin: 0 }}>
              Dubai. São Paulo. Moscow. From main-stage keynotes to live-trading booths and top-affiliate awards – this is the Hash Hedge team on the ground.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 24, marginBottom: 24 }}>
          {/* Featured – big card */}
          <Reveal delay="1">
            <div style={{
              position: "relative", borderRadius: 28, overflow: "hidden",
              border: "1px solid var(--line-strong)", minHeight: 460,
              background: "linear-gradient(160deg, #1a1410 0%, #0e0e12 100%)",
              boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)",
            }}>
              {/* Real photo */}
              <img
                src={featured.img}
                alt={featured.event}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* darken bottom for text legibility */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 100%)",
              }} />
              {/* top chip */}
              <div style={{ position: "absolute", top: 24, left: 24, display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                  color: "var(--accent)", background: "rgba(252,213,53,0.14)",
                  padding: "6px 10px", borderRadius: 999,
                }}>PAST EVENT</span>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "var(--fg-dim)", padding: "6px 10px", borderRadius: 999, border: "1px solid var(--line-strong)", background: "rgba(14,14,16,0.6)", backdropFilter: "blur(6px)" }}>
                  {featured.date.toUpperCase()}
                </span>
              </div>
              {/* stat badge */}
              <div style={{
                position: "absolute", top: 24, right: 24,
                padding: "16px 20px", borderRadius: 16,
                background: "rgba(14,14,16,0.75)", backdropFilter: "blur(10px)",
                border: "1px solid var(--line-strong)", textAlign: "right",
              }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.02em", fontFamily: "Akrobat, Onest, sans-serif", lineHeight: 1 }}>{featured.stat.v}</div>
                <div style={{ fontSize: 11, color: "var(--fg-dim)", marginTop: 4 }}>{featured.stat.l}</div>
              </div>
              {/* bottom content */}
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 32, background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.95) 100%)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontSize: 13, color: "var(--fg-muted)" }}>
                  <span style={{ fontSize: 20 }}>{featured.flag}</span>
                  <span style={{ fontWeight: 700, color: "var(--fg)" }}>{featured.city}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--fg-dim)" }} />
                  <span>{featured.role}</span>
                </div>
                <h3 style={{ fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 14px", color: "var(--fg)", letterSpacing: "-0.02em" }}>
                  {featured.event}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0, maxWidth: 560 }}>{featured.blurb}</p>
              </div>
            </div>
          </Reveal>

          {/* Right – 2×2 small events */}
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 24 }}>
            {events.slice(0, 2).map((e, i) => (
              <Reveal key={e.event} delay={String(2 + i)}>
                <EventCard e={e} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom 4 events row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {events.slice(2).map((e, i) => (
            <Reveal key={e.event} delay={String(4 + i)}>
              <EventCard e={e} compact />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function EventCard({ e, compact, tall }) {
  return (
    <div style={{
      position: "relative", height: "100%", minHeight: tall ? 460 : (compact ? 240 : 218),
      borderRadius: 20, overflow: "hidden",
      border: "1px solid var(--line-strong)",
      background: "#0c0c10",
    }}>
      <img
        src={e.img}
        alt={e.event}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform .6s ease" }}
        onMouseEnter={ev => { ev.currentTarget.style.transform = "scale(1.04)"; }}
        onMouseLeave={ev => { ev.currentTarget.style.transform = "scale(1)"; }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "absolute", top: 16, left: 16, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 18 }}>{e.flag}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>{e.city}</span>
      </div>
      <div style={{
        position: "absolute", top: 16, right: 16,
        fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
        color: "#fff", padding: "4px 8px", borderRadius: 999,
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}>{e.date.toUpperCase()}</div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: tall ? 28 : 20, pointerEvents: "none" }}>
        <div style={{ fontSize: tall ? 12 : 11, color: "var(--accent)", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: tall ? 10 : 6, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>{e.role}</div>
        <div style={{ fontSize: tall ? 26 : (compact ? 16 : 18), fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, textShadow: "0 1px 4px rgba(0,0,0,0.8)", maxWidth: tall ? 420 : "none" }}>
          {e.event}
        </div>
      </div>
    </div>
  );
}

// Live trading showcase – replaces the static featured event card.
// A fake-but-plausible BTC/USDT terminal: price ticker, mini candlestick chart,
// order book depth ladder, and a rolling trades feed. Everything ticks live.
function LiveTradingShowcase() {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 900);
    return () => clearInterval(id);
  }, []);

  // Price oscillates with small jitter. Base around $67,420.
  const basePrice = 67420;
  const price = basePrice + Math.sin(tick * 0.35) * 180 + Math.sin(tick * 1.3) * 45 + (Math.random() - 0.5) * 20;
  const change = ((price - basePrice) / basePrice) * 100;
  const isUp = change >= 0;

  // 40 candles – stable seeded noise so chart doesn't reshuffle per tick, last few shift in.
  const candles = React.useMemo(() => {
    const arr = [];
    let p = basePrice - 400;
    for (let i = 0; i < 40; i++) {
      const drift = Math.sin(i * 0.25) * 220 + Math.sin(i * 0.7) * 80 + (i - 20) * 18;
      const open = p;
      const close = basePrice + drift + (i > 35 ? (i - 35) * 20 : 0);
      const hi = Math.max(open, close) + Math.abs(Math.sin(i * 1.1)) * 60;
      const lo = Math.min(open, close) - Math.abs(Math.cos(i * 0.9)) * 55;
      arr.push({ open, close, hi, lo });
      p = close;
    }
    return arr;
  }, []);
  // Last candle breathes with tick
  const liveCandle = {
    open: candles[candles.length - 1].close,
    close: price,
    hi: Math.max(candles[candles.length - 1].close, price) + 18,
    lo: Math.min(candles[candles.length - 1].close, price) - 12,
  };
  const displayCandles = [...candles.slice(0, -1), liveCandle];

  // Chart bounds
  const allVals = displayCandles.flatMap(c => [c.hi, c.lo]);
  const minV = Math.min(...allVals);
  const maxV = Math.max(...allVals);
  const rng = maxV - minV || 1;
  const chartW = 640, chartH = 210;
  const candleW = (chartW - 20) / displayCandles.length;

  // Order book
  const book = React.useMemo(() => {
    const asks = [], bids = [];
    for (let i = 0; i < 7; i++) {
      asks.push({ p: price + (i + 1) * 3.5 + Math.sin(tick + i) * 0.4, q: 0.08 + Math.abs(Math.sin(tick * 0.4 + i * 1.3)) * 1.4 });
      bids.push({ p: price - (i + 1) * 3.5 - Math.sin(tick + i) * 0.4, q: 0.08 + Math.abs(Math.cos(tick * 0.4 + i * 1.3)) * 1.4 });
    }
    return { asks: asks.reverse(), bids };
  }, [tick]);
  const maxQ = Math.max(...book.asks.map(r => r.q), ...book.bids.map(r => r.q));

  // Rolling trades feed
  const tradesRef = React.useRef([]);
  if (tradesRef.current.length < 7 || tick !== tradesRef.current[0].t) {
    const side = Math.random() > 0.45 ? "buy" : "sell";
    const qty = (0.05 + Math.random() * 0.9).toFixed(3);
    const p = (price + (side === "buy" ? 1 : -1) * Math.random() * 4).toFixed(2);
    tradesRef.current = [{ t: tick, side, qty, p }, ...tradesRef.current].slice(0, 7);
  }
  const trades = tradesRef.current;

  return (
    <div style={{
      position: "relative", borderRadius: 28, overflow: "hidden",
      border: "1px solid var(--line-strong)", minHeight: 460, height: "100%",
      background: "linear-gradient(160deg, #0f0f14 0%, #0a0a0e 100%)",
      boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)",
      display: "flex", flexDirection: "column",
    }}>
      {/* top bar – exchange-style header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 24px", borderBottom: "1px solid var(--line)",
        background: "rgba(255,255,255,0.02)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 34, height: 34, borderRadius: "50%",
            background: "linear-gradient(135deg, #F7931A, #b86800)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 800, color: "#fff",
            boxShadow: "0 0 16px rgba(247,147,26,0.4)",
          }}>₿</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.01em" }}>BTC<span style={{ color: "var(--fg-dim)" }}>/USDT</span></div>
            <div style={{ fontSize: 10, color: "var(--fg-dim)", fontWeight: 600, marginTop: 1, letterSpacing: "0.06em" }}>SPOT · PERPETUAL</div>
          </div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "5px 10px", borderRadius: 999,
          background: "rgba(124,216,160,0.12)", border: "1px solid rgba(124,216,160,0.25)",
          fontSize: 10, fontWeight: 800, color: "var(--green)", letterSpacing: "0.12em",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "why-pulse 1.4s ease-in-out infinite", boxShadow: "0 0 6px var(--green)" }} />
          LIVE TRADING
        </div>
      </div>

      {/* Price headline */}
      <div style={{ padding: "20px 24px 14px", display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
        <div style={{
          fontSize: 44, fontWeight: 800, color: isUp ? "var(--green)" : "#ff6b6b",
          letterSpacing: "-0.025em", fontVariantNumeric: "tabular-nums",
          transition: "color 0.5s",
          fontFamily: "Akrobat, Onest, sans-serif", lineHeight: 1,
        }}>
          ${price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
        </div>
        <div style={{
          fontSize: 13, fontWeight: 700, color: isUp ? "var(--green)" : "#ff6b6b",
          padding: "4px 9px", borderRadius: 6,
          background: isUp ? "rgba(124,216,160,0.14)" : "rgba(255,107,107,0.14)",
          border: `1px solid ${isUp ? "rgba(124,216,160,0.25)" : "rgba(255,107,107,0.25)"}`,
          fontVariantNumeric: "tabular-nums",
        }}>
          {isUp ? "▲" : "▼"} {isUp ? "+" : ""}{change.toFixed(2)}%
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 18, fontSize: 11 }}>
          <div>
            <div style={{ color: "var(--fg-dim)", letterSpacing: "0.06em" }}>24H HIGH</div>
            <div style={{ color: "var(--fg)", fontWeight: 700, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>${(basePrice + 420).toLocaleString()}</div>
          </div>
          <div>
            <div style={{ color: "var(--fg-dim)", letterSpacing: "0.06em" }}>24H LOW</div>
            <div style={{ color: "var(--fg)", fontWeight: 700, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>${(basePrice - 380).toLocaleString()}</div>
          </div>
          <div>
            <div style={{ color: "var(--fg-dim)", letterSpacing: "0.06em" }}>24H VOL</div>
            <div style={{ color: "var(--fg)", fontWeight: 700, fontVariantNumeric: "tabular-nums", marginTop: 2 }}>$1.84B</div>
          </div>
        </div>
      </div>

      {/* Main – chart + sidebar */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 180px", gap: 0, minHeight: 0 }}>
        {/* Candlestick chart */}
        <div style={{ padding: "6px 4px 10px 20px", position: "relative" }}>
          <svg viewBox={`0 0 ${chartW} ${chartH}`} width="100%" height="100%" preserveAspectRatio="none" style={{ display: "block" }}>
            <defs>
              <linearGradient id="chart-bg-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isUp ? "#7CD8A0" : "#ff6b6b"} stopOpacity="0.08" />
                <stop offset="100%" stopColor={isUp ? "#7CD8A0" : "#ff6b6b"} stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* horizontal grid */}
            {[0, 1, 2, 3, 4].map(i => {
              const y = (i / 4) * chartH;
              return <line key={i} x1="0" y1={y} x2={chartW} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="2 3" />;
            })}
            {/* price area fill under line */}
            {(() => {
              const pts = displayCandles.map((c, i) => {
                const x = 10 + i * candleW + candleW / 2;
                const y = chartH - ((c.close - minV) / rng) * (chartH - 20) - 10;
                return [x, y];
              });
              const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
              const area = `${line} L${pts[pts.length-1][0]},${chartH} L${pts[0][0]},${chartH} Z`;
              return <path d={area} fill="url(#chart-bg-grad)" />;
            })()}
            {/* candles */}
            {displayCandles.map((c, i) => {
              const x = 10 + i * candleW + candleW / 2;
              const yHi = chartH - ((c.hi - minV) / rng) * (chartH - 20) - 10;
              const yLo = chartH - ((c.lo - minV) / rng) * (chartH - 20) - 10;
              const yO = chartH - ((c.open - minV) / rng) * (chartH - 20) - 10;
              const yC = chartH - ((c.close - minV) / rng) * (chartH - 20) - 10;
              const green = c.close >= c.open;
              const color = green ? "#7CD8A0" : "#ff6b6b";
              const bodyTop = Math.min(yO, yC);
              const bodyH = Math.max(1.5, Math.abs(yC - yO));
              const w = Math.max(2, candleW * 0.62);
              return (
                <g key={i}>
                  <line x1={x} y1={yHi} x2={x} y2={yLo} stroke={color} strokeWidth="1" opacity="0.7" />
                  <rect x={x - w/2} y={bodyTop} width={w} height={bodyH} fill={color} opacity={i === displayCandles.length - 1 ? 1 : 0.9} />
                </g>
              );
            })}
            {/* last price horizontal line */}
            {(() => {
              const y = chartH - ((price - minV) / rng) * (chartH - 20) - 10;
              return (
                <g>
                  <line x1="0" y1={y} x2={chartW} y2={y} stroke={isUp ? "#7CD8A0" : "#ff6b6b"} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                  <rect x={chartW - 68} y={y - 9} width="64" height="18" rx="3" fill={isUp ? "#7CD8A0" : "#ff6b6b"} />
                  <text x={chartW - 36} y={y + 4} fill="#0a0a0e" fontSize="10" fontWeight="800" textAnchor="middle" fontFamily="Akrobat, monospace">
                    {price.toFixed(0)}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Order book */}
        <div style={{
          borderLeft: "1px solid var(--line)",
          padding: "6px 14px 10px", display: "flex", flexDirection: "column",
          fontSize: 10, fontFamily: "Akrobat, Onest, monospace", fontVariantNumeric: "tabular-nums",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--fg-dim)", fontWeight: 700, letterSpacing: "0.08em", padding: "3px 0", borderBottom: "1px solid var(--line)" }}>
            <span>PRICE</span>
            <span>SIZE</span>
          </div>
          {/* Asks */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1, padding: "4px 0" }}>
            {book.asks.map((r, i) => (
              <div key={`a-${i}`} style={{
                position: "relative", display: "flex", justifyContent: "space-between",
                padding: "1px 4px", fontWeight: 700,
              }}>
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: `${(r.q / maxQ) * 100}%`, background: "rgba(255,107,107,0.12)" }} />
                <span style={{ color: "#ff6b6b", position: "relative" }}>{r.p.toFixed(2)}</span>
                <span style={{ color: "var(--fg-muted)", position: "relative" }}>{r.q.toFixed(3)}</span>
              </div>
            ))}
          </div>
          {/* spread */}
          <div style={{
            textAlign: "center", padding: "3px 0",
            fontSize: 11, fontWeight: 800, color: isUp ? "var(--green)" : "#ff6b6b",
            borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
          }}>
            {price.toFixed(2)} <span style={{ fontSize: 8, color: "var(--fg-dim)", fontWeight: 600 }}>↕ 3.50</span>
          </div>
          {/* Bids */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1, padding: "4px 0" }}>
            {book.bids.map((r, i) => (
              <div key={`b-${i}`} style={{
                position: "relative", display: "flex", justifyContent: "space-between",
                padding: "1px 4px", fontWeight: 700,
              }}>
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: `${(r.q / maxQ) * 100}%`, background: "rgba(124,216,160,0.12)" }} />
                <span style={{ color: "var(--green)", position: "relative" }}>{r.p.toFixed(2)}</span>
                <span style={{ color: "var(--fg-muted)", position: "relative" }}>{r.q.toFixed(3)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rolling trades */}
      <div style={{
        borderTop: "1px solid var(--line)",
        padding: "10px 24px 16px",
        background: "rgba(255,255,255,0.015)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 10, color: "var(--fg-dim)", fontWeight: 800, letterSpacing: "0.12em" }}>RECENT TRADES</span>
          <span style={{ fontSize: 10, color: "var(--fg-dim)" }}>real-time feed</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
          {trades.map((t, i) => (
            <div key={`${t.t}-${i}`} style={{
              padding: "6px 8px", borderRadius: 6,
              background: t.side === "buy" ? "rgba(124,216,160,0.08)" : "rgba(255,107,107,0.08)",
              border: `1px solid ${t.side === "buy" ? "rgba(124,216,160,0.2)" : "rgba(255,107,107,0.2)"}`,
              opacity: 1 - i * 0.09,
              fontFamily: "Akrobat, Onest, monospace", fontVariantNumeric: "tabular-nums",
            }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: t.side === "buy" ? "var(--green)" : "#ff6b6b", letterSpacing: "0.05em" }}>
                {t.side === "buy" ? "BUY" : "SELL"}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--fg)", marginTop: 2 }}>{t.qty}</div>
              <div style={{ fontSize: 9, color: "var(--fg-dim)", marginTop: 1 }}>@{parseFloat(t.p).toLocaleString("en-US", {maximumFractionDigits: 0})}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Legacy export kept as alias for index.html backwards-compat
function InvestingBanner() {
  return <EventsTournaments />;
}

function TelegramCommunity() {
  useRevealOnScroll();
  // Fake-but-plausible Telegram messages – the vibe is a real trader community channel, not a marketing feed.
  // Mixed content: payout screenshots, Q&A, setup sharing, moderator announcements.
  const msgs = [
    {
      type: "mod", handle: "HashHedge | Max", role: "Admin", time: "14:02",
      body: "Heads up – we just raised the BTC/USDT max position by 15% for all funded $50k+ accounts. FOMC week is noisier than usual. Be disciplined with size.",
      reacts: [{ e: "👍", n: 127 }, { e: "🔥", n: 43 }],
    },
    {
      type: "user", handle: "@ryansull", country: "🇺🇸", time: "14:04",
      body: "Just got paid $2,707 💸 72h on the dot. Third payout this quarter. This firm is the real deal.",
      reacts: [{ e: "🎉", n: 89 }, { e: "💰", n: 54 }, { e: "❤️", n: 22 }],
      hasImage: true, imageLabel: "payout-certificate.png",
    },
    {
      type: "user", handle: "@sofia_g", country: "🇧🇷", time: "14:07",
      body: "question for the group: anyone running SOL longs against BTC shorts during CPI weeks? interested in what sizing you're using",
      reacts: [{ e: "🤔", n: 12 }],
    },
    {
      type: "user", handle: "@dmitri_v", country: "🇦🇪", time: "14:09",
      body: "@sofia_g yes – I run ~0.5 beta-weighted SOL against a 1x BTC spot short. Cuts variance roughly in half without killing upside.",
      reacts: [{ e: "💡", n: 31 }, { e: "👆", n: 8 }],
    },
    {
      type: "mod", handle: "HashHedge | Kate", role: "Community", time: "14:15",
      body: "New weekly recap just dropped in #education – breakdown of top 20 funded-trader strategies from last month. Worth a read.",
      reacts: [{ e: "📚", n: 67 }, { e: "🔥", n: 24 }],
    },
  ];
  return (
    <section id="telegram" data-mobile-image-first style={{ padding: "100px 0", background: "var(--bg-elev)", position: "relative", overflow: "hidden" }}>
      {/* soft fades so adjacent sections (Reviews above = bg-elev, FAQ below = bg) bleed in cleanly instead of hard-cutting */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(180deg, var(--bg) 0%, rgba(17,17,23,0.6) 40%, transparent 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />
      {/* Telegram-blue glow */}
      <div className="glow" style={{ width: 600, height: 600, background: "#2AABEE", left: "-10%", top: "30%", opacity: 0.07 }} />
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
          {/* Left: copy */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="dot" style={{ background: "#2AABEE", boxShadow: "0 0 12px #2AABEE" }} />
                TELEGRAM COMMUNITY
              </span>
            </Reveal>
            <Reveal delay="1">
              <h2 className="h1" style={{ margin: "20px 0 24px" }}>
                Where funded traders<br />
                <span style={{ color: "#2AABEE" }}>actually hang out.</span>
              </h2>
            </Reveal>
            <Reveal delay="2">
              <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--fg-muted)", margin: "0 0 32px" }}>
                Not a broadcast channel, not a drip-marketing list. A real group chat where our funded traders share setups,
                post payouts, ask dumb questions, and get direct access to our risk team.
              </p>
            </Reveal>

            <Reveal delay="3">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 36 }}>
                {[
                  { n: "651",     l: "members" },
                  { n: "40–60",   l: "messages / day" },
                  { n: "< 2 min", l: "avg. admin reply" },
                  { n: "24/7",    l: "coverage" },
                ].map(s => (
                  <div key={s.l} style={{ padding: "16px 20px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 12 }}>
                    <div style={{ fontFamily: "'Akrobat', sans-serif", fontSize: 30, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 13, color: "var(--fg-dim)", marginTop: 6 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay="4">
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="https://t.me/hhcomunity" target="_blank" rel="noopener" className="btn btn-lg" style={{
                  background: "#2AABEE", color: "#fff", border: "1px solid #2AABEE",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.17-.04-.24-.02-.1.02-1.72 1.09-4.85 3.2-.46.31-.88.47-1.25.46-.41-.01-1.2-.23-1.78-.42-.72-.23-1.29-.35-1.24-.74.02-.2.3-.41.82-.62 3.23-1.41 5.38-2.34 6.46-2.79 3.07-1.28 3.71-1.5 4.13-1.51.09 0 .3.02.44.13.11.09.14.21.16.3-.01.06.01.24 0 .37z"/>
                  </svg>
                  Join the community
                </a>
              </div>
            </Reveal>

            <Reveal delay="5">
              <p style={{ fontSize: 13, color: "var(--fg-low)", marginTop: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2bd36a", boxShadow: "0 0 10px #2bd36a" }} />
                <span style={{ fontFamily: "Akrobat, Onest, sans-serif" }}>t.me/hhcomunity</span>
                <span style={{ color: "var(--fg-dim)" }}>· free to join, verified traders only</span>
              </p>
            </Reveal>
          </div>

          {/* Right: Telegram community channel-list mock – matches the real Hash Hedge Community on TG (651 members / 182 online, channel list with pinned topics). */}
          <Reveal delay="2">
            <TelegramChannelList />
          </Reveal>
              {/* Chat header */}
        </div>
      </div>
    </section>
  );
}

// Telegram community channel-list – matches the real Hash Hedge Community screenshot:
// header "Hash Hedge Community · 651 members, 182 online", search bar, pinned topic list
// with emoji icons (# Welcome, 🔗 Links, 🔔 Announcements EN, 📢 Анонсы RU, 💰 Payout Wall,
// 💬 Чат RU, 📊 Торговля RU, 💬 Chat EN, 📈 Trading EN).
function TelegramChannelList() {
  const channels = [
    { ic: "#",    icBg: "transparent", title: "Welcome | Добро пожаловать", sender: "CAPTCHA",     preview: "Hey Daniyar! Welcome to the Hash Hedge comm…", time: "15:32", pinned: true },
    { ic: "🔗",   icBg: "transparent", title: "Links | Ссылки",              sender: "",            preview: "🔗 General | Основное Website | Сайт Support |…", time: "02/04", pinned: true },
    { ic: "🔔",   icBg: "transparent", title: "Announcements | EN",          sender: "",            preview: "FLASH SALE: 62 out of 200 vouchers rema…", time: "Wed",   pinned: true, badge: true },
    { ic: "📢",   icBg: "transparent", title: "Анонсы | RU",                 sender: "",            preview: "Новый актив добавлен на платформу",       time: "Thu",   pinned: true, italic: true },
    { ic: "💰",   icBg: "transparent", title: "Payout Wall | Стена выплат",  sender: "",            preview: "Photo",                                        time: "16/04", pinned: true, isPhoto: true },
    { ic: "💬",   icBg: "transparent", title: "Чат | RU",                    sender: "Pavel Sokolov", preview: "12 градусов, а у вас?",                      time: "14:10" },
    { ic: "📊",   icBg: "transparent", title: "Торговля | RU",               sender: "Dmitry",      preview: "Photo",                                        time: "13:06", isPhoto: true },
    { ic: "💬",   icBg: "transparent", title: "Chat | EN",                   sender: "Denis S.",    preview: "Colleagues, the flash sale closes in 4 hours, at 23:…", time: "Wed" },
    { ic: "📈",   icBg: "transparent", title: "Trading | EN",                sender: "Denis S.",    preview: "Bitcoin's already at $78,140 we hitting $80K or wh…", time: "Wed" },
  ];

  // Live-feed: cycle through fake incoming events to make the frame feel alive.
  // Each event targets a specific channel by index, flashes it for a few seconds,
  // optionally shows a typing indicator or temporarily overrides preview/sender/time/unread.
  const events = React.useMemo(() => [
    { idx: 5, sender: "Max · São Paulo 🇧🇷",  preview: "just passed Stage 2 in 6 days 🔥",    time: "now", unread: 3, typing: false },
    { idx: 8, sender: "Sophie · London",       preview: "BTC reclaimed 78.5k, longs still live", time: "now", unread: 1, typing: false },
    { idx: 6, sender: "Dmitry",                preview: "typing…",                             time: "now", unread: 0, typing: true },
    { idx: 4, sender: "",                      preview: "+$8,320 payout confirmed · 🇩🇪",      time: "now", unread: 1, typing: false, isPhoto: false },
    { idx: 7, sender: "Marcus · NYC",          preview: "anyone else seeing NG spike?",         time: "now", unread: 2, typing: false },
    { idx: 3, sender: "",                      preview: "Новый турнир: призовой фонд $50K",    time: "now", unread: 1, typing: false, italic: false },
    { idx: 5, sender: "Pavel Sokolov",         preview: "typing…",                             time: "now", unread: 0, typing: true },
  ], []);
  const [evIdx, setEvIdx] = React.useState(0);
  const [active, setActive] = React.useState(true);
  React.useEffect(() => {
    // flash on for 2.6s, off for 0.8s, then advance to next event
    let alive = true;
    let t1, t2;
    const cycle = () => {
      if (!alive) return;
      setActive(true);
      t1 = setTimeout(() => {
        if (!alive) return;
        setActive(false);
        t2 = setTimeout(() => {
          if (!alive) return;
          setEvIdx(i => (i + 1) % events.length);
          cycle();
        }, 800);
      }, 2600);
    };
    cycle();
    return () => { alive = false; clearTimeout(t1); clearTimeout(t2); };
  }, [events.length]);
  const currentEv = active ? events[evIdx] : null;

  const frameBg = "#000";
  const panelBg = "#0E0E0E";
  const rowBorder = "rgba(255,255,255,0.06)";
  const textMuted = "#8E8E93";
  const textDim = "#636366";

  return (
    <div style={{
      background: frameBg,
      borderRadius: 28,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02) inset",
      fontFamily: "Onest, -apple-system, 'SF Pro Text', sans-serif",
      maxWidth: 460,
      margin: "0 auto",
    }}>
      {/* iOS status bar */}
      <div style={{
        height: 44, padding: "0 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 15, fontWeight: 600, color: "#fff",
      }}>
        <span>16:48 <span style={{ opacity: 0.55, marginLeft: 4 }}>🔕</span></span>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {/* signal dots */}
          <svg width="18" height="11" viewBox="0 0 18 11" fill="#fff"><rect x="0" y="6" width="3" height="5" rx="0.5"/><rect x="5" y="3" width="3" height="8" rx="0.5" opacity="0.35"/><rect x="10" y="1" width="3" height="10" rx="0.5" opacity="0.35"/></svg>
          {/* wifi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#fff"><path d="M8 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 6a4 4 0 013.5 2.05l1.4-1.4A6 6 0 008 4.5 6 6 0 003.1 6.65l1.4 1.4A4 4 0 018 6zm0-3.5a7.5 7.5 0 016.45 3.75l1.4-1.4A9.5 9.5 0 008 0 9.5 9.5 0 00.15 4.85l1.4 1.4A7.5 7.5 0 018 2.5z"/></svg>
          {/* battery */}
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="#fff" opacity="0.5"/><rect x="2" y="2" width="13" height="8" rx="1.3" fill="#fff"/><rect x="23" y="4" width="2" height="4" rx="0.6" fill="#fff" opacity="0.5"/></svg>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: "6px 20px 12px", position: "relative" }}>
        <div style={{ fontSize: 13, color: "#6AB3F3", marginBottom: 10 }}>◀ Files</div>
        <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 40px", alignItems: "center", gap: 12 }}>
          <button style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.14)", background: "transparent", color: "#fff", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>Hash Hedge Community</div>
            <div style={{ fontSize: 13, color: textMuted, marginTop: 2 }}>651 members, 182 online</div>
          </div>
          <button style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.14)", background: "transparent", color: "#fff", fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>⋯</button>
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: "0 16px 12px" }}>
        <div style={{
          background: "rgba(120,120,128,0.24)", borderRadius: 10,
          padding: "8px 12px", display: "flex", alignItems: "center", gap: 8,
          color: textMuted, fontSize: 15,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={textMuted} strokeWidth="2"/><path d="m20 20-3-3" stroke={textMuted} strokeWidth="2" strokeLinecap="round"/></svg>
          <span>Search</span>
        </div>
      </div>

      {/* Channel list */}
      <div style={{ background: panelBg }}>
        {channels.map((c, i) => {
          const live = currentEv && currentEv.idx === i;
          const sender = live && currentEv.sender !== undefined ? currentEv.sender : c.sender;
          const preview = live ? currentEv.preview : c.preview;
          const time = live ? currentEv.time : c.time;
          const italic = live ? !!currentEv.italic : !!c.italic;
          const showPhoto = live ? !!currentEv.isPhoto : !!c.isPhoto;
          const unread = live ? (currentEv.unread || 0) : 0;
          const typing = live && currentEv.typing;
          return (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "44px 1fr auto", gap: 12, alignItems: "center",
            padding: "10px 16px 10px 14px",
            borderTop: i === 0 ? "none" : `0.5px solid ${rowBorder}`,
            background: live ? "rgba(106,179,243,0.10)" : "transparent",
            transition: "background .6s ease",
            position: "relative",
          }}>
            {live && (
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                background: "#6AB3F3", boxShadow: "0 0 8px #6AB3F3",
              }} />
            )}
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22,
              background: "rgba(255,255,255,0.04)",
            }}>{c.ic}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 2 }}>{c.title}</div>
              {sender && (
                <div style={{ fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 1 }}>{sender}</div>
              )}
              <div style={{
                fontSize: 13, color: typing ? "#6AB3F3" : textMuted,
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                fontStyle: italic ? "italic" : "normal",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                {showPhoto && (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke={textMuted} strokeWidth="2"/><circle cx="8.5" cy="10.5" r="1.5" fill={textMuted}/><path d="m21 16-5-5L5 21" stroke={textMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Photo</span>
                  </>
                )}
                {!showPhoto && typing && (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                    <span className="tg-typing-dot" style={{ animationDelay: "0s" }} />
                    <span className="tg-typing-dot" style={{ animationDelay: "0.15s" }} />
                    <span className="tg-typing-dot" style={{ animationDelay: "0.30s" }} />
                    <span style={{ marginLeft: 4 }}>typing</span>
                  </span>
                )}
                {!showPhoto && !typing && <span>{preview}</span>}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, alignSelf: "flex-start", paddingTop: 4 }}>
              <div style={{ fontSize: 12, color: live ? "#6AB3F3" : textDim, display: "flex", alignItems: "center", gap: 4, fontWeight: live ? 700 : 400 }}>
                {c.pinned && !live && <svg width="10" height="12" viewBox="0 0 10 12" fill={textDim}><path d="M3 0h4v3h1l1 3v1H1V6l1-3h1z"/><rect x="4.5" y="6" width="1" height="6"/></svg>}
                <span>{time}</span>
              </div>
              {unread > 0 && (
                <div style={{
                  minWidth: 22, height: 22, padding: "0 7px", borderRadius: 999,
                  background: "#6AB3F3", color: "#000", fontSize: 12, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Onest, sans-serif",
                  boxShadow: "0 0 10px rgba(106,179,243,0.5)",
                }}>{unread}</div>
              )}
              {unread === 0 && c.pinned && !c.badge && !live && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.55 }}><path d="M12 2l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5z" fill={textDim}/></svg>
              )}
            </div>
          </div>
        );})}
      </div>

      <div style={{ height: 24, background: panelBg }} />
      <style>{`
        @keyframes tg-typing-dot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
        }
        .tg-typing-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #6AB3F3; display: inline-block;
          animation: tg-typing-dot 1.1s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { PressStrip, InvestingBanner, TelegramCommunity });
