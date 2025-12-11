const priceEsencial = 4999;
const discountEsencial = 40;
const discountedPriceEsencial = priceEsencial - (priceEsencial * discountEsencial) / 100;

// console.log(`Precio WEB ESENCIAL original: $${priceEsencial}`);
// console.log(`Descuento WEB ESENCIAL: ${discountEsencial}%`);
// console.log(`Precio con descuento WEB ESENCIAL: $${discountedPriceEsencial}`);

const priceProfesional = 8999;
const discountProfesional = 30;
const discountedPriceProfesional = priceProfesional - (priceProfesional * discountProfesional) / 100;

export const planes = [
  {
    name: "WEB ESENCIAL",
    price: 4999,
    discountedPrice: Math.trunc(discountedPriceEsencial),
    discount: discountEsencial,
    description: "Presencia digital profesional.",
    duration: "Pago único",
    currency: "$",
    btnTitle: "Comenzar Proyecto",
    features: [
      { label: "Hasta 5 páginas responsive", included: true },
      { label: "Diseño personalizado a tu marca", included: true },
      { label: "Desarrollo con React/Next.js", included: true },
      { label: "SEO técnico optimizado", included: true },
      { label: "Hosting premium (1 año)", included: true },
      { label: "Dominio .com incluido (1 año)", included: true },
      { label: "3 meses de soporte técnico", included: true },
      { label: "Entrega en 2-3 semanas", included: true }
    ]
  },
  {
    name: "WEB PROFESIONAL",
    price: 8999,
    discountedPrice: Math.trunc(discountedPriceProfesional), 
    discount: discountProfesional,
    description: "Solución web completa con CMS.",
    duration: "Pago único",
    currency: "$",
    btnTitle: "Impulsar Negocio",
    features: [
      { label: "Incluye todo del plan Esencial", included: true },
      { label: "Hasta 15 páginas", included: true },
      { label: "Panel de administración personalizado", included: true },
      { label: "Integración con formularios avanzados", included: true },
      { label: "Optimización de velocidad avanzada", included: true },
      // { label: "Análiticas y seguimiento (Google Analytics)", included: true },
      { label: "6 meses de soporte y ajustes", included: true },
      { label: "Consultoría estratégica inicial", included: true },
      { label: "Entrega en 4-6 semanas", included: true }
    ]
  },
  {
    name: "PARTNER DIGITAL",
    price: 599,
    description: "Mantenimiento continuo.",
    duration: "Mensual",
    currency: "$",
    btnTitle: "Ser Partner",
    features: [
      { label: "Mantenimiento técnico completo", included: true },
      { label: "Actualizaciones de contenido ilimitadas", included: true },
      { label: "Monitoreo de rendimiento 24/7", included: true },
      // { label: "Backups automáticos diarios", included: true },
      // { label: "Optimización SEO continua", included: true },
      // { label: "Reportes mensuales de performance", included: true },
      // { label: "Consultoría estratégica mensual", included: true },
      { label: "Soporte prioritario (respuesta en 4h)", included: true },
      { label: "Pequeñas mejoras y ajustes incluidos", included: true }
    ]
  }
];