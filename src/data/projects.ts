import type { Project } from '../types'

// Video entries that were unfilled placeholders (YOUR_VIDEO_ID) or pointed at
// assets that don't exist have been removed. Descriptions for Destiny and
// SatWatch have been corrected using details from the resume.
export const projects: Project[] = [
  {
    id: 'sage3',
    title: 'SAGE3',
    description:
      'Open-source, NSF-funded collaborative visualization platform enabling users to share media, data, dashboards, and code across laptops, display walls, and meeting spaces. Core developer contributing to architecture, features, and real-time collaboration.',
    tech: ['React', 'Node.js', 'Redis', 'AI'],
    links: [
      { label: 'Live Demo', url: 'https://sage3.sagecommons.org' },
      { label: 'View Code', url: 'https://github.com/SAGE-3' },
    ],
    videos: [],
  },
  {
    id: 'sbom-visualizer',
    title: 'CycloneDX SBOM Visualizer',
    description:
      'A 3D web application for visualizing Software Bill of Materials, allowing users to interactively explore component hierarchies, dependencies, and vulnerabilities in a spatial environment.',
    tech: ['JavaScript', 'Three.js', 'WebGL'],
    links: [],
    videos: [],
  },
  {
    id: 'destiny',
    title: 'Destiny-Class CyberCANOE',
    description:
      'A hybrid reality environment with 32 OLED displays arranged in a circular formation for immersive 3D visualization. Built Unity3D tools to manage camera perspectives and render stereoscopic scenes, plus a GPU shader to mitigate crosstalk and enhance visual clarity.',
    tech: ['Unity3D', 'Hybrid Reality', 'GPU Shaders', 'C#'],
    links: [{ label: 'Paper', url: 'https://www.mdpi.com/2079-9292/10/4/513' }],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/afdGKTBPxog' }],
  },
  {
    id: 'hawaii-energy',
    title: 'Hawaii State Energy Office Projects',
    description:
      'VR simulations for the Hawaii State Energy Office visualizing solar and wind projects on Oahu. Managed a student team building Unity and Oculus experiences to help stakeholders understand land-use impacts.',
    tech: ['Unity3D', 'Oculus', 'C#', 'VR'],
    links: [],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/kBwBf2bYzsE' },
      { type: 'youtube', url: 'https://www.youtube.com/embed/5p3XoRPWZJ4' },
    ],
  },
  {
    id: 'dynacove',
    title: 'DynaCOVE',
    description:
      'Real-time data visualization streaming tool for web, VR, AR, and mobile devices. Designed for rendering large datasets on underpowered hardware in partnership with Oceanit (SBIR project).',
    tech: ['JavaScript', 'WebRTC', 'VR/AR', 'Unity'],
    links: [],
    videos: [],
  },
  {
    id: 'haven',
    title: 'HAVEN',
    description:
      "Angular/Firebase web application visualizing Hawaii's energy resource interdependencies for the Hawaii State Energy Office. An interactive data visualization platform for energy planning and analysis.",
    tech: ['Angular', 'Firebase', 'TypeScript', 'D3.js'],
    links: [],
    videos: [],
  },
  {
    id: 'star-wars',
    title: 'Tatooine',
    description:
      'A hybrid reality environment simulating the planet Tatooine from Star Wars. Users explore a downed X-Wing fighter, wield a lightsaber, and move objects with the Force. Built in Unity3D with assets borrowed from Star Wars Battlefront.',
    tech: ['Unity3D', 'Hybrid Reality'],
    links: [
      {
        label: 'News Article',
        url: 'https://www.hawaii.edu/news/2017/05/25/manoa-students-create-star-wars-simulation/',
      },
    ],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/kuTaRwFCu4c' }],
  },
  {
    id: 'satellite-watch',
    title: 'SatWatch',
    description:
      'A virtual reality application for interacting with live satellite data on the HTC Vive, built in Unity3D. Presented at the Advanced Maui Optical and Space Surveillance Technologies Conference (AMOS) in 2016.',
    tech: ['Unity3D', 'Virtual Reality', 'HTC Vive'],
    links: [],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/cSxbsmeaH2o' },
      { type: 'youtube', url: 'https://www.youtube.com/embed/8w6bvCJymcQ' },
    ],
  },
]
