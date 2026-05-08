import Email from "../components/icons/Email.astro";
import Instagram from "../components/icons/Instagram.astro";
import Linkedin from "../components/icons/Linkedin.astro";
import Spotify from "../components/icons/Spotify.astro";

type AstroComponent = (_props: Record<string, unknown>) => unknown;

interface Social {
  name: string;
  url: string;
  icon: AstroComponent;
}

export interface Partner {
  id: string;
  name: string;
  username: string;
  role: string;
  imageUrl: string;
  imageUrlHover: string;
  song: string;
  songUrl: string;
  banner: string;
  description: string;
  socials: Social[];
}

// Datos de los socios del proyecto
export const partners: Partner[] = [
  { 
    id: 'fernando',
    name: 'Fernando Gómez',
    username: 'gmsus4',
    role: 'Front-end',
    imageUrl: '/partners/fer.webp',
    imageUrlHover: '/partners/fer-hover.jpg',
    song: "Just The Way You Are Milky",
    songUrl: "https://open.spotify.com/intl-es/track/7K3Lc3TfSR14aTOjIH7TUj?si=5842762ab8aa488e",
    banner: "/partners/cover-fer.webp",
    description: "Arregla un bug… y aparecen dos nuevos.",
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/gmsus4/',
        icon: Instagram
      },
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/user/f3rnandogm',
        icon: Spotify
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/fergomezmontes/',
        icon: Linkedin
      },
    ]
  },
  // { 
  //   id: 'fernando1',
  //   name: 'Fernando Gómez',
  //   username: 'gmsus4',
  //   role: 'Front-end',
  //   imageUrl: '/partners/fer.webp',
  //   imageUrlHover: '/partners/fer-hover.jpg',
  //   song: "Just The Way You Are Milky",
  //   songUrl: "https://open.spotify.com/intl-es/track/7K3Lc3TfSR14aTOjIH7TUj?si=5842762ab8aa488e",
  //   banner: "/partners/cover-fer.webp",
  //   description: "Arregla un bug… y aparecen dos nuevos.",
  //   socials: [
  //     {
  //       name: 'Instagram',
  //       url: 'https://www.instagram.com/gmsus4/',
  //       icon: Instagram
  //     },
  //     {
  //       name: 'Spotify',
  //       url: 'https://open.spotify.com/user/f3rnandogm',
  //       icon: Spotify
  //     },
  //     {
  //       name: 'Linkedin',
  //       url: 'https://www.linkedin.com/in/fergomezmontes/',
  //       icon: Linkedin
  //     },
  //   ]
  // },
  // { 
  //   id: 'fernando2',
  //   name: 'Fernando Gómez',
  //   username: 'gmsus4',
  //   role: 'Front-end',
  //   imageUrl: '/partners/fer.webp',
  //   imageUrlHover: '/partners/fer-hover.jpg',
  //   song: "Just The Way You Are Milky",
  //   songUrl: "https://open.spotify.com/intl-es/track/7K3Lc3TfSR14aTOjIH7TUj?si=5842762ab8aa488e",
  //   banner: "/partners/cover-fer.webp",
  //   description: "Arregla un bug… y aparecen dos nuevos.",
  //   socials: [
  //     {
  //       name: 'Instagram',
  //       url: 'https://www.instagram.com/gmsus4/',
  //       icon: Instagram
  //     },
  //     {
  //       name: 'Spotify',
  //       url: 'https://open.spotify.com/user/f3rnandogm',
  //       icon: Spotify
  //     },
  //     {
  //       name: 'Linkedin',
  //       url: 'https://www.linkedin.com/in/fergomezmontes/',
  //       icon: Linkedin
  //     },
  //   ]
  // },
]
