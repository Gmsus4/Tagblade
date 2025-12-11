import Facebook from "../components/icons/Facebook.astro";
import Instagram from "../components/icons/Instagram.astro";
import Tiktok from "../components/icons/Tiktok.astro";
import X from "../components/icons/X.astro";

// Datos de contacto
export const contactInfo = {
  email: "contacto@tagblade.com",
  phone: "3322364324",
  mensajeInicial: "",
  horario: "Lunes a Viernes: 9:00 - 18:00",
  socialMedia: [
    { name: "@tagblade", url: "https://www.instagram.com/tagblade/", icon: Instagram },
    { name: "@TagbladeOficial", url: "https://www.x.com/TagbladeOficial", icon: X },
    { name: "@tagblade", url: "https://www.tiktok.com/@tagblade", icon: Tiktok },
    { name: "@TagbladeOficial", url: "https://www.facebook.com/TagbladeOficial", icon: Facebook },
  ]
}