(function(){
  const { useEffect, useRef, useState, useMemo } = React;
  const _e = React.createElement;
  const F = React.Fragment;

  // ============================================================================
  // PRIMITIVES (Logo, Reveal, Counter, TPStar, HHCheck)
  // ============================================================================
  function HashHedgeLogo({ size = 28, wordmarkColor = "var(--fg)" }) {
    const h = size;
    return _e("a", { href: "https://www.hashhedge.com/ru", className: "hh-logo",
      style: { display: "inline-flex", alignItems: "center", gap: h * 0.42, textDecoration: "none" }, "aria-label": "HashHedge" },
      _e("svg", { width: h * 0.86, height: h * 0.8, viewBox: "0 0 24 22.4", style: { fill: "var(--accent)", flexShrink: 0, display: "block" } },
        _e("path", { d: "M 11.983 18.574 L 3.766 10.512 L 8.027 6.386 L 8.027 12.281 L 10.604 14.639 L 10.604 0 L 0 10.512 L 12.009 22.4 L 24 10.512 L 13.396 0 L 13.396 14.639 L 15.973 12.281 L 15.973 6.386 L 20.234 10.512 L 11.983 18.574 Z", fillRule: "evenodd", style: { fill: "var(--accent)" } })
      ),
      _e("svg", { width: h * 4.0, height: h * 0.445, viewBox: "0 0 115.2 12.8", style: { fill: wordmarkColor, flexShrink: 0, display: "block" } },
        _e("path", { d: "M 3.17 5.014 L 7.671 5.014 L 7.671 0.159 L 10.841 0.159 L 10.841 12.659 L 7.671 12.659 L 7.671 7.945 L 3.17 7.945 L 3.17 12.659 L 0 12.659 L 0 0.159 L 3.17 0.159 L 3.17 5.014 Z M 15.323 12.659 L 11.925 12.659 L 16.899 0.159 L 20.121 0.159 L 25.042 12.659 L 21.627 12.659 L 21.014 10.893 L 15.953 10.893 L 15.323 12.659 Z M 20.016 8.015 L 18.51 3.725 L 16.951 8.015 L 20.016 8.015 Z M 32.065 4.167 C 32.007 3.778 31.802 3.478 31.452 3.266 C 31.102 3.043 30.64 2.931 30.068 2.931 C 29.671 2.931 29.327 3.001 29.035 3.143 C 28.743 3.284 28.597 3.496 28.597 3.778 C 28.597 4.061 28.761 4.273 29.088 4.414 C 29.415 4.555 29.893 4.708 30.524 4.873 L 31.662 5.155 C 32.164 5.285 32.637 5.426 33.081 5.579 C 33.536 5.72 33.933 5.92 34.272 6.179 C 34.61 6.438 34.879 6.774 35.077 7.186 C 35.276 7.586 35.387 8.11 35.41 8.757 C 35.41 9.498 35.264 10.128 34.972 10.646 C 34.692 11.152 34.318 11.564 33.851 11.882 C 33.384 12.2 32.853 12.435 32.258 12.588 C 31.674 12.729 31.078 12.8 30.471 12.8 C 29.887 12.8 29.298 12.735 28.702 12.606 C 28.119 12.476 27.564 12.241 27.039 11.9 C 26.525 11.558 26.087 11.105 25.725 10.54 C 25.375 9.963 25.159 9.263 25.077 8.439 L 28.265 8.439 C 28.381 8.945 28.656 9.304 29.088 9.516 C 29.531 9.728 30.045 9.834 30.629 9.834 C 30.804 9.834 30.985 9.822 31.172 9.799 C 31.359 9.775 31.528 9.734 31.68 9.675 C 31.843 9.604 31.971 9.51 32.065 9.393 C 32.17 9.275 32.223 9.116 32.223 8.916 C 32.223 8.657 32.112 8.463 31.89 8.333 C 31.68 8.192 31.376 8.086 30.979 8.015 L 29.998 7.804 C 29.333 7.662 28.708 7.492 28.124 7.292 C 27.541 7.091 27.068 6.856 26.706 6.585 C 26.321 6.291 26.017 5.92 25.795 5.473 C 25.573 5.026 25.462 4.455 25.462 3.761 L 25.462 3.725 C 25.509 3.019 25.684 2.43 25.988 1.96 C 26.291 1.489 26.671 1.106 27.126 0.812 C 27.64 0.483 28.177 0.265 28.737 0.159 C 29.309 0.053 29.911 0 30.541 0 C 31.067 0.012 31.575 0.094 32.065 0.247 C 32.567 0.388 33.011 0.594 33.396 0.865 C 33.886 1.206 34.277 1.654 34.569 2.207 C 34.861 2.748 35.048 3.402 35.13 4.167 L 32.065 4.167 Z M 40.419 5.014 L 44.92 5.014 L 44.92 0.159 L 48.09 0.159 L 48.09 12.659 L 44.92 12.659 L 44.92 7.945 L 40.419 7.945 L 40.419 12.659 L 37.249 12.659 L 37.249 0.159 L 40.419 0.159 L 40.419 5.014 Z M 58.684 5.014 L 63.185 5.014 L 63.185 0.159 L 66.355 0.159 L 66.355 12.659 L 63.185 12.659 L 63.185 7.945 L 58.684 7.945 L 58.684 12.659 L 55.515 12.659 L 55.515 0.159 L 58.684 0.159 L 58.684 5.014 Z M 78.053 0.159 L 78.053 3.125 L 71.871 3.125 L 71.871 5.032 L 76.967 5.032 L 76.967 7.857 L 71.871 7.857 L 71.871 9.71 L 78.053 9.71 L 78.053 12.659 L 68.701 12.659 L 68.701 0.159 L 78.053 0.159 Z M 79.715 12.659 L 79.715 0.159 L 84.566 0.159 C 85.547 0.159 86.429 0.294 87.211 0.565 C 88.005 0.824 88.676 1.212 89.225 1.73 C 89.774 2.248 90.194 2.895 90.486 3.672 C 90.789 4.449 90.941 5.35 90.941 6.374 C 90.941 8.469 90.38 10.04 89.26 11.087 C 88.151 12.135 86.598 12.659 84.601 12.659 L 79.715 12.659 Z M 84.636 9.71 C 85.22 9.71 85.711 9.634 86.107 9.481 C 86.505 9.316 86.82 9.092 87.053 8.81 C 87.298 8.516 87.473 8.168 87.578 7.768 C 87.683 7.356 87.736 6.909 87.736 6.426 C 87.736 5.956 87.683 5.52 87.578 5.12 C 87.486 4.72 87.316 4.373 87.071 4.078 C 86.825 3.784 86.493 3.555 86.072 3.39 C 85.664 3.213 85.144 3.125 84.514 3.125 L 82.885 3.125 L 82.885 9.71 L 84.636 9.71 Z M 95.476 6.374 C 95.476 6.821 95.528 7.25 95.634 7.662 C 95.739 8.063 95.908 8.422 96.141 8.739 C 96.387 9.057 96.702 9.31 97.087 9.498 C 97.485 9.687 97.975 9.781 98.558 9.781 C 98.816 9.781 99.072 9.757 99.329 9.71 C 99.586 9.651 99.819 9.569 100.029 9.463 C 100.239 9.345 100.415 9.198 100.555 9.022 C 100.707 8.845 100.806 8.633 100.852 8.386 L 97.928 8.386 L 97.928 5.703 L 104.18 5.703 L 104.18 6.162 C 104.18 7.021 104.098 7.845 103.935 8.633 C 103.783 9.41 103.457 10.14 102.954 10.823 C 102.709 11.164 102.417 11.458 102.078 11.705 C 101.74 11.953 101.373 12.158 100.975 12.323 C 100.59 12.476 100.176 12.594 99.732 12.676 C 99.3 12.759 98.868 12.8 98.436 12.8 C 97.467 12.8 96.597 12.653 95.826 12.359 C 95.068 12.053 94.414 11.623 93.865 11.07 C 93.328 10.517 92.914 9.846 92.621 9.057 C 92.341 8.269 92.201 7.386 92.201 6.409 C 92.201 5.408 92.347 4.514 92.639 3.725 C 92.931 2.925 93.345 2.254 93.882 1.713 C 94.42 1.159 95.068 0.736 95.826 0.441 C 96.597 0.147 97.461 0 98.418 0 C 99.107 0 99.761 0.094 100.38 0.282 C 101.01 0.459 101.57 0.736 102.061 1.112 C 102.563 1.489 102.978 1.966 103.304 2.542 C 103.632 3.107 103.847 3.784 103.952 4.573 L 100.817 4.573 C 100.701 4.019 100.438 3.625 100.029 3.39 C 99.633 3.143 99.113 3.019 98.471 3.019 C 97.91 3.019 97.437 3.119 97.052 3.319 C 96.679 3.519 96.369 3.784 96.124 4.114 C 95.891 4.431 95.721 4.79 95.616 5.191 C 95.523 5.591 95.476 5.985 95.476 6.374 Z M 115.2 0.159 L 115.2 3.125 L 109.018 3.125 L 109.018 5.032 L 114.114 5.032 L 114.114 7.857 L 109.018 7.857 L 109.018 9.71 L 115.2 9.71 L 115.2 12.659 L 105.848 12.659 L 105.848 0.159 L 115.2 0.159 Z", fillRule: "nonzero", style: { fill: wordmarkColor } })
      )
    );
  }

  function TPStar({ size = 16, half = false }) {
    if (half) {
      return _e("svg", { width: size, height: size, viewBox: "0 0 16 16" },
        _e("rect", { width: "11", height: "16", style: { fill: "#18A965" } }),
        _e("rect", { x: "11", width: "5", height: "16", style: { fill: "#2a2a2a" } }),
        _e("path", { d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z", style: { fill: "#fff" } })
      );
    }
    return _e("svg", { width: size, height: size, viewBox: "0 0 16 16" },
      _e("rect", { width: "16", height: "16", style: { fill: "#18A965" } }),
      _e("path", { d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z", style: { fill: "#fff" } })
    );
  }

  function HHCheck({ size = 16 }) {
    return _e("svg", { width: size, height: size, viewBox: "0 0 24 24", style: { flexShrink: 0, display: "inline-block" } },
      _e("circle", { cx: "12", cy: "12", r: "10", style: { fill: "#fcd535", fillOpacity: 0.15 } }),
      _e("path", { d: "M8 12l3 3 5-6", style: { stroke: "#fcd535", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } })
    );
  }

  function Reveal({ children, delay = "0" }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current; if (!el) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { el.classList.add("visible", "in"); io.unobserve(el); } });
      }, { threshold: 0.12, rootMargin: "0px 0px 400px 0px" });
      io.observe(el); return () => io.disconnect();
    }, []);
    return _e("div", { ref, className: "reveal", "data-delay": delay }, children);
  }

  function Counter({ to, duration = 1800, suffix = "", prefix = "", decimals = 0 }) {
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
      }, { threshold: 0.1, rootMargin: "0px 0px 400px 0px" });
      io.observe(ref.current);
      return () => io.disconnect();
    }, [to, duration]);
    const formatted = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("ru-RU").replace(/,/g, " ");
    return _e("span", { ref }, prefix, formatted, suffix);
  }

  // ============================================================================
  // HEADER
  // ============================================================================
  function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 8);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const nav = [
      { l: "Программа", h: "#why" },
      { l: "Как начать", h: "#how" },
      { l: "Уровни", h: "#levels" },
      { l: "Калькулятор", h: "#calc" },
      { l: "Кабинет", h: "#cabinet" },
      { l: "FAQ", h: "#faq" }
    ];
    return _e("header", {
      style: {
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 0",
        background: scrolled ? "rgba(8,8,10,0.86)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background .25s, border-color .25s"
      }
    },
      _e("div", { className: "container", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 } },
        _e(HashHedgeLogo, { size: 28 }),
        _e("nav", { className: "hh-nav-desktop", style: { display: "flex", gap: 28 } },
          nav.map(n => _e("a", { key: n.l, href: n.h,
            style: { color: "var(--fg-muted)", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color .2s" },
            onMouseEnter: e => e.currentTarget.style.color = "var(--fg)",
            onMouseLeave: e => e.currentTarget.style.color = "var(--fg-muted)"
          }, n.l))
        ),
        _e("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
          _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-outline",
            style: { padding: "9px 18px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none" }
          }, "Войти"),
          _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
            style: { padding: "9px 18px", borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: "none" }
          }, "Стать партнёром"),
          _e("button", { className: "hh-mob-toggle", "aria-label": "Меню",
            onClick: () => setMenuOpen(v => !v),
            style: { display: "none", background: "transparent", border: "1px solid var(--line)", borderRadius: 10, width: 40, height: 40, color: "var(--fg)", cursor: "pointer" }
          },
            _e("svg", { width: 20, height: 14, viewBox: "0 0 20 14", fill: "none", stroke: "currentColor", strokeWidth: 2 },
              _e("path", { d: "M0 1h20M0 7h20M0 13h20" })
            )
          )
        )
      ),
      menuOpen && _e("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(8,8,10,0.98)", borderTop: "1px solid var(--line)", padding: "20px 0" } },
        _e("div", { className: "container", style: { display: "flex", flexDirection: "column", gap: 4 } },
          nav.map(n => _e("a", { key: n.l, href: n.h, onClick: () => setMenuOpen(false),
            style: { color: "var(--fg)", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid var(--line)" } }, n.l))
        )
      )
    );
  }

  // ============================================================================
  // HERO CANDLES BACKGROUND (бóльшая видимость + жёлтая MA-линия как на vercel)
  // ============================================================================
  function HeroCandles() {
    const candles = useMemo(() => {
      const out = []; let prev = 67500;
      for (let i = 0; i < 90; i++) {
        const move = Math.sin(i * 0.43) * 70 + Math.cos(i * 1.17) * 45 + Math.sin(i * 0.21) * 30;
        const o = prev, c = o + move;
        const h = Math.max(o, c) + Math.abs(Math.sin(i * 2.1) * 35) + 8;
        const l = Math.min(o, c) - Math.abs(Math.cos(i * 1.6) * 35) - 8;
        out.push({ o, h, l, c, up: c >= o });
        prev = c;
      }
      const all = out.flatMap(c => [c.h, c.l]);
      const min = Math.min(...all), max = Math.max(...all);
      const r = max - min || 1;
      // Зажимаем свечи по высоте — занимают только средние 50% высоты hero
      // (от 25% до 75%), чтобы не были слишком крупными как раньше
      const YMIN = 30, YMAX = 70; // svg viewBox 0-100
      const norm = out.map(c => ({
        o: YMAX - ((c.o - min) / r) * (YMAX - YMIN),
        h: YMAX - ((c.h - min) / r) * (YMAX - YMIN),
        l: YMAX - ((c.l - min) / r) * (YMAX - YMIN),
        c: YMAX - ((c.c - min) / r) * (YMAX - YMIN),
        up: c.up
      }));
      // simple MA(12)
      const ma = norm.map((_, i) => {
        const slice = norm.slice(Math.max(0, i - 11), i + 1);
        return slice.reduce((s, p) => s + p.c, 0) / slice.length;
      });
      return { norm, ma };
    }, []);
    const STEP = 100 / candles.norm.length;
    const W = STEP * 0.55;
    const maPath = candles.ma.map((y, i) => `${i === 0 ? "M" : "L"} ${i * STEP + STEP * 0.5} ${y}`).join(" ");
    return _e("div", { "aria-hidden": true, style: { position: "absolute", inset: 0, opacity: 0.22, pointerEvents: "none", zIndex: 0 } },
      // grid
      _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
        [10, 25, 40, 55, 70, 85].map((y, i) => _e("line", { key: "h" + i, x1: 0, x2: 100, y1: y, y2: y, style: { stroke: "rgba(255,255,255,0.04)", strokeWidth: 0.1 } })),
        Array.from({ length: 12 }).map((_, i) => _e("line", { key: "v" + i, x1: i * 100 / 12, x2: i * 100 / 12, y1: 0, y2: 100, style: { stroke: "rgba(255,255,255,0.03)", strokeWidth: 0.08 } }))
      ),
      // candles
      _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
        candles.norm.map((c, i) => {
          const x = i * STEP + STEP * 0.225;
          const cx = x + W / 2;
          const color = c.up ? "#4ade80" : "#ff4b5c";
          const top = Math.min(c.o, c.c);
          const bot = Math.max(c.o, c.c);
          return _e("g", { key: i },
            _e("line", { x1: cx, x2: cx, y1: c.h, y2: c.l, style: { stroke: color, strokeWidth: 0.18, opacity: 0.85 } }),
            _e("rect", { x, y: top, width: W, height: Math.max(0.5, bot - top), style: { fill: color, opacity: 0.85 } })
          );
        })
      ),
      // yellow MA line (как на vercel — толстая жёлтая линия поверх свечей)
      _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
        _e("path", { d: maPath, style: { stroke: "#fcd535", strokeWidth: 0.45, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", filter: "drop-shadow(0 0 1px rgba(252,213,53,0.5))" } })
      ),
      // fade edges
      _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, var(--bg) 0%, rgba(8,8,10,0) 16%, rgba(8,8,10,0) 64%, var(--bg) 100%), linear-gradient(90deg, var(--bg) 0%, rgba(8,8,10,0) 10%, rgba(8,8,10,0) 90%, var(--bg) 100%)" } })
    );
  }

  // ============================================================================
  // LIVE PARTNER CARD (правая часть Hero)
  // ============================================================================
  function LivePartnerCard() {
    const earned = 12480;
    const payouts = [
      { flag: "🇷🇺", name: "Сергей", city: "СПб",     amt: 9050 },
      { flag: "🇰🇿", name: "Адиль",  city: "Бишкек",  amt: 3470 },
      { flag: "🇬🇪", name: "Nino",   city: "Тбилиси", amt: 540  }
    ];
    // Mini sparkline данные — растущая кривая
    const sparkPts = [60, 55, 58, 50, 48, 42, 38, 32, 28, 22, 18, 12];
    const sparkPath = sparkPts.map((y, i) => `${i === 0 ? "M" : "L"} ${i / (sparkPts.length - 1) * 100} ${y}`).join(" ");
    return _e("div", {
      style: {
        background: "rgba(11,11,14,0.85)",
        border: "1px solid var(--line)",
        borderRadius: 18, overflow: "hidden",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)"
      }
    },
      // Header
      _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid var(--line)" } },
        _e("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
          _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 0 4px rgba(74,222,128,0.18)" } }),
          _e("span", { style: { fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4", fontFamily: "Akrobat, Onest, sans-serif" } }, "Личный кабинет")
        ),
        _e("span", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", padding: "3px 9px", background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.35)", color: "#fcd535", borderRadius: 100, fontFamily: "Akrobat, Onest, sans-serif" } }, "LIVE")
      ),

      // Earned + sparkline
      _e("div", { style: { padding: "18px 22px", borderBottom: "1px solid var(--line)" } },
        _e("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 } },
          _e("div", null,
            _e("div", { style: { fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Akrobat, Onest, sans-serif" } }, "Заработано за месяц"),
            _e("div", { style: { fontSize: 38, fontWeight: 800, color: "#fcd535", letterSpacing: "-0.02em", lineHeight: 1 } }, "$12 480"),
            _e("div", { style: { fontSize: 12, color: "#4ade80", marginTop: 8, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 } },
              _e("span", null, "↑"), "+18% за месяц"
            )
          ),
          _e("svg", { width: 110, height: 44, viewBox: "0 0 100 70", preserveAspectRatio: "none", style: { flexShrink: 0 } },
            _e("path", { d: sparkPath + ` L 100 70 L 0 70 Z`, style: { fill: "url(#sparkFill)", opacity: 0.4 } }),
            _e("path", { d: sparkPath, style: { stroke: "#fcd535", strokeWidth: 2.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } }),
            _e("circle", { cx: 100, cy: 12, r: 2.5, style: { fill: "#fcd535" } }),
            _e("defs", null, _e("linearGradient", { id: "sparkFill", x1: "0", y1: "0", x2: "0", y2: "1" },
              _e("stop", { offset: "0%", stopColor: "#fcd535", stopOpacity: 0.5 }),
              _e("stop", { offset: "100%", stopColor: "#fcd535", stopOpacity: 0 })
            ))
          )
        ),
        // Level progress
        _e("div", { style: { marginTop: 18 } },
          _e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "#a1a0a4", marginBottom: 6 } },
            _e("span", null, "Уровень 5 · ", _e("span", { style: { color: "#fcd535", fontWeight: 700 } }, "70%")),
            _e("span", null, "до Ур. 6 · 75%")
          ),
          _e("div", { style: { position: "relative", height: 6, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" } },
            _e("div", { style: { position: "absolute", inset: "0 24% 0 0", background: "linear-gradient(90deg, #fcd535 0%, #f0b800 100%)", borderRadius: 4 } })
          )
        )
      ),

      // Last payouts
      _e("div", { style: { padding: "18px 22px" } },
        _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 14, fontFamily: "Akrobat, Onest, sans-serif" } }, "Последние выплаты партнёрам"),
        payouts.map((p, i) => _e("div", {
          key: i,
          style: { display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 12, alignItems: "center", padding: "10px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)" }
        },
          _e("span", { style: { fontSize: 22, lineHeight: 1 } }, p.flag),
          _e("div", null,
            _e("div", { style: { fontSize: 13, fontWeight: 700, color: "#f5f1e8" } }, `${p.name} · ${p.city}`)
          ),
          _e("span", { style: { color: "#fcd535", fontWeight: 800, fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: 13 } }, `+$${p.amt.toLocaleString("ru-RU").replace(/,/g, " ")}`)
        )),
        // География выплат — mini block
        _e("div", { style: { marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" } },
          _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 10, fontFamily: "Akrobat, Onest, sans-serif" } }, "География выплат"),
          _e("div", { style: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } },
            ["🇷🇺", "🇰🇿", "🇺🇦", "🇬🇪", "🇧🇾", "🇺🇿", "🇰🇬", "🇦🇿", "🇲🇩", "🇹🇯"].map((f, i) =>
              _e("span", { key: i, style: { fontSize: 18, opacity: 0.92 } }, f)
            ),
            _e("span", { style: { fontSize: 12, color: "#a1a0a4", marginLeft: 4 } }, "+ ещё 110+ стран")
          )
        )
      )
    );
  }

  // ============================================================================
  // HERO
  // ============================================================================
  function Hero() {
    return _e("section", {
      className: "hh-partner-hero",
      style: { position: "relative", overflow: "hidden", paddingTop: 130, paddingBottom: 80, background: "var(--bg)" }
    },
      _e(HeroCandles, null),
      _e("div", { className: "container", style: { position: "relative", zIndex: 1 } },
        _e("div", { className: "hh-partner-hero-grid", style: { display: "grid", gridTemplateColumns: "1.35fr minmax(380px, 460px)", gap: 64, alignItems: "center" } },

          // LEFT
          _e(Reveal, null,
            _e("div", null,
              // eyebrow
              _e("span", {
                style: {
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "6px 14px", borderRadius: 100,
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.02)",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4",
                  marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif"
                }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Партнёрская программа Hash Hedge"
              ),

              // H1
              _e("h1", {
                style: {
                  fontSize: "clamp(48px, 6.5vw, 84px)", lineHeight: 1.02, fontWeight: 800,
                  letterSpacing: "-0.03em", margin: "0 0 24px", color: "#f5f1e8"
                }
              },
                "Продвигай ",
                _e("span", { style: { color: "#fcd535" } }, "Hash Hedge"),
                " и зарабатывай вместе с нами"
              ),

              _e("p", { style: { fontSize: 18, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 36, maxWidth: 580 } },
                "Получай до 80% комиссии с каждого привлечённого трейдера. Пожизненные начисления, прозрачная статистика и быстрые выплаты."
              ),

              _e("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 } },
                _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
                  style: { padding: "16px 26px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 12px 32px -8px rgba(252,213,53,0.45)" }
                }, "Стать партнёром →"),
                _e("a", { href: "#calc", className: "hh-btn-outline",
                  style: { padding: "16px 26px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }
                }, "Рассчитать доход")
              ),

              // Trustpilot — как в прошлой версии: 5 звёзд в строку + 2 строки текста
              _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 14 } },
                _e("div", { style: { display: "flex", gap: 2 } },
                  [1, 2, 3, 4].map(i => _e(TPStar, { key: i, size: 22 })),
                  _e(TPStar, { size: 22, half: true })
                ),
                _e("div", { style: { fontSize: 14, lineHeight: 1.35 } },
                  _e("div", { style: { fontWeight: 700, color: "#f5f1e8" } }, "4.4 · Trustpilot"),
                  _e("div", { style: { color: "#a1a0a4", fontSize: 13 } }, "Надёжный партнёр на рынке")
                )
              )
            )
          ),

          // RIGHT — live partner card
          _e(Reveal, { delay: "2" }, _e(LivePartnerCard, null))
        )
      )
    );
  }

  // ============================================================================
  // MARQUEE (thin strip)
  // ============================================================================
  function Marquee() {
    // Статичные метрики вместо бегущей строки (как у FTMO / Stripe)
    const stats = [
      { v: "2 500+", l: "активных партнёров" },
      { v: "120",    l: "стран" },
      { v: "$2.5M+", l: "выплачено партнёрам" },
      { v: "4.9/5",  l: "Trustpilot" }
    ];
    return _e("section", { style: { padding: "40px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-metrics-strip", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 } },
          stats.map((s, i) => _e("div", { key: i, style: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6, padding: "0 16px", borderLeft: i === 0 ? "none" : "1px solid var(--line)" } },
            _e("div", { style: { fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, color: "#fcd535", letterSpacing: "-0.02em", lineHeight: 1 } }, s.v),
            _e("div", { style: { fontSize: 13, color: "#a1a0a4", fontWeight: 500 } }, s.l)
          ))
        )
      )
    );
  }

  // ============================================================================
  // WHY PARTNER — 6 cards with unique mini-visualizations (3x2 grid)
  // ============================================================================
  function WhyPartner() {
    // Each card has its own custom visual rendered at top
    const Card = ({ children, chip, title, titleAccent, body }) => _e("div", {
      style: {
        background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 18,
        padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%"
      }
    },
      _e("div", { style: { padding: 22, paddingBottom: 18, minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--line)" } },
        children
      ),
      _e("div", { style: { padding: "20px 22px 22px" } },
        _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.3)", fontSize: 10, fontWeight: 700, color: "#9ef0c0", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14, fontFamily: "Akrobat, Onest, sans-serif" } },
          _e("svg", { width: 11, height: 11, viewBox: "0 0 12 12", style: { fill: "#9ef0c0" } }, _e("path", { d: "M4.5 9L1.5 6l1-1 2 2 4.5-4.5 1 1z", style: { fill: "#9ef0c0" } })),
          chip
        ),
        _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 10, color: "#f5f1e8" } },
          titleAccent === "before" && _e("span", { style: { color: "#fcd535" } }, title.split(" ")[0] + " "),
          titleAccent === "before" ? title.split(" ").slice(1).join(" ") : title
        ),
        _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, body)
      )
    );

    // VIZ 1 — 80% bar
    const V1 = () => _e("div", { style: { width: "100%", padding: "0 8px" } },
      _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#a1a0a4", textTransform: "uppercase", marginBottom: 14, textAlign: "center", fontFamily: "Akrobat, Onest, sans-serif" } }, "Комиссия партнёра"),
      _e("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 } },
        _e("div", { style: { display: "grid", gridTemplateColumns: "100px 1fr 50px", gap: 10, alignItems: "center" } },
          _e("span", { style: { fontSize: 13, color: "#f5f1e8", fontWeight: 600 } }, "Партнёр"),
          _e("div", { style: { height: 8, borderRadius: 4, background: "rgba(255,255,255,0.05)", overflow: "hidden" } },
            _e("div", { style: { width: "80%", height: "100%", background: "linear-gradient(90deg, #fcd535, #f0b800)", borderRadius: 4 } })
          ),
          _e("span", { style: { fontSize: 14, fontWeight: 800, color: "#fcd535", textAlign: "right" } }, "80%")
        ),
        _e("div", { style: { display: "grid", gridTemplateColumns: "100px 1fr 50px", gap: 10, alignItems: "center" } },
          _e("span", { style: { fontSize: 13, color: "#a1a0a4", fontWeight: 600 } }, "Hash Hedge"),
          _e("div", { style: { height: 8, borderRadius: 4, background: "rgba(255,255,255,0.05)", overflow: "hidden" } },
            _e("div", { style: { width: "20%", height: "100%", background: "rgba(255,255,255,0.25)", borderRadius: 4 } })
          ),
          _e("span", { style: { fontSize: 14, fontWeight: 700, color: "#a1a0a4", textAlign: "right" } }, "20%")
        )
      ),
      _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", marginTop: 6, background: "rgba(8,8,10,0.5)", borderRadius: 8, borderTop: "1px dashed var(--line)" } },
        _e("span", { style: { fontSize: 11, color: "#a1a0a4" } }, "Конкуренты платят"),
        _e("span", { style: { fontSize: 12, fontWeight: 700, color: "#ff4b5c" } }, "8–20%")
      )
    );

    // VIZ 2 — timeline (Нед.1 +$240 → ∞)
    const V2 = () => _e("div", { style: { display: "flex", alignItems: "flex-end", gap: 8, padding: "0 4px" } },
      [
        { l: "Нед. 1", v: "+$240", w: "60px" },
        { l: "Нед. 2", v: "+$280", w: "60px" },
        { l: "Нед. 3", v: "+$310", w: "60px" },
        { l: "всегда", v: "∞", w: "60px", inf: true }
      ].map((it, i) => _e("div", { key: i, style: { textAlign: "center", flex: 1 } },
        _e("div", { style: {
          width: 60, height: 60, margin: "0 auto 8px", borderRadius: "50%",
          border: it.inf ? "2px solid #fcd535" : "1px solid var(--line)",
          background: it.inf ? "rgba(252,213,53,0.10)" : "rgba(255,255,255,0.025)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: it.inf ? 22 : 13, fontWeight: 800,
          color: it.inf ? "#fcd535" : "#f5f1e8"
        } }, it.v),
        _e("div", { style: { fontSize: 10, color: "#a1a0a4" } }, it.l)
      ))
    );

    // VIZ 3 — 5-10x exchange comparison
    const V3 = () => _e("div", { style: { width: "100%", padding: "0 8px", textAlign: "center" } },
      _e("div", { style: { fontSize: 48, fontWeight: 900, color: "#fcd535", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 6, fontFamily: "Akrobat, Onest, sans-serif" } }, "5–10×"),
      _e("div", { style: { fontSize: 11, color: "#a1a0a4", marginBottom: 16 } }, "доход vs биржевой реферал"),
      _e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } },
        _e("div", { style: { padding: "10px 8px", background: "rgba(8,8,10,0.6)", border: "1px solid var(--line)", borderRadius: 10 } },
          _e("div", { style: { fontSize: 10, color: "#a1a0a4", marginBottom: 4, fontFamily: "Akrobat, Onest, sans-serif" } }, "Биржа"),
          _e("div", { style: { fontSize: 16, fontWeight: 700, color: "#a1a0a4" } }, "$30–60")
        ),
        _e("div", { style: { padding: "10px 8px", background: "rgba(252,213,53,0.08)", border: "1px solid rgba(252,213,53,0.4)", borderRadius: 10 } },
          _e("div", { style: { fontSize: 10, color: "#fcd535", marginBottom: 4, fontWeight: 700, fontFamily: "Akrobat, Onest, sans-serif" } }, "Hash Hedge"),
          _e("div", { style: { fontSize: 16, fontWeight: 800, color: "#f5f1e8" } }, "$300+")
        )
      )
    );

    // VIZ 4 — USDT $2,340 green circle
    const V4 = () => _e("div", { style: { textAlign: "center" } },
      _e("div", { style: {
        width: 80, height: 80, borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(74,222,128,0.18), rgba(74,222,128,0.05))",
        border: "1px solid rgba(74,222,128,0.4)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        marginBottom: 12, color: "#4ade80", fontWeight: 800, fontSize: 18
      } }, "USDT"),
      _e("div", { style: { fontSize: 30, fontWeight: 800, color: "#f5f1e8", lineHeight: 1, marginBottom: 4 } },
        "$2 340", _e("span", { style: { fontSize: 13, color: "#a1a0a4", marginLeft: 6, fontWeight: 600 } }, "USDT")
      ),
      _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "#4ade80", padding: "4px 10px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: 100, marginTop: 10 } },
        _e("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#4ade80" } }),
        "Выплата отправлена"
      )
    );

    // VIZ 5 — 7 levels horizontal bars
    const V5 = () => _e("div", { style: { width: "100%", padding: "0 4px" } },
      [7, 6, 5, 4, 3, 2, 1].map((lvl, i) => {
        const pct = [80, 75, 70, 65, 60, 55, 50][i];
        return _e("div", { key: lvl, style: { display: "grid", gridTemplateColumns: "16px 1fr 40px", gap: 8, alignItems: "center", marginBottom: 4 } },
          _e("span", { style: { fontSize: 10, color: "#a1a0a4", textAlign: "right", fontFamily: "ui-monospace,Menlo,monospace" } }, lvl),
          _e("div", { style: { height: 5, borderRadius: 3, background: "rgba(255,255,255,0.05)", overflow: "hidden" } },
            _e("div", { style: { width: `${pct}%`, height: "100%", background: i === 0 ? "linear-gradient(90deg, #fcd535, #f0b800)" : "rgba(252,213,53,0.45)", borderRadius: 3 } })
          ),
          _e("span", { style: { fontSize: 10, color: i === 0 ? "#fcd535" : "#a1a0a4", fontWeight: 700, textAlign: "right" } }, `${pct}%`)
        );
      })
    );

    // VIZ 6 — World map silhouettes + chip
    const V6 = () => _e("div", { style: { position: "relative", textAlign: "center" } },
      _e("svg", { width: "180", height: "100", viewBox: "0 0 180 100", style: { display: "block", margin: "0 auto" } },
        // Stylized continent shapes
        _e("path", { d: "M 18 30 Q 28 20 42 26 Q 52 30 50 42 Q 46 52 32 48 Q 18 44 16 38 Z", style: { fill: "rgba(255,255,255,0.07)", stroke: "rgba(252,213,53,0.3)", strokeWidth: 0.8 } }),
        _e("path", { d: "M 60 22 Q 80 18 95 28 Q 105 36 100 50 Q 88 56 72 50 Q 58 40 60 30 Z", style: { fill: "rgba(255,255,255,0.07)", stroke: "rgba(252,213,53,0.3)", strokeWidth: 0.8 } }),
        _e("path", { d: "M 115 28 Q 140 22 158 34 Q 165 46 152 56 Q 130 60 118 50 Q 112 40 114 32 Z", style: { fill: "rgba(255,255,255,0.07)", stroke: "rgba(252,213,53,0.3)", strokeWidth: 0.8 } }),
        _e("path", { d: "M 70 58 Q 85 56 90 66 Q 88 74 78 76 Q 68 72 68 62 Z", style: { fill: "rgba(255,255,255,0.07)", stroke: "rgba(252,213,53,0.3)", strokeWidth: 0.8 } }),
        // dots
        [[34, 38], [78, 36], [134, 42], [76, 66]].map(([cx, cy], i) => _e("circle", { key: i, cx, cy, r: 1.5, style: { fill: "#fcd535" } }))
      ),
      _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.35)", fontSize: 10, fontWeight: 700, color: "#fcd535", letterSpacing: "0.04em", textTransform: "uppercase", marginTop: 8, fontFamily: "Akrobat, Onest, sans-serif" } },
        "Глобальный охват · 154 страны"
      )
    );

    // VIZ 7 — Promo code field with Partner2026
    const V7 = () => _e("div", { style: { width: "100%", padding: "0 6px", textAlign: "center" } },
      _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#a1a0a4", textTransform: "uppercase", marginBottom: 12, fontFamily: "Akrobat, Onest, sans-serif" } }, "Промокод"),
      _e("div", { style: { display: "flex", gap: 0, maxWidth: 240, margin: "0 auto" } },
        _e("div", { style: { flex: 1, padding: "12px 14px", background: "rgba(8,8,10,0.6)", border: "1px solid var(--line)", borderRight: "none", borderRadius: "10px 0 0 10px", textAlign: "left", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 14, fontWeight: 700, color: "#fcd535", letterSpacing: "0.06em" } }, "PARTNER2026"),
        _e("div", { style: { padding: "12px 16px", background: "#fcd535", borderRadius: "0 10px 10px 0", color: "#13111c", fontSize: 12, fontWeight: 800 } }, "−25%")
      ),
      _e("div", { style: { fontSize: 11, color: "#9ef0c0", marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6 } },
        _e("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#9ef0c0" } }),
        "Промокод применён · скидка 25%"
      )
    );

    // VIZ 8 — Tracking analytics snippet
    const V8 = () => _e("div", { style: { width: "100%", padding: "0 8px" } },
      _e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 } },
        [
          { k: "Источник", v: "YouTube" },
          { k: "Клики", v: "1 284" }
        ].map((it, i) => _e("div", { key: i, style: { padding: "10px 12px", background: "rgba(8,8,10,0.55)", border: "1px solid var(--line)", borderRadius: 8 } },
          _e("div", { style: { fontSize: 9, color: "#a1a0a4", marginBottom: 4, fontFamily: "Akrobat, Onest, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" } }, it.k),
          _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, it.v)
        ))
      ),
      _e("div", { style: { padding: "12px 14px", background: "rgba(252,213,53,0.06)", border: "1px solid rgba(252,213,53,0.3)", borderRadius: 8 } },
        _e("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 } },
          _e("span", { style: { fontSize: 10, color: "#a1a0a4", fontFamily: "Akrobat, Onest, sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" } }, "Доход с канала"),
          _e("span", { style: { fontSize: 10, color: "#4ade80", fontWeight: 700 } }, "↑ +34%")
        ),
        _e("div", { style: { fontSize: 18, fontWeight: 800, color: "#fcd535", letterSpacing: "-0.01em" } }, "$3 480")
      )
    );

    // VIZ 9 — Sub-partner network
    const V9 = () => _e("div", { style: { width: "100%", padding: "0 8px", position: "relative" } },
      _e("svg", { width: "100%", height: 110, viewBox: "0 0 200 110" },
        // Lines
        _e("line", { x1: 100, y1: 30, x2: 60, y2: 65, style: { stroke: "rgba(252,213,53,0.4)", strokeWidth: 1 } }),
        _e("line", { x1: 100, y1: 30, x2: 140, y2: 65, style: { stroke: "rgba(252,213,53,0.4)", strokeWidth: 1 } }),
        _e("line", { x1: 60, y1: 65, x2: 40, y2: 95, style: { stroke: "rgba(252,213,53,0.25)", strokeWidth: 1 } }),
        _e("line", { x1: 60, y1: 65, x2: 80, y2: 95, style: { stroke: "rgba(252,213,53,0.25)", strokeWidth: 1 } }),
        _e("line", { x1: 140, y1: 65, x2: 120, y2: 95, style: { stroke: "rgba(252,213,53,0.25)", strokeWidth: 1 } }),
        _e("line", { x1: 140, y1: 65, x2: 160, y2: 95, style: { stroke: "rgba(252,213,53,0.25)", strokeWidth: 1 } }),
        // Top node (you)
        _e("circle", { cx: 100, cy: 30, r: 14, style: { fill: "#fcd535" } }),
        _e("text", { x: 100, y: 34, textAnchor: "middle", style: { fontSize: 9, fontWeight: 800, fill: "#13111c", fontFamily: "Akrobat, Onest, sans-serif" } }, "Я"),
        // L1 nodes
        _e("circle", { cx: 60, cy: 65, r: 11, style: { fill: "rgba(252,213,53,0.20)", stroke: "rgba(252,213,53,0.6)", strokeWidth: 1 } }),
        _e("circle", { cx: 140, cy: 65, r: 11, style: { fill: "rgba(252,213,53,0.20)", stroke: "rgba(252,213,53,0.6)", strokeWidth: 1 } }),
        _e("text", { x: 60, y: 68, textAnchor: "middle", style: { fontSize: 8, fontWeight: 700, fill: "#fcd535" } }, "5%"),
        _e("text", { x: 140, y: 68, textAnchor: "middle", style: { fontSize: 8, fontWeight: 700, fill: "#fcd535" } }, "5%"),
        // L2 nodes
        [40, 80, 120, 160].map((x, i) => _e("circle", { key: i, cx: x, cy: 95, r: 7, style: { fill: "rgba(255,255,255,0.06)", stroke: "rgba(255,255,255,0.18)", strokeWidth: 1 } })),
        [40, 80, 120, 160].map((x, i) => _e("text", { key: "t" + i, x, y: 97, textAnchor: "middle", style: { fontSize: 7, fontWeight: 700, fill: "#a1a0a4" } }, "3%"))
      )
    );

    const cards = [
      { viz: _e(V1, null), chip: "Максимум в проп-индустрии", title: "До 80% от прибыли Hash Hedge", titleAccent: "before",
        body: "Самая большая комиссия в проп-индустрии. Пока другие фирмы платят 8–20% за приведённого клиента, в Hash Hedge ты получишь от 50 до 80% от прибыли компании." },
      { viz: _e(V2, null), chip: "Один трейдер = вечный доход", title: "Пожизненные начисления", titleAccent: "before",
        body: "Трейдер закрепляется за тобой навсегда. Ты получаешь комиссию с каждой его покупки." },
      { viz: _e(V3, null), chip: "Выгоднее биржевых офферов", title: "Больше прибыли, чем на биржах",
        body: "Один funded-трейдер на счёте $25–50k приносит в 5–10 раз больше, чем стандартный биржевой реферал." },
      { viz: _e(V4, null), chip: "Вывод в течение 72 часов", title: "Быстрые выплаты", titleAccent: "before",
        body: "Запрашивай вывод в USDT в любой момент. Деньги придут на твой кошелёк в течение 72 часов." },
      { viz: _e(V5, null), chip: "Растёшь автоматически", title: "7 уровней партнёрства", titleAccent: "before",
        body: "Начни с 50% и расти вместе с Hash Hedge. Уровень повышается автоматически по числу активных трейдеров." },
      { viz: _e(V6, null), chip: "Глобальный охват · 154 страны", title: "Трафик из 154 стран", titleAccent: "before",
        body: "Работай с трейдерами из любых гео без ограничений. Hash Hedge принимает пользователей из 154 стран." },
      // === 3 новые карточки ===
      { viz: _e(V7, null), chip: "Скидки для аудитории", title: "Промокоды для аудитории", titleAccent: "before",
        body: "Получай персональные скидки для своих подписчиков, чтобы повысить конверсию и стимулировать покупки по твоей ссылке." },
      { viz: _e(V8, null), chip: "Аналитика трафика", title: "Гибкий трекинг",
        body: "Создавай кастомные ссылки для разделения трафика и детально отслеживай конверсии и доход в личном кабинете." },
      { viz: _e(V9, null), chip: "Многоуровневая сеть", title: "Суб-партнёрство",
        body: "Привлекай других аффилиатов по своей ссылке и зарабатывай на многоуровневой партнёрской сети." }
    ];

    return _e("section", { id: "why", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 760, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Почему Hash Hedge"
            ),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Почему партнёры", _e("br", null), "выбирают ", _e("span", { style: { color: "#fcd535" } }, "Hash Hedge")
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Предлагаем лучшие условия и предоставляем гибкие инструменты.")
          )
        ),
        _e("div", { className: "hh-why-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 } },
          cards.map((c, i) => _e(Reveal, { key: i, delay: String((i % 3) + 1) },
            _e(Card, { chip: c.chip, title: c.title, titleAccent: c.titleAccent, body: c.body }, c.viz)
          ))
        )
      )
    );
  }

  // ============================================================================
  // INCOME SOURCES — 3 cards with yellow icon top-right
  // ============================================================================
  function IncomeSources() {
    const Icon = ({ d }) => _e("div", {
      style: {
        width: 44, height: 44, borderRadius: 12,
        background: "linear-gradient(135deg, rgba(252,213,53,0.20), rgba(252,213,53,0.06))",
        border: "1px solid rgba(252,213,53,0.35)",
        display: "inline-flex", alignItems: "center", justifyContent: "center"
      }
    },
      _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#fcd535", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } },
        d.map((p, i) => _e("path", { key: i, d: p, style: { fill: "none", stroke: "#fcd535" } }))
      )
    );
    const sources = [
      { n: "01", title: "Комиссия с покупок челленджей",
        body: _e(F, null, "Получай ", _e("b", { style: { color: "#fcd535" } }, "до 80%"), " от прибыли Hash Hedge с каждой покупки челленджа. Трейдер закрепляется за тобой ", _e("b", { style: { color: "#f5f1e8" } }, "пожизненно"), "."),
        pill: "∞ Постоянный доход",
        icon: ["M23 6l-9.5 9.5-5-5L1 18", "M17 6h6v6"] },
      { n: "02", title: "Доход с успешных трейдеров",
        body: _e(F, null, "Получай ", _e("b", { style: { color: "#f5f1e8" } }, "процент от комиссии"), " Hash Hedge, когда трейдер выходит на Funded. Зарабатывай на его прибыли весь период активности."),
        pill: "Пассивный доход вдолгую",
        icon: ["M12 6v6l4 2", "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"] },
      { n: "03", title: "Доход с суб-партнёров",
        body: _e(F, null, "Строй многоуровневую сеть. Ты зарабатываешь ", _e("b", { style: { color: "#fcd535" } }, "5%"), " от дохода прямых партнёров и ", _e("b", { style: { color: "#fcd535" } }, "3%"), " от привлечённых ими суб-партнёров."),
        pill: "5% + 3% с партнёрской сети",
        icon: ["M16 5v14", "M12 12l-4 4 4 4", "M16 16h-8", "M6 5h8a4 4 0 0 1 4 4v0"] }
    ];
    return _e("section", { id: "income", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 760, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "3 источника дохода"
            ),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Как формируется ", _e("br", null), "доход ", _e("span", { style: { color: "#fcd535" } }, "партнёра")
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Твоя партнёрская ссылка может приносить доход сразу с трёх источников.")
          )
        ),
        _e("div", { className: "hh-income-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 } },
          sources.map((s, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("div", { style: { background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 18, padding: 28, height: "100%", display: "flex", flexDirection: "column" } },
              _e("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 } },
                _e("div", { style: { fontSize: 13, fontWeight: 700, color: "#fcd535", letterSpacing: "0.06em", fontFamily: "ui-monospace,Menlo,monospace" } }, s.n),
                _e(Icon, { d: s.icon })
              ),
              _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: 12, color: "#f5f1e8" } }, s.title),
              _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 20, flex: 1 } }, s.body),
              _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 100, background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.3)", color: "#fcd535", fontSize: 12, fontWeight: 700, alignSelf: "flex-start" } }, s.pill)
            )
          ))
        )
      )
    );
  }

  // ============================================================================
  // TIERS — 4+4 grid with unique geometric icons (last cell = CTA)
  // ============================================================================
  function Tiers() {
    // 7 tiers + 1 CTA cell
    const TierIcon = ({ shape, color }) => _e("div", {
      style: {
        width: 56, height: 56, borderRadius: 14,
        background: shape === "diamond" ? "linear-gradient(135deg, rgba(252,213,53,0.22), rgba(252,213,53,0.04))" : "rgba(8,8,10,0.6)",
        border: shape === "diamond" ? "1px solid rgba(252,213,53,0.4)" : "1px solid var(--line)",
        display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16,
        boxShadow: shape === "diamond" ? "0 0 24px rgba(252,213,53,0.18)" : "none"
      }
    },
      _e("svg", { width: 24, height: 24, viewBox: "0 0 24 24", style: { fill: "none", stroke: color, strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } },
        shape === "diamond" && _e("path", { d: "M12 2 L20 8 L12 22 L4 8 Z M4 8 H20 M12 2 V22", style: { stroke: color, fill: "none" } }),
        shape === "hexagon" && _e("path", { d: "M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z", style: { stroke: color, fill: "none" } }),
        shape === "pentagon" && _e("path", { d: "M12 2 L22 10 L18 22 L6 22 L2 10 Z", style: { stroke: color, fill: "none" } }),
        shape === "shield" && _e("path", { d: "M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z", style: { stroke: color, fill: "none" } }),
        shape === "square" && _e("rect", { x: 4, y: 4, width: 16, height: 16, rx: 3, style: { stroke: color, fill: "none" } }),
        shape === "rhombus" && _e("path", { d: "M12 3 L21 12 L12 21 L3 12 Z", style: { stroke: color, fill: "none" } }),
        shape === "circle" && _e("circle", { cx: 12, cy: 12, r: 9, style: { stroke: color, fill: "none" } })
      )
    );
    // Все шейпы жёлтые #fcd535 (как на главной HowItWorks). Уровни различаются формой,
    // не цветом. Tier 7 выделен жёлтой подложкой и glow — он featured.
    const tiers = [
      { lvl: 7, pct: 80, range: "700+",   label: "максимум", shape: "diamond",  color: "#fcd535", featured: true },
      { lvl: 6, pct: 75, range: "400–699", label: null,      shape: "hexagon",  color: "#fcd535" },
      { lvl: 5, pct: 70, range: "200–399", label: null,      shape: "pentagon", color: "#fcd535" },
      { lvl: 4, pct: 65, range: "100–199", label: null,      shape: "shield",   color: "#fcd535" },
      { lvl: 3, pct: 60, range: "50–99",   label: null,      shape: "square",   color: "#fcd535" },
      { lvl: 2, pct: 55, range: "15–49",   label: null,      shape: "rhombus",  color: "#fcd535" },
      { lvl: 1, pct: 50, range: "0–14",    label: "старт",   shape: "circle",   color: "#fcd535" }
    ];
    return _e("section", { id: "levels", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 880, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Партнёрские уровни"
            ),
            _e("h2", { style: { fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Чем больше привлечённых трейдеров —", _e("br", null), "тем выше твоя комиссия"
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Развивай сеть трейдеров, повышай уровень и забирай до 80% прибыли Hash Hedge.")
          )
        ),

        _e("div", { className: "hh-tiers-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 } },
          tiers.map((t, i) => _e(Reveal, { key: i, delay: String((i % 4) + 1) },
            _e("div", {
              style: {
                background: t.featured ? "linear-gradient(180deg, rgba(252,213,53,0.10), rgba(252,213,53,0.02))" : "rgba(11,11,14,0.85)",
                border: t.featured ? "1px solid rgba(252,213,53,0.4)" : "1px solid var(--line)",
                borderRadius: 18, padding: "26px 18px",
                textAlign: "center", height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center"
              }
            },
              _e(TierIcon, { shape: t.shape, color: t.color }),
              _e("div", { style: { fontSize: 17, fontWeight: 700, color: "#f5f1e8", marginBottom: 2 } }, `Уровень ${t.lvl}`),
              t.label && _e("div", { style: { fontSize: 10, fontWeight: 700, color: t.featured ? "#fcd535" : "#a1a0a4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14, fontFamily: "Akrobat, Onest, sans-serif" } }, t.label),
              !t.label && _e("div", { style: { height: 14 } }),
              _e("div", { style: { fontSize: 11, color: "#a1a0a4", marginBottom: 6, fontFamily: "Akrobat, Onest, sans-serif" } }, "Комиссия"),
              _e("div", { style: { fontSize: 40, fontWeight: 800, color: t.featured ? "#fcd535" : "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 22 } }, `${t.pct}%`),
              _e("div", { style: { width: "100%", marginTop: "auto", padding: "12px 10px", background: "rgba(8,8,10,0.4)", border: "1px solid var(--line)", borderRadius: 10 } },
                _e("div", { style: { fontSize: 10, color: "#a1a0a4", marginBottom: 4, fontFamily: "Akrobat, Onest, sans-serif" } }, "Привлечённых трейдеров"),
                _e("div", { style: { fontSize: 16, fontWeight: 700, color: "#f5f1e8", marginBottom: 2 } }, t.range),
                _e("div", { style: { fontSize: 10, color: "#a1a0a4" } }, "в месяц")
              )
            )
          )),
          // CTA cell (8th)
          _e(Reveal, { delay: "4" },
            _e("div", {
              style: {
                background: "linear-gradient(180deg, rgba(252,213,53,0.12), rgba(252,213,53,0.02))",
                border: "1px solid rgba(252,213,53,0.4)",
                borderRadius: 18, padding: "26px 18px",
                textAlign: "center", height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12
              }
            },
              _e("div", { style: { fontSize: 22, fontWeight: 800, color: "#f5f1e8", lineHeight: 1.2 } },
                "Начни сразу с ", _e("span", { style: { color: "#fcd535" } }, "50%")
              ),
              _e("p", { style: { fontSize: 13, color: "#a1a0a4", margin: "4px 0 12px", lineHeight: 1.4 } }, "Уровень повышается автоматически с ростом числа привлечённых трейдеров."),
              _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
                style: { padding: "12px 22px", borderRadius: 100, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }
              }, "Стать партнёром →")
            )
          )
        ),

        _e("div", { style: { textAlign: "center", marginTop: 24, fontSize: 12, color: "#a1a0a4" } },
          "Уровень пересчитывается автоматически каждый месяц на основе количества привлечённых трейдеров"
        )
      )
    );
  }

  // ============================================================================
  // CALCULATOR
  // ============================================================================
  function Calculator() {
    const challenges = [
      { size: "$5K",   price: 79 },
      { size: "$10K",  price: 99 },
      { size: "$25K",  price: 299 },
      { size: "$50K",  price: 499 },
      { size: "$100K", price: 799 },
      { size: "$150K", price: 1093 }
    ];
    const [refs, setRefs] = useState(25);
    const [chIdx, setChIdx] = useState(2);
    const tiers = [
      { lvl: 1, pct: 50, max: 14 },
      { lvl: 2, pct: 55, max: 49 },
      { lvl: 3, pct: 60, max: 99 },
      { lvl: 4, pct: 65, max: 199 },
      { lvl: 5, pct: 70, max: 399 },
      { lvl: 6, pct: 75, max: 699 },
      { lvl: 7, pct: 80, max: Infinity }
    ];
    const tier = tiers.find(t => refs <= t.max) || tiers[6];
    const chPrice = challenges[chIdx].price;
    const base = chPrice;
    const monthly = Math.round(refs * base * tier.pct / 100);

    return _e("section", { id: "calc", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 720, margin: "0 auto 56px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Твой доход"
            ),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Рассчитай, сколько ты можешь ", _e("br", null), "зарабатывать"
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Укажи количество трейдеров в месяц. Твой уровень и ставка комиссии до 80% повышаются автоматически с ростом числа привлечённых пользователей.")
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { className: "hh-calc-grid", style: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 28, maxWidth: 1080, margin: "0 auto" } },
            // LEFT controls
            _e("div", { style: { padding: 28 } },
              _e("div", { style: { marginBottom: 28 } },
                _e("div", { style: { fontSize: 13, color: "#a1a0a4", marginBottom: 10 } }, "Средний чек челленджа"),
                _e("div", { style: { position: "relative" } },
                  _e("select", {
                    value: chIdx,
                    onChange: e => setChIdx(Number(e.target.value)),
                    style: {
                      width: "100%", padding: "16px 18px", fontSize: 16, fontWeight: 700,
                      background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 12,
                      color: "#f5f1e8", appearance: "none", WebkitAppearance: "none",
                      cursor: "pointer"
                    }
                  }, challenges.map((c, i) => _e("option", { key: i, value: i, style: { background: "#1f1d25", color: "#f5f1e8" } }, `${c.size} — $${c.price}`))),
                  _e("span", { style: { position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", color: "#a1a0a4", pointerEvents: "none" } }, "▾")
                )
              ),
              _e("div", { style: { position: "relative", marginBottom: 32 } },
                _e("div", { style: { display: "inline-block", padding: "4px 12px", background: "rgba(255,255,255,0.06)", border: "1px solid var(--line)", borderRadius: 8, fontSize: 13, fontWeight: 700, color: "#f5f1e8", marginBottom: 8 } }, refs),
                _e("input", {
                  type: "range", min: 1, max: 700, value: refs, onChange: e => setRefs(Number(e.target.value)),
                  style: {
                    width: "100%", height: 6, borderRadius: 3,
                    background: `linear-gradient(90deg, #fcd535 0%, #fcd535 ${(refs / 700) * 100}%, rgba(255,255,255,0.08) ${(refs / 700) * 100}%, rgba(255,255,255,0.08) 100%)`,
                    WebkitAppearance: "none", appearance: "none", outline: "none", cursor: "pointer"
                  }
                }),
                _e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "#a1a0a4", marginTop: 8 } },
                  _e("span", null, "1 трейдер / мес"),
                  _e("span", null, "700+ / мес")
                ),
                _e("div", { style: { fontSize: 11, color: "#a1a0a4", marginTop: 12, lineHeight: 1.5 } }, "Больше активных трейдеров в месяц — выше твой уровень и комиссия.")
              ),
              _e("div", { style: { padding: "18px 22px", background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 14, marginBottom: 16 } },
                _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
                  _e("div", null,
                    _e("div", { style: { fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4, fontFamily: "Akrobat, Onest, sans-serif" } }, "Твой уровень · авто"),
                    _e("div", { style: { fontSize: 19, fontWeight: 700, color: "#f5f1e8" } }, `Уровень ${tier.lvl}`)
                  ),
                  _e("div", { style: { fontSize: 28, fontWeight: 800, color: "#fcd535" } }, `${tier.pct}%`)
                )
              ),
              _e("p", { style: { fontSize: 12, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, "Уровень и ставка комиссии растут автоматически с числом привлечённых трейдеров в месяц — отдельно выбирать ничего не нужно.")
            ),

            // RIGHT result card
            _e("div", { style: {
              background: "linear-gradient(180deg, rgba(11,11,14,0.6), rgba(11,11,14,0.85))",
              border: "1px solid var(--line)", borderRadius: 22, padding: 32,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)"
            } },
              _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 16, fontFamily: "Akrobat, Onest, sans-serif" } },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#fcd535" } }),
                "Твой доход в месяц"
              ),
              _e("div", { style: { fontSize: "clamp(56px, 7vw, 86px)", fontWeight: 800, color: "#fcd535", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12 } },
                `$${monthly.toLocaleString("ru-RU").replace(/,/g, " ")}`
              ),
              _e("div", { style: { fontSize: 14, color: "#a1a0a4", marginBottom: 30 } }, "в месяц при выбранных параметрах"),
              _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
                style: { display: "block", textAlign: "center", padding: "18px 28px", borderRadius: 14, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 12px 32px -8px rgba(252,213,53,0.4)" }
              }, "Стать партнёром →"),
              _e("p", { style: { fontSize: 11, color: "#a1a0a4", marginTop: 18, marginBottom: 0, lineHeight: 1.5 } },
                "Расчёт примерный и зависит от количества привлечённых трейдеров, среднего чека челленджа и твоего партнёрского уровня."
              )
            )
          )
        )
      )
    );
  }

  // ============================================================================
  // STEPS — H2 left-aligned + timeline + 4 cards
  // ============================================================================
  function Steps() {
    const steps = [
      { n: "01", chip: "Регистрация",       title: "Зарегистрируйся",
        body: "Заполни короткую анкету и получи доступ к личному кабинету партнёра — это займёт менее двух минут." },
      { n: "02", chip: "Реферальная ссылка", title: "Получи реферальную ссылку",
        body: "Получи персональную реферальную ссылку в личном кабинете." },
      { n: "03", chip: "Продвижение",       title: "Привлекай трейдеров",
        body: "Делись ссылкой в соцсетях, Telegram-каналах, YouTube, блогах или личных рекомендациях." },
      { n: "04", chip: "Доход",             title: "Получай выплаты",
        body: "Получай до 80% от прибыли Hash Hedge за привлечённых трейдеров. Выплаты в USDT в течение 72 часов." }
    ];
    return _e("section", { id: "how", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        // Header: H2 left + description right
        _e(Reveal, null,
          _e("div", { className: "hh-steps-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 56 } },
            _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
              "Четыре шага до ", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "первой прибыли")
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, "Поделись ссылкой с теми, кому интересен трейдинг — система сделает всё остальное.")
          )
        ),
        // Timeline circles
        _e(Reveal, { delay: "1" },
          _e("div", { className: "hh-steps-timeline", style: { position: "relative", marginBottom: 18 } },
            _e("div", { style: { position: "absolute", top: 30, left: "12.5%", right: "12.5%", height: 1, background: "var(--line)", zIndex: 0 } }),
            _e("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative", zIndex: 1 } },
              steps.map((s, i) => _e("div", { key: i, style: { textAlign: "center" } },
                _e("div", { style: {
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 60, height: 60, borderRadius: "50%",
                  background: "rgba(11,11,14,0.9)", border: "1px solid var(--line)",
                  color: "#fcd535", fontSize: 14, fontWeight: 800, fontFamily: "ui-monospace,Menlo,monospace",
                  boxShadow: "0 0 0 8px var(--bg)"
                } }, s.n)
              ))
            )
          )
        ),
        // 4 description cards
        _e("div", { className: "hh-steps-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 } },
          steps.map((s, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("div", { style: { background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 16, padding: 24, height: "100%" } },
              _e("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fcd535", marginBottom: 12, fontFamily: "Akrobat, Onest, sans-serif" } }, s.chip),
              _e("h3", { style: { fontSize: 19, fontWeight: 700, lineHeight: 1.25, marginBottom: 12, color: "#f5f1e8" } }, s.title),
              _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, s.body)
            )
          ))
        )
      )
    );
  }

  // ============================================================================
  // CABINET PREVIEW — KPI col left + chart right
  // ============================================================================
  function CabinetPreview() {
    return _e("section", { id: "cabinet", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-cab-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Личный кабинет"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Вся аналитика ", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "сети"), " в одном месте"
              )
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Вся аналитика в одном месте: регистрации, покупки, комиссии, суб-партнёры и выплаты."
            )
          )
        ),

        _e(Reveal, { delay: "2" },
          _e("div", {
            className: "hh-cab-mockup",
            style: {
              background: "#0b0b0e", border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden",
              boxShadow: "0 60px 120px -30px rgba(0,0,0,0.7)", marginBottom: 32
            }
          },
            // Top bar
            _e("div", { className: "hh-cab-top", style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--line)", background: "rgba(8,8,10,0.5)", gap: 12 } },
              _e("div", { style: { display: "flex", alignItems: "center", gap: 14 } },
                _e("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                  _e("div", { style: { width: 28, height: 28, borderRadius: 6, background: "#fcd535", display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e("svg", { width: 14, height: 14, viewBox: "0 0 24 22.4", style: { fill: "#13111c" } },
                      _e("path", { d: "M 11.983 18.574 L 3.766 10.512 L 8.027 6.386 L 8.027 12.281 L 10.604 14.639 L 10.604 0 L 0 10.512 L 12.009 22.4 L 24 10.512 L 13.396 0 L 13.396 14.639 L 15.973 12.281 L 15.973 6.386 L 20.234 10.512 L 11.983 18.574 Z", style: { fill: "#13111c" }, fillRule: "evenodd" }))
                  ),
                  _e("div", { style: { lineHeight: 1.15 } },
                    _e("div", { style: { fontSize: 13, fontWeight: 800, color: "#f5f1e8" } }, "HASH HEDGE"),
                    _e("div", { style: { fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", color: "#a1a0a4", fontFamily: "Akrobat, Onest, sans-serif" } }, "ПАРТНЁРСКИЙ ЦЕНТР")
                  )
                ),
                _e("div", { className: "hh-cab-greet", style: { lineHeight: 1.3, paddingLeft: 14, borderLeft: "1px solid var(--line)" } },
                  _e("div", { style: { fontSize: 14, fontWeight: 800, color: "#f5f1e8" } }, "Здравствуйте, Партнёр!"),
                  _e("div", { style: { fontSize: 11, color: "#a1a0a4" } }, "С возвращением, рады видеть вас снова!")
                )
              ),
              _e("div", { className: "hh-cab-top-right", style: { display: "flex", alignItems: "center", gap: 10 } },
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 12px", border: "1px solid rgba(74,222,128,0.4)", borderRadius: 100, background: "rgba(8,8,10,0.5)" } },
                  _e("div", { style: { width: 24, height: 24, borderRadius: "50%", background: "rgba(74,222,128,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e("svg", { width: 12, height: 12, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#9ef0c0", strokeWidth: 2 } },
                      _e("path", { d: "M3 18v-6a9 9 0 0 1 18 0v6", style: { stroke: "#9ef0c0", fill: "none" } })
                    )
                  ),
                  _e("div", { style: { lineHeight: 1.2 } },
                    _e("div", { style: { fontSize: 12, fontWeight: 700, color: "#f5f1e8" } }, "@hashhedge_affiliate"),
                    _e("div", { style: { fontSize: 10, color: "#a1a0a4" } }, "Твой персональный менеджер")
                  )
                ),
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 8 } },
                  _e("span", { style: { fontSize: 13, fontWeight: 800, color: "#f5f1e8" } }, "$34 244"),
                  _e("span", { style: { fontSize: 11, fontWeight: 800, color: "#cd7f32" } }, "Bronze")
                ),
                _e("div", { className: "hh-cab-icons", style: { display: "flex", gap: 4 } },
                  ["M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"].map((d, i) =>
                    _e("div", { key: i, style: { width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                      _e("svg", { width: 14, height: 14, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 1.8 } },
                        _e("path", { d, style: { fill: "none", stroke: "#a1a0a4" } })
                      )
                    )
                  )
                )
              )
            ),

            // Body: sidebar + main
            _e("div", { className: "hh-cab-body", style: { display: "grid", gridTemplateColumns: "230px 1fr", minHeight: 600 } },

              // Sidebar
              _e("div", { className: "hh-cab-side", style: { borderRight: "1px solid var(--line)", padding: "18px 12px" } },
                [
                  { title: "Аналитика", items: [
                    { l: "Дашборд", active: true, ic: "M3 3v18h18 M7 12l3-3 4 4 7-7" },
                    { l: "Общая статистика", ic: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20" },
                    { l: "Подробные отчёты", ic: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" },
                    { l: "Суб-партнёры", ic: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
                    { l: "Лидерборд", ic: "M8 21h8 M12 17v4 M7 4h10v5a5 5 0 1 1-10 0V4z" }
                  ]},
                  { title: "Управление", items: [
                    { l: "Партнёрские ссылки", ic: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" },
                    { l: "Постбэки", ic: "M3 12h18 M12 3l9 9-9 9" }
                  ]},
                  { title: "Транзакции", items: [
                    { l: "Вывод средств", ic: "M21 12H7 M14 5l7 7-7 7" }
                  ]},
                  { title: "Другое", items: [
                    { l: "Язык", ic: "M5 8l6 6 M4 14l6-6 2-3 M2 5h12" },
                    { l: "Партнёрское соглашение", ic: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" }
                  ]}
                ].map((g, gi) => _e("div", { key: gi, style: { marginBottom: 16 } },
                  _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 10px", marginBottom: 6, fontFamily: "Akrobat, Onest, sans-serif" } },
                    _e("span", null, g.title),
                    _e("span", { style: { color: "#a1a0a4", fontSize: 14 } }, "▾")
                  ),
                  _e("div", null,
                    g.items.map((it, ii) => _e("div", {
                      key: ii,
                      style: {
                        display: "flex", alignItems: "center", gap: 10, padding: "8px 10px",
                        borderRadius: 8, fontSize: 13, fontWeight: 500,
                        color: it.active ? "#fcd535" : "#f5f1e8",
                        background: it.active ? "rgba(252,213,53,0.10)" : "transparent"
                      }
                    },
                      _e("svg", { width: 14, height: 14, viewBox: "0 0 24 24", style: { fill: "none", stroke: it.active ? "#fcd535" : "#a1a0a4", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } },
                        _e("path", { d: it.ic, style: { fill: "none", stroke: it.active ? "#fcd535" : "#a1a0a4" } })
                      ),
                      it.l
                    ))
                  )
                ))
              ),

              // Main
              _e("div", { className: "hh-cab-main", style: { padding: 22 } },
                // Partner Links collapsed bar
                _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 12, marginBottom: 24 } },
                  _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, "Партнёрские ссылки"),
                  _e("span", { style: { color: "#a1a0a4" } }, "▾")
                ),
                _e("h3", { style: { fontSize: 28, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", margin: "0 0 20px" } }, "Дашборд"),

                // KPI col + chart
                _e("div", { className: "hh-cab-stage", style: { display: "grid", gridTemplateColumns: "260px 1fr", gap: 14 } },
                  // KPI column
                  _e("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
                    [
                      { k: "Всего покупок", v: "$48 920", d: "+18,4%", ic: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18" },
                      { k: "Количество покупок", v: "312", d: "+24", ic: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
                      { k: "Регистрации", v: "1 284", d: "+61", ic: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M20 8v6 M23 11h-6" },
                      { k: "Комиссия партнера", v: "$34 244", d: "+21,7%", ic: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
                    ].map((s, i) => _e("div", { key: i, style: { padding: 16, background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 12 } },
                      _e("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10 } },
                        _e("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" } },
                          _e("path", { d: s.ic, style: { fill: "none", stroke: "#a1a0a4" } })
                        ),
                        _e("div", { style: { fontSize: 12, color: "#a1a0a4" } }, s.k)
                      ),
                      _e("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } },
                        _e("div", { style: { fontSize: 22, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.015em" } }, s.v),
                        _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 9px", borderRadius: 100, background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.3)", fontSize: 11, fontWeight: 700, color: "#9ef0c0" } },
                          _e("span", null, "↑"), s.d
                        )
                      )
                    ))
                  ),

                  // Chart panel
                  _e("div", { style: { padding: 22, background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 12, display: "flex", flexDirection: "column" } },
                    _e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 } },
                      _e("div", null,
                        _e("div", { style: { fontSize: 28, fontWeight: 800, color: "#f5f1e8", lineHeight: 1, letterSpacing: "-0.02em" } }, "$34 244,80"),
                        _e("div", { style: { fontSize: 13, color: "#a1a0a4", marginTop: 6 } }, "Баланс")
                      ),
                      _e("div", { style: { padding: "8px 14px", background: "rgba(8,8,10,0.7)", border: "1px solid var(--line)", borderRadius: 100, fontSize: 12, color: "#f5f1e8", fontWeight: 600 } }, "May 04, 2026 — Jun 02, 2026")
                    ),
                    // Chart
                    _e("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 36px", gap: 6, minHeight: 240 } },
                      _e("div", { style: { position: "relative" } },
                        _e("svg", { width: "100%", height: 240, viewBox: "0 0 600 240", preserveAspectRatio: "none", style: { display: "block" } },
                          [0, 60, 120, 180, 240].map((y, i) => _e("line", { key: i, x1: 0, x2: 600, y1: y, y2: y, style: { stroke: "rgba(255,255,255,0.04)", strokeWidth: 1 } })),
                          // Commission (blue) — top line
                          _e("path", { d: "M0 220 L 50 215 L 100 205 L 150 188 L 200 165 L 250 138 L 300 108 L 350 78 L 400 56 L 450 38 L 500 24 L 550 14 L 600 8", style: { stroke: "#5e9bff", strokeWidth: 2.5, fill: "none", strokeLinecap: "round" } }),
                          // Purchases (green) — middle
                          _e("path", { d: "M0 228 L 50 225 L 100 218 L 150 208 L 200 196 L 250 180 L 300 162 L 350 142 L 400 122 L 450 100 L 500 80 L 550 60 L 600 40", style: { stroke: "#4ade80", strokeWidth: 2, fill: "none", strokeLinecap: "round", opacity: 0.95 } }),
                          // Registrations (orange) — bottom
                          _e("path", { d: "M0 233 L 50 231 L 100 226 L 150 220 L 200 212 L 250 200 L 300 186 L 350 170 L 400 152 L 450 134 L 500 114 L 550 92 L 600 70", style: { stroke: "#f59e0b", strokeWidth: 2, fill: "none", strokeLinecap: "round", opacity: 0.9 } })
                        ),
                        // x-axis dates
                        _e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 9, color: "#a1a0a4", marginTop: 6 } },
                          ["May 4", "May 8", "May 12", "May 16", "May 20", "May 24", "May 28", "Jun 1"].map(d => _e("span", { key: d }, d))
                        )
                      ),
                      _e("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: 9, color: "#a1a0a4", textAlign: "right" } },
                        ["$34K", "$26K", "$17K", "$9K", "$0"].map(v => _e("span", { key: v }, v))
                      )
                    ),
                    _e("div", { style: { display: "flex", justifyContent: "center", gap: 24, marginTop: 14, fontSize: 12, color: "#f5f1e8" } },
                      [["#f59e0b", "Registrations"], ["#4ade80", "Purchases"], ["#5e9bff", "Commission"]].map(([c, t]) =>
                        _e("span", { key: t, style: { display: "inline-flex", alignItems: "center", gap: 6 } },
                          _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: c } }), t
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),

        // 4 explainer cards
        _e(Reveal, { delay: "3" },
          _e("div", { className: "hh-cab-explainers", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 } },
            [
              { ic: "M3 3v18h18 M7 12l3-3 4 4 7-7", t: "Аналитика в реальном времени", b: "Клики, регистрации, покупки и комиссии обновляются автоматически." },
              { ic: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", t: "Статистика по суб-партнёрам", b: "Контролируй начисления со всех уровней: твоих прямых партнёров и их рефералов." },
              { ic: "M21 12H7 M14 5l7 7-7 7", t: "Вывод в любой момент", b: "Запрашивай выплаты в USDT без фиксированных дат." },
              { ic: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", t: "Гибкие инструменты", b: "Генерируй ссылки, промокоды и подключай постбэки за пару секунд." }
            ].map((ex, i) => _e("div", { key: i, style: { padding: 18, background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 14 } },
              _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#fcd535", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", marginBottom: 12 } },
                _e("path", { d: ex.ic, style: { fill: "none", stroke: "#fcd535" } })
              ),
              _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8", marginBottom: 6 } }, ex.t),
              _e("div", { style: { fontSize: 13, color: "#a1a0a4", lineHeight: 1.5 } }, ex.b)
            ))
          )
        )
      )
    );
  }

  // ============================================================================
  // LEADERBOARD — 4 cols, no tabs
  // ============================================================================
  function Leaderboard() {
    const rows = [
      { n: 1, init: "QE", email: "qew*****@gmail.ru",   lvl: 7, pct: 80, traders: 742, income: 60628, top: true },
      { n: 2, init: "TR", email: "tra*****@mail.ru",    lvl: 6, pct: 75, traders: 611, income: 47633 },
      { n: 3, init: "CR", email: "cry*****@gmail.com",  lvl: 6, pct: 75, traders: 478, income: 34401 },
      { n: 4, init: "MV", email: "mvp*****@gmail.ru",   lvl: 5, pct: 70, traders: 352, income: 24047 },
      { n: 5, init: "AC", email: "ace*****@yandex.ru",  lvl: 5, pct: 70, traders: 238, income: 18463 },
      { n: 6, init: "LE", email: "lev*****@gmail.ru",   lvl: 4, pct: 65, traders: 121, income: 8337 },
      { n: 7, init: "NF", email: "nft*****@mail.ru",    lvl: 3, pct: 60, traders: 96,  income: 7296 }
    ];
    return _e("section", { id: "leaderboard", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-lb-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Обновляется в реальном времени"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Топ партнёры ", _e("span", { style: { color: "#fcd535" } }, "за месяц")
              )
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Привлекай рефералов и выходи в топ. Лидерборд в реальном времени показывает партнёров с самым высоким доходом за месяц."
            )
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" } },
            // Header
            _e("div", { className: "hh-lb-row hh-lb-head-row", style: { display: "grid", gridTemplateColumns: "80px 1fr 220px 160px", gap: 16, padding: "16px 24px", borderBottom: "1px solid var(--line)" } },
              ["#", "Партнёр", "Активных трейдеров", "Доход за месяц"].map((h, i) => _e("div", { key: i, style: { fontSize: 11, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: i === 3 ? "right" : i === 2 ? "right" : "left", fontFamily: "Akrobat, Onest, sans-serif" } }, h))
            ),
            // Rows
            rows.map((r, i) => _e("div", {
              key: r.n,
              className: "hh-lb-row",
              style: {
                display: "grid", gridTemplateColumns: "80px 1fr 220px 160px", gap: 16,
                padding: "18px 24px", alignItems: "center",
                borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--line)",
                background: r.top ? "rgba(252,213,53,0.04)" : "transparent"
              }
            },
              _e("div", null,
                _e("div", { style: { width: 36, height: 36, borderRadius: "50%", background: r.top ? "rgba(252,213,53,0.15)" : "rgba(255,255,255,0.04)", border: r.top ? "1px solid rgba(252,213,53,0.4)" : "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: r.top ? "#fcd535" : "#f5f1e8" } }, r.n)
              ),
              _e("div", { style: { display: "flex", alignItems: "center", gap: 12 } },
                _e("div", { style: { width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#a1a0a4" } }, r.init),
                _e("div", null,
                  _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, r.email),
                  _e("div", { style: { fontSize: 11, color: "#a1a0a4", marginTop: 2 } }, `Уровень ${r.lvl} · ${r.pct}% комиссии`)
                )
              ),
              _e("div", { style: { textAlign: "right", fontSize: 16, fontWeight: 700, color: "#f5f1e8" } }, r.traders),
              _e("div", { style: { textAlign: "right", fontSize: 16, fontWeight: 800, color: "#fcd535" } }, `$${r.income.toLocaleString("ru-RU").replace(/,/g, " ")}`)
            )),
            _e("div", { style: { padding: "14px 24px", fontSize: 11, color: "#a1a0a4", display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)" } },
              _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80" } }), "Обновлено только что"
              ),
              _e("span", null, "Топ-5 закрепляются по итогам месяца · почты скрыты для приватности")
            )
          )
        )
      )
    );
  }

  // ============================================================================
  // PARTNER CONTENT (YouTube)
  // ============================================================================
  function PartnerContent() {
    const videos = [
      { id: "PUAyUaSommg", title: "От $49 до $5 580 — как изменить жизнь на крипто-проп-трейдинге" },
      { id: "IlSjDtqwwuA", title: "Обзор челленджа Hash Hedge" },
      { id: "PpA50UZYusw", title: "Доказательство выплат в USDT" },
      { id: "v70Cj06fueA", title: "Как пройти 1-фазный челлендж" },
      { id: "oz_72s2S5Xc", title: "Разбор платформы и условий" },
      { id: "xJ4yA5MDMDU", title: "Интервью с funded-трейдером" },
      { id: "lnsWjuJuguE", title: "Стратегия торговли на челлендже" }
    ];
    return _e("section", { id: "content", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-yt-head", style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "end", marginBottom: 32 } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Контент партнёров"
              ),
              _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Что помогает партнёрам", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "зарабатывать")
              )
            ),
            _e("div", null,
              _e("p", { style: { fontSize: 15, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 14 } },
                "Изучай кейсы нашего огромного комьюнити. Вдохновляйся форматами других партнёров, смотри, как 2500+ блогеров создают контент и привлекают клиентов. Используй рабочие механики."
              ),
              _e("div", { style: { textAlign: "right", fontSize: 11, color: "#a1a0a4", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "Akrobat, Onest, sans-serif" } }, "← листай ролики →")
            )
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", {
            style: { display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(280px, 1fr)", gap: 16, overflowX: "auto", paddingBottom: 16, scrollSnapType: "x mandatory" }
          },
            videos.map((v, i) => _e("a", {
              key: i, href: `https://www.youtube.com/watch?v=${v.id}`, target: "_blank", rel: "noopener noreferrer",
              style: { background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "var(--fg)", scrollSnapAlign: "start" }
            },
              _e("div", { style: { position: "relative", aspectRatio: "16/9", background: `url(https://img.youtube.com/vi/${v.id}/hqdefault.jpg) center / cover, #111` } },
                _e("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 48, height: 48, borderRadius: "50%", background: "#ff0000", display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                  _e("svg", { width: 16, height: 18, viewBox: "0 0 20 22", style: { fill: "#fff" } },
                    _e("path", { d: "M0 0 L0 22 L20 11 Z", style: { fill: "#fff" } })
                  )
                )
              ),
              _e("div", { style: { padding: 16 } },
                _e("div", { style: { fontSize: 14, fontWeight: 700, lineHeight: 1.3, color: "#f5f1e8", marginBottom: 8, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } }, v.title),
                _e("div", { style: { fontSize: 10, color: "#a1a0a4", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "Akrobat, Onest, sans-serif" } }, "YouTube · Hash Hedge")
              )
            ))
          )
        )
      )
    );
  }

  // ============================================================================
  // EVENTS
  // ============================================================================
  function Events() {
    const hero = { dot: "#ff3b3b", flag: "🇦🇪", city: "Дубай · Blockchain Life", title: "Встреча партнёров Hash Hedge в Дубае", img: "https://hash-hedge-partner.vercel.app/assets/event-dubai.jpg" };
    const rest = [
      { dot: "#4ade80", flag: "🇧🇷", city: "Сан-Паулу",  title: "Закрытая afterparty в Сан-Паулу", img: "https://hash-hedge-partner.vercel.app/assets/event-saopaulo.jpeg" },
      { dot: "#fcd535", flag: "🇷🇺", city: "Москва",     title: "Партнёрский вечер",              img: "https://hash-hedge-partner.vercel.app/assets/event-moscow.jpg" },
      { dot: "#fcd535", flag: "",   city: "Награждение", title: "Топ-партнёр Hash Hedge 2026",     img: "https://hash-hedge-partner.vercel.app/assets/event-award.jpg" }
    ];
    const Card = ({ ev, big }) => _e("div", null,
      _e("div", { style: { position: "relative", aspectRatio: big ? "3 / 1.4" : "1.4 / 1", borderRadius: 18, overflow: "hidden", background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", marginBottom: 16 } },
        _e("div", { style: { position: "absolute", inset: 0, backgroundImage: `url(${ev.img})`, backgroundSize: "cover", backgroundPosition: "center" } }),
        _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)", pointerEvents: "none" } }),
        _e("div", { style: { position: "absolute", bottom: 16, left: 16, display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 100, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" } },
          _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: ev.dot } }),
          ev.flag && _e("span", { style: { fontSize: 13, textTransform: "none", letterSpacing: 0 } }, ev.flag),
          _e("span", null, ev.city)
        )
      ),
      _e("div", { style: { fontSize: big ? 22 : 17, fontWeight: 800, color: "#f5f1e8", lineHeight: 1.25, letterSpacing: "-0.01em", padding: "0 4px" } }, ev.title)
    );
    return _e("section", { id: "events", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { marginBottom: 48 } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Ивенты"
            ),
            _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              _e("span", { style: { color: "#fcd535" } }, "Живые"), " встречи"
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, maxWidth: 760 } },
              "Стань частью партнёрского сообщества Hash Hedge. Мы регулярно проводим оффлайн-ивенты, где можно отлично отдохнуть и познакомиться с другими топ-партнёрами."
            )
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { marginBottom: 24 } }, _e(Card, { ev: hero, big: true }))
        ),
        _e("div", { className: "hh-events-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 } },
          rest.map((ev, i) => _e(Reveal, { key: i, delay: String(i + 2) }, _e(Card, { ev, big: false })))
        )
      )
    );
  }

  // ============================================================================
  // SUPPORT
  // ============================================================================
  function Support() {
    return _e("section", { id: "support", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-sup-head", style: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 } },
            _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
              "Мы всегда ", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "на связи")
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Поддержка работает круглосуточно на ", _e("b", { style: { color: "#f5f1e8" } }, "20+ языках"), ". Быстрый ответ на любой ваш вопрос."
            )
          )
        ),

        _e("div", { className: "hh-support-grid", style: { display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 18 } },
          // Manager photo card
          _e(Reveal, { delay: "1" },
            _e("div", { style: {
              position: "relative", aspectRatio: "1 / 1.2", borderRadius: 18, overflow: "hidden",
              background: "url(https://hash-hedge-partner.vercel.app/assets/manager.jpeg) center / cover, #1a1a1f",
              border: "1px solid var(--line)"
            } },
              _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%)" } }),
              // ОНЛАЙН chip top-left
              _e("div", { style: { position: "absolute", top: 18, left: 18, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "rgba(8,8,10,0.7)", border: "1px solid rgba(74,222,128,0.4)", borderRadius: 100, fontSize: 11, fontWeight: 700, color: "#9ef0c0", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "Akrobat, Onest, sans-serif" } },
                _e("span", { style: { width: 7, height: 7, borderRadius: "50%", background: "#4ade80" } }),
                "Онлайн"
              ),
              // time pill top-right
              _e("div", { style: { position: "absolute", top: 18, right: 18, padding: "10px 14px", background: "rgba(8,8,10,0.7)", border: "1px solid var(--line)", borderRadius: 12, textAlign: "right" } },
                _e("div", { style: { fontSize: 15, fontWeight: 800, color: "#fcd535", lineHeight: 1 } }, "1 мин 47 сек"),
                _e("div", { style: { fontSize: 9, color: "#a1a0a4", marginTop: 4, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Akrobat, Onest, sans-serif" } }, "среднее время ответа")
              ),
              // bottom info
              _e("div", { style: { position: "absolute", bottom: 22, left: 22, right: 22 } },
                _e("div", { style: { fontSize: 11, fontWeight: 700, color: "#fcd535", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontFamily: "Akrobat, Onest, sans-serif" } }, "Личный менеджер партнёров"),
                _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.01em", marginBottom: 14 } }, "Команда Hash Hedge"),
                _e("div", { style: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } },
                  ["RU", "EN", "ES", "TR"].map(l => _e("span", { key: l, style: { padding: "4px 10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6, fontSize: 11, fontWeight: 700, color: "#f5f1e8" } }, l)),
                  _e("span", { style: { fontSize: 11, color: "#a1a0a4", marginLeft: 4 } }, "+ ещё 18 в команде онлайн")
                )
              )
            )
          ),

          // Chat mockup
          _e(Reveal, { delay: "2" },
            _e("div", { style: { background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 18, padding: 22, display: "flex", flexDirection: "column", aspectRatio: "1.4 / 1.2" } },
              // header
              _e("div", { style: { display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, borderBottom: "1px solid var(--line)", marginBottom: 14 } },
                _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#4ade80" } }),
                _e("div", null,
                  _e("div", { style: { fontSize: 15, fontWeight: 800, color: "#f5f1e8" } }, "Hash Hedge Support"),
                  _e("div", { style: { fontSize: 11, color: "#4ade80", display: "inline-flex", alignItems: "center", gap: 6 } },
                    _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80" } }), "Онлайн сейчас"
                  )
                )
              ),
              // messages
              _e("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 12 } },
                [
                  { who: "HH", text: "Привет! У нас акция — скидка 25% на челленджи. Поделитесь у себя в контенте? 🔥", time: "14:01" },
                  { who: "you", text: "Да, круто! Сегодня закину в канал 👍", time: "14:02" },
                  { who: "you", text: "А как отслеживать конверсии с поста?", time: "14:02" },
                  { who: "HH", text: "В кабинете партнёра есть «Аналитика» — клики, регистрации и доход видно в реальном времени 📊", time: "14:03" },
                  { who: "you", text: "Супер, всё наглядно. Спасибо! 🙌", time: "14:03" }
                ].map((m, i) => _e("div", { key: i, style: { display: "flex", justifyContent: m.who === "you" ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" } },
                  m.who === "HH" && _e("div", { style: { width: 28, height: 28, borderRadius: "50%", background: "#fcd535", color: "#13111c", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, flexShrink: 0 } }, "HH"),
                  _e("div", { style: { display: "flex", flexDirection: "column", alignItems: m.who === "you" ? "flex-end" : "flex-start", maxWidth: "70%" } },
                    _e("div", { style: {
                      padding: "10px 14px", borderRadius: 14, fontSize: 14, lineHeight: 1.4,
                      background: m.who === "you" ? "#229ED9" : "rgba(255,255,255,0.05)",
                      color: m.who === "you" ? "#fff" : "#f5f1e8",
                      borderTopLeftRadius: m.who === "you" ? 14 : 4,
                      borderTopRightRadius: m.who === "you" ? 4 : 14
                    } }, m.text),
                    _e("div", { style: { fontSize: 10, color: "#a1a0a4", marginTop: 4 } }, m.time)
                  ),
                  m.who === "you" && _e("div", { style: { width: 28, height: 28, borderRadius: "50%", background: "#229ED9", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 } }, "Я")
                ))
              )
            )
          )
        ),

        // 2 CTA buttons below
        _e(Reveal, { delay: "3" },
          _e("div", { className: "hh-sup-ctas", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 } },
            _e("a", { href: "#cta",
              style: { display: "flex", alignItems: "center", gap: 14, padding: 22, background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 14, textDecoration: "none" }
            },
              _e("div", { style: { width: 42, height: 42, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#a1a0a4", fontSize: 18 } }, "👤"),
              _e("div", { style: { flex: 1 } },
                _e("div", { style: { fontSize: 15, fontWeight: 700, color: "#f5f1e8" } }, "Личный менеджер"),
                _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 2 } }, "Закрепляется за партнёром после регистрации")
              ),
              _e("span", { style: { color: "#a1a0a4", fontSize: 18 } }, "→")
            ),
            _e("a", { href: "https://t.me/hashhedge_affiliate", target: "_blank", rel: "noopener noreferrer",
              style: { display: "flex", alignItems: "center", gap: 14, padding: 22, background: "rgba(11,11,14,0.85)", border: "1px solid rgba(252,213,53,0.4)", borderRadius: 14, textDecoration: "none" }
            },
              _e("div", { style: { width: 42, height: 42, borderRadius: 12, background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.3)", display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                _e("svg", { width: 20, height: 20, viewBox: "0 0 24 24", style: { fill: "#fcd535" } },
                  _e("path", { d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z", style: { fill: "#fcd535" } })
                )
              ),
              _e("div", { style: { flex: 1 } },
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 8 } },
                  _e("span", { style: { fontSize: 15, fontWeight: 700, color: "#f5f1e8" } }, "Поддержка в Telegram"),
                  _e("span", { style: { fontSize: 10, color: "#4ade80", padding: "2px 8px", background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 100, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "Akrobat, Onest, sans-serif" } }, "онлайн")
                ),
                _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 2 } }, "Задай любой вопрос о партнёрской программе")
              ),
              _e("span", { style: { color: "#a1a0a4", fontSize: 18 } }, "→")
            )
          )
        )
      )
    );
  }

  // ============================================================================
  // FAQ
  // ============================================================================
  function FAQ() {
    const items = [
      { q: "Как работает партнёрская программа Hash Hedge?", a: "Программа работает по модели RevShare: ты получаешь от 50% до 80% прибыли компании с каждой покупки челленджа по твоей реферальной ссылке. Начисления — пожизненные, пока реферал остаётся активным." },
      { q: "Что считается «прибылью компании»?", a: "Прибыль = стоимость челленджа − 21% (7% — комиссия платёжной системы, 14% — резервный фонд). Например, с челленджа Elite за $499 база составляет около $394 — и на стартовом уровне 50% ты получаешь примерно $197 чистыми." },
      { q: "Как растёт мой процент RevShare?", a: "Все партнёры стартуют с 50%. Каждое 1-е число месяца процент пересчитывается по числу челленджей, купленных твоими рефералами за прошлый месяц, и держится весь следующий месяц. Максимум — 80% при 700+ продажах в месяц." },
      { q: "Зарабатываю ли я с прибыли трейдеров?", a: "Да. Если реферал проходит челлендж и торгует в плюс, он получает 80% прибыли, компания — 20%, а ты получаешь свой % RevShare с этих 20%. Пример: трейдер заработал $10 000 → компания получает $2 000 → тебе до $1 600." },
      { q: "Когда и как происходят выплаты?", a: "Запроси выплату прямо в партнёрском кабинете — она придёт в USDT на твой кошелёк в течение 72 часов. Минимум к выводу — $100; первая выплата доступна после 5 рефералов с покупкой." },
      { q: "Есть ли доход с приведённых партнёров?", a: "Да, многоуровневая программа: 5% с дохода партнёра, которого ты привёл напрямую, и 3% с партнёра следующего уровня. Эти проценты платит компания сверху — доход твоих субпартнёров не уменьшается." },
      { q: "Нужно ли быть трейдером, чтобы участвовать?", a: "Нет. Партнёром может стать любой — блогер, маркетолог, инфлюенсер или владелец комьюнити. Опыт в трейдинге не нужен, а работать можно с аудиторией из 154 стран." },
      { q: "Какие лимиты на вывод средств?", a: "Минимальная сумма к выводу — $100. Первая выплата становится доступна после того, как 5 твоих рефералов совершили хотя бы одну покупку — это защищает программу от самореферальства. Дальше выводи по запросу из кабинета, без ограничений по частоте." }
    ];
    const [open, setOpen] = useState(-1);
    const TG_BLUE = "#229ED9", TG_BLUE_DARK = "#1E8BBE";
    return _e("section", { id: "faq", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 720, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            }, "FAQ"),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } }, "Часто задаваемые вопросы"),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4" } }, "Всё что нужно знать о партнёрской программе.")
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 } },
            items.map((it, i) => _e("div", {
              key: i,
              style: { background: "rgba(11,11,14,0.85)", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }
            },
              _e("button", { onClick: () => setOpen(open === i ? -1 : i),
                style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", color: "#f5f1e8", fontSize: 16, fontWeight: 700, textAlign: "left" }
              },
                _e("span", null, it.q),
                _e("span", { style: { fontSize: 16, color: "#a1a0a4", transform: open === i ? "rotate(180deg)" : "none", transition: "transform .25s" } }, "▾")
              ),
              open === i && _e("div", { style: { padding: "0 24px 22px", fontSize: 14, color: "#a1a0a4", lineHeight: 1.6 } }, it.a)
            ))
          )
        ),
        _e(Reveal, { delay: "2" },
          _e("div", { style: { maxWidth: 820, margin: "40px auto 0", padding: 24, background: "rgba(11,11,14,0.85)", border: "1px solid rgba(252,213,53,0.3)", borderRadius: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 } },
            _e("div", null,
              _e("div", { style: { fontSize: 17, fontWeight: 700, color: "#f5f1e8" } }, "Остались ", _e("span", { style: { color: "#fcd535" } }, "вопросы?")),
              _e("div", { style: { fontSize: 13, color: "#a1a0a4", marginTop: 4 } }, "Напиши в партнёрскую поддержку в Telegram — поможем и ответим на все вопросы по партнёрской программе.")
            ),
            _e("a", { href: "https://t.me/hashhedge_affiliate", target: "_blank", rel: "noopener noreferrer", className: "hh-btn-tg",
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: "none", boxShadow: `0 6px 20px -6px ${TG_BLUE_DARK}` }
            },
              _e("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { fill: "#fff" } },
                _e("path", { d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z", style: { fill: "#fff" } })
              ),
              "Поддержка в Telegram"
            )
          )
        )
      )
    );
  }

  // ============================================================================
  // BIG CTA
  // ============================================================================
  function BigCTA() {
    return _e("section", { id: "cta", style: { padding: "120px 0", background: "var(--bg)", textAlign: "center", position: "relative" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: {
            maxWidth: 880, margin: "0 auto", padding: "72px 32px",
            background: "radial-gradient(ellipse at top, rgba(252,213,53,0.10), transparent 60%), rgba(11,11,14,0.85)" ,
            border: "1px solid var(--line)", borderRadius: 24
          } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24, fontFamily: "Akrobat, Onest, sans-serif" }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Готов начать?"
            ),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 20 } },
              "Начни зарабатывать ", _e("br", null), "с ", _e("span", { style: { color: "#fcd535" } }, "Hash Hedge")
            ),
            
            _e("div", { style: { display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 28 } },
              _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
                style: { padding: "16px 28px", borderRadius: 100, fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 12px 32px -8px rgba(252,213,53,0.4)" }
              }, "Зарегистрироваться"),
              _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-outline",
                style: { padding: "16px 28px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }
              }, "Войти в кабинет")
            ),
            _e("div", { style: { fontSize: 13, color: "#a1a0a4", display: "inline-flex", justifyContent: "center", gap: 16, flexWrap: "wrap" } },
              [].map((t, i) =>
                _e("span", { key: i, style: { display: "inline-flex", alignItems: "center", gap: 6 } },
                  _e("span", { style: { color: "#fcd535" } }, "✓"), t
                )
              )
            )
          )
        )
      )
    );
  }

  // ============================================================================
  // FOOTER
  // ============================================================================
  function Footer() {
    return _e("footer", { style: { padding: "60px 0 32px", background: "var(--bg)", borderTop: "1px solid var(--line)" } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-footer-grid", style: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, marginBottom: 40 } },
          _e("div", null,
            _e(HashHedgeLogo, { size: 26 }),
            _e("p", { style: { fontSize: 13, color: "#a1a0a4", lineHeight: 1.55, marginTop: 16, maxWidth: 320 } },
              "Партнёрская программа крипто проп-фирмы Hash Hedge. До 80% комиссии. Вывод по запросу."
            )
          ),
          [
            { h: "Программа", links: [["Преимущества", "#why"], ["Как начать", "#how"], ["Уровни", "#levels"], ["Калькулятор", "#calc"], ["Лидерборд", "#leaderboard"]] },
            { h: "Партнёрам", links: [["Регистрация", "https://partner.hashhedge.com"], ["Личный кабинет", "https://partner.hashhedge.com"], ["FAQ", "#faq"], ["Поддержка", "https://t.me/hashhedgesupportbot"]] },
            { h: "Hash Hedge", links: [["Главная", "https://www.hashhedge.com/ru"], ["Челленджи", "https://hashhedge.com/ru#challenge"], ["Блог", "https://www.hashhedge.com/blog/ru"], ["Политика аффилированных", "https://hashhedge.com/affiliate-politics"]] }
          ].map((col, i) => _e("div", { key: i },
            _e("div", { style: { fontSize: 12, fontWeight: 800, color: "#a1a0a4", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16, fontFamily: "Akrobat, Onest, sans-serif" } }, col.h),
            _e("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
              col.links.map(([l, h], j) => _e("a", { key: j, href: h, style: { color: "#f5f1e8", textDecoration: "none", fontSize: 14 } }, l))
            )
          ))
        ),
        _e("div", { style: { display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 12, color: "#a1a0a4", flexWrap: "wrap", gap: 16 } },
          _e("span", null, "© 2026 Hash Hedge. Все права защищены."),
          _e("div", { style: { display: "flex", gap: 22 } },
            _e("a", { href: "https://www.hashhedge.com/privacy-policy", style: { color: "#a1a0a4", textDecoration: "none" } }, "Конфиденциальность"),
            _e("a", { href: "https://www.hashhedge.com/terms-and-conditions", style: { color: "#a1a0a4", textDecoration: "none" } }, "Условия"),
            _e("a", { href: "https://hashhedge.com/affiliate-politics", style: { color: "#a1a0a4", textDecoration: "none" } }, "Аффилированные лица")
          )
        )
      )
    );
  }

  function MobileCTABar() {
    return _e("div", { className: "hh-mobile-cta",
      style: { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90, padding: "12px 16px", display: "none", background: "rgba(8,8,10,0.94)", backdropFilter: "blur(14px)", borderTop: "1px solid var(--line)" }
    },
      _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
        style: { display: "block", textAlign: "center", padding: "14px 18px", borderRadius: 100, fontSize: 14, fontWeight: 800, textDecoration: "none" }
      }, "Стать партнёром · бесплатно")
    );
  }

  // ============================================================================
  // APP
  // ============================================================================
  function App() {
    return _e("div", { className: "tilda-html-hashhedge" },
      _e(Header, null),
      _e(Hero, null),
      _e(Marquee, null),
      _e(WhyPartner, null),
      _e(IncomeSources, null),
      _e(Tiers, null),
      _e(Calculator, null),
      _e(Steps, null),
      _e(CabinetPreview, null),
      _e(Leaderboard, null),
      _e(PartnerContent, null),
      _e(Events, null),
      _e(Support, null),
      _e(FAQ, null),
      _e(BigCTA, null),
      _e(Footer, null),
      _e(MobileCTABar, null)
    );
  }

  // Responsive overrides + slider thumb
  if (!document.getElementById("hh-partner-styles")) {
    const st = document.createElement("style");
    st.id = "hh-partner-styles";
    st.textContent = `
      @media (max-width: 980px) {
        .hh-partner-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        .hh-why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-income-grid { grid-template-columns: 1fr !important; }
        .hh-tiers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-calc-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        .hh-steps-grid, .hh-steps-head, .hh-cab-head, .hh-lb-head, .hh-yt-head, .hh-sup-head { grid-template-columns: 1fr !important; gap: 24px !important; }
        .hh-cab-body { grid-template-columns: 1fr !important; }
        .hh-cab-side { display: none !important; }
        .hh-cab-stage { grid-template-columns: 1fr !important; }
        .hh-cab-top { flex-wrap: wrap !important; }
        .hh-cab-greet, .hh-cab-icons { display: none !important; }
        .hh-cab-explainers { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-events-grid { grid-template-columns: 1fr !important; }
        .hh-support-grid, .hh-sup-ctas { grid-template-columns: 1fr !important; }
        .hh-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        .hh-nav-desktop { display: none !important; }
        .hh-mob-toggle { display: inline-flex !important; align-items: center; justify-content: center; }
        .hh-mobile-cta { display: block !important; }
        .hh-lb-row { grid-template-columns: 60px 1fr 100px 100px !important; padding: 14px 18px !important; }
      }
      @media (max-width: 640px) {
        .hh-why-grid, .hh-steps-grid, .hh-tiers-grid, .hh-cab-explainers { grid-template-columns: 1fr !important; }
        .hh-footer-grid { grid-template-columns: 1fr !important; }
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none;
        width: 22px; height: 22px; border-radius: 50%;
        background: #fcd535; border: 3px solid #1f1d25;
        cursor: pointer; box-shadow: 0 4px 12px rgba(252,213,53,0.4);
      }
      input[type=range]::-moz-range-thumb {
        width: 22px; height: 22px; border-radius: 50%;
        background: #fcd535; border: 3px solid #1f1d25;
        cursor: pointer; box-shadow: 0 4px 12px rgba(252,213,53,0.4);
      }

      /* Кнопки: блокируем цвет текста, чтобы Tilda не подмешивала свой */
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-yellow,
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-yellow *,
      #hashhedge-root .tilda-html-hashhedge button.hh-btn-yellow,
      #hashhedge-root .tilda-html-hashhedge button.hh-btn-yellow * {
        color: #13111c !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-yellow,
      #hashhedge-root .tilda-html-hashhedge button.hh-btn-yellow {
        background: #fcd535 !important;
        text-decoration: none !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-outline,
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-outline *,
      #hashhedge-root .tilda-html-hashhedge button.hh-btn-outline,
      #hashhedge-root .tilda-html-hashhedge button.hh-btn-outline * {
        color: #f5f1e8 !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-outline,
      #hashhedge-root .tilda-html-hashhedge button.hh-btn-outline {
        background: rgba(255,255,255,0.02) !important;
        border: 1px solid rgba(255,255,255,0.18) !important;
        text-decoration: none !important;
      }
      /* TG-кнопка синяя */
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-tg,
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-tg * {
        color: #fff !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-tg {
        background: #229ED9 !important;
        text-decoration: none !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-tg:hover {
        background: #1E8BBE !important;
      }
    `;
    document.head.appendChild(st);
  }

  const root = document.getElementById("hashhedge-root");
  if (root) {
    const r = ReactDOM.createRoot(root);
    r.render(_e(App, null));
    requestAnimationFrame(() => root.setAttribute("data-hh-ready", "1"));
  }
})();
