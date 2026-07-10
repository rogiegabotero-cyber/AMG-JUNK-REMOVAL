export const languageOptions = [
  { code: 'en', label: 'English',         badge: 'US' },
  { code: 'es', label: 'Español',         badge: 'ES' },
  { code: 'ht', label: 'Kreyòl Ayisyen', badge: 'HT' },
]

const sharedAreas = [
  'Miami-Dade County',
  'Broward County',
  'Upper Keys',
]

const sharedWorkItems = [
  {
    title: 'Sod Installation',
    location: 'South Florida',
    before: 'https://amgjunkremovalpalmbeach.com/work-sod-before.jpg',
    after: 'https://amgjunkremovalpalmbeach.com/work-sod-after.jpg',
  },
  {
    title: 'Junk & Debris Removal',
    location: 'South Florida',
    before: 'https://amgjunkremovalpalmbeach.com/work-junk-before.jpg',
    after: 'https://amgjunkremovalpalmbeach.com/work-junk-after.jpg',
  },
]

export const contentByLanguage = {
  en: {
    header: {
      nav: {
        services: 'Services',
        work: 'Our Work',
        howItWorks: 'How It Works',
        whyUs: 'Why Us',
        areas: 'Service Areas',
        faq: 'FAQ',
        contact: 'Contact',
      },
      callUs: 'Call Us',
      textUs: 'Text Us',
      languageMenuLabel: 'Selected language',
      languageMenuAria: 'Language options',
      current: 'Current',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      menuNote: 'Free estimates. Same-day service.',
    },
    hero: {
      lines: ['Proline Hauling &', 'Property Solutions', ''],
      trustLine: 'Trusted Across Broward County to the Florida Keys',
      description:
        'Junk removal, sod installation, top soil, #57 rock, pea rock, sand, mulch and more — with fast delivery & pickup across South Florida.',
      callText: 'Text Us',
      stats: [
        { value: 'Same Day', label: 'Appointments' },
        { value: '60%', label: 'Recycled / Donated' },
        { value: 'Free', label: 'Estimates' },
      ],
      badges: [
        { icon: 'cart', label: 'Junk Removal' },
        { icon: 'leaf', label: 'Sod Installation' },
        { icon: 'truck', label: 'Fast Delivery' },
        { icon: 'clock', label: 'Same-day Pickup' },
      ],
    },
    sections: {
      services: {
        tag: 'What We Do',
        titleLines: ['Four Services.', 'One Reliable Crew.'],
        description:
          'From hauling junk to laying fresh sod and same-day deliveries, we cover it all from Broward County to the Florida Keys.',
        cta: 'Request Service',
        items: [
          {
            title: 'Rent',
            subtitle: 'Need a dumpster for your project?',
            description:
              'Rent our equipment at competitive rates. Flexible durations, no hidden fees.',
            bullets: ['Flexible rental periods', 'Dumpsters available', 'No hidden charges'],
            accent: 'service-card rent',
            icon: 'truck',
          },
          {
            title: 'Junk Removal',
            subtitle: 'We haul away:',
            description:
              'Furniture, appliances, yard waste, and full property cleanouts. We lift, load, and leave it tidy.',
            bullets: ['Same-day appointments', 'Free on-site estimates', 'Up to 60% recycled or donated'],
            accent: 'service-card removal',
            icon: 'cart',
          },
          {
            title: 'Sod Installer',
            subtitle: 'Fresh lawn, delivered and installed.',
            description:
              'Transform your yard in a single day with residential and commercial sod installation.',
            bullets: ['Residential and commercial', 'Same-day installation', 'Clean, professional finish'],
            accent: 'service-card sod',
            icon: 'sod',
          },
          {
            title: 'Fast Delivery and Pickup',
            subtitle: 'Same-day service From Key Largo North to North Broward County Line .',
            description:
              'We deliver and pick up materials, bags, and items quickly and professionally.',
            bullets: ['Same-day availability', 'Materials, bags and items', 'Broward County to the Keys'],
            accent: 'service-card delivery',
            icon: 'delivery',
          },
        ],
      },
      work: {
        tag: 'Our Work',
        title: 'Before and After',
        description: 'Real jobs, real results. See the Proline difference in action.',
        cta: 'Get Your Estimate',
        items: sharedWorkItems,
      },
      steps: {
        tag: 'Simple Process',
        title: 'How It Works',
        description: 'Getting rid of junk has never been easier. Three steps and it is done.',
        items: [
          {
            number: '01',
            title: 'Call or Text Us',
            description: 'Choose a two-hour arrival window that works for your schedule.',
          },
          {
            number: '02',
            title: 'We Call 15 Min Ahead',
            description: 'Our crew arrives on time and gives you a heads-up before they get there.',
          },
          {
            number: '03',
            title: 'Approve Price. We Haul.',
            description: 'Review the upfront quote and let us take care of the rest on the spot.',
          },
        ],
        callout: {
          title: 'Same-day service available.',
          description: '90% of the time we can take your junk immediately after you call.',
        },
      },
      features: {
        tag: 'Why Choose Us',
        title: 'The Proline Difference',
        description:
          'We remove junk faster, cleaner, and more responsibly than anyone else in South Florida.',
        truckPanel: {
          specsLabel: 'Large-Size Trailer Specs',
          specs: [
            { value: '15', unit: 'Cubic\u00a0Yards' },
            { value: '14 ft', unit: 'Length' },
            { value: '7 ft', unit: 'Width' },
            { value: '4 ft', unit: 'Height' },
            { value: '20%', unit: 'Bigger than competition' },
          ],
          trust: [
            { icon: 'star', title: '5-Star Rating', subtitle: '20+ Google Reviews' },
            { icon: 'shield', title: 'Neighborly Certified', subtitle: 'Trusted local partner' },
            { icon: 'shield', title: 'Fully Insured', subtitle: 'Licensed & bonded' },
          ],
        },
        items: [
          {
            title: 'Super Fast Service',
            description: 'Same-day and next-day appointments are available with guaranteed arrival windows.',
            icon: 'bolt',
          },
          {
            title: 'Eco-Friendly Disposal',
            description: 'We recycle or donate more than 60% of what we collect whenever possible.',
            icon: 'recycle',
          },
          {
            title: 'Fair and Flexible Pricing',
            description: 'Upfront quotes, no hidden fees, and pricing based on the space you use.',
            icon: 'dollar',
          },
          {
            title: 'Large-Size Trailers',
            description: 'Large-size trailers for fewer trips and faster jobs.',
            icon: 'truck',
          },
        ],
      },
      areas: {
        tag: 'Service Area',
        title: 'Serving Miami-Dade, Broward & the Upper Keys',
        description:
          'Proudly serving Miami-Dade County, Broward County, and the Upper Keys. Can\'t find your city? Call us, we likely serve your area too.',
        locationTitle: 'Miami-Dade, Broward & Upper Keys',
        locationSub: 'South Florida',
        callout: "Don't see your city? We likely serve your area.",
        calloutCta: 'Call (305) 713-4647',
        items: sharedAreas,
      },
      faq: {
        tag: 'FAQ',
        title: 'Frequently Asked Questions',
        description: 'Have a question not listed here? Our team is always happy to help.',
        contactPhone: '(305) 713-4647',
        contactForm: 'Contact Form',
        items: [
          {
            question: 'What services do you offer?',
            answer:
              'We provide junk removal, sod installation, fast delivery and pickup, and landscape materials including top soil, #57 rock, pea rock, sand, and mulch.',
          },
          {
            question: 'How much does junk removal cost?',
            answer:
              'Pricing depends on the volume of items, the size of the load, and the location. We provide upfront quotes with no hidden fees.',
          },
          {
            question: 'Do you offer same-day service?',
            answer: 'Yes. We often complete jobs the same day you call, depending on the scope and timing.',
          },
          {
            question: 'How does sod installation work?',
            answer: 'We supply, deliver, and professionally install fresh sod for residential and commercial properties.',
          },
          {
            question: 'Which areas do you serve?',
            answer: 'We serve most areas from Broward County to the Florida Keys and are happy to confirm coverage for your city or neighborhood.',
          },
          {
            question: 'How is junk removal pricing determined?',
            answer: 'We base pricing on the size of the load and the time required, so you only pay for the space you use.',
          },
        ],
      },
      contact: {
        tag: 'Contact Us',
        title: 'Ready to Get Started Today?',
        description:
          'Contact us now and we will take care of the rest. Fast response, same-day service available from Broward County to the Florida Keys.',
        callUs: 'Call Us',
        textUs: 'Text Us',
        phoneLabel: 'PHONE',
        textLabel: 'TEXT',
        hoursLabel: 'HOURS',
        hoursValue: 'Every day 7 AM – 7 PM',
        weAccept: 'WE ACCEPT',
        payments: ['Credit Card', 'Zelle', 'Cash'],
        waFormTitle: 'Contact via WhatsApp',
        waName: 'Your Name',
        waNamePlaceholder: 'John Smith',
        waService: 'Service Needed',
        waServicePlaceholder: 'Select a service...',
        waServices: ['Junk Removal', 'Sod Installation', 'Fast Delivery & Pickup'],
        waCity: 'City / Area',
        waCityPlaceholder: 'e.g. Fort Lauderdale, Key West...',
        waDesc: 'Brief Description',
        waDescPlaceholder: 'e.g. Old sofa, fridge and some boxes...',
        waSend: 'Send via WhatsApp',
      },
    },
    footer: {
      description:
        'Fast, eco-friendly junk removal, sod installation, and same-day delivery from Broward County to the Florida Keys.',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      services: ['Junk Removal', 'Sod Installation', 'Fast Delivery & Pickup'],
      company: ['How It Works', 'Why Choose Us', 'Service Areas', 'FAQ', 'Contact Us'],
      ctaTitle: 'Ready to Start?',
      ctaDesc: 'Same-day service available. Call or text us now.',
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
      hours: 'Every day · 7 AM – 7 PM',
      copyright: '\u00a9 2026 Proline Hauling & Property Solutions. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  es: {
    header: {
      nav: {
        services: 'Servicios',
        work: 'Nuestro Trabajo',
        howItWorks: 'Como Funciona',
        whyUs: 'Por Que Nosotros',
        areas: 'Zonas de Servicio',
        faq: 'Preguntas',
        contact: 'Contacto',
      },
      callUs: 'Llamanos',
      textUs: 'Envianos Texto',
      languageMenuLabel: 'Idioma seleccionado',
      languageMenuAria: 'Opciones de idioma',
      current: 'Actual',
      menuOpen: 'Abrir menu',
      menuClose: 'Cerrar menu',
      menuNote: 'Estimados gratis. Servicio el mismo dia.',
    },
    hero: {
      lines: ['Proline Hauling &', 'Property Solutions', ''],
      trustLine: 'De Confianza Desde el Condado de Broward Hasta los Cayos de Florida',
      description:
        'Remocion de basura, instalacion de cesped, top soil, #57 rock, pea rock, arena, mulch y mas — con entrega rapida y recogida en todo el Sur de Florida.',
      callText: 'Envianos Texto',
      stats: [
        { value: 'Mismo Dia', label: 'Citas' },
        { value: '60%', label: 'Reciclado / Donado' },
        { value: 'Gratis', label: 'Estimados' },
      ],
      badges: [
        { icon: 'cart', label: 'Remocion de Basura' },
        { icon: 'leaf', label: 'Instalacion de Cesped' },
        { icon: 'truck', label: 'Entrega Rapida' },
        { icon: 'clock', label: 'Recogida el mismo dia' },
      ],
    },
    sections: {
      services: {
        tag: 'Lo Que Hacemos',
        titleLines: ['Cuatro Servicios.', 'Un Equipo Confiable.'],
        description:
          'Desde retirar basura hasta instalar cesped fresco y entregas el mismo dia, cubrimos todo desde el Condado de Broward hasta los Cayos de Florida.',
        cta: 'Solicitar Servicio',
        items: [
          {
            title: 'Renta',
            subtitle: 'Necesitas un contenedor para tu proyecto?',
            description:
              'Renta nuestro equipo a precios competitivos. Tiempos flexibles, sin cargos ocultos.',
            bullets: ['Periodos flexibles', 'Contenedores disponibles', 'Sin cargos ocultos'],
            accent: 'service-card rent',
            icon: 'truck',
          },
          {
            title: 'Remocion de Basura',
            subtitle: 'Nos llevamos lo pesado.',
            description:
              'Muebles, electrodomesticos, desechos de patio y limpiezas completas. Nosotros levantamos, cargamos y dejamos limpio.',
            bullets: ['Citas el mismo dia', 'Estimados gratis en sitio', 'Hasta 60% reciclado o donado'],
            accent: 'service-card removal',
            icon: 'cart',
          },
          {
            title: 'Instalacion de Cesped',
            subtitle: 'Cesped fresco, entregado e instalado.',
            description:
              'Transforma tu patio en un solo dia con instalacion residencial y comercial.',
            bullets: ['Residencial y comercial', 'Instalacion el mismo dia', 'Acabado limpio y profesional'],
            accent: 'service-card sod',
            icon: 'sod',
          },
          {
            title: 'Entrega y Recogida Rapida',
            subtitle: 'Servicio el mismo dia desde el Condado de Broward hasta los Cayos de Florida.',
            description:
              'Entregamos y recogemos materiales, bolsas y articulos de forma rapida y profesional.',
            bullets: ['Disponibilidad el mismo dia', 'Materiales, bolsas y articulos', 'Desde Broward hasta los Cayos'],
            accent: 'service-card delivery',
            icon: 'delivery',
          },
        ],
      },
      work: {
        tag: 'Nuestro Trabajo',
        title: 'Antes y Despues',
        description: 'Trabajos reales, resultados reales. Mira la diferencia Proline en accion.',
        cta: 'Obtenga Su Estimado',
        items: [
          { ...sharedWorkItems[0], title: 'Instalacion de Cesped', location: 'Sur de Florida' },
          { ...sharedWorkItems[1], title: 'Remocion de Basura y Escombros', location: 'Sur de Florida' },
        ],
      },
      steps: {
        tag: 'Proceso Simple',
        title: 'Como Funciona',
        description: 'Deshacerse de la basura nunca fue tan facil. Tres pasos y listo.',
        items: [
          {
            number: '01',
            title: 'Llamanos o Escribenos',
            description: 'Elige una ventana de llegada de dos horas que funcione para tu horario.',
          },
          {
            number: '02',
            title: 'Llamamos 15 Min Antes',
            description: 'Nuestro equipo llega a tiempo y te avisa antes de llegar.',
          },
          {
            number: '03',
            title: 'Aprueba el Precio. Nosotros Cargamos.',
            description: 'Revisa el presupuesto por adelantado y deja que hagamos el resto en el momento.',
          },
        ],
        callout: {
          title: 'Servicio el mismo dia disponible.',
          description: 'El 90% de las veces podemos retirar tu basura inmediatamente despues de que llames.',
        },
      },
      features: {
        tag: 'Por Que Elegirnos',
        title: 'La Diferencia Proline',
        description:
          'Retiramos basura mas rapido, mas limpio y con mas responsabilidad que cualquier otro en el Sur de Florida.',
        truckPanel: {
          specsLabel: 'Especificaciones del Remolque',
          specs: [
            { value: '15', unit: 'Yardas Cubicas' },
            { value: '14 ft', unit: 'Largo' },
            { value: '7 ft', unit: 'Ancho' },
            { value: '4 ft', unit: 'Alto' },
            { value: '20%', unit: 'Mas grande que la competencia' },
          ],
          trust: [
            { icon: 'star', title: 'Calificacion 5 Estrellas', subtitle: 'Mas de 20 resenas en Google' },
            { icon: 'shield', title: 'Certificado Neighborly', subtitle: 'Socio local de confianza' },
            { icon: 'shield', title: 'Totalmente Asegurado', subtitle: 'Con licencia y fianza' },
          ],
        },
        items: [
          {
            title: 'Servicio Super Rapido',
            description: 'Hay citas para el mismo dia y el dia siguiente con ventanas de llegada garantizadas.',
            icon: 'bolt',
          },
          {
            title: 'Desecho Ecoamigable',
            description: 'Reciclamos o donamos mas del 60% de lo que recogemos cuando es posible.',
            icon: 'recycle',
          },
          {
            title: 'Precios Justos y Flexibles',
            description: 'Presupuestos claros, sin cargos ocultos, y precios basados en el espacio que usas.',
            icon: 'dollar',
          },
          {
            title: 'Remolques de Gran Tamano',
            description: 'Remolques de gran tamano para menos viajes y trabajos mas rapidos.',
            icon: 'truck',
          },
        ],
      },
      areas: {
        tag: 'Zona de Servicio',
        title: 'Sirviendo Miami-Dade, Broward y los Cayos del Norte',
        description:
          'Servimos con orgullo el Condado Miami-Dade, el Condado Broward y los Cayos del Norte. ¿No encuentras tu ciudad? Llamanos — probablemente servimos tu area.',
        locationTitle: 'Miami-Dade, Broward y Cayos del Norte',
        locationSub: 'Sur de Florida',
        callout: '¿No ves tu ciudad? Es probable que sirvamos tu area.',
        calloutCta: 'Llamar (305) 713-4647',
        items: sharedAreas,
      },
      faq: {
        tag: 'Preguntas',
        title: 'Preguntas Frecuentes',
        description: 'Tienes una pregunta que no aparece aqui? Nuestro equipo siempre esta listo para ayudar.',
        contactPhone: '(305) 713-4647',
        contactForm: 'Formulario de Contacto',
        items: [
          {
            question: 'Que servicios ofrecen?',
            answer:
              'Ofrecemos remocion de basura, instalacion de cesped, entrega o recogida rapida, y materiales de jardineria como top soil, #57 rock, pea rock, arena y mulch.',
          },
          {
            question: 'Cuanto cuesta la remocion de basura?',
            answer:
              'El precio depende del volumen, el tamano de la carga y la ubicacion. Damos presupuestos claros sin cargos ocultos.',
          },
          {
            question: 'Ofrecen servicio el mismo dia?',
            answer: 'Si. A menudo completamos trabajos el mismo dia en que llamas, segun el alcance y el horario.',
          },
          {
            question: 'Como funciona la instalacion de cesped?',
            answer: 'Suministramos, entregamos e instalamos cesped fresco para propiedades residenciales y comerciales.',
          },
          {
            question: 'Que zonas atienden?',
            answer: 'Atendemos la mayoria de las areas desde el Condado de Broward hasta los Cayos de Florida y con gusto confirmamos cobertura para tu ciudad o vecindario.',
          },
          {
            question: 'Como determinan el precio de remocion de basura?',
            answer: 'Basamos el precio en el tamano de la carga y el tiempo requerido, para que solo pagues por el espacio que usas.',
          },
        ],
      },
      contact: {
        tag: 'Contactenos',
        title: 'Listo Para Empezar Hoy?',
        description:
          'Contactanos ahora y nos encargamos del resto. Respuesta rapida, servicio el mismo dia desde el Condado de Broward hasta los Cayos de Florida.',
        callUs: 'Llamanos',
        textUs: 'Escribenos',
        phoneLabel: 'TELEFONO',
        textLabel: 'TEXTO',
        hoursLabel: 'HORARIO',
        hoursValue: 'Todos los dias 7 AM – 7 PM',
        weAccept: 'ACEPTAMOS',
        payments: ['Tarjeta de Credito', 'Zelle', 'Efectivo'],
        waFormTitle: 'Contactar via WhatsApp',
        waName: 'Tu Nombre',
        waNamePlaceholder: 'Juan Garcia',
        waService: 'Servicio Necesario',
        waServicePlaceholder: 'Selecciona un servicio...',
        waServices: ['Remocion de Basura', 'Instalacion de Cesped', 'Entrega y Recogida Rapida'],
        waCity: 'Ciudad / Zona',
        waCityPlaceholder: 'ej. Fort Lauderdale, Key West...',
        waDesc: 'Descripcion Breve',
        waDescPlaceholder: 'ej. Sofa viejo, nevera y algunas cajas...',
        waSend: 'Enviar via WhatsApp',
      },
    },
    footer: {
      description:
        'Remocion de basura rapida y ecoamigable, instalacion de cesped y entrega el mismo dia desde Broward hasta los Cayos de Florida.',
      servicesTitle: 'Servicios',
      companyTitle: 'Compania',
      services: ['Remocion de Basura', 'Instalacion de Cesped', 'Entrega y Recogida Rapida'],
      company: ['Como Funciona', 'Por Que Elegirnos', 'Zonas de Servicio', 'Preguntas', 'Contactanos'],
      ctaTitle: 'Listo Para Empezar?',
      ctaDesc: 'Servicio el mismo dia. Llamanos o escribenos ahora.',
      callUs: 'Llamanos',
      whatsapp: 'WhatsApp',
      hours: 'Todos los dias · 7 AM – 7 PM',
      copyright: '\u00a9 2026 Proline Hauling & Property Solutions. Todos los derechos reservados.',
      privacy: 'Politica de Privacidad',
      terms: 'Terminos de Servicio',
    },
  },
  ht: {
    header: {
      nav: {
        services: 'Servis',
        work: 'Travay Nou',
        howItWorks: 'Kijan Li Mache',
        whyUs: 'Poukisa Nou',
        areas: 'Zon Sevis',
        faq: 'Kesyon',
        contact: 'Kontak',
      },
      callUs: 'Rele Nou',
      textUs: 'Voye Teks',
      languageMenuLabel: 'Lang chwazi a',
      languageMenuAria: 'Opsyon lang',
      current: 'Kounye a',
      menuOpen: 'Louvri meni',
      menuClose: 'Fèmen meni',
      menuNote: 'Estimasyon gratis. Sevis menm jou.',
    },
    hero: {
      lines: ['Proline Hauling &', 'Property Solutions', ''],
      trustLine: 'Konfyans Soti nan Konte Broward Rive nan Florida Keys',
      description:
        'Retire fatra, enstalasyon gazon, top soil, #57 rock, pea rock, sab, mulch ak plis ankò — ak livrezon rapid ak ranmase nan tout Sid Florid.',
      callText: 'Voye Teks',
      stats: [
        { value: 'Menm Jou', label: 'Randevou' },
        { value: '60%', label: 'Resikle / Bay' },
        { value: 'Gratis', label: 'Estimasyon' },
      ],
      badges: [
        { icon: 'cart', label: 'Retire Fatra' },
        { icon: 'leaf', label: 'Enstalasyon Gazon' },
        { icon: 'truck', label: 'Livrezon Vit' },
        { icon: 'clock', label: 'Ranmase menm jou' },
      ],
    },
    sections: {
      services: {
        tag: 'Sa Nou Fè',
        titleLines: ['Kat Sèvis.', 'Yon Ekip Ou Ka Konte Sou Li.'],
        description:
          'Soti nan retire fatra rive nan mete gazon fre ak livrezon menm jou, nou kouvri tout soti Konte Broward rive nan Florida Keys.',
        cta: 'Mande Sèvis',
        items: [
          {
            title: 'Lwe',
            subtitle: 'Ou bezwen yon bwat pou pwojè ou a?',
            description:
              'Lwe ekipman nou yo ak bon pri. Tan fleksib, san frè kache.',
            bullets: ['Peryòd fleksib', 'Bwat disponib', 'Pa gen frè kache'],
            accent: 'service-card rent',
            icon: 'truck',
          },
          {
            title: 'Retire Fatra',
            subtitle: 'Nou pote ale bagay ki lou yo.',
            description:
              'Mèb, aparèy, fatra lakou ak netwayaj antye. Nou leve, chaje, epi kite plas la pwòp.',
            bullets: ['Randevou menm jou', 'Estimasyon gratis sou plas', 'Jiska 60% resikle oswa bay'],
            accent: 'service-card removal',
            icon: 'cart',
          },
          {
            title: 'Enstalatè Gazon',
            subtitle: 'Nou livre epi enstale gazon fre.',
            description:
              'Chanje lakou ou nan yon sèl jou ak enstalasyon rezidansyèl ak komèsyal.',
            bullets: ['Rezidansyèl ak komèsyal', 'Enstalasyon menm jou', 'Fini pwòp ak pwofesyonèl'],
            accent: 'service-card sod',
            icon: 'sod',
          },
          {
            title: 'Livrezon ak Ranmase Vit',
            subtitle: 'Sèvis menm jou soti Konte Broward rive nan Florida Keys.',
            description:
              'Nou livre epi ranmase materyèl, sak, ak atik rapidman ak pwofesyonalis.',
            bullets: ['Disponib menm jou', 'Materyèl, sak ak atik', 'Soti Broward rive nan Keys'],
            accent: 'service-card delivery',
            icon: 'delivery',
          },
        ],
      },
      work: {
        tag: 'Travay Nou',
        title: 'Anvan ak Apre',
        description: 'Travay reyèl, rezilta reyèl. Gade diferans Proline la an aksyon.',
        cta: 'Jwenn Estimasyon Ou',
        items: [
          { ...sharedWorkItems[0], title: 'Enstalasyon Gazon', location: 'Sid Florid' },
          { ...sharedWorkItems[1], title: 'Retire Fatra ak Debri', location: 'Sid Florid' },
        ],
      },
      steps: {
        tag: 'Pwosesis Senp',
        title: 'Kijan Li Mache',
        description: 'Debarase w de fatra pa janm te pi fasil. Twa etap epi fini.',
        items: [
          {
            number: '01',
            title: 'Rele oswa Voye Teks',
            description: 'Chwazi yon fenèt de zè ki mache ak orè ou.',
          },
          {
            number: '02',
            title: 'Nou Rele 15 Min Davans',
            description: 'Ekip nou an rive alè epi li fè ou konnen anvan yo rive.',
          },
          {
            number: '03',
            title: 'Apwouve Pri a. Nou Fè Rès la.',
            description: 'Revize pri a davans epi kite nou pran swen rès la menm kote a.',
          },
        ],
        callout: {
          title: 'Sèvis menm jou disponib.',
          description: '90% nan tan an nou ka pran fatra ou imedyatman apre ou rele.',
        },
      },
      features: {
        tag: 'Poukisa Chwazi Nou',
        title: 'Diferans Proline la',
        description:
          'Nou retire fatra pi vit, pi pwòp, epi ak plis responsablite pase nenpòt lòt moun nan Sid Florid.',
        truckPanel: {
          specsLabel: 'Espesifikasyon Gwo Remòk',
          specs: [
            { value: '15', unit: 'Yad Kib' },
            { value: '14 ft', unit: 'Longè' },
            { value: '7 ft', unit: 'Lajè' },
            { value: '4 ft', unit: 'Wotè' },
            { value: '20%', unit: 'Pi gwo pase konpetisyon' },
          ],
          trust: [
            { icon: 'star', title: 'Nòt 5 Etwal', subtitle: 'Plis pase 20 revizyon Google' },
            { icon: 'shield', title: 'Sètifye Neighborly', subtitle: 'Patnè lokal ou ka fye' },
            { icon: 'shield', title: 'Asirans Konplè', subtitle: 'Lisans ak garanti' },
          ],
        },
        items: [
          {
            title: 'Sèvis Trè Vit',
            description: 'Randevou menm jou ak pwochen jou disponib ak fenèt arive garanti.',
            icon: 'bolt',
          },
          {
            title: 'Jete Fatra Ekolojik',
            description: 'Nou resikle oswa bay plis pase 60% nan sa nou ranmase lè sa posib.',
            icon: 'recycle',
          },
          {
            title: 'Pri Jis ak Fleksib',
            description: 'Pri davans, pa gen frè kache, epi pri baze sou espas ou itilize a.',
            icon: 'dollar',
          },
          {
            title: 'Gwo Remòk',
            description: 'Gwo remòk pou mwens vwayaj ak travay pi rapid.',
            icon: 'truck',
          },
        ],
      },
      areas: {
        tag: 'Zòn Sèvis',
        title: 'N ap Sèvi Miami-Dade, Broward ak Anlè Keys yo',
        description:
          'Nou sèvi Konte Miami-Dade, Konte Broward ak Anlè Keys yo ak fyète. Pa wè vil ou? Rele nou — nou sèvi zòn ou tou.',
        locationTitle: 'Miami-Dade, Broward ak Anlè Keys',
        locationSub: 'Sid Florid',
        callout: 'Pa wè vil ou? Nou sèvi zòn ou tou.',
        calloutCta: 'Rele (305) 713-4647',
        items: sharedAreas,
      },
      faq: {
        tag: 'Kesyon',
        title: 'Kesyon Yo Poze Souvan',
        description: 'Ou gen yon kesyon ki pa sou lis la? Ekip nou an toujou pare pou ede.',
        contactPhone: '(305) 713-4647',
        contactForm: 'Fòm Kontak',
        items: [
          {
            question: 'Ki sèvis nou ofri?',
            answer:
              'Nou bay sèvis retire fatra, enstalasyon gazon, livrezon oswa ranmase rapid, ak materyèl jaden tankou top soil, #57 rock, pea rock, sab ak mulch.',
          },
          {
            question: 'Konbyen retire fatra koute?',
            answer:
              'Pri a depann de kantite atik yo, gwosè chaj la, ak kote a. Nou bay pri davans san frè kache.',
          },
          {
            question: 'Èske nou ofri sèvis menm jou?',
            answer: 'Wi. Souvan nou fini travay yo menm jou ou rele a, selon kantite travay la ak lè a.',
          },
          {
            question: 'Kijan enstalasyon gazon mache?',
            answer: 'Nou bay, livre, epi enstale gazon fre pwofesyonèlman pou kay ak biznis.',
          },
          {
            question: 'Ki zòn nou sèvi?',
            answer: 'Nou sèvi pifò zòn soti Konte Broward rive nan Florida Keys epi nou kontan konfime si nou kouvri vil oswa katye ou a.',
          },
          {
            question: 'Kijan pri retire fatra a detèmine?',
            answer: 'Nou baze pri a sou gwosè chaj la ak tan travay la, konsa ou peye sèlman pou espas ou itilize a.',
          },
        ],
      },
      contact: {
        tag: 'Kontakte Nou',
        title: 'Pare Pou Kòmanse Jodi a?',
        description:
          'Kontakte nou kounye a epi n ap pran swen rès la. Repons rapid, sèvis menm jou soti Konte Broward rive nan Florida Keys.',
        callUs: 'Rele Nou',
        textUs: 'Voye Teks',
        phoneLabel: 'TELEFÒN',
        textLabel: 'TÈKS',
        hoursLabel: 'ORÈ',
        hoursValue: 'Chak jou 7 AM – 7 PM',
        weAccept: 'NOU AKSEPTE',
        payments: ['Kat Kredi', 'Zelle', 'Kash'],
        waFormTitle: 'Kontakte via WhatsApp',
        waName: 'Non Ou',
        waNamePlaceholder: 'Jan Duval',
        waService: 'Sèvis Ou Bezwen',
        waServicePlaceholder: 'Chwazi yon sèvis...',
        waServices: ['Retire Fatra', 'Enstalasyon Gazon', 'Livrezon Rapid'],
        waCity: 'Vil / Zòn',
        waCityPlaceholder: 'ex. Fort Lauderdale, Key West...',
        waDesc: 'Deskripsyon Kout',
        waDescPlaceholder: 'ex. Vye sofa, frijidè ak kèk bwat...',
        waSend: 'Voye via WhatsApp',
      },
    },
    footer: {
      description:
        'Retire fatra rapid ak ekolojik, enstalasyon gazon, ak livrezon menm jou soti Broward rive nan Florida Keys.',
      servicesTitle: 'Sèvis',
      companyTitle: 'Konpayi',
      services: ['Retire Fatra', 'Enstalasyon Gazon', 'Livrezon ak Ranmase Vit'],
      company: ['Kijan Li Mache', 'Poukisa Chwazi Nou', 'Zòn Sèvis', 'Kesyon', 'Kontakte Nou'],
      ctaTitle: 'Pare Pou Kòmanse?',
      ctaDesc: 'Sèvis menm jou disponib. Rele oswa voye teks kounye a.',
      callUs: 'Rele Nou',
      whatsapp: 'WhatsApp',
      hours: 'Chak jou · 7 AM – 7 PM',
      copyright: '\u00a9 2026 Proline Hauling & Property Solutions. Tout dwa rezève.',
      privacy: 'Polis Konfidansyalite',
      terms: 'Tèm Sèvis',
    },
  },
}
