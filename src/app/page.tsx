// app/page.tsx

import HeroSection from '@/components/HeroSection';
import HeroCarousel2 from '@/components/HeroSection2';
import MissionVisionSection from '@/components/MisionVisionSection';
import React from 'react';

export default function HomePage() {
  return (
    <div>
    <HeroCarousel2 />
    <MissionVisionSection />
    <HeroSection />
    </div>
  );
}
