// HashHedge Affiliate — Steps, Commission ladder + calculator, Proof, FAQ, CTA
const { useState: _bS, useEffect: _bE } = React;

const AFF_SIGNUP_B = "https://partner.hashhedge.com/auth/signup/";

const TIERS = [
  { lvl: 1, pct: 50, lo: 0,   hi: 14,   range: "0–14" },
  { lvl: 2, pct: 55, lo: 15,  hi: 49,   range: "15–49" },
  { lvl: 3, pct: 60, lo: 50,  hi: 99,   range: "50–99" },
  { lvl: 4, pct: 65, lo: 100, hi: 199,  range: "100–199" },
  { lvl: 5, pct: 70, lo: 200, hi: 399,  range: "200–399" },
  { lvl: 6, pct: 75, lo: 400, hi: 699,  range: "400–699" },
  { lvl: 7, pct: 80, lo: 700, hi: Infinity, range: "700+" },
];
function tierFor(n) { return TIERS.find(t => n >= t.lo && n <= t.hi) || TIERS[TIERS.length - 1]; }

// ===== How to start — 4 steps =====
function StartEarning() {
  useRevealOnScroll();
  const steps = [
    { n: "01", k: "REGISTER", t: "Sign up", d: "Create a partner account in a couple of minutes. Fast approval, minimal formalities." },
    { n: "02", k: "GET YOUR LINK", t: "Grab your affiliate link", d: "Unique tracking link plus banners, creatives and a live stats dashboard." },
    { n: "03", k: "REFER", t: "Bring in traders", d: "Share your link with your audience, community or traffic. Every signup is yours for life." },
    { n: "04", k: "GET PAID", t: "Earn up to 80%", d: "Collect up to 80% of the revenue each active trader generates — weekly, in USDT." },
  ];
  return (
    <section id="how" style={{ position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <Reveal><span className="eyebrow"><span className="dot" />QUICK START</span></Reveal>
          <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 16px" }}>Monetize your traffic in <span style={{ color: "var(--accent)" }}>4 steps.</span></h2></Reveal>
          <Reveal delay="2"><p style={{ fontSize: 18, color: "var(--fg-muted)" }}>From signup to your first USDT payout — most partners are live the same day.</p></Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, position: "relative", paddingTop: 36 }}>
          <div style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, transparent, var(--accent) 15%, var(--accent) 85%, transparent)", opacity: 0.3, zIndex: 0 }} />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={String(i + 1)}>
              <div className="card" style={{ position: "relative", padding: "54px 26px 28px", textAlign: "center", height: "100%", overflow: "visible" }}>
                <div className="how-step-badge" style={{
                  position: "absolute", top: -32, left: "50%", transform: "translateX(-50%)",
                  width: 64, height: 64, borderRadius: "50%", background: "var(--bg)", border: "2px solid var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "var(--accent)",
                  fontFamily: "Akrobat, Onest, sans-serif", animationDelay: `${i * 0.5}s`, zIndex: 3,
                }}>
                  <span style={{ position: "relative", zIndex: 2 }}>{s.n}</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--accent)", marginBottom: 10 }}>{s.k}</div>
                <h3 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 12px" }}>{s.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay="5">
          <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <a href={AFF_SIGNUP_B} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
              Create my partner account
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== Commission ladder + earnings calculator =====
function CommissionLadder({ avgRevenue = 140 }) {
  useRevealOnScroll();
  const [traders, setTraders] = _bS(200);
  const active = tierFor(traders);
  const monthly = traders * avgRevenue * (active.pct / 100);
  const annual = monthly * 12;
  const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");
  // slider 0..800 (800 = 700+ tier)
  const sliderMax = 800;

  return (
    <section id="tiers" style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        .aff-range { -webkit-appearance: none; appearance: none; width: 100%; height: 8px; border-radius: 999px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent) var(--fill,25%), rgba(255,255,255,0.1) var(--fill,25%), rgba(255,255,255,0.1) 100%);
          outline: none; cursor: pointer; }
        .aff-range::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 26px; height: 26px; border-radius: 50%;
          background: var(--accent); border: 4px solid #16140e; box-shadow: 0 4px 16px rgba(252,213,53,0.5); cursor: grab; }
        .aff-range::-webkit-slider-thumb:active { cursor: grabbing; }
        .aff-range::-moz-range-thumb { width: 26px; height: 26px; border-radius: 50%; background: var(--accent); border: 4px solid #16140e; box-shadow: 0 4px 16px rgba(252,213,53,0.5); cursor: grab; }
      `}</style>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />HOW MUCH YOU MAKE</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 0" }}>The more you bring,<br /><span style={{ color: "var(--accent)" }}>the bigger your cut.</span></h2></Reveal>
          </div>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>
              Your revenue share climbs with the number of active traders you've referred — from <b style={{ color: "var(--fg)" }}>50%</b> at the start all the way to <b style={{ color: "var(--accent)" }}>80%</b>. Drag the slider to see what your network could pay.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: 28, alignItems: "stretch" }}>
          {/* Calculator */}
          <Reveal delay="2">
            <div className="card" style={{ padding: 36, height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, rgba(31,29,37,0.7), rgba(21,19,26,0.7))" }}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", color: "var(--fg-dim)", textTransform: "uppercase", marginBottom: 24 }}>Earnings calculator</div>

              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 14, color: "var(--fg-muted)" }}>Active referred traders</span>
                <span className="mono" style={{ fontSize: 24, fontWeight: 800, color: "var(--fg)" }}>{traders >= sliderMax ? "700+" : traders}</span>
              </div>
              <input className="aff-range" type="range" min="0" max={sliderMax} step="5" value={traders}
                style={{ "--fill": `${(traders / sliderMax) * 100}%` }}
                onChange={e => setTraders(parseInt(e.target.value, 10))} />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--fg-low)" }}>
                <span>0</span><span>200</span><span>400</span><span>700+</span>
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                <div style={{ flex: 1, padding: "16px 18px", borderRadius: 12, background: "rgba(252,213,53,0.08)", border: "1px solid rgba(252,213,53,0.25)" }}>
                  <div style={{ fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Your tier</div>
                  <div className="mono" style={{ fontSize: 26, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{active.pct}%</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 6 }}>Level {active.lvl}</div>
                </div>
                <div style={{ flex: 1, padding: "16px 18px", borderRadius: 12, background: "rgba(255,255,255,0.03)", border: "1px solid var(--line)" }}>
                  <div style={{ fontSize: 11, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Avg / trader / mo</div>
                  <div className="mono" style={{ fontSize: 26, fontWeight: 800, color: "var(--fg)", lineHeight: 1 }}>${avgRevenue}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-low)", marginTop: 6 }}>company revenue</div>
                </div>
              </div>

              <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                <div style={{ fontSize: 13, color: "var(--fg-dim)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Estimated monthly payout</div>
                <div className="mono" style={{ fontSize: 52, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(monthly)}</div>
                <div style={{ fontSize: 15, color: "var(--fg-muted)", marginTop: 10 }}>≈ <b className="mono" style={{ color: "var(--fg)" }}>{fmt(annual)}</b> / year · paid weekly in USDT</div>
              </div>
              <div style={{ marginTop: 18, fontSize: 11, color: "var(--fg-low)", lineHeight: 1.5 }}>
                Illustration only. Actual earnings depend on trader activity and account sizes. Adjust the average in Tweaks.
              </div>
            </div>
          </Reveal>

          {/* Tier ladder */}
          <Reveal delay="3">
            <div style={{ display: "flex", flexDirection: "column", gap: 10, height: "100%" }}>
              {TIERS.map((t) => {
                const on = t.lvl === active.lvl;
                const width = 40 + ((t.pct - 50) / 30) * 60; // 50%→40%, 80%→100%
                return (
                  <div key={t.lvl} style={{
                    position: "relative", flex: 1, minHeight: 56,
                    borderRadius: 14, overflow: "hidden",
                    border: on ? "1px solid rgba(252,213,53,0.5)" : "1px solid var(--line)",
                    background: on ? "rgba(252,213,53,0.06)" : "var(--bg-2)",
                    boxShadow: on ? "0 0 40px rgba(252,213,53,0.18)" : "none",
                    transition: "all .3s var(--ease-out)",
                    display: "flex", alignItems: "center",
                  }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${width}%`,
                      background: on ? "linear-gradient(90deg, rgba(252,213,53,0.22), rgba(252,213,53,0.06))" : "linear-gradient(90deg, rgba(255,255,255,0.05), transparent)",
                      transition: "width .3s var(--ease-out)" }} />
                    <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0 22px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <span className="mono" style={{ fontSize: 34, fontWeight: 800, color: on ? "var(--accent)" : "var(--fg)", letterSpacing: "-0.02em", lineHeight: 1, minWidth: 78 }}>{t.pct}%</span>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: on ? "var(--fg)" : "var(--fg-muted)" }}>Level {t.lvl}</div>
                          <div style={{ fontSize: 12, color: "var(--fg-dim)" }}>{t.range} traders</div>
                        </div>
                      </div>
                      {on && (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "var(--accent)", padding: "5px 11px", borderRadius: 999, background: "rgba(252,213,53,0.14)", border: "1px solid rgba(252,213,53,0.3)" }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
                          YOU
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== Partner proof — recent payouts ledger (reads real, not generic) =====
function PartnerProof() {
  useRevealOnScroll();
  const payouts = [
    { d: "08 Jun", h: "cryptokn1ght", f: "🇩🇪", lv: "L5", a: "3,420" },
    { d: "08 Jun", h: "meta_traffic", f: "🇦🇪", lv: "L6", a: "7,180" },
    { d: "07 Jun", h: "alpha.media", f: "🇧🇷", lv: "L4", a: "1,940" },
    { d: "07 Jun", h: "kz_funded", f: "🇰🇿", lv: "L5", a: "2,610" },
    { d: "06 Jun", h: "defi_dan", f: "🇬🇧", lv: "L7", a: "9,050" },
    { d: "06 Jun", h: "yana.trades", f: "🇵🇱", lv: "L3", a: "880" },
    { d: "05 Jun", h: "hodl_house", f: "🇮🇳", lv: "L6", a: "5,330" },
    { d: "05 Jun", h: "signal_ace", f: "🇹🇷", lv: "L4", a: "1,475" },
  ];
  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 40, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />PARTNER PAYOUTS</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 0" }}>Real partners.<br /><span style={{ color: "var(--accent)" }}>Real payouts.</span></h2></Reveal>
          </div>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>
              A live sample from the partner ledger — settled every Monday in USDT, straight to the wallet. No thresholds games, no clawbacks.
            </p>
          </Reveal>
        </div>

        <Reveal delay="2">
          <div style={{ borderRadius: 20, border: "1px solid var(--line-strong)", overflow: "hidden", background: "linear-gradient(180deg, rgba(31,29,37,0.6), rgba(21,19,26,0.6))" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid var(--line)", background: "rgba(255,255,255,0.015)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 12px var(--green)", animation: "pulse 1.8s ease-in-out infinite" }} />
                <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg)" }}>Latest partner payouts</span>
              </div>
              <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>this week · USDT</span>
            </div>
            {payouts.map((p, i) => (
              <div key={p.h} style={{ display: "grid", gridTemplateColumns: "72px 1fr auto auto", alignItems: "center", gap: 16, padding: "14px 24px", borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                <span className="mono" style={{ fontSize: 13, color: "var(--fg-dim)", fontFamily: "Akrobat, Onest, sans-serif", letterSpacing: "0.04em" }}>{p.d}</span>
                <span style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <span style={{ fontSize: 16, width: 22, textAlign: "center", flexShrink: 0 }}>{p.f}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>@{p.h}</span>
                </span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", color: "var(--accent)", padding: "4px 9px", borderRadius: 999, background: "rgba(252,213,53,0.1)", border: "1px solid rgba(252,213,53,0.25)" }}>{p.lv}</span>
                <span className="mono" style={{ fontSize: 16, fontWeight: 800, color: "var(--green)", minWidth: 86, textAlign: "right" }}>+${p.a}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderTop: "1px solid var(--line)", background: "rgba(255,255,255,0.015)", flexWrap: "wrap", gap: 12 }}>
              <span style={{ fontSize: 13, color: "var(--fg-muted)" }}>Showing 8 of <b className="mono" style={{ color: "var(--fg)" }}>1,840+</b> partners paid this week</span>
              <a href={AFF_SIGNUP_B} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, color: "var(--accent)" }}>
                Join the ledger
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== FAQ =====
function AffFAQ() {
  useRevealOnScroll();
  const [open, setOpen] = _bS(0);
  const items = [
    { q: "How much can I make?", a: "There's no cap. You earn a share of the revenue every referred trader generates — starting at 50% and climbing to 80% as your network of active traders grows. The more active traders you bring, the higher your tier and the bigger every payout." },
    { q: "How long is my referral link valid?", a: "For life. Once a trader signs up through your link they're attributed to you permanently — you keep earning on every challenge they buy and every funded payout they generate, for as long as they stay active." },
    { q: "What payouts are available?", a: <>Weekly payouts in USDT on the network of your choice — TRC20 (Tron), ERC20 (Ethereum), BEP20 (BNB Smart Chain), Solana, Arbitrum or Optimism. Earnings are settled every Monday, with a low minimum and no hidden fees.</> },
    { q: "Do you have to be a trader to participate?", a: "No. The program is open to anyone with an audience — bloggers, media buyers, community owners, YouTubers, traders. Approval is fast and the formalities are minimal." },
    { q: "From which countries can you attract customers?", a: "You can drive traffic from 154 countries worldwide. Because everything settles in crypto, there are no banking borders to worry about." },
    { q: "How do I track my stats?", a: <>You get a real-time partner dashboard the moment you sign up — clicks, signups, active traders, tier progress and exact earnings, all live. Questions? Support is available 24/7 in 30 languages.</> },
  ];
  return (
    <section id="faq" style={{ position: "relative" }}>
      <div className="container" style={{ maxWidth: 960, position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal><span className="eyebrow"><span className="dot" />FAQ</span></Reveal>
          <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0" }}>Frequently asked questions.</h2></Reveal>
          <Reveal delay="2"><p style={{ fontSize: 18, color: "var(--fg-muted)" }}>Everything you need to know before you start earning.</p></Reveal>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((it, i) => (
            <Reveal key={i} delay={String(Math.min(i, 5))}>
              <div onClick={() => setOpen(open === i ? -1 : i)} className="card" style={{ padding: 0, cursor: "pointer", overflow: "hidden" }}>
                <div style={{ padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--fg)" }}>{it.q}</h3>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: open === i ? "var(--accent)" : "var(--bg-card)", color: open === i ? "#13111c" : "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s var(--ease-out)", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                  </div>
                </div>
                <div style={{ maxHeight: open === i ? 600 : 0, overflow: "hidden", transition: "max-height .4s var(--ease-out)" }}>
                  <div style={{ padding: "0 28px 28px", fontSize: 16, lineHeight: 1.6, color: "var(--fg-muted)", borderTop: "1px solid var(--line)", paddingTop: 20 }}>{it.a}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Big CTA =====
function AffBigCTA() {
  useRevealOnScroll();
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes affcta-drift { from { background-position: 0 0; } to { background-position: 60px 60px; } }
        @keyframes affcta-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes affcta-rain { 0% { transform: translateY(-40px) rotate(-4deg); opacity: 0; } 15% { opacity: 0.32; } 85% { opacity: 0.32; } 100% { transform: translateY(560px) rotate(-4deg); opacity: 0; } }
        .affcta-hero { position: relative; padding: 96px 60px; text-align: center; overflow: hidden; border-radius: 32px;
          background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(252,213,53,0.22) 0%, transparent 60%), radial-gradient(ellipse 90% 70% at 50% 110%, rgba(252,213,53,0.12) 0%, transparent 55%), linear-gradient(180deg, #1a1812 0%, #0d0c0a 55%, #0a0908 100%);
          border: 1px solid rgba(252,213,53,0.22);
          box-shadow: 0 50px 120px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(252,213,53,0.08) inset, 0 80px 140px -60px rgba(252,213,53,0.25); }
        .affcta-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(252,213,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(252,213,53,0.06) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 75%); -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 75%); animation: affcta-drift 40s linear infinite; pointer-events: none; }
        .affcta-rings { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 820px; height: 820px; pointer-events: none; opacity: 0.5; }
        .affcta-rings circle { fill: none; stroke: rgba(252,213,53,0.22); stroke-width: 1; }
        .affcta-rings .o { stroke-dasharray: 4 12; animation: affcta-spin 120s linear infinite; transform-origin: center; }
        .affcta-rings .m { stroke-dasharray: 2 10; animation: affcta-spin 80s linear infinite reverse; transform-origin: center; }
        .affcta-rings .i { stroke-dasharray: 8 6; animation: affcta-spin 60s linear infinite; transform-origin: center; }
        .affcta-rain { position: absolute; inset: 0; pointer-events: none; overflow: hidden; opacity: 0.6; }
        .affcta-bill { position: absolute; font-family: 'Akrobat', sans-serif; font-weight: 900; color: var(--accent); font-size: 22px; letter-spacing: -0.03em; animation: affcta-rain 12s linear infinite; text-shadow: 0 0 12px rgba(252,213,53,0.4); }
        @media (max-width: 900px) { .affcta-hero { padding: 64px 24px; } .affcta-rain { display: none; } }
      `}</style>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="affcta-hero">
            <div className="affcta-grid" />
            <svg className="affcta-rings" viewBox="0 0 820 820">
              <circle className="o" cx="410" cy="410" r="400" />
              <circle className="m" cx="410" cy="410" r="320" />
              <circle className="i" cx="410" cy="410" r="240" />
              <circle className="i" cx="410" cy="410" r="160" strokeOpacity="0.15" />
            </svg>
            <div className="affcta-rain" aria-hidden="true">
              {[{l:"8%",d:"0s",c:"80%"},{l:"18%",d:"3s",c:"USDT"},{l:"28%",d:"1.2s",c:"💵"},{l:"72%",d:"2.1s",c:"$642"},{l:"82%",d:"4.2s",c:"80%"},{l:"92%",d:"0.6s",c:"💵"}].map((b, i) => (
                <span key={i} className="affcta-bill" style={{ left: b.l, top: "-40px", animationDelay: b.d }}>{b.c}</span>
              ))}
            </div>
            <div style={{ position: "relative", zIndex: 2 }}>
              <span className="eyebrow" style={{ justifyContent: "center", color: "var(--accent)" }}>
                <span className="dot" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
                READY?
              </span>
              <h2 className="h1" style={{ margin: "24px auto 24px", maxWidth: 920, fontSize: "clamp(44px, 5.5vw, 76px)" }}>
                Turn your audience into<br /><span style={{ color: "var(--accent)" }}>lifetime income.</span>
              </h2>
              <p style={{ fontSize: 19, color: "var(--fg-muted)", maxWidth: 640, margin: "0 auto 40px" }}>
                Up to 80% revenue share. Weekly USDT payouts. Lifetime accruals. 154 countries. Get your affiliate link in minutes.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href={AFF_SIGNUP_B} target="_blank" rel="noopener" className="btn btn-primary btn-lg">Start earning</a>
                <a href="#tiers" className="btn btn-ghost btn-lg">See the tiers</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== Personal manager — meet Tati, Head of Affiliates =====
function PersonalManager() {
  useRevealOnScroll();
  const bullets = [
    "Personal onboarding — you're live within a day",
    "Ready-made creatives, banners & landing copy",
    "Payout, tier & tracking questions answered fast",
    "Custom deals for high-volume partners",
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div className="glow" style={{ width: 520, height: 520, background: "var(--accent)", left: "-12%", top: "14%", opacity: .06 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div data-mobile-image-first style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
          <Reveal>
            <div style={{ position: "relative", width: "100%", maxWidth: 600, margin: "0 auto" }}>
              <style>{`
                @keyframes pm-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
                @keyframes pm-zoom { 0%,100% { transform: scale(1); } 50% { transform: scale(1.07); } }
                @keyframes pm-shine { 0% { transform: translateX(-160%) skewX(-18deg); } 100% { transform: translateX(280%) skewX(-18deg); } }
                .pm-photo { animation: pm-float 7s ease-in-out infinite; }
                .pm-img { animation: pm-zoom 16s ease-in-out infinite; transform-origin: 58% 42%; }
                .pm-shine { position: absolute; top: 0; bottom: 0; left: 0; width: 42%; z-index: 2; pointer-events: none; background: linear-gradient(105deg, transparent, rgba(255,255,255,0.18), transparent); transform: translateX(-160%) skewX(-18deg); animation: pm-shine 7s ease-in-out infinite; animation-delay: 1.5s; }
                @media (prefers-reduced-motion: reduce) { .pm-photo, .pm-img, .pm-shine { animation: none !important; } }
              `}</style>
              <div style={{ position: "absolute", inset: "7%", borderRadius: 30, background: "rgba(252,213,53,0.16)", filter: "blur(54px)", zIndex: 0, pointerEvents: "none" }} />
              <div className="pm-photo" style={{ position: "relative", zIndex: 1, borderRadius: 26, overflow: "hidden", border: "1px solid var(--line-strong)", boxShadow: "0 60px 140px -30px rgba(0,0,0,0.85)" }}>
                <img className="pm-img" src="img/tati.jpg" alt="Tati — Head of Affiliates at HashHedge" style={{ width: "100%", display: "block", aspectRatio: "1 / 1", objectFit: "cover" }} />
                <div className="pm-shine" />
                <div style={{ position: "absolute", left: 18, right: 18, bottom: 18, zIndex: 3, padding: "15px 20px", borderRadius: 16, background: "rgba(10,9,12,0.62)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 21, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.01em" }}>Tati</div>
                    <div style={{ fontSize: 13, color: "var(--fg-dim)" }}>Head of Affiliates</div>
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 700, color: "var(--green)", padding: "6px 11px", borderRadius: 999, background: "rgba(24,169,101,0.12)", border: "1px solid rgba(24,169,101,0.3)" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)", animation: "pulse 1.8s ease-in-out infinite" }} />
                    online
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />YOUR PERSONAL MANAGER</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 20px" }}>Meet Tati — your<br /><span style={{ color: "var(--accent)" }}>dedicated affiliate manager.</span></h2></Reveal>
            <Reveal delay="2"><p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-muted)", margin: "0 0 28px", maxWidth: 520 }}>From day one you get a real human on your side — not a ticket queue. Tati and her team help you launch, optimise and scale your traffic, and they're one message away whenever you need them.</p></Reveal>
            <Reveal delay="3">
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", fontSize: 15, color: "var(--fg)", borderTop: "1px solid var(--line)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10" fill="var(--accent)" opacity="0.15" />
                      <path d="M8 12l3 3 5-6" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay="4">
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://t.me/hashhedge_affiliates" target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                  Message Tati on Telegram
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="mailto:affiliates@hashhedge.com" className="btn btn-ghost btn-lg">affiliates@hashhedge.com</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { StartEarning, CommissionLadder, PartnerProof, PersonalManager, AffFAQ, AffBigCTA });
