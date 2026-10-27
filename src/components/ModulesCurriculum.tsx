import React, { useState } from 'react';
import { MODULES_DATA, COURSE_SPECS } from '../data/presentationData';
import { Clock, Layers, Sparkles, CheckCircle2, Cpu, Wrench, ArrowRight } from 'lucide-react';

export const ModulesCurriculum: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const activeModule = MODULES_DATA.find((m) => m.id === selectedModuleId) || MODULES_DATA[0];

  return (
    <section id="modulos" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase mb-2">
            <span>MALLA CURRICULAR Y COMPETENCIAS TÉCNICAS</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 font-normal">60 Horas Totales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
            Los Cuatro Módulos de Aprendizaje
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Desde la estructuración lógica de instrucciones textuales hasta la exportación y sincronización de secuencias de video con audio procedural.
          </p>
        </div>

        {/* Hours Summary Pill Island avoided -> Unboxed text with separators */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 shrink-0">
          <span className="text-white font-semibold tabular-nums">20h Teoría</span>
          <span className="text-slate-600">·</span>
          <span className="text-[#00C4CC] font-semibold tabular-nums">40h Práctica</span>
          <span className="text-slate-600">·</span>
          <span className="text-purple-300 font-semibold tabular-nums">15 Sesiones</span>
        </div>
      </div>

      {/* Module Navigation Tabs (Interactive segmented control) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl mb-8">
        {MODULES_DATA.map((m) => {
          const isSelected = m.id === selectedModuleId;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedModuleId(m.id)}
              className={`flex flex-col items-start text-left p-3.5 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-lg shadow-purple-950/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-cyan-200' : 'text-slate-500'}`}>
                  Módulo 0{m.id}
                </span>
                <span className={`text-[11px] font-mono tabular-nums ${isSelected ? 'text-white' : 'text-slate-500'}`}>
                  15h
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-semibold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                {m.title.replace(`Módulo ${m.id}: `, '')}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Module Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl items-stretch">
        {/* Left Column: Module Details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
              <span className="text-[#00C4CC] font-bold uppercase tracking-wider">
                Módulo {activeModule.id} de 4
              </span>
              <span>·</span>
              <span className="tabular-nums">
                {activeModule.hours.theory}h Teoría + {activeModule.hours.practice}h Práctica
              </span>
              <span>·</span>
              <span className="text-purple-300">Proyecto Continuo</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
              {activeModule.title}
            </h3>
            <p className="text-sm font-medium text-purple-300/90 mb-4">
              {activeModule.subtitle}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
              {activeModule.description}
            </p>

            {/* Topics covered */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Temas y Prácticas Principales:
              </h4>
              <ul className="space-y-2.5">
                {activeModule.keyTopics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00C4CC] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row: Deliverable and Tools */}
          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-purple-500/20">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#00C4CC] mb-1">
                Entregable del Módulo:
              </div>
              <div className="text-xs sm:text-sm text-white font-medium">
                {activeModule.deliverable}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 mr-2">Herramientas:</span>
              {activeModule.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Module Visual Asset */}
        <div className="lg:col-span-5 relative flex flex-col justify-center">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-[300px] sm:h-[380px] group shadow-inner">
            <img
              src={activeModule.image}
              alt={activeModule.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-800">
              <div className="text-[10px] font-mono text-[#00C4CC] uppercase tracking-wider">
                Demostración Práctica Guiada
              </div>
              <div className="text-xs font-semibold text-white mt-0.5">
                40 horas de ejecución en vivo en laboratorio
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Admission Requirements Banner */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="text-xs font-semibold text-[#00C4CC] uppercase tracking-wider mb-1">
            Perfil de Ingreso
          </div>
          <div className="text-sm font-semibold text-white mb-2">
            16 años en adelante
          </div>
          <p className="text-xs text-slate-400">
            Orientado a creativos, docentes, comunicadores, diseñadores o cualquier persona con deseos de innovar.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
            Requisitos Técnicos
          </div>
          <div className="text-sm font-semibold text-white mb-2">
            Uso básico de Computadora / Celular
          </div>
          <p className="text-xs text-slate-400">
            Lectura y escritura funcional. Tres aplicaciones base instaladas: ChatGPT, Gemini y Meta AI.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            Cero Código Requerido
          </div>
          <div className="text-sm font-semibold text-white mb-2">
            Hasta mi abuela puede crear un prompt
          </div>
          <p className="text-xs text-slate-400">
            La ingeniería de prompts no requiere programación, sino claridad semántica, observación e iteración.
          </p>
        </div>
      </div>
    </section>
  );
};
