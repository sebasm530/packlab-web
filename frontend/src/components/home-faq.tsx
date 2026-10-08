'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Arrow } from './arrow';
import { homeContent } from '@/data/home';
export function HomeFaq() {
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  useEffect(() => { const frame = requestAnimationFrame(() => setReady(true)); return () => cancelAnimationFrame(frame); }, []);
  return <div className="pack-home-faqList"><noscript><style>{`.pack-home-faqPanel { grid-template-rows: 1fr; } .pack-home-faqDisclosure .pack-home-faqAnswer { opacity: 1; transform: none; }`}</style></noscript>{homeContent.es.faq.map((item, index) => {
    const open = !!expanded[index];
    return <div key={item.question} className={`pack-home-faqItem pack-home-faqDisclosure ${open ? 'pack-home-faqOpen' : ''}`}>
      <h3><button type="button" className="pack-home-faqQuestion" aria-expanded={open} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`} onClick={() => setExpanded(current => ({ ...current, [index]: !current[index] }))}>{item.question}<span className="pack-home-faqSymbol" aria-hidden="true" /></button></h3>
      <div className="pack-home-faqPanel" inert={ready && !open} aria-hidden={ready ? !open : undefined}><div><div className="pack-home-faqAnswer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}><p>{item.answer}</p><Link href={item.href}>{item.link}<Arrow /></Link></div></div></div>
    </div>;
  })}</div>;
}

