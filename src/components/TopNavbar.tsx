import React from 'react';
import { Play, Sparkles, MonitorPlay } from 'lucide-react';

interface TopNavbarProps {
  onOpenDeck: () => void;
  activeSection: string;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({ onOpenDeck }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090D16]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#inicio" 
          className="text-base sm:text-lg font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-[#6420FF] to-[#00C4CC] group-hover:scale-110 transition-transform"></span>
          <span>RUTH GARCÍA</span>
          <span className="text-slate-500 font-normal">/</span>
          <span className="text-xs sm:text-sm font-medium text-slate-400">TRABAJO FINAL</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#programa-oficial" className="hover:text-[#00C4CC] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-cyan-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C4CC]"></span>
            <span>Programa Oficial (PDF)</span>
          </a>
          <a href="#modulos" className="hover:text-[#00C4CC] transition-colors whitespace-nowrap shrink-0">
            Módulos 60h
          </a>
          <a href="#prompt-lab" className="hover:text-[#00C4CC] transition-colors whitespace-nowrap shrink-0">
            Prompt Lab
          </a>
          <a href="#proyecto" className="hover:text-[#00C4CC] transition-colors whitespace-nowrap shrink-0">
            Proyecto 10s
          </a>
          <a href="#facilitadora" className="hover:text-[#00C4CC] transition-colors whitespace-nowrap shrink-0">
            Facilitadora
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDeck}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6420FF] to-[#00C4CC] hover:opacity-95 active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-purple-900/20 whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Abrir modo presentación"
          >
            <MonitorPlay className="w-4 h-4" />
            <span>Modo Presentación</span>
          </button>
        </div>
      </div>
    </header>
  );
};
