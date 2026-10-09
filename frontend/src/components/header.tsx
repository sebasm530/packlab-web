"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { content } from '@/data/content';
import Image from 'next/image';
import navbarLogo from '../../public/images/logo-packlab-navbar-blanco.png';
import { Arrow } from './arrow';
import './header.css';

type Dropdown = 'soluciones' | 'catalogos';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<Dropdown | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dropdownButtons = useRef<Partial<Record<Dropdown, HTMLButtonElement | null>>>({});
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const focusDropdown = useRef(false);
  useEffect(() => {
    if (!dropdown || !focusDropdown.current) return;
    const frame = setTimeout(() => {
      document.querySelector<HTMLAnchorElement>(`#dropdown-${dropdown} a`)?.focus();
      focusDropdown.current = false;
    }, 240);
    return () => clearTimeout(frame);
  }, [dropdown]);
  function stopHoverTimer() { if (hoverTimer.current) clearTimeout(hoverTimer.current); }
  function hoverMenu(group: Dropdown | null, entering: boolean, pointerType: string) {
    if (!group || pointerType !== 'mouse' || window.innerWidth <= 1280) return;
    stopHoverTimer();
    hoverTimer.current = setTimeout(() => setDropdown(entering ? group : null), entering ? 100 : 240);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onOutsideClick = (event: PointerEvent) => {
      if (header.current && !header.current.contains(event.target as Node)) { if (hoverTimer.current) clearTimeout(hoverTimer.current); setDropdown(null); setOpen(false); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerdown', onOutsideClick);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointerdown', onOutsideClick);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  function closeMenus() { stopHoverTimer(); setOpen(false); setDropdown(null); }

  return (
    <header ref={header} className={`pack-header-header ${scrolled ? 'pack-header-scrolled' : ''}`} onKeyDown={event => {
      if (event.key === 'Escape') {
        stopHoverTimer();
        event.preventDefault();
        if (dropdown) { dropdownButtons.current[dropdown]?.focus(); setDropdown(null); }
        else if (open) { setOpen(false); menuButton.current?.focus(); }
      }
    }}>
      <div className="pack-header-inner">
        <Link href="/" className="pack-header-logo" aria-label="Pack Lab, inicio" onClick={closeMenus}><Image src={navbarLogo} alt="Pack Lab — Developing Packaging Technology" sizes="(max-width: 760px) 180px, 220px" loading="eager" className="pack-header-trialLogo" /></Link>
        <button ref={menuButton} type="button" className="pack-header-mobileToggle" aria-expanded={open} aria-controls="navigation" onClick={() => { setOpen(!open); setDropdown(null); }}>
          <span>{open ? 'Cerrar' : 'Menú'}</span><span className={`pack-header-menuIcon ${open ? 'pack-header-menuIconOpen' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="navigation" aria-label="Navegación principal" className={`pack-header-navigation ${open ? 'pack-header-navigationOpen' : ''}`}>
          {content.navigation.map(({ label, href }) => {
            const group: Dropdown | null = href === '/soluciones' ? 'soluciones' : href === '/catalogos' ? 'catalogos' : null;
            const active = href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
            const children = group === 'soluciones' ? content.solutions.map(item => ({ label: item.title, summary: item.summary, href: `/soluciones/${item.slug}` })) : group === 'catalogos' ? content.catalogs.map(item => ({ label: item.title, summary: '', href: `/catalogos/${item.slug}` })) : [];
            return (
              <div key={href} className={`pack-header-navItem ${group === 'soluciones' ? 'pack-header-megaItem' : ''}`} onPointerEnter={event => hoverMenu(group, true, event.pointerType)} onPointerLeave={event => hoverMenu(group, false, event.pointerType)} onBlur={event => {
                if (group && !event.currentTarget.contains(event.relatedTarget as Node | null)) { stopHoverTimer(); setDropdown(current => current === group ? null : current); }
              }}>
                <div className="pack-header-navRow">
                  <Link href={href} aria-current={pathname === href ? 'page' : undefined} className={`pack-header-navLink ${active ? 'pack-header-active' : ''}`} onClick={closeMenus}>{label}</Link>
                  {group && <button type="button" ref={element => { dropdownButtons.current[group] = element; }} className="pack-header-dropdownToggle" aria-label={`${dropdown === group ? 'Ocultar' : 'Mostrar'} ${label.toLowerCase()}`} aria-expanded={dropdown === group} aria-controls={`dropdown-${group}`} onKeyDown={event => { if (event.key === 'ArrowDown') { event.preventDefault(); stopHoverTimer(); focusDropdown.current = true; if (dropdown === group) { document.querySelector<HTMLAnchorElement>(`#dropdown-${group} a`)?.focus(); focusDropdown.current = false; } else setDropdown(group); } }} onClick={() => { stopHoverTimer(); setDropdown(dropdown === group ? null : group); }}><svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg></button>}
                </div>
                {group && <div id={`dropdown-${group}`} className={`pack-header-dropdown ${group === 'soluciones' ? 'pack-header-mega' : ''} ${dropdown === group ? 'pack-header-dropdownOpen' : ''}`} aria-hidden={dropdown !== group} inert={dropdown !== group}>
                  <p className="pack-header-dropdownLabel">{group === 'soluciones' ? 'UNA VISIÓN INTEGRAL' : 'EXPLORA LAS CATEGORÍAS'}</p>
                  <div className="pack-header-dropdownLinks">{children.map((item, index) => <Link href={item.href} key={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={closeMenus}>{group === 'soluciones' && <span className="pack-header-number" aria-hidden="true">0{index + 1}</span>}<span><strong>{item.label}</strong>{item.summary && <small>{item.summary}</small>}</span><Arrow /></Link>)}</div>
                  <Link href={href} className="pack-header-dropdownOverview" onClick={closeMenus}>Ver {group === 'soluciones' ? 'todas las soluciones' : 'todos los catálogos'}<Arrow /></Link>
                </div>}
              </div>
            );
          })}
          <Link className="pack-header-mobileContact" href="/contacto" onClick={closeMenus}>Hablemos de tu proyecto <Arrow /></Link>
        </nav>
        <Link className="pack-header-contact" href="/contacto" onClick={closeMenus}>Hablemos de tu proyecto <Arrow /></Link>
      </div>
    </header>
  );
}



