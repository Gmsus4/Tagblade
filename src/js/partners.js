import Email from "../components/icons/Email.astro";
import Instagram from "../components/icons/Instagram.astro";
import Linkedin from "../components/icons/Linkedin.astro";

// Datos de los socios del proyecto
export const partners = [
  { 
    id: 'fernando',
    name: 'Fernando Gómez',
    username: 'gmsus4.dev',
    role: 'Desarrollador Web Front-end',
    imageUrl: '/gmsus4.jpg',
    banner: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg",
    socials: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/gmsus4.dev',
        icon: Instagram
      },
      {
        name: 'Email',
        url: 'mailto:fernando@webdev.com',
        icon: Email
      },
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/fernandogomez',
        icon: Linkedin
      },
    ]
  },
  // { 
  //   id: 'sofia',
  //   name: 'Sofía Martínez',
  //   username: 'sofia.codes',
  //   role: 'Desarrolladora Full Stack',
  //   imageUrl: 'https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg',
  //   banner: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg",
  //   socials: [
  //     {
  //       name: 'Instagram',
  //       url: 'https://instagram.com/sofia.codes',
  //       icon: Instagram
  //     },
  //     {
  //       name: 'Email',
  //       url: 'mailto:sofia@webdev.com',
  //       icon: Email
  //     },
  //     {
  //       name: 'Linkedin',
  //       url: 'https://linkedin.com/in/sofiamartinez',
  //       icon: Linkedin
  //     },
  //   ]
  // },
  // { 
  //   id: 'carlos',
  //   name: 'Carlos Rivera',
  //   username: 'carlosdev',
  //   role: 'Desarrollador Backend & DevOps',
  //   imageUrl: 'https://images.pexels.com/photos/12600067/pexels-photo-12600067.jpeg',
  //   banner: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
  //   socials: [
  //     {
  //       name: 'Instagram',
  //       url: 'https://instagram.com/carlosdev',
  //       icon: Instagram
  //     },
  //     {
  //       name: 'Email',
  //       url: 'mailto:carlos@webdev.com',
  //       icon: Email
  //     },
  //     {
  //       name: 'Linkedin',
  //       url: 'https://linkedin.com/in/carlosrivera',
  //       icon: Linkedin
  //     },
  //   ]
  // },
  { 
    id: 'maria',
    name: 'María Torres',
    username: 'maria.ux',
    role: 'UI/UX Designer & Creative Director',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    banner: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    socials: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/maria.ux',
        icon: Instagram
      },
      {
        name: 'Email',
        url: 'mailto:maria@webdev.com',
        icon: Email
      },
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/mariatorres',
        icon: Linkedin
      },
    ]
  },
  { 
    id: 'alejandra',
    name: 'Alejandra Ruiz',
    username: 'ale.marketing',
    role: 'Marketing Digital & Growth',
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    banner: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    socials: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/ale.marketing',
        icon: Instagram
      },
      {
        name: 'Email',
        url: 'mailto:alejandra@webdev.com',
        icon: Email
      },
      {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/alejandraruiz',
        icon: Linkedin
      },
    ]
  },
];
