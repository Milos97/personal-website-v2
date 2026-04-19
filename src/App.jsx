import './App.css'

const CONTACT = {
  email: 'milosnkbogosavljevic@gmail.com',
  phone: '+382 67 206 176',
  location: 'Podgorica, Montenegro',
  linkedin: 'https://www.linkedin.com/in/milos-bogosavljevic-17143b152/',
  github: 'https://github.com/Milos97',
}

const EXPERIENCE = [
  {
    role: 'Frontend Developer',
    company: 'iGamingPlatform',
    stack: 'React, Next.js',
    period: 'May 2021 — Mar 2026',
    bullets: [
      'Built and maintained complex interfaces for online casino and sportsbook products, including bonus flows, game lobbies, and player dashboards.',
      'Integrated third-party game providers, improved UI performance, and shipped responsive, localized experiences with React and Next.js.',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Amplitudo',
    stack: 'React',
    period: 'Jul 2020 — May 2021',
    bullets: [
      'Completed intensive PHP and React training, then delivered a full-stack personal project with React, Node.js, and MongoDB.',
    ],
  },
]

const EDUCATION = [
  {
    title: 'PHP and React academy',
    org: 'Amplitudo academy',
    period: 'Dec 2019 — Jun 2020',
  },
  {
    title: 'Computer and Information Sciences',
    org: 'University of Montenegro',
    period: 'Sep 2016 — Present',
    note: 'Near graduate',
  },
]

const SKILL_GROUPS = [
  {
    label: 'Languages & frameworks',
    items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Next.js'],
  },
  {
    label: 'State & data',
    items: ['Redux', 'MobX', 'Axios', 'React Query'],
  },
  {
    label: 'Styling',
    items: ['SCSS', 'Styled Components', 'Tailwind CSS', 'Material UI', 'Ant Design'],
  },
  {
    label: 'Testing',
    items: ['Cypress (E2E and component testing)'],
  },
  {
    label: 'Tooling & workflow',
    items: [
      'Git',
      'Vite',
      'Webpack',
      'Babel',
      'ESLint',
      'Prettier',
      'Husky',
      'Razzle',
      'Agile',
      'Scrum',
      'Jira',
    ],
  },
  {
    label: 'APIs & design',
    items: ['Postman', 'Swagger', 'Figma', 'Adobe XD', 'Zeplin'],
  },
  {
    label: 'Utilities',
    items: ['Lodash', 'date-fns', 'Yup', 'Moment.js'],
  },
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top">
          MB
        </a>
        <nav className="topnav" aria-label="On this page">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="hero-badge">
          <span className="hero-badge-dot" aria-hidden />
          Open to interesting frontend roles
        </p>
        <h1 className="hero-title">
          <span className="hero-name">Miloš Bogosavljević</span>
          <span className="hero-role">Frontend developer</span>
        </h1>
        <p className="hero-lead">
          Six years shipping UIs for high-traffic products — React, TypeScript, Next.js — from
          player-facing apps to large internal systems.
        </p>
        <div className="hero-meta">
          <span className="hero-location">{CONTACT.location}</span>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`mailto:${CONTACT.email}`}>
            Email me
          </a>
          <a className="btn btn-ghost" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="hero-contact-line">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span className="dot" aria-hidden>
            ·
          </span>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
        </p>
      </section>

      <main className="main">
        <section className="panel" id="about" aria-labelledby="summary-heading">
          <div className="section-head">
            <span className="section-kicker">01</span>
            <h2 id="summary-heading">About</h2>
          </div>
          <div className="section-body">
            <p className="prose">
              Frontend developer with 6+ years of experience building modern web applications in
              the iGaming industry. I focus on React, TypeScript, and Next.js, and on shipping
              scalable, responsive UIs for high-traffic products.
            </p>
            <p className="prose">
              I have also built and maintained large admin systems (CMS, DMS, RMS), including complex
              internal tooling, legacy refactors, and close collaboration with cross-functional
              teams on enterprise and outsourcing work.
            </p>
          </div>
        </section>

        <section className="panel" id="experience" aria-labelledby="experience-heading">
          <div className="section-head">
            <span className="section-kicker">02</span>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <ul className="timeline">
            {EXPERIENCE.map((job) => (
              <li key={`${job.company}-${job.period}`} className="timeline-item">
                <article className="job-card">
                  <div className="job-card-top">
                    <div>
                      <h3 className="job-title">{job.role}</h3>
                      <p className="job-company">
                        {job.company}
                        {job.stack ? (
                          <>
                            <span className="job-sep" aria-hidden>
                              ·
                            </span>
                            <span className="job-stack">{job.stack}</span>
                          </>
                        ) : null}
                      </p>
                    </div>
                    <p className="job-period">{job.period}</p>
                  </div>
                  <ul className="bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel" id="education" aria-labelledby="education-heading">
          <div className="section-head">
            <span className="section-kicker">03</span>
            <h2 id="education-heading">Education</h2>
          </div>
          <ul className="edu-list">
            {EDUCATION.map((e) => (
              <li key={e.title} className="edu-card">
                <div className="edu-card-inner">
                  <div>
                    <h3 className="edu-title">{e.title}</h3>
                    <p className="edu-org">{e.org}</p>
                    {e.note ? <p className="edu-note">{e.note}</p> : null}
                  </div>
                  <p className="edu-period">{e.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel" id="skills" aria-labelledby="skills-heading">
          <div className="section-head">
            <span className="section-kicker">04</span>
            <h2 id="skills-heading">Skills</h2>
          </div>
          <div className="skills-wrap">
            {SKILL_GROUPS.map((g) => (
              <div key={g.label} className="skill-block">
                <h3 className="skill-block-title">{g.label}</h3>
                <div className="chips">
                  {g.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-note">Content reflects CV as of April 2026.</p>
        <p className="footer-sign">Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
