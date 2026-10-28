import { useState } from 'react';
import { ArrowDown, ArrowRight, Braces, ChartNoAxesCombined, Check, Database, FileText, GitBranch, Layers3, Network, ShieldCheck, Workflow } from 'lucide-react';
import { pipelineSteps } from '../data/portfolio';

const stageIcons = [Database, Layers3, Workflow, ShieldCheck, ChartNoAxesCombined];

export function PipelineIllustration() {
  const [selected, setSelected] = useState(2);
  return <div className="pipeline-illustration">
    <div className="diagram-meta"><span className="eyebrow">UNE APPROCHE, CINQ ÉTAPES</span><span className="tiny-cross">+</span></div>
    <div className="pipeline-stages" role="group" aria-label="Explorer les étapes de mon approche des données">
      {pipelineSteps.map((stage, index) => {
        const Icon = stageIcons[index];
        return <div className="pipeline-stage-wrap" key={stage.label}>
          <button className="pipeline-stage" aria-pressed={selected === index} aria-controls="pipeline-description" onClick={() => setSelected(index)}>
            <span className="stage-index">0{index + 1}</span><span className="stage-icon"><Icon size={20} strokeWidth={1.5} /></span>
            <span className="stage-text"><strong>{stage.label}</strong><small>{stage.code}</small></span>
            <ArrowRight className="stage-arrow" size={17} />
          </button>
          {index < 4 && <span className="stage-connector" aria-hidden="true"><ArrowDown size={13} /></span>}
        </div>;
      })}
    </div>
    <div id="pipeline-description" className="pipeline-description" aria-live="polite"><span>0{selected + 1} /</span><p>{pipelineSteps[selected].description}</p></div>
    <div className="diagram-foot"><span>DE LA SOURCE À L’USAGE</span><GitBranch size={14} /></div>
  </div>;
}

export function SalesVisual() {
  return <div className="project-visual sales-visual" aria-label="Architecture illustrée : fichiers CSV, traitement Python et export des données nettoyées" role="img">
    <div className="visual-topline"><span><span className="visual-dot" /> SALES / DATA FLOW</span><span>01 — 03</span></div>
    <div className="sales-source-row">
      {['orders.csv', 'customers.csv', 'products.csv'].map(file => <div className="file-node" key={file}><FileText size={20} strokeWidth={1.4} /><span>{file}</span></div>)}
    </div>
    <div className="merge-lines" aria-hidden="true"><span /><span /><span /></div>
    <div className="processing-node"><span className="processing-icon"><Workflow size={25} /></span><div><strong>sales_pipeline</strong><small>INGÉRER. NETTOYER. ENRICHIR.</small></div><span className="node-badge">.py</span></div>
    <div className="vertical-line" aria-hidden="true" />
    <div className="output-node"><span><Check size={15} /> orders_clean.csv</span><ArrowDown size={15} /></div>
    <div className="sales-bottom"><span>VALIDATION</span><span>TRANSFORMATION</span><span>EXPORT</span></div>
  </div>;
}
export function RandoneoVisual() {
  return <div className="project-visual randoneo-visual" role="img" aria-label="Architecture Randoneo : agent LangGraph, outils MCP, données JSON, ChromaDB et mémoire SQLite">
    <div className="visual-topline"><span><span className="visual-dot" /> RANDONEO / CONNECTED DATA</span><Network size={17} /></div>
    <div className="agent-node"><span className="agent-symbol"><Network size={30} strokeWidth={1.2} /></span><div><strong>Un agent. Des données.</strong><span>LangGraph <ArrowRight size={13} /> FastMCP</span></div></div>
    <div className="rag-lines" aria-hidden="true" />
    <div className="rag-sources">
      <div><Braces size={23} /><strong>JSON</strong><span>Catalogue & commandes</span></div>
      <div><Database size={23} /><strong>ChromaDB</strong><span>Base documentaire</span></div>
    </div>
    <div className="memory-node"><Database size={13} /> SQLite <span>Mémoire conversationnelle</span></div>
  </div>;
}
export function SignsVisual() {
  return <div className="project-visual signs-visual" role="img" aria-label="Illustration typographique du projet de reconnaissance des signes arabes par SVM et KNN">
    <div className="visual-topline"><span>IMAGES / CLASSIFICATION</span><span>03</span></div>
    <div className="signs-grid" aria-hidden="true"><span className="arabic-glyph">ع</span><div className="classifier-bracket"><span>SVM</span><span>KNN</span></div></div>
    <div className="signs-caption"><span>LANGUE DES SIGNES ARABE</span><ArrowRight size={17} /></div>
  </div>;
}
