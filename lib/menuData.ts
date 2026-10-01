export interface MenuItem {
  id: string;
  category: 'smokehouse' | 'burgers' | 'steaks' | 'sides' | 'mocktails' | 'desserts';
  image: string;
  badge?: Record<string, string>;
  title: Record<string, string>;
  desc: Record<string, string>;
  priceMAD: number;
  tag: Record<string, string>;
  isSignature?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'brisket-platter',
    category: 'smokehouse',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClFswjEDET4xy8AMpGNZYn9JLa8zt0z-4pK4DHw3eZn896p4m-aQYTW_BOMZRL-dj2Sz4G9gBeGt-lxKv6SLPOC1gzJRsBM_cn3Kn2kMwky_a2enGKCb9s1nhkK0fUD7rJAPBxIqC80_e1he3HgMBXZriUYkgvJIYm4vi88e95PegXNu6QmT3Z0hH1n4WkLU3Hx5EbzyJc8kCFGIG_UTxrLyGLtLZXIondtifly0qsF3HLSJOH9DWc',
    badge: {
      en: 'Smoked 14 Hours',
      es: 'Ahumado 14 Horas',
      fr: 'Fumé 14 Heures',
      darija: 'مدخن 14 ساعة بالعود',
    },
    title: {
      en: 'The Pitmaster Brisket & Sausage Platter',
      es: 'Plato Maestro: Brisket y Salchicha Artesana',
      fr: 'Plateau Pitmaster : Brisket & Saucisses',
      darija: 'بلاتو الشيف: بريسكت مدخن وسوسيط بلدي',
    },
    desc: {
      en: 'Prime grain-fed beef brisket with signature dark bark and deep smoke ring. Wood-fired artisanal sausages, crinkle-cut fries, tangy house slaw, and smoked dipping sauces.',
      es: 'Pecho de ternera premium con corteza crujiente y anillo de humo. Salchichas artesanas a la brasa, patatas onduladas, ensalada de col y salsas de la casa.',
      fr: 'Poitrine de bœuf Black Angus fondante, écorce poivrée, saucisses fumées, frites ondulées, coleslaw et sauces maison.',
      darija: 'لحم بقري ممتاز مدخن على المهل بالعود د البلوط والزيتون تايجي رطب ومفتفت مع سوسيط مشوي وبطاطا وشلاضة وصوصات مدخنة.',
    },
    priceMAD: 140,
    tag: {
      en: 'Halal Prime Beef',
      es: 'Ternera Halal Premium',
      fr: 'Bœuf Halal d\'Exception',
      darija: 'لحم بقري حلال 100%',
    },
    isSignature: true,
  },
  {
    id: 'double-truffle-smash',
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdyN53UwcT5iKUzThkZTP0byzvdgo7PJ8iSfPcAhiCvS1Vp3sIV2tcpZ_SLkg8gpPYn-UgZ9YcNma14FhwZkwZo0TNxmk7TCpsjpkiWsKUn_hVYdhOPEELLO_njDvu5fgwXzlpHLE48Ems8PFVM6jsikjzcKhinh66cDxNwvyx8hjGjs_Gq2skuzmZ3nJzTsHeg7mQOJDZtNNW-mThrqJMYeaKzkTvJgyj3xXykGXp9IHG_IjXQr2',
    badge: {
      en: 'Local Legend • Smashed Fresh',
      es: 'Leyenda Local • Smash Fresco',
      fr: 'Légende Locale • Smashed Minute',
      darija: 'المحبوب ف تطوان • مسماش طري',
    },
    title: {
      en: 'Signature Double Truffle Smash',
      es: 'Doble Truffle Smash Signature',
      fr: 'Double Truffle Smash Signature',
      darija: 'دوبل سماش برغر بالترافل والفرماج',
    },
    desc: {
      en: 'Two crispy-edge 100% chuck smashed patties, double mature cheddar, balsamic caramelized onions, smoked beef bacon ribbons, and house truffle sauce on toasted brioche.',
      es: 'Dos piezas de carne picada 100% vacuno aplastadas a la plancha, doble cheddar fundido, cebolla caramelizada, tiras de bacon de ternera y salsa trufada en brioche tostado.',
      fr: 'Deux steaks pur muscle smashés croustillants, double cheddar affiné, oignons caramélisés au balsamique, bacon de bœuf et sauce truffe.',
      darija: 'جوج طبقات د الكفتة البقرية مضغوطة ومقرمشة، فرماج شيدار ذايب، بصلة معسلة، بيكون بقري مدخن وصوص الترافل فخبز البريوش.',
    },
    priceMAD: 85,
    tag: {
      en: 'Tetouan Top Seller',
      es: 'Nº1 en Ventas en Tetuán',
      fr: 'Best-Seller Tétouan',
      darija: 'الأكثر طلباً ف تطوان',
    },
    isSignature: true,
  },
  {
    id: 'ribeye-slate-skewers',
    category: 'steaks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3',
    badge: {
      en: 'Olive Charcoal Grilled',
      es: 'Carbón de Olivo',
      fr: 'Charbon d\'Olivier',
      darija: 'مشوي على فاخر الزيتون',
    },
    title: {
      en: 'Ribeye Slate & Flame Skewers',
      es: 'Chuletón Ribeye sobre Pizarra y Brochetas',
      fr: 'Entrecôte sur Ardoise & Brochettes Filet',
      darija: 'ستيك ريب آي على الحجر وقطبان فيلي',
    },
    desc: {
      en: '350g char-grilled black angus ribeye carved hot over sizzling slate embers, accompanied by Moroccan herb-marinated beef filet skewers, roasted cherry tomatoes, and chimichurri.',
      es: '350g de lomo alto Black Angus cortado al momento sobre piedra caliente, con brochetas de solomillo marinadas en hierbas marroquíes y chimichurri.',
      fr: '350g d\'entrecôte Black Angus grillée minute sur pierre chaude crépitante, brochettes de filet mariné aux herbes marocaines et chimichurri frais.',
      darija: '350 غرام ستيك بلاك أنغوس كايتقطع سخون فالحجر، مع قطبان فيلي متبلين بالأعشاب وطوماط سوريز وصوص الشيميشوري.',
    },
    priceMAD: 175,
    tag: {
      en: 'Chef\'s Reserve',
      es: 'Reserva del Chef',
      fr: 'Réserve du Chef',
      darija: 'اختيار الشيف الخاص',
    },
    isSignature: true,
  },
  {
    id: 'smoked-beef-ribs',
    category: 'smokehouse',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClFswjEDET4xy8AMpGNZYn9JLa8zt0z-4pK4DHw3eZn896p4m-aQYTW_BOMZRL-dj2Sz4G9gBeGt-lxKv6SLPOC1gzJRsBM_cn3Kn2kMwky_a2enGKCb9s1nhkK0fUD7rJAPBxIqC80_e1he3HgMBXZriUYkgvJIYm4vi88e95PegXNu6QmT3Z0hH1n4WkLU3Hx5EbzyJc8kCFGIG_UTxrLyGLtLZXIondtifly0qsF3HLSJOH9DWc',
    badge: {
      en: 'Dino Cut • 12H Smoked',
      es: 'Costillar Gigante • 12H',
      fr: 'Côtes XXL • 12H',
      darija: 'ضلوع عملاقة • 12 ساعة',
    },
    title: {
      en: 'Low & Slow Monster Beef Rib',
      es: 'Costillar Gigante de Ternera Ahumado',
      fr: 'Côte de Bœuf Géante Fumée au Bois',
      darija: 'ضلعة البقر الكبيرة مدخنة على الفاخر',
    },
    desc: {
      en: 'Thick, bone-in beef rib glazed with caramelized wildflower honey and smoked mustard glaze. Fall-off-the-bone tenderness.',
      es: 'Costilla gruesa con hueso glaseada con miel de flores silvestres y mostaza ahumada. Se desprende sola del hueso.',
      fr: 'Côte de bœuf généreuse laquée au miel sauvage et moutarde fumée. Moelleuse à souhait.',
      darija: 'ضلعة لحم بقر مدخنة ومدهونة بالعسل الحر والمطارد المدخن، اللحم كايتسلت بوحدو من العظم.',
    },
    priceMAD: 195,
    tag: {
      en: 'Pitmaster Pride',
      es: 'Orgullo del Ahumador',
      fr: 'Fierté du Pitmaster',
      darija: 'فخر الشيف',
    },
  },
  {
    id: 'smokey-jalapeno-burger',
    category: 'burgers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdyN53UwcT5iKUzThkZTP0byzvdgo7PJ8iSfPcAhiCvS1Vp3sIV2tcpZ_SLkg8gpPYn-UgZ9YcNma14FhwZkwZo0TNxmk7TCpsjpkiWsKUn_hVYdhOPEELLO_njDvu5fgwXzlpHLE48Ems8PFVM6jsikjzcKhinh66cDxNwvyx8hjGjs_Gq2skuzmZ3nJzTsHeg7mQOJDZtNNW-mThrqJMYeaKzkTvJgyj3xXykGXp9IHG_IjXQr2',
    badge: {
      en: 'Spicy Flame',
      es: 'Toque Picante',
      fr: 'Piment Fumé',
      darija: 'حار ومدخن',
    },
    title: {
      en: 'Smokey Jalapeño & Crispy Onion Smash',
      es: 'Burger Jalapeño Ahumado y Cebolla Crujiente',
      fr: 'Smash Jalapeño Fumé & Oignons Crispy',
      darija: 'برغر حار بالهلابينيو والبصلة المقرمشة',
    },
    desc: {
      en: 'Double smashed patties, Monterey Jack pepper cheese, smoked jalapeño relish, beer-battered onion ring crunch, chipotle crema.',
      es: 'Doble hamburguesa smash, queso pepper jack fundido, jalapeños ahumados, aros de cebolla crujientes y crema chipotle.',
      fr: 'Double steak smashé, fromage épicé fondant, jalapeños fumés, oignons croustillants et sauce chipotle.',
      darija: 'جوج طبقات سماش مع فرماج فلفل جاك، هلابينيو حار ومدخن، بصلة مقرمشة وصوص شيبوتلي بنينة بزاف.',
    },
    priceMAD: 89,
    tag: {
      en: 'Hot & Zesty',
      es: 'Picante y Sabroso',
      fr: 'Épicé & Gourmand',
      darija: 'حار وحماق',
    },
  },
  {
    id: 'loaded-brisket-fries',
    category: 'sides',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClFswjEDET4xy8AMpGNZYn9JLa8zt0z-4pK4DHw3eZn896p4m-aQYTW_BOMZRL-dj2Sz4G9gBeGt-lxKv6SLPOC1gzJRsBM_cn3Kn2kMwky_a2enGKCb9s1nhkK0fUD7rJAPBxIqC80_e1he3HgMBXZriUYkgvJIYm4vi88e95PegXNu6QmT3Z0hH1n4WkLU3Hx5EbzyJc8kCFGIG_UTxrLyGLtLZXIondtifly0qsF3HLSJOH9DWc',
    badge: {
      en: 'Crowd Favorite',
      es: 'Favorito del Público',
      fr: 'Favori des Tables',
      darija: 'كولشي كايحماق عليه',
    },
    title: {
      en: 'Volcano Loaded Brisket Fries',
      es: 'Patatas Volcán con Brisket Deshilachado',
      fr: 'Frites Volcan au Brisket Effiloché',
      darija: 'بطاطا فولكانو عامرة بريسكت وفرماج',
    },
    desc: {
      en: 'Skin-on golden fries topped with shredded 14-hour smoked brisket, melted warm cheddar queso, green onions, and smoked BBQ drizzle.',
      es: 'Patatas fritas crujientes con piel cubiertas con brisket deshilachado de 14 horas, salsa de queso cheddar fundido y toque BBQ.',
      fr: 'Frites croustillantes garnies de bœuf effiloché fumé 14h, coulis de cheddar chaud fondu, ciboulette et coulis barbecue.',
      darija: 'بطاطا مقلية مقرمشة عليها لحم البريسكت مدخن 14 ساعة مفتفت، صوص فرماج شيدار سخونة وذايبة وصوص الباربيكيو.',
    },
    priceMAD: 55,
    tag: {
      en: 'Shareable Plate',
      es: 'Para Compartir',
      fr: 'À Partager',
      darija: 'للمشاركة',
    },
  },
  {
    id: 'smoked-citrus-mojito',
    category: 'mocktails',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3',
    badge: {
      en: 'Zero-Proof 100%',
      es: 'Sin Alcohol 100%',
      fr: '100% Sans Alcool',
      darija: 'بدون كحول 100%',
    },
    title: {
      en: 'Smoked Lime & Mint Craft Mojito',
      es: 'Mojito Artesanal de Lima Ahumada y Menta',
      fr: 'Mojito Signature Citron Vert Fumé & Menthe',
      darija: 'موخيتو الحامض المدخن والنعناع البلدي',
    },
    desc: {
      en: 'Charred fresh lime juice, crushed mountain spearmint, raw cane syrup, sparkling artisanal soda, topped with smoked rosemary sprig.',
      es: 'Zumo de lima pasada por las brasas, hierbabuena fresca de montaña, azúcar de caña pura, soda con gas y ramita de romero ahumado.',
      fr: 'Jus de citron vert braisé minute, menthe fraîche cueillie du Rif, sirop de canne et eau gazeuse infusée au romarin fumé.',
      darija: 'عصير حامض مشوي شوية على الفاخر، نعناع طري د جبال تطوان، سكر القصب وسودا منعشة مع عريش د أزير مدخن.',
    },
    priceMAD: 38,
    tag: {
      en: 'Refreshing Citrus',
      es: 'Cítrico Refrescante',
      fr: 'Agrumes Rafraîchissants',
      darija: 'منعش وبارد',
    },
  },
  {
    id: 'passion-hibiscus-spritz',
    category: 'mocktails',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3',
    badge: {
      en: 'House Blend',
      es: 'Mezcla Exclusiva',
      fr: 'Recette Maison',
      darija: 'خلطة خاصة',
    },
    title: {
      en: 'Passionfruit & Red Hibiscus Spritz',
      es: 'Spritz de Fruta de la Pasión e Hibisco',
      fr: 'Spritz Passion & Infusion d\'Hibiscus Rouge',
      darija: 'سبريتز فروي دو لا باسيون والكركديه',
    },
    desc: {
      en: 'Exotic passion fruit purée, chilled Moroccan hibiscus infusion (karkadeh), elderflower essence, and crushed clear ice crystals.',
      es: 'Puré de maracuyá exótico, infusión fría de flor de hibisco (karkadeh), esencia de flor de saúco y hielo picado.',
      fr: 'Purée de fruits de la passion, infusion fraîche de karkadé marocain, fleurs de sureau et glace pilée.',
      darija: 'عصير فاكهة العاطفة مع كركديه مغربي مثلج، ماء زهر خفيف وثلج مهرس كايبرد على القلب.',
    },
    priceMAD: 42,
    tag: {
      en: 'Tropical Chill',
      es: 'Bebida Tropical',
      fr: 'Fraîcheur Tropicale',
      darija: 'انتعاش استوائي',
    },
  },
  {
    id: 'smoked-vanilla-skillet-cookie',
    category: 'desserts',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdyN53UwcT5iKUzThkZTP0byzvdgo7PJ8iSfPcAhiCvS1Vp3sIV2tcpZ_SLkg8gpPYn-UgZ9YcNma14FhwZkwZo0TNxmk7TCpsjpkiWsKUn_hVYdhOPEELLO_njDvu5fgwXzlpHLE48Ems8PFVM6jsikjzcKhinh66cDxNwvyx8hjGjs_Gq2skuzmZ3nJzTsHeg7mQOJDZtNNW-mThrqJMYeaKzkTvJgyj3xXykGXp9IHG_IjXQr2',
    badge: {
      en: 'Served Hot in Skillet',
      es: 'En Sartén Caliente',
      fr: 'Poêlon Tout Chaud',
      darija: 'سخونة فالمقلة د الحديد',
    },
    title: {
      en: 'Wood-Fired Skillet Cookie & Madagascar Vanilla',
      es: 'Cookie Gigante al Horno de Leña con Helado',
      fr: 'Cookie Géant Cuit au Feu de Bois & Vanille',
      darija: 'كوكيز عملاق فالمقلة بالشكلاط ولاكلاص فاني',
    },
    desc: {
      en: 'Warm, gooey dark chocolate chip cookie baked right off the embers in a cast-iron skillet, topped with rich Madagascar vanilla ice cream and salted caramel drizzle.',
      es: 'Cookie caliente de pepitas de chocolate fundidas horneada a las brasas en sartén de hierro, con bola de helado de vainilla de Madagascar y caramelo salado.',
      fr: 'Gros cookie moelleux au chocolat noir cuit à la braise dans son poêlon en fonte, surmonté d\'une boule de glace vanille Bourbon et caramel beurre salé.',
      darija: 'كوكيز سخون معلك بالشكلاط كايطيب مباشرة فالفران ديال العود، فوق منو كرة لاكلاص فانيلا وكاراميل مالح.',
    },
    priceMAD: 48,
    tag: {
      en: 'Sweet Indulgence',
      es: 'Puro Placer',
      fr: 'Douceur Ultime',
      darija: 'حلاوة تا تسطيك',
    },
  },
];
