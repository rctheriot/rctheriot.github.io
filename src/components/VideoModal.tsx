import { useCallback, useEffect, useState } from 'react'
import type { Project } from '../types'

interface VideoModalProps {
  project: Project
  onClose: () => void
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  const [index, setIndex] = useState(0)
  const total = project.videos.length

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const video = project.videos[index]

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${project.title} videos`}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-video">
          {video.type === 'youtube' ? (
            <iframe
              key={video.url}
              src={video.url}
              title={`${project.title} video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video key={video.url} controls autoPlay loop>
              <source src={video.url} type="video/mp4" />
            </video>
          )}

          {total > 1 && (
            <>
              <button type="button" className="modal-arrow prev" onClick={prev} aria-label="Previous video">
                ‹
              </button>
              <button type="button" className="modal-arrow next" onClick={next} aria-label="Next video">
                ›
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="modal-dots">
            {project.videos.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`dot${i === index ? ' active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
