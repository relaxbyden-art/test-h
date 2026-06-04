(function(){
  const { useEffect, useRef, useState, useMemo } = React;
  const _e = React.createElement;
  const F = React.Fragment;

  // ────────────────────────────────────────────────────────────────────────────
  // Shared primitives (Logo / Reveal / Counter) — same as main RU bundle
  // ────────────────────────────────────────────────────────────────────────────

  function HashHedgeLogo({ size = 28, wordmarkColor = "var(--fg)" }) {
    const h = size;
    return _e("a", {
      href: "https://www.hashhedge.com/ru",
      className: "hh-logo",
      style: { display: "inline-flex", alignItems: "center", gap: h * 0.42, textDecoration: "none" },
      "aria-label": "HashHedge"
    },
      _e("svg", { width: h * 0.86, height: h * 0.8, viewBox: "0 0 24 22.4", fill: "var(--accent)", style: { flexShrink: 0, display: "block" } },
        _e("path", { d: "M 11.983 18.574 L 3.766 10.512 L 8.027 6.386 L 8.027 12.281 L 10.604 14.639 L 10.604 0 L 0 10.512 L 12.009 22.4 L 24 10.512 L 13.396 0 L 13.396 14.639 L 15.973 12.281 L 15.973 6.386 L 20.234 10.512 L 11.983 18.574 Z", fillRule: "evenodd" })
      ),
      _e("svg", { width: h * 4.0, height: h * 0.445, viewBox: "0 0 115.2 12.8", fill: wordmarkColor, style: { flexShrink: 0, display: "block" } },
        _e("path", { d: "M 3.17 5.014 L 7.671 5.014 L 7.671 0.159 L 10.841 0.159 L 10.841 12.659 L 7.671 12.659 L 7.671 7.945 L 3.17 7.945 L 3.17 12.659 L 0 12.659 L 0 0.159 L 3.17 0.159 L 3.17 5.014 Z M 15.323 12.659 L 11.925 12.659 L 16.899 0.159 L 20.121 0.159 L 25.042 12.659 L 21.627 12.659 L 21.014 10.893 L 15.953 10.893 L 15.323 12.659 Z M 20.016 8.015 L 18.51 3.725 L 16.951 8.015 L 20.016 8.015 Z M 32.065 4.167 C 32.007 3.778 31.802 3.478 31.452 3.266 C 31.102 3.043 30.64 2.931 30.068 2.931 C 29.671 2.931 29.327 3.001 29.035 3.143 C 28.743 3.284 28.597 3.496 28.597 3.778 C 28.597 4.061 28.761 4.273 29.088 4.414 C 29.415 4.555 29.893 4.708 30.524 4.873 L 31.662 5.155 C 32.164 5.285 32.637 5.426 33.081 5.579 C 33.536 5.72 33.933 5.92 34.272 6.179 C 34.61 6.438 34.879 6.774 35.077 7.186 C 35.276 7.586 35.387 8.11 35.41 8.757 C 35.41 9.498 35.264 10.128 34.972 10.646 C 34.692 11.152 34.318 11.564 33.851 11.882 C 33.384 12.2 32.853 12.435 32.258 12.588 C 31.674 12.729 31.078 12.8 30.471 12.8 C 29.887 12.8 29.298 12.735 28.702 12.606 C 28.119 12.476 27.564 12.241 27.039 11.9 C 26.525 11.558 26.087 11.105 25.725 10.54 C 25.375 9.963 25.159 9.263 25.077 8.439 L 28.265 8.439 C 28.381 8.945 28.656 9.304 29.088 9.516 C 29.531 9.728 30.045 9.834 30.629 9.834 C 30.804 9.834 30.985 9.822 31.172 9.799 C 31.359 9.775 31.528 9.734 31.68 9.675 C 31.843 9.604 31.971 9.51 32.065 9.393 C 32.17 9.275 32.223 9.116 32.223 8.916 C 32.223 8.657 32.112 8.463 31.89 8.333 C 31.68 8.192 31.376 8.086 30.979 8.015 L 29.998 7.804 C 29.333 7.662 28.708 7.492 28.124 7.292 C 27.541 7.091 27.068 6.856 26.706 6.585 C 26.321 6.291 26.017 5.92 25.795 5.473 C 25.573 5.026 25.462 4.455 25.462 3.761 L 25.462 3.725 C 25.509 3.019 25.684 2.43 25.988 1.96 C 26.291 1.489 26.671 1.106 27.126 0.812 C 27.64 0.483 28.177 0.265 28.737 0.159 C 29.309 0.053 29.911 0 30.541 0 C 31.067 0.012 31.575 0.094 32.065 0.247 C 32.567 0.388 33.011 0.594 33.396 0.865 C 33.886 1.206 34.277 1.654 34.569 2.207 C 34.861 2.748 35.048 3.402 35.13 4.167 L 32.065 4.167 Z M 40.419 5.014 L 44.92 5.014 L 44.92 0.159 L 48.09 0.159 L 48.09 12.659 L 44.92 12.659 L 44.92 7.945 L 40.419 7.945 L 40.419 12.659 L 37.249 12.659 L 37.249 0.159 L 40.419 0.159 L 40.419 5.014 Z M 58.684 5.014 L 63.185 5.014 L 63.185 0.159 L 66.355 0.159 L 66.355 12.659 L 63.185 12.659 L 63.185 7.945 L 58.684 7.945 L 58.684 12.659 L 55.515 12.659 L 55.515 0.159 L 58.684 0.159 L 58.684 5.014 Z M 78.053 0.159 L 78.053 3.125 L 71.871 3.125 L 71.871 5.032 L 76.967 5.032 L 76.967 7.857 L 71.871 7.857 L 71.871 9.71 L 78.053 9.71 L 78.053 12.659 L 68.701 12.659 L 68.701 0.159 L 78.053 0.159 Z M 79.715 12.659 L 79.715 0.159 L 84.566 0.159 C 85.547 0.159 86.429 0.294 87.211 0.565 C 88.005 0.824 88.676 1.212 89.225 1.73 C 89.774 2.248 90.194 2.895 90.486 3.672 C 90.789 4.449 90.941 5.35 90.941 6.374 C 90.941 8.469 90.38 10.04 89.26 11.087 C 88.151 12.135 86.598 12.659 84.601 12.659 L 79.715 12.659 Z M 84.636 9.71 C 85.22 9.71 85.711 9.634 86.107 9.481 C 86.505 9.316 86.82 9.092 87.053 8.81 C 87.298 8.516 87.473 8.168 87.578 7.768 C 87.683 7.356 87.736 6.909 87.736 6.426 C 87.736 5.956 87.683 5.52 87.578 5.12 C 87.486 4.72 87.316 4.373 87.071 4.078 C 86.825 3.784 86.493 3.555 86.072 3.39 C 85.664 3.213 85.144 3.125 84.514 3.125 L 82.885 3.125 L 82.885 9.71 L 84.636 9.71 Z M 95.476 6.374 C 95.476 6.821 95.528 7.25 95.634 7.662 C 95.739 8.063 95.908 8.422 96.141 8.739 C 96.387 9.057 96.702 9.31 97.087 9.498 C 97.485 9.687 97.975 9.781 98.558 9.781 C 98.816 9.781 99.072 9.757 99.329 9.71 C 99.586 9.651 99.819 9.569 100.029 9.463 C 100.239 9.345 100.415 9.198 100.555 9.022 C 100.707 8.845 100.806 8.633 100.852 8.386 L 97.928 8.386 L 97.928 5.703 L 104.18 5.703 L 104.18 6.162 C 104.18 7.021 104.098 7.845 103.935 8.633 C 103.783 9.41 103.457 10.14 102.954 10.823 C 102.709 11.164 102.417 11.458 102.078 11.705 C 101.74 11.953 101.373 12.158 100.975 12.323 C 100.59 12.476 100.176 12.594 99.732 12.676 C 99.3 12.759 98.868 12.8 98.436 12.8 C 97.467 12.8 96.597 12.653 95.826 12.359 C 95.068 12.053 94.414 11.623 93.865 11.07 C 93.328 10.517 92.914 9.846 92.621 9.057 C 92.341 8.269 92.201 7.386 92.201 6.409 C 92.201 5.408 92.347 4.514 92.639 3.725 C 92.931 2.925 93.345 2.254 93.882 1.713 C 94.42 1.159 95.068 0.736 95.826 0.441 C 96.597 0.147 97.461 0 98.418 0 C 99.107 0 99.761 0.094 100.38 0.282 C 101.01 0.459 101.57 0.736 102.061 1.112 C 102.563 1.489 102.978 1.966 103.304 2.542 C 103.632 3.107 103.847 3.784 103.952 4.573 L 100.817 4.573 C 100.701 4.019 100.438 3.625 100.029 3.39 C 99.633 3.143 99.113 3.019 98.471 3.019 C 97.91 3.019 97.437 3.119 97.052 3.319 C 96.679 3.519 96.369 3.784 96.124 4.114 C 95.891 4.431 95.721 4.79 95.616 5.191 C 95.523 5.591 95.476 5.985 95.476 6.374 Z M 115.2 0.159 L 115.2 3.125 L 109.018 3.125 L 109.018 5.032 L 114.114 5.032 L 114.114 7.857 L 109.018 7.857 L 109.018 9.71 L 115.2 9.71 L 115.2 12.659 L 105.848 12.659 L 105.848 0.159 L 115.2 0.159 Z", fillRule: "nonzero" })
      )
    );
  }

  function Reveal({ children, delay = "0" }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            el.classList.add("visible", "in");
            io.unobserve(el);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px 400px 0px" });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return _e("div", { ref, className: "reveal", "data-delay": delay }, children);
  }

  // Trustpilot star — точная копия с главной RU (5 отдельных зелёных квадратов, последний half=true).
  // Не использовать единый зелёный фон с 5 белыми звёздами — это визуально 5/5, что неправда.
  function TPStar({ size = 16, half = false }) {
    if (half) {
      return _e("svg", { width: size, height: size, viewBox: "0 0 16 16" },
        _e("rect", { width: "11", height: "16", fill: "#18A965" }),
        _e("rect", { x: "11", width: "5", height: "16", fill: "#2a2a2a" }),
        _e("path", { d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z", fill: "#fff" })
      );
    }
    return _e("svg", { width: size, height: size, viewBox: "0 0 16 16" },
      _e("rect", { width: "16", height: "16", fill: "#18A965" }),
      _e("path", { d: "M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z", fill: "#fff" })
    );
  }

  // Single checkmark helper — точная копия с главной RU (HowItWorks bullets).
  // Жёлтый круг 15% opacity + жёлтая обводка galki. Inline-стиль чтобы Tilda не красила.
  function HHCheck({ size = 16 }) {
    return _e("svg", {
      width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      style: { flexShrink: 0, marginTop: 2, display: "inline-block" }
    },
      _e("circle", { cx: "12", cy: "12", r: "10", style: { fill: "#fcd535", fillOpacity: 0.15 } }),
      _e("path", { d: "M8 12l3 3 5-6", style: { stroke: "#fcd535", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } })
    );
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

  // ────────────────────────────────────────────────────────────────────────────
  // HEADER — partner nav
  // ────────────────────────────────────────────────────────────────────────────

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
      { l: "Источники дохода", h: "#income" },
      { l: "Уровни", h: "#levels" },
      { l: "Калькулятор", h: "#calc" },
      { l: "Кабинет", h: "#cabinet" },
      { l: "FAQ", h: "#faq" }
    ];
    return _e("header", {
      className: "hh-header" + (scrolled ? " hh-header-scrolled" : ""),
      style: {
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 0",
        background: scrolled ? "rgba(8,8,10,0.82)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background .25s var(--ease-out), border-color .25s var(--ease-out)"
      }
    },
      _e("div", { className: "container", style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 } },
        _e(HashHedgeLogo, { size: 28 }),
        _e("nav", { className: "hh-nav-desktop", style: { display: "flex", gap: 28 } },
          nav.map(n => _e("a", {
            key: n.l, href: n.h,
            style: { color: "var(--fg-dim)", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em", transition: "color .2s" },
            onMouseEnter: e => e.currentTarget.style.color = "var(--fg)",
            onMouseLeave: e => e.currentTarget.style.color = "var(--fg-dim)"
          }, n.l))
        ),
        _e("div", { style: { display: "flex", alignItems: "center", gap: 12 } },
          _e("a", { href: "https://partner.hashhedge.com", className: "hh-nav-login",
            style: { color: "var(--fg-dim)", textDecoration: "none", fontSize: 14, fontWeight: 600, padding: "10px 14px" }
          }, "Войти"),
          _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary",
            style: { padding: "12px 20px", fontSize: 14, fontWeight: 700, borderRadius: 12 }
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
      menuOpen && _e("div", {
        className: "hh-mob-menu",
        style: {
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(8,8,10,0.98)", borderTop: "1px solid var(--line)",
          padding: "20px 0"
        }
      },
        _e("div", { className: "container", style: { display: "flex", flexDirection: "column", gap: 4 } },
          nav.map(n => _e("a", {
            key: n.l, href: n.h,
            onClick: () => setMenuOpen(false),
            style: { color: "var(--fg)", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "12px 0", borderBottom: "1px solid var(--line)" }
          }, n.l))
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // LIVE PARTNER CARD — Hero side panel (mirrors PLATFORM STATS on home)
  // ────────────────────────────────────────────────────────────────────────────

  function LivePartnerCard() {
    const [tick, setTick] = useState(0);
    useEffect(() => {
      const i = setInterval(() => setTick(t => t + 1), 1800);
      return () => clearInterval(i);
    }, []);

    const baseEarned = 12_480 + tick * 4;
    const moMPct = 18;
    const refs = 87;
    const avgComm = 70;

    const lastPayouts = [
      { flag: "🇰🇿", name: "Максим", city: "Алматы", lvl: 4, amount: 4820 },
      { flag: "🇷🇺", name: "Анна Ш.", city: "Москва", lvl: 3, amount: 1940 },
      { flag: "🇺🇿", name: "Ренат", city: "Ташкент", lvl: 2, amount: 760 }
    ];

    const sparkPoints = i => Array.from({ length: 12 }, (_, k) => {
      const t = k / 11;
      return 0.4 + t * 0.5 + Math.sin(k * 0.7 + i + tick * 0.1) * 0.06;
    });
    const sparkPath = pts => pts.map((y, i) => `${i === 0 ? "M" : "L"} ${i / 11 * 100} ${100 - y * 100}`).join(" ");

    const Row = ({ label, value, sub, subV, color, pts }) => _e("div", {
      style: { display: "grid", gridTemplateColumns: "1fr 80px auto", gap: 14, alignItems: "center", padding: "16px 22px", borderBottom: "1px solid var(--line)" }
    },
      _e("div", null,
        _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 6 } }, label),
        _e("div", { style: { fontSize: 26, fontWeight: 800, color, letterSpacing: "-0.02em" } }, value)
      ),
      _e("svg", { width: 80, height: 28, viewBox: "0 0 100 100", preserveAspectRatio: "none", style: { opacity: 0.85 } },
        _e("path", { d: sparkPath(pts), stroke: color, strokeWidth: 4, fill: "none", strokeLinecap: "round" })
      ),
      _e("div", { style: { textAlign: "right" } },
        _e("div", { style: { fontSize: 10, color: "var(--fg-dim)", fontWeight: 600, marginBottom: 4 } }, sub),
        _e("span", { className: "chip green", style: { fontSize: 11, fontWeight: 700 } }, subV)
      )
    );

    return _e("div", {
      style: {
        background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(21,19,26,0.95))",
        border: "1px solid var(--line)",
        borderRadius: 20,
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)"
      }
    },
      _e("div", { style: { padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" } },
        _e("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
          _e("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 0 4px rgba(74,222,128,0.18)" } }),
          _e("span", { style: { fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "Akrobat, Onest, sans-serif" } }, "Партнёрский кабинет")
        ),
        _e("span", { style: { fontSize: 11, color: "var(--fg-dim)", fontWeight: 500 } }, "обновляется live")
      ),

      _e(Row, { label: "Заработано за месяц", value: `$${baseEarned.toLocaleString("ru-RU").replace(/,/g, " ")}`, sub: "vs прошлый месяц", subV: `+${moMPct}%`, color: "var(--accent)", pts: sparkPoints(1) }),
      _e(Row, { label: "Активных рефералов", value: refs, sub: "за месяц", subV: "+12", color: "var(--fg)", pts: sparkPoints(2) }),
      _e(Row, { label: "Уровень · ставка", value: `5 · ${avgComm}%`, sub: "до Ур. 6", subV: "23 ⟶", color: "var(--green)", pts: sparkPoints(3) }),

      _e("div", { style: { padding: "18px 22px 6px" } },
        _e("div", { style: { fontSize: 10, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, marginBottom: 14, fontFamily: "Akrobat, Onest, sans-serif" } },
          "Последние выплаты партнёрам"
        ),
        lastPayouts.map((p, i) => _e("div", {
          key: i,
          style: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12, alignItems: "center", padding: "10px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)", fontSize: 13 }
        },
          _e("span", { style: { fontSize: 18 } }, p.flag),
          _e("div", null,
            _e("div", { style: { fontWeight: 600 } }, `${p.name} · ${p.city}`),
            _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", marginTop: 2 } }, `Уровень ${p.lvl} · комиссия с челленджей`)
          ),
          _e("span", { style: { color: "var(--green)", fontWeight: 700, fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace" } }, `+$${p.amount.toLocaleString("ru-RU").replace(/,/g, " ")}`)
        ))
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // HERO
  // ────────────────────────────────────────────────────────────────────────────

  function Hero() {
    return _e("section", {
      className: "hh-partner-hero",
      style: {
        position: "relative", overflow: "hidden", paddingTop: 140, paddingBottom: 80,
        background: "radial-gradient(80% 60% at 30% 0%, rgba(252,213,53,0.08), transparent 70%), var(--bg)"
      }
    },
      _e("div", { className: "container" },
        _e("div", { className: "hh-partner-hero-grid", style: { display: "grid", gridTemplateColumns: "1.45fr minmax(360px, 440px)", gap: 64, alignItems: "center", marginBottom: 96 } },
          _e(Reveal, null,
            _e("div", null,
              // Eyebrow (same pattern as main RU bundle) — green pulsing dot + caps tracking
              _e("span", { className: "eyebrow", style: { marginBottom: 24 } },
                _e("span", { className: "dot" }),
                "Партнёрская программа · lifetime revshare"
              ),
              _e("h1", { className: "h1", style: { marginTop: 24, marginBottom: 22 } },
                "Получай ", _e("span", { style: { color: "var(--accent)" } }, "до 80%"),
                " от прибыли — ", _e("br", null),
                _e("span", { style: { color: "var(--accent)" } }, "пожизненно"),
                " с каждого ", _e("br", null),
                "приведённого трейдера."
              ),
              _e("p", { style: { fontSize: 18, color: "var(--fg-muted)", maxWidth: 600, lineHeight: 1.5 } },
                "Hash Hedge — крипто проп-фирма #1. Привлекай трейдеров — получай комиссию с каждой их покупки челленджа и с их прибыли. Выплаты в USDT по запросу, без скрытых условий."
              ),
              _e("div", { style: { display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" } },
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary" }, "Стать партнёром · бесплатно"),
                _e("a", { href: "#calc", className: "btn btn-ghost" }, "Рассчитать доход")
              ),
              _e("div", { style: { display: "flex", alignItems: "center", gap: 12, marginTop: 32 } },
                _e("div", { style: { display: "flex", gap: 2 } },
                  [1, 2, 3, 4].map(i => _e(TPStar, { key: i, size: 22 })),
                  _e(TPStar, { size: 22, half: true })
                ),
                _e("div", { style: { fontSize: 14, lineHeight: 1.35 } },
                  _e("div", { style: { fontWeight: 700, color: "var(--fg)" } }, "4.4 · Trustpilot"),
                  _e("div", { style: { color: "var(--fg-muted)", fontSize: 13 } }, "Доверяют 5 139 funded трейдеров")
                )
              )
            )
          ),
          _e(Reveal, { delay: "2" }, _e(LivePartnerCard, null))
        ),

        // Hero metrics row
        _e(Reveal, { delay: "3" },
          _e("div", {
            className: "hh-hero-metrics",
            style: {
              display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 16,
              padding: "32px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)"
            }
          }, [
            { v: 2400000, suf: "+", l: "Выплачено партнёрам", sub: "С момента старта программы", money: true },
            { v: 500, suf: "+", l: "Активных партнёров", sub: "Привлекают трейдеров каждый день" },
            { v: 80, suf: "%", l: "Максимальная ставка", sub: "RevShare на 7 уровне" },
            { v: 154, suf: "", l: "Стран", sub: "География партнёрской сети" }
          ].map((s, i) => _e("div", { key: i },
            _e("div", { style: { fontSize: 40, fontWeight: 800, color: "var(--fg)", lineHeight: 1, letterSpacing: "-0.02em" } },
              s.money
                ? _e(F, null, "$", _e(Counter, { to: s.v / 1000, suffix: "K" + s.suf }))
                : _e(Counter, { to: s.v, suffix: s.suf })
            ),
            _e("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--accent)", marginTop: 10, letterSpacing: "0.08em", textTransform: "uppercase" } }, s.l),
            _e("div", { style: { fontSize: 13, color: "var(--fg-dim)", marginTop: 6 } }, s.sub)
          )))
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // MARQUEE
  // ────────────────────────────────────────────────────────────────────────────

  function Marquee() {
    const items = [
      "80% максимальная комиссия",
      "Пожизненные начисления",
      "Вывод USDT по запросу",
      "154 страны",
      "7 уровней партнёрства",
      "24/7 поддержка · 30 языков",
      "Без скрытых условий",
      "Доход с 3 источников"
    ];
    const seq = [...items, ...items, ...items];
    return _e("section", { style: { padding: "40px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden", background: "var(--bg)" } },
      _e("div", { style: { display: "flex", gap: 56, whiteSpace: "nowrap", animation: "hh-marquee 48s linear infinite", willChange: "transform" } },
        seq.map((t, i) => _e("span", {
          key: i,
          style: { display: "inline-flex", alignItems: "center", gap: 24, fontSize: 18, fontWeight: 700, color: "var(--fg)", fontFamily: "Akrobat, Onest, sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }
        }, t, _e("span", { style: { color: "var(--accent)" } }, "◆")))
      ),
      _e("style", null, "@keyframes hh-marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }")
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // WHY PARTNER — 6 cards
  // ────────────────────────────────────────────────────────────────────────────

  function WhyPartner() {
    // Yellow lucide icons sitting in a NEUTRAL dark-grey rounded square —
    // matches the icon-plate look on main RU (dark plate, yellow content).
    // Никакой жёлтой подложки/рамки — Tilda тоже не сможет ничего перекрасить.
    const Icon = ({ d }) => _e("div", {
      style: {
        width: 56, height: 56, borderRadius: 16,
        background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
        border: "1px solid var(--line)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        marginBottom: 22,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 24px -12px rgba(0,0,0,0.6)"
      }
    },
      _e("svg", {
        width: 24, height: 24, viewBox: "0 0 24 24",
        style: { fill: "none", stroke: "#fcd535", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }
      },
        d.map((p, i) => _e("path", { key: i, d: p, style: { fill: "none", stroke: "#fcd535" } }))
      )
    );

    const cards = [
      {
        chip: "Максимум в индустрии",
        title: "До 80% RevShare с прибыли",
        body: "Самый высокий процент в проп-индустрии. Другие фирмы платят 8–20% — мы платим до 80% от нашей прибыли с каждого реферала.",
        icon: ["M19 5L5 19", "M6.5 6.5h.01", "M17.5 17.5h.01", "M18 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z", "M11 16a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"]
      },
      {
        chip: "Один реферал = доход на годы",
        title: "Пожизненные начисления",
        body: "Реферал закрепляется за тобой навсегда. Каждая следующая покупка челленджа снова приносит тебе комиссию.",
        icon: ["M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"]
      },
      {
        chip: "Глобальный охват",
        title: "Трафик из 154 стран",
        body: "Работай с аудиторией из любой точки мира. Hash Hedge принимает трейдеров почти отовсюду — твой потолок максимален.",
        icon: ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M2 12h20", "M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z"]
      },
      {
        chip: "USDT за 72 часа",
        title: "Быстрые выплаты",
        body: "Запрашивай вывод когда удобно — деньги приходят в USDT в течение 72 часов. Без минимального порога и расписания.",
        icon: ["M13 2L3 14h9l-1 8 10-12h-9l1-8z"]
      },
      {
        chip: "Растёшь автоматически",
        title: "7 уровней партнёрства",
        body: "Начни сразу с 50% RevShare и дорасти до 80%. Уровень пересчитывается каждый месяц по числу активных рефералов.",
        icon: ["M3 3v18h18", "M7 14v4", "M11 10v8", "M15 6v12", "M19 2v16"]
      },
      {
        chip: "Выгоднее биржевых офферов",
        title: "В 5–10× больше прибыли",
        body: "Один funded-трейдер на счёте $25–50K приносит в 5–10 раз больше, чем биржевой реферал — и остаётся активным месяцами.",
        icon: ["M23 6l-9.5 9.5-5-5L1 18", "M17 6h6v6"]
      }
    ];

    const _UnusedArt = ({ kind }) => {
      const wrap = { display: "flex", alignItems: "center", justifyContent: "center", minHeight: 72, marginBottom: 24 };
      if (kind === "barChart") return _e("div", { style: { ...wrap, gap: 20 } },
        _e("div", { style: { textAlign: "center" } },
          _e("div", { style: { width: 64, height: 64, background: "linear-gradient(180deg, var(--accent), #f0b800)", borderRadius: 8, marginBottom: 8 } }),
          _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", fontWeight: 700 } }, "ПАРТНЁР"),
          _e("div", { style: { fontSize: 18, fontWeight: 800, color: "var(--accent)" } }, "80%")
        ),
        _e("div", { style: { textAlign: "center" } },
          _e("div", { style: { width: 36, height: 16, background: "var(--line)", borderRadius: 4, marginBottom: 8, marginTop: 48 } }),
          _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", fontWeight: 700 } }, "HASH HEDGE"),
          _e("div", { style: { fontSize: 18, fontWeight: 800, color: "var(--fg)" } }, "20%")
        ),
        _e("div", { style: { textAlign: "center", borderLeft: "1px solid var(--line)", paddingLeft: 18 } },
          _e("div", { style: { fontSize: 10, color: "var(--fg-dim)", marginBottom: 4 } }, "Конкуренты"),
          _e("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--fg-dim)" } }, "8–20%")
        )
      );
      if (kind === "timeline") return _e("div", { style: { ...wrap, gap: 14 } },
        ["Нед.1", "Нед.2", "Нед.3", "∞"].map((w, i) => _e("div", { key: i, style: { textAlign: "center" } },
          _e("div", {
            style: {
              minWidth: 52, height: 30, borderRadius: 8,
              background: i === 3 ? "var(--accent)" : "rgba(74,222,128,0.16)",
              color: i === 3 ? "var(--bg)" : "var(--green)",
              fontWeight: 800, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center"
            }
          }, i === 3 ? "∞" : `+$${[240, 280, 310][i]}`),
          _e("div", { style: { fontSize: 10, color: "var(--fg-dim)", marginTop: 4 } }, w)
        ))
      );
      if (kind === "globe") return _e("div", { style: wrap },
        _e("svg", { width: 96, height: 96, viewBox: "0 0 100 100", fill: "none", stroke: "var(--accent)", strokeWidth: 1.4 },
          _e("circle", { cx: 50, cy: 50, r: 38 }),
          _e("ellipse", { cx: 50, cy: 50, rx: 38, ry: 16 }),
          _e("ellipse", { cx: 50, cy: 50, rx: 16, ry: 38 }),
          _e("path", { d: "M12 50 H88" }),
          _e("path", { d: "M50 12 V88" })
        )
      );
      if (kind === "wallet") return _e("div", { style: { ...wrap, flexDirection: "column", gap: 8 } },
        _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", background: "rgba(74,222,128,0.12)", border: "1px solid var(--green)", borderRadius: 10, color: "var(--green)", fontWeight: 800, fontSize: 16 } },
          "USDT", _e("span", { style: { fontSize: 18 } }, "$2 340")
        ),
        _e("div", { style: { fontSize: 11, color: "var(--fg-dim)" } }, "По запросу · в течение 72 ч")
      );
      if (kind === "ladder") return _e("div", { style: { ...wrap } },
        _e("div", { style: { display: "flex", alignItems: "flex-end", gap: 4 } },
          [50, 55, 60, 65, 70, 75, 80].map((p, i) => _e("div", { key: i, style: {
            width: 18, height: 20 + i * 7,
            background: i === 6 ? "var(--accent)" : "var(--line)",
            borderRadius: 3,
            position: "relative"
          } }, i === 6 && _e("div", {
            style: { position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", fontSize: 11, fontWeight: 800, color: "var(--accent)" }
          }, "80%")))
        )
      );
      if (kind === "vsExchange") return _e("div", { style: { ...wrap, gap: 18 } },
        _e("div", { style: { textAlign: "center" } },
          _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", fontWeight: 700, marginBottom: 4 } }, "БИРЖА"),
          _e("div", { style: { fontSize: 16, fontWeight: 700, color: "var(--fg-dim)" } }, "$30–60")
        ),
        _e("div", { style: { fontSize: 32, fontWeight: 900, color: "var(--accent)", lineHeight: 1 } }, "5–10×"),
        _e("div", { style: { textAlign: "center" } },
          _e("div", { style: { fontSize: 11, color: "var(--accent)", fontWeight: 800, marginBottom: 4 } }, "HASH HEDGE"),
          _e("div", { style: { fontSize: 16, fontWeight: 800, color: "var(--fg)" } }, "$300+")
        )
      );
      return null;
    };

    return _e("section", { id: "why", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } },
            _e("span", { className: "dot" }), "Почему Hash Hedge"
          ),
          _e("h2", { className: "h1", style: { marginTop: 24, marginBottom: 16, maxWidth: 820 } },
            "Почему стоит стать ", _e("span", { style: { color: "var(--accent)" } }, "нашим партнёром")
          ),
          _e("p", { style: { color: "var(--fg-muted)", fontSize: 17, maxWidth: 640, marginBottom: 56 } },
            "Мы создаём среду, в которой доход партнёра растёт постоянно. Вот шесть причин начать прямо сегодня."
          )
        ),
        _e("div", { className: "hh-why-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 } },
          cards.map((c, i) => _e(Reveal, { key: i, delay: String((i % 3) + 1) },
            _e("div", {
              className: "hh-card",
              style: {
                background: "var(--bg-card)",
                border: "1px solid var(--line)",
                borderRadius: 18, padding: 28,
                transition: "transform .3s var(--ease-out), border-color .3s, box-shadow .3s",
                height: "100%"
              },
              onMouseEnter: e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(252,213,53,0.4)";
                e.currentTarget.style.boxShadow = "0 24px 60px -20px rgba(252,213,53,0.18)";
              },
              onMouseLeave: e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "none";
              }
            },
              _e(Icon, { d: c.icon }),
              _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", color: "#fcd535", marginBottom: 12 } },
                _e("svg", { width: 12, height: 12, viewBox: "0 0 12 12", style: { fill: "#fcd535" } },
                  _e("path", { d: "M4.5 9L1.5 6l1-1 2 2 4.5-4.5 1 1z", style: { fill: "#fcd535" } })
                ),
                c.chip
              ),
              _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 12, letterSpacing: "-0.01em" } }, c.title),
              _e("p", { style: { fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55 } }, c.body)
            )
          ))
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // INCOME SOURCES — 3 cards
  // ────────────────────────────────────────────────────────────────────────────

  function IncomeSources() {
    const sources = [
      {
        num: "01",
        title: "Комиссия с покупок челленджей",
        body: "Реферал закрепляется за тобой навсегда. Каждая его покупка челленджа приносит тебе до 80% от прибыли компании.",
        pill: "∞ закрепление навсегда"
      },
      {
        num: "02",
        title: "Доход с успешных трейдеров",
        body: "Реферал проходит челлендж и торгует в плюс — компания берёт комиссию с его прибыли, а тебе достаётся процент с этой комиссии.",
        pill: "Пассивный доход вдолгую"
      },
      {
        num: "03",
        title: "Доход с суб-партнёров",
        body: "Приведённые тобой партнёры тоже приносят доход: 5% с тех, кого ты привёл напрямую, и 3% с их партнёров.",
        pill: "5% + 3% сеть партнёров"
      }
    ];
    return _e("section", { id: "income", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "3 источника дохода"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Модели заработка ", _e("span", { style: { color: "var(--accent)" } }, "партнёров Hash Hedge")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 56 } },
            "Одна реферальная ссылка — три источника выплат, которые работают одновременно."
          )
        ),
        _e("div", { className: "hh-income-grid", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 } },
          sources.map((s, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("div", {
              style: {
                background: "var(--bg-card)", border: "1px solid var(--line)",
                borderRadius: 18, padding: 32, position: "relative", overflow: "hidden", height: "100%"
              }
            },
              _e("div", {
                style: { position: "absolute", top: 24, right: 24, fontSize: 64, fontWeight: 900, color: "var(--accent)", opacity: 0.12, fontFamily: "Akrobat, Onest, sans-serif", lineHeight: 1 }
              }, s.num),
              _e("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.06em", marginBottom: 20 } }, s.num),
              _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.25, marginBottom: 16, maxWidth: 280 } }, s.title),
              _e("p", { style: { fontSize: 14, color: "var(--fg-dim)", lineHeight: 1.55, marginBottom: 28 } }, s.body),
              _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.3)", borderRadius: 100, color: "var(--accent)", fontSize: 12, fontWeight: 700 } }, s.pill)
            )
          ))
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // TIERS — 7 levels
  // ────────────────────────────────────────────────────────────────────────────

  function Tiers() {
    const tiers = [
      { lvl: 1, pct: 50, range: "0–14", label: "Старт" },
      { lvl: 2, pct: 55, range: "15–49" },
      { lvl: 3, pct: 60, range: "50–99" },
      { lvl: 4, pct: 65, range: "100–199" },
      { lvl: 5, pct: 70, range: "200–399" },
      { lvl: 6, pct: 75, range: "400–699" },
      { lvl: 7, pct: 80, range: "700+", label: "Максимум" }
    ];
    return _e("section", { id: "levels", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Уровни партнёрства"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Чем больше рефералов — ", _e("br", null), _e("span", { style: { color: "var(--accent)" } }, "тем выше твоя комиссия")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 56 } },
            "7 уровней. Начни сразу с 50% RevShare и дорасти до 80%. Уровень растёт автоматически каждый месяц."
          )
        ),
        _e("div", { className: "hh-tiers-grid", style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 12, marginBottom: 36 } },
          tiers.map((t, i) => _e(Reveal, { key: i, delay: String((i % 4) + 1) },
            _e("div", {
              style: {
                background: t.lvl === 7 ? "linear-gradient(180deg, rgba(252,213,53,0.14), rgba(252,213,53,0.04))" : "var(--bg-card)",
                border: t.lvl === 7 ? "2px solid var(--accent)" : "1px solid var(--line)",
                borderRadius: 16, padding: "22px 16px", textAlign: "center",
                position: "relative", height: "100%",
                boxShadow: t.lvl === 7 ? "0 0 40px rgba(252,213,53,0.12)" : "none"
              }
            },
              t.label && _e("div", {
                style: { position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", padding: "4px 8px", background: t.lvl === 7 ? "var(--accent)" : "var(--bg)", color: t.lvl === 7 ? "var(--bg)" : "var(--fg-dim)", border: t.lvl === 7 ? "none" : "1px solid var(--line)", borderRadius: 100 }
              }, t.label),
              _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6 } }, `УРОВЕНЬ ${t.lvl}`),
              _e("div", { style: { fontSize: 32, fontWeight: 900, color: t.lvl === 7 ? "var(--accent)" : "var(--fg)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 16 } }, `${t.pct}%`),
              _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", fontWeight: 600, marginBottom: 4 } }, "рефералов / мес"),
              _e("div", { style: { fontSize: 15, fontWeight: 700, color: "var(--fg)" } }, t.range)
            )
          ))
        ),

        _e(Reveal, { delay: "3" },
          _e("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, padding: "28px 32px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 16 } },
            _e("div", null,
              _e("div", { style: { fontSize: 18, fontWeight: 800, marginBottom: 4 } },
                "Старт сразу с ", _e("span", { style: { color: "var(--accent)" } }, "50% RevShare")
              ),
              _e("div", { style: { fontSize: 14, color: "var(--fg-dim)" } }, "Уровень пересчитывается автоматически каждый месяц по числу активных рефералов.")
            ),
            _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary", style: { padding: "14px 24px", fontSize: 14, fontWeight: 700, borderRadius: 12 } }, "Стать партнёром →")
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // CALCULATOR
  // ────────────────────────────────────────────────────────────────────────────

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
    const base = chPrice * 0.79; // прибыль компании ≈ цена челленджа − 21% (комиссии)
    const monthly = Math.round(refs * base * tier.pct / 100);
    const nextTier = tiers[tier.lvl] || null;
    const refsToNext = nextTier ? nextTier.max - (tier.max - tier.max) : null;

    return _e("section", { id: "calc", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Рассчитай доход"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Сколько ты можешь ", _e("span", { style: { color: "var(--accent)" } }, "зарабатывать")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 48 } },
            "Доход зависит от числа рефералов в месяц: чем больше трейдеров приводишь — тем выше уровень и комиссия."
          )
        ),

        _e(Reveal, { delay: "1" },
          _e("div", {
            style: {
              background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(17,15,22,0.98))",
              border: "1px solid var(--line)",
              borderRadius: 22, padding: 40, backdropFilter: "blur(12px)",
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.04)"
            }
          },
            _e("div", { className: "hh-calc-grid", style: { display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" } },

              // LEFT — controls
              _e("div", null,
                _e("div", { style: { marginBottom: 32 } },
                  _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 12 } }, "Средний чек челленджа"),
                  _e("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } },
                    challenges.map((c, i) => _e("button", {
                      key: i,
                      onClick: () => setChIdx(i),
                      style: {
                        padding: "10px 14px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer",
                        background: i === chIdx ? "var(--accent)" : "transparent",
                        color: i === chIdx ? "var(--bg)" : "var(--fg)",
                        border: i === chIdx ? "1px solid var(--accent)" : "1px solid var(--line)"
                      }
                    }, `${c.size} · $${c.price}`))
                  )
                ),

                _e("div", null,
                  _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 14 } }, "Рефералов в месяц"),
                  _e("div", { style: { display: "flex", alignItems: "baseline", gap: 12, marginBottom: 18 } },
                    _e("div", { style: { fontSize: 56, fontWeight: 900, color: "var(--fg)", letterSpacing: "-0.03em", lineHeight: 1 } }, refs),
                    _e("div", { style: { fontSize: 14, color: "var(--fg-dim)" } }, "рефералов")
                  ),
                  _e("input", {
                    type: "range", min: 1, max: 700, value: refs, onChange: e => setRefs(Number(e.target.value)),
                    style: {
                      width: "100%", height: 6, borderRadius: 3,
                      background: `linear-gradient(90deg, var(--accent) 0%, var(--accent) ${(refs / 700) * 100}%, var(--line) ${(refs / 700) * 100}%, var(--line) 100%)`,
                      WebkitAppearance: "none", appearance: "none", outline: "none", cursor: "pointer"
                    }
                  }),
                  _e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--fg-dim)", marginTop: 8 } },
                    _e("span", null, "1 / мес"),
                    _e("span", null, "700+ / мес")
                  )
                )
              ),

              // RIGHT — result
              _e("div", null,
                _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 14 } }, "Твой уровень · авто"),
                _e("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 28 } },
                  _e("div", { style: { padding: "6px 14px", borderRadius: 100, background: "rgba(252,213,53,0.12)", border: "1px solid var(--accent)", color: "var(--accent)", fontSize: 13, fontWeight: 800 } }, `Уровень ${tier.lvl}`),
                  _e("div", { style: { fontSize: 28, fontWeight: 900, color: "var(--fg)" } }, `${tier.pct}%`)
                ),
                _e("div", { style: { fontSize: 13, color: "var(--fg-dim)", marginBottom: 28, lineHeight: 1.5 } },
                  "Уровень и ставка комиссии растут автоматически по числу активных рефералов в месяц — отдельно выбирать ничего не нужно."
                ),
                _e("div", { style: { fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 8 } }, "Ты зарабатываешь"),
                _e("div", { style: { fontSize: 64, fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 } }, `$${monthly.toLocaleString("ru-RU").replace(/,/g, " ")}`),
                _e("div", { style: { fontSize: 13, color: "var(--fg-dim)", marginBottom: 28 } }, "в месяц при таком потоке рефералов"),
                _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary", style: { padding: "16px 28px", fontSize: 15, fontWeight: 700, borderRadius: 14, display: "inline-flex" } }, "Стать партнёром →")
              )
            ),

            _e("div", { style: { marginTop: 36, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--fg-dim)", lineHeight: 1.5 } },
              "Расчёт приблизительный. Формула: рефералов × стоимость 1-фазного челленджа × % твоего уровня. Прибыль компании ≈ цена челленджа минус 21% (платёжные комиссии и резерв)."
            )
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // STEPS — 4 cards (HowItWorks)
  // ────────────────────────────────────────────────────────────────────────────

  function Steps() {
    const steps = [
      {
        n: "01", chip: "РЕГИСТРАЦИЯ", title: "Зарегистрируйся",
        body: "Заполни короткую анкету — это займёт меньше двух минут. Одобрение быстрое, без долгих проверок.",
        bullets: ["Короткая анкета", "Меньше двух минут", "Без минимального порога"]
      },
      {
        n: "02", chip: "ССЫЛКА", title: "Получи реферальную ссылку",
        body: "После регистрации зайди в раздел рефералов и получи персональную ссылку и промокод для приглашений.",
        bullets: ["Ссылка в кабинете", "Копируй и работай", "Промокод для аудитории"]
      },
      {
        n: "03", chip: "ПРОДВИЖЕНИЕ", title: "Привлекай трейдеров",
        body: "Отправь ссылку тем, кто хочет торговать. Подойдёт любой канал: соцсети, YouTube, Telegram, блог или личные рекомендации.",
        bullets: ["Соцсети, YouTube, Telegram", "Обзоры и блоги", "154 страны без ограничений"]
      },
      {
        n: "04", chip: "ДОХОД", title: "Получай выплаты",
        body: "До 80% от прибыли Hash Hedge за каждого реферала. USDT по запросу, в течение 72 часов.",
        bullets: ["До 80% RevShare", "+ доход с прибыли трейдеров", "USDT за 72 часа"]
      }
    ];
    return _e("section", { id: "how", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Как начать"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Четыре шага от ", _e("span", { style: { color: "var(--accent)" } }, "регистрации до выплаты")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 56 } },
            "Просто поделись ссылкой с теми, кому интересен трейдинг — система сделает всё остальное."
          )
        ),
        _e("div", { className: "hh-steps-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 } },
          steps.map((s, i) => _e(Reveal, { key: i, delay: String(i + 1) },
            _e("div", {
              style: { background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 18, padding: 28, position: "relative", height: "100%" }
            },
              _e("div", { style: { fontSize: 64, fontWeight: 900, color: "var(--accent)", opacity: 0.14, lineHeight: 1, position: "absolute", top: 16, right: 20, fontFamily: "Akrobat, Onest, sans-serif" } }, s.n),
              _e("div", { style: { fontSize: 11, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 18 } }, s.chip),
              _e("h3", { style: { fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 12 } }, s.title),
              _e("p", { style: { fontSize: 14, color: "var(--fg-dim)", lineHeight: 1.55, marginBottom: 18 } }, s.body),
              _e("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
                s.bullets.map((b, j) => _e("div", { key: j, style: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--fg)", lineHeight: 1.55 } },
                  _e(HHCheck, { size: 16 }),
                  _e("span", null, b)
                ))
              )
            )
          ))
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // CABINET PREVIEW
  // ────────────────────────────────────────────────────────────────────────────

  function CabinetPreview() {
    // 1:1 копия реального дашборда partner.hashhedge.com. Цифры подставлены с vercel.
    // Sidebar: 4 группы (Analytics / Management / Transactions / Other) с line-иконками.
    // Top header: HASH HEDGE | AFFILIATE CENTER (жёлтый), Hello Denis + Welcome back greeting,
    //   @hashhedge_affiliate manager-pill, $X Bronze, theme/bell/profile/logout.
    // Main: Partner Links collapsible bar → Dashboard H1 → 4 KPI cards stacked LEFT + big chart RIGHT.

    // Inline-style helper for SVG icons — inline style выигрывает у Tilda CSS.
    const SidebarIcon = ({ d, active }) => _e("svg", {
      width: 16, height: 16, viewBox: "0 0 24 24",
      style: { fill: "none", stroke: active ? "#fcd535" : "#a1a0a4", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", flexShrink: 0 }
    }, d.map((p, i) => _e("path", { key: i, d: p, style: { fill: "none", stroke: active ? "#fcd535" : "#a1a0a4" } })));

    const TopIcon = ({ d, size = 18 }) => _e("svg", {
      width: size, height: size, viewBox: "0 0 24 24",
      style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
    }, d.map((p, i) => _e("path", { key: i, d: p, style: { fill: "none", stroke: "#a1a0a4" } })));
    const sidebarGroups = [
      { title: "Analytics", items: [
        { l: "Dashboard", active: true, icon: ["M3 3v18h18", "M7 12l3-3 4 4 7-7"] },
        { l: "Global Statistics", icon: ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M2 12h20", "M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z"] },
        { l: "Detailed Reports", icon: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M9 13h6", "M9 17h6"] },
        { l: "Sub-Affiliates", icon: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"] },
        { l: "Leaderboard", icon: ["M8 21h8", "M12 17v4", "M7 4h10v5a5 5 0 1 1-10 0V4z", "M7 4H4v2a3 3 0 0 0 3 3", "M17 4h3v2a3 3 0 0 1-3 3"] }
      ]},
      { title: "Management", items: [
        { l: "Partner Links", icon: ["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"] },
        { l: "Postbacks", icon: ["M3 12h18", "M12 3l9 9-9 9"] }
      ]},
      { title: "Transactions", items: [
        { l: "Withdrawals", icon: ["M21 12H7", "M14 5l7 7-7 7", "M3 5v14"] }
      ]},
      { title: "Other", items: [
        { l: "My Profile", icon: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"] }
      ]}
    ];
    const kpis = [
      { k: "Всего покупок", v: "$48 920", d: "+18,4%" },
      { k: "Количество покупок", v: "312", d: "+24" },
      { k: "Регистрации", v: "1 284", d: "+61" },
      { k: "Комиссия партнёра", v: "$34 244", d: "+21,7%" }
    ];
    const explainers = [
      { t: "Аналитика в реальном времени", b: "Клики, регистрации, покупки и доход обновляются мгновенно." },
      { t: "Статистика по суб-партнёрам", b: "Доход с каждого уровня твоей партнёрской сети." },
      { t: "Вывод в любой момент", b: "Запрашивай выплату в USDT когда угодно — без порога." },
      { t: "Готовые ссылки и постбэки", b: "Реф-ссылки и постбэки настраиваются в пару кликов." }
    ];
    return _e("section", { id: "cabinet", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },

        // === Title block ===
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Личный кабинет"),
          _e("h2", { className: "h1", style: { marginTop: 24, marginBottom: 18, maxWidth: 820 } },
            "Кабинет, который ", _e("span", { style: { color: "var(--accent)" } }, "считает за тебя")
          ),
          _e("p", { style: { color: "var(--fg-muted)", fontSize: 17, marginBottom: 48, lineHeight: 1.55, maxWidth: 720 } },
            "Аналитика, статистика и доход по приведённым трейдерам — в одном месте. ",
            _e("b", null, "Вывод доступен в любой момент"), ", без минимального порога и ожидания."
          )
        ),

        // === Dashboard mockup — 1:1 копия реального продукта ===
        _e(Reveal, { delay: "2" },
          _e("div", {
            className: "hh-cab-mockup",
            style: {
              background: "#0b0b0e", border: "1px solid var(--line)", borderRadius: 22, overflow: "hidden",
              boxShadow: "0 60px 120px -30px rgba(0,0,0,0.7)",
              marginBottom: 56
            }
          },
            // === Top header bar ===
            _e("div", { className: "hh-cab-top", style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: "1px solid var(--line)", background: "rgba(8,8,10,0.6)", gap: 12 } },
              // Left: HASH HEDGE | AFFILIATE CENTER + greeting
              _e("div", { style: { display: "flex", alignItems: "center", gap: 18 } },
                _e("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                  _e("div", { style: { width: 26, height: 26, borderRadius: 6, background: "#fcd535", display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e("svg", { width: 14, height: 14, viewBox: "0 0 24 22.4", style: { fill: "#13111c" } }, _e("path", { d: "M 11.983 18.574 L 3.766 10.512 L 8.027 6.386 L 8.027 12.281 L 10.604 14.639 L 10.604 0 L 0 10.512 L 12.009 22.4 L 24 10.512 L 13.396 0 L 13.396 14.639 L 15.973 12.281 L 15.973 6.386 L 20.234 10.512 L 11.983 18.574 Z", fillRule: "evenodd", style: { fill: "#13111c" } }))
                  ),
                  _e("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
                    _e("span", { style: { fontSize: 13, fontWeight: 800, letterSpacing: "0.02em", color: "#f5f1e8" } }, "HASH HEDGE"),
                    _e("span", { style: { width: 1, height: 14, background: "var(--line)" } }),
                    _e("span", { style: { fontSize: 10, fontWeight: 900, letterSpacing: "0.1em", color: "#fcd535", lineHeight: 1, textAlign: "left", display: "block" } }, "AFFILIATE", _e("br", null), "CENTER")
                  )
                ),
                _e("div", { className: "hh-cab-toggle", style: { width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginLeft: 8 } },
                  _e("svg", { width: 14, height: 14, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 2 } },
                    _e("rect", { x: 3, y: 4, width: 18, height: 16, rx: 2, style: { fill: "none", stroke: "#a1a0a4" } }),
                    _e("line", { x1: 9, y1: 4, x2: 9, y2: 20, style: { stroke: "#a1a0a4" } })
                  )
                ),
                _e("div", { className: "hh-cab-greet", style: { lineHeight: 1.3 } },
                  _e("div", { style: { fontSize: 15, fontWeight: 800, color: "#f5f1e8" } }, "Hello, Denis!"),
                  _e("div", { style: { fontSize: 12, color: "#a1a0a4" } }, "Welcome back, great to see you again!")
                )
              ),
              // Right: manager pill + Bronze pill + icons
              _e("div", { className: "hh-cab-top-right", style: { display: "flex", alignItems: "center", gap: 10 } },
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 12px", border: "1px solid rgba(74,222,128,0.4)", borderRadius: 10, background: "rgba(8,8,10,0.5)" } },
                  _e("div", { style: { width: 26, height: 26, borderRadius: "50%", background: "rgba(74,222,128,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e("svg", { width: 14, height: 14, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#9ef0c0", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } },
                      _e("path", { d: "M3 18v-6a9 9 0 0 1 18 0v6", style: { stroke: "#9ef0c0", fill: "none" } }),
                      _e("path", { d: "M21 19a2 2 0 0 1-2 2h-1v-7h3v5zM3 19a2 2 0 0 0 2 2h1v-7H3v5z", style: { stroke: "#9ef0c0", fill: "none" } })
                    )
                  ),
                  _e("div", { style: { lineHeight: 1.25 } },
                    _e("div", { style: { fontSize: 12, fontWeight: 700, color: "#f5f1e8" } }, "@hashhedge_affiliate"),
                    _e("div", { style: { fontSize: 10, color: "#a1a0a4" } }, "Your personal manager")
                  )
                ),
                _e("div", { style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10 } },
                  _e("span", { style: { fontSize: 14, fontWeight: 800, color: "#f5f1e8" } }, "$34 244"),
                  _e("span", { style: { fontSize: 11, fontWeight: 800, color: "#cd7f32", letterSpacing: "0.02em" } }, "Bronze")
                ),
                _e("div", { className: "hh-cab-icons", style: { display: "flex", alignItems: "center", gap: 4 } },
                  // theme toggle (moon)
                  _e("div", { style: { width: 32, height: 32, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e(TopIcon, { d: ["M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"] })
                  ),
                  // bell
                  _e("div", { style: { width: 32, height: 32, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e(TopIcon, { d: ["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M13.73 21a2 2 0 0 1-3.46 0"] })
                  ),
                  // profile
                  _e("div", { style: { width: 32, height: 32, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e(TopIcon, { d: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"] })
                  ),
                  // logout
                  _e("div", { style: { width: 32, height: 32, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center" } },
                    _e(TopIcon, { d: ["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"] })
                  )
                )
              )
            ),

            // === 2-column body: sidebar + main ===
            _e("div", { className: "hh-cab-body", style: { display: "grid", gridTemplateColumns: "240px 1fr", minHeight: 560 } },

              // Sidebar
              _e("div", { className: "hh-cab-side", style: { borderRight: "1px solid var(--line)", padding: "16px 12px", background: "rgba(8,8,10,0.4)", display: "flex", flexDirection: "column" } },
                _e("div", { style: { flex: 1 } },
                  sidebarGroups.map((g, gi) => _e("div", { key: gi, style: { marginBottom: 18 } },
                    _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, color: "#a1a0a4", fontWeight: 700, letterSpacing: "0.08em", padding: "0 10px", marginBottom: 8 } },
                      _e("span", null, g.title),
                      _e("svg", { width: 12, height: 12, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 2 } },
                        _e("path", { d: "M6 9l6 6 6-6", style: { fill: "none", stroke: "#a1a0a4" } })
                      )
                    ),
                    _e("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
                      g.items.map((it, ii) => {
                        const active = !!it.active;
                        return _e("div", {
                          key: ii,
                          style: {
                            display: "flex", alignItems: "center", gap: 10,
                            padding: "9px 10px", fontSize: 13, fontWeight: 600, borderRadius: 8,
                            color: active ? "#fcd535" : "#f5f1e8",
                            background: active ? "rgba(252,213,53,0.10)" : "transparent"
                          }
                        },
                          _e(SidebarIcon, { d: it.icon, active }),
                          _e("span", null, it.l)
                        );
                      })
                    )
                  ))
                ),
                // Bottom: Language + Affiliate Agreement
                _e("div", { style: { paddingTop: 14, borderTop: "1px solid var(--line)" } },
                  [
                    { l: "Language", icon: ["M5 8l6 6", "M4 14l6-6 2-3", "M2 5h12", "M7 2h1", "M22 22l-5-10-5 10", "M14 18h6"] },
                    { l: "Affiliate Agreement", icon: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6"] }
                  ].map((it, ii) => _e("div", {
                    key: ii,
                    style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", fontSize: 13, fontWeight: 600, color: "#f5f1e8" }
                  },
                    _e(SidebarIcon, { d: it.icon }), _e("span", null, it.l)
                  ))
                )
              ),

              // Main area
              _e("div", { className: "hh-cab-main", style: { padding: 24 } },
                // Partner Links collapsible bar
                _e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 14, marginBottom: 28 } },
                  _e("div", { style: { fontSize: 15, fontWeight: 700, color: "#f5f1e8" } }, "Partner Links"),
                  _e("svg", { width: 16, height: 16, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 2 } },
                    _e("path", { d: "M6 9l6 6 6-6", style: { fill: "none", stroke: "#a1a0a4" } })
                  )
                ),

                // Dashboard title
                _e("h3", { style: { fontSize: 32, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", margin: "0 0 22px" } }, "Dashboard"),

                // KPIs left column + Chart right
                _e("div", { className: "hh-cab-stage", style: { display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 } },

                  // === Left: 4 KPI cards stacked vertically ===
                  _e("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
                    [
                      { k: "Total Purchases", v: "$48 920", d: "+18,4%", icon: ["M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z", "M3 6h18", "M16 10a4 4 0 0 1-8 0"] },
                      { k: "Purchases Count", v: "312", d: "+24", icon: ["M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"] },
                      { k: "Registrations", v: "1 284", d: "+61", icon: ["M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M20 8v6", "M23 11h-6"] },
                      { k: "Partner commission", v: "$34 244", d: "+21,7%", icon: ["M12 1v22", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"] }
                    ].map((s, i) => _e("div", { key: i, style: { padding: 18, background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 14 } },
                      _e("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 } },
                        _e("svg", { width: 18, height: 18, viewBox: "0 0 24 24", style: { fill: "none", stroke: "#a1a0a4", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } },
                          s.icon.map((p, j) => _e("path", { key: j, d: p, style: { fill: "none", stroke: "#a1a0a4" } }))
                        ),
                        _e("div", { style: { fontSize: 13, color: "#a1a0a4", fontWeight: 600 } }, s.k)
                      ),
                      _e("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 } },
                        _e("div", { style: { fontSize: 24, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.015em" } }, s.v),
                        _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 100, background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.3)", fontSize: 11, fontWeight: 700, color: "#9ef0c0" } },
                          _e("span", null, "↑"), s.d
                        )
                      )
                    ))
                  ),

                  // === Right: Big chart ===
                  _e("div", { style: { padding: 22, background: "rgba(255,255,255,0.025)", border: "1px solid var(--line)", borderRadius: 14, display: "flex", flexDirection: "column" } },
                    _e("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 } },
                      _e("div", null,
                        _e("div", { style: { fontSize: 28, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.02em", lineHeight: 1 } }, "$34 244,80"),
                        _e("div", { style: { fontSize: 13, color: "#a1a0a4", marginTop: 6 } }, "Balance")
                      ),
                      _e("div", { style: { padding: "8px 14px", background: "rgba(8,8,10,0.7)", border: "1px solid var(--line)", borderRadius: 100, fontSize: 12, fontWeight: 600, color: "#f5f1e8" } }, "May 06, 2026 — Jun 04, 2026")
                    ),

                    _e("div", { style: { display: "grid", gridTemplateColumns: "32px 1fr", gap: 8, flex: 1, minHeight: 240 } },
                      // Y-axis labels (right side of chart in real but here we put on left)
                      _e("div", { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", fontSize: 10, color: "#a1a0a4", textAlign: "right" } },
                        _e("span", null, "$80K"),
                        _e("span", null, "$60K"),
                        _e("span", null, "$40K"),
                        _e("span", null, "$20K"),
                        _e("span", null, "$0")
                      ),
                      _e("div", { style: { position: "relative" } },
                        _e("svg", { width: "100%", height: 240, viewBox: "0 0 600 240", preserveAspectRatio: "none", style: { display: "block" } },
                          // grid lines
                          [0, 60, 120, 180, 239].map((y, i) => _e("line", { key: "g" + i, x1: 0, x2: 600, y1: y, y2: y, style: { stroke: "rgba(255,255,255,0.05)", strokeWidth: 1 } })),
                          // commission area fill
                          _e("defs", null,
                            _e("linearGradient", { id: "gradCommBal", x1: "0", y1: "0", x2: "0", y2: "1" },
                              _e("stop", { offset: "0%", stopColor: "#fcd535", stopOpacity: 0.32 }),
                              _e("stop", { offset: "100%", stopColor: "#fcd535", stopOpacity: 0 })
                            )
                          ),
                          _e("path", { d: "M0 200 L 35 195 L 70 185 L 105 175 L 140 160 L 175 145 L 210 130 L 245 118 L 280 100 L 315 88 L 350 75 L 385 60 L 420 48 L 455 38 L 490 28 L 525 22 L 560 18 L 600 14 L 600 240 L 0 240 Z", style: { fill: "url(#gradCommBal)" } }),
                          _e("path", { d: "M0 200 L 35 195 L 70 185 L 105 175 L 140 160 L 175 145 L 210 130 L 245 118 L 280 100 L 315 88 L 350 75 L 385 60 L 420 48 L 455 38 L 490 28 L 525 22 L 560 18 L 600 14", style: { stroke: "#fcd535", strokeWidth: 2.5, fill: "none", strokeLinecap: "round" } }),
                          // registrations (orange)
                          _e("path", { d: "M0 220 L 35 218 L 70 215 L 105 210 L 140 203 L 175 195 L 210 188 L 245 180 L 280 170 L 315 160 L 350 148 L 385 135 L 420 122 L 455 108 L 490 92 L 525 78 L 560 64 L 600 50", style: { stroke: "#f59e0b", strokeWidth: 2, fill: "none", strokeLinecap: "round", opacity: 0.85 } }),
                          // purchases (green)
                          _e("path", { d: "M0 228 L 35 226 L 70 223 L 105 218 L 140 213 L 175 207 L 210 200 L 245 192 L 280 184 L 315 174 L 350 162 L 385 148 L 420 134 L 455 118 L 490 102 L 525 86 L 560 70 L 600 56", style: { stroke: "#9ef0c0", strokeWidth: 2, fill: "none", strokeLinecap: "round", opacity: 0.85 } })
                        )
                      )
                    ),

                    // X-axis dates
                    _e("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 10, color: "#a1a0a4", marginTop: 10, paddingLeft: 40 } },
                      ["May 6", "May 10", "May 14", "May 18", "May 22", "May 26", "May 30", "Jun 4"].map(d => _e("span", { key: d }, d))
                    ),

                    // Legend
                    _e("div", { style: { display: "flex", justifyContent: "center", gap: 24, marginTop: 16, fontSize: 12, color: "#f5f1e8", fontWeight: 600 } },
                      _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 } }, _e("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" } }), "Registrations"),
                      _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 } }, _e("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "#9ef0c0" } }), "Purchases"),
                      _e("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 } }, _e("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "#fcd535" } }), "Commission")
                    )
                  )
                )
              )
            ),

            _e("div", { style: { padding: "10px 24px", borderTop: "1px solid var(--line)", fontSize: 10, color: "#a1a0a4", textAlign: "center", letterSpacing: "0.06em", textTransform: "uppercase" } }, "Demo data · реальный кабинет — partner.hashhedge.com")
          )
        ),

        // === 4 explainer cards ===
        _e(Reveal, { delay: "3" },
          _e("div", { className: "hh-cab-explainers", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 } },
            explainers.map((ex, i) => _e("div", { key: i, style: { padding: 22, background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14 } },
              _e("div", { style: { width: 32, height: 32, borderRadius: 10, background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.3)", color: "var(--accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, marginBottom: 14 } }, i + 1),
              _e("div", { style: { fontWeight: 700, fontSize: 14, marginBottom: 6, letterSpacing: "-0.005em" } }, ex.t),
              _e("div", { style: { fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5 } }, ex.b)
            ))
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // LEADERBOARD
  // ────────────────────────────────────────────────────────────────────────────

  function Leaderboard() {
    // Точная копия реального лидерборда partner.hashhedge.com:
    // - 3 таба (Продажи / Доход / Трейдеры)
    // - Карточка с заголовком "Топ партнёры"
    // - Таблица: Ранг / Партнёр / Первые покупки / Повторные покупки / Всего продаж
    // - 10 строк (имена скрыты как Anonymous, иногда видимые ники)
    const [tab, setTab] = useState("sales");
    const tabs = [
      { id: "sales", label: "Продажи" },
      { id: "income", label: "Доход" },
      { id: "traders", label: "Трейдеры" }
    ];
    // Данные с реального скрина для таба «Продажи»
    const salesRows = [
      { rank: 1,  name: "Anonymous",       first: 1992, repeat: 3218, total: 5210 },
      { rank: 2,  name: "Boss",            first: 816,  repeat: 1875, total: 2691 },
      { rank: 3,  name: "Anonymous",       first: 1163, repeat: 1058, total: 2221 },
      { rank: 4,  name: "Anonymous",       first: 773,  repeat: 1234, total: 2007 },
      { rank: 5,  name: "Anonymous",       first: 856,  repeat: 1079, total: 1935 },
      { rank: 6,  name: "To The Moon 🚀",  first: 689,  repeat: 690,  total: 1379 },
      { rank: 7,  name: "Anonymous",       first: 485,  repeat: 423,  total: 908  },
      { rank: 8,  name: "Anonymous",       first: 387,  repeat: 451,  total: 838  },
      { rank: 9,  name: "Anonymous",       first: 469,  repeat: 363,  total: 832  },
      { rank: 10, name: "igoraa500",       first: 359,  repeat: 354,  total: 713  }
    ];
    // На остальных табах структура та же, цифры подгоняем под смысл
    const incomeRows = salesRows.map(r => ({ rank: r.rank, name: r.name, first: r.first * 99, repeat: r.repeat * 99, total: r.total * 99 }));
    const tradersRows = salesRows.map(r => ({ rank: r.rank, name: r.name, first: Math.round(r.first * 0.4), repeat: Math.round(r.repeat * 0.4), total: Math.round(r.total * 0.4) }));
    const rows = tab === "sales" ? salesRows : tab === "income" ? incomeRows : tradersRows;
    const colHeaders = tab === "sales"
      ? ["Ранг", "Партнёр", "Первые покупки", "Повторные покупки", "Всего продаж"]
      : tab === "income"
      ? ["Ранг", "Партнёр", "Первый доход", "Повторный доход", "Всего дохода"]
      : ["Ранг", "Партнёр", "Активные", "Funded", "Всего трейдеров"];
    const fmt = n => tab === "income" ? `$${n.toLocaleString("ru-RU").replace(/,/g, " ")}` : n.toLocaleString("ru-RU").replace(/,/g, " ");
    return _e("section", { id: "leaderboard", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Обновляется в реальном времени"),
          _e("h2", { className: "h1", style: { marginTop: 24, marginBottom: 16, maxWidth: 820 } },
            "Лидерборд ", _e("span", { style: { color: "var(--accent)" } }, "партнёров")
          ),
          _e("p", { style: { color: "var(--fg-muted)", fontSize: 17, maxWidth: 640, marginBottom: 32 } },
            "Топ партнёров Hash Hedge за текущий месяц. Место в рейтинге можешь занять ты."
          )
        ),

        // === Tabs ===
        _e(Reveal, { delay: "1" },
          _e("div", { className: "hh-lb-tabs", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 16 } },
            tabs.map(t => _e("button", {
              key: t.id,
              onClick: () => setTab(t.id),
              style: {
                padding: "14px 18px",
                background: tab === t.id ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.025)",
                border: tab === t.id ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--line)",
                borderRadius: 12, color: tab === t.id ? "#f5f1e8" : "#a1a0a4",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                transition: "all .2s"
              }
            }, t.label))
          )
        ),

        // === Leaderboard card ===
        _e(Reveal, { delay: "2" },
          _e("div", {
            className: "hh-lb-card",
            style: {
              background: "rgba(255,255,255,0.02)", border: "1px solid var(--line)", borderRadius: 18, overflow: "hidden"
            }
          },
            // Card header
            _e("div", { style: { padding: "22px 28px", borderBottom: "1px solid var(--line)" } },
              _e("div", { style: { fontSize: 18, fontWeight: 800, color: "#f5f1e8", letterSpacing: "-0.01em" } }, "Топ партнёры")
            ),

            // Table headers
            _e("div", { className: "hh-lb-row hh-lb-head", style: { display: "grid", gridTemplateColumns: "100px 1.4fr 1fr 1fr 1fr", gap: 16, padding: "18px 28px", borderBottom: "1px solid var(--line)", background: "rgba(255,255,255,0.02)" } },
              colHeaders.map((h, i) => _e("div", { key: i, style: { fontSize: 12, color: "#a1a0a4", fontWeight: 600 } }, h))
            ),

            // Table rows (zebra)
            rows.map((r, i) => _e("div", {
              key: r.rank,
              className: "hh-lb-row",
              style: {
                display: "grid", gridTemplateColumns: "100px 1.4fr 1fr 1fr 1fr", gap: 16,
                padding: "18px 28px", alignItems: "center", fontSize: 16,
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                color: "#f5f1e8", fontWeight: 700
              }
            },
              _e("div", null, r.rank),
              _e("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                _e("span", { style: { color: r.name === "Anonymous" ? "#a1a0a4" : "#f5f1e8" } }, r.name)
              ),
              _e("div", null, fmt(r.first)),
              _e("div", null, fmt(r.repeat)),
              _e("div", null, fmt(r.total))
            )),

            _e("div", { style: { padding: "14px 28px", fontSize: 12, color: "#a1a0a4", display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--line)" } },
              _e("span", null, "Обновлено только что"),
              _e("span", null, "Топ-5 закрепляются по итогам месяца · почты скрыты")
            )
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // PARTNER CONTENT (YouTube)
  // ────────────────────────────────────────────────────────────────────────────

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
    return _e("section", { id: "content", className: "hh-youtube-section", style: { padding: "120px 0", position: "relative", overflow: "hidden", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Партнёрский контент"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Партнёры снимают контент,", _e("br", null),
            _e("span", { style: { color: "var(--accent)" } }, "который продаёт за них")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 40 } },
            "Более 2 500 блогеров уже снимают про Hash Hedge: обзоры, пруфы выплат, разборы. Каждое видео работает как воронка."
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", {
            className: "hh-yt-rail",
            style: {
              display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(280px, 320px)",
              gap: 16, overflowX: "auto", paddingBottom: 14,
              scrollSnapType: "x mandatory"
            }
          },
            videos.map((v, i) => _e("a", {
              key: i,
              href: `https://www.youtube.com/watch?v=${v.id}`,
              target: "_blank", rel: "noopener noreferrer",
              style: {
                background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden",
                textDecoration: "none", color: "var(--fg)", scrollSnapAlign: "start",
                transition: "transform .25s, border-color .25s, box-shadow .25s"
              },
              onMouseEnter: e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "rgba(252,213,53,0.4)";
                e.currentTarget.style.boxShadow = "0 24px 60px -20px rgba(252,213,53,0.18)";
              },
              onMouseLeave: e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.boxShadow = "none";
              }
            },
              _e("div", { style: { position: "relative", aspectRatio: "16 / 9", background: `url(https://img.youtube.com/vi/${v.id}/hqdefault.jpg) center / cover, #111` } },
                _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)" } }),
                _e("div", { style: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 52, height: 52, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" } },
                  _e("svg", { width: 20, height: 22, viewBox: "0 0 20 22", fill: "#ff0000" }, _e("path", { d: "M0 0 L0 22 L20 11 Z" }))
                ),
                _e("div", { style: { position: "absolute", bottom: 12, left: 12, padding: "4px 8px", background: "rgba(0,0,0,0.7)", borderRadius: 6, fontSize: 10, fontWeight: 700, color: "#fff", letterSpacing: "0.04em" } }, "HASH HEDGE")
              ),
              _e("div", { style: { padding: 16 } },
                _e("div", { style: { fontSize: 14, fontWeight: 700, lineHeight: 1.35, marginBottom: 6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } }, v.title),
                _e("div", { style: { fontSize: 12, color: "var(--fg-dim)", display: "flex", alignItems: "center", gap: 6 } },
                  _e("svg", { width: 12, height: 12, viewBox: "0 0 24 24", fill: "#ff0000" }, _e("path", { d: "M23.5 6.2c-.3-1-1-1.7-2-2C19.7 4 12 4 12 4s-7.7 0-9.5.2c-1 .3-1.7 1-2 2C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.7 2 2C4.3 20 12 20 12 20s7.7 0 9.5-.2c1-.3 1.7-1 2-2 .5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15.5V8.5L16 12l-6.5 3.5z" })),
                  "YouTube · Открыть"
                )
              )
            ))
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // EVENTS
  // ────────────────────────────────────────────────────────────────────────────

  function Events() {
    const events = [
      { city: "Дубай · Blockchain Life", flag: "🇦🇪", title: "Встреча партнёров Hash Hedge в Дубае", img: "https://hash-hedge-partner.vercel.app/assets/event-dubai.jpg" },
      { city: "Сан-Паулу", flag: "🇧🇷", title: "Закрытая afterparty в Сан-Паулу", img: "https://hash-hedge-partner.vercel.app/assets/event-saopaulo.jpeg" },
      { city: "Москва", flag: "🇷🇺", title: "Партнёрский вечер Hash Hedge", img: "https://hash-hedge-partner.vercel.app/assets/event-moscow.jpg" },
      { city: "Награждение", flag: "🏆", title: "Топ-партнёр Hash Hedge 2026", img: "https://hash-hedge-partner.vercel.app/assets/event-award.jpg" }
    ];
    return _e("section", { id: "events", className: "hh-events-section", style: { padding: "120px 0", position: "relative", overflow: "hidden", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Партнёрские события"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Встречаемся ", _e("span", { style: { color: "var(--accent)" } }, "вживую")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 56 } },
            "От Blockchain Life в Дубае до партнёрских вечеров в Москве — Hash Hedge собирает партнёров на конференциях и закрытых встречах по всему миру."
          )
        ),
        _e("div", { className: "hh-events-grid", style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 } },
          events.map((ev, i) => _e(Reveal, { key: i, delay: String((i % 4) + 1) },
            _e("div", {
              style: {
                position: "relative", aspectRatio: "4 / 5", borderRadius: 16, overflow: "hidden",
                background: `url(${ev.img}) center / cover, #1a1a1f`,
                border: "1px solid var(--line)", cursor: "pointer",
                transition: "transform .3s, box-shadow .3s"
              },
              onMouseEnter: e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 30px 60px -20px rgba(0,0,0,0.5)";
              },
              onMouseLeave: e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }
            },
              _e("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.85) 100%)" } }),
              _e("div", { style: { position: "absolute", top: 16, left: 16, padding: "5px 10px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", borderRadius: 100, fontSize: 11, fontWeight: 700, color: "#fff", display: "inline-flex", alignItems: "center", gap: 6 } },
                _e("span", null, ev.flag), ev.city
              ),
              _e("div", { style: { position: "absolute", bottom: 18, left: 18, right: 18, color: "#fff" } },
                _e("div", { style: { fontSize: 17, fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.01em" } }, ev.title)
              )
            )
          ))
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // TELEGRAM COMMUNITY (partner)
  // ────────────────────────────────────────────────────────────────────────────

  function TelegramCommunity() {
    return _e("section", { style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-tg-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } },
          _e(Reveal, null,
            _e("div", null,
              _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Telegram-сообщество"),
              _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 18, maxWidth: 460 } },
                "Партнёрское ", _e("br", null), _e("span", { style: { color: "var(--accent)" } }, "сообщество")
              ),
              _e("p", { style: { color: "var(--fg-dim)", fontSize: 16, marginBottom: 32, lineHeight: 1.55, maxWidth: 460 } },
                "Закрытый Telegram-чат для партнёров: новости раньше всех, эксклюзивные промо, акции и прямое общение с командой."
              ),
              _e("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 24 } },
                [
                  ["332+", "Участников"],
                  ["146", "Сейчас онлайн"],
                  ["<2 мин", "Ответ менеджера"],
                  ["24/7", "Чат открыт всегда"]
                ].map(([v, l], i) => _e("div", { key: i, style: { padding: 18, background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 12 } },
                  _e("div", { style: { fontSize: 26, fontWeight: 900, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6 } }, v),
                  _e("div", { style: { fontSize: 12, color: "var(--fg-dim)", fontWeight: 600 } }, l)
                ))
              ),
              _e("div", { style: { fontSize: 12, color: "var(--fg-dim)", lineHeight: 1.5 } },
                "Закрытое сообщество — доступ открывается после регистрации партнёра через менеджера."
              )
            )
          ),
          _e(Reveal, { delay: "2" },
            _e("div", {
              style: {
                background: "linear-gradient(180deg, #17212b, #0e1621)", borderRadius: 18, overflow: "hidden",
                border: "1px solid var(--line)", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)",
                maxWidth: 420, margin: "0 auto"
              }
            },
              _e("div", { style: { padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, background: "#17212b", borderBottom: "1px solid rgba(255,255,255,0.08)" } },
                _e("div", { style: { width: 40, height: 40, borderRadius: "50%", background: "var(--accent)", color: "var(--bg)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 900 } }, "HH"),
                _e("div", { style: { flex: 1, color: "#fff" } },
                  _e("div", { style: { fontSize: 14, fontWeight: 700 } }, "Hash Hedge Partner | CIS"),
                  _e("div", { style: { fontSize: 11, color: "rgba(255,255,255,0.55)" } }, "332 участника, 146 в сети")
                ),
                _e("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 18 } }, "⋯")
              ),
              _e("div", { style: { padding: "16px 14px", display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#fff" } },
                [
                  { who: "HH", name: "Hash Hedge", text: "🔥 Скидка 25% на все челленджи — стартует сегодня в 18:00 МСК. Готовьте контент!" },
                  { who: "you", name: "Я", text: "Принял, запускаю промо в канале 👍" },
                  { who: "HH", name: "Hash Hedge", text: "Готовый пресс-кит — в закрепе. Постбэки уже подключены." }
                ].map((m, i) => _e("div", { key: i, style: { display: "flex", justifyContent: m.who === "you" ? "flex-end" : "flex-start" } },
                  _e("div", { style: {
                    maxWidth: "76%", padding: "8px 12px", borderRadius: 14,
                    background: m.who === "you" ? "rgba(252,213,53,0.2)" : "rgba(255,255,255,0.06)",
                    color: "#fff",
                    border: m.who === "you" ? "1px solid rgba(252,213,53,0.4)" : "1px solid rgba(255,255,255,0.08)"
                  } },
                    _e("div", { style: { fontSize: 11, fontWeight: 700, color: m.who === "you" ? "var(--accent)" : "rgba(255,255,255,0.55)", marginBottom: 2 } }, m.name),
                    _e("div", { style: { lineHeight: 1.45 } }, m.text)
                  )
                ))
              )
            )
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // SUPPORT
  // ────────────────────────────────────────────────────────────────────────────

  function Support() {
    return _e("section", { id: "support", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-support-grid", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } },
          _e(Reveal, null,
            _e("div", null,
              _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "Поддержка 24/7"),
              _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 18, maxWidth: 460 } },
                "Мы всегда ", _e("span", { style: { color: "var(--accent)" } }, "на связи")
              ),
              _e("p", { style: { color: "var(--fg-dim)", fontSize: 16, marginBottom: 28, lineHeight: 1.55, maxWidth: 480 } },
                "Поддержка работает круглосуточно на 20+ языках. У каждого партнёра — личный менеджер, который помогает расти и зарабатывать больше."
              ),
              _e("div", { style: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 } },
                ["RU", "EN", "ES", "TR", "PT", "DE", "FR", "AR"].map(l => _e("span", { key: l, style: { padding: "6px 12px", borderRadius: 8, background: "var(--bg-card)", border: "1px solid var(--line)", fontSize: 12, fontWeight: 700 } }, l)),
                _e("span", { style: { padding: "6px 12px", borderRadius: 8, background: "rgba(252,213,53,0.10)", border: "1px solid rgba(252,213,53,0.3)", color: "var(--accent)", fontSize: 12, fontWeight: 700 } }, "+12 ещё")
              ),
              _e("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },
                _e("a", { href: "#cta", style: { display: "block", padding: 18, background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14, textDecoration: "none", color: "var(--fg)", transition: "border-color .2s" }, onMouseEnter: e => e.currentTarget.style.borderColor = "var(--accent)", onMouseLeave: e => e.currentTarget.style.borderColor = "var(--line)" },
                  _e("div", { style: { fontSize: 14, fontWeight: 800, marginBottom: 4 } }, "Личный менеджер"),
                  _e("div", { style: { fontSize: 12, color: "var(--fg-dim)" } }, "Закрепляется после регистрации →")
                ),
                _e("a", { href: "https://t.me/hashhedge_affiliate", style: { display: "block", padding: 18, background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14, textDecoration: "none", color: "var(--fg)", transition: "border-color .2s" }, onMouseEnter: e => e.currentTarget.style.borderColor = "var(--accent)", onMouseLeave: e => e.currentTarget.style.borderColor = "var(--line)" },
                  _e("div", { style: { fontSize: 14, fontWeight: 800, marginBottom: 4 } }, "Telegram-поддержка"),
                  _e("div", { style: { fontSize: 12, color: "var(--fg-dim)" } }, "Задай любой вопрос →")
                )
              )
            )
          ),
          _e(Reveal, { delay: "2" },
            _e("div", {
              style: {
                background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 18, padding: 24,
                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.4)"
              }
            },
              _e("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingBottom: 18, borderBottom: "1px solid var(--line)" } },
                _e("div", { style: { width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), #f0b800)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--bg)", fontWeight: 900, fontSize: 22 } }, "HH"),
                _e("div", null,
                  _e("div", { style: { fontSize: 15, fontWeight: 800, marginBottom: 4 } }, "Hash Hedge Support"),
                  _e("div", { style: { fontSize: 12, color: "var(--green)", display: "inline-flex", alignItems: "center", gap: 6 } },
                    _e("span", { style: { width: 7, height: 7, borderRadius: "50%", background: "var(--green)" } }),
                    "Онлайн · среднее время ответа 1 мин 47 сек"
                  )
                )
              ),
              _e("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
                [
                  { who: "HH", text: "Привет! У нас акция — скидка 25% на челленджи. Поделишься у себя в контенте? 🔥", time: "14:01" },
                  { who: "you", text: "Да, круто! Сегодня закину в канал 👍", time: "14:02" },
                  { who: "you", text: "А как отслеживать конверсии с поста?", time: "14:02" },
                  { who: "HH", text: "В кабинете партнёра есть «Аналитика» — клики, регистрации и доход видно в реальном времени 📊", time: "14:03" },
                  { who: "you", text: "Супер, всё наглядно. Спасибо! 🙌", time: "14:03" }
                ].map((m, i) => _e("div", { key: i, style: { display: "flex", flexDirection: "column", alignItems: m.who === "you" ? "flex-end" : "flex-start", gap: 4 } },
                  _e("div", { style: {
                    maxWidth: "76%", padding: "10px 14px", borderRadius: 14, fontSize: 14, lineHeight: 1.4,
                    background: m.who === "you" ? "var(--accent)" : "rgba(255,255,255,0.05)",
                    color: m.who === "you" ? "var(--bg)" : "var(--fg)",
                    border: m.who === "you" ? "none" : "1px solid var(--line)"
                  } }, m.text),
                  _e("div", { style: { fontSize: 10, color: "var(--fg-dim)" } }, m.time)
                ))
              )
            )
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // FAQ
  // ────────────────────────────────────────────────────────────────────────────

  function FAQ() {
    const items = [
      { q: "Как работает партнёрская программа Hash Hedge?", a: "Программа работает по модели RevShare: ты получаешь от 50% до 80% прибыли компании с каждой покупки челленджа по твоей реферальной ссылке. Начисления — пожизненные, пока реферал остаётся активным." },
      { q: "Что считается «прибылью компании»?", a: "Прибыль = стоимость челленджа − 21% (7% — комиссия платёжной системы, 14% — резервный фонд). Например, с челленджа $499 база ≈ $394 — и на стартовом уровне 50% ты получаешь около $197 чистыми." },
      { q: "Как растёт мой процент RevShare?", a: "Все стартуют с 50%. Каждое 1-е число месяца процент пересчитывается по числу челленджей, купленных твоими рефералами за прошлый месяц, и держится весь следующий месяц. Максимум — 80% при 700+ продажах в месяц." },
      { q: "Зарабатываю ли я с прибыли трейдеров?", a: "Да. Если реферал проходит челлендж и торгует в плюс, он получает 80% прибыли, компания — 20%, а ты получаешь свой % RevShare с этих 20%. Пример: трейдер заработал $10 000 → компания получает $2 000 → тебе до $1 600." },
      { q: "Когда и как происходят выплаты?", a: "Запроси выплату прямо в партнёрском кабинете — она придёт в USDT на твой кошелёк в течение 72 часов. Минимум к выводу — $100. Первая выплата доступна после 5 рефералов с покупкой." },
      { q: "Есть ли доход с приведённых партнёров?", a: "Да. Многоуровневая программа: 5% с дохода партнёра, которого ты привёл напрямую, и 3% с партнёра следующего уровня. Эти проценты компания платит сверху — доход твоих суб-партнёров не уменьшается." },
      { q: "Нужно ли быть трейдером, чтобы участвовать?", a: "Нет. Партнёром может стать любой — блогер, маркетолог, инфлюенсер или владелец комьюнити. Опыт в трейдинге не нужен, работать можно с аудиторией из 154 стран." },
      { q: "Какие лимиты на вывод средств?", a: "Минимальная сумма к выводу — $100. Первая выплата становится доступна после того, как 5 твоих рефералов совершили хотя бы одну покупку — это защита от самореферальства. Дальше — без ограничений по частоте." }
    ];
    const [open, setOpen] = useState(0);
    return _e("section", { id: "faq", style: { padding: "120px 0", background: "var(--bg)" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "eyebrow", style: { marginBottom: 24 } }, _e("span", { className: "dot" }), "FAQ"),
          _e("h2", { className: "h1", style: { marginTop: 18, marginBottom: 16, maxWidth: 820 } },
            "Часто задаваемые ", _e("span", { style: { color: "var(--accent)" } }, "вопросы")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 17, maxWidth: 640, marginBottom: 56 } },
            "Всё, что нужно знать о партнёрской программе. Не нашёл ответ — напиши в Telegram-поддержку."
          )
        ),
        _e(Reveal, { delay: "1" },
          _e("div", { style: { maxWidth: 820 } },
            items.map((it, i) => _e("div", {
              key: i,
              style: {
                borderTop: "1px solid var(--line)",
                borderBottom: i === items.length - 1 ? "1px solid var(--line)" : "none"
              }
            },
              _e("button", {
                onClick: () => setOpen(open === i ? -1 : i),
                style: {
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
                  padding: "22px 0", background: "transparent", border: "none", cursor: "pointer",
                  color: "var(--fg)", fontSize: 17, fontWeight: 700, textAlign: "left", letterSpacing: "-0.005em"
                }
              },
                _e("span", null, it.q),
                _e("span", { style: { fontSize: 24, color: "var(--accent)", fontWeight: 300, transform: open === i ? "rotate(45deg)" : "none", transition: "transform .25s var(--ease-out)" } }, "+")
              ),
              open === i && _e("div", {
                style: { padding: "0 0 22px", fontSize: 15, color: "var(--fg-dim)", lineHeight: 1.6, maxWidth: 720 }
              }, it.a)
            ))
          )
        ),
        _e(Reveal, { delay: "2" },
          _e("div", { style: { marginTop: 48, padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 14, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, maxWidth: 820 } },
            _e("div", null,
              _e("div", { style: { fontSize: 15, fontWeight: 700, marginBottom: 4 } }, "Остались вопросы?"),
              _e("div", { style: { fontSize: 13, color: "var(--fg-dim)" } }, "Напиши в Telegram — ответим на всё по программе.")
            ),
            _e("a", { href: "https://t.me/hashhedge_affiliate", className: "btn btn-ghost", style: { padding: "12px 20px", fontSize: 13, fontWeight: 700, borderRadius: 12 } }, "Поддержка в Telegram")
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // BIG CTA
  // ────────────────────────────────────────────────────────────────────────────

  function BigCTA() {
    return _e("section", { id: "cta", style: { padding: "140px 0", background: "linear-gradient(180deg, var(--bg) 0%, #15131d 100%)", textAlign: "center", position: "relative" } },
      _e("div", { className: "container" },
        _e(Reveal, null,
          _e("span", { className: "chip", style: { fontFamily: "Akrobat, Onest, sans-serif", marginBottom: 24 } }, "ГОТОВЫ НАЧАТЬ?"),
          _e("h2", { className: "h1", style: { fontSize: 56, lineHeight: 1.1, marginTop: 24, marginBottom: 22, maxWidth: 820, marginLeft: "auto", marginRight: "auto", letterSpacing: "-0.02em" } },
            "Начни зарабатывать ", _e("br", null), _e("span", { style: { color: "var(--accent)" } }, "вместе с Hash Hedge")
          ),
          _e("p", { style: { color: "var(--fg-dim)", fontSize: 18, maxWidth: 620, marginLeft: "auto", marginRight: "auto", marginBottom: 40 } },
            "Присоединяйся к сотням партнёров, которые продвигают Hash Hedge и получают до 80% от нашей прибыли."
          ),
          _e("div", { style: { display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 28 } },
            _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary", style: { padding: "18px 32px", fontSize: 16, fontWeight: 800, borderRadius: 14 } }, "Зарегистрироваться"),
            _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-ghost", style: { padding: "18px 28px", fontSize: 16, fontWeight: 700, borderRadius: 14 } }, "Войти в кабинет")
          ),
          _e("div", { style: { fontSize: 13, color: "var(--fg-muted)", display: "inline-flex", flexWrap: "wrap", gap: 18, justifyContent: "center", alignItems: "center" } },
            ["Одобрение за 24 часа", "USDT по запросу", "154 страны", "Без скрытых условий"].map((t, i) =>
              _e("span", { key: i, style: { display: "inline-flex", alignItems: "center", gap: 8 } },
                _e(HHCheck, { size: 16 }), t
              )
            )
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // FOOTER
  // ────────────────────────────────────────────────────────────────────────────

  function Footer() {
    return _e("footer", { style: { padding: "80px 0 40px", background: "#08080a", borderTop: "1px solid var(--line)" } },
      _e("div", { className: "container" },
        _e("div", { className: "hh-footer-grid", style: { display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, marginBottom: 48 } },
          _e("div", null,
            _e(HashHedgeLogo, { size: 28 }),
            _e("p", { style: { fontSize: 13, color: "var(--fg-dim)", lineHeight: 1.55, marginTop: 18, maxWidth: 320 } },
              "Партнёрская программа крипто проп-фирмы Hash Hedge. До 80% RevShare. Вывод USDT по запросу."
            )
          ),
          [
            { h: "Программа", links: [["Преимущества", "#why"], ["Источники дохода", "#income"], ["Уровни", "#levels"], ["Калькулятор", "#calc"], ["Лидерборд", "#leaderboard"]] },
            { h: "Партнёрам", links: [["Регистрация", "https://partner.hashhedge.com"], ["Личный кабинет", "https://partner.hashhedge.com"], ["FAQ", "#faq"], ["Telegram-поддержка", "https://t.me/hashhedgesupportbot"]] },
            { h: "Hash Hedge", links: [["Главная", "https://www.hashhedge.com/ru"], ["Челленджи", "https://hashhedge.com/ru#challenge"], ["Блог", "https://www.hashhedge.com/blog/ru"], ["Политика аффилированных", "https://hashhedge.com/affiliate-politics"]] }
          ].map((col, i) => _e("div", { key: i },
            _e("div", { style: { fontSize: 12, fontWeight: 800, color: "var(--fg-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 } }, col.h),
            _e("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
              col.links.map(([l, h], j) => _e("a", { key: j, href: h, style: { color: "var(--fg)", textDecoration: "none", fontSize: 14, transition: "color .2s" }, onMouseEnter: e => e.currentTarget.style.color = "var(--accent)", onMouseLeave: e => e.currentTarget.style.color = "var(--fg)" }, l))
            )
          ))
        ),
        _e("div", { style: { display: "flex", justifyContent: "space-between", paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--fg-dim)", flexWrap: "wrap", gap: 16 } },
          _e("span", null, "© 2026 Hash Hedge. Все права защищены."),
          _e("div", { style: { display: "flex", gap: 24 } },
            _e("a", { href: "https://www.hashhedge.com/privacy-policy", style: { color: "var(--fg-dim)", textDecoration: "none" } }, "Конфиденциальность"),
            _e("a", { href: "https://www.hashhedge.com/terms-and-conditions", style: { color: "var(--fg-dim)", textDecoration: "none" } }, "Условия"),
            _e("a", { href: "https://hashhedge.com/affiliate-politics", style: { color: "var(--fg-dim)", textDecoration: "none" } }, "Аффилированные лица")
          )
        )
      )
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // MOBILE CTA BAR
  // ────────────────────────────────────────────────────────────────────────────

  function MobileCTABar() {
    return _e("div", {
      className: "hh-mobile-cta",
      style: {
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90,
        padding: "12px 16px", display: "none",
        background: "rgba(8,8,10,0.94)", backdropFilter: "blur(14px)",
        borderTop: "1px solid var(--line)"
      }
    },
      _e("a", { href: "https://partner.hashhedge.com", className: "btn btn-primary", style: { display: "block", textAlign: "center", padding: "14px 18px", fontSize: 14, fontWeight: 800, borderRadius: 12 } }, "Стать партнёром · бесплатно")
    );
  }

  // ────────────────────────────────────────────────────────────────────────────
  // APP
  // ────────────────────────────────────────────────────────────────────────────

  function App() {
    // Wrap everything in tilda-html-hashhedge — same as main RU bundle.
    // This is what activates ALL the Tilda-override rules in hashhedge-react.css
    // (button colors, link colors, nav, eyebrow, chip etc.). Without it Tilda's
    // own CSS bleeds through and turns links/buttons orange.
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

  // ────────────────────────────────────────────────────────────────────────────
  // MOUNT + responsive styles for partner-page only
  // ────────────────────────────────────────────────────────────────────────────

  // Inject partner-page specific responsive overrides
  if (!document.getElementById("hh-partner-styles")) {
    const st = document.createElement("style");
    st.id = "hh-partner-styles";
    st.textContent = `
      @media (max-width: 980px) {
        .hh-partner-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        .hh-hero-metrics { grid-template-columns: repeat(2, 1fr) !important; gap: 28px !important; }
        .hh-why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-income-grid { grid-template-columns: 1fr !important; }
        .hh-tiers-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 10px !important; }
        .hh-calc-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        .hh-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-cab-body { grid-template-columns: 1fr !important; }
        .hh-cab-side { display: none !important; }
        .hh-cab-stage { grid-template-columns: 1fr !important; gap: 12px !important; }
        .hh-cab-top { flex-wrap: wrap !important; }
        .hh-cab-greet { display: none !important; }
        .hh-cab-icons { display: none !important; }
        .hh-cab-explainers { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-lb-row { grid-template-columns: 60px 1.4fr 1fr 1fr 1fr !important; padding: 14px 18px !important; font-size: 14px !important; }
        .hh-tg-grid, .hh-support-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .hh-events-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        .hh-nav-desktop { display: none !important; }
        .hh-mob-toggle { display: inline-flex !important; align-items: center; justify-content: center; }
        .hh-nav-login { display: none !important; }
        .hh-mobile-cta { display: block !important; }
      }
      @media (max-width: 640px) {
        .hh-hero-metrics { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-why-grid, .hh-steps-grid, .hh-events-grid, .hh-cab-explainers { grid-template-columns: 1fr !important; }
        .hh-tiers-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .hh-cab-top-right > div:nth-child(2) { display: none !important; }
        .hh-lb-row { grid-template-columns: 40px 1fr 60px 60px 60px !important; padding: 12px 14px !important; font-size: 12px !important; gap: 8px !important; }
        .hh-lb-tabs { grid-template-columns: 1fr !important; }
        .hh-footer-grid { grid-template-columns: 1fr !important; }
      }
      /* Slider thumb */
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none;
        width: 22px; height: 22px; border-radius: 50%;
        background: var(--accent); border: 3px solid var(--bg-elev);
        cursor: pointer; box-shadow: 0 4px 12px rgba(252,213,53,0.4);
      }
      input[type=range]::-moz-range-thumb {
        width: 22px; height: 22px; border-radius: 50%;
        background: var(--accent); border: 3px solid var(--bg-elev);
        cursor: pointer; box-shadow: 0 4px 12px rgba(252,213,53,0.4);
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

  Object.assign(window, { HashHedgePartnerApp: App });
})();
