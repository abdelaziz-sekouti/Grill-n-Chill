import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Grill 'n Chill Smokehouse & Lounge | Wood-Fired Barbecue & Smash Burgers Tétouan",
  description:
    "Tétouan's premier wood-fired smokehouse & culinary lounge. 14-hour slow-smoked beef brisket, artisan double truffle smash burgers, charcoal-grilled ribeye, and craft mocktails. 100% Halal.",
  keywords: [
    "Grill 'n Chill Tetouan",
    'Smokehouse Tetouan',
    'Halal Brisket Morocco',
    'Smash Burgers Tetouan',
    'Best Restaurant Tetouan',
    'Wood-fired barbecue Tetouan',
    'Steakhouse Tetouan',
    'Morocco smokehouse',
    'مطعم غريل آند شيل تطوان',
    'لحم مدخن تطوان',
    'برغر تطوان',
    'Restaurante Tetuan',
    'Barbacoa y ahumados Tetuan',
  ],
  authors: [{ name: "Grill 'n Chill Pitmasters" }],
  creator: "Grill 'n Chill Smokehouse & Lounge",
  publisher: "Grill 'n Chill",
  metadataBase: new URL(process.env.APP_URL || 'https://grillnchill-tetouan.com'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/?lang=en',
      es: '/?lang=es',
      fr: '/?lang=fr',
      'ar-MA': '/?lang=darija',
    },
  },
  openGraph: {
    title: "Grill 'n Chill Smokehouse & Lounge | Wood-Fired Barbecue in Tétouan",
    description:
      'Authentic low-and-slow wood smoking, artisan smashed burgers, and relaxed lounge ambiance in Northern Morocco. Book your table online in 30 seconds.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'fr_FR', 'ar_MA'],
    siteName: "Grill 'n Chill Smokehouse & Lounge",
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3',
        width: 1200,
        height: 630,
        alt: "Grill 'n Chill Signature Cuts & Smokehouse Spread in Tetouan",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Grill 'n Chill Smokehouse & Lounge | Tétouan",
    description:
      'Tender slow-smoked BBQ brisket, artisan smash burgers, sizzling char-grilled steaks, and handcrafted chill mocktails in Tétouan.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: "Grill 'n Chill Smokehouse & Lounge",
  image: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCcuNsS_d69bXiIDnmobq6OMpTQhB8w4Agdy9XwIUHPhZYvPcJM76QWLq6hgNcwQFQXXuWe94hv3bR1e1uQqkaBTw7fICTnBoJXQzAzGboUCVjk_7-glZm2T8n9k06uymLoqYjXaUpsiPzc0-13NgYmhDZRTSfFiUitSbdU_SwZ1zNQ7zH4VrYUo3sgxzJbvZeTWNMoyI8pmtge187MFwUjH-ErkoIU3mEunEXzZtlhBeLG-MVaZ_n3',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuClFswjEDET4xy8AMpGNZYn9JLa8zt0z-4pK4DHw3eZn896p4m-aQYTW_BOMZRL-dj2Sz4G9gBeGt-lxKv6SLPOC1gzJRsBM_cn3Kn2kMwky_a2enGKCb9s1nhkK0fUD7rJAPBxIqC80_e1he3HgMBXZriUYkgvJIYm4vi88e95PegXNu6QmT3Z0hH1n4WkLU3Hx5EbzyJc8kCFGIG_UTxrLyGLtLZXIondtifly0qsF3HLSJOH9DWc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQdyN53UwcT5iKUzThkZTP0byzvdgo7PJ8iSfPcAhiCvS1Vp3sIV2tcpZ_SLkg8gpPYn-UgZ9YcNma14FhwZkwZo0TNxmk7TCpsjpkiWsKUn_hVYdhOPEELLO_njDvu5fgwXzlpHLE48Ems8PFVM6jsikjzcKhinh66cDxNwvyx8hjGjs_Gq2skuzmZ3nJzTsHeg7mQOJDZtNNW-mThrqJMYeaKzkTvJgyj3xXykGXp9IHG_IjXQr2',
  ],
  '@id': 'https://grillnchill-tetouan.com',
  url: 'https://grillnchill-tetouan.com',
  telephone: '+212646841539',
  priceRange: '85 MAD - 195 MAD',
  servesCuisine: [
    'Smokehouse',
    'American Barbecue',
    'Halal',
    'Burgers',
    'Steakhouse',
    'Grilled Skewers',
    'Moroccan Fusion',
  ],
  acceptsReservations: 'True',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenue Mohammed V / Route de Martil (Opp. Central District)',
    addressLocality: 'Tétouan',
    postalCode: '93000',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.5653846,
    longitude: -5.4005068,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '12:00',
      closes: '01:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '320',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f5f0e8] text-[#1a1a1a] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
