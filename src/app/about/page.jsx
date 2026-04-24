import RegisterButton from '@/components/RegisterButton';

export const metadata = {
  title: 'About TigerGraph',
  description: 'TigerGraph — the graph database built for real-time AI, GraphRAG, and enterprise-scale graph analytics. Host of the GraphRAG Inference Hackathon.',
};

const css = `
  .about-hero { padding: 120px 0 80px; position: relative; overflow: hidden; }
  .about-hero .bg-viz { position: absolute; inset: 0; z-index: 0; opacity: 0.6; }
  .about-hero .bg-viz svg { width: 100%; height: 100%; }
  .about-hero .bg-viz::after { content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 50%, transparent, rgba(5,7,14,0.8)); }
  .about-hero .wrap { position: relative; z-index: 2; max-width: 780px; }
  .about-hero h1 { font-size: clamp(52px, 6vw, 92px); }
  .about-hero p { font-size: clamp(18px, 1.5vw, 21px); color: var(--ink-dim); margin-top: 24px; line-height: 1.55; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  @media (max-width: 900px) { .two-col { grid-template-columns: 1fr; gap: 40px; } }
  .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
  .pillar { padding: 28px; border-radius: 14px; border: 1px solid var(--line);
    background: var(--card); transition: all 0.25s ease; }
  .pillar:hover { background: var(--card-hover); border-color: var(--line-strong); transform: translateY(-3px); }
  .pillar .ico { width: 44px; height: 44px; border-radius: 12px;
    background: rgba(255,107,44,0.1); color: var(--orange);
    display: grid; place-items: center; margin-bottom: 16px; }
  .pillar:nth-child(2) .ico { background: rgba(77,217,255,0.1); color: var(--cyan); }
  .pillar:nth-child(3) .ico { background: rgba(52,211,153,0.1); color: var(--green); }
  .pillar h4 { margin-bottom: 8px; font-size: 17px; }
  .pillar p { color: var(--ink-dim); font-size: 14px; line-height: 1.5; }
  @media (max-width: 900px) { .pillars { grid-template-columns: 1fr; } }
  .metric-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
    border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-top: 40px; }
  .metric-row .m { padding: 24px; border-right: 1px solid var(--line); }
  .metric-row .m:last-child { border-right: 0; }
  .metric-row .k { font-family: 'JetBrains Mono', monospace; font-size: 10px;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint); }
  .metric-row .v { font-family: 'Space Grotesk', sans-serif; font-weight: 700;
    font-size: 30px; letter-spacing: -0.02em; margin-top: 6px; }
  .metric-row .sub { color: var(--ink-dim); font-size: 13px; margin-top: 4px; }
  @media (max-width: 900px) { .metric-row { grid-template-columns: 1fr 1fr; } .metric-row .m:nth-child(2) { border-right: 0; } }
  .compare { margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 0;
    border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
  .compare .c-col { padding: 28px; position: relative; }
  .compare .c-col.baseline { background: rgba(180,195,230,0.02); border-right: 1px solid var(--line); }
  .compare .c-col.graph { background: linear-gradient(180deg, rgba(255,107,44,0.06), rgba(77,217,255,0.02)); }
  .compare .head { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.16em; color: var(--ink-faint); text-transform: uppercase; margin-bottom: 8px; }
  .compare .t { font-family: 'Space Grotesk', sans-serif; font-weight: 600;
    font-size: 22px; margin-bottom: 18px; }
  .compare .c-col.graph .t { color: var(--orange-soft); }
  .compare ul { list-style: none; padding: 0; margin: 0; }
  .compare ul li { display: flex; align-items: flex-start; gap: 10px;
    padding: 10px 0; border-bottom: 1px solid var(--line);
    color: var(--ink-dim); font-size: 14.5px; }
  .compare ul li:last-child { border-bottom: 0; }
  .compare ul li .chk { width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px; color: var(--ink-faint); }
  .compare .c-col.graph ul li .chk { color: var(--orange); }
  @media (max-width: 900px) {
    .compare { grid-template-columns: 1fr; }
    .compare .c-col.baseline { border-right: 0; border-bottom: 1px solid var(--line); }
  }
  .quote-block { padding: 40px; border-radius: 16px;
    background: linear-gradient(135deg, rgba(255,107,44,0.06), rgba(77,217,255,0.03));
    border: 1px solid var(--line-strong); margin-top: 64px; position: relative; }
  .quote-block::before { content: '\\201C'; position: absolute; top: 0; left: 32px;
    font-family: 'Space Grotesk', sans-serif; font-size: 120px; line-height: 1;
    color: var(--orange); opacity: 0.35; }
  .quote-block p { font-family: 'Space Grotesk', sans-serif; font-size: 22px;
    font-weight: 500; line-height: 1.45; color: var(--ink); position: relative; }
  .quote-block .attr { margin-top: 20px; font-family: 'JetBrains Mono', monospace;
    font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint); }
`;

export default function AboutPage() {
  return (
    <>
      <style>{css}</style>
      <section className="about-hero">
        <div className="bg-viz" aria-hidden="true">
          <svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="aO" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#FF8A4C" stopOpacity="0.8"/><stop offset="100%" stopColor="#FF6B2C" stopOpacity="0"/></radialGradient>
              <radialGradient id="aC" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#7FE7FF" stopOpacity="0.9"/><stop offset="100%" stopColor="#4DD9FF" stopOpacity="0"/></radialGradient>
              <linearGradient id="aE" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.6"/><stop offset="100%" stopColor="#4DD9FF" stopOpacity="0.4"/></linearGradient>
            </defs>
            <circle cx="1100" cy="250" r="260" fill="url(#aO)" opacity="0.4"/>
            <circle cx="1280" cy="120" r="180" fill="url(#aC)" opacity="0.45"/>
            <g stroke="url(#aE)" strokeWidth="1" fill="none" opacity="0.7">
              <path d="M 1100 250 L 900 120"/><path d="M 1100 250 L 1280 120"/>
              <path d="M 1100 250 L 1380 320"/><path d="M 1100 250 L 960 400"/>
              <path d="M 1100 250 L 820 240"/><path d="M 900 120 L 1280 120"/>
              <path d="M 1280 120 L 1380 320"/>
            </g>
            <g strokeWidth="1.4" fill="none">
              <path className="flow" d="M 1100 250 L 1280 120" stroke="#4DD9FF" opacity="0.85"/>
              <path className="flow-slow" d="M 1100 250 L 900 120" stroke="#FF6B2C" opacity="0.85"/>
            </g>
            <g>
              <circle cx="1100" cy="250" r="40" fill="url(#aO)" opacity="0.9"/>
              <circle cx="1100" cy="250" r="16" fill="#FF6B2C"/>
              <circle cx="1100" cy="250" r="6"  fill="#FFFFFF"/>
              <g className="node-pulse"><circle cx="900" cy="120" r="22" fill="url(#aO)" opacity="0.7"/><circle cx="900" cy="120" r="8" fill="#FF8A4C"/></g>
              <g className="node-pulse" style={{ animationDelay: '0.5s' }}><circle cx="1280" cy="120" r="24" fill="url(#aC)" opacity="0.75"/><circle cx="1280" cy="120" r="9" fill="#4DD9FF"/></g>
              <g className="node-pulse" style={{ animationDelay: '0.9s' }}><circle cx="1380" cy="320" r="20" fill="url(#aO)" opacity="0.65"/><circle cx="1380" cy="320" r="7" fill="#FF8A4C"/></g>
              <g className="node-pulse" style={{ animationDelay: '1.2s' }}><circle cx="960" cy="400" r="18" fill="url(#aC)" opacity="0.6"/><circle cx="960" cy="400" r="6" fill="#7FE7FF"/></g>
              <g className="node-pulse" style={{ animationDelay: '0.3s' }}><circle cx="820" cy="240" r="16" fill="url(#aO)" opacity="0.55"/><circle cx="820" cy="240" r="6" fill="#FF6B2C"/></g>
            </g>
          </svg>
        </div>
        <div className="container wrap">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <img src="/assets/tigergraph-logo.png" alt="TigerGraph" style={{ height: 32 }} />
            <span className="badge orange">About TigerGraph</span>
          </div>
          <h1 className="display">The graph database<br/>built for <span className="grad-orange">real-time AI.</span></h1>
          <p>TigerGraph is a distributed, scalable graph database platform used by enterprises to solve problems where <b style={{ color: 'var(--ink)' }}>relationships matter more than rows</b> — fraud detection, supply chain, recommendations, customer 360, and now, the frontier: GraphRAG.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow"><span className="line"></span>What TigerGraph does<span className="line"></span></span>
              <h2 className="mt-2">Deep-link analytics<br/>at production scale.</h2>
            </div>
            <div>
              <p className="lead">Most databases store things. TigerGraph stores <b style={{ color: 'var(--ink)' }}>how things connect</b> — and makes traversing those connections fast enough for real-time applications. Multi-hop queries that would time out in SQL return in milliseconds.</p>
              <p className="lead mt-3">The product has been battle-tested across banking, telecom, healthcare, and e-commerce — at scale, in production, against adversarial workloads.</p>
            </div>
          </div>

          <div className="pillars">
            <div className="pillar">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><line x1="8" y1="7.5" x2="16" y2="7.5"/><line x1="7" y1="8.5" x2="11" y2="15.5"/><line x1="17" y1="8.5" x2="13" y2="15.5"/></svg>
              </div>
              <h4>Native Graph Storage</h4>
              <p>Vertices and edges are first-class citizens — no shoehorning relationships into join tables.</p>
            </div>
            <div className="pillar">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18M13 3h8v8M21 13v8h-8M11 3H3v8M3 13v8h8"/></svg>
              </div>
              <h4>Multi-Hop at Speed</h4>
              <p>Traverse 5+ hops in milliseconds. The pattern that makes GraphRAG possible in production.</p>
            </div>
            <div className="pillar">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20h18M6 17V10M11 17V6M16 17v-9M21 17v-4"/></svg>
              </div>
              <h4>Scale Without Compromise</h4>
              <p>Distributed architecture handles billions of edges. The same engine powers demos and enterprise workloads.</p>
            </div>
          </div>

          <div className="metric-row">
            <div className="m"><div className="k">Deployed In</div><div className="v grad-orange">Fortune 500</div><div className="sub">banks, telcos, retail, healthcare</div></div>
            <div className="m"><div className="k">Graph Scale</div><div className="v">Billions</div><div className="sub">vertices &amp; edges in production</div></div>
            <div className="m"><div className="k">Query Latency</div><div className="v">Milliseconds</div><div className="sub">for deep multi-hop traversals</div></div>
            <div className="m"><div className="k">Dev Community</div><div className="v grad-cyan">Global</div><div className="sub">20+ community leads, growing</div></div>
          </div>
        </div>
      </section>

      <div className="graph-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <defs><linearGradient id="dv2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FF6B2C" stopOpacity="0"/><stop offset="50%" stopColor="#FF6B2C" stopOpacity="0.5"/><stop offset="100%" stopColor="#4DD9FF" stopOpacity="0"/></linearGradient></defs>
          <line x1="0" y1="60" x2="1440" y2="60" stroke="url(#dv2)" strokeWidth="1"/>
          <g><circle cx="300" cy="55" r="3" fill="#FF6B2C" opacity="0.7"/><circle cx="600" cy="65" r="3" fill="#4DD9FF" opacity="0.7"/><circle cx="900" cy="50" r="4" fill="#FF8A4C" opacity="0.8"/><circle cx="1200" cy="60" r="3" fill="#7FE7FF" opacity="0.7"/></g>
        </svg>
      </div>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow"><span className="line"></span>Why this hackathon<span className="line"></span></span>
              <h2 className="mt-2">Tokens are<br/><span className="grad-orange">expensive.</span></h2>
            </div>
            <div>
              <p className="lead">Every time an LLM answers a complex question, it burns through thousands of tokens trying to reason its way to the answer. At enterprise scale — millions of queries a day — that cost compounds brutally. Latency adds up. Margins shrink.</p>
              <p className="lead mt-3">Graphs offer a smarter path. By organizing information into <b style={{ color: 'var(--ink)' }}>relationships the model can actually follow</b>, graphs help LLMs focus on what matters — cutting tokens, speeding up responses, and saving cost, all without losing accuracy.</p>
              <p className="lead mt-3">This hackathon is your chance to <b style={{ color: 'var(--ink)' }}>prove that with real numbers</b>.</p>
            </div>
          </div>

          <div className="compare">
            <div className="c-col baseline">
              <div className="head">Baseline · Just LLM</div>
              <div className="t">What you get today</div>
              <ul>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Context window stuffed with everything relevant-ish</li>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Model reasons from scratch every time</li>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>High token count, high latency, high cost</li>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>Struggles with multi-entity relationship queries</li>
              </ul>
            </div>
            <div className="c-col graph">
              <div className="head">GraphRAG · Graph + LLM</div>
              <div className="t">What you can build this hackathon</div>
              <ul>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Only the relevant subgraph enters context</li>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Multi-hop structure handed to the model on a plate</li>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Dramatic drops in tokens, latency, and $/query</li>
                <li><svg className="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Accuracy stays intact — often goes up</li>
              </ul>
            </div>
          </div>

          <div className="quote-block">
            <p>Prove, with real numbers, exactly how much better inference gets when graphs enter the picture. That&apos;s the whole hackathon. Ship the benchmark. Settle the question.</p>
            <div className="attr">— The GraphRAG Inference Hackathon · TigerGraph · 2026</div>
          </div>

          <div className="mt-8" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <RegisterButton />
            <a href="https://tigergraph.com" target="_blank" rel="noopener" className="btn btn-cyan">Visit TigerGraph.com →</a>
          </div>
        </div>
      </section>
    </>
  );
}
