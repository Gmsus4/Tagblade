// datos.js - Archivo de datos para componentes

import Code from "../components/icons/Code.astro";
import Hosting from "../components/icons/Hosting.astro";
import Rocket from "../components/icons/Rocket.astro";
import Design from "../components/icons/Design.astro";
import Fan from "../components/icons/Fan.astro";
import Handshake from "../components/icons/Handshake.astro";
import Feather from "../components/icons/Feather.astro";
import Send from "../components/icons/Send.astro";
import Search from "../components/icons/Search.astro";
import Instagram from "../components/icons/Instagram.astro";

// Datos para la sección de Navbar
export const navbarLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    // { name: "Proyectos", href: "#proyectos" },
    { name: "Sobre nosotros", href: "#about-us" },
    { name: "Contacto", href: "#contacto" }
];  

// Textos para secciones
export const sectionTexts = {
    servicios: {
      title: "Servicios",
      subtitle: "Soluciones web completas para tu negocio: diseño, desarrollo, hosting y mantenimiento. Creamos sitios web profesionales que convierten visitantes en clientes.",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    proceso: {
      title: "Proceso",
      subtitle: "De la idea a la realidad en cuatro pasos. Nuestro método estructurado garantiza resultados predecibles y sitios web que cumplen tus objetivos de negocio.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    proyectos: {
      title: "Proyectos",
      subtitle: "Conoce nuestro trabajo y cómo hemos ayudado a otras empresas a tener presencia online efectiva.",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    },
    sobreNosotros: {
      title: "Sobre nosotros",
      subtitle: "Equipo de profesionales apasionados por crear soluciones web que impulsan el crecimiento de tu negocio.",
      icon: "M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75zm-7.623 0a2.7 2.7 0 0 0-.62 1.53l-.01.22v4.749c0 .847.192 1.649.534 2.365Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V11.75a1.75 1.75 0 0 1 1.606-1.744L3.75 10zm9.744 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.3-.628.484-1.32.525-2.052l.009-.315V11.75c0-.665-.236-1.275-.63-1.75M12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
    },
    contacto: {
      title: "Contacto",
      subtitle2: "¿Listo para iniciar tu proyecto? Cuéntanos qué necesitas y te responderemos a la brevedad.",
      subtitle: "¿Tienes una idea en mente? Contáctanos y transformaremos tu visión en una web profesional que impulse tu negocio.",
      icon: "M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2",
      whatsappNumber: "523861112341"
    }
  };

// Datos para la sección de Servicios
export const serviciosData = [
  {
    title: "Diseño web",
    subtitle: "Diseños visuales a medida",
    description:
      "Sitios visuales, claros y adaptados a tu marca. Pensados para una excelente experiencia de usuario desde cualquier dispositivo.",
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    icon: Design
  },
  {
    title: "Desarrollo web",
    subtitle: "Código limpio y funcional",
    description:
      "Convertimos diseños en sitios web reales utilizando tecnologías como React, Next.js, Node.js y bases de datos modernas.",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    icon: Code
  },
  {
    title: "Dominio y hosting",
    subtitle: "Tu sitio en línea desde el día uno",
    description:
      "Nos encargamos de gestionar tu dominio y hosting para que tu página esté en línea desde el primer día, sin complicaciones.",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    icon: Hosting
  },
  {
    title: "Optimización de velocidad",
    subtitle: "Sitios rápidos como un rayo",
    description:
      "Aceleramos la carga de tu sitio para ofrecer la mejor experiencia a tus visitantes y mejorar tu posicionamiento en buscadores.",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    icon: Rocket
  },
  {
    title: "Mantenimiento web",
    subtitle: "Tu sitio siempre al día",
    description:
      "Realizamos actualizaciones, ajustes técnicos, respaldo de datos y mejoras continuas para asegurar su correcto funcionamiento.",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    icon: Fan
  },
  {
    title: "Asesoría técnica",
    subtitle: "Acompañamiento personalizado",
    description:
      "Te guiamos para que tomes decisiones acertadas en lo técnico y estratégico, con enfoque en crecimiento digital.",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    icon: Handshake
  }
];

// Datos para la sección de Proceso
export const procesosData = [
  {
    titleIcon: "Descubrir",
    subtitle: "Exploración inicial",
    description: "Exploramos tu negocio, objetivos y audiencia para sentar una base estratégica sólida.",
    urlImage: "https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: Search
  },
  {
    titleIcon: "Definir",
    subtitle: "Dirección clara",
    description: "Delimitamos el enfoque, arquitectura y funcionalidades del sitio con base en la información obtenida.",
    urlImage: "https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: Feather
  },
  {
    titleIcon: "Desarrollar",
    subtitle: "Diseño y programación",
    description: "Diseñamos y programamos interfaces modernas con enfoque en experiencia, adaptabilidad y rendimiento.",
    urlImage: "https://images.pexels.com/photos/5054351/pexels-photo-5054351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: Code
  },
  {
    titleIcon: "Entregar",
    subtitle: "Publicación final",
    description: "Probamos, ajustamos y desplegamos el sitio, asegurando compatibilidad y acompañamiento inicial.",
    urlImage: "https://images.pexels.com/photos/31726650/pexels-photo-31726650/free-photo-of-modern-home-office-with-ergonomic-chair-and-monitor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: Send
  }
];


// Datos para la sección de Proyectos (comentados en el código original)
export const proyectosData = [
  {
    title: "Cielo Earth",
    description: "Diseño mejorado, para versión en Desktop y dispositivos móviles",
    technologies: ["Astro", "Tailwind CSS"],
    urlImage: "https://images.pexels.com/photos/262513/pexels-photo-262513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "Pendiente",
    urlPage: "#proyectos",
    features: ["Rediseño", "Velocidad mejorada", "SEO mejorado", "Reponsive Design"]
  },
  {
    title: "Cielo Earth",
    description: "Diseño mejorado, para versión en Desktop y dispositivos móviles",
    technologies: ["Astro", "Tailwind CSS"],
    urlImage: "https://images.pexels.com/photos/262513/pexels-photo-262513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "Pendiente",
    urlPage: "#proyectos",
    features: ["Rediseño", "Velocidad mejorada", "SEO mejorado", "Reponsive Design"]
  },
  {
    title: "Cielo Earth",
    description: "Diseño mejorado, para versión en Desktop y dispositivos móviles",
    technologies: ["Astro", "Tailwind CSS"],
    urlImage: "https://images.pexels.com/photos/262513/pexels-photo-262513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    type: "Pendiente",
    urlPage: "#proyectos",
    features: ["Rediseño", "Velocidad mejorada", "SEO mejorado", "Reponsive Design"]
  },
];

// Datos de los socios del proyecto
export const partners = [
    { 
        id: 'fernando',
        name: 'Fernando Gómez',
        username: 'gmsus4.dev',
        role: 'Desarrollador Web Front-end',
        imageUrl: '/gmsus4.jpg',
        socials: [
          {
            name: 'Instagram',
            url: 'https://instagram.com/gmsus4.dev',
            icon: Instagram
          },
        ]
      },
]


// Tecnologías que utilizamos
export const technologies = [
  // Lenguajes y fundamentos
  {
    nombre: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    nombre: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    nombre: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    nombre: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  // Frontend frameworks y herramientas
  {
    nombre: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    nombre: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    nombre: "Astro",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
  },
  {
    nombre: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    nombre: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    nombre: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },

  // Backend y bases de datos
  {
    nombre: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    nombre: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    nombre: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    nombre: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    nombre: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    nombre: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    nombre: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    nombre: "Socket.io",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  },

  // Control de versiones y despliegue
  {
    nombre: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    nombre: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    nombre: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    nombre: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  {
    nombre: "Netlify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  },
  {
    nombre: "Railway",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg",
  },

  // Herramientas y diseño
  {
    nombre: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    nombre: "Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
  },
  {
    nombre: "VSCode",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    nombre: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    nombre: "Notion",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
  },
  {
    nombre: "NPM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
];


