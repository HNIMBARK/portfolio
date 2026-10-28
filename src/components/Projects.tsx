import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Database, GitBranch, X } from 'lucide-react';
import { messages, projects, type Project } from '../data/portfolio';
import { asset } from '../lib';
import { RandoneoVisual, SalesVisual, SignsVisual } from './Visuals';

export function Projects({ onSelect }: { onSelect: (project: Project) => void }) {
  return <div className="projects-grid">
    {projects.map((project, index) => <article key={project.id} className={'project-card project-' + project.id}>
      <div className="project-art">{project.image ? <img className="project-image" src={asset(project.image)} alt={project.imageAlt || project.title} width={1200} height={720} loading="lazy" /> : project.id === "sales-pipeline" ? <SalesVisual /> : project.id === "randoneo" ? <RandoneoVisual /> : project.id === "arabic-signs" ? <SignsVisual /> : <div className="project-visual generic-visual"><GitBranch size={40} /><span>{project.title}</span></div>}</div>
      <div className="project-copy">
        <div className="project-kicker"><span>{project.number} / {project.category}</span><span>{project.kind}</span></div>
        <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>
        <ul className="tags" aria-label="Technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
        {(project.repositoryAvailable || project.demo || project.steps.length > 0) && <div className="project-actions">
          {project.steps.length > 0 && <button className="text-link" onClick={() => onSelect(project)} aria-label={messages.fr.details + ' : ' + project.title}>{messages.fr.details} <ArrowRight size={17} /></button>}
          {project.repositoryAvailable && <a className="source-link" href={project.repository} target="_blank" rel="noreferrer" aria-label={'Voir le code de ' + project.title + ' sur GitHub'}>GitHub <ArrowUpRight size={15} /></a>}
          {project.demo && <a className="source-link" href={project.demo} target="_blank" rel="noreferrer">Démonstration <ArrowUpRight size={15} /></a>}
        </div>}
        {index === 0 && <p className="attribution">Support pédagogique · DataScientist.fr</p>}
      </div>
    </article>)}
  </div>;
}

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project || !dialog.current) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    dialog.current.scrollTop = 0;
    return () => { document.body.style.overflow = previousOverflow; dialog.current?.close(); };
  }, [project]);
  return <dialog className="project-dialog" ref={dialog} aria-labelledby="project-dialog-title" onClose={onClose}
    onClick={event => { if (event.target === dialog.current) onClose(); }}>
    {project && <div className="dialog-content">
      <div className="dialog-bar"><span className="eyebrow">ÉTUDE DE CAS / {project.number}</span><button className="icon-button" autoFocus onClick={onClose} aria-label={messages.fr.close}><X size={22} /></button></div>
      <div className="dialog-intro"><span className="pill">{project.kind}</span><h2 id="project-dialog-title">{project.title}</h2><p>{project.subtitle}</p><ul className="tags">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
      <div className="dialog-section"><h3>Le contexte</h3><p>{project.context}</p></div>
      <div className="dialog-section"><h3><Database size={19} /> Les données</h3><p>{project.sources}</p></div>
      <div className="dialog-section"><h3><GitBranch size={19} /> L’architecture</h3><ol className="architecture-flow">{project.architecture.map(step => <li key={step}>{step}<ArrowRight size={15} aria-hidden="true" /></li>)}</ol>
        {project.id === 'randoneo' && <p className="architecture-note">Mémoire de l’agent : SQLite · Création des tickets : validation humaine.</p>}</div>
      <div className="dialog-section"><h3>La démarche</h3><ol className="method-list">{project.steps.map(step => <li key={step}>{step}</li>)}</ol></div>
      <div className="dialog-section"><h3>Les livrables</h3><ul className="deliverables">{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className="dialog-section"><h3>Contribution & attribution</h3><p>{project.contribution}</p></div>
      <div className="dialog-limits"><h3>Limites & perspectives</h3><p>{project.limits}</p><p>{project.next}</p></div>
      <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">Consulter le dépôt GitHub <ArrowUpRight size={18} /></a>
    </div>}
  </dialog>;
}
