import Link from 'next/link';
import { Arrow } from './arrow';
export function CtaLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link href={href} className={`pack-cta ${className}`}>{children}<Arrow /></Link>;
}
