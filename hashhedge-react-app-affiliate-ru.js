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
    // Использую CSS-классы главной RU: .nav, .nav-inner, .nav ul, .hh-lang-*,
    // .btn .btn-primary — Tilda-overrides уже на них висят. height: 76px из CSS.
    const [menuOpen, setMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef(null);
    useEffect(() => {
      if (!langOpen) return;
      const handler = e => { if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false); };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [langOpen]);
    const nav = [
      { l: "Программа",   h: "#why"   },
      { l: "Как начать",  h: "#how"   },
      { l: "Уровни",      h: "#levels" },
      { l: "Калькулятор", h: "#calc"  },
      { l: "Кабинет",     h: "#cabinet" },
      { l: "FAQ",         h: "#faq"   }
    ];
    const langs = [
      { code: "EN", flag: "🇬🇧", label: "English",          href: "https://www.hashhedge.com/affiliateprogram" },
      { code: "DE", flag: "🇩🇪", label: "Deutsch",          href: "https://www.hashhedge.com/affiliateprogram/de" },
      { code: "PT", flag: "🇧🇷", label: "Português",        href: "https://www.hashhedge.com/affiliateprogram/pt" },
      { code: "FR", flag: "🇫🇷", label: "Française",        href: "https://www.hashhedge.com/affiliateprogram/fr" },
      { code: "ES", flag: "🇪🇸", label: "Español",          href: "https://www.hashhedge.com/affiliateprogram/es" },
      { code: "HI", flag: "🇮🇳", label: "हिन्दी",            href: "https://www.hashhedge.com/affiliateprogram/hi" },
      { code: "ID", flag: "🇮🇩", label: "Bahasa Indonesia", href: "https://www.hashhedge.com/affiliateprogram/in" },
      { code: "RU", flag: "🇷🇺", label: "Русский",          href: "#", current: true },
      { code: "UA", flag: "🇺🇦", label: "Український",      href: "https://www.hashhedge.com/affiliateprogram/ua" },
      { code: "KZ", flag: "🇰🇿", label: "Қазақша",          href: "https://www.hashhedge.com/affiliateprogram/kz" }
    ];
    return _e("nav", { className: "nav" },
      _e("div", { className: "container nav-inner" },
        _e(HashHedgeLogo, null),
        _e("ul", null,
          nav.map(n => _e("li", { key: n.l },
            _e("a", { href: n.h }, n.l)
          ))
        ),
        _e("div", { style: { display: "flex", gap: 12, alignItems: "center" } },
          _e("a", { href: "https://partner.hashhedge.com", target: "_blank", rel: "noopener",
            className: "nav-cta-desktop",
            style: { fontSize: 14, color: "var(--fg-muted)", padding: "10px 14px" }
          }, "Войти"),
          _e("a", { href: "https://partner.hashhedge.com", target: "_blank", rel: "noopener",
            className: "btn btn-primary nav-cta-desktop"
          }, "Стать партнёром"),
          // Language switcher — те же классы что на главной
          _e("div", { className: "hh-lang-switcher", ref: langRef },
            _e("button", {
              type: "button",
              className: "hh-lang-trigger",
              onClick: () => setLangOpen(v => !v),
              "aria-expanded": langOpen,
              "aria-label": "Выбрать язык"
            },
              _e("span", null, "🇷🇺"),
              _e("b", null, "RU"),
              _e("svg", { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none" },
                _e("path", { d: "M3 4.5 6 7.5 9 4.5", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" })
              )
            ),
            _e("div", { className: "hh-lang-menu" + (langOpen ? " open" : "") },
              langs.map(l => _e("a", { key: l.code, href: l.href, onClick: () => setLangOpen(false) },
                _e("span", null, l.flag),
                _e("em", null, l.label)
              ))
            )
          ),
          _e("button", { className: "nav-burger",
            onClick: () => setMenuOpen(v => !v),
            "aria-label": "Открыть меню"
          },
            _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" },
              _e("path", { d: "M3 6h18M3 12h18M3 18h18", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" })
            )
          )
        )
      ),
      menuOpen && _e("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(8,8,10,0.98)", borderTop: "1px solid var(--line)", padding: "20px 0", zIndex: 100 } },
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
      // Background grid pattern — квадратная сетка как на главной
      _e("div", { style: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 80%)" } }),
      // candles grid (fine)
      _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
        [10, 25, 40, 55, 70, 85].map((y, i) => _e("line", { key: "h" + i, x1: 0, x2: 100, y1: y, y2: y, style: { stroke: "rgba(255,255,255,0.04)", strokeWidth: 0.1 } }))
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
    // Пул выплат — только локальный рынок (RU/KZ/UA/GE/TR), небольшие суммы.
    // Ротация медленная (8 сек), чтобы не дёргалось.
    const payoutPool = [
      { flag: "🇷🇺", name: "Сергей",     city: "Москва",       amt: 1850 },
      { flag: "🇰🇿", name: "Адиль",      city: "Алматы",       amt: 1240 },
      { flag: "🇺🇦", name: "Олег",       city: "Київ",         amt: 1670 },
      { flag: "🇬🇪", name: "Nino",       city: "Тбилиси",      amt: 980  },
      { flag: "🇹🇷", name: "Cem",        city: "Istanbul",     amt: 1420 },
      { flag: "🇷🇺", name: "Анна",       city: "СПб",          amt: 2310 },
      { flag: "🇰🇿", name: "Бахыт",      city: "Астана",       amt: 1390 },
      { flag: "🇺🇦", name: "Лариса",     city: "Одеса",        amt: 1130 },
      { flag: "🇷🇺", name: "Игорь",      city: "Казань",       amt: 760  },
      { flag: "🇬🇪", name: "Гиорги",     city: "Батуми",       amt: 1280 },
      { flag: "🇹🇷", name: "Mehmet",     city: "Анкара",       amt: 890  },
      { flag: "🇷🇺", name: "Дмитрий",    city: "Новосибирск",  amt: 2080 },
      { flag: "🇰🇿", name: "Айгуль",     city: "Шымкент",      amt: 1050 },
      { flag: "🇺🇦", name: "Анастасія",  city: "Львів",        amt: 1380 },
      { flag: "🇷🇺", name: "Артур",      city: "Екатеринбург", amt: 1620 }
    ];
    const [pIdx, setPIdx] = useState(0);
    useEffect(() => {
      const id = setInterval(() => setPIdx(i => (i + 1) % payoutPool.length), 8000);
      return () => clearInterval(id);
    }, []);
    const payouts = [
      payoutPool[pIdx],
      payoutPool[(pIdx + 1) % payoutPool.length],
      payoutPool[(pIdx + 2) % payoutPool.length]
    ];

    // Анимированный счётчик "Заработано за месяц" — растёт медленно по чуть-чуть
    const [earned, setEarned] = useState(12480);
    useEffect(() => {
      const id = setInterval(() => setEarned(e => e + Math.floor(20 + Math.random() * 40)), 9000);
      return () => clearInterval(id);
    }, []);
    // Mini sparkline данные — растущая кривая
    const sparkPts = [60, 55, 58, 50, 48, 42, 38, 32, 28, 22, 18, 12];
    const sparkPath = sparkPts.map((y, i) => `${i === 0 ? "M" : "L"} ${i / (sparkPts.length - 1) * 100} ${y}`).join(" ");
    return _e("div", {
      style: {
        background: "#151517",
        border: "1px solid var(--line)",
        borderRadius: 18, overflow: "hidden",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)"
      }
    },
      // Header — green LIVE badge, no dot before "Личный кабинет"
      _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid var(--line)" } },
        _e("span", { style: { fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#a1a0a4" } }, "Личный кабинет"),
        _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", padding: "4px 10px", background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.4)", color: "#4ade80", borderRadius: 100 } },
          _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80" } }),
          "LIVE"
        )
      ),

      // Earned + sparkline
      _e("div", { style: { padding: "18px 22px", borderBottom: "1px solid var(--line)" } },
        _e("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 } },
          _e("div", null,
            _e("div", { style: { fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 } }, "Заработано за месяц"),
            _e("div", { style: { fontSize: 38, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1 } }, "$" + earned.toLocaleString("ru-RU").replace(/,/g, " ")),
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
        _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 14 } }, "Последние выплаты партнёрам"),
        _e("div", { style: { position: "relative", minHeight: 138, overflow: "hidden" } },
          payouts.map((p, i) => _e("div", {
            key: pIdx + "-" + i,
            style: {
              display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 12, alignItems: "center",
              padding: "10px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)",
              animation: i === 0 ? "hh-payout-in .55s var(--ease-out, cubic-bezier(.22,1,.36,1)) both" : "hh-payout-shift .55s ease both"
            }
          },
            _e("span", { style: { fontSize: 22, lineHeight: 1 } }, p.flag),
            _e("div", null,
              _e("div", { style: { fontSize: 13, fontWeight: 700, color: "#f5f1e8" } }, `${p.name} · ${p.city}`)
            ),
            _e("span", { style: { color: "#fcd535", fontWeight: 800, fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: 13 } }, `+$${p.amt.toLocaleString("ru-RU").replace(/,/g, " ")}`)
          ))
        ),
        // География выплат — mini block
        _e("div", { style: { marginTop: 4, paddingTop: 12, borderTop: "1px solid var(--line)" } },
          _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 10 } }, "География выплат"),
          _e("div", { style: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } },
            ["🇺🇸", "🇩🇪", "🇬🇧", "🇯🇵", "🇰🇷", "🇧🇷", "🇦🇪", "🇫🇷", "🇮🇳", "🇨🇦", "🇳🇱", "🇸🇬", "🇮🇹", "🇵🇱", "🇪🇸", "🇹🇷"].map((f, i) =>
              _e("span", { key: i, style: { fontSize: 18, opacity: 0.92 } }, f)
            ),
            _e("span", { style: { fontSize: 12, color: "#a1a0a4", marginLeft: 4 } }, "+ ещё 138 стран")
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
      style: { position: "relative", overflow: "hidden", paddingTop: 60, paddingBottom: 80, background: "var(--bg)" }
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
                  marginBottom: 24
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
                "Продвигай", _e("br", null),
                _e("span", { style: { color: "#fcd535" } }, "Hash Hedge"), _e("br", null),
                "и зарабатывай", _e("br", null),
                "вместе с нами"
              ),

              _e("p", { style: { fontSize: 18, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 36, maxWidth: 580 } },
                "Получай до 80% комиссии с каждого привлечённого трейдера. Пожизненные начисления, прозрачная статистика и быстрые выплаты."
              ),

              // Hero buttons — те же классы что на главной (.btn .btn-primary / .btn .btn-ghost, height 56px из CSS)
              _e("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 } },
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary",
                  style: { textDecoration: "none" }
                }, "Стать партнёром →"),
                _e("a", { href: "#calc", className: "btn btn-ghost",
                  style: { textDecoration: "none" }
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
      { v: "154",    l: "стран" },
      { v: "$2.5M+", l: "выплачено партнёрам" },
      { v: "4.4/5",  l: "Trustpilot" }
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
        background: "#151517", border: "1px solid var(--line)", borderRadius: 18,
        padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%"
      }
    },
      _e("div", { style: { padding: 22, paddingBottom: 18, minHeight: 220, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--line)", background: "#0B0B0C" } },
        children
      ),
      _e("div", { style: { padding: "20px 22px 22px" } },
        _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 100, background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.3)", fontSize: 10, fontWeight: 700, color: "#9ef0c0", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 14 } },
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
      _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#a1a0a4", textTransform: "uppercase", marginBottom: 14, textAlign: "center" } }, "Комиссия партнёра"),
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
      _e("div", { style: { fontSize: 48, fontWeight: 900, color: "#fcd535", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 6 } }, "5–10×"),
      _e("div", { style: { fontSize: 11, color: "#a1a0a4", marginBottom: 16 } }, "доход vs биржевой реферал"),
      _e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } },
        _e("div", { style: { padding: "10px 8px", background: "rgba(8,8,10,0.6)", border: "1px solid var(--line)", borderRadius: 10 } },
          _e("div", { style: { fontSize: 10, color: "#a1a0a4", marginBottom: 4 } }, "Биржа"),
          _e("div", { style: { fontSize: 16, fontWeight: 700, color: "#a1a0a4" } }, "$30–60")
        ),
        _e("div", { style: { padding: "10px 8px", background: "rgba(252,213,53,0.08)", border: "1px solid rgba(252,213,53,0.4)", borderRadius: 10 } },
          _e("div", { style: { fontSize: 10, color: "#fcd535", marginBottom: 4, fontWeight: 700 } }, "Hash Hedge"),
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

    // VIZ 6 — Wireframe-глобус (как сетка-планета из примера), жёлтые тона, без ореола
    const V6 = () => {
      // Спроецированные точки на сферу (используем те же координаты городов + равномерные на сетке)
      const project = (lon, lat) => {
        const ROT = -20;
        const lonR = (lon + ROT) * Math.PI / 180;
        const latR = lat * Math.PI / 180;
        const x = Math.cos(latR) * Math.sin(lonR);
        const y = -Math.sin(latR);
        const z = Math.cos(latR) * Math.cos(lonR);
        return { x: 50 + x * 38, y: 50 + y * 38, z };
      };
      // dense grid dots на каждом пересечении сетки (через каждые 15°) — только видимые
      const gridDots = [];
      for (let lat = -75; lat <= 75; lat += 15) {
        for (let lon = -180; lon < 180; lon += 18) {
          const p = project(lon, lat);
          if (p.z > 0.05) gridDots.push({ p, key: `${lat}_${lon}` });
        }
      }
      // "Города" — крупные пульсирующие точки
      const cities = [
        { lon: -74, lat: 41 }, { lon: 0,   lat: 51 }, { lon: 13,  lat: 52 },
        { lon: 37,  lat: 55 }, { lon: 55,  lat: 25 }, { lon: 116, lat: 39 },
        { lon: 139, lat: 35 }, { lon: 73,  lat: 19 }, { lon: 103, lat: 1  },
        { lon: -46, lat: -23 }
      ].map(c => ({ p: project(c.lon, c.lat) })).filter(o => o.p.z > 0);

      // Меридианы — front-facing arcs (видимые полуэллипсы)
      const meridians = [];
      for (let lon = -90; lon <= 90; lon += 22.5) {
        const rot = lon - 20;
        const rx = 38 * Math.abs(Math.cos(rot * Math.PI / 180));
        meridians.push({ rx, key: "m" + lon });
      }
      // Параллели — горизонтальные эллипсы
      const parallels = [-60, -45, -30, -15, 0, 15, 30, 45, 60].map(lat => {
        const y = 50 - Math.sin(lat * Math.PI / 180) * 38;
        const r = Math.cos(lat * Math.PI / 180) * 38;
        return { y, r, key: "p" + lat };
      });

      return _e("div", { style: { position: "relative", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" } },
        _e("svg", { width: "100%", height: "180", viewBox: "0 0 100 100", style: { display: "block", maxWidth: 180, margin: "0 auto" } },
          // Контур сферы — тонкая жёлтая обводка
          _e("circle", { cx: 50, cy: 50, r: 38, style: { fill: "none", stroke: "rgba(252,213,53,0.25)", strokeWidth: 0.4 } }),
          // Параллели
          parallels.map(p => _e("ellipse", { key: p.key, cx: 50, cy: p.y, rx: p.r, ry: p.r * 0.18,
            style: { fill: "none", stroke: "rgba(252,213,53,0.18)", strokeWidth: 0.22 } })),
          // Меридианы
          meridians.map(m => _e("ellipse", { key: m.key, cx: 50, cy: 50, rx: m.rx, ry: 38,
            style: { fill: "none", stroke: "rgba(252,213,53,0.18)", strokeWidth: 0.22 } })),
          // Grid dots на пересечениях
          gridDots.map(d => _e("circle", { key: d.key, cx: d.p.x, cy: d.p.y, r: 0.45,
            style: { fill: "rgba(252,213,53,0.55)" } })),
          // City dots — мигающие
          cities.map((o, i) => _e("g", { key: "city" + i },
            _e("circle", { cx: o.p.x, cy: o.p.y, r: 2.2,
              style: { fill: "rgba(252,213,53,0.25)", animation: `hh-globe-pulse 2.4s ease-in-out ${i * 0.25}s infinite` } }),
            _e("circle", { cx: o.p.x, cy: o.p.y, r: 0.9, style: { fill: "#fcd535" } })
          ))
        )
      );
    };

    // VIZ 7 — Promo code field with Partner2026
    const V7 = () => _e("div", { style: { width: "100%", padding: "0 6px", textAlign: "center" } },
      _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#a1a0a4", textTransform: "uppercase", marginBottom: 12 } }, "Промокод"),
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
          _e("div", { style: { fontSize: 9, color: "#a1a0a4", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.1em" } }, it.k),
          _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, it.v)
        ))
      ),
      _e("div", { style: { padding: "12px 14px", background: "rgba(252,213,53,0.06)", border: "1px solid rgba(252,213,53,0.3)", borderRadius: 8 } },
        _e("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 } },
          _e("span", { style: { fontSize: 10, color: "#a1a0a4", textTransform: "uppercase", letterSpacing: "0.1em" } }, "Доход с канала"),
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
        _e("text", { x: 100, y: 34, textAnchor: "middle", style: { fontSize: 9, fontWeight: 800, fill: "#13111c" } }, "Я"),
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
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
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
        icon: ["M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M19 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M12 8v3", "M6.5 16l4.5-3 4.5 3", "M9 21h6"] }
    ];
    return _e("section", { id: "income", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 760, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
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
            _e("div", { style: { background: "#151517", border: "1px solid var(--line)", borderRadius: 18, padding: 28, height: "100%", display: "flex", flexDirection: "column" } },
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
      _e("svg", { width: 26, height: 26, viewBox: "0 0 24 24", style: { fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } },
        // Crown — Tier 7
        shape === "diamond" && _e(F, null,
          _e("path", { d: "M3 18 L5 8 L9 12 L12 6 L15 12 L19 8 L21 18 Z", style: { stroke: color, fill: "none" } }),
          _e("line", { x1: 3, y1: 21, x2: 21, y2: 21, style: { stroke: color } }),
          _e("circle", { cx: 12, cy: 6, r: 1.4, style: { fill: color, stroke: "none" } }),
          _e("circle", { cx: 5, cy: 8, r: 1.2, style: { fill: color, stroke: "none" } }),
          _e("circle", { cx: 19, cy: 8, r: 1.2, style: { fill: color, stroke: "none" } })
        ),
        // Medal — Tier 6
        shape === "hexagon" && _e(F, null,
          _e("path", { d: "M8 2 L4 8 L7 12 M16 2 L20 8 L17 12 M8 2 H16", style: { stroke: color, fill: "none" } }),
          _e("circle", { cx: 12, cy: 16, r: 6, style: { stroke: color, fill: "none" } }),
          _e("path", { d: "M10 16 L11.5 17.5 L14.5 14.5", style: { stroke: color, fill: "none", strokeWidth: 2 } })
        ),
        // Star — Tier 5
        shape === "pentagon" && _e(F, null,
          _e("path", { d: "M12 2 L14.5 8.5 L21 9.5 L16 14 L17.5 21 L12 17.5 L6.5 21 L8 14 L3 9.5 L9.5 8.5 Z", style: { stroke: color, fill: "none" } }),
          _e("circle", { cx: 12, cy: 12, r: 1.5, style: { fill: color, stroke: "none" } })
        ),
        // Trophy — Tier 4
        shape === "shield" && _e(F, null,
          _e("path", { d: "M7 3 H17 V8 C17 12 14 14 12 14 C10 14 7 12 7 8 V3 Z", style: { stroke: color, fill: "none" } }),
          _e("path", { d: "M7 5 H4 V8 C4 9.5 5.5 11 7 11 M17 5 H20 V8 C20 9.5 18.5 11 17 11", style: { stroke: color, fill: "none" } }),
          _e("path", { d: "M12 14 V18 M8 21 H16 M9 18 H15", style: { stroke: color, fill: "none" } })
        ),
        // Target — Tier 3
        shape === "square" && _e(F, null,
          _e("circle", { cx: 12, cy: 12, r: 9, style: { stroke: color, fill: "none" } }),
          _e("circle", { cx: 12, cy: 12, r: 5, style: { stroke: color, fill: "none" } }),
          _e("circle", { cx: 12, cy: 12, r: 1.8, style: { fill: color, stroke: "none" } }),
          _e("line", { x1: 12, y1: 1, x2: 12, y2: 4.5, style: { stroke: color } }),
          _e("line", { x1: 12, y1: 19.5, x2: 12, y2: 23, style: { stroke: color } })
        ),
        // Rocket — Tier 2
        shape === "rhombus" && _e(F, null,
          _e("path", { d: "M9 14 C 7 14 5 16 5 20 C 9 20 10 17 10 16 M15 14 C 17 14 19 16 19 20 C 15 20 14 17 14 16", style: { stroke: color, fill: "none" } }),
          _e("path", { d: "M12 2 C 9 5 8 9 8 13 V18 H16 V13 C16 9 15 5 12 2 Z", style: { stroke: color, fill: "none" } }),
          _e("circle", { cx: 12, cy: 10, r: 1.5, style: { fill: color, stroke: "none" } })
        ),
        // Flag — Tier 1
        shape === "circle" && _e(F, null,
          _e("path", { d: "M5 3 V21", style: { stroke: color } }),
          _e("path", { d: "M5 4 H17 L14 7 L17 10 H5 Z", style: { stroke: color, fill: "none" } })
        )
      )
    );
    // Каждый уровень — свой цвет иконки и слабый фоновый градиент в тон. Tier 7 (top) — фирменный жёлтый.
    const tiers = [
      { lvl: 7, pct: 80, range: "700+",    label: "максимум", shape: "diamond",  color: "#fcd535", grad: "linear-gradient(180deg, rgba(252,213,53,0.12), rgba(252,213,53,0.02))", border: "rgba(252,213,53,0.40)", featured: true },
      { lvl: 6, pct: 75, range: "400–699", label: null,       shape: "hexagon",  color: "#e879f9", grad: "linear-gradient(180deg, rgba(232,121,249,0.10), rgba(232,121,249,0.015))", border: "rgba(232,121,249,0.28)" },
      { lvl: 5, pct: 70, range: "200–399", label: null,       shape: "pentagon", color: "#a78bfa", grad: "linear-gradient(180deg, rgba(167,139,250,0.10), rgba(167,139,250,0.015))", border: "rgba(167,139,250,0.28)" },
      { lvl: 4, pct: 65, range: "100–199", label: null,       shape: "shield",   color: "#60a5fa", grad: "linear-gradient(180deg, rgba(96,165,250,0.10), rgba(96,165,250,0.015))",  border: "rgba(96,165,250,0.28)" },
      { lvl: 3, pct: 60, range: "50–99",   label: null,       shape: "square",   color: "#22d3ee", grad: "linear-gradient(180deg, rgba(34,211,238,0.10), rgba(34,211,238,0.015))",  border: "rgba(34,211,238,0.28)" },
      { lvl: 2, pct: 55, range: "15–49",   label: null,       shape: "rhombus",  color: "#4ade80", grad: "linear-gradient(180deg, rgba(74,222,128,0.10), rgba(74,222,128,0.015))",  border: "rgba(74,222,128,0.28)" },
      { lvl: 1, pct: 50, range: "0–14",    label: "старт",    shape: "circle",   color: "#f59e0b", grad: "linear-gradient(180deg, rgba(245,158,11,0.10), rgba(245,158,11,0.015))",  border: "rgba(245,158,11,0.28)" }
    ];
    return _e("section", { id: "levels", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 880, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
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
                background: t.grad ? `${t.grad}, #151517` : "#151517",
                border: `1px solid ${t.border}`,
                borderRadius: 18, padding: "26px 18px",
                textAlign: "center", height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center"
              }
            },
              _e(TierIcon, { shape: t.shape, color: t.color }),
              _e("div", { style: { fontSize: 17, fontWeight: 700, color: "#f5f1e8", marginBottom: 2 } }, `Уровень ${t.lvl}`),
              t.label && _e("div", { style: { fontSize: 10, fontWeight: 700, color: t.color, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 } }, t.label),
              !t.label && _e("div", { style: { height: 14 } }),
              _e("div", { style: { fontSize: 11, color: "#a1a0a4", marginBottom: 6 } }, "Комиссия"),
              _e("div", { style: { fontSize: 40, fontWeight: 800, color: t.color, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 22 } }, `${t.pct}%`),
              _e("div", { style: { width: "100%", marginTop: "auto", padding: "12px 10px", background: "rgba(8,8,10,0.4)", border: "1px solid var(--line)", borderRadius: 10 } },
                _e("div", { style: { fontSize: 10, color: "#a1a0a4", marginBottom: 4 } }, "Привлечённых трейдеров"),
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
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Твой доход"
            ),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Рассчитай, сколько ты", _e("br", null), "можешь зарабатывать"
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Укажи количество трейдеров в месяц. Твой уровень и ставка комиссии до 80% повышаются автоматически с ростом числа привлечённых пользователей.")
          )
        ),
        _e(Reveal, { delay: "1" },
          // 2.2fr / 1fr — левая часть с табами+слайдером шире, правая (доход) ~30%.
          // maxWidth убран — раскрывается на полную ширину контейнера как другие блоки.
          // alignItems: stretch чтобы правая карточка тянулась по высоте левой колонки.
          _e("div", { className: "hh-calc-grid", style: { display: "grid", gridTemplateColumns: "2.2fr 1fr", gap: 28, margin: "0 auto", alignItems: "stretch" } },
            // LEFT controls
            _e("div", { style: { padding: 28 } },
              _e("div", { style: { marginBottom: 28 } },
                _e("div", { style: { fontSize: 13, color: "#a1a0a4", marginBottom: 10 } }, "Средний чек челленджа"),
                _e("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } },
                  challenges.map((c, i) => _e("button", {
                    key: i,
                    onClick: () => setChIdx(i),
                    style: {
                      padding: "10px 14px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer",
                      // фон всех табов = #151517 (фон блока «Твой уровень»); активный — жёлтая рамка + жёлтый текст
                      background: "#151517",
                      color: i === chIdx ? "#fcd535" : "#f5f1e8",
                      border: i === chIdx ? "1px solid rgba(252,213,53,0.55)" : "1px solid var(--line)",
                      transition: "all .15s"
                    }
                  }, `${c.size} · $${c.price}`))
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
              _e("div", { style: { padding: "18px 22px", background: "#151517", border: "1px solid var(--line)", borderRadius: 14, marginBottom: 16 } },
                _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
                  _e("div", null,
                    _e("div", { style: { fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 } }, "Твой уровень · авто"),
                    _e("div", { style: { fontSize: 19, fontWeight: 700, color: "#f5f1e8" } }, `Уровень ${tier.lvl}`)
                  ),
                  _e("div", { style: { fontSize: 28, fontWeight: 800, color: "#fcd535" } }, `${tier.pct}%`)
                )
              ),
              _e("p", { style: { fontSize: 12, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, "Уровень и ставка комиссии растут автоматически с числом привлечённых трейдеров в месяц — отдельно выбирать ничего не нужно.")
            ),

            // RIGHT result card — высота = высоте левой колонки (height: 100%), без minHeight
            _e("div", { style: {
              background: "linear-gradient(180deg, rgba(11,11,14,0.6), #151517)",
              border: "1px solid var(--line)", borderRadius: 22, padding: 28,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)",
              display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"
            } },
              // верхняя группа (eyebrow + результат + подпись)
              _e("div", null,
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 16 } },
                  _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80" } }),
                  "Твой доход в месяц"
                ),
                _e("div", { style: { fontSize: "clamp(56px, 7vw, 86px)", fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 12 } },
                  `$${monthly.toLocaleString("ru-RU").replace(/,/g, " ")}`
                ),
                _e("div", { style: { fontSize: 14, color: "#a1a0a4" } }, "в месяц при выбранных параметрах")
              ),
              // нижняя группа (кнопка + дисклеймер) — прижата к низу
              _e("div", null,
                _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
                  style: { display: "block", textAlign: "center", padding: "18px 28px", borderRadius: 14, fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 12px 32px -8px rgba(252,213,53,0.4)" }
                }, "Стать партнёром →"),
                _e("p", { style: { fontSize: 11, color: "#a1a0a4", marginTop: 14, marginBottom: 0, lineHeight: 1.5 } },
                  "Расчёт примерный и зависит от количества привлечённых трейдеров, среднего чека челленджа и твоего партнёрского уровня."
                )
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
            _e("div", { style: { background: "#151517", border: "1px solid var(--line)", borderRadius: 16, padding: 24, height: "100%" } },
              _e("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fcd535", marginBottom: 12 } }, s.chip),
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
    // Очень медленная анимация KPI — растут на чуть-чуть каждые 30 секунд
    const [cabTick, setCabTick] = useState(0);
    useEffect(() => {
      const id = setInterval(() => setCabTick(t => t + 1), 30000);
      return () => clearInterval(id);
    }, []);
    const cabKpis = useMemo(() => {
      const tick = cabTick;
      return [
        { k: "Всего покупок",      v: "$" + (48920 + tick * 320).toLocaleString("ru-RU").replace(/,/g, " "), d: "+18,4%", ic: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18" },
        { k: "Количество покупок", v: String(312 + Math.floor(tick * 0.4)),                                  d: "+24",    ic: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
        { k: "Регистрации",        v: (1284 + tick * 3).toLocaleString("ru-RU").replace(/,/g, " "),         d: "+61",    ic: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M20 8v6 M23 11h-6" },
        { k: "Комиссия партнера",  v: "$" + (34244 + tick * 180).toLocaleString("ru-RU").replace(/,/g, " "), d: "+21,7%", ic: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
      ];
    }, [cabTick]);
    return _e("section", { id: "cabinet", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-cab-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
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
                    _e("div", { style: { fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", color: "#a1a0a4" } }, "ПАРТНЁРСКИЙ ЦЕНТР")
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
                  _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0 10px", marginBottom: 6 } },
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
                    cabKpis.map((s, i) => _e("div", { key: i, style: { padding: 16, background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 12 } },
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
                        _e("div", { style: { fontSize: 28, fontWeight: 800, color: "#f5f1e8", lineHeight: 1, letterSpacing: "-0.02em" } }, "$" + (34244 + cabTick * 180).toLocaleString("ru-RU").replace(/,/g, " ") + ",80"),
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
              { paths: ["M22 12h-4l-3 9L9 3l-3 9H2"], t: "Аналитика в реальном времени", b: "Клики, регистрации, покупки и комиссии обновляются автоматически." },
              { paths: ["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4L12 14.01l-3-3"], t: "Статистика по суб-партнёрам", b: "Контролируй начисления со всех уровней: твоих прямых партнёров и их рефералов." },
              { paths: ["M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2", "M16 11h.01", "M18 14a4 4 0 0 0 0-4"], t: "Вывод в любой момент", b: "Запрашивай выплаты в USDT без фиксированных дат." },
              { paths: ["M12 20h9", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], t: "Гибкие инструменты", b: "Генерируй ссылки, промокоды и подключай постбэки за пару секунд." }
            ].map((ex, i) => _e("div", { key: i, style: { padding: 18, background: "#151517", border: "1px solid var(--line)", borderRadius: 14 } },
              _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#fcd535", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", marginBottom: 12 } },
                ex.paths.map((p, j) => _e("path", { key: j, d: p, style: { fill: "none", stroke: "#fcd535" } }))
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
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Обновляется в реальном времени"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Топ партнёры", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "за месяц")
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
              ["#", "Партнёр", "Активных трейдеров", "Доход за месяц"].map((h, i) => _e("div", { key: i, style: { fontSize: 11, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: i === 3 ? "right" : i === 2 ? "right" : "left" } }, h))
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
    useEffect(() => {
      const rail = document.getElementById("hh-yt-rail");
      const prev = document.getElementById("hh-yt-prev");
      const next = document.getElementById("hh-yt-next");
      if (!rail || !prev || !next) return;
      const step = () => rail.clientWidth * 0.75;
      const onPrev = () => rail.scrollBy({ left: -step(), behavior: "smooth" });
      const onNext = () => rail.scrollBy({ left: step(), behavior: "smooth" });
      prev.addEventListener("click", onPrev);
      next.addEventListener("click", onNext);
      return () => { prev.removeEventListener("click", onPrev); next.removeEventListener("click", onNext); };
    }, []);
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
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
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
              // Стрелки в стиле «Независимые обзоры» главной RU: круг 36×36, прозрачный фон, тонкая обводка
              _e("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" } },
                _e("button", { id: "hh-yt-prev", "aria-label": "Назад",
                  style: { width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", color: "#f5f1e8", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background .25s, border-color .25s" }
                },
                  _e("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none" },
                    _e("path", { d: "M9 3l-4 4 4 4", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" })
                  )
                ),
                _e("button", { id: "hh-yt-next", "aria-label": "Вперёд",
                  style: { width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", color: "#f5f1e8", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background .25s, border-color .25s" }
                },
                  _e("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none" },
                    _e("path", { d: "M5 3l4 4-4 4", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" })
                  )
                )
              )
            )
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { id: "hh-yt-rail", className: "hh-no-scrollbar",
            style: { display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(280px, 1fr)", gap: 16, paddingBottom: 16, overflowX: "auto", scrollSnapType: "x mandatory", scrollBehavior: "smooth" }
          },
            videos.map((v, i) => _e("a", {
              key: i, href: `https://www.youtube.com/watch?v=${v.id}`, target: "_blank", rel: "noopener noreferrer",
              style: { background: "#151517", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "var(--fg)", scrollSnapAlign: "start" }
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
                _e("div", { style: { fontSize: 10, color: "#a1a0a4", letterSpacing: "0.08em", textTransform: "uppercase" } }, "YouTube · Hash Hedge")
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
    // 4 равные карточки в ряд (как на твоём скрине-эталоне)
    const events = [
      { flag: "🇦🇪", city: "Дубай",     year: "Октябрь 2025", role: "Организатор", title: "WSCT Дубай · Оффлайн турнир",   img: "https://hash-hedge-partner.vercel.app/assets/event-dubai.jpg" },
      { flag: "🇷🇺", city: "Москва",    year: "2026",          role: null,           title: "Партнёрская встреча",            img: "https://hash-hedge-partner.vercel.app/assets/event-moscow.jpg" },
      { flag: "🇧🇷", city: "Сан-Паулу", year: "2025",          role: "Организатор", title: "WSCT Бразилия · Оффлайн турнир", img: "https://hash-hedge-partner.vercel.app/assets/event-saopaulo.jpeg" },
      { flag: "🇷🇺", city: "Москва",    year: "2026",          role: "Организатор", title: "Награждение Топ-партнёров",      img: "https://hash-hedge-partner.vercel.app/assets/event-award.jpg" }
    ];
    const Card = ({ ev, big }) => _e("div", {
      style: { position: "relative", aspectRatio: big ? "2.4 / 1" : "1 / 1.05", borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", background: "#151517" }
    },
      _e("div", { style: { position: "absolute", inset: 0, backgroundImage: `url(${ev.img})`, backgroundSize: "cover", backgroundPosition: "center" } }),
      _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.88) 100%)", pointerEvents: "none" } }),
      _e("div", { style: { position: "absolute", top: 14, left: 14, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 100, fontSize: 12, fontWeight: 600, color: "#fff" } },
        _e("span", { style: { fontSize: 14 } }, ev.flag),
        _e("span", null, ev.city)
      ),
      _e("div", { style: { position: "absolute", top: 14, right: 14, padding: "6px 12px", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 100, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" } }, ev.year),
      _e("div", { style: { position: "absolute", bottom: big ? 26 : 18, left: big ? 26 : 18, right: big ? 26 : 18, color: "#fff" } },
        ev.role && _e("div", { style: { display: "inline-block", fontSize: 10, fontWeight: 800, color: "#fcd535", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 } }, ev.role),
        _e("div", { style: { fontSize: big ? 28 : 18, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em", maxWidth: big ? 600 : "100%" } }, ev.title)
      )
    );
    return _e("section", { id: "events", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { marginBottom: 48 } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
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
        // 1 hero card сверху + 3 в ряд снизу
        _e(Reveal, { delay: "1" },
          _e("div", { style: { marginBottom: 18 } }, _e(Card, { ev: events[0], big: true }))
        ),
        _e("div", { className: "hh-events-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 } },
          events.slice(1).map((ev, i) => _e(Reveal, { key: i, delay: String(i + 2) }, _e(Card, { ev, big: false })))
        )
      )
    );
  }

  // ============================================================================
  // TELEGRAM COMMUNITY (закрытый чат для партнёров)
  // ============================================================================
  function TelegramCommunity() {
    // Каналы как на скрине-эталоне партнёрской программы Hash Hedge Partner | CIS
    const channels = [
      { ic: "#",  iconBg: "#3a4554", name: "Новости 📩",      sub: "Новый личный кабинет партнёра…",      time: "ВТ"     },
      { ic: "🎬", iconBg: "#3a4554", name: "Контент",         sub: "Queen Prop: Готово, и вы пожалуйста 😊", time: "ВС", unread: 29 },
      { ic: "📣", iconBg: "#3a4554", name: "Чат партнёров",   sub: "Друзья, всем привет! Напоминаем…",     time: "ПТ", unread: 13 },
      { ic: "⚡", iconBg: "#c5984a", name: "Акции",           sub: "Flash Sale на Hash Hedge: 28–29 мая",   time: "ЧТ", unread: 6 },
      { ic: "📝", iconBg: "#3a4554", name: "Промо материалы", sub: "обновили баннеры для сторис",          time: "сейчас", unread: 1, active: true }
    ];
    return _e("section", { id: "telegram", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-tg-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } },

          // LEFT — title + description + 2x2 KPI
          _e(Reveal, null,
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Telegram-сообщество"
              ),
              _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 22 } },
                "Партнёрское ", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "сообщество"), " Hash Hedge"
              ),
              _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 32, maxWidth: 540 } },
                "Закрытый Telegram-чат для партнёров: новости раньше всех, эксклюзивные промо-материалы, акции и прямое общение с командой."
              ),
              _e("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 22 } },
                [
                  ["332+",    "Участников"],
                  ["146",     "Сейчас онлайн"],
                  ["<2 мин",  "Ответ менеджера"],
                  ["24/7",    "Чат открыт всегда"]
                ].map(([v, l], i) => _e("div", { key: i, style: { padding: "20px 22px", background: "#151517", border: "1px solid var(--line)", borderRadius: 14 } },
                  _e("div", { style: { fontSize: 32, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6 } }, v),
                  _e("div", { style: { fontSize: 11, color: "#a1a0a4", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" } }, l)
                ))
              ),
              _e("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#a1a0a4", lineHeight: 1.5 } },
                _e("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#4ade80" } }),
                "Закрытое сообщество — доступ открывается после регистрации партнёра через менеджера"
              )
            )
          ),

          // RIGHT — iPhone mockup как на скрине-эталоне (dark theme, notch, full UI)
          _e(Reveal, { delay: "2" },
            _e("div", { style: { maxWidth: 380, margin: "0 auto", position: "relative" } },
              _e("div", {
                style: {
                  background: "#08080a",
                  borderRadius: 48, overflow: "hidden",
                  padding: 8,
                  boxShadow: "0 60px 120px -20px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.05)"
                }
              },
                _e("div", { style: { background: "#0e0e10", borderRadius: 40, overflow: "hidden", position: "relative" } },
                  // Notch (Dynamic Island)
                  _e("div", { style: { position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 110, height: 28, background: "#000", borderRadius: 20, zIndex: 2 } }),
                  // Status bar
                  _e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 28px 8px", color: "#fff", fontSize: 13, fontWeight: 600, position: "relative", zIndex: 1 } },
                    _e("span", null, "16:48"),
                    _e("div", { style: { display: "inline-flex", gap: 6, alignItems: "center", opacity: 0.85 } },
                      _e("svg", { width: 16, height: 12, viewBox: "0 0 16 12", style: { fill: "#fff" } },
                        _e("path", { d: "M0 9h3v3H0V9zm5-3h3v6H5V6zm5-3h3v9h-3V3z", style: { fill: "#fff" } })
                      ),
                      _e("svg", { width: 16, height: 12, viewBox: "0 0 16 12", style: { fill: "#fff" } },
                        _e("path", { d: "M8 2C5.5 2 3.2 3 1.4 4.7l1.4 1.4C4.2 4.7 6 4 8 4s3.8.7 5.2 2.1l1.4-1.4C12.8 3 10.5 2 8 2zm0 4c-1.4 0-2.7.5-3.7 1.4l1.4 1.4C6.3 8.3 7.1 8 8 8s1.7.3 2.3.8l1.4-1.4C10.7 6.5 9.4 6 8 6zm0 4l-1.4 1.4c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6L8 10z", style: { fill: "#fff" } })
                      ),
                      _e("svg", { width: 22, height: 12, viewBox: "0 0 22 12", style: { fill: "#fff" } },
                        _e("rect", { x: 0, y: 1, width: 18, height: 10, rx: 2, style: { fill: "none", stroke: "#fff", strokeWidth: 1, opacity: 0.6 } }),
                        _e("rect", { x: 2, y: 3, width: 14, height: 6, style: { fill: "#fff" } }),
                        _e("rect", { x: 19, y: 4, width: 1.5, height: 4, style: { fill: "#fff", opacity: 0.6 } })
                      )
                    )
                  ),
                  // Header
                  _e("div", { style: { padding: "16px 14px 12px", display: "grid", gridTemplateColumns: "44px 1fr 44px", gap: 8, alignItems: "center" } },
                    _e("div", { style: { width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#5BB5E8", fontSize: 22 } }, "‹"),
                    _e("div", { style: { textAlign: "center" } },
                      _e("div", { style: { fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 } }, "Hash Hedge Partner | CIS"),
                      _e("div", { style: { fontSize: 12, color: "#7d8590" } },
                        "332 участника, ", _e("span", { style: { color: "#4ade80" } }, "146 в сети")
                      )
                    ),
                    _e("div", { style: { width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18 } }, "···")
                  ),
                  // Search
                  _e("div", { style: { padding: "8px 14px 14px" } },
                    _e("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "rgba(255,255,255,0.06)", borderRadius: 12, color: "#7d8590", fontSize: 15 } },
                      _e("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#7d8590", strokeWidth: 2, strokeLinecap: "round" } },
                        _e("circle", { cx: 11, cy: 11, r: 7, style: { fill: "none", stroke: "#7d8590" } }),
                        _e("path", { d: "M21 21l-4.35-4.35", style: { stroke: "#7d8590" } })
                      ),
                      "Поиск"
                    )
                  ),
                  // Channels list — телефон удлинён (без maxHeight), после "Промо материалы" пустое пространство
                  _e("div", { style: { display: "flex", flexDirection: "column", borderTop: "0.5px solid rgba(255,255,255,0.06)" } },
                    channels.map((ch, i) => _e("div", { key: i,
                      style: {
                        display: "grid", gridTemplateColumns: "52px 1fr auto", gap: 10, alignItems: "center",
                        padding: "10px 14px",
                        background: ch.active ? "rgba(43,156,222,0.16)" : "transparent",
                        borderBottom: "0.5px solid rgba(255,255,255,0.04)"
                      }
                    },
                      _e("div", { style: { width: 44, height: 44, borderRadius: "50%", background: ch.iconBg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#fff" } }, ch.ic),
                      _e("div", { style: { minWidth: 0 } },
                        _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, ch.name),
                        _e("div", { style: { fontSize: 12, color: "#7d8590", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, ch.sub)
                      ),
                      _e("div", { style: { textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 } },
                        _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: ch.active ? "#5BB5E8" : "#7d8590" } },
                          ch.pinned && _e("svg", { width: 10, height: 10, viewBox: "0 0 24 24", style: { fill: "#7d8590" } }, _e("path", { d: "M12 2L8 6h3v6l-5 4v2h12v-2l-5-4V6h3L12 2z", style: { fill: "#7d8590" } })),
                          ch.time
                        ),
                        ch.unread && _e("span", { style: { display: "inline-block", minWidth: 22, padding: "2px 7px", background: "#5BB5E8", color: "#fff", borderRadius: 100, fontSize: 11, fontWeight: 700, textAlign: "center" } }, ch.unread),
                        !ch.unread && ch.pinned && _e("span", { style: { color: "#3a4554", fontSize: 14 } }, "☆")
                      )
                    )),
                    // Пустое пространство снизу — имитация конца списка чатов
                    _e("div", { style: { minHeight: 180 } })
                  )
                )
              )
            )
          )
        )
      )
    );
  }

  // ============================================================================
  // SUPPORT
  // ============================================================================
  // Support — структура v2.7 (photo card + chat mockup + 2 CTA-карточки), но стили из главной RU:
  // background glow effects, типографика eyebrow/H2, цветовая палитра card/line.
  function Support() {
    return _e("section", { id: "support", className: "hh-support-section",
      style: { padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }
    },
      // фон-эффекты с главной RU: фейд сверху, два glow, нижний радиальный жёлтый glow
      _e("div", { "aria-hidden": true, style: { position: "absolute", top: 0, left: 0, right: 0, height: 280, background: "linear-gradient(180deg, #0a0a0e 0%, rgba(13,13,16,0.55) 35%, transparent 100%)", pointerEvents: "none", zIndex: 0 } }),
      _e("div", { "aria-hidden": true,
        style: { position: "absolute", width: 800, height: 800, top: "10%", left: "-10%", background: "#4ade80", filter: "blur(120px)", opacity: 0.05, borderRadius: "50%", pointerEvents: "none", zIndex: 0 } }),
      _e("div", { "aria-hidden": true,
        style: { position: "absolute", width: 600, height: 600, bottom: "-30%", right: "-10%", background: "#fcd535", filter: "blur(120px)", opacity: 0.04, borderRadius: "50%", pointerEvents: "none", zIndex: 0 } }),
      _e("div", { "aria-hidden": true, style: { position: "absolute", bottom: 0, left: 0, right: 0, height: 360, background: "radial-gradient(ellipse 90% 100% at 70% 100%, rgba(252,213,53,0.1) 0%, rgba(252,213,53,0.04) 35%, rgba(252,213,53,0) 70%)", pointerEvents: "none", zIndex: 0 } }),
      _e("style", null, `
        @keyframes support-status-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124,216,160,0.55); }
          70%      { box-shadow: 0 0 0 14px rgba(124,216,160,0);   }
        }
      `),
      _e("div", { className: "container", style: { position: "relative", zIndex: 1 } },
        // HEADER — eyebrow + H2 слева, intro справа (как на главной)
        _e("div", { className: "hh-support-header", style: { display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 } },
          _e(Reveal, null,
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 20 }
              },
                _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 10px #4ade80" } }),
                "ПОДДЕРЖКА 24/7"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Мы всегда", _e("br", null),
                _e("span", { style: { color: "#fcd535" } }, "на связи")
              )
            )
          ),
          _e(Reveal, { delay: "2" },
            _e("p", { style: { fontSize: 18, lineHeight: 1.55, color: "#a1a0a4", margin: 0 } },
              "Поддержка работает круглосуточно на ",
              _e("strong", { style: { color: "#f5f1e8" } }, "20+ языках"),
              ". Быстрый ответ на любой ваш вопрос."
            )
          )
        ),

        // MAIN 2-col: фото-карта (1fr) + чат-мокап (1.3fr) — структура v2.7
        _e("div", { className: "hh-support-grid", style: { display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 18, alignItems: "stretch" } },
          _e(Reveal, { delay: "1" },
            _e("div", { style: {
              position: "relative", height: "100%", minHeight: 540, borderRadius: 24, overflow: "hidden",
              background: "url(https://hash-hedge-partner.vercel.app/assets/manager.jpeg) center / cover, #1a1a1f",
              border: "1px solid var(--line)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)"
            } },
              _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.92) 100%)", pointerEvents: "none" } }),
              // ONLINE chip top-left (стилизован под главную)
              _e("div", { style: { position: "absolute", top: 20, left: 20, display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px", borderRadius: 999, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(124,216,160,0.4)", fontSize: 11, fontWeight: 800, color: "#9be0b6", letterSpacing: "0.14em", textTransform: "uppercase" } },
                _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#4ade80", animation: "support-status-pulse 1.8s ease-out infinite" } }),
                "Онлайн"
              ),
              // time pill top-right (стилизован под главную)
              _e("div", { style: { position: "absolute", top: 20, right: 20, padding: "10px 14px", borderRadius: 12, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", textAlign: "right" } },
                _e("div", { style: { fontFamily: "Onest, sans-serif", fontSize: 22, fontWeight: 800, color: "#fcd535", letterSpacing: "-0.02em", lineHeight: 1 } }, "1 мин 47 сек"),
                _e("div", { style: { fontSize: 10, color: "#6b6a70", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 } }, "Среднее время ответа")
              ),
              // bottom info — тексты v2.7 + типографика main RU
              _e("div", { style: { position: "absolute", left: 24, right: 24, bottom: 24 } },
                _e("div", { style: { fontSize: 11, color: "#fcd535", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 } }, "Личный менеджер партнёров"),
                _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: 14 } }, "Команда Hash Hedge"),
                _e("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } },
                  ["RU", "EN", "ES", "TR"].map(l => _e("span", { key: l,
                    style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", padding: "4px 9px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }
                  }, l)),
                  _e("span", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", padding: "4px 9px", borderRadius: 999, background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.18)", color: "#a1a0a4" } }, "+ ещё 18 в команде онлайн")
                )
              )
            )
          ),
          // Chat mockup — структура v2.7, цвета и border-radius под главную
          _e(Reveal, { delay: "2" },
            _e("div", { style: {
              background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), #151517",
              border: "1px solid var(--line)", borderRadius: 24, padding: 22,
              display: "flex", flexDirection: "column", minHeight: 540
            } },
              // header
              _e("div", { style: { display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, borderBottom: "1px solid var(--line)", marginBottom: 14 } },
                _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
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

        // 2 CTA-карточки (структура v2.7: Личный менеджер + Telegram), типографика главной RU
        _e(Reveal, { delay: "3" },
          _e("div", { className: "hh-sup-ctas", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 } },
            _e("a", { href: "#cta",
              style: { display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", background: "#151517", border: "1px solid var(--line)", borderRadius: 14, textDecoration: "none", transition: "border-color .25s, transform .25s, background .25s", position: "relative", overflow: "hidden" },
              onMouseEnter: e => { e.currentTarget.style.borderColor = "#7cd8a0"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; },
              onMouseLeave: e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#151517"; }
            },
              _e("div", { style: { width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: "rgba(124, 216, 160, 0.15)", color: "#7cd8a0", display: "flex", alignItems: "center", justifyContent: "center" } },
                _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" },
                  _e("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }),
                  _e("circle", { cx: 12, cy: 7, r: 4, stroke: "currentColor", strokeWidth: 1.8 })
                )
              ),
              _e("div", { style: { flex: 1, minWidth: 0 } },
                _e("div", { style: { fontSize: 15, fontWeight: 700, color: "#f5f1e8", marginBottom: 4 } }, "Команда Hash Hedge"),
                _e("div", { style: { fontSize: 12, color: "#a1a0a4", lineHeight: 1.35 } }, "Закрепляется за партнёром после регистрации")
              ),
              _e("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", style: { color: "#7cd8a0", flexShrink: 0 } },
                _e("path", { d: "M3 7h8m0 0L7 3m4 4l-4 4", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" })
              )
            ),
            _e("a", { href: "https://t.me/hashhedge_affiliate", target: "_blank", rel: "noopener noreferrer",
              style: { display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", background: "#151517", border: "1px solid var(--line)", borderRadius: 14, textDecoration: "none", transition: "border-color .25s, transform .25s, background .25s" },
              onMouseEnter: e => { e.currentTarget.style.borderColor = "#5BB5E8"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; },
              onMouseLeave: e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#151517"; }
            },
              _e("div", { style: { width: 44, height: 44, borderRadius: 10, flexShrink: 0, background: "rgba(43, 156, 222, 0.15)", color: "#5BB5E8", display: "flex", alignItems: "center", justifyContent: "center" } },
                _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24", fill: "currentColor" },
                  _e("path", { d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z" })
                )
              ),
              _e("div", { style: { flex: 1, minWidth: 0 } },
                _e("div", { style: { fontSize: 15, fontWeight: 700, color: "#f5f1e8", marginBottom: 4 } }, "@hashhedge_affiliate"),
                _e("div", { style: { fontSize: 12, color: "#a1a0a4", lineHeight: 1.35 } }, "Задай любой вопрос о партнёрской программе")
              ),
              _e("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", style: { color: "#5BB5E8", flexShrink: 0 } },
                _e("path", { d: "M3 7h8m0 0L7 3m4 4l-4 4", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" })
              )
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
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
            }, "FAQ"),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } }, "Часто задаваемые вопросы"),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4" } }, "Всё что нужно знать о партнёрской программе.")
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 } },
            items.map((it, i) => _e("div", {
              key: i,
              style: { background: "#151517", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }
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
          _e("div", { className: "hh-faq-cta",
            style: {
              maxWidth: 820, margin: "48px auto 0", padding: "28px 32px",
              background: "#151517", border: "1px solid rgba(43,156,222,0.4)", borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap"
            }
          },
            _e("div", { style: { flex: "1 1 320px", minWidth: 0 } },
              _e("div", { style: { fontSize: 22, fontWeight: 700, color: "#f5f1e8", marginBottom: 8 } },
                "Остались ", _e("span", { style: { color: "#fcd535" } }, "вопросы?")
              ),
              _e("div", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.5, margin: 0 } },
                "Напиши в партнёрскую поддержку в Telegram — поможем и ответим на все вопросы по партнёрской программе."
              )
            ),
            _e("a", { href: "https://t.me/hashhedge_affiliate", target: "_blank", rel: "noopener noreferrer", className: "hh-btn-tg",
              style: {
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "16px 28px", borderRadius: 14, fontSize: 16, fontWeight: 700,
                textDecoration: "none", color: "#fff", whiteSpace: "nowrap", flexShrink: 0,
                boxShadow: `0 12px 32px -8px ${TG_BLUE_DARK}`
              }
            },
              _e("svg", { width: 20, height: 20, viewBox: "0 0 24 24", style: { fill: "#fff" } },
                _e("path", { d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z", style: { fill: "#fff" } })
              ),
              _e("span", { style: { color: "#fff" } }, "Поддержка в Telegram")
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
    // Растущий жёлтый chart на фоне — теперь плавная Catmull-Rom-like кривая (через C)
    const chartPath = useMemo(() => {
      const N = 28;
      const pts = [];
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * 1200;
        const t = i / (N - 1);
        // меньше шума → более плавная линия
        const noise = Math.sin(i * 0.55) * 6 + Math.cos(i * 0.31) * 4;
        const trend = 230 - t * 195;
        pts.push([x, trend + noise]);
      }
      // Smooth path через cubic Bezier между точками
      let d = `M ${pts[0][0]} ${pts[0][1]}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] || pts[i];
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const p3 = pts[i + 2] || p2;
        const c1x = p1[0] + (p2[0] - p0[0]) / 6;
        const c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6;
        const c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
      }
      return d;
    }, []);
    // Точки для мерцания вдоль линии графика
    const dotsAlongLine = useMemo(() => {
      const N = 28;
      const result = [];
      // выбираем каждую 4-ю точку для мерцания
      for (let i = 2; i < N; i += 4) {
        const x = (i / (N - 1)) * 1200;
        const t = i / (N - 1);
        const noise = Math.sin(i * 0.55) * 6 + Math.cos(i * 0.31) * 4;
        const y = 230 - t * 195 + noise;
        result.push({ x, y, delay: (i % 7) * 0.35 });
      }
      return result;
    }, []);
    return _e("section", { id: "cta", style: { padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" } },
      _e("style", null, `
        @keyframes hh-cta-dot-blink {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%      { opacity: 0.25; transform: scale(0.7); }
        }
        @keyframes hh-cta-dot-glow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.05; transform: scale(1.6); }
        }
      `),
      _e("div", { className: "container", style: { position: "relative", zIndex: 1 } },
        _e(Reveal, null,
          // Shape с лёгким градиентом — без сильной жёлтой тени
          _e("div", {
            style: {
              position: "relative", overflow: "hidden",
              borderRadius: 28,
              padding: "80px 40px",
              background: "linear-gradient(135deg, rgba(252,213,53,0.06) 0%, rgba(252,213,53,0.02) 40%, rgba(11,11,14,0.65) 100%), #0f0f12",
              border: "1px solid rgba(252,213,53,0.18)",
              boxShadow: "0 30px 70px -30px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)"
            }
          },
            // Chart background — тонкая линия + мерцающие точки на ней
            _e("div", { "aria-hidden": true, style: { position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 } },
              _e("svg", { width: "100%", height: "100%", viewBox: "0 0 1200 300", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
                _e("defs", null,
                  _e("linearGradient", { id: "bigctaFill", x1: "0", y1: "0", x2: "0", y2: "1" },
                    _e("stop", { offset: "0%", stopColor: "#fcd535", stopOpacity: 0.18 }),
                    _e("stop", { offset: "100%", stopColor: "#fcd535", stopOpacity: 0 })
                  )
                ),
                // area
                _e("path", { d: chartPath + " L 1200 300 L 0 300 Z", style: { fill: "url(#bigctaFill)" } }),
                // тонкая плавная линия
                _e("path", { d: chartPath, style: { stroke: "#fcd535", strokeWidth: 1.4, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: 0.85 } }),
                // мерцающие точки на линии графика
                dotsAlongLine.map((d, i) => _e("g", { key: "dot" + i },
                  _e("circle", { cx: d.x, cy: d.y, r: 6,
                    style: { fill: "rgba(252,213,53,0.55)", transformOrigin: `${d.x}px ${d.y}px`, animation: `hh-cta-dot-glow 2.4s ease-in-out ${d.delay}s infinite` } }),
                  _e("circle", { cx: d.x, cy: d.y, r: 2.4,
                    style: { fill: "#fcd535", transformOrigin: `${d.x}px ${d.y}px`, animation: `hh-cta-dot-blink 2.4s ease-in-out ${d.delay}s infinite` } })
                )),
                // endpoint dot
                _e("circle", { cx: 1200, cy: 35, r: 3.5, style: { fill: "#fcd535" } }),
                _e("circle", { cx: 1200, cy: 35, r: 10, style: { fill: "rgba(252,213,53,0.18)" } })
              )
            ),
            // Затемнение фона между графиком и текстом для читаемости
            _e("div", { "aria-hidden": true, style: {
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse 65% 70% at 50% 55%, rgba(11,11,14,0.78) 0%, rgba(11,11,14,0.55) 45%, rgba(11,11,14,0) 80%)"
            } }),

            _e("div", { style: { position: "relative", zIndex: 1, textAlign: "center" } },
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid rgba(252,213,53,0.30)", background: "rgba(11,11,14,0.55)", backdropFilter: "blur(10px)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fcd535", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Готов начать?"
              ),
              // Заголовок в 2 строки
              _e("h2", { style: { fontSize: "clamp(38px, 5.6vw, 64px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 28 } },
                "Начни зарабатывать", _e("br", null),
                "с ", _e("span", { style: { color: "#fcd535", textShadow: "0 0 36px rgba(252,213,53,0.45)" } }, "Hash Hedge")
              ),
              _e("div", { style: { display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" } },
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary",
                  style: { textDecoration: "none" }
                }, "Зарегистрироваться"),
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-ghost",
                  style: { textDecoration: "none" }
                }, "Войти в кабинет")
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
  // Footer — 1:1 как на главной русской hashhedge-react-app-ru.js (Footer @ ~line 10826).
  function Footer() {
    const columns = [
      { t: "Продукт", l: [
        { label: "Челленджи",              href: "https://www.hashhedge.com/ru#challenge" },
        { label: "Партнёрская программа",  href: "https://www.hashhedge.com/affiliateprogram/ru" },
        { label: "Блог",                   href: "https://www.hashhedge.com/blog/ru" },
        { label: "Руководство",            href: "https://hashhedge.gitbook.io/hashhedge-user-guide" }
      ]},
      { t: "О нас", l: [
        { label: "Поддержка", href: "https://t.me/hashhedgesupportbot" },
        { label: "FAQ",       href: "https://www.hashhedge.com/faq/ru" },
        { label: "Вакансии",  href: "https://www.hashhedge.com/vacancies" }
      ]},
      { t: "Документы", l: [
        { label: "Политика конфиденциальности", href: "https://www.hashhedge.com/privacy-policy" },
        { label: "Условия использования",       href: "https://www.hashhedge.com/terms-and-conditions" },
        { label: "Коммерческие условия",        href: "https://www.hashhedge.com/commercial-terms" },
        { label: "Партнёрская политика",        href: "https://www.hashhedge.com/affiliate-politics" }
      ]}
    ];
    const partners = [
      { name: "HyperPay",      style: { fontStyle: "italic", fontWeight: 900 } },
      { name: "Cipherbc",      style: { fontWeight: 700, letterSpacing: "-0.05em" } },
      { name: "TradingView",   style: { fontWeight: 800 } },
      { name: "CoinMarketCap", style: { fontWeight: 700 } },
      { name: "Crypto Banter", style: { fontWeight: 900, textTransform: "uppercase", fontSize: 16, lineHeight: 1.05 } }
    ];
    return _e("footer", { style: { padding: "88px 0 64px", background: "var(--bg-elev)", borderTop: "1px solid var(--line)" } },
      _e("div", { className: "container", style: { maxWidth: 1180 } },
        _e("div", { className: "hh-footer-grid", style: { display: "grid", gridTemplateColumns: "1.25fr repeat(3, 1fr)", gap: 86, marginBottom: 92 } },
          _e("div", { style: { paddingTop: 4 } },
            _e(HashHedgeLogo, null),
            _e("p", { style: { fontSize: 15, color: "var(--fg-low)", marginTop: 44, lineHeight: 1.45, maxWidth: 260 } },
              "Hash Hedge — платформа для проп-трейдинга: торгуйте криптовалютой и TradFi-активами. Управляйте капиталом до $150K."
            )
          ),
          columns.map(col => _e("div", { key: col.t },
            _e("div", { style: { fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em", color: "rgba(238,238,243,0.28)", textTransform: "uppercase", marginBottom: 26 } }, col.t),
            _e("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 } },
              col.l.map(li => _e("li", { key: li.label },
                _e("a", { href: li.href, target: "_blank", rel: "noopener",
                  style: { fontSize: 15, color: "rgba(238,238,243,0.72)", textDecoration: "none" }
                }, li.label)
              ))
            )
          ))
        ),
        _e("div", { className: "hh-footer-partners", style: { display: "flex", alignItems: "center", gap: 54, marginBottom: 116, flexWrap: "wrap" } },
          _e("div", { style: { fontSize: 14, fontWeight: 800, color: "rgba(238,238,243,0.8)" } }, "Наши партнёры"),
          _e("div", { style: { display: "flex", alignItems: "center", gap: 42, flexWrap: "wrap" } },
            partners.map((p, i) => _e("div", {
              key: p.name,
              style: Object.assign({ color: "#fff", opacity: i === partners.length - 1 ? 0.65 : 0.95, fontSize: i === 1 ? 25 : 18, fontFamily: "Onest, sans-serif" }, p.style)
            }, p.name))
          )
        ),
        _e("div", { style: { textAlign: "center" } },
          _e("div", { style: { fontSize: 16, color: "rgba(238,238,243,0.86)", marginBottom: 34 } }, "© 2026 HashHedge. All Right Reserved."),
          _e("p", { style: { fontSize: 12, lineHeight: 1.35, color: "rgba(238,238,243,0.36)", maxWidth: 1050, margin: "0 auto" } },
            "Вся информация на этом сайте предназначена исключительно для ознакомления с торговлей на финансовых рынках и ни в коей мере не является конкретной инвестиционной, бизнес- или иной рекомендацией относительно торговли инвестиционными инструментами."
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
      _e(TelegramCommunity, null),
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
      @keyframes hh-globe-pulse {
        0%, 100% { r: 2.4; opacity: 1; }
        50%      { r: 4.2; opacity: 0.3; }
      }
      @keyframes hh-payout-in {
        from { opacity: 0; transform: translateY(-12px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      #hashhedge-root .hh-no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      #hashhedge-root .hh-no-scrollbar::-webkit-scrollbar { display: none; }
      @keyframes hh-payout-shift {
        from { opacity: 0.5; transform: translateY(-6px); }
        to   { opacity: 1; transform: translateY(0); }
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
