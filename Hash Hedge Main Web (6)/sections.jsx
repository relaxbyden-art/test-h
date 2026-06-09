// Hash Hedge – Certificates, Reviews, FAQ, CTA, Footer
const { useState: ____useS } = React;

function TeamCerts() {
  useRevealOnScroll();
  const [lightbox, setLightbox] = ____useS(null);
  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = e => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox]);
  // Real payout certificates – every row uses an actual issued certificate image.
  const certs = [
    // Original 8
    { name: "Mikhail Anikeev",   amount: "3,154.96", acc: "$100,000", date: "07 Aug 2025", src: "img/cert-anikeev.png" },
    { name: "Aleksandr Popov",   amount: "7,538.92", acc: "$100,000", date: "04 Mar 2026", src: "img/cert-popov.jpg" },
    { name: "Ryan Sullivan",     amount: "2,707.16", acc: "$50,000",  date: "11 Aug 2025", src: "img/cert-sullivan.png" },
    { name: "Alex Okulov",       amount: "2,446.78", acc: "$100,000", date: "07 Sep 2025", src: "img/cert-okulov.png" },
    { name: "Amir Senenov",      amount: "1,304.68", acc: "$50,000",  date: "17 Jul 2025", src: "img/cert-senenov.png" },
    { name: "Roman Dzhepparov",  amount: "1,296.61", acc: "$5,000",   date: "22 Jun 2025", src: "img/cert-dzhepparov.png" },
    { name: "Maxim Ognev",       amount: "487.11",   acc: "$5,000",   date: "04 Sep 2025", src: "img/cert-ognev.png" },
    { name: "Leon Cherepanov",   amount: "407.12",   acc: "$5,000",   date: "07 Aug 2025", src: "img/cert-cherepanov.png" },
    // New 10 (real certificates)
    { name: "Alexey Morozov",    amount: "7,184.32", acc: "$100,000", date: "14 Feb 2026", src: "img/cert-morozov.jpeg" },
    { name: "Oskar Chmiel",      amount: "3,621.09", acc: "$25,000",  date: "13 Feb 2026", src: "img/cert-chmiel.jpeg" },
    { name: "Onur Karaca",       amount: "7,024.85", acc: "$100,000", date: "18 Feb 2026", src: "img/cert-karaca.jpeg" },
    { name: "Pavel Zaitsev",     amount: "8,927.11", acc: "$100,000", date: "17 Feb 2026", src: "img/cert-zaitsev.jpeg" },
    { name: "Alexey Machkalyan", amount: "7,928.49", acc: "$100,000", date: "05 Feb 2026", src: "img/cert-machkalyan.jpeg" },
    { name: "Rashad Aliyev",     amount: "9,224.71", acc: "$100,000", date: "04 Mar 2026", src: "img/cert-aliyev.jpeg" },
    { name: "Aleksandr Popov",   amount: "7,538.92", acc: "$100,000", date: "04 Mar 2026", src: "img/cert-popov2.jpeg" },
    { name: "Aleks Grachev",     amount: "7,318.92", acc: "$100,000", date: "10 Mar 2026", src: "img/cert-grachev.jpeg" },
    { name: "Pavel Shubin",      amount: "5,290.17", acc: "$100,000", date: "09 Mar 2026", src: "img/cert-shubin.jpeg" },
    { name: "Ilkin Jafarov",     amount: "4,157.22", acc: "$50,000",  date: "14 Mar 2026", src: "img/cert-jafarov.jpeg" },
    // Batch 3 – 14 more real certificates
    { name: "Timur Kulikov",     amount: "1,902.43", acc: "$25,000",  date: "14 Mar 2026", src: "img/cert-kulikov.jpeg" },
    { name: "Aleksandr Kaplin",  amount: "10,000.00", acc: "$100,000", date: "18 Mar 2026", src: "img/cert-kaplin.jpeg" },
    { name: "Denis Huhlaev",     amount: "9,820.52", acc: "$100,000", date: "16 Mar 2026", src: "img/cert-huhlaev.jpeg" },
    { name: "Aband Eddy",        amount: "6,475.88", acc: "$100,000", date: "16 Mar 2026", src: "img/cert-eddy1.jpeg" },
    { name: "Olga Kovlenko",     amount: "5,096.17", acc: "$100,000", date: "16 Mar 2026", src: "img/cert-kovlenko.jpeg" },
    { name: "Jukeen Bande",      amount: "8,622.65", acc: "$100,000", date: "20 Mar 2026", src: "img/cert-bande.jpeg" },
    { name: "Vadym Vads",        amount: "4,644.40", acc: "$50,000",  date: "16 Mar 2026", src: "img/cert-vads.jpeg" },
    { name: "Sergi Tolmachev",   amount: "7,102.34", acc: "$100,000", date: "27 Mar 2026", src: "img/cert-tolmachev.jpeg" },
    { name: "Aleksei Razenkov",  amount: "6,422.47", acc: "$100,000", date: "25 Mar 2026", src: "img/cert-razenkov.jpeg" },
    { name: "Irina Stuchevskaya", amount: "2,517.62", acc: "$50,000", date: "25 Mar 2026", src: "img/cert-stuchevskaya.jpeg" },
    { name: "Olga Kuznetsova",   amount: "2,404.64", acc: "$50,000",  date: "28 Mar 2026", src: "img/cert-kuznetsova.jpeg" },
    { name: "Nik Pechersky",     amount: "10,000.00", acc: "$150,000", date: "07 Apr 2026", src: "img/cert-pechersky.jpeg" },
    { name: "Elzatbek Berenaliev", amount: "10,000.00", acc: "$100,000", date: "07 Apr 2026", src: "img/cert-berenaliev.jpeg" },
    { name: "Aband Eddy",        amount: "7,712.92", acc: "$100,000", date: "01 Apr 2026", src: "img/cert-eddy2.jpeg" },
  ];

  // Split into two rows for counter-scrolling effect.
  const row1 = certs.filter((_, i) => i % 2 === 0);
  const row2 = certs.filter((_, i) => i % 2 === 1);

  const CertCard = ({ c }) => (
    <div className="card" onClick={() => setLightbox(c)} style={{
      padding: 0, overflow: "hidden", textAlign: "left", cursor: "zoom-in",
      width: 320, flexShrink: 0,
      transition: "transform .3s var(--ease-out), border-color .3s",
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--line-strong)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = ""; }}
    >
      <div style={{ aspectRatio: "842/595", background: "var(--bg)", position: "relative", overflow: "hidden", borderBottom: "1px solid var(--line)" }}>
        <img src={c.src} alt={`Payout certificate for ${c.name}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "var(--fg)", fontFamily: "Onest, sans-serif" }}>{c.name}</div>
          <div style={{ fontSize: 11, color: "var(--fg-dim)", fontFamily: "Akrobat, Onest, sans-serif" }}>{c.date}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontSize: 12, color: "var(--fg-dim)" }}>acc. {c.acc}</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "var(--accent)", fontFamily: "Akrobat, Onest, sans-serif" }}>+${c.amount}</div>
        </div>
      </div>
    </div>
  );

  const Marquee = ({ rows, dir = "left", speed = 80 }) => {
    // Duplicate rows 2x so the -50% translation loops seamlessly.
    const doubled = [...rows, ...rows];
    return (
      <div style={{ overflow: "hidden", position: "relative", maskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)" }}>
        <div style={{
          display: "flex", gap: 20, width: "max-content",
          animation: `cert-marquee-${dir} ${speed}s linear infinite`,
        }}>
          {doubled.map((c, i) => <CertCard key={i} c={c} />)}
        </div>
      </div>
    );
  };

  return (
    <section style={{ position: "relative", paddingTop: 60 }}>
      {/* PayoutShowcase above already fades into bg, so this section just continues bg cleanly. No top bridge needed. */}
      <style>{`
        @keyframes cert-marquee-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes cert-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 48, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />PAYOUT CERTIFICATES</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 0" }}>Real traders.<br /><span style={{ color: "var(--accent)" }}>Real receipts.</span></h2></Reveal>
          </div>
          <Reveal delay="2">
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "var(--fg-muted)" }}>
              Every payout gets a signed certificate with trader name, account size, amount and date. No hidden names, no "anonymous whales", no stock photos.
              Our traders' results are measured in <b style={{ color: "var(--fg)" }}>thousands of payouts</b> – more in our <a href="https://t.me/hhcomunity" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>Telegram community</a> and <a href="https://t.me/+Ix0pA4YYv9A4NzYy" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>news channel</a>.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed infinite marquees – no container so they run edge to edge */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Reveal delay="3"><Marquee rows={row1} dir="left"  speed={90} /></Reveal>
        <Reveal delay="4"><Marquee rows={row2} dir="right" speed={110} /></Reveal>
      </div>

      <div className="container" style={{ marginTop: 40 }}>
        <Reveal delay="5">
          <div style={{
            marginTop: 32, padding: "20px 28px",
            background: "var(--bg-card)", border: "1px solid var(--line)",
            borderRadius: 16, display: "flex", alignItems: "center", gap: 12,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="var(--accent)" opacity="0.15" />
              <path d="M8 12l3 3 5-6" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: 15, color: "var(--fg-muted)" }}>
              Sample of <span style={{ color: "var(--fg)", fontWeight: 700 }}>17,800+ payouts</span> completed · <span style={{ color: "var(--fg)", fontWeight: 700 }}>5,100+ active funded traders</span>
            </span>
          </div>
        </Reveal>
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "40px 24px", cursor: "zoom-out",
            animation: "cert-lb-fade 0.25s ease-out",
          }}
        >
          <style>{`
            @keyframes cert-lb-fade { from { opacity: 0; } to { opacity: 1; } }
            @keyframes cert-lb-zoom { from { opacity: 0; transform: scale(0.92) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
          `}</style>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(1100px, 94vw)", maxHeight: "90vh",
              background: "var(--bg-card)", borderRadius: 20,
              border: "1px solid var(--line-strong)",
              boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 60px rgba(252,213,53,0.12)",
              overflow: "hidden", cursor: "default",
              animation: "cert-lb-zoom 0.35s var(--ease-out)",
              display: "flex", flexDirection: "column",
            }}
          >
            <div style={{ background: "#0a0a0c", position: "relative", overflow: "hidden" }}>
              <img src={lightbox.src} alt={`Payout certificate for ${lightbox.name}`}
                   style={{ display: "block", width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain" }} />
            </div>
            <div style={{
              padding: "20px 28px",
              borderTop: "1px solid var(--line)",
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "var(--fg)", fontFamily: "Onest, sans-serif", letterSpacing: "-0.01em" }}>{lightbox.name}</div>
                <div style={{ fontSize: 13, color: "var(--fg-dim)", marginTop: 4 }}>Account {lightbox.acc} · {lightbox.date}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--accent)", fontFamily: "Akrobat, Onest, sans-serif", letterSpacing: "-0.02em" }}>+${lightbox.amount}</div>
                <button onClick={() => setLightbox(null)} style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(255,255,255,0.06)", border: "1px solid var(--line-strong)",
                  color: "var(--fg)", cursor: "pointer", fontSize: 18, lineHeight: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }} aria-label="Close">×</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  useRevealOnScroll();
  // Real Trustpilot reviews – https://www.trustpilot.com/review/hashhedge.com
  // Names/countries exactly as Trustpilot displays. Quotes paraphrased for length but faithful to the original sentiment.
  const reviews = [
    { name: "Clarence",         country: "Canada",        size: "$50,000",  quote: "Wasn't sure at first since they're newer. Trading conditions are exactly as advertised – no breached rules, no crazy slippage around news events. Platform runs smooth and limit orders hit perfectly. Finally a prop firm where you can just trade.", days: "Apr 2026", stars: 5 },
    { name: "Sultan A.",        country: "UAE",           size: "$25,000",  quote: "Passed the 25K exam yesterday. Terminal is finally not lagging, charts load super fast. No weird hidden drawdown rules like other props – everything is straightforward. Support replied in 5 minutes when I asked about KYC.",           days: "Apr 2026", stars: 5 },
    { name: "James C.",         country: "United Kingdom", size: "$50,000",  quote: "Two months in, just passed the $50K challenge. What I appreciate most is the transparency. Other props have hidden drawdown rules that catch you out – here everything is published clearly. Terminal holds up even during high-volatility news.", days: "Apr 2026", stars: 5 },
    { name: "Donna J.",         country: "United States", size: "$50,000",  quote: "Switched over for the crypto conditions specifically. Payout process is straightforward – no hoops to jump through as long as you respect the drawdown rules. Strict on the no-bots/no-API policy, but that keeps the environment fair.",     days: "Mar 2026", stars: 5 },
    { name: "Marissa T.",       country: "United States", size: "$25,000",  quote: "Terminal works fast, no hidden rules that catch you out. Solid firm for crypto prop – exactly what I was looking for.",                                                                                                                             days: "Mar 2026", stars: 5 },
    { name: "Dolores F. C.",    country: "United States", size: "$100,000", quote: "Surprisingly stable execution on BTC/USD. Was worried about slippage after reading older reviews, but my limit orders hit exactly where they should. Dashboard lag seems fixed after the tech update.",                                         days: "Mar 2026", stars: 5 },
    { name: "Andrey V.",        country: "Luxembourg",    size: "$25,000",  quote: "Even when I failed the challenge, the experience was great. Support was there, and the outcome was in my hands. Respect that.",                                                                                                                  days: "Nov 2025", stars: 5 },
    { name: "Дмитрий",          country: "Russia",        size: "$50,000",  quote: "HashHedge set a new standard for crypto prop. Transparent – no hidden terms, no surprises. Promos and contests are generous and easy to join. Customer support is fast, knowledgeable and helpful. Five stars, easily.",                         days: "Nov 2025", stars: 5 },
  ];
  return (
    <section style={{ background: "var(--bg-elev)", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(0deg, var(--bg) 0%, rgba(11,11,14,0.6) 40%, transparent 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 64, alignItems: "end" }}>
          <div>
            <Reveal><span className="eyebrow"><span className="dot" />REVIEWS · TRUSTPILOT</span></Reveal>
            <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0 0" }}>5,100+ funded traders.<br /><span style={{ color: "var(--accent)" }}>Reviewed on Trustpilot.</span></h2></Reveal>
          </div>
          <Reveal delay="2">
            <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "flex-end" }}>
              <div>
                <div style={{ display: "flex", gap: 4, marginBottom: 8, justifyContent: "flex-end" }}>
                  {[1, 2, 3, 4].map(i => <TPStar key={i} size={28} />)}
                  <TPStar size={28} half />
                </div>
                <div style={{ fontSize: 60, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.03em", lineHeight: 1, textAlign: "right" }}>
                  4.4<span style={{ fontSize: 28, color: "var(--fg-dim)", fontWeight: 600 }}>/5</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--fg-dim)", marginTop: 4, textAlign: "right" }}>
                  <a href="https://www.trustpilot.com/review/hashhedge.com" target="_blank" rel="noopener" style={{ color: "var(--fg-dim)", borderBottom: "1px solid var(--line-strong)" }}>
                    Trustpilot · verified reviews
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={String(Math.min(i, 5))}>
              <div className="card" style={{ padding: 28, height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {Array.from({ length: r.stars }).map((_, j) => <TPStar key={j} size={16} />)}
                    {r.stars < 5 && Array.from({ length: 5 - r.stars }).map((_, j) => (
                      <svg key={`e${j}`} width="16" height="16" viewBox="0 0 16 16"><rect width="16" height="16" fill="#2a2a2a" /><path d="M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z" fill="#fff" /></svg>
                    ))}
                  </div>
                  <span style={{ fontSize: 11, color: "var(--fg-low)" }}>{r.days}</span>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg)", margin: "0 0 20px", flex: 1 }}>"{r.quote}"</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: "1px solid var(--line)" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "var(--fg-dim)", marginTop: 2 }}>{r.country} · {r.size} funded acc.</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          {/* 9th cell – CTA card filling the grid */}
          <Reveal delay="3">
            <a href="https://www.trustpilot.com/review/hashhedge.com" target="_blank" rel="noopener" className="card" style={{
              padding: 28, height: "100%", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", textAlign: "center",
              textDecoration: "none",
              background: "linear-gradient(160deg, rgba(24,169,101,0.08) 0%, rgba(31,29,37,0.4) 100%)",
              border: "1px solid rgba(24,169,101,0.25)",
              transition: "border-color .3s, transform .3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(24,169,101,0.6)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(24,169,101,0.25)"; e.currentTarget.style.transform = "none"; }}
            >
              <svg width="56" height="56" viewBox="0 0 16 16" style={{ marginBottom: 18 }}><rect width="16" height="16" fill="#18A965" rx="2" /><path d="M 8 3 L 9.5 6.5 L 13 6.5 L 10.2 9 L 11.3 12.5 L 8 10.5 L 4.7 12.5 L 5.8 9 L 3 6.5 L 6.5 6.5 Z" fill="#fff" /></svg>
              <div style={{ fontSize: 22, fontWeight: 800, color: "var(--fg)", letterSpacing: "-0.02em", marginBottom: 8 }}>
                Read verified reviews
              </div>
              <div style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.55, marginBottom: 22, maxWidth: 280 }}>
                Every review is checked by Trustpilot – payout proofs, terminal screenshots, real names.
              </div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 13, fontWeight: 700, color: "#18A965",
                padding: "10px 18px", borderRadius: 999,
                background: "rgba(24,169,101,0.12)",
                border: "1px solid rgba(24,169,101,0.3)",
              }}>
                Read on Trustpilot
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay="4">
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--fg-low)", marginTop: 32, maxWidth: 720, margin: "32px auto 0" }}>
            Reviews displayed above are paraphrased summaries of public Trustpilot reviews for hashhedge.com. Click through to read the originals on Trustpilot.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  useRevealOnScroll();
  const [open, setOpen] = ____useS(0);
  const items = [
    { q: "Where can I get detailed information about how the platform works?", a: <>Everything from purchasing a challenge to withdrawing profits is in our <a href="https://hashhedge.gitbook.io/hashhedge-user-guide" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>User Guide</a>.</> },
    { q: "What payment methods are available?", a: "We accept USDT only, on the following networks: TRC20 (Tron), ERC20 (Ethereum), BEP20 (BNB Smart Chain), Solana, Arbitrum, Optimism." },
    { q: "Why do I have to pay for the challenge?", a: "The fee covers access to the trading platform and evaluation of your skills. In return you get a chance to trade with up to $200,000 and keep 80% of the profit without risking your own money." },
    { q: "What rules must I follow during a challenge?", a: <>Stay within the daily and maximum drawdown limits and hit the profit target within the required number of trading days. Details for each package are on the purchase page and in the <a href="https://hashhedge.gitbook.io/hashhedge-user-guide/introduction/challenge-type" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>User Guide</a>.</> },
    { q: "What happens if I exceed the loss limit?", a: "The challenge is permanently locked. Doesn't matter which limit, daily or overall. Unrealized losses count too." },
    { q: "How is the Daily Loss limit calculated?", a: <>Daily Loss = Current Equity − Balance at the beginning of the day. Open positions affect the calculation. The limit resets at 00:13 UTC+4. Unrealized profits/losses carry forward to the next day. Detailed breakdown with examples <a href="https://hashhedge.gitbook.io/hashhedge-user-guide/daily-loss-calculation" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>here</a>.</> },
    { q: "What is a trading day?", a: "A day on which at least one position was opened. If you open on Monday and close on Wednesday, only Monday counts." },
    { q: "What is Settlement Time and when does it occur?", a: "Daily calculation of your account results. Happens at the end of the trading day in UTC+4. Balances are finalized and limits are updated." },
    { q: "Which assets can I trade?", a: <>160+ crypto assets, metals (gold, silver, platinum, palladium), oil and natural gas. Full list with position limits <a href="https://hashhedge.gitbook.io/hashhedge-user-guide/coins-limit" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>here</a>.</> },
    { q: "Is spot trading available?", a: "No. Futures only." },
    { q: "What is the maximum leverage I can trade with?", a: "Up to 1:5." },
    { q: "Can I trade using different margin modes simultaneously?", a: "No. One mode at a time: Cross or Isolated. To switch, close all positions in the current mode first." },
    { q: "Can I hedge positions?", a: "Yes. You can open positions in opposite directions on the same asset." },
    { q: "Can I hold open positions for several days?", a: "Yes. But watch your limits – open positions are factored into drawdown calculations." },
    { q: "Do open positions affect loss limits?", a: "Yes. Unrealized P&L directly affects Equity and drawdown calculations. You can breach a limit without closing a position." },
    { q: "Is using a Stop Loss mandatory?", a: <>No. But we recommend it to help you stay within drawdown limits. More on TP/SL setup <a href="https://hashhedge.gitbook.io/hashhedge-user-guide/take-profit-stop-loss" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>here</a>.</> },
    { q: "Can I trade during weekends or important news events?", a: "Yes. No restrictions." },
    { q: "What are the platform fees?", a: <>Details on fees and funding rates <a href="https://hashhedge.gitbook.io/hashhedge-user-guide/trading-module/fees-and-funding-rate" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>here</a>.</> },
    { q: "Can I participate in multiple challenges simultaneously?", a: "Yes, on stages 1 and 2 you can run multiple challenges in parallel. On stage 3 (funded) you can only trade one challenge per account size." },
    { q: "I've completed the challenge. What's next?", a: "You get a funded account (accumulative account). Trade with our capital, keep 80% of the profit." },
    { q: "Are funded account conditions different from evaluation?", a: "No. Drawdowns, leverage, execution, fees – everything is the same across all stages. What you see on evaluation is what you get on funded." },
    { q: "Is there a consistency rule or a daily profit cap?", a: "No. No requirement to spread profit evenly across days. No cap on how much you can make in a single day. Hit the target within the minimum trading days and you move on." },
    { q: "Is there an extra fee to activate the funded account?", a: "No. The challenge fee is the only payment. Funded account activates at no additional cost." },
    { q: "How do I reach support?", a: <>Website chat (icon in the bottom right), email <a href="mailto:support@hashhedge.com" style={{ color: "var(--accent)" }}>support@hashhedge.com</a>, Telegram bot <a href="https://t.me/hashhedgesupportbot" target="_blank" rel="noopener" style={{ color: "var(--accent)" }}>@hashhedgesupportbot</a>. Support is available 24/7.</> },
  ];
  return (
    <section id="faq" style={{ position: "relative", overflow: "hidden" }}>
      {/* soft top wash continuing the accent glow from Support so the boundary fades instead of cutting */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 360,
        background: "radial-gradient(ellipse 90% 100% at 70% 0%, rgba(252,213,53,0.1) 0%, rgba(252,213,53,0.04) 35%, rgba(252,213,53,0) 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="container" style={{ maxWidth: 960, position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal><span className="eyebrow"><span className="dot" />QUESTIONS</span></Reveal>
          <Reveal delay="1"><h2 className="h1" style={{ margin: "20px 0" }}>The honest FAQ.</h2></Reveal>
          <Reveal delay="2"><p style={{ fontSize: 18, color: "var(--fg-muted)" }}>Everything we'd want to know before giving a prop firm our money.</p></Reveal>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((it, i) => (
            <Reveal key={i} delay={String(Math.min(i, 5))}>
              <div
                onClick={() => setOpen(open === i ? -1 : i)}
                className="card"
                style={{ padding: 0, cursor: "pointer", overflow: "hidden" }}
              >
                <div style={{ padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "var(--fg)" }}>{it.q}</h3>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: open === i ? "var(--accent)" : "var(--bg-card)",
                    color: open === i ? "#13111c" : "var(--fg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all .25s var(--ease-out)", flexShrink: 0,
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
                  </div>
                </div>
                <div style={{
                  maxHeight: open === i ? 600 : 0,
                  overflow: "hidden",
                  transition: "max-height .4s var(--ease-out)",
                }}>
                  <div style={{ padding: "0 28px 28px", fontSize: 16, lineHeight: 1.6, color: "var(--fg-muted)", borderTop: "1px solid var(--line)", paddingTop: 20, marginTop: 0 }}>
                    {it.a}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigCTA() {
  useRevealOnScroll();
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
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
          display: flex; align-items: center; justify-content: center;
          font-family: 'Akrobat', sans-serif; font-weight: 900;
          color: #fff; font-size: 18px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6), inset 0 2px 0 rgba(255,255,255,0.25);
        }
        .cta-coin.usdt { background: linear-gradient(135deg, #26A17B 0%, #0e5c45 100%); width: 76px; height: 76px; top: 40px; left: 6%; animation: cta-coin-float-a 6s ease-in-out infinite; }
        .cta-coin.btc  { background: linear-gradient(135deg, #F7931A 0%, #9c5400 100%); width: 96px; height: 96px; top: 160px; left: 3%; animation: cta-coin-float-b 7s ease-in-out infinite; }
        .cta-coin.eth  { background: linear-gradient(135deg, #627EEA 0%, #2c3e8b 100%); width: 64px; height: 64px; bottom: 80px; left: 8%; animation: cta-coin-float-c 5.5s ease-in-out infinite; }
        .cta-coin.usdc { background: linear-gradient(135deg, #2775CA 0%, #134676 100%); width: 84px; height: 84px; top: 90px; right: 5%; animation: cta-coin-float-b 6.5s ease-in-out infinite; }
        .cta-coin.sol  { background: linear-gradient(135deg, #9945FF 0%, #14F195 100%); width: 70px; height: 70px; top: 220px; right: 3%; animation: cta-coin-float-c 7.5s ease-in-out infinite; }
        .cta-coin.arb  { background: linear-gradient(135deg, #2D374B 0%, #28A0F0 100%); width: 56px; height: 56px; bottom: 120px; right: 7%; animation: cta-coin-float-a 6s ease-in-out infinite; }
        .cta-rain-layer { position: absolute; inset: 0; pointer-events: none; overflow: hidden; opacity: 0.6; }
        .cta-bill {
          position: absolute;
          font-family: 'Akrobat', sans-serif; font-weight: 900;
          color: var(--accent); font-size: 22px; letter-spacing: -0.03em;
          animation: cta-money-rain 12s linear infinite;
          text-shadow: 0 0 12px rgba(252,213,53,0.4);
        }
        .cta-spark { position: absolute; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px rgba(252,213,53,0.8); animation: cta-pulse-dot 2s ease-in-out infinite; }
        @media (max-width: 900px) {
          .cta-hero { padding: 64px 24px; }
          .cta-coins, .cta-chart, .cta-rain-layer { display: none; }
        }
      `}</style>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="cta-hero">
            {/* animated background stack */}
            <div className="cta-grid" />
            <svg className="cta-rings" viewBox="0 0 820 820">
              <circle className="outer" cx="410" cy="410" r="400" />
              <circle className="mid"   cx="410" cy="410" r="320" />
              <circle className="inner" cx="410" cy="410" r="240" />
              <circle className="inner" cx="410" cy="410" r="160" strokeOpacity="0.15" />
            </svg>

            {/* money rain behind everything */}
            <div className="cta-rain-layer" aria-hidden="true">
              {[
                { l: "8%",  d: "0s",   c: "$79"  },
                { l: "18%", d: "3s",   c: "$5K"  },
                { l: "28%", d: "1.2s", c: "💵"  },
                { l: "72%", d: "2.1s", c: "$25K" },
                { l: "82%", d: "4.2s", c: "$79"  },
                { l: "92%", d: "0.6s", c: "💵"  },
              ].map((b, i) => (
                <span key={i} className="cta-bill" style={{ left: b.l, top: "-40px", animationDelay: b.d }}>{b.c}</span>
              ))}
            </div>

            {/* floating coin tokens */}
            <div className="cta-coins" style={{ inset: 0 }} aria-hidden="true">
              <div className="cta-coin usdt">USDT</div>
              <div className="cta-coin btc">₿</div>
              <div className="cta-coin eth">Ξ</div>
              <div className="cta-coin usdc">USDC</div>
              <div className="cta-coin sol">SOL</div>
              <div className="cta-coin arb">ARB</div>
              {/* accent sparks */}
              <div className="cta-spark" style={{ width: 8, height: 8, top: "22%", left: "32%", animationDelay: "0.2s" }} />
              <div className="cta-spark" style={{ width: 6, height: 6, top: "70%", left: "28%", animationDelay: "0.9s" }} />
              <div className="cta-spark" style={{ width: 5, height: 5, top: "18%", right: "30%", animationDelay: "1.4s" }} />
              <div className="cta-spark" style={{ width: 7, height: 7, top: "78%", right: "34%", animationDelay: "0.5s" }} />
            </div>

            {/* bottom candle chart + live payout ticks */}
            <svg className="cta-chart" viewBox="0 0 1200 240" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cta-fillgrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="rgba(252,213,53,0.35)" />
                  <stop offset="1" stopColor="rgba(252,213,53,0)" />
                </linearGradient>
              </defs>
              <path className="fill"
                d="M0 180 L60 172 L120 160 L180 166 L240 150 L300 138 L360 128 L420 134 L480 118 L540 110 L600 96 L660 90 L720 84 L780 70 L840 60 L900 52 L960 60 L1020 46 L1080 38 L1140 28 L1200 22 L1200 240 L0 240 Z" />
              <path className="line"
                d="M0 180 L60 172 L120 160 L180 166 L240 150 L300 138 L360 128 L420 134 L480 118 L540 110 L600 96 L660 90 L720 84 L780 70 L840 60 L900 52 L960 60 L1020 46 L1080 38 L1140 28 L1200 22" />
              <g className="cta-tick-group">
                <g className="item" style={{ animationDelay: "0s" }}>
                  <circle cx="240" cy="150" r="4" className="up" />
                  <text x="250" y="144" className="up">+$4,820 · 🇺🇸</text>
                </g>
                <g className="item" style={{ animationDelay: "1.5s" }}>
                  <circle cx="540" cy="110" r="4" className="up" />
                  <text x="550" y="104" className="up">+$8,120 · 🇩🇪</text>
                </g>
                <g className="item" style={{ animationDelay: "3s" }}>
                  <circle cx="840" cy="60" r="4" className="up" />
                  <text x="850" y="54" className="up">+$11,300 · 🇧🇷</text>
                </g>
                <g className="item" style={{ animationDelay: "4.5s" }}>
                  <circle cx="1080" cy="38" r="4" className="up" />
                  <text x="960" y="22" className="up">+$22,640 · 🇦🇪</text>
                </g>
              </g>
            </svg>

            {/* foreground content */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <span className="eyebrow" style={{ justifyContent: "center", color: "var(--accent)" }}>
                <span className="dot" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
                READY?
              </span>
              <h2 className="h1" style={{ margin: "24px auto 24px", maxWidth: 900, fontSize: "clamp(44px, 5.5vw, 76px)" }}>
                Your first <span style={{ color: "var(--accent)" }}>$5,000 account</span><br />
                is <span style={{ color: "var(--accent)" }}>79 dollars</span> away.
              </h2>
              <p style={{ fontSize: 19, color: "var(--fg-muted)", maxWidth: 640, margin: "0 auto 40px" }}>
                2-stage Challenge. Unlimited time. 80% profit split. USDT payouts straight to your wallet.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary btn-lg">Start Challenge · $79</a>
                <a href="#faq" className="btn btn-ghost btn-lg">Read the rules</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "64px 0 32px", background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <HashHedgeLogo />
            <p style={{ fontSize: 14, color: "var(--fg-dim)", marginTop: 20, lineHeight: 1.6, maxWidth: 300 }}>
              Crypto-native prop trading firm. Backing skilled traders with up to $200,000 in live capital. Registered UAE.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                { k: "TG", u: "https://t.me/hhcomunity" },
                { k: "X",  u: "#" },
                { k: "YT", u: "#" },
                { k: "DS", u: "#" },
              ].map(s => (
                <a key={s.k} href={s.u} style={{
                  width: 40, height: 40, borderRadius: 8,
                  border: "1px solid var(--line)", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 11, fontWeight: 700, color: "var(--fg-dim)",
                  textDecoration: "none",
                }}>{s.k}</a>
              ))}
            </div>
          </div>
          {[
            { t: "Platform", l: ["2-phase Challenge", "Pricing", "Trading Rules", "Scaling Plan", "Payouts"] },
            { t: "Resources", l: ["Trader Dashboard", "Economic Calendar", "Blog", "Academy", "Glossary"] },
            { t: "Company", l: ["About us", "The team", "Press", "Affiliate program", "Careers"] },
            { t: "Legal", l: ["Terms of service", "Privacy policy", "AML policy", "Trader agreement", "Disclaimers"] },
          ].map(col => (
            <div key={col.t}>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", color: "var(--fg)", marginBottom: 18 }}>{col.t.toUpperCase()}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map(li => (
                  <li key={li}><a href="#" style={{ fontSize: 14, color: "var(--fg-dim)", textDecoration: "none" }}>{li}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--fg-low)", flexWrap: "wrap", gap: 20 }}>
          <span>© 2026 HashHedge · UAE · All rights reserved</span>
          <span>Trading involves substantial risk. Challenge fees are non-refundable until first payout.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { TeamCerts, Reviews, FAQ, BigCTA, Footer });
