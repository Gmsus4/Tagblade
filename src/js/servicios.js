import Code from "../components/icons/Code.astro";
import Design from "../components/icons/Design.astro";
import Fan from "../components/icons/Fan.astro";
import Handshake from "../components/icons/Handshake.astro";
import Hosting from "../components/icons/Hosting.astro";
import Rocket from "../components/icons/Rocket.astro";

// Datos para la sección de Servicios
export const servicios = [
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

// serviciosDetalle.js

export const serviciosDetalle = {
  "diseno-web": {
    title: "Diseño web",
    subtitle: "Diseños visuales a medida",
    description: "Sitios visuales, claros y adaptados a tu marca.",
    fullDescription: "Creamos diseños web únicos que reflejan la esencia de tu marca. Cada elemento visual está cuidadosamente pensado para ofrecer una experiencia de usuario excepcional, desde la primera impresión hasta la conversión final.",
    
    benefits: [
      "Diseño 100% personalizado según tu identidad de marca",
      "Interfaz intuitiva que mejora la experiencia del usuario",
      "Diseño responsivo adaptado a todos los dispositivos",
      "Paleta de colores y tipografía profesional",
      "Elementos visuales que aumentan conversiones",
      "Prototipado interactivo antes del desarrollo"
    ],
    
    features: [
      {
        title: "UI/UX Profesional",
        description: "Diseñamos interfaces atractivas enfocadas en la experiencia del usuario, con flujos de navegación intuitivos y elementos visuales que guían al visitante.",
        icon: "🎨"
      },
      {
        title: "Diseño Responsivo",
        description: "Tu sitio se verá perfecto en cualquier dispositivo: móviles, tablets y computadoras de escritorio, garantizando una experiencia consistente.",
        icon: "📱"
      },
      {
        title: "Prototipado en Figma",
        description: "Te mostramos cómo quedará tu sitio antes de programarlo. Podrás visualizar y aprobar cada detalle del diseño.",
        icon: "🖼️"
      },
      {
        title: "Identidad Visual Consistente",
        description: "Mantenemos coherencia en todos los elementos: colores, tipografías, iconos y espaciados, reforzando tu marca.",
        icon: "✨"
      }
    ],
    
    process: [
      {
        step: 1,
        title: "Descubrimiento",
        description: "Conocemos tu marca, objetivos y audiencia objetivo. Analizamos tu competencia y definimos el estilo visual que mejor se adapte a tu negocio."
      },
      {
        step: 2,
        title: "Wireframes",
        description: "Creamos bocetos de la estructura del sitio, definiendo la jerarquía de contenidos y flujos de navegación principales."
      },
      {
        step: 3,
        title: "Diseño Visual",
        description: "Desarrollamos el diseño completo con colores, tipografías, imágenes y todos los elementos visuales en alta fidelidad."
      },
      {
        step: 4,
        title: "Revisión y Ajustes",
        description: "Presentamos el diseño para tu aprobación. Realizamos los ajustes necesarios hasta lograr el resultado perfecto."
      }
    ],
    
    images: {
      main: "/images/services/diseno-web-hero.jpg",
      gallery: [
        "/images/services/diseno-web-1.jpg",
        "/images/services/diseno-web-2.jpg",
        "/images/services/diseno-web-3.jpg"
      ]
    },
    
    cta: {
      text: "Solicitar Diseño Personalizado",
      href: "/contacto?servicio=diseno-web"
    }
  },

  "desarrollo-web": {
    title: "Desarrollo web",
    subtitle: "Código limpio y funcional",
    description: "Convertimos diseños en sitios web reales.",
    fullDescription: "Transformamos diseños en sitios web funcionales, rápidos y escalables. Utilizamos las tecnologías más modernas del mercado para garantizar un código limpio, mantenible y de alto rendimiento.",
    
    benefits: [
      "Código optimizado y de fácil mantenimiento",
      "Tecnologías modernas y actualizadas",
      "Sitios web rápidos y eficientes",
      "Arquitectura escalable para crecimiento futuro",
      "Integración con APIs y servicios externos",
      "Panel de administración personalizado"
    ],
    
    features: [
      {
        title: "React & Next.js",
        description: "Desarrollamos con las librerías más populares de JavaScript, garantizando sitios web interactivos, rápidos y con excelente SEO.",
        icon: "⚛️"
      },
      {
        title: "Backend Robusto",
        description: "Implementamos APIs con Node.js y bases de datos como PostgreSQL o MongoDB para aplicaciones dinámicas y seguras.",
        icon: "🔧"
      },
      {
        title: "Integración de Servicios",
        description: "Conectamos tu sitio con plataformas de pago, CRMs, email marketing, analytics y cualquier herramienta que necesites.",
        icon: "🔌"
      },
      {
        title: "Testing y Calidad",
        description: "Probamos exhaustivamente cada funcionalidad para garantizar un sitio libre de errores y bugs antes del lanzamiento.",
        icon: "✅"
      }
    ],
    
    process: [
      {
        step: 1,
        title: "Planificación Técnica",
        description: "Definimos la arquitectura del proyecto, stack tecnológico y estructura de la base de datos según tus necesidades."
      },
      {
        step: 2,
        title: "Desarrollo Frontend",
        description: "Convertimos el diseño en código, creando componentes reutilizables y optimizados para máximo rendimiento."
      },
      {
        step: 3,
        title: "Desarrollo Backend",
        description: "Programamos la lógica del servidor, APIs, conexión a base de datos y toda la funcionalidad del sitio."
      },
      {
        step: 4,
        title: "Testing y Deploy",
        description: "Realizamos pruebas completas y desplegamos tu sitio en producción, garantizando su correcto funcionamiento."
      }
    ],
    
    images: {
      main: "/images/services/desarrollo-web-hero.jpg",
      gallery: [
        "/images/services/desarrollo-web-1.jpg",
        "/images/services/desarrollo-web-2.jpg",
        "/images/services/desarrollo-web-3.jpg"
      ]
    },
    
    cta: {
      text: "Comenzar Desarrollo",
      href: "/contacto?servicio=desarrollo-web"
    }
  },

  "dominio-hosting": {
    title: "Dominio y hosting",
    subtitle: "Tu sitio en línea desde el día uno",
    description: "Gestión completa de dominio y hosting.",
    fullDescription: "Nos encargamos de todo lo relacionado con el dominio y alojamiento de tu sitio web. Desde la compra del dominio perfecto hasta la configuración de un hosting rápido y confiable, para que no te preocupes por nada técnico.",
    
    benefits: [
      "Gestión completa de dominio y renovaciones",
      "Hosting de alta velocidad y disponibilidad",
      "Certificado SSL incluido (HTTPS seguro)",
      "Backups automáticos diarios",
      "Soporte técnico ante cualquier problema",
      "Configuración profesional desde el inicio"
    ],
    
    features: [
      {
        title: "Registro de Dominio",
        description: "Te ayudamos a elegir y registrar el dominio perfecto para tu marca, gestionando todo el proceso de compra y configuración.",
        icon: "🌐"
      },
      {
        title: "Hosting Premium",
        description: "Alojamiento en servidores de alta velocidad con 99.9% de uptime, garantizando que tu sitio esté siempre disponible.",
        icon: "⚡"
      },
      {
        title: "Certificado SSL",
        description: "Instalamos certificados de seguridad para que tu sitio use HTTPS, protegiendo la información de tus visitantes.",
        icon: "🔒"
      },
      {
        title: "Backups Automáticos",
        description: "Realizamos copias de seguridad diarias de tu sitio, protegiendo tu información ante cualquier eventualidad.",
        icon: "💾"
      }
    ],
    
    process: [
      {
        step: 1,
        title: "Selección de Dominio",
        description: "Analizamos opciones de dominios disponibles y te ayudamos a elegir el mejor nombre para tu marca."
      },
      {
        step: 2,
        title: "Configuración de Hosting",
        description: "Contratamos y configuramos el hosting ideal para tu proyecto, optimizado para velocidad y seguridad."
      },
      {
        step: 3,
        title: "Instalación de SSL",
        description: "Implementamos el certificado de seguridad para que tu sitio sea confiable y seguro desde el primer día."
      },
      {
        step: 4,
        title: "Monitoreo Continuo",
        description: "Vigilamos constantemente el rendimiento y disponibilidad de tu sitio, actuando rápidamente ante cualquier incidencia."
      }
    ],
    
    images: {
      main: "/images/services/hosting-hero.jpg",
      gallery: [
        "/images/services/hosting-1.jpg",
        "/images/services/hosting-2.jpg"
      ]
    },
    
    cta: {
      text: "Configurar Mi Dominio",
      href: "/contacto?servicio=dominio-hosting"
    }
  },

  "optimizacion-velocidad": {
    title: "Optimización de velocidad",
    subtitle: "Sitios rápidos como un rayo",
    description: "Aceleramos la carga de tu sitio.",
    fullDescription: "La velocidad es crucial para el éxito de tu sitio web. Optimizamos cada aspecto técnico para lograr tiempos de carga mínimos, mejorando la experiencia del usuario y tu posicionamiento en Google.",
    
    benefits: [
      "Carga hasta 3 veces más rápida",
      "Mejor posicionamiento en Google (Core Web Vitals)",
      "Reducción de tasa de rebote",
      "Aumento en conversiones y ventas",
      "Menor consumo de datos para usuarios móviles",
      "Experiencia de usuario superior"
    ],
    
    features: [
      {
        title: "Optimización de Imágenes",
        description: "Comprimimos y convertimos imágenes a formatos modernos (WebP, AVIF) sin perder calidad visual, reduciendo peso hasta 70%.",
        icon: "🖼️"
      },
      {
        title: "Lazy Loading",
        description: "Implementamos carga diferida de contenido, cargando solo lo visible en pantalla para inicio ultra-rápido.",
        icon: "⚡"
      },
      {
        title: "CDN Global",
        description: "Distribuimos tu contenido en servidores alrededor del mundo, entregando archivos desde la ubicación más cercana al usuario.",
        icon: "🌍"
      },
      {
        title: "Minificación de Código",
        description: "Comprimimos HTML, CSS y JavaScript, eliminando espacios innecesarios y optimizando el código para menor tamaño.",
        icon: "📦"
      }
    ],
    
    process: [
      {
        step: 1,
        title: "Auditoría Inicial",
        description: "Analizamos el rendimiento actual de tu sitio con herramientas como Google PageSpeed Insights y GTmetrix."
      },
      {
        step: 2,
        title: "Optimización Técnica",
        description: "Implementamos mejoras en código, imágenes, caché, lazy loading y todos los aspectos que afectan la velocidad."
      },
      {
        step: 3,
        title: "Configuración de CDN",
        description: "Conectamos tu sitio a una red de distribución de contenido para entrega ultra-rápida en cualquier ubicación."
      },
      {
        step: 4,
        title: "Monitoreo Continuo",
        description: "Vigilamos el rendimiento constantemente y realizamos ajustes para mantener velocidades óptimas."
      }
    ],
    
    images: {
      main: "/images/services/velocidad-hero.jpg",
      gallery: [
        "/images/services/velocidad-1.jpg",
        "/images/services/velocidad-2.jpg"
      ]
    },
    
    cta: {
      text: "Acelerar Mi Sitio",
      href: "/contacto?servicio=optimizacion-velocidad"
    }
  },

  "mantenimiento-web": {
    title: "Mantenimiento web",
    subtitle: "Tu sitio siempre al día",
    description: "Actualizaciones, ajustes y mejoras continuas.",
    fullDescription: "Un sitio web requiere atención constante para funcionar correctamente. Nos encargamos de todas las actualizaciones, respaldos, mejoras de seguridad y ajustes técnicos para que tú te concentres en tu negocio.",
    
    benefits: [
      "Sitio web siempre actualizado y seguro",
      "Backups automáticos y protección de datos",
      "Corrección rápida de errores y bugs",
      "Actualizaciones de contenido cuando lo necesites",
      "Monitoreo 24/7 de disponibilidad",
      "Soporte técnico prioritario"
    ],
    
    features: [
      {
        title: "Actualizaciones Regulares",
        description: "Mantenemos tu sitio actualizado con las últimas versiones de software, plugins y parches de seguridad.",
        icon: "🔄"
      },
      {
        title: "Backups Diarios",
        description: "Realizamos copias de seguridad automáticas de todo tu sitio, almacenadas en ubicaciones seguras y redundantes.",
        icon: "💾"
      },
      {
        title: "Monitoreo de Seguridad",
        description: "Vigilamos constantemente tu sitio ante amenazas de seguridad, malware y accesos no autorizados.",
        icon: "🛡️"
      },
      {
        title: "Soporte Técnico",
        description: "Estamos disponibles para resolver cualquier problema técnico, actualizar contenido o realizar ajustes cuando los necesites.",
        icon: "🤝"
      }
    ],
    
    process: [
      {
        step: 1,
        title: "Setup Inicial",
        description: "Configuramos todos los sistemas de monitoreo, backups automáticos y herramientas de mantenimiento."
      },
      {
        step: 2,
        title: "Mantenimiento Mensual",
        description: "Realizamos actualizaciones, revisiones de seguridad y optimizaciones de forma programada cada mes."
      },
      {
        step: 3,
        title: "Monitoreo Continuo",
        description: "Vigilamos el rendimiento y disponibilidad de tu sitio 24/7, actuando inmediatamente ante cualquier problema."
      },
      {
        step: 4,
        title: "Reportes Mensuales",
        description: "Te enviamos reportes detallados de todas las actividades realizadas, mejoras implementadas y estado del sitio."
      }
    ],
    
    images: {
      main: "/images/services/mantenimiento-hero.jpg",
      gallery: [
        "/images/services/mantenimiento-1.jpg",
        "/images/services/mantenimiento-2.jpg"
      ]
    },
    
    cta: {
      text: "Contratar Mantenimiento",
      href: "/contacto?servicio=mantenimiento-web"
    }
  },

  "asesoria-tecnica": {
    title: "Asesoría técnica",
    subtitle: "Acompañamiento personalizado",
    description: "Guía técnica y estratégica para tu negocio digital.",
    fullDescription: "Te brindamos asesoría experta para tomar las mejores decisiones técnicas y estratégicas en tu proyecto digital. Desde la elección de tecnologías hasta estrategias de crecimiento, estamos aquí para guiarte.",
    
    benefits: [
      "Decisiones técnicas informadas y acertadas",
      "Estrategia digital alineada con tus objetivos",
      "Ahorro de tiempo y recursos",
      "Evita errores costosos en tecnología",
      "Plan de crecimiento escalable",
      "Acceso a conocimiento especializado"
    ],
    
    features: [
      {
        title: "Consultoría Estratégica",
        description: "Analizamos tu negocio y objetivos para diseñar la mejor estrategia digital, desde la tecnología hasta el marketing.",
        icon: "🎯"
      },
      {
        title: "Selección de Tecnología",
        description: "Te ayudamos a elegir las herramientas y tecnologías correctas para tu proyecto, considerando presupuesto y escalabilidad.",
        icon: "⚙️"
      },
      {
        title: "Auditoría Técnica",
        description: "Revisamos tu sitio o aplicación actual, identificando problemas y oportunidades de mejora en rendimiento, seguridad y UX.",
        icon: "🔍"
      },
      {
        title: "Roadmap de Crecimiento",
        description: "Creamos un plan detallado de desarrollo y mejoras a corto, mediano y largo plazo para tu proyecto digital.",
        icon: "🗺️"
      }
    ],
    
    process: [
      {
        step: 1,
        title: "Sesión de Descubrimiento",
        description: "Conocemos tu negocio, objetivos, desafíos actuales y visión a futuro en una sesión de consultoría profunda."
      },
      {
        step: 2,
        title: "Análisis y Diagnóstico",
        description: "Evaluamos tu situación actual, identificando fortalezas, debilidades y oportunidades de mejora."
      },
      {
        step: 3,
        title: "Plan de Acción",
        description: "Diseñamos una estrategia personalizada con recomendaciones técnicas, prioridades y presupuesto estimado."
      },
      {
        step: 4,
        title: "Acompañamiento Continuo",
        description: "Te guiamos en la implementación del plan, resolviendo dudas y ajustando la estrategia según sea necesario."
      }
    ],
    
    images: {
      main: "/images/services/asesoria-hero.jpg",
      gallery: [
        "/images/services/asesoria-1.jpg",
        "/images/services/asesoria-2.jpg"
      ]
    },
    
    cta: {
      text: "Agendar Consultoría",
      href: "/contacto?servicio=asesoria-tecnica"
    }
  }
};