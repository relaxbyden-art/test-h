(function(){
  const { useEffect, useRef, useState, useMemo } = React;

  // Shared Funded traders counter — та же детерминированная формула, что на главной RU
  // (LivePayoutsTable), чтобы число «Funded-трейдеров» совпадало с основным сайтом.
  function _hhTraders() {
    function h(d, s) {
      let x = ((d|0) ^ ((s*2654435761)|0)) >>> 0;
      x = ((x + 0x7ed55d16) + (x << 12)) >>> 0;
      x = ((x ^ 0xc761c23c) ^ (x >>> 19)) >>> 0;
      x = ((x + 0x165667b1) + (x << 5)) >>> 0;
      x = ((x + 0xd3a2646c) ^ (x << 9)) >>> 0;
      x = ((x + 0xfd7046c5) + (x << 3)) >>> 0;
      x = ((x ^ 0xb55a4f09) ^ (x >>> 16)) >>> 0;
      return x / 4294967295;
    }
    function dt(i) {
      const w = new Date(i * 86400000).getUTCDay();
      const we = (w === 0 || w === 6);
      const r = h(i, 2);
      return we ? 2 + Math.floor(r * 3) : 3 + Math.floor(r * 6);
    }
    const BD = Math.floor(Date.UTC(2026, 4, 28) / 86400000);
    const now = Date.now();
    const cd = Math.floor(now / 86400000);
    let c = 0;
    for (let i = 0; i < Math.max(0, cd - BD); i++) c += dt(BD + i);
    const f = Math.min(1, (now - cd * 86400000) / 86400000);
    return 5120 + c + Math.floor(dt(cd) * f);
  }

  // Хук: возвращает true когда элемент попал в viewport один раз (триггерит анимации появления).
  function useInView(ref, opts) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
      if (!ref.current) return;
      if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
      const obs = new IntersectionObserver(entries => {
        if (entries[0] && entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      }, opts || { threshold: 0.2 });
      obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);
    return inView;
  }
  const _e = React.createElement;
  const F = React.Fragment;

  // ============================================================================
  // PRIMITIVES (Logo, Reveal, Counter, TPStar, HHCheck)
  // ============================================================================
  function HashHedgeLogo({ size = 28, wordmarkColor = "var(--fg)" }) {
    const h = size;
    return _e("a", { href: "https://www.hashhedge.com/ua", className: "hh-logo",
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
    // v11.7: меню обновлено под Vercel-структуру (1-в-1 с английским сайтом, на русском)
    // About → How it works → Earnings → FAQ → Trading challenge ↗
    const nav = [
      { l: "Про програму",     h: "#about-program" },
      { l: "Як працює",    h: "#how" },
      { l: "Дохід",           h: "#calc" },
      { l: "FAQ",             h: "#faq" },
      { l: "Купити челендж", h: "https://hashhedge.com/", external: true }
    ];
    const langs = [
      { code: "EN", flag: "🇬🇧", label: "English",          href: "https://www.hashhedge.com/affiliateprogram" },
      { code: "DE", flag: "🇩🇪", label: "Deutsch",          href: "https://www.hashhedge.com/affiliateprogram/de" },
      { code: "PT", flag: "🇧🇷", label: "Português",        href: "https://www.hashhedge.com/affiliateprogram/pt" },
      { code: "FR", flag: "🇫🇷", label: "Française",        href: "https://www.hashhedge.com/affiliateprogram/fr" },
      { code: "ES", flag: "🇪🇸", label: "Español",          href: "https://www.hashhedge.com/affiliateprogram/es" },
      { code: "HI", flag: "🇮🇳", label: "हिन्दी",            href: "https://www.hashhedge.com/affiliateprogram/hi" },
      { code: "ID", flag: "🇮🇩", label: "Bahasa Indonesia", href: "https://www.hashhedge.com/affiliateprogram/in" },
      { code: "RU", flag: "🇷🇺", label: "Русский",          href: "https://www.hashhedge.com/affiliateprogram/ru" },
      { code: "UA", flag: "🇺🇦", label: "Український",      href: "#", current: true },
      { code: "KZ", flag: "🇰🇿", label: "Қазақша",          href: "https://www.hashhedge.com/affiliateprogram/kz" }
    ];
    return _e("nav", { className: "nav hh-nav-sticky",
      style: { position: "sticky", top: 0, zIndex: 100, background: "rgba(8,8,10,0.85)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }
    },
      _e("div", { className: "container nav-inner" },
        _e(HashHedgeLogo, null),
        _e("ul", null,
          nav.map(n => _e("li", { key: n.l },
            _e("a", Object.assign({ href: n.h }, n.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
              n.l, n.external && _e("span", { style: { marginLeft: 4, fontSize: "0.85em" } }, "↗")
            )
          ))
        ),
        _e("div", { style: { display: "flex", gap: 12, alignItems: "center" } },
          _e("a", { href: "https://partner.hashhedge.com", target: "_blank", rel: "noopener",
            className: "nav-cta-desktop",
            style: { fontSize: 14, color: "var(--fg-muted)", padding: "10px 14px" }
          }, "Увійти"),
          _e("a", { href: "https://partner.hashhedge.com", target: "_blank", rel: "noopener",
            className: "btn btn-primary nav-cta-desktop"
          }, "Стати партнером"),
          // Language switcher — те же классы что на главной
          _e("div", { className: "hh-lang-switcher", ref: langRef },
            _e("button", {
              type: "button",
              className: "hh-lang-trigger",
              onClick: () => setLangOpen(v => !v),
              "aria-expanded": langOpen,
              "aria-label": "Вибрати мову"
            },
              _e("span", null, "🇺🇦"),
              _e("b", null, "UA"),
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
            "aria-label": "Відкрити меню"
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
    return _e("div", { "aria-hidden": true, className: "hh-hero-candles",
      style: { position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }
    },
      // Background grid — крупные ровные квадраты 64×64 на «жёстком» SVG-паттерне (без дробных пикселей).
      // Используем inline SVG как фон — гарантирует ровные линии независимо от ширины экрана.
      _e("div", { style: { position: "absolute", inset: 0, opacity: 0.55,
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\'><rect width=\'64\' height=\'64\' fill=\'none\'/><path d=\'M64 0H0V64\' fill=\'none\' stroke=\'rgba(255,255,255,0.075)\' stroke-width=\'1\'/></svg>")',
        backgroundSize: "64px 64px",
        backgroundPosition: "0 0",
        backgroundRepeat: "repeat",
        maskImage: "radial-gradient(ellipse 95% 85% at 50% 50%, #000 45%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 50% 50%, #000 45%, transparent 95%)"
      } }),
      // свечи и MA — wrapper с собственной прозрачностью, чтобы grid остался ярким
      _e("div", { style: { position: "absolute", inset: 0, opacity: 0.42 } },
        // тонкие горизонтальные «уровни» поверх сетки
        _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
          [10, 25, 40, 55, 70, 85].map((y, i) => _e("line", { key: "h" + i, x1: 0, x2: 100, y1: y, y2: y, style: { stroke: "rgba(255,255,255,0.10)", strokeWidth: 0.12 } }))
        ),
        // свечи
        _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
          candles.norm.map((c, i) => {
            const x = i * STEP + STEP * 0.225;
            const cx = x + W / 2;
            const color = c.up ? "#4ade80" : "#ff4b5c";
            const top = Math.min(c.o, c.c);
            const bot = Math.max(c.o, c.c);
            return _e("g", { key: i },
              _e("line", { x1: cx, x2: cx, y1: c.h, y2: c.l, style: { stroke: color, strokeWidth: 0.22, opacity: 0.95 } }),
              _e("rect", { x, y: top, width: W, height: Math.max(0.5, bot - top), style: { fill: color, opacity: 0.95 } })
            );
          })
        ),
        // yellow MA line
        _e("svg", { width: "100%", height: "100%", viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
          _e("path", { d: maPath, style: { stroke: "#fcd535", strokeWidth: 0.45, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", filter: "drop-shadow(0 0 1px rgba(252,213,53,0.5))" } })
        )
      ),
      // Затемнение под текстом — radial-gradient с тёмным центром слева, где находится H1+бейдж+кнопки
      _e("div", { style: {
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 55% 70% at 28% 50%, rgba(8,8,10,0.88) 0%, rgba(8,8,10,0.65) 35%, rgba(8,8,10,0.20) 65%, rgba(8,8,10,0) 85%)"
      } }),
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
      { flag: "🇷🇺", name: "Сергій",     city: "Москва",       amt: 1850 },
      { flag: "🇰🇿", name: "Аділь",      city: "Алмати",       amt: 1240 },
      { flag: "🇺🇦", name: "Олег",       city: "Київ",         amt: 1670 },
      { flag: "🇬🇪", name: "Nino",       city: "Тбілісі",      amt: 980  },
      { flag: "🇹🇷", name: "Cem",        city: "Istanbul",     amt: 1420 },
      { flag: "🇷🇺", name: "Анна",       city: "СПб",          amt: 2310 },
      { flag: "🇰🇿", name: "Бахит",      city: "Астана",       amt: 1390 },
      { flag: "🇺🇦", name: "Лариса",     city: "Одеса",        amt: 1130 },
      { flag: "🇷🇺", name: "Ігор",      city: "Казань",       amt: 760  },
      { flag: "🇬🇪", name: "Гіоргі",     city: "Батумі",       amt: 1280 },
      { flag: "🇹🇷", name: "Mehmet",     city: "Анкара",       amt: 890  },
      { flag: "🇷🇺", name: "Дмитро",    city: "Новосибірськ",  amt: 2080 },
      { flag: "🇰🇿", name: "Айгуль",     city: "Шимкент",      amt: 1050 },
      { flag: "🇺🇦", name: "Анастасія",  city: "Львів",        amt: 1380 },
      { flag: "🇷🇺", name: "Артур",      city: "Єкатеринбург", amt: 1620 }
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

    // Анимированный счётчик "Зароблено за місяць" — растёт медленно по чуть-чуть
    const [earned, setEarned] = useState(12480);
    useEffect(() => {
      const id = setInterval(() => setEarned(e => e + Math.floor(20 + Math.random() * 40)), 9000);
      return () => clearInterval(id);
    }, []);
    // Mini sparkline данные — растущая кривая
    const sparkPts = [60, 55, 58, 50, 48, 42, 38, 32, 28, 22, 18, 12];
    const sparkPath = sparkPts.map((y, i) => `${i === 0 ? "M" : "L"} ${i / (sparkPts.length - 1) * 100} ${y}`).join(" ");
    return _e("div", { className: "hh-live-card hh-glass",
      style: {
        position: "relative",
        // iOS 26 «Liquid Glass» — нейтральный, без жёлтых тонов
        background: "rgba(28,28,31,0.48)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 26, overflow: "hidden",
        backdropFilter: "blur(28px) saturate(180%)", WebkitBackdropFilter: "blur(28px) saturate(180%)",
        boxShadow: [
          "0 30px 60px -16px rgba(0,0,0,0.55)",            // глубокая тень парения
          "inset 0 1px 0 rgba(255,255,255,0.18)",          // верхняя highlight линия
          "inset 0 -1px 0 rgba(0,0,0,0.20)",               // нижняя shadow линия
          "inset 0 0 0 1px rgba(255,255,255,0.04)"         // тонкая внутренняя ramp
        ].join(", ")
      }
    },
      // Specular блик сверху (Apple-style)
      _e("div", { "aria-hidden": true, style: {
        position: "absolute", top: 0, left: 0, right: 0, height: "45%",
        background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 100%)",
        pointerEvents: "none", zIndex: 1, borderRadius: "26px 26px 0 0"
      } }),
      // Inline-стили только для этой карточки — keyframes для pulse, shimmer, ripple
      _e("style", null, `
        @keyframes hh-live-pulse {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          70%      { transform: scale(1.15); box-shadow: 0 0 0 7px rgba(74,222,128,0); }
        }
        @keyframes hh-progress-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
        @keyframes hh-spark-dot {
          0%, 100% { transform: scale(1);   opacity: 1; }
          50%      { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes hh-num-glow {
          0%, 100% { text-shadow: 0 0 18px rgba(252,213,53,0.18); }
          50%      { text-shadow: 0 0 28px rgba(252,213,53,0.34); }
        }
        .hh-spark-dot { transform-origin: center; animation: hh-spark-dot 1.8s ease-in-out infinite; }
        .hh-flag-grid span { transition: transform .25s ease; }
        .hh-flag-grid span:hover { transform: scale(1.25) translateY(-1px); }
      `),
      // Top hairline accent — тонкая жёлтая линия по верхней кромке
      _e("div", { "aria-hidden": true, style: {
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: "linear-gradient(90deg, transparent, #fcd535 50%, transparent)",
        opacity: 0.7, pointerEvents: "none"
      } }),
      // Header — pulsing LIVE badge
      _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 22px", borderBottom: "1px solid rgba(255,255,255,0.05)" } },
        _e("span", { style: { fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#a1a0a4" } }, "Особистий кабінет"),
        _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", padding: "4px 10px", background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.45)", color: "#4ade80", borderRadius: 100 } },
          _e("span", { style: { width: 7, height: 7, borderRadius: "50%", background: "#4ade80", animation: "hh-live-pulse 1.6s ease-in-out infinite" } }),
          "LIVE"
        )
      ),

      // Earned + sparkline
      _e("div", { style: { padding: "20px 22px 22px", borderBottom: "1px solid rgba(255,255,255,0.05)" } },
        _e("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 } },
          _e("div", null,
            _e("div", { style: { fontSize: 10, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 } }, "Зароблено за місяць"),
            // Gradient text + лёгкое свечение
            _e("div", { style: {
              fontSize: 42, fontWeight: 800,
              backgroundImage: "linear-gradient(135deg, #fff 0%, #fcd535 65%, #f0b800 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              WebkitTextFillColor: "transparent", color: "transparent",
              letterSpacing: "-0.025em", lineHeight: 1,
              animation: "hh-num-glow 3s ease-in-out infinite",
              fontFamily: "Onest, sans-serif"
            } }, "$" + earned.toLocaleString("ru-RU").replace(/,/g, " ")),
            // +18% теперь жирнее, в виде «pill»
            _e("div", { style: {
              display: "inline-flex", alignItems: "center", gap: 5,
              marginTop: 12, padding: "5px 10px", borderRadius: 100,
              background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.32)",
              color: "#4ade80", fontSize: 11, fontWeight: 700, letterSpacing: "0.02em"
            } },
              _e("span", { style: { fontSize: 12, lineHeight: 1 } }, "↑"), "+18% за місяць"
            )
          ),
          _e("svg", { width: 120, height: 50, viewBox: "0 0 100 70", preserveAspectRatio: "none", style: { flexShrink: 0 } },
            _e("path", { d: sparkPath + ` L 100 70 L 0 70 Z`, style: { fill: "url(#sparkFill)", opacity: 0.55 } }),
            _e("path", { d: sparkPath, style: { stroke: "#fcd535", strokeWidth: 2.6, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", filter: "drop-shadow(0 0 6px rgba(252,213,53,0.5))" } }),
            _e("circle", { className: "hh-spark-dot", cx: 100, cy: 12, r: 3, style: { fill: "#fcd535", filter: "drop-shadow(0 0 6px #fcd535)" } }),
            _e("defs", null, _e("linearGradient", { id: "sparkFill", x1: "0", y1: "0", x2: "0", y2: "1" },
              _e("stop", { offset: "0%", stopColor: "#fcd535", stopOpacity: 0.6 }),
              _e("stop", { offset: "100%", stopColor: "#fcd535", stopOpacity: 0 })
            ))
          )
        ),
        // Level progress с shimmer-полоской
        _e("div", { style: { marginTop: 20 } },
          _e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "#a1a0a4", marginBottom: 8 } },
            _e("span", null, "Рівень 5 · ", _e("span", { style: { color: "#fcd535", fontWeight: 700 } }, "70%")),
            _e("span", null, "до Рів. 6 · 75%")
          ),
          _e("div", { style: { position: "relative", height: 8, borderRadius: 6, background: "rgba(255,255,255,0.06)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.04)" } },
            _e("div", { style: { position: "absolute", inset: "0 24% 0 0", background: "linear-gradient(90deg, #fcd535 0%, #f0b800 100%)", borderRadius: 6, boxShadow: "0 0 12px rgba(252,213,53,0.45)" } }),
            // Shimmer-полоска
            _e("div", { style: {
              position: "absolute", inset: "0 24% 0 0", borderRadius: 6, overflow: "hidden", pointerEvents: "none"
            } },
              _e("div", { style: {
                position: "absolute", top: 0, left: 0, bottom: 0, width: "30%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                animation: "hh-progress-shimmer 2.4s ease-in-out infinite"
              } })
            )
          )
        )
      ),

      // Last payouts — теперь каждая строка на отдельной плитке
      _e("div", { style: { padding: "18px 22px" } },
        _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 12 } }, "Останні виплати партнерам"),
        _e("div", { style: { position: "relative", minHeight: 146, overflow: "hidden", display: "flex", flexDirection: "column", gap: 8 } },
          payouts.map((p, i) => _e("div", {
            key: pIdx + "-" + i,
            style: {
              display: "grid", gridTemplateColumns: "30px 1fr auto", gap: 12, alignItems: "center",
              padding: "10px 12px",
              background: i === 0
                ? "linear-gradient(90deg, rgba(252,213,53,0.10) 0%, rgba(252,213,53,0.02) 100%)"
                : "rgba(255,255,255,0.025)",
              border: i === 0 ? "1px solid rgba(252,213,53,0.22)" : "1px solid rgba(255,255,255,0.05)",
              borderRadius: 10,
              animation: i === 0 ? "hh-payout-in .55s var(--ease-out, cubic-bezier(.22,1,.36,1)) both" : "hh-payout-shift .55s ease both"
            }
          },
            _e("span", { style: { fontSize: 22, lineHeight: 1 } }, p.flag),
            _e("div", null,
              _e("div", { style: { fontSize: 13, fontWeight: 700, color: "#f5f1e8" } }, `${p.name} · ${p.city}`)
            ),
            _e("span", { style: { color: "#fcd535", fontWeight: 800, fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", fontSize: 14, textShadow: i === 0 ? "0 0 8px rgba(252,213,53,0.4)" : "none" } }, `+$${p.amt.toLocaleString("ru-RU").replace(/,/g, " ")}`)
          ))
        ),
        // География выплат — mini block с интерактивными hover на флагах
        _e("div", { style: { marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.05)" } },
          _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } },
            _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#a1a0a4" } }, "Географія виплат"),
            _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 9px", borderRadius: 100, background: "rgba(252,213,53,0.08)", border: "1px solid rgba(252,213,53,0.25)", color: "#fcd535", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em" } }, "154 КРАЇНИ")
          ),
          _e("div", { className: "hh-flag-grid", style: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } },
            ["🇺🇸", "🇩🇪", "🇬🇧", "🇯🇵", "🇰🇷", "🇧🇷", "🇦🇪", "🇫🇷", "🇮🇳", "🇨🇦", "🇳🇱", "🇸🇬", "🇮🇹", "🇵🇱", "🇪🇸", "🇹🇷"].map((f, i) =>
              _e("span", { key: i, style: { fontSize: 18, opacity: 0.95, cursor: "default", display: "inline-block" } }, f)
            ),
            _e("span", { style: { fontSize: 12, color: "#a1a0a4", marginLeft: 4 } }, "+ ще 138")
          )
        )
      )
    );
  }

  // ============================================================================
  // HERO
  // ============================================================================
  function Hero() {
    // v11.0: новый Hero в стиле Vercel preview — full-width фон-фото (бизнес-силуэты на жёлтой
    // matrix-стене), большой H1 в 4 строки с акцентом на «зарабатывай вместе», 2 CTA,
    // ссылка «Рассчитать доход», блок Trustpilot снизу с 4-stat ряду.
    const HERO_BASE = (typeof window !== "undefined" && window.__HH_BASE__) || "https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@main/";
    return _e("section", {
      className: "hh-partner-hero",
      "data-no-glow": true,
      style: {
        position: "relative", overflow: "hidden",
        paddingTop: 80, paddingBottom: 60,
        minHeight: 720,
        background: "#08080a"
      }
    },
      // Фоновое фото — справа, full-width, с виньетированием слева для читаемости текста
      _e("div", { "aria-hidden": "true", className: "hh-partner-hero-bg", style: {
        position: "absolute", inset: 0,
        backgroundImage: `url("${HERO_BASE}assets/hero-partner-vercel.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none", zIndex: 0
      } }),
      // Тёмная виньетка слева — без неё текст плохо читается на жёлтой части фото
      _e("div", { "aria-hidden": "true", style: {
        position: "absolute", inset: 0,
        background: "linear-gradient(90deg, rgba(8,8,10,0.92) 0%, rgba(8,8,10,0.75) 35%, rgba(8,8,10,0.30) 60%, rgba(8,8,10,0.10) 100%)",
        pointerEvents: "none", zIndex: 1
      } }),
      // Затемнение сверху и снизу — особенно резкий fade-to-bg внизу чтобы не было ступеньки до AboutProgram
      _e("div", { "aria-hidden": "true", style: {
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(8,8,10,0.40) 0%, rgba(8,8,10,0) 22%, rgba(8,8,10,0) 40%, rgba(8,8,10,0.55) 65%, rgba(16,16,18,0.92) 88%, rgba(16,16,18,1) 100%)",
        pointerEvents: "none", zIndex: 1
      } }),
      // Плавный градиент-переход к следующей секции (убирает «ступеньку» между hero и блоком «О программе»)
      _e("div", { "aria-hidden": "true", style: {
        position: "absolute", left: 0, right: 0, bottom: 0, height: 300,
        // v12.4: затухание в var(--bg) #101012 (а не #08080a) — иначе видимая ступенька на стыке с «О программе»
        background: "linear-gradient(180deg, rgba(16,16,18,0) 0%, rgba(16,16,18,0.55) 42%, rgba(16,16,18,0.9) 76%, #101012 100%)",
        pointerEvents: "none", zIndex: 1
      } }),

      _e("div", { className: "container", style: { position: "relative", zIndex: 2 } },
        _e(Reveal, null,
          _e("div", { className: "hh-partner-hero-text", style: { maxWidth: 720 } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 28 }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Партнерська програма Hash Hedge"
            ),
            _e("h1", { className: "hh-partner-hero-h1",
              style: {
                fontSize: "clamp(36px, 4.8vw, 60px)",
                lineHeight: 1.05, fontWeight: 800,
                letterSpacing: "-0.03em", margin: "0 0 28px", color: "#f5f1e8"
              }
            },
              "Просувай", _e("br", null),
              "Hash Hedge", _e("br", null),
              _e("span", { style: { color: "#fcd535" } }, "і заробляй", _e("br", null), "разом з нами")
            ),
            _e("p", { className: "hh-partner-hero-sub", style: {
              fontSize: 20, color: "#cfcfd3", lineHeight: 1.45,
              marginBottom: 36, maxWidth: 560
            } },
              "Отримуй до ",
              _e("strong", { style: { color: "#f5f1e8", fontWeight: 800 } }, "80% комісії"),
              " з кожного залученого трейдера. Довічні нарахування, прозора статистика та швидкі виплати."
            ),
            _e("div", { className: "hh-partner-hero-cta", style: {
              display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28
            } },
              _e("a", { href: "https://partner.hashhedge.com/auth/signup/", className: "hh-btn-yellow",
                style: {
                  padding: "16px 32px", borderRadius: 100, fontSize: 15, fontWeight: 700,
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6
                }
              }, "Зареєструватися"),
              _e("a", { href: "https://partner.hashhedge.com/auth/login/",
                style: {
                  padding: "16px 32px", borderRadius: 100, fontSize: 15, fontWeight: 700,
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
                  border: "1.5px solid #fcd535", color: "#fcd535",
                  background: "transparent",
                  transition: "background .2s, transform .2s"
                },
                onMouseEnter: e => { e.currentTarget.style.background = "rgba(252,213,53,0.08)"; },
                onMouseLeave: e => { e.currentTarget.style.background = "transparent"; }
              }, "Увійти в особистий кабінет")
            ),
            _e("a", { href: "#calc", className: "hh-calc-link",
              style: {
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 14, fontWeight: 600, color: "#fcd535",
                textDecoration: "underline", textUnderlineOffset: 4, textDecorationThickness: 1
              }
            },
              _e("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none",
                style: { stroke: "#fcd535", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }
              },
                _e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                _e("path", { d: "M14 2v6h6" }),
                _e("path", { d: "M9 13h6" }),
                _e("path", { d: "M9 17h4" })
              ),
              "Розрахувати дохід"
            )
          )
        ),

        // Trustpilot + 4 stats row
        _e("div", { className: "hh-partner-hero-stats", style: {
          marginTop: 80,
          paddingTop: 28,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "grid",
          gridTemplateColumns: "1.9fr 1fr 1fr 1fr 1fr",
          gap: 24,
          alignItems: "center"
        } },
          // Trustpilot (v12.3: колонка шире + nowrap, чтобы эйбрау влезал в одну строку)
          _e("div", null,
            _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 8, whiteSpace: "nowrap" } }, "Співпрацюй з платформою, якій довіряють"),
            _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 10 } },
              _e("span", { style: { fontSize: 16, fontWeight: 800, color: "#f5f1e8" } }, "Excellent"),
              _e("div", { style: { display: "inline-flex", gap: 2 } },
                [1, 2, 3, 4].map(i => _e(TPStar, { key: i, size: 20 })),
                _e(TPStar, { size: 20, half: true })
              ),
              _e("a", { href: "https://trustpilot.com/review/hashhedge.com", target: "_blank", rel: "noopener noreferrer",
                style: { fontSize: 13, color: "#a1a0a4", textDecoration: "underline" }
              }, "Trustpilot")
            )
          ),
          // 5,100+
          _e("div", { style: { borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 22 } },
            _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, _e(Counter, { to: _hhTraders(), duration: 1600 })),
            _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 6 } }, "Funded-трейдерів")
          ),
          // $12M+
          _e("div", { style: { borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 22 } },
            _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, _e(Counter, { to: 12, prefix: "$", suffix: "M+", duration: 1400 })),
            _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 6 } }, "Виплачено трейдерам")
          ),
          // 4.4/5
          _e("div", { style: { borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 22 } },
            _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, _e(Counter, { to: 4.4, decimals: 1, suffix: "/5", duration: 1400 })),
            _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 6 } }, "Trustpilot")
          ),
          // 154
          _e("div", { style: { borderLeft: "1px solid rgba(255,255,255,0.08)", paddingLeft: 22 } },
            _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, _e(Counter, { to: 154, duration: 1500 })),
            _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 6 } }, "Країн обслуговування")
          )
        )
      )
    );
  }

  // ============================================================================
  // ABOUT THE PROGRAM (v11.0 — новая секция из Vercel)
  // ============================================================================
  function AboutProgram() {
    const cards = [
      { label: "Постійний дохід", t: "До 80% від прибутку Hash Hedge", b: "Забирай до 80% від прибутку Hash Hedge з кожної покупки. Реферал закріплюється за тобою довічно: привів один раз — отримуєш комісію з усіх наступних покупок." },
      { label: "Пасивний дохід", t: "Дохід з успішних трейдерів", b: "Отримуй відсоток від комісії Hash Hedge щоразу, коли залучений тобою трейдер виводить прибуток." },
      { label: "Партнерська мережа", t: "Суб-партнерська програма", b: "Запрошуй інших партнерів і отримуй відсоток від їхнього прибутку. 5% від доходу партнерів, яких ти залучив напряму, і 3% від залучених ними суб-партнерів." }
    ];
    return _e("section", { id: "about-program", "data-no-glow": true, style: { padding: "100px 0 100px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-about-head", style: {
            display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", marginBottom: 56
          } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Про програму"
              ),
              _e("h2", { style: { fontSize: "clamp(36px, 4.8vw, 60px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.03em", color: "#f5f1e8", margin: 0 } },
                "Найкращі партнерські", _e("br", null),
                "умови ", _e("span", { style: { color: "#fcd535" } }, "в індустрії.")
              )
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Hash Hedge надає крипто-трейдерам капітал до ", _e("strong", { style: { color: "#f5f1e8", whiteSpace: "nowrap" } }, "$150 000"),
              " для торгівлі. Просувай Hash Hedge, приводь рефералів і заробляй разом з нами на найщедріших умовах серед проп-компаній."
            )
          )
        ),

        _e("div", { className: "hh-about-grid", style: {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        } },
          cards.map((c, i) => _e(Reveal, { key: i, delay: String((i % 4) + 1) },
            // v12.2: карточки в стиле Vercel aff-fcard — жёлтая полоса сверху,
            // большой жёлтый лейбл с glow, sheen-блик и подъём на hover (CSS .hh-about-card)
            _e("div", { className: "hh-about-card", style: {
              position: "relative", overflow: "hidden",
              padding: "26px 24px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0)), #1C1C1F",
              border: "1px solid var(--line)",
              borderRadius: 16,
              height: "100%",
              display: "flex", flexDirection: "column"
            } },
              _e("span", { className: "hh-about-sheen", "aria-hidden": true }),
              _e("span", { "aria-hidden": true, style: {
                position: "absolute", top: 0, left: 24, right: 24, height: 2,
                background: "linear-gradient(90deg, transparent, #fcd535, transparent)", opacity: 0.5
              } }),
              _e("div", { className: "hh-about-label", style: {
                fontSize: 28, fontWeight: 800, color: "#fcd535",
                letterSpacing: "-0.02em", lineHeight: 1.05,
                textShadow: "0 0 26px rgba(252,213,53,0.35)",
                position: "relative", zIndex: 2, fontFamily: "Onest, sans-serif"
              } }, c.label),
              _e("h3", { style: { fontSize: 15, fontWeight: 700, color: "#f5f1e8", margin: "10px 0 0", lineHeight: 1.3, position: "relative", zIndex: 2 } }, c.t),
              _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, margin: "12px 0 0", position: "relative", zIndex: 2 } }, c.b)
            )
          ))
        )
      )
    );
  }

  // ============================================================================
  // MARQUEE (thin strip)
  // ============================================================================
  function Marquee() {
    // 4-stat strip — стиль из v7.0 (blur + плашка + иконки в жёлтых квадратах).
    // Иконки — чистые Lucide-style, без кривых path'ов.
    const stats = [
      {
        v: "2 500+", l: "партнерів",
        // person/users
        icon: _e(F, null,
          _e("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
          _e("circle", { cx: 9, cy: 7, r: 4, style: { fill: "none" } }),
          _e("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
          _e("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
        )
      },
      {
        v: "154", l: "країни",
        // globe
        icon: _e(F, null,
          _e("circle", { cx: 12, cy: 12, r: 10, style: { fill: "none" } }),
          _e("path", { d: "M2 12h20" }),
          _e("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
        )
      },
      {
        v: "$2.5M+", l: "виплачено партнерам",
        // wallet/dollar
        icon: _e(F, null,
          _e("rect", { x: 2, y: 6, width: 20, height: 14, rx: 2, style: { fill: "none" } }),
          _e("path", { d: "M2 10h20" }),
          _e("circle", { cx: 17, cy: 15, r: 1.5, style: { fill: "currentColor", stroke: "none" } })
        )
      },
      {
        v: "4.4/5", l: "оцінка на Trustpilot",
        // star
        icon: _e("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2", style: { fill: "none" } })
      }
    ];
    return _e("section", { "data-no-glow": true, style: { padding: "0 0 32px", background: "var(--bg)", marginTop: -8 } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-metrics-strip",
          style: {
            padding: "20px 24px",
            background: "rgba(15,15,18,0.6)",
            backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 18,
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16
          }
        },
          stats.map((s, i) => _e("div", { key: i,
            style: { display: "flex", alignItems: "center", gap: 14, padding: "0 14px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.08)" }
          },
            _e("div", { style: {
              width: 44, height: 44, borderRadius: 12,
              background: "rgba(252,213,53,0.10)",
              border: "1px solid rgba(252,213,53,0.30)",
              display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            } },
              _e("svg", { width: 22, height: 22, viewBox: "0 0 24 24",
                style: { fill: "none", stroke: "#fcd535", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }
              }, s.icon)
            ),
            _e("div", null,
              _e("div", { style: { fontSize: 24, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, s.v),
              _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 5 } }, s.l)
            )
          ))
        )
      )
    );
  }

  // ============================================================================
  // WHY PARTNER — 6 cards with unique mini-visualizations (3x2 grid)
  // ============================================================================
  function WhyPartner() {
    // matchMedia-based mobile detection — V3/V4/V8 рендерятся компактнее на mobile
    // вне зависимости от CSS-overrides и кеша.
    const [isMobile, setIsMobile] = useState(() =>
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 640px)").matches
    );
    useEffect(() => {
      if (typeof window === "undefined" || !window.matchMedia) return;
      const mql = window.matchMedia("(max-width: 640px)");
      const fn = e => setIsMobile(e.matches);
      if (mql.addEventListener) mql.addEventListener("change", fn);
      else mql.addListener(fn);
      return () => {
        if (mql.removeEventListener) mql.removeEventListener("change", fn);
        else mql.removeListener(fn);
      };
    }, []);

    // Each card has its own custom visual rendered at top
    // v12.6: + номер в углу, клетчатый фон и жёлтая подсветка hover — как у «Почему Hash Hedge» на главной RU
    const Card = ({ children, chip, title, titleAccent, body, n }) => _e("div", {
      className: "hh-why-card",
      style: {
        background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 18,
        padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%"
      }
    },
      _e("div", { className: "hh-why-card-vis",
        style: {
          padding: 22, paddingBottom: 18, minHeight: 220,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderBottom: "1px solid var(--line)",
          // Слабый жёлтый градиент сверху вниз поверх тёмного фона
          background: "linear-gradient(180deg, rgba(252,213,53,0.08) 0%, rgba(252,213,53,0.02) 50%, rgba(252,213,53,0) 100%), #0B0B0C",
          position: "relative", overflow: "hidden"
        }
      },
        // Клетчатая сетка на фоне (как .why-art-bg на главной RU)
        _e("div", { className: "hh-why-grid-bg", "aria-hidden": true, style: {
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%)",
          opacity: 0.7, pointerEvents: "none"
        } }),
        // Номер карточки в левом верхнем углу (как на главной RU)
        n && _e("div", { style: {
          position: "absolute", top: 14, left: 14,
          background: "rgba(16,16,18,0.82)", backdropFilter: "blur(8px)",
          color: "#fcd535", padding: "4px 10px", borderRadius: 6,
          fontSize: 11, fontWeight: 800, letterSpacing: "0.12em",
          fontFamily: "Akrobat, Onest, sans-serif", zIndex: 4
        } }, n),
        // Дополнительный clipper-обёрткой — гарантирует containment
        _e("div", { className: "hh-why-vis-clip",
          style: { position: "relative", zIndex: 1, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }
        }, children)
      ),
      _e("div", { className: "hh-why-card-body", style: { padding: "20px 22px 22px" } },
        // v11.0: жёлтый акцент у первого слова заголовка убран — текст весь белый
        _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 10, color: "#f5f1e8" } },
          title
        ),
        _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, body)
      )
    );

    // VIZ 1 — 80% bar
    const V1 = () => isMobile
      ? _e("div", { className: "hh-v1 hh-v1-mobile", style: { width: "100%", textAlign: "center", padding: "0 4px", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" } },
          _e("div", { style: { fontSize: 38, fontWeight: 900, color: "#fcd535", lineHeight: 1, letterSpacing: "-0.03em" } }, "до 80%"),
          _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 6, fontWeight: 600 } }, "партнеру")
        )
      : _e("div", { className: "hh-v1", style: { width: "100%", padding: "0 8px" } },
      _e("div", { className: "hh-v1-eyebrow", style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#a1a0a4", textTransform: "uppercase", marginBottom: 14, textAlign: "center" } }, "Комісія партнера"),
      _e("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 } },
        _e("div", { style: { display: "grid", gridTemplateColumns: "100px 1fr 50px", gap: 10, alignItems: "center" } },
          _e("span", { style: { fontSize: 13, color: "#f5f1e8", fontWeight: 600 } }, "Партнер"),
          _e("div", { style: { height: 8, borderRadius: 4, background: "rgba(255,255,255,0.05)", overflow: "hidden" } },
            _e("div", { className: "hh-barfill", style: { width: "80%", height: "100%", background: "linear-gradient(90deg, #fcd535, #f0b800)", borderRadius: 4 } })
          ),
          _e("span", { style: { fontSize: 14, fontWeight: 800, color: "#fcd535", textAlign: "right" } }, "80%")
        ),
        _e("div", { style: { display: "grid", gridTemplateColumns: "100px 1fr 50px", gap: 10, alignItems: "center" } },
          _e("span", { style: { fontSize: 13, color: "#a1a0a4", fontWeight: 600 } }, "Hash Hedge"),
          _e("div", { style: { height: 8, borderRadius: 4, background: "rgba(255,255,255,0.05)", overflow: "hidden" } },
            _e("div", { className: "hh-barfill hh-barfill-2", style: { width: "20%", height: "100%", background: "rgba(255,255,255,0.25)", borderRadius: 4 } })
          ),
          _e("span", { style: { fontSize: 14, fontWeight: 700, color: "#a1a0a4", textAlign: "right" } }, "20%")
        )
      ),
      _e("div", { className: "hh-v1-competitors", style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", marginTop: 6, background: "rgba(8,8,10,0.5)", borderRadius: 8, borderTop: "1px dashed var(--line)" } },
        _e("span", { style: { fontSize: 11, color: "#a1a0a4" } }, "Конкуренти платять"),
        _e("span", { style: { fontSize: 12, fontWeight: 700, color: "#ff4b5c" } }, "8–20%")
      )
    );

    // VIZ 2 — timeline (Нед.1 +$240 → ∞)
    const V2 = () => isMobile
      ? _e("div", { style: { width: "100%", display: "flex", flexDirection: "column", gap: 6, padding: "0 6px", justifyContent: "center", height: "100%" } },
          [
            { l: "Тиж. 1", v: "+$240" },
            { l: "Тиж. 2", v: "+$280" },
            { l: "Тиж. 3", v: "+$310" },
            { l: "завжди", v: "∞", inf: true }
          ].map((it, i) => _e("div", { key: i, style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 9px", borderRadius: 8, border: it.inf ? "1px solid rgba(252,213,53,0.45)" : "1px solid var(--line)", background: it.inf ? "rgba(252,213,53,0.08)" : "rgba(255,255,255,0.025)" } },
            _e("span", { style: { fontSize: 9, color: "#a1a0a4", fontWeight: 600 } }, it.l),
            _e("span", { style: { fontSize: it.inf ? 16 : 12, fontWeight: 800, color: it.inf ? "#fcd535" : "#f5f1e8", lineHeight: 1 } }, it.v)
          ))
        )
      : _e("div", { style: { display: "flex", alignItems: "flex-end", gap: 8, padding: "0 4px" } },
      [
        { l: "Тиж. 1", v: "+$240", w: "60px" },
        { l: "Тиж. 2", v: "+$280", w: "60px" },
        { l: "Тиж. 3", v: "+$310", w: "60px" },
        { l: "завжди", v: "∞", w: "60px", inf: true }
      ].map((it, i) => _e("div", { key: i, style: { textAlign: "center", flex: 1 } },
        _e("div", { className: "hh-coin", style: {
          width: 60, height: 60, margin: "0 auto 8px", borderRadius: "50%",
          border: it.inf ? "2px solid #fcd535" : "1px solid var(--line)",
          background: it.inf ? "rgba(252,213,53,0.10)" : "rgba(255,255,255,0.025)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          fontSize: it.inf ? 22 : 13, fontWeight: 800,
          color: it.inf ? "#fcd535" : "#f5f1e8",
          animationDelay: (i * 0.45) + "s"
        } }, it.v),
        _e("div", { style: { fontSize: 10, color: "#a1a0a4" } }, it.l)
      ))
    );

    // VIZ 3 — 5-10x exchange comparison. На mobile MAX компактно, всё прижато.
    const V3 = () => _e("div", { className: "hh-viz hh-viz-3",
      style: { width: "100%", maxWidth: isMobile ? 200 : 280, padding: 0, textAlign: "center", boxSizing: "border-box" }
    },
      _e("div", {
        style: { fontSize: isMobile ? 22 : 40, fontWeight: 900, color: "#fcd535", lineHeight: 1, letterSpacing: "-0.03em", marginBottom: 0 }
      }, "5–10×"),
      _e("div", {
        style: { fontSize: isMobile ? 8 : 10, color: "#a1a0a4", marginBottom: isMobile ? 2 : 10, lineHeight: 1.1, marginTop: isMobile ? 1 : 4 }
      }, "дохід vs біржовий реферал"),
      _e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 3 : 6 } },
        _e("div", { style: { padding: isMobile ? "3px 4px" : "6px 6px", background: "rgba(8,8,10,0.6)", border: "1px solid var(--line)", borderRadius: 6 } },
          _e("div", { style: { fontSize: isMobile ? 7 : 9, color: "#a1a0a4", marginBottom: 0, lineHeight: 1.1 } }, "Біржа"),
          _e("div", { style: { fontSize: isMobile ? 11 : 13, fontWeight: 700, color: "#a1a0a4", lineHeight: 1.1 } }, "$30–60")
        ),
        _e("div", { style: { padding: isMobile ? "3px 4px" : "6px 6px", background: "rgba(252,213,53,0.08)", border: "1px solid rgba(252,213,53,0.4)", borderRadius: 6 } },
          _e("div", { style: { fontSize: isMobile ? 7 : 9, color: "#fcd535", marginBottom: 0, fontWeight: 700, lineHeight: 1.1 } }, "Hash Hedge"),
          _e("div", { style: { fontSize: isMobile ? 11 : 13, fontWeight: 800, color: "#f5f1e8", lineHeight: 1.1 } }, "$300+")
        )
      )
    );

    // VIZ 4 — USDT $2,340 green circle. На mobile — ультра-компактный.
    const V4 = () => _e("div", { className: "hh-viz hh-viz-4",
      style: { textAlign: "center", maxWidth: isMobile ? 200 : 240, boxSizing: "border-box" }
    },
      _e("div", {
        className: "hh-usdt-drop",
        style: {
          width: isMobile ? 44 : 60, height: isMobile ? 44 : 60, borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(74,222,128,0.18), rgba(74,222,128,0.05))",
          border: "1px solid rgba(74,222,128,0.4)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          marginBottom: isMobile ? 4 : 8, color: "#4ade80", fontWeight: 800, fontSize: isMobile ? 11 : 14
        }
      }, "USDT"),
      _e("div", {
        style: { fontSize: isMobile ? 16 : 22, fontWeight: 800, color: "#f5f1e8", lineHeight: 1, marginBottom: 2 }
      },
        "$2 340", _e("span", { style: { fontSize: isMobile ? 9 : 11, color: "#a1a0a4", marginLeft: 4, fontWeight: 600 } }, "USDT")
      ),
      _e("div", {
        className: "hh-payout-badge",
        style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: isMobile ? 8 : 10, color: "#4ade80", padding: isMobile ? "2px 6px" : "3px 8px", background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)", borderRadius: 100, marginTop: isMobile ? 4 : 6 }
      },
        _e("span", { style: { width: 4, height: 4, borderRadius: "50%", background: "#4ade80" } }),
        "Виплату надіслано"
      )
    );

    // VIZ 5 — 7 levels horizontal bars
    const V5 = () => _e("div", { style: { width: "100%", padding: "0 4px" } },
      [7, 6, 5, 4, 3, 2, 1].map((lvl, i) => {
        const pct = [80, 75, 70, 65, 60, 55, 50][i];
        return _e("div", { key: lvl, style: { display: "grid", gridTemplateColumns: "16px 1fr 40px", gap: 8, alignItems: "center", marginBottom: 4 } },
          _e("span", { style: { fontSize: 10, color: "#a1a0a4", textAlign: "right", fontFamily: "ui-monospace,Menlo,monospace" } }, lvl),
          _e("div", { style: { height: 5, borderRadius: 3, background: "rgba(255,255,255,0.05)", overflow: "hidden" } },
            _e("div", { className: "hh-tierfill", style: { width: `${pct}%`, height: "100%", background: i === 0 ? "linear-gradient(90deg, #fcd535, #f0b800)" : "rgba(252,213,53,0.45)", borderRadius: 3, animationDelay: (i * 0.18) + "s" } })
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
    const V7 = () => isMobile
      ? _e("div", { style: { width: "100%", padding: "0 4px", textAlign: "center", display: "flex", flexDirection: "column", gap: 8, justifyContent: "center", height: "100%" } },
          _e("div", { style: { display: "flex", gap: 0, width: "100%" } },
            _e("div", { style: { flex: 1, padding: "8px 6px", background: "rgba(8,8,10,0.6)", border: "1px solid var(--line)", borderRight: "none", borderRadius: "8px 0 0 8px", textAlign: "center", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, fontWeight: 700, color: "#fcd535", letterSpacing: "0.04em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, "PARTNER"),
            _e("div", { style: { padding: "8px 10px", background: "#fcd535", borderRadius: "0 8px 8px 0", color: "#13111c", fontSize: 13, fontWeight: 800, whiteSpace: "nowrap" } }, "−15%")
          ),
          _e("div", { style: { fontSize: 10, color: "#9ef0c0", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4, lineHeight: 1.2 } },
            _e("span", { style: { width: 4, height: 4, borderRadius: "50%", background: "#9ef0c0", flexShrink: 0 } }),
            "Знижка 15%"
          )
        )
      : _e("div", { style: { width: "100%", padding: "0 6px", textAlign: "center" } },
      _e("div", { style: { fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#a1a0a4", textTransform: "uppercase", marginBottom: 12 } }, "Промокод"),
      _e("div", { style: { display: "flex", gap: 0, maxWidth: 240, margin: "0 auto" } },
        _e("div", { style: { flex: 1, padding: "12px 14px", background: "rgba(8,8,10,0.6)", border: "1px solid var(--line)", borderRight: "none", borderRadius: "10px 0 0 10px", textAlign: "left", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 14, fontWeight: 700, color: "#fcd535", letterSpacing: "0.06em" } }, "PARTNER2026"),
        _e("div", { className: "hh-promo-badge", style: { padding: "12px 16px", background: "#fcd535", borderRadius: "0 10px 10px 0", color: "#13111c", fontSize: 12, fontWeight: 800 } }, "−15%")
      ),
      _e("div", { style: { fontSize: 11, color: "#9ef0c0", marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6 } },
        _e("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#9ef0c0" } }),
        "Промокод застосовано · знижка 15%"
      )
    );

    // VIZ 8 — Tracking analytics snippet
    // VIZ 8 — Tracking analytics. На mobile все 3 плашки в 1 столбец без пустого места.
    const V8 = () => isMobile
      ? _e("div", { className: "hh-viz hh-viz-8",
          style: { width: "100%", maxWidth: 220, padding: 0, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 3 }
        },
          // 3 плашки подряд, одинакового стиля, прижаты друг к другу
          _e("div", { style: { padding: "4px 8px", background: "rgba(8,8,10,0.55)", border: "1px solid var(--line)", borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center" } },
            _e("span", { style: { fontSize: 7, color: "#a1a0a4", textTransform: "uppercase", letterSpacing: "0.08em" } }, "Джерело"),
            _e("span", { style: { fontSize: 11, fontWeight: 700, color: "#f5f1e8" } }, "YouTube")
          ),
          _e("div", { style: { padding: "4px 8px", background: "rgba(8,8,10,0.55)", border: "1px solid var(--line)", borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center" } },
            _e("span", { style: { fontSize: 7, color: "#a1a0a4", textTransform: "uppercase", letterSpacing: "0.08em" } }, "Кліки"),
            _e("span", { style: { fontSize: 11, fontWeight: 700, color: "#f5f1e8" } }, "1 284")
          ),
          _e("div", { style: { padding: "4px 8px", background: "rgba(252,213,53,0.06)", border: "1px solid rgba(252,213,53,0.3)", borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center" } },
            _e("div", { style: { display: "flex", flexDirection: "column" } },
              _e("span", { style: { fontSize: 7, color: "#a1a0a4", textTransform: "uppercase", letterSpacing: "0.08em" } }, "Дохід з каналу"),
              _e("span", { style: { fontSize: 12, fontWeight: 800, color: "#fcd535", letterSpacing: "-0.01em" } }, "$3 480")
            ),
            _e("span", { style: { fontSize: 9, color: "#4ade80", fontWeight: 700 } }, "↑ +34%")
          )
        )
      // Desktop версия — без изменений
      : _e("div", { className: "hh-viz hh-viz-8",
          style: { width: "100%", maxWidth: 280, padding: "0 4px", boxSizing: "border-box" }
        },
          _e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 6 } },
            [
              { k: "Джерело", v: "YouTube" },
              { k: "Кліки", v: "1 284" }
            ].map((it, i) => _e("div", { key: i, style: { padding: "6px 8px", background: "rgba(8,8,10,0.55)", border: "1px solid var(--line)", borderRadius: 6 } },
              _e("div", { style: { fontSize: 8, color: "#a1a0a4", marginBottom: 1, textTransform: "uppercase", letterSpacing: "0.08em" } }, it.k),
              _e("div", { style: { fontSize: 12, fontWeight: 700, color: "#f5f1e8" } }, it.v)
            ))
          ),
          _e("div", { style: { padding: "8px 10px", background: "rgba(252,213,53,0.06)", border: "1px solid rgba(252,213,53,0.3)", borderRadius: 6 } },
            _e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 } },
              _e("span", { style: { fontSize: 8, color: "#a1a0a4", textTransform: "uppercase", letterSpacing: "0.08em" } }, "Дохід з каналу"),
              _e("span", { style: { fontSize: 9, color: "#4ade80", fontWeight: 700 } }, "↑ +34%")
            ),
            _e("div", { style: { fontSize: 15, fontWeight: 800, color: "#fcd535", letterSpacing: "-0.01em" } }, "$3 480")
          )
        );

    // VIZ 9 — Sub-partner network
    // V9 — Многоуровневая сеть. Картинка увеличена (viewBox шире), круги с непрозрачным фоном.
    const V9 = () => _e("div", { style: { width: "100%", padding: 0, position: "relative" } },
      _e("svg", { width: "100%", height: 180, viewBox: "0 0 220 130", style: { display: "block" } },
        // Lines (рисуем под кругами)
        _e("line", { x1: 110, y1: 28, x2: 65, y2: 70, style: { stroke: "rgba(252,213,53,0.40)", strokeWidth: 1.4 } }),
        _e("line", { x1: 110, y1: 28, x2: 155, y2: 70, style: { stroke: "rgba(252,213,53,0.40)", strokeWidth: 1.4 } }),
        _e("line", { x1: 65,  y1: 70, x2: 40,  y2: 112, style: { stroke: "rgba(252,213,53,0.22)", strokeWidth: 1.2 } }),
        _e("line", { x1: 65,  y1: 70, x2: 90,  y2: 112, style: { stroke: "rgba(252,213,53,0.22)", strokeWidth: 1.2 } }),
        _e("line", { x1: 155, y1: 70, x2: 130, y2: 112, style: { stroke: "rgba(252,213,53,0.22)", strokeWidth: 1.2 } }),
        _e("line", { x1: 155, y1: 70, x2: 180, y2: 112, style: { stroke: "rgba(252,213,53,0.22)", strokeWidth: 1.2 } }),
        // Top node (you) — больше
        _e("circle", { className: "hh-node hh-node-a", cx: 110, cy: 28, r: 17, style: { fill: "#fcd535" } }),
        _e("text", { x: 110, y: 33, textAnchor: "middle", style: { fontSize: 11, fontWeight: 800, fill: "#13111c" } }, "Я"),
        // L1 nodes — непрозрачные, перекрывают линии
        _e("circle", { className: "hh-node hh-node-b", cx: 65,  cy: 70, r: 14, style: { fill: "#3a2f0e", stroke: "rgba(252,213,53,0.75)", strokeWidth: 1.4 } }),
        _e("circle", { className: "hh-node hh-node-b", cx: 155, cy: 70, r: 14, style: { fill: "#3a2f0e", stroke: "rgba(252,213,53,0.75)", strokeWidth: 1.4 } }),
        _e("text", { x: 65,  y: 73, textAnchor: "middle", style: { fontSize: 10, fontWeight: 800, fill: "#fcd535" } }, "5%"),
        _e("text", { x: 155, y: 73, textAnchor: "middle", style: { fontSize: 10, fontWeight: 800, fill: "#fcd535" } }, "5%"),
        // L2 nodes — непрозрачные тёмные
        [40, 90, 130, 180].map((x, i) => _e("circle", { key: i, className: "hh-node hh-node-c", cx: x, cy: 112, r: 9, style: { fill: "#222226", stroke: "rgba(255,255,255,0.22)", strokeWidth: 1, animationDelay: (0.6 + i * 0.15) + "s" } })),
        [40, 90, 130, 180].map((x, i) => _e("text", { key: "t" + i, x, y: 115, textAnchor: "middle", style: { fontSize: 8, fontWeight: 700, fill: "#cfcfd3" } }, "3%"))
      )
    );

    const cards = [
      { viz: _e(V1, null), chip: "Максимум у проп-індустрії", title: "До 80% від прибутку Hash Hedge", titleAccent: "before",
        body: "Найбільша комісія в проп-індустрії. Поки інші фірми платять 8–20% за приведеного клієнта, у Hash Hedge ти отримаєш від 50 до 80% від прибутку компанії." },
      { viz: _e(V2, null), chip: "Один трейдер = вічний дохід", title: "Довічні нарахування", titleAccent: "before",
        body: "Трейдер закріплюється за тобою назавжди. Ти отримуєш комісію з кожної його покупки." },
      { viz: _e(V3, null), chip: "Вигідніше за біржові офери", title: "Більше прибутку, ніж на біржах",
        body: "Один funded-трейдер на рахунку $25–50k приносить у 5–10 разів більше, ніж стандартний біржовий реферал." },
      { viz: _e(V4, null), chip: "Виведення протягом 72 годин", title: "Швидкі виплати", titleAccent: "before",
        body: "Запитуй виведення в USDT у будь-який момент. Гроші надійдуть на твій гаманець протягом 72 годин." },
      { viz: _e(V5, null), chip: "Зростаєш автоматично", title: "7 рівнів партнерства", titleAccent: "before",
        body: "Що більше рефералів ти залучиш, то вища твоя комісія." },
      // Карточка "Трафик из 154 стран" скрыта — чтобы сетка 4+4 без orphan
      // === 3 новые карточки ===
      { viz: _e(V7, null), chip: "Знижки для аудиторії", title: "Промокоди для аудиторії", titleAccent: "before",
        body: "Отримуй персональні знижки для своїх підписників, щоб підвищити конверсію і стимулювати покупки за твоїм посиланням." },
      { viz: _e(V8, null), chip: "Аналітика трафіку", title: "Гнучкий трекінг",
        body: "Створюй кастомні посилання для розділення трафіку та відстежуй конверсії в партнерському особистому кабінеті." },
      { viz: _e(V9, null), chip: "Багаторівнева мережа", title: "Суб-партнерство",
        body: "Залучай інших афіліатів за своїм посиланням і заробляй на багаторівневій партнерській мережі." }
    ];

    return _e("section", { id: "why", "data-no-glow": true, style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 760, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Чому Hash Hedge"
            ),
            _e("h2", { className: "hh-why-h2", style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              isMobile
                ? _e(F, null,
                    "Чому тобі", _e("br", null),
                    "варто стати", _e("br", null),
                    "нашим ", _e("span", { style: { color: "#fcd535" } }, "партнером")
                  )
                : _e(F, null, "Чому тобі варто стати", _e("br", null), "нашим ", _e("span", { style: { color: "#fcd535" } }, "партнером"))
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Ми даємо партнерам усе, щоб вони зростали разом з нами.")
          )
        ),
        // 4 в ряд на desktop (раньше 3)
        _e("div", { className: "hh-why-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 } },
          cards.map((c, i) => _e(Reveal, { key: i, delay: String((i % 3) + 1) },
            _e(Card, { chip: c.chip, title: c.title, titleAccent: c.titleAccent, body: c.body, n: String(i + 1).padStart(2, "0") }, c.viz)
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
      { n: "01", title: "До 80% від прибутку Hash Hedge",
        body: _e(F, null, "Забирай ", _e("b", { style: { color: "#fcd535" } }, "до 80%"), " від прибутку Hash Hedge з кожної покупки. Реферал закріплюється за тобою довічно: привів один раз — отримуєш комісію з усіх наступних покупок."),
        pill: "Постійний дохід",
        icon: ["M23 6l-9.5 9.5-5-5L1 18", "M17 6h6v6"] },
      { n: "02", title: "Дохід з успішних трейдерів",
        body: _e(F, null, "Отримуй відсоток від комісії Hash Hedge щоразу, коли залучений тобою трейдер виводить прибуток."),
        pill: "Пасивний дохід",
        icon: ["M12 6v6l4 2", "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"] },
      { n: "03", title: "Суб-партнерська програма",
        body: _e(F, null, "Запрошуй інших партнерів і отримуй відсоток від їхнього прибутку. ", _e("b", { style: { color: "#fcd535" } }, "5%"), " від доходу партнерів, яких ти залучив напряму, і ", _e("b", { style: { color: "#fcd535" } }, "3%"), " від залучених ними суб-партнерів."),
        pill: "Партнерська мережа",
        icon: ["M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M19 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M12 8v3", "M6.5 16l4.5-3 4.5 3", "M9 21h6"] }
    ];
    return _e("section", { id: "income", "data-no-glow": true, style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 760, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "3 джерела доходу"
            ),
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Як формується ", _e("br", null), "дохід ", _e("span", { style: { color: "#fcd535" } }, "партнера")
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Твоє партнерське посилання може приносити дохід одразу з трьох джерел.")
          )
        ),
        _e("div", { className: "hh-income-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 } },
          sources.map((s, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("div", { className: "hh-income-card",
              style: { position: "relative", background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 18, padding: "32px 28px 28px", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }
            },
              // Большая декоративная цифра на фоне справа сверху — остаётся как water-mark
              _e("div", { "aria-hidden": true, style: {
                position: "absolute", top: -22, right: -8,
                fontSize: 160, lineHeight: 1, fontWeight: 900, letterSpacing: "-0.04em",
                color: "rgba(252,213,53,0.06)", fontFamily: "Onest, sans-serif",
                pointerEvents: "none", userSelect: "none"
              } }, s.n),
              // Контент (иконка и eyebrow "Источник 0X" убраны)
              _e("div", { className: "hh-income-body", style: { position: "relative", display: "flex", flexDirection: "column", flex: 1 } },
                _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.01em", marginBottom: 14, color: "#f5f1e8" } }, s.title),
                _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 22, flex: 1 } }, s.body),
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 100, background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.3)", color: "#fcd535", fontSize: 12, fontWeight: 700, alignSelf: "flex-start" } }, s.pill)
              )
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
    // v10.8: Battle Pass / Honor of Kings прогрессия. 7 точек-нод на горизонтальном треке.
    // Кликаешь по любому уровню — детальная карточка снизу обновляется, линия прогресса
    // заполняется до выбранного, выбранный нод увеличивается + glow в его цвете.
    const TIERS_BASE = (typeof window !== "undefined" && window.__HH_BASE__) || "https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@main/";
    // Слева направо: от старта к максимуму
    const tiers = [
      { lvl: 1, pct: 50, range: "0–14",    label: "Старт",     rgb: "148,163,184" /* серо-голубой */ },
      { lvl: 2, pct: 55, range: "15–49",   label: "Bronze",    rgb: "205,127,50"  /* бронза */ },
      { lvl: 3, pct: 60, range: "50–99",   label: "Silver",    rgb: "192,192,200" /* серебро */ },
      { lvl: 4, pct: 65, range: "100–199", label: "Gold",      rgb: "250,204,21"  /* золото */ },
      { lvl: 5, pct: 70, range: "200–399", label: "Platinum",  rgb: "167,139,250" /* платина=фиолетовый */ },
      { lvl: 6, pct: 75, range: "400–699", label: "Diamond",   rgb: "34,211,238"  /* алмаз=циан */ },
      { lvl: 7, pct: 80, range: "700+",    label: "Legendary", rgb: "252,213,53"  /* фирменный жёлтый */ }
    ];

    // По дефолту Bronze (индекс 1) — «ты только что начал, уже привлёк первых, иди до Legendary»
    const [selected, setSelected] = useState(1);
    const sel = tiers[selected];
    // Процент заполнения линии прогресса от 0 (старт) до 100% (Legendary)
    const fillPct = (selected / (tiers.length - 1)) * 100;

    return _e("section", { id: "levels", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { style: { textAlign: "center", maxWidth: 880, margin: "0 auto 48px" } },
            _e("span", {
              style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
            },
              _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
              "Партнерські рівні"
            ),
            _e("h2", { style: { fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } },
              "Що більше трейдерів —", _e("br", null), "то вища твоя комісія"
            ),
            _e("p", { style: { fontSize: 17, color: "#a1a0a4" } }, "Залучай трейдерів і забирай до 80% від прибутку Hash Hedge.")
          )
        ),

        // === Battle pass track ===
        _e("div", { className: "hh-bp-wrap", style: {
          position: "relative",
          background: "#1C1C1F",
          border: "1px solid var(--line)",
          borderRadius: 24,
          padding: "64px 36px 44px",
          marginBottom: 20,
          overflow: "hidden"
        } },
          // Амбиентное свечение под выбранным узлом
          _e("div", { "aria-hidden": "true", className: "hh-bp-ambient", style: {
            position: "absolute",
            width: 520, height: 360,
            left: `calc(${(0.5 + selected) / tiers.length * 100}%)`,
            top: -120,
            transform: "translateX(-50%)",
            background: `radial-gradient(closest-side, rgba(${sel.rgb},0.22), rgba(${sel.rgb},0))`,
            filter: "blur(20px)",
            pointerEvents: "none",
            transition: "left .4s cubic-bezier(.2,.7,.2,1), background .4s",
            zIndex: 0
          } }),

          // Скроллируемый трек — на мобиле уезжает в overflow-x с min-width: 700px
          _e("div", { className: "hh-bp-track", style: { position: "relative", zIndex: 1 } },
            _e("div", { className: "hh-bp-track-inner", style: {
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              minWidth: "100%"
            } },
              // Подложка-линия (серая) — top = % container (38) + margin (14) + half of node (32) - half line = 82
              _e("div", { "aria-hidden": "true", style: {
                position: "absolute",
                left: `${100 / tiers.length / 2}%`,
                right: `${100 / tiers.length / 2}%`,
                top: 82,
                height: 4,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 4,
                zIndex: 0
              } }),
              // Заполненная часть линии — до выбранного нода
              _e("div", { "aria-hidden": "true", style: {
                position: "absolute",
                left: `${100 / tiers.length / 2}%`,
                width: `calc(${fillPct}% * ${(tiers.length - 1) / tiers.length})`,
                top: 82,
                height: 4,
                background: `linear-gradient(90deg, rgba(${tiers[0].rgb},0.7), rgba(${sel.rgb},1))`,
                borderRadius: 4,
                boxShadow: `0 0 14px rgba(${sel.rgb},0.55)`,
                zIndex: 1,
                transition: "width .45s cubic-bezier(.2,.7,.2,1), background .4s, box-shadow .4s"
              } }),

              // 7 нодов
              tiers.map((t, i) => {
                const isPassed = i <= selected;
                const isSelected = i === selected;
                return _e("button", { key: t.lvl, type: "button",
                  className: "hh-bp-node",
                  onClick: () => setSelected(i),
                  "aria-label": `Рівень ${t.lvl} ${t.label}, комісія ${t.pct}%`,
                  style: {
                    position: "relative", zIndex: 2,
                    background: "none", border: "none", padding: 0,
                    cursor: "pointer",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    flex: "1 1 0", minWidth: 0,
                    fontFamily: "inherit"
                  }
                },
                  // % container — фиксированная высота 38px, текст выравнен по низу,
                  // чтобы при смене selected (font 22→32) layout не прыгал и линия оставалась ровной
                  _e("div", { style: {
                    height: 38,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    marginBottom: 14
                  } },
                    _e("span", { style: {
                      fontSize: isSelected ? 32 : 22,
                      fontWeight: 800,
                      color: isPassed ? `rgb(${t.rgb})` : "#525258",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      transition: "all .25s",
                      textShadow: isSelected ? `0 0 20px rgba(${t.rgb},0.7)` : "none"
                    } }, `${t.pct}%`)
                  ),
                  // Нод — скруглённый квадрат. v10.12: фон node = #1C1C1F (= цвет wrap'а),
                  // чтобы перекрыть соединительную линию под собой. Линия теперь видна ТОЛЬКО
                  // МЕЖДУ нодами, не проходит через иконку. PNG прозрачные — фон под ними
                  // тоже #1C1C1F, поэтому остаётся «бесшовно». Сверху — лёгкий tier-glow.
                  _e("div", { style: {
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    background: isPassed
                      ? `radial-gradient(circle at 50% 50%, rgba(${t.rgb},0.18) 0%, rgba(${t.rgb},0) 70%), #1C1C1F`
                      : "#1C1C1F",
                    border: isPassed
                      ? `${isSelected ? 2 : 1.5}px solid rgba(${t.rgb},${isSelected ? 1 : 0.55})`
                      : "1.5px solid rgba(255,255,255,0.10)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    padding: 4, boxSizing: "border-box",
                    boxShadow: isSelected
                      ? `0 0 0 5px rgba(${t.rgb},0.16), 0 0 36px rgba(${t.rgb},0.45)`
                      : "none",
                    transform: isSelected ? "scale(1.12)" : "scale(1)",
                    transition: "all .28s cubic-bezier(.2,.7,.2,1)"
                  } },
                    _e("img", { src: TIERS_BASE + "assets/tiers/tier-" + t.lvl + ".png",
                      alt: "Tier " + t.lvl,
                      style: { width: "100%", height: "100%", objectFit: "contain",
                        filter: isPassed ? "none" : "grayscale(0.75) brightness(0.55)",
                        transition: "filter .25s"
                      }
                    })
                  ),
                  // Подпись уровня
                  _e("div", { style: {
                    marginTop: 18,
                    fontSize: isSelected ? 15 : 13,
                    fontWeight: 700,
                    color: isPassed ? "#f5f1e8" : "#525258",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "all .25s",
                    whiteSpace: "nowrap"
                  } }, t.label),
                  // Диапазон трейдеров
                  _e("div", { style: {
                    marginTop: 7,
                    fontSize: 13,
                    color: isSelected ? `rgb(${t.rgb})` : "#7a7a80",
                    fontWeight: 700,
                    letterSpacing: "0.02em"
                  } }, t.range),
                  _e("div", { style: { fontSize: 11, color: "#52525a", marginTop: 3, fontWeight: 500 } }, "трейдерів/міс")
                );
              })
            )
          ),

          // Подсказка под треком
          _e("div", { style: {
            marginTop: 38, textAlign: "center",
            fontSize: 13, color: "#7a7a80",
            fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase"
          } }, "Натисни на будь-який рівень →  подивись деталі")
        ),

        // === Детальная карточка выбранного уровня ===
        // v10.14: иконка меньше (80→56), padding уменьшен (24/28 → 18/22), карточка компактнее
        // — визуально аккуратнее, текст и кнопка не выглядят сдвинутыми
        _e("div", { className: "hh-bp-detail", style: {
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          gap: 18, alignItems: "center",
          padding: "18px 22px",
          background: `linear-gradient(135deg, rgba(${sel.rgb},0.08), rgba(${sel.rgb},0.01)), #1C1C1F`,
          border: `1px solid rgba(${sel.rgb},0.32)`,
          borderRadius: 18, marginBottom: 22,
          transition: "background .4s, border-color .4s"
        } },
          // Tier-иконка — компактная 56×56, solid #1C1C1F + tier glow
          _e("div", { style: {
            width: 56, height: 56, borderRadius: 14,
            background: `radial-gradient(circle at 50% 50%, rgba(${sel.rgb},0.20) 0%, rgba(${sel.rgb},0) 70%), #1C1C1F`,
            border: `1px solid rgba(${sel.rgb},0.42)`,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: 2, boxSizing: "border-box", flexShrink: 0
          } },
            _e("img", { src: TIERS_BASE + "assets/tiers/tier-" + sel.lvl + ".png",
              alt: "Tier " + sel.lvl,
              style: { width: "100%", height: "100%", objectFit: "contain" }
            })
          ),
          // Текст
          _e("div", { style: { minWidth: 0 } },
            _e("div", { style: { fontSize: 13, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 } },
              `Рівень ${sel.lvl} · ${sel.label}`
            ),
            _e("div", { className: "hh-bp-detail-line", style: { fontSize: 24, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.01em", lineHeight: 1.25 } },
              "Комісія ",
              _e("span", { style: { color: `rgb(${sel.rgb})` } }, `${sel.pct}%`),
              " при ",
              _e("span", null, sel.range),
              _e("span", { style: { color: "#a1a0a4", fontWeight: 700, fontSize: 19 } }, " трейдерів на місяць")
            )
          ),
          // CTA
          _e("a", { href: "https://partner.hashhedge.com",
            className: "hh-btn-yellow hh-bp-cta",
            style: { padding: "14px 26px", borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6 }
          }, "Стати партнером →")
        ),

        _e("div", { style: { textAlign: "center", fontSize: 13, color: "#a1a0a4" } },
          "Рівень перераховується автоматично щомісяця на основі кількості залучених трейдерів"
        )
      )
    );
  }

  // ============================================================================
  // CALCULATOR (v11.0 — Vercel-style)
  // ============================================================================
  function Calculator() {
    const tiers = [
      { lvl: 1, pct: 50, min: 0,   max: 14,  range: "0–14 трейдерів" },
      { lvl: 2, pct: 55, min: 15,  max: 49,  range: "15–49 трейдерів" },
      { lvl: 3, pct: 60, min: 50,  max: 99,  range: "50–99 трейдерів" },
      { lvl: 4, pct: 65, min: 100, max: 199, range: "100–199 трейдерів" },
      { lvl: 5, pct: 70, min: 200, max: 399, range: "200–399 трейдерів" },
      { lvl: 6, pct: 75, min: 400, max: 699, range: "400–699 трейдерів" },
      { lvl: 7, pct: 80, min: 700, max: 999, range: "700+ трейдерів" }
    ];
    const AVG_PER_TRADER = 140;
    const [traders, setTraders] = useState(200);
    const currentTier = tiers.find(t => traders >= t.min && traders <= t.max) || tiers[tiers.length - 1];
    const monthly = Math.round(traders * AVG_PER_TRADER * currentTier.pct / 100);
    const yearly = monthly * 12;
    const fmt = n => n.toLocaleString("ru-RU").replace(/,/g, " ");

    return _e("section", { id: "calc", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-calc-head", style: {
            display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end", marginBottom: 56
          } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Розрахуй свій дохід"
              ),
              _e("h2", { className: "hh-calc-h2", style: { fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.03em", color: "#f5f1e8", margin: 0 } },
                "Що більше рефералів,", _e("br", null),
                _e("span", { style: { color: "#fcd535" } }, "то вища твоя комісія")
              )
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Залучай трейдерів і забирай до ",
              _e("strong", { style: { color: "#f5f1e8" } }, "80%"),
              " від прибутку Hash Hedge. Використовуй калькулятор прибутку, щоб дізнатися, скільки ти можеш заробляти."
            )
          )
        ),

        // v12.3: 1-в-1 как калькулятор на hashhedge-affiliate.vercel.app (#tiers),
        // с нашими русскими текстами. Сетка 0.85fr/1fr, карточка 36px, слайдер aff-range
        // с заливкой через --fill, выплата жёлтым, уровни справа с прогресс-подложкой.
        _e("div", { className: "hh-calc-grid", style: {
          display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: 28, alignItems: "stretch"
        } },
          // LEFT card
          _e("div", { className: "hh-calc-card", style: {
            padding: 36,
            height: "100%",
            display: "flex", flexDirection: "column",
            background: "linear-gradient(rgba(31,29,37,0.7), rgba(21,19,26,0.7))",
            border: "1px solid var(--line)",
            borderRadius: 16
          } },
            _e("div", { style: { fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a7a80", marginBottom: 24 } }, "Калькулятор прибутку"),
            _e("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 } },
              _e("div", { style: { fontSize: 14, color: "#a1a0a4" } }, "Активних залучених трейдерів"),
              _e("div", { style: { fontSize: 24, fontWeight: 800, color: "#f5f1e8", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, fmt(traders))
            ),
            _e("input", { type: "range", min: 0, max: 800, step: 1,
              value: traders,
              onChange: e => setTraders(parseInt(e.target.value, 10)),
              className: "hh-calc-slider",
              style: { width: "100%", "--fill": (traders / 800 * 100) + "%" }
            }),
            _e("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "#6b6a70", marginBottom: 0 } },
              _e("span", null, "0"),
              _e("span", null, "200"),
              _e("span", null, "400"),
              _e("span", null, "700+")
            ),
            _e("div", { style: { display: "flex", gap: 12, marginTop: 28 } },
              _e("div", { style: {
                flex: 1,
                padding: "16px 18px",
                background: "rgba(252,213,53,0.08)",
                border: "1px solid rgba(252,213,53,0.25)",
                borderRadius: 12
              } },
                _e("div", { style: { fontSize: 11, color: "#7a7a80", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 } }, "Твоя комісія"),
                _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#fcd535", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, currentTier.pct + "%"),
                _e("div", { style: { fontSize: 12, color: "#a1a0a4", marginTop: 6 } }, "Рівень " + currentTier.lvl)
              ),
              _e("div", { style: {
                flex: 1,
                padding: "16px 18px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--line)",
                borderRadius: 12
              } },
                _e("div", { style: { fontSize: 11, color: "#7a7a80", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 } }, "Сер. / трейдер / міс"),
                _e("div", { style: { fontSize: 26, fontWeight: 800, color: "#f5f1e8", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, "$" + AVG_PER_TRADER),
                _e("div", { style: { fontSize: 12, color: "#6b6a70", marginTop: 6 } }, "Виручка платформи")
              )
            ),
            _e("div", { style: { marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--line)" } },
              _e("div", { style: { fontSize: 13, color: "#7a7a80", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 } }, "Щомісячна виплата"),
              _e("div", { style: { fontSize: 52, fontWeight: 800, color: "#fcd535", letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "Onest, sans-serif" } }, "$" + fmt(monthly)),
              _e("div", { style: { fontSize: 15, color: "#a1a0a4", marginTop: 10 } },
                "≈ ", _e("b", { style: { color: "#f5f1e8", fontFamily: "Onest, sans-serif" } }, "$" + fmt(yearly)),
                " / рік"
              ),
              _e("p", { style: { fontSize: 11, color: "#6b6a70", lineHeight: 1.5, margin: "18px 0 0" } },
                "Розрахунок приблизний. Фактичний дохід залежить від активності трейдерів і розміру їхніх акаунтів."
              )
            )
          ),
          // RIGHT levels list (1-в-1 vercel: прогресс-подложка (pct−30)×2%, активный — жёлтая рамка + glow)
          _e("div", { className: "hh-calc-levels", style: { display: "flex", flexDirection: "column", gap: 10, height: "100%" } },
            tiers.map(t => {
              const isYou = t === currentTier;
              // Клик по уровню ставит ползунок в середину диапазона выбранного тира
              const midPoint = Math.round((t.min + Math.min(t.max, 800)) / 2);
              return _e("button", { key: t.lvl, type: "button",
                onClick: () => setTraders(midPoint),
                "aria-label": `Перейти на рівень ${t.lvl}: ${t.pct}%, ${t.range}`,
                className: "hh-calc-tier-row",
                style: {
                  position: "relative",
                  flex: 1,
                  minHeight: 56,
                  padding: "12px 22px",
                  borderRadius: 14,
                  overflow: "hidden",
                  border: isYou ? "1px solid rgba(252,213,53,0.5)" : "1px solid var(--line)",
                  background: isYou ? "rgba(252,213,53,0.06)" : "#1f1d25",
                  boxShadow: isYou ? "0 0 40px rgba(252,213,53,0.18)" : "none",
                  display: "flex", alignItems: "center",
                  transition: "all .3s cubic-bezier(.22,1,.36,1)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textAlign: "left",
                  width: "100%"
                }
              },
                // Прогресс-заливка строки (как на vercel): у активной — жёлтый градиент
                _e("div", { "aria-hidden": true, style: {
                  position: "absolute", left: 0, top: 0, bottom: 0,
                  width: ((t.pct - 30) * 2) + "%",
                  background: isYou
                    ? "linear-gradient(90deg, rgba(252,213,53,0.22), rgba(252,213,53,0.06))"
                    : "linear-gradient(90deg, rgba(255,255,255,0.05), transparent)",
                  pointerEvents: "none",
                  transition: "width .3s cubic-bezier(.22,1,.36,1), background .3s ease"
                } }),
                _e("span", { className: "hh-calc-tier-pct", style: {
                  fontSize: 34, fontWeight: 800,
                  color: isYou ? "#fcd535" : "#f5f1e8",
                  letterSpacing: "-0.02em", lineHeight: 1,
                  minWidth: 78,
                  position: "relative", zIndex: 1,
                  fontFamily: "Onest, sans-serif"
                } }, t.pct + "%"),
                _e("div", { style: { flex: 1, minWidth: 0, marginLeft: 16, position: "relative", zIndex: 1 } },
                  _e("div", { className: "hh-calc-tier-name", style: { fontSize: 13, fontWeight: 700, color: "#a1a0a4" } }, "Рівень " + t.lvl),
                  _e("div", { className: "hh-calc-tier-range", style: { fontSize: 12, color: "#7a7a80" } }, t.range)
                ),
                isYou && _e("span", { className: "hh-calc-tier-you", style: {
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 11px", borderRadius: 999,
                  background: "rgba(252,213,53,0.14)",
                  border: "1px solid rgba(252,213,53,0.3)",
                  color: "#fcd535",
                  fontSize: 11, fontWeight: 800, letterSpacing: "0.08em",
                  position: "relative", zIndex: 1
                } },
                  _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#fcd535" } }),
                  "ТИ"
                )
              );
            })
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
      { n: "01", chip: "Реєстрація",       title: "Зареєструйся",
        body: _e(F, null, "Заповни коротку анкету й отримай доступ до особистого кабінету партнера — це займе менше ", _e("b", { style: { color: "#f5f1e8", fontWeight: 800 } }, "2 хвилин"), ".") },
      { n: "02", chip: "Реферальне посилання", title: "Отримай реферальне посилання",
        body: "Отримай персональне реферальне посилання в особистому кабінеті." },
      { n: "03", chip: "Просування",       title: "Залучай трейдерів",
        body: "Ділися посиланням у соцмережах, Telegram-каналах, YouTube, блогах або особистих рекомендаціях." },
      { n: "04", chip: "Дохід",             title: "Отримуй виплати",
        body: "Отримуй до 80% від прибутку Hash Hedge за залучених трейдерів. Виплати в USDT протягом 72 годин." }
    ];
    return _e("section", { id: "how", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        // Header: H2 left + description right
        _e(Reveal, null,
          _e("div", { className: "hh-steps-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 56 } },
            _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
              "Чотири кроки до ", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "першого прибутку")
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, "Приєднуйся до 2500+ партнерів, які вже заробляють разом з Hash Hedge.")
          )
        ),
        // Timeline circles — стиль как в HowItWorks на главной RU: большой круг 84×84, жёлтая обводка, жёлтая цифра
        _e(Reveal, { delay: "1" },
          _e("div", { className: "hh-steps-timeline", style: { position: "relative", marginBottom: 28 } },
            // Тонкая жёлтая линия-плашка между кругами
            _e("div", { style: { position: "absolute", top: 42, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, transparent, rgba(252,213,53,0.6) 20%, rgba(252,213,53,0.6) 80%, transparent)", opacity: 0.35, zIndex: 0 } }),
            _e("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative", zIndex: 1 } },
              steps.map((s, i) => _e("div", { key: i, style: { textAlign: "center" } },
                _e("div", { className: "how-step-badge", style: {
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 84, height: 84, minWidth: 84, minHeight: 84, aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background: "var(--bg)", border: "2px solid #fcd535",
                  color: "#fcd535", fontSize: 28, fontWeight: 800,
                  fontFamily: "Onest, sans-serif",
                  boxShadow: "0 0 0 8px var(--bg)"
                } }, s.n)
              ))
            )
          )
        ),
        // 4 description cards
        // gridTemplateColumns управляется CSS (4 col на desktop через media min-width:981, 1 col на mobile)
        _e("div", { className: "hh-steps-grid", style: { display: "grid", gap: 18 } },
          steps.map((s, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("div", { className: "hh-steps-card",
              style: { background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 16, padding: 24, height: "100%" }
            },
              // На мобильной номер шага виден слева в кругу (CSS делает display: flex)
              _e("div", { className: "hh-steps-num-mobile",
                style: { display: "none",
                  width: 52, height: 52, flexShrink: 0, borderRadius: "50%",
                  background: "rgba(11,11,14,0.9)", border: "1px solid var(--line)",
                  color: "#fcd535", fontSize: 14, fontWeight: 800,
                  fontFamily: "ui-monospace,Menlo,monospace",
                  alignItems: "center", justifyContent: "center"
                }
              }, s.n),
              _e("div", { className: "hh-steps-card-body" },
                _e("div", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fcd535", marginBottom: 12 } }, s.chip),
                _e("h3", { style: { fontSize: 19, fontWeight: 700, lineHeight: 1.25, marginBottom: 12, color: "#f5f1e8" } }, s.title),
                _e("p", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } }, s.body)
              )
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
        // Иконки 1-в-1 как в реальном partner.hashhedge.com/dashboard
        { k: "Усього покупок",      v: "$" + (48920 + tick * 320).toLocaleString("ru-RU").replace(/,/g, " "), d: "+18,4%", ic: "M3 3h2l.4 2 M7 13h10l4-8H5.4 M7 13L5.4 5 M7 13l-1.7 4.5h13.4 M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" },
        { k: "Кількість покупок", v: String(312 + Math.floor(tick * 0.4)),                                  d: "+24",    ic: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12" },
        { k: "Реєстрації",        v: (1284 + tick * 3).toLocaleString("ru-RU").replace(/,/g, " "),         d: "+61",    ic: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M20 8v6 M23 11h-6" },
        { k: "Комісія партнера",  v: "$" + (34244 + tick * 180).toLocaleString("ru-RU").replace(/,/g, " "), d: "+21,7%", ic: "M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }
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
                "Особистий кабінет"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Уся ", _e("span", { style: { color: "#fcd535" } }, "аналітика"), _e("br", null), "в одному місці"
              )
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Стеж за доходом, показниками та активністю суб-партнерів у реальному часі."
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
                    _e("div", { style: { fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", color: "#a1a0a4" } }, "ПАРТНЕРСЬКИЙ ЦЕНТР")
                  )
                ),
                _e("div", { className: "hh-cab-greet", style: { lineHeight: 1.3, paddingLeft: 14, borderLeft: "1px solid var(--line)" } },
                  _e("div", { style: { fontSize: 14, fontWeight: 800, color: "#f5f1e8" } }, "Вітаємо, Партнере!"),
                  _e("div", { style: { fontSize: 11, color: "#a1a0a4" } }, "З поверненням, раді бачити вас знову!")
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
                    _e("div", { style: { fontSize: 10, color: "#a1a0a4" } }, "Твій персональний менеджер")
                  )
                ),
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 8 } },
                  _e("span", { style: { fontSize: 13, fontWeight: 800, color: "#f5f1e8" } }, "$34 244"),
                  _e("span", { style: { fontSize: 11, fontWeight: 800, color: "#cd7f32" } }, "Bronze")
                ),
                _e("div", { className: "hh-cab-icons", style: { display: "flex", gap: 4 } },
                  [
                    // Moon — тёмная тема
                    "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
                    // Bell — колокольчик с язычком
                    "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
                    // Headphones — поддержка
                    "M3 18v-6a9 9 0 0 1 18 0v6 M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z",
                    // User — профиль с головой
                    "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                  ].map((d, i) =>
                    _e("div", { key: i, style: { width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                      _e("svg", { width: 14, height: 14, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } },
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
                  { title: "Аналітика", items: [
                    { l: "Дашборд", active: true, ic: "M3 3v18h18 M7 12l3-3 4 4 7-7" },
                    { l: "Загальна статистика", ic: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20" },
                    { l: "Докладні звіти", ic: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" },
                    { l: "Суб-партнери", ic: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
                    { l: "Лідерборд", ic: "M8 21h8 M12 17v4 M7 4h10v5a5 5 0 1 1-10 0V4z" }
                  ]},
                  { title: "Керування", items: [
                    { l: "Партнерські посилання", ic: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" },
                    { l: "Постбеки", ic: "M3 12h18 M12 3l9 9-9 9" }
                  ]},
                  { title: "Транзакції", items: [
                    { l: "Виведення коштів", ic: "M21 12H7 M14 5l7 7-7 7" }
                  ]},
                  { title: "Інше", items: [
                    { l: "Мова", ic: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" },
                    { l: "Партнерська угода", ic: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6" }
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
                  _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, "Партнерські посилання"),
                  _e("span", { style: { color: "#a1a0a4" } }, "▾")
                ),
                _e("h3", { style: { fontSize: 28, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", margin: "0 0 20px" } }, "Дашборд"),

                // KPI col + chart
                _e("div", { className: "hh-cab-stage", style: { display: "grid", gridTemplateColumns: "260px 1fr", gap: 14 } },
                  // KPI column
                  _e("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
                    cabKpis.map((s, i) => _e("div", { key: i, style: { padding: 16, background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 12 } },
                      _e("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 } },
                        _e("div", {
                          style: {
                            width: 30, height: 30, borderRadius: 8,
                            background: "rgba(252,213,53,0.10)",
                            border: "1px solid rgba(252,213,53,0.22)",
                            display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                          }
                        },
                          _e("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#fcd535", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } },
                            _e("path", { d: s.ic, style: { fill: "none" } })
                          )
                        ),
                        _e("div", { style: { fontSize: 12, color: "#a1a0a4", fontWeight: 500 } }, s.k)
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
              { paths: ["M22 12h-4l-3 9L9 3l-3 9H2"], t: "Аналітика в реальному часі", b: "Кліки, реєстрації, покупки та комісії оновлюються автоматично." },
              { paths: ["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4L12 14.01l-3-3"], t: "Статистика по суб-партнерах", b: "Контролюй нарахування з усіх рівнів: твоїх прямих партнерів та їхніх рефералів." },
              // Lucide "wallet" — чистая иконка кошелька с застёжкой, ассоциируется с выводом средств
              { paths: ["M21 12V7H5a2 2 0 0 1 0-4h14v4", "M3 5v14a2 2 0 0 0 2 2h16v-5", "M18 12a2 2 0 0 0 0 4h4v-4Z"], t: "Виведення в будь-який момент", b: "Запитуй виплати в USDT без фіксованих дат." },
              { paths: ["M12 20h9", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], t: "Гнучкі інструменти", b: "Генеруй посилання, промокоди та підключай постбеки за пару секунд." }
            ].map((ex, i) => _e("div", { key: i, style: { padding: 18, background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 14 } },
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
    // Данные 1:1 по скрину пользователя (вкладка «Топ партнёры»)
    const rows = [
      { n: 1,  name: "Anonymous",         amount: 962251.41, alt: false },
      { n: 2,  name: "Anonymous",         amount: 347129.75, alt: true  },
      { n: 3,  name: "Anonymous",         amount: 316436.55, alt: false },
      { n: 4,  name: "Boss",              amount: 360446.05, alt: true  },
      { n: 5,  name: "To The Moon 🚀",   amount: 217354.42, alt: false },
      { n: 6,  name: "Anonymous",         amount: 258404.20, alt: true  },
      { n: 7,  name: "igoraa500",         amount: 156723.11, alt: false },
      { n: 8,  name: "Anonymous",         amount: 104789.08, alt: true  },
      { n: 9,  name: "Anonymous",         amount: 110175.53, alt: false },
      { n: 10, name: "Anonymous",         amount: 104524.55, alt: true  }
    ];
    const fmtUSD = v => "$" + v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return _e("section", { id: "leaderboard", "data-no-glow": true, style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        // Header: eyebrow + H2 слева, описание справа (вернул из v3.1)
        _e(Reveal, null,
          _e("div", { className: "hh-lb-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Оновлюється в реальному часі"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Топ партнери", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "за місяць")
              )
            ),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Залучай рефералів і виходь у топ. Лідерборд у реальному часі показує партнерів з найвищим доходом за місяць."
            )
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden" } },
            // Header section с заголовком таблицы
            _e("div", { style: { padding: "26px 32px 18px" } },
              _e("h3", { style: { fontSize: 22, fontWeight: 800, color: "#f5f1e8", margin: 0, letterSpacing: "-0.01em" } }, "Топ партнери")
            ),
            // Column headers
            _e("div", { className: "hh-lb-row hh-lb-head-row",
              style: {
                display: "grid", gridTemplateColumns: "120px 1fr 220px", gap: 16,
                padding: "16px 32px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
                background: "rgba(255,255,255,0.02)"
              }
            },
              ["Ранг", "Партнер", "Сума покупки"].map((h, i) => _e("div", { key: i,
                style: { fontSize: 13, color: "#a1a0a4", fontWeight: 500, textAlign: i === 2 ? "right" : "left" }
              }, h))
            ),
            // Rows — компактнее (padding 12px вместо 18px)
            rows.map((r, i) => _e("div", {
              key: r.n,
              className: "hh-lb-row",
              style: {
                display: "grid", gridTemplateColumns: "120px 1fr 220px", gap: 16,
                padding: "12px 32px", alignItems: "center",
                background: r.alt ? "rgba(255,255,255,0.025)" : "transparent",
                borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.04)"
              }
            },
              _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, r.n),
              _e("div", { style: { fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, r.name),
              _e("div", { style: { textAlign: "right", fontSize: 14, fontWeight: 700, color: "#f5f1e8" } }, fmtUSD(r.amount))
            )),
            // Подпись снизу таблицы
            _e("div", { style: { padding: "14px 32px", fontSize: 11, color: "#a1a0a4", display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)", flexWrap: "wrap", gap: 12 } },
              _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 } },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80" } }), "Оновлено щойно"
              ),
              _e("span", null, "Топ-5 закріплюються за підсумками місяця · імена приховані для приватності")
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
    // v5.6: переписан как 1 hero + 6 в 3-col grid (вместо horizontal slider). Слайдер делал секцию визуально
    // похожей на YouTubeSection на главной RU — теперь mosaic-layout, акцентирует первый ролик.
    const videos = [
      { id: "v70Cj06fueA", title: "Як пройти 1-фазний челендж",                                   author: "@trader_oleg", views: "73K"  },
      { id: "xJ4yA5MDMDU", title: "Інтерв'ю з funded-трейдером",                                    author: "@yariktrade",  views: "112K" },
      { id: "IlSjDtqwwuA", title: "Огляд челенджу Hash Hedge",                                     author: "@cryptopro",   views: "94K"  },
      { id: "PUAyUaSommg", title: "Від $49 до $5 580 — як змінити життя на крипто-проп-трейдингу", author: "Хедлайнери | Нікіта Ануфрієв", views: "127K" },
      { id: "oz_72s2S5Xc", title: "Розбір платформи та умов",                                     author: "@cryptoschool",views: "41K"  },
      { id: "lnsWjuJuguE", title: "Стратегія торгівлі на челенджі",                                author: "@cryptopro",   views: "67K"  }
    ];
    // PlayBtn — единая кнопка-плей с YouTube-стилем
    const PlayBtn = ({ size }) => _e("div", { style: {
      position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
      width: size, height: size, borderRadius: "50%", background: "#ff0000",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 6px 24px rgba(255,0,0,0.35)"
    } },
      _e("svg", { width: size * 0.34, height: size * 0.38, viewBox: "0 0 20 22", style: { fill: "#fff", marginLeft: size * 0.04 } },
        _e("path", { d: "M0 0 L0 22 L20 11 Z", style: { fill: "#fff" } })
      )
    );
    const hero = videos[0];
    const rest = videos.slice(1);
    return _e("section", { id: "content", "data-no-glow": true, style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("div", { className: "hh-yt-head", style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "end", marginBottom: 40 } },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Контент партнерів"
              ),
              _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                "Що допомагає партнерам", _e("br", null), _e("span", { style: { color: "#fcd535" } }, "заробляти")
              )
            ),
            _e("p", { style: { fontSize: 15, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Подивись, як 2500+ партнерів створюють контент і залучають клієнтів. Надихайся і застосовуй найкращі механіки у своєму контенті."
            )
          )
        ),
        // TOP — 1 hero слева (2/3) + 2 видео-thumb стек справа (1/3). Стиль как на главной RU YouTubeSection.
        _e("div", { className: "hh-yt-top", style: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18, alignItems: "stretch" } },
          // HERO — слева большой (2/3)
          _e(Reveal, { delay: "1" },
            _e("a", {
              href: `https://www.youtube.com/watch?v=${hero.id}`, target: "_blank", rel: "noopener noreferrer",
              style: { display: "flex", flexDirection: "column", height: "100%", background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden", textDecoration: "none", color: "var(--fg)" }
            },
              _e("div", { style: { position: "relative", aspectRatio: "16/9", background: `url(https://img.youtube.com/vi/${hero.id}/maxresdefault.jpg) center / cover, #111`, flexShrink: 0 } },
                _e(PlayBtn, { size: 72 }),
                _e("div", { style: { position: "absolute", top: 14, left: 14, display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", borderRadius: 100, background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 11, fontWeight: 700, color: "#fcd535", letterSpacing: "0.08em", textTransform: "uppercase" } }, "★ Хіт переглядів")
              ),
              _e("div", { style: { padding: "22px 24px 24px", flex: 1 } },
                _e("div", { style: { fontSize: 12, fontWeight: 700, color: "#fcd535", letterSpacing: "0.06em", marginBottom: 10 } }, hero.author + " · " + hero.views + " переглядів"),
                _e("div", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.25, color: "#f5f1e8", letterSpacing: "-0.01em" } }, hero.title)
              )
            )
          ),
          // RIGHT — 2 thumb-карточки в стек на 1/3 ширины. Каждая = ровно половина высоты hero.
          _e("div", { style: { display: "grid", gridTemplateRows: "1fr 1fr", gap: 18, height: "100%" } },
            rest.slice(0, 2).map((v, i) => _e(Reveal, { key: i, delay: String(i + 2) },
              _e("a", {
                href: `https://www.youtube.com/watch?v=${v.id}`, target: "_blank", rel: "noopener noreferrer",
                style: { display: "flex", flexDirection: "column", height: "100%", background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "var(--fg)" }
              },
                _e("div", { style: { position: "relative", aspectRatio: "16/9", background: `url(https://img.youtube.com/vi/${v.id}/hqdefault.jpg) center / cover, #111`, flexShrink: 0 } },
                  _e(PlayBtn, { size: 42 })
                ),
                _e("div", { style: { padding: "12px 14px 14px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" } },
                  _e("div", { style: { fontSize: 10, fontWeight: 700, color: "#fcd535", letterSpacing: "0.06em", marginBottom: 5 } }, v.author + " · " + v.views),
                  _e("div", { style: { fontSize: 13, fontWeight: 700, lineHeight: 1.3, color: "#f5f1e8", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } }, v.title)
                )
              )
            ))
          )
        ),
        // BOTTOM — 3 видео в 3-col grid, все одного размера
        _e("div", { className: "hh-yt-bottom", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 18 } },
          rest.slice(2).map((v, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("a", {
              href: `https://www.youtube.com/watch?v=${v.id}`, target: "_blank", rel: "noopener noreferrer",
              style: { display: "flex", flexDirection: "column", height: "100%", background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", textDecoration: "none", color: "var(--fg)" }
            },
              _e("div", { style: { position: "relative", aspectRatio: "16/9", background: `url(https://img.youtube.com/vi/${v.id}/hqdefault.jpg) center / cover, #111` } },
                _e(PlayBtn, { size: 44 })
              ),
              _e("div", { style: { padding: "14px 16px 16px", flex: 1 } },
                _e("div", { style: { fontSize: 11, fontWeight: 700, color: "#fcd535", letterSpacing: "0.06em", marginBottom: 6 } }, v.author + " · " + v.views),
                _e("div", { style: { fontSize: 14, fontWeight: 700, lineHeight: 1.3, color: "#f5f1e8", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } }, v.title)
              )
            )
          ))
        )
      )
    );
  }

  // ============================================================================
  // EVENTS
  // ============================================================================
  function Events() {
    const [isNarrow, setIsNarrow] = useState(() =>
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 980px)").matches
    );
    useEffect(() => {
      if (typeof window === "undefined" || !window.matchMedia) return;
      const mql = window.matchMedia("(max-width: 980px)");
      const fn = e => setIsNarrow(e.matches);
      if (mql.addEventListener) mql.addEventListener("change", fn); else mql.addListener(fn);
      return () => { if (mql.removeEventListener) mql.removeEventListener("change", fn); else mql.removeListener(fn); };
    }, []);
    // v11.0: новая сетка как у Vercel COMMUNITY & EVENTS.
    // Top: 1 big (1.35fr) + 2 stacked (1fr). Bottom: 4 равные.
    const events = [
      // [0] = hero big
      { flag: "🇦🇪", city: "Дубай",     year: "Жовтень 2025", role: "Організатор", title: "Партнерська зустріч після WSCT 2025",     img: "https://hash-hedge-partner.vercel.app/assets/event-dubai.jpg" },
      // [1], [2] = stacked справа
      { flag: "🇦🇪", city: "Дубай",     year: "2025",          role: "Спонсор",      title: "Партнери на Blockchain Live 2025",     img: ((typeof window !== "undefined" && window.__HH_BASE__) || "") + "assets/event-blockchain-forum.jpg" },
      { flag: "🇧🇷", city: "Сан-Паулу", year: "2025",          role: "Організатор", title: "WSCT Бразилія · Офлайн турнір",   img: "https://hash-hedge-partner.vercel.app/assets/event-saopaulo.jpeg" },
      // [3..6] = bottom row 4
      { flag: "🇷🇺", city: "Москва",    year: "2026",          role: "Організатор",  title: "Партнерська вечеря",              img: "https://hash-hedge-partner.vercel.app/assets/event-moscow.jpg" },
      { flag: "🇷🇺", city: "Москва",    year: "2026",          role: "Організатор", title: "Нагородження Топ-партнерів",        img: "https://hash-hedge-partner.vercel.app/assets/event-award.jpg" },
      { flag: "🇦🇪", city: "Дубай",     year: "2025",          role: "Амбасадор Hash Hedge", title: "Нікіта Ануфрієв",         img: ((typeof window !== "undefined" && window.__HH_BASE__) || "") + "assets/web_29.10.25_397.jpg" },
      { flag: "🇦🇪", city: "Дубай",     year: "2025",          role: "Організатор",  title: "Партнерська зустріч",                img: ((typeof window !== "undefined" && window.__HH_BASE__) || "") + "assets/093samartsevanton.webp" }
    ];
    const Card = ({ ev, size }) => _e("div", {
      className: "hh-event-card hh-event-card-" + (size || "sm"),
      style: { position: "relative", height: "100%",
        minHeight: size === "big" ? 460 : (size === "md" ? 218 : 240),
        borderRadius: 20, overflow: "hidden", border: "1px solid var(--line)", background: "#1C1C1F" }
    },
      _e("div", { style: { position: "absolute", inset: 0, backgroundImage: `url(${ev.img})`, backgroundSize: "cover", backgroundPosition: "center" } }),
      _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.88) 100%)", pointerEvents: "none" } }),
      _e("div", { style: { position: "absolute", top: 14, left: 14, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 100, fontSize: 12, fontWeight: 600, color: "#fff" } },
        _e("span", { style: { fontSize: 14 } }, ev.flag),
        _e("span", null, ev.city)
      ),
      _e("div", { style: { position: "absolute", top: 14, right: 14, padding: "6px 12px", background: "rgba(8,8,10,0.78)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 100, fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase" } }, ev.year),
      _e("div", { className: "hh-event-card-bottom",
        style: { position: "absolute", bottom: size === "big" ? 26 : 18, left: size === "big" ? 26 : 18, right: size === "big" ? 26 : 18, color: "#fff" }
      },
        ev.role && _e("div", { style: { display: "inline-block", fontSize: 10, fontWeight: 800, color: "#fcd535", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 } }, ev.role),
        _e("div", { className: "hh-event-card-title",
          style: { fontSize: size === "big" ? 28 : (size === "md" ? 18 : 16), fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em", maxWidth: size === "big" ? 520 : "100%" }
        }, ev.title)
      )
    );
    return _e("section", { id: "events", style: { padding: "100px 0 120px", background: "var(--bg)" } },
      _e("div", { className: "container" },
        // Header в 2 колонки: eyebrow + H2 слева, description справа (как в TG-сообществе)
        _e("div", { className: "hh-events-head", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "end", marginBottom: 48 } },
          _e(Reveal, null,
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Івенти"
              ),
              _e("h2", { style: { fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", margin: 0 } },
                _e("span", { style: { color: "#fcd535" } }, "Живі"), " зустрічі"
              )
            )
          ),
          _e(Reveal, { delay: "2" },
            _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, margin: 0 } },
              "Стань частиною партнерської спільноти Hash Hedge. Ми регулярно проводимо офлайн-івенти, де можна познайомитися з іншими топ-партнерами, обмінятися досвідом і просто чудово відпочити."
            )
          )
        ),
        // v11.0: Vercel-сетка — top row (1 big 1.35fr + 2 stacked 1fr) + bottom row 4-col
        // v12.1 mobile (≤980): 1 большая карточка + остальные горизонтальным слайдером
        isNarrow
          ? _e(F, null,
              _e(Reveal, { delay: "1" }, _e(Card, { ev: events[0], size: "big" })),
              _e("div", { className: "hh-events-slider", style: { display: "flex", gap: 12, overflowX: "auto", overflowY: "hidden", scrollSnapType: "x proximity", WebkitOverflowScrolling: "touch", margin: "14px -16px 0", padding: "2px 16px 14px" } },
                events.slice(1).map((ev, i) => _e("div", { key: i, style: { flex: "0 0 78%", scrollSnapAlign: "start", minWidth: 0 } }, _e(Card, { ev, size: "sm" })))
              )
            )
          : _e(F, null,
              _e("div", { className: "hh-events-top", style: { display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 18, marginBottom: 18 } },
                _e(Reveal, { delay: "1" }, _e(Card, { ev: events[0], size: "big" })),
                _e("div", { style: { display: "grid", gridTemplateRows: "1fr 1fr", gap: 18 } },
                  _e(Reveal, { delay: "2" }, _e(Card, { ev: events[1], size: "md" })),
                  _e(Reveal, { delay: "3" }, _e(Card, { ev: events[2], size: "md" }))
                )
              ),
              _e("div", { className: "hh-events-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 } },
                events.slice(3).map((ev, i) => _e(Reveal, { key: i, delay: String(i + 4) }, _e(Card, { ev, size: "sm" })))
              )
            )
      )
    );
  }

  // ============================================================================
  // TELEGRAM COMMUNITY (закрытый чат для партнёров)
  // ============================================================================
  function TelegramCommunity() {
    // Базовые каналы партнёрской программы Hash Hedge Partner | CIS — контент сохранён.
    // Визуально приведено к стилю TelegramChannelList на главной RU: эмодзи на прозрачном фоне (без цветного кружка).
    const channelsBase = [
      { ic: "#",  name: "Новини 📩",      sub: "Новий особистий кабінет партнера…",      time: "ВТ",     pinned: true },
      { ic: "🎬", name: "Контент",         sub: "Queen Prop: Готово, і вам будь ласка 😊", time: "НД",     unread: 29 },
      { ic: "📣", name: "Чат партнерів",   sub: "Друзі, всім привіт! Нагадуємо…",     time: "ПТ",     unread: 13 },
      { ic: "⚡", name: "Акції",           sub: "Flash Sale на Hash Hedge: 28–29 травня",   time: "ЧТ",     unread: 6  },
      { ic: "📝", name: "Промо матеріали", sub: "оновили банери для сторіс",          time: "зараз", unread: 1  }
    ];
    // Сценарий «живого» движения в чате партнёров (имитация переписки): меняется sub/time/unread
    // у одного из каналов, активный канал (выделение строки) переключается.
    const tgScenes = [
      { activeIdx: 4, overrides: { 4: { sub: "оновили банери для сторіс",                                   time: "зараз",  unread: 1 } } },
      { activeIdx: 2, overrides: { 2: { sub: "друкує…",                                                       time: "зараз",  unread: 0, subColor: "#5BB5E8" } } },
      { activeIdx: 2, overrides: { 2: { sub: "Максим · Алмати 🇰🇿: щойно пройшов Level 3 🔥",              time: "зараз",  unread: 1 } } },
      { activeIdx: 2, overrides: { 2: { sub: "Igor K.: класний кейс — треба робити відос",                     time: "зараз",  unread: 2 } } },
      { activeIdx: 2, overrides: { 2: { sub: "друкує…",                                                       time: "зараз",  unread: 2, subColor: "#5BB5E8" } } },
      { activeIdx: 2, overrides: { 2: { sub: "Olga · Москва: дякую за промо-матеріали, забрала 🤝",          time: "зараз",  unread: 3 } } }
    ];
    const tgRef = useRef(null);
    const tgInView = useInView(tgRef, { threshold: 0.3 });
    const [tgStep, setTgStep] = useState(0);
    useEffect(() => {
      if (!tgInView) return;
      // первое появление каналов длится ~5 × 0.5s = 2.5s, потом запускаем сценарий
      const initialDelay = 3000;
      const tick = 3500;
      let i = 0;
      const start = setTimeout(function loop() {
        i = (i + 1) % tgScenes.length;
        setTgStep(i);
        timer = setTimeout(loop, tick);
      }, initialDelay);
      let timer = start;
      return () => clearTimeout(timer);
    }, [tgInView]);
    const scene = tgScenes[tgStep] || tgScenes[0];
    const channels = channelsBase.map((c, i) => {
      const ov = scene.overrides && scene.overrides[i];
      return Object.assign({}, c, ov || {}, { active: i === scene.activeIdx });
    });
    // v5.2: стиль 1-в-1 с TG-сообществом на главной RU — фон var(--bg-elev), синий glow слева внизу,
    // синий акцент в eyebrow/H2, карточки статистики на var(--bg-card).
    return _e("section", { id: "telegram", "data-no-glow": true,
      style: {
        padding: "100px 0 120px",
        background: "var(--bg-elev)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1
      }
    },
      // Большой синий blur-круг слева внизу — как на главной
      _e("div", { "aria-hidden": true, className: "glow", style: {
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "#2AABEE", left: "-10%", top: "30%",
        filter: "blur(120px)", opacity: 0.07, pointerEvents: "none", zIndex: 0
      } }),
      _e("style", null, `
        /* Одноразовое появление каналов */
        @keyframes hh-tg-row-in {
          0%   { opacity: 0; transform: translateY(-6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hh-tg-badge-pulse {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 0 0 rgba(91,181,232,0.5); }
          50%      { transform: scale(1.12); box-shadow: 0 0 0 6px rgba(91,181,232,0); }
        }
      `),
      _e("div", { className: "container" },
        _e("div", { className: "hh-tg-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } },

          // LEFT — title + description + 2x2 KPI. v5.2: синий акцент как на главной RU
          _e(Reveal, null,
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 24 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#2AABEE", boxShadow: "0 0 12px #2AABEE" } }),
                "Telegram-спільнота"
              ),
              _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 22 } },
                _e("span", { style: { color: "#2AABEE" } }, "Закритий чат"), _e("br", null),
                "для партнерів"
              ),
              _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 32, maxWidth: 540 } },
                "Ексклюзивні промо-матеріали, спеціальні акції та пряме спілкування з командою Hash Hedge. Доступ після реєстрації."
              ),
              _e("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 22 } },
                [
                  ["332+",    "Учасників"],
                  ["146",     "Зараз онлайн"],
                  ["<2 хв",  "Відповідь менеджера"],
                  ["24/7",    "Чат відкритий завжди"]
                ].map(([v, l], i) => _e("div", { key: i, style: { padding: "20px 22px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14 } },
                  _e("div", { style: { fontSize: 32, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6, fontFamily: "Onest, sans-serif" } }, v),
                  _e("div", { style: { fontSize: 11, color: "#a1a0a4", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" } }, l)
                ))
              ),
              _e("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#a1a0a4", lineHeight: 1.5 } },
                _e("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#2AABEE" } }),
                "Закрита спільнота — доступ відкривається після реєстрації партнера через менеджера"
              )
            )
          ),

          // RIGHT — iPhone mockup как на скрине-эталоне (dark theme, notch, full UI)
          // v10.5: убрали Reveal-обёртку и className "hh-telegram-mobile-visual" (был конфликт
          // с глобальным main-CSS правилом `display:none`). На мобиле IntersectionObserver
          // не успевал сработать и правая колонка зависала на opacity:0 — iPhone был невидим.
          _e("div", { style: { display: "block", opacity: 1 } },
            _e("div", { ref: tgRef, style: { maxWidth: 380, margin: "0 auto", position: "relative", opacity: 1 } },
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
                        "332 учасники, ", _e("span", { style: { color: "#4ade80" } }, "146 у мережі")
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
                      "Пошук"
                    )
                  ),
                  // Channels list — каналы появляются один раз когда секция в viewport.
                  // Затем в активном канале «Чат партнёров» по сценарию меняется sub/badge — имитация переписки.
                  _e("div", { style: { display: "flex", flexDirection: "column", borderTop: "0.5px solid rgba(255,255,255,0.06)" } },
                    channels.map((ch, i) => _e("div", { key: i,
                      style: {
                        display: "grid", gridTemplateColumns: "44px 1fr auto", gap: 12, alignItems: "center",
                        padding: "10px 16px",
                        background: ch.active ? "rgba(43,156,222,0.16)" : "transparent",
                        borderBottom: "0.5px solid rgba(255,255,255,0.04)",
                        transition: "background .35s",
                        // v10.7: opacity 1 всегда — раньше зависел от tgInView, и на мобиле IO с threshold 0.3
                        // не успевал сработать на высоком iPhone-мокапе → каналы оставались невидимыми
                        animation: tgInView ? `hh-tg-row-in 0.5s ease ${i * 0.45}s both` : "none",
                        opacity: 1
                      }
                    },
                      // Эмодзи на прозрачном фоне — как на главной RU (без цветных кружков)
                      _e("div", { style: { width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24, lineHeight: 1 } }, ch.ic),
                      _e("div", { style: { minWidth: 0 } },
                        _e("div", { style: { fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3, letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, ch.name),
                        _e("div", { style: { fontSize: 13, color: ch.subColor || "#8E8E93", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontStyle: ch.subColor ? "italic" : "normal" } }, ch.sub)
                      ),
                      _e("div", { style: { textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 } },
                        _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: ch.active ? "#5BB5E8" : "#8E8E93" } },
                          ch.pinned && _e("svg", { width: 11, height: 11, viewBox: "0 0 24 24", style: { fill: "#636366" } }, _e("path", { d: "M12 2L8 6h3v6l-5 4v2h12v-2l-5-4V6h3L12 2z", style: { fill: "#636366" } })),
                          ch.time
                        ),
                        ch.unread ? _e("span", {
                          style: {
                            display: "inline-block", minWidth: 22, padding: "2px 7px",
                            background: "#5BB5E8", color: "#fff", borderRadius: 100,
                            fontSize: 12, fontWeight: 700, textAlign: "center",
                            animation: ch.active ? "hh-tg-badge-pulse 1.6s ease-in-out infinite" : "none"
                          }
                        }, ch.unread) : null,
                        !ch.unread && ch.pinned && _e("span", { style: { color: "#636366", fontSize: 14 } }, "★")
                      )
                    )),
                    // Пустое пространство снизу — на десктопе имитация конца списка чатов,
                    // на мобиле обрезается (см. v10.11 CSS .hh-tg-empty)
                    _e("div", { className: "hh-tg-empty", style: { minHeight: 220 } })
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
  // SUPPORT (v11.0 — Meet Tati в стиле Vercel)
  // ============================================================================
  function Support() {
    const SUP_BASE = (typeof window !== "undefined" && window.__HH_BASE__) || "https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@main/";
    const features = [
      "Допоможемо запуститися протягом одного дня",
      "Надамо готові маркетингові матеріали від Hash Hedge",
      "Покажемо, які зв'язки працюють найкраще для твоєї аудиторії",
      // v12.4: финальная фраза — без галочки, жирная 15px
      { strong: true, node: _e(F, null, "З нашими афіліат-менеджерами партнери виходять на ", _e("b", { style: { color: "#fcd535", fontWeight: 800 } }, "п'ятизначний дохід")) }
    ];
    return _e("section", { id: "support", className: "hh-support-section",
      style: { padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }
    },
      _e("div", { className: "container" },
        _e("div", { className: "hh-support-grid", style: {
          display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "center"
        } },
          _e(Reveal, null,
            _e("div", { style: {
              position: "relative", aspectRatio: "1 / 1", minHeight: 420,
              borderRadius: 24, overflow: "hidden",
              border: "1px solid var(--line)",
              background: "#1C1C1F"
            }, className: "hh-tati-photo" },
              _e("img", { src: SUP_BASE + "assets/tati.jpg", alt: "Tati — Head of Affiliates",
                className: "hh-tati-img",
                style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 28%" }
              }),
              _e("div", { className: "hh-tati-badge", style: {
                position: "absolute", left: 16, right: 16, bottom: 16,
                padding: "14px 18px", borderRadius: 14,
                background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.10)",
                display: "flex", justifyContent: "space-between", alignItems: "center"
              } },
                _e("div", null,
                  _e("div", { style: { fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" } }, "Tati"),
                  _e("div", { style: { fontSize: 12, color: "#cfcfd3", marginTop: 2 } }, "Head of Affiliates")
                ),
                _e("span", { className: "hh-tati-online", style: {
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 11px", borderRadius: 100,
                  background: "rgba(74,222,128,0.16)",
                  border: "1px solid rgba(74,222,128,0.4)",
                  fontSize: 11, fontWeight: 700, color: "#9ef0c0", letterSpacing: "0.08em", textTransform: "uppercase"
                } },
                  _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                  "Онлайн"
                )
              )
            )
          ),
          _e(Reveal, { delay: "2" },
            _e("div", null,
              _e("span", {
                style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 100, border: "1px solid var(--line)", background: "rgba(255,255,255,0.02)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a0a4", marginBottom: 22 }
              },
                _e("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" } }),
                "Персональна підтримка"
              ),
              _e("h2", { style: { fontSize: "clamp(36px, 4.8vw, 60px)", lineHeight: 1.04, fontWeight: 800, letterSpacing: "-0.03em", color: "#f5f1e8", margin: "0 0 20px" } },
                "Поруч", _e("br", null),
                _e("span", { style: { color: "#fcd535" } }, "на кожному етапі")
              ),
              _e("p", { style: { fontSize: 16, color: "#a1a0a4", lineHeight: 1.55, marginBottom: 32 } },
                "З першого дня тебе супроводжуватиме персональний менеджер. Керівниця партнерської підтримки Tati та її команда допоможуть тобі оптимізувати стратегію і масштабувати трафік."
              ),
              _e("div", { className: "hh-sup-features", style: { borderTop: "1px solid var(--line)", marginBottom: 32 } },
                features.map((f, i) => {
                  const isStrong = typeof f === "object" && f !== null && f.strong;
                  return _e("div", { key: i, style: {
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "16px 0",
                    borderBottom: "1px solid var(--line)"
                  } },
                    !isStrong && _e("span", { style: {
                      width: 22, height: 22, borderRadius: "50%",
                      background: "rgba(252,213,53,0.12)",
                      border: "1px solid rgba(252,213,53,0.40)",
                      color: "#fcd535", flexShrink: 0,
                      display: "inline-flex", alignItems: "center", justifyContent: "center"
                    } },
                      _e("svg", { width: 12, height: 12, viewBox: "0 0 24 24", fill: "none",
                        style: { stroke: "#fcd535", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } },
                        _e("path", { d: "M5 12l4 4L19 7" })
                      )
                    ),
                    _e("span", { style: { fontSize: 15, fontWeight: isStrong ? 700 : 400, color: "#f5f1e8", lineHeight: 1.5 } }, isStrong ? f.node : f)
                  );
                })
              ),
              _e("div", { style: { display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 600 } },
                _e("a", { href: "https://partner.hashhedge.com/auth/signup/", target: "_blank", rel: "noopener noreferrer",
                  className: "hh-btn-yellow hh-tati-cta",
                  style: {
                    padding: "16px 24px", borderRadius: 100, fontSize: 15, fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                    flex: "1 1 220px", minWidth: 0,
                    boxShadow: "0 0 0 1px rgba(252,213,53,0.30), 0 10px 26px -10px rgba(252,213,53,0.45)"
                  }
                }, "Стати партнером"),
                _e("a", { href: "https://t.me/hashhedge_affiliate", target: "_blank", rel: "noopener noreferrer",
                  className: "hh-btn-tg hh-tati-tg",
                  style: {
                    padding: "16px 24px", borderRadius: 100, fontSize: 15, fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                    flex: "1 1 220px", minWidth: 0,
                    color: "#fff", background: "#229ED9",
                    boxShadow: "0 12px 32px -10px rgba(34,158,217,0.6)"
                  }
                },
                  _e("svg", { width: 20, height: 20, viewBox: "0 0 24 24", style: { fill: "#fff" } },
                    _e("path", { d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z", style: { fill: "#fff" } })
                  ),
                  _e("span", { style: { color: "#fff" } }, "Зв'язатися з підтримкою")
                )
              )
            )
          )
        )
      )
    );
  }

  // ============================================================================

  function FAQ() {
    const items = [
      { q: "Як працює партнерська програма Hash Hedge?", a: "Програма працює за моделлю RevShare: ти отримуєш від 50% до 80% прибутку компанії з кожної покупки челенджу за твоїм реферальним посиланням. Нарахування — довічні, поки реферал залишається активним." },
      { q: "Що вважається «прибутком компанії»?", a: "Прибуток = вартість челенджу − 21% (7% — комісія платіжної системи, 14% — резервний фонд). Наприклад, з челенджу Elite за $499 база становить близько $394 — і на стартовому рівні 50% ти отримуєш приблизно $197 чистими." },
      { q: "Як зростає мій відсоток RevShare?", a: "Усі партнери стартують з 50%. Кожного 1-го числа місяця відсоток перераховується за кількістю челенджів, куплених твоїми рефералами за минулий місяць, і діє весь наступний місяць. Максимум — 80% при 700+ продажах на місяць." },
      { q: "Чи заробляю я з прибутку трейдерів?", a: "Так. Якщо реферал проходить челендж і торгує в плюс, він отримує 80% прибутку, компанія — 20%, а ти отримуєш свій % RevShare з цих 20%. Приклад: трейдер заробив $10 000 → компанія отримує $2 000 → тобі до $1 600." },
      { q: "Коли і як відбуваються виплати?", a: "Запитай виплату прямо в партнерському кабінеті — вона надійде в USDT на твій гаманець протягом 72 годин. Мінімум до виведення — $100; перша виплата доступна після 5 рефералів з покупкою." },
      { q: "Чи є дохід із залучених партнерів?", a: "Так, багаторівнева програма: 5% з доходу партнера, якого ти привів напряму, і 3% з партнера наступного рівня. Ці відсотки платить компанія зверху — дохід твоїх субпартнерів не зменшується." },
      { q: "Чи потрібно бути трейдером, щоб брати участь?", a: "Ні. Партнером може стати будь-хто — блогер, маркетолог, інфлюенсер або власник ком'юніті. Досвід у трейдингу не потрібен, а працювати можна з аудиторією зі 154 країн." },
      { q: "Які ліміти на виведення коштів?", a: "Мінімальна сума до виведення — $100. Перша виплата стає доступною після того, як 5 твоїх рефералів зробили хоча б одну покупку — це захищає програму від самореферальства. Далі виводь за запитом з кабінету, без обмежень за частотою." }
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
            _e("h2", { style: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 16 } }, "Часті запитання"),
            _e("p", { style: { fontSize: 16, color: "#a1a0a4" } }, "Усе, що потрібно знати про партнерську програму.")
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 } },
            items.map((it, i) => _e("div", {
              key: i,
              style: { background: "#1C1C1F", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }
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
              background: "#1C1C1F", border: "1px solid rgba(43,156,222,0.4)", borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap"
            }
          },
            _e("div", { style: { flex: "1 1 320px", minWidth: 0 } },
              _e("div", { style: { fontSize: 22, fontWeight: 700, color: "#f5f1e8", marginBottom: 8 } },
                "Залишилися ", _e("span", { style: { color: "#fcd535" } }, "питання?")
              ),
              _e("div", { style: { fontSize: 14, color: "#a1a0a4", lineHeight: 1.5, margin: 0 } },
                "Напиши в партнерську підтримку в Telegram — допоможемо і відповімо на всі питання щодо партнерської програми."
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
              _e("span", { style: { color: "#fff" } }, "Підтримка в Telegram")
            )
          )
        )
      )
    );
  }
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
    return _e("section", { id: "cta", "data-no-glow": true, style: { padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" } },
      _e("style", null, `
        @keyframes hh-cta-dot-blink {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%      { opacity: 0.25; transform: scale(0.7); }
        }
        @keyframes hh-cta-dot-glow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.05; transform: scale(1.6); }
        }
        /* v11.0: падающие цифры — matrix-rain в стиле Vercel finale */
        @keyframes hh-fall {
          0%   { transform: translateY(-20px); opacity: 0; }
          15%  { opacity: 0.55; }
          85%  { opacity: 0.40; }
          100% { transform: translateY(320px); opacity: 0; }
        }
        .hh-cta-rain { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
        .hh-cta-rain > span {
          position: absolute; top: 0;
          font-family: "Onest", ui-monospace, monospace;
          font-weight: 800;
          color: rgba(252,213,53,0.55);
          letter-spacing: -0.02em;
          white-space: nowrap;
          animation: hh-fall linear infinite;
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
            // Падающие цифры — matrix-rain слой на самом фоне
            _e("div", { className: "hh-cta-rain", "aria-hidden": "true" },
              [
                { t: "$642",    l: "8%",  fs: 22, dur: 6.5, delay: 0 },
                { t: "USDT",    l: "17%", fs: 16, dur: 8,   delay: 1.2 },
                { t: "80%",     l: "26%", fs: 26, dur: 5.5, delay: 2.4 },
                { t: "$1,240",  l: "34%", fs: 18, dur: 9,   delay: 0.6 },
                { t: "642",     l: "43%", fs: 20, dur: 6,   delay: 3.0 },
                { t: "$2,340",  l: "51%", fs: 18, dur: 7.5, delay: 1.6 },
                { t: "55%",     l: "59%", fs: 24, dur: 6.8, delay: 4.2 },
                { t: "$318",    l: "67%", fs: 16, dur: 8.5, delay: 0.4 },
                { t: "70%",     l: "75%", fs: 26, dur: 5.8, delay: 2.0 },
                { t: "USDT",    l: "83%", fs: 18, dur: 7.2, delay: 3.5 },
                { t: "$551",    l: "91%", fs: 20, dur: 6.4, delay: 1.0 }
              ].map((n, i) => _e("span", { key: "rain" + i, style: {
                left: n.l,
                fontSize: n.fs,
                animationDuration: n.dur + "s",
                animationDelay: n.delay + "s"
              } }, n.t))
            ),
            // Chart background — тонкая линия SVG
            _e("div", { "aria-hidden": true, style: { position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 } },
              _e("svg", { width: "100%", height: "100%", viewBox: "0 0 1200 300", preserveAspectRatio: "none", style: { position: "absolute", inset: 0 } },
                _e("defs", null,
                  _e("linearGradient", { id: "bigctaFill", x1: "0", y1: "0", x2: "0", y2: "1" },
                    _e("stop", { offset: "0%", stopColor: "#fcd535", stopOpacity: 0.18 }),
                    _e("stop", { offset: "100%", stopColor: "#fcd535", stopOpacity: 0 })
                  )
                ),
                _e("path", { d: chartPath + " L 1200 300 L 0 300 Z", style: { fill: "url(#bigctaFill)" } }),
                _e("path", { d: chartPath, style: { stroke: "#fcd535", strokeWidth: 1.4, fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: 0.85 } })
              )
            ),
            // Точки на линии — HTML divs (всегда идеальные круги, не подвержены preserveAspectRatio none).
            // Внешняя обёртка центрирует точку (translate -50%,-50%), внутренние div'ы анимируют scale/opacity.
            _e("div", { "aria-hidden": true, style: { position: "absolute", inset: 0, pointerEvents: "none" } },
              dotsAlongLine.map((d, i) => _e("div", { key: "dot" + i,
                style: {
                  position: "absolute",
                  left: `${(d.x / 1200) * 100}%`,
                  top:  `${(d.y / 300) * 100}%`,
                  width: 24, height: 24,
                  marginLeft: -12, marginTop: -12,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }
              },
                // внешний glow — отдельный слой
                _e("div", { style: {
                  position: "absolute",
                  width: 18, height: 18, borderRadius: "50%",
                  background: "rgba(252,213,53,0.45)",
                  animation: `hh-cta-dot-glow 2.4s ease-in-out ${d.delay}s infinite`
                } }),
                // ядро — отдельный слой
                _e("div", { style: {
                  position: "absolute",
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#fcd535",
                  boxShadow: "0 0 8px rgba(252,213,53,0.7)",
                  animation: `hh-cta-dot-blink 2.4s ease-in-out ${d.delay}s infinite`
                } })
              ))
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
                "Готовий почати?"
              ),
              // Заголовок в 2 строки
              _e("h2", { style: { fontSize: "clamp(38px, 5.6vw, 64px)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.025em", color: "#f5f1e8", marginBottom: 28 } },
                "Стань партнером", _e("br", null),
                _e("span", { style: { color: "#fcd535", textShadow: "0 0 36px rgba(252,213,53,0.45)" } }, "Hash Hedge")
              ),
              _e("div", { style: { display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" } },
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary",
                  style: { textDecoration: "none" }
                }, "Зареєструватися"),
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-ghost",
                  style: { textDecoration: "none" }
                }, "Увійти в кабінет")
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
        { label: "Челенджі",              href: "https://www.hashhedge.com/ua#challenge" },
        { label: "Партнерська програма",  href: "https://www.hashhedge.com/affiliateprogram/ua" },
        { label: "Блог",                   href: "https://www.hashhedge.com/blog/ru" },
        { label: "Посібник",            href: "https://hashhedge.gitbook.io/hashhedge-user-guide" }
      ]},
      { t: "Про нас", l: [
        { label: "Підтримка", href: "https://t.me/hashhedgesupportbot" },
        { label: "FAQ",       href: "https://www.hashhedge.com/faq/ru" },
        { label: "Вакансії",  href: "https://www.hashhedge.com/vacancies" }
      ]},
      { t: "Документи", l: [
        { label: "Політика конфіденційності", href: "https://www.hashhedge.com/privacy-policy" },
        { label: "Умови використання",       href: "https://www.hashhedge.com/terms-and-conditions" },
        { label: "Комерційні умови",        href: "https://www.hashhedge.com/commercial-terms" },
        { label: "Партнерська політика",        href: "https://www.hashhedge.com/affiliate-politics" }
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
              "Hash Hedge — платформа для проп-трейдингу: торгуй криптовалютою і TradFi-активами. Керуй капіталом до $150K."
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
          _e("div", { style: { fontSize: 14, fontWeight: 800, color: "rgba(238,238,243,0.8)" } }, "Наші партнери"),
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
            "Уся інформація на цьому сайті призначена виключно для ознайомлення з торгівлею на фінансових ринках і жодним чином не є конкретною інвестиційною, бізнес- чи іншою рекомендацією щодо торгівлі інвестиційними інструментами."
          )
        )
      )
    );
  }

  function MobileCTABar() {
    // Появляется после прокрутки на 2 viewport-высоты вниз
    const [show, setShow] = useState(false);
    useEffect(() => {
      const onScroll = () => {
        const threshold = window.innerHeight * 2;
        setShow(window.scrollY > threshold);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return _e("div", { className: "hh-mobile-cta",
      style: {
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90,
        padding: "12px 16px", display: "none",
        background: "rgba(8,8,10,0.94)", backdropFilter: "blur(14px)",
        borderTop: "1px solid var(--line)",
        transform: show ? "translateY(0)" : "translateY(110%)",
        transition: "transform .35s ease",
        pointerEvents: show ? "auto" : "none"
      }
    },
      _e("a", { href: "https://partner.hashhedge.com", className: "hh-btn-yellow",
        style: { display: "block", textAlign: "center", padding: "14px 18px", borderRadius: 100, fontSize: 14, fontWeight: 800, textDecoration: "none" }
      }, "Стати партнером")
    );
  }

  // ============================================================================
  // APP
  // ============================================================================
  function App() {
    // Жёлтые размытые круги добавляются через CSS ::after на каждой секции.
    // Чередуется слева/справа. TG-секция помечена data-no-glow, Footer исключён по тегу.
    return _e("div", { className: "tilda-html-hashhedge hh-with-glow" },
      _e(Header, null),
      _e(Hero, null),
      // v11.1: Marquee убрана — дублировала Trustpilot 4-stat row из Hero
      // _e(Marquee, null),
      _e(AboutProgram, null),
      _e(WhyPartner, null),
      // IncomeSources («3 источника дохода» / «Как формируется доход партнёра») убран по правкам RU —
      // компонент сохранён ниже для будущей доработки.
      // _e(IncomeSources, null),
      // v11.0: Tiers (Партнёрские уровни) убраны — данные про % будут только в Calculator
      // _e(Tiers, null),
      _e(Calculator, null),
      _e(Steps, null),
      // v11.0: Leaderboard убран; CabinetPreview (блок с дашбордом/ЛК) возвращён по правкам RU
      _e(CabinetPreview, null),
      // _e(Leaderboard, null),
      // PartnerContent («Контент партнёров / Что помогает партнёрам зарабатывать») убран по правкам RU
      // _e(PartnerContent, null),
      _e(Events, null),
      // v11.0: TelegramCommunity (Закрытый чат) убран
      // _e(TelegramCommunity, null),
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
      /* === v12.3: range-slider Calculator — 1-в-1 .aff-range с hashhedge-affiliate.vercel.app.
            Заливка трека жёлтым до позиции ползунка через CSS-переменную --fill (ставится из React). === */
      .hh-calc-slider {
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        width: 100% !important;
        height: 8px !important;
        border-radius: 999px !important;
        background: linear-gradient(90deg, #fcd535 0%, #fcd535 var(--fill, 25%), rgba(255,255,255,0.1) var(--fill, 25%), rgba(255,255,255,0.1) 100%) !important;
        outline: none !important;
        cursor: pointer !important;
        padding: 0 !important;
        border: none !important;
      }
      .hh-calc-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 26px; height: 26px;
        border-radius: 50%;
        background: #fcd535;
        border: 4px solid #16140e;
        box-shadow: 0 4px 16px rgba(252,213,53,0.5);
        cursor: grab;
      }
      .hh-calc-slider::-webkit-slider-thumb:active { cursor: grabbing; }
      .hh-calc-slider::-moz-range-track { height: 8px; border-radius: 999px; background: transparent; border: none; }
      .hh-calc-slider::-moz-range-thumb {
        width: 18px; height: 18px;
        border-radius: 50%;
        background: #fcd535;
        border: 4px solid #16140e;
        box-shadow: 0 4px 16px rgba(252,213,53,0.5);
        cursor: grab;
      }

      /* === v11.0: WhyPartner — минимальные subtle-анимации картинок в vis-area.
            Чередуем 3 типа: float (translate ±5px), pulse (scale 1→1.03), glow (brightness 1→1.1).
            Делается через nth-child карточки в hh-why-grid. Лёгкие, не отвлекающие. === */
      @keyframes hh-vis-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      @keyframes hh-vis-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.035); } }
      @keyframes hh-vis-glow  { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.10) drop-shadow(0 0 8px rgba(252,213,53,0.18)); } }
      .hh-why-grid > *:nth-child(6n+1) .hh-why-vis-clip { animation: hh-vis-float 5.5s ease-in-out infinite; }
      .hh-why-grid > *:nth-child(6n+2) .hh-why-vis-clip { animation: hh-vis-pulse 6.5s ease-in-out infinite; }
      .hh-why-grid > *:nth-child(6n+3) .hh-why-vis-clip { animation: hh-vis-glow  4.5s ease-in-out infinite; }
      .hh-why-grid > *:nth-child(6n+4) .hh-why-vis-clip { animation: hh-vis-pulse 5s ease-in-out infinite reverse; }
      .hh-why-grid > *:nth-child(6n+5) .hh-why-vis-clip { animation: hh-vis-float 6s ease-in-out infinite reverse; }
      .hh-why-grid > *:nth-child(6n)   .hh-why-vis-clip { animation: hh-vis-glow  5.2s ease-in-out infinite reverse; }
      @media (prefers-reduced-motion: reduce) {
        .hh-why-grid > * .hh-why-vis-clip { animation: none !important; }
      }

      /* === v10.13: detail-card Battle Pass — align-items: center !important. Глобал CSS
            (hashhedge-react.css line 6248) бьёт по любому div c grid-template-columns +
            margin-bottom внутри section > .container правилом align-items:end (это для header'ов
            секций главной). У .hh-bp-detail оба свойства есть, и иконка/текст/кнопка съезжали
            вниз вместо центра. Этим override побеждаем по специфичности. === */
      .hh-bp-detail { align-items: center !important; }

      /* === v11.0: новый Hero + About — адаптация под планшет/мобильную сетку === */
      @media (max-width: 980px) {
        .hh-partner-hero-stats { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        .hh-partner-hero-stats > div { border-left: none !important; padding-left: 0 !important; }
        .hh-about-head { grid-template-columns: 1fr !important; gap: 24px !important; align-items: start !important; }
        .hh-about-grid { grid-template-columns: 1fr 1fr !important; }
        /* v11.0 Events: на планшете top→1кол, bottom→2кол */
        .hh-events-top { grid-template-columns: 1fr !important; gap: 14px !important; }
        .hh-events-top > div:last-child { grid-template-rows: auto auto !important; }
        .hh-events-grid { grid-template-columns: 1fr 1fr !important; }
        /* v11.0 Calculator + Support: 2-col → 1-col */
        .hh-calc-head { grid-template-columns: 1fr !important; gap: 24px !important; align-items: start !important; }
        .hh-calc-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        .hh-support-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }
      @media (max-width: 640px) {
        .hh-partner-hero { min-height: auto !important; padding-top: 56px !important; padding-bottom: 40px !important; }
        .hh-partner-hero-bg { background-position: 80% center !important; opacity: 0.35 !important; }
        .hh-partner-hero-text { max-width: 100% !important; }
        .hh-partner-hero-h1 { font-size: 38px !important; line-height: 1.05 !important; }
        .hh-partner-hero-sub { font-size: 16px !important; }
        .hh-partner-hero-cta > a { width: 100% !important; justify-content: center !important; padding: 14px 22px !important; }
        .hh-partner-hero-stats { grid-template-columns: 1fr !important; margin-top: 48px !important; gap: 12px !important; }
        .hh-about-grid { grid-template-columns: 1fr !important; }
        .hh-about-card { padding: 22px 20px !important; }
      }

      @media (max-width: 980px) {
        .hh-partner-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        .hh-why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-income-grid { grid-template-columns: 1fr !important; }
        .hh-tiers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-calc-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        .hh-steps-grid, .hh-steps-head, .hh-cab-head, .hh-lb-head, .hh-yt-head, .hh-sup-head, .hh-events-head { grid-template-columns: 1fr !important; gap: 16px !important; align-items: start !important; }
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
        .hh-lb-row { grid-template-columns: 50px minmax(0, 1fr) auto !important; padding: 12px 16px !important; }
      }

      /* === Desktop default — Steps в 4 колонки === */
      @media (min-width: 981px) {
        .hh-steps-grid { grid-template-columns: repeat(4, 1fr); }
      }

      /* === TG-сетка на планшете/мобиле: 1 колонка чтобы и левая часть, и телефон были видны === */
      @media (max-width: 980px) {
        .hh-tg-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }

      /* === Мобильная версия (≤ 640px) === */
      @media (max-width: 640px) {
        .hh-footer-grid { grid-template-columns: 1fr !important; }

        /* (1) Hero: btn-ghost ярче на мобилке */
        #hashhedge-root .tilda-html-hashhedge.hh-with-glow .hh-partner-hero .btn-ghost {
          color: #fcd535 !important;
          border-color: #fcd535 !important;
          background: rgba(252,213,53,0.08) !important;
        }
        /* (2) Hero candles: меньше по высоте, остаются только сверху */
        .hh-hero-candles { bottom: 65% !important; opacity: 0.7 !important; }

        /* (11) Меньше отступы заголовок↔описание во всех секциях */
        .hh-partner-hero { padding-top: 32px !important; padding-bottom: 32px !important; min-height: auto !important; }
        section[id] { padding-top: 48px !important; padding-bottom: 48px !important; }
        section h2, section .h1 { margin-bottom: 10px !important; }
        section h2 + p, section h2 + .container > p { margin-top: 6px !important; }

        /* === v8.2 mobile: убрать фото мужчины + LiveCard на мобиле === */
        .hh-hero-bg, .hh-hero-fg, .hh-hero-overlay, .hh-hero-livecard-wrap { display: none !important; }
        .hh-partner-hero { background: var(--bg) !important; }
        .hh-partner-hero .container { min-height: auto !important; }

        /* === v8.4: H1 на мобиле меньше (десктоп = 60px) === */
        .hh-partner-hero-h1 {
          font-size: 38px !important;
          white-space: normal !important;
        }

        /* === v8.2 mobile: Marquee 4-stat block — 2x2 grid без вертикальных разделителей === */
        .hh-metrics-strip {
          grid-template-columns: 1fr 1fr !important;
          gap: 10px !important;
          padding: 14px !important;
        }
        .hh-metrics-strip > div {
          border-left: none !important;
          padding: 10px 8px !important;
          background: rgba(255,255,255,0.02);
          border-radius: 12px;
          gap: 10px !important;
        }
        .hh-metrics-strip > div > div:first-child {
          width: 36px !important; height: 36px !important;
        }
        .hh-metrics-strip > div > div:last-child > div:first-child {
          font-size: 18px !important;
        }
        .hh-metrics-strip > div > div:last-child > div:last-child {
          font-size: 10px !important;
        }

        /* === v8.5 mobile WhyPartner: горизонтальная компоновка как на главной — image left + text right === */
        .hh-why-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
        .hh-why-card {
          flex-direction: row !important;
          height: auto !important;
          overflow: hidden !important;
          isolation: isolate !important;
          align-items: stretch !important;
        }
        .hh-why-card-vis {
          width: 140px !important;
          min-width: 140px !important;
          max-width: 140px !important;
          height: auto !important;
          min-height: 100% !important;
          flex-shrink: 0 !important;
          border-bottom: none !important;
          border-right: 1px solid var(--line) !important;
          padding: 8px !important;
          overflow: hidden !important;
          position: relative !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: linear-gradient(180deg, rgba(252,213,53,0.08) 0%, rgba(252,213,53,0.02) 50%, rgba(252,213,53,0) 100%), #0B0B0C !important;
          contain: layout paint !important;
        }
        .hh-why-vis-clip {
          height: 100% !important;
          width: 100% !important;
          overflow: hidden !important;
          position: relative !important;
          contain: layout paint !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        /* Сжимаем композитный контент vis-блоков — уменьшение через transform с компенсацией width */
        .hh-why-vis-clip > * {
          max-width: 100% !important;
          max-height: 100% !important;
          transform: scale(0.55) !important;
          transform-origin: center center !important;
          width: 182% !important;
          flex-shrink: 0 !important;
        }
        .hh-why-vis-clip svg { max-width: 100% !important; max-height: 80px !important; }

        /* === v9.1: UNIFIED 140px vis-area for ALL cards, no overflow === */
        .hh-why-card-vis {
          width: 140px !important;
          min-width: 140px !important;
          max-width: 140px !important;
        }
        /* Default: no transform/scale — content sized via V components mobile branches */
        .hh-why-vis-clip > * {
          transform: none !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .hh-v1-mobile { width: 100% !important; }

        /* Card 1 — V1 уже использует isMobile branch (hh-v1-mobile) */
        .hh-v1-eyebrow, .hh-v1-competitors { display: none !important; }

        /* Card 3 (Больше прибыли): скрыть '5-10×' и подпись 'доход vs ...' — только 2 плашки stacked */
        .hh-why-grid > div:nth-child(3) .hh-viz-3 > div:nth-child(1),
        .hh-why-grid > div:nth-child(3) .hh-viz-3 > div:nth-child(2) { display: none !important; }
        .hh-why-grid > div:nth-child(3) .hh-viz-3 > div:last-child {
          grid-template-columns: 1fr !important;
          gap: 5px !important;
        }
        .hh-why-grid > div:nth-child(3) .hh-viz-3 > div:last-child > div {
          padding: 7px 8px !important;
        }
        .hh-why-grid > div:nth-child(3) .hh-viz-3 > div:last-child > div > div:nth-child(1) { font-size: 9px !important; }
        .hh-why-grid > div:nth-child(3) .hh-viz-3 > div:last-child > div > div:nth-child(2) { font-size: 15px !important; }

        /* === v8.6 PartnerContent (Контент партнёров) mobile: 2 видео подряд + horizontal slider остального === */
        .hh-yt-top {
          grid-template-columns: 1fr !important;
          gap: 14px !important;
        }
        /* Правый стек делается обычным потоком */
        .hh-yt-top > div:last-child {
          display: flex !important;
          flex-direction: column !important;
          gap: 14px !important;
        }
        /* Показываем только первый thumb справа (всего 2 видео сверху: hero + 1 thumb) */
        .hh-yt-top > div:last-child > div:nth-child(n+2) {
          display: none !important;
        }
        /* v10.2: нижний ряд — гладкий horizontal slider. scroll-snap-type proximity вместо mandatory (не дёргается) */
        .hh-yt-bottom {
          display: flex !important;
          grid-template-columns: none !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          scroll-snap-type: x proximity !important;
          scroll-padding-left: 16px !important;
          gap: 12px !important;
          padding: 2px 16px 12px !important;
          margin: 14px -16px 0 !important;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior-x: contain !important;
          scroll-behavior: smooth !important;
        }
        .hh-yt-bottom::-webkit-scrollbar { display: none !important; }
        .hh-yt-bottom > div {
          flex: 0 0 82% !important;
          scroll-snap-align: start !important;
          min-width: 0 !important;
          will-change: transform !important;
        }

        /* === v10.2 mobile: Hero blobs/grid — приглушить, жёлтый сильно режет глаза === */
        .hh-hero-grid { opacity: 0.5 !important; }
        .hh-hero-blob-y { opacity: 0.35 !important; }
        .hh-hero-blob-c { opacity: 0.45 !important; }
        .hh-hero-blob-p { opacity: 0.40 !important; }

        /* === v10.2 mobile: WhyPartner H2 — 3 строки уже сделано через isMobile в JSX === */
        .hh-why-h2 { font-size: 28px !important; line-height: 1.1 !important; }

        /* === v10.2 mobile: Events — 1 hero + horizontal slider === */
        .hh-events-grid {
          display: flex !important;
          grid-template-columns: none !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          scroll-snap-type: x proximity !important;
          gap: 12px !important;
          padding: 2px 16px 12px !important;
          margin: 14px -16px 0 !important;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior-x: contain !important;
          scroll-behavior: smooth !important;
        }
        .hh-events-grid::-webkit-scrollbar { display: none !important; }
        .hh-events-grid > div {
          flex: 0 0 82% !important;
          scroll-snap-align: start !important;
          min-width: 0 !important;
        }

        /* === v10.8 mobile: Battle Pass track — горизонтальный скролл с min-width 680px === */
        .hh-bp-wrap { padding: 40px 16px 28px !important; }
        .hh-bp-track {
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
          scrollbar-width: none !important;
          scroll-snap-type: x proximity !important;
          padding-bottom: 8px !important;
          margin: 0 -16px !important;
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
        .hh-bp-track::-webkit-scrollbar { display: none !important; }
        .hh-bp-track-inner {
          min-width: 680px !important;
          gap: 0 !important;
        }
        .hh-bp-node {
          scroll-snap-align: center !important;
          min-width: 92px !important;
        }
        /* Детальная карточка под треком: иконка + текст на 1 строке, CTA на 2-й */
        .hh-bp-detail {
          grid-template-columns: 56px 1fr !important;
          gap: 14px !important;
          padding: 16px 18px !important;
        }
        .hh-bp-detail > div:first-child {
          width: 56px !important;
          height: 56px !important;
          border-radius: 14px !important;
        }
        .hh-bp-detail-line { font-size: 16px !important; line-height: 1.3 !important; }
        .hh-bp-cta {
          grid-column: 1 / -1 !important;
          justify-self: stretch !important;
          width: 100% !important;
          padding: 12px 18px !important;
        }

        /* === v10.2 mobile: TG-сообщество — пригасить синий blue glow + chat-phone отображается === */
        #telegram .glow { opacity: 0.04 !important; filter: blur(40px) !important; }
        .hh-tg-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        .hh-telegram-mobile-visual, .hh-tg-grid > div:last-child > div { display: block !important; }

        /* === v10.2 mobile: Support — показать chat-mokup === */
        .hh-support-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 16px !important; }
        .hh-support-grid > div { display: block !important; }

        /* === v10.6 КРИТИЧНО: перебиваем правила из глобального hashhedge-react.css которые
              хайдят 2-й child колонки в #telegram и Support на мобильной версии (правила там
              писались для main RU). Селекторы 1-в-1 с теми что в hashhedge-react.css строки 4937-4942
              и 4482-4484 — побеждают по каскаду, т.к. этот блок инжектится позже. === */
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        #hashhedge-root .tilda-html-hashhedge .hh-support-section .container > div:nth-child(2) > div:nth-child(2) {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* === v10.10: убиваем max-height 430 / max-width 300 у iPhone-обёртки из глобального CSS
              (line 4344) — там это писалось под упрощённый мокап main RU, у нас высокий, ужимался === */
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) > div {
          max-width: 360px !important;
          max-height: none !important;
          width: 100% !important;
          margin: 0 auto !important;
        }
        /* Сбрасываем глобальные padding-overrides которые ломают наш iPhone layout */
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) > div > div:first-child {
          height: auto !important;
          padding: 8px !important;
          font-size: inherit !important;
        }
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) > div > div > div:nth-child(2) {
          padding: 12px 28px 8px !important;
        }
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) > div > div > div:nth-child(3) {
          padding: 16px 14px 12px !important;
        }
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) > div > div > div:nth-child(5) > div {
          grid-template-columns: 44px 1fr auto !important;
          gap: 12px !important;
          padding: 10px 16px !important;
        }
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) > div > div > div:nth-child(5) > div > div:first-child {
          width: 44px !important;
          height: 44px !important;
          font-size: 24px !important;
        }

        /* === v10.11: iPhone-мокап — больше отступ сверху + нижний пустой spacer 220→0 (обрезать
              хвост после «Промо-материалы») === */
        #hashhedge-root .tilda-html-hashhedge #telegram .container > div > div:nth-child(2) {
          margin-top: 20px !important;
        }
        .hh-tg-empty { display: none !important; }

        /* === v10.12: Support чат — явный отступ 32px от фото-карточки сверху === */
        .hh-support-grid { gap: 0 !important; }
        .hh-support-grid > div:nth-child(2) { margin-top: 32px !important; }
        .hh-support-grid > div:nth-child(2) > div { min-height: auto !important; padding: 16px !important; }
        /* Сообщения: «you» (мои) справа, «HH» слева — побеждаем любые глобальные overrides */
        .hh-chat-row { display: flex !important; }
        .hh-chat-row-you { justify-content: flex-end !important; text-align: right !important; }
        .hh-chat-row-HH  { justify-content: flex-start !important; text-align: left !important; }
        .hh-chat-row-you .hh-chat-bubble-wrap { margin-left: auto !important; margin-right: 0 !important; align-self: flex-end !important; align-items: flex-end !important; }
        .hh-chat-row-HH  .hh-chat-bubble-wrap { margin-right: auto !important; margin-left: 0 !important; align-self: flex-start !important; align-items: flex-start !important; }
        .hh-why-card-body {
          padding: 12px 14px !important;
          position: relative !important;
          z-index: 2 !important;
          background: #1C1C1F !important;
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
        }
        .hh-why-card-body h3 { font-size: 15px !important; line-height: 1.2 !important; margin-bottom: 4px !important; }
        .hh-why-card-body p { font-size: 12px !important; line-height: 1.4 !important; }

        /* === (v3.7 #3) IncomeSources: row-layout, но номер 01/02/03 СКРЫТ + иконка выше === */
        .hh-income-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        .hh-income-card { flex-direction: row !important; height: auto !important; padding: 16px !important; align-items: flex-start !important; gap: 14px !important; }
        .hh-income-head {
          flex-direction: column !important; align-items: center !important; justify-content: flex-start !important;
          gap: 0 !important; min-width: 56px !important; margin-bottom: 0 !important; flex-shrink: 0 !important;
        }
        /* скрываем номер 01/02/03 (первый ребёнок head) */
        .hh-income-head > div:first-child { display: none !important; }
        .hh-income-body { flex: 1 !important; min-width: 0 !important; }
        .hh-income-body h3 { font-size: 16px !important; margin-bottom: 6px !important; }
        .hh-income-body p { font-size: 13px !important; line-height: 1.45 !important; margin-bottom: 10px !important; }

        /* === (v3.7 #4) Tiers: горизонтальный список + одинаковая высота + НЕ прыгают === */
        .hh-tiers-grid {
          grid-template-columns: none !important;
          display: flex !important;
          flex-wrap: nowrap !important;
          overflow-x: auto !important;
          gap: 12px !important;
          padding-bottom: 12px !important;
          scroll-snap-type: x mandatory !important;
          -webkit-overflow-scrolling: touch !important;
          scrollbar-width: none !important;
          align-items: stretch !important;
        }
        .hh-tiers-grid::-webkit-scrollbar { display: none; }
        /* Принудительно одинаковая высота карточек, фиксируем opacity (нет Reveal-прыжков) */
        .hh-tiers-grid > * {
          flex: 0 0 220px !important;
          scroll-snap-align: start !important;
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
        }
        .hh-tiers-grid > * > div { min-height: 320px !important; }

        /* === (v3.7 #5) Calculator: тексты одного размера, блок «Твой уровень» компактнее === */
        .hh-calc-h2 br { display: none !important; }
        .hh-calc-h2 { font-size: 28px !important; line-height: 1.15 !important; }
        /* (v12.7) УДАЛЕНО: .hh-calc-grid > div:first-child { padding: 0 } — легаси-правило старого
           калькулятора; в новой vercel-вёрстке первый ребёнок грида = .hh-calc-card,
           и это правило (0,2,0) обнуляло её паддинги на мобильной. */
        /* Три текста Calc единого стиля fontSize 11 / lineHeight 1.5 — Tilda CSS не должен перебивать */
        #hashhedge-root .tilda-html-hashhedge .hh-calc-info,
        #hashhedge-root .tilda-html-hashhedge .hh-calc-disclaimer,
        #hashhedge-root .tilda-html-hashhedge .hh-calc-grid > div:first-child > p,
        #hashhedge-root .tilda-html-hashhedge .hh-calc-grid > div:first-child > div:last-of-type {
          font-size: 11px !important;
          line-height: 1.5 !important;
          font-weight: 400 !important;
          color: #a1a0a4 !important;
          font-family: Onest, sans-serif !important;
        }
        /* Компактный блок «Твой уровень · авто» */
        .hh-calc-tier-card { padding: 12px 16px !important; margin-bottom: 10px !important; }
        .hh-calc-tier-card > div > div:first-child > div:nth-child(2) { font-size: 16px !important; }
        .hh-calc-tier-card > div > div:last-child { font-size: 22px !important; }
        /* «Расчёт примерный…» отделить от кнопки */
        #hashhedge-root .tilda-html-hashhedge .hh-calc-disclaimer { margin-top: 20px !important; }

        /* === (v3.7 #6) Steps: гарантированно 1 колонка, круг слева, текст справа === */
        .hh-steps-timeline { display: none !important; }
        .hh-steps-grid { display: grid !important; grid-template-columns: 1fr !important; gap: 10px !important; }
        .hh-steps-grid > * { width: 100% !important; }
        .hh-steps-card {
          display: flex !important; flex-direction: row !important;
          align-items: flex-start !important; gap: 14px !important;
          padding: 16px !important; height: auto !important;
          width: 100% !important; box-sizing: border-box !important;
        }
        .hh-steps-num-mobile { display: inline-flex !important; }
        .hh-steps-card-body { flex: 1 !important; min-width: 0 !important; }
        .hh-steps-card-body h3 { font-size: 16px !important; margin-bottom: 6px !important; }
        .hh-steps-card-body p { font-size: 13px !important; line-height: 1.45 !important; }

        /* CabinetPreview — компактнее */
        .hh-cab-explainers { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
        .hh-cab-mockup { font-size: 11px !important; }

        /* Leaderboard — компактные строки на mobile */
        .hh-lb-row { grid-template-columns: 38px 1fr auto !important; gap: 10px !important; padding: 10px 14px !important; }
        .hh-lb-head-row > div:nth-child(3) { text-align: right !important; }
        .hh-lb-row > div { font-size: 13px !important; }

        /* Events — все 4 карточки одного размера + единый title 18px */
        .hh-event-card { aspect-ratio: 1.5 / 1 !important; }
        .hh-event-card-big { aspect-ratio: 1.5 / 1 !important; }
        .hh-event-card-title { font-size: 18px !important; max-width: 100% !important; }
        .hh-event-card-bottom { bottom: 16px !important; left: 16px !important; right: 16px !important; }

        /* === (v3.7 #7) Telegram-сообщество: телефон масштабируется по mobile-ширине === */
        .hh-tg-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        .hh-tg-grid > *:last-child > div { max-width: 320px !important; }

        /* === (v3.7 #8) Support — photo card имеет компактный minHeight на mobile === */
        .hh-support-grid { gap: 12px !important; }
        .hh-support-grid > div > div { min-height: 360px !important; }

        /* === (v3.7 #9) Sup-ctas карточки ещё ближе === */
        .hh-sup-ctas { gap: 6px !important; margin-top: 8px !important; }
        .hh-sup-ctas > a { padding: 12px 14px !important; }
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

      /* === v12: Why-partner looping micro-animations + hover + Tati (зеркало EN) === */
      /* Bar fills (V1 80%/20%, V5 7 tiers) — repeatedly fill then drain */
      @keyframes hh-fill-loop {
        0%   { transform: scaleX(0); }
        18%  { transform: scaleX(1); }
        82%  { transform: scaleX(1); }
        100% { transform: scaleX(0); }
      }
      .hh-barfill   { transform-origin: left center; animation: hh-fill-loop 4.5s cubic-bezier(.22,1,.36,1) infinite; }
      .hh-barfill-2 { animation-delay: .25s; }
      .hh-tierfill  { transform-origin: left center; animation: hh-fill-loop 4.8s cubic-bezier(.22,1,.36,1) infinite; }

      /* Coin/circle pop-in stagger (V2 timeline) */
      @keyframes hh-coin-pop {
        0%   { opacity: 0; transform: translateY(10px) scale(.8); }
        14%  { opacity: 1; transform: translateY(0)    scale(1);  }
        86%  { opacity: 1; transform: translateY(0)    scale(1);  }
        100% { opacity: 0; transform: translateY(10px) scale(.8); }
      }
      .hh-coin { animation: hh-coin-pop 4.2s ease-in-out infinite; }

      /* USDT payout drop + badge (V4 fast payouts) */
      @keyframes hh-usdt-drop {
        0%   { opacity: 0; transform: translateY(-26px); }
        16%  { opacity: 1; transform: translateY(4px);   }
        24%  {             transform: translateY(0);     }
        86%  { opacity: 1; transform: translateY(0);     }
        100% { opacity: 0; transform: translateY(-26px); }
      }
      .hh-usdt-drop { animation: hh-usdt-drop 4.5s cubic-bezier(.34,1.56,.64,1) infinite; }
      @keyframes hh-payout-badge-in {
        0%, 24%  { opacity: 0; transform: translateY(6px); }
        36%, 86% { opacity: 1; transform: translateY(0);   }
        100%     { opacity: 0; transform: translateY(6px); }
      }
      .hh-payout-badge { animation: hh-payout-badge-in 4.5s ease-in-out infinite; }

      /* Promo badge pulse (V7) */
      @keyframes hh-promo-pulse {
        0%, 100% { transform: scale(1);    box-shadow: 0 0 0 0 rgba(252,213,53,0); }
        50%      { transform: scale(1.06); box-shadow: 0 0 18px -2px rgba(252,213,53,0.55); }
      }
      .hh-promo-badge { animation: hh-promo-pulse 2.4s ease-in-out infinite; }

      /* Sub-affiliate tree nodes appear in sequence (V9) */
      @keyframes hh-node-pop {
        0%   { opacity: 0; transform: scale(0);    }
        10%  { opacity: 1; transform: scale(1.12); }
        16%  {             transform: scale(1);    }
        90%  { opacity: 1; transform: scale(1);    }
        100% { opacity: 1; transform: scale(1);    }
      }
      .hh-node   { transform-box: fill-box; transform-origin: center; animation: hh-node-pop 4.5s ease-in-out infinite; }
      .hh-node-a { animation-delay: 0s;  }
      .hh-node-b { animation-delay: .3s; }
      .hh-node-c { animation-delay: .6s; }

      /* v12.2 — About-карточки в стиле Vercel aff-fcard: lift + glow + sheen-блик */
      .hh-about-card { transition: border-color .3s ease, transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s cubic-bezier(.22,1,.36,1); }
      .hh-about-card:hover {
        transform: translateY(-6px);
        border-color: rgba(252,213,53,0.4) !important;
        box-shadow: 0 30px 70px -24px rgba(0,0,0,0.7), 0 0 50px rgba(252,213,53,0.1);
      }
      .hh-about-sheen {
        position: absolute; top: 0; bottom: 0; left: 0; width: 42%;
        pointer-events: none; z-index: 1;
        background: linear-gradient(105deg, transparent, rgba(252,213,53,0.10), transparent);
        transform: translateX(-130%) skewX(-12deg);
      }
      @keyframes hh-about-sheen {
        0%   { transform: translateX(-130%) skewX(-12deg); }
        100% { transform: translateX(280%)  skewX(-12deg); }
      }
      .hh-about-card:hover .hh-about-sheen { animation: hh-about-sheen 1.05s ease forwards; }

      /* Hover — Why cards lift + жёлтая подсветка (v12.6, как на главной RU) */
      .hh-why-card { transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease; }
      .hh-why-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 22px 48px -22px rgba(0,0,0,.65), 0 0 50px rgba(252,213,53,0.14);
        border-color: #fcd535 !important;
      }
      .hh-why-grid-bg { transition: opacity .4s; }
      .hh-why-card:hover .hh-why-grid-bg { opacity: 1 !important; }

      /* v12.6 — кнопки: hover как у кнопки в хедере (.btn-primary): подъём + усиление glow */
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-yellow,
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-tg,
      #hashhedge-root .tilda-html-hashhedge .hh-partner-hero-cta > a {
        transition: transform .2s cubic-bezier(0.23,1,0.32,1), box-shadow .3s cubic-bezier(0.23,1,0.32,1), background .2s ease !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-yellow:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 48px -4px rgba(252,213,53,0.55), inset 0 -2px 0 rgba(0,0,0,0.15) !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-btn-tg:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 48px -4px rgba(34,158,217,0.55) !important;
      }
      /* ghost-кнопка «Войти в личный кабинет» */
      #hashhedge-root .tilda-html-hashhedge .hh-partner-hero-cta > a:not(.hh-btn-yellow):hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 36px -6px rgba(252,213,53,0.35) !important;
      }

      /* v12.6 — ссылка «Рассчитать доход»: подчёркнута + hover-анимация.
         (v12.8) underline закреплён !important — Tilda глушит text-decoration у ссылок */
      #hashhedge-root .tilda-html-hashhedge a.hh-calc-link {
        text-decoration: underline !important;
        text-underline-offset: 4px !important;
        text-decoration-thickness: 1px !important;
        text-decoration-color: #f5f1e8 !important;
      }
      #hashhedge-root .tilda-html-hashhedge a.hh-calc-link:hover {
        text-decoration-thickness: 2px !important;
        text-decoration-color: #ffffff !important;
      }
      .hh-calc-link { transition: transform .2s ease, color .2s ease, text-decoration-thickness .2s ease; }
      .hh-calc-link:hover { transform: translateY(-2px); color: #ffe27a !important; text-decoration-thickness: 2px !important; }
      .hh-calc-link:hover svg { stroke: #ffe27a !important; }

      /* v12.6/12.9 — фото Tati: быстрый zoom при наведении, 1-в-1 как у карточек мероприятий */
      .hh-tati-photo:hover .hh-tati-img { transform: scale(1.07) !important; }

      /* Hover — Event card image zoom */
      .hh-event-card > div:first-child { transition: transform .5s cubic-bezier(.22,1,.36,1); }
      .hh-event-card:hover > div:first-child { transform: scale(1.07); }

      /* Hover — Partner content video thumbs */
      #content a { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
      #content a:hover { transform: translateY(-4px); box-shadow: 0 20px 44px -22px rgba(0,0,0,.6); border-color: rgba(252,213,53,.35); }
      #content a > div:first-child { transition: transform .5s cubic-bezier(.22,1,.36,1); }
      #content a:hover > div:first-child { transform: scale(1.06); }

      /* Tati — быстрый hover-zoom как у карточек «Живые встречи» + online dot pulse + badge slide-in */
      .hh-tati-img { transform: scale(1); transition: transform .5s cubic-bezier(.22,1,.36,1); }
      .hh-tati-online > span { animation: hh-live-pulse 1.6s ease-in-out infinite; }
      @keyframes hh-tati-badge-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
      .reveal.in .hh-tati-badge { animation: hh-tati-badge-in .7s ease .3s both; }

      @media (prefers-reduced-motion: reduce) {
        .hh-barfill, .hh-tierfill, .hh-coin, .hh-usdt-drop, .hh-payout-badge, .hh-promo-badge, .hh-node, .hh-tati-online > span, .hh-about-card:hover .hh-about-sheen { animation: none !important; }
        .hh-barfill, .hh-tierfill { transform: scaleX(1) !important; }
        .hh-coin, .hh-usdt-drop, .hh-payout-badge, .hh-node { opacity: 1 !important; transform: none !important; }
        .hh-tati-img { transition: none !important; transform: none !important; }
      }

      /* ============================================================
         v12.1 МОБИЛЬНЫЕ ФИКСЫ (брейкпоинт ≤980, т.к. на телефоне Tilda
         отдаёт эмбеду планшетную ширину и правила ≤640 не срабатывают).
         Блок последний в стилях — побеждает по каскаду.
         Зеркало EN-блока v12.1. ============================ */
      @media (max-width: 980px) {
        /* (1) Hero stats — Trustpilot на всю ширину, 4 числа сеткой 2×2, без переноса цифр */
        .hh-partner-hero-stats {
          grid-template-columns: 1fr 1fr !important;
          gap: 18px 14px !important;
          margin-top: 40px !important;
          padding-top: 24px !important;
        }
        .hh-partner-hero-stats > div { border-left: none !important; padding-left: 0 !important; }
        .hh-partner-hero-stats > div:first-child {
          grid-column: 1 / -1 !important;
          /* v12.10: отделяем Trustpilot от 4 цифр — отступ + разделитель, чтобы не сливалось в один блок */
          padding-bottom: 18px !important;
          margin-bottom: 6px !important;
          border-bottom: 1px solid rgba(255,255,255,0.08) !important;
        }
        .hh-partner-hero-stats > div:not(:first-child) > div:first-child {
          white-space: nowrap !important;
          font-size: 24px !important;
        }

        /* (2) About cards — заметно компактнее */
        .hh-about-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
        .hh-about-card { padding: 18px 16px !important; }
        .hh-about-label { font-size: 22px !important; }
        .hh-about-card h3 { font-size: 14px !important; margin-top: 8px !important; }
        #hashhedge-root .tilda-html-hashhedge .hh-about-card > p { font-size: 12px !important; line-height: 1.5 !important; }

        /* (3) Калькулятор — полная мобильная пересборка.
           ВАЖНО: глобальный hashhedge-react.css на ≤640 имеет правило
           section [style*="grid-template-columns: 1fr 1fr"] { 1fr; gap:32px } (0,1,1),
           которое складывало карточки комиссии в столбик с гигантским зазором.
           Здесь специфичность поднята до (1,2,1)+ — наши правила побеждают. */
        /* v12.10: на мобильной меньше отступ между заголовками секций и описаниями */
        .hh-about-head, .hh-calc-head, .hh-steps-head, .hh-cab-head, .hh-lb-head,
        .hh-yt-head, .hh-sup-head, .hh-events-head { gap: 12px !important; }

        /* v12.5: мобильный калькулятор приведён к vercel-mobile (#tiers @390px):
           просторная карточка 24px, выплата крупная жёлтая, уровни компактные 46px. */
        #hashhedge-root .tilda-html-hashhedge section .hh-calc-grid > .hh-calc-card { padding: 24px 20px !important; }
        /* воздух между текстом секции и карточкой (глобальный CSS зажимал margin) */
        #hashhedge-root .tilda-html-hashhedge section .hh-calc-head { margin-bottom: 32px !important; }
        /* заголовок "Калькулятор прибутку" */
        .hh-calc-card > div:first-child { margin-bottom: 18px !important; font-size: 11px !important; }
        /* строка: лейбл + число трейдеров */
        .hh-calc-card > div:nth-child(2) { margin-bottom: 8px !important; }
        .hh-calc-card > div:nth-child(2) > div:first-child { font-size: 14px !important; }
        .hh-calc-card > div:nth-child(2) > div:last-child { font-size: 24px !important; }
        /* шкала 0/200/400/700+ */
        .hh-calc-card > div:nth-child(4) { font-size: 11px !important; }
        /* сетка двух карточек (комиссия + ср.чек) — держим 2 колонки, бьём глобальный stack */
        #hashhedge-root .tilda-html-hashhedge section .hh-calc-card > div:nth-child(5) {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 12px !important;
          margin-top: 20px !important;
          margin-bottom: 0 !important;
          align-items: stretch !important;
        }
        #hashhedge-root .tilda-html-hashhedge section .hh-calc-card > div:nth-child(5) > div { padding: 14px 14px !important; border-radius: 12px !important; }
        .hh-calc-card > div:nth-child(5) > div > div:first-child { font-size: 10px !important; margin-bottom: 6px !important; letter-spacing: 0.08em !important; }
        .hh-calc-card > div:nth-child(5) > div > div:nth-child(2) { font-size: 22px !important; }
        .hh-calc-card > div:nth-child(5) > div > div:last-child { font-size: 11px !important; margin-top: 4px !important; }
        /* итоговая выплата — крупная жёлтая, как на vercel mobile */
        .hh-calc-card > div:last-child { padding-top: 20px !important; margin-top: 20px !important; }
        .hh-calc-card > div:last-child > div:first-child { margin-bottom: 8px !important; font-size: 12px !important; }
        .hh-calc-card > div:last-child > div:nth-child(2) { font-size: 44px !important; }
        .hh-calc-card > div:last-child > div:nth-child(3) { font-size: 13px !important; margin-top: 8px !important; }
        #hashhedge-root .tilda-html-hashhedge .hh-calc-card > div:last-child > p { font-size: 10px !important; line-height: 1.5 !important; margin-top: 12px !important; }
        /* список уровней — компактные строки 46px */
        #hashhedge-root .tilda-html-hashhedge section .hh-calc-levels { gap: 10px !important; margin-top: 16px !important; }
        #hashhedge-root .tilda-html-hashhedge section .hh-calc-tier-row { min-height: 46px !important; padding: 10px 16px !important; border-radius: 12px !important; flex: 0 0 auto !important; }
        .hh-calc-tier-pct { font-size: 26px !important; min-width: 64px !important; }
        .hh-calc-tier-name { font-size: 13px !important; }
        .hh-calc-tier-range { font-size: 11px !important; }
        .hh-calc-tier-you { padding: 4px 9px !important; font-size: 10px !important; }

        /* (4) Events — big card компактнее + горизонтальный слайдер остального */
        .hh-event-card-big { min-height: 0 !important; aspect-ratio: 1.45 / 1 !important; }
        .hh-events-slider .hh-event-card { min-height: 0 !important; height: auto !important; aspect-ratio: 1.35 / 1 !important; }
        .hh-events-slider .hh-event-card-title { font-size: 17px !important; }
        .hh-events-slider::-webkit-scrollbar { display: none !important; }

        /* (5) Кнопки Tati. ПРИЧИНА прозрачности: глобальное правило в hashhedge-react.css
           ".hh-support-section a[href]" со спецификацией (1,3,1) перебивало наши (1,2,1).
           Поднимаем спецификацию до (1,4,1) и возвращаем вид кнопок. */
        #hashhedge-root .tilda-html-hashhedge .hh-support-section a.hh-tati-cta.hh-btn-yellow {
          background: #fcd535 !important;
          color: #13111c !important;
          border: none !important;
          border-radius: 100px !important;
          justify-content: center !important;
          padding: 16px 28px !important;
        }
        #hashhedge-root .tilda-html-hashhedge .hh-support-section a.hh-tati-cta.hh-btn-yellow * { color: #13111c !important; }
        #hashhedge-root .tilda-html-hashhedge .hh-support-section a.hh-tati-tg.hh-btn-tg {
          background: #229ED9 !important;
          color: #fff !important;
          border: none !important;
          border-radius: 100px !important;
          justify-content: center !important;
          padding: 16px 28px !important;
        }
        #hashhedge-root .tilda-html-hashhedge .hh-support-section a.hh-tati-tg.hh-btn-tg * { color: #fff !important; }
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
