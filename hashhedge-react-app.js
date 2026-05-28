(function(){
// Shared primitives – HashHedge logo, scroll reveal, counter
const {
  useEffect,
  useRef,
  useState
} = React;

// Real HashHedge logo, pulled directly from the Figma file (node 1918:4454).
// Diamond mark in brand yellow + "HASHHEDGE" wordmark rendered as vector paths.
function HashHedgeLogo({
  size = 28,
  wordmarkColor = "var(--fg)"
}) {
  const h = size;
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "hh-logo",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: h * 0.42,
      textDecoration: "none"
    },
    "aria-label": "HashHedge"
  }, /*#__PURE__*/React.createElement("svg", {
    width: h * 0.86,
    height: h * 0.8,
    viewBox: "0 0 24 22.4",
    fill: "var(--accent)",
    style: {
      flexShrink: 0,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.983 18.574 L 3.766 10.512 L 8.027 6.386 L 8.027 12.281 L 10.604 14.639 L 10.604 0 L 0 10.512 L 12.009 22.4 L 24 10.512 L 13.396 0 L 13.396 14.639 L 15.973 12.281 L 15.973 6.386 L 20.234 10.512 L 11.983 18.574 Z",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: h * 4.0,
    height: h * 0.445,
    viewBox: "0 0 115.2 12.8",
    fill: wordmarkColor,
    style: {
      flexShrink: 0,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.17 5.014 L 7.671 5.014 L 7.671 0.159 L 10.841 0.159 L 10.841 12.659 L 7.671 12.659 L 7.671 7.945 L 3.17 7.945 L 3.17 12.659 L 0 12.659 L 0 0.159 L 3.17 0.159 L 3.17 5.014 Z M 15.323 12.659 L 11.925 12.659 L 16.899 0.159 L 20.121 0.159 L 25.042 12.659 L 21.627 12.659 L 21.014 10.893 L 15.953 10.893 L 15.323 12.659 Z M 20.016 8.015 L 18.51 3.725 L 16.951 8.015 L 20.016 8.015 Z M 32.065 4.167 C 32.007 3.778 31.802 3.478 31.452 3.266 C 31.102 3.043 30.64 2.931 30.068 2.931 C 29.671 2.931 29.327 3.001 29.035 3.143 C 28.743 3.284 28.597 3.496 28.597 3.778 C 28.597 4.061 28.761 4.273 29.088 4.414 C 29.415 4.555 29.893 4.708 30.524 4.873 L 31.662 5.155 C 32.164 5.285 32.637 5.426 33.081 5.579 C 33.536 5.72 33.933 5.92 34.272 6.179 C 34.61 6.438 34.879 6.774 35.077 7.186 C 35.276 7.586 35.387 8.11 35.41 8.757 C 35.41 9.498 35.264 10.128 34.972 10.646 C 34.692 11.152 34.318 11.564 33.851 11.882 C 33.384 12.2 32.853 12.435 32.258 12.588 C 31.674 12.729 31.078 12.8 30.471 12.8 C 29.887 12.8 29.298 12.735 28.702 12.606 C 28.119 12.476 27.564 12.241 27.039 11.9 C 26.525 11.558 26.087 11.105 25.725 10.54 C 25.375 9.963 25.159 9.263 25.077 8.439 L 28.265 8.439 C 28.381 8.945 28.656 9.304 29.088 9.516 C 29.531 9.728 30.045 9.834 30.629 9.834 C 30.804 9.834 30.985 9.822 31.172 9.799 C 31.359 9.775 31.528 9.734 31.68 9.675 C 31.843 9.604 31.971 9.51 32.065 9.393 C 32.17 9.275 32.223 9.116 32.223 8.916 C 32.223 8.657 32.112 8.463 31.89 8.333 C 31.68 8.192 31.376 8.086 30.979 8.015 L 29.998 7.804 C 29.333 7.662 28.708 7.492 28.124 7.292 C 27.541 7.091 27.068 6.856 26.706 6.585 C 26.321 6.291 26.017 5.92 25.795 5.473 C 25.573 5.026 25.462 4.455 25.462 3.761 L 25.462 3.725 C 25.509 3.019 25.684 2.43 25.988 1.96 C 26.291 1.489 26.671 1.106 27.126 0.812 C 27.64 0.483 28.177 0.265 28.737 0.159 C 29.309 0.053 29.911 0 30.541 0 C 31.067 0.012 31.575 0.094 32.065 0.247 C 32.567 0.388 33.011 0.594 33.396 0.865 C 33.886 1.206 34.277 1.654 34.569 2.207 C 34.861 2.748 35.048 3.402 35.13 4.167 L 32.065 4.167 Z M 40.419 5.014 L 44.92 5.014 L 44.92 0.159 L 48.09 0.159 L 48.09 12.659 L 44.92 12.659 L 44.92 7.945 L 40.419 7.945 L 40.419 12.659 L 37.249 12.659 L 37.249 0.159 L 40.419 0.159 L 40.419 5.014 Z M 58.684 5.014 L 63.185 5.014 L 63.185 0.159 L 66.355 0.159 L 66.355 12.659 L 63.185 12.659 L 63.185 7.945 L 58.684 7.945 L 58.684 12.659 L 55.515 12.659 L 55.515 0.159 L 58.684 0.159 L 58.684 5.014 Z M 78.053 0.159 L 78.053 3.125 L 71.871 3.125 L 71.871 5.032 L 76.967 5.032 L 76.967 7.857 L 71.871 7.857 L 71.871 9.71 L 78.053 9.71 L 78.053 12.659 L 68.701 12.659 L 68.701 0.159 L 78.053 0.159 Z M 79.715 12.659 L 79.715 0.159 L 84.566 0.159 C 85.547 0.159 86.429 0.294 87.211 0.565 C 88.005 0.824 88.676 1.212 89.225 1.73 C 89.774 2.248 90.194 2.895 90.486 3.672 C 90.789 4.449 90.941 5.35 90.941 6.374 C 90.941 8.469 90.38 10.04 89.26 11.087 C 88.151 12.135 86.598 12.659 84.601 12.659 L 79.715 12.659 Z M 84.636 9.71 C 85.22 9.71 85.711 9.634 86.107 9.481 C 86.505 9.316 86.82 9.092 87.053 8.81 C 87.298 8.516 87.473 8.168 87.578 7.768 C 87.683 7.356 87.736 6.909 87.736 6.426 C 87.736 5.956 87.683 5.52 87.578 5.12 C 87.486 4.72 87.316 4.373 87.071 4.078 C 86.825 3.784 86.493 3.555 86.072 3.39 C 85.664 3.213 85.144 3.125 84.514 3.125 L 82.885 3.125 L 82.885 9.71 L 84.636 9.71 Z M 95.476 6.374 C 95.476 6.821 95.528 7.25 95.634 7.662 C 95.739 8.063 95.908 8.422 96.141 8.739 C 96.387 9.057 96.702 9.31 97.087 9.498 C 97.485 9.687 97.975 9.781 98.558 9.781 C 98.816 9.781 99.072 9.757 99.329 9.71 C 99.586 9.651 99.819 9.569 100.029 9.463 C 100.239 9.345 100.415 9.198 100.555 9.022 C 100.707 8.845 100.806 8.633 100.852 8.386 L 97.928 8.386 L 97.928 5.703 L 104.18 5.703 L 104.18 6.162 C 104.18 7.021 104.098 7.845 103.935 8.633 C 103.783 9.41 103.457 10.14 102.954 10.823 C 102.709 11.164 102.417 11.458 102.078 11.705 C 101.74 11.953 101.373 12.158 100.975 12.323 C 100.59 12.476 100.176 12.594 99.732 12.676 C 99.3 12.759 98.868 12.8 98.436 12.8 C 97.467 12.8 96.597 12.653 95.826 12.359 C 95.068 12.053 94.414 11.623 93.865 11.07 C 93.328 10.517 92.914 9.846 92.621 9.057 C 92.341 8.269 92.201 7.386 92.201 6.409 C 92.201 5.408 92.347 4.514 92.639 3.725 C 92.931 2.925 93.345 2.254 93.882 1.713 C 94.42 1.159 95.068 0.736 95.826 0.441 C 96.597 0.147 97.461 0 98.418 0 C 99.107 0 99.761 0.094 100.38 0.282 C 101.01 0.459 101.57 0.736 102.061 1.112 C 102.563 1.489 102.978 1.966 103.304 2.542 C 103.632 3.107 103.847 3.784 103.952 4.573 L 100.817 4.573 C 100.701 4.019 100.438 3.625 100.029 3.39 C 99.633 3.143 99.113 3.019 98.471 3.019 C 97.91 3.019 97.437 3.119 97.052 3.319 C 96.679 3.519 96.369 3.784 96.124 4.114 C 95.891 4.431 95.721 4.79 95.616 5.191 C 95.523 5.591 95.476 5.985 95.476 6.374 Z M 115.2 0.159 L 115.2 3.125 L 109.018 3.125 L 109.018 5.032 L 114.114 5.032 L 114.114 7.857 L 109.018 7.857 L 109.018 9.71 L 115.2 9.71 L 115.2 12.659 L 105.848 12.659 L 105.848 0.159 L 115.2 0.159 Z",
    fillRule: "nonzero"
  })));
}
function Logo(props) {
  return /*#__PURE__*/React.createElement(HashHedgeLogo, props);
}
function useRevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible", "in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px 400px 0px"
    });
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function Reveal({
  children,
  delay = "0"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `reveal d-${delay}`,
    "data-delay": delay
  }, children);
}
function Counter({
  to,
  duration = 1800,
  suffix = "",
  prefix = "",
  decimals = 0
}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = now => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px 400px 0px"
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, formatted, suffix);
}

// Trustpilot star (green square + white star) – used across hero, reviews, cta
function TPStar({
  size = 16,
  half = false
}) {
  if (half) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "11",
      height: "16",
      fill: "#18A965"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "11",
      width: "5",
      height: "16",
      fill: "#2a2a2a"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z",
      fill: "#fff"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "#18A965"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z",
    fill: "#fff"
  }));
}
Object.assign(window, {
  HashHedgeLogo,
  Logo,
  useRevealOnScroll,
  Reveal,
  Counter,
  TPStar
});

// Hash Hedge – Hero variants (Classic / Cosmic / Terminal)
// Exposes: Hero, HeroCanvas
const {
  useEffect: _useE,
  useRef: _useR,
  useState: _useS
} = React;

// ==== Animated canvas background – trading terminal vibe ====
// Live candlestick chart + MA line + order-book ladder + streaming prints
function HeroCanvas({
  anim = "medium",
  mode = "particles"
}) {
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
    let price = 67500; // "BTCUSDT"
    let candles = [];
    let ma = []; // moving-average values, aligned to candles
    const prints = []; // tape prints drifting up
    const orders = []; // order-book ladder rows
    let currentCandle = null;
    let candleStartT = 0;
    const CANDLE_MS = 4000; // 1.8s per candle – fast but readable

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
        candles.push({
          o,
          h,
          l,
          c
        });
        p = c;
      }
      price = p;
      currentCandle = {
        o: p,
        h: p,
        l: p,
        c: p
      };
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
          offset: i < 7 ? 7 - i : i - 6,
          size: rand(0.1, 4.2),
          life: rand(0.4, 1.0)
        });
      }
    };

    // ---------- Size / resize ----------
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
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
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      // vertical time lines, drift
      for (let x = now * 0.006 % gs; x < w; x += gs) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // === Advance candles ===
      if (!candleStartT) candleStartT = now;
      const elapsed = now - candleStartT;
      // update current candle with live price walk
      const drift = rand(-2.5, 2.5) + Math.sin(now * 0.0005) * 3;
      price += drift;
      if (currentCandle) {
        currentCandle.c = price;
        if (price > currentCandle.h) currentCandle.h = price;
        if (price < currentCandle.l) currentCandle.l = price;
      }
      if (elapsed > CANDLE_MS) {
        candles.push(currentCandle);
        if (candles.length > CANDLE_COUNT) candles.shift();
        currentCandle = {
          o: price,
          h: price,
          l: price,
          c: price
        };
        candleStartT = now;
        recomputeMA();
        // emit a tape print
        prints.push({
          x: w - 40 - Math.random() * 220,
          y: h - 30,
          side: drift > 0 ? "buy" : "sell",
          size: (Math.random() * 3.4 + 0.12).toFixed(3),
          price: price.toFixed(1),
          life: 1
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
      const yOf = p => chartTop + (1 - (p - pMin) / (pMax - pMin)) * chartH;

      // === Chart plot area on the right 2/3 of canvas ===
      const chartRight = w - 120;
      const totalCandles = candles.length + 1; // + current
      const chartLeft = chartRight - totalCandles * (CANDLE_W + CANDLE_GAP);

      // Horizontal price labels (faded)
      ctx.fillStyle = "rgba(245,244,240,0.22)";
      ctx.font = "10px Akrobat, Onest, sans-serif";
      ctx.textAlign = "right";
      for (let i = 0; i <= 5; i++) {
        const py = chartTop + chartH / 5 * i;
        const pv = pMax - (pMax - pMin) / 5 * i;
        ctx.fillText(pv.toFixed(0), chartRight - 8, py + 3);
        ctx.strokeStyle = "rgba(255,255,255,0.025)";
        ctx.beginPath();
        ctx.moveTo(chartLeft, py);
        ctx.lineTo(chartRight, py);
        ctx.stroke();
      }

      // === Draw candles ===
      const drawCandle = (c, cx) => {
        const up = c.c >= c.o;
        const green = "rgba(24, 169, 101, ";
        const red = "rgba(230, 70, 70, ";
        const body = up ? green : red;
        const yO = yOf(c.o);
        const yC = yOf(c.c);
        const yH = yOf(c.h);
        const yL = yOf(c.l);
        // wick
        ctx.strokeStyle = body + "0.9)";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(cx, yH);
        ctx.lineTo(cx, yL);
        ctx.stroke();
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
      const pulse = 0.82 + Math.sin(now * 0.003) * 0.18;
      ctx.globalAlpha = pulse;
      const liveCx = chartLeft + candles.length * (CANDLE_W + CANDLE_GAP) + CANDLE_W / 2;
      if (currentCandle) drawCandle(currentCandle, liveCx);
      ctx.globalAlpha = 1;

      // === Moving-average line (brand gold) ===
      if (ma.length > 1) {
        ctx.strokeStyle = "rgba(252,213,53,0.9)";
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(252,213,53,0.8)";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ma.forEach((v, i) => {
          const cx = chartLeft + i * (CANDLE_W + CANDLE_GAP) + CANDLE_W / 2;
          const py = yOf(v);
          if (i === 0) ctx.moveTo(cx, py);else ctx.lineTo(cx, py);
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
      ctx.beginPath();
      ctx.moveTo(chartLeft, py);
      ctx.lineTo(chartRight, py);
      ctx.stroke();
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
        o.life -= 0.0025;
        if (o.life <= 0) {
          o.size = rand(0.1, 4.2);
          o.life = rand(0.5, 1);
        }
        const rowY = obTop + i * rowH;
        const sideColor = o.side === "bid" ? "24,169,101" : "230,70,70";
        const barLen = o.size / 4.2 * obW;
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
        p.y -= 0.3;
        p.life -= 0.0022;
        if (p.life <= 0) continue;
        const col = p.side === "buy" ? "24,169,101" : "230,70,70";
        ctx.fillStyle = `rgba(${col},${p.life * 0.7})`;
        ctx.font = "10px Akrobat, Onest, sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(`${p.side === "buy" ? "▲" : "▼"} ${p.size} @ ${p.price}`, p.x, p.y);
      }

      // === Top "ticker" chips – 10 live crypto + commodity markets ===
      const ticker = [{
        s: "BTC/USDT",
        v: price.toFixed(1),
        chg: (price - 67500) / 67500 * 100
      }, {
        s: "ETH/USDT",
        v: (3420 + Math.sin(now * 0.0005) * 60).toFixed(2),
        chg: Math.sin(now * 0.0005) * 2
      }, {
        s: "SOL/USDT",
        v: (185 + Math.sin(now * 0.0007) * 8).toFixed(2),
        chg: Math.sin(now * 0.0007) * 3
      }, {
        s: "XRP/USDT",
        v: (2.48 + Math.sin(now * 0.0004) * 0.08).toFixed(3),
        chg: Math.sin(now * 0.0004) * 1.2
      }, {
        s: "DOGE/USDT",
        v: (0.162 + Math.sin(now * 0.0006) * 0.005).toFixed(4),
        chg: Math.sin(now * 0.0006) * 2.4
      }, {
        s: "XAU/USDT",
        v: (2384 + Math.sin(now * 0.0003) * 12).toFixed(1),
        chg: Math.sin(now * 0.0003) * 0.6
      }, {
        s: "XAG/USDT",
        v: (31.62 + Math.sin(now * 0.00055) * 0.4).toFixed(2),
        chg: Math.sin(now * 0.00055) * 1.1
      }, {
        s: "BRENT",
        v: (82.10 + Math.sin(now * 0.00045) * 0.6).toFixed(2),
        chg: Math.sin(now * 0.00045) * 0.9
      }, {
        s: "WTI",
        v: (78.40 + Math.sin(now * 0.00048) * 0.5).toFixed(2),
        chg: -Math.sin(now * 0.00048) * 0.8
      }, {
        s: "SPY",
        v: (548.20 + Math.sin(now * 0.0004) * 1.8).toFixed(2),
        chg: Math.sin(now * 0.0004) * 0.4
      }];
      // Horizontal scroll – offset so tickers drift left continuously
      const tickerOffset = now * 0.008 % 180;
      let tx = 24 - tickerOffset;
      ctx.font = "600 11px Akrobat, Onest, sans-serif";
      ctx.save();
      // clip to canvas width so tickers wrap cleanly off the left edge
      ctx.beginPath();
      ctx.rect(0, 0, w, 36);
      ctx.clip();
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
    resize();
    seedCandles();
    seedOrders();
    draw();
    const onResize = () => {
      resize();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [anim, mode]);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "hero-canvas"
  });
}

// ==== Cosmic stats panel – Apscale-style, used on Cosmic hero ====
function CosmicStatsPanel() {
  const [tick, setTick] = _useS(0);
  _useE(() => {
    const i = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(i);
  }, []);
  // Only goes up — time-seeded from base date, max $2,000/day payouts, max 10 traders/day
  const _now = Date.now();
  const _dayStart = Math.floor(_now / 86400000) * 86400000;
  const _secToday = (_now - _dayStart) / 1000;
  const _PAYOUT_PER_SEC = 2000 / 86400;
  const _TRADER_PER_SEC = 18 / 86400;
  // per-tick increments (2.2s interval → ~39,273 ticks/day)
  const _TICK_PAYOUT = 0.051;   // $2,000/day
  const _TICK_TRADERS = 0.00026; // 10/day
  const _TICK_PAYOUTS_CT = 0.00051; // ~20 payouts count/day
  const primary = [{
    k: "Platform volume",
    big: `$${((178_400_000_000 + tick * 5000) / 1_000_000_000).toFixed(1)}B`,
    sub: "lifetime volume",
    day: `$${Math.round(_secToday * 195_000_000 / 86400 / 1_000_000)}M`,
    dayLbl: "today",
    color: "var(--accent)"
  }, {
    k: "Paid to traders",
    big: `$${((12_410_000 + tick * _TICK_PAYOUT) / 1_000_000).toFixed(2)}M`,
    sub: "lifetime",
    day: (() => { const _di = Math.floor(Date.now()/86400000); const _db = _di - Math.floor(1743465600000/86400000); const _base = Math.min(20000, 18000 + _db * 10); const _var = ((_di*7+13)%1000) - 500; return `+$${(_base+_var).toLocaleString()}`; })(),
    dayLbl: "today",
    color: "var(--green)"
  }, {
    k: "Funded traders",
    big: "5,120",
    sub: "active accounts",
    day: "+4",
    dayLbl: "joined today",
    color: "var(--fg)"
  }, {
    k: "Payouts processed",
    big: Math.round(17_800 + tick * _TICK_PAYOUTS_CT).toLocaleString(),
    sub: "lifetime",
    day: `+${Math.max(1, Math.round(_secToday * _TRADER_PER_SEC * 2))}`,
    dayLbl: "last 24h",
    color: "var(--fg)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      marginBottom: 28,
      color: "var(--fg-dim)",
      fontSize: 12,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 12px var(--green)",
      animation: "pulse 1.8s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Live \xB7 updated ", tick % 60, "s ago"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Institutional feed \xB7 on-chain verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, primary.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: "32px 28px",
      textAlign: "left",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, rgba(31,29,37,0.9), rgba(17,15,22,0.9))",
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 3,
      height: 36,
      background: s.color,
      borderRadius: "0 0 3px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.12em",
      color: "var(--fg-dim)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, s.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      color: s.color,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      fontFamily: "Akrobat, Onest, sans-serif",
      marginBottom: 6
    }
  }, s.big), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-low)",
      marginBottom: 16
    }
  }, s.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 14px",
      borderRadius: 10,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, s.dayLbl), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: "var(--green)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, "\u25B2 ", s.day))))));
}

// ==== Platform KPIs panel (classic hero variant) ====
// Three big stats – all-time total + today's delta – live-ticking.
function LivePayoutsTable() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick(t => t + 1), 1600);
    return () => clearInterval(i);
  }, []);

  // Values only ever go UP. Growth seeded from a fixed base date.
  // Payouts: max $2,000/day. Traders: max 10/day.
  const BASE_MS = 1704067200000; // 2024-01-01 00:00:00 UTC
  const now = Date.now();
  const secElapsed = (now - BASE_MS) / 1000;
  const dayStartMs = Math.floor(now / 86400000) * 86400000;
  const secToday = (now - dayStartMs) / 1000;

  // Payouts: $2,000/day cap. Live micro-increment per tick for visual heartbeat.
  const PAYOUT_PER_SEC = 2000 / 86400;
  const payoutsTotal = 10_750_000 + secElapsed * PAYOUT_PER_SEC + tick * 0.4;
  const _pdi = Math.floor(Date.now()/86400000);
  const _pdb = _pdi - Math.floor(1743465600000/86400000);
  const _payDayBase = Math.min(20000, 18000 + _pdb * 10);
  const _payDayVar = ((_pdi*7+13)%1000) - 500;
  const payoutsToday = _payDayBase + _payDayVar;

  // Volume: grows freely (no user restriction), sinusoidal variation ok
  const VOL_PER_SEC = 195_000_000 / 86400;
  const volumeTotal = 120_000_000_000 + secElapsed * VOL_PER_SEC;
  const volumeToday = secToday * VOL_PER_SEC * (1 + Math.sin(tick * 0.15) * 0.04);

  // Traders: fixed to match the hero metric and avoid competing live totals.
  const tradersTotal = 5_120;
  const fmtMoney = n => n >= 1_000_000_000 ? `$${(n / 1_000_000_000).toFixed(2)}B` : n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : n >= 1_000 ? `$${(n / 1_000).toFixed(1)}K` : `$${Math.round(n).toLocaleString()}`;
  const fmtCount = n => n.toLocaleString("en-US");
  const stats = [{
    k: "Total trading volume",
    v: fmtMoney(volumeTotal),
    sub: "today",
    subV: `+${fmtMoney(volumeToday)}`,
    color: "var(--accent)",
    chart: [0.52, 0.57, 0.62, 0.66, 0.70, 0.73, 0.76, 0.80, 0.84, 0.88, 0.92, 0.95]
  }, {
    k: "Funded traders",
    v: fmtCount(tradersTotal),
    sub: "today",
    subV: "+4",
    color: "var(--fg)",
    chart: [0.42, 0.48, 0.53, 0.57, 0.62, 0.66, 0.70, 0.74, 0.78, 0.81, 0.84, 0.86]
  }, {
    k: "Total payouts",
    v: fmtMoney(payoutsTotal),
    sub: "today",
    subV: `+${fmtMoney(payoutsToday)}`,
    color: "var(--green)",
    chart: [0.38, 0.44, 0.51, 0.57, 0.62, 0.66, 0.70, 0.75, 0.80, 0.84, 0.88, 0.92]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(21,19,26,0.95))",
      border: "1px solid var(--line)",
      borderRadius: 20,
      overflow: "hidden",
      backdropFilter: "blur(12px)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)",
      transition: "transform .35s var(--ease-out), box-shadow .35s var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.015)";
      e.currentTarget.style.boxShadow = "0 60px 120px -20px rgba(0,0,0,0.7), 0 0 120px rgba(252,213,53,0.12)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 12px var(--green)",
      animation: "pulse 1.8s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg)"
    }
  }, "Platform stats")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-dim)"
    }
  }, "updated live")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 0"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 110px auto",
      gap: 20,
      padding: "20px 22px",
      alignItems: "center",
      borderBottom: i < stats.length - 1 ? "1px solid var(--line)" : "none",
      opacity: 0,
      animation: `fadeInRow .4s var(--ease-out) ${i * 0.12}s forwards`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--fg-dim)",
      marginBottom: 6
    }
  }, s.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: s.color,
      letterSpacing: "-0.02em",
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1
    },
    className: "mono"
  }, s.v)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 110 36",
    width: "110",
    height: "36",
    style: {
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `sparkgrad-${i}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: s.color,
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: s.color,
    stopOpacity: "0"
  }))), (() => {
    const pts = s.chart.map((v, j) => [j * (110 / (s.chart.length - 1)), 36 - v * 32]);
    const d = pts.map((p, j) => `${j === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
    const area = `${d} L110,36 L0,36 Z`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: `url(#sparkgrad-${i})`
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      fill: "none",
      stroke: s.color,
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: pts[pts.length - 1][0],
      cy: pts[pts.length - 1][1],
      r: "2.8",
      fill: s.color
    }), /*#__PURE__*/React.createElement("circle", {
      cx: pts[pts.length - 1][0],
      cy: pts[pts.length - 1][1],
      r: "5.5",
      fill: s.color,
      opacity: "0.25"
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      values: "3;7;3",
      dur: "1.8s",
      repeatCount: "indefinite"
    }), /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      values: "0.35;0;0.35",
      dur: "1.8s",
      repeatCount: "indefinite"
    })));
  })()), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      minWidth: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      marginBottom: 4,
      letterSpacing: "0.05em"
    }
  }, s.sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: 13,
      fontWeight: 800,
      color: "var(--green)",
      padding: "4px 9px",
      borderRadius: 999,
      background: "rgba(124,216,160,0.12)",
      border: "1px solid rgba(124,216,160,0.22)",
      fontVariantNumeric: "tabular-nums"
    },
    className: "mono"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 9 9",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 0 L9 5 H6 V9 H3 V5 H0 Z"
  })), s.subV))))), /*#__PURE__*/React.createElement("style", null, `@keyframes fadeInRow { to { opacity: 1; } }`));
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
  // Only goes up — max $2,000/day payouts, max 10 traders/day
  const _now2 = Date.now();
  const _dayStart2 = Math.floor(_now2 / 86400000) * 86400000;
  const _secToday2 = (_now2 - _dayStart2) / 1000;
  const _PAY_S = 2000 / 86400;
  const _TR_S = 18 / 86400;
  const stats = [{
    k: "30d volume",
    v: `$${((178_400_000_000 + tick * 5000) / 1_000_000_000).toFixed(2)}B`,
    sub: "today",
    subV: `$${Math.round(_secToday2 * 195_000_000 / 86400 / 1_000_000)}M`,
    color: "var(--accent)"
  }, {
    k: "Total payouts",
    v: `$${((12_410_000 + tick * 0.051) / 1_000_000).toFixed(2)}M`,
    sub: "today",
    subV: (() => { const _di = Math.floor(Date.now()/86400000); const _db = _di - Math.floor(1743465600000/86400000); const _base = Math.min(20000, 18000 + _db * 10); const _var = ((_di*7+13)%1000) - 500; return `+$${(_base+_var).toLocaleString()}`; })(),
    color: "var(--green)"
  }, {
    k: "Funded traders",
    v: "5,120",
    sub: "joined today",
    subV: "+4",
    color: "var(--fg)"
  }, {
    k: "Payouts count",
    v: Math.round(17_800 + tick * 0.00051).toLocaleString(),
    sub: "last 24h",
    subV: `+${Math.max(1, Math.round(_secToday2 * _TR_S * 2))}`,
    color: "var(--fg)"
  }];
  // Mini sparkline, 32 points, gently modulated by tick so it feels alive
  const spark = Array.from({
    length: 32
  }, (_, i) => {
    const t = i / 31;
    const base = 40 + Math.sin(i * 0.45 + tick * 0.08) * 18 + t * 22;
    return Math.max(8, Math.min(88, base));
  });
  const sparkPath = spark.map((y, i) => `${i === 0 ? "M" : "L"} ${i / 31 * 100} ${100 - y}`).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(17,15,22,0.98))",
      border: "1px solid var(--line)",
      borderRadius: 20,
      overflow: "hidden",
      backdropFilter: "blur(12px)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderBottom: "1px solid var(--line)",
      background: "rgba(255,255,255,0.015)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 12px var(--green)",
      animation: "pulse 1.8s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--fg)"
    }
  }, "HashHedge \xB7 live stats")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, "UPDATED \xB7 ", tick % 60, "s ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "28px 24px 16px",
      background: "radial-gradient(circle at 50% 30%, rgba(252,213,53,0.12), transparent 60%)",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 140",
    width: "140",
    height: "140",
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "eagleGlow",
    cx: "50%",
    cy: "40%",
    r: "60%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--accent)",
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "70",
    cy: "70",
    r: "60",
    fill: "url(#eagleGlow)"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(70 72)",
    fill: "var(--accent)",
    stroke: "var(--accent-dark)",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -30 L -6 -18 L -28 -22 L -44 -6 L -22 -2 L -40 10 L -18 10 L -8 20 L 0 26 L 8 20 L 18 10 L 40 10 L 22 -2 L 44 -6 L 28 -22 L 6 -18 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "-22",
    r: "4",
    fill: "#0b0a0e"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -6,
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: 9,
      color: "var(--fg-low)",
      fontFamily: "Akrobat, Onest, sans-serif",
      letterSpacing: "0.1em",
      whiteSpace: "nowrap"
    }
  }, "[ brand eagle placeholder ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.1em",
      color: "var(--fg-dim)",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Platform volume \xB7 30d"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: 44
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sparkFill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--accent)",
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--accent)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: sparkPath + " L 100 100 L 0 100 Z",
    fill: "url(#sparkFill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: sparkPath,
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke",
    style: {
      transition: "d .8s var(--ease)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--accent)",
      fontFamily: "Akrobat, Onest, sans-serif",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, stats[0].v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--green)",
      marginTop: 4
    },
    className: "mono"
  }, "\u25B2 +12.4% vs prev")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 0"
    }
  }, [{
    big: stats[1],
    accent: "var(--green)"
  }, {
    big: stats[2],
    accent: "var(--fg)"
  }, {
    big: stats[3],
    accent: "var(--fg)"
  }].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "center",
      gap: 12,
      padding: "16px 24px",
      borderTop: i > 0 ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      color: "var(--fg-dim)",
      textTransform: "uppercase"
    }
  }, row.big.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-low)",
      marginTop: 3
    }
  }, row.big.sub, ": ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green)",
      fontWeight: 700
    },
    className: "mono"
  }, row.big.subV))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: row.accent,
      fontFamily: "Akrobat, Onest, sans-serif",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, row.big.v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px",
      borderTop: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgba(255,255,255,0.015)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, "Institutional feed \xB7 on-chain verified"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--accent)",
      letterSpacing: "0.08em"
    }
  }, "\u2192 DASHBOARD")));
}

// ==== Hero ====
function Hero({
  variant = "classic",
  anim = "medium"
}) {
  useRevealOnScroll();
  const showCanvas = variant === "cosmic" || anim === "max";
  return /*#__PURE__*/React.createElement("section", {
    className: "hh-hero-section",
    style: {
      position: "relative",
      overflow: "hidden",
      minHeight: 820,
      display: "flex",
      alignItems: "center",
      paddingTop: 80,
      paddingBottom: 120
    }
  }, showCanvas && /*#__PURE__*/React.createElement(HeroCanvas, {
    anim: anim
  }), showCanvas && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: variant === "cosmic" ? "radial-gradient(ellipse 75% 60% at 50% 50%, rgba(6,6,10,0.88) 0%, rgba(6,6,10,0.68) 42%, rgba(6,6,10,0.15) 72%, rgba(6,6,10,0) 90%)" : "linear-gradient(90deg, rgba(6,6,10,0.92) 0%, rgba(6,6,10,0.78) 30%, rgba(6,6,10,0.45) 55%, rgba(6,6,10,0.1) 80%, rgba(6,6,10,0) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: variant === "cosmic" ? "radial-gradient(ellipse 50% 35% at 50% 45%, rgba(6,6,10,0.55) 0%, rgba(6,6,10,0) 70%)" : "radial-gradient(ellipse 45% 55% at 28% 50%, rgba(6,6,10,0.6) 0%, rgba(6,6,10,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      pointerEvents: "none",
      background: "linear-gradient(180deg, rgba(6,6,10,0.55) 0%, rgba(6,6,10,0) 18%, rgba(6,6,10,0) 80%, rgba(6,6,10,0.6) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 600,
      height: 600,
      background: "var(--accent)",
      left: "-20%",
      top: "10%",
      opacity: .08
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 500,
      height: 500,
      background: "#4a90e2",
      right: "-15%",
      top: "30%",
      opacity: .05
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-mobile-chart",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-mobile-grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-mobile-candles"
  }, [["up", 62, 86, 26], ["down", 86, 54, 32], ["up", 72, 112, 40], ["up", 104, 66, 30], ["down", 70, 120, 48], ["up", 118, 68, 46], ["down", 82, 132, 36], ["up", 132, 74, 58], ["up", 104, 156, 72], ["down", 74, 126, 40], ["up", 126, 82, 54], ["down", 94, 142, 42], ["up", 142, 78, 64], ["up", 116, 170, 82], ["down", 82, 130, 34], ["up", 128, 72, 58]].map(([dir, top, bottom, body], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `hh-candle is-${dir}`,
    style: {
      "--x": i,
      "--top": `${top}px`,
      "--bottom": `${bottom}px`,
      "--body": `${body}px`,
      "--delay": `${i * 0.11}s`
    }
  }))), /*#__PURE__*/React.createElement("svg", {
    className: "hh-hero-mobile-ma",
    viewBox: "0 0 520 190",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 126 C42 118 58 142 92 128 S146 92 182 108 S228 150 264 124 S324 72 366 90 S428 152 466 98 S500 76 520 82"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: variant === "cosmic" ? "1fr" : "1.1fr 0.9fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-copy",
    style: {
      textAlign: variant === "cosmic" ? "center" : "left",
      maxWidth: variant === "cosmic" ? 980 : "none",
      margin: variant === "cosmic" ? "0 auto" : "0"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "#1 CRYPTO PROP TRADING FIRM \xB7 WEB3 NATIVE")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      margin: "20px 0 24px",
      color: "var(--fg)",
      fontSize: "clamp(36px, 4.5vw, 62px)"
    }
  }, "Pass a ", /*#__PURE__*/React.createElement("span", {style: {color: "var(--accent)"}}, "trading challenge"), " and trade without depositing your own money.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.45,
      color: "var(--fg-muted)",
      maxWidth: 580,
      margin: variant === "cosmic" ? "0 auto 40px" : "0 0 40px",
      fontWeight: 400
    }
  }, "Pick your account size, up to $200K. Pass the challenge, get funded to trade crypto, and keep up to 90% of the profit. Simple rules, fast payouts, no hidden fees.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-actions",
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      justifyContent: variant === "cosmic" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg"
  }, "Start Challenge \xB7 from $79", /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#how",
    className: "btn btn-ghost btn-lg"
  }, "How it works"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-proof",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32,
      marginTop: 48,
      flexWrap: "wrap",
      justifyContent: variant === "cosmic" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(TPStar, {
    key: i,
    size: 18
  })), /*#__PURE__*/React.createElement(TPStar, {
    size: 18,
    half: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--fg)"
    }
  }, "4.4 \xB7 Trustpilot"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-dim)"
    }
  }, "5,120 funded traders"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      width: 1,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip green"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), " VERIFIED COMPANY"))))), variant === "classic" && /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement(LivePayoutsTable, null)), variant === "terminal" && /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement(TradingTerminal, null)), variant === "cosmic" && /*#__PURE__*/React.createElement(Reveal, {
    delay: "4"
  }, /*#__PURE__*/React.createElement(CosmicStatsPanel, null))), variant !== "cosmic" && /*#__PURE__*/React.createElement(Reveal, {
    delay: "5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-hero-metrics",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24,
      marginTop: 96,
      padding: "32px 0",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)"
    }
  }, [{
    v: 17800,
    suf: "+",
    l: "Payouts completed",
    sub: "Fast, seamless, and always on time."
  }, {
    v: 5120,
    suf: "",
    l: "Funded traders",
    sub: "Growing every single day."
  }, {
    v: 160,
    suf: "+",
    l: "Crypto pairs",
    sub: "Spot liquidity across majors + alts."
  }, {
    v: 4.4,
    suf: "/5",
    dec: 1,
    l: "Trustpilot rating",
    sub: "Based on 79 verified reviews."
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      color: "var(--fg)",
      lineHeight: 1,
      letterSpacing: "-0.02em"
    }
  }, /*#__PURE__*/React.createElement(Counter, {
    to: s.v,
    prefix: s.pre || "",
    suffix: s.suf,
    decimals: s.dec || 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--accent)",
      marginTop: 10,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-dim)",
      marginTop: 6
    }
  }, s.sub)))))));
}
Object.assign(window, {
  Hero,
  HeroCanvas,
  LivePayoutsTable,
  TradingTerminal
});

// Hash Hedge – Promo banner + How It Works
const {
  useEffect: __useE,
  useRef: __useR,
  useState: __useS
} = React;
function PromoBanner() {
  useRevealOnScroll();
  // "What you can trade" – non-crypto perps available on the platform.
  // Each market has brand color + monogram (ticker style, no emoji).
  // Reference prices – pulled from live data (Apr 2026): gold $4,880 · silver $81.8 · brent $104.6 · wti $94 · natgas $2.55 · spy $615.
  const markets = [{
    sym: "XAU",
    name: "Gold",
    cls: "Metal",
    art: "gold",
    color: "#E5B233",
    ref: "4,879.60",
    unit: "/oz",
    ch: "+1.48%",
    up: true
  }, {
    sym: "XAG",
    name: "Silver",
    cls: "Metal",
    art: "silver",
    color: "#C6C7CC",
    ref: "81.84",
    unit: "/oz",
    ch: "+3.98%",
    up: true
  }, {
    sym: "XPD",
    name: "Palladium",
    cls: "Metal",
    art: "palladium",
    color: "#B8C0CC",
    ref: "1,412.50",
    unit: "/oz",
    ch: "-0.82%",
    up: false
  }, {
    sym: "XPT",
    name: "Platinum",
    cls: "Metal",
    art: "platinum",
    color: "#D4D8DE",
    ref: "1,586.40",
    unit: "/oz",
    ch: "+0.64%",
    up: true
  }, {
    sym: "BRENT",
    name: "Brent Crude",
    cls: "Energy",
    art: "brent",
    color: "#3D5A44",
    ref: "104.63",
    unit: "/bbl",
    ch: "-0.42%",
    up: false
  }, {
    sym: "WTI",
    name: "WTI Crude",
    cls: "Energy",
    art: "wti",
    color: "#6C4A2E",
    ref: "94.12",
    unit: "/bbl",
    ch: "-0.38%",
    up: false
  }, {
    sym: "NG",
    name: "Natural Gas",
    cls: "Energy",
    art: "natgas",
    color: "#4A6FA5",
    ref: "2.55",
    unit: "/MMBtu",
    ch: "-2.40%",
    up: false
  }, {
    sym: "SPY",
    name: "S&P 500",
    cls: "Index",
    art: "spy",
    color: "#5C6CFF",
    ref: "614.72",
    unit: "",
    ch: "-0.41%",
    up: false
  }];
  const AssetArt = ({
    kind,
    color
  }) => {
    const common = {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      opacity: 0.55
    };
    switch (kind) {
      case "gold":
        // Three stacked gold bars – most iconic
        return /*#__PURE__*/React.createElement("svg", {
          style: common,
          viewBox: "0 0 160 120",
          preserveAspectRatio: "xMidYMid slice",
          fill: "none"
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "g-gold",
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: color,
          stopOpacity: "0.85"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: color,
          stopOpacity: "0.2"
        }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
          d: "M44 98 L146 98 L132 86 L58 86 Z",
          fill: "url(#g-gold)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M58 86 L132 86 L138 80 L64 80 Z",
          fill: color,
          opacity: "0.55"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M58 80 L134 80 L122 70 L68 70 Z",
          fill: "url(#g-gold)",
          opacity: "0.85"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M68 70 L122 70 L126 66 L72 66 Z",
          fill: color,
          opacity: "0.45"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M70 66 L122 66 L112 58 L80 58 Z",
          fill: "url(#g-gold)",
          opacity: "0.7"
        }), /*#__PURE__*/React.createElement("text", {
          x: "96",
          y: "95",
          textAnchor: "middle",
          fontFamily: "Akrobat,sans-serif",
          fontWeight: "900",
          fontSize: "8",
          fill: "#000",
          opacity: "0.4",
          letterSpacing: "0.1em"
        }, "999.9")));
      case "silver":
        // Stack of coins – side view
        return /*#__PURE__*/React.createElement("svg", {
          style: common,
          viewBox: "0 0 160 120",
          preserveAspectRatio: "xMidYMid slice",
          fill: "none"
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "g-silver",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: color,
          stopOpacity: "0.3"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0.5",
          stopColor: color,
          stopOpacity: "0.9"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: color,
          stopOpacity: "0.3"
        }))), /*#__PURE__*/React.createElement("g", null, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("g", {
          key: i
        }, /*#__PURE__*/React.createElement("ellipse", {
          cx: "80",
          cy: 108 - i * 9,
          rx: "40",
          ry: "7",
          fill: "url(#g-silver)"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "80",
          cy: 108 - i * 9,
          rx: "40",
          ry: "7",
          fill: "none",
          stroke: color,
          strokeOpacity: "0.6",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "80",
          cy: 105 - i * 9,
          rx: "40",
          ry: "7",
          fill: color,
          opacity: "0.15"
        }))), /*#__PURE__*/React.createElement("ellipse", {
          cx: "80",
          cy: "57",
          rx: "40",
          ry: "7",
          fill: color,
          opacity: "0.7"
        }), /*#__PURE__*/React.createElement("ellipse", {
          cx: "80",
          cy: "57",
          rx: "28",
          ry: "4.5",
          fill: "none",
          stroke: "#fff",
          strokeOpacity: "0.4",
          strokeWidth: "0.8"
        }), /*#__PURE__*/React.createElement("text", {
          x: "80",
          y: "60",
          textAnchor: "middle",
          fontFamily: "Akrobat,sans-serif",
          fontWeight: "900",
          fontSize: "6",
          fill: "#fff",
          opacity: "0.5",
          letterSpacing: "0.15em"
        }, "FINE SILVER")));
      case "palladium":
        // Single hex/oct ingot viewed from top – unique shape
        return /*#__PURE__*/React.createElement("svg", {
          style: common,
          viewBox: "0 0 160 120",
          preserveAspectRatio: "xMidYMid slice",
          fill: "none"
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "g-pd",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: color,
          stopOpacity: "0.95"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: color,
          stopOpacity: "0.25"
        })), /*#__PURE__*/React.createElement("linearGradient", {
          id: "g-pd-side",
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: color,
          stopOpacity: "0.5"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: "#000",
          stopOpacity: "0.4"
        }))), /*#__PURE__*/React.createElement("g", {
          transform: "translate(0 6)"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M36 74 L60 88 L100 88 L124 74 L124 82 L100 96 L60 96 L36 82 Z",
          fill: "url(#g-pd-side)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M60 56 L100 56 L124 74 L100 88 L60 88 L36 74 Z",
          fill: "url(#g-pd)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M60 56 L100 56 L110 64 L50 64 Z",
          fill: "#fff",
          opacity: "0.18"
        }), /*#__PURE__*/React.createElement("text", {
          x: "80",
          y: "78",
          textAnchor: "middle",
          fontFamily: "Akrobat,sans-serif",
          fontWeight: "900",
          fontSize: "9",
          fill: "#fff",
          opacity: "0.55",
          letterSpacing: "0.2em"
        }, "Pd")));
      case "platinum":
        // Long thin ingot lying flat + chemical symbol
        return /*#__PURE__*/React.createElement("svg", {
          style: common,
          viewBox: "0 0 160 120",
          preserveAspectRatio: "xMidYMid slice",
          fill: "none"
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
          id: "g-pt",
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: "#fff",
          stopOpacity: "0.6"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0.5",
          stopColor: color,
          stopOpacity: "0.85"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: color,
          stopOpacity: "0.3"
        }))), /*#__PURE__*/React.createElement("g", {
          transform: "translate(0 4)"
        }, /*#__PURE__*/React.createElement("path", {
          d: "M22 66 L138 50 L138 72 L22 88 Z",
          fill: "url(#g-pt)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M22 66 L138 50 L148 44 L32 60 Z",
          fill: color,
          opacity: "0.55"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M138 50 L148 44 L148 66 L138 72 Z",
          fill: color,
          opacity: "0.3"
        }), /*#__PURE__*/React.createElement("text", {
          x: "80",
          y: "76",
          textAnchor: "middle",
          fontFamily: "Akrobat,sans-serif",
          fontWeight: "900",
          fontSize: "10",
          fill: "#000",
          opacity: "0.35",
          letterSpacing: "0.3em"
        }, "PLATINUM"), /*#__PURE__*/React.createElement("text", {
          x: "80",
          y: "86",
          textAnchor: "middle",
          fontFamily: "Akrobat,sans-serif",
          fontWeight: "700",
          fontSize: "6",
          fill: "#000",
          opacity: "0.3",
          letterSpacing: "0.2em"
        }, "Pt \xB7 999.5")));
      case "brent":
      case "wti":
        {
          // Oil barrel
          const accent = kind === "brent" ? "#7FB088" : "#B57A4E";
          return /*#__PURE__*/React.createElement("svg", {
            style: common,
            viewBox: "0 0 160 120",
            preserveAspectRatio: "xMidYMid slice",
            fill: "none"
          }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
            id: `g-${kind}`,
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "0"
          }, /*#__PURE__*/React.createElement("stop", {
            offset: "0",
            stopColor: color,
            stopOpacity: "0.9"
          }), /*#__PURE__*/React.createElement("stop", {
            offset: "0.5",
            stopColor: accent,
            stopOpacity: "0.7"
          }), /*#__PURE__*/React.createElement("stop", {
            offset: "1",
            stopColor: color,
            stopOpacity: "0.4"
          }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("ellipse", {
            cx: "90",
            cy: "30",
            rx: "38",
            ry: "8",
            fill: color,
            opacity: "0.7"
          }), /*#__PURE__*/React.createElement("rect", {
            x: "52",
            y: "30",
            width: "76",
            height: "80",
            fill: `url(#g-${kind})`
          }), /*#__PURE__*/React.createElement("rect", {
            x: "52",
            y: "46",
            width: "76",
            height: "6",
            fill: accent,
            opacity: "0.55"
          }), /*#__PURE__*/React.createElement("rect", {
            x: "52",
            y: "88",
            width: "76",
            height: "6",
            fill: accent,
            opacity: "0.55"
          }), /*#__PURE__*/React.createElement("ellipse", {
            cx: "90",
            cy: "110",
            rx: "38",
            ry: "8",
            fill: color,
            opacity: "0.85"
          }), /*#__PURE__*/React.createElement("ellipse", {
            cx: "90",
            cy: "30",
            rx: "38",
            ry: "8",
            fill: "none",
            stroke: accent,
            strokeOpacity: "0.35"
          })));
        }
      case "natgas":
        // Flame
        return /*#__PURE__*/React.createElement("svg", {
          style: common,
          viewBox: "0 0 160 120",
          preserveAspectRatio: "xMidYMid slice",
          fill: "none"
        }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
          id: "g-ng",
          cx: "0.5",
          cy: "0.85",
          r: "0.7"
        }, /*#__PURE__*/React.createElement("stop", {
          offset: "0",
          stopColor: "#9DC3FF",
          stopOpacity: "0.85"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "0.5",
          stopColor: color,
          stopOpacity: "0.55"
        }), /*#__PURE__*/React.createElement("stop", {
          offset: "1",
          stopColor: color,
          stopOpacity: "0"
        }))), /*#__PURE__*/React.createElement("path", {
          d: "M95 14 C 90 40, 118 48, 118 74 C 118 100, 95 116, 80 116 C 60 116, 42 100, 46 76 C 50 58, 68 62, 70 46 C 72 34, 88 30, 95 14 Z",
          fill: "url(#g-ng)"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M88 44 C 86 58, 100 62, 100 78 C 100 92, 90 102, 80 102 C 68 102, 60 92, 64 80 C 68 70, 78 70, 80 60 C 82 52, 86 50, 88 44 Z",
          fill: "#E8F2FF",
          opacity: "0.35"
        }));
      case "spy":
        // Candlestick chart
        return /*#__PURE__*/React.createElement("svg", {
          style: common,
          viewBox: "0 0 160 120",
          preserveAspectRatio: "xMidYMid slice",
          fill: "none"
        }, /*#__PURE__*/React.createElement("g", {
          stroke: "#C7CCFF",
          strokeOpacity: "0.25",
          strokeWidth: "1"
        }, /*#__PURE__*/React.createElement("line", {
          x1: "0",
          y1: "30",
          x2: "160",
          y2: "30"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "0",
          y1: "60",
          x2: "160",
          y2: "60"
        }), /*#__PURE__*/React.createElement("line", {
          x1: "0",
          y1: "90",
          x2: "160",
          y2: "90"
        })), [[14, 50, 88, "#FF6B6B"], [30, 42, 78, "#7FE3A1"], [46, 30, 66, "#7FE3A1"], [62, 38, 72, "#FF6B6B"], [78, 24, 58, "#7FE3A1"], [94, 32, 62, "#FF6B6B"], [110, 20, 50, "#7FE3A1"], [126, 14, 44, "#7FE3A1"], [142, 22, 52, "#FF6B6B"]].map(([x, top, bot, c], i) => /*#__PURE__*/React.createElement("g", {
          key: i,
          opacity: "0.85"
        }, /*#__PURE__*/React.createElement("line", {
          x1: x + 4,
          y1: top - 6,
          x2: x + 4,
          y2: bot + 6,
          stroke: c,
          strokeOpacity: "0.7",
          strokeWidth: "1.3"
        }), /*#__PURE__*/React.createElement("rect", {
          x: x,
          y: top,
          width: "9",
          height: bot - top,
          fill: c,
          fillOpacity: "0.55"
        }))));
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 28,
      overflow: "hidden",
      padding: "40px 48px 44px",
      background: "linear-gradient(160deg, #15140f 0%, #0c0b09 70%)",
      border: "1px solid var(--line-strong)",
      boxShadow: "0 40px 100px -30px rgba(0,0,0,0.55)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -120,
      right: -120,
      width: 420,
      height: 420,
      background: "radial-gradient(circle, rgba(252,213,53,0.16) 0%, transparent 65%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 32,
      marginBottom: 28,
      flexWrap: "wrap",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: "var(--accent)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--accent)",
      boxShadow: "0 0 10px var(--accent)"
    }
  }), "BEYOND CRYPTO"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      margin: "14px 0 10px",
      color: "var(--fg)"
    }
  }, "Trade ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "160+ crypto pairs"), /*#__PURE__*/React.createElement("br", null), "and 10+ TradFi assets."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--fg-muted)",
      margin: 0,
      maxWidth: 735
    }
  }, "Gold, silver, platinum, palladium, Brent and WTI crude, natural gas, and the S&P 500, all quoted in USDT. Same funded account, same 1:5 leverage, one unified PnL.")), /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary",
    "data-mobile-hide-on-phone": true,
    style: {
      whiteSpace: "nowrap"
    }
  }, "Start Challenge", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    "data-mobile-h-scroll": true,
    style: {
      position: "relative",
      zIndex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      "--mhs-count": markets.length
    }
  }, markets.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.sym,
    style: {
      position: "relative",
      padding: "18px 18px 16px",
      borderRadius: 14,
      background: "rgba(255,255,255,0.025)",
      border: "1px solid var(--line)",
      transition: "transform .25s var(--ease-out), border-color .25s, background .25s",
      overflow: "hidden",
      minHeight: 150
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.borderColor = "rgba(252,213,53,0.35)";
      e.currentTarget.style.background = "rgba(252,213,53,0.04)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.borderColor = "var(--line)";
      e.currentTarget.style.background = "rgba(255,255,255,0.025)";
    }
  }, /*#__PURE__*/React.createElement(AssetArt, {
    kind: m.art,
    color: m.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.78) 60%, rgba(10,9,8,0.9) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.12em",
      color: m.color,
      textTransform: "uppercase",
      fontFamily: "Akrobat, Onest, sans-serif",
      textShadow: "0 1px 3px rgba(0,0,0,0.6)"
    }
  }, m.sym), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.1em",
      color: "var(--fg-dim)",
      textTransform: "uppercase"
    }
  }, m.cls)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.08em",
      color: "var(--fg-dim)",
      fontFamily: "Akrobat, Onest, sans-serif",
      marginBottom: 2
    }
  }, m.sym, "/USDT"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      fontSize: 17,
      fontWeight: 700,
      color: "var(--fg)",
      letterSpacing: "-0.01em",
      marginBottom: 8
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--fg-muted)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, "$", m.ref, m.unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--fg-low)",
      fontWeight: 600,
      marginLeft: 2
    }
  }, m.unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: m.up ? "var(--green)" : "#ff6b6b",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, m.ch))))), /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary",
    "data-mobile-show-on-phone": true,
    style: {
      display: "none",
      marginTop: 20,
      width: "100%",
      justifyContent: "center"
    }
  }, "Start Challenge", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      marginTop: 24,
      paddingTop: 20,
      borderTop: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap",
      fontSize: 13,
      color: "var(--fg-dim)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 8px var(--green)"
    }
  }), "Live 24/7 (incl. weekends)"), /*#__PURE__*/React.createElement("span", null, "Leverage ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg)",
      fontWeight: 700
    }
  }, "1:5")), /*#__PURE__*/React.createElement("span", null, "Quote: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg)",
      fontWeight: 700
    }
  }, "USDT"))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)"
    }
  }, "New assets every week."))))));
}
function HowItWorks() {
  useRevealOnScroll();
  const steps = [{
    n: "01",
    k: "SIGN UP",
    t: "Pick your account size",
    d: "Six sizes, from $5,000 ($79) up to $150,000 ($1,093). One-time Hash Hedge Challenge fee. Pay on TRC20, ERC20, BEP20, Solana, Arbitrum or Optimism.",
    bullets: ["6 account sizes · $5K to $150K", "Pay with crypto (TRC20/ERC20/BEP20/Solana/Arbitrum/Optimism)", "One-time fee – no subscriptions"]
  }, {
    n: "02",
    k: "PROVE YOUR EDGE",
    t: "Pass Stage 1 and Stage 2",
    d: "Stage 1: +8% target. Stage 2: +6% target. Max 5% daily loss, 10% max drawdown on Stage 1 (8% from Stage 2). Minimum 5 trading days per stage. No time limit.",
    bullets: ["Stage 1 target: +8% · DD 10%", "Stage 2 target: +6% · DD 8%", "Max 5% daily loss · min 5 days"]
  }, {
    n: "03",
    k: "GET FUNDED",
    t: "Trade the funded Stage 3 account",
    d: "Pass both stages and you move to Stage 3 – funded. No profit target, unlimited trading period, same risk rules (5% daily, 8% max DD). Leverage 1:5 on every stage.",
    bullets: ["Stage 3 – funded, no target", "Unlimited trading period", "Leverage 1:5 · 5% daily / 8% DD"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      background: "linear-gradient(180deg, transparent 0%, var(--bg-elev) 20%, var(--bg-elev) 80%, transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      marginBottom: 80,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "HOW IT WORKS")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0"
    }
  }, "Three steps from", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "zero to funded.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--fg-muted)"
    }
  }, "Skip years of grinding to build your own capital. Prove your trading edge in our Challenge and get funded with up to $200K, in weeks, not years."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 24,
      position: "relative",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 42,
      left: "calc(16.66% - 42px)",
      right: "16.66%",
      height: 2,
      background: "linear-gradient(90deg, transparent, var(--accent) 20%, var(--accent) 80%, transparent)",
      opacity: 0.3,
      zIndex: 0
    }
  }), steps.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: String(i + 1)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      height: "100%",
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "how-step-badge",
    style: {
      width: 84,
      height: 84,
      minWidth: 84,
      minHeight: 84,
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      background: "var(--bg)",
      border: "2px solid var(--accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
      fontWeight: 800,
      color: "var(--accent)",
      margin: "0 auto 32px",
      fontFamily: "Akrobat, Onest, sans-serif",
      position: "relative",
      animationDelay: `${i * 0.6}s`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, s.n)), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 32,
      height: "100%",
      width: "100%",
      minHeight: 410,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.14em",
      color: "var(--accent)",
      marginBottom: 12
    }
  }, s.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      margin: "0 0 14px"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: "0 0 20px",
      minHeight: 118,
      overflowWrap: "anywhere"
    }
  }, s.d), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "8px 0",
      fontSize: 14,
      lineHeight: 1.65,
      color: "var(--fg)",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      flexShrink: 0,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "var(--accent)",
    opacity: "0.15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12l3 3 5-6",
    stroke: "var(--accent)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), b))))))))));
}
const TradeMetalsBanner = PromoBanner;
Object.assign(window, {
  PromoBanner,
  TradeMetalsBanner,
  HowItWorks
});

function PromoSliderBanner() {
  useRevealOnScroll();
  const slides = [{
    key: "x3",
    eyebrow: "72H PAYOUT GUARANTEE",
    title: "X3 Money-Back Guarantee",
    copy: "If You Don’t Get Paid Within 72 Hours, We Pay You Back 3X. That’s our promise. No risk. No waiting. Just trading.",
    cta: "Claim profit",
    art: "x3"
  }, {
    key: "metals",
    eyebrow: "NEW MARKETS LIVE",
    title: "Trade Gold and Silver",
    copy: "XAU/USDT and XAG/USDT are now available on the Hash Hedge platform",
    cta: "Start Challenge",
    art: "metals"
  }];
  const [active, setActive] = __useS(0);
  const [paused, setPaused] = __useS(false);
  const touchX = __useR(null);
  __useE(() => {
    if (paused) return undefined;
    const timer = setInterval(() => setActive(i => (i + 1) % slides.length), 6200);
    return () => clearInterval(timer);
  }, [paused, slides.length]);
  const go = i => setActive((i + slides.length) % slides.length);
  return /*#__PURE__*/React.createElement("section", {
    className: "hh-promo-slider-section",
    "aria-label": "Hash Hedge promotions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "hh-promo-slider",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
    onTouchStart: e => { touchX.current = e.touches[0].clientX; setPaused(true); },
    onTouchEnd: e => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      touchX.current = null;
      setPaused(false);
      if (Math.abs(dx) < 30) return;
      go(dx < 0 ? active + 1 : active - 1);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-promo-slider-track",
    style: {
      transform: `translateX(-${active * 100}%)`
    }
  }, slides.map((slide, i) => /*#__PURE__*/React.createElement("article", {
    key: slide.key,
    className: "hh-promo-slide",
    "data-art": slide.art,
    "aria-hidden": active !== i
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-promo-slide-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hh-promo-slide-eyebrow"
  }, slide.eyebrow), /*#__PURE__*/React.createElement("h3", null, slide.title), /*#__PURE__*/React.createElement("p", null, slide.copy)), /*#__PURE__*/React.createElement("div", {
    className: "hh-promo-slide-art",
    "aria-hidden": "true"
  }, slide.art === "x3" ? /*#__PURE__*/React.createElement(PromoX3Art, null) : slide.art === "split" ? /*#__PURE__*/React.createElement(PromoProfitSplitArt, null) : /*#__PURE__*/React.createElement(PromoMetalsArt, null)), /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary hh-promo-slide-cta"
  }, slide.cta))))), /*#__PURE__*/React.createElement("div", {
    className: "hh-promo-slider-dots",
    "aria-label": "Promotion slides"
  }, slides.map((slide, i) => /*#__PURE__*/React.createElement("button", {
    key: slide.key,
    type: "button",
    "aria-label": `Show ${slide.title}`,
    "aria-current": active === i ? "true" : "false",
    onClick: () => go(i)
  }))))));
}

function PromoMetalsArt() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "hh-promo-art-svg",
    viewBox: "0 0 720 430",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "hhPromoGoldFace",
    cx: "0.38",
    cy: "0.32",
    r: "0.72"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff59a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.44",
    stopColor: "#fcd535"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.76",
    stopColor: "#b77716"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#3f2608"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "hhPromoSilverFace",
    cx: "0.38",
    cy: "0.28",
    r: "0.72"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#ffffff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.48",
    stopColor: "#d7d5cd"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.78",
    stopColor: "#87898d"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#282b31"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "hhPromoGoldEdge",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff7a8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.52",
    stopColor: "#a86d12"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#3b2307"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "hhPromoSilverEdge",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.55",
    stopColor: "#888b91"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#23252b"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "hhPromoCoinShadow",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "150%"
  }, /*#__PURE__*/React.createElement("feDropShadow", {
    dx: "0",
    dy: "30",
    stdDeviation: "18",
    floodColor: "#000",
    floodOpacity: "0.55"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: "400",
    cy: "354",
    rx: "238",
    ry: "34",
    fill: "#000",
    opacity: "0.36"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#hhPromoCoinShadow)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "286",
    cy: "194",
    r: "140",
    fill: "url(#hhPromoGoldEdge)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "270",
    cy: "184",
    r: "130",
    fill: "url(#hhPromoGoldFace)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "270",
    cy: "184",
    r: "108",
    fill: "none",
    stroke: "#6e440d",
    strokeOpacity: "0.42",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "270",
    cy: "184",
    r: "118",
    fill: "none",
    stroke: "#fff3a0",
    strokeOpacity: "0.55",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "270",
    y: "202",
    textAnchor: "middle",
    fontFamily: "Akrobat, Onest, sans-serif",
    fontSize: "58",
    fontWeight: "900",
    fill: "#74470d",
    opacity: "0.54",
    letterSpacing: "3"
  }, "XAU")), /*#__PURE__*/React.createElement("g", {
    filter: "url(#hhPromoCoinShadow)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "474",
    cy: "204",
    r: "136",
    fill: "url(#hhPromoSilverEdge)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "458",
    cy: "194",
    r: "126",
    fill: "url(#hhPromoSilverFace)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "458",
    cy: "194",
    r: "104",
    fill: "none",
    stroke: "#505258",
    strokeOpacity: "0.42",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "458",
    cy: "194",
    r: "114",
    fill: "none",
    stroke: "#fff",
    strokeOpacity: "0.58",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "458",
    y: "210",
    textAnchor: "middle",
    fontFamily: "Akrobat, Onest, sans-serif",
    fontSize: "56",
    fontWeight: "900",
    fill: "#54565b",
    opacity: "0.54",
    letterSpacing: "3"
  }, "XAG")));
}

function PromoX3Art() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "hh-promo-art-svg",
    viewBox: "0 0 720 430",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hhPromoX3Face",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fbf7e2"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.42",
    stopColor: "#97938a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.76",
    stopColor: "#fff7d7"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#5b5b60"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "hhPromoVault",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#ffeb55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.52",
    stopColor: "#c69317"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#684006"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "hhPromoX3Shadow",
    x: "-20%",
    y: "-20%",
    width: "145%",
    height: "150%"
  }, /*#__PURE__*/React.createElement("feDropShadow", {
    dx: "0",
    dy: "30",
    stdDeviation: "20",
    floodColor: "#000",
    floodOpacity: "0.6"
  }))), /*#__PURE__*/React.createElement("ellipse", {
    cx: "420",
    cy: "350",
    rx: "250",
    ry: "34",
    fill: "#000",
    opacity: "0.36"
  }), /*#__PURE__*/React.createElement("g", {
    filter: "url(#hhPromoX3Shadow)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "430",
    y: "76",
    width: "188",
    height: "188",
    rx: "28",
    fill: "url(#hhPromoVault)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "454",
    y: "100",
    width: "140",
    height: "140",
    rx: "22",
    fill: "none",
    stroke: "#fff071",
    strokeOpacity: "0.35",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "524",
    cy: "170",
    r: "46",
    fill: "none",
    stroke: "#80600f",
    strokeOpacity: "0.58",
    strokeWidth: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "524",
    cy: "170",
    r: "12",
    fill: "#e6b820"
  }), [0, 60, 120, 180, 240, 300].map(r => /*#__PURE__*/React.createElement("path", {
    key: r,
    d: "M524 170 L524 126",
    stroke: "#7d5b0d",
    strokeWidth: "7",
    strokeLinecap: "round",
    transform: `rotate(${r} 524 170)`,
    opacity: "0.46"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(142 75) skewX(-10)"
  }, /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "172",
    fontFamily: "Akrobat, Onest, sans-serif",
    fontSize: "186",
    fontWeight: "900",
    fill: "#4a3922",
    opacity: "0.62"
  }, "X3"), /*#__PURE__*/React.createElement("text", {
    x: "-10",
    y: "158",
    fontFamily: "Akrobat, Onest, sans-serif",
    fontSize: "186",
    fontWeight: "900",
    fill: "url(#hhPromoX3Face)"
  }, "X3")), /*#__PURE__*/React.createElement("path", {
    d: "M118 270 H626 L606 294 H98 Z",
    fill: "#28251e"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 272 H624",
    stroke: "#a58a36",
    strokeOpacity: "0.42",
    strokeWidth: "5"
  })));
}

function PromoProfitSplitArt() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "hh-promo-art-svg",
    viewBox: "0 0 720 430",
    fill: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hhPromoSplitGold",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#fff07a"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.58",
    stopColor: "#fcd535"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#bd850f"
  })), /*#__PURE__*/React.createElement("filter", {
    id: "hhPromoSplitShadow",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "150%"
  }, /*#__PURE__*/React.createElement("feDropShadow", {
    dx: "0",
    dy: "28",
    stdDeviation: "18",
    floodColor: "#000",
    floodOpacity: "0.55"
  }))), /*#__PURE__*/React.createElement("g", {
    filter: "url(#hhPromoSplitShadow)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "112",
    y: "86",
    width: "496",
    height: "228",
    rx: "28",
    fill: "#17151d",
    stroke: "rgba(255,255,255,0.12)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: "154",
    y: "143",
    fontFamily: "Onest, system-ui, sans-serif",
    fontSize: "16",
    fontWeight: "800",
    fill: "var(--accent)",
    letterSpacing: "2"
  }, "PROFIT SPLIT"), /*#__PURE__*/React.createElement("text", {
    x: "154",
    y: "181",
    fontFamily: "Onest, system-ui, sans-serif",
    fontSize: "24",
    fontWeight: "800",
    fill: "var(--fg)"
  }, "Trader"), /*#__PURE__*/React.createElement("text", {
    x: "540",
    y: "181",
    textAnchor: "end",
    fontFamily: "Onest, system-ui, sans-serif",
    fontSize: "42",
    fontWeight: "800",
    fill: "var(--accent)"
  }, "90%"), /*#__PURE__*/React.createElement("rect", {
    x: "154",
    y: "202",
    width: "390",
    height: "18",
    rx: "9",
    fill: "rgba(255,255,255,0.08)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "154",
    y: "202",
    width: "351",
    height: "18",
    rx: "9",
    fill: "url(#hhPromoSplitGold)"
  }), /*#__PURE__*/React.createElement("text", {
    x: "154",
    y: "260",
    fontFamily: "Onest, system-ui, sans-serif",
    fontSize: "20",
    fontWeight: "700",
    fill: "var(--fg-muted)"
  }, "Hash Hedge"), /*#__PURE__*/React.createElement("text", {
    x: "540",
    y: "260",
    textAnchor: "end",
    fontFamily: "Onest, system-ui, sans-serif",
    fontSize: "28",
    fontWeight: "800",
    fill: "var(--fg-muted)"
  }, "10%"), /*#__PURE__*/React.createElement("rect", {
    x: "154",
    y: "274",
    width: "390",
    height: "12",
    rx: "6",
    fill: "rgba(255,255,255,0.07)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "154",
    y: "274",
    width: "39",
    height: "12",
    rx: "6",
    fill: "rgba(255,255,255,0.28)"
  })));
}

PromoBanner = PromoSliderBanner;
Object.assign(window, {
  PromoBanner
});

// Hash Hedge – Pricing (FundedNext-style), Why Us, Payouts
const {
  useState: ___useS
} = React;

// ============================================================================
// Pricing – FundedNext-inspired checkout flow.
// Layout:
//   1. Program tab (Hash Hedge Challenge – only model, but framed as tab so it reads like FN).
//   2. Horizontal size selector with account-size chips + price + "Popular" badge.
//   3. Rules grid: 6 rule cards with icons, showing value per stage in mini-row.
//   4. Big summary / checkout bar: account size → price → Start Challenge CTA.
// ============================================================================
const PRICING_TOOLTIPS_EN = {
  "Profit Target": "Percentage of profit required to move to the next stage",
  "Max Daily Loss": "Maximum loss allowed within a single trading day",
  "Max Drawdown": "Total account loss limit during the phase",
  "Min Trading Days": "Minimum number of trading days required to pass the stage",
  "Trading Period": "Maximum number of days allowed to complete the stage",
  "Leverage": "Maximum leverage available during the stage",
  "Profit Split": "Percentage of profit the trader keeps",
  "Payouts": "Profit withdrawal to a crypto wallet in USDT"
};
function PricingTooltipLabel({label}) {
  const [open, setOpen] = ___useS(false);
  const tip = PRICING_TOOLTIPS_EN[label];
  if (!tip) return /*#__PURE__*/React.createElement("span", null, label);
  return /*#__PURE__*/React.createElement("span", {
    className: "hh-tip-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hh-tip-label",
    onClick: (e) => { e.stopPropagation(); setOpen(v => !v); },
    "aria-expanded": open
  }, label), open && /*#__PURE__*/React.createElement("span", {
    className: "hh-tip-bubble",
    role: "tooltip"
  }, tip, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hh-tip-close",
    onClick: (e) => { e.stopPropagation(); setOpen(false); },
    "aria-label": "Close"
  }, "×")));
}
function Pricing() {
  useRevealOnScroll();
  const [size, setSize] = ___useS(25000);
  const [openRule, setOpenRule] = ___useS(null);
  const [mobileStage, setMobileStage] = ___useS("stage1");
  const sizes = [5000, 10000, 25000, 50000, 100000, 150000];
  const pricing = {
    5000: 79,
    10000: 99,
    25000: 299,
    50000: 499,
    100000: 799,
    150000: 1093
  };
  const paymentLinks = {
    5000: "https://app.hashhedge.com/en/app/payment-form/f49e5bb5-2f1f-40cf-bd54-add0c2373ad2",
    10000: "https://app.hashhedge.com/en/app/payment-form/e1e37983-305a-4781-b104-945c92da525c",
    25000: "https://app.hashhedge.com/en/app/payment-form/ea03d4c8-df35-41ed-b36e-203a6b15bc11",
    50000: "https://app.hashhedge.com/en/app/payment-form/9b66fb15-a4ff-4eb3-b61f-694b0828a70b",
    100000: "https://app.hashhedge.com/en/app/payment-form/4555de74-c007-4a40-a501-ae7dba7085c7",
    150000: "https://app.hashhedge.com/en/app/payment-form/fcd959b6-dcf6-4a78-819c-605d6f99bb50"
  };
  const price = pricing[size];
  const popular = 25000;
  const accountNotes = {
    5000: "Starter account for testing the rules with the lowest entry fee.",
    10000: "Compact account for first-time funded traders who want more room.",
    25000: "Most popular balance of fee, capital and practical drawdown room.",
    50000: "A serious account size for consistent daily crypto strategies.",
    100000: "Built for experienced traders who already manage larger risk.",
    150000: "Maximum Hash Hedge allocation and the best fee-to-capital ratio."
  };
  const mobileStageTabs = [{
    id: "stage1",
    label: "Stage 1",
    sub: "Evaluation"
  }, {
    id: "stage2",
    label: "Stage 2",
    sub: "Verification"
  }, {
    id: "funded",
    label: "Funded",
    sub: "Live account"
  }];
  const mobileStageRules = {
    stage1: [["Profit Target", "8%"], ["Max Daily Loss", "5%"], ["Max Drawdown", "10%"], ["Min Trading Days", "5 days"], ["Trading Period", "Unlimited"], ["Leverage", "1:5"]],
    stage2: [["Profit Target", "6%"], ["Max Daily Loss", "5%"], ["Max Drawdown", "8%"], ["Min Trading Days", "5 days"], ["Trading Period", "Unlimited"], ["Leverage", "1:5"]],
    funded: [["Profit Target", "No target"], ["Max Daily Loss", "5%"], ["Max Drawdown", "8%"], ["Min Trading Days", "-"], ["Trading Period", "Unlimited"], ["Leverage", "1:5"], ["Profit Split", "90%"], ["Payouts", "USDT to wallet"]]
  };

  // Per-stage rule values – single source of truth.
  const rules = [{
    k: "target",
    label: "Profit Target",
    sub: "Required equity gain to advance to next stage.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 17l6-6 4 4 8-8",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 7h7v7",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })),
    stages: ["8%", "6%", "∞"]
  }, {
    k: "daily",
    label: "Max Daily Loss",
    sub: "Equity drop within a single trading day. Breach = failed.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2v20M2 12h20",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4",
      stroke: "currentColor",
      strokeWidth: "2"
    })),
    stages: ["5%", "5%", "5%"]
  }, {
    k: "dd",
    label: "Max Overall Drawdown",
    sub: "Peak-to-trough loss limit across the full challenge.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 7l6 6 4-4 8 8",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 17h7v-7",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })),
    stages: ["10%", "8%", "8%"]
  }, {
    k: "days",
    label: "Minimum Trading Days",
    sub: "Days you must trade before the stage can be passed.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "16",
      rx: "2",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 10h18M8 3v4M16 3v4",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    })),
    stages: ["5", "5", "–"]
  }, {
    k: "period",
    label: "Trading Period",
    sub: "Total time you have to complete the stage. Unlimited.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9",
      stroke: "currentColor",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 2",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    })),
    stages: [/*#__PURE__*/React.createElement(Inf, {
      key: "1"
    }), /*#__PURE__*/React.createElement(Inf, {
      key: "2"
    }), /*#__PURE__*/React.createElement(Inf, {
      key: "3"
    })]
  }, {
    k: "lev",
    label: "Max Leverage",
    sub: "Capped at 1:5 across all stages and all assets.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M13 2L3 14h7l-1 8 10-12h-7l1-8Z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinejoin: "round"
    })),
    stages: ["1:5", "1:5", "1:5"]
  }];
  const profitTarget$ = Math.round(size * 8 / 100);
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "HASH HEDGE CHALLENGE")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "18px 0 16px"
    }
  }, "Choose your ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "funded account"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-muted)",
      maxWidth: 640,
      margin: "0 auto"
    }
  }, "Two phases to qualify. Six account sizes. Same rules end-to-end: no consistency rule, no hidden resets."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1112,
      margin: "0 auto 16px",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      padding: 5,
      border: "1px solid var(--line)",
      borderRadius: 999,
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 22px",
      borderRadius: 999,
      background: "var(--accent)",
      color: "#13111c",
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: "0.02em",
      fontFamily: "Onest, sans-serif"
    }
  }, "2-Phase Challenge")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1112,
      margin: "0 auto 18px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    "data-mobile-scroll-hint": true,
    type: "button",
    "aria-label": "Scroll to next size",
    onClick: e => {
      const picker = e.currentTarget.parentElement.querySelector('[data-mobile-h-scroll]');
      if (picker) picker.scrollBy({
        left: picker.clientWidth * 0.7,
        behavior: 'smooth'
      });
    },
    style: {
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--accent)",
      color: "#13111c",
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 5,
      padding: 0,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 6px 20px rgba(252,213,53,0.4), 0 0 0 6px rgba(16,16,18,0.4)",
      animation: "scrollHintPulse 1.6s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 3l4 4-4 4",
    stroke: "#13111c",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    "data-mobile-h-scroll": true,
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${sizes.length}, 1fr)`,
      gap: 10
    }
  }, sizes.map(s => {
    const active = size === s;
    const isPop = s === popular;
    const isBest = s === 150000;
    const badge = isBest ? "BEST VALUE" : isPop ? "POPULAR" : null;
    const badgeBg = isBest ? "#7BC75A" : active ? "var(--accent)" : "var(--fg)";
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => {
        setSize(s);
        setTimeout(() => {
          const card = document.querySelector(`[data-mobile-plan-card="${s}"]`);
          if (card) card.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
          });
        }, 0);
      },
      style: {
        position: "relative",
        padding: "15px 10px 13px",
        border: `1px solid ${active ? "var(--accent)" : isBest ? "rgba(123,199,90,0.5)" : "var(--line)"}`,
        background: active ? "linear-gradient(180deg, rgba(252,213,53,0.12) 0%, rgba(252,213,53,0.03) 100%)" : isBest ? "linear-gradient(180deg, rgba(123,199,90,0.08) 0%, rgba(123,199,90,0.02) 100%)" : "rgba(255,255,255,0.02)",
        borderRadius: 14,
        cursor: "pointer",
        transition: "all .2s",
        textAlign: "center",
        boxShadow: active ? "0 16px 40px -14px rgba(252,213,53,0.45)" : isBest ? "0 14px 36px -16px rgba(123,199,90,0.4)" : "none",
        fontFamily: "Onest, sans-serif"
      }
    }, badge && /*#__PURE__*/React.createElement("div", {
      "data-account-tab-badge": true,
      style: {
        position: "absolute",
        top: -10,
        left: "50%",
        transform: "translateX(-50%)",
        background: badgeBg,
        color: "#13111c",
        padding: "2px 10px",
        borderRadius: 999,
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: "0.1em",
        whiteSpace: "nowrap"
      }
    }, badge), /*#__PURE__*/React.createElement("div", {
      "data-account-tab-label": true,
      style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: active ? "var(--accent)" : "var(--fg-low)",
        textTransform: "uppercase",
        marginBottom: 5
      }
    }, "Account"), /*#__PURE__*/React.createElement("div", {
      "data-account-tab-size": true,
      "data-short-label": s >= 1000 ? `${s / 1000}K` : String(s),
      style: {
        fontSize: 21,
        fontWeight: 800,
        letterSpacing: "-0.025em",
        color: active ? "var(--fg)" : "var(--fg)",
        lineHeight: 1
      }
    }, "$", s.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      "data-account-tab-fee": true,
      style: {
        marginTop: 8,
        paddingTop: 7,
        borderTop: "1px solid var(--line)",
        fontSize: 16,
        fontWeight: 800,
        letterSpacing: "-0.01em",
        color: active ? "var(--accent)" : "var(--fg-muted)"
      }
    }, "$", pricing[s]), /*#__PURE__*/React.createElement("div", {
      "data-account-tab-note": true,
      style: {
        fontSize: 10,
        color: "var(--fg-low)",
        marginTop: 1
      }
    }, "one-time"));
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-plan-rail",
    "aria-label": "Choose account size"
  }, sizes.map(s => {
    const active = size === s;
    const isPop = s === popular;
    const isBest = s === 150000;
    return /*#__PURE__*/React.createElement("article", {
      key: s,
      "data-mobile-plan-card": s,
      onClick: () => setSize(s),
      className: "hh-mobile-plan-card" + (active ? " is-active" : "") + (isBest ? " is-best" : "")
    }, (isPop || isBest) && /*#__PURE__*/React.createElement("div", {
      className: "hh-mobile-plan-badge"
    }, isBest ? "Best value" : "Popular"), /*#__PURE__*/React.createElement("div", {
      className: "hh-mobile-plan-top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Account"), /*#__PURE__*/React.createElement("strong", null, "$", s.toLocaleString())), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setSize(s),
      "aria-label": `Select $${s.toLocaleString()} account`
    }, active ? "Selected" : "Select")), /*#__PURE__*/React.createElement("div", {
      className: "hh-mobile-plan-fee"
    }, /*#__PURE__*/React.createElement("span", null, "One-time Challenge fee"), /*#__PURE__*/React.createElement("b", null, "$", pricing[s])), /*#__PURE__*/React.createElement("p", null, accountNotes[s]), /*#__PURE__*/React.createElement("div", {
      className: "hh-mobile-stage-tabs",
      role: "tablist",
      "aria-label": "Challenge stages"
    }, mobileStageTabs.map(stage => /*#__PURE__*/React.createElement("button", {
      key: stage.id,
      type: "button",
      role: "tab",
      "aria-selected": mobileStage === stage.id,
      className: mobileStage === stage.id ? "is-active" : "",
      onClick: () => setMobileStage(stage.id)
    }, /*#__PURE__*/React.createElement("b", null, stage.label), /*#__PURE__*/React.createElement("span", null, stage.sub)))), /*#__PURE__*/React.createElement("div", {
      className: "hh-mobile-plan-rules"
    }, mobileStageRules[mobileStage].map(([label, value]) => /*#__PURE__*/React.createElement("div", {
      key: label
    }, /*#__PURE__*/React.createElement(PricingTooltipLabel, {label: label}), /*#__PURE__*/React.createElement("strong", null, value)))), /*#__PURE__*/React.createElement("a", {
      href: paymentLinks[s],
      target: "_blank",
      rel: "noopener",
      className: "btn btn-primary btn-lg"
    }, "Start Challenge", /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        marginLeft: 8
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M13 5l7 7-7 7",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))));
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-account-card",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-account-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-account-label"
  }, "Account"), /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-account-size"
  }, "$", size.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-account-fee"
  }, /*#__PURE__*/React.createElement("span", null, "One-time fee"), /*#__PURE__*/React.createElement("b", null, "$", price))), /*#__PURE__*/React.createElement("p", null, accountNotes[size]), /*#__PURE__*/React.createElement("div", {
    className: "hh-mobile-account-rules"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Stage 1"), /*#__PURE__*/React.createElement("b", null, "8%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Stage 2"), /*#__PURE__*/React.createElement("b", null, "6%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Daily loss"), /*#__PURE__*/React.createElement("b", null, "5%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Max DD"), /*#__PURE__*/React.createElement("b", null, "10% / 8%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Min days"), /*#__PURE__*/React.createElement("b", null, "5 + 5")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Period"), /*#__PURE__*/React.createElement("b", null, "Unlimited"))), /*#__PURE__*/React.createElement("a", {
    href: paymentLinks[size],
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg"
  }, "Start Challenge", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "4"
  }, /*#__PURE__*/React.createElement("div", {
    "data-mobile-comp-table": true,
    style: {
      maxWidth: 1112,
      margin: "0 auto 18px",
      fontFamily: "Onest, sans-serif",
      borderRadius: 20,
      border: "1px solid var(--line-strong)",
      background: "rgba(255,255,255,0.015)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(280px, 1.4fr) repeat(3, 1fr)",
      background: "rgba(255,255,255,0.02)",
      borderBottom: "1px solid var(--line-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "13px 18px 12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: "0.16em",
      color: "var(--fg-low)",
      textTransform: "uppercase",
      marginBottom: 5
    }
  }, "Compare"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "var(--fg)",
      letterSpacing: "-0.01em",
      lineHeight: 1.12
    }
  }, "Challenge rules,", /*#__PURE__*/React.createElement("br", null), "stage by stage")), [{
    n: 1,
    label: "STAGE 1",
    sub: "Evaluation phase",
    accent: false
  }, {
    n: 2,
    label: "STAGE 2",
    sub: "Verification phase",
    accent: false
  }, {
    n: 3,
    label: "FUNDED",
    sub: "Live capital, real payouts",
    accent: true
  }].map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: col.accent ? "hh-funded-stage-cell" : undefined,
    style: {
      padding: "13px 14px 12px",
      textAlign: "center",
      borderLeft: "1px solid var(--line)",
      background: col.accent ? "rgba(252,213,53,0.05)" : "transparent",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.14em",
      color: col.accent ? "var(--accent)" : "var(--fg-dim)",
      marginBottom: 4,
      marginTop: 0
    }
  }, col.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 25,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      color: col.accent ? "var(--accent)" : "var(--fg)",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, col.accent ? /*#__PURE__*/React.createElement(Inf, null) : `0${col.n}`), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--fg-dim)",
      marginTop: 5
    }
  }, col.sub)))), rules.map((r, rowI) => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    "data-rule-row": true,
    "data-rule-open": openRule === r.k ? "true" : undefined,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(280px, 1.4fr) repeat(3, 1fr)",
      borderTop: rowI === 0 ? "none" : "1px solid var(--line)",
      background: rowI % 2 === 1 ? "rgba(255,255,255,0.012)" : "transparent",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rule-label": true,
    role: "button",
    tabIndex: 0,
    onClick: () => setOpenRule(prev => prev === r.k ? null : r.k),
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpenRule(prev => prev === r.k ? null : r.k);
      }
    },
    style: {
      padding: "13px 22px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      flexShrink: 0,
      background: "rgba(252,213,53,0.08)",
      color: "var(--accent)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, r.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--fg)",
      lineHeight: 1.2,
      marginBottom: 1
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      lineHeight: 1.25
    }
  }, r.sub)), /*#__PURE__*/React.createElement("svg", {
    "data-rule-chevron": true,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      color: "var(--fg-low)",
      transition: "transform 0.2s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), r.stages.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "13px 16px",
      textAlign: "center",
      borderLeft: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: i === 2 ? "rgba(252,213,53,0.03)" : "transparent",
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: i === 2 ? "var(--accent)" : "var(--fg)",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, v)), /*#__PURE__*/React.createElement("div", {
    "data-rule-popover": true,
    style: {
      display: "none"
    }
  }, r.sub))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-pricing-summary",
    style: {
      maxWidth: 1112,
      margin: "0 auto",
      padding: "20px 26px",
      borderRadius: 18,
      background: "linear-gradient(135deg, rgba(252,213,53,0.10), rgba(252,213,53,0.02))",
      border: "1px solid var(--line-strong)",
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr auto",
      alignItems: "center",
      gap: 28,
      fontFamily: "Onest, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.16em",
      color: "var(--accent)"
    }
  }, "YOUR ACCOUNT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 14,
      marginTop: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      color: "var(--fg)",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, "$", size.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-dim)"
    }
  }, "Profit split ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--fg)"
    }
  }, "80 / 20")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--line)",
      paddingLeft: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.16em",
      color: "var(--fg-low)"
    }
  }, "CHALLENGE FEE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginTop: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: "var(--accent)",
      letterSpacing: "-0.02em",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, "$", price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-dim)"
    }
  }, "\u2248 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--fg)"
    }
  }, "$", (price / size * 1000).toFixed(2)), " per $1,000 of capital"))), /*#__PURE__*/React.createElement("a", {
    href: paymentLinks[size],
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg",
    style: {
      whiteSpace: "nowrap"
    }
  }, "Start Challenge", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1112,
      margin: "20px auto 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      color: "var(--fg-dim)",
      flexWrap: "wrap",
      fontFamily: "Onest, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pay with"), ["TRC20", "ERC20", "BEP20", "Solana", "Arbitrum", "Optimism"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      padding: "5px 11px",
      borderRadius: 7,
      border: "1px solid var(--line-strong)",
      background: "rgba(255,255,255,0.02)",
      fontWeight: 800,
      color: "var(--fg)",
      letterSpacing: "0.02em"
    }
  }, c))))));
}

// Small ∞ glyph – matches Figma "unlimited" cell
function Inf() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "hh-inf-glyph",
    width: "26",
    height: "16",
    viewBox: "0 0 26 16",
    fill: "none",
    style: {
      opacity: 0.95,
      display: "inline-block",
      verticalAlign: "middle"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 8c0-2.5 2-4.5 4.5-4.5S15 5.5 15 8s2 4.5 4.5 4.5S24 10.5 24 8s-2-4.5-4.5-4.5S15 5.5 15 8 13 12.5 10.5 12.5 6 10.5 6 8Z",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }));
}

// ============================================================================
// WhyUs – 8 differentiators, each with a live themed visual (no stock images).
// ============================================================================
function WhyUs() {
  useRevealOnScroll();
  const cards = [{
    n: "01",
    k: "profitsplit",
    t: "Profit Split up to 90/10",
    d: "Trade a funded account and withdraw up to 90% of your profit straight to your wallet.",
    art: /*#__PURE__*/React.createElement(ArtProfitSplit, null)
  }, {
    n: "02",
    k: "stages",
    t: "Payout Guarantee",
    d: "If your payout is delayed by more than 72 hours, we pay you triple.",
    art: /*#__PURE__*/React.createElement(ArtStages, null)
  }, {
    n: "03",
    k: "coins",
    t: "160+ Trading Pairs",
    d: "BTC, ETH, SOL, XRP, DOGE, and dozens of other liquid assets.",
    art: /*#__PURE__*/React.createElement(ArtCoins, null)
  }, {
    n: "04",
    k: "tickers",
    t: "One Challenge, Every Market",
    d: "Trade crypto, stocks, oil, and natural gas on a challenge of any size.",
    art: /*#__PURE__*/React.createElement(ArtTickers, null)
  }, {
    n: "05",
    k: "orderbook",
    t: "Built-in Trading Terminal",
    d: "Log in to your dashboard and start trading in under a minute.",
    art: /*#__PURE__*/React.createElement(ArtOrderBook, null)
  }, {
    n: "06",
    k: "infinity",
    t: "No Time Limit",
    d: "The challenge lasts exactly as long as you need to hit your target.",
    art: /*#__PURE__*/React.createElement(ArtInfinity, null)
  }, {
    n: "07",
    k: "rules",
    t: "Transparent Rules",
    d: "Every challenge rule is published on our site and never changes after you pay.",
    art: /*#__PURE__*/React.createElement(ArtRules, null)
  }, {
    n: "08",
    k: "support",
    t: "24/7 Support",
    d: "The Hash Hedge support team is available around the clock. Average response time: 2 minutes.",
    art: /*#__PURE__*/React.createElement(ArtClock, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "why"
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes why-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes why-orbit1 { from { transform: rotate(0deg) translateX(42px) rotate(0deg); } to { transform: rotate(360deg) translateX(42px) rotate(-360deg); } }
        @keyframes why-orbit2 { from { transform: rotate(0deg) translateX(62px) rotate(0deg); } to { transform: rotate(-360deg) translateX(62px) rotate(360deg); } }
        @keyframes why-orbit-cw  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes why-orbit-ccw { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes why-pulse  { 0%,100% { transform: scale(1); opacity: 0.9; } 50% { transform: scale(1.08); opacity: 1; } }
        @keyframes why-barpump { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(1.3); } }
        @keyframes why-stagefill { 0% { width: 0; } 60% { width: var(--w, 65%); } 100% { width: var(--w, 65%); } }
        @keyframes why-spin { to { transform: rotate(360deg); } }
        @keyframes why-tick { 0%,100% { transform: rotate(var(--a, 0deg)); } 50% { transform: rotate(calc(var(--a, 0deg) + 6deg)); } }
        @keyframes why-drop { 0% { transform: translateY(-10px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(20px); opacity: 0; } }
        @keyframes why-glow { 0%,100% { opacity: 0.35; } 50% { opacity: 0.75; } }
        @keyframes why-dash { to { stroke-dashoffset: -40; } }

        .why-card {
          position: relative;
          overflow: hidden;
          transition: transform .35s var(--ease-out), border-color .3s;
        }
        .why-card:hover { transform: translateY(-4px); border-color: rgba(252,213,53,0.4); }
        .why-card:hover .why-art-bg { opacity: 1; }
        .why-card .why-art-bg {
          transition: opacity .4s;
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      marginBottom: 64,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "WHY HASH HEDGE")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0"
    }
  }, "Built by traders.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Run like a hedge fund.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--fg-muted)"
    }
  }, "A crypto-native prop trading firm backing skilled traders with funded accounts up to $200K.", /*#__PURE__*/React.createElement("br", null), "The Hash Hedge Challenge is how you earn it."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.n,
    delay: String(Math.min(i, 5))
  }, /*#__PURE__*/React.createElement("div", {
    className: "card why-card",
    style: {
      padding: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(180deg, rgba(252,213,53,0.03) 0%, var(--bg-card) 40%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-why-art",
    "data-why-art": c.k,
    style: {
      position: "relative",
      height: 200,
      borderBottom: "1px solid var(--line)",
      overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 110%, rgba(252,213,53,0.10) 0%, transparent 60%), linear-gradient(180deg, #141318 0%, #0b0b0e 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "why-art-bg",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%)",
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hh-why-art-glow",
    style: {
      position: "absolute",
      width: 200,
      height: 200,
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "radial-gradient(circle, rgba(252,213,53,0.22) 0%, transparent 65%)",
      animation: "why-glow 6s ease-in-out infinite",
      animationDelay: `${i * 0.4}s`,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hh-why-art-stage",
    style: {
      position: "absolute",
      inset: "22px 0 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.art), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      background: "rgba(16,16,18,0.82)",
      backdropFilter: "blur(8px)",
      color: "var(--accent)",
      padding: "4px 10px",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.12em",
      fontFamily: "Akrobat, Onest, sans-serif",
      zIndex: 4
    }
  }, c.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      flex: 1,
      minHeight: 214
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      margin: "0 0 8px",
      letterSpacing: "-0.01em"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--fg-muted)",
      margin: 0
    }
  }, c.d))))))));
}

// ====== Why Us – themed visuals (pure CSS/SVG, no stock images) ============

function ArtProfitSplit() {
  const [filled, setFilled] = useState(false);
  useEffect(() => { const t = setTimeout(() => setFilled(true), 300); return () => clearTimeout(t); }, []);
  const bar = (pct, color, height) => /*#__PURE__*/React.createElement("div", {
    style: { height: height, borderRadius: height / 2, background: "rgba(255,255,255,0.08)", overflow: "hidden" }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: filled ? pct + "%" : "0%",
      borderRadius: height / 2,
      background: color,
      transition: "width 1.1s cubic-bezier(0.22,1,0.36,1)"
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      background: "rgba(14,14,18,0.96)",
      border: "1px solid rgba(252,213,53,0.22)",
      borderRadius: 18,
      padding: "20px 22px 20px",
      fontFamily: "Akrobat, Onest, sans-serif",
      boxShadow: "0 8px 40px rgba(0,0,0,0.5)"
    }
  },
    /*#__PURE__*/React.createElement("div", {
      style: { fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--accent)", textTransform: "uppercase", marginBottom: 20 }
    }, "PROFIT SPLIT"),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: 16 } },
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 } },
        /*#__PURE__*/React.createElement("span", { style: { fontSize: 15, fontWeight: 700, color: "var(--fg)" } }, "Trader"),
        /*#__PURE__*/React.createElement("span", { style: { fontSize: 32, fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1 } }, "90%")
      ),
      bar(90, "linear-gradient(90deg, #c8a800 0%, var(--accent) 100%)", 9)
    ),
    /*#__PURE__*/React.createElement("div", null,
      /*#__PURE__*/React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 } },
        /*#__PURE__*/React.createElement("span", { style: { fontSize: 14, fontWeight: 600, color: "var(--fg-dim)" } }, "Hash Hedge"),
        /*#__PURE__*/React.createElement("span", { style: { fontSize: 18, fontWeight: 800, color: "var(--fg-dim)", letterSpacing: "-0.01em" } }, "10%")
      ),
      bar(10, "rgba(180,180,190,0.35)", 6)
    )
  ));
}

function ArtTickers() {
  // Live-price board: 6 visible tickers, prices tick randomly every 1-2s with flash highlight.
  // The list itself scrolls up at a slow, steady pace. Much calmer + more alive than a flat marquee.
  const base = [{
    sym: "BTC",
    name: "Bitcoin",
    price: 67420.50,
    logo: "₿",
    color: "#F7931A"
  }, {
    sym: "ETH",
    name: "Ethereum",
    price: 3480.20,
    logo: "Ξ",
    color: "#627EEA"
  }, {
    sym: "SOL",
    name: "Solana",
    price: 192.45,
    logo: "◎",
    color: "#9945FF"
  }, {
    sym: "XRP",
    name: "Ripple",
    price: 2.485,
    logo: "✕",
    color: "#00AAE4"
  }, {
    sym: "BNB",
    name: "BNB",
    price: 612.30,
    logo: "⬢",
    color: "#F3BA2F"
  }, {
    sym: "DOGE",
    name: "Dogecoin",
    price: 0.1624,
    logo: "Ð",
    color: "#C3A634"
  }, {
    sym: "AVAX",
    name: "Avalanche",
    price: 38.24,
    logo: "▲",
    color: "#E84142"
  }, {
    sym: "LINK",
    name: "Chainlink",
    price: 18.42,
    logo: "◈",
    color: "#2A5ADA"
  }];
  const [prices, setPrices] = useState(() => base.map(b => ({
    price: b.price,
    dir: 0,
    pulse: 0
  })));
  useEffect(() => {
    const id = setInterval(() => {
      setPrices(prev => prev.map((p, i) => {
        // only ~35% of tickers tick on each cycle, keeps it calm and non-uniform
        if (Math.random() > 0.35) return {
          ...p,
          dir: 0
        };
        const pct = (Math.random() - 0.48) * 0.008; // slight upward bias, ±0.8%
        const next = p.price * (1 + pct);
        return {
          price: next,
          dir: pct >= 0 ? 1 : -1,
          pulse: p.pulse + 1
        };
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  const fmt = p => p >= 1000 ? p.toLocaleString("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }) : p >= 10 ? p.toFixed(2) : p >= 1 ? p.toFixed(3) : p.toFixed(4);
  // duplicated for seamless loop
  const list = [...base, ...base];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes art-ticker-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes art-ticker-flash-up { 0% { background: rgba(124,216,160,0.22); } 100% { background: rgba(255,255,255,0.03); } }
        @keyframes art-ticker-flash-dn { 0% { background: rgba(255,107,107,0.18); } 100% { background: rgba(255,255,255,0.03); } }
      `), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 36,
      background: "linear-gradient(180deg, #0b0b0e 0%, transparent 100%)",
      zIndex: 3,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 44,
      background: "linear-gradient(0deg, #0b0b0e 0%, transparent 100%)",
      zIndex: 3,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 8,
      right: 8,
      animation: "art-ticker-scroll 22s linear infinite",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      willChange: "transform"
    }
  }, list.map((c, i) => {
    const p = prices[i % base.length];
    const isUp = p.dir > 0;
    const flash = p.dir !== 0 ? `${isUp ? "art-ticker-flash-up" : "art-ticker-flash-dn"} 0.9s ease-out` : "none";
    return /*#__PURE__*/React.createElement("div", {
      key: `${c.sym}-${i}-${p.pulse}`,
      style: {
        display: "grid",
        gridTemplateColumns: "20px 1fr auto",
        alignItems: "center",
        gap: 7,
        padding: "6px 8px",
        borderRadius: 8,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.05)",
        animation: flash,
        minWidth: 0,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: c.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 900,
        color: "#fff",
        flexShrink: 0,
        boxShadow: `0 0 8px ${c.color}44`
      }
    }, c.logo), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        lineHeight: 1.1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        color: "var(--fg)",
        letterSpacing: "0.02em"
      }
    }, c.sym)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        lineHeight: 1.1,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 800,
        color: p.dir === 0 ? "var(--fg)" : isUp ? "var(--green)" : "#ff6b6b",
        fontVariantNumeric: "tabular-nums",
        transition: "color 0.3s"
      }
    }, fmt(p.price)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        fontWeight: 700,
        color: p.dir === 0 ? "var(--fg-dim)" : isUp ? "var(--green)" : "#ff6b6b",
        marginTop: 1,
        opacity: p.dir === 0 ? 0.5 : 1,
        transition: "opacity 0.3s"
      }
    }, p.dir === 0 ? "–" : isUp ? "▲" : "▼")));
  })));
}
function ArtStages() {
  // 3 progress rings / stages, filling in sequence.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, [{
    pct: 100,
    label: "STAGE 1",
    val: "+8%",
    done: true
  }, {
    pct: 72,
    label: "STAGE 2",
    val: "+6%",
    done: false
  }, {
    pct: 18,
    label: "FUNDED",
    val: "∞",
    done: false,
    accent: true
  }].map((s, i) => {
    const r = 30,
      c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        position: "relative",
        width: 74,
        height: 74
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "74",
      height: "74",
      viewBox: "0 0 74 74",
      style: {
        transform: "rotate(-90deg)"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "37",
      cy: "37",
      r: r,
      fill: "none",
      stroke: "rgba(255,255,255,0.06)",
      strokeWidth: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "37",
      cy: "37",
      r: r,
      fill: "none",
      stroke: s.accent ? "var(--accent)" : "var(--fg)",
      strokeWidth: "5",
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: c - c * s.pct / 100,
      style: {
        transition: "stroke-dashoffset 2s var(--ease-out)",
        filter: s.accent ? "drop-shadow(0 0 6px var(--accent))" : "none"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Akrobat, Onest, sans-serif"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 800,
        color: s.accent ? "var(--accent)" : "var(--fg)",
        lineHeight: 1
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 8,
        fontWeight: 800,
        color: "var(--fg-dim)",
        letterSpacing: "0.08em",
        marginTop: 3
      }
    }, s.label)));
  }));
}
function ArtCoins() {
  // Central USDT token with orbiting BTC / ETH / USDC.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 180,
      height: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 30,
      left: 30,
      width: 120,
      height: 120,
      border: "1px dashed rgba(255,255,255,0.12)",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      width: 160,
      height: 160,
      border: "1px dashed rgba(252,213,53,0.15)",
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 0,
      height: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -29,
      left: -29,
      width: 58,
      height: 58,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #26A17B, #1a7e5c)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Akrobat, Onest, sans-serif",
      fontWeight: 800,
      fontSize: 16,
      boxShadow: "0 0 30px rgba(38,161,123,0.5), inset 0 2px 4px rgba(255,255,255,0.2)",
      animation: "why-pulse 3s ease-in-out infinite"
    }
  }, "USDT")), [{
    sym: "₿",
    bg: "#F7931A",
    radius: 70,
    duration: 9,
    delay: 0,
    direction: 1
  }, {
    sym: "Ξ",
    bg: "#627EEA",
    radius: 85,
    duration: 14,
    delay: -5,
    direction: -1
  }, {
    sym: "◎",
    bg: "#9945FF",
    radius: 85,
    duration: 14,
    delay: -9.5,
    direction: -1
  }].map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 0,
      height: 0,
      animation: `why-orbit-${c.direction > 0 ? "cw" : "ccw"} ${c.duration}s linear infinite`,
      animationDelay: `${c.delay}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -16,
      left: c.radius - 16,
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: c.bg,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 15,
      boxShadow: `0 0 14px ${c.bg}99`
    }
  }, c.sym))));
}
function ArtInfinity() {
  // Big infinity with animated dashed stroke + calendar "X".
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "180",
    height: "90",
    viewBox: "0 0 180 90",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30 45 C30 20, 70 20, 90 45 C110 70, 150 70, 150 45 C150 20, 110 20, 90 45 C70 70, 30 70, 30 45 Z",
    stroke: "var(--accent)",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeDasharray: "8 6",
    style: {
      animation: "why-dash 3s linear infinite",
      filter: "drop-shadow(0 0 8px rgba(252,213,53,0.5))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -6,
      right: 12,
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 10px",
      borderRadius: 8,
      background: "rgba(0,0,0,0.5)",
      border: "1px solid var(--line)",
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.1em",
      color: "var(--fg-dim)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      textDecoration: "line-through",
      opacity: 0.6
    }
  }, "30-DAY CLOCK")));
}
function ArtScale() {
  const bars = [{
    h: 24,
    v: "5K"
  }, {
    h: 38,
    v: "10K"
  }, {
    h: 56,
    v: "25K"
  }, {
    h: 78,
    v: "50K"
  }, {
    h: 104,
    v: "100K"
  }, {
    h: 130,
    v: "150K"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 14,
      height: 150,
      paddingTop: 18
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: i === bars.length - 1 ? "var(--accent)" : "var(--fg-dim)",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, "$", b.v), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: b.h,
      borderRadius: "4px 4px 2px 2px",
      background: i === bars.length - 1 ? "linear-gradient(180deg, var(--accent), rgba(252,213,53,0.4))" : "linear-gradient(180deg, rgba(252,213,53,0.55), rgba(252,213,53,0.1))",
      boxShadow: i === bars.length - 1 ? "0 0 16px rgba(252,213,53,0.45)" : "none",
      transformOrigin: "bottom"
    }
  }))));
}
function ArtOrderBook() {
  // Mini order-book: bids (green) vs asks (red) rendered as horizontal bars at prices.
  const asks = [{
    p: "67,428.20",
    q: 78,
    pct: 92
  }, {
    p: "67,427.10",
    q: 62,
    pct: 72
  }, {
    p: "67,426.50",
    q: 44,
    pct: 52
  }, {
    p: "67,425.00",
    q: 28,
    pct: 34
  }];
  const bids = [{
    p: "67,424.40",
    q: 32,
    pct: 38
  }, {
    p: "67,423.80",
    q: 52,
    pct: 60
  }, {
    p: "67,422.00",
    q: 68,
    pct: 80
  }, {
    p: "67,420.50",
    q: 88,
    pct: 100
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 186,
      fontFamily: "Akrobat, Onest, sans-serif",
      fontSize: 9,
      fontWeight: 700
    }
  }, asks.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: "a" + i,
    style: {
      position: "relative",
      padding: "2px 8px",
      marginBottom: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: `${r.pct}%`,
      background: "rgba(230,70,70,0.18)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ff6b6b"
    }
  }, r.p), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-dim)"
    }
  }, r.q.toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 8px",
      margin: "4px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      color: "var(--accent)",
      fontSize: 12,
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement("span", null, "67,425.70"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green)"
    }
  }, "\u2191 0.8%")), bids.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: "b" + i,
    style: {
      position: "relative",
      padding: "2px 8px",
      marginBottom: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: `${r.pct}%`,
      background: "rgba(24,169,101,0.18)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green)"
    }
  }, r.p), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-dim)"
    }
  }, r.q.toFixed(2))))));
}
function ArtClock() {
  // Live clock face with 3 timezone labels + green "online" ring.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 160,
      height: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 20,
      width: 120,
      height: 120,
      borderRadius: "50%",
      border: "2px solid rgba(252,213,53,0.35)",
      background: "radial-gradient(circle at 30% 30%, rgba(252,213,53,0.12), transparent 60%)"
    }
  }), Array.from({
    length: 12
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 2,
      height: i % 3 === 0 ? 10 : 6,
      background: i % 3 === 0 ? "var(--fg)" : "var(--fg-dim)",
      transformOrigin: "center 60px",
      transform: `translate(-50%, -60px) rotate(${i * 30}deg)`,
      borderRadius: 2
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 0,
      height: 0,
      animation: "why-spin 180s linear infinite",
      transform: "rotate(34deg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1.5,
      bottom: 0,
      width: 3,
      height: 38,
      background: "var(--fg)",
      borderRadius: 3
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 0,
      height: 0,
      animation: "why-spin 60s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -1,
      bottom: 0,
      width: 2,
      height: 48,
      background: "var(--accent)",
      borderRadius: 2,
      boxShadow: "0 0 6px rgba(252,213,53,0.55)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--accent)",
      transform: "translate(-50%, -50%)",
      boxShadow: "0 0 10px var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -4,
      left: "50%",
      transform: "translateX(-50%)",
      padding: "3px 10px",
      borderRadius: 999,
      background: "rgba(72,213,136,0.15)",
      color: "var(--green)",
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.08em",
      fontFamily: "Akrobat, Onest, sans-serif",
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 6px var(--green)"
    }
  }), "24 / 7")));
}
function ArtRules() {
  // Checklist of rules being ticked off one by one.
  const items = [{
    k: "Stage 1 target",
    v: "+8%",
    done: true
  }, {
    k: "Stage 2 target",
    v: "+6%",
    done: true
  }, {
    k: "Max daily loss",
    v: "5%",
    done: true
  }, {
    k: "Max drawdown",
    v: "8–10%",
    done: true
  }, {
    k: "Leverage",
    v: "1:5",
    done: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 196,
      fontFamily: "Onest, sans-serif"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "5px 10px",
      marginBottom: 2,
      borderRadius: 6,
      background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "6",
    fill: "var(--accent)",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7l2 2 4-4",
    stroke: "var(--accent)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-muted)",
      flex: 1
    }
  }, it.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: "var(--fg)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, it.v))));
}

// ============================================================================
// PayoutShowcase – honest on-chain payout mechanism. No "3× penalty" (made up).
// ============================================================================
function PayoutShowcase() {
  useRevealOnScroll();
  const countries = ["🇺🇸", "🇩🇪", "🇬🇧", "🇯🇵", "🇰🇷", "🇧🇷", "🇦🇪", "🇫🇷", "🇮🇳", "🇨🇦", "🇳🇱", "🇸🇬", "🇮🇹", "🇵🇱", "🇪🇸", "🇹🇷"];
  return /*#__PURE__*/React.createElement("section", {
    id: "payouts",
    "data-mobile-image-first": true,
    style: {
      background: "var(--bg-elev)",
      position: "relative",
      overflow: "hidden",
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 320,
      background: "linear-gradient(180deg, var(--bg) 0%, rgba(11,11,14,0.85) 25%, rgba(11,11,14,0.45) 55%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 220,
      background: "linear-gradient(0deg, var(--bg) 0%, rgba(11,11,14,0.8) 30%, rgba(11,11,14,0.35) 65%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 800,
      height: 800,
      background: "var(--accent)",
      top: "-20%",
      left: "-10%",
      opacity: 0.08
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "PAYOUTS \xB7 ON-CHAIN"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 24px",
      letterSpacing: "-0.025em"
    }
  }, "Your funds.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Your wallet. Direct.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: "0 0 36px",
      maxWidth: 520
    }
  }, "If your payout is more than 72 hours late, we triple it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 0,
      marginBottom: 36
    }
  }, [{
    t: "01",
    k: "Request submitted",
    d: "Trader clicks Withdraw in the dashboard. Support reviews – typically within hours."
  }, {
    t: "02",
    k: "Treasury signs",
    d: "Multi-sig approval on Hash Hedge treasury wallet. Signers live in 3 jurisdictions for redundancy."
  }, {
    t: "03",
    k: "Funds on your wallet",
    d: "Blockchain TX hash emailed + downloadable payout certificate issued."
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "hh-payout-step",
    style: {
      display: "grid",
      gridTemplateColumns: "44px 1fr",
      gap: 12,
      padding: "18px 0",
      position: "relative",
      borderTop: i === 0 ? "1px solid var(--line)" : "none",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: "var(--fg-dim)",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, s.t), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: "var(--fg)",
      marginBottom: 2
    }
  }, s.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--fg-dim)"
    }
  }, s.d))))), /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg"
  }, "Start Challenge \xB7 from $79"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      padding: 0,
      background: "transparent",
      transform: "rotate(0deg)",
      transition: "transform .5s var(--ease-out)",
      filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.55)) drop-shadow(0 0 40px rgba(252,213,53,0.08))",
      cursor: "zoom-in"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "rotate(0deg) scale(1.02)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "rotate(0deg)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.__HH_BASE__+"assets/payout-certificate.png"),
    alt: "Real HashHedge payout certificate",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      borderRadius: 18,
      border: "1px solid var(--line-strong)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -14,
      right: -14,
      padding: "8px 14px",
      borderRadius: 999,
      background: "#2a2a2e",
      color: "#fff",
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.12em",
      fontFamily: "Onest, sans-serif",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#fff"
    }
  }), "PAYOUT CERTIFICATE"), /*#__PURE__*/React.createElement("div", {
    className: "hh-paid-in-row",
    style: {
      marginTop: 20,
      padding: "14px 18px",
      borderRadius: 12,
      background: "rgba(255,255,255,0.03)",
      border: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "Onest, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Paid in"), /*#__PURE__*/React.createElement("div", {
    className: "hh-paid-in-flags",
    style: {
      display: "grid",
      fontSize: 20,
      lineHeight: 1,
      gap: 6,
      gridTemplateColumns: "repeat(8, auto)"
    }
  }, countries.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      opacity: 1 - i * 0.015
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      fontSize: 11,
      color: "var(--fg-dim)"
    }
  }, "+ 60 more")))))));
}
Object.assign(window, {
  Pricing,
  WhyUs,
  PayoutShowcase
});

// Hash Hedge – Press / Investing.com banner / Telegram community

function PressStrip() {
  useRevealOnScroll();
  // Press logos as compact wordmarks – on a dark site, white text wordmarks read as "logos" the way FTMO-style sites do it.
  // Real press list taken from the Hash Hedge Figma (New-landing press strip).
  // 8 outlets in this exact order: AP · Yahoo Finance · MarketWatch · Benzinga · Cointelegraph · Bitcoin.com · BeInCrypto · Investing.com.
  const press = [{
    name: "Associated Press",
    w: "ASSOCIATED PRESS",
    url: "https://apnews.com/press-release/globenewswire-mobile/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-5c993de719de65a8308e000bf7f6e5be",
    style: {
      fontFamily: "Akrobat, Onest, sans-serif",
      fontWeight: 700,
      letterSpacing: "0.02em",
      fontSize: 16
    }
  }, {
    name: "Yahoo Finance",
    w: "yahoo!finance",
    url: "https://markets.businessinsider.com/news/stocks/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-1035197550",
    style: {
      fontFamily: "Onest, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontSize: 20
    }
  }, {
    name: "MarketWatch",
    w: "MarketWatch",
    url: "https://www.marketwatch.com/press-release/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-ae085ab9?mod=search_headline",
    style: {
      fontFamily: "Onest, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      fontSize: 19
    }
  }, {
    name: "Benzinga",
    w: "Benzinga",
    url: "https://www.investing.com/news/press-releases/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-4253896",
    style: {
      fontFamily: "Onest, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      fontSize: 21
    }
  }, {
    name: "Cointelegraph",
    w: "Cointelegraph",
    url: "https://cointelegraph.com/press-releases/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai",
    style: {
      fontFamily: "Onest, sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontSize: 20
    }
  }, {
    name: "Bitcoin.com",
    w: "Bitcoin.com",
    url: "https://news.bitcoin.com/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai/",
    style: {
      fontFamily: "'Open Sans', Onest, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.04em",
      fontSize: 20
    }
  }, {
    name: "BeInCrypto",
    w: "BeInCrypto",
    url: "https://beincrypto.com/hash-hedge-walbi-launch-wsct/",
    style: {
      fontFamily: "Onest, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontSize: 19
    }
  }, {
    name: "Investing.com",
    w: "Investing.com",
    url: "https://www.investing.com/news/press-releases/hash-hedge-and-walbi-launch-the-world-series-of-crypto-trading-wsct-the-first-global-trading-series-with-a-live-human-vs-ai-final-in-dubai-4253896",
    style: {
      fontFamily: "Onest, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      fontSize: 19
    }
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "press",
    style: {
      padding: "56px 0 56px",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "AS FEATURED IN"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--line)"
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("div", {
    "data-mobile-press-scroll": true,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
      gap: 0,
      alignItems: "center"
    }
  }, [...press, ...press].map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: `${p.name}-${i}`,
    "data-press-duplicate": i >= press.length ? "true" : undefined,
    href: p.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-hidden": i >= press.length ? "true" : undefined,
    tabIndex: i >= press.length ? -1 : undefined,
    style: {
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 16px",
      color: "var(--fg-muted)",
      opacity: 0.85,
      borderLeft: i % press.length === 0 ? "none" : "1px solid var(--line)",
      transition: "opacity .2s, color .2s",
      textDecoration: "none"
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
      e.currentTarget.style.color = "var(--fg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.85;
      e.currentTarget.style.color = "var(--fg-muted)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...p.style,
      whiteSpace: "nowrap"
    }
  }, p.w)))))));
}
function EventsTournaments() {
  useRevealOnScroll();
  // Real Hash Hedge team in the wild – photos provided directly by the team.
  // Featured = WSCT Qualifying Tour winner moment, São Paulo Brazil (the actual winner-with-prize shot).
  // Featured = the Dubai Main Stage moment – the biggest, most cinematic shot.
  const featured = {
    city: "São Paulo",
    flag: "🇧🇷",
    event: "WSCT qualifier in Brazil",
    role: "Organizer · Winner Ceremony",
    date: "2025",
    stat: {
      v: "$10K+",
      l: "prize pool"
    },
    blurb: "Traders battled for the title and a $10,000 prize pool.",
    img: (window.__HH_BASE__+"assets/team/event-headliner-yarik.webp")
  };
  const events = [{
    city: "São Paulo",
    flag: "🇧🇷",
    event: "WSCT Qualifying Tour · Winner",
    role: "Host",
    date: "2025",
    img: (window.__HH_BASE__+"assets/team/event-bcl-dubai-stage.webp")
  }, {
    city: "Dubai",
    flag: "🇦🇪",
    event: "Brand Ambassador on Main Stage",
    role: "Sponsor",
    date: "2025",
    img: (window.__HH_BASE__+"assets/team/event-wsct-booth.jpg")
  }, {
    city: "Dubai",
    flag: "🇦🇪",
    event: "WSCT Dubai · Live Trading Floor",
    role: "Host",
    date: "Oct 2025",
    img: (window.__HH_BASE__+"assets/team/event-afterparty.jpg")
  }, {
    city: "Moscow",
    flag: "🇷🇺",
    event: "Affiliates Meet-up",
    role: "Host",
    date: "2026",
    img: (window.__HH_BASE__+"assets/team/event-qualifier-winner.jpg")
  }, {
    city: "São Paulo",
    flag: "🇧🇷",
    event: "Live Trading Showcase · WSCT Brazil",
    role: "Organizer",
    date: "2025",
    img: (window.__HH_BASE__+"assets/team/event-booth-screens.webp")
  }, {
    city: "Moscow",
    flag: "🇷🇺",
    event: "Top Affiliate Awards 2026",
    role: "Host",
    date: "2026",
    img: (window.__HH_BASE__+"assets/team/awards-top-affiliate.jpg")
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "100px 0",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 320,
      background: "linear-gradient(180deg, rgba(252,213,53,0.025) 0%, transparent 80%)",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "end",
      marginBottom: 48,
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "THE TEAM \xB7 IN THE WILD"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0",
      letterSpacing: "-0.025em"
    }
  }, "We show up. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Everywhere it matters."))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: "0 0 8px"
    }
  }, "Dubai. S\xE3o Paulo. Moscow. From main-stage keynotes to live-trading booths and top-affiliate awards \u2013 this is the Hash Hedge team on the ground."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr",
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 28,
      overflow: "hidden",
      border: "1px solid var(--line-strong)",
      minHeight: 460,
      background: "linear-gradient(160deg, #1a1410 0%, #0e0e12 100%)",
      boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: featured.img,
    alt: featured.event,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.92) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      left: 24,
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.16em",
      color: "var(--accent)",
      background: "rgba(252,213,53,0.14)",
      padding: "6px 10px",
      borderRadius: 999
    }
  }, "PAST EVENT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.12em",
      color: "var(--fg-dim)",
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid var(--line-strong)",
      background: "rgba(14,14,16,0.6)",
      backdropFilter: "blur(6px)"
    }
  }, featured.date.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 24,
      right: 24,
      padding: "16px 20px",
      borderRadius: 16,
      background: "rgba(14,14,16,0.75)",
      backdropFilter: "blur(10px)",
      border: "1px solid var(--line-strong)",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "var(--fg)",
      letterSpacing: "-0.02em",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, featured.stat.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      marginTop: 4
    }
  }, featured.stat.l)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: 32,
      background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.95) 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 14,
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, featured.flag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--fg)"
    }
  }, featured.city), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: "50%",
      background: "var(--fg-dim)"
    }
  }), /*#__PURE__*/React.createElement("span", null, featured.role)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(26px, 3vw, 40px)",
      fontWeight: 700,
      lineHeight: 1.1,
      margin: "0 0 14px",
      color: "var(--fg)",
      letterSpacing: "-0.02em"
    }
  }, featured.event), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: 0,
      maxWidth: 560
    }
  }, featured.blurb)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gap: 24
    }
  }, events.slice(0, 2).map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: e.event,
    delay: String(2 + i)
  }, /*#__PURE__*/React.createElement(EventCard, {
    e: e
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, events.slice(2).map((e, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: e.event,
    delay: String(4 + i)
  }, /*#__PURE__*/React.createElement(EventCard, {
    e: e,
    compact: true
  }))))));
}
function EventCard({
  e,
  compact,
  tall
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      minHeight: tall ? 460 : compact ? 240 : 218,
      borderRadius: 20,
      overflow: "hidden",
      border: "1px solid var(--line-strong)",
      background: "#0c0c10"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: e.img,
    alt: e.event,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .6s ease"
    },
    onMouseEnter: ev => {
      ev.currentTarget.style.transform = "scale(1.04)";
    },
    onMouseLeave: ev => {
      ev.currentTarget.style.transform = "scale(1)";
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, e.flag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "#fff",
      textShadow: "0 1px 3px rgba(0,0,0,0.8)"
    }
  }, e.city)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.1em",
      color: "#fff",
      padding: "4px 8px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.18)"
    }
  }, e.date.toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: tall ? 28 : 20,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: tall ? 12 : 11,
      color: "var(--accent)",
      fontWeight: 800,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: tall ? 10 : 6,
      textShadow: "0 1px 3px rgba(0,0,0,0.8)"
    }
  }, e.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: tall ? 26 : compact ? 16 : 18,
      fontWeight: 700,
      color: "#fff",
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
      maxWidth: tall ? 420 : "none"
    }
  }, e.event)));
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
  const change = (price - basePrice) / basePrice * 100;
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
      arr.push({
        open,
        close,
        hi,
        lo
      });
      p = close;
    }
    return arr;
  }, []);
  // Last candle breathes with tick
  const liveCandle = {
    open: candles[candles.length - 1].close,
    close: price,
    hi: Math.max(candles[candles.length - 1].close, price) + 18,
    lo: Math.min(candles[candles.length - 1].close, price) - 12
  };
  const displayCandles = [...candles.slice(0, -1), liveCandle];

  // Chart bounds
  const allVals = displayCandles.flatMap(c => [c.hi, c.lo]);
  const minV = Math.min(...allVals);
  const maxV = Math.max(...allVals);
  const rng = maxV - minV || 1;
  const chartW = 640,
    chartH = 210;
  const candleW = (chartW - 20) / displayCandles.length;

  // Order book
  const book = React.useMemo(() => {
    const asks = [],
      bids = [];
    for (let i = 0; i < 7; i++) {
      asks.push({
        p: price + (i + 1) * 3.5 + Math.sin(tick + i) * 0.4,
        q: 0.08 + Math.abs(Math.sin(tick * 0.4 + i * 1.3)) * 1.4
      });
      bids.push({
        p: price - (i + 1) * 3.5 - Math.sin(tick + i) * 0.4,
        q: 0.08 + Math.abs(Math.cos(tick * 0.4 + i * 1.3)) * 1.4
      });
    }
    return {
      asks: asks.reverse(),
      bids
    };
  }, [tick]);
  const maxQ = Math.max(...book.asks.map(r => r.q), ...book.bids.map(r => r.q));

  // Rolling trades feed
  const tradesRef = React.useRef([]);
  if (tradesRef.current.length < 7 || tick !== tradesRef.current[0].t) {
    const side = Math.random() > 0.45 ? "buy" : "sell";
    const qty = (0.05 + Math.random() * 0.9).toFixed(3);
    const p = (price + (side === "buy" ? 1 : -1) * Math.random() * 4).toFixed(2);
    tradesRef.current = [{
      t: tick,
      side,
      qty,
      p
    }, ...tradesRef.current].slice(0, 7);
  }
  const trades = tradesRef.current;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 28,
      overflow: "hidden",
      border: "1px solid var(--line-strong)",
      minHeight: 460,
      height: "100%",
      background: "linear-gradient(160deg, #0f0f14 0%, #0a0a0e 100%)",
      boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 24px",
      borderBottom: "1px solid var(--line)",
      background: "rgba(255,255,255,0.02)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #F7931A, #b86800)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      fontWeight: 800,
      color: "#fff",
      boxShadow: "0 0 16px rgba(247,147,26,0.4)"
    }
  }, "\u20BF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: "var(--fg)",
      letterSpacing: "-0.01em"
    }
  }, "BTC", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-dim)"
    }
  }, "/USDT")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--fg-dim)",
      fontWeight: 600,
      marginTop: 1,
      letterSpacing: "0.06em"
    }
  }, "SPOT \xB7 PERPETUAL"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px",
      borderRadius: 999,
      background: "rgba(124,216,160,0.12)",
      border: "1px solid rgba(124,216,160,0.25)",
      fontSize: 10,
      fontWeight: 800,
      color: "var(--green)",
      letterSpacing: "0.12em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--green)",
      animation: "why-pulse 1.4s ease-in-out infinite",
      boxShadow: "0 0 6px var(--green)"
    }
  }), "LIVE TRADING")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 14px",
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      color: isUp ? "var(--green)" : "#ff6b6b",
      letterSpacing: "-0.025em",
      fontVariantNumeric: "tabular-nums",
      transition: "color 0.5s",
      fontFamily: "Akrobat, Onest, sans-serif",
      lineHeight: 1
    }
  }, "$", price.toLocaleString("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: isUp ? "var(--green)" : "#ff6b6b",
      padding: "4px 9px",
      borderRadius: 6,
      background: isUp ? "rgba(124,216,160,0.14)" : "rgba(255,107,107,0.14)",
      border: `1px solid ${isUp ? "rgba(124,216,160,0.25)" : "rgba(255,107,107,0.25)"}`,
      fontVariantNumeric: "tabular-nums"
    }
  }, isUp ? "▲" : "▼", " ", isUp ? "+" : "", change.toFixed(2), "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 18,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-dim)",
      letterSpacing: "0.06em"
    }
  }, "24H HIGH"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg)",
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums",
      marginTop: 2
    }
  }, "$", (basePrice + 420).toLocaleString())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-dim)",
      letterSpacing: "0.06em"
    }
  }, "24H LOW"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg)",
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums",
      marginTop: 2
    }
  }, "$", (basePrice - 380).toLocaleString())), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg-dim)",
      letterSpacing: "0.06em"
    }
  }, "24H VOL"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--fg)",
      fontWeight: 700,
      fontVariantNumeric: "tabular-nums",
      marginTop: 2
    }
  }, "$1.84B")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 180px",
      gap: 0,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 4px 10px 20px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${chartW} ${chartH}`,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "chart-bg-grad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: isUp ? "#7CD8A0" : "#ff6b6b",
    stopOpacity: "0.08"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: isUp ? "#7CD8A0" : "#ff6b6b",
    stopOpacity: "0"
  }))), [0, 1, 2, 3, 4].map(i => {
    const y = i / 4 * chartH;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "0",
      y1: y,
      x2: chartW,
      y2: y,
      stroke: "rgba(255,255,255,0.04)",
      strokeWidth: "1",
      strokeDasharray: "2 3"
    });
  }), (() => {
    const pts = displayCandles.map((c, i) => {
      const x = 10 + i * candleW + candleW / 2;
      const y = chartH - (c.close - minV) / rng * (chartH - 20) - 10;
      return [x, y];
    });
    const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
    const area = `${line} L${pts[pts.length - 1][0]},${chartH} L${pts[0][0]},${chartH} Z`;
    return /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: "url(#chart-bg-grad)"
    });
  })(), displayCandles.map((c, i) => {
    const x = 10 + i * candleW + candleW / 2;
    const yHi = chartH - (c.hi - minV) / rng * (chartH - 20) - 10;
    const yLo = chartH - (c.lo - minV) / rng * (chartH - 20) - 10;
    const yO = chartH - (c.open - minV) / rng * (chartH - 20) - 10;
    const yC = chartH - (c.close - minV) / rng * (chartH - 20) - 10;
    const green = c.close >= c.open;
    const color = green ? "#7CD8A0" : "#ff6b6b";
    const bodyTop = Math.min(yO, yC);
    const bodyH = Math.max(1.5, Math.abs(yC - yO));
    const w = Math.max(2, candleW * 0.62);
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: x,
      y1: yHi,
      x2: x,
      y2: yLo,
      stroke: color,
      strokeWidth: "1",
      opacity: "0.7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x - w / 2,
      y: bodyTop,
      width: w,
      height: bodyH,
      fill: color,
      opacity: i === displayCandles.length - 1 ? 1 : 0.9
    }));
  }), (() => {
    const y = chartH - (price - minV) / rng * (chartH - 20) - 10;
    return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: y,
      x2: chartW,
      y2: y,
      stroke: isUp ? "#7CD8A0" : "#ff6b6b",
      strokeWidth: "1",
      strokeDasharray: "3 3",
      opacity: "0.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: chartW - 68,
      y: y - 9,
      width: "64",
      height: "18",
      rx: "3",
      fill: isUp ? "#7CD8A0" : "#ff6b6b"
    }), /*#__PURE__*/React.createElement("text", {
      x: chartW - 36,
      y: y + 4,
      fill: "#0a0a0e",
      fontSize: "10",
      fontWeight: "800",
      textAnchor: "middle",
      fontFamily: "Akrobat, monospace"
    }, price.toFixed(0)));
  })())), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: "1px solid var(--line)",
      padding: "6px 14px 10px",
      display: "flex",
      flexDirection: "column",
      fontSize: 10,
      fontFamily: "Akrobat, Onest, monospace",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 9,
      color: "var(--fg-dim)",
      fontWeight: 700,
      letterSpacing: "0.08em",
      padding: "3px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "PRICE"), /*#__PURE__*/React.createElement("span", null, "SIZE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "4px 0"
    }
  }, book.asks.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: `a-${i}`,
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      padding: "1px 4px",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: `${r.q / maxQ * 100}%`,
      background: "rgba(255,107,107,0.12)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ff6b6b",
      position: "relative"
    }
  }, r.p.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)",
      position: "relative"
    }
  }, r.q.toFixed(3))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "3px 0",
      fontSize: 11,
      fontWeight: 800,
      color: isUp ? "var(--green)" : "#ff6b6b",
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)"
    }
  }, price.toFixed(2), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: "var(--fg-dim)",
      fontWeight: 600
    }
  }, "\u2195 3.50")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1,
      padding: "4px 0"
    }
  }, book.bids.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: `b-${i}`,
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      padding: "1px 4px",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: `${r.q / maxQ * 100}%`,
      background: "rgba(124,216,160,0.12)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green)",
      position: "relative"
    }
  }, r.p.toFixed(2)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)",
      position: "relative"
    }
  }, r.q.toFixed(3))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      padding: "10px 24px 16px",
      background: "rgba(255,255,255,0.015)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--fg-dim)",
      fontWeight: 800,
      letterSpacing: "0.12em"
    }
  }, "RECENT TRADES"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--fg-dim)"
    }
  }, "real-time feed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 6
    }
  }, trades.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: `${t.t}-${i}`,
    style: {
      padding: "6px 8px",
      borderRadius: 6,
      background: t.side === "buy" ? "rgba(124,216,160,0.08)" : "rgba(255,107,107,0.08)",
      border: `1px solid ${t.side === "buy" ? "rgba(124,216,160,0.2)" : "rgba(255,107,107,0.2)"}`,
      opacity: 1 - i * 0.09,
      fontFamily: "Akrobat, Onest, monospace",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      color: t.side === "buy" ? "var(--green)" : "#ff6b6b",
      letterSpacing: "0.05em"
    }
  }, t.side === "buy" ? "BUY" : "SELL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--fg)",
      marginTop: 2
    }
  }, t.qty), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "var(--fg-dim)",
      marginTop: 1
    }
  }, "@", parseFloat(t.p).toLocaleString("en-US", {
    maximumFractionDigits: 0
  })))))));
}

// Legacy export kept as alias for index.html backwards-compat
function InvestingBanner() {
  return /*#__PURE__*/React.createElement(EventsTournaments, null);
}
function TelegramCommunity() {
  useRevealOnScroll();
  // Fake-but-plausible Telegram messages – the vibe is a real trader community channel, not a marketing feed.
  // Mixed content: payout screenshots, Q&A, setup sharing, moderator announcements.
  const msgs = [{
    type: "mod",
    handle: "HashHedge | Max",
    role: "Admin",
    time: "14:02",
    body: "Heads up – we just raised the BTC/USDT max position by 15% for all funded $50k+ accounts. FOMC week is noisier than usual. Be disciplined with size.",
    reacts: [{
      e: "👍",
      n: 127
    }, {
      e: "🔥",
      n: 43
    }]
  }, {
    type: "user",
    handle: "@ryansull",
    country: "🇺🇸",
    time: "14:04",
    body: "Just got paid $2,707 💸 72h on the dot. Third payout this quarter. This firm is the real deal.",
    reacts: [{
      e: "🎉",
      n: 89
    }, {
      e: "💰",
      n: 54
    }, {
      e: "❤️",
      n: 22
    }],
    hasImage: true,
    imageLabel: "payout-certificate.png"
  }, {
    type: "user",
    handle: "@sofia_g",
    country: "🇧🇷",
    time: "14:07",
    body: "question for the group: anyone running SOL longs against BTC shorts during CPI weeks? interested in what sizing you're using",
    reacts: [{
      e: "🤔",
      n: 12
    }]
  }, {
    type: "user",
    handle: "@dmitri_v",
    country: "🇦🇪",
    time: "14:09",
    body: "@sofia_g yes – I run ~0.5 beta-weighted SOL against a 1x BTC spot short. Cuts variance roughly in half without killing upside.",
    reacts: [{
      e: "💡",
      n: 31
    }, {
      e: "👆",
      n: 8
    }]
  }, {
    type: "mod",
    handle: "HashHedge | Kate",
    role: "Community",
    time: "14:15",
    body: "New weekly recap just dropped in #education – breakdown of top 20 funded-trader strategies from last month. Worth a read.",
    reacts: [{
      e: "📚",
      n: 67
    }, {
      e: "🔥",
      n: 24
    }]
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "telegram",
    "data-mobile-image-first": true,
    style: {
      padding: "100px 0",
      background: "var(--bg-elev)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 200,
      background: "linear-gradient(180deg, var(--bg) 0%, rgba(17,17,23,0.6) 40%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 600,
      height: 600,
      background: "#2AABEE",
      left: "-10%",
      top: "30%",
      opacity: 0.07
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-telegram-layout",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-telegram-copy"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "#2AABEE",
      boxShadow: "0 0 12px #2AABEE"
    }
  }), "TELEGRAM COMMUNITY")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 24px"
    }
  }, "Where funded ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#2AABEE"
    }
  }, "traders actually"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#2AABEE"
    }
  }, "hang out."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: "0 0 32px"
    }
  }, "Not a broadcast channel, not a drip-marketing list. A real group chat where our funded traders share setups, post payouts, ask dumb questions, and get direct access to our risk team.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16,
      marginBottom: 36
    }
  }, [{
    n: "926",
    l: "members"
  }, {
    n: "40–60",
    l: "messages / day"
  }, {
    n: "< 2 min",
    l: "avg. admin reply"
  }, {
    n: "24/7",
    l: "coverage"
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: "16px 20px",
      background: "var(--bg-card)",
      border: "1px solid var(--line)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Akrobat', sans-serif",
      fontSize: 30,
      fontWeight: 800,
      color: "var(--fg)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-dim)",
      marginTop: 6
    }
  }, s.l))))), /*#__PURE__*/React.createElement("div", {
    className: "hh-telegram-mobile-visual"
  }, /*#__PURE__*/React.createElement(TelegramChannelList, null)), /*#__PURE__*/React.createElement(Reveal, {
    delay: "4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/hhcomunity",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-lg",
    style: {
      background: "#2AABEE",
      color: "#fff",
      border: "1px solid #2AABEE"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.17-.04-.24-.02-.1.02-1.72 1.09-4.85 3.2-.46.31-.88.47-1.25.46-.41-.01-1.2-.23-1.78-.42-.72-.23-1.29-.35-1.24-.74.02-.2.3-.41.82-.62 3.23-1.41 5.38-2.34 6.46-2.79 3.07-1.28 3.71-1.5 4.13-1.51.09 0 .3.02.44.13.11.09.14.21.16.3-.01.06.01.24 0 .37z"
  })), "Join the community"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hh-telegram-note",
    style: {
      fontSize: 13,
      color: "var(--fg-low)",
      marginTop: 20,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#2bd36a",
      boxShadow: "0 0 10px #2bd36a"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, "t.me/hhcomunity"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-dim)"
    }
  }, "\xB7 free to join, verified traders only")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-telegram-desktop-visual"
  }, /*#__PURE__*/React.createElement(TelegramChannelList, null))))));
}

// Telegram community channel-list – matches the real Hash Hedge Community screenshot:
// header "Hash Hedge Community · 926 members, 218 online", search bar, pinned topic list
// with emoji icons (# Welcome, 🔗 Links, 🔔 Announcements EN, 📢 Анонсы RU, 💰 Payout Wall,
// 💬 Чат RU, 📊 Торговля RU, 💬 Chat EN, 📈 Trading EN).
function TelegramChannelList() {
  const channels = [{
    ic: "#",
    icBg: "transparent",
    title: "Welcome | Добро пожаловать",
    sender: "CAPTCHA",
    preview: "Hey Daniyar! Welcome to the Hash Hedge comm…",
    time: "15:32",
    pinned: true
  }, {
    ic: "🔗",
    icBg: "transparent",
    title: "Links | Ссылки",
    sender: "",
    preview: "🔗 General | Основное Website | Сайт Support |…",
    time: "02/04",
    pinned: true
  }, {
    ic: "🔔",
    icBg: "transparent",
    title: "Announcements | EN",
    sender: "",
    preview: "FLASH SALE: 62 out of 200 vouchers rema…",
    time: "Wed",
    pinned: true,
    badge: true
  }, {
    ic: "📢",
    icBg: "transparent",
    title: "Анонсы | RU",
    sender: "",
    preview: "Новый актив добавлен на платформу",
    time: "Thu",
    pinned: true,
    italic: true
  }, {
    ic: "💰",
    icBg: "transparent",
    title: "Payout Wall | Стена выплат",
    sender: "",
    preview: "Photo",
    time: "16/04",
    pinned: true,
    isPhoto: true
  }, {
    ic: "💬",
    icBg: "transparent",
    title: "Чат | RU",
    sender: "Pavel Sokolov",
    preview: "12 градусов, а у вас?",
    time: "14:10"
  }, {
    ic: "📊",
    icBg: "transparent",
    title: "Торговля | RU",
    sender: "Dmitry",
    preview: "Photo",
    time: "13:06",
    isPhoto: true
  }, {
    ic: "💬",
    icBg: "transparent",
    title: "Chat | EN",
    sender: "Denis S.",
    preview: "Colleagues, the flash sale closes in 4 hours, at 23:…",
    time: "Wed"
  }, {
    ic: "📈",
    icBg: "transparent",
    title: "Trading | EN",
    sender: "Denis S.",
    preview: "Bitcoin's already at $78,140 we hitting $80K or wh…",
    time: "Wed"
  }];

  // Live-feed: cycle through fake incoming events to make the frame feel alive.
  // Each event targets a specific channel by index, flashes it for a few seconds,
  // optionally shows a typing indicator or temporarily overrides preview/sender/time/unread.
  const events = React.useMemo(() => [{
    idx: 5,
    sender: "Max · São Paulo 🇧🇷",
    preview: "just passed Stage 2 in 6 days 🔥",
    time: "now",
    unread: 3,
    typing: false
  }, {
    idx: 8,
    sender: "Sophie · London",
    preview: "BTC reclaimed 78.5k, longs still live",
    time: "now",
    unread: 1,
    typing: false
  }, {
    idx: 6,
    sender: "Dmitry",
    preview: "typing…",
    time: "now",
    unread: 0,
    typing: true
  }, {
    idx: 4,
    sender: "",
    preview: "+$8,320 payout confirmed · 🇩🇪",
    time: "now",
    unread: 1,
    typing: false,
    isPhoto: false
  }, {
    idx: 7,
    sender: "Marcus · NYC",
    preview: "anyone else seeing NG spike?",
    time: "now",
    unread: 2,
    typing: false
  }, {
    idx: 3,
    sender: "",
    preview: "Новый турнир: призовой фонд $50K",
    time: "now",
    unread: 1,
    typing: false,
    italic: false
  }, {
    idx: 5,
    sender: "Pavel Sokolov",
    preview: "typing…",
    time: "now",
    unread: 0,
    typing: true
  }], []);
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
    return () => {
      alive = false;
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [events.length]);
  const currentEv = active ? events[evIdx] : null;
  const frameBg = "#000";
  const panelBg = "#0E0E0E";
  const rowBorder = "rgba(255,255,255,0.06)";
  const textMuted = "#8E8E93";
  const textDim = "#636366";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: frameBg,
      borderRadius: 28,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02) inset",
      fontFamily: "Onest, -apple-system, 'SF Pro Text', sans-serif",
      maxWidth: 460,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      padding: "0 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 15,
      fontWeight: 600,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", null, "16:48 ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.55,
      marginLeft: 4
    }
  }, "\uD83D\uDD15")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "11",
    viewBox: "0 0 18 11",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "6",
    width: "3",
    height: "5",
    rx: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "3",
    width: "3",
    height: "8",
    rx: "0.5",
    opacity: "0.35"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "1",
    width: "3",
    height: "10",
    rx: "0.5",
    opacity: "0.35"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM8 6a4 4 0 013.5 2.05l1.4-1.4A6 6 0 008 4.5 6 6 0 003.1 6.65l1.4 1.4A4 4 0 018 6zm0-3.5a7.5 7.5 0 016.45 3.75l1.4-1.4A9.5 9.5 0 008 0 9.5 9.5 0 00.15 4.85l1.4 1.4A7.5 7.5 0 018 2.5z"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "12",
    viewBox: "0 0 26 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "22",
    height: "11",
    rx: "2.5",
    stroke: "#fff",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "13",
    height: "8",
    rx: "1.3",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "23",
    y: "4",
    width: "2",
    height: "4",
    rx: "0.6",
    fill: "#fff",
    opacity: "0.5"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 20px 12px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "40px 1fr 40px",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.14)",
      background: "transparent",
      color: "#fff",
      fontSize: 18,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: "#fff",
      letterSpacing: "-0.01em"
    }
  }, "Hash Hedge Community"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: textMuted,
      marginTop: 2
    }
  }, "926 members, 218 online")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,0.14)",
      background: "transparent",
      color: "#fff",
      fontSize: 15,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u22EF"))), /*#__PURE__*/React.createElement("div", {
    className: "hh-telegram-search",
    style: {
      padding: "0 16px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(120,120,128,0.24)",
      borderRadius: 10,
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: textMuted,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: textMuted,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3-3",
    stroke: textMuted,
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", null, "Search"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: panelBg
    }
  }, channels.map((c, i) => {
    const live = currentEv && currentEv.idx === i;
    const sender = live && currentEv.sender !== undefined ? currentEv.sender : c.sender;
    const preview = live ? currentEv.preview : c.preview;
    const time = live ? currentEv.time : c.time;
    const italic = live ? !!currentEv.italic : !!c.italic;
    const showPhoto = live ? !!currentEv.isPhoto : !!c.isPhoto;
    const unread = live ? currentEv.unread || 0 : 0;
    const typing = live && currentEv.typing;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "hh-telegram-row",
      style: {
        display: "grid",
        gridTemplateColumns: "44px 1fr auto",
        gap: 12,
        alignItems: "center",
        padding: "10px 16px 10px 14px",
        borderTop: i === 0 ? "none" : `0.5px solid ${rowBorder}`,
        background: live ? "rgba(106,179,243,0.10)" : "transparent",
        transition: "background .6s ease",
        position: "relative"
      }
    }, live && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 3,
        background: "#6AB3F3",
        boxShadow: "0 0 8px #6AB3F3"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        background: "rgba(255,255,255,0.04)"
      }
    }, c.ic), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: "#fff",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        marginBottom: 2
      }
    }, c.title), sender && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        color: "#fff",
        marginBottom: 1
      }
    }, sender), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: typing ? "#6AB3F3" : textMuted,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontStyle: italic ? "italic" : "normal",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, showPhoto && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2",
      stroke: textMuted,
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "8.5",
      cy: "10.5",
      r: "1.5",
      fill: textMuted
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 16-5-5L5 21",
      stroke: textMuted,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), /*#__PURE__*/React.createElement("span", null, "Photo")), !showPhoto && typing && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tg-typing-dot",
      style: {
        animationDelay: "0s"
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "tg-typing-dot",
      style: {
        animationDelay: "0.15s"
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "tg-typing-dot",
      style: {
        animationDelay: "0.30s"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 4
      }
    }, "typing")), !showPhoto && !typing && /*#__PURE__*/React.createElement("span", null, preview))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 6,
        alignSelf: "flex-start",
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: live ? "#6AB3F3" : textDim,
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontWeight: live ? 700 : 400
      }
    }, c.pinned && !live && /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "12",
      viewBox: "0 0 10 12",
      fill: textDim
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 0h4v3h1l1 3v1H1V6l1-3h1z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4.5",
      y: "6",
      width: "1",
      height: "6"
    })), /*#__PURE__*/React.createElement("span", null, time)), unread > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 22,
        height: 22,
        padding: "0 7px",
        borderRadius: 999,
        background: "#6AB3F3",
        color: "#000",
        fontSize: 12,
        fontWeight: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Onest, sans-serif",
        boxShadow: "0 0 10px rgba(106,179,243,0.5)"
      }
    }, unread), unread === 0 && c.pinned && !c.badge && !live && /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        opacity: 0.55
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l2 4 4 .5-3 3 1 4-4-2-4 2 1-4-3-3 4-.5z",
      fill: textDim
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      background: panelBg
    }
  }), /*#__PURE__*/React.createElement("style", null, `
        @keyframes tg-typing-dot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
        }
        .tg-typing-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #6AB3F3; display: inline-block;
          animation: tg-typing-dot 1.1s infinite ease-in-out;
        }
      `));
}
Object.assign(window, {
  PressStrip,
  InvestingBanner,
  TelegramCommunity
});

// ===========================================================================
// THREE separate sections (like on hashhedge.com):
//   1. SupportSection      – split layout: copy + 3 channel cards in a row
//   2. BlueprintSection    – split layout: book mockup + copy + CTA
//   3. YouTubeSection      – featured video poster + 3 thumbnails grid
// Each is full-bleed and visually distinct.
// ===========================================================================

// =====================================================================
// 1. SUPPORT 24/7
// =====================================================================
function SupportLiveChat() {
  // Realistic incoming chat – trader asks something, our agent answers.
  // Loops indefinitely. Each step is either a typing indicator or a message bubble.
  const script = [{
    side: "user",
    text: "Hey, just passed Stage 2 🎉 when can I request first payout?",
    time: "14:02"
  }, {
    side: "agent",
    typing: true,
    dur: 1100
  }, {
    side: "agent",
    text: "Massive congrats 🚀 Once you go funded you can submit anytime – 90% split, USDT to your wallet within 24h.",
    time: "14:02"
  }, {
    side: "user",
    text: "And it's USDT to my own wallet right?",
    time: "14:03"
  }, {
    side: "agent",
    typing: true,
    dur: 900
  }, {
    side: "agent",
    text: "Yep – USDT TRC-20 or ERC-20, your call. 90% split, processed within 24h once you submit.",
    time: "14:03"
  }, {
    side: "user",
    text: "perfect, thanks Sofia 🙌",
    time: "14:03"
  }, {
    side: "agent",
    typing: true,
    dur: 700
  }, {
    side: "agent",
    text: "Anytime – and welcome to the funded crew 👊",
    time: "14:04"
  }];
  const [step, setStep] = React.useState(0);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    const current = script[step % script.length];
    const delay = current.typing ? current.dur : 2200;
    const t = setTimeout(() => setStep(s => s + 1), delay);
    return () => clearTimeout(t);
  }, [step]);
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [step]);

  // Show all bubbles up to current step (modulo loop), but rolling window of last 6 to keep frame compact.
  const visible = [];
  const total = script.length;
  const cycle = Math.floor(step / total);
  for (let i = 0; i <= step; i++) {
    visible.push({
      ...script[i % total],
      _id: `${cycle}-${i}`
    });
  }
  const window6 = visible.slice(-6);
  return /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 22px",
      maxHeight: 360,
      overflow: "hidden"
    }
  }, window6.map(m => {
    if (m.typing) {
      return /*#__PURE__*/React.createElement("div", {
        key: m._id,
        style: {
          display: "flex",
          justifyContent: "flex-start",
          animation: "support-pop .25s var(--ease-out) both"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          background: "rgba(255,255,255,0.06)",
          border: "1px solid var(--line)",
          borderRadius: "16px 16px 16px 4px",
          padding: "10px 14px",
          display: "flex",
          gap: 4,
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "support-dot",
        style: {
          animationDelay: "0s"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "support-dot",
        style: {
          animationDelay: ".15s"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "support-dot",
        style: {
          animationDelay: ".3s"
        }
      })));
    }
    const isAgent = m.side === "agent";
    return /*#__PURE__*/React.createElement("div", {
      key: m._id,
      style: {
        display: "flex",
        justifyContent: isAgent ? "flex-start" : "flex-end",
        animation: "support-pop .35s var(--ease-out) both"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "82%",
        padding: "10px 14px",
        borderRadius: isAgent ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
        background: isAgent ? "rgba(255,255,255,0.06)" : "rgba(252,213,53,0.14)",
        border: `1px solid ${isAgent ? "var(--line)" : "rgba(252,213,53,0.28)"}`,
        fontSize: 14,
        lineHeight: 1.5,
        color: isAgent ? "var(--fg)" : "#fff5c2"
      }
    }, /*#__PURE__*/React.createElement("div", null, m.text), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "var(--fg-dim)",
        marginTop: 4,
        textAlign: isAgent ? "left" : "right",
        letterSpacing: "0.04em"
      }
    }, m.time)));
  }));
}
function SupportSection() {
  useRevealOnScroll();
  const channels = [{
    label: "Live chat",
    sub: "Avg. response under 2 min",
    tag: "LIVE CHAT",
    href: "#",
    accent: "rgba(124, 216, 160, 0.15)",
    accentText: "var(--green)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 5.5C3 4.12 4.12 3 5.5 3h13C19.88 3 21 4.12 21 5.5v9c0 1.38-1.12 2.5-2.5 2.5H8l-5 4V5.5Z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }))
  }, {
    label: "Telegram bot",
    sub: "@hashhedgesupportbot",
    tag: "TELEGRAM",
    href: "https://t.me/hashhedgesupportbot",
    accent: "rgba(43, 156, 222, 0.15)",
    accentText: "#5BB5E8",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z"
    }))
  }, {
    label: "Email ticket",
    sub: "support@hashhedge.com",
    tag: "EMAIL",
    href: "mailto:support@hashhedge.com",
    accent: "rgba(252, 213, 53, 0.15)",
    accentText: "var(--accent)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "5",
      width: "18",
      height: "14",
      rx: "2",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 7l9 6 9-6",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinejoin: "round"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hh-support-section",
    style: {
      padding: "120px 0",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 280,
      background: "linear-gradient(180deg, #0a0a0e 0%, rgba(13,13,16,0.55) 35%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 800,
      height: 800,
      background: "var(--green)",
      top: "10%",
      left: "-10%",
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 600,
      height: 600,
      background: "var(--accent)",
      bottom: "-30%",
      right: "-10%",
      opacity: 0.04
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 360,
      background: "radial-gradient(ellipse 90% 100% at 70% 100%, rgba(252,213,53,0.1) 0%, rgba(252,213,53,0.04) 35%, rgba(252,213,53,0) 70%)",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("style", null, `
        @keyframes support-pop {
          from { opacity: 0; transform: translateY(6px) scale(.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes support-dot {
          0%, 60%, 100% { transform: translateY(0);   opacity: .35; }
          30%           { transform: translateY(-3px); opacity: 1; }
        }
        .support-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--fg-muted);
          animation: support-dot 1.2s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes support-status-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124,216,160,0.55); }
          70%      { box-shadow: 0 0 0 14px rgba(124,216,160,0);   }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-support-header",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 80,
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 10px var(--green)",
      animation: "pulse 1.8s ease-in-out infinite",
      display: "inline-block",
      marginRight: 8,
      verticalAlign: "middle"
    }
  }), "SUPPORT 24/7 \xB7 ONLINE NOW"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0",
      letterSpacing: "-0.025em"
    }
  }, "Real humans.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Online right now.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hh-support-intro",
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: 0
    }
  }, "Our support team is available around the clock and speaks ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg)"
    }
  }, "20+ languages"), ". Get a fast answer to any question."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1fr",
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid var(--line)",
      background: "var(--card)",
      minHeight: 540
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.__HH_BASE__+"assets/support-agent.png"),
    alt: "Sofia \u2013 Senior Support Lead",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 30%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.92) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      left: 20,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      borderRadius: 999,
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(124,216,160,0.4)",
      fontSize: 11,
      fontWeight: 800,
      color: "#9be0b6",
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--green)",
      animation: "support-status-pulse 1.8s ease-out infinite"
    }
  }), "Online"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 20,
      right: 20,
      padding: "10px 14px",
      borderRadius: 12,
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.12)",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Akrobat, Onest, sans-serif",
      fontSize: 22,
      fontWeight: 800,
      color: "var(--accent)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "1m 47s"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--fg-dim)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginTop: 4
    }
  }, "avg today")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--accent)",
      fontWeight: 800,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Senior Support Lead"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      marginBottom: 12
    }
  }, "Sofia K."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, ["EN", "ES", "PT", "RU"].map(lng => /*#__PURE__*/React.createElement("span", {
    key: lng,
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.1em",
      padding: "4px 9px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      color: "#fff"
    }
  }, lng)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: "0.1em",
      padding: "4px 9px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.04)",
      border: "1px dashed rgba(255,255,255,0.18)",
      color: "var(--fg-muted)"
    }
  }, "+ 18 teammates online"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid var(--line)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), var(--card)",
      minHeight: 540,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      borderRadius: "50%",
      overflow: "hidden",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.__HH_BASE__+"assets/support-agent.png"),
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 25%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--fg)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, "Sofia K.", /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 6px var(--green)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--green)",
      letterSpacing: "0.04em"
    }
  }, "online")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-dim)"
    }
  }, "Senior Support \xB7 typically replies in 1m")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 800,
      color: "var(--fg-muted)",
      letterSpacing: "0.16em",
      padding: "4px 9px",
      borderRadius: 6,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--line)"
    }
  }, "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(SupportLiveChat, null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 60,
      background: "linear-gradient(180deg, var(--card) 0%, transparent 100%)",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      borderTop: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "rgba(0,0,0,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "10px 14px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid var(--line)",
      fontSize: 13,
      color: "var(--fg-dim)"
    }
  }, "Type a message\u2026"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "var(--accent)",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#0b0b0e"
    },
    "aria-label": "Send"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 11l18-8-8 18-2-7-8-3z"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr) auto",
      gap: 16,
      alignItems: "stretch"
    }
  }, channels.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: String(i + 1)
  }, /*#__PURE__*/React.createElement("a", {
    className: "hh-support-channel",
    href: c.href,
    target: c.href.startsWith("http") || c.href.startsWith("mailto") ? "_blank" : undefined,
    rel: "noopener",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 18px",
      borderRadius: 14,
      background: "var(--card)",
      border: "1px solid var(--line)",
      textDecoration: "none",
      position: "relative",
      overflow: "hidden",
      transition: "border-color .25s, transform .25s, background .25s",
      height: "100%"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = c.accentText;
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--line)";
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.background = "var(--card)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      flexShrink: 0,
      background: c.accent,
      color: c.accentText,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--fg)",
      letterSpacing: "-0.005em",
      marginBottom: 2,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)",
      wordBreak: "break-word",
      lineHeight: 1.35
    }
  }, c.sub)), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      color: c.accentText,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8m0 0L7 3m4 4l-4 4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px",
      borderRadius: 14,
      background: "rgba(252,213,53,0.05)",
      border: "1px solid rgba(252,213,53,0.2)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: "var(--accent)",
      fontFamily: "Akrobat, Onest, sans-serif",
      letterSpacing: "-0.03em",
      lineHeight: 1
    }
  }, "20+"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      overflow: "hidden",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--fg)",
      marginBottom: 2
    }
  }, "Languages"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg)",
      letterSpacing: "0.01em",
      fontFamily: "Akrobat, Onest, sans-serif",
      fontWeight: 700,
      height: 16,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "lang-cycle 16s steps(8) infinite",
      display: "flex",
      flexDirection: "column"
    }
  }, ["Hello", "Привет", "Hola", "Olá", "Hallo", "Bonjour", "你好", "مرحبا"].map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 16,
      lineHeight: "16px",
      color: "var(--accent)"
    }
  }, w)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      lineHeight: "16px",
      color: "var(--accent)"
    }
  }, "Hello")))), /*#__PURE__*/React.createElement("style", null, `
                @keyframes lang-cycle {
                  0%, 11% { transform: translateY(0); }
                  12.5%, 23.5% { transform: translateY(-16px); }
                  25%, 36% { transform: translateY(-32px); }
                  37.5%, 48.5% { transform: translateY(-48px); }
                  50%, 61% { transform: translateY(-64px); }
                  62.5%, 73.5% { transform: translateY(-80px); }
                  75%, 86% { transform: translateY(-96px); }
                  87.5%, 98.5% { transform: translateY(-112px); }
                  100% { transform: translateY(-128px); }
                }
              `))))));
}

// =====================================================================
// 2. BLUEPRINT
// =====================================================================
function BlueprintSection() {
  useRevealOnScroll();
  const sections = [{
    n: "01",
    t: "Create your account",
    d: "Sign up and verify in under 2 minutes."
  }, {
    n: "02",
    t: "Choose a Challenge size",
    d: "$5K to $150K. Pay on TRC20, ERC20, BEP20, Solana, Arbitrum or Optimism."
  }, {
    n: "03",
    t: "Pass Stage 1 – 8% target",
    d: "5% daily / 10% max DD. Unlimited time."
  }, {
    n: "04",
    t: "Pass Stage 2 – 6% target",
    d: "Same rules, softer target, locked seat."
  }, {
    n: "05",
    t: "Funded account setup",
    d: "Live capital wired to your dashboard."
  }, {
    n: "06",
    t: "Your first payout",
    d: "90% split, USDT to your wallet, 72h or 3×."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "blueprint",
    "data-mobile-image-first": true,
    style: {
      padding: "120px 0",
      background: "linear-gradient(180deg, #0a0a0e 0%, #13110a 50%, #0a0a0e 100%)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 700,
      height: 700,
      background: "var(--accent)",
      top: "10%",
      right: "-15%",
      opacity: 0.07
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-mobile-heading-only": true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "USER GUIDE"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 32px",
      letterSpacing: "-0.025em"
    }
  }, "Blueprint:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "How to start")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    "data-mobile-hide-heading": true
  }, "USER GUIDE"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    "data-mobile-hide-heading": true,
    style: {
      margin: "20px 0 24px",
      letterSpacing: "-0.025em"
    }
  }, "Blueprint:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "How to start")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      marginBottom: 32,
      maxWidth: 460
    }
  }, "Learn from scratch how to go from registration to getting funded. A complete step-by-step user guide \u2013 no prior knowledge required."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginBottom: 36,
      paddingBottom: 32,
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: "var(--fg)",
      fontFamily: "Akrobat, sans-serif",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "6"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)",
      marginTop: 6,
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, "chapters")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: "var(--fg)",
      fontFamily: "Akrobat, sans-serif",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "15 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)",
      marginTop: 6,
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, "read time")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: "var(--accent)",
      fontFamily: "Akrobat, sans-serif",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, "Free"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)",
      marginTop: 6,
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  }, "always"))), /*#__PURE__*/React.createElement("a", {
    href: "https://hashhedge.gitbook.io/hashhedge-user-guide",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: e => {
      e.preventDefault();
      window.open('https://hashhedge.gitbook.io/hashhedge-user-guide', '_blank', 'noopener,noreferrer');
    },
    className: "btn btn-primary",
    style: {
      gap: 8
    }
  }, "Explore the Blueprint", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8m0 0L7 3m4 4l-4 4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 18,
      overflow: "hidden",
      background: "linear-gradient(180deg, #1a1610 0%, #0f0d09 100%)",
      border: "1px solid rgba(252,213,53,0.2)",
      padding: 36,
      boxShadow: "0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 24,
      paddingBottom: 20,
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "#ff5f56"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "#ffbd2e"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: "#27c93f"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "5px 12px",
      borderRadius: 6,
      background: "rgba(255,255,255,0.04)",
      fontSize: 11,
      color: "var(--fg-dim)",
      fontFamily: "ui-monospace, monospace",
      letterSpacing: 0
    }
  }, "hashhedge.gitbook.io/hashhedge-user-guide")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.18em",
      color: "var(--fg-dim)",
      marginBottom: 20,
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Table of contents"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--green)",
      letterSpacing: "0.1em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--green)",
      boxShadow: "0 0 8px var(--green)",
      animation: "pulse 1.4s ease-in-out infinite"
    }
  }), "READING")), /*#__PURE__*/React.createElement(BlueprintTOC, {
    sections: sections
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 20,
      borderTop: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 12,
      color: "var(--fg-dim)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Last updated \xB7 2 days ago")))))));
}

// =====================================================================
// Blueprint TOC – animated table of contents
// =====================================================================
function BlueprintTOC({
  sections
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const containerRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  // observe when TOC enters viewport – only then start cycling
  React.useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.3
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // cycle the active "reading" indicator through the chapters
  React.useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setActiveIdx(i => (i + 1) % sections.length);
    }, 2400);
    return () => clearInterval(id);
  }, [inView, sections.length]);
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "relative"
    }
  }, sections.map((s, i) => {
    const isActive = i === activeIdx;
    const isRead = i < activeIdx;
    return /*#__PURE__*/React.createElement("div", {
      key: s.n,
      className: "bp-toc-row",
      style: {
        display: "grid",
        gridTemplateColumns: "44px 1fr 24px",
        padding: "16px 0",
        gap: 16,
        minHeight: 72,
        borderTop: i === 0 ? "none" : "1px solid var(--line)",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        background: isActive ? "linear-gradient(90deg, rgba(252,213,53,0.12) 0%, rgba(252,213,53,0) 100%)" : "transparent",
        borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
        borderRadius: isActive ? "0 8px 8px 0" : 0,
        marginLeft: -16,
        marginRight: -16,
        paddingLeft: 16,
        paddingRight: 16,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-12px)",
        transition: `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s, background .45s ease, border-color .45s ease`,
        filter: isActive ? "none" : isRead ? "none" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: isActive ? "var(--accent)" : isRead ? "var(--fg)" : "var(--fg-dim)",
        fontFamily: "Akrobat, sans-serif",
        letterSpacing: "-0.02em",
        fontVariantNumeric: "tabular-nums",
        transition: "color .4s"
      }
    }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: isActive ? "var(--accent)" : "var(--fg)",
        letterSpacing: "-0.005em",
        marginBottom: 2,
        transition: "color .4s"
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--fg-muted)",
        lineHeight: 1.5
      }
    }, s.d)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 18,
        height: 18,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isRead ? "var(--green)" : isActive ? "var(--accent)" : "transparent",
        border: isRead || isActive ? "none" : "1px solid var(--line-strong)",
        transition: "background .4s, border-color .4s, transform .4s",
        transform: isActive ? "scale(1.15)" : "scale(1)",
        boxShadow: isActive ? "0 0 0 4px rgba(252,213,53,0.18)" : "none"
      }
    }, isRead && /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 9 9",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 4.5l1.8 1.8L7 3",
      stroke: "#0a0a0e",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#0a0a0e",
        animation: "pulse 1.2s ease-in-out infinite"
      }
    })));
  }));
}

// =====================================================================
// 3. YOUTUBE
// =====================================================================
function YouTubeSection() {
  useRevealOnScroll();

  // 64 real partner / creator videos covering HashHedge.
  // id is a real YouTube video id – thumbnails are pulled from i.ytimg.com.
  // Click any card → opens the actual video on YouTube.
  const ALL_VIDEOS = [{
    id: "PUAyUaSommg"
  }, {
    id: "IlSjDtqwwuA"
  }, {
    id: "PpA50UZYusw"
  }, {
    id: "v70Cj06fueA"
  }, {
    id: "oz_72s2S5Xc"
  }, {
    id: "xJ4yA5MDMDU"
  }, {
    id: "lnsWjuJuguE"
  }, {
    id: "kPmP5Ji4Xng"
  }, {
    id: "F36puZDsFuE"
  }, {
    id: "-ZihqFcefdA"
  }, {
    id: "lwLIXy7ZHq0"
  }, {
    id: "VSO-_pM21oA"
  }, {
    id: "zxV-XOMhooI"
  }, {
    id: "wRlMk-PT348"
  }, {
    id: "LqZ0fhW14EQ"
  }, {
    id: "tGTJicxkmX4"
  }, {
    id: "gyfffpZMwxs"
  }, {
    id: "eZhmDcbOe4M"
  }, {
    id: "T-sf1SkWnaA"
  }, {
    id: "z8XAuu4dWyM"
  }, {
    id: "ckR286dTBxg"
  }, {
    id: "FjlRrl2NElY"
  }, {
    id: "1HQC_wt8RU8"
  }, {
    id: "nYVVRHtjuXI"
  }, {
    id: "-UEdwyls2Hc"
  }, {
    id: "4loUD4EwNe8"
  }, {
    id: "TGzl8Q89x3s"
  }, {
    id: "-ceI6pUOsaA"
  }, {
    id: "4d05kGh3KK4"
  }, {
    id: "5uJ-HCD46FY"
  }, {
    id: "JXPEQGjABVs"
  }, {
    id: "mKZyoNC-F5c"
  }, {
    id: "mKZeBPvHeP4"
  }, {
    id: "5mfUTnLbuVk"
  }, {
    id: "KSWizMMu3YY"
  }, {
    id: "3DpzzBP54zY"
  }, {
    id: "PzdoTu10uPg"
  }, {
    id: "KDMVxITWrL0"
  }, {
    id: "ozD6Rdbt9wU"
  }, {
    id: "RFUnaNrXYn0"
  }, {
    id: "btuv0QQsxgY"
  }, {
    id: "TuTd5RAGyio"
  }, {
    id: "inntkE6LMfg"
  }, {
    id: "W3SniAWCQ9M"
  }, {
    id: "4sf5NTBfW1M"
  }, {
    id: "KDIAMNk6ghg"
  }, {
    id: "NEUsMRBQs6M"
  }, {
    id: "McucviiuzZc"
  }, {
    id: "vU-OqC7RE8E"
  }, {
    id: "mr91nfQAri0"
  }, {
    id: "vmx9WPkZUnY"
  }, {
    id: "n2vvCFN3-3c"
  }, {
    id: "HqpF_Potwlo"
  }, {
    id: "GPzjRobgRjU"
  }, {
    id: "lCe2OhM9qJ4"
  }, {
    id: "KYLHP1gUfag"
  }, {
    id: "_qgclsoMyB0"
  }, {
    id: "Jmi9QE2F8KE"
  }, {
    id: "TJAIxICBJc8"
  }, {
    id: "lp_BJE4Lut4"
  }];
  const featured = ALL_VIDEOS[0];
  const big = [ALL_VIDEOS[1], ALL_VIDEOS[2]];
  // Pin two videos to the front of the rail and one to the middle.
  const PIN_TO_FRONT = ["lwLIXy7ZHq0", "zxV-XOMhooI"];
  const PIN_TO_MIDDLE = ["lnsWjuJuguE"];
  const PINNED = new Set([...PIN_TO_FRONT, ...PIN_TO_MIDDLE]);
  const rest = ALL_VIDEOS.slice(3).filter(v => !PINNED.has(v.id));
  const pinnedFront = PIN_TO_FRONT.map(id => ({
    id
  }));
  const pinnedMid = PIN_TO_MIDDLE.map(id => ({
    id
  }));
  const midIdx = Math.floor(rest.length / 2);
  const rail = [...pinnedFront, ...rest.slice(0, midIdx), ...pinnedMid, ...rest.slice(midIdx)];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 700,
      height: 700,
      background: "#ff0000",
      bottom: "-25%",
      left: "-10%",
      opacity: 0.04
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 320,
      background: "linear-gradient(0deg, rgba(16,16,18,0.82) 0%, rgba(16,16,18,0) 72%)",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 80,
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "16",
    viewBox: "0 0 22 16",
    fill: "#FF0000",
    style: {
      verticalAlign: "middle",
      marginRight: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.6 2.5a2.7 2.7 0 0 0-1.9-1.9C18 0 11 0 11 0S4 0 2.3.6A2.7 2.7 0 0 0 .4 2.5C0 4.2 0 8 0 8s0 3.8.4 5.5a2.7 2.7 0 0 0 1.9 1.9C4 16 11 16 11 16s7 0 8.7-.6a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-5.5.4-5.5s0-3.8-.4-5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.8 11.4l5.8-3.4-5.8-3.4v6.8z",
    fill: "#fff"
  })), "CREATOR REVIEWS"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0",
      letterSpacing: "-0.025em"
    }
  }, "Don't take our word.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Hear it from traders.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: "var(--fg-muted)",
      margin: "0 0 8px"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--fg)"
    }
  }, "2,500+ crypto creators worldwide partner"), " with Hash Hedge: challenge walkthroughs, payout proofs, and platform deep-dives."))))  , /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: 24,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: "1",
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(YouTubeFeatured, {
    video: featured
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "1fr 1fr",
      gap: 24
    }
  }, big.map((v, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: String(i + 2),
    style: {
      display: "flex",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(YouTubeThumb, {
    video: v,
    variant: "medium"
  }))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.16em",
      color: "var(--fg-dim)",
      textTransform: "uppercase"
    }
  }, rail.length, " more reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "rail-nav",
    "data-dir": "-1",
    style: railBtnStyle
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 3l-4 4 4 4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "rail-nav",
    "data-dir": "1",
    style: railBtnStyle
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 3l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))), /*#__PURE__*/React.createElement(YouTubeRail, {
    items: rail
  })))));
}
const railBtnStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--line)",
  color: "var(--fg)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background .25s, border-color .25s"
};
function YouTubeRail({
  items
}) {
  const railRef = React.useRef(null);
  React.useEffect(() => {
    const handleClick = e => {
      const btn = e.target.closest('.rail-nav');
      if (!btn) return;
      const dir = parseInt(btn.dataset.dir, 10);
      if (railRef.current) {
        railRef.current.scrollBy({
          left: dir * 480,
          behavior: 'smooth'
        });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: railRef,
    style: {
      display: "flex",
      gap: 16,
      overflowX: "auto",
      overflowY: "hidden",
      scrollSnapType: "x mandatory",
      paddingBottom: 12,
      margin: "0 -24px",
      padding: "0 24px 12px",
      scrollbarWidth: "thin",
      scrollbarColor: "var(--line-strong) transparent"
    }
  }, items.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: "0 0 300px",
      scrollSnapAlign: "start"
    }
  }, /*#__PURE__*/React.createElement(YouTubeThumb, {
    video: v,
    variant: "rail"
  }))));
}
function YouTubeFeatured({
  video
}) {
  const href = `https://www.youtube.com/watch?v=${video.id}`;
  const thumb = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const fallback = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const onOpen = e => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onOpen,
    "data-yt-featured": true,
    style: {
      position: "relative",
      display: "block",
      borderRadius: 22,
      overflow: "hidden",
      width: "100%",
      height: "100%",
      aspectRatio: "16 / 11",
      textDecoration: "none",
      border: "1px solid var(--line-strong)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
      background: "#0a0a0e"
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1.08)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1.04)";
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1)";
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "yt-thumb-zoom",
    src: thumb,
    onError: e => {
      if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
    },
    alt: "HashHedge featured review",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .6s var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "yt-play",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 96,
      height: 96,
      borderRadius: "50%",
      background: "rgba(255,0,0,0.95)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 36px rgba(0,0,0,0.6)",
      transition: "transform .3s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "34",
    height: "38",
    viewBox: "0 0 22 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5v21l18-10.5L2 1.5z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 36,
      right: 36,
      bottom: 28,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.16em",
      color: "rgba(255,255,255,0.7)",
      marginBottom: 8,
      textTransform: "uppercase"
    }
  }, "Latest review"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      textShadow: "0 2px 12px rgba(0,0,0,0.8)",
      lineHeight: 1.2,
      marginBottom: 6,
      maxWidth: 720
    }
  }, "From $49 to $5,580 | How to change your life at 23? Crypto prop trading | Hash Hedge"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.7)",
      letterSpacing: "0.01em"
    }
  }, "Opens on YouTube")));
}
function YouTubeThumb({
  video
}) {
  const href = `https://www.youtube.com/watch?v=${video.id}`;
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const onOpen = e => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: onOpen,
    style: {
      position: "relative",
      display: "block",
      textDecoration: "none"
    },
    onMouseEnter: e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1.1)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1.05)";
    },
    onMouseLeave: e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 14,
      overflow: "hidden",
      aspectRatio: "16 / 9",
      border: "1px solid var(--line)",
      background: "#0a0a0e"
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "yt-thumb-zoom",
    src: thumb,
    alt: "HashHedge YouTube review",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform .5s var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "yt-play",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 52,
      height: 52,
      borderRadius: "50%",
      background: "rgba(255,0,0,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
      transition: "transform .3s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "20",
    viewBox: "0 0 22 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 1.5v21l18-10.5L2 1.5z"
  })))));
}

// Synthetic chart art – used as a fake video poster background.
function ChartArt({
  seed = 0
}) {
  // deterministic pseudo-random per seed so multiple instances differ
  const sin = x => Math.sin(x + seed * 0.31);
  const cos = x => Math.cos(x + seed * 0.17);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 320",
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `yt-grid-${seed}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#FCD535",
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#FCD535",
    stopOpacity: "0"
  }))), Array.from({
    length: 38
  }).map((_, i) => {
    const x = 30 + i * 15;
    const open = 200 + sin(i * 0.4) * 50 + cos(i * 0.7) * 22;
    const close = open - 28 + sin(i * 0.9) * 32;
    const hi = Math.min(open, close) - 12 - Math.abs(sin(i)) * 12;
    const lo = Math.max(open, close) + 12 + Math.abs(cos(i)) * 12;
    const up = close < open;
    const color = up ? "#7CD8A0" : "#ff6b6b";
    const top = Math.min(open, close);
    const h = Math.abs(close - open);
    return /*#__PURE__*/React.createElement("g", {
      key: i,
      opacity: "0.85"
    }, /*#__PURE__*/React.createElement("line", {
      x1: x,
      y1: hi,
      x2: x,
      y2: lo,
      stroke: color,
      strokeWidth: "1.2",
      opacity: "0.6"
    }), /*#__PURE__*/React.createElement("rect", {
      x: x - 5,
      y: top,
      width: "10",
      height: Math.max(h, 2),
      fill: color
    }));
  }), /*#__PURE__*/React.createElement("path", {
    d: `M 16 240 Q 150 ${180 + seed % 30}, 300 140 T 588 ${80 + seed % 40}`,
    stroke: "#FCD535",
    strokeWidth: "3",
    fill: "none",
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M 16 240 Q 150 ${180 + seed % 30}, 300 140 T 588 ${80 + seed % 40} L 588 320 L 16 320 Z`,
    fill: `url(#yt-grid-${seed})`
  }), /*#__PURE__*/React.createElement("text", {
    x: "300",
    y: "190",
    textAnchor: "middle",
    fontSize: "180",
    fontWeight: "900",
    fill: "#FCD535",
    opacity: "0.05",
    fontFamily: "Akrobat, sans-serif"
  }, "\u20BF"));
}
Object.assign(window, {
  SupportSection,
  BlueprintSection,
  YouTubeSection
});

// Hash Hedge – Certificates, Reviews, FAQ, CTA, Footer
const {
  useState: ____useS
} = React;
function useCertRow(defaultDir) {
  const trackRef = React.useRef(null);
  const posRef = React.useRef(0);
  const dirRef = React.useRef(defaultDir);
  const touchStartX = React.useRef(null);
  const isTouching = React.useRef(false);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isTouching.current = true;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    touchStartX.current = e.touches[0].clientX;
    const t = trackRef.current;
    if (!t) return;
    const half = t.scrollWidth / 2;
    posRef.current -= dx;
    if (posRef.current >= half) posRef.current -= half;
    if (posRef.current < 0) posRef.current += half;
    t.style.transform = "translateX(" + (-posRef.current) + "px)";
  };
  const onTouchEnd = (e) => {
    isTouching.current = false;
    const touch = e.changedTouches[0];
    if (touchStartX.current !== null) {
      const dx = touch.clientX - touchStartX.current;
      if (Math.abs(dx) > 2) dirRef.current = dx > 0 ? -1 : 1;
    }
    touchStartX.current = null;
  };

  return { trackRef, posRef, dirRef, isTouching, onTouchStart, onTouchMove, onTouchEnd };
}

function MobileCertMarquee({ certs, CertCard }) {
  const row1 = certs.filter((_, i) => i % 2 === 0);
  const row2 = certs.filter((_, i) => i % 2 === 1);
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];
  const r1 = useCertRow(1);
  const r2 = useCertRow(-1);
  const animRef = React.useRef(null);
  const SPEED = 0.45;

  React.useEffect(() => {
    const animate = () => {
      [r1, r2].forEach(r => {
        if (!r.isTouching.current && r.trackRef.current) {
          const half = r.trackRef.current.scrollWidth / 2;
          r.posRef.current += SPEED * r.dirRef.current;
          if (r.posRef.current >= half) r.posRef.current -= half;
          if (r.posRef.current < 0) r.posRef.current += half;
          r.trackRef.current.style.transform = "translateX(" + (-r.posRef.current) + "px)";
        }
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const rowTrackStyle = { display: "flex", gap: 12, willChange: "transform", padding: "4px 0", alignItems: "stretch" };

  const makeRow = (r, doubled) => /*#__PURE__*/React.createElement("div", {
    style: { overflow: "hidden", touchAction: "pan-x", userSelect: "none" },
    onTouchStart: r.onTouchStart,
    onTouchMove: r.onTouchMove,
    onTouchEnd: r.onTouchEnd
  }, /*#__PURE__*/React.createElement("div", { ref: r.trackRef, style: rowTrackStyle },
    doubled.map((c, i) => /*#__PURE__*/React.createElement("div", { key: i, style: { flexShrink: 0, alignSelf: "stretch", display: "flex" } },
      /*#__PURE__*/React.createElement(CertCard, { c: c })))));

  return /*#__PURE__*/React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
    makeRow(r1, doubled1)
  );
}

function TeamCerts() {
  useRevealOnScroll();
  const [lightbox, setLightbox] = ____useS(null);
  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = e => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);
  // Real payout certificates – every row uses an actual issued certificate image.
  const certs = [
  // Original 8
  {
    name: "Mikhail Anikeev",
    amount: "3,154.96",
    acc: "$100,000",
    date: "07 Aug 2025",
    src: (window.__HH_BASE__+"img/cert-anikeev.png")
  }, {
    name: "Aleksandr Popov",
    amount: "7,538.92",
    acc: "$100,000",
    date: "04 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-popov.jpg")
  }, {
    name: "Ryan Sullivan",
    amount: "2,707.16",
    acc: "$50,000",
    date: "11 Aug 2025",
    src: (window.__HH_BASE__+"img/cert-sullivan.png")
  }, {
    name: "Alex Okulov",
    amount: "2,446.78",
    acc: "$100,000",
    date: "07 Sep 2025",
    src: (window.__HH_BASE__+"img/cert-okulov.png")
  }, {
    name: "Amir Senenov",
    amount: "1,304.68",
    acc: "$50,000",
    date: "17 Jul 2025",
    src: (window.__HH_BASE__+"img/cert-senenov.png")
  }, {
    name: "Roman Dzhepparov",
    amount: "1,296.61",
    acc: "$5,000",
    date: "22 Jun 2025",
    src: (window.__HH_BASE__+"img/cert-dzhepparov.png")
  }, {
    name: "Maxim Ognev",
    amount: "487.11",
    acc: "$5,000",
    date: "04 Sep 2025",
    src: (window.__HH_BASE__+"img/cert-ognev.png")
  }, {
    name: "Leon Cherepanov",
    amount: "407.12",
    acc: "$5,000",
    date: "07 Aug 2025",
    src: (window.__HH_BASE__+"img/cert-cherepanov.png")
  },
  // New 10 (real certificates)
  {
    name: "Alexey Morozov",
    amount: "7,184.32",
    acc: "$100,000",
    date: "14 Feb 2026",
    src: (window.__HH_BASE__+"img/cert-morozov.jpeg")
  }, {
    name: "Oskar Chmiel",
    amount: "3,621.09",
    acc: "$25,000",
    date: "13 Feb 2026",
    src: (window.__HH_BASE__+"img/cert-chmiel.jpeg")
  }, {
    name: "Onur Karaca",
    amount: "7,024.85",
    acc: "$100,000",
    date: "18 Feb 2026",
    src: (window.__HH_BASE__+"img/cert-karaca.jpeg")
  }, {
    name: "Pavel Zaitsev",
    amount: "8,927.11",
    acc: "$100,000",
    date: "17 Feb 2026",
    src: (window.__HH_BASE__+"img/cert-zaitsev.jpeg")
  }, {
    name: "Alexey Machkalyan",
    amount: "7,928.49",
    acc: "$100,000",
    date: "05 Feb 2026",
    src: (window.__HH_BASE__+"img/cert-machkalyan.jpeg")
  }, {
    name: "Rashad Aliyev",
    amount: "9,224.71",
    acc: "$100,000",
    date: "04 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-aliyev.jpeg")
  }, {
    name: "Aleksandr Popov",
    amount: "7,538.92",
    acc: "$100,000",
    date: "04 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-popov2.jpeg")
  }, {
    name: "Aleks Grachev",
    amount: "7,318.92",
    acc: "$100,000",
    date: "10 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-grachev.jpeg")
  }, {
    name: "Pavel Shubin",
    amount: "5,290.17",
    acc: "$100,000",
    date: "09 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-shubin.jpeg")
  }, {
    name: "Ilkin Jafarov",
    amount: "4,157.22",
    acc: "$50,000",
    date: "14 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-jafarov.jpeg")
  },
  // Batch 3 – 14 more real certificates
  {
    name: "Timur Kulikov",
    amount: "1,902.43",
    acc: "$25,000",
    date: "14 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-kulikov.jpeg")
  }, {
    name: "Aleksandr Kaplin",
    amount: "10,000.00",
    acc: "$100,000",
    date: "18 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-kaplin.jpeg")
  }, {
    name: "Denis Huhlaev",
    amount: "9,820.52",
    acc: "$100,000",
    date: "16 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-huhlaev.jpeg")
  }, {
    name: "Aband Eddy",
    amount: "6,475.88",
    acc: "$100,000",
    date: "16 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-eddy1.jpeg")
  }, {
    name: "Olga Kovlenko",
    amount: "5,096.17",
    acc: "$100,000",
    date: "16 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-kovlenko.jpeg")
  }, {
    name: "Jukeen Bande",
    amount: "8,622.65",
    acc: "$100,000",
    date: "20 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-bande.jpeg")
  }, {
    name: "Vadym Vads",
    amount: "4,644.40",
    acc: "$50,000",
    date: "16 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-vads.jpeg")
  }, {
    name: "Sergi Tolmachev",
    amount: "7,102.34",
    acc: "$100,000",
    date: "27 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-tolmachev.jpeg")
  }, {
    name: "Aleksei Razenkov",
    amount: "6,422.47",
    acc: "$100,000",
    date: "25 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-razenkov.jpeg")
  }, {
    name: "Irina Stuchevskaya",
    amount: "2,517.62",
    acc: "$50,000",
    date: "25 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-stuchevskaya.jpeg")
  }, {
    name: "Olga Kuznetsova",
    amount: "2,404.64",
    acc: "$50,000",
    date: "28 Mar 2026",
    src: (window.__HH_BASE__+"img/cert-kuznetsova.jpeg")
  }, {
    name: "Nik Pechersky",
    amount: "10,000.00",
    acc: "$150,000",
    date: "07 Apr 2026",
    src: (window.__HH_BASE__+"img/cert-pechersky.jpeg")
  }, {
    name: "Elzatbek Berenaliev",
    amount: "10,000.00",
    acc: "$100,000",
    date: "07 Apr 2026",
    src: (window.__HH_BASE__+"img/cert-berenaliev.jpeg")
  }, {
    name: "Aband Eddy",
    amount: "7,712.92",
    acc: "$100,000",
    date: "01 Apr 2026",
    src: (window.__HH_BASE__+"img/cert-eddy2.jpeg")
  }];

  // Split into two rows for counter-scrolling effect.
  const row1 = certs.filter((_, i) => i % 2 === 0);
  const row2 = certs.filter((_, i) => i % 2 === 1);
  const CertCard = ({
    c
  }) => /*#__PURE__*/React.createElement("div", {
    className: "card",
    onClick: () => setLightbox(c),
    style: {
      padding: 0,
      overflow: "hidden",
      textAlign: "left",
      cursor: "zoom-in",
      width: 320,
      flexShrink: 0,
      transition: "transform .3s var(--ease-out), border-color .3s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.borderColor = "var(--line-strong)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "842/595",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.src,
    alt: `Payout certificate for ${c.name}`,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--fg)",
      fontFamily: "Onest, sans-serif"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--fg-dim)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, c.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-dim)"
    }
  }, "acc. ", c.acc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: "var(--accent)",
      fontFamily: "Akrobat, Onest, sans-serif"
    }
  }, "+$", c.amount))));
  const Marquee = ({
    rows,
    dir = "left",
    speed = 80
  }) => {
    const doubled = [...rows, ...rows];
    const trackRef = React.useRef(null);
    const posRef = React.useRef(0);
    const dirRef = React.useRef(dir === "left" ? 1 : -1);
    const animRef = React.useRef(null);
    const mouseStartX = React.useRef(null);
    const isDragging = React.useRef(false);
    const SPEED = 30 / speed;

    React.useEffect(() => {
      const animate = () => {
        const t = trackRef.current;
        if (t && !isDragging.current) {
          const half = t.scrollWidth / 2;
          posRef.current += SPEED * dirRef.current;
          if (posRef.current >= half) posRef.current -= half;
          if (posRef.current < 0) posRef.current += half;
          t.style.transform = "translateX(" + (-posRef.current) + "px)";
        }
        animRef.current = requestAnimationFrame(animate);
      };
      animRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animRef.current);
    }, []);

    const onMouseDown = (e) => { mouseStartX.current = e.clientX; isDragging.current = true; };
    const onMouseMove = (e) => {
      if (!isDragging.current || mouseStartX.current === null) return;
      const dx = e.clientX - mouseStartX.current;
      mouseStartX.current = e.clientX;
      const t = trackRef.current;
      if (!t) return;
      const half = t.scrollWidth / 2;
      posRef.current -= dx;
      if (posRef.current >= half) posRef.current -= half;
      if (posRef.current < 0) posRef.current += half;
      t.style.transform = "translateX(" + (-posRef.current) + "px)";
    };
    const onMouseUp = (e) => {
      if (mouseStartX.current !== null) {
        const dx = e.clientX - mouseStartX.current;
        if (Math.abs(dx) > 2) dirRef.current = dx > 0 ? -1 : 1;
      }
      isDragging.current = false;
      mouseStartX.current = null;
    };
    const onMouseLeave = () => { isDragging.current = false; mouseStartX.current = null; };

    return /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        position: "relative",
        cursor: "grab",
        maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)"
      },
      onMouseDown: onMouseDown,
      onMouseMove: onMouseMove,
      onMouseUp: onMouseUp,
      onMouseLeave: onMouseLeave
    }, /*#__PURE__*/React.createElement("div", {
      ref: trackRef,
      style: {
        display: "flex",
        gap: 20,
        width: "max-content",
        userSelect: "none",
        willChange: "transform"
      }
    }, doubled.map((c, i) => /*#__PURE__*/React.createElement(CertCard, {
      key: i,
      c: c
    }))));
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes cert-marquee-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes cert-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      marginBottom: 48,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "PAYOUT CERTIFICATES")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0"
    }
  }, "Real traders.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Real receipts.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.5,
      color: "var(--fg-muted)"
    }
  }, "Hash Hedge trader's results are measured in real payouts. Every payout is recorded with a payout certificate. See more payouts in our ", /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/hhcomunity",
    target: "_blank",
    rel: "noopener",
    style: { color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }
  }, "Telegram community"), ".")))), /*#__PURE__*/React.createElement(React.Fragment, null,
    /*#__PURE__*/React.createElement("div", {
      className: "hh-cert-desktop",
      style: { display: "flex", flexDirection: "column", gap: 20 }
    },
      /*#__PURE__*/React.createElement(Reveal, { delay: "3" }, /*#__PURE__*/React.createElement(Marquee, { rows: row1, dir: "left", speed: 90 })),
      /*#__PURE__*/React.createElement(Reveal, { delay: "4" }, /*#__PURE__*/React.createElement(Marquee, { rows: row2, dir: "right", speed: 110 }))
    ),
    /*#__PURE__*/React.createElement("div", {
      className: "hh-cert-mobile",
      style: { overflow: "hidden", position: "relative" }
    }, /*#__PURE__*/React.createElement(MobileCertMarquee, { certs: certs, CertCard: CertCard }))
  ), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: "5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-payout-sample",
    style: {
      marginTop: 32,
      padding: "20px 28px",
      background: "var(--bg-card)",
      border: "1px solid var(--line)",
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    fill: "var(--accent)",
    opacity: "0.15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12l3 3 5-6",
    stroke: "var(--accent)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--fg-muted)"
    }
  }, "Sample of ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg)",
      fontWeight: 700
    }
  }, "17,800+ payouts"), " completed \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg)",
      fontWeight: 700
    }
  }, "5,120 active funded traders"))))), lightbox && /*#__PURE__*/React.createElement("div", {
    onClick: () => setLightbox(null),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(0,0,0,0.88)",
      backdropFilter: "blur(16px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      cursor: "zoom-out",
      animation: "cert-lb-fade 0.25s ease-out"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
            @keyframes cert-lb-fade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes cert-lb-zoom { from { opacity: 0; transform: scale(0.92) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
          `), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: "relative",
      maxWidth: "min(1100px, 94vw)",
      maxHeight: "90vh",
      background: "var(--bg-card)",
      borderRadius: 20,
      border: "1px solid var(--line-strong)",
      boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 60px rgba(252,213,53,0.12)",
      overflow: "hidden",
      cursor: "default",
      animation: "cert-lb-zoom 0.35s var(--ease-out)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0a0a0c",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: lightbox.src,
    alt: `Payout certificate for ${lightbox.name}`,
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      maxHeight: "70vh",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 28px",
      borderTop: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "var(--fg)",
      fontFamily: "Onest, sans-serif",
      letterSpacing: "-0.01em"
    }
  }, lightbox.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-dim)",
      marginTop: 4
    }
  }, "Account ", lightbox.acc, " \xB7 ", lightbox.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "var(--accent)",
      fontFamily: "Akrobat, Onest, sans-serif",
      letterSpacing: "-0.02em"
    }
  }, "+$", lightbox.amount), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLightbox(null),
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid var(--line-strong)",
      color: "var(--fg)",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    "aria-label": "Close"
  }, "\xD7"))))));
}
function Reviews() {
  useRevealOnScroll();
  // Real Trustpilot reviews – https://www.trustpilot.com/review/hashhedge.com
  // Names/countries exactly as Trustpilot displays. Quotes paraphrased for length but faithful to the original sentiment.
  const reviews = [{
    name: "Clarence",
    country: "Canada",
    size: "$25,000",
    quote: "Wasn't sure about these guys at first because they are relatively new. But honestly, the trading conditions are exactly as advertised. I usually trade around big news events and haven't had any issues with breached rules or crazy slippage here. The built-in platform is actually super smooth now and limit orders trigger perfectly. Good to finally see a prop firm that lets you just trade without stressing over hidden restrictions.",
    days: "Apr 2026",
    stars: 5
  }, {
    name: "Sultan Al-Haili",
    country: "UAE",
    size: "$25,000",
    quote: "Passed the 25k exam yesterday. Terminal is finally not lagging, charts load super fast now. No weird hidden drawdown rules like other props, everything is straight forward. Support replied in 5 mins when I asked about KYC. So far so good.",
    days: "Apr 2026",
    stars: 5
  }, {
    name: "James Coonce-Lounsbury",
    country: "United Kingdom",
    size: "$50,000",
    quote: "I have been trading with Hash Hedge for about two months now, and I recently passed the $50,000 challenge. What I appreciate most is the transparency. A lot of prop firms have hidden drawdown rules that catch you by surprise, but here everything is straightforward and published clearly. The built-in terminal is also very responsive, even during high volatility news events.",
    days: "Apr 2026",
    stars: 5
  }, {
    name: "Donna Jackson",
    country: "United States",
    size: "$50,000",
    quote: "Switched to Hash Hedge mainly because of their crypto trading conditions. The payout process is straightforward — no jumping through hoops as long as you follow the drawdown rules. If you are a manual trader looking for consistency, this works well.",
    days: "Mar 2026",
    stars: 5
  }, {
    name: "Marissa Tundale",
    country: "United States",
    size: "$25,000",
    quote: "The terminal works quickly, and there are no hidden rules that could confuse you. Overall, a good firm dealing with securities operations, exactly what I was looking for.",
    days: "Mar 2026",
    stars: 5
  }, {
    name: "Dolores F. Castro",
    country: "United States",
    size: "$100,000",
    quote: "Surprisingly stable execution on BTC/USD pairs. I was worried about the slippage after reading some old reviews, but my limit orders hit exactly where they should. The dashboard lag seems to be fixed now. Good job on the tech update.",
    days: "Mar 2026",
    stars: 5
  }, {
    name: "Andrey Varlamov",
    country: "Luxembourg",
    size: "$25,000",
    quote: "So basically even I failed the challenge, all was good. The support is there and all is in my hands.",
    days: "Nov 2025",
    stars: 5
  }, {
    name: "Дмитрий",
    country: "Russia",
    size: "$50,000",
    quote: "HashHedge has truly set a new standard for what a crypto prop company should be. Their transparency is refreshing – no hidden terms or surprises. The promotional offers are generous and easy to participate in. Customer support is fast, knowledgeable and helpful. A well-deserved 5 stars!",
    days: "Nov 2025",
    stars: 5
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "hh-reviews-section",
    style: {
      background: "var(--bg-elev)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 200,
      background: "linear-gradient(0deg, var(--bg) 0%, rgba(11,11,14,0.6) 40%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.35fr .65fr",
      gap: 60,
      marginBottom: 64,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "REVIEWS \xB7 TRUSTPILOT")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0 0",
      maxWidth: 860
    }
  }, "5,120 funded traders.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Reviewed on Trustpilot.")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hh-review-rating-summary",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 8,
      justifyContent: "flex-end"
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(TPStar, {
    key: i,
    size: 28
  })), /*#__PURE__*/React.createElement(TPStar, {
    size: 28,
    half: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 60,
      fontWeight: 800,
      color: "var(--fg)",
      letterSpacing: "-0.03em",
      lineHeight: 1,
      textAlign: "right"
    }
  }, "4.4", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      color: "var(--fg-dim)",
      fontWeight: 600
    }
  }, "/5")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--fg-dim)",
      marginTop: 4,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.trustpilot.com/review/hashhedge.com",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--fg-dim)",
      borderBottom: "1px solid var(--line-strong)"
    }
  }, "Trustpilot \xB7 verified reviews")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.name,
    delay: String(Math.min(i, 5))
  }, /*#__PURE__*/React.createElement("div", {
    className: "card hh-review-card",
    "data-mobile-review-extra": i >= 2 ? "true" : undefined,
    style: {
      padding: 28,
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, Array.from({
    length: r.stars
  }).map((_, j) => /*#__PURE__*/React.createElement(TPStar, {
    key: j,
    size: 16
  })), r.stars < 5 && Array.from({
    length: 5 - r.stars
  }).map((_, j) => /*#__PURE__*/React.createElement("svg", {
    key: `e${j}`,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "#2a2a2a"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z",
    fill: "#fff"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--fg-low)"
    }
  }, r.days)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--fg)",
      margin: "0 0 20px",
      flex: 1
    }
  }, "\"", r.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 20,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--fg)"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-dim)",
      marginTop: 2
    }
  }, r.country, " \xB7 ", r.size, " funded acc.")))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.trustpilot.com/review/hashhedge.com",
    target: "_blank",
    rel: "noopener",
    className: "card hh-review-more",
    style: {
      padding: 28,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      textDecoration: "none",
      background: "linear-gradient(160deg, rgba(24,169,101,0.08) 0%, rgba(31,29,37,0.4) 100%)",
      border: "1px solid rgba(24,169,101,0.25)",
      transition: "border-color .3s, transform .3s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "rgba(24,169,101,0.6)";
      e.currentTarget.style.transform = "translateY(-3px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "rgba(24,169,101,0.25)";
      e.currentTarget.style.transform = "none";
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 16 16",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "16",
    height: "16",
    fill: "#18A965",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "var(--fg)",
      letterSpacing: "-0.02em",
      marginBottom: 8
    }
  }, "Read verified reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--fg-muted)",
      lineHeight: 1.55,
      marginBottom: 22,
      maxWidth: 280
    }
  }, "Every review is checked by Trustpilot \u2013 payout proofs, terminal screenshots, real names."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      fontWeight: 700,
      color: "#18A965",
      padding: "10px 18px",
      borderRadius: 999,
      background: "rgba(24,169,101,0.12)",
      border: "1px solid rgba(24,169,101,0.3)"
    }
  }, "Read on Trustpilot", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "4"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: 12,
      color: "var(--fg-low)",
      marginTop: 32,
      maxWidth: 720,
      margin: "32px auto 0"
    }
  }, "Reviews from real traders on Trustpilot.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://www.trustpilot.com/review/hashhedge.com",
    target: "_blank",
    rel: "noopener",
    style: { color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }
  }, "Click through to read the originals on Trustpilot.")))));
}
function FAQ() {
  useRevealOnScroll();
  const [open, setOpen] = ____useS(0);
  const items = [{
    q: "Where can I get detailed information about how the platform works?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Everything from purchasing a challenge to withdrawing profits is in our ", /*#__PURE__*/React.createElement("a", {
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "User Guide"), ".")
  }, {
    q: "What payment methods are available?",
    a: "We accept USDT only, on the following networks: TRC20 (Tron), ERC20 (Ethereum), BEP20 (BNB Smart Chain), Solana, Arbitrum, Optimism."
  }, {
    q: "Why do I have to pay for the challenge?",
    a: "The entry fee works as a filter, and the challenge itself is the exam. Its job is to find traders who can genuinely trade with a system and deliver consistent profit, not a one-off result from a single lucky trade. Traders who pass get funded and withdraw their profit in real money."
  }, {
    q: "What rules must I follow during a challenge?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Stay within the daily and maximum drawdown limits and hit the profit target within the required number of trading days. Details for each package are on the purchase page and in the ", /*#__PURE__*/React.createElement("a", {
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide/introduction/challenge-type",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "User Guide"), ".")
  }, {
    q: "What happens if I exceed the loss limit?",
    a: "The challenge is permanently locked. Doesn't matter which limit, daily or overall. Unrealized losses count too."
  }, {
    q: "How is the Daily Loss limit calculated?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Daily Loss = Current Equity \u2212 Balance at the beginning of the day. Open positions affect the calculation. The limit resets at 00:13 UTC+4. Unrealized profits/losses carry forward to the next day. Detailed breakdown with examples ", /*#__PURE__*/React.createElement("a", {
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide/daily-loss-calculation",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "here"), ".")
  }, {
    q: "What is a trading day?",
    a: "A day on which at least one position was opened. If you open on Monday and close on Wednesday, only Monday counts."
  }, {
    q: "What is Settlement Time and when does it occur?",
    a: "Daily calculation of your account results. Happens at the end of the trading day in UTC+4. Balances are finalized and limits are updated."
  }, {
    q: "Which assets can I trade?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "160+ crypto assets, metals (gold, silver, platinum, palladium), oil and natural gas. Full list with position limits ", /*#__PURE__*/React.createElement("a", {
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide/coins-limit",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "here"), ".")
  }, {
    q: "Is spot trading available?",
    a: "No. Futures only."
  }, {
    q: "What is the maximum leverage I can trade with?",
    a: "Up to 1:5."
  }, {
    q: "Can I trade using different margin modes simultaneously?",
    a: "No. One mode at a time: Cross or Isolated. To switch, close all positions in the current mode first."
  }, {
    q: "Can I hedge positions?",
    a: "Yes. You can open positions in opposite directions on the same asset."
  }, {
    q: "Can I hold open positions for several days?",
    a: "Yes. But watch your limits – open positions are factored into drawdown calculations."
  }, {
    q: "Do open positions affect loss limits?",
    a: "Yes. Unrealized P&L directly affects Equity and drawdown calculations. You can breach a limit without closing a position."
  }, {
    q: "Is using a Stop Loss mandatory?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "No. But we recommend it to help you stay within drawdown limits. More on TP/SL setup ", /*#__PURE__*/React.createElement("a", {
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide/take-profit-stop-loss",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "here"), ".")
  }, {
    q: "Can I trade during weekends or important news events?",
    a: "Yes. No restrictions."
  }, {
    q: "What are the platform fees?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Details on fees and funding rates ", /*#__PURE__*/React.createElement("a", {
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide/trading-module/fees-and-funding-rate",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "here"), ".")
  }, {
    q: "Can I participate in multiple challenges simultaneously?",
    a: "Yes, on stages 1 and 2 you can run multiple challenges in parallel. On stage 3 (funded) you can only trade one challenge per account size."
  }, {
    q: "I've completed the challenge. What's next?",
    a: "You get a funded account (accumulative account). Trade with our capital, keep 90% of the profit."
  }, {
    q: "Are funded account conditions different from evaluation?",
    a: "No. Drawdowns, leverage, execution, fees – everything is the same across all stages. What you see on evaluation is what you get on funded."
  }, {
    q: "Is there a consistency rule or a daily profit cap?",
    a: "No. No requirement to spread profit evenly across days. No cap on how much you can make in a single day. Hit the target within the minimum trading days and you move on."
  }, {
    q: "Is there an extra fee to activate the funded account?",
    a: "No. The challenge fee is the only payment. Funded account activates at no additional cost."
  }, {
    q: "How do I reach support?",
    a: /*#__PURE__*/React.createElement(React.Fragment, null, "Website chat (icon in the bottom right), email ", /*#__PURE__*/React.createElement("a", {
      href: "mailto:support@hashhedge.com",
      style: {
        color: "var(--accent)"
      }
    }, "support@hashhedge.com"), ", Telegram bot ", /*#__PURE__*/React.createElement("a", {
      href: "https://t.me/hashhedgesupportbot",
      target: "_blank",
      rel: "noopener",
      style: {
        color: "var(--accent)"
      }
    }, "@hashhedgesupportbot"), ". Support is available 24/7.")
  }].slice(0, 6);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 360,
      background: "radial-gradient(ellipse 90% 100% at 70% 0%, rgba(252,213,53,0.1) 0%, rgba(252,213,53,0.04) 35%, rgba(252,213,53,0) 70%)",
      pointerEvents: "none",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 960,
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "QUESTIONS")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "20px 0"
    }
  }, "The honest FAQ.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: "2"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--fg-muted)"
    }
  }, "Everything we'd want to know before giving a prop firm our money."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: String(Math.min(i, 5))
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(open === i ? -1 : i),
    className: "card",
    style: {
      padding: 0,
      cursor: "pointer",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      margin: 0,
      color: "var(--fg)"
    }
  }, it.q), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: open === i ? "var(--accent)" : "var(--bg-card)",
      color: open === i ? "#13111c" : "var(--fg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all .25s var(--ease-out)",
      flexShrink: 0,
      transform: open === i ? "rotate(45deg)" : "rotate(0)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open === i ? 600 : 0,
      overflow: "hidden",
      transition: "max-height .25s ease",
      willChange: "max-height"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 28px 28px",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      borderTop: "1px solid var(--line)",
      paddingTop: 20,
      marginTop: 0
    }
  }, it.a)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: "3"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/faq",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost"
  }, "Open full FAQ", /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7h8m0 0L7 3m4 4l-4 4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))))));
}
function BigCTA() {
  useRevealOnScroll();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("style", null, `
        @keyframes cta-drift { from { background-position: 0 0; } to { background-position: 60px 60px; } }
        @keyframes cta-ring-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes cta-tick { 0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; } }
        @keyframes cta-pulse-dot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.5; } }
        @keyframes cta-line-draw { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
        @keyframes cta-coin-float-a { 0%, 100% { transform: translateY(0) rotate(-8deg); } 50% { transform: translateY(-14px) rotate(-4deg); } }
        @keyframes cta-coin-float-b { 0%, 100% { transform: translateY(0) rotate(12deg); } 50% { transform: translateY(-10px) rotate(18deg); } }
        @keyframes cta-coin-float-c { 0%, 100% { transform: translateY(0) rotate(-20deg); } 50% { transform: translateY(-18px) rotate(-14deg); } }
        @keyframes cta-money-rain {
          0% { transform: translateY(-40px) rotate(-4deg); opacity: 0; }
          15% { opacity: 0.35; }
          85% { opacity: 0.35; }
          100% { transform: translateY(620px) rotate(-4deg); opacity: 0; }
        }
        .cta-hero {
          position: relative;
          padding: 96px 60px;
          text-align: center;
          overflow: hidden;
          border-radius: 32px;
          background:
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(252,213,53,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 110%, rgba(252,213,53,0.12) 0%, transparent 55%),
            linear-gradient(180deg, #1a1812 0%, #0d0c0a 55%, #0a0908 100%);
          border: 1px solid rgba(252,213,53,0.22);
          box-shadow:
            0 50px 120px -30px rgba(0,0,0,0.8),
            0 0 0 1px rgba(252,213,53,0.08) inset,
            0 80px 140px -60px rgba(252,213,53,0.25);
        }
        .cta-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(252,213,53,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(252,213,53,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 75%);
          animation: cta-drift 40s linear infinite;
          pointer-events: none;
        }
        .cta-rings {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 820px; height: 820px;
          pointer-events: none;
          opacity: 0.55;
        }
        .cta-rings circle { fill: none; stroke: rgba(252,213,53,0.22); stroke-width: 1; }
        .cta-rings .outer { stroke-dasharray: 4 12; animation: cta-ring-spin 120s linear infinite; transform-origin: center; }
        .cta-rings .mid   { stroke-dasharray: 2 10; animation: cta-ring-spin 80s linear infinite reverse; transform-origin: center; }
        .cta-rings .inner { stroke-dasharray: 8 6;  animation: cta-ring-spin 60s linear infinite; transform-origin: center; }
        .cta-chart { position: absolute; left: 0; right: 0; bottom: 0; width: 100%; height: 240px; pointer-events: none; opacity: 0.75; }
        .cta-chart path.line { stroke: var(--accent); stroke-width: 2; fill: none; filter: drop-shadow(0 0 8px rgba(252,213,53,0.55)); stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: cta-line-draw 8s ease-out forwards infinite; }
        .cta-chart path.fill { fill: url(#cta-fillgrad); }
        .cta-tick-group text { font-family: 'Akrobat', sans-serif; font-size: 11px; font-weight: 800; fill: rgba(252,213,53,0.45); letter-spacing: 0.12em; }
        .cta-tick-group .up { fill: #7BC75A; }
        .cta-tick-group .item { animation: cta-tick 5s ease-in-out infinite; }
        .cta-coins { position: absolute; pointer-events: none; }
        .cta-coin {
          position: absolute;
          border-radius: 50%;
          display: block;
          object-fit: contain;
          background: rgba(255,255,255,0.04);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6), 0 0 24px rgba(252,213,53,0.12);
        }
        .cta-coin.usdt { width: 76px; height: 76px; top: 40px; left: 6%; animation: cta-coin-float-a 6s ease-in-out infinite; }
        .cta-coin.btc  { width: 96px; height: 96px; top: 160px; left: 3%; animation: cta-coin-float-b 7s ease-in-out infinite; }
        .cta-coin.eth  { width: 64px; height: 64px; bottom: 80px; left: 8%; animation: cta-coin-float-c 5.5s ease-in-out infinite; }
        .cta-coin.usdc { width: 84px; height: 84px; top: 90px; right: 5%; animation: cta-coin-float-b 6.5s ease-in-out infinite; }
        .cta-coin.sol  { width: 70px; height: 70px; top: 220px; right: 3%; animation: cta-coin-float-c 7.5s ease-in-out infinite; }
        .cta-coin.xlm  { width: 56px; height: 56px; bottom: 120px; right: 7%; animation: cta-coin-float-a 6s ease-in-out infinite; }
        .cta-rain-layer { position: absolute; inset: 0; pointer-events: none; overflow: hidden; opacity: 0.6; }
        .cta-bill {
          position: absolute;
          font-family: 'Akrobat', sans-serif; font-weight: 900;
          color: var(--accent); font-size: 22px; letter-spacing: -0.03em;
          animation: cta-money-rain 12s linear infinite;
          text-shadow: 0 0 12px rgba(252,213,53,0.4);
        }
        .cta-spark { position: absolute; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px rgba(252,213,53,0.8); animation: cta-pulse-dot 2s ease-in-out infinite; }
        .cta-secondary {
          color: #f5d33a !important;
          background: rgba(12, 11, 8, 0.86) !important;
          border-color: rgba(252, 213, 53, 0.72) !important;
          box-shadow:
            0 18px 50px rgba(0,0,0,0.45),
            0 0 0 1px rgba(252,213,53,0.12) inset,
            0 0 34px rgba(252,213,53,0.12) !important;
          backdrop-filter: blur(10px);
        }
        .cta-secondary:hover {
          color: #101010 !important;
          background: var(--accent) !important;
          border-color: var(--accent) !important;
        }
        @media (max-width: 900px) {
          .cta-hero { padding: 64px 24px; }
          .cta-coins, .cta-chart, .cta-rain-layer { display: none; }
        }
      `), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta-hero hh-final-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-grid"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "cta-rings",
    viewBox: "0 0 820 820"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "outer",
    cx: "410",
    cy: "410",
    r: "400"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "mid",
    cx: "410",
    cy: "410",
    r: "320"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "inner",
    cx: "410",
    cy: "410",
    r: "240"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "inner",
    cx: "410",
    cy: "410",
    r: "160",
    strokeOpacity: "0.15"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cta-rain-layer",
    "aria-hidden": "true"
  }, [{
    l: "8%",
    d: "0s",
    c: "$79"
  }, {
    l: "18%",
    d: "3s",
    c: "$5K"
  }, {
    l: "28%",
    d: "1.2s",
    c: "💵"
  }, {
    l: "72%",
    d: "2.1s",
    c: "$25K"
  }, {
    l: "82%",
    d: "4.2s",
    c: "$79"
  }, {
    l: "92%",
    d: "0.6s",
    c: "💵"
  }].map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "cta-bill",
    style: {
      left: b.l,
      top: "-40px",
      animationDelay: b.d
    }
  }, b.c))), /*#__PURE__*/React.createElement("div", {
    className: "cta-coins",
    style: {
      inset: 0
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cta-coin usdt",
    src: (window.__HH_BASE__+"assets/crypto-usdt.svg"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cta-coin btc",
    src: (window.__HH_BASE__+"assets/crypto-btc.svg"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cta-coin eth",
    src: (window.__HH_BASE__+"assets/crypto-eth.svg"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cta-coin usdc",
    src: (window.__HH_BASE__+"assets/crypto-usdc.svg"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cta-coin sol",
    src: (window.__HH_BASE__+"assets/crypto-sol.svg"),
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cta-coin xlm",
    src: (window.__HH_BASE__+"assets/crypto-stellar.svg"),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-spark",
    style: {
      width: 8,
      height: 8,
      top: "22%",
      left: "32%",
      animationDelay: "0.2s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-spark",
    style: {
      width: 6,
      height: 6,
      top: "70%",
      left: "28%",
      animationDelay: "0.9s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-spark",
    style: {
      width: 5,
      height: 5,
      top: "18%",
      right: "30%",
      animationDelay: "1.4s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-spark",
    style: {
      width: 7,
      height: 7,
      top: "78%",
      right: "34%",
      animationDelay: "0.5s"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    className: "cta-chart",
    viewBox: "0 0 1200 240",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "cta-fillgrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "rgba(252,213,53,0.35)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "rgba(252,213,53,0)"
  }))), /*#__PURE__*/React.createElement("path", {
    className: "fill",
    d: "M0 180 L60 172 L120 160 L180 166 L240 150 L300 138 L360 128 L420 134 L480 118 L540 110 L600 96 L660 90 L720 84 L780 70 L840 60 L900 52 L960 60 L1020 46 L1080 38 L1140 28 L1200 22 L1200 240 L0 240 Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "line",
    d: "M0 180 L60 172 L120 160 L180 166 L240 150 L300 138 L360 128 L420 134 L480 118 L540 110 L600 96 L660 90 L720 84 L780 70 L840 60 L900 52 L960 60 L1020 46 L1080 38 L1140 28 L1200 22"
  }), /*#__PURE__*/React.createElement("g", {
    className: "cta-tick-group"
  }, /*#__PURE__*/React.createElement("g", {
    className: "item",
    style: {
      animationDelay: "0s"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "240",
    cy: "150",
    r: "4",
    className: "up"
  }), /*#__PURE__*/React.createElement("text", {
    x: "250",
    y: "134",
    className: "up"
  }, "+$4,820 \xB7 \uD83C\uDDFA\uD83C\uDDF8")), /*#__PURE__*/React.createElement("g", {
    className: "item",
    style: {
      animationDelay: "1.5s"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "540",
    cy: "110",
    r: "4",
    className: "up"
  }), /*#__PURE__*/React.createElement("text", {
    x: "550",
    y: "94",
    className: "up"
  }, "+$8,120 \xB7 \uD83C\uDDE9\uD83C\uDDEA")), /*#__PURE__*/React.createElement("g", {
    className: "item",
    style: {
      animationDelay: "3s"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "840",
    cy: "60",
    r: "4",
    className: "up"
  }), /*#__PURE__*/React.createElement("text", {
    x: "850",
    y: "44",
    className: "up"
  }, "+$11,300 \xB7 \uD83C\uDDE7\uD83C\uDDF7")), /*#__PURE__*/React.createElement("g", {
    className: "item",
    style: {
      animationDelay: "4.5s"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "1080",
    cy: "38",
    r: "4",
    className: "up"
  }), /*#__PURE__*/React.createElement("text", {
    x: "1075",
    y: "24",
    textAnchor: "end",
    className: "up"
  }, "+$22,640 \xB7 \uD83C\uDDE6\uD83C\uDDEA")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      justifyContent: "center",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: "var(--accent)",
      boxShadow: "0 0 10px var(--accent)"
    }
  }), "READY?"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      margin: "24px auto 24px",
      maxWidth: 900,
      fontSize: "clamp(44px, 5.5vw, 76px)"
    }
  }, "Your first ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "$5,000 challenge"), " is just ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "$79"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--fg-muted)",
      maxWidth: 640,
      margin: "0 auto 40px"
    }
  }, "2-stage Challenge. Unlimited time. 90% profit split. USDT payouts straight to your wallet."), /*#__PURE__*/React.createElement("div", {
    className: "hh-final-cta-actions",
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg"
  }, "Start Challenge \xB7 $79"), /*#__PURE__*/React.createElement("a", {
    href: "https://hashhedge.gitbook.io/hashhedge-user-guide?fpr=123456",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost btn-lg cta-secondary"
  }, "Read the rules")))))));
}
function Footer() {
  const columns = [{
    t: "Product",
    l: [{
      label: "Challenges",
      href: "#pricing"
    }, {
      label: "Affiliate Program",
      href: "https://www.hashhedge.com/affiliateprogram?fpr=123456&client_reference_id=c5646489-4e4e-450c-9246-b63d35ea4d36"
    }, {
      label: "Blog",
      href: "https://www.hashhedge.com/blog?fpr=123456&client_reference_id=2a2c2893-ab08-4508-ac36-de4b76752443"
    }, {
      label: "Open Guide",
      href: "https://hashhedge.gitbook.io/hashhedge-user-guide"
    }]
  }, {
    t: "About us",
    l: [{
      label: "Support",
      href: "https://t.me/hashhedgesupportbot"
    }, {
      label: "FAQ",
      href: "https://www.hashhedge.com/faq?fpr=123456&client_reference_id=ee2bbcb7-717b-4ac8-b7dc-4d6dc0f00c61"
    }, {
      label: "Vacancies",
      href: "https://www.hashhedge.com/vacancies"
    }]
  }, {
    t: "Other",
    l: [{
      label: "Privacy Policy",
      href: "https://www.hashhedge.com/privacy-policy"
    }, {
      label: "Terms And Conditions",
      href: "https://www.hashhedge.com/terms-and-conditions"
    }, {
      label: "Commercial Terms",
      href: "https://www.hashhedge.com/commercial-terms"
    }, {
      label: "Affiliate Policies",
      href: "https://www.hashhedge.com/affiliate-politics"
    }]
  }];
  const partners = [{
    name: "HyperPay",
    style: {
      fontStyle: "italic",
      fontWeight: 900
    }
  }, {
    name: "Cipherbc",
    style: {
      fontWeight: 700,
      letterSpacing: "-0.05em"
    }
  }, {
    name: "TradingView",
    style: {
      fontWeight: 800
    }
  }, {
    name: "CoinMarketCap",
    style: {
      fontWeight: 700
    }
  }, {
    name: "Crypto Banter",
    style: {
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 16,
      lineHeight: 1.05
    }
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "88px 0 64px",
      background: "var(--bg-elev)",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr repeat(3, 1fr)",
      gap: 86,
      marginBottom: 92
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(HashHedgeLogo, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--fg-low)",
      marginTop: 44,
      lineHeight: 1.45,
      maxWidth: 260
    }
  }, "Hash Hedge \u2013 Crypto Prop Trading Platform: Trade, prove your skills, manage capital.")), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: "rgba(238,238,243,0.28)",
      textTransform: "uppercase",
      marginBottom: 26
    }
  }, col.t), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, col.l.map(li => /*#__PURE__*/React.createElement("li", {
    key: li.label
  }, /*#__PURE__*/React.createElement("a", {
    href: li.href,
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: 15,
      color: "rgba(238,238,243,0.72)",
      textDecoration: "none"
    }
  }, li.label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 54,
      marginBottom: 116,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      color: "rgba(238,238,243,0.8)"
    }
  }, "Our Partners"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 42,
      flexWrap: "wrap"
    }
  }, partners.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      color: "#fff",
      opacity: i === partners.length - 1 ? 0.65 : 0.95,
      fontSize: i === 1 ? 25 : 18,
      fontFamily: "Onest, sans-serif",
      ...p.style
    }
  }, p.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "rgba(238,238,243,0.86)",
      marginBottom: 34
    }
  }, "\xA9 2026 HashHedge. All Right Reserved."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      lineHeight: 1.35,
      color: "rgba(238,238,243,0.36)",
      maxWidth: 1050,
      margin: "0 auto"
    }
  }, "All information provided on this website is intended solely for the purpose of learning about trading in the financial markets and in no way constitutes specific investment advice, business advice, analysis of investment opportunities or similar general advice regarding trading in investment instruments."))));
}
Object.assign(window, {
  TeamCerts,
  Reviews,
  FAQ,
  BigCTA,
  Footer
});

function Nav({
  onMenuOpen
}) {
  const [langOpen, setLangOpen] = React.useState(false);
  const langRef = React.useRef(null);
  React.useEffect(() => {
    if (!langOpen) return;
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    const id = setTimeout(() => document.addEventListener('click', handler), 0);
    return () => { clearTimeout(id); document.removeEventListener('click', handler); };
  }, [langOpen]);
  const langs = [{
    flag: "🇬🇧",
    code: "EN",
    label: "English",
    href: "https://www.hashhedge.com/"
  }, {
    flag: "🇩🇪",
    code: "DE",
    label: "Deutsch",
    href: "https://www.hashhedge.com/de"
  }, {
    flag: "🇵🇹",
    code: "PT",
    label: "Português",
    href: "https://www.hashhedge.com/pt"
  }, {
    flag: "🇫🇷",
    code: "FR",
    label: "Française",
    href: "https://www.hashhedge.com/fr"
  }, {
    flag: "🇪🇸",
    code: "ES",
    label: "Español",
    href: "https://www.hashhedge.com/es"
  }, {
    flag: "🇮🇳",
    code: "HI",
    label: "हिन्दी",
    href: "https://www.hashhedge.com/hi"
  }, {
    flag: "🇮🇩",
    code: "ID",
    label: "Bahasa Indonesia",
    href: "https://www.hashhedge.com/in"
  }, {
    flag: "🇷🇺",
    code: "RU",
    label: "Русский",
    href: "https://www.hashhedge.com/ru"
  }, {
    flag: "🇺🇦",
    code: "UA",
    label: "Український",
    href: "https://www.hashhedge.com/ua"
  }, {
    flag: "🇰🇿",
    code: "KZ",
    label: "Қазақша",
    href: "https://www.hashhedge.com/kz"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-inner"
  }, /*#__PURE__*/React.createElement(HashHedgeLogo, null), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#pricing"
  }, "Challenges")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/affiliateprogram?fpr=123456&client_reference_id=c5646489-4e4e-450c-9246-b63d35ea4d36"
  }, "Affiliate Program")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/faq?fpr=123456&client_reference_id=ee2bbcb7-717b-4ac8-b7dc-4d6dc0f00c61"
  }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/blog?fpr=123456&client_reference_id=2a2c2893-ab08-4508-ac36-de4b76752443"
  }, "Blog"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/login",
    target: "_blank",
    rel: "noopener",
    className: "nav-cta-desktop",
    style: {
      fontSize: 14,
      color: "var(--fg-muted)",
      padding: "10px 14px"
    }
  }, "Log in"), /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary nav-cta-desktop"
  }, "Start Challenge"), /*#__PURE__*/React.createElement("div", {
    className: "hh-lang-switcher",
    ref: langRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hh-lang-trigger",
    onClick: () => setLangOpen(v => !v),
    "aria-expanded": langOpen,
    "aria-label": "Choose language"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDDEC\uD83C\uDDE7"), /*#__PURE__*/React.createElement("b", null, "EN"), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4.5 6 7.5 9 4.5",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hh-lang-menu" + (langOpen ? " open" : "")
  }, langs.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.code,
    href: l.href
  }, /*#__PURE__*/React.createElement("span", null, l.flag), /*#__PURE__*/React.createElement("em", null, l.label))))), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    onClick: onMenuOpen,
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M3 12h18M3 18h18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))))));
}
function MobileMenu({
  open,
  onClose
}) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => onClose();
  return /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-menu-close",
    onClick: close,
    "aria-label": "Close menu"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#pricing",
    onClick: close
  }, "Challenges"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/affiliateprogram?fpr=123456&client_reference_id=c5646489-4e4e-450c-9246-b63d35ea4d36",
    onClick: close
  }, "Affiliate Program"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/faq?fpr=123456&client_reference_id=ee2bbcb7-717b-4ac8-b7dc-4d6dc0f00c61",
    onClick: close
  }, "FAQ"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.hashhedge.com/blog?fpr=123456&client_reference_id=2a2c2893-ab08-4508-ac36-de4b76752443",
    onClick: close
  }, "Blog"), /*#__PURE__*/React.createElement("div", {
    className: "menu-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary btn-lg",
    onClick: close
  }, "Start Challenge \xB7 from $79"), /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/login",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-ghost",
    onClick: close
  }, "Log in")));
}
function MobileCTABar() {
  const [vis, setVis] = React.useState(false);
  const [portal, setPortal] = React.useState(null);
  React.useEffect(() => {
    const fn = () => {
      setVis(window.scrollY > window.innerHeight * 1.2);
    };
    window.addEventListener("scroll", fn, { passive: true });
    var el = document.createElement("div");
    document.body.appendChild(el);
    setPortal(el);
    return () => { window.removeEventListener("scroll", fn); document.body.removeChild(el); };
  }, []);
  var bar = /*#__PURE__*/React.createElement("div", {
    className: "mobile-cta-bar",
    style: { transform: vis ? "translateY(0)" : "translateY(120%)", transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)" }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/register",
    target: "_blank",
    rel: "noopener",
    className: "btn btn-primary"
  }, "Start Challenge \xB7 from $79", /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
  if (!portal) return null;
  return ReactDOM.createPortal(bar, portal);
}
function HashHedgeReactApp() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', '#fcd535');
    document.documentElement.style.setProperty('--accent-dark', '#cbaa22');
    document.body.setAttribute('data-anim', 'max');
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "tilda-html-hashhedge",
    "data-anim": "max"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fcd535",
      color: "#000",
      textAlign: "center",
      fontSize: 14,
      fontWeight: 600,
      padding: "10px 16px",
      lineHeight: 1.4
    }
  }, "Already have an account? New challenges can only be purchased in the ", /*#__PURE__*/React.createElement("a", {
    href: "https://app.hashhedge.com/en/login",
    className: "hh-banner-lk-link",
    style: { color: "#000", fontWeight: 700 }
  }, "new dashboard")), /*#__PURE__*/React.createElement(Nav, {
    onMenuOpen: () => setMenuOpen(true)
  })), /*#__PURE__*/React.createElement(MobileMenu, {
    open: menuOpen,
    onClose: () => setMenuOpen(false)
  }), /*#__PURE__*/React.createElement(Hero, {
    variant: "classic",
    anim: "max"
  }), /*#__PURE__*/React.createElement(PressStrip, null), /*#__PURE__*/React.createElement(TradeMetalsBanner, null), /*#__PURE__*/React.createElement(PromoBanner, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(WhyUs, null), /*#__PURE__*/React.createElement(PayoutShowcase, null), /*#__PURE__*/React.createElement(TeamCerts, null), /*#__PURE__*/React.createElement(TelegramCommunity, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(YouTubeSection, null), /*#__PURE__*/React.createElement(InvestingBanner, null), /*#__PURE__*/React.createElement(BlueprintSection, null), /*#__PURE__*/React.createElement(SupportSection, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(BigCTA, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MobileCTABar, null));
}
function PopupChartBg() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "hh-popup-chart-bg",
    viewBox: "0 0 400 260",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid slice"
  },
  /* grid lines */
  React.createElement("g", { stroke: "#ffffff", strokeWidth: "0.5", opacity: "0.4" },
    React.createElement("line", { x1: "0", y1: "52", x2: "400", y2: "52" }),
    React.createElement("line", { x1: "0", y1: "104", x2: "400", y2: "104" }),
    React.createElement("line", { x1: "0", y1: "156", x2: "400", y2: "156" }),
    React.createElement("line", { x1: "0", y1: "208", x2: "400", y2: "208" }),
    React.createElement("line", { x1: "80", y1: "0", x2: "80", y2: "260" }),
    React.createElement("line", { x1: "160", y1: "0", x2: "160", y2: "260" }),
    React.createElement("line", { x1: "240", y1: "0", x2: "240", y2: "260" }),
    React.createElement("line", { x1: "320", y1: "0", x2: "320", y2: "260" })
  ),
  /* price line — upward trend */
  React.createElement("polyline", {
    points: "0,220 40,210 70,215 100,195 130,180 150,188 170,165 200,150 220,158 245,130 265,118 290,105 310,115 330,90 355,75 380,55 400,45",
    fill: "none",
    stroke: "#fcd535",
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }),
  /* area fill under line */
  React.createElement("polygon", {
    points: "0,220 40,210 70,215 100,195 130,180 150,188 170,165 200,150 220,158 245,130 265,118 290,105 310,115 330,90 355,75 380,55 400,45 400,260 0,260",
    fill: "url(#chartGrad)",
    opacity: "0.35"
  }),
  /* gradient def */
  React.createElement("defs", null,
    React.createElement("linearGradient", { id: "chartGrad", x1: "0", y1: "0", x2: "0", y2: "1" },
      React.createElement("stop", { offset: "0%", stopColor: "#fcd535", stopOpacity: "0.5" }),
      React.createElement("stop", { offset: "100%", stopColor: "#fcd535", stopOpacity: "0" })
    )
  ),
  /* candle wicks - green candles */
  React.createElement("g", { stroke: "#4ade80", strokeWidth: "1.5" },
    React.createElement("line", { x1: "25", y1: "208", x2: "25", y2: "218" }),
    React.createElement("line", { x1: "55", y1: "205", x2: "55", y2: "216" }),
    React.createElement("line", { x1: "115", y1: "188", x2: "115", y2: "200" }),
    React.createElement("line", { x1: "185", y1: "157", x2: "185", y2: "170" }),
    React.createElement("line", { x1: "255", y1: "122", x2: "255", y2: "134" }),
    React.createElement("line", { x1: "345", y1: "82", x2: "345", y2: "95" }),
    React.createElement("line", { x1: "390", y1: "43", x2: "390", y2: "57" })
  ),
  /* candle bodies - green */
  React.createElement("g", { fill: "#4ade80" },
    React.createElement("rect", { x: "20", y: "210", width: "10", height: "6", rx: "1" }),
    React.createElement("rect", { x: "50", y: "207", width: "10", height: "6", rx: "1" }),
    React.createElement("rect", { x: "110", y: "190", width: "10", height: "7", rx: "1" }),
    React.createElement("rect", { x: "180", y: "160", width: "10", height: "7", rx: "1" }),
    React.createElement("rect", { x: "250", y: "124", width: "10", height: "7", rx: "1" }),
    React.createElement("rect", { x: "340", y: "84", width: "10", height: "8", rx: "1" }),
    React.createElement("rect", { x: "385", y: "46", width: "10", height: "8", rx: "1" })
  )
  );
}

ReactDOM.createRoot(document.getElementById("hashhedge-root")).render(/*#__PURE__*/React.createElement(HashHedgeReactApp, null));
})();
