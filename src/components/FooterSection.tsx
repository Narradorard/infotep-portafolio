import React from 'react';
import { FACILITATOR_DATA } from '../data/presentationData';
import { Mail, Phone, MessageSquare, ArrowUp, Heart } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060911] text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-bold font-display text-base mb-1">
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-[#6420FF] to-[#00C4CC]" />
            <span>RUTH GARCÍA MEDINA</span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-normal text-[#00C4CC]">TRABAJO FINAL INFOTEP</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Curso: Ingeniería de Prompts para la Creación de Contenido Audiovisual (60 Horas). República Dominicana.
          </p>
        </div>

        {/* Clean Unboxed Metadata and Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <a
            href={`https://wa.me/1${FACILITATOR_DATA.phoneRaw}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#00C4CC] transition-colors"
          >
            WhatsApp {FACILITATOR_DATA.phone}
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={`mailto:${FACILITATOR_DATA.email}`}
            className="hover:text-[#00C4CC] transition-colors"
          >
            {FACILITATOR_DATA.email}
          </a>
          <span className="text-slate-700">·</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-[11px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Ruth García Medina. Todos los derechos reservados.</span>
        <span>Diseño de portafolio y aplicación interactiva para evaluación docente.</span>
      </div>
    </footer>
  );
};
