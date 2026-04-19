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
      <header className="header">
        <div>
          <h1 className="name">Miloš Bogosavljević</h1>
          <p className="tagline">Frontend developer</p>
          <p className="meta">
            {CONTACT.location} ·{' '}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{' '}
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
          </p>
          <nav className="links" aria-label="Profiles">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="sep" aria-hidden>
              ·
            </span>
            <a href={CONTACT.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="summary-heading">
          <h2 id="summary-heading">Summary</h2>
          <p className="prose">
            Frontend developer with 6+ years of experience building modern web applications in the
            iGaming industry. I focus on React, TypeScript, and Next.js, and on shipping scalable,
            responsive UIs for high-traffic products.
          </p>
          <p className="prose">
            I have also built and maintained large admin systems (CMS, DMS, RMS), including complex
            internal tooling, legacy refactors, and close collaboration with cross-functional teams
            on enterprise and outsourcing work.
          </p>
        </section>

        <section className="section" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <ul className="timeline">
            {EXPERIENCE.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">
                      {job.company}
                      {job.stack ? ` · ${job.stack}` : ''}
                    </p>
                  </div>
                  <p className="job-period">{job.period}</p>
                </div>
                <ul className="bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul className="list-plain">
            {EDUCATION.map((e) => (
              <li key={e.title}>
                <div className="edu-row">
                  <div>
                    <h3>{e.title}</h3>
                    <p className="muted">{e.org}</p>
                    {e.note ? <p className="muted small">{e.note}</p> : null}
                  </div>
                  <p className="job-period">{e.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <div className="skills-grid">
            {SKILL_GROUPS.map((g) => (
              <div key={g.label}>
                <h3 className="skills-group-title">{g.label}</h3>
                <p className="skills-items">{g.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="muted small">Content reflects CV as of April 2026.</p>
      </footer>
    </div>
  )
}

export default App
