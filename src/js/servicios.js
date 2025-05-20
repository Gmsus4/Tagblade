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