export type Project = {
  image?: string; imageAlt?: string; demo?: string;
  id: string; number: string; title: string; subtitle: string; category: string; kind: string;
  description: string; technologies: string[]; repository: string; repositoryAvailable: boolean;
  context: string; sources: string; steps: string[]; deliverables: string[];
  contribution: string; limits: string; next: string; architecture: string[];
};
export const profile = {
  name: 'Mbark HNI', title: 'Data Engineer Junior', location: 'Casablanca, Maroc',
  email: 'hnimbark22@gmail.com', github: 'https://github.com/HNIMBARK', linkedin: '',
  cv: 'cv/mbark-hni.pdf', tagline: 'Des données brutes aux pipelines fiables.',
  summary: 'Je prépare, structure et relie les données pour les rendre utiles. Mon parcours en analyse et qualité des données nourrit aujourd’hui ma spécialisation en Data Engineering.',
  biography: 'Data Engineer Junior basé à Casablanca, je développe mes compétences dans la conception de pipelines, la préparation des données et leur mise à disposition pour des usages analytiques et des applications d’intelligence artificielle. Je poursuis actuellement une formation en Modern Data Engineering.',
};
export const navigation = [
  { id: 'accueil', label: 'Accueil' }, { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' }, { id: 'experiences', label: 'Expériences' },
  { id: 'formation', label: 'Formation' }, { id: 'contact', label: 'Contact' },
];
export const pipelineSteps = [
  { label: 'Sources', code: 'CSV · JSON · SQL', description: 'Comprendre les données disponibles, leur structure et le besoin métier.' },
  { label: 'Ingestion', code: 'LECTURE · VALIDATION', description: 'Rassembler les sources et vérifier la structure des données entrantes.' },
  { label: 'Transformation', code: 'NETTOYAGE · JOINTURES', description: 'Nettoyer, harmoniser et enrichir pour construire des données cohérentes.' },
  { label: 'Contrôle qualité', code: 'RÈGLES · TRAÇABILITÉ', description: 'Contrôler les valeurs et documenter les traitements pour garder confiance dans les données.' },
  { label: 'Exploitation', code: 'ANALYSE · APPLICATIONS', description: 'Mettre les données à disposition des analyses, des équipes et des applications.' },
];
export const projects: Project[] = [
  {
    id: 'sales-pipeline', number: '01', title: 'Sales Pipeline', subtitle: 'Des ventes brutes aux données exploitables.',
    category: 'Data Engineering', kind: 'Projet de formation',
    description: 'Un pipeline modulaire pour ingérer, nettoyer et enrichir des données de ventes, avec des contrôles qualité et une restitution dans Streamlit.',
    technologies: ['Python', 'Pandas', 'Pytest', 'Docker', 'Streamlit'],
    repository: 'https://github.com/DataScientist-fr/sales-pipeline', repositoryAvailable: true,
    context: 'Projet pédagogique basé sur le support DataScientist.fr du cours « VS Code pour Data Engineers ». Le dépôt propose une chaîne de traitement de données de ventes générées pour l’exercice.',
    sources: 'Trois fichiers CSV : commandes, clients et produits. Les données fictives comportent des anomalies intentionnelles pour travailler le nettoyage.',
    steps: [
      'Lire les CSV et vérifier la présence des colonnes attendues.',
      'Supprimer les doublons, filtrer les prix et quantités invalides et compléter les statuts manquants.',
      'Nettoyer les noms, normaliser les emails et calculer le montant des commandes.',
      'Enrichir les commandes par jointures avec les clients et les produits.',
      'Exporter en CSV et journaliser chaque étape. Un script Python enchaîne les traitements.',
    ],
    deliverables: ['Modules Python d’ingestion et de transformation', 'Export orders_clean.csv', 'Interface Streamlit', 'Tests Pytest et configuration Docker Compose'],
    contribution: 'Support pédagogique : DataScientist.fr. Les fonctionnalités présentées décrivent le dépôt de formation ; elles ne sont pas revendiquées comme une création originale exclusive.',
    limits: 'Traitement de fichiers locaux et de données fictives, sans orchestrateur externe ni traitement distribué.',
    next: 'Étendre les règles de validation, documenter les rejets et mesurer la qualité à chaque exécution.',
    architecture: ['CSV bruts', 'Validation', 'Nettoyage', 'Jointures', 'Export CSV', 'Streamlit'],
  },
  {
    id: 'randoneo', number: '02', title: 'Randoneo Assistant', subtitle: 'Les données métier au service de l’IA.',
    category: 'Data & IA', kind: 'Prototype applicatif',
    description: 'Un assistant de support connecté à un catalogue, aux commandes et à une base documentaire, avec recherche sémantique et outils MCP.',
    technologies: ['Python', 'ChromaDB', 'LangGraph', 'FastMCP', 'SQLite'],
    repository: 'https://github.com/HNIMBARK/randoneo_assistant', repositoryAvailable: true,
    context: 'Un prototype pour le support d’une boutique de randonnée : recherche de produits, suivi des commandes, questions documentaires et préparation de tickets.',
    sources: 'Catalogue et commandes JSON ; corpus documentaire indexé dans ChromaDB avec des embeddings OpenAI. SQLite conserve la mémoire conversationnelle.',
    steps: [
      'Charger les données JSON et indexer le corpus documentaire pour la recherche sémantique.',
      'Exposer les fonctions de catalogue, commandes, documentation et tickets via FastMCP.',
      'Relier les outils à un agent LangChain / LangGraph utilisant l’API Anthropic.',
      'Vérifier l’accès aux commandes et demander une validation humaine avant la création d’un ticket.',
      'Proposer une interface Streamlit et une configuration Docker reproductible.',
    ],
    deliverables: ['Serveur d’outils MCP', 'Recherche documentaire ChromaDB', 'Agent avec mémoire SQLite', 'Interface Streamlit et scénarios d’évaluation'],
    contribution: 'Projet présenté dans mon dépôt GitHub : intégration de données structurées, de recherche documentaire et d’outils métier dans un assistant.',
    limits: 'Prototype avec stockage local. Persistance, accès concurrents et contrôles à renforcer avant un usage en production. Aucun taux de fiabilité garanti.',
    next: 'Renforcer les validations, rendre le stockage durable et reproduire les évaluations sur un jeu de tests documenté.',
    architecture: ['Streamlit', 'Agent LangGraph', 'Outils MCP', 'JSON / ChromaDB'],
  },
  {
    id: 'arabic-signs', number: '03', title: 'Reconnaissance de signes arabes', subtitle: 'Des images à la classification.',
    category: 'Machine Learning', kind: 'Projet de classification',
    description: 'Reconnaître des signes de la langue arabe à partir d’images, à l’aide des méthodes SVM et KNN.',
    technologies: ['SVM', 'KNN', 'Données images'],
    repository: 'https://github.com/HNIMBARK/Recognition-of-Arabic-Sign-Language-images-with-SVM-and-KNN',
    repositoryAvailable: false, context: '', sources: '', steps: [], deliverables: [],
    contribution: '', limits: '', next: '', architecture: [],
  },
];
export const skillGroups = [
  { number: '01', title: 'Préparer & transformer', icon: 'workflow', description: 'Des sources hétérogènes à des données cohérentes.',
    tools: ['Python', 'SQL', 'Pandas', 'Talend', 'Talend Cloud', 'CSV / JSON'], evidence: 'En pratique : Sales Pipeline', target: 'projets' },
  { number: '02', title: 'Stocker & structurer', icon: 'database', description: 'Organiser les données pour leurs usages.',
    tools: ['MySQL', 'SQL Server', 'Oracle', 'BigQuery', 'SQLite'], evidence: 'En pratique : NeoDocto · Randoneo', target: 'experiences' },
  { number: '03', title: 'Tester & reproduire', icon: 'check', description: 'Des traitements lisibles, contrôlés et reproductibles.',
    tools: ['Git / GitHub', 'Docker', 'Docker Compose', 'Pytest', 'Journalisation'], evidence: 'En pratique : Sales Pipeline', target: 'projets' },
  { number: '04', title: 'Connecter données & IA', icon: 'network', description: 'Rendre la connaissance accessible aux applications.',
    tools: ['ChromaDB', 'Embeddings', 'MCP', 'LangChain', 'LangGraph'], evidence: 'En pratique : Randoneo Assistant', target: 'projets' },
  { number: '05', title: 'Explorer le cloud', icon: 'cloud', description: 'Approfondir les services et architectures de données.',
    tools: ['GCP', 'Microsoft Azure'], evidence: 'Connaissances du CV · formation en cours', target: 'formation' },
  { number: '06', title: 'Rendre les données lisibles', icon: 'chart', description: 'Relier le traitement technique à la décision métier.',
    tools: ['Power BI', 'Tableau', 'Streamlit', 'Excel'], evidence: 'En pratique : Volga Partners · NeoDocto', target: 'experiences' },
];
export const experiences = [
  { date: 'DÉC. 2024 — AUJOURD’HUI', company: 'Volga Partners LLC', role: 'Data et Qualité Analyst', location: 'Indépendant · à distance',
    description: 'Préparer des données fiables pour les usages analytiques.',
    missions: ['Collecte, nettoyage et structuration de données multisources.', 'Amélioration des processus de traitement et de la qualité des données.', 'Préparation des indicateurs métier et suivi des restitutions analytiques.'],
    tools: ['Python', 'Excel', 'Power BI', 'Tableau'] },
  { date: 'JAN. 2024 — NOV. 2024', company: 'NeoDocto Inc', role: 'Data Analyst', location: 'Indépendant · à distance',
    description: 'Structurer des données sur les prix automobiles.',
    missions: ['Collecte, nettoyage et organisation des données dans une base de travail.', 'Formalisation des besoins techniques et fonctionnels.', 'Préparation des données destinées aux analyses et aux rapports.'],
    tools: ['Python', 'SQL', 'BigQuery', 'R Studio', 'Power BI', 'Excel', 'Tableau'] },
  { date: 'SEPT. 2022 — AUJOURD’HUI', company: 'Lycée Collégial Ait Boudaoud', role: 'Enseignant d’informatique', location: 'Zagora, Maroc',
    description: 'Transmettre la logique et rendre la technique accessible.',
    missions: ['Enseignement des bases de programmation et de la logique algorithmique.', 'Conception de cours et de travaux pratiques.', 'Accompagnement de projets de design et de robotique Arduino.'],
    tools: ['Programmation', 'Arduino', 'Figma', 'Illustrator'] },
  { date: 'DÉC. 2021 — OCT. 2022', company: 'Volga Partners LLC', role: 'Annotateur de données', location: 'Indépendant · à distance',
    description: 'Contribuer à la qualité des données de recherche.',
    missions: ['Annotation, classification et analyse de jugements dans des feuilles de calcul.', 'Traduction de requêtes français / anglais.', 'Contribution à l’amélioration du moteur de recherche Bing.'],
    tools: ['Excel', 'Feuilles de calcul', 'Annotation'] },
  { date: 'FÉV. 2021 — AOÛT 2021', company: 'MICHOC S.A', role: 'Chef de projet IA', location: 'Casablanca, Maroc',
    description: 'Préparer des données images pour la détection en temps réel.',
    missions: ['Analyse des besoins, collecte et nettoyage des données images.', 'Préparation des données pour la modélisation.', 'Participation à la modélisation, à l’évaluation et au déploiement.'],
    tools: ['Python', 'Jupyter', 'Google Colab', 'YOLO'] },
];
export const education = [
  { date: '2026 — EN COURS', title: 'Mastère Modern Data Engineer', school: 'DataScientist.fr · AXI TECHNOLOGIES', current: true },
  { date: '2022 — 2024', title: 'Master spécialisé Systèmes Informatiques Distribués & Big Data', school: 'Faculté des Sciences d’Agadir', current: false },
  { date: '2016 — 2019', title: 'Licence Sciences Mathématiques, Informatique et Applications', school: 'Faculté Polydisciplinaire de Ouarzazate', current: false },
];
export const certifications = [
  { issuer: 'Google', title: 'Data Analytics Professional Certificate' },
  { issuer: 'Microsoft', title: 'Data Analyst Associate', detail: 'DA-100' },
  { issuer: 'Scrum', title: 'Scrum Foundation Professional Certificate' },
];
export const languages = [{ name: 'Arabe & berbère', level: 'Bilingue' }, { name: 'Français', level: 'Courant' }, { name: 'Anglais', level: 'Professionnel' }];
// Textes d’interface séparés pour faciliter une future traduction.
export const messages = { fr: {
  skip: 'Aller au contenu', projects: 'Découvrir mes projets', cv: 'Télécharger mon CV',
  contact: 'Me contacter', details: 'Explorer le projet', source: 'Voir le code',
  close: 'Fermer les détails du projet', copied: 'Adresse copiée', copy: 'Copier l’adresse email',
} };
