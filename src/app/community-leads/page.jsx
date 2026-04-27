import CommunityLeadsView from '@/components/CommunityLeadsView';

export const metadata = {
  title: 'Community Leads',
  description: '20 TigerGraph community leads helping builders ship GraphRAG systems — across India, SEA, EMEA, and the US. Office hours and WhatsApp support during the hackathon.',
};

const css = `
  .page-hero { padding: 96px 0 32px; }
  .page-hero h1 { font-size: clamp(48px, 5.5vw, 80px); }
  .view-toggle { display: inline-flex; gap: 4px; padding: 4px;
    background: rgba(180,195,230,0.04); border: 1px solid var(--line-strong);
    border-radius: 999px; margin-top: 28px; }
  .view-toggle button { appearance: none; border: none; background: transparent;
    color: var(--ink-dim); padding: 8px 16px; border-radius: 999px;
    font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em;
    text-transform: uppercase; cursor: pointer; }
  .view-toggle button.active { background: rgba(255,107,44,0.15); color: var(--orange-soft);
    box-shadow: 0 0 0 1px rgba(255,107,44,0.3) inset; }
  .network { position: relative; width: 100%; height: 760px; margin-top: 40px;
    border-radius: 20px; overflow: hidden;
    background: radial-gradient(700px 500px at 50% 50%, rgba(255,107,44,0.06), transparent 70%),
                radial-gradient(500px 400px at 80% 30%, rgba(77,217,255,0.06), transparent 70%),
                rgba(11,15,30,0.4);
    border: 1px solid var(--line); }
  .network::before { content: ""; position: absolute; inset: 0;
    background-image: radial-gradient(rgba(180,200,240,0.08) 1px, transparent 1.2px);
    background-size: 28px 28px;
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 50%, transparent 100%);
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 50%, transparent 100%); }
  .network svg.edges { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
  .network .hub { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 150px; height: 150px; border-radius: 50%;
    background: radial-gradient(circle at 50% 40%, rgba(255,107,44,0.35), rgba(255,107,44,0.05) 70%, transparent);
    display: grid; place-items: center; z-index: 3; }
  .network .hub .core { width: 88px; height: 88px; border-radius: 50%;
    background: linear-gradient(180deg, #FF7A3D, #FF6B2C);
    border: 2px solid rgba(255,180,130,0.5);
    box-shadow: 0 0 40px rgba(255,107,44,0.6), inset 0 0 0 6px rgba(255,255,255,0.08);
    display: grid; place-items: center; padding: 8px; text-align: center; }
  .network .hub .core img { height: 28px; filter: brightness(0) invert(0.1); }
  .network .node { position: absolute; width: 72px; height: 72px; border-radius: 50%;
    background: linear-gradient(135deg, rgba(77,217,255,0.15), rgba(77,217,255,0.04));
    border: 1.5px solid rgba(77,217,255,0.35);
    display: grid; place-items: center;
    font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 22px;
    color: var(--ink); cursor: pointer; transition: all 0.25s ease;
    transform: translate(-50%, -50%); z-index: 2; backdrop-filter: blur(4px); }
  .network .node:hover { transform: translate(-50%, -50%) scale(1.15);
    border-color: var(--orange);
    background: linear-gradient(135deg, rgba(255,107,44,0.25), rgba(255,107,44,0.08));
    color: #FFF; box-shadow: 0 0 24px rgba(255,107,44,0.5); z-index: 5; }
  .network .node.orange { border-color: rgba(255,107,44,0.4);
    background: linear-gradient(135deg, rgba(255,107,44,0.12), rgba(255,107,44,0.03)); }
  .network .node .tip { position: absolute; bottom: -52px; left: 50%; transform: translateX(-50%);
    padding: 6px 10px; background: rgba(5,7,14,0.95);
    border: 1px solid var(--line-strong); border-radius: 8px;
    font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500;
    color: var(--ink); white-space: nowrap; opacity: 0; pointer-events: none;
    transition: opacity 0.2s ease; }
  .network .node .tip .role { display: block;
    font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.12em; color: var(--ink-faint);
    text-transform: uppercase; margin-top: 2px; }
  .network .node:hover .tip { opacity: 1; }
  .grid-view { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 40px; }
  .lead-card { padding: 24px; border-radius: 14px; background: var(--card);
    border: 1px solid var(--line); transition: all 0.25s ease;
    text-decoration: none; color: inherit; display: block; }
  a.lead-card:hover .name { color: var(--orange-soft); }
  a.node { text-decoration: none; }
  .lead-card:hover { background: var(--card-hover); border-color: var(--line-strong); transform: translateY(-3px); }
  .lead-card .av { width: 56px; height: 56px; border-radius: 14px;
    background: linear-gradient(135deg, rgba(255,107,44,0.2), rgba(77,217,255,0.1));
    border: 1px solid var(--line-strong); display: grid; place-items: center;
    font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 20px;
    color: var(--ink); margin-bottom: 16px; }
  .lead-card .name { font-family: 'Space Grotesk', sans-serif; font-weight: 600;
    font-size: 17px; color: var(--ink); }
  .lead-card .role { font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-faint); margin-top: 6px; }
  .lead-card .loc { font-size: 13px; color: var(--ink-dim); margin-top: 12px;
    display: flex; align-items: center; gap: 6px; }
  .lead-card .loc svg { color: var(--ink-faint); }
  .lead-card .tags { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 6px; }
  .lead-card .tag { font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--cyan-soft);
    padding: 4px 8px; border-radius: 6px; background: rgba(77,217,255,0.08); }
  @media (max-width: 1100px) { .grid-view { grid-template-columns: repeat(3, 1fr); } .network { height: 620px; } }
  @media (max-width: 700px) {
    .grid-view { grid-template-columns: 1fr 1fr; }
    .network { height: 560px; }
    .network .node { width: 56px; height: 56px; font-size: 16px; }
  }
  .view { display: none; }
  .view.show { display: block; }
  .view.grid-view.show { display: grid; }
`;

export default function CommunityLeadsPage() {
  return (
    <>
      <style>{css}</style>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><span className="line"></span>20 Community Leads · You are not alone<span className="line"></span></span>
          <h1 className="display">A <span className="grad-orange">network</span> of humans<br/>who&apos;ll help you ship.</h1>
          <p className="lead mt-3">Stuck on a graph query? Confused about the eval layer? Reach out to any of TigerGraph&apos;s 20 community leads. They answer in the WhatsApp group and run office hours through the hackathon.</p>
          <CommunityLeadsView />
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="mt-8 center" style={{ textAlign: 'center' }}>
            <span className="eyebrow"><span className="line"></span>Want to help the community?<span className="line"></span></span>
            <h2 className="mt-2" style={{ fontSize: 32 }}>Become a TigerGraph Community Lead.</h2>
            <p className="lead mt-3" style={{ margin: '16px auto 0' }}>Open roles in India, SEA, EMEA, and the US. Drop us a line.</p>
            <div className="mt-4">
              <a href="mailto:devanshu.saxena@tigergraph.com" className="btn btn-ghost">Write to Devanshu →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
