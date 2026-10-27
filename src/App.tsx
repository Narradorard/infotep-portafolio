import React, { useState } from 'react';
import { TopNavbar } from './components/TopNavbar';
import { HeroSection } from './components/HeroSection';
import { FacilitatorSection } from './components/FacilitatorSection';
import { ModulesCurriculum } from './components/ModulesCurriculum';
import { InteractivePromptStudio } from './components/InteractivePromptStudio';
import { ProjectSimulator10s } from './components/ProjectSimulator10s';
import { EvaluationRubric } from './components/EvaluationRubric';
import { FooterSection } from './components/FooterSection';
import { SlideDeckModal } from './components/SlideDeckModal';

export default function App() {
  const [isDeckOpen, setIsDeckOpen] = useState<boolean>(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const handleOpenDeck = (slideIndex = 0) => {
    setActiveSlideIndex(slideIndex);
    setIsDeckOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-[#6420FF] selection:text-white">
      {/* Top Bar with 3-Zone Contract */}
      <TopNavbar
        onOpenDeck={() => handleOpenDeck(0)}
        activeSection="inicio"
      />

      {/* Main Portfolio Content */}
      <main className="flex-1">
        {/* Split-Screen Hero & Full-Width Metrics */}
        <HeroSection onOpenDeck={() => handleOpenDeck(0)} />

        {/* 4 Curricular Modules (60 Hours) */}
        <ModulesCurriculum />

        {/* Interactive Prompt Engineering Lab & Case Study */}
        <InteractivePromptStudio />

        {/* 10-Second Capstone Project Simulator */}
        <ProjectSimulator10s />

        {/* Facilitator Profile, Ethics & Debate */}
        <FacilitatorSection />

        {/* Interactive Evaluation Rubric & Classroom Pact */}
        <EvaluationRubric />
      </main>

      {/* Clean Footer */}
      <FooterSection />

      {/* Fullscreen 16:9 Presentation Deck Modal */}
      <SlideDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        initialSlideIndex={activeSlideIndex}
      />
    </div>
  );
}
