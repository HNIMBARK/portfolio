import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { navigation, profile } from '../data/portfolio';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('accueil');
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light');
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-18% 0px -65% 0px' });
    navigation.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); menu.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [open]);
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem('mh-theme', next); } catch { /* La préférence reste active pour cette visite. */ }
  };
  return <header className="site-header">
    <div className="container nav-shell">
      <a href="#accueil" className="brand" aria-label="Mbark HNI — Accueil" onClick={() => setOpen(false)}>
        <span className="monogram">MH<span>.</span></span>
        <span className="brand-name">MBARK HNI<span>DATA ENGINEER JUNIOR</span></span>
      </a>
      <nav id="main-navigation" className="nav-links" data-open={open} aria-label="Navigation principale">
        {navigation.map(({ id, label }) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-github" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
      </nav>
      <div className="nav-actions">
        <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair'} title={theme === 'light' ? 'Thème sombre' : 'Thème clair'}>{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button>
        <button ref={menu} className="icon-button menu-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </div>
  </header>;
}
