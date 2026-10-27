import React from 'react';
import { MonitorPlay, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COURSE_SPECS, FACILITATOR_DATA } from '../data/presentationData';

interface HeroSectionProps {
  onOpenDeck: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDeck }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#6420FF]/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00C4CC]/15 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Hero Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-14">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Editorial Kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00C4CC] tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C4CC]"></span>
            <span>PORTAFOLIO DOCENTE · TRABAJO FINAL INFOTEP</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 normal-case font-normal">Facilitadora: Ruth García Medina</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.12] mb-6 [text-wrap:balance]">
            Ingeniería de Prompts para la Creación de <span className="bg-gradient-to-r from-white via-cyan-200 to-[#00C4CC] bg-clip-text text-transparent">Contenido Audiovisual</span>
          </h1>

          {/* Subtitle / Lead Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
            Guiones estructurados, imágenes cinematográficas, audio procedural y video generado con Inteligencia Artificial. Un programa formativo de <strong className="text-white font-medium">60 horas</strong> diseñado para democratizar la producción multimedia sin necesidad de conocimientos en programación.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onOpenDeck}
              className="flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6420FF] via-[#7B2CBF] to-[#00C4CC] hover:brightness-110 active:scale-[0.98] rounded-xl transition-all shadow-xl shadow-purple-950/40 cursor-pointer whitespace-nowrap"
            >
              <MonitorPlay className="w-4 h-4 text-cyan-200" />
              <span>Ver Presentación Completa (Diapositivas)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#modulos"
              className="flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Explorar Malla Curricular</span>
            </a>
          </div>

          {/* Trust markers */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>Metodología 100% Práctica INFOTEP</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>Proyecto Final Integrado</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>Para mayores de 16 años sin código</span>
            </span>
          </div>
        </div>

        {/* Right Column: Visual Hero Asset */}
        <div className="lg:col-span-5 relative flex flex-col justify-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
            {/* Visual studio image */}
            <img
              src={FACILITATOR_DATA.heroImage}
              alt="Estudio de producción audiovisual con inteligencia artificial y flujos de trabajo con prompts"
              className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Gradient Scrim for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-black/20" />

            {/* Floating Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800/80">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold text-[#00C4CC] tracking-wider uppercase">
                    Ecosistema Multi-Herramienta
                  </div>
                  <div className="text-sm font-semibold text-white">
                    ChatGPT · Gemini · Meta AI · Runway · Suno
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-[#6420FF]/40 text-purple-200 border border-purple-500/30 rounded-lg">
                    15 Sesiones
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Metric Strip Below the Split (Mandatory layout math) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums">
            60h
          </span>
          <span className="text-xs font-semibold text-slate-300 mt-1">
            Carga Horaria Total
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            20h teóricas · 40h prácticas
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold text-[#00C4CC] font-display tabular-nums">
            15
          </span>
          <span className="text-xs font-semibold text-slate-300 mt-1">
            Sesiones Guiadas
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            4 horas por jornada activa
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold text-purple-400 font-display tabular-nums">
            4
          </span>
          <span className="text-xs font-semibold text-slate-300 mt-1">
            Módulos de Producción
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            Guion, imagen, audio y video
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-bold text-white font-display tabular-nums">
            100%
          </span>
          <span className="text-xs font-semibold text-slate-300 mt-1">
            Práctico y Accesible
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">
            Sin código · Desde el primer día
          </span>
        </div>
      </div>
    </section>
  );
};
