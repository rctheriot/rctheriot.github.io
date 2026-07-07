import type { Project } from '../types'

// Each project points at an image under /public/images/projects/. Until a photo
// is added there, the card shows a styled placeholder automatically.
export const projects: Project[] = [
  {
    id: 'sage3',
    title: 'SAGE3',
    description:
      'Open-source, NSF-funded platform for real-time collaboration across laptops, display walls, and meeting rooms. As a core developer I helped shape its architecture and features into a tool used by research teams worldwide.',
    image: '/images/projects/sage3.jpg',
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
      'Interactive 3D web tool for exploring CycloneDX Software Bills of Materials. Turns dense dependency and vulnerability data into a navigable spatial view so teams can spot supply-chain risks faster.',
    image: '/images/projects/sbom-visualizer.jpg',
    tech: ['JavaScript', 'Three.js', 'WebGL'],
    links: [],
    videos: [],
  },
  {
    id: 'destiny',
    title: 'Destiny-Class CyberCANOE',
    description:
      'Hybrid reality environment of 32 OLED displays arranged in a circle for immersive 3D visualization. Built the Unity3D camera tooling and a custom GPU shader that reduced crosstalk for noticeably sharper stereoscopic imagery.',
    image: '/images/projects/destiny.jpg',
    tech: ['Unity3D', 'Hybrid Reality', 'GPU Shaders', 'C#'],
    links: [{ label: 'Paper', url: 'https://www.mdpi.com/2079-9292/10/4/513' }],
    videos: [{ type: 'youtube', url: 'https://www.youtube.com/embed/afdGKTBPxog' }],
  },
  {
    id: 'hawaii-energy',
    title: 'Hawaii State Energy Office Projects',
    description:
      'VR simulations visualizing proposed solar and wind projects on Oahu for the Hawaii State Energy Office. Led a student team building Unity/Oculus experiences that helped stakeholders weigh real land-use tradeoffs.',
    image: '/images/projects/hawaii-energy.jpg',
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
      'Real-time streaming tool for rendering large datasets across web, VR, AR, and mobile. Built with Oceanit (SBIR) to push heavy visualizations onto underpowered hardware.',
    image: '/images/projects/dynacove.jpg',
    tech: ['JavaScript', 'WebRTC', 'VR/AR', 'Unity'],
    links: [],
    videos: [],
  },
  {
    id: 'haven',
    title: 'HAVEN',
    description:
      "Angular/Firebase web app mapping Hawaii's energy resource interdependencies for the State Energy Office. Gave planners an interactive view of how the islands' energy systems connect.",
    image: '/images/projects/haven.jpg',
    tech: ['Angular', 'Firebase', 'TypeScript', 'D3.js'],
    links: [],
    videos: [],
  },
  {
    id: 'star-wars',
    title: 'Tatooine',
    description:
      'Hybrid reality Star Wars experience where users explore a downed X-Wing, wield a lightsaber, and move objects with the Force. A Unity3D showcase piece that drew press coverage and public demos.',
    image: '/images/projects/star-wars.jpg',
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
      'HTC Vive VR application for interacting with live satellite data, built in Unity3D. Presented at the Advanced Maui Optical and Space Surveillance Technologies Conference (AMOS) in 2016.',
    image: '/images/projects/satellite-watch.jpg',
    tech: ['Unity3D', 'Virtual Reality', 'HTC Vive'],
    links: [],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/cSxbsmeaH2o' },
      { type: 'youtube', url: 'https://www.youtube.com/embed/8w6bvCJymcQ' },
    ],
  },
]
