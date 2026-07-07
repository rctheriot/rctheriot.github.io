import { useState } from 'react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
  onOpenVideos: (project: Project) => void
}

export function ProjectCard({ project, onOpenVideos }: ProjectCardProps) {
  const hasVideos = project.videos.length > 0
  const [imageOk, setImageOk] = useState(Boolean(project.image))

  const openVideos = () => hasVideos && onOpenVideos(project)

  return (
    <article className="project-card">
      <div
        className={`project-media${hasVideos ? ' clickable' : ''}`}
        onClick={openVideos}
        role={hasVideos ? 'button' : undefined}
        tabIndex={hasVideos ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasVideos && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            openVideos()
          }
        }}
        aria-label={hasVideos ? `Watch ${project.title} videos` : undefined}
      >
        {imageOk && project.image ? (
          <img
            className="project-image"
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageOk(false)}
          />
        ) : (
          <div className="project-image-placeholder">
            <span>{project.title}</span>
          </div>
        )}

        {hasVideos && (
          <div className="project-play" aria-hidden="true">
            <PlayIcon />
            <span>Watch{project.videos.length > 1 ? ` (${project.videos.length})` : ''}</span>
          </div>
        )}
      </div>

      <div className="project-content">
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

        {project.links.length > 0 && (
          <div className="project-actions">
            {project.links.map((link) => (
              <a key={link.url} className="action-button" href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
