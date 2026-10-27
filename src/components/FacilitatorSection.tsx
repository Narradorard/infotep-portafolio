import React from 'react';
import { Mail, Phone, MessageSquare, Award, Sparkles, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { FACILITATOR_DATA } from '../data/presentationData';

export const FacilitatorSection: React.FC = () => {
  return (
    <section id="facilitadora" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase mb-2">
          <span>FACILITADORA & AUTORA DEL TRABAJO FINAL</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-normal">INFOTEP República Dominicana</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
          Ruth García Medina
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Diseñadora Gráfica, Creadora de Contenido y Creativa en Marketing Digital e Inteligencia Artificial Aplicada.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Facilitator Profile Card */}
        <div className="lg:col-span-5 flex flex-col p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <div className="flex items-start gap-5 mb-6">
            <div className="relative shrink-0">
              <img
                src={FACILITATOR_DATA.avatar}
                alt="Retrato profesional de Ruth García Medina"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-purple-500/40 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#6420FF] text-[10px] font-bold text-white shadow">
                INFOTEP
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                {FACILITATOR_DATA.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#00C4CC] font-medium mt-0.5">
                {FACILITATOR_DATA.title}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {FACILITATOR_DATA.subRole}
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Facilitadora de la Formación Profesional</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
            {FACILITATOR_DATA.bio}
          </p>

          {/* Direct Contact Buttons */}
          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Canales Oficiales de Contacto
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={`https://wa.me/1${FACILITATOR_DATA.phoneRaw}?text=Hola%20Ruth,%20vi%20tu%20presentaci%C3%B3n%20del%20curso%20de%20Ingenier%C3%ADa%20de%20Prompts%20Audiovisuales`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/50 text-emerald-200 text-xs font-medium transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: {FACILITATOR_DATA.phone}</span>
              </a>

              <a
                href={`mailto:${FACILITATOR_DATA.email}?subject=Consulta%20sobre%20Curso%20Ingenieria%20de%20Prompts%20Audiovisuales`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-700/40 text-purple-200 text-xs font-medium transition-all group"
              >
                <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>Enviar Correo</span>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Google Classroom & Grupo Oficial</span>
              <span className="text-[#00C4CC] font-mono font-semibold">Código Activo</span>
            </div>
          </div>
        </div>

        {/* Right Column: Pedagogical & Ethical Foundation */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quote Card: Fei-Fei Li */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#6420FF]/15 border border-purple-500/25 shadow-xl relative overflow-hidden">
            <div className="text-3xl font-serif text-[#00C4CC]/30 select-none mb-1">“</div>
            <blockquote className="text-base sm:text-lg text-white font-medium leading-relaxed mb-4">
              {FACILITATOR_DATA.quote.text}
            </blockquote>
            <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs">
              <div>
                <span className="font-bold text-white font-display block">
                  {FACILITATOR_DATA.quote.author}
                </span>
                <span className="text-slate-400">
                  {FACILITATOR_DATA.quote.role}
                </span>
              </div>
              <span className="text-[11px] text-[#00C4CC] font-mono">
                Stanford HAI
              </span>
            </div>
          </div>

          {/* Critical Thinking & Ethics Card from Slide 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-[#00C4CC]" />
              <span>Debate Inicial: Pensamiento Crítico en el Aula</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-3">
              ¿Es mala la Inteligencia Artificial?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              En la primera sesión del curso desmitificamos la tecnología respondiendo cuatro interrogantes esenciales con los participantes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                <span className="text-xs font-semibold text-[#00C4CC] block mb-1">
                  ¿Quién la creó?
                </span>
                <span className="text-xs text-slate-300">
                  Seres humanos: investigadores, matemáticos y lingüistas con propósitos específicos.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                <span className="text-xs font-semibold text-[#00C4CC] block mb-1">
                  ¿Quién la alimenta a diario?
                </span>
                <span className="text-xs text-slate-300">
                  Nosotros mismos a través de los datos, textos, fotos y búsquedas que compartimos.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                <span className="text-xs font-semibold text-purple-300 block mb-1">
                  ¿Quién la desarrolla?
                </span>
                <span className="text-xs text-slate-300">
                  Equipos multidisciplinarios que responden a marcos éticos y regulatorios en evolución.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/90">
                <span className="text-xs font-semibold text-purple-300 block mb-1">
                  ¿Cómo debe usarse?
                </span>
                <span className="text-xs text-slate-300">
                  Con intencionalidad humana, transparencia, verificación de fuentes y valor constructivo.
                </span>
              </div>
            </div>

            {/* Ruth's core thesis */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#00C4CC] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300 italic">
                “{FACILITATOR_DATA.reflection}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
