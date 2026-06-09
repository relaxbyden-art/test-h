// Hash Hedge – Pricing (FundedNext-style), Why Us, Payouts
const { useState: ___useS } = React;

// ============================================================================
// Pricing – FundedNext-inspired checkout flow.
// Layout:
//   1. Program tab (Hash Hedge Challenge – only model, but framed as tab so it reads like FN).
//   2. Horizontal size selector with account-size chips + price + "Popular" badge.
//   3. Rules grid: 6 rule cards with icons, showing value per stage in mini-row.
//   4. Big summary / checkout bar: account size → price → Start Challenge CTA.
// ============================================================================
function Pricing() {
  useRevealOnScroll();
  const [size, setSize] = ___useS(25000);

  const sizes   = [5000, 10000, 25000, 50000, 100000, 150000, 200000];
  const pricing = { 5000: 79, 10000: 99, 25000: 299, 50000: 499, 100000: 799, 150000: 1093, 200000: 1293 };
  const price   = pricing[size];
  const popular = 25000;

  // Per-stage rule values – single source of truth.
  const rules = [
    {
      k: "target",
      label: "Profit Target",
      sub:   "Required equity gain to advance to next stage.",
      icon:  (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      stages: ["8%", "6%", "∞"],
    },
    {
      k: "daily",
      label: "Max Daily Loss",
      sub:   "Equity drop within a single trading day. Breach = failed.",
      icon:  (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/></svg>
      ),
      stages: ["5%", "5%", "5%"]
    },
    {
      k: "dd",
      label: "Max Overall Drawdown",
      sub:   "Peak-to-trough loss limit across the full challenge.",
      icon:  (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 7l6 6 4-4 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 17h7v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      stages: ["10%", "8%", "8%"],
    },
    {
      k: "days",
      label: "Minimum Trading Days",
      sub:   "How many sessions you must trade before you can pass.",
      icon:  (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      stages: ["5", "5", "–"],
    },
    {
      k: "period",
      label: "Trading Period",
      sub:   "Total time you have to complete the stage. Unlimited.",
      icon:  (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      stages: [<Inf key="1" />, <Inf key="2" />, <Inf key="3" />],
    },
    {
      k: "lev",
      label: "Max Leverage",
      sub:   "Capped at 1:5 across all stages and all assets.",
      icon:  (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
      ),
      stages: ["1:5", "1:5", "1:5"],
    },
  ];

  const profitTarget$ = Math.round(size * 8 / 100);

  return (
    <section id="pricing">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Reveal><span className="eyebrow"><span className="dot" />HASH HEDGE CHALLENGE</span></Reveal>
          <Reveal delay="1">
            <h2 className="h1" style={{ margin: "20px 0 20px" }}>
              Choose your <span style={{ color: "var(--accent)" }}>funded account</span>
            </h2>
          </Reveal>
          <Reveal delay="2">
            <p style={{ fontSize: 18, color: "var(--fg-muted)", maxWidth: 640, margin: "0 auto" }}>
              Two stages to qualify. Six capital sizes. Same rules end-to-end – no surprise consistency clauses, no hidden resets.
            </p>
          </Reveal>
        </div>

        {/* Program tab – single 2-phase model */}
        <Reveal delay="2">
          <div style={{ maxWidth: 1112, margin: "0 auto 24px", display: "flex", justifyContent: "center" }}>
            <div style={{
              display: "inline-flex", padding: 5,
              border: "1px solid var(--line)", borderRadius: 999,
              background: "rgba(255,255,255,0.02)",
            }}>
              <div style={{
                padding: "10px 24px", borderRadius: 999,
                background: "var(--accent)", color: "#13111c",
                fontWeight: 800, fontSize: 13, letterSpacing: "0.02em",
                fontFamily: "Onest, sans-serif",
              }}>
                2-Phase Challenge
              </div>
            </div>
          </div>
        </Reveal>

        {/* Size picker – wider chips with "Popular" badge on $25K */}
        <Reveal delay="3">
          <div style={{ maxWidth: 1112, margin: "0 auto 28px" }}>
            <div data-mobile-h-scroll style={{
              display: "grid", gridTemplateColumns: `repeat(${sizes.length}, 1fr)`, gap: 12,
            }}>
              {sizes.map(s => {
                const active = size === s;
                const isPop  = s === popular;
                const isBest = s === 200000;
                const badge  = isBest ? "BEST VALUE" : (isPop ? "POPULAR" : null);
                const badgeBg = isBest ? "#7BC75A" : (active ? "var(--accent)" : "var(--fg)");
                return (
                  <button key={s} onClick={() => setSize(s)} style={{
                    position: "relative",
                    padding: "22px 12px 20px",
                    border: `1px solid ${active ? "var(--accent)" : (isBest ? "rgba(123,199,90,0.5)" : "var(--line)")}`,
                    background: active
                      ? "linear-gradient(180deg, rgba(252,213,53,0.12) 0%, rgba(252,213,53,0.03) 100%)"
                      : (isBest
                          ? "linear-gradient(180deg, rgba(123,199,90,0.08) 0%, rgba(123,199,90,0.02) 100%)"
                          : "rgba(255,255,255,0.02)"),
                    borderRadius: 16, cursor: "pointer", transition: "all .2s",
                    textAlign: "center",
                    boxShadow: active ? "0 16px 40px -14px rgba(252,213,53,0.45)" : (isBest ? "0 14px 36px -16px rgba(123,199,90,0.4)" : "none"),
                    fontFamily: "Onest, sans-serif",
                  }}>
                    {badge && (
                      <div style={{
                        position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)",
                        background: badgeBg,
                        color: "#13111c",
                        padding: "3px 10px", borderRadius: 999,
                        fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
                        whiteSpace: "nowrap",
                      }}>{badge}</div>
                    )}
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                      color: active ? "var(--accent)" : "var(--fg-low)",
                      textTransform: "uppercase", marginBottom: 6,
                    }}>Account</div>
                    <div style={{
                      fontSize: 26, fontWeight: 800, letterSpacing: "-0.025em",
                      color: active ? "var(--fg)" : "var(--fg)",
                      lineHeight: 1,
                    }}>${s.toLocaleString()}</div>
                    <div style={{
                      marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--line)",
                      fontSize: 20, fontWeight: 800, letterSpacing: "-0.01em",
                      color: active ? "var(--accent)" : "var(--fg-muted)",
                    }}>
                      ${pricing[s]}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--fg-low)", marginTop: 2 }}>one-time</div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Rules comparison table – FundedNext-style: clean table with stage columns */}
        <Reveal delay="4">
          <div data-mobile-comp-table style={{
            maxWidth: 1112, margin: "0 auto 28px",
            fontFamily: "Onest, sans-serif",
            borderRadius: 20,
            border: "1px solid var(--line-strong)",
            background: "rgba(255,255,255,0.015)",
            overflow: "hidden",
          }}>
            {/* Column headers – big tall stage labels */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "minmax(280px, 1.4fr) repeat(3, 1fr)",
              background: "rgba(255,255,255,0.02)",
              borderBottom: "1px solid var(--line-strong)",
            }}>
              <div style={{
                padding: "28px 28px 24px",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
              }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", color: "var(--fg-low)", textTransform: "uppercase", marginBottom: 8 }}>Compare</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>Challenge rules,<br />stage by stage</div>
              </div>
              {[
                { n: 1, label: "STAGE 1",  sub: "Evaluation phase",       accent: false },
                { n: 2, label: "STAGE 2",  sub: "Verification phase",     accent: false },
                { n: 3, label: "FUNDED",   sub: "Live capital, real payouts", accent: true },
              ].map((col, i) => (
                <div key={i} style={{
                  padding: "28px 20px 24px",
                  textAlign: "center",
                  borderLeft: "1px solid var(--line)",
                  background: col.accent ? "rgba(252,213,53,0.05)" : "transparent",
                  position: "relative",
                }}>
                  {col.accent && (
                    <div style={{
                      position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
                      color: "var(--accent)",
                      padding: "2px 8px", borderRadius: 4,
                      background: "rgba(252,213,53,0.15)",
                    }}>GOAL</div>
                  )}
                  <div style={{
                    fontSize: 11, fontWeight: 800, letterSpacing: "0.14em",
                    color: col.accent ? "var(--accent)" : "var(--fg-dim)",
                    marginBottom: 6, marginTop: col.accent ? 12 : 0,
                  }}>{col.label}</div>
                  <div style={{
                    fontSize: 34, fontWeight: 800, letterSpacing: "-0.025em",
                    color: col.accent ? "var(--accent)" : "var(--fg)",
                    fontFamily: "Akrobat, Onest, sans-serif",
                    lineHeight: 1,
                  }}>{col.accent ? <Inf /> : `0${col.n}`}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-dim)", marginTop: 8 }}>{col.sub}</div>
                </div>
              ))}
            </div>

            {/* Body – one table row per rule */}
            {rules.map((r, rowI) => (
              <div key={r.k} style={{
                display: "grid",
                gridTemplateColumns: "minmax(280px, 1.4fr) repeat(3, 1fr)",
                borderTop: rowI === 0 ? "none" : "1px solid var(--line)",
                background: rowI % 2 === 1 ? "rgba(255,255,255,0.012)" : "transparent",
              }}>
                {/* Rule label + description */}
                <div style={{ padding: "22px 28px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: "rgba(252,213,53,0.08)", color: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{r.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--fg)", lineHeight: 1.2, marginBottom: 2 }}>{r.label}</div>
                    <div style={{ fontSize: 12, color: "var(--fg-dim)", lineHeight: 1.35 }}>{r.sub}</div>
                  </div>
                </div>
                {/* Stage values */}
                {r.stages.map((v, i) => (
                  <div key={i} style={{
                    padding: "22px 20px",
                    textAlign: "center",
                    borderLeft: "1px solid var(--line)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: i === 2 ? "rgba(252,213,53,0.03)" : "transparent",
                    fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em",
                    color: i === 2 ? "var(--accent)" : "var(--fg)",
                    fontFamily: "Akrobat, Onest, sans-serif",
                    lineHeight: 1,
                  }}>{v}</div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Checkout / summary bar */}
        <Reveal delay="5">
          <div style={{
            maxWidth: 1112, margin: "0 auto",
            padding: "28px 32px", borderRadius: 20,
            background: "linear-gradient(135deg, rgba(252,213,53,0.10), rgba(252,213,53,0.02))",
            border: "1px solid var(--line-strong)",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr auto",
            alignItems: "center", gap: 28,
            fontFamily: "Onest, sans-serif",
          }}>
            {/* Left: account summary */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", color: "var(--accent)" }}>YOUR ACCOUNT</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
                <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.025em", color: "var(--fg)", fontFamily: "Akrobat, Onest, sans-serif", lineHeight: 1 }}>
                  ${size.toLocaleString()}
                </div>
                <div style={{ fontSize: 13, color: "var(--fg-dim)" }}>
                  Profit split <b style={{ color: "var(--fg)" }}>80 / 20</b>
                </div>
              </div>
            </div>
            {/* Mid: price breakdown */}
            <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", color: "var(--fg-low)" }}>CHALLENGE FEE</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", fontFamily: "Akrobat, Onest, sans-serif", lineHeight: 1 }}>
                  ${price}
                </div>
                <div style={{ fontSize: 13, color: "var(--fg-dim)" }}>
                  ≈ <b style={{ color: "var(--fg)" }}>${(price / size * 1000).toFixed(2)}</b> per $1,000 of capital
                </div>
              </div>
            </div>
            {/* Right: CTA */}
            <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary btn-lg" style={{ whiteSpace: "nowrap" }}>
              Start Challenge
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 8 }}>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        {/* Payment chips */}
        <Reveal delay="6">
          <div style={{
            maxWidth: 1112, margin: "20px auto 0",
            display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
            fontSize: 13, color: "var(--fg-dim)", flexWrap: "wrap",
            fontFamily: "Onest, sans-serif",
          }}>
            <span>Pay with</span>
            {["TRC20", "ERC20", "BEP20", "Solana", "Arbitrum", "Optimism"].map((c) => (
              <span key={c} style={{
                padding: "5px 11px", borderRadius: 7,
                border: "1px solid var(--line-strong)",
                background: "rgba(255,255,255,0.02)",
                fontWeight: 800, color: "var(--fg)",
                letterSpacing: "0.02em",
              }}>{c}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Small ∞ glyph – matches Figma "unlimited" cell
function Inf() {
  return (
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" style={{ opacity: 0.95, display: "inline-block", verticalAlign: "middle" }}>
      <path d="M6 8c0-2.5 2-4.5 4.5-4.5S15 5.5 15 8s2 4.5 4.5 4.5S24 10.5 24 8s-2-4.5-4.5-4.5S15 5.5 15 8 13 12.5 10.5 12.5 6 10.5 6 8Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================================
// WhyUs – 8 differentiators, each with a live themed visual (no stock images).
// ============================================================================
function WhyUs() {
  useRevealOnScroll();

  const cards = [
    { n: "01", t: "160+ crypto pairs",  d: "BTC, ETH, SOL, XRP, DOGE and 160+ spot pairs on institutional liquidity. No synthetic quotes, no dealer intervention.", art: <ArtTickers /> },
    { n: "02", t: "Three-stage program", d: "Stage 1 (+8%) → Stage 2 (+6%) → Stage 3 funded. Same rules end-to-end: 5% daily, 8–10% DD, 1:5 leverage.",               art: <ArtStages /> },
    { n: "03", t: "Crypto-only payments",d: "Pay in USDT, USDC, BTC or ETH. Withdrawals go out on the same rails – your wallet, your schedule.",                     art: <ArtCoins /> },
    { n: "04", t: "Unlimited time",      d: "No 30-day clock, no hidden expiry. Take the time you need to pass Stage 1 and Stage 2. Stage 3 is unlimited by design.", art: <ArtInfinity /> },
    { n: "05", t: "Scale your account",  d: "Prove consistency and grow. Funded traders add capital on performance – no arbitrary caps, no waiting lists.",           art: <ArtScale /> },
    { n: "06", t: "Institutional infra", d: "Tier-1 execution venues, deep order books, minimal slippage. The same plumbing hedge funds use – exposed to retail.",     art: <ArtOrderBook /> },
    { n: "07", t: "Human support 24/7",  d: "Real traders on Telegram and chat, not bots. First response under 5 minutes across every major timezone.",                art: <ArtClock /> },
    { n: "08", t: "Transparent rules",   d: "Every rule for every stage is published. No surprise consistency clauses, no silent parameter changes.",                  art: <ArtRules /> },
  ];
  return (
    <section id="why">
      <style>{`
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
      `}</style>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 64, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />WHY HASHHEDGE</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 0" }}>Built by traders.<br /><span style={{ color: "var(--accent)" }}>Run like a hedge fund.</span></h2></Reveal>
          </div>
          <Reveal delay="2"><p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>A crypto-native prop trading firm backing skilled traders with up to $200,000 in live capital. The Hash Hedge Challenge is how we find the next one.</p></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={String(Math.min(i, 5))}>
              <div className="card why-card" style={{
                padding: 0,
                height: "100%", display: "flex", flexDirection: "column",
                background: "linear-gradient(180deg, rgba(252,213,53,0.03) 0%, var(--bg-card) 40%)",
              }}>
                {/* Art area – fills the top with a live themed visual */}
                <div style={{
                  position: "relative",
                  height: 200,
                  borderBottom: "1px solid var(--line)",
                  overflow: "hidden",
                  background: "radial-gradient(ellipse at 50% 110%, rgba(252,213,53,0.10) 0%, transparent 60%), linear-gradient(180deg, #141318 0%, #0b0b0e 100%)",
                }}>
                  {/* ambient grid */}
                  <div className="why-art-bg" style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%)",
                    opacity: 0.7,
                  }} />
                  {/* glow blob per card */}
                  <div style={{
                    position: "absolute", width: 200, height: 200,
                    top: "40%", left: "50%", transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, rgba(252,213,53,0.22) 0%, transparent 65%)",
                    animation: "why-glow 6s ease-in-out infinite",
                    animationDelay: `${i * 0.4}s`,
                    pointerEvents: "none",
                  }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {c.art}
                  </div>
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    background: "rgba(16,16,18,0.82)", backdropFilter: "blur(8px)",
                    color: "var(--accent)", padding: "4px 10px", borderRadius: 6,
                    fontSize: 11, fontWeight: 800, letterSpacing: "0.12em",
                    fontFamily: "Akrobat, Onest, sans-serif",
                  }}>{c.n}</div>
                </div>
                <div style={{ padding: 24, flex: 1 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{c.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--fg-muted)", margin: 0 }}>{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== Why Us – themed visuals (pure CSS/SVG, no stock images) ============

function ArtTickers() {
  // Live-price board: 6 visible tickers, prices tick randomly every 1-2s with flash highlight.
  // The list itself scrolls up at a slow, steady pace. Much calmer + more alive than a flat marquee.
  const base = [
    { sym: "BTC",  name: "Bitcoin",   price: 67420.50, logo: "₿", color: "#F7931A" },
    { sym: "ETH",  name: "Ethereum",  price: 3480.20,  logo: "Ξ", color: "#627EEA" },
    { sym: "SOL",  name: "Solana",    price: 192.45,   logo: "◎", color: "#9945FF" },
    { sym: "XRP",  name: "Ripple",    price: 2.485,    logo: "✕", color: "#00AAE4" },
    { sym: "BNB",  name: "BNB",       price: 612.30,   logo: "⬢", color: "#F3BA2F" },
    { sym: "DOGE", name: "Dogecoin",  price: 0.1624,   logo: "Ð", color: "#C3A634" },
    { sym: "AVAX", name: "Avalanche", price: 38.24,    logo: "▲", color: "#E84142" },
    { sym: "LINK", name: "Chainlink", price: 18.42,    logo: "◈", color: "#2A5ADA" },
  ];
  const [prices, setPrices] = useState(() => base.map(b => ({ price: b.price, dir: 0, pulse: 0 })));
  useEffect(() => {
    const id = setInterval(() => {
      setPrices(prev => prev.map((p, i) => {
        // only ~35% of tickers tick on each cycle, keeps it calm and non-uniform
        if (Math.random() > 0.35) return { ...p, dir: 0 };
        const pct = (Math.random() - 0.48) * 0.008; // slight upward bias, ±0.8%
        const next = p.price * (1 + pct);
        return { price: next, dir: pct >= 0 ? 1 : -1, pulse: p.pulse + 1 };
      }));
    }, 1400);
    return () => clearInterval(id);
  }, []);
  const fmt = (p) => p >= 1000 ? p.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })
                 : p >= 10  ? p.toFixed(2)
                 : p >= 1   ? p.toFixed(3)
                 :            p.toFixed(4);
  // duplicated for seamless loop
  const list = [...base, ...base];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", fontFamily: "Akrobat, Onest, sans-serif" }}>
      <style>{`
        @keyframes art-ticker-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes art-ticker-flash-up { 0% { background: rgba(124,216,160,0.22); } 100% { background: rgba(255,255,255,0.03); } }
        @keyframes art-ticker-flash-dn { 0% { background: rgba(255,107,107,0.18); } 100% { background: rgba(255,255,255,0.03); } }
      `}</style>
      {/* fades top/bottom */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 36, background: "linear-gradient(180deg, #0b0b0e 0%, transparent 100%)", zIndex: 3, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 44, background: "linear-gradient(0deg, #0b0b0e 0%, transparent 100%)", zIndex: 3, pointerEvents: "none" }} />

      {/* LIVE pill */}
      <div style={{
        position: "absolute", top: 10, right: 12, zIndex: 4,
        display: "flex", alignItems: "center", gap: 6,
        padding: "4px 9px", borderRadius: 999,
        background: "rgba(124,216,160,0.12)", border: "1px solid rgba(124,216,160,0.25)",
        fontSize: 9, fontWeight: 800, color: "var(--green)", letterSpacing: "0.1em",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "why-pulse 1.4s ease-in-out infinite", boxShadow: "0 0 6px var(--green)" }} />
        LIVE
      </div>

      <div style={{
        position: "absolute", inset: "14px 14px",
        animation: "art-ticker-scroll 22s linear infinite",
        display: "flex", flexDirection: "column", gap: 7,
        willChange: "transform",
      }}>
        {list.map((c, i) => {
          const p = prices[i % base.length];
          const isUp = p.dir > 0;
          const flash = p.dir !== 0
            ? `${isUp ? "art-ticker-flash-up" : "art-ticker-flash-dn"} 0.9s ease-out`
            : "none";
          return (
            <div key={`${c.sym}-${i}-${p.pulse}`} style={{
              display: "grid", gridTemplateColumns: "22px 1fr auto",
              alignItems: "center", gap: 9,
              padding: "8px 11px", borderRadius: 9,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.05)",
              animation: flash,
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: "50%",
                background: c.color, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 900, color: "#fff",
                boxShadow: `0 0 10px ${c.color}44`,
              }}>{c.logo}</div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "var(--fg)", letterSpacing: "0.02em" }}>{c.sym}</span>
                <span style={{ fontSize: 8.5, fontWeight: 600, color: "var(--fg-dim)", marginTop: 1 }}>{c.name}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", lineHeight: 1.1 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800,
                  color: p.dir === 0 ? "var(--fg)" : (isUp ? "var(--green)" : "#ff6b6b"),
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}>{fmt(p.price)}</span>
                <span style={{
                  fontSize: 8, fontWeight: 700,
                  color: p.dir === 0 ? "var(--fg-dim)" : (isUp ? "var(--green)" : "#ff6b6b"),
                  marginTop: 1,
                  opacity: p.dir === 0 ? 0.5 : 1,
                  transition: "opacity 0.3s",
                }}>{p.dir === 0 ? "–" : (isUp ? "▲" : "▼")}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ArtStages() {
  // 3 progress rings / stages, filling in sequence.
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
      {[
        { pct: 100, label: "STAGE 1", val: "+8%", done: true },
        { pct: 72,  label: "STAGE 2", val: "+6%", done: false },
        { pct: 18,  label: "FUNDED",  val: "∞",   done: false, accent: true },
      ].map((s, i) => {
        const r = 30, c = 2 * Math.PI * r;
        return (
          <div key={s.label} style={{ position: "relative", width: 74, height: 74 }}>
            <svg width="74" height="74" viewBox="0 0 74 74" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="37" cy="37" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
              <circle cx="37" cy="37" r={r} fill="none"
                stroke={s.accent ? "var(--accent)" : "var(--fg)"} strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={c - (c * s.pct / 100)}
                style={{ transition: "stroke-dashoffset 2s var(--ease-out)", filter: s.accent ? "drop-shadow(0 0 6px var(--accent))" : "none" }}
              />
            </svg>
            <div style={{
              position: "absolute", inset: 0, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              fontFamily: "Akrobat, Onest, sans-serif",
            }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: s.accent ? "var(--accent)" : "var(--fg)", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 8, fontWeight: 800, color: "var(--fg-dim)", letterSpacing: "0.08em", marginTop: 3 }}>{s.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArtCoins() {
  // Central USDT token with orbiting BTC / ETH / USDC.
  return (
    <div style={{ position: "relative", width: 180, height: 180 }}>
      {/* orbit paths */}
      <div style={{ position: "absolute", inset: 30, border: "1px dashed rgba(255,255,255,0.12)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", inset: 10, border: "1px dashed rgba(252,213,53,0.15)", borderRadius: "50%" }} />
      {/* center USDT – outer div centers it, inner div runs pulse so the animation's transform doesn't clobber the centering translate. */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 0, height: 0,
      }}>
        <div style={{
          position: "absolute", top: -29, left: -29,
          width: 58, height: 58, borderRadius: "50%",
          background: "linear-gradient(135deg, #26A17B, #1a7e5c)",
          color: "white", display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "Akrobat, Onest, sans-serif", fontWeight: 800, fontSize: 16,
          boxShadow: "0 0 30px rgba(38,161,123,0.5), inset 0 2px 4px rgba(255,255,255,0.2)",
          animation: "why-pulse 3s ease-in-out infinite",
        }}>USDT</div>
      </div>
      {/* orbiting coins – outer wrapper is pinned at center (0x0 box), inner is offset by orbit radius so rotation is clean. */}
      {[
        { sym: "₿",   bg: "#F7931A", radius: 70, duration: 9,  delay: 0,    direction: 1  },
        { sym: "Ξ",   bg: "#627EEA", radius: 85, duration: 14, delay: -5,   direction: -1 },
        { sym: "◎",   bg: "#9945FF", radius: 85, duration: 14, delay: -9.5, direction: -1 },
      ].map((c, i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          width: 0, height: 0,
          animation: `why-orbit-${c.direction > 0 ? "cw" : "ccw"} ${c.duration}s linear infinite`,
          animationDelay: `${c.delay}s`,
        }}>
          <div style={{
            position: "absolute", top: -16, left: c.radius - 16,
            width: 32, height: 32,
            borderRadius: "50%",
            background: c.bg,
            color: "white", display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 15,
            boxShadow: `0 0 14px ${c.bg}99`,
          }}>{c.sym}</div>
        </div>
      ))}
    </div>
  );
}

function ArtInfinity() {
  // Big infinity with animated dashed stroke + calendar "X".
  return (
    <div style={{ position: "relative", width: 180, height: 140, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="180" height="90" viewBox="0 0 180 90" fill="none">
        <path d="M30 45 C30 20, 70 20, 90 45 C110 70, 150 70, 150 45 C150 20, 110 20, 90 45 C70 70, 30 70, 30 45 Z"
          stroke="var(--accent)" strokeWidth="6" strokeLinecap="round"
          strokeDasharray="8 6"
          style={{ animation: "why-dash 3s linear infinite", filter: "drop-shadow(0 0 8px rgba(252,213,53,0.5))" }}
        />
      </svg>
      {/* Crossed-out calendar badge */}
      <div style={{
        position: "absolute", bottom: -6, right: 12,
        display: "flex", alignItems: "center", gap: 8,
        padding: "6px 10px", borderRadius: 8,
        background: "rgba(0,0,0,0.5)", border: "1px solid var(--line)",
        fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", color: "var(--fg-dim)",
        fontFamily: "Akrobat, Onest, sans-serif",
      }}>
        <span style={{ position: "relative", textDecoration: "line-through", opacity: 0.6 }}>30-DAY CLOCK</span>
      </div>
    </div>
  );
}

function ArtScale() {
  // Ascending bar chart with dollar amounts, animated pump.
  const bars = [
    { h: 24, v: "5K" }, { h: 38, v: "10K" }, { h: 56, v: "25K" }, { h: 78, v: "50K" }, { h: 104, v: "100K" }, { h: 130, v: "200K" }
  ];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 150 }}>
      {bars.map((b, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: i === bars.length - 1 ? "var(--accent)" : "var(--fg-dim)", fontFamily: "Akrobat, Onest, sans-serif" }}>${b.v}</div>
          <div style={{
            width: 22, height: b.h,
            borderRadius: "4px 4px 2px 2px",
            background: i === bars.length - 1
              ? "linear-gradient(180deg, var(--accent), rgba(252,213,53,0.4))"
              : "linear-gradient(180deg, rgba(252,213,53,0.55), rgba(252,213,53,0.1))",
            boxShadow: i === bars.length - 1 ? "0 0 16px rgba(252,213,53,0.45)" : "none",
            transformOrigin: "bottom",
            animation: "why-barpump 2.8s ease-in-out infinite",
            animationDelay: `${i * 0.18}s`,
          }} />
        </div>
      ))}
      {/* Arrow */}
      <svg width="30" height="150" viewBox="0 0 30 150" style={{ marginLeft: -4 }}>
        <path d="M5 140 L25 25 M25 25 L15 35 M25 25 L25 38" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function ArtOrderBook() {
  // Mini order-book: bids (green) vs asks (red) rendered as horizontal bars at prices.
  const asks = [ { p: "67,428.20", q: 78, pct: 92 }, { p: "67,427.10", q: 62, pct: 72 }, { p: "67,426.50", q: 44, pct: 52 }, { p: "67,425.00", q: 28, pct: 34 } ];
  const bids = [ { p: "67,424.40", q: 32, pct: 38 }, { p: "67,423.80", q: 52, pct: 60 }, { p: "67,422.00", q: 68, pct: 80 }, { p: "67,420.50", q: 88, pct: 100 } ];
  return (
    <div style={{ width: 186, fontFamily: "Akrobat, Onest, sans-serif", fontSize: 9, fontWeight: 700 }}>
      {asks.map((r, i) => (
        <div key={"a" + i} style={{ position: "relative", padding: "2px 8px", marginBottom: 1 }}>
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: `${r.pct}%`, background: "rgba(230,70,70,0.18)", borderRadius: 2 }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#ff6b6b" }}>{r.p}</span>
            <span style={{ color: "var(--fg-dim)" }}>{r.q.toFixed(2)}</span>
          </div>
        </div>
      ))}
      <div style={{
        display: "flex", justifyContent: "space-between",
        padding: "6px 8px", margin: "4px 0",
        borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)",
        color: "var(--accent)", fontSize: 12, fontWeight: 800,
      }}>
        <span>67,425.70</span>
        <span style={{ color: "var(--green)" }}>↑ 0.8%</span>
      </div>
      {bids.map((r, i) => (
        <div key={"b" + i} style={{ position: "relative", padding: "2px 8px", marginBottom: 1 }}>
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: `${r.pct}%`, background: "rgba(24,169,101,0.18)", borderRadius: 2 }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "var(--green)" }}>{r.p}</span>
            <span style={{ color: "var(--fg-dim)" }}>{r.q.toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArtClock() {
  // Live clock face with 3 timezone labels + green "online" ring.
  return (
    <div style={{ position: "relative", width: 160, height: 160 }}>
      <div style={{
        position: "absolute", inset: 20, borderRadius: "50%",
        border: "2px solid rgba(252,213,53,0.35)",
        background: "radial-gradient(circle at 30% 30%, rgba(252,213,53,0.12), transparent 60%)",
      }} />
      {/* hour marks */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{
          position: "absolute", top: "50%", left: "50%",
          width: 2, height: i % 3 === 0 ? 10 : 6,
          background: i % 3 === 0 ? "var(--fg)" : "var(--fg-dim)",
          transformOrigin: "center 60px",
          transform: `translate(-50%, -60px) rotate(${i * 30}deg)`,
          borderRadius: 2,
        }} />
      ))}
      {/* hands – each hand lives inside a wrapper that pins it to clock center;
           inner bar rotates around its own base (transform-origin: bottom center). */}
      {/* hour hand */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 0, height: 0,
        animation: "why-spin 180s linear infinite",
        transform: "rotate(34deg)",
      }}>
        <div style={{
          position: "absolute", left: -1.5, bottom: 0,
          width: 3, height: 38, background: "var(--fg)",
          borderRadius: 3,
        }} />
      </div>
      {/* minute hand */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 0, height: 0,
        animation: "why-spin 60s linear infinite",
      }}>
        <div style={{
          position: "absolute", left: -1, bottom: 0,
          width: 2, height: 48, background: "var(--accent)",
          borderRadius: 2,
          boxShadow: "0 0 6px rgba(252,213,53,0.55)",
        }} />
      </div>
      {/* center dot */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 10, height: 10, borderRadius: "50%",
        background: "var(--accent)", transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10px var(--accent)",
      }} />
      {/* "24/7" label */}
      <div style={{
        position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)",
        padding: "3px 10px", borderRadius: 999,
        background: "rgba(72,213,136,0.15)", color: "var(--green)",
        fontSize: 10, fontWeight: 800, letterSpacing: "0.08em",
        fontFamily: "Akrobat, Onest, sans-serif",
        display: "flex", alignItems: "center", gap: 5,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 6px var(--green)" }} />
        24 / 7
      </div>
    </div>
  );
}

function ArtRules() {
  // Checklist of rules being ticked off one by one.
  const items = [
    { k: "Stage 1 target", v: "+8%", done: true },
    { k: "Stage 2 target", v: "+6%", done: true },
    { k: "Max daily loss", v: "5%",  done: true },
    { k: "Max drawdown",   v: "8–10%", done: true },
    { k: "Leverage",       v: "1:5", done: true },
  ];
  return (
    <div style={{ width: 196, fontFamily: "Onest, sans-serif" }}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "5px 10px", marginBottom: 2,
          borderRadius: 6, background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="7" cy="7" r="6" fill="var(--accent)" opacity="0.25" />
            <path d="M4 7l2 2 4-4" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontSize: 11, color: "var(--fg-muted)", flex: 1 }}>{it.k}</span>
          <span style={{ fontSize: 11, fontWeight: 800, color: "var(--fg)", fontFamily: "Akrobat, Onest, sans-serif" }}>{it.v}</span>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// PayoutShowcase – honest on-chain payout mechanism. No "3× penalty" (made up).
// ============================================================================
function PayoutShowcase() {
  useRevealOnScroll();
  const countries = ["🇺🇸","🇩🇪","🇬🇧","🇯🇵","🇰🇷","🇧🇷","🇦🇪","🇫🇷","🇮🇳","🇨🇦","🇳🇱","🇸🇬","🇮🇹","🇵🇱","🇪🇸","🇹🇷"];
  return (
    <section id="payouts" data-mobile-image-first style={{ background: "var(--bg-elev)", position: "relative", overflow: "hidden", paddingBottom: 20 }}>
      {/* soft top fade so the previous section (--bg) bleeds into this elevated panel instead of hard-cutting */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 320,
        background: "linear-gradient(180deg, var(--bg) 0%, rgba(11,11,14,0.85) 25%, rgba(11,11,14,0.45) 55%, transparent 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />
      {/* soft bottom fade into the next section (--bg) – mirror of the top one so the panel exits as gracefully as it enters */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 220,
        background: "linear-gradient(0deg, var(--bg) 0%, rgba(11,11,14,0.8) 30%, rgba(11,11,14,0.35) 65%, transparent 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />
      <div className="glow" style={{ width: 800, height: 800, background: "var(--accent)", top: "-20%", left: "-10%", opacity: 0.08 }} />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
          <Reveal>
            <div>
              <span className="eyebrow"><span className="dot" />PAYOUTS · ON-CHAIN</span>
              <h2 className="h1" style={{ margin: "20px 0 24px", letterSpacing: "-0.025em" }}>
                Your funds.<br />
                <span style={{ color: "var(--accent)" }}>Your wallet. Direct.</span>
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-muted)", margin: "0 0 36px", maxWidth: 520 }}>
                Request a withdrawal from your Hash Hedge dashboard. We sign from our multi-sig treasury and send <b style={{ color: "var(--fg)" }}>USDT, USDC, BTC or ETH</b> straight to the wallet on file. You get a TX hash and a downloadable payout certificate.
              </p>

              {/* Mechanism – 3-step timeline */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, marginBottom: 36 }}>
                {[
                  { t: "01", k: "Request submitted", d: "Trader clicks Withdraw in the dashboard. Support reviews – typically within hours." },
                  { t: "02", k: "Treasury signs",    d: "Multi-sig approval on Hash Hedge treasury wallet. Signers live in 3 jurisdictions for redundancy." },
                  { t: "03", k: "Funds on your wallet", d: "Blockchain TX hash emailed + downloadable payout certificate issued." },
                ].map((s, i) => (
                  <div key={s.t} style={{
                    display: "grid", gridTemplateColumns: "60px 1fr", gap: 20,
                    padding: "18px 0", position: "relative",
                    borderTop: i === 0 ? "1px solid var(--line)" : "none",
                    borderBottom: "1px solid var(--line)",
                  }}>
                    <div style={{
                      fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em",
                      color: i === 2 ? "var(--accent)" : "var(--fg-dim)",
                      fontFamily: "Akrobat, Onest, sans-serif",
                      lineHeight: 1,
                    }}>{s.t}</div>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--fg)", marginBottom: 2 }}>{s.k}</div>
                      <div style={{ fontSize: 14, color: "var(--fg-dim)" }}>{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary btn-lg">Start Challenge · from $79</a>
            </div>
          </Reveal>

          {/* Right – real payout certificate */}
          <Reveal delay="2">
            <div style={{
              position: "relative",
              borderRadius: 24,
              padding: 0,
              background: "transparent",
              transform: "rotate(1.6deg)",
              transition: "transform .5s var(--ease-out)",
              filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.55)) drop-shadow(0 0 40px rgba(252,213,53,0.08))",
              cursor: "zoom-in",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "rotate(0deg) scale(1.02)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "rotate(1.6deg)"; }}>
              <img src="assets/payout-certificate.png" alt="Real HashHedge payout certificate" style={{
                display: "block", width: "100%", height: "auto",
                borderRadius: 18,
                border: "1px solid var(--line-strong)",
              }} />
              {/* Accent corner badge */}
              <div style={{
                position: "absolute", top: -14, right: -14,
                padding: "8px 14px", borderRadius: 999,
                background: "var(--accent)", color: "#13111c",
                fontSize: 11, fontWeight: 800, letterSpacing: "0.12em",
                fontFamily: "Onest, sans-serif",
                boxShadow: "0 10px 30px rgba(252,213,53,0.4)",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#13111c" }} />
                REAL PAYOUT
              </div>
              {/* Country flags strip below image */}
              <div style={{
                marginTop: 20, padding: "14px 18px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--line)",
                display: "flex", alignItems: "center", gap: 10,
                fontFamily: "Onest, sans-serif",
              }}>
                <div style={{ fontSize: 11, color: "var(--fg-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Paid in</div>
                <div style={{ display: "flex", fontSize: 20, lineHeight: 1, gap: 6, flexWrap: "wrap" }}>
                  {countries.map((c, i) => (
                    <span key={i} style={{ opacity: 1 - i * 0.015 }}>{c}</span>
                  ))}
                </div>
                <div style={{ marginLeft: "auto", fontSize: 11, color: "var(--fg-dim)" }}>+ 60 more</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing, WhyUs, PayoutShowcase });
