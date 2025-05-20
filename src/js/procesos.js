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