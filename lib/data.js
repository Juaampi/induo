/**
 * IN DUO - Datos mock para la landing page
 */

export const whatsappNumber = "5492944200000";

export const siteContent = {
  brandName: "IN DUO",
  heroTitle: "Indumentaria deportiva personalizada",
  heroSubtitle: "Diseño y fabricación a medida para clubes, equipos, grupos y eventos",
  heroDescription: "Transformamos tus ideas en prendas únicas. Colores, logos, nombres, dorsales y sponsors. Todo exactamente como lo imaginás.",
  heroCTA: "Pedir presupuesto",
  heroCTA2: "Consultar por WhatsApp",
};

export const aboutContent = {
  title: "Qué hacemos",
  description: "En IN DUO diseñamos y fabricamos indumentaria deportiva 100% personalizada. Trabajamos con clubes, equipos de fútbol, grupos de running, eventos corporativos y cualquier organización que necesite prendas únicas con identidad propia.",
  points: [
    "Diseño personalizado según tu visión",
    "Amplia variedad de prendas y telas",
    "Adaptamos colores, logos y branding",
    "Entrega en tiempo y forma",
    "Asesoramiento profesional en todo el proceso",
  ],
};

export const categories = [
  {
    id: 1,
    name: "Fútbol",
    icon: "⚽",
    description: "Camisetas, shorts, medias y equipos completos para clubes y torneos.",
    benefits: [
      "Uniformes oficiales",
      "Equipamiento de entrenamiento",
      "Ropa de calentamiento",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Running",
    icon: "🏃",
    description: "Remeras, shorts y accesorios transpirables para corredores y grupos de atletismo.",
    benefits: [
      "Remeras running tech",
      "Shorts deportivos",
      "Camperas de entrenamiento",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 3,
    name: "Eventos",
    icon: "🎉",
    description: "Indumentaria especial para maratones, competencias, eventos corporativos y sociales.",
    benefits: [
      "Polos y remeras",
      "Buzos y camperas",
      "Accesorios personalizados",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    name: "Entrenamiento",
    icon: "💪",
    description: "Ropa de musculación, funcional y general. Para entrenar cómodo con tu estilo.",
    benefits: [
      "Musculosas y remeras",
      "Pantalones deportivos",
      "Buzos premium",
    ],
    color: "from-red-500 to-pink-600",
  },
  {
    id: 5,
    name: "Clubes",
    icon: "🏆",
    description: "Soluciones completas de indumentaria para identificación y compromiso de club.",
    benefits: [
      "Uniformes competitivos",
      "Ropa de entrenamiento",
      "Equipamiento oficial",
    ],
    color: "from-green-500 to-teal-500",
  },
];

export const products = [
  {
    id: 1,
    name: "Camiseta de Fútbol Personalizada",
    category: "Fútbol",
    image: "/images/products/camiseta-futbol.jpg",
    description: "Camiseta de fútbol con personalización de números, nombres y escudo. Tela transpirable.",
    price: "desde $890",
  },
  {
    id: 2,
    name: "Conjunto de Entrenamiento",
    category: "Entrenamiento",
    image: "/images/products/conjunto-entrenamiento.jpg",
    description: "Remera + short deportivo en telas de alta calidad. Perfectos para entrenamientos intensos.",
    price: "desde $1.290",
  },
  {
    id: 3,
    name: "Remera Running Tech",
    category: "Running",
    image: "/images/products/remera-running.jpg",
    description: "Remera transpirable con tecnología moisture-wicking. Ideal para correr largas distancias.",
    price: "desde $690",
  },
  {
    id: 4,
    name: "Buzo Premium",
    category: "Entrenamiento",
    image: "/images/products/buzo-premium.jpg",
    description: "Buzo deportivo con bolsillos y cierre. Material suave y resistente.",
    price: "desde $1.490",
  },
  {
    id: 5,
    name: "Short Deportivo",
    category: "Fútbol",
    image: "/images/products/short-deportivo.jpg",
    description: "Short de fútbol o uso general con cintura elástica. Múltiples tallas y colores.",
    price: "desde $590",
  },
  {
    id: 6,
    name: "Campera Deportiva",
    category: "Running",
    image: "/images/products/campera-deportiva.jpg",
    description: "Campera deportiva resistente al viento. Perfecta para entrenamientos en cualquier clima.",
    price: "desde $1.890",
  },
  {
    id: 7,
    name: "Polo Personalizado",
    category: "Eventos",
    image: "/images/products/polo-personalizado.jpg",
    description: "Polo corporativo o deportivo con bordado del logo. Ideal para eventos y sponsors.",
    price: "desde $790",
  },
  {
    id: 8,
    name: "Musculosa de Entrenamiento",
    category: "Entrenamiento",
    image: "/images/products/musculosa.jpg",
    description: "Musculosa ajustada o holgada en diferentes colores. Perfecta para el gym.",
    price: "desde $490",
  },
];

export const workExamples = [
  {
    id: 1,
    title: "Equipos de Fútbol Club Bariloche",
    category: "Fútbol",
    image: "/images/works/futbol-1.jpg",
    description: "Uniformes completos con colores del club y escudo personalizado.",
  },
  {
    id: 2,
    title: "Grupo de Running Maratón 2025",
    category: "Running",
    image: "/images/works/running-1.jpg",
    description: "Remeras para participantes de maratón con números y branding de evento.",
  },
  {
    id: 3,
    title: "Evento Corporativo TechCo",
    category: "Eventos",
    image: "/images/works/evento-1.jpg",
    description: "Polos corporativos con logo de empresa para evento de 200 personas.",
  },
  {
    id: 4,
    title: "Entrenamiento Club de Atletismo",
    category: "Entrenamiento",
    image: "/images/works/atletismo-1.jpg",
    description: "Equipamiento de entrenamiento en colores del club y número de atleta.",
  },
  {
    id: 5,
    title: "Uniforme Femenino Fútbol Femenino",
    category: "Fútbol",
    image: "/images/works/futbol-femenino-1.jpg",
    description: "Camiseta y short femenino con ajuste ergonómico y colores vibrantes.",
  },
  {
    id: 6,
    title: "Campera de Entrenamiento Running Club",
    category: "Running",
    image: "/images/works/running-2.jpg",
    description: "Campera deportiva con logo del club bordado. Material resistente.",
  },
  {
    id: 7,
    title: "Conjunto de Fútbol Infantil",
    category: "Fútbol",
    image: "/images/works/futbol-infantil.jpg",
    description: "Uniforme completo para escuadra infantil con tallas adaptadas.",
  },
  {
    id: 8,
    title: "Camiseta de Evento Deportivo",
    category: "Eventos",
    image: "/images/works/evento-2.jpg",
    description: "Remeras para competencia regional con nombre de participante y patrocinadores.",
  },
  {
    id: 9,
    title: "Buzo del Club",
    category: "Entrenamiento",
    image: "/images/works/buzo-club.jpg",
    description: "Buzo premium con escudo bordado para uso de club y entrenamientos.",
  },
];

export const processSteps = [
  {
    step: 1,
    icon: "💬",
    title: "Contanos tu idea",
    description: "Te escuchamos. Nos contás qué necesitás: tipo de prenda, cantidad, colores, logo, diseño.",
  },
  {
    step: 2,
    icon: "🎨",
    title: "Diseño y propuesta",
    description: "Preparamos diseño visual, seleccionamos telas y te enviamos propuesta de presupuesto.",
  },
  {
    step: 3,
    icon: "✅",
    title: "Confirmación",
    description: "Confirmás y abonás anticipo. Empezamos la fabricación de tu indumentaria.",
  },
  {
    step: 4,
    icon: "🚚",
    title: "Entrega",
    description: "Tu pedido listo. Entrega en domicilio o retiro en local. Garantía de calidad.",
  },
];

export const formFields = [
  { name: "name", label: "Nombre completo", type: "text", required: true },
  { name: "organization", label: "Club / Equipo / Grupo", type: "text", required: true },
  { name: "whatsapp", label: "WhatsApp", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "garmentType", label: "Tipo de indumentaria", type: "select", required: true, options: ["Camiseta", "Short", "Buzo", "Remera", "Polo", "Campera", "Otro"] },
  { name: "category", label: "Deporte / Categoría", type: "select", required: true, options: ["Fútbol", "Running", "Eventos", "Entrenamiento", "Clubes", "Otro"] },
  { name: "quantity", label: "Cantidad aproximada", type: "number", required: true },
  { name: "details", label: "Detalle de pedido", type: "textarea", required: true, placeholder: "Contanos qué necesitás, colores, logos, etc." },
];

export const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Qué hacemos", href: "#aboutus" },
  { label: "Productos", href: "#products" },
  { label: "Categorías", href: "#categories" },
  { label: "Trabajos", href: "#gallery" },
  { label: "Proceso", href: "#process" },
  { label: "Contacto", href: "#contact" },
];

export const socialLinks = {
  whatsapp: `https://wa.me/${whatsappNumber}?text=Hola%20IN%20DUO%2C%20quiero%20consultar%20por%20indumentaria%20deportiva%20personalizada`,
  instagram: "https://instagram.com",
  email: "contacto@induo.com.ar",
};
