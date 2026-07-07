import type { Publication, ResumeEducation, ResumeJob } from '../types'

export const experience: ResumeJob[] = [
  {
    title: 'Software Engineer',
    company: 'Laboratory for Advanced Visualizations and Applications',
    location: 'Honolulu, HI',
    date: 'Jan 2020 – Present',
    bullets: [
      'Core developer on SAGE3, an open-source, NSF-funded collaborative visualization platform enabling users to share media, data, dashboards, and code across laptops, display walls, and meeting spaces. Contributed to architecture, feature development, and deployment, supporting asynchronous and real-time collaboration.',
      'Developed a 3D web application for visualizing CycloneDX Software Bill of Materials using JavaScript and Three.js, allowing users to explore component hierarchies, dependencies, and vulnerabilities interactively.',
      'Managed a student team developing VR simulations for the Hawaii State Energy Office with Unity and Oculus, visualizing solar and wind projects on Oahu to help stakeholders understand land-use impacts.',
      'Developer on DynaCOVE, a real-time data visualization streaming tool for web, VR, AR, and mobile devices, for rendering large datasets on underpowered hardware in partnership with Oceanit (SBIR project).',
      'Conducted lab tours and live demonstrations for VIPs, legislators, and academic partners while managing lab equipment, including large display walls, hybrid-reality environments, 3D printers, and technical supplies.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Laboratory for Advanced Visualizations and Applications',
    location: 'Honolulu, HI',
    date: '2016 – Dec 2019',
    bullets: [
      "Developed HAVEN, an Angular/Firebase web application visualizing Hawaii's energy resource interdependencies for the Hawaii State Energy Office.",
      'Developed a virtual reality application for interacting with live satellite data on the HTC Vive using Unity3D, presented at the Advanced Maui Optical and Space Surveillance Technologies Conference (AMOS) in 2016.',
      'Core developer on Destiny, a hybrid reality environment with 32 OLED displays in a circular formation for immersive 3D visualization. Built Unity3D tools to manage camera perspectives and render stereoscopic scenes. Developed a GPU shader to mitigate crosstalk and enhance visual clarity.',
    ],
  },
  {
    title: 'Avionics Electrical Technician',
    company: 'United States Coast Guard',
    location: 'Kapolei, HI',
    date: 'Jan 2007 – Jan 2013',
    bullets: [
      'Operated, inspected, and maintained avionics systems on HC-130 aircraft.',
      'Conducted search and rescue missions, performed in-flight navigation, and radio operations.',
      "Awarded the Commandant's Letter of Commendation for performance during a search and rescue operation, contributing to the successful rescue of stranded mariners.",
    ],
  },
]

export const education: ResumeEducation[] = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Hawaii at Manoa',
    location: 'Honolulu, HI',
    date: 'Aug 2017 – Dec 2019',
  },
]

export const publications: Publication[] = [
  {
    title: "Reflecting on the SAGE Team's 20-Year Research in Digital Collaboration Tools",
    venue: 'Computing in Science & Engineering, 2023 (Co-Author)',
    doi: '10.1109/MCSE.2023.3297753',
  },
  {
    title: 'Data in Context: Engaging Audiences with 3D Physical Geo-Visualization',
    venue: 'CHI Conference, 2020 (Co-Author)',
    doi: '10.1145/3334480.3382968',
  },
  {
    title: 'Destiny-Class CyberCANOE: Hybrid Reality Visualization Environment',
    venue: 'Electronic Imaging, 2017 (Co-Author)',
    doi: '10.2352/ISSN.2470-1173.2017.3.ERVR-093',
  },
]

export const skills = {
  technologies: 'JavaScript (React, Node.js), Python, Docker, Redis, AI (RAG, MCP), Three.js, Unity3D',
  skills:
    'Full-stack Development, Human-Computer Interaction, Data Visualization, VR Applications, Hybrid Reality Environments, Equipment Management (Display Walls, Headsets, 3D Printers), Technical Demos',
  interests: 'Running, Gardening, Hiking, Cooking, Videogames',
}
