import { useEffect, useRef, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { ProjectCard } from './components/ProjectCard'
import { Resume } from './components/Resume'
import { VideoModal } from './components/VideoModal'
import { projects } from './data/projects'
import type { Project } from './types'
import { useTheme } from './useTheme'

export function App() {
  const { theme, toggleTheme } = useTheme()
  const [activeVideos, setActiveVideos] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState('projects')

  const projectsRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)

  const scrollTo = (id: string) => {
    const ref = id === 'projects' ? projectsRef : experienceRef
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const sections = [projectsRef.current, experienceRef.current].filter(
      (el): el is HTMLElement => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="layout">
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="content">
        <section id="projects" ref={projectsRef} className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpenVideos={setActiveVideos} />
            ))}
          </div>
        </section>

        <section id="experience" ref={experienceRef} className="section">
          <h2 className="section-title">Experience</h2>
          <Resume />
        </section>
      </main>

      {activeVideos && <VideoModal project={activeVideos} onClose={() => setActiveVideos(null)} />}
    </div>
  )
}
