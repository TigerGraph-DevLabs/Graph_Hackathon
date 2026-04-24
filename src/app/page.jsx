import Countdown from '@/components/Countdown';
import RegisterButton from '@/components/RegisterButton';
import { SITE } from '@/lib/site.config';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'GraphRAG Inference Hackathon',
  startDate: '2026-05-01T12:00:00+05:30',
  endDate:   '2026-05-16T12:00:00+05:30',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: { '@type': 'VirtualLocation', url: SITE.unstopUrl },
  organizer: { '@type': 'Organization', name: 'TigerGraph', url: 'https://tigergraph.com' },
  offers: {
    '@type': 'Offer', price: '0', priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    validThrough: '2026-05-05T23:59:00+05:30',
    url: SITE.unstopUrl,
  },
  description: 'An open benchmark proving graphs make LLM inference faster, cheaper, and smarter. Build a dual-pipeline GraphRAG system, benchmark it, publish the numbers.',
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="hero-a">
        <div className="bg"></div>
        <svg className="hero-viz" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <radialGradient id="nodeGlowOrange" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF8A4C" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="nodeGlowCyan" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7FE7FF" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4DD9FF" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0"/>
              <stop offset="50%" stopColor="#7FE7FF" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#4DD9FF" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <g className="viz-edges" stroke="url(#edgeGrad)" strokeWidth="0.8" fill="none" opacity="0.55">
            <path d="M 120 180 L 340 260 L 560 150 L 780 330 L 980 200 L 1180 380 L 1380 260"/>
            <path d="M 200 640 L 420 520 L 600 680 L 820 540 L 1020 700 L 1240 580 L 1420 720"/>
            <path d="M 340 260 L 420 520"/><path d="M 560 150 L 600 680"/>
            <path d="M 780 330 L 820 540"/><path d="M 980 200 L 1020 700"/>
            <path d="M 1180 380 L 1240 580"/><path d="M 120 180 L 200 640"/>
            <path d="M 1380 260 L 1420 720"/><path d="M 340 260 L 780 330"/>
            <path d="M 600 680 L 1020 700"/>
          </g>
          <g className="viz-pulses">
            <circle className="pulse p1" r="3" fill="#7FE7FF"/>
            <circle className="pulse p2" r="3" fill="#FF8A4C"/>
            <circle className="pulse p3" r="2.5" fill="#7FE7FF"/>
          </g>
          <g className="viz-nodes">
            <circle cx="120" cy="180" r="28" fill="url(#nodeGlowOrange)"/>
            <circle cx="560" cy="150" r="24" fill="url(#nodeGlowCyan)"/>
            <circle cx="980" cy="200" r="32" fill="url(#nodeGlowOrange)"/>
            <circle cx="1380" cy="260" r="22" fill="url(#nodeGlowCyan)"/>
            <circle cx="420" cy="520" r="26" fill="url(#nodeGlowCyan)"/>
            <circle cx="820" cy="540" r="30" fill="url(#nodeGlowOrange)"/>
            <circle cx="1240" cy="580" r="24" fill="url(#nodeGlowCyan)"/>
            <circle cx="200" cy="640" r="22" fill="url(#nodeGlowOrange)"/>
            <circle cx="1420" cy="720" r="26" fill="url(#nodeGlowCyan)"/>
            <circle className="n" cx="120" cy="180" r="3.5" fill="#FF8A4C"/>
            <circle className="n" cx="340" cy="260" r="2.5" fill="#B4C3E6" opacity="0.7"/>
            <circle className="n" cx="560" cy="150" r="3"   fill="#7FE7FF"/>
            <circle className="n" cx="780" cy="330" r="2.5" fill="#B4C3E6" opacity="0.7"/>
            <circle className="n" cx="980" cy="200" r="4"   fill="#FF8A4C"/>
            <circle className="n" cx="1180" cy="380" r="2.5" fill="#B4C3E6" opacity="0.7"/>
            <circle className="n" cx="1380" cy="260" r="3"   fill="#7FE7FF"/>
            <circle className="n" cx="200" cy="640" r="3"   fill="#FF8A4C"/>
            <circle className="n" cx="420" cy="520" r="3.5" fill="#7FE7FF"/>
            <circle className="n" cx="600" cy="680" r="2.5" fill="#B4C3E6" opacity="0.7"/>
            <circle className="n" cx="820" cy="540" r="4"   fill="#FF8A4C"/>
            <circle className="n" cx="1020" cy="700" r="2.5" fill="#B4C3E6" opacity="0.7"/>
            <circle className="n" cx="1240" cy="580" r="3"   fill="#7FE7FF"/>
            <circle className="n" cx="1420" cy="720" r="3.5" fill="#7FE7FF"/>
          </g>
        </svg>

        <div className="token-rain" aria-hidden="true">
          <span className="col c1">0x7f<br/>node<br/>edge<br/>1.9s<br/>−83%<br/>graph<br/>$0.019<br/>2140<br/>hop<br/>join<br/>ctx<br/>k=3</span>
          <span className="col c2">rel<br/>idx<br/>12840<br/>$0.128<br/>8.4s<br/>tok<br/>llm<br/>ctx<br/>chunk<br/>pad<br/>vec<br/>cos</span>
          <span className="col c3">Δ<br/>−77%<br/>−85%<br/>qps<br/>ms<br/>β<br/>hit<br/>miss<br/>top<br/>rank<br/>sim<br/>=</span>
        </div>

        <div className="container wrap">
          <div>
            <span className="tag">
              <span className="chev">›</span>
              <span className="t"><span className="dim">Prove</span> <em>Graph</em> <span className="dim">Beats</span> <em>Tokens</em>.</span>
            </span>
            <h1 className="display">
              GraphRAG <span className="grad-orange">Inference</span><br/>Hackathon
            </h1>
            <p className="sub">
              A beginner-friendly online coding challenge to prove that graphs make LLM inference faster, cheaper, and smarter. Build a dual-pipeline system. Benchmark it. Publish the numbers.
            </p>
            <div className="actions">
              <RegisterButton>Register on Unstop <span>→</span></RegisterButton>
              <a href="/timeline" className="btn btn-ghost">View Timeline</a>
            </div>
            <div className="meta-row">
              <div className="m"><span className="k">Dates</span><span className="v">May 1 — May 16, 2026</span></div>
              <div className="m"><span className="k">Prize Pool</span><span className="v">$700 · ₹65,795</span></div>
              <div className="m"><span className="k">Team</span><span className="v">1 – 5 Members</span></div>
              <div className="m"><span className="k">Where</span><span className="v">Online · Global</span></div>
            </div>
          </div>

          <div className="console">
            <div className="console-head">
              <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
              <span className="title">graphrag — benchmark.py</span>
              <span className="status">Running</span>
            </div>
            <div className="console-body">
              <div className="console-q">
                <span className="prompt">$</span>&quot;Which departments had the largest revenue growth QoQ, and what product launches correlate with them?&quot;
              </div>
              <div className="pipes">
                <div className="pipe-card baseline">
                  <div className="pk">Pipeline 01 · Baseline</div>
                  <div className="pn">Just LLM</div>
                  <div className="metrics">
                    <div className="metric"><span className="mk">Tokens</span><span className="mv">12,840</span></div>
                    <div className="bar"><span style={{ width: '92%' }}></span></div>
                    <div className="metric"><span className="mk">Latency</span><span className="mv">8.4s</span></div>
                    <div className="bar"><span style={{ width: '84%' }}></span></div>
                    <div className="metric"><span className="mk">Cost</span><span className="mv">$0.128</span></div>
                    <div className="bar"><span style={{ width: '88%' }}></span></div>
                  </div>
                </div>
                <div className="pipe-card graph">
                  <div className="pk">Pipeline 02 · GraphRAG</div>
                  <div className="pn">Graph + LLM</div>
                  <div className="metrics">
                    <div className="metric"><span className="mk">Tokens</span><span className="mv">2,140</span></div>
                    <div className="bar"><span style={{ width: '18%' }}></span></div>
                    <div className="metric"><span className="mk">Latency</span><span className="mv">1.9s</span></div>
                    <div className="bar"><span style={{ width: '22%' }}></span></div>
                    <div className="metric"><span className="mk">Cost</span><span className="mv">$0.019</span></div>
                    <div className="bar"><span style={{ width: '15%' }}></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="console-footer">
              <span>Δ tokens <b>−83%</b> · Δ cost <b>−85%</b> · Δ latency <b>−77%</b></span>
              <span>v1.0 · EXAMPLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* DUAL PIPELINE */}
      <section className="hair">
        <div className="container">
          <div>
            <span className="eyebrow"><span className="line"></span>What you&apos;ll build<span className="line"></span></span>
            <h2 className="mt-2">Two pipelines.<br/><span className="grad-cyan">One question.</span> A scoreboard that settles it.</h2>
            <p className="lead mt-3">Your mission is a working product with two parallel pipelines answering the same prompt — plus a dashboard that compares them head-to-head on tokens, latency, cost, and accuracy.</p>
          </div>

          <div className="dual mt-6">
            <div className="dual-card">
              <span className="badge">Pipeline 01</span>
              <h3 style={{ marginTop: 14 }}>The Baseline</h3>
              <div className="who">Just the LLM</div>
              <p>Send a prompt. The LLM answers. Simple and direct — but every nuance costs tokens, and at scale that cost adds up. This is your control group.</p>
              <div className="flow">
                <div className="step"><span className="n">1</span><span className="t">User prompt</span><span className="d">input</span></div>
                <div className="step"><span className="n">2</span><span className="t">LLM reasons over full context</span><span className="d">expensive</span></div>
                <div className="step"><span className="n">3</span><span className="t">Final answer</span><span className="d">output</span></div>
              </div>
            </div>

            <div className="vs" aria-hidden="true"><div className="line"></div><span>VS</span><div className="line"></div></div>

            <div className="dual-card graph">
              <span className="badge orange">Pipeline 02</span>
              <h3 style={{ marginTop: 14 }}>GraphRAG</h3>
              <div className="who">Graph + LLM</div>
              <p>Your prompt runs through TigerGraph first — pulling the relevant subgraph and mapping multi-hop connections. The LLM generates its answer from filtered, structured context.</p>
              <div className="flow">
                <div className="step"><span className="n">1</span><span className="t">User prompt</span><span className="d">input</span></div>
                <div className="step"><span className="n">2</span><span className="t">TigerGraph extracts relevant subgraph</span><span className="d">graph</span></div>
                <div className="step"><span className="n">3</span><span className="t">Multi-hop reasoning over entities</span><span className="d">graph</span></div>
                <div className="step"><span className="n">4</span><span className="t">LLM composes answer from structured ctx</span><span className="d">cheap</span></div>
                <div className="step"><span className="n">5</span><span className="t">Final answer</span><span className="d">output</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* graph divider */}
      <div className="graph-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="divGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0"/>
              <stop offset="50%" stopColor="#FF6B2C" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#4DD9FF" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="60" x2="1440" y2="60" stroke="url(#divGrad)" strokeWidth="1"/>
          <g fill="none" stroke="url(#divGrad)" strokeWidth="1" opacity="0.55">
            <path className="flow" d="M 120 60 L 300 40 L 500 60 L 720 30 L 940 60 L 1160 50 L 1320 60"/>
          </g>
          <g>
            <circle cx="200"  cy="55" r="3" fill="#FF6B2C" opacity="0.7"/>
            <circle cx="400"  cy="65" r="3" fill="#4DD9FF" opacity="0.7"/>
            <circle cx="620"  cy="45" r="4" fill="#FF8A4C" opacity="0.8"/>
            <circle cx="820"  cy="60" r="3" fill="#7FE7FF" opacity="0.7"/>
            <circle cx="1040" cy="55" r="3" fill="#FF6B2C" opacity="0.7"/>
            <circle cx="1260" cy="65" r="3" fill="#4DD9FF" opacity="0.7"/>
          </g>
        </svg>
      </div>

      {/* AI FACTORY */}
      <section>
        <div className="container">
          <div>
            <span className="eyebrow"><span className="line"></span>Architecture<span className="line"></span></span>
            <h2 className="mt-2">Follow the <span className="grad-orange">AI Factory</span> model.</h2>
            <p className="lead mt-3">Four separate layers — scalable, reusable, and ready for real production. This is what the judges are looking for.</p>
          </div>

          <div className="factory">
            <div className="layer">
              <div className="num">01</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/>
                  <line x1="8" y1="7.5" x2="16" y2="7.5"/><line x1="7" y1="8.5" x2="11" y2="15.5"/><line x1="17" y1="8.5" x2="13" y2="15.5"/>
                </svg>
              </div>
              <h4>Graph Layer</h4>
              <p>TigerGraph handles entity extraction, relationships, and graph queries.</p>
            </div>
            <div className="layer">
              <div className="num">02</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="7" width="18" height="13" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 13l3 3 5-5"/>
                </svg>
              </div>
              <h4>Inference Orchestration</h4>
              <p>Decides when to use graph, when to call the LLM, and how they cooperate.</p>
            </div>
            <div className="layer">
              <div className="num">03</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z"/>
                </svg>
              </div>
              <h4>LLM Layer</h4>
              <p>Generates the final answer using filtered, structured context from the graph.</p>
            </div>
            <div className="layer">
              <div className="num">04</div>
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 20h18M6 17V10M11 17V6M16 17v-9M21 17v-4"/>
                </svg>
              </div>
              <h4>Evaluation Layer</h4>
              <p>Runs the benchmarks and populates your comparison dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="tight">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="k">Prize Pool</div>
              <div className="v grad-orange">$700</div>
              <div className="sub">+ TigerGraph recognition</div>
            </div>
            <div className="stat">
              <div className="k">Team Size</div>
              <div className="v">1 – 5</div>
              <div className="sub">Solo allowed · cross-institutional welcome</div>
            </div>
            <div className="stat">
              <div className="k">Duration</div>
              <div className="v">16 Days</div>
              <div className="sub">May 1 — May 16, 2026</div>
            </div>
            <div className="stat">
              <div className="k">Level</div>
              <div className="v grad-cyan">Beginner</div>
              <div className="sub">No prior graph experience required</div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="tight">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow"><span className="line"></span>Registration closes<span className="line"></span></span>
          <h2 className="mt-2">Every hour matters.</h2>
          <p className="lead mt-3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Registrations close <b style={{ color: 'var(--ink)' }}>May 5, 2026 · 11:59 PM IST</b>. Don&apos;t be the team still reading docs on day one.
          </p>
          <div className="mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <Countdown />
          </div>
          <div className="mt-4">
            <RegisterButton />
          </div>
        </div>
      </section>

      {/* WHO */}
      <section>
        <div className="container">
          <div>
            <span className="eyebrow"><span className="line"></span>Who should build<span className="line"></span></span>
            <h2 className="mt-2">Built for builders at any level.</h2>
          </div>
          <div className="who-grid mt-6">
            <div className="who-card">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14v7M5 9.5V15l7 4 7-4V9.5"/></svg>
              </div>
              <h4>Students</h4>
              <p>Exploring GenAI for the first time. We&apos;ll provide docs, starter code, and mentoring for the Top 10.</p>
            </div>
            <div className="who-card">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h4>Developers</h4>
              <p>Curious about graph databases. If you know Python and have poked at LLMs or APIs, you&apos;re ready to build.</p>
            </div>
            <div className="who-card">
              <div className="ico">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>
              </div>
              <h4>AI Engineers</h4>
              <p>Building production RAG. Push past vector-only retrieval — ship a graph-aware inference stack with real benchmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZE PREVIEW */}
      <section className="hair">
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
            <div>
              <span className="eyebrow"><span className="line"></span>Rewards<span className="line"></span></span>
              <h2 className="mt-2">$700 pool. Real recognition.</h2>
            </div>
            <a href="/prizes" className="btn btn-ghost">All Prizes →</a>
          </div>

          <div className="prize-prev mt-6">
            <div className="pc first">
              <div>
                <div className="rank">🏆 Winner · 1st Place</div>
                <div className="amt mt-2">$250</div>
                <div className="title">Best GraphRAG Inference System</div>
              </div>
              <div className="dim" style={{ fontSize: 13, marginTop: 16 }}>+ Certificate · TigerGraph recognition</div>
            </div>
            <div className="pc">
              <div className="rank">2nd Place</div>
              <div className="amt mt-2">$150</div>
              <div className="title">Runner-Up</div>
            </div>
            <div className="pc">
              <div className="rank">3rd Place</div>
              <div className="amt mt-2">$100</div>
              <div className="title">2nd Runner-Up</div>
            </div>
            <div className="pc">
              <div className="rank">Community Award</div>
              <div className="amt mt-2">$100</div>
              <div className="title">Community Leads&apos; Choice</div>
            </div>
            <div className="pc">
              <div className="rank">Content Creator</div>
              <div className="amt mt-2">$100</div>
              <div className="title">Best Build-in-Public Story</div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE PREVIEW */}
      <section>
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <span className="eyebrow"><span className="line"></span>Timeline<span className="line"></span></span>
              <h2 className="mt-2">From registration to the winner&apos;s mic.</h2>
            </div>
            <a href="/timeline" className="btn btn-ghost">Full Timeline →</a>
          </div>

          <div className="tl-prev mt-6">
            <div className="tl-node active">
              <div className="dot"></div>
              <div className="phase">Phase 01</div>
              <div className="date">Apr 24 — May 5</div>
              <div className="desc">Registrations open. Join the WhatsApp group, find teammates.</div>
            </div>
            <div className="tl-node">
              <div className="dot"></div>
              <div className="phase">Phase 02</div>
              <div className="date">May 1 — May 12</div>
              <div className="desc">Build your dual-pipeline system. Submit on Unstop before 11:59 PM IST.</div>
            </div>
            <div className="tl-node">
              <div className="dot"></div>
              <div className="phase">Phase 03</div>
              <div className="date">May 13 — May 14</div>
              <div className="desc">Top 10 teams get 1:1 mentoring with TigerGraph experts.</div>
            </div>
            <div className="tl-node">
              <div className="dot"></div>
              <div className="phase">Phase 04</div>
              <div className="date">May 15 — May 16</div>
              <div className="desc">Live demos, Q&amp;A, and winners announced.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="tight">
        <div className="container">
          <div style={{
            padding: 64, borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(255,107,44,0.10), rgba(77,217,255,0.06))',
            border: '1px solid rgba(255,107,44,0.25)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <h2>Ship the benchmark.<br/><span className="grad-orange">Settle the question.</span></h2>
            <p className="lead mt-3" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Show, with real numbers, exactly how much better inference gets when graphs enter the picture.</p>
            <div className="row mt-4" style={{ justifyContent: 'center' }}>
              <RegisterButton />
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener" className="btn btn-cyan">Join WhatsApp Group</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
