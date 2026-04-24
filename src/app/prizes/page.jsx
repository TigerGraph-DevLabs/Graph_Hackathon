import RegisterButton from '@/components/RegisterButton';

export const metadata = {
  title: 'Prizes',
  description: '$700 prize pool for the GraphRAG Inference Hackathon — $250 winner, $150 runner-up, $100 third, $100 community award, $100 best content creator. Plus TigerGraph recognition and certificates.',
};

const css = `
  .page-hero { padding: 96px 0 40px; }
  .page-hero h1 { font-size: clamp(52px, 6vw, 88px); }
  .prize-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 20px; margin-top: 48px; }
  .prize-grid .row-b { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; grid-column: 2 / 4; }
  .prize { padding: 40px; border-radius: 18px; border: 1px solid var(--line); background: var(--card);
    position: relative; overflow: hidden; display: flex; flex-direction: column; min-height: 340px;
    transition: all 0.3s ease; }
  .prize:hover { transform: translateY(-4px); border-color: var(--line-strong); }
  .prize .rank { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--ink-faint); margin-bottom: 14px; }
  .prize .amt { font-family: 'Space Grotesk', sans-serif; font-weight: 700; letter-spacing: -0.03em;
    line-height: 0.95; color: var(--ink); }
  .prize .cur { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--ink-dim); margin-top: 10px; }
  .prize h3 { margin-top: 24px; font-size: 22px; }
  .prize p { color: var(--ink-dim); margin-top: 10px; font-size: 14.5px; line-height: 1.55; }
  .prize .perks { margin-top: auto; padding-top: 24px; display: flex; flex-wrap: wrap; gap: 8px; }
  .prize.first { grid-row: span 1; min-height: 540px;
    background: radial-gradient(500px 300px at 80% 20%, rgba(255,107,44,0.18), transparent 60%),
                linear-gradient(180deg, rgba(255,107,44,0.08), rgba(255,107,44,0.02));
    border: 1px solid rgba(255,107,44,0.4); box-shadow: 0 30px 90px rgba(255,107,44,0.12); }
  .prize.first .amt { font-size: clamp(72px, 7vw, 104px); }
  .prize.first .amt.grad { color: transparent;
    background: linear-gradient(92deg, #FF6B2C 0%, #FF8A4C 45%, #FFB07A 100%);
    -webkit-background-clip: text; background-clip: text; }
  .prize.first h3 { font-size: 26px; }
  .prize.second .amt { font-size: clamp(52px, 4.5vw, 72px); }
  .prize.third .amt { font-size: clamp(44px, 4vw, 64px); }
  .prize.community { background: linear-gradient(180deg, rgba(77,217,255,0.06), rgba(77,217,255,0.02));
    border-color: rgba(77,217,255,0.3); }
  .prize.community .amt { font-size: clamp(44px, 4vw, 64px); color: var(--cyan-soft); }
  .prize.creator { background: linear-gradient(180deg, rgba(255,107,44,0.06), rgba(255,107,44,0.02));
    border-color: rgba(255,107,44,0.3); }
  .prize.creator .amt { font-size: clamp(44px, 4vw, 64px); color: var(--orange-soft); }
  .prize .crown { position: absolute; top: 28px; right: 28px; width: 52px; height: 52px;
    border-radius: 14px; background: rgba(255,107,44,0.18); border: 1px solid rgba(255,107,44,0.35);
    display: grid; place-items: center; color: var(--orange-soft); }
  .prize.community .crown { background: rgba(77,217,255,0.15); border-color: rgba(77,217,255,0.35); color: var(--cyan-soft); }
  .part-row { margin-top: 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .part-card { padding: 28px; border-radius: 14px; border: 1px dashed var(--line-strong);
    background: transparent; display: flex; gap: 20px; align-items: center; }
  .part-card .ico { width: 56px; height: 56px; border-radius: 14px;
    background: rgba(180,195,230,0.05); display: grid; place-items: center;
    color: var(--ink-dim); flex-shrink: 0; }
  .part-card h4 { font-size: 18px; }
  .part-card p { color: var(--ink-dim); margin-top: 4px; font-size: 14px; }
  @media (max-width: 900px) {
    .prize-grid { grid-template-columns: 1fr; }
    .prize-grid .row-b { grid-column: auto; grid-template-columns: 1fr; }
    .part-row { grid-template-columns: 1fr; }
  }
  .judging { margin-top: 80px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 16px; }
  .judging .jc { padding: 24px; border-radius: 12px; background: var(--card); border: 1px solid var(--line); }
  .judging .jc .k { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--ink-faint); margin-bottom: 8px; }
  .judging .jc .v { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 16px; }
  .judging .jc p { color: var(--ink-dim); margin-top: 8px; font-size: 13px; line-height: 1.5; }
  @media (max-width: 900px) { .judging { grid-template-columns: 1fr 1fr; } }
`;

const TrophySvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4z"/>
    <path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3"/>
  </svg>
);

const MedalSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="5"/><path d="M8 13l-2 8 6-3 6 3-2-8"/>
  </svg>
);

export default function PrizesPage() {
  return (
    <>
      <style>{css}</style>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><span className="line"></span>Rewards · $700 cash pool · 5 tracks<span className="line"></span></span>
          <h1 className="display">Build it well.<br/><span className="grad-orange">Walk away with cash.</span></h1>
          <p className="lead mt-3">Win from a $700 prize pool across five tracks, plus TigerGraph recognition and certificates for all participants.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="prize-grid">
            <div className="prize first">
              <div className="crown"><TrophySvg /></div>
              <div className="rank">🏆 Winner · 1st Place</div>
              <div className="amt grad">$250</div>
              <div className="cur">≈ ₹23,499 INR</div>
              <h3>Best GraphRAG Inference System</h3>
              <p>Awarded to the team that builds the most compelling, production-ready dual-pipeline system with the sharpest benchmark dashboard — and tells the clearest story with their numbers.</p>
              <div className="perks">
                <span className="badge orange">Cash prize</span>
                <span className="badge orange">Winner certificate</span>
                <span className="badge">TigerGraph recognition</span>
                <span className="badge">Feature on TigerGraph channels</span>
              </div>
            </div>

            <div className="row-b">
              <div className="prize second">
                <div className="crown" style={{ background: 'rgba(180,195,230,0.06)', borderColor: 'var(--line-strong)', color: 'var(--ink-dim)' }}><MedalSvg /></div>
                <div className="rank">1st Runner-Up · 2nd Place</div>
                <div className="amt">$150</div>
                <div className="cur">≈ ₹14,099 INR</div>
                <h3>Outstanding Implementation</h3>
                <p>Strong execution across all four AI Factory layers with clear, credible benchmarks.</p>
                <div className="perks">
                  <span className="badge">Cash prize</span>
                  <span className="badge">Runner-up certificate</span>
                </div>
              </div>

              <div className="prize third">
                <div className="crown" style={{ background: 'rgba(180,195,230,0.06)', borderColor: 'var(--line-strong)', color: 'var(--ink-dim)' }}><MedalSvg /></div>
                <div className="rank">2nd Runner-Up · 3rd Place</div>
                <div className="amt">$100</div>
                <div className="cur">≈ ₹9,399 INR</div>
                <h3>Strong Graph Utilization</h3>
                <p>Best use of multi-hop reasoning and graph-aware retrieval to keep token counts honest.</p>
                <div className="perks">
                  <span className="badge">Cash prize</span>
                  <span className="badge">3rd place certificate</span>
                </div>
              </div>

              <div className="prize community">
                <div className="crown">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="rank">TigerGraph Community Leads&apos; Exclusive</div>
                <div className="amt">$100</div>
                <div className="cur">≈ ₹9,399 INR</div>
                <h3>Creativity, Innovation &amp; Community Spirit</h3>
                <p>A special award picked by TigerGraph&apos;s community leads — for the team that surprises us with the most creative angle, or who shows up for the community along the way.</p>
                <div className="perks">
                  <span className="badge cyan">Cash prize</span>
                  <span className="badge cyan">Community certificate</span>
                </div>
              </div>

              <div className="prize creator">
                <div className="crown" style={{ background: 'rgba(255,107,44,0.18)', borderColor: 'rgba(255,107,44,0.35)', color: 'var(--orange-soft)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </div>
                <div className="rank">Best Content Creator · Build-in-Public</div>
                <div className="amt">$100</div>
                <div className="cur">≈ ₹9,399 INR</div>
                <h3>Best Hackathon Storytelling</h3>
                <p>For the participant or team who documents the journey best — threads, blog posts, demo videos, dev-logs. Substance and craft both count. Tag <b style={{ color: 'var(--ink)' }}>#GraphRAGHackathon</b> and <b style={{ color: 'var(--ink)' }}>@TigerGraphDB</b> so we can find it.</p>
                <div className="perks">
                  <span className="badge orange">Cash prize</span>
                  <span className="badge orange">Creator certificate</span>
                  <span className="badge">Reshared by TigerGraph</span>
                </div>
              </div>
            </div>
          </div>

          <div className="part-row">
            <div className="part-card">
              <div className="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5V3M17 5V3M3 9h18"/>
                </svg>
              </div>
              <div>
                <h4>Appreciation Certificates</h4>
                <p>All Top 10 teams receive appreciation certificates from TigerGraph.</p>
              </div>
            </div>
            <div className="part-card">
              <div className="ico"><MedalSvg /></div>
              <div>
                <h4>Participation Certificates</h4>
                <p>Every participant who submits a valid solution receives a digital participation certificate.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 100 }}>
            <span className="eyebrow"><span className="line"></span>What judges look for<span className="line"></span></span>
            <h2 className="mt-2">Judging criteria</h2>
            <p className="lead mt-3">Build something that would survive Monday morning in a real engineering org.</p>
            <div className="judging">
              <div className="jc"><div className="k">01 · Architecture</div><div className="v">Clean AI Factory layers</div><p>Separation of Graph, Orchestration, LLM and Eval layers. Clear seams.</p></div>
              <div className="jc"><div className="k">02 · Graph use</div><div className="v">Meaningful graph reasoning</div><p>Multi-hop retrieval, entities + relationships doing real work — not cosmetics.</p></div>
              <div className="jc"><div className="k">03 · Benchmarks</div><div className="v">Honest, reproducible</div><p>Tokens, latency, cost, accuracy. Numbers you&apos;d put in a pull request.</p></div>
              <div className="jc"><div className="k">04 · Dashboard</div><div className="v">Clarity of story</div><p>A side-by-side scoreboard a non-engineer would trust on first glance.</p></div>
            </div>
          </div>

          <div className="mt-8" style={{ textAlign: 'center' }}>
            <RegisterButton />
          </div>
        </div>
      </section>
    </>
  );
}
