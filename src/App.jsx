import { useState } from 'react'

const github = 'https://github.com/Bilal2504'
const flightProject = 'https://github.com/Bilal2504/Analyse-des-retards-des-vols-aux-tats-Unis-2024-'

const projects = [
  {
    name: 'Retards des vols aux États-Unis',
    kind: 'Data',
    period: '2024',
    description: 'Préparer et analyser les données de vols, puis suivre les retards, annulations et causes principales dans un tableau de bord Power BI.',
    tools: ['Python', 'Pandas', 'Power BI'],
    href: flightProject,
    featured: true,
    image: 'https://raw.githubusercontent.com/Bilal2504/Analyse-des-retards-des-vols-aux-tats-Unis-2024-/main/dashboard.png',
    imageAlt: 'Aperçu du tableau de bord Power BI sur les retards de vols',
    metric: '≈ 10 000 vols',
    label: 'Jeu de données',
  },
  {
    name: 'Recherche de films',
    kind: 'Web',
    period: 'Projet web',
    description: 'Application Vue.js connectée à l’API The Movie Database pour rechercher des films et consulter leurs informations.',
    tools: ['Vue.js', 'API', 'JavaScript'],
    href: 'https://github.com/Bilal2504/cinema',
    visual: 'film',
    visualLabel: 'CINÉMA / API',
  },
  {
    name: 'To-do list',
    kind: 'Web',
    period: 'Projet web',
    description: 'Petite application de gestion de tâches réalisée en JavaScript avec Tailwind CSS.',
    tools: ['JavaScript', 'Tailwind CSS'],
    href: 'https://github.com/Bilal2504/Todo-List-JS-Tailwind',
    visual: 'tasks',
    visualLabel: 'LISTE / ACTION',
  },
]

const experiences = [
  {
    company: 'Direction générale des Finances publiques',
    role: 'Analyste',
    date: 'FÉV. 2024 — JAN. 2025',
    place: 'Montreuil',
    points: [
      'Vérification de tableaux de bord et extraction de données avec Python.',
      'Participation au pilotage projet : user stories et modèle de données.',
    ],
    mark: 'DG',
  },
  {
    company: 'Umanis',
    role: 'Data Analyst',
    date: 'JAN. 2022 — MAR. 2022',
    place: 'Levallois-Perret',
    points: [
      'Création de visualisations interactives avec D3.js à partir de données Excel.',
      'Extraction, conversion et préparation des données pour les graphiques.',
    ],
    mark: 'UM',
  },
  {
    company: 'Ingenico',
    role: 'Développeur Python',
    date: 'MAR. 2021 — AVR. 2021',
    place: 'Paris',
    points: [
      'Automatisation du traitement de fichiers de logs et recherche d’événements.',
      'Génération de rapports sur les anomalies détectées.',
    ],
    mark: 'IN',
  },
]

const skillGroups = [
  { label: 'Analyse & visualisation', items: ['Power BI', 'D3.js', 'Excel', 'Data storytelling'] },
  { label: 'Traitement & programmation', items: ['Python', 'Pandas', 'JavaScript', 'Automatisation'] },
  { label: 'Bases de données', items: ['SQL', 'PostgreSQL', 'MySQL', 'Modélisation'] },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function ProjectCard({ project }) {
  if (project.featured) {
    return (
      <article className="project-card project-card-featured">
        <a className="featured-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={'Ouvrir le projet ' + project.name + ' sur GitHub'}>
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
          <span className="visual-tag"><i /> ÉTUDE DE CAS · DATA</span>
          <span className="visual-period">2024</span>
        </a>
        <div className="featured-copy">
          <div className="project-meta"><span>01 / DATA</span><span>{project.period}</span></div>
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-bottom">
            <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
            <a className="text-link" href={project.href} target="_blank" rel="noreferrer">Voir le projet <Arrow diagonal /></a>
          </div>
          <div className="project-stat"><strong>{project.metric}</strong><span>{project.label}</span></div>
        </div>
      </article>
    )
  }

  return (
    <article className="project-card project-card-compact">
      <a className={'compact-visual visual-' + project.visual} href={project.href} target="_blank" rel="noreferrer" aria-label={'Ouvrir le projet ' + project.name + ' sur GitHub'}>
        <span className="visual-tag"><i /> {project.visualLabel}</span>
        {project.visual === 'film' ? (
          <div className="film-stack" aria-hidden="true"><span>FILM</span><span>FICHE</span><span>API</span></div>
        ) : (
          <div className="task-preview" aria-hidden="true"><span className="task-check">✓</span><span className="task-line" /><span className="task-check muted" /><span className="task-line short" /><span className="task-check muted" /><span className="task-line" /></div>
        )}
        <span className="compact-arrow"><Arrow diagonal /></span>
      </a>
      <div className="compact-copy">
        <div className="project-meta"><span>WEB / {project.period.toUpperCase()}</span><span>0{projects.indexOf(project) + 1}</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-bottom">
          <div className="tag-list">{project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
          <a className="icon-link" href={project.href} target="_blank" rel="noreferrer" aria-label={'Code source de ' + project.name}><Arrow diagonal /></a>
        </div>
      </div>
    </article>
  )
}

function App() {
  const [filter, setFilter] = useState('Tout')
  const visibleProjects = filter === 'Tout' ? projects : projects.filter((project) => project.kind === filter)

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Bilal Dramé, accueil"><span>BD</span><b>.</b></a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#apropos">À propos</a>
          <a href="#parcours">Parcours</a>
          <a href="#projets">Projets</a>
        </nav>
        <a className="header-contact" href="mailto:bilaldrame2504@gmail.com">Me contacter <Arrow diagonal /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> DATA ANALYST <span className="eyebrow-divider">/</span> PROJETS WEB</p>
            <h1>Des données<br />brutes aux <em>idées claires.</em></h1>
            <p className="hero-lede">Je suis Bilal Dramé. J’analyse, je structure et je visualise les données pour les rendre utiles — avec un goût particulier pour les interfaces web bien pensées.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projets">Découvrir mes projets <Arrow /></a>
              <a className="quiet-link" href={github} target="_blank" rel="noreferrer">Mon GitHub <Arrow diagonal /></a>
            </div>
            <div className="hero-footnote"><span>01 — PORTFOLIO EN COURS</span><span>Basé en France · Français / English</span></div>
          </div>
          <div className="hero-art" aria-label="Illustration de données, graphiques et indicateurs">
            <div className="art-topline"><span>ANALYSE / 001</span><span>DATA IN MOTION</span></div>
            <div className="chart-window">
              <div className="chart-heading"><div><span className="chart-kicker">VOLS ANALYSÉS</span><strong>10.0k</strong></div><span className="chart-badge">2024 <b>↗</b></span></div>
              <div className="chart-area">
                <div className="chart-grid"><i /><i /><i /><i /></div>
                <div className="bar-chart" aria-hidden="true">
                  {[38, 58, 45, 72, 51, 83, 62, 94, 70, 76, 54, 87].map((height, index) => <span key={index} style={{ '--bar-height': height + '%' }} className={index === 7 ? 'bar bar-highlight' : 'bar'} />)}
                </div>
                <svg className="chart-line" viewBox="0 0 420 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 92 C38 83 38 47 76 58 S118 94 154 65 S205 71 233 42 S275 53 301 32 S337 49 365 18 S397 31 420 8" fill="none" stroke="#c5f36a" strokeWidth="2.5" /><circle cx="365" cy="18" r="4" fill="#c5f36a" /></svg>
              </div>
              <div className="chart-legend"><span><i className="legend-lime" /> VOLS PAR MOIS</span><span><i className="legend-white" /> TENDANCE</span></div>
            </div>
            <div className="art-note"><span className="note-index">A.</span><span>Préparer<br />→ Comprendre<br />→ Partager</span></div>
            <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
            <span className="art-circle" />
          </div>
        </section>

        <section className="ticker" aria-label="Domaines d’intérêt">
          <div className="ticker-inner"><span>PYTHON & PANDAS</span><b>✳</b><span>DATA VISUALISATION</span><b>✳</b><span>POWER BI</span><b>✳</b><span>FRONT-END</span><b>✳</b><span>SQL</span><b>✳</b><span>PYTHON & PANDAS</span></div>
        </section>

        <section className="about section-wrap section-space" id="apropos">
          <div className="section-label"><span>01</span><span>À PROPOS</span></div>
          <div className="about-content">
            <h2>La donnée prend de la valeur quand elle aide à <em>mieux décider.</em></h2>
            <div className="about-details">
              <p>Mon parcours mêle analyse de données, automatisation et développement. J’ai travaillé sur des tableaux de bord, des scripts d’extraction Python, des visualisations interactives et le traitement de logs.</p>
              <p>Aujourd’hui, je construis ce portfolio autour de projets concrets : une première étude data est en ligne, et la sélection s’enrichira au fil de mes prochains travaux.</p>
              <a className="text-link" href="#parcours">Voir mon parcours <Arrow /></a>
            </div>
          </div>
          <div className="principles">
            <div><span>01 / EXPLORER</span><strong>Poser les bonnes questions</strong><p>Comprendre le contexte avant de lire les chiffres.</p></div>
            <div><span>02 / STRUCTURER</span><strong>Rendre la donnée fiable</strong><p>Nettoyer, transformer et préparer l’analyse.</p></div>
            <div><span>03 / TRANSMETTRE</span><strong>Faire voir l’essentiel</strong><p>Choisir une visualisation claire et utile.</p></div>
          </div>
        </section>

        <section className="projects-section section-space" id="projets">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="section-label"><span>02</span><span>PROJETS SÉLECTIONNÉS</span></div><h2>Du concret,<br /><em>en construction.</em></h2></div>
              <p>Un projet data à explorer et quelques réalisations web pour montrer l’autre facette de mon parcours.</p>
            </div>
            <div className="filter-row" role="group" aria-label="Filtrer les projets">
              {['Tout', 'Data', 'Web'].map((item) => <button key={item} type="button" className={filter === item ? 'filter-button active' : 'filter-button'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'Tout' ? projects.length : projects.filter((project) => project.kind === item).length}</span></button>)}
            </div>
            <div className="project-grid">{visibleProjects.map((project) => <ProjectCard project={project} key={project.name} />)}</div>
            <a className="github-more" href={github} target="_blank" rel="noreferrer"><span>Voir les autres dépôts sur GitHub</span><Arrow diagonal /></a>
          </div>
        </section>

        <section className="experience section-wrap section-space" id="parcours">
          <div className="section-heading experience-heading">
            <div><div className="section-label"><span>03</span><span>PARCOURS</span></div><h2>Des expériences<br />au croisement de la <em>data & du code.</em></h2></div>
            <p>Trois missions, trois manières de transformer une information brute en résultat exploitable.</p>
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-row" key={experience.company}>
                <span className="experience-index">0{index + 1}</span>
                <div className="company-mark" aria-hidden="true">{experience.mark}</div>
                <div className="experience-main"><p className="role-date">{experience.date}</p><h3>{experience.company}</h3><p className="role-title">{experience.role} <span>·</span> {experience.place}</p></div>
                <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="education-strip"><span className="education-icon">↗</span><div><span className="role-date">FORMATION</span><p><strong>Bachelor 3 — Chef de projet logiciel et réseau</strong> <span>· ESGI, 2024–2025</span></p><p><strong>BTS SIO, spécialité SLAM</strong> <span>· École Nationale de Commerce, 2020–2022</span></p></div></div>
        </section>

        <section className="skills-section section-space">
          <div className="section-wrap skills-layout">
            <div><div className="section-label"><span>04</span><span>OUTILS & COMPÉTENCES</span></div><h2>Une boîte à outils<br /><em>qui évolue.</em></h2><p className="skills-intro">Des bases solides en analyse et traitement, complétées par des outils de visualisation et de développement.</p></div>
            <div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><span className="skill-index">0{index + 1}</span><div><h3>{group.label}</h3><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></div>)}</div>
          </div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <div className="section-label"><span>05</span><span>ET MAINTENANT ?</span></div>
          <div className="contact-body"><div><p className="eyebrow"><span className="status-dot" /> OUVERT AUX ÉCHANGES</p><h2>On parle <em>d’un projet ?</em></h2><p>Une question, une collaboration ou une opportunité autour de la data et du web ? Écris-moi.</p></div><a className="contact-button" href="mailto:bilaldrame2504@gmail.com"><span>bilaldrame2504@gmail.com</span><Arrow diagonal /></a></div>
          <div className="contact-links"><a href={github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="mailto:bilaldrame2504@gmail.com">E-mail <Arrow diagonal /></a><span>France · Français / English</span></div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#accueil"><span>BD</span><b>.</b></a><span>© {new Date().getFullYear()} Bilal Dramé</span><a href="#accueil">Retour en haut <Arrow diagonal /></a></footer>
    </>
  )
}

export default App
