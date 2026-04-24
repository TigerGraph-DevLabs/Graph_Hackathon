export const metadata = {
  title: 'Community Partners',
  description: 'Community partners standing behind the GraphRAG Inference Hackathon — title, platform, infra, and community partners reaching builders worldwide.',
};

const css = `
  .page-hero { padding: 96px 0 32px; }
  .page-hero h1 { font-size: clamp(48px, 5.5vw, 80px); }
  .partner-tier { margin-top: 72px; }
  .partner-tier .t-head { display: flex; align-items: baseline; gap: 16px; margin-bottom: 24px;
    padding-bottom: 16px; border-bottom: 1px solid var(--line); }
  .partner-tier .t-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--ink-faint); }
  .partner-tier h2 { font-size: clamp(28px, 3vw, 40px); }
  .partner-grid { display: grid; gap: 16px; }
  .partner-grid.gold { grid-template-columns: repeat(3, 1fr); }
  .partner-grid.silver { grid-template-columns: repeat(4, 1fr); }
  .partner-grid.community { grid-template-columns: repeat(5, 1fr); }
  .partner { padding: 32px 24px; border-radius: 14px; background: var(--card);
    border: 1px solid var(--line); display: flex; flex-direction: column;
    align-items: flex-start; min-height: 160px; transition: all 0.25s ease; }
  .partner:hover { background: var(--card-hover); border-color: var(--line-strong); transform: translateY(-3px); }
  .partner.gold { background: linear-gradient(180deg, rgba(255,107,44,0.06), rgba(255,107,44,0.01));
    border-color: rgba(255,107,44,0.2); }
  .partner .logo-box { width: 100%; display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
  .partner .sigil { width: 44px; height: 44px; border-radius: 10px; background: rgba(180,195,230,0.06);
    border: 1px solid var(--line-strong); display: grid; place-items: center;
    font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 18px; color: var(--ink); flex-shrink: 0; }
  .partner.gold .sigil { background: rgba(255,107,44,0.1); border-color: rgba(255,107,44,0.3); color: var(--orange-soft); }
  .partner.cyan .sigil { background: rgba(77,217,255,0.1); border-color: rgba(77,217,255,0.3); color: var(--cyan-soft); }
  .partner .name { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 17px; color: var(--ink); }
  .partner .kind { font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); margin-top: 4px; }
  .partner p { color: var(--ink-dim); font-size: 13.5px; line-height: 1.5; margin-top: 8px; }
  .partner.small { min-height: 96px; padding: 20px; flex-direction: row; align-items: center; gap: 12px; }
  .partner.small .logo-box { margin-bottom: 0; }
  @media (max-width: 900px) {
    .partner-grid.gold { grid-template-columns: 1fr 1fr; }
    .partner-grid.silver { grid-template-columns: 1fr 1fr; }
    .partner-grid.community { grid-template-columns: 1fr 1fr; }
  }
  .become { margin-top: 96px; padding: 48px; border-radius: 20px;
    background: radial-gradient(500px 300px at 100% 0%, rgba(77,217,255,0.08), transparent 60%),
                radial-gradient(400px 300px at 0% 100%, rgba(255,107,44,0.08), transparent 60%),
                rgba(11,15,30,0.4);
    border: 1px solid var(--line-strong); display: grid;
    grid-template-columns: 1.4fr 1fr; gap: 40px; align-items: center; }
  .become h2 { font-size: clamp(28px, 3.2vw, 44px); }
  .become p { color: var(--ink-dim); margin-top: 14px; font-size: 16px; }
  @media (max-width: 900px) { .become { grid-template-columns: 1fr; padding: 32px; } }
  .sample-banner { margin-top: 48px; padding: 14px 20px; border-radius: 12px;
    border: 1px dashed rgba(255,180,60,0.6); background: rgba(255,180,60,0.06);
    display: flex; align-items: center; gap: 12px;
    font-family: 'JetBrains Mono', monospace; font-size: 12px;
    letter-spacing: 0.08em; color: var(--ink-dim); }
  .sample-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%;
    background: #FFB340; box-shadow: 0 0 10px rgba(255,180,60,0.7); }
  .sample-pill { margin-left: auto; border-color: rgba(255,180,60,0.4) !important;
    color: #FFB340 !important; background: rgba(255,180,60,0.06) !important; }
`;

const sigil = (n) => <div className="sigil">{n}</div>;
const ecoTile = (s, n, k) => (<div key={n} className="partner cyan"><div className="logo-box">{sigil(s)}<div><div className="name">{n}</div><div className="kind">{k}</div></div></div></div>);
const commTile = (s, n, k) => (<div key={n} className="partner small"><div className="logo-box">{sigil(s)}<div><div className="name">{n}</div><div className="kind">{k}</div></div></div></div>);

export default function PartnersPage() {
  return (
    <>
      <style>{css}</style>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><span className="line"></span>Community Partners · Powered by<span className="line"></span></span>
          <h1 className="display">The orgs<br/>standing <span className="grad-cyan">behind</span> this.</h1>
          <p className="lead mt-3">Hackathons don&apos;t run themselves. Thanks to every community, campus group, and ecosystem partner helping us reach builders across the globe.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="partner-tier">
            <div className="t-head">
              <span className="t-label">Tier 01</span>
              <h2>Title Partner</h2>
            </div>
            <div className="partner-grid gold" style={{ gridTemplateColumns: '1fr' }}>
              <div className="partner gold" style={{ minHeight: 140, padding: 32 }}>
                <div className="logo-box">
                  <img src="/assets/tigergraph-logo.png" alt="TigerGraph" style={{ height: 32 }} />
                </div>
                <div className="name">TigerGraph</div>
                <div className="kind">Hosts &amp; organizer · Graph database platform</div>
                <p>The hackathon&apos;s originator. TigerGraph is a graph database built for real-time deep-link analytics, GraphRAG, and enterprise-scale graph analytics.</p>
              </div>
            </div>
          </div>

          {/* SAMPLE PARTNERS BELOW (Tier 02, 03, 04). Replace with confirmed partners before launch. */}
          <div className="sample-banner">
            <span className="sample-dot"></span>
            <span><b style={{ color: 'var(--ink)', letterSpacing: '0.12em' }}>SAMPLE PARTNERS BELOW</b> — Tiers 02 / 03 / 04 are placeholders pending confirmation. Update before launch.</span>
          </div>

          <div className="partner-tier">
            <div className="t-head">
              <span className="t-label">Tier 02</span>
              <h2>Platform &amp; Infra Partners</h2>
              <span className="badge sample-pill">Sample · Pending</span>
            </div>
            <div className="partner-grid gold">
              <div className="partner gold">
                <div className="logo-box">{sigil('UN')}<div><div className="name">Unstop</div><div className="kind">Registrations &amp; submissions</div></div></div>
                <p>Official platform for registrations, team management, and final submissions.</p>
              </div>
              <div className="partner gold">
                <div className="logo-box">{sigil('OP')}<div><div className="name">OpenAI</div><div className="kind">LLM credits partner</div></div></div>
                <p>API credits and rate-limit uplifts for registered teams during the build phase.</p>
              </div>
              <div className="partner gold">
                <div className="logo-box">{sigil('AW')}<div><div className="name">AWS</div><div className="kind">Compute credits</div></div></div>
                <p>Cloud credits so teams can deploy their GraphRAG stack without sweating the bill.</p>
              </div>
            </div>
          </div>

          <div className="partner-tier">
            <div className="t-head">
              <span className="t-label">Tier 03</span>
              <h2>Ecosystem Partners</h2>
              <span className="badge sample-pill">Sample · Pending</span>
            </div>
            <div className="partner-grid silver">
              {ecoTile('LC', 'LangChain', 'Framework')}
              {ecoTile('LI', 'LlamaIndex', 'RAG tooling')}
              {ecoTile('HF', 'Hugging Face', 'Models')}
              {ecoTile('AN', 'Anthropic', 'Models')}
              {ecoTile('GH', 'GitHub', 'Developer tools')}
              {ecoTile('WA', 'Weights & Biases', 'Eval & tracking')}
              {ecoTile('VC', 'Vercel', 'Deployments')}
              {ecoTile('SB', 'Supabase', 'Backend')}
            </div>
          </div>

          <div className="partner-tier">
            <div className="t-head">
              <span className="t-label">Tier 04</span>
              <h2>Community &amp; Campus Partners</h2>
              <span className="badge sample-pill">Sample · Pending</span>
            </div>
            <div className="partner-grid community">
              {commTile('PC', 'PyData', 'Community')}
              {commTile('GF', 'GDG India', 'Community')}
              {commTile('MC', 'MLH', 'Hackers')}
              {commTile('II', 'IIT Dev Club', 'Campus')}
              {commTile('BI', 'BITS ACM', 'Campus')}
              {commTile('KR', 'KerasCamp', 'Community')}
              {commTile('DV', 'Devfolio', 'Builders')}
              {commTile('OS', 'OSS India', 'Community')}
              {commTile('NP', 'NPTEL Alumni', 'Campus')}
              {commTile('RS', 'ReactSchool', 'Community')}
            </div>
          </div>

          <div className="become">
            <div>
              <span className="eyebrow"><span className="line"></span>Partner with us<span className="line"></span></span>
              <h2 className="mt-2">Want your community on this page?</h2>
              <p>If you run a developer community, campus club, or ecosystem program and want to co-host, we&apos;re opening a handful more spots. Reach out and we&apos;ll talk.</p>
            </div>
            <div>
              <a href="mailto:devanshu.saxena@tigergraph.com" className="btn btn-primary">Email Devanshu →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
