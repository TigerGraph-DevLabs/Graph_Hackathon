import RegisterButton from '@/components/RegisterButton';

export const metadata = {
  title: 'Timeline',
  description: 'Timeline for the GraphRAG Inference Hackathon — registrations open Apr 24, build May 1–12, top-10 mentoring May 13–14, demos and winners May 15–16, 2026.',
};

const css = `
  .page-hero { padding: 96px 0 40px; position: relative; }
  .page-hero .eyebrow { margin-bottom: 18px; }
  .page-hero h1 { font-size: clamp(52px, 6vw, 88px); }
  .tl-wrap { position: relative; margin-top: 64px; padding: 40px 0; }
  .tl-rail { position: absolute; left: 48px; top: 40px; bottom: 40px; width: 2px;
    background: linear-gradient(180deg, transparent, var(--line-strong) 10%, var(--line-strong) 90%, transparent); }
  .tl-rail .flow-line { position: absolute; left: -1px; top: 0; bottom: 0; width: 4px;
    background: linear-gradient(180deg, var(--orange), var(--cyan)); opacity: 0.35; filter: blur(4px); }
  .tl-item { position: relative; padding-left: 120px; margin-bottom: 56px; }
  .tl-item .node { position: absolute; left: 30px; top: 20px; width: 38px; height: 38px;
    border-radius: 50%; background: var(--bg-1); border: 2px solid var(--line-strong);
    display: grid; place-items: center;
    font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 600;
    color: var(--ink-dim); z-index: 2; }
  .tl-item.active .node { background: linear-gradient(135deg, #FF7A3D, #FF6B2C); border-color: #FF8A4C;
    color: #1A0A02; box-shadow: 0 0 0 6px rgba(255,107,44,0.15), 0 0 24px rgba(255,107,44,0.5); }
  .tl-item.cyan .node { border-color: rgba(77, 217, 255, 0.5); color: var(--cyan); }
  .tl-card { padding: 32px; border-radius: 16px; border: 1px solid var(--line);
    background: var(--card); transition: all 0.25s ease; }
  .tl-card:hover { border-color: var(--line-strong); background: var(--card-hover); }
  .tl-item.active .tl-card { border-color: rgba(255, 107, 44, 0.3);
    background: linear-gradient(180deg, rgba(255, 107, 44, 0.06), transparent); }
  .tl-card .phase { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint); }
  .tl-item.active .tl-card .phase { color: var(--orange-soft); }
  .tl-card .dates { font-family: 'Space Grotesk', sans-serif; font-size: 15px; color: var(--ink-dim); margin-top: 4px; }
  .tl-card h3 { margin-top: 14px; font-size: 26px; }
  .tl-card p { color: var(--ink-dim); margin-top: 12px; line-height: 1.6; }
  .tl-card .meta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
  .tl-wrap .legend { margin-bottom: 32px; display: flex; gap: 24px;
    font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--ink-faint); }
  .legend-item { display: flex; align-items: center; gap: 8px; }
  .legend-item .dot { width: 10px; height: 10px; border-radius: 50%; }
  .legend-item.now .dot { background: var(--orange); box-shadow: 0 0 10px rgba(255,107,44,0.6); }
  .legend-item.up .dot { background: var(--cyan); }
  .legend-item.done .dot { background: transparent; border: 1.5px solid var(--ink-faint); }
`;

export default function TimelinePage() {
  return (
    <>
      <style>{css}</style>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><span className="line"></span>Timeline · 4 phases over 3 weeks<span className="line"></span></span>
          <h1 className="display">From registration<br/>to the <span className="grad-orange">winner&apos;s mic.</span></h1>
          <p className="lead mt-3">All timings in IST (UTC+5:30). Mark your calendar — each gate is non-negotiable.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="tl-wrap">
            <div className="legend">
              <div className="legend-item now"><span className="dot"></span>Active now</div>
              <div className="legend-item up"><span className="dot"></span>Upcoming</div>
              <div className="legend-item done"><span className="dot"></span>Future phase</div>
            </div>
            <div className="tl-rail"><div className="flow-line"></div></div>

            <div className="tl-item active">
              <div className="node">01</div>
              <div className="tl-card">
                <div className="phase">Phase 01 · Open</div>
                <div className="dates">Apr 24, 2026 — May 5, 2026 · 11:59 PM IST</div>
                <h3>Registrations &amp; Team Formation</h3>
                <p>Register your team on Unstop. Teams of 1–5, cross-institutional welcome. Join the WhatsApp group for announcements, find teammates, ask questions, and meet community leads.</p>
                <div className="meta">
                  <span className="badge orange">Registration deadline · May 5</span>
                  <span className="badge">Solo participation allowed</span>
                  <span className="badge">Free to enter</span>
                </div>
              </div>
            </div>

            <div className="tl-item cyan">
              <div className="node">02</div>
              <div className="tl-card">
                <div className="phase">Phase 02 · Build</div>
                <div className="dates">May 1, 2026 · 12:00 PM IST — May 12, 2026 · 11:59 PM IST</div>
                <h3>Building &amp; Submission</h3>
                <p>Build your dual-pipeline GraphRAG system — Baseline LLM vs Graph + LLM — plus the comparison dashboard. Submit all deliverables through Unstop before the deadline. Detailed submission guidelines will be shared separately with registered teams.</p>
                <div className="meta">
                  <span className="badge cyan">Dual pipeline required</span>
                  <span className="badge cyan">Dashboard with metrics</span>
                  <span className="badge">AI Factory architecture</span>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="node">03</div>
              <div className="tl-card">
                <div className="phase">Phase 03 · Shortlist &amp; Mentor</div>
                <div className="dates">May 13, 2026 — May 14, 2026</div>
                <h3>Top 10 Announced · 1:1 Mentoring</h3>
                <p>Top 10 teams are announced on May 12 and move forward to the final round. They receive 1:1 mentoring sessions with TigerGraph experts on May 13 and May 14 to refine their solutions before the final demos.</p>
                <div className="meta">
                  <span className="badge">Top 10 shortlist</span>
                  <span className="badge">1:1 expert mentoring</span>
                  <span className="badge">Refinement round</span>
                </div>
              </div>
            </div>

            <div className="tl-item">
              <div className="node">04</div>
              <div className="tl-card">
                <div className="phase">Phase 04 · Final Judging</div>
                <div className="dates">May 15, 2026 — May 16, 2026 · 12:00 PM IST</div>
                <h3>Live Demos &amp; Winner Announcement</h3>
                <p>On May 15, teams present live to the judging panel — demo the dual-pipeline system, showcase the benchmark dashboard, defend results in Q&amp;A. Winners announced May 16.</p>
                <div className="meta">
                  <span className="badge orange">Live demo · May 15</span>
                  <span className="badge orange">Winners · May 16</span>
                  <span className="badge">Judge Q&amp;A</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <RegisterButton>Register before May 5 →</RegisterButton>
          </div>
        </div>
      </section>
    </>
  );
}
