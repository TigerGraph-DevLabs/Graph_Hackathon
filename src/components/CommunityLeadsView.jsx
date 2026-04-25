'use client';
import { useEffect, useRef, useState } from 'react';

// 20 confirmed TigerGraph community leads, grouped by city.
// Inner ring (first 8) = the four hub cities × 2 leads each;
// outer ring (last 12) = the smaller-cohort cities.
const LEADS = [
  // Inner ring · 4 hub cities × 2
  { name: 'Amit Kumar Dubey',    role: 'Community Lead', loc: 'Delhi, IN',     tags: ['GraphRAG'] },
  { name: 'Kafeel Khan',         role: 'Community Lead', loc: 'Delhi, IN',     tags: ['GraphRAG'] },
  { name: 'Abdul Affou',         role: 'Community Lead', loc: 'Bangalore, IN', tags: ['GraphRAG'] },
  { name: 'Darshan Krishna',     role: 'Community Lead', loc: 'Bangalore, IN', tags: ['GraphRAG'] },
  { name: 'Jayant',              role: 'Community Lead', loc: 'Hyderabad, IN', tags: ['GraphRAG'] },
  { name: 'Saimanoj',            role: 'Community Lead', loc: 'Hyderabad, IN', tags: ['GraphRAG'] },
  { name: 'Prashant',            role: 'Community Lead', loc: 'Gurgaon, IN',   tags: ['GraphRAG'] },
  { name: 'Keshav',              role: 'Community Lead', loc: 'Gurgaon, IN',   tags: ['GraphRAG'] },
  // Outer ring · the rest
  { name: 'Pritu',               role: 'Community Lead', loc: 'Noida, IN',     tags: ['GraphRAG'] },
  { name: 'Aryan',               role: 'Community Lead', loc: 'Noida, IN',     tags: ['GraphRAG'] },
  { name: 'Almas',               role: 'Community Lead', loc: 'Pune, IN',      tags: ['GraphRAG'] },
  { name: 'Nandini',             role: 'Community Lead', loc: 'Mumbai, IN',    tags: ['GraphRAG'] },
  { name: 'Vama Shah',           role: 'Community Lead', loc: 'Mumbai, IN',    tags: ['GraphRAG'] },
  { name: 'Santosh Kumar Verma', role: 'Community Lead', loc: 'Jharkhand, IN', tags: ['GraphRAG'] },
  { name: 'Debojyoti',           role: 'Community Lead', loc: 'Kolkata, IN',   tags: ['GraphRAG'] },
  { name: 'Rohan Kumar',         role: 'Community Lead', loc: 'Kolkata, IN',   tags: ['GraphRAG'] },
  { name: 'Sriz',                role: 'Community Lead', loc: 'Kolkata, IN',   tags: ['GraphRAG'] },
  { name: 'Utkarsh Arjariya',    role: 'Community Lead', loc: 'Bhopal, IN',    tags: ['GraphRAG'] },
  { name: 'Shashwat Shukla',     role: 'Community Lead', loc: 'Bhopal, IN',    tags: ['GraphRAG'] },
  { name: 'Shubh',               role: 'Community Lead', loc: 'Jaipur, IN',    tags: ['GraphRAG'] },
];

const initials = (name) => name.split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();

export default function CommunityLeadsView() {
  const [view, setView] = useState('network');
  const netRef = useRef(null);

  // Compute network positions when network is visible + on resize
  useEffect(() => {
    if (view !== 'network') return;
    const place = () => {
      const net = netRef.current;
      if (!net) return;
      net.querySelectorAll('.node').forEach(n => n.remove());
      const w = net.clientWidth, h = net.clientHeight;
      const cx = w / 2, cy = h / 2;
      const r1 = Math.min(w, h) * 0.24;
      const r2 = Math.min(w, h) * 0.42;
      const positions = [];
      LEADS.slice(0, 8).forEach((p, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        positions.push({ x: cx + Math.cos(a) * r1, y: cy + Math.sin(a) * r1, p, ring: 1 });
      });
      LEADS.slice(8).forEach((p, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2 + 0.13;
        positions.push({ x: cx + Math.cos(a) * r2 * 1.15, y: cy + Math.sin(a) * r2 * 0.86, p, ring: 2 });
      });

      positions.forEach((pos, idx) => {
        const el = document.createElement('div');
        el.className = 'node' + (idx % 3 === 0 ? ' orange' : '');
        el.style.left = pos.x + 'px';
        el.style.top  = pos.y + 'px';
        el.innerHTML = `${initials(pos.p.name)}<span class="tip">${pos.p.name}<span class="role">${pos.p.role} · ${pos.p.loc}</span></span>`;
        net.appendChild(el);
      });

      const svg = net.querySelector('.edges');
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      const edges = svg.querySelector('#edges-g');
      const flows = svg.querySelector('#flow-g');
      edges.innerHTML = '';
      flows.innerHTML = '';
      positions.forEach((pos) => {
        edges.innerHTML += `<path d="M ${cx} ${cy} L ${pos.x} ${pos.y}" opacity="${pos.ring === 1 ? 0.6 : 0.4}"/>`;
      });
      for (let i = 0; i < 8; i++) {
        const a = positions[i], b = positions[(i + 1) % 8];
        edges.innerHTML += `<path d="M ${a.x} ${a.y} L ${b.x} ${b.y}" stroke="rgba(180,200,240,0.15)" opacity="0.7"/>`;
      }
      [0, 3, 6, 10, 14].forEach((i, k) => {
        const p = positions[i];
        const stroke = k % 2 === 0 ? '#FF8A4C' : '#4DD9FF';
        flows.innerHTML += `<path class="${k % 2 === 0 ? 'flow' : 'flow-slow'}" d="M ${cx} ${cy} L ${p.x} ${p.y}" stroke="${stroke}" stroke-width="1.3" opacity="0.9"/>`;
      });
    };
    place();
    const onResize = () => place();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [view]);

  return (
    <>
      <div className="view-toggle" role="tablist">
        <button type="button" className={view === 'network' ? 'active' : ''} onClick={() => setView('network')}>◉ Network</button>
        <button type="button" className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}>⊞ Grid</button>
      </div>

      <section className="tight">
        <div className="container">
          <div className={`view network-view ${view === 'network' ? 'show' : ''}`}>
            <div className="network" ref={netRef}>
              <svg className="edges" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="netE" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"  stopColor="#FF6B2C" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#4DD9FF" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                <g id="edges-g" stroke="url(#netE)" strokeWidth="1" fill="none"></g>
                <g id="flow-g" fill="none" strokeWidth="1.2" opacity="0.55"></g>
              </svg>
              <div className="hub" aria-hidden="true">
                <div className="core"><img src="/assets/tigergraph-logo.png" alt="" /></div>
              </div>
            </div>
          </div>

          <div className={`view grid-view ${view === 'grid' ? 'show' : ''}`}>
            {LEADS.map((l) => (
              <div key={l.name} className="lead-card">
                <div className="av">{initials(l.name)}</div>
                <div className="name">{l.name}</div>
                <div className="role">{l.role}</div>
                <div className="loc">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {l.loc}
                </div>
                <div className="tags">{l.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
