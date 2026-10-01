'use client';

import React from 'react';
import Image from 'next/image';
import { Language } from '@/lib/translations';
import { Flame, Trees, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export default function AboutSection({ currentLang }: AboutSectionProps) {
  const content = {
    en: {
      tagline: 'The Tetouan Smokehouse Heritage',
      title: 'Where Oak Smoke Meets Mediterranean Hospitality',
      p1: "Founded by passionate Moroccan pitmasters and barbecue artisans, Grill 'n Chill was born to bring the true art of low-and-slow wood smoking to Northern Morocco. Situated strategically in Tetouan along Avenue Mohammed V & Route de Martil, our smokehouse merges hearty Texas-inspired barbecue techniques with authentic local Moroccan seasoning.",
      p2: 'Every cut of meat is 100% Halal certified and carefully sourced from trusted local farms. We burn exclusively aged Moroccan olive wood and mountain white oak, giving our brisket, dinosaur ribs, and charred steaks an aromatic, velvety wood smoke profile that cannot be faked.',
      stat1Number: '14 Hours',
      stat1Label: 'Oak Pit Smoking Time',
      stat2Number: '100% Halal',
      stat2Label: 'Prime Moroccan Beef',
      stat3Number: '4.8 ★',
      stat3Label: 'Google Customer Rating',
      stat4Number: '7 Days',
      stat4Label: 'Open Daily 12:00 - 01:00',
    },
    es: {
      tagline: 'Nuestra Historia en Tetuán',
      title: 'Donde el humo de roble se funde con el sabor mediterráneo',
      p1: 'Fundado por maestros asadores apasionados, Grill \'n Chill nació con el propósito de acercar el auténtico arte del ahumado texano a baja temperatura al norte de Marruecos. Situado en Tetuán en plena Avenida Mohammed V / Carretera de Martil, combinamos técnicas tradicionales de leña con especias autóctonas marroquíes.',
      p2: 'Toda nuestra carne es 100% Halal certificada. Empleamos leña de olivo seco del norte y roble de montaña, impregnando cada pieza de brisket, costillar gigante y chuletón con un aroma profundo e inconfundible.',
      stat1Number: '14 Horas',
      stat1Label: 'Ahumado Lento en Pozo',
      stat2Number: '100% Halal',
      stat2Label: 'Ternera de Primera Calidad',
      stat3Number: '4.8 ★',
      stat3Label: 'Valoración en Google',
      stat4Number: '7 Días',
      stat4Label: 'Abierto 12:00 a 01:00',
    },
    fr: {
      tagline: 'L\'Histoire du Fumoir Tétouanais',
      title: 'Quand la fumée de chêne rencontre l\'art culinaire marocain',
      p1: 'Initié par des passionnés de barbecue et de grillades nobles, Grill \'n Chill est le premier véritable smokehouse artisanal de Tétouan. Implanté sur l\'Avenue Mohammed V / Route de Martil, notre établissement marie la rigueur du fumage texan aux saveurs généreuses du terroir rifain.',
      p2: 'Nos viandes sont certifiées 100% Halal et issues d\'élevages sélectionnés. Nous alimentons nos fumoirs exclusivement au bois d\'olivier séché et au chêne blanc des montagnes, garantissant un parfum boisé et une tendreté incomparable.',
      stat1Number: '14 Heures',
      stat1Label: 'Temps de Fumage au Bois',
      stat2Number: '100% Halal',
      stat2Label: 'Viande Bovine Sélectionnée',
      stat3Number: '4.8 ★',
      stat3Label: 'Note Moyenne Google',
      stat4Number: '7j/7',
      stat4Label: 'Service Continu 12h-01h',
    },
    darija: {
      tagline: 'قصة أول سموك هاوس فتطوان',
      title: 'فين كايتلاقى دخان عود الزيتون مع الضيافة المغربية',
      p1: 'تأسس غريل آند شيل بحب كبير لفن الشوا والتدخين البطيء على العود، باش نقدمو لساكنة وزوار تطوان تجربة جديدة كلياً فالمغرب. فموقع استراتيجي فشارع محمد الخامس وطريق مرتيل، كانجمعو بين تقنيات التدخين الأمريكية الأصلية واللمسة والتوابل المغربية الحرة.',
      p2: 'اللحوم ديالنا حلال 100% ومختارة بعناية. كانخدمو فقط بعود الزيتون والبلوط الجبلي الميبس، باش نعطيو للبريسكت والضلوع والستيك داك اللون الزوين والنكهة المدخنة الساحرة اللي كاتذوب فالفم.',
      stat1Number: '14 ساعة',
      stat1Label: 'وقت التدخين بالعود',
      stat2Number: '100% حلال',
      stat2Label: 'لحم بقري ممتاز',
      stat3Number: '4.8 ★',
      stat3Label: 'تقييم زبناء غوغل',
      stat4Number: '7 أيام',
      stat4Label: 'محلولين من 12:00 لـ 01:00',
    },
  }[currentLang];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story text and stats */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-label uppercase tracking-widest text-[#e63b2e] font-bold block mb-1">
              {content.tagline}
            </span>
            <h2 className="text-3xl sm:text-5xl font-headline font-bold uppercase tracking-tight text-[#1a1a1a]">
              {content.title}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
            {content.p1}
          </p>

          <p className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
            {content.p2}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="bg-[#faf7f2] border-2 border-[#1a1a1a] p-4 text-center shadow-[3px_3px_0px_#1a1a1a]">
              <span className="font-headline font-bold text-2xl sm:text-3xl text-[#1a1a1a] block">
                {content.stat1Number}
              </span>
              <span className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] mt-1 block">
                {content.stat1Label}
              </span>
            </div>

            <div className="bg-[#faf7f2] border-2 border-[#1a1a1a] p-4 text-center shadow-[3px_3px_0px_#1a1a1a]">
              <span className="font-headline font-bold text-2xl sm:text-3xl text-[#e63b2e] block">
                {content.stat2Number}
              </span>
              <span className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] mt-1 block">
                {content.stat2Label}
              </span>
            </div>

            <div className="bg-[#faf7f2] border-2 border-[#1a1a1a] p-4 text-center shadow-[3px_3px_0px_#1a1a1a]">
              <span className="font-headline font-bold text-2xl sm:text-3xl text-[#1a1a1a] block">
                {content.stat3Number}
              </span>
              <span className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] mt-1 block">
                {content.stat3Label}
              </span>
            </div>

            <div className="bg-[#faf7f2] border-2 border-[#1a1a1a] p-4 text-center shadow-[3px_3px_0px_#1a1a1a]">
              <span className="font-headline font-bold text-2xl sm:text-3xl text-[#0055ff] block">
                {content.stat4Number}
              </span>
              <span className="text-[11px] font-label uppercase font-bold text-[#4a4a4a] mt-1 block">
                {content.stat4Label}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual photo showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-96 sm:h-[480px] w-full border-4 border-[#1a1a1a] shadow-[8px_8px_0px_#1a1a1a] overflow-hidden bg-[#1a1a1a]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdyN53UwcT5iKUzThkZTP0byzvdgo7PJ8iSfPcAhiCvS1Vp3sIV2tcpZ_SLkg8gpPYn-UgZ9YcNma14FhwZkwZo0TNxmk7TCpsjpkiWsKUn_hVYdhOPEELLO_njDvu5fgwXzlpHLE48Ems8PFVM6jsikjzcKhinh66cDxNwvyx8hjGjs_Gq2skuzmZ3nJzTsHeg7mQOJDZtNNW-mThrqJMYeaKzkTvJgyj3xXykGXp9IHG_IjXQr2"
              alt="Grill 'n Chill smokehouse interior and artisan burgers"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#ffcc00] border-2 border-[#1a1a1a] p-3 text-xs font-label uppercase font-bold text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 fill-[#1a1a1a]" />
                Low &amp; Slow Pitmaster Crafted
              </span>
              <span className="bg-[#1a1a1a] text-[#f5f0e8] px-2 py-0.5 text-[10px]">
                Tétouan, MA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
