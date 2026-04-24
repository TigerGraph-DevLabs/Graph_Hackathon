'use client';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site.config';

function diffParts(targetMs) {
  const diff = targetMs - Date.now();
  if (diff <= 0) return null;
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n) => String(n).padStart(2, '0');

export default function Countdown() {
  const [parts, setParts] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setParts(diffParts(SITE.registrationDeadline));
    const id = setInterval(() => setParts(diffParts(SITE.registrationDeadline)), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return <div className="countdown" id="cd"></div>;
  if (!parts) return <div className="countdown" id="cd"><div className="cd-done">Registrations closed</div></div>;

  return (
    <div className="countdown" id="cd">
      <div className="cd-cell"><div className="cd-v">{pad(parts.d)}</div><div className="cd-k">Days</div></div>
      <div className="cd-sep">:</div>
      <div className="cd-cell"><div className="cd-v">{pad(parts.h)}</div><div className="cd-k">Hours</div></div>
      <div className="cd-sep">:</div>
      <div className="cd-cell"><div className="cd-v">{pad(parts.m)}</div><div className="cd-k">Minutes</div></div>
      <div className="cd-sep">:</div>
      <div className="cd-cell"><div className="cd-v">{pad(parts.s)}</div><div className="cd-k">Seconds</div></div>
    </div>
  );
}
