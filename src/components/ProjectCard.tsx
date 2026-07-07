import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onOpenVideos: (project: Project) => void
}

export function ProjectCard({ project, onOpenVideos }: ProjectCardProps) {
  const hasVideos = project.videos.length > 0

  return (
    <article className="project-card">
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {hasVideos && (
          <button type="button" className="action-button primary" onClick={() => onOpenVideos(project)}>
            <PlayIcon />
            Watch{project.videos.length > 1 ? ` (${project.videos.length})` : ''}
          </button>
        )}
        {project.links.map((link) => (
          <a key={link.url} className="action-button" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
