'use client';
import { useEffect } from 'react';
import { SITE } from '@/lib/site.config';

const css = `
  .page-hero { padding: 96px 0 32px; }
  .page-hero h1 { font-size: clamp(48px, 5.5vw, 80px); }
  .faq-layout { display: grid; grid-template-columns: 280px 1fr; gap: 56px; margin-top: 48px; }
  .faq-side { position: sticky; top: 88px; align-self: start; padding-top: 8px; }
  .faq-side h5 { font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em;
    color: var(--ink-faint); text-transform: uppercase; margin-bottom: 16px; }
  .faq-side a { display: block; padding: 10px 14px; border-radius: 8px;
    color: var(--ink-dim); font-size: 14px; margin-bottom: 4px;
    transition: all 0.2s ease; border-left: 2px solid transparent; }
  .faq-side a:hover { color: var(--ink); background: var(--card-hover); }
  .faq-side a.active { color: var(--orange-soft); border-left-color: var(--orange);
    background: rgba(255,107,44,0.06); }
  .faq-group { margin-bottom: 56px; }
  .faq-group .gh { display: flex; align-items: baseline; gap: 14px;
    margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--line); }
  .faq-group .gh .n { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    letter-spacing: 0.18em; color: var(--ink-faint); text-transform: uppercase; }
  .faq-group .gh h2 { font-size: clamp(24px, 2.8vw, 34px); }
  details { border: 1px solid var(--line); border-radius: 12px; background: var(--card);
    margin-bottom: 10px; overflow: hidden; transition: all 0.2s ease; }
  details:hover { border-color: var(--line-strong); }
  details[open] { background: var(--card-hover); border-color: rgba(255,107,44,0.25); }
  summary { list-style: none; padding: 20px 24px; cursor: pointer;
    display: flex; align-items: center; gap: 16px;
    font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 16px;
    color: var(--ink); user-select: none; }
  summary::-webkit-details-marker { display: none; }
  summary .q-ix { font-family: 'JetBrains Mono', monospace; font-size: 11px;
    color: var(--ink-faint); letter-spacing: 0.14em; min-width: 32px; }
  summary .q-t { flex: 1; }
  summary .caret { width: 28px; height: 28px; border-radius: 50%;
    background: rgba(180,195,230,0.06); display: grid; place-items: center;
    color: var(--ink-dim); transition: all 0.25s ease; flex-shrink: 0; }
  details[open] summary .caret { transform: rotate(45deg);
    background: rgba(255,107,44,0.15); color: var(--orange-soft); }
  .answer { padding: 4px 24px 22px 72px; color: var(--ink-dim);
    font-size: 15px; line-height: 1.65; }
  .answer a { color: var(--cyan-soft); text-decoration: underline;
    text-decoration-color: rgba(77,217,255,0.3); }
  .answer a:hover { text-decoration-color: var(--cyan); }
  .answer code { background: rgba(180,195,230,0.08); padding: 2px 6px;
    border-radius: 4px; font-size: 13px; }
  @media (max-width: 900px) {
    .faq-layout { grid-template-columns: 1fr; }
    .faq-side { position: static; }
    .answer { padding-left: 24px; }
  }
  .still { margin-top: 80px; padding: 40px; border-radius: 16px;
    border: 1px dashed var(--line-strong); background: rgba(180,195,230,0.02);
    display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 24px; }
  .still h3 { font-size: 22px; }
  .still p { color: var(--ink-dim); margin-top: 6px; font-size: 14.5px; }
  @media (max-width: 700px) { .still { grid-template-columns: 1fr; } }
`;

const Q = ({ ix, q, children, open = false }) => (
  <details open={open}>
    <summary><span className="q-ix">{ix}</span><span className="q-t">{q}</span><span className="caret">+</span></summary>
    <div className="answer">{children}</div>
  </details>
);

export default function FaqPage() {
  useEffect(() => {
    const sections = document.querySelectorAll('.faq-group');
    const sideLinks = document.querySelectorAll('.faq-side a');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          sideLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow"><span className="line"></span>FAQ · Fastest answers in the business<span className="line"></span></span>
          <h1 className="display">Everything you want<br/>to ask before you <span className="grad-orange">register.</span></h1>
          <p className="lead mt-3">Can&apos;t find yours? Drop it in the WhatsApp group or email Devanshu directly.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="faq-layout">
            <aside className="faq-side">
              <h5>Jump to</h5>
              <a href="#eligibility" className="active">Eligibility &amp; Teams</a>
              <a href="#build">Building &amp; Tech</a>
              <a href="#submission">Submission</a>
              <a href="#judging">Judging &amp; Prizes</a>
              <a href="#support">Support</a>
            </aside>

            <div>
              <div className="faq-group" id="eligibility">
                <div className="gh"><span className="n">01</span><h2>Eligibility &amp; Teams</h2></div>
                <Q ix="Q.01" q="Who can participate?" open>The hackathon is open to students and working professionals globally — beginners welcome. You don&apos;t need prior experience with TigerGraph or graph databases. If you know Python and have played with LLMs or APIs, you&apos;re ready to build.</Q>
                <Q ix="Q.02" q="How many people can be on a team?">1 to 5 members per team. Solo participation is allowed. Each participant can only be part of one team. Cross-institutional teams are welcome.</Q>
                <Q ix="Q.03" q="Is there a fee to participate?">No. Participation is completely free.</Q>
                <Q ix="Q.04" q="I don't have a team yet. What do I do?">Register solo on Unstop and join the <a href={SITE.whatsappUrl} target="_blank" rel="noopener">official WhatsApp group</a>. There&apos;s a dedicated channel where participants post skills and look for teammates.</Q>
                <Q ix="Q.05" q="What's the registration deadline?">May 5, 2026 · 11:59 PM IST. Building phase opens May 1 and runs through May 12. See the <a href="/timeline">full timeline</a>.</Q>
              </div>

              <div className="faq-group" id="build">
                <div className="gh"><span className="n">02</span><h2>Building &amp; Tech</h2></div>
                <Q ix="Q.06" q="What exactly do I need to build?">A working product with <b>two parallel pipelines</b> answering the same question: (1) a pure-LLM baseline and (2) a GraphRAG pipeline that uses TigerGraph for entity + relationship context. Plus a <b>comparison dashboard</b> that tracks tokens, response time, cost, and answer accuracy. Structure your solution using the <b>AI Factory</b> model — four separate layers.</Q>
                <Q ix="Q.07" q="Do I need to have used TigerGraph before?">No. TigerGraph is providing documentation, starter resources, and mentoring sessions for the Top 10 teams. The hackathon is designed to be beginner-friendly.</Q>
                <Q ix="Q.08" q="Which LLMs can I use?">Any LLM you want — OpenAI, Anthropic, open-source models via Hugging Face, local Ollama setups. Just be transparent about it in your submission and use the same model across both pipelines for a fair comparison.</Q>
                <Q ix="Q.09" q="What dataset should I use?">Your choice. Pick a domain where relationships matter — enterprise docs, research papers, product catalogs, legal, healthcare, financial filings. Detailed submission guidelines with recommended datasets will be shared with registered teams.</Q>
                <Q ix="Q.10" q="Are API credits provided?">Credit programs with LLM and cloud partners are being finalized. Registered teams will receive partner credits directly through the WhatsApp group and Unstop announcements.</Q>
                <Q ix="Q.11" q="Can I use existing open-source GraphRAG frameworks?">Yes, but the judging criteria weight <i>your</i> architecture, graph schema, and benchmark methodology. Wrapping someone else&apos;s framework with no modifications won&apos;t score well. Show the thinking.</Q>
              </div>

              <div className="faq-group" id="submission">
                <div className="gh"><span className="n">03</span><h2>Submission</h2></div>
                <Q ix="Q.12" q="Where do I submit?">All deliverables go through Unstop before May 12, 2026 · 11:59 PM IST. Detailed submission guidelines (required files, demo video length, dashboard format) will be shared with all registered teams.</Q>
                <Q ix="Q.13" q="What do I need to submit?">At minimum: source code (GitHub repo), a README with setup + architecture, a recorded demo of both pipelines and the dashboard, and a benchmark report with your metrics. Specifics will be in the participant guidelines.</Q>
                <Q ix="Q.14" q="Can I submit late?">No. The deadline is hard. Unstop closes submissions automatically at 11:59 PM IST on May 12.</Q>
              </div>

              <div className="faq-group" id="judging">
                <div className="gh"><span className="n">04</span><h2>Judging &amp; Prizes</h2></div>
                <Q ix="Q.15" q="How are teams judged?">Four criteria: architecture (clean AI Factory layers), meaningful graph use (multi-hop, entities + relationships doing real work), honest reproducible benchmarks, and dashboard clarity. See the <a href="/prizes">Prizes page</a>.</Q>
                <Q ix="Q.16" q="What happens after I'm in the Top 10?">Top 10 are announced May 12. You get 1:1 mentoring with TigerGraph experts on May 13–14 to sharpen your solution. On May 15 you present live to the judging panel. Winners announced May 16.</Q>
                <Q ix="Q.17" q="How are the prizes paid out?">Cash prizes are in USD and will be transferred to the team&apos;s designated account after the winner announcement on May 16. Certificates are delivered digitally.</Q>
              </div>

              <div className="faq-group" id="support">
                <div className="gh"><span className="n">05</span><h2>Support</h2></div>
                <Q ix="Q.18" q="Who do I contact for help?">Email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>, call <a href={`tel:${SITE.contactPhone}`}>+91 74043 13376</a>, or post in the <a href={SITE.whatsappUrl} target="_blank" rel="noopener">WhatsApp group</a>. Our 20 <a href="/community-leads">community leads</a> also help answer questions during the build phase.</Q>
                <Q ix="Q.19" q="Will there be office hours or workshops?">Yes. Live workshops on GraphRAG fundamentals and TigerGraph basics will be scheduled after registration closes. Details will be posted in the WhatsApp group and via Unstop.</Q>
                <Q ix="Q.20" q="Can I reuse my submission for another hackathon?">Your code stays yours. We only ask that the specific GraphRAG benchmark implementation was built during this hackathon&apos;s build window (May 1 – May 12, 2026). Prior libraries you authored are fine.</Q>
              </div>

              <div className="still">
                <div>
                  <h3>Still have a question?</h3>
                  <p>Easiest: drop it in the WhatsApp group — someone usually replies within the hour.</p>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener" className="btn btn-primary">Join WhatsApp →</a>
                  <a href={`mailto:${SITE.contactEmail}`} className="btn btn-ghost">Email Devanshu</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
