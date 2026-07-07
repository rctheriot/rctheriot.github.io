import { profile } from '../data/profile'
import type { Theme } from '../useTheme'

interface SidebarProps {
  activeSection: string
  onNavigate: (id: string) => void
  theme: Theme
  onToggleTheme: () => void
}

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
]

export function Sidebar({ activeSection, onNavigate, theme, onToggleTheme }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <header className="sidebar-header">
          <h1 className="sidebar-name">{profile.name}</h1>
          <p className="sidebar-title">{profile.title}</p>
          <p className="sidebar-summary">{profile.summary}</p>
        </header>

        <nav className="sidebar-nav" aria-label="Sections">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={`nav-link${activeSection === s.id ? ' active' : ''}`}
                  onClick={() => onNavigate(s.id)}
                >
                  <span className="nav-marker" aria-hidden="true" />
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-socials">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
            <span>Email</span>
          </a>
        </div>

        <a className="resume-button" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          Download Résumé
        </a>

        <button type="button" className="theme-toggle" onClick={onToggleTheme}>
          <span>{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
          <span className={`toggle-switch${theme === 'dark' ? ' on' : ''}`} aria-hidden="true" />
        </button>
      </div>
    </aside>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.28 5.69.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
