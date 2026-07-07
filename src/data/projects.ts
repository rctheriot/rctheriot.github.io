import type { Project } from '../types'

// Each project points at an image under /public/images/projects/. Until a photo
// is added there, the card shows a styled placeholder automatically.
export const projects: Project[] = [
    {
    id: 'mesonet',
    title: 'Hawaii Mesonet',
    description:
      'A mobile application of real-time environmental data from the Hawaii Climate Data Portal (HCDP) Mesonet network, a statewide system of sensor stations monitoring temperature, rainfall, wind, humidity, and soil conditions across the Hawaiian Islands. Provides the general public reliable sensor data from a federally funded station network.',
    image: '/images/projects/mesonet.jpg',
    tech: ['React', 'PWA'],
    links: [
      { label: 'Live Demo', url: 'https://hawaiimesonet.app' },
      { label: 'View Code', url: 'https://github.com/rctheriot/mesonet-hawaii-mobile'}
    ],
    videos: [],
  },
  {
    id: 'sage3',
    title: 'SAGE3',
    description:
      'Open-source, NSF-funded platform for real-time collaboration across laptops, display walls, and meeting rooms. As a core developer I helped shape its architecture and features into a tool used by research teams worldwide.',
    image: '/images/projects/sage3.jpg',
    tech: ['React', 'Node.js', 'Redis', 'AI'],
    links: [
      { label: 'Live Demo', url: 'https://sage3.manoa.hawaii.edu' },
      { label: 'View Code', url: 'https://github.com/SAGE-3' },
    ],
    videos: [
      { type:'youtube', url: 'https://www.youtube.com/embed/e-UA48-x5a0'}
    ],
  },
  {
    id: 'sbom-visualizer',
    title: 'CycloneDX SBOM Visualizer',
    description:
      'Interactive 3D web tool for exploring CycloneDX Software Bills of Materials. Turns dense dependency and vulnerability data into a navigable spatial view so teams can spot supply-chain risks faster.',
    image: '/images/projects/sbom.jpg',
    tech: ['JavaScript', 'Three.js', 'WebGL'],
    links: [],
    videos: [],
  },

  {
    id: 'hawaii-energy',
    title: 'Hawaii State Energy Office Projects',
    description:
      'Multiple projects to support the Hawaii State Enegry Offices\'s goal of explaining Hawaii\'s energy needs and real land-use tradeoffs to legislators, students, and the general public. Consisted of three different projects; a web based analyitical tool, a VR immerisve experience, and a 3D projection table.',
    image: '/images/projects/haven.jpg',
    tech: ['Unity3D', 'Oculus', 'C#', 'VR'],
    links: [
      { label: 'News Article', url: 'https://www.hawaii.edu/news/2026/01/29/visualizing-energy-future/'}
    ],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/PBeMcKDsoGc'},
      { type: 'youtube', url: 'https://www.youtube.com/embed/5p3XoRPWZJ4' },
      { type: 'youtube', url: 'https://www.youtube.com/embed/kBwBf2bYzsE' }
    ],
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
    id: 'star-wars',
    title: 'Tatooine',
    description:
      'A Star Wars experience built for the Destiny-Class CyberCANOE where users explore a downed X-Wing, wield a lightsaber, and move objects with the Force. An experience that drew press coverage and public demos.',
    image: '/images/projects/starwars.jpg',
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
      'A VR application for interacting with live satellite data, built in Unity3D. Presented at the Advanced Maui Optical and Space Surveillance Technologies Conference (AMOS) in 2016. Project was also forked and used for CyberCOP project ',
    image: '/images/projects/satwatch.jpg',
    tech: ['Unity3D', 'Virtual Reality', 'VR'],
    links: [{ label: 'CyberCop News Article', url: 'https://datascience.hawaii.edu/reality-bytes-the-dust-uh-manoa-students-conquer-national-hackathon/' }],
    videos: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/cSxbsmeaH2o' },

    ],
  },
]
