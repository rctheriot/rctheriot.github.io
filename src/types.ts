export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectVideo {
  type: 'youtube' | 'mp4'
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  links: ProjectLink[]
  videos: ProjectVideo[]
}

export interface ResumeJob {
  title: string
  company: string
  location: string
  date: string
  bullets: string[]
}

export interface ResumeEducation {
  degree: string
  school: string
  location: string
  date: string
}

export interface Publication {
  title: string
  venue: string
  doi: string
}
