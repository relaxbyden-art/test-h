// HashHedge Affiliate — Hero (centered + people photos), live panel, dashboard, terms, why, events
const { useEffect: _aE, useRef: _aR, useState: _aS } = React;

const AFF_SIGNUP = "https://partner.hashhedge.com/auth/signup/";
const AFF_PORTAL = "https://partner.hashhedge.com/";

// ===== Reusable user-fillable photo slot with a visible "drop here" hint behind it =====
function PhotoSlot({ id, label = "Drop a photo", caption, radius = 14, style = {} }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: radius, ...style }}>
      {/* hint sits BEHIND the slot; the empty slot frame is near-transparent so it shows through, a filled image covers it */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 0, borderRadius: radius,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, textAlign: "center", padding: 14,
        border: "1px dashed rgba(252,213,53,0.28)", background: "rgba(255,255,255,0.02)", color: "var(--fg-dim)",
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.6" style={{ opacity: 0.65 }}>
          <rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="10" r="2" /><path d="M3 17l5-4 4 3 3.5-2.5L21 18" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 600 }}>{label}</span>
      </div>
      <image-slot id={id} shape="rect" fit="cover" placeholder={label}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, display: "block" }}></image-slot>
      {caption && (
        <div aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 2, pointerEvents: "none",
          padding: "26px 16px 13px", background: "linear-gradient(0deg, rgba(8,8,11,0.9) 0%, rgba(8,8,11,0.0) 100%)" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{caption}</span>
        </div>
      )}
    </div>
  );
}

// ===== Live partner dashboard panel =====
function PartnerPanel() {
  const [tick, setTick] = _aS(0);
  _aE(() => {
    const i = setInterval(() => setTick(t => t + 1), 1700);
    return () => clearInterval(i);
  }, []);
  const jitter = (base, pct) => base * (1 + Math.sin(tick * 0.6 + base) * pct);

  const weekTotal = jitter(11_240, 0.04);
  const allTime = jitter(486_300, 0.0008);
  const active = Math.round(jitter(214, 0.01));
  const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");
  const spark = [0.36, 0.42, 0.40, 0.52, 0.58, 0.62, 0.74, 0.86].map((v, i) => Math.min(0.96, v + Math.sin(tick * 0.1 + i) * 0.02));
  const refs = [
    { h: "trader_8842", flag: "🇩🇪", size: "$100K", amt: jitter(642, 0.06) },
    { h: "kg_funded",   flag: "🇦🇪", size: "$50K",  amt: jitter(318, 0.06) },
    { h: "btc_maxi_07", flag: "🇧🇷", size: "$25K",  amt: jitter(204, 0.07) },
    { h: "vlad.eth",    flag: "🇰🇿", size: "$100K", amt: jitter(551, 0.06) },
  ];

  return (
    <div style={{
      background: "linear-gradient(180deg, rgba(31,29,37,0.95), rgba(21,19,26,0.95))",
      border: "1px solid var(--line)", borderRadius: 20, overflow: "hidden", backdropFilter: "blur(12px)",
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)",
      transition: "transform .35s var(--ease-out), box-shadow .35s var(--ease-out)",
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px) scale(1.015)"; e.currentTarget.style.boxShadow = "0 60px 120px -20px rgba(0,0,0,0.7), 0 0 120px rgba(252,213,53,0.12)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 80px rgba(252,213,53,0.05)"; }}
    >
      <div style={{ padding: "16px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 12px var(--green)", animation: "pulse 1.8s ease-in-out infinite" }} />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg)" }}>Partner dashboard</span>
        </div>
        <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>updated live</span>
      </div>

      <div style={{ padding: "24px 22px 18px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-dim)", marginBottom: 8 }}>Paid to you · this week</div>
            <div className="mono" style={{ fontSize: 44, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(weekTotal)}</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, flexShrink: 0, fontSize: 12, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.04em", padding: "7px 12px", borderRadius: 999, background: "rgba(252,213,53,0.12)", border: "1px solid rgba(252,213,53,0.3)" }}>
            <svg width="11" height="11" viewBox="0 0 24 22.4" fill="currentColor"><path d="M11.983 18.574 3.766 10.512 8.027 6.386v5.895l2.577 2.358V0L0 10.512 12.009 22.4 24 10.512 13.396 0v14.639l2.577-2.358V6.386l4.261 4.126z" fillRule="evenodd"/></svg>
            LEVEL 5 · 70%
          </span>
        </div>
        <svg viewBox="0 0 320 64" width="100%" height="64" style={{ marginTop: 16, overflow: "visible", display: "block" }}>
          <defs>
            <linearGradient id="pp-spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {(() => {
            const pts = spark.map((v, j) => [j * (320 / (spark.length - 1)), 60 - v * 52]);
            const d = pts.map((p, j) => `${j === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
            return (
              <>
                <path d={`${d} L320,64 L0,64 Z`} fill="url(#pp-spark)" />
                <path d={d} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="3.2" fill="var(--accent)" />
                <circle cx={pts[pts.length-1][0]} cy={pts[pts.length-1][1]} r="6" fill="var(--accent)" opacity="0.25">
                  <animate attributeName="r" values="3.5;8;3.5" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="1.8s" repeatCount="indefinite" />
                </circle>
              </>
            );
          })()}
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11, color: "var(--fg-low)" }}>
          <span>8 weeks ago</span><span>this week</span>
        </div>
      </div>

      <div style={{ padding: "6px 0" }}>
        <div style={{ padding: "12px 22px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-dim)" }}>Your active traders</span>
          <span style={{ fontSize: 12, color: "var(--fg-muted)" }}><b className="mono" style={{ color: "var(--fg)" }}>{active}</b> active</span>
        </div>
        {refs.map((r) => (
          <div key={r.h} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 22px", borderTop: "1px solid var(--line)" }}>
            <span style={{ fontSize: 16, width: 22, textAlign: "center" }}>{r.flag}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--fg)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>@{r.h}</div>
              <div style={{ fontSize: 11, color: "var(--fg-low)" }}>{r.size} funded · active</div>
            </div>
            <span className="mono" style={{ fontSize: 14, fontWeight: 800, color: "var(--green)" }}>+{fmt(r.amt)}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "14px 22px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.015)" }}>
        <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>Paid every Monday · USDT</span>
        <span className="mono" style={{ fontSize: 12, color: "var(--fg-dim)" }}>lifetime {fmt(allTime)}</span>
      </div>
    </div>
  );
}

// ===== Shared animation CSS (mounted once via hero) =====
function AffStyles() {
  return (
    <style>{`
      @keyframes aff-spin { to { transform: rotate(360deg); } }
      @keyframes aff-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
      @keyframes aff-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(1.3); } }
      @keyframes aff-sheen { 0% { transform: translateX(-130%) skewX(-12deg); } 100% { transform: translateX(280%) skewX(-12deg); } }
      @keyframes aff-drift { from { background-position: 0 0; } to { background-position: 64px 64px; } }
      @keyframes aff-orbit { from { transform: rotate(0) translateX(var(--r)) rotate(0); } to { transform: rotate(360deg) translateX(var(--r)) rotate(-360deg); } }

      .aff-hero-scrim { position: absolute; inset: 0; pointer-events: none; z-index: 1;
        background: linear-gradient(180deg, rgba(10,9,12,0.74) 0%, rgba(10,9,12,0.55) 30%, rgba(10,9,12,0.72) 72%, var(--bg) 100%); }
      .aff-hero-vignette { position: absolute; inset: 0; pointer-events: none; z-index: 1;
        background: radial-gradient(ellipse 58% 66% at 50% 47%, rgba(10,9,12,0.28) 0%, rgba(10,9,12,0.72) 56%, rgba(10,9,12,0.96) 100%); }
      .aff-spark { position: absolute; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px var(--accent); animation: aff-pulse 2.6s ease-in-out infinite; pointer-events: none; z-index: 2; }

      .aff-why-grid { position: absolute; inset: 0; pointer-events: none;
        background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
        background-size: 64px 64px; opacity: .55; animation: aff-drift 60s linear infinite;
        -webkit-mask-image: radial-gradient(ellipse 82% 72% at 50% 38%, #000 8%, transparent 76%);
        mask-image: radial-gradient(ellipse 82% 72% at 50% 38%, #000 8%, transparent 76%); }

      .aff-fcard { position: relative; overflow: hidden;
        transition: border-color .3s var(--ease), transform .4s var(--ease-out), box-shadow .4s var(--ease-out); }
      .aff-fcard:hover { transform: translateY(-6px); border-color: rgba(252,213,53,0.4);
        box-shadow: 0 30px 70px -24px rgba(0,0,0,0.7), 0 0 50px rgba(252,213,53,0.1); }
      .aff-sheen { position: absolute; top: 0; bottom: 0; left: 0; width: 42%; pointer-events: none; z-index: 1;
        background: linear-gradient(105deg, transparent, rgba(252,213,53,0.10), transparent);
        transform: translateX(-130%) skewX(-12deg); }
      .aff-fcard:hover .aff-sheen { animation: aff-sheen 1.05s var(--ease) forwards; }
      .aff-fnum { position: absolute; top: 6px; right: 18px; z-index: 0; font-family: 'Akrobat', Onest, sans-serif;
        font-weight: 900; font-size: 92px; line-height: 1; letter-spacing: -0.03em; color: rgba(255,255,255,0.035); pointer-events: none; }
      .aff-ico-tile { position: relative; width: 56px; height: 56px; border-radius: 14px; flex-shrink: 0;
        background: rgba(252,213,53,0.1); border: 1px solid rgba(252,213,53,0.22);
        display: flex; align-items: center; justify-content: center; animation: aff-float 5.5s ease-in-out infinite; }
      .aff-ico-ring { position: absolute; inset: -9px; border: 1.5px dashed rgba(252,213,53,0.32); border-radius: 50%; animation: aff-spin 16s linear infinite; }

      body[data-anim="low"] .aff-ico-tile, body[data-anim="low"] .aff-ico-ring,
      body[data-anim="low"] .aff-spark, body[data-anim="low"] .aff-why-grid { animation: none !important; }
      @media (prefers-reduced-motion: reduce) {
        .aff-ico-tile, .aff-ico-ring, .aff-spark, .aff-why-grid { animation: none !important; }
      }

      .aff-hero-photo { position: absolute; inset: 0; z-index: 0; }
      .aff-hero-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 64% center; display: block; }
      .aff-hero-fade-l { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(90deg, var(--bg) 0%, rgba(16,16,18,0.9) 24%, rgba(16,16,18,0.5) 52%, rgba(16,16,18,0.28) 80%, rgba(16,16,18,0.5) 100%); }
      .aff-hero-fade-v { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(180deg, var(--bg) 0%, transparent 12%, transparent 60%, rgba(16,16,18,0.82) 86%, var(--bg) 100%); }
      @media (max-width: 900px) {
        .aff-hero-photo { opacity: 0.5; }
        .aff-hero-fade-l { background: linear-gradient(90deg, var(--bg) 0%, rgba(16,16,18,0.82) 45%, rgba(16,16,18,0.62) 100%); }
      }
    `}</style>
  );
}

// ===== Hero — FTMO-style: copy left, full-bleed trader photo melted into the bg =====
function AffHero() {
  useRevealOnScroll();
  return (
    <section style={{ position: "relative", overflow: "hidden", paddingTop: 56, paddingBottom: 48, minHeight: 620 }}>
      <AffStyles />
      <div className="aff-hero-photo" aria-hidden="true">
        <img src="img/hero-partners.png" alt="" />
        <div className="aff-hero-fade-l" />
        <div className="aff-hero-fade-v" />
      </div>
      <div className="glow" style={{ width: 560, height: 560, background: "var(--accent)", right: "4%", top: "0%", opacity: .08, zIndex: 1 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 600, minHeight: 470, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Reveal><div style={{ fontSize: 15, fontWeight: 600, color: "var(--fg-dim)", marginBottom: 22 }}>HashHedge Affiliate Programme</div></Reveal>
          <Reveal delay="1">
            <h1 className="display" style={{ margin: "0 0 22px", color: "var(--fg)", fontSize: "clamp(38px, 4.8vw, 68px)", lineHeight: 1.02 }}>
              Promote a top crypto prop firm worldwide &amp; <span style={{ color: "var(--accent)" }}>earn together</span>
            </h1>
          </Reveal>
          <Reveal delay="2">
            <p style={{ fontSize: 20, lineHeight: 1.45, color: "var(--fg-muted)", maxWidth: 480, margin: "0 0 32px" }}>
              Receive up to <span style={{ color: "var(--fg)", fontWeight: 700 }}>80% revenue share</span> for every trader you refer — paid weekly in USDT, for life.
            </p>
          </Reveal>
          <Reveal delay="3">
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a href={AFF_SIGNUP} target="_blank" rel="noopener" className="btn btn-primary btn-lg">Register now</a>
              <a href={AFF_PORTAL} target="_blank" rel="noopener" className="btn btn-ghost btn-lg">Affiliate login</a>
            </div>
          </Reveal>
          <Reveal delay="4">
            <a href="#tiers" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 24, fontSize: 16, fontWeight: 600, color: "var(--fg)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7h8M8 11h8M8 15h4"/></svg>
              <span style={{ borderBottom: "1px solid var(--line-strong)", paddingBottom: 3 }}>Calculate your earnings</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay="3">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center", justifyContent: "space-between", marginTop: 44, paddingTop: 32, borderTop: "1px solid var(--line)" }}>
            <div>
              <div style={{ fontSize: 12, color: "var(--fg-dim)", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>Partner with a trusted platform</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: "var(--fg)" }}>Excellent</span>
                <div style={{ display: "flex", gap: 2 }}>{[1,2,3,4].map(i => <TPStar key={i} size={18} />)}<TPStar size={18} half /></div>
                <a href="https://www.trustpilot.com/review/hashhedge.com" target="_blank" rel="noopener" style={{ fontSize: 13, color: "var(--fg-dim)", borderBottom: "1px solid var(--line-strong)" }}>verified on Trustpilot</a>
              </div>
            </div>
            <div style={{ flex: "1 1 520px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {[
                { v: "5,100+", l: "Funded traders worldwide" },
                { v: "$12M+", l: "Paid to traders" },
                { v: "4.4/5", l: "Trustpilot" },
                { v: "154", l: "Countries served" },
              ].map((s, i) => (
                <div key={s.l} style={{ textAlign: "center", borderLeft: i > 0 ? "1px solid var(--line)" : "none", padding: "0 8px" }}>
                  <div className="mono" style={{ fontSize: 28, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-dim)", marginTop: 8 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ===== Highest terms band (About) =====
function HighestTerms() {
  useRevealOnScroll();
  const points = [
    { v: "up to 80%", k: "of HashHedge profits", d: "Industry-topping revenue share per referred trader." },
    { v: "Weekly", k: "payments in USDT", d: "Earnings land in your wallet every Monday." },
    { v: "Lifetime", k: "accruals", d: "You earn for as long as the trader stays active." },
    { v: "Minutes", k: "to get approved", d: "Fast approval, minimal formalities, instant link." },
  ];
  return (
    <section id="about" style={{ position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />ABOUT THE PROGRAM</span></Reveal>
            <Reveal delay="1">
              <h2 className="h1" style={{ margin: "20px 0 0" }}>
                The highest affiliate<br />terms <span style={{ color: "var(--accent)" }}>in the industry.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>
              HashHedge gives crypto traders <b style={{ color: "var(--fg)" }}>$5,000 to $100,000</b> to trade risk-free. Your job is simple — bring those traders in. In return you get a cut of the revenue they generate, on the most generous terms a prop firm offers.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {points.map((p, i) => (
            <Reveal key={p.k} delay={String(i + 1)}>
              <div className="card aff-fcard" style={{ padding: 28, height: "100%" }}>
                <span className="aff-sheen" />
                <div style={{ position: "absolute", top: 0, left: 24, right: 24, height: 2, background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.5 }} />
                <div className="mono" style={{ fontSize: 32, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1, textShadow: "0 0 26px rgba(252,213,53,0.35)", position: "relative", zIndex: 2 }}>{p.v}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)", marginTop: 8, position: "relative", zIndex: 2 }}>{p.k}</div>
                <div style={{ fontSize: 14, color: "var(--fg-dim)", marginTop: 12, lineHeight: 1.5, position: "relative", zIndex: 2 }}>{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Why beneficial — themed live visuals per card (matches main-site WhyUs) =====
function ArtRevShare() {
  return (
    <div style={{ width: 188, padding: "16px 18px", borderRadius: 14, background: "rgba(20,19,24,0.72)", border: "1px solid var(--line-strong)", boxShadow: "0 18px 40px -18px rgba(0,0,0,0.6)", fontFamily: "Akrobat, Onest, sans-serif" }}>
      <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", color: "var(--fg-dim)", marginBottom: 14 }}>REVENUE SHARE</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--fg)" }}>You</span>
        <span style={{ fontSize: 26, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>80%</span>
      </div>
      <div style={{ height: 9, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden", marginBottom: 14 }}>
        <div style={{ height: "100%", width: "80%", borderRadius: 999, transformOrigin: "left", background: "linear-gradient(90deg, var(--accent), var(--accent-dark))", boxShadow: "0 0 14px rgba(252,213,53,0.55)", animation: "aff-bar 1.8s var(--ease-out)" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: "var(--fg-dim)" }}>HashHedge</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: "var(--fg-dim)" }}>20%</span>
      </div>
      <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: "20%", borderRadius: 999, transformOrigin: "left", background: "rgba(255,255,255,0.25)", animation: "aff-bar 1.8s var(--ease-out)" }} />
      </div>
    </div>
  );
}

function ArtWeeklyPay() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div style={{ position: "relative", width: 180, height: 168, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, fontFamily: "Akrobat, Onest, sans-serif" }}>
      {[{ x: "12%", d: "0s", v: "+$640" }, { x: "64%", d: "1.4s", v: "+$318" }, { x: "40%", d: "2.6s", v: "+$551" }].map((c, i) => (
        <span key={i} style={{ position: "absolute", top: "34%", left: c.x, fontSize: 12, fontWeight: 800, color: "var(--green)", animation: "aff-money-up 3.6s ease-in-out infinite", animationDelay: c.d, textShadow: "0 0 10px rgba(24,169,101,0.4)" }}>{c.v}</span>
      ))}
      <div style={{ width: 58, height: 58, borderRadius: "50%", background: "linear-gradient(135deg,#26A17B,#1a7e5c)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, boxShadow: "0 0 30px rgba(38,161,123,0.5), inset 0 2px 4px rgba(255,255,255,0.2)", animation: "aff-bob 3s ease-in-out infinite" }}>USDT</div>
      <div style={{ display: "flex", gap: 5 }}>
        {days.map((d, i) => (
          <div key={i} style={{ width: 18, height: 22, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: i === 0 ? "#13111c" : "var(--fg-dim)", background: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.05)", border: i === 0 ? "none" : "1px solid var(--line)" }}>{d}</div>
        ))}
      </div>
      <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", color: "var(--fg-dim)" }}>PAID EVERY MONDAY</div>
    </div>
  );
}

function ArtCountries() {
  const flags = ["🇺🇸", "🇩🇪", "🇧🇷", "🇦🇪", "🇮🇳", "🇯🇵"];
  return (
    <div style={{ position: "relative", width: 170, height: 150 }}>
      <div style={{ position: "absolute", inset: 18, border: "1px dashed rgba(255,255,255,0.12)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", inset: 0, border: "1px dashed rgba(252,213,53,0.16)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", fontFamily: "Akrobat, Onest, sans-serif" }}>
        <div style={{ fontSize: 34, fontWeight: 800, color: "var(--accent)", lineHeight: 1, textShadow: "0 0 20px rgba(252,213,53,0.4)" }}>154</div>
        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", color: "var(--fg-dim)", marginTop: 4 }}>COUNTRIES</div>
      </div>
      {flags.map((f, i) => (
        <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, animation: "aff-orbit-a 16s linear infinite", animationDelay: `${-(16 / flags.length) * i}s` }}>
          <div style={{ position: "absolute", top: -13, left: -13, width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, background: "rgba(16,16,18,0.9)", border: "1px solid var(--line-strong)", boxShadow: "0 4px 12px rgba(0,0,0,0.5)" }}>{f}</div>
        </div>
      ))}
    </div>
  );
}

function ArtPrizes() {
  const chips = [
    { icon: "💻", label: "MacBook Pro" },
    { icon: "💵", label: "$5,000 cash" },
    { icon: "✈️", label: "Dubai trip" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 9, fontFamily: "Onest, sans-serif", animation: "aff-float 5s ease-in-out infinite" }}>
      {chips.map((c, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(20,19,24,0.88)", border: "1px solid var(--line-strong)", boxShadow: "0 12px 28px -10px rgba(0,0,0,0.6)", whiteSpace: "nowrap" }}>
          <span style={{ fontSize: 16 }}>{c.icon}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--fg)" }}>{c.label}</span>
        </div>
      ))}
      <div style={{ marginTop: 5, fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", color: "var(--accent)", padding: "4px 10px", borderRadius: 999, background: "rgba(252,213,53,0.12)", border: "1px solid rgba(252,213,53,0.28)" }}>PRIZE DRAWS</div>
    </div>
  );
}

function ArtTransparent() {
  const items = [
    { k: "Revenue share", v: "up to 80%" },
    { k: "Payout schedule", v: "Weekly" },
    { k: "Attribution", v: "Lifetime" },
    { k: "Hidden fees", v: "None" },
    { k: "Withdrawal min.", v: "Low" },
  ];
  return (
    <div style={{ width: 196, fontFamily: "Onest, sans-serif" }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 10px", marginBottom: 2, borderRadius: 6, background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
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

function ArtSupport() {
  return (
    <div style={{ position: "relative", width: 150, height: 150 }}>
      <div style={{ position: "absolute", inset: 16, borderRadius: "50%", border: "2px solid rgba(252,213,53,0.35)", background: "radial-gradient(circle at 30% 30%, rgba(252,213,53,0.12), transparent 60%)" }} />
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: 2, height: i % 3 === 0 ? 9 : 5, background: i % 3 === 0 ? "var(--fg)" : "var(--fg-dim)", transformOrigin: "center 59px", transform: `translate(-50%,-59px) rotate(${i * 30}deg)`, borderRadius: 2 }} />
      ))}
      <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, animation: "aff-spin 180s linear infinite", transform: "rotate(40deg)" }}>
        <div style={{ position: "absolute", left: -1.5, bottom: 0, width: 3, height: 34, background: "var(--fg)", borderRadius: 3 }} />
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, animation: "aff-spin 60s linear infinite" }}>
        <div style={{ position: "absolute", left: -1, bottom: 0, width: 2, height: 44, background: "var(--accent)", borderRadius: 2, boxShadow: "0 0 6px rgba(252,213,53,0.55)" }} />
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", width: 9, height: 9, borderRadius: "50%", background: "var(--accent)", transform: "translate(-50%,-50%)", boxShadow: "0 0 10px var(--accent)" }} />
      <div style={{ position: "absolute", bottom: -2, left: "50%", transform: "translateX(-50%)", padding: "3px 10px", borderRadius: 999, background: "rgba(72,213,136,0.15)", color: "var(--green)", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", fontFamily: "Akrobat, Onest, sans-serif", display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 6px var(--green)" }} />
        24/7 · 30 LANGS
      </div>
    </div>
  );
}

function WhyBeneficial() {
  useRevealOnScroll();
  const items = [
    { n: "01", t: "Up to 80% of profits per trader", d: "You earn a percentage of the company's revenue for as long as the trader you brought in keeps trading.", art: <ArtRevShare /> },
    { n: "02", t: "Weekly payments", d: "Earnings paid to your wallet in USDT every single week — no minimum games, no delays.", art: <ArtWeeklyPay /> },
    { n: "03", t: "154 countries", d: "Work with traffic from almost anywhere in the world. Crypto-native, no banking borders.", art: <ArtCountries /> },
    { n: "04", t: "Bonuses, tech & travel", d: "Regular prize draws for top partners: Apple equipment, cash bonuses and trips.", art: <ArtPrizes /> },
    { n: "05", t: "No hidden conditions", d: "An honest model — you get exactly the percentage you earned. Transparent stats in your dashboard.", art: <ArtTransparent /> },
    { n: "06", t: "24/7 support in 30 languages", d: "Your team and your referred traders always get help, in their own language, around the clock.", art: <ArtSupport /> },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes aff-bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes aff-bob { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @keyframes aff-money-up { 0% { transform: translateY(16px); opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { transform: translateY(-26px); opacity: 0; } }
        @keyframes aff-orbit-a { from { transform: rotate(0deg) translateX(56px) rotate(0deg); } to { transform: rotate(360deg) translateX(56px) rotate(-360deg); } }
        @keyframes aff-glowpulse { 0%,100% { opacity: .35; } 50% { opacity: .75; } }
        .aff-wcard { position: relative; overflow: hidden; transition: transform .35s var(--ease-out), border-color .3s; }
        .aff-wcard:hover { transform: translateY(-4px); border-color: rgba(252,213,53,0.4); }
        .aff-wgrid { position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px); background-size: 24px 24px; -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%); mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 80%); opacity: .7; }
      `}</style>
      <div className="glow" style={{ width: 560, height: 560, background: "var(--accent)", left: "50%", top: "-10%", transform: "translateX(-50%)", opacity: .06 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <Reveal><span className="eyebrow"><span className="dot" />WHY PARTNER WITH US</span></Reveal>
          <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 16px" }}>Built to pay partners <span style={{ color: "var(--accent)" }}>more.</span></h2></Reveal>
          <Reveal delay="2"><p style={{ fontSize: 18, color: "var(--fg-muted)" }}>Six reasons HashHedge is the affiliate program crypto promoters actually stick with.</p></Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {items.map((it, i) => (
            <Reveal key={it.n} delay={String(Math.min(i, 5))}>
              <div className="card aff-wcard" style={{ padding: 0, height: "100%", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, rgba(252,213,53,0.03) 0%, var(--bg-card) 40%)" }}>
                <div style={{ position: "relative", height: 200, borderBottom: "1px solid var(--line)", overflow: "hidden", background: "radial-gradient(ellipse at 50% 110%, rgba(252,213,53,0.10) 0%, transparent 60%), linear-gradient(180deg, #141318 0%, #0b0b0e 100%)" }}>
                  <div className="aff-wgrid" />
                  <div style={{ position: "absolute", width: 200, height: 200, top: "42%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(252,213,53,0.22) 0%, transparent 65%)", animation: "aff-glowpulse 6s ease-in-out infinite", animationDelay: `${i * 0.4}s`, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{it.art}</div>
                  <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(16,16,18,0.82)", backdropFilter: "blur(8px)", color: "var(--accent)", padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", fontFamily: "Akrobat, Onest, sans-serif" }}>{it.n}</div>
                </div>
                <div style={{ padding: 24, flex: 1 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.01em", color: "var(--fg)" }}>{it.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--fg-muted)", margin: 0 }}>{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Dashboard preview (relocated live panel) =====
function DashboardPreview() {
  useRevealOnScroll();
  const bullets = [
    "Real-time clicks, signups & active traders",
    "Exact earnings and tier progress, always live",
    "Weekly USDT payouts with full history",
  ];
  return (
    <section style={{ position: "relative" }}>
      <div className="container">
        <div data-mobile-image-first style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />YOUR PARTNER DASHBOARD</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 20px" }}>Track every click<br /><span style={{ color: "var(--accent)" }}>and payout, live.</span></h2></Reveal>
            <Reveal delay="2"><p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)", marginBottom: 24 }}>The moment you sign up you get a real-time dashboard — every metric that matters, transparent down to the cent.</p></Reveal>
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
              <a href={AFF_PORTAL} target="_blank" rel="noopener" className="btn btn-ghost">Open the dashboard</a>
            </Reveal>
          </div>
          <Reveal delay="2"><PartnerPanel /></Reveal>
        </div>
      </div>
    </section>
  );
}

// ===== Community & events photo gallery =====
function EventsGallery() {
  useRevealOnScroll();
  const shots = [
    { id: "aff-ev-1", cap: "Partner summit · Dubai", cs: "span 2", rs: "span 2" },
    { id: "aff-ev-2", cap: "Crypto Expo · main stage", cs: "span 2", rs: "span 1" },
    { id: "aff-ev-3", cap: "Team offsite", cs: "span 1", rs: "span 1" },
    { id: "aff-ev-4", cap: "Awards night", cs: "span 1", rs: "span 1" },
    { id: "aff-ev-5", cap: "Community meetup", cs: "span 2", rs: "span 1" },
    { id: "aff-ev-6", cap: "Trading masterclass", cs: "span 2", rs: "span 1" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div className="glow" style={{ width: 520, height: 520, background: "var(--accent)", right: "-14%", top: "12%", opacity: .06 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 48, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />COMMUNITY &amp; EVENTS</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 0" }}>We show up —<br /><span style={{ color: "var(--accent)" }}>online and IRL.</span></h2></Reveal>
          </div>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>
              Summits, expo booths, partner trips and meetups around the world. Top affiliates get flown out, hosted and rewarded — drop your real event photos into the tiles below.
            </p>
          </Reveal>
        </div>

        <Reveal delay="2">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: 188, gap: 14 }}>
            {shots.map(s => (
              <PhotoSlot key={s.id} id={s.id} label="event photo" caption={s.cap} style={{ gridColumn: s.cs, gridRow: s.rs }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { PhotoSlot, PartnerPanel, AffHero, HighestTerms, WhyBeneficial, DashboardPreview, EventsGallery });
