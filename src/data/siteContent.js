export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Espanol' },
  { code: 'ht', label: 'Kreyol' },
]

const sharedAreas = [
  'Boynton Beach',
  'Delray Beach',
  'Greenacres',
  'Lake Worth',
  'Lake Worth Beach',
  'Lantana',
  'Palm Springs',
  'Wellington',
  'West Palm Beach',
  'Jupiter',
  'Palm Beach Gardens',
  'Riviera Beach',
  'Boca Raton',
]

const sharedWorkItems = [
  {
    title: 'Sod Installation',
    location: 'Palm Beach County',
    before: 'https://amgjunkremovalpalmbeach.com/work-sod-before.jpg',
    after: 'https://amgjunkremovalpalmbeach.com/work-sod-after.jpg',
  },
  {
    title: 'Junk & Debris Removal',
    location: 'Palm Beach County',
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
        areas: 'Areas',
        faq: 'FAQ',
      },
      callUs: 'Call Us',
      languageMenuLabel: 'Selected language',
      languageMenuAria: 'Language options',
      current: 'Current',
    },
    hero: {
      lines: ["Palm Beach's #1", 'Junk Removal', 'Service'],
      description:
        'Junk removal, sod installation and same-day delivery & pickup. Free estimates, eco-friendly disposal, and up to 60% recycled or donated.',
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
          'From hauling junk to laying fresh sod and same-day deliveries, we cover it all across Palm Beach County.',
        cta: 'Request Service',
        items: [
          {
            title: 'Rent',
            subtitle: 'Need a truck or dumpster for your project?',
            description:
              'Rent our equipment at competitive rates with flexible durations and no hidden fees.',
            bullets: ['Flexible rental periods', 'Trucks and dumpsters available', 'No hidden charges'],
            accent: 'service-card rent',
            icon: 'truck',
          },
          {
            title: 'Junk Removal',
            subtitle: 'We haul away the heavy stuff.',
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
            subtitle: 'Same-day service across Palm Beach County.',
            description:
              'We deliver and pick up materials, bags, and items quickly and professionally.',
            bullets: ['Same-day availability', 'Materials, bags and items', 'All Palm Beach County'],
            accent: 'service-card delivery',
            icon: 'delivery',
          },
        ],
      },
      work: {
        tag: 'Our Work',
        title: 'Before and After',
        description: 'Real jobs, real results. See the AMG difference in action.',
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
        title: 'The AMG Difference',
        description:
          'We remove junk faster, cleaner, and more responsibly than anyone else in Palm Beach County.',
        items: [
          {
            title: 'Super Fast Service',
            description: 'Same-day and next-day appointments are available with guaranteed arrival windows.',
          },
          {
            title: 'Eco-Friendly Disposal',
            description: 'We recycle or donate more than 60% of what we collect whenever possible.',
          },
          {
            title: 'Fair and Flexible Pricing',
            description: 'Upfront quotes, no hidden fees, and pricing based on the space you use.',
          },
          {
            title: 'King-Size Trucks',
            description: 'Our trucks are 20% bigger than the competition for fewer trips and faster jobs.',
          },
        ],
      },
      areas: {
        tag: 'Service Area',
        title: 'Serving Palm Beach County',
        description:
          'Proudly providing professional junk removal, sod installation, and delivery services across the county.',
        items: sharedAreas,
      },
      faq: {
        tag: 'FAQ',
        title: 'Frequently Asked Questions',
        description: 'Have a question not listed here? Our team is always happy to help.',
        items: [
          {
            question: 'What services do you offer?',
            answer:
              'We provide junk removal, sod installation, truck and dumpster rentals, and fast delivery and pickup services.',
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
            answer: 'We serve most of Palm Beach County and are happy to confirm coverage for your city or neighborhood.',
          },
          {
            question: 'How is junk removal pricing determined?',
            answer: 'We base pricing on the size of the load and the time required, so you only pay for the space you use.',
          },
        ],
      },
      contact: {
        tag: 'Ready to Start',
        title: 'Ready to Get Started Today?',
        description:
          'Contact us now and we will take care of the rest with fast response, same-day availability, and dependable service.',
        callUs: 'Call Us',
        textUs: 'Text Us',
      },
    },
    footer: {
      description:
        'Fast, eco-friendly junk removal, sod installation, and same-day delivery across Palm Beach County.',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      services: ['Junk Removal', 'Sod Installation', 'Fast Delivery and Pickup', 'Truck and Dumpster Rent'],
      company: ['How It Works', 'Why Choose Us', 'Service Areas', 'FAQ', 'Contact Us'],
    },
  },
  es: {
    header: {
      nav: {
        services: 'Servicios',
        work: 'Nuestro Trabajo',
        howItWorks: 'Como Funciona',
        whyUs: 'Por Que Nosotros',
        areas: 'Zonas',
        faq: 'Preguntas',
      },
      callUs: 'Llamanos',
      languageMenuLabel: 'Idioma seleccionado',
      languageMenuAria: 'Opciones de idioma',
      current: 'Actual',
    },
    hero: {
      lines: ['Numero 1 en Palm Beach', 'Remocion de Basura', 'y Servicios'],
      description:
        'Remocion de basura, instalacion de cesped y entrega o recogida el mismo dia. Estimados gratis, desecho ecoamigable y hasta 60% reciclado o donado.',
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
          'Desde retirar basura hasta instalar cesped fresco y entregas el mismo dia, cubrimos todo Palm Beach County.',
        cta: 'Solicitar Servicio',
        items: [
          {
            title: 'Renta',
            subtitle: 'Necesitas un camion o contenedor para tu proyecto?',
            description:
              'Renta nuestro equipo a precios competitivos con tiempos flexibles y sin cargos ocultos.',
            bullets: ['Periodos flexibles', 'Camiones y contenedores disponibles', 'Sin cargos ocultos'],
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
            subtitle: 'Servicio el mismo dia en todo Palm Beach County.',
            description:
              'Entregamos y recogemos materiales, bolsas y articulos de forma rapida y profesional.',
            bullets: ['Disponibilidad el mismo dia', 'Materiales, bolsas y articulos', 'Todo Palm Beach County'],
            accent: 'service-card delivery',
            icon: 'delivery',
          },
        ],
      },
      work: {
        tag: 'Nuestro Trabajo',
        title: 'Antes y Despues',
        description: 'Trabajos reales, resultados reales. Mira la diferencia AMG en accion.',
        cta: 'Obtenga Su Estimado',
        items: [
          { ...sharedWorkItems[0], title: 'Instalacion de Cesped', location: 'Palm Beach County' },
          { ...sharedWorkItems[1], title: 'Remocion de Basura y Escombros', location: 'Palm Beach County' },
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
        title: 'La Diferencia AMG',
        description:
          'Retiramos basura mas rapido, mas limpio y con mas responsabilidad que cualquier otro en Palm Beach County.',
        items: [
          {
            title: 'Servicio Super Rapido',
            description: 'Hay citas para el mismo dia y el dia siguiente con ventanas de llegada garantizadas.',
          },
          {
            title: 'Desecho Ecoamigable',
            description: 'Reciclamos o donamos mas del 60% de lo que recogemos cuando es posible.',
          },
          {
            title: 'Precios Justos y Flexibles',
            description: 'Presupuestos claros, sin cargos ocultos, y precios basados en el espacio que usas.',
          },
          {
            title: 'Camiones Mas Grandes',
            description: 'Nuestros camiones son 20% mas grandes que los de la competencia para menos viajes y mas rapidez.',
          },
        ],
      },
      areas: {
        tag: 'Zona de Servicio',
        title: 'Sirviendo Palm Beach County',
        description:
          'Ofrecemos con orgullo remocion de basura, instalacion de cesped y servicios de entrega en todo el condado.',
        items: sharedAreas,
      },
      faq: {
        tag: 'Preguntas',
        title: 'Preguntas Frecuentes',
        description: 'Tienes una pregunta que no aparece aqui? Nuestro equipo siempre esta listo para ayudar.',
        items: [
          {
            question: 'Que servicios ofrecen?',
            answer:
              'Ofrecemos remocion de basura, instalacion de cesped, renta de camiones y contenedores, y entrega o recogida rapida.',
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
            answer: 'Atendemos la mayor parte de Palm Beach County y con gusto confirmamos cobertura para tu ciudad o vecindario.',
          },
          {
            question: 'Como determinan el precio de remocion de basura?',
            answer: 'Basamos el precio en el tamano de la carga y el tiempo requerido, para que solo pagues por el espacio que usas.',
          },
        ],
      },
      contact: {
        tag: 'Listo Para Empezar',
        title: 'Listo Para Empezar Hoy?',
        description:
          'Contactanos ahora y nos encargamos del resto con respuesta rapida, disponibilidad el mismo dia y servicio confiable.',
        callUs: 'Llamanos',
        textUs: 'Escribenos',
      },
    },
    footer: {
      description:
        'Remocion de basura rapida y ecoamigable, instalacion de cesped y entrega el mismo dia en Palm Beach County.',
      servicesTitle: 'Servicios',
      companyTitle: 'Compania',
      services: ['Remocion de Basura', 'Instalacion de Cesped', 'Entrega y Recogida Rapida', 'Renta de Camion y Contenedor'],
      company: ['Como Funciona', 'Por Que Elegirnos', 'Zonas de Servicio', 'Preguntas', 'Contactanos'],
    },
  },
  ht: {
    header: {
      nav: {
        services: 'Servis',
        work: 'Travay Nou',
        howItWorks: 'Kijan Li Mache',
        whyUs: 'Poukisa Nou',
        areas: 'Zon yo',
        faq: 'Kesyon',
      },
      callUs: 'Rele Nou',
      languageMenuLabel: 'Lang chwazi a',
      languageMenuAria: 'Opsyon lang',
      current: 'Kounye a',
    },
    hero: {
      lines: ['Nimewo 1 nan Palm Beach', 'Retire Fatra', 'Ak Svis Nou'],
      description:
        'Retire fatra, enstalasyon gazon ak livrezon oswa ranmase menm jou a. Estimasyon gratis, fason ekolojik, epi jiska 60% resikle oswa bay.',
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
          'Soti nan retire fatra rive nan mete gazon fre ak livrezon menm jou, nou kouvri tout Palm Beach County.',
        cta: 'Mande Sèvis',
        items: [
          {
            title: 'Lwe',
            subtitle: 'Ou bezwen yon kamyon oswa bwat pou pwojè ou a?',
            description:
              'Lwe ekipman nou yo ak bon pri, tan fleksib, epi san frè kache.',
            bullets: ['Peryòd fleksib', 'Kamyon ak bwat disponib', 'Pa gen frè kache'],
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
            subtitle: 'Sèvis menm jou atravè Palm Beach County.',
            description:
              'Nou livre epi ranmase materyèl, sak, ak atik rapidman ak pwofesyonalis.',
            bullets: ['Disponib menm jou', 'Materyèl, sak ak atik', 'Tout Palm Beach County'],
            accent: 'service-card delivery',
            icon: 'delivery',
          },
        ],
      },
      work: {
        tag: 'Travay Nou',
        title: 'Anvan ak Apre',
        description: 'Travay reyèl, rezilta reyèl. Gade diferans AMG la an aksyon.',
        cta: 'Jwenn Estimasyon Ou',
        items: [
          { ...sharedWorkItems[0], title: 'Enstalasyon Gazon', location: 'Palm Beach County' },
          { ...sharedWorkItems[1], title: 'Retire Fatra ak Debri', location: 'Palm Beach County' },
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
        title: 'Diferans AMG la',
        description:
          'Nou retire fatra pi vit, pi pwòp, epi ak plis responsablite pase nenpòt lòt moun nan Palm Beach County.',
        items: [
          {
            title: 'Sèvis Trè Vit',
            description: 'Randevou menm jou ak pwochen jou disponib ak fenèt arive garanti.',
          },
          {
            title: 'Jete Fatra Ekolojik',
            description: 'Nou resikle oswa bay plis pase 60% nan sa nou ranmase lè sa posib.',
          },
          {
            title: 'Pri Jis ak Fleksib',
            description: 'Pri davans, pa gen frè kache, epi pri baze sou espas ou itilize a.',
          },
          {
            title: 'Gwo Kamyon',
            description: 'Kamyon nou yo 20% pi gwo pase konpetisyon an pou mwens vwayaj ak travay pi rapid.',
          },
        ],
      },
      areas: {
        tag: 'Zòn Sèvis',
        title: 'N ap Sèvi Palm Beach County',
        description:
          'Nou fyè pou nou ofri retire fatra, enstalasyon gazon, ak sèvis livrezon atravè tout konte a.',
        items: sharedAreas,
      },
      faq: {
        tag: 'Kesyon',
        title: 'Kesyon Yo Poze Souvan',
        description: 'Ou gen yon kesyon ki pa sou lis la? Ekip nou an toujou pare pou ede.',
        items: [
          {
            question: 'Ki sèvis nou ofri?',
            answer:
              'Nou bay sèvis retire fatra, enstalasyon gazon, lwe kamyon ak bwat, ak livrezon oswa ranmase rapid.',
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
            answer: 'Nou sèvi pifò Palm Beach County epi nou kontan konfime si nou kouvri vil oswa katye ou a.',
          },
          {
            question: 'Kijan pri retire fatra a detèmine?',
            answer: 'Nou baze pri a sou gwosè chaj la ak tan travay la, konsa ou peye sèlman pou espas ou itilize a.',
          },
        ],
      },
      contact: {
        tag: 'Pare Pou Kòmanse',
        title: 'Pare Pou Kòmanse Jodi a?',
        description:
          'Kontakte nou kounye a epi n ap pran swen rès la ak repons rapid, disponiblite menm jou, ak sèvis serye.',
        callUs: 'Rele Nou',
        textUs: 'Voye Teks',
      },
    },
    footer: {
      description:
        'Retire fatra rapid ak ekolojik, enstalasyon gazon, ak livrezon menm jou atravè Palm Beach County.',
      servicesTitle: 'Sèvis',
      companyTitle: 'Konpayi',
      services: ['Retire Fatra', 'Enstalasyon Gazon', 'Livrezon ak Ranmase Vit', 'Lwe Kamyon ak Bwat'],
      company: ['Kijan Li Mache', 'Poukisa Chwazi Nou', 'Zòn Sèvis', 'Kesyon', 'Kontakte Nou'],
    },
  },
}
