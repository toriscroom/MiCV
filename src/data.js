// src/data.js

export const profile = {
  name: "Matías Benjamín Alexander Tori Soto",
  title: "Desarrollador Full Stack en Formación | Ing. Civil en Informática",
  mail: "mba.torisoto@gmail.com",
  linkedin: "https://linkedin.com/in/mtorisoto",
  github: "https://github.com/mtori",
  location: "Temuco, Chile",
  summary: "Desarrollador Full Stack en formación con experiencia en optimización de procesos mediante soluciones tecnológicas. Capacidad demostrada en trabajo colaborativo y desarrollo de aplicaciones móviles con impacto social. Actualmente cursando último año de Ingeniería Civil en Informática con mención en Desarrollo de Software."
};

export const experience = [
  {
    id: 1,
    company: "Universidad Católica de Temuco (Área de Física)",
    role: "Técnico de Soporte Informático",
    period: "2024 - Presente",
    description: "Implementé un sistema NAS desde cero con OpenMediaVault para 7 estaciones de trabajo en RAID 1. Realicé pruebas de volumetría y seguridad para garantizar la disponibilidad continua, además de la mantención general de los equipos."
  },
  {
    id: 2,
    company: "Liberty Seguros",
    role: "Ayudante en procesos de informática",
    period: "2019",
    description: "Capacitación en fórmulas de Excel y optimización de procesos para mejorar la eficiencia del equipo. Realicé mantención general a los computadores de la oficina."
  }
];

export const projects = [
  {
    id: 1,
    title: "Tesis: Detector de Billetes para Baja Visión",
    period: "2025 (en desarrollo)",
    description: "Desarrollo de una aplicación móvil que utiliza OpenCV para la identificación de denominaciones de billetes, implementando retroalimentación auditiva para mejorar la accesibilidad.",
    technologies: ["OpenCV", "Accesibilidad"],
  },
  {
    id: 2,
    title: "Sistema NAS para Laboratorio de Física",
    period: "2024",
    description: "Configuración de un servidor con 14 discos duros (7TB en total) para garantizar la redundancia de datos y la seguridad de la información del laboratorio.",
    technologies: ["OpenMediaVault", "RAID", "Redes"],
  },
  {
    id: 3,
    title: "SEGUGESTION: App de Finanzas",
    period: "Freelance",
    description: "Aplicación móvil para finanzas desarrollada en React Native, logrando una reducción del 80% en los tiempos de los procesos del cliente.",
    technologies: ["React Native"],
    link: "" // Puedes añadir el link de GitHub aquí si lo tienes
  },
  {
    id: 4,
    title: "Librería Pulmahue: Catálogo Web",
    period: "Freelance",
    description: "Desarrollo de un catálogo web con el stack MERN, implementando el esquema completo de la base de datos, backend y frontend.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: ""
  },
  {
    id: 5,
    title: "App para Radio Cristiana",
    period: "Freelance",
    description: "Aplicación de streaming en React con un rendimiento optimizado y una interfaz de usuario diseñada con foco en la accesibilidad.",
    technologies: ["React", "Streaming", "UI/UX"],
    link: ""
  }
];

export const skills = {
  languages: ["Python", "JavaScript", "HTML/CSS", "R"],
  frameworks: ["React", "Node.js", "Express", "Flutter"],
  databases: ["MySQL", "MongoDB", "Firebase"],
  otherTools: ["Git", "OpenCV", "Scrum", "Metodologías Ágiles"],
  softSkills: ["Resolución creativa de problemas", "Adaptabilidad tecnológica", "Comunicación efectiva", "Optimización de procesos"]
};