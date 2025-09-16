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
    imageUrl: '/partners/fer.webp',
    banner: "/partners/cover-fer.webp",
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
  //   id: 'maria',
  //   name: 'María Torres',
  //   username: 'maria.ux',
  //   role: 'UI/UX Designer & Creative Director',
  //   imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  //   banner: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  //   socials: [
  //     {
  //       name: 'Instagram',
  //       url: 'https://instagram.com/mrbeast',
  //       icon: Instagram
  //     },
  //     {
  //       name: 'Email',
  //       url: 'mailto:maria@webdev.com',
  //       icon: Email
  //     },
  //     {
  //       name: 'Linkedin',
  //       url: 'https://instagram.com/mrbeast',
  //       icon: Linkedin
  //     },
  //   ]
  // },
  // { 
  //   id: 'alejandra',
  //   name: 'Alejandra Ruiz',
  //   username: 'ale.marketing',
  //   role: 'Marketing Digital & Growth',
  //   imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  //   banner: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  //   socials: [
  //     {
  //       name: 'Instagram',
  //       url: 'https://instagram.com/mrbeast',
  //       icon: Instagram
  //     },
  //     {
  //       name: 'Email',
  //       url: 'mailto:alejandra@webdev.com',
  //       icon: Email
  //     },
  //     {
  //       name: 'Linkedin',
  //       url: 'https://instagram.com/mrbeast',
  //       icon: Linkedin
  //     },
  //   ]
  // },
//   {
//   id: 'carlos',
//   name: 'Carlos Mendoza',
//   username: 'carlos.dev',
//   role: 'Full Stack Developer & Tech Lead',
//   imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
//   banner: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
//   socials: [
//     {
//       name: 'Instagram',
//       url: 'https://instagram.com/mrbeast',
//       icon: Instagram
//     },
//     {
//       name: 'Email',
//       url: 'mailto:carlos@webdev.com',
//       icon: Email
//     },
//     {
//       name: 'Linkedin',
//       url: 'https://instagram.com/mrbeast',
//       icon: Linkedin
//     },
//   ]
// }
]
