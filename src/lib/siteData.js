export const siteMeta = {
  title: "Niraj Mourya | Full Stack Engineer",
  description: "Portfolio website for Niraj Mourya showcasing skills, projects, and contact.",
  url: "https://nirajmourya.in",
};

export const navLinks = [
  { title: "About", path: "#about" },
  { title: "Blog", path: "https://martianchronicles.nirajmourya.in/" },
  { title: "Projects", path: "#projects" },
  { title: "Certifications", path: "#certifications" },
  { title: "Contact", path: "#contact" },
];

export const heroContent = {
  greetings: "Hello, I'm",
  name: "Niraj Mourya",
  roles: ["Full Stack Engineer", "React Developer", "Node.js Developer", "AI-Assisted Developer", "Technical Blogger"],
  description: "Lead Engineer - I at CitiusTech. With over 7+ years of IT experience.",
  resumePath: "/resume/Niraj_Mourya_Resume.pdf",
  image: {
    src: "/images/NirajMourya_Portrait.jpg",
    alt: "Portrait of Niraj Mourya",
  },
};

export const aboutData = {
  image: {
    src: "/images/NirajMourya_Portrait2.jpeg",
    alt: "Portrait of Niraj Mourya",
  },
  title: "About Me",
  description: [
    "I am a Full Stack Software Engineer with 7+ years of experience building scalable web applications and enterprise solutions. Currently working as a Lead Engineer - I at CitiusTech, I specialize in React, JavaScript/TypeScript, Node.js, and modern full-stack development.",
    "Over the years, I have contributed to enterprise platforms, internal automation systems, and client-facing applications, focusing on performance, usability, and maintainable architecture. My experience spans frontend engineering, backend development, API integration, database design, and end-to-end application delivery.",
    "I am passionate about creating clean, efficient, and user-centric applications, with strong expertise in React, Node.js, Express.js, MySQL, MongoDB, and modern JavaScript ecosystems. I also actively explore system design, scalable architectures, and AI-assisted development workflows.",
  ],
  tabs: [
    {
      title: "Skills",
      id: "skills",
      items: [
        "Javascript",
        "React",
        "Node.js",
        "ExpressJS",
        "Sequelize",
        "HTML",
        "CSS",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Education",
      id: "education",
      items: [
        "Bachelor of Engineering (Information Technology)",
        "D. Y. Patil College of Engineering",
        "Pune, Maharashtra, India",
      ],
    },
    {
      title: "Experience",
      id: "experience",
      items: [
        "Lead Engineer - I @CitiusTech (Dec 2024 - Present)",
        "Programmer Analyst @Bitwise Solutions Pvt. Ltd. (Jun 2019 - Nov 2019)",
        "For details please check resume",
      ],
    },
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    icon: "frontend",
    items: ["React", "Redux", "TypeScript", "JavaScript(ES6+)"],
  },
  {
    title: "Backend",
    icon: "backend",
    items: ["Node.js", "Express.js", "REST APIs", "Sequelize"],
  },
  {
    title: "Database",
    icon: "database",
    items: ["MySQL", "MongoDB", "SQL", "Database Design"],
  },
  {
    title: "AI",
    icon: "ai",
    items: ["GitHub Copilot", "Claude Code", "Prompt Engineering", "AI Assisted Development"],
  },
];

export const experienceTimeline = [
  {
    period: "Dec 2024 - Present",
    title: "Lead Engineer - I",
    company: "CitiusTech",
    highlights: [
      "Delivered full-stack features using React, Node.js, and MySQL for a healthcare learning platform with 8K+ active users.",
      "Improved engineering quality through reusable component architecture, REST API design, code reviews, and Agile delivery."
    ],
  },
  {
    period: "Jun 2019 - Nov 2024",
    title: "Programmer Analyst",
    company: "Bitwise Solutions Pvt. Ltd.",
    highlights: [
      "Engineered enterprise web applications and workflow automation solutions, reducing manual effort through process digitization.",
      "Designed and maintained scalable internal platforms while collaborating with cross-functional teams across multiple business domains"
    ],
  },
];

export const educationCard = {
  degree: "Bachelor of Engineering (Information Technology)",
  graduationYear: "2019",
  college: "D. Y. Patil College of Engineering",
  location: "Pune, Maharashtra, India",
  coursework: [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Web Technologies",
  ],
  achievements: [
    "Full Stack Development & Product Engineering – Pesto (2024)"
  ],
};

export const resumeCard = {
  title: "Resume",
  description: "Download a concise overview of my experience, skills, and selected work.",
  href: "/resume/Niraj_Mourya_Resume.pdf",
};

export const projectsData = [
  {
    id: 1,
    title: "Martian Chronicles",
    description: "Blog application built with ReactJS and Material UI.",
    image: "/images/projects/MartianChronicles.png",
    tags: ["All", "Web", "Mobile"],
    gitURL: "https://github.com/NirajMourya/",
    previewURL: "https://martianchronicles.nirajmourya.in/",
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description: "Personal display website built with Next.js and Tailwind.",
    image: "/images/projects/Portfolio-v2.png",
    tags: ["All", "Web", "Mobile"],
    gitURL: "https://github.com/NirajMourya/portfolio",
    previewURL: "https://nirajmourya.in/",
  },
  {
    id: 3,
    title: "Bibliobazaar",
    description: "E-Commerce application for book lovers.",
    image: "/images/projects/Bibliobazaar.png",
    tags: ["All", "Web", "Mobile"],
    gitURL: "https://github.com/NirajMourya/",
    previewURL: "https://bibliobazaar.netlify.app/",
  },
  {
    id: 4,
    title: "Country Capital",
    description: "Country capital trivia game.",
    image: "/images/projects/CountryCapital.png",
    tags: ["All", "Web"],
    gitURL: "https://github.com/NirajMourya/CountryCaptialGame",
    previewURL: "https://countrycapitalgame.netlify.app/",
  },
  {
    id: 5,
    title: "Place Picker",
    description: "Travel planning app to save destination ideas.",
    image: "/images/projects/PlacePicker.png",
    tags: ["All", "Web"],
    gitURL: "https://github.com/NirajMourya/PlacePicker",
    previewURL: "https://placepickerreact.netlify.app/",
  },
  {
    id: 6,
    title: "Tick Tock Challenge",
    description: "Game built to stop the timer at the right moment.",
    image: "/images/projects/TickTockChallenge.png",
    tags: ["All", "Web"],
    gitURL: "https://github.com/NirajMourya/TickTockChallenge",
    previewURL: "https://tictockchallenge.netlify.app/",
  },
  {
    id: 7,
    title: "Project Pilot",
    description: "Task tracking app for project work.",
    image: "/images/projects/ProjecsPilot.png",
    tags: ["All", "Web"],
    gitURL: "https://github.com/NirajMourya/ProjectPilot",
    previewURL: "https://projectspilot.netlify.app/",
  },
  {
    id: 8,
    title: "React Brain Teaser",
    description: "React quiz application to test logic skills.",
    image: "/images/projects/ReactBrainTeaser.png",
    tags: ["All", "Web"],
    gitURL: "https://github.com/NirajMourya/ReactBrainTeaser",
    previewURL: "https://reactbrainteaser.netlify.app/",
  },
  {
    id: 9,
    title: "Reactoogle",
    description: "Search engine clone built with React.",
    image: "/images/projects/Reactoogle.png",
    tags: ["All", "Web"],
    gitURL: "https://github.com/NirajMourya/Reactoogle",
    previewURL: "https://reactoogle.netlify.app/",
  },
];

export const socialLinks = [
  { href: "https://github.com/NirajMourya", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/in/niraj-mourya/", label: "LinkedIn", icon: "linkedin" },
  { href: "https://dev.to/nirajmourya", label: "Dev.to", icon: "devto" },
  { href: "https://martianchronicles.nirajmourya.in/", label: "Blog", icon: "blog" },
];

export const heroSocialLinks = [
  { href: "https://github.com/NirajMourya", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/in/niraj-mourya/", label: "LinkedIn", icon: "linkedin" },
  { href: "https://dev.to/nirajmourya", label: "Dev.to", icon: "devto" },
  { href: "https://martianchronicles.nirajmourya.in/", label: "Blog", icon: "blog" },
];

export const certificationsData = [
  {
    id: 1,
    title: "Full Stack Development & Product Engineering",
    issuer: "Pesto",
    date: "2024",
    type: "image",
    src: "/images/certifications/Full_Stack_Development.png",
    alt: "Full Stack Development & Product Engineering Certification",
  },
  {
    id: 2,
    title: "System Design Masterclass",
    issuer: "Udemy",
    date: "2026",
    type: "image",
    src: "/images/certifications/System_Design_Masterclass.jpg",
    alt: "System Design Masterclass Certification",
  },
  {
    id: 3,
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    issuer: "Linkedin Learning",
    date: "2024",
    type: "image",
    src: "/images/certifications/JavaScript Foundations Professional Certificate by Mozilla.png",
    alt: "JavaScript Foundations Professional Certificate by Mozilla",
  },
  {
    id: 4,
    title: "Understanding TypeScript",
    issuer: "Udemy",
    date: "2019",
    type: "image",
    src: "/images/certifications/Understanding_TypeScript.jpg",
    alt: "Understanding TypeScript Certification",
  },
  {
    id: 5,
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "2026",
    type: "image",
    src: "/images/certifications/ai-fluency-framework-foundations.png",
    alt: "AI Fluency Framework & Foundations Certification",
  },
  {
    id: 6,
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "2026",
    type: "image",
    src: "/images/certifications/claude-code-101.png",
    alt: "Claude Code 101 Certification",
  },
  {
    id: 7,
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    type: "image",
    src: "/images/certifications/claude-101.png",
    alt: "Claude 101 Certification",
  },
  {
    id: 8,
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "2026",
    type: "image",
    src: "/images/certifications/claude-code-in-action.png",
    alt: "Claude Code in Action Certification",
  }
  // Add more certifications here
];

export const footerData = {
  copyright: "© 2026 NIRAJ MOURYA. All rights reserved.",
  tagline: "Powered by curiosity and code.",
};
