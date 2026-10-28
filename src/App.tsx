import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, ChartNoAxesCombined, Check, Cloud, Copy, Database, Download, GitBranch, GraduationCap, MapPin, Network, ShieldCheck, Workflow, type LucideIcon } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { PipelineIllustration } from './components/Visuals';
import { ProjectDialog, Projects } from './components/Projects';
import { certifications, education, experiences, languages, messages, profile, skillGroups, type Project } from './data/portfolio';
import { asset } from './lib';

const icons: Record<string, LucideIcon> = { workflow: Workflow, database: Database, check: ShieldCheck, network: Network, cloud: Cloud, chart: ChartNoAxesCombined };

function SectionHeading({ number, label, title, emphasis, description }: { number: string; label: string; title: string; emphasis: string; description?: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span className="section-number">{number}</span>{label}</p><h2>{title} <em>{emphasis}</em></h2></div>{description && <p className="section-description">{description}</p>}</div>;
}

export default function App() {
  const [project, setProject] = useState<Project | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeProject = useCallback(() => setProject(null), []);
  useEffect(() => () => clearTimeout(timeout.current), []);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopyState('success'); }
    catch { setCopyState('error'); }
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopyState('idle'), 5000);
  }
  return <>
    <a href="#main-content" className="skip-link">{messages.fr.skip}</a>
    <Navigation />
    <main id="main-content" tabIndex={-1}>
      <section id="accueil" className="hero container" aria-labelledby="hero-title">
        <div className="hero-top"><p className="eyebrow"><span className="blue-dot" /> PORTFOLIO PERSONNEL</p><span className="location"><MapPin size={14} />{profile.location}</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="role-line"><span>MBARK HNI</span><span className="role-separator" />{profile.title}</div>
            <h1 id="hero-title">Des données<br />brutes aux<br /><em>pipelines fiables.</em></h1>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions"><a href="#projets" className="button button-primary">{messages.fr.projects}<ArrowUpRight size={19} /></a><a href={asset(profile.cv)} download className="cv-link"><Download size={17} />{messages.fr.cv}</a></div>
            <a href="#contact" className="hero-contact">Une idée, un projet ? <span>Échangeons <ArrowRight size={15} /></span></a>
          </div>
          <div className="hero-art"><PipelineIllustration /><span className="hero-art-label" aria-hidden="true">MH / DATA ENGINEERING</span></div>
        </div>
        <div className="hero-bottom"><p>PYTHON<span>/</span>SQL<span>/</span>INTÉGRATION<span>/</span>QUALITÉ<span>/</span>CLOUD</p><a href="#projets" aria-label="Défiler vers les projets"><span>EXPLORER</span><ArrowDown size={17} /></a></div>
      </section>

      <section id="projets" className="section projects-section" aria-labelledby="projects-heading">
        <div className="container"><div id="projects-heading"><SectionHeading number="01" label="PROJETS SÉLECTIONNÉS" title="La technique," emphasis="en pratique." description="Trois projets pour explorer la chaîne de la donnée, du traitement aux applications." /></div>
          <Projects onSelect={setProject} />
          <a className="all-projects text-link" href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={17} />Retrouver mon travail sur GitHub<ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section id="competences" className="section skills-section" aria-labelledby="skills-heading">
        <div className="container"><div id="skills-heading"><SectionHeading number="02" label="BOÎTE À OUTILS" title="Chaque outil," emphasis="un usage." description="Une base technique qui s’enrichit au fil des projets, des expériences et de ma formation." /></div>
          <div className="skills-grid">{skillGroups.map(group => { const Icon = icons[group.icon]; return <article className="skill-group" key={group.number}>
            <div className="skill-top"><Icon size={24} strokeWidth={1.5} /><span>{group.number}</span></div><h3>{group.title}</h3><p>{group.description}</p>
            <ul className="skill-tools">{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
            <a className="skill-evidence" href={'#' + group.target}>{group.evidence}<ArrowUpRight size={14} /></a>
          </article>; })}</div>
        </div>
      </section>

      <section id="experiences" className="section experience-section" aria-labelledby="experience-heading">
        <div className="container experience-layout">
          <div className="experience-intro" id="experience-heading"><SectionHeading number="03" label="EXPÉRIENCES" title="Un parcours," emphasis="un fil conducteur." />
            <p className="intro-text">Comprendre le besoin. Préparer les données. Rendre le résultat utile.</p><p className="subtle">De la qualité des données à l’analyse, mes expériences construisent ma pratique de l’ingénierie des données.</p>
            <a href={asset(profile.cv)} download className="text-link">Mon parcours en PDF<Download size={16} /></a>
          </div>
          <div className="timeline">{experiences.map((experience, index) => <article key={experience.role} className="experience-item">
            <span className="timeline-dot" aria-hidden="true" /><p className="eyebrow experience-date">{experience.date}</p><h3>{experience.role}</h3><p className="company">{experience.company}</p><p className="experience-location">{experience.location}</p>
            <p className="experience-description">{experience.description}</p>
            <details className="mission-details" open={index === 0}><summary>Les missions <span aria-hidden="true">+</span></summary><ul>{experience.missions.map(mission => <li key={mission}>{mission}</li>)}</ul></details>
            <ul className="tags experience-tags" aria-label="Outils et pratiques">{experience.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
          </article>)}</div>
        </div>
      </section>

      <section id="formation" className="section education-section" aria-labelledby="education-heading"><div className="container">
        <div id="education-heading"><SectionHeading number="04" label="FORMATION & CERTIFICATIONS" title="Apprendre." emphasis="Construire. Recommencer." /></div>
        <div className="education-layout"><div className="education-list">{education.map(item => <article className={'education-item' + (item.current ? ' current' : '')} key={item.title}>
          <p className="eyebrow">{item.date}{item.current && <span className="current-label">EN FORMATION</span>}</p><h3>{item.title}</h3><p>{item.school}</p>
        </article>)}</div>
          <aside className="certifications"><div className="cert-heading"><GraduationCap size={22} strokeWidth={1.5} /><h3>Certifications</h3></div>{certifications.map(cert => <div className="certification" key={cert.issuer}><span className="cert-issuer">{cert.issuer}</span><p>{cert.title}</p>{cert.detail && <span className="cert-detail">{cert.detail}</span>}</div>)}</aside>
        </div>
      </div></section>

      <section id="a-propos" className="section about-section" aria-labelledby="about-heading"><div className="container about-layout">
        <div className="about-monogram" aria-hidden="true"><span className="eyebrow">LA PERSONNE DERRIÈRE LES DONNÉES</span><span className="large-monogram">MH<span>.</span></span><div><span>MBARK HNI</span><span>CASABLANCA, MA</span></div></div>
        <div className="about-copy"><p className="eyebrow">05 / À PROPOS</p><h2 id="about-heading">De la curiosité.<br /><em>Et de la méthode.</em></h2><p>{profile.biography}</p><p>Enseigner l’informatique m’a appris à décomposer un problème et à expliquer simplement la technique. J’apporte cette même attention aux données : comprendre leur origine, soigner leur préparation et rendre leur usage clair.</p><dl className="languages">{languages.map(language => <div key={language.name}><dt>{language.name}</dt><dd>{language.level}</dd></div>)}</dl></div>
      </div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="container">
        <div className="contact-top"><p className="eyebrow">06 / PRENONS CONTACT</p><span><MapPin size={15} />{profile.location}</span></div>
        <h2 id="contact-heading">La prochaine étape,<br /><em>on en parle ?</em></h2><p className="contact-description">Une opportunité en Data Engineering, un projet<br className="desktop-break" /> ou simplement une conversation autour des données.</p>
        <div className="email-row"><a className="contact-email" href={'mailto:' + profile.email}>{profile.email}<ArrowUpRight aria-hidden="true" /></a><button className="copy-button" onClick={copyEmail} aria-label={copyState === 'success' ? messages.fr.copied : messages.fr.copy} title={messages.fr.copy}>{copyState === 'success' ? <Check size={20} /> : <Copy size={20} />}</button></div>
        <p className="copy-status" role="status">{copyState === 'success' ? 'Adresse email copiée.' : copyState === 'error' ? 'Copie indisponible. Vous pouvez sélectionner l’adresse ou ouvrir le lien email.' : ''}</p>
        <div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={18} />GitHub<ArrowUpRight size={15} /></a><a href={asset(profile.cv)} download><Download size={17} />Télécharger mon CV</a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={15} /></a>}</div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><a href="#accueil" className="footer-brand">MH<span>.</span></a><p>© {new Date().getFullYear()} Mbark HNI<span>Fait avec méthode, à Casablanca.</span></p><a href="#accueil" className="back-to-top">Retour en haut<ArrowUp size={16} /></a></div></footer>
    <ProjectDialog project={project} onClose={closeProject} />
  </>;
}
