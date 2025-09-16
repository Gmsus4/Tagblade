import Code from "../components/icons/Code.astro";
import Feather from "../components/icons/Feather.astro";
import Search from "../components/icons/Search.astro";
import Send from "../components/icons/Send.astro";

// Datos para la sección de Proceso
export const procesos = [
  {
    titleIcon: "Descubrir",
    subtitle: "Exploración inicial",
    description: "Exploramos tu negocio, objetivos y audiencia para sentar una base estratégica sólida.",
    urlImage: "/public/proceso/descubrir.webp",
    icon: Search
  },
  {
    titleIcon: "Definir",
    subtitle: "Dirección clara",
    description: "Delimitamos el enfoque, arquitectura y funcionalidades del sitio con base en la información obtenida.",
    urlImage: "/proceso/definir.webp",
    icon: Feather
  },
  {
    titleIcon: "Desarrollar",
    subtitle: "Diseño y programación",
    description: "Diseñamos y programamos interfaces modernas con enfoque en experiencia, adaptabilidad y rendimiento.",
    urlImage: "/proceso/desarrollar.webp",
    icon: Code
  },
  {
    titleIcon: "Entregar",
    subtitle: "Publicación final",
    description: "Probamos, ajustamos y desplegamos el sitio, asegurando compatibilidad y acompañamiento inicial.",
    urlImage: "/proceso/final.webp",
    icon: Send
  }
];