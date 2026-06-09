// Hash Hedge shared components + hooks
// Exposes to window: Reveal, useRevealOnScroll, Counter, Header, PromoBar, HashMark,
// LogoWord, MediaMarquee, Footer, FAQItem, PULSE

const { useEffect, useState, useRef } = React;

// ----- Hash mark (arrow down-inside-hash) -----
function HashMark({ size = 24, color = "#fcd535", style = {} }) {
  return (
    <svg width={size} height={size * 0.933} viewBox="0 0 24 22.4" fill={color} style={style} aria-hidden>
      <path d="M 11.983 18.574 L 3.766 10.512 L 8.027 6.386 L 8.027 12.281 L 10.604 14.639 L 10.604 0 L 0 10.512 L 12.009 22.4 L 24 10.512 L 13.396 0 L 13.396 14.639 L 15.973 12.281 L 15.973 6.386 L 20.234 10.512 L 11.983 18.574 Z" fillRule="evenodd" />
    </svg>
  );
}

function LogoWord({ color = "#e8e8e9" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <HashMark size={28} color="#fcd535" />
      <span style={{
        fontFamily: "Onest", fontWeight: 900, fontSize: 20, letterSpacing: "-0.02em",
        color, textTransform: "uppercase"
      }}>HashHedge</span>
    </div>
  );
}

// ----- Reveal on scroll -----
function useRevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

function Reveal({ children, delay, as: Tag = "div", className = "", style }) {
  return <Tag className={`reveal ${className}`} data-delay={delay} style={style}>{children}</Tag>;
}

// ----- Counter -----
function Counter({ to, duration = 2000, prefix = "", suffix = "", decimals = 0 }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const loop = (t) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(to * eased);
          if (p < 1) requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
      }
    }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = Number(v).toLocaleString("en-US", { maximumFractionDigits: decimals, minimumFractionDigits: decimals });
  return <span ref={ref} className="mono">{prefix}{formatted}{suffix}</span>;
}

// ----- Promo top bar -----
function PromoBar() {
  const items = [
    "🚀 WSCT Update: $50K & $200K accounts live in the Tournament",
    "⚡ Three-stage Hash Hedge Challenge – pass Stages 1 & 2, trade funded on Stage 3",
    "🪙 Crypto-only payments: USDT · USDC · BTC · ETH",
    "🎯 160+ crypto pairs. Fund up to $200,000.",
  ];
  return (
    <div style={{
      height: 44, background: "var(--accent)", color: "#111", overflow: "hidden",
      display: "flex", alignItems: "center", position: "relative", zIndex: 40,
    }}>
      <div className="marquee" style={{ width: "100%" }}>
        <div className="marquee-track" style={{ animationDuration: "30s" }}>
          {[...items, ...items, ...items].map((t, i) => (
            <span key={i} style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.01em" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----- Header -----
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h); h();
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 30, height: 72,
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      background: scrolled ? "rgba(16,16,18,0.7)" : "rgba(19,17,28,0.35)",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      transition: "all .3s var(--ease)",
    }}>
      <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <LogoWord />
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Challenges", "How it works", "Affiliate", "FAQ", "Blog"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s/g, "-")}`} style={{
              fontSize: 14, fontWeight: 600, color: "var(--fg-muted)", transition: "color .15s",
            }} onMouseEnter={e => e.currentTarget.style.color = "var(--fg)"} onMouseLeave={e => e.currentTarget.style.color = "var(--fg-muted)"}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="https://www.hashhedge.com/client/index" target="_blank" rel="noopener" className="btn btn-ghost btn-sm">Login</a>
          <a href="https://www.hashhedge.com/client/register" target="_blank" rel="noopener" className="btn btn-primary btn-sm">Start Challenge</a>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: 8, color: "var(--fg-muted)", fontSize: 13, fontWeight: 600 }}>
            <span style={{ width: 18, height: 12, background: "#fff", position: "relative", borderRadius: 2, overflow: "hidden" }}>
              <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#fff 33%,#0033a0 33% 66%,#d52b1e 66%)" }} />
            </span>
            EN
          </div>
        </div>
      </div>
    </header>
  );
}

// ----- Media marquee -----
function MediaMarquee() {
  const items = ["ASSOCIATED PRESS", "FINANCIAL TIMES", "MARKETWATCH", "YAHOO FINANCE", "COINTELEGRAPH", "BITCOIN.COM", "BeInCrypto", "BLOOMBERG", "FORBES", "CNBC"];
  return (
    <section style={{ padding: "56px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container" style={{ marginBottom: 24 }}>
        <div style={{ textAlign: "center", fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", color: "var(--fg-dim)", textTransform: "uppercase" }}>
          You trade. We fund. You get paid – covered by the world's press.
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...items, ...items].map((t, i) => (
            <span key={i} style={{
              fontFamily: "Onest", fontWeight: 800, fontSize: 28, letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap"
            }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----- FAQ Item -----
function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{
      border: "1px solid var(--line)", borderRadius: 16, background: "var(--bg-2)", overflow: "hidden", transition: "border-color .2s",
      borderColor: open ? "rgba(252,213,53,0.3)" : "var(--line)",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", padding: "24px 28px", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24
      }}>
        <span style={{ fontSize: 18, fontWeight: 600, color: "var(--fg)" }}>{q}</span>
        <span style={{
          width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--line)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          transform: open ? "rotate(45deg)" : "none", transition: "transform .3s var(--ease)",
          color: open ? "var(--accent)" : "var(--fg-muted)", fontSize: 22, fontWeight: 300
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? 400 : 0, overflow: "hidden", transition: "max-height .4s var(--ease)",
      }}>
        <div style={{ padding: "0 28px 24px", fontSize: 15, lineHeight: 1.6, color: "var(--fg-dim)" }}>{a}</div>
      </div>
    </div>
  );
}

// ----- Footer -----
function Footer() {
  return (
    <footer style={{ background: "#15131a", borderTop: "1px solid var(--line)" }}>
      <div className="container" style={{ padding: "80px 0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>
          <div>
            <LogoWord />
            <p style={{ color: "var(--fg-low)", fontSize: 14, marginTop: 20, lineHeight: 1.5, maxWidth: 260 }}>
              The #1 crypto prop trading firm. Trade 160+ pairs with up to $200,000 in capital. Web3-native, payouts in 72 hours.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {["X", "TG", "IG", "YT", "DC"].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--line)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "var(--fg-muted)", transition: "all .2s"
                }} onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#111"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--fg-muted)"; e.currentTarget.style.borderColor = "var(--line)"; }}>{s}</a>
              ))}
            </div>
          </div>
          {[
            { t: "Product", l: ["Challenges", "Pricing", "How it works", "Scale-up program"] },
            { t: "Company", l: ["About", "Careers", "Affiliate program", "Blog"] },
            { t: "Help", l: ["FAQ", "Support", "Terms", "Privacy Policy"] },
          ].map(col => (
            <div key={col.t}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", color: "var(--fg-muted)", textTransform: "uppercase", marginBottom: 20 }}>{col.t}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {col.l.map(i => <a key={i} href="#" style={{ fontSize: 15, color: "var(--fg-dim)", transition: "color .15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--fg-dim)"}>{i}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: "var(--line)", margin: "56px 0 24px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 13, color: "var(--fg-low)" }}>© 2026 HashHedge. All rights reserved. support@hashhedge.com</div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, color: "var(--fg-low)" }}>PAYMENT OPTIONS</span>
            {["USDT", "USDC", "BTC", "ETH"].map(p => (
              <span key={p} style={{
                padding: "6px 12px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--line)", borderRadius: 8,
                fontSize: 11, fontWeight: 700, color: "var(--fg-dim)", letterSpacing: "0.06em"
              }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Reveal, useRevealOnScroll, Counter, Header, PromoBar, HashMark, LogoWord, MediaMarquee, Footer, FAQItem });
