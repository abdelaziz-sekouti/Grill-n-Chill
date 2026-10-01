export type Language = 'en' | 'es' | 'fr' | 'darija';

export interface Translations {
  nav: {
    home: string;
    menu: string;
    specialties: string;
    about: string;
    reviews: string;
    location: string;
    whatsappBooking: string;
    bookTable: string;
  };
  hero: {
    googleReviews: string;
    halalCertified: string;
    openHours: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    reserveInstantly: string;
    whatsappDirect: string;
    address: string;
  };
  reservation: {
    fastTrack: string;
    title: string;
    liveSync: string;
    dateLabel: string;
    slotLabel: string;
    slotOptions: {
      lunch: string;
      sunset: string;
      dinner: string;
      late: string;
    };
    guestsLabel: string;
    guestOptions: {
      two: string;
      four: string;
      six: string;
      eight: string;
    };
    zoneLabel: string;
    zoneOptions: {
      indoor: string;
      terrace: string;
      vip: string;
    };
    phoneLabel: string;
    phonePlaceholder: string;
    submitBtn: string;
    submitting: string;
    feedbackMsg: string;
    trustPerk: string;
    customEvent: string;
    callNow: string;
  };
  specialties: {
    tagline: string;
    title: string;
    viewMenuPdf: string;
    preReserve: string;
    items: {
      brisket: {
        badge: string;
        price: string;
        title: string;
        desc: string;
        tag: string;
      };
      burger: {
        badge: string;
        price: string;
        title: string;
        desc: string;
        tag: string;
      };
      ribeye: {
        badge: string;
        price: string;
        title: string;
        desc: string;
        tag: string;
      };
    };
  };
  fullMenu: {
    tagline: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      smokehouse: string;
      burgers: string;
      steaks: string;
      sides: string;
      mocktails: string;
      desserts: string;
    };
    orderOnWhatsApp: string;
    modalTitle: string;
    modalDesc: string;
    quantity: string;
    notesLabel: string;
    notesPlaceholder: string;
    confirmWhatsApp: string;
    close: string;
  };
  features: {
    tagline: string;
    title: string;
    desc: string;
    item1: {
      title: string;
      desc: string;
    };
    item2: {
      title: string;
      desc: string;
    };
    item3: {
      title: string;
      desc: string;
    };
  };
  reviews: {
    tagline: string;
    title: string;
    ratingText: string;
    review1: {
      quote: string;
      author: string;
      verified: string;
    };
    review2: {
      quote: string;
      author: string;
      verified: string;
    };
    review3: {
      quote: string;
      author: string;
      verified: string;
    };
    leaveReviewBtn: string;
  };
  perk: {
    tagline: string;
    title: string;
    desc: string;
    claimBtn: string;
    whatsappClaim: string;
  };
  location: {
    tagline: string;
    title: string;
    venueName: string;
    addressLine: string;
    city: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
    contactTitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    parkingNote: string;
    openMapsBtn: string;
    gpsLine: string;
    directionsBtn: string;
  };
  footer: {
    tagline: string;
    bookTable: string;
    hoursTitle: string;
    openDaily: string;
    schedule: string;
    kitchenNote: string;
    locationTitle: string;
    address: string;
    phone: string;
    whatsapp: string;
    openMaps: string;
    navTitle: string;
    rights: string;
    craftedWith: string;
  };
  modals: {
    reviewTitle: string;
    yourName: string;
    yourCity: string;
    rating: string;
    yourComment: string;
    submitReview: string;
    thankYou: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      specialties: 'Specialties',
      about: 'About',
      reviews: 'Reviews',
      location: 'Location & Map',
      whatsappBooking: 'WhatsApp Booking',
      bookTable: 'Book a Table',
    },
    hero: {
      googleReviews: '4.8/5 on Google Reviews',
      halalCertified: '100% Halal Certified',
      openHours: 'Open Daily: 12:00 PM – 01:00 AM',
      titlePart1: 'Wood-Fired Perfection & Chilled Lounge Vibes in',
      titleHighlight: 'Tétouan',
      titlePart2: '',
      description:
        "Tender slow-smoked BBQ brisket, artisan smash burgers, sizzling char-grilled steaks, and handcrafted chill mocktails in Northern Morocco's premier culinary destination.",
      reserveInstantly: 'Reserve Table Instantly',
      whatsappDirect: 'WhatsApp Direct (+212 646-841539)',
      address: 'Avenue Mohammed V / Route de Martil, Tétouan (Opp. Central District)',
    },
    reservation: {
      fastTrack: 'Fast-Track Confirmation',
      title: 'Book Your Table in 30 Seconds',
      liveSync: 'Tables live update • Instant WhatsApp sync',
      dateLabel: 'Dining Date',
      slotLabel: 'Preferred Slot',
      slotOptions: {
        lunch: 'Lunch (12:00 - 15:30)',
        sunset: 'Sunset / Chill (16:00 - 19:30)',
        dinner: 'Prime Dinner (20:00 - 22:30)',
        late: 'Late Smokehouse (22:30 - 00:30)',
      },
      guestsLabel: 'Guests',
      guestOptions: {
        two: '1-2 Guests (Table for Two)',
        four: '3-4 Guests (Standard Table)',
        six: '5-6 Guests (Lounge Booth)',
        eight: '8+ Guests (VIP Family Table)',
      },
      zoneLabel: 'Preferred Zone',
      zoneOptions: {
        indoor: 'Indoor Cozy Lounge (AC)',
        terrace: 'Open Flame Terrace View',
        vip: 'Private VIP Booth',
      },
      phoneLabel: 'WhatsApp Number (for Instant Confirmation)',
      phonePlaceholder: '06XX-XXXXXX / +212 646-841539',
      submitBtn: 'Check Availability & Confirm Table',
      submitting: 'Connecting to VIP Desk...',
      feedbackMsg: "Redirecting to Grill 'n Chill VIP desk WhatsApp with your reservation details...",
      trustPerk: 'Zero prepayment needed • Complimentary chef appetizer for online bookings',
      customEvent: 'Need custom event seating?',
      callNow: 'Call +212 539 00 00 00',
    },
    specialties: {
      tagline: 'Pitmaster Cuts & Artisan Craft',
      title: 'Our Signature Specialties',
      viewMenuPdf: 'View Full Digital Menu (PDF)',
      preReserve: 'Pre-Reserve Cut',
      items: {
        brisket: {
          badge: 'Smoked 14 Hours',
          price: '140 MAD',
          title: 'The Pitmaster Brisket & Sausage Platter',
          desc: 'Prime grain-fed beef brisket with signature dark bark and deep smoke ring. Paired with wood-fired spicy artisanal sausages, crinkle-cut fries, tangy house slaw, and smoked dipping sauces.',
          tag: 'Halal Prime Beef',
        },
        burger: {
          badge: 'Local Legend • Smashed Fresh',
          price: '85 MAD',
          title: 'Signature Double Truffle Smash',
          desc: 'Two crispy-edge 100% chuck smashed patties, double mature cheddar, balsamic caramelized onions, smoked beef bacon ribbons, and house-made truffle smash sauce on toasted brioche.',
          tag: 'Tetouan Top Seller',
        },
        ribeye: {
          badge: 'Olive Charcoal Grilled',
          price: '175 MAD',
          title: 'Ribeye Slate & Flame Skewers',
          desc: '350g char-grilled black angus ribeye carved hot over sizzling slate embers, accompanied by Moroccan herb-marinated beef filet skewers, roasted cherry tomatoes, and chimichurri.',
          tag: "Chef's Reserve",
        },
      },
    },
    fullMenu: {
      tagline: 'Artisan Flavors & Fresh Daily Cuts',
      title: 'The Complete Smokehouse Menu',
      subtitle: 'From low-and-slow oak-smoked barbecue to gourmet smash burgers and chilled mocktails.',
      categories: {
        all: 'All Dishes',
        smokehouse: 'Oak Smoked BBQ',
        burgers: 'Artisan Burgers',
        steaks: 'Charcoal Steaks',
        sides: 'Sides & Appetizers',
        mocktails: 'Craft Mocktails',
        desserts: 'Desserts',
      },
      orderOnWhatsApp: 'Order / Reserve via WhatsApp',
      modalTitle: 'Pre-Order Dish',
      modalDesc: 'Customize your order and send it directly to our kitchen team in Tetouan.',
      quantity: 'Quantity',
      notesLabel: 'Special Instructions / Doneness',
      notesPlaceholder: 'E.g., Medium rare, extra sauce, without pickles...',
      confirmWhatsApp: 'Send Order to WhatsApp Desk',
      close: 'Close',
    },
    features: {
      tagline: 'The Authentic Experience',
      title: 'Crafted with Oak, Fire & Patience',
      desc: "We bring traditional low-and-slow wood smoking to Tetouan's cosmopolitan palate, pairing rustic techniques with modern lounge comfort.",
      item1: {
        title: '14-Hour Low & Slow Pit',
        desc: 'Our brisket and ribs rest inside custom pit smokers fueled solely with local Moroccan olive and dried oak wood, infusing each fiber with rich flavor.',
      },
      item2: {
        title: 'Relaxed Lounge & Terraces',
        desc: 'Spacious leather booths, ambient lighting, curated chill playlists, and outdoor terrace seating crafted for family dinners and gatherings.',
      },
      item3: {
        title: 'Artisan Craft Mocktails',
        desc: 'Zero-proof handcrafted coolers, smoked citrus mojitos, and fresh botanical infusions blended on order to pair with smoky cuts.',
      },
    },
    reviews: {
      tagline: 'Real Customer Feedback',
      title: 'What Tetouan Diners Say',
      ratingText: '4.8 on Google Maps (320+ reviews)',
      review1: {
        quote: '“Without question the best smoked brisket and smashed burgers in northern Morocco! Incredible smoky flavor, the meat fell apart on the fork.”',
        author: 'Yassine E. • Tétouan',
        verified: 'Verified Google Review',
      },
      review2: {
        quote: '“Atmosphere is unmatched in Tetouan. Warm staff, amazing sizzling steaks, and very refreshing mocktails. Great music at just the right volume.”',
        author: 'Sarah M. • Tanger Visitor',
        verified: 'Verified Google Review',
      },
      review3: {
        quote: '“Booking via WhatsApp took literally 20 seconds. Arrived with my family and our corner booth was ready with delicious warm spiced nuts and bread.”',
        author: 'Karim B. • Local Guide',
        verified: 'Verified Google Review',
      },
      leaveReviewBtn: 'Leave a Review',
    },
    perk: {
      tagline: 'Limited Direct Reservation Perk',
      title: 'Reserve Online Today & Receive a Free Chef Appetizer',
      desc: 'Book your table for this evening or upcoming weekend via our direct engine and receive our signature wood-smoked garlic bread with artisanal compound butter.',
      claimBtn: 'Claim Online Perk • Book Now',
      whatsappClaim: 'WhatsApp Direct Claim',
    },
    location: {
      tagline: 'Find Us in Tétouan',
      title: 'Location & Visit Details',
      venueName: "Grill 'n Chill Smokehouse & Lounge",
      addressLine: 'Avenue Mohammed V / Route de Martil (Coordinates: 35.5653846, -5.4005068)',
      city: 'Tétouan 93000, Morocco',
      hoursTitle: 'Operating Hours',
      hoursLine1: 'Monday to Sunday: 12:00 PM – 01:00 AM',
      hoursLine2: 'Kitchen smoker stays active until 00:30 AM',
      contactTitle: 'Direct Contact Desk',
      phoneLabel: 'Phone: +212 539 00 00 00',
      whatsappLabel: 'WhatsApp: +212 646 84 15 39',
      parkingNote: 'Free customer parking available in front of lounge',
      openMapsBtn: 'Open in Google Maps Navigation',
      gpsLine: 'GPS: 35.5653846, -5.4005068 • Easy access via Route de Martil',
      directionsBtn: 'Get Turn-by-Turn Directions →',
    },
    footer: {
      tagline: "Tetouan's authentic smokehouse & culinary lounge. Slow-smoked prime cuts, artisanal woodfire barbecue, and curated lounge atmosphere.",
      bookTable: 'Instant Reservation',
      hoursTitle: 'Opening Hours',
      openDaily: 'Open 7 Days a Week',
      schedule: 'Monday – Sunday\n12:00 PM – 01:00 AM',
      kitchenNote: 'Kitchen serves until 00:30 AM',
      locationTitle: 'Tetouan Location',
      address: 'Avenue Mohammed V / Route de Martil\nTetouan 93000, Morocco',
      phone: 'Tel: +212 539 00 00 00',
      whatsapp: 'WhatsApp: +212 646 84 15 39',
      openMaps: 'Open in Google Maps',
      navTitle: 'Navigation & Social',
      rights: "© 2026 Grill 'n Chill Smokehouse & Lounge Tetouan. All rights reserved.",
      craftedWith: 'Crafted with Smoke & Fire • Tetouan, MA',
    },
    modals: {
      reviewTitle: 'Share Your Smokehouse Experience',
      yourName: 'Your Name',
      yourCity: 'City (e.g., Tétouan, Tanger, Ceuta)',
      rating: 'Rating',
      yourComment: 'Your Review / Dish Favorite',
      submitReview: 'Submit Review',
      thankYou: 'Thank you for your review! It has been submitted.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Carta',
      specialties: 'Especialidades',
      about: 'Nosotros',
      reviews: 'Opiniones',
      location: 'Ubicación y Mapa',
      whatsappBooking: 'Reserva WhatsApp',
      bookTable: 'Reservar Mesa',
    },
    hero: {
      googleReviews: '4.8/5 en Google Reviews',
      halalCertified: '100% Certificado Halal',
      openHours: 'Abierto a diario: 12:00 – 01:00',
      titlePart1: 'Ahumados a la Leña y Ambiente Lounge en',
      titleHighlight: 'Tetuán',
      titlePart2: '',
      description:
        'Tierno brisket ahumado a fuego lento, smash burgers artesanas, chuletones jugosos a la brasa y mocktails helados en el destino gastronómico de referencia en el norte de Marruecos.',
      reserveInstantly: 'Reservar Mesa al Instante',
      whatsappDirect: 'WhatsApp Directo (+212 646-841539)',
      address: 'Avenida Mohammed V / Carretera de Martil, Tetuán (Frente al Distrito Central)',
    },
    reservation: {
      fastTrack: 'Confirmación Rápida',
      title: 'Reserva tu mesa en 30 segundos',
      liveSync: 'Disponibilidad en vivo • Sincronización instantánea por WhatsApp',
      dateLabel: 'Fecha de la reserva',
      slotLabel: 'Franja horaria',
      slotOptions: {
        lunch: 'Almuerzo (12:00 - 15:30)',
        sunset: 'Tarde / Chill (16:00 - 19:30)',
        dinner: 'Cena Principal (20:00 - 22:30)',
        late: 'Smokehouse Nocturno (22:30 - 00:30)',
      },
      guestsLabel: 'Comensales',
      guestOptions: {
        two: '1-2 Personas (Mesa para dos)',
        four: '3-4 Personas (Mesa estándar)',
        six: '5-6 Personas (Cabina Lounge)',
        eight: '8+ Personas (Mesa Familiar VIP)',
      },
      zoneLabel: 'Zona preferida',
      zoneOptions: {
        indoor: 'Salón Climatizado (AC)',
        terrace: 'Terraza Vistas a las Brasas',
        vip: 'Zona VIP Privada',
      },
      phoneLabel: 'Número de WhatsApp (para confirmación)',
      phonePlaceholder: '06XX-XXXXXX / +212 646-841539',
      submitBtn: 'Verificar disponibilidad y confirmar',
      submitting: 'Conectando con Recepción VIP...',
      feedbackMsg: 'Redirigiendo al WhatsApp de Grill \'n Chill con los detalles de tu reserva...',
      trustPerk: 'Sin pago por adelantado • Aperitivo gratis del chef con reserva online',
      customEvent: '¿Evento privado o grupo grande?',
      callNow: 'Llamar al +212 539 00 00 00',
    },
    specialties: {
      tagline: 'Cortes Maestros y Pasión Ahumada',
      title: 'Nuestras Especialidades de la Casa',
      viewMenuPdf: 'Ver Carta Digital Completa (PDF)',
      preReserve: 'Pre-Reservar Corte',
      items: {
        brisket: {
          badge: 'Ahumado 14 Horas',
          price: '140 MAD',
          title: 'Plato Maestro: Brisket y Salchicha Artesana',
          desc: 'Pecho de ternera premium de grano, ahumado lentamente con corteza crujiente y anillo de humo rojizo. Servido con salchichas artesanas a la brasa, patatas onduladas, ensalada de col y salsas de la casa.',
          tag: 'Ternera Halal Premium',
        },
        burger: {
          badge: 'Leyenda Local • Smash Fresco',
          price: '85 MAD',
          title: 'Doble Truffle Smash Signature',
          desc: 'Dos piezas de carne picada 100% vacuno aplastadas a la plancha, doble queso cheddar fundido, cebolla caramelizada al balsámico, tiras crujientes de bacon de ternera y salsa trufada en pan brioche tostado.',
          tag: 'Nº1 en Ventas en Tetuán',
        },
        ribeye: {
          badge: 'Brasa de Carbón de Olivo',
          price: '175 MAD',
          title: 'Chuletón Ribeye sobre Pizarra y Brochetas',
          desc: '350g de lomo alto Black Angus cortado al momento sobre piedra caliente, con brochetas de solomillo marinadas en hierbas marroquíes, tomates cherry asados y salsa chimichurri.',
          tag: 'Reserva del Chef',
        },
      },
    },
    fullMenu: {
      tagline: 'Sabores Artesanos y Cortes Diarios',
      title: 'La Carta Completa Grill \'n Chill',
      subtitle: 'Desde barbacoa ahumada con madera de roble hasta hamburguesas smash gourmet y refrescantes mocktails.',
      categories: {
        all: 'Todos los Platos',
        smokehouse: 'Ahumados a la Leña',
        burgers: 'Burgers Artesanas',
        steaks: 'Carnes a la Brasa',
        sides: 'Entrantes y Guarniciones',
        mocktails: 'Cócteles sin Alcohol',
        desserts: 'Postres',
      },
      orderOnWhatsApp: 'Pedir / Reservar por WhatsApp',
      modalTitle: 'Pre-Reservar Plato',
      modalDesc: 'Personaliza tu pedido y envíalo directamente a nuestra cocina en Tetuán.',
      quantity: 'Cantidad',
      notesLabel: 'Punto de la carne / Observaciones',
      notesPlaceholder: 'Ej: Al punto, salsa aparte, sin cebolla...',
      confirmWhatsApp: 'Enviar pedido a recepción',
      close: 'Cerrar',
    },
    features: {
      tagline: 'La Auténtica Experiencia',
      title: 'Elaborado con Roble, Fuego y Paciencia',
      desc: 'Acercamos la técnica tradicional del ahumado texano adaptada al paladar cosmopolita de Tetuán, combinando rusticidad y confort lounge.',
      item1: {
        title: '14 Horas de Ahumado Lento',
        desc: 'Nuestros costillares y brisket reposan en ahumadores de pozo alimentados exclusivamente con madera local de olivo y roble seco.',
      },
      item2: {
        title: 'Lounge Acogedor y Terrazas',
        desc: 'Cómodos sillones de cuero, iluminación tenue, música chill ambiental y terraza exterior pensada para cenas familiares y reuniones entre amigos.',
      },
      item3: {
        title: 'Mocktails de Autor',
        desc: 'Bebidas artesanales 0% alcohol, mojitos de cítricos ahumados e infusiones botánicas preparadas al instante para maridar con carnes a la brasa.',
      },
    },
    reviews: {
      tagline: 'Opiniones Reales',
      title: 'Lo que dicen los comensales en Tetuán',
      ratingText: '4.8 en Google Maps (+320 valoraciones)',
      review1: {
        quote: '“¡Sin duda el mejor brisket ahumado y las mejores smash burgers del norte de Marruecos! La carne se deshace con el tenedor y el sabor a humo es espectacular.”',
        author: 'Yassine E. • Tetuán',
        verified: 'Reseña Verificada de Google',
      },
      review2: {
        quote: '“El ambiente en Tetuán no tiene comparación. Trato exquisito, carnes servidas en su punto y los mocktails muy frescos. Música al volumen perfecto.”',
        author: 'Sarah M. • Visitante de Tánger',
        verified: 'Reseña Verificada de Google',
      },
      review3: {
        quote: '“Reservé por WhatsApp en menos de 20 segundos. Al llegar con mi familia nuestra mesa rincón ya estaba lista con frutos secos especiados y pan caliente.”',
        author: 'Karim B. • Guía Local',
        verified: 'Reseña Verificada de Google',
      },
      leaveReviewBtn: 'Escribir una Opinión',
    },
    perk: {
      tagline: 'Ventaja Exclusiva de Reserva Directa',
      title: 'Reserva online hoy y recibe un aperitivo gratis del chef',
      desc: 'Haz tu reserva para esta noche o este fin de semana desde nuestra web y disfruta de nuestro pan de ajo artesanal ahumado al fuego con mantequilla aromatizada.',
      claimBtn: 'Obtener Regalo • Reservar Mesa',
      whatsappClaim: 'Reclamar vía WhatsApp',
    },
    location: {
      tagline: 'Encuéntranos en Tetuán',
      title: 'Ubicación y Horarios de Visita',
      venueName: "Grill 'n Chill Smokehouse & Lounge",
      addressLine: 'Avenida Mohammed V / Carretera de Martil (Coordenadas: 35.5653846, -5.4005068)',
      city: 'Tetuán 93000, Marruecos',
      hoursTitle: 'Horario de Apertura',
      hoursLine1: 'Lunes a Domingo: 12:00 – 01:00',
      hoursLine2: 'La cocina de ahumados atiende hasta las 00:30',
      contactTitle: 'Contacto Directo',
      phoneLabel: 'Teléfono: +212 539 00 00 00',
      whatsappLabel: 'WhatsApp: +212 646 84 15 39',
      parkingNote: 'Aparcamiento gratuito para clientes justo delante del local',
      openMapsBtn: 'Abrir Navegación en Google Maps',
      gpsLine: 'GPS: 35.5653846, -5.4005068 • Acceso directo desde la carretera de Martil',
      directionsBtn: 'Cómo llegar paso a paso →',
    },
    footer: {
      tagline: 'El smokehouse & lounge de referencia en Tetuán. Cortes nobles ahumados lentamente, barbacoa de leña y el mejor ambiente para disfrutar.',
      bookTable: 'Reserva Inmediata',
      hoursTitle: 'Horario',
      openDaily: 'Abierto los 7 días de la semana',
      schedule: 'Lunes a Domingo\n12:00 – 01:00',
      kitchenNote: 'Cocina activa hasta las 00:30',
      locationTitle: 'Localización',
      address: 'Avenida Mohammed V / Carretera de Martil\nTetuán 93000, Marruecos',
      phone: 'Tel: +212 539 00 00 00',
      whatsapp: 'WhatsApp: +212 646 84 15 39',
      openMaps: 'Ver en Google Maps',
      navTitle: 'Navegación y Redes',
      rights: "© 2026 Grill 'n Chill Smokehouse & Lounge Tetuán. Todos los derechos reservados.",
      craftedWith: 'Hecho con humo y fuego • Tetuán, MA',
    },
    modals: {
      reviewTitle: 'Comparte tu experiencia en Grill \'n Chill',
      yourName: 'Tu Nombre',
      yourCity: 'Ciudad (ej. Tetuán, Tánger, Ceuta)',
      rating: 'Puntuación',
      yourComment: 'Tu opinión / Plato favorito',
      submitReview: 'Enviar Opinión',
      thankYou: '¡Muchas gracias por tu reseña!',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      specialties: 'Spécialités',
      about: 'À Propos',
      reviews: 'Avis',
      location: 'Accès & Plan',
      whatsappBooking: 'Réservation WhatsApp',
      bookTable: 'Réserver une Table',
    },
    hero: {
      googleReviews: '4.8/5 sur Google Avis',
      halalCertified: '100% Certifié Halal',
      openHours: 'Ouvert 7j/7 : 12h00 – 01h00',
      titlePart1: 'Perfection du Fumoir au Bois & Ambiance Lounge à',
      titleHighlight: 'Tétouan',
      titlePart2: '',
      description:
        'Brisket fondant fumé lentement au bois de chêne, smash burgers artisanaux, grillades saisies sur braises et mocktails signatures au cœur du Nord marocain.',
      reserveInstantly: 'Réserver Immédiatement',
      whatsappDirect: 'WhatsApp Direct (+212 646-841539)',
      address: 'Avenue Mohammed V / Route de Martil, Tétouan (Face au District Central)',
    },
    reservation: {
      fastTrack: 'Confirmation Express',
      title: 'Réservez votre table en 30 secondes',
      liveSync: 'Disponibilité en direct • Synchronisation instantanée sur WhatsApp',
      dateLabel: 'Date du repas',
      slotLabel: 'Créneau horaire',
      slotOptions: {
        lunch: 'Déjeuner (12h00 - 15h30)',
        sunset: 'Coucher de soleil / Chill (16h00 - 19h30)',
        dinner: 'Dîner Principal (20h00 - 22h30)',
        late: 'Smokehouse Tardif (22h30 - 00h30)',
      },
      guestsLabel: 'Couverts',
      guestOptions: {
        two: '1-2 Personnes (Table pour deux)',
        four: '3-4 Personnes (Table standard)',
        six: '5-6 Personnes (Banquette Lounge)',
        eight: '8+ Personnes (Grande Table VIP Famille)',
      },
      zoneLabel: 'Espace préféré',
      zoneOptions: {
        indoor: 'Salon Intérieur Climatisé',
        terrace: 'Terrasse Vue sur Braises',
        vip: 'Salon VIP Privatif',
      },
      phoneLabel: 'Numéro WhatsApp (pour confirmation immédiate)',
      phonePlaceholder: '06XX-XXXXXX / +212 646-841539',
      submitBtn: 'Vérifier la disponibilité & Confirmer',
      submitting: 'Connexion au desk VIP...',
      feedbackMsg: 'Redirection vers le WhatsApp officiel de Grill \'n Chill avec les détails de votre réservation...',
      trustPerk: 'Aucun prépaiement requis • Entrée offerte par le chef pour toute réservation web',
      customEvent: 'Événement d\'entreprise ou banquet privé ?',
      callNow: 'Appeler le +212 539 00 00 00',
    },
    specialties: {
      tagline: 'Pièces d\'Exception & Maîtrise du Fumoir',
      title: 'Nos Spécialités Signatures',
      viewMenuPdf: 'Consulter la Carte Complète (PDF)',
      preReserve: 'Pré-Réserver cette Pièce',
      items: {
        brisket: {
          badge: 'Fumé 14 Heures',
          price: '140 MAD',
          title: 'Plateau Pitmaster : Brisket & Saucisses Fumées',
          desc: 'Poitrine de bœuf Black Angus fondante à souhait, écorce poivrée caramélisée et anneau de fumée caractéristique. Accompagnée de saucisses artisanales fumées, frites ondulées, coleslaw et sauces maison.',
          tag: 'Bœuf Halal d\'Exception',
        },
        burger: {
          badge: 'Légende de Tétouan • Smashed Minute',
          price: '85 MAD',
          title: 'Double Truffle Smash Signature',
          desc: 'Deux steaks de bœuf 100% pur muscle smashés croustillants, double cheddar affiné, oignons caramélisés au balsamique, bacon de bœuf fumé et sauce truffe maison sur brioche toastée.',
          tag: 'Best-Seller Tétouan',
        },
        ribeye: {
          badge: 'Grillé au Charbon d\'Olivier',
          price: '175 MAD',
          title: 'Entrecôte sur Ardoise & Brochettes Filet',
          desc: '350g d\'entrecôte Black Angus grillée minute sur pierre chaude crépitante, servie avec brochettes de filet mariné aux herbes marocaines, tomates rôties et chimichurri frais.',
          tag: 'Réserve du Chef',
        },
      },
    },
    fullMenu: {
      tagline: 'Saveurs Fumé & Viandes Sélectionnées',
      title: 'Le Menu Complet du Smokehouse',
      subtitle: 'Du véritable barbecue texan fumé au bois de chêne jusqu\'aux burgers gourmets et mocktails désaltérants.',
      categories: {
        all: 'Tous les Plats',
        smokehouse: 'Barbecue Fumé au Bois',
        burgers: 'Smash Burgers',
        steaks: 'Grillades au Charbon',
        sides: 'Accompagnements & Tapas',
        mocktails: 'Mocktails Artisanaux',
        desserts: 'Desserts Gourmands',
      },
      orderOnWhatsApp: 'Commander / Réserver sur WhatsApp',
      modalTitle: 'Pré-réserver un plat',
      modalDesc: 'Personnalisez votre commande et envoyez-la directement à notre brigade de cuisine.',
      quantity: 'Quantité',
      notesLabel: 'Cuisson / Remarques spéciales',
      notesPlaceholder: 'Ex: Cuisson à point, sauce à part, sans oignons...',
      confirmWhatsApp: 'Envoyer la commande sur WhatsApp',
      close: 'Fermer',
    },
    features: {
      tagline: 'L\'Expérience Authentique',
      title: 'Forgé par le Chêne, le Feu & la Patience',
      desc: 'Nous introduisons la véritable tradition du fumage basse température à Tétouan, alliant savoir-faire rustique et atmosphère lounge contemporaine.',
      item1: {
        title: 'Fumoir Basse Température 14H',
        desc: 'Nos pièces de viande reposent dans des fumoirs artisanaux alimentés exclusivement au bois d\'olivier et de chêne marocain.',
      },
      item2: {
        title: 'Lounge Confortable & Terrasses',
        desc: 'Banquettes en cuir spacieuses, lumière feutrée, playlist chill acoustique et terrasse aérée pour vos dîners en famille ou entre amis.',
      },
      item3: {
        title: 'Mocktails Créatifs Faits Minute',
        desc: 'Boissons fraîches 100% sans alcool, mojitos aux agrumes fumés et infusions botaniques équilibrées pour accompagner les viandes grillées.',
      },
    },
    reviews: {
      tagline: 'Témoignages Clients',
      title: 'L\'Avis des Gourmets à Tétouan',
      ratingText: '4.8 sur Google Maps (+320 avis)',
      review1: {
        quote: '« Incontestablement le meilleur brisket et les meilleurs smash burgers de tout le Nord marocain ! La viande se découpe à la fourchette tellement elle est fondante. »',
        author: 'Yassine E. • Tétouan',
        verified: 'Avis Google Vérifié',
      },
      review2: {
        quote: '« Une ambiance unique à Tétouan. Équipe très accueillante, viandes saisies à la perfection et mocktails succulents. Musique très bien dosée. »',
        author: 'Sarah M. • De passage de Tanger',
        verified: 'Avis Google Vérifié',
      },
      review3: {
        quote: '« Réservation via WhatsApp effectuée en moins de 30 secondes. À notre arrivée en famille, notre banquette était prête avec pain chaud et amuse-bouche. »',
        author: 'Karim B. • Guide Local',
        verified: 'Avis Google Vérifié',
      },
      leaveReviewBtn: 'Laisser un Avis',
    },
    perk: {
      tagline: 'Avantage Réservation Directe Web',
      title: 'Réservez en ligne aujourd\'hui et recevez une entrée offerte',
      desc: 'Réservez votre table pour ce soir ou ce week-end depuis notre site officiel et dégustez notre pain à l\'ail toasté au feu de bois avec beurre composé artisanal.',
      claimBtn: 'Profiter de l\'Offre • Réserver',
      whatsappClaim: 'Réclamer via WhatsApp',
    },
    location: {
      tagline: 'Nous Trouver à Tétouan',
      title: 'Accès & Informations Pratiques',
      venueName: "Grill 'n Chill Smokehouse & Lounge",
      addressLine: 'Avenue Mohammed V / Route de Martil (Coordonnées : 35.5653846, -5.4005068)',
      city: 'Tétouan 93000, Maroc',
      hoursTitle: 'Horaires d\'Ouverture',
      hoursLine1: 'Lundi au Dimanche : 12h00 – 01h00',
      hoursLine2: 'La cuisine du fumoir sert jusqu\'à 00h30',
      contactTitle: 'Accueil & Réservations',
      phoneLabel: 'Téléphone : +212 539 00 00 00',
      whatsappLabel: 'WhatsApp : +212 646 84 15 39',
      parkingNote: 'Parking gratuit réservé aux clients juste devant le lounge',
      openMapsBtn: 'Ouvrir l\'Itinéraire sur Google Maps',
      gpsLine: 'GPS : 35.5653846, -5.4005068 • Accès direct via Route de Martil',
      directionsBtn: 'Itinéraire pas à pas →',
    },
    footer: {
      tagline: 'Le smokehouse & lounge gastronomique de Tétouan. Pièces de viande d\'exception fumées au feu de bois et ambiance détendue.',
      bookTable: 'Réservation Immédiate',
      hoursTitle: 'Horaires',
      openDaily: 'Ouvert 7 jours sur 7',
      schedule: 'Lundi – Dimanche\n12h00 – 01h00',
      kitchenNote: 'Cuisine active jusqu\'à 00h30',
      locationTitle: 'Adresse à Tétouan',
      address: 'Avenue Mohammed V / Route de Martil\nTétouan 93000, Maroc',
      phone: 'Tél : +212 539 00 00 00',
      whatsapp: 'WhatsApp : +212 646 84 15 39',
      openMaps: 'Voir sur Google Maps',
      navTitle: 'Navigation & Réseaux',
      rights: "© 2026 Grill 'n Chill Smokehouse & Lounge Tétouan. Tous droits réservés.",
      craftedWith: 'Cuisiné au feu de bois & amour • Tétouan, MA',
    },
    modals: {
      reviewTitle: 'Donnez votre avis sur Grill \'n Chill',
      yourName: 'Votre Nom',
      yourCity: 'Ville (ex: Tétouan, Tanger, Fnideq)',
      rating: 'Note',
      yourComment: 'Votre commentaire / Plat préféré',
      submitReview: 'Envoyer mon avis',
      thankYou: 'Merci beaucoup pour votre avis !',
    },
  },
  darija: {
    nav: {
      home: 'الرئيسية',
      menu: 'المينيو',
      specialties: 'الشهيوات ديالنا',
      about: 'شكون حنا',
      reviews: 'آراء الناس',
      location: 'الموقع والخريطة',
      whatsappBooking: 'حجز بالواتساب',
      bookTable: 'حجز طبلة دابا',
    },
    hero: {
      googleReviews: '4.8/5 فتقييمات غوغل',
      halalCertified: '100% حلال مضمون',
      openHours: 'محلولين كل يوم: 12:00 زوالاً – 01:00 بالليل',
      titlePart1: 'الشوا بالعود على حقو وطريقو وجلسة وااعرة فـ',
      titleHighlight: 'تطوان',
      titlePart2: '',
      description:
        'لحم البريسكت مدخن 14 ساعة تيذوب فاللسان، برغر مسماش كايحمق، لحيمات مشوية على الفاخر د الزيتون ومشروبات منعشة دايزها الكلام فقلب تطوان.',
      reserveInstantly: 'حجز طبلتك دابا فثواني',
      whatsappDirect: 'واتساب مباشر (0646841539)',
      address: 'شارع محمد الخامس / طريق مارتيل، تطوان (مقابل الحي المركزي)',
    },
    reservation: {
      fastTrack: 'تأكيد سريع ومضمون',
      title: 'حجز طبلتك فـ 30 ثانية فقط',
      liveSync: 'الطبالي كايتحدثو مباشرة • تأكيد فالحين على الواتساب',
      dateLabel: 'تاريخ المجيء',
      slotLabel: 'الوقت اللي بغيتي',
      slotOptions: {
        lunch: 'الغدا (12:00 - 15:30)',
        sunset: 'وقت العشية والغروب (16:00 - 19:30)',
        dinner: 'العشا الرئيسي (20:00 - 22:30)',
        late: 'الشوا د الليل (22:30 - 00:30)',
      },
      guestsLabel: 'شحال بيكم د الناس',
      guestOptions: {
        two: '1-2 أشخاص (طبلة د جوج)',
        four: '3-4 أشخاص (طبلة عادية)',
        six: '5-6 أشخاص (جلسة لاونج مريحة)',
        eight: '8+ أشخاص (طبلة كبيرة عائلية VIP)',
      },
      zoneLabel: 'البلاصة اللي كاتفضل',
      zoneOptions: {
        indoor: 'الصالون الداخلي مكيف ومريح',
        terrace: 'التيراس كايشوف فالشوايات',
        vip: 'جلسة خاصة VIP',
      },
      phoneLabel: 'نمرة الواتساب (باش نأكدو ليك فالحين)',
      phonePlaceholder: '06XX-XXXXXX / 0646841539',
      submitBtn: 'شوف البلايص وتأكد الحجز دابا',
      submitting: 'كانوصلو طلبك لمكتب الحجوزات...',
      feedbackMsg: 'كانحولوك دابا للواتساب ديال غريل آند شيل باش تأكد الحجز ديالك...',
      trustPerk: 'بلا تسبيق بلا والو • مقبلات مجانية من عند الشيف للحجز أونلاين',
      customEvent: 'عندك مناسبة خاصة ولا عراضة كبيرة؟',
      callNow: 'عيط لينا: 00 00 00 539 212+',
    },
    specialties: {
      tagline: 'لحيمات مدخنة وصنعة اليدين',
      title: 'أحسن الأطباق المشهورة عندنا',
      viewMenuPdf: 'شوف المينيو كامل (PDF)',
      preReserve: 'حجز هاد الطبق مسبقاً',
      items: {
        brisket: {
          badge: 'مدخن 14 ساعة بالعود',
          price: '140 درهم',
          title: 'بلاتو الشيف: بريسكت مدخن وسوسيط بلدي',
          desc: 'لحم بقري ممتاز مدخن على المهل بالعود د البلوط والزيتون تايجي رطب ومفتفت. كايجي معاه سوسيط مشوي حار، بطاطا مقرمشة، شلاضة كولسلو وصوصات مدخنة بنينة بزاف.',
          tag: 'لحم بقري حلال 100%',
        },
        burger: {
          badge: 'المحبوب ف تطوان • مسماش طري',
          price: '85 درهم',
          title: 'دوبل سماش برغر بالترافل والفرماج',
          desc: 'جوج طبقات د الكفتة البقرية مضغوطة ومقرمشة، فرماج شيدار ذايب، بصلة معسلة بالبلساميك، طريفات بيكون بقري مدخن وصوص الترافل فخبز البريوش مسخن بالزبدة.',
          tag: 'الأكثر طلباً ف تطوان',
        },
        ribeye: {
          badge: 'مشوي على فاخر الزيتون',
          price: '175 درهم',
          title: 'ستيك ريب آي على الحجر وقطبان فيلي',
          desc: '350 غرام ستيك بلاك أنغوس كايتقطع سخون فالحجر سخون، مع قطبان فيلي بقر متبلين بالأعشاب المغربية وطوماط سوريز وصوص الشيميشوري الحارة والمنعشة.',
          tag: 'اختيار الشيف الخاص',
        },
      },
    },
    fullMenu: {
      tagline: 'نكهات أصيلة ولحوم طرية يومياً',
      title: 'المينيو الكامل ديال غريل آند شيل',
      subtitle: 'من اللحم المدخن على العود حتى لألذ أنواع البرغر والموكتيلات المنعشة.',
      categories: {
        all: 'جميع الأطباق',
        smokehouse: 'الشوا والمدخن',
        burgers: 'البرغر الممتاز',
        steaks: 'الستيك والقطبان',
        sides: 'المقبلات والبطاطا',
        mocktails: 'عصائر وموكتيلات',
        desserts: 'الديسير والحلاوة',
      },
      orderOnWhatsApp: 'طلب أو حجز بالواتساب',
      modalTitle: 'طلب الطبق مسبقاً',
      modalDesc: 'حدد الطلب ديالك وسيفطو مباشرة للكوزينة ديالنا فتطوان.',
      quantity: 'الكمية',
      notesLabel: 'طريقة الطياب / ملاحظات خاصة',
      notesPlaceholder: 'مثلاً: طايب مزيان، الصوص فجنب، بلا بصلة...',
      confirmWhatsApp: 'سيفط الطلب للواتساب دابا',
      close: 'سد',
    },
    features: {
      tagline: 'تجربة حقيقية ماكايناش بحالها',
      title: 'مصاوب بالعود، النار والصبر',
      desc: 'جبنا ليكم سر الشوا والتدخين البطيء على حقو وطريقو لتطوان، بجلسة مريحة وعصرية تاتفوج على الخاطر.',
      item1: {
        title: '14 ساعة د التدخين البطيء',
        desc: 'البريسكت والضلوع كايطيبو ففران التدخين الخاص غير بعود الزيتون والبلوط الجبلي، اللحم كايتشرب النكهة حتى للعظم.',
      },
      item2: {
        title: 'لاونج وتيراس مريح للعائلات',
        desc: 'كراسي جلد مريحة، ضو دافي، وموسيقى هادئة، مع تيراس واسع ومناسب للعشاء مع العائلة والأصحاب.',
      },
      item3: {
        title: 'موكتيلات منعشة مصنوعة بالحبة',
        desc: 'عصائر باردة بدون كحول، موخيتو بالحامض المدخن ونكهات الأعشاب الطبيعية مخلطة طازجة باش تدوز الماكلة.',
      },
    },
    reviews: {
      tagline: 'شهادات الناس اللي جربو',
      title: 'شنو قالو كليان تطوان والزوار',
      ratingText: '4.8 فخرائط غوغل (أكثر من 320 تقييم)',
      review1: {
        quote: '«صراحة وبلا زواق، أحسن لحم مدخن وأحسن برغر كليتو فجهة الشمال كاملة! اللحم فتاتي وتيذوب بوحدو فالفم والنكهة د العود خيالية.»',
        author: 'ياسين ع. • تطوان',
        verified: 'تقييم مؤكد فـ Google',
      },
      review2: {
        quote: '«الجو فالمطعم لا يعلى عليه فتطوان. السيرفيس محترم وبشوش، اللحم مشوي بالطريقة لي بغينا، والمشروبات واعرين بزاف.»',
        author: 'سارة م. • زائرة من طنجة',
        verified: 'تقييم مؤكد فـ Google',
      },
      review3: {
        quote: '«حجزت بالواتساب ف 20 ثانية. وصلنا لقينا الطبلة واجدة وفيها خبز سخون ومقبلات ضيافة. تبارك الله عليكم.»',
        author: 'كريم ب. • مرشد محلي',
        verified: 'تقييم مؤكد فـ Google',
      },
      leaveReviewBtn: 'كتب الرأي ديالك',
    },
    perk: {
      tagline: 'هدية خاصة بالحجز المباشر أونلاين',
      title: 'حجز طبلتك اليوم وربح مقبلات مجانية من عند الشيف',
      desc: 'حجز طبلتك لليوما ولا للويكاند من الموقع ديالنا، واستافد مجاناً من الخبز بالثومة المدخنة على العود والزبدة المنسمة.',
      claimBtn: 'استافد من الهدية • حجز دابا',
      whatsappClaim: 'طلب الهدية عبر الواتساب',
    },
    location: {
      tagline: 'فين حنا فتطوان',
      title: 'العنوان وساعات العمل',
      venueName: 'غريل آند شيل سموك هاوس & لاونج',
      addressLine: 'شارع محمد الخامس / طريق مرتيل (إحداثيات: 35.5653846, -5.4005068)',
      city: 'تطوان 93000، المغرب',
      hoursTitle: 'أوقات العمل',
      hoursLine1: 'من الإثنين حتى للأحد: 12:00 زوالاً – 01:00 بالليل',
      hoursLine2: 'الكوزينة وشواية التدخين شاعلين حتى 00:30 بالليل',
      contactTitle: 'الاتصال المباشر',
      phoneLabel: 'الهاتف: 00 00 00 539 212+',
      whatsappLabel: 'الواتساب: 39 15 84 646 212+ (0646841539)',
      parkingNote: 'باركينغ فابور ومحروس للزبناء قدام الباب ديال اللاونج',
      openMapsBtn: 'فتح الطريق فـ Google Maps',
      gpsLine: 'GPS: 35.5653846, -5.4005068 • دخول ساهل من طريق مرتيل',
      directionsBtn: 'شوف الطريق خطوة بخطوة ←',
    },
    footer: {
      tagline: 'أول سموك هاوس ولاونج أصيل فتطوان. لحوم ممتازة مدخنة على مهل، شواية خشبية وجلسة راقية وممتعة.',
      bookTable: 'حجز فالحين',
      hoursTitle: 'ساعات الخدمة',
      openDaily: 'محلولين 7 أيام فالسيمانة',
      schedule: 'الإثنين – الأحد\n12:00 زوالاً – 01:00 ليلاً',
      kitchenNote: 'الكوزينة خدامة حتى 00:30',
      locationTitle: 'موقعنا فتطوان',
      address: 'شارع محمد الخامس / طريق مرتيل\nتطوان 93000، المغرب',
      phone: 'الهاتف: 00 00 00 539 212+',
      whatsapp: 'الواتساب: 39 15 84 646 212+ (0646841539)',
      openMaps: 'شوف فـ Google Maps',
      navTitle: 'الروابط والتواصل',
      rights: '© 2026 غريل آند شيل سموك هاوس تطوان. جميع الحقوق محفوظة.',
      craftedWith: 'مصنوع بالدخان والعافية • تطوان، المغرب',
    },
    modals: {
      reviewTitle: 'شاركنا تجربتك فـ غريل آند شيل',
      yourName: 'سميتك',
      yourCity: 'المدينة (مثلاً تطوان، طنجة، المضيق)',
      rating: 'التقييم',
      yourComment: 'شنو عجبك ولا طبقك المفضل',
      submitReview: 'نشر التقييم',
      thankYou: 'شكراً بزاف على الرأي والتقييم ديالك!',
    },
  },
};
