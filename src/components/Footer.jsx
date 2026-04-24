import { SITE } from '@/lib/site.config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/tigergraph-logo.png" alt="TigerGraph" />
          <p>The GraphRAG Inference Hackathon is an open benchmark proving that graphs make LLM inference faster, cheaper, and smarter.</p>
          <div className="row" style={{ marginTop: 18, gap: 10 }}>
            <span className="badge green">
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 10px rgba(52,211,153,0.9)' }}></span>
              Registrations open
            </span>
            <span className="badge">v1.0 · 2026</span>
          </div>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/timeline">Timeline</a></li>
            <li><a href="/prizes">Prizes</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h5>Community</h5>
          <ul>
            <li><a href="/community-leads">Community Leads</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/about">About TigerGraph</a></li>
            <li><a href={SITE.whatsappUrl} target="_blank" rel="noopener">WhatsApp Group</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></li>
            <li><a href={`tel:${SITE.contactPhone}`}>+91 74043 13376</a></li>
            <li><a href="https://tigergraph.com" target="_blank" rel="noopener">tigergraph.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TIGERGRAPH · GRAPHRAG HACKATHON</span>
        <span>MAY 1 — MAY 16, 2026 · ONLINE · GLOBAL</span>
      </div>
    </footer>
  );
}
