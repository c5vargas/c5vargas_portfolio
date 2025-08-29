export interface Portfolio {
  id: number
  name: string
  slug: string
  subTitle: string
  extract: string
  descr: string
  stack: string
  images: string[]
  link: string
}

const portfolio = [
  {
    id: 1,
    name: 'Rendfitt',
    slug: 'rendfitt',
    subTitle: 'Tu mejor versión',
    extract:
      'Plataforma web para un entrenador de élite que trabaja con jugadores profesionales de fútbol. El objetivo: ofrecer un entorno digital moderno, fluido y optimizado para la gestión de entrenamientos y clientes.',
    descr:
      '<p>Me encargué del desarrollo del frontend con React.js + TailwindCSS, creando una interfaz responsive y con una UX centrada en la simplicidad. Implementé react-router para navegación fluida y react-helmet para SEO. Con este proyecto demuestro mi capacidad para construir plataformas escalables y optimizadas en el sector deportivo.',
    stack: 'React, TailwindCSS, React Router, Typescript, HTML, CSS, Framer',
    images: [
      'https://res.cloudinary.com/carvar-es/image/upload/v1756405747/www.carvar.es/projects/rendfitt/rendfitt-hero_zvltcs.png',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756405725/www.carvar.es/projects/rendfitt/rendfitt-responsive_molju8.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756393500/www.carvar.es/projects/rendfitt/rendfitt-about_jtqnry.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756393502/www.carvar.es/projects/rendfitt/rendfitt-training_uihld8.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756393501/www.carvar.es/projects/rendfitt/rendfitt-caso-exito_jgtcnv.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756393501/www.carvar.es/projects/rendfitt/rendfitt-players_ntlqmm.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756393500/www.carvar.es/projects/rendfitt/rendfitt-pricing_siibvn.avif',
    ],
    link: 'https://rendfitt.com',
  },
  {
    id: 2,
    name: 'Xeckin',
    slug: 'xeckin',
    subTitle: 'Vacaciones inolvidables',
    extract:
      'Portal de reservas de villas y apartamentos vacacionales, con foco en visibilidad SEO y experiencia multilingüe.',
    descr:
      'Diseñé y desarrollé el frontend con Next.js + TailwindCSS, priorizando velocidad de carga, accesibilidad y SEO internacional. Integré sistema multiidioma y desplegué en Vercel para escalabilidad. Este proyecto valida mi expertise en plataformas turísticas y e-commerce con foco en rendimiento.',
    stack: 'NextJS, React, Vercel, Tailwindcss, Typescript, HTML, CSS',
    images: [
      'https://res.cloudinary.com/carvar-es/image/upload/v1756406518/www.carvar.es/projects/xeckin/xeckin-hero_hk6j4u.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756406460/www.carvar.es/projects/xeckin/xeckin-responsive_hx45bx.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394120/www.carvar.es/projects/xeckin/xeckin-list_hhfea9.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394120/www.carvar.es/projects/xeckin/xeckin-product_g71zb9.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394118/www.carvar.es/projects/xeckin/xeckin-seo-landing_uwhomz.avif',
    ],
    link: 'https://xeckinholidays.com',
  },
  {
    id: 3,
    name: 'LofiLab',
    slug: 'lofilab',
    subTitle: 'Immersive productivity soundscape',
    extract:
      'Aplicación web inmersiva para concentración, con entornos sonoros y visuales dinámicos y personalizables.',
    descr:
      'Lideré el desarrollo del frontend en React + TypeScript, construyendo una UI modular con animaciones fluidas y responsive. Implementé funciones clave como escenarios configurables, temporizador Pomodoro y ventanas flotantes. El resultado: una plataforma con altas métricas en Lighthouse (rendimiento, accesibilidad y SEO).',
    stack: 'Laravel, React, TypeScript, TailwindCSS, Audius API, Framer, HTML, CSS',
    images: [
      'https://res.cloudinary.com/carvar-es/image/upload/v1756375280/www.carvar.es/projects/lofilab/lofilab-2_bh3jvh.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756405090/www.carvar.es/projects/lofilab/lofilab-responsive_m6ki3h.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756375122/www.carvar.es/projects/lofilab/lofilab-1_qunkip.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756375598/www.carvar.es/projects/lofilab/lofilab-login_opldm9.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756376134/www.carvar.es/projects/lofilab/lofilab-scenes_qhl7gg.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756377021/www.carvar.es/projects/lofilab/lofilab-effects_stkmov.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756375353/www.carvar.es/projects/lofilab/lofilab-3_axwac2.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756375509/www.carvar.es/projects/lofilab/lofilab-4_uqljuw.avif',
    ],
    link: 'https://www.lofilab.me',
  },
  {
    id: 4,
    name: 'HHunt',
    slug: 'hhunt',
    subTitle: 'Hacoo Saramart product finder',
    extract:
      'Web app que centraliza y destaca los mejores productos de la plataforma Hacoo Saramart.',
    descr:
      'Desarrollé el frontend en React.js + TailwindCSS, optimizando la navegación y la presentación de productos. También trabajé en la integración con el backend vía API Rest en Laravel y en la optimización SEO. Este proyecto refleja mi habilidad para construir experiencias en el sector e-commerce.',
    stack: 'React.js, Laravel, API Rest, TailwindCSS, HTML, CSS',
    images: [
      'https://res.cloudinary.com/carvar-es/image/upload/v1756407634/www.carvar.es/projects/hhunt/hhunt-hero_1_l3ouvl.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756404434/www.carvar.es/projects/hhunt/hhunt-responsive_qjg96e.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394915/www.carvar.es/projects/hhunt/hhunt-brand_k16qha.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394918/www.carvar.es/projects/hhunt/hhunt-community_sz6ury.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394913/www.carvar.es/projects/hhunt/hhunt-product_y3g2bz.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756394908/www.carvar.es/projects/hhunt/hhunt-profile_aplxls.avif',
    ],
    link: 'https://hhunt.es',
  },
  {
    id: 5,
    name: 'SomRock',
    slug: 'somrock',
    subTitle: 'La banda que reinterpreta los grandes éxitos del pop-rock',
    extract:
      'Sitio web oficial de una banda de versiones con más de 12 años de trayectoria y más de 300 conciertos.',
    descr:
      'Me encargué del desarrollo completo del sitio en Next.js + TailwindCSS, creando una interfaz responsive con secciones de calendario, biografía y multimedia. Integré redes sociales y optimicé la experiencia móvil, reforzando la presencia digital de la banda.',
    stack: 'Next.js, TailwindCSS, HTML, CSS, Typescript',
    images: [
      'https://res.cloudinary.com/carvar-es/image/upload/v1756403826/www.carvar.es/projects/somrock/somrock-hero_yhz0jz.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756403827/www.carvar.es/projects/somrock/somrock-responsive_vv5h1u.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756403827/www.carvar.es/projects/somrock/somrock-about_q0iijk.avif',
      'https://res.cloudinary.com/carvar-es/image/upload/v1756403827/www.carvar.es/projects/somrock/somrock-singer_jpefx7.avif',
    ],
    link: 'https://som-rock.com/',
  },
]

export default portfolio
