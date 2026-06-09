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
  const script = [
    { side: "user",  text: "Hey, just passed Stage 2 🎉 when can I request first payout?",  time: "14:02" },
    { side: "agent", typing: true, dur: 1100 },
    { side: "agent", text: "Massive congrats 🚀 Once you go funded you can submit anytime – 80% split, USDT to your wallet within 24h.", time: "14:02" },
    { side: "user",  text: "And it's USDT to my own wallet right?", time: "14:03" },
    { side: "agent", typing: true, dur: 900 },
    { side: "agent", text: "Yep – USDT TRC-20 or ERC-20, your call. 80% split, processed within 24h once you submit.", time: "14:03" },
    { side: "user",  text: "perfect, thanks Daniel 🙌", time: "14:03" },
    { side: "agent", typing: true, dur: 700 },
    { side: "agent", text: "Anytime – and welcome to the funded crew 👊", time: "14:04" },
  ];

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
    visible.push({ ...script[i % total], _id: `${cycle}-${i}` });
  }
  const window6 = visible.slice(-6);

  return (
    <div ref={scrollRef} style={{
      display: "flex", flexDirection: "column", gap: 12,
      padding: "20px 22px",
      maxHeight: 360, overflow: "hidden",
    }}>
      {window6.map((m) => {
        if (m.typing) {
          return (
            <div key={m._id} style={{ display: "flex", justifyContent: "flex-start", animation: "support-pop .25s var(--ease-out) both" }}>
              <div style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid var(--line)",
                borderRadius: "16px 16px 16px 4px",
                padding: "10px 14px", display: "flex", gap: 4, alignItems: "center",
              }}>
                <span className="support-dot" style={{ animationDelay: "0s" }} />
                <span className="support-dot" style={{ animationDelay: ".15s" }} />
                <span className="support-dot" style={{ animationDelay: ".3s" }} />
              </div>
            </div>
          );
        }
        const isAgent = m.side === "agent";
        return (
          <div key={m._id} style={{
            display: "flex",
            justifyContent: isAgent ? "flex-start" : "flex-end",
            animation: "support-pop .35s var(--ease-out) both",
          }}>
            <div style={{
              maxWidth: "82%",
              padding: "10px 14px",
              borderRadius: isAgent ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
              background: isAgent ? "rgba(255,255,255,0.06)" : "rgba(252,213,53,0.14)",
              border: `1px solid ${isAgent ? "var(--line)" : "rgba(252,213,53,0.28)"}`,
              fontSize: 14, lineHeight: 1.5,
              color: isAgent ? "var(--fg)" : "#fff5c2",
            }}>
              <div>{m.text}</div>
              <div style={{
                fontSize: 10, color: "var(--fg-dim)", marginTop: 4,
                textAlign: isAgent ? "left" : "right", letterSpacing: "0.04em",
              }}>{m.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SupportSection() {
  useRevealOnScroll();

  const channels = [
    {
      label: "Live chat",
      sub: "Avg. response under 2 min",
      tag: "LIVE CHAT",
      href: "#",
      accent: "rgba(124, 216, 160, 0.15)",
      accentText: "var(--green)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 5.5C3 4.12 4.12 3 5.5 3h13C19.88 3 21 4.12 21 5.5v9c0 1.38-1.12 2.5-2.5 2.5H8l-5 4V5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Telegram bot",
      sub: "@hashhedgesupportbot",
      tag: "TELEGRAM",
      href: "https://t.me/hashhedgesupportbot",
      accent: "rgba(43, 156, 222, 0.15)",
      accentText: "#5BB5E8",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l16-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.13-3.05-1.99 1.93c-.23.23-.42.42-.85.42z"/></svg>
      ),
    },
    {
      label: "Email ticket",
      sub: "support@hashhedge.com",
      tag: "EMAIL",
      href: "mailto:support@hashhedge.com",
      accent: "rgba(252, 213, 53, 0.15)",
      accentText: "var(--accent)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{ padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* soft top wash so the Blueprint section above bleeds into bg instead of cutting */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 280,
        background: "linear-gradient(180deg, #0a0a0e 0%, rgba(13,13,16,0.55) 35%, transparent 100%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="glow" style={{ width: 800, height: 800, background: "var(--green)", top: "10%", left: "-10%", opacity: 0.05 }} />
      <div className="glow" style={{ width: 600, height: 600, background: "var(--accent)", bottom: "-30%", right: "-10%", opacity: 0.04 }} />
      {/* soft bottom wash so accent glow bleeds into FAQ section instead of cutting */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 360,
        background: "radial-gradient(ellipse 90% 100% at 70% 100%, rgba(252,213,53,0.1) 0%, rgba(252,213,53,0.04) 35%, rgba(252,213,53,0) 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <style>{`
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
      `}</style>

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
          <Reveal>
            <div>
              <span className="eyebrow">
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "var(--green)", boxShadow: "0 0 10px var(--green)",
                  animation: "pulse 1.8s ease-in-out infinite",
                  display: "inline-block", marginRight: 8,
                  verticalAlign: "middle",
                }} />
                SUPPORT 24/7 · ONLINE NOW
              </span>
              <h2 className="h1" style={{ margin: "20px 0 0", letterSpacing: "-0.025em" }}>
                Real humans.<br /><span style={{ color: "var(--accent)" }}>Online right now.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>
              No bots reading scripts. A 40-person team across 4 timezones, fluent in <strong style={{ color: "var(--fg)" }}>20+ languages</strong>, answering in under 2 minutes – every single time.
            </p>
          </Reveal>
        </div>

        {/* Hero split: agent portrait + live chat */}
        <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: 24, marginBottom: 24 }}>
          {/* LEFT – agent portrait card */}
          <Reveal>
            <div style={{
              position: "relative", borderRadius: 24, overflow: "hidden",
              border: "1px solid var(--line)",
              background: "var(--card)",
              minHeight: 540,
            }}>
              <img src="assets/support-agent.png" alt="Daniel – Senior Support Lead" style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%", objectFit: "cover",
                objectPosition: "center 30%",
              }} />
              {/* darken bottom for text legibility */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.92) 100%)",
                pointerEvents: "none",
              }} />

              {/* Top-left ONLINE pill */}
              <div style={{
                position: "absolute", top: 20, left: 20,
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 14px", borderRadius: 999,
                background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(124,216,160,0.4)",
                fontSize: 11, fontWeight: 800, color: "#9be0b6",
                letterSpacing: "0.14em", textTransform: "uppercase",
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%", background: "var(--green)",
                  animation: "support-status-pulse 1.8s ease-out infinite",
                }} />
                Online · Replying now
              </div>

              {/* Top-right response-time KPI */}
              <div style={{
                position: "absolute", top: 20, right: 20,
                padding: "10px 14px", borderRadius: 12,
                background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                textAlign: "right",
              }}>
                <div style={{ fontFamily: "Akrobat, Onest, sans-serif", fontSize: 22, fontWeight: 800, color: "var(--accent)", letterSpacing: "-0.02em", lineHeight: 1 }}>1m 47s</div>
                <div style={{ fontSize: 10, color: "var(--fg-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>avg today</div>
              </div>

              {/* Bottom name + role */}
              <div style={{ position: "absolute", left: 24, right: 24, bottom: 24 }}>
                <div style={{ fontSize: 11, color: "var(--accent)", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Senior Support Lead</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 12 }}>Daniel K.</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["EN", "ES", "PT", "RU"].map(lng => (
                    <span key={lng} style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
                      padding: "4px 9px", borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "#fff",
                    }}>{lng}</span>
                  ))}
                  <span style={{
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.1em",
                    padding: "4px 9px", borderRadius: 999,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px dashed rgba(255,255,255,0.18)",
                    color: "var(--fg-muted)",
                  }}>+ 18 teammates online</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT – live chat frame */}
          <Reveal delay="2">
            <div style={{
              position: "relative",
              borderRadius: 24, overflow: "hidden",
              border: "1px solid var(--line)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), var(--card)",
              minHeight: 540, display: "flex", flexDirection: "column",
            }}>
              {/* Chat header */}
              <div style={{
                padding: "18px 22px",
                borderBottom: "1px solid var(--line)",
                display: "flex", alignItems: "center", gap: 12,
                background: "rgba(0,0,0,0.2)",
              }}>
                <div style={{ position: "relative", width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "1px solid var(--line)" }}>
                  <img src="assets/support-agent.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)", display: "flex", alignItems: "center", gap: 8 }}>
                    Daniel K.
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 6px var(--green)" }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--green)", letterSpacing: "0.04em" }}>online</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--fg-dim)" }}>Senior Support · typically replies in 1m</div>
                </div>
                <div style={{
                  fontSize: 9, fontWeight: 800, color: "var(--fg-muted)", letterSpacing: "0.16em",
                  padding: "4px 9px", borderRadius: 6,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--line)",
                }}>LIVE</div>
              </div>

              {/* Chat body – animates */}
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                <SupportLiveChat />
                {/* fade top so the rolling window doesn't snap */}
                <div aria-hidden style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 60,
                  background: "linear-gradient(180deg, var(--card) 0%, transparent 100%)",
                  pointerEvents: "none",
                }} />
              </div>

              {/* Chat input (decorative) */}
              <div style={{
                padding: "14px 18px",
                borderTop: "1px solid var(--line)",
                display: "flex", alignItems: "center", gap: 10,
                background: "rgba(0,0,0,0.2)",
              }}>
                <div style={{
                  flex: 1, padding: "10px 14px", borderRadius: 999,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--line)",
                  fontSize: 13, color: "var(--fg-dim)",
                }}>
                  Type a message…
                </div>
                <button type="button" style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "var(--accent)", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#0b0b0e",
                }} aria-label="Send">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l18-8-8 18-2-7-8-3z"/></svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Channel rail – three compact cards + languages strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr) auto", gap: 16, alignItems: "stretch" }}>
          {channels.map((c, i) => (
            <Reveal key={i} delay={String(i + 1)}>
              <a href={c.href} target={c.href.startsWith("http") || c.href.startsWith("mailto") ? "_blank" : undefined} rel="noopener" style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "16px 18px",
                borderRadius: 14,
                background: "var(--card)",
                border: "1px solid var(--line)",
                textDecoration: "none",
                position: "relative", overflow: "hidden",
                transition: "border-color .25s, transform .25s, background .25s",
                height: "100%",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.accentText;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.background = "var(--card)";
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: c.accent, color: c.accentText,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{c.icon}</div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.16em", color: c.accentText, textTransform: "uppercase", marginBottom: 4 }}>{c.tag}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.005em", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.label}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.sub}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: c.accentText, flexShrink: 0 }}>
                  <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          ))}

          {/* Languages tile */}
          <Reveal delay="4">
            <div style={{
              padding: "14px 20px", borderRadius: 14,
              background: "rgba(252,213,53,0.05)",
              border: "1px solid rgba(252,213,53,0.2)",
              display: "flex", alignItems: "center", gap: 14,
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}>
              <div style={{
                fontSize: 32, fontWeight: 800, color: "var(--accent)",
                fontFamily: "Akrobat, Onest, sans-serif", letterSpacing: "-0.03em", lineHeight: 1,
              }}>20+</div>
              <div style={{ minWidth: 0, overflow: "hidden", flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--fg)", marginBottom: 2 }}>Languages</div>
                <div style={{
                  fontSize: 13, color: "var(--fg)", letterSpacing: "0.01em",
                  fontFamily: "Akrobat, Onest, sans-serif", fontWeight: 700,
                  height: 16, position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    animation: "lang-cycle 16s steps(8) infinite",
                    display: "flex", flexDirection: "column",
                  }}>
                    {["Hello", "Привет", "Hola", "Olá", "Hallo", "Bonjour", "你好", "مرحبا"].map((w, i) => (
                      <div key={i} style={{ height: 16, lineHeight: "16px", color: "var(--accent)" }}>{w}</div>
                    ))}
                    <div style={{ height: 16, lineHeight: "16px", color: "var(--accent)" }}>Hello</div>
                  </div>
                </div>
              </div>
              <style>{`
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
              `}</style>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// 2. BLUEPRINT
// =====================================================================
function BlueprintSection() {
  useRevealOnScroll();

  const sections = [
    { n: "01", t: "Create your account",          d: "Sign up and verify in under 2 minutes." },
    { n: "02", t: "Choose a Challenge size",      d: "$5K to $200K. Pay in USDT, USDC, BTC or ETH." },
    { n: "03", t: "Pass Stage 1 – 8% target",     d: "5% daily / 10% max DD. Unlimited time." },
    { n: "04", t: "Pass Stage 2 – 6% target",     d: "Same rules, softer target, locked seat." },
    { n: "05", t: "Funded account setup",         d: "Live capital wired to your dashboard." },
    { n: "06", t: "Your first payout",            d: "80% split, USDT to your wallet, 72h or 3×." },
  ];

  return (
    <section id="blueprint" data-mobile-image-first style={{ padding: "120px 0", background: "linear-gradient(180deg, #0a0a0e 0%, #13110a 50%, #0a0a0e 100%)", position: "relative", overflow: "hidden" }}>
      <div className="glow" style={{ width: 700, height: 700, background: "var(--accent)", top: "10%", right: "-15%", opacity: 0.07 }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
          {/* LEFT – copy + CTA */}
          <Reveal>
            <div>
              <span className="eyebrow">USER GUIDE</span>
              <h2 className="h1" style={{ margin: "20px 0 24px", letterSpacing: "-0.025em" }}>
                Blueprint:<br /><span style={{ color: "var(--accent)" }}>How to start</span>
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-muted)", marginBottom: 32, maxWidth: 460 }}>
                Learn from scratch how to go from registration to getting funded. A complete step-by-step user guide – no prior knowledge required.
              </p>

              {/* meta strip */}
              <div style={{ display: "flex", gap: 32, marginBottom: 36, paddingBottom: 32, borderBottom: "1px solid var(--line)" }}>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "var(--fg)", fontFamily: "Akrobat, sans-serif", letterSpacing: "-0.02em", lineHeight: 1 }}>6</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>chapters</div>
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "var(--fg)", fontFamily: "Akrobat, sans-serif", letterSpacing: "-0.02em", lineHeight: 1 }}>~15 min</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>read time</div>
                </div>
                <div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "var(--accent)", fontFamily: "Akrobat, sans-serif", letterSpacing: "-0.02em", lineHeight: 1 }}>Free</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>always</div>
                </div>
              </div>

              <a href="https://hashhedge.gitbook.io/hashhedge-user-guide" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open('https://hashhedge.gitbook.io/hashhedge-user-guide', '_blank', 'noopener,noreferrer'); }} className="btn btn-primary" style={{ gap: 8 }}>
                Explore the Blueprint
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* RIGHT – book / TOC mockup */}
          <Reveal delay="2">
            <div style={{
              position: "relative",
              borderRadius: 18, overflow: "hidden",
              background: "linear-gradient(180deg, #1a1610 0%, #0f0d09 100%)",
              border: "1px solid rgba(252,213,53,0.2)",
              padding: 36,
              boxShadow: "0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}>
              {/* fake browser header */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid var(--line)" }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e" }} />
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f" }} />
                </div>
                <div style={{ flex: 1, padding: "5px 12px", borderRadius: 6, background: "rgba(255,255,255,0.04)", fontSize: 11, color: "var(--fg-dim)", fontFamily: "ui-monospace, monospace", letterSpacing: 0 }}>
                  hashhedge.gitbook.io/hashhedge-user-guide
                </div>
              </div>

              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", color: "var(--fg-dim)", marginBottom: 20, textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>Table of contents</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--green)", letterSpacing: "0.1em" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 8px var(--green)", animation: "pulse 1.4s ease-in-out infinite" }} />
                  READING
                </span>
              </div>

              <BlueprintTOC sections={sections} />

              {/* progress hint */}
              <div style={{
                marginTop: 20, paddingTop: 20, borderTop: "1px solid var(--line)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                fontSize: 12, color: "var(--fg-dim)",
              }}>
                <span>Last updated · 2 days ago</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// Blueprint TOC – animated table of contents
// =====================================================================
function BlueprintTOC({ sections }) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const containerRef = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  // observe when TOC enters viewport – only then start cycling
  React.useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // cycle the active "reading" indicator through the chapters
  React.useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setActiveIdx(i => (i + 1) % sections.length);
    }, 1800);
    return () => clearInterval(id);
  }, [inView, sections.length]);

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", gap: 4, position: "relative" }}>
      {/* sliding active highlight */}
      <div style={{
        position: "absolute",
        left: -16, right: -16,
        top: `calc(${activeIdx} * 64px)`,
        height: 64,
        background: "linear-gradient(90deg, rgba(252,213,53,0.12) 0%, rgba(252,213,53,0) 100%)",
        borderLeft: "2px solid var(--accent)",
        borderRadius: "0 8px 8px 0",
        transition: "top .6s cubic-bezier(.65,0,.35,1)",
        pointerEvents: "none",
        opacity: inView ? 1 : 0,
      }} />

      {sections.map((s, i) => {
        const isActive = i === activeIdx;
        const isRead = i < activeIdx;
        return (
          <div
            key={s.n}
            className="bp-toc-row"
            style={{
              display: "grid", gridTemplateColumns: "44px 1fr 24px",
              padding: "16px 0", gap: 16,
              borderTop: i === 0 ? "none" : "1px solid var(--line)",
              alignItems: "center",
              position: "relative", zIndex: 1,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-12px)",
              transition: `opacity .5s ease ${i * 0.08}s, transform .5s ease ${i * 0.08}s, filter .3s`,
              filter: isActive ? "none" : isRead ? "none" : "none",
            }}
          >
            <div style={{
              fontSize: 18, fontWeight: 800,
              color: isActive ? "var(--accent)" : isRead ? "var(--fg)" : "var(--fg-dim)",
              fontFamily: "Akrobat, sans-serif", letterSpacing: "-0.02em",
              fontVariantNumeric: "tabular-nums",
              transition: "color .4s",
            }}>{s.n}</div>
            <div>
              <div style={{
                fontSize: 14, fontWeight: 700,
                color: isActive ? "var(--accent)" : "var(--fg)",
                letterSpacing: "-0.005em", marginBottom: 2,
                transition: "color .4s",
              }}>{s.t}</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}>{s.d}</div>
            </div>
            {/* check / arrow indicator */}
            <div style={{
              width: 18, height: 18, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: isRead ? "var(--green)" : isActive ? "var(--accent)" : "transparent",
              border: isRead || isActive ? "none" : "1px solid var(--line-strong)",
              transition: "background .4s, border-color .4s, transform .4s",
              transform: isActive ? "scale(1.15)" : "scale(1)",
              boxShadow: isActive ? "0 0 0 4px rgba(252,213,53,0.18)" : "none",
            }}>
              {isRead && (
                <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                  <path d="M2 4.5l1.8 1.8L7 3" stroke="#0a0a0e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {isActive && (
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#0a0a0e",
                  animation: "pulse 1.2s ease-in-out infinite",
                }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// =====================================================================
// 3. YOUTUBE
// =====================================================================
function YouTubeSection() {
  useRevealOnScroll();

  // 64 real partner / creator videos covering HashHedge.
  // id is a real YouTube video id – thumbnails are pulled from i.ytimg.com.
  // Click any card → opens the actual video on YouTube.
  const ALL_VIDEOS = [
    { id: "PUAyUaSommg" }, { id: "IlSjDtqwwuA" }, { id: "PpA50UZYusw" }, { id: "v70Cj06fueA" },
    { id: "oz_72s2S5Xc" }, { id: "xJ4yA5MDMDU" }, { id: "lnsWjuJuguE" }, { id: "kPmP5Ji4Xng" },
    { id: "F36puZDsFuE" }, { id: "-ZihqFcefdA" }, { id: "lwLIXy7ZHq0" }, { id: "VSO-_pM21oA" },
    { id: "zxV-XOMhooI" }, { id: "wRlMk-PT348" }, { id: "LqZ0fhW14EQ" },
    { id: "tGTJicxkmX4" }, { id: "gyfffpZMwxs" }, { id: "eZhmDcbOe4M" }, { id: "T-sf1SkWnaA" },
    { id: "z8XAuu4dWyM" }, { id: "ckR286dTBxg" }, { id: "FjlRrl2NElY" }, { id: "1HQC_wt8RU8" },
    { id: "nYVVRHtjuXI" }, { id: "-UEdwyls2Hc" }, { id: "4loUD4EwNe8" }, { id: "TGzl8Q89x3s" },
    { id: "-ceI6pUOsaA" }, { id: "4d05kGh3KK4" }, { id: "5uJ-HCD46FY" }, { id: "JXPEQGjABVs" },
    { id: "mKZyoNC-F5c" }, { id: "mKZeBPvHeP4" }, { id: "5mfUTnLbuVk" }, { id: "KSWizMMu3YY" },
    { id: "3DpzzBP54zY" }, { id: "PzdoTu10uPg" }, { id: "KDMVxITWrL0" }, { id: "ozD6Rdbt9wU" },
    { id: "RFUnaNrXYn0" }, 
    { id: "btuv0QQsxgY" }, { id: "TuTd5RAGyio" }, { id: "inntkE6LMfg" }, { id: "W3SniAWCQ9M" },
    { id: "4sf5NTBfW1M" }, { id: "KDIAMNk6ghg" }, { id: "NEUsMRBQs6M" },
    { id: "McucviiuzZc" }, { id: "vU-OqC7RE8E" }, { id: "mr91nfQAri0" }, { id: "vmx9WPkZUnY" },
    { id: "n2vvCFN3-3c" }, { id: "HqpF_Potwlo" }, { id: "GPzjRobgRjU" }, { id: "lCe2OhM9qJ4" },
    { id: "KYLHP1gUfag" }, { id: "_qgclsoMyB0" }, { id: "Jmi9QE2F8KE" }, { id: "TJAIxICBJc8" },
    { id: "lp_BJE4Lut4" },
  ];

  const featured = ALL_VIDEOS[0];
  const big      = [ALL_VIDEOS[1], ALL_VIDEOS[2]];
  // Pin two videos to the front of the rail and one to the middle.
  const PIN_TO_FRONT  = ["lwLIXy7ZHq0", "zxV-XOMhooI"];
  const PIN_TO_MIDDLE = ["lnsWjuJuguE"];
  const PINNED = new Set([...PIN_TO_FRONT, ...PIN_TO_MIDDLE]);
  const rest = ALL_VIDEOS.slice(3).filter(v => !PINNED.has(v.id));
  const pinnedFront = PIN_TO_FRONT.map(id => ({ id }));
  const pinnedMid = PIN_TO_MIDDLE.map(id => ({ id }));
  const midIdx = Math.floor(rest.length / 2);
  const rail = [...pinnedFront, ...rest.slice(0, midIdx), ...pinnedMid, ...rest.slice(midIdx)];

  return (
    <section style={{ padding: "120px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="glow" style={{ width: 700, height: 700, background: "#ff0000", bottom: "-25%", left: "-10%", opacity: 0.04 }} />
      {/* soft bottom wash so we don't hard-cut into the next section */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 320,
        background: "linear-gradient(0deg, rgba(252,213,53,0.025) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
          <Reveal>
            <div>
              <span className="eyebrow">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="#FF0000" style={{ verticalAlign: "middle", marginRight: 10 }}>
                  <path d="M21.6 2.5a2.7 2.7 0 0 0-1.9-1.9C18 0 11 0 11 0S4 0 2.3.6A2.7 2.7 0 0 0 .4 2.5C0 4.2 0 8 0 8s0 3.8.4 5.5a2.7 2.7 0 0 0 1.9 1.9C4 16 11 16 11 16s7 0 8.7-.6a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-5.5.4-5.5s0-3.8-.4-5.5z" />
                  <path d="M8.8 11.4l5.8-3.4-5.8-3.4v6.8z" fill="#fff" />
                </svg>
                CREATOR REVIEWS
              </span>
              <h2 className="h1" style={{ margin: "20px 0 0", letterSpacing: "-0.025em" }}>
                Don't take our word.<br /><span style={{ color: "var(--accent)" }}>Hear it from traders.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay="2">
            <div>
              <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--fg-muted)", marginBottom: 24 }}>
                <strong style={{ color: "var(--fg)" }}>64 honest reviews</strong> from independent crypto creators – playthroughs, payout proofs, and platform deep-dives. No sponsorships hidden, no scripts.
              </p>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "var(--fg)", fontFamily: "Akrobat, sans-serif", letterSpacing: "-0.02em", lineHeight: 1 }}>64</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>video reviews</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Featured + 2 big – asymmetric grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 24, marginBottom: 24 }}>
          <Reveal delay="1" style={{ display: "flex", height: "100%" }}>
            <YouTubeFeatured video={featured} />
          </Reveal>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 24 }}>
            {big.map((v, i) => (
              <Reveal key={i} delay={String(i + 2)} style={{ display: "flex", height: "100%" }}>
                <YouTubeThumb video={v} variant="medium" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Horizontal rail of more reviews – implies many videos */}
        <Reveal delay="2">
          <div style={{ marginTop: 40 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", color: "var(--fg-dim)", textTransform: "uppercase" }}>
                {rail.length} more reviews · scroll →
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="rail-nav" data-dir="-1" style={railBtnStyle}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="rail-nav" data-dir="1" style={railBtnStyle}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
            <YouTubeRail items={rail} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const railBtnStyle = {
  width: 36, height: 36, borderRadius: "50%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid var(--line)",
  color: "var(--fg)",
  display: "inline-flex", alignItems: "center", justifyContent: "center",
  cursor: "pointer", transition: "background .25s, border-color .25s",
};

function YouTubeRail({ items }) {
  const railRef = React.useRef(null);

  React.useEffect(() => {
    const handleClick = (e) => {
      const btn = e.target.closest('.rail-nav');
      if (!btn) return;
      const dir = parseInt(btn.dataset.dir, 10);
      if (railRef.current) {
        railRef.current.scrollBy({ left: dir * 480, behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div ref={railRef} style={{
      display: "flex", gap: 16,
      overflowX: "auto", overflowY: "hidden",
      scrollSnapType: "x mandatory",
      paddingBottom: 12,
      margin: "0 -24px", padding: "0 24px 12px",
      scrollbarWidth: "thin",
      scrollbarColor: "var(--line-strong) transparent",
    }}>
      {items.map((v, i) => (
        <div key={i} style={{
          flex: "0 0 300px",
          scrollSnapAlign: "start",
        }}>
          <YouTubeThumb video={v} variant="rail" />
        </div>
      ))}
    </div>
  );
}

function YouTubeFeatured({ video }) {
  const href = `https://www.youtube.com/watch?v=${video.id}`;
  const thumb = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;
  const fallback = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const onOpen = (e) => { e.preventDefault(); window.open(href, '_blank', 'noopener,noreferrer'); };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onOpen} data-yt-featured style={{
      position: "relative", display: "block",
      borderRadius: 22, overflow: "hidden",
      width: "100%", height: "100%",
      aspectRatio: "16 / 11",
      textDecoration: "none",
      border: "1px solid var(--line-strong)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
      background: "#0a0a0e",
    }}
    onMouseEnter={e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1.08)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1.04)";
    }}
    onMouseLeave={e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1)";
    }}>
      <img className="yt-thumb-zoom"
           src={thumb}
           onError={e => { if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback; }}
           alt="HashHedge featured review"
           style={{
             position: "absolute", inset: 0, width: "100%", height: "100%",
             objectFit: "cover", transition: "transform .6s var(--ease-out)",
           }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)" }} />

      <div className="yt-play" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 96, height: 96, borderRadius: "50%",
        background: "rgba(255,0,0,0.95)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 12px 36px rgba(0,0,0,0.6)",
        transition: "transform .3s var(--ease-out)",
      }}>
        <svg width="34" height="38" viewBox="0 0 22 24" fill="#fff">
          <path d="M2 1.5v21l18-10.5L2 1.5z" />
        </svg>
      </div>

      <div style={{ position: "absolute", left: 36, right: 36, bottom: 28, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", color: "rgba(255,255,255,0.7)", marginBottom: 8, textTransform: "uppercase" }}>
          Latest review
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", textShadow: "0 2px 12px rgba(0,0,0,0.8)", lineHeight: 1.2, marginBottom: 6, maxWidth: 720 }}>
          From $49 to $5,580 | How to change your life at 23? Crypto prop trading | Hash Hedge
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", letterSpacing: "0.01em" }}>
          Opens on YouTube
        </div>
      </div>
    </a>
  );
}

function YouTubeThumb({ video }) {
  const href = `https://www.youtube.com/watch?v=${video.id}`;
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const onOpen = (e) => { e.preventDefault(); window.open(href, '_blank', 'noopener,noreferrer'); };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onOpen} style={{
      position: "relative", display: "block",
      textDecoration: "none",
    }}
    onMouseEnter={e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1.1)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1.05)";
    }}
    onMouseLeave={e => {
      e.currentTarget.querySelector('.yt-play').style.transform = "translate(-50%, -50%) scale(1)";
      e.currentTarget.querySelector('.yt-thumb-zoom').style.transform = "scale(1)";
    }}>
      <div style={{
        position: "relative",
        borderRadius: 14, overflow: "hidden",
        aspectRatio: "16 / 9",
        border: "1px solid var(--line)",
        background: "#0a0a0e",
      }}>
        <img className="yt-thumb-zoom"
             src={thumb}
             alt="HashHedge YouTube review"
             loading="lazy"
             style={{
               position: "absolute", inset: 0, width: "100%", height: "100%",
               objectFit: "cover", transition: "transform .5s var(--ease-out)",
             }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)" }} />
        <div className="yt-play" style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 52, height: 52, borderRadius: "50%",
          background: "rgba(255,0,0,0.92)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
          transition: "transform .3s var(--ease-out)",
        }}>
          <svg width="18" height="20" viewBox="0 0 22 24" fill="#fff">
            <path d="M2 1.5v21l18-10.5L2 1.5z" />
          </svg>
        </div>
      </div>
    </a>
  );
}

// Synthetic chart art – used as a fake video poster background.
function ChartArt({ seed = 0 }) {
  // deterministic pseudo-random per seed so multiple instances differ
  const sin = (x) => Math.sin(x + seed * 0.31);
  const cos = (x) => Math.cos(x + seed * 0.17);
  return (
    <svg viewBox="0 0 600 320" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`yt-grid-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCD535" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FCD535" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* candles */}
      {Array.from({ length: 38 }).map((_, i) => {
        const x = 30 + i * 15;
        const open = 200 + sin(i * 0.4) * 50 + cos(i * 0.7) * 22;
        const close = open - 28 + sin(i * 0.9) * 32;
        const hi = Math.min(open, close) - 12 - Math.abs(sin(i)) * 12;
        const lo = Math.max(open, close) + 12 + Math.abs(cos(i)) * 12;
        const up = close < open;
        const color = up ? "#7CD8A0" : "#ff6b6b";
        const top = Math.min(open, close);
        const h = Math.abs(close - open);
        return (
          <g key={i} opacity="0.85">
            <line x1={x} y1={hi} x2={x} y2={lo} stroke={color} strokeWidth="1.2" opacity="0.6" />
            <rect x={x - 5} y={top} width="10" height={Math.max(h, 2)} fill={color} />
          </g>
        );
      })}
      <path d={`M 16 240 Q 150 ${180 + seed % 30}, 300 140 T 588 ${80 + (seed % 40)}`} stroke="#FCD535" strokeWidth="3" fill="none" opacity="0.85" />
      <path d={`M 16 240 Q 150 ${180 + seed % 30}, 300 140 T 588 ${80 + (seed % 40)} L 588 320 L 16 320 Z`} fill={`url(#yt-grid-${seed})`} />
      <text x="300" y="190" textAnchor="middle" fontSize="180" fontWeight="900" fill="#FCD535" opacity="0.05" fontFamily="Akrobat, sans-serif">₿</text>
    </svg>
  );
}

Object.assign(window, { SupportSection, BlueprintSection, YouTubeSection });
