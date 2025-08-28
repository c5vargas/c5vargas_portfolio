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
      'Aplicación web que diseñé específicamente para profesionales de alto rendimiento. Con una interfaz moderna y amigable, mi enfoque se centra en maximizar la experiencia del usuario mientras trabajan hacia sus metas.',
    descr:
      '<p>Rendfitt es mucho más que una simple página web corporativa; es una plataforma diseñada con tecnología de vanguardia para ofrecer una experiencia óptima tanto para el entrenador como para sus clientes. Utilizando React.js, hemos creado una interfaz interactiva y receptiva que permite una navegación fluida y una experiencia de usuario excepcional. Además, hemos integrado react-router para gestionar la navegación entre páginas de manera eficiente y react-helmet para optimizar el SEO y mejorar la visibilidad en los motores de búsqueda.</p><p>Este proyecto demuestra mi capacidad para utilizar tecnologías modernas de frontend para desarrollar soluciones web efectivas y orientadas al rendimiento. Al presentar Rendfitt en mi portfolio, destaco mi habilidad para crear experiencias digitales de alta calidad que se adaptan a las necesidades específicas del cliente, en este caso, un entrenador deportivo de élite que trabaja con jugadores profesionales de fútbol.</p>',
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
      'Agencia de vacaciones que ofrece una selección de villas y apartamentos únicos, diseñados para ofrecer una experiencia de viaje inmersiva y memorable.',
    descr:
      '<p>Xeckin Holidays es más que una simple agencia de vacaciones; es un portal que te conecta con alojamientos únicos y auténticos, seleccionados cuidadosamente para garantizar calidad, confort y seguridad. Con un enfoque en la atención al cliente y la inmersión cultural, cada villa y apartamento ha sido verificado para ofrecer una experiencia de viaje que te haga sentir como en casa.</p><p>Este proyecto ha sido desarrollado utilizando NextJS y Tailwindcss, y está desplegado en Vercel. Además, es un sitio web multiidioma con SEO optimizado para asegurar su visibilidad en los primeros resultados de Google. Al incluir Xeckin Holidays en mi portfolio, demuestro mi capacidad para crear plataformas web de alta calidad que se adaptan a las necesidades del sector turístico, ofreciendo soluciones que combinan tecnología moderna y un diseño enfocado en el usuario.</p>',
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
      'Plataforma web diseñada para mejorar la concentración mediante entornos sonoros y visuales. Desarrollada con Laravel y React TypeScript, integra música en streaming desde Audius y cuenta con una interfaz altamente optimizada.',
    descr:
      '<p>LofiLab es una solución digital pensada para mejorar el enfoque en sesiones de estudio o trabajo profundo. Combina música lofi y ambient proveniente de la plataforma Audius con efectos sonoros personalizables (lluvia, fuego, ruido blanco) y fondos de pantalla dinámicos con cambios de clima y hora del día.</p><p>El frontend ha sido desarrollado en React con TypeScript y TailwindCSS, priorizando una navegación fluida, animaciones ligeras y una experiencia de usuario minimalista. La interfaz permite personalizar escenarios, gestionar sesiones, y utilizar herramientas como el temporizador Pomodoro o el modo enfoque, todo encapsulado en ventanas flotantes modulares.</p><p>El backend, implementado en Laravel 12, expone una API REST que gestiona datos de usuarios, preferencias, combinaciones favoritas y seguimiento de actividad. La integración con la API de Audius permite obtener streams directos de audio bajo demanda, sin sobrecargar el servidor.</p><p>En términos técnicos, el proyecto ha sido construido siguiendo principios de rendimiento y accesibilidad. LofiLab obtiene puntuaciones altas en Lighthouse (rendimiento, accesibilidad, buenas prácticas y SEO), asegurando una experiencia rápida y optimizada incluso en dispositivos de gama media.</p>',
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
      'Proyecto web creado para facilitar la búsqueda de productos destacados en la plataforma Hacoo Saramart. Mi contribución incluye el desarrollo de una interfaz intuitiva que permite a los usuarios encontrar rápidamente los artículos más populares.',
    descr:
      '<p>Hacoo Hunt es más que una simple página web; es una puerta de entrada a los mejores productos de Hacoo Saramart, optimizada para una experiencia de usuario superior. Mi contribución incluye el desarrollo de una interfaz intuitiva utilizando React.js, que permite a los usuarios encontrar rápidamente los artículos más populares. En el backend, hemos utilizado Laravel para crear un servidor API Rest robusto y escalable, mientras que en el frontend hemos empleado TailwindCSS para un diseño elegante y receptivo. Además, hemos integrado react-helmet para optimizar el SEO y mejorar la visibilidad en los motores de búsqueda.</p><p>Este proyecto ejemplifica mi habilidad para crear soluciones web completas utilizando una variedad de tecnologías frontend y backend. Presentar Hacoo Hunt en mi portfolio destaca mi capacidad para diseñar y desarrollar experiencias digitales de alta calidad que se destacan en un mercado competitivo como el comercio electrónico.</p>',
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
      'SomRock es una banda de versiones con más de 12 años de trayectoria, especializada en reinterpretar los grandes éxitos del pop-rock de los 80, 90 y 2000. Con una puesta en escena enérgica y carismática, conectan con públicos de todas las generaciones. El sitio web, desarrollado con Next.js y TailwindCSS, ofrece una experiencia visual moderna y dinámica.',
    descr:
      '<p>SomRock es una banda de versiones que fusiona estilos y aporta un toque creativo único a cada interpretación. Su repertorio abarca desde clásicos de los 80 hasta éxitos contemporáneos, atrayendo a públicos de todas las edades. Con más de 300 conciertos realizados, su experiencia y pasión por la música los convierten en una opción ideal para eventos y festivales.</p><p>El sitio web de SomRock ha sido desarrollado utilizando Next.js y TailwindCSS, lo que permite una navegación fluida y una interfaz responsive que se adapta a cualquier dispositivo. Incluye secciones como biografía, calendario de conciertos, descargas y contacto, facilitando la interacción con sus seguidores y la promoción de sus eventos.</p><p>Además, el sitio cuenta con integración a redes sociales y una galería multimedia que muestra la energía y el dinamismo de sus presentaciones en vivo, reforzando su presencia digital y conectando con su audiencia de manera efectiva.</p>',
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
