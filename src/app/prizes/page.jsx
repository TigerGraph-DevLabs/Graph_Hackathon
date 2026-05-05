import RegisterButton from '@/components/RegisterButton';
import { SITE } from '@/lib/site.config';

export const metadata = {
  title: 'Prizes',
  description: '$700 prize pool for the GraphRAG Inference Hackathon — $250 winner, $150 runner-up, $100 third, $100 community award, $100 content creation bounty. Plus TigerGraph recognition and certificates.',
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
  .judging-table { margin-top: 40px; border: 1px solid var(--line); border-radius: 14px;
    overflow: hidden; background: var(--card); }
  .judging-table table { width: 100%; border-collapse: collapse; }
  .judging-table thead th { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint);
    text-align: left; padding: 16px 24px; background: rgba(180,195,230,0.04);
    border-bottom: 1px solid var(--line); font-weight: 500; }
  .judging-table tbody tr { transition: background 0.2s ease; }
  .judging-table tbody tr + tr td { border-top: 1px solid var(--line); }
  .judging-table tbody tr:hover { background: rgba(255,107,44,0.03); }
  .judging-table td { padding: 18px 24px; vertical-align: top; }
  .judging-table .crit { font-family: 'Space Grotesk', sans-serif; font-weight: 600;
    font-size: 16px; color: var(--ink); white-space: nowrap; }
  .judging-table .wt { font-family: 'Space Grotesk', sans-serif; font-weight: 700;
    font-size: 20px; color: var(--orange-soft); letter-spacing: -0.02em; width: 110px; }
  .judging-table .desc { color: var(--ink-dim); font-size: 14.5px; line-height: 1.55; }
  @media (max-width: 800px) {
    .judging-table thead { display: none; }
    .judging-table table, .judging-table tbody, .judging-table tr, .judging-table td { display: block; }
    .judging-table tr { padding: 18px 20px; }
    .judging-table tr + tr { border-top: 1px solid var(--line); }
    .judging-table tbody tr + tr td { border-top: 0; }
    .judging-table td { padding: 0; }
    .judging-table .crit { font-size: 17px; margin-bottom: 4px; white-space: normal; }
    .judging-table .wt { font-size: 22px; margin: 6px 0 8px; width: auto; }
    .judging-table .desc { margin-top: 4px; }
  }

  .deliv { margin-top: 56px; padding: 36px 40px; border-radius: 16px;
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(180,195,230,0.03), transparent); }
  .deliv .head { display: flex; align-items: baseline; gap: 16px; flex-wrap: wrap; margin-bottom: 22px; }
  .deliv h3 { font-size: 22px; }
  .deliv .head .sub { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-faint); }
  .deliv ul { list-style: none; padding: 0; margin: 0;
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; }
  .deliv li { display: flex; align-items: flex-start; gap: 12px;
    color: var(--ink); font-size: 15px; line-height: 1.5; }
  .deliv li svg { flex-shrink: 0; color: var(--orange); margin-top: 3px; }
  .deliv li b { font-family: 'Space Grotesk', sans-serif; font-weight: 600; }
  .deliv li span { color: var(--ink-dim); font-size: 13.5px; margin-left: 4px; }
  @media (max-width: 700px) { .deliv { padding: 28px; } .deliv ul { grid-template-columns: 1fr; } }

  .repo-callout { margin-top: 40px; padding: 26px 32px;
    border-radius: 14px; border: 1px solid rgba(77,217,255,0.3);
    background: linear-gradient(135deg, rgba(77,217,255,0.06), rgba(255,107,44,0.03));
    display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
  .repo-callout .ico { width: 48px; height: 48px; border-radius: 12px;
    background: rgba(77,217,255,0.12); border: 1px solid rgba(77,217,255,0.35);
    display: grid; place-items: center; color: var(--cyan-soft); flex-shrink: 0; }
  .repo-callout .body { flex: 1; min-width: 260px; }
  .repo-callout .lbl { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--cyan-soft); }
  .repo-callout h3 { font-size: 19px; margin-top: 4px;
    font-family: 'JetBrains Mono', monospace; font-weight: 500; letter-spacing: -0.01em; }
  .repo-callout p { color: var(--ink-dim); margin-top: 6px; font-size: 14px; line-height: 1.55; }
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
          <span className="eyebrow"><span className="line"></span>Rewards · $700 cash pool · 5 tracks + content bounty<span className="line"></span></span>
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
              <p>Awarded to the team that builds the most compelling, production-ready three-pipeline benchmark — biggest verified token reduction, accuracy held or improved, and the clearest story told with their numbers.</p>
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
                <p>Strong execution across all three pipelines with clear, credible benchmarks and accuracy that holds vs Basic RAG.</p>
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
                <p>Strong graph utilization and efficient inference design — best use of multi-hop reasoning to keep tokens honest while accuracy holds.</p>
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
                <div className="rank">Content Creation Bounty · Separate sign-up</div>
                <div className="amt">$100</div>
                <div className="cur">≈ ₹9,399 INR</div>
                <h3>Content Bounty</h3>
                <p>Earn extra by sharing your hackathon journey. Create blog posts, social posts, video walkthroughs, or tutorials about your GraphRAG build and stand a chance to win a $100 bounty. Tag <b style={{ color: 'var(--ink)' }}>#GraphRAGInferenceHackathon</b> and <b style={{ color: 'var(--ink)' }}>@TigerGraph</b>. Sign up separately on Luma.</p>
                <div className="perks">
                  <a href={SITE.contentBountyUrl} target="_blank" rel="noopener" className="badge orange" style={{ textDecoration: 'none' }}>Sign up on Luma →</a>
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
            <p className="lead mt-3">Four weighted criteria, totalling 100%. Token reduction only counts if accuracy holds — a 70% token cut with 20% accuracy loss is a regression, not a win.</p>
            <div className="judging-table">
              <table>
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Weight</th>
                    <th>What we&apos;re looking for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="crit">Token Reduction</td>
                    <td className="wt">30%</td>
                    <td className="desc">% improvement in tokens and cost per query vs Basic RAG. Show us the numbers.</td>
                  </tr>
                  <tr>
                    <td className="crit">Answer Accuracy</td>
                    <td className="wt">30%</td>
                    <td className="desc">Quality maintained or improved vs Basic RAG. Evaluated with LLM-as-a-Judge + BERTScore.</td>
                  </tr>
                  <tr>
                    <td className="crit">Performance</td>
                    <td className="wt">20%</td>
                    <td className="desc">Latency, throughput, and overall system efficiency. A fast pipeline matters as much as a cheap one.</td>
                  </tr>
                  <tr>
                    <td className="crit">Engineering &amp; Storytelling</td>
                    <td className="wt">20%</td>
                    <td className="desc">Clean architecture, working dashboard, clear demo video, blog post that tells the story.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 28, padding: '24px 28px', borderRadius: 14,
              border: '1px solid rgba(255,107,44,0.28)',
              background: 'linear-gradient(135deg, rgba(255,107,44,0.06), rgba(77,217,255,0.03))' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange-soft)', marginBottom: 8 }}>Bonus points · Accuracy</div>
              <p style={{ color: 'var(--ink-dim)', fontSize: 14.5, lineHeight: 1.6 }}>
                Strong accuracy is heavily rewarded. Submissions hitting these bars earn extra points: <b style={{ color: 'var(--ink)' }}>LLM-as-a-Judge pass rate ≥ 90%</b> and <b style={{ color: 'var(--ink)' }}>BERTScore F1 rescaled ≥ 0.55</b> (or raw ≥ 0.88). Hitting both unlocks the maximum bonus.
              </p>
            </div>

            <div className="deliv">
              <div className="head">
                <h3>Required deliverables</h3>
                <span className="sub">All submissions go through Unstop</span>
              </div>
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Architecture diagram</b><span>— clean visual of your system</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Comparison dashboard</b><span>— side-by-side metrics for all 3 pipelines</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Benchmark report</b><span>— tokens, cost, latency, accuracy per pipeline</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Demo video</b><span>— 5–7 minute walkthrough</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Public GitHub repo</b><span>— built on the TigerGraph GraphRAG repo</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Blog post</b><span>— Medium, Hashnode, Dev.to, or your own</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Social media post</b><span>— LinkedIn / X · tag @TigerGraph #GraphRAGInferenceHackathon</span></div>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <div><b>Product feedback interview</b><span>— short call with TigerGraph (Top 5–10 only)</span></div>
                </li>
              </ul>
            </div>

            <div className="repo-callout">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.06c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .3z"/>
                </svg>
              </div>
              <div className="body">
                <div className="lbl">Reference implementation</div>
                <h3>github.com/tigergraph/graphrag</h3>
                <p>TigerGraph&apos;s official GraphRAG reference. Use it as your starting point for graph construction, entity + community identification, and multi-hop reasoning patterns. Clone, extend, benchmark.</p>
              </div>
              <a href="https://github.com/tigergraph/graphrag" target="_blank" rel="noopener" className="btn btn-cyan">Open repo →</a>
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
