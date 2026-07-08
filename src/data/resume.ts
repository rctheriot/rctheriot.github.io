import type { Publication, ResumeEducation, ResumeJob } from '../types'

export const experience: ResumeJob[] = [
  {
    title: 'Software Engineer',
    company: 'Laboratory for Advanced Visualizations and Applications',
    location: 'Honolulu, HI',
    date: 'Jan 2020 – Present',
    bullets: [
      'Core developer on SAGE3, an open-source, NSF-funded platform that lets research teams share media, data, dashboards, and code across laptops, display walls, and meeting rooms, shaping the architecture and features into a tool used by research groups worldwide, whether they\'re collaborating live or asynchronously.',
      'Built the Hawaii Mesonet mobile app, giving the public reliable, real-time access to statewide environmental sensor data (temperature, rainfall, wind, humidity, and soil conditions) from a federally funded network of stations across the islands.',
      'Developed an interactive 3D tool for exploring CycloneDX Software Bills of Materials, turning dense dependency and vulnerability data into a navigable spatial view so teams can spot supply-chain risks faster.',
      'Led a student team building VR simulations of solar and wind projects on Oahu for the Hawaii State Energy Office, helping legislators and stakeholders see real land-use tradeoffs before they made decisions.',
      'Hosted lab tours and live demonstrations for VIPs, legislators, and academic partners, while managing lab equipment including large display walls, hybrid-reality environments, and 3D printers.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Laboratory for Advanced Visualizations and Applications',
    location: 'Honolulu, HI',
    date: '2016 – Dec 2019',
    bullets: [
      "Built HAVEN, an Angular/Firebase web app that helped the Hawaii State Energy Office turn Hawaii's tangled energy resource interdependencies into something legislators and the public could actually explore and understand.",
      'Built a VR application for exploring live satellite data on the HTC Vive with Unity3D, presented at the Advanced Maui Optical and Space Surveillance Technologies Conference (AMOS) in 2016 and later forked for the CyberCOP project.',
      'Core developer on Destiny, a hybrid-reality environment of 32 OLED displays arranged in a circle for immersive 3D visualization. Built the Unity3D camera tooling researchers relied on and a custom GPU shader that cut crosstalk for noticeably sharper stereoscopic imagery.',
      'Built Tatooine, a Star Wars experience for the Destiny-Class CyberCANOE letting visitors explore a downed X-Wing, wield a lightsaber, and move objects with the Force, an experience that drew press coverage and public demos.',
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
