// Hash Hedge – Promo banner + How It Works
const { useEffect: __useE, useRef: __useR, useState: __useS } = React;

function PromoBanner() {
  useRevealOnScroll();
  // "What you can trade" – non-crypto perps available on the platform.
  // Each market has brand color + monogram (ticker style, no emoji).
  // Reference prices – pulled from live data (Apr 2026): gold $4,880 · silver $81.8 · brent $104.6 · wti $94 · natgas $2.55 · spy $615.
  const markets = [
    { sym: "XAU",   name: "Gold",        cls: "Metal",  art: "gold",      color: "#E5B233", ref: "4,879.60", unit: "/oz",   ch: "+1.48%", up: true  },
    { sym: "XAG",   name: "Silver",      cls: "Metal",  art: "silver",    color: "#C6C7CC", ref: "81.84",    unit: "/oz",   ch: "+3.98%", up: true  },
    { sym: "XPD",   name: "Palladium",   cls: "Metal",  art: "palladium", color: "#B8C0CC", ref: "1,412.50", unit: "/oz",   ch: "-0.82%", up: false },
    { sym: "XPT",   name: "Platinum",    cls: "Metal",  art: "platinum",  color: "#D4D8DE", ref: "1,586.40", unit: "/oz",   ch: "+0.64%", up: true  },
    { sym: "BRENT", name: "Brent Crude", cls: "Energy", art: "brent",     color: "#3D5A44", ref: "104.63",   unit: "/bbl",  ch: "-0.42%", up: false },
    { sym: "WTI",   name: "WTI Crude",   cls: "Energy", art: "wti",       color: "#6C4A2E", ref: "94.12",    unit: "/bbl",  ch: "-0.38%", up: false },
    { sym: "NG",    name: "Natural Gas", cls: "Energy", art: "natgas",    color: "#4A6FA5", ref: "2.55",     unit: "/MMBtu",ch: "-2.40%", up: false },
    { sym: "SPY",   name: "S&P 500",     cls: "Index",  art: "spy",       color: "#5C6CFF", ref: "614.72",   unit: "",      ch: "-0.41%", up: false },
  ];
  const AssetArt = ({ kind, color }) => {
    const common = { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.55 };
    switch (kind) {
      case "gold":
        // Three stacked gold bars – most iconic
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id="g-gold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={color} stopOpacity="0.85" />
                <stop offset="1" stopColor={color} stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <g>
              {/* bottom bar */}
              <path d="M44 98 L146 98 L132 86 L58 86 Z" fill="url(#g-gold)" />
              <path d="M58 86 L132 86 L138 80 L64 80 Z" fill={color} opacity="0.55" />
              {/* middle bar */}
              <path d="M58 80 L134 80 L122 70 L68 70 Z" fill="url(#g-gold)" opacity="0.85" />
              <path d="M68 70 L122 70 L126 66 L72 66 Z" fill={color} opacity="0.45" />
              {/* top bar */}
              <path d="M70 66 L122 66 L112 58 L80 58 Z" fill="url(#g-gold)" opacity="0.7" />
              <text x="96" y="95" textAnchor="middle" fontFamily="Akrobat,sans-serif" fontWeight="900" fontSize="8" fill="#000" opacity="0.4" letterSpacing="0.1em">999.9</text>
            </g>
          </svg>
        );
      case "silver":
        // Stack of coins – side view
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id="g-silver" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor={color} stopOpacity="0.3" />
                <stop offset="0.5" stopColor={color} stopOpacity="0.9" />
                <stop offset="1" stopColor={color} stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g>
              {/* Six stacked coins */}
              {[0,1,2,3,4,5].map(i => (
                <g key={i}>
                  <ellipse cx="80" cy={108 - i*9} rx="40" ry="7" fill="url(#g-silver)" />
                  <ellipse cx="80" cy={108 - i*9} rx="40" ry="7" fill="none" stroke={color} strokeOpacity="0.6" strokeWidth="0.8" />
                  <ellipse cx="80" cy={105 - i*9} rx="40" ry="7" fill={color} opacity="0.15" />
                </g>
              ))}
              {/* top face ornament */}
              <ellipse cx="80" cy="57" rx="40" ry="7" fill={color} opacity="0.7" />
              <ellipse cx="80" cy="57" rx="28" ry="4.5" fill="none" stroke="#fff" strokeOpacity="0.4" strokeWidth="0.8" />
              <text x="80" y="60" textAnchor="middle" fontFamily="Akrobat,sans-serif" fontWeight="900" fontSize="6" fill="#fff" opacity="0.5" letterSpacing="0.15em">FINE SILVER</text>
            </g>
          </svg>
        );
      case "palladium":
        // Single hex/oct ingot viewed from top – unique shape
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id="g-pd" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor={color} stopOpacity="0.95" />
                <stop offset="1" stopColor={color} stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="g-pd-side" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={color} stopOpacity="0.5" />
                <stop offset="1" stopColor="#000" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <g transform="translate(0 6)">
              {/* Hex puck side */}
              <path d="M36 74 L60 88 L100 88 L124 74 L124 82 L100 96 L60 96 L36 82 Z" fill="url(#g-pd-side)" />
              {/* Hex top face */}
              <path d="M60 56 L100 56 L124 74 L100 88 L60 88 L36 74 Z" fill="url(#g-pd)" />
              {/* highlight */}
              <path d="M60 56 L100 56 L110 64 L50 64 Z" fill="#fff" opacity="0.18" />
              <text x="80" y="78" textAnchor="middle" fontFamily="Akrobat,sans-serif" fontWeight="900" fontSize="9" fill="#fff" opacity="0.55" letterSpacing="0.2em">Pd</text>
            </g>
          </svg>
        );
      case "platinum":
        // Long thin ingot lying flat + chemical symbol
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id="g-pt" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
                <stop offset="0.5" stopColor={color} stopOpacity="0.85" />
                <stop offset="1" stopColor={color} stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g transform="translate(0 4)">
              {/* Front face */}
              <path d="M22 66 L138 50 L138 72 L22 88 Z" fill="url(#g-pt)" />
              {/* Top face */}
              <path d="M22 66 L138 50 L148 44 L32 60 Z" fill={color} opacity="0.55" />
              {/* Side face */}
              <path d="M138 50 L148 44 L148 66 L138 72 Z" fill={color} opacity="0.3" />
              {/* Engraving */}
              <text x="80" y="76" textAnchor="middle" fontFamily="Akrobat,sans-serif" fontWeight="900" fontSize="10" fill="#000" opacity="0.35" letterSpacing="0.3em">PLATINUM</text>
              <text x="80" y="86" textAnchor="middle" fontFamily="Akrobat,sans-serif" fontWeight="700" fontSize="6" fill="#000" opacity="0.3" letterSpacing="0.2em">Pt · 999.5</text>
            </g>
          </svg>
        );
      case "brent":
      case "wti": {
        // Oil barrel
        const accent = kind === "brent" ? "#7FB088" : "#B57A4E";
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor={color} stopOpacity="0.9" />
                <stop offset="0.5" stopColor={accent} stopOpacity="0.7" />
                <stop offset="1" stopColor={color} stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <g>
              <ellipse cx="90" cy="30" rx="38" ry="8" fill={color} opacity="0.7" />
              <rect x="52" y="30" width="76" height="80" fill={`url(#g-${kind})`} />
              <rect x="52" y="46" width="76" height="6" fill={accent} opacity="0.55" />
              <rect x="52" y="88" width="76" height="6" fill={accent} opacity="0.55" />
              <ellipse cx="90" cy="110" rx="38" ry="8" fill={color} opacity="0.85" />
              <ellipse cx="90" cy="30" rx="38" ry="8" fill="none" stroke={accent} strokeOpacity="0.35" />
            </g>
          </svg>
        );
      }
      case "natgas":
        // Flame
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs>
              <radialGradient id="g-ng" cx="0.5" cy="0.85" r="0.7">
                <stop offset="0" stopColor="#9DC3FF" stopOpacity="0.85" />
                <stop offset="0.5" stopColor={color} stopOpacity="0.55" />
                <stop offset="1" stopColor={color} stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M95 14 C 90 40, 118 48, 118 74 C 118 100, 95 116, 80 116 C 60 116, 42 100, 46 76 C 50 58, 68 62, 70 46 C 72 34, 88 30, 95 14 Z"
                  fill="url(#g-ng)" />
            <path d="M88 44 C 86 58, 100 62, 100 78 C 100 92, 90 102, 80 102 C 68 102, 60 92, 64 80 C 68 70, 78 70, 80 60 C 82 52, 86 50, 88 44 Z"
                  fill="#E8F2FF" opacity="0.35" />
          </svg>
        );
      case "spy":
        // Candlestick chart
        return (
          <svg style={common} viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice" fill="none">
            <g stroke="#C7CCFF" strokeOpacity="0.25" strokeWidth="1">
              <line x1="0" y1="30" x2="160" y2="30" />
              <line x1="0" y1="60" x2="160" y2="60" />
              <line x1="0" y1="90" x2="160" y2="90" />
            </g>
            {/* candles */}
            {[
              [14, 50, 88,  "#FF6B6B"],
              [30, 42, 78,  "#7FE3A1"],
              [46, 30, 66,  "#7FE3A1"],
              [62, 38, 72,  "#FF6B6B"],
              [78, 24, 58,  "#7FE3A1"],
              [94, 32, 62,  "#FF6B6B"],
              [110, 20, 50, "#7FE3A1"],
              [126, 14, 44, "#7FE3A1"],
              [142, 22, 52, "#FF6B6B"],
            ].map(([x, top, bot, c], i) => (
              <g key={i} opacity="0.85">
                <line x1={x+4} y1={top-6} x2={x+4} y2={bot+6} stroke={c} strokeOpacity="0.7" strokeWidth="1.3" />
                <rect x={x} y={top} width="9" height={bot-top} fill={c} fillOpacity="0.55" />
              </g>
            ))}
          </svg>
        );
      default:
        return null;
    }
  };
  return (
    <section style={{ padding: "80px 0 0" }}>
      <div className="container">
        <Reveal>
          <div style={{
            position: "relative",
            borderRadius: 28,
            overflow: "hidden",
            padding: "40px 48px 44px",
            background: "linear-gradient(160deg, #15140f 0%, #0c0b09 70%)",
            border: "1px solid var(--line-strong)",
            boxShadow: "0 40px 100px -30px rgba(0,0,0,0.55)",
          }}>
            {/* soft gold glow top-right */}
            <div style={{
              position: "absolute", top: -120, right: -120, width: 420, height: 420,
              background: "radial-gradient(circle, rgba(252,213,53,0.16) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />
            {/* header row */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, marginBottom: 28, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <div style={{ maxWidth: 620 }}>
                <span className="eyebrow" style={{ color: "var(--accent)", marginBottom: 14 }}>
                  <span className="dot" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
                  BEYOND CRYPTO
                </span>
                <h3 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "14px 0 10px", color: "var(--fg)" }}>
                  Trade <span style={{ color: "var(--accent)" }}>metals, energy &amp; indices</span> alongside crypto.
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>
                  Gold, silver, palladium, platinum, Brent and WTI crude, natural gas, and the S&amp;P 500 – all as USDT-quoted perpetuals. Same funded account, same 1:5 leverage, one unified PnL.
                </p>
              </div>
              <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary" data-mobile-hide-on-phone style={{ whiteSpace: "nowrap" }}>
                Start a funded account
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 8 }}><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            {/* market grid */}
            <div data-mobile-h-scroll style={{
              position: "relative", zIndex: 1,
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
              "--mhs-count": markets.length,
            }}>
              {markets.map(m => (
                <div key={m.sym} style={{
                  position: "relative",
                  padding: "18px 18px 16px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid var(--line)",
                  transition: "transform .25s var(--ease-out), border-color .25s, background .25s",
                  overflow: "hidden",
                  minHeight: 150,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "rgba(252,213,53,0.35)";
                  e.currentTarget.style.background = "rgba(252,213,53,0.04)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                }}>
                  {/* Background asset art – large, darkened, fills the card */}
                  <AssetArt kind={m.art} color={m.color} />
                  {/* Dark gradient scrim so text stays legible */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.78) 60%, rgba(10,9,8,0.9) 100%)",
                    pointerEvents: "none",
                  }} />

                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 800, letterSpacing: "0.12em",
                      color: m.color, textTransform: "uppercase",
                      fontFamily: "Akrobat, Onest, sans-serif",
                      textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                    }}>{m.sym}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
                      color: "var(--fg-dim)", textTransform: "uppercase",
                    }}>{m.cls}</span>
                  </div>
                  <div style={{ position: "relative", zIndex: 1, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--fg-dim)", fontFamily: "Akrobat, Onest, sans-serif", marginBottom: 2 }}>
                    {m.sym}/USDT
                  </div>
                  <div style={{ position: "relative", zIndex: 1, fontSize: 17, fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.01em", marginBottom: 8 }}>
                    {m.name}
                  </div>
                  <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "var(--fg-muted)", fontFamily: "Akrobat, Onest, sans-serif" }}>
                      ${m.ref}{m.unit && <span style={{ fontSize: 10, color: "var(--fg-low)", fontWeight: 600, marginLeft: 2 }}>{m.unit}</span>}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: m.up ? "var(--green)" : "#ff6b6b", fontFamily: "Akrobat, Onest, sans-serif" }}>{m.ch}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-only CTA – sits between markets grid and Live 24/7 footer on phone. */}
            <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary" data-mobile-show-on-phone style={{
              display: "none",
              marginTop: 20,
              width: "100%",
              justifyContent: "center",
            }}>
              Start a funded account
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 8 }}><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>

            {/* footer strip */}
            <div style={{
              position: "relative", zIndex: 1,
              marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--line)",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap",
              fontSize: 13, color: "var(--fg-dim)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)" }} />
                  Live 24/7 (incl. weekends)
                </span>
                <span>Leverage <span style={{ color: "var(--fg)", fontWeight: 700 }}>1:5</span></span>
                <span>Quote: <span style={{ color: "var(--fg)", fontWeight: 700 }}>USDT</span></span>
              </div>
              <span style={{ color: "var(--fg-muted)" }}>
                Plus 160+ crypto pairs – all in the same funded account.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  useRevealOnScroll();
  const steps = [
    {
      n: "01", k: "SIGN UP",
      t: "Pick your account size",
      d: "Seven sizes, from $5,000 ($79) up to $200,000 ($1,293). One-time Hash Hedge Challenge fee. Pay in USDT, USDC, BTC or ETH.",
      bullets: ["7 account sizes · $5K to $200K", "Pay with crypto (USDT/USDC/BTC/ETH)", "One-time fee – no subscriptions"],
    },
    {
      n: "02", k: "PROVE YOUR EDGE",
      t: "Pass Stage 1 and Stage 2",
      d: "Stage 1: +8% target. Stage 2: +6% target. Max 5% daily loss, 10% max drawdown on Stage 1 (8% from Stage 2). Minimum 5 trading days per stage. No time limit.",
      bullets: ["Stage 1 target: +8% · DD 10%", "Stage 2 target: +6% · DD 8%", "Max 5% daily loss · min 5 days"],
    },
    {
      n: "03", k: "GET FUNDED",
      t: "Trade the funded Stage 3 account",
      d: "Pass both stages and you move to Stage 3 – funded. No profit target, unlimited trading period, same risk rules (5% daily, 8% max DD). Leverage 1:5 on every stage.",
      bullets: ["Stage 3 – funded, no target", "Unlimited trading period", "Leverage 1:5 · 5% daily / 8% DD"],
    },
  ];

  return (
    <section id="how" style={{ background: "linear-gradient(180deg, transparent 0%, var(--bg-elev) 20%, var(--bg-elev) 80%, transparent 100%)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 80, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />HOW IT WORKS</span></Reveal>
            <Reveal delay="1">
              <h2 className="h1" style={{ margin: "20px 0 0" }}>
                Three steps from<br />
                <span style={{ color: "var(--accent)" }}>zero to funded.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>
              Skip the 5-year grind of building personal capital. Prove your trading edge in our Challenge and unlock institutional-grade funding within days – not years.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, position: "relative" }}>
          <div style={{
            position: "absolute", top: 42, left: "16.66%", right: "16.66%", height: 2,
            background: "linear-gradient(90deg, transparent, var(--accent) 20%, var(--accent) 80%, transparent)",
            opacity: 0.3, zIndex: 0,
          }} />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={String(i + 1)}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="how-step-badge" style={{
                  width: 84, height: 84, borderRadius: "50%",
                  background: "var(--bg)", border: "2px solid var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, fontWeight: 800, color: "var(--accent)",
                  marginBottom: 32, fontFamily: "Akrobat, Onest, sans-serif",
                  position: "relative",
                  animationDelay: `${i * 0.6}s`,
                }}>
                  <span style={{ position: "relative", zIndex: 2 }}>{s.n}</span>
                </div>
                <div className="card" style={{ padding: 32 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 12 }}>{s.k}</div>
                  <h3 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 14px" }}>{s.t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-muted)", margin: "0 0 20px" }}>{s.d}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {s.bullets.map(b => (
                      <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", fontSize: 14, color: "var(--fg)", borderTop: "1px solid var(--line)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                          <circle cx="12" cy="12" r="10" fill="var(--accent)" opacity="0.15" />
                          <path d="M8 12l3 3 5-6" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PromoBanner, HowItWorks });
