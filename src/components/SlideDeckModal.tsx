import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_COLLECTION, FACILITATOR_DATA, COURSE_SPECS } from '../data/presentationData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Sparkles,
  Award,
  Layers,
  MessageSquare,
  CheckCircle2,
  Phone,
  Mail,
  Table,
  Check,
  Star
} from 'lucide-react';

interface SlideDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlideIndex?: number;
}

export const SlideDeckModal: React.FC<SlideDeckModalProps> = ({
  isOpen,
  onClose,
  initialSlideIndex = 0
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(initialSlideIndex);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [pactRating, setPactRating] = useState<number>(5);

  const totalSlides = SLIDES_COLLECTION.length;
  const currentSlide = SLIDES_COLLECTION[currentSlideIndex];

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl select-none">
      {/* Top Bar Controls */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#090D16] to-transparent">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C4CC] font-mono">
            {currentSlide.category}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs text-slate-400">
            Diapositiva <strong className="text-white font-mono">{currentSlideIndex + 1}</strong> de {totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {showThumbnails ? 'Ocultar Miniaturas' : 'Ver Todas las Láminas'}
          </button>
          
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar presentación"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 16:9 Presentation Canvas */}
      <div className="relative w-full max-w-6xl aspect-[16/9] mx-4 sm:mx-8 bg-[#090D16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between p-8 sm:p-12">
        {/* Slide Background Ambient Gradients */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6420FF]/20 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00C4CC]/20 blur-[130px] pointer-events-none rounded-full" />

        {/* Slide Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
            <span className="text-[#00C4CC] uppercase tracking-wider font-semibold">
              INFOTEP · TRABAJO FINAL
            </span>
            <span>RUTH GARCÍA MEDINA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display tracking-tight leading-tight [text-wrap:balance]">
            {currentSlide.title}
          </h2>
          {currentSlide.subtitle && (
            <p className="text-sm sm:text-base text-purple-300/90 font-medium mt-1">
              {currentSlide.subtitle}
            </p>
          )}
        </div>

        {/* Slide Dynamic Body Content */}
        <div className="relative z-10 my-auto py-4 overflow-y-auto max-h-[60vh]">
          {/* Slide 1: Portada */}
          {currentSlide.id === 1 && (
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-light">
                {currentSlide.lead}
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {currentSlide.metrics?.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-2xl sm:text-3xl font-black text-white font-display tabular-nums block">
                      {m.value}
                    </span>
                    <span className="text-xs font-semibold text-[#00C4CC] block mt-1">
                      {m.label}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      {m.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 2: Ética & Fei-Fei Li */}
          {currentSlide.id === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                  {currentSlide.lead}
                </p>
                {currentSlide.bullets?.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00C4CC] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="md:col-span-5 p-5 rounded-xl bg-gradient-to-br from-slate-900 to-[#6420FF]/25 border border-purple-500/30">
                <blockquote className="text-sm text-white font-medium leading-relaxed italic mb-3">
                  “{currentSlide.quote?.text}”
                </blockquote>
                <div className="text-xs font-bold text-[#00C4CC]">
                  {currentSlide.quote?.author}
                </div>
                <div className="text-[11px] text-slate-400">
                  {currentSlide.quote?.role}
                </div>
              </div>
            </div>
          )}

          {/* Slide 3: Perfil Facilitadora */}
          {currentSlide.id === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <img
                  src={FACILITATOR_DATA.avatar}
                  alt={FACILITATOR_DATA.name}
                  className="w-32 h-32 rounded-2xl object-cover border border-purple-500/40 shadow-xl mb-3"
                />
                <span className="text-sm font-bold text-white font-display">
                  {FACILITATOR_DATA.name}
                </span>
                <span className="text-xs text-[#00C4CC]">
                  {FACILITATOR_DATA.title}
                </span>
              </div>
              <div className="md:col-span-8 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {currentSlide.lead}
                </p>
                {currentSlide.bullets?.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 11: Comparativa Ahorro Agua (Caso Práctico) */}
          {currentSlide.id === 11 && currentSlide.comparison && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-red-500/30">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                    {currentSlide.comparison.beforeLabel}
                  </div>
                  <div className="text-sm font-mono text-slate-300 italic">
                    {currentSlide.comparison.beforeText}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-[#00C4CC]/50">
                  <div className="text-xs font-bold text-[#00C4CC] uppercase tracking-wider mb-1">
                    {currentSlide.comparison.afterLabel}
                  </div>
                  <div className="text-xs font-mono text-cyan-100 leading-relaxed">
                    {currentSlide.comparison.afterText}
                  </div>
                </div>
              </div>

              {/* Resulting 4-Scene Table */}
              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950 text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800 text-slate-400">
                      <th className="p-2.5 px-3">Escena</th>
                      <th className="p-2.5 px-3">Cámara</th>
                      <th className="p-2.5 px-3">Narración / Locución</th>
                      <th className="p-2.5 px-3 text-right">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {currentSlide.comparison.tableData?.map((row, i) => (
                      <tr key={i}>
                        <td className="p-2.5 px-3 font-mono text-[#00C4CC]">{row.scene}</td>
                        <td className="p-2.5 px-3 text-slate-300">{row.camera}</td>
                        <td className="p-2.5 px-3 text-slate-300 italic">{row.narration}</td>
                        <td className="p-2.5 px-3 text-right font-mono text-purple-300">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Slide 13: Cierre y Pacto Rating */}
          {currentSlide.id === 13 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {currentSlide.lead}
                </p>
                {currentSlide.bullets?.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00C4CC] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="md:col-span-5 p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-2">
                  ¿Cumplimos nuestro pacto?
                </span>
                <div className="flex items-center justify-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setPactRating(s)}
                      className="cursor-pointer hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          pactRating >= s
                            ? 'fill-[#00C4CC] text-[#00C4CC]'
                            : 'fill-transparent text-slate-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  Calificación: <strong>{pactRating} de 5 estrellas</strong>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 italic">
                  “{FACILITATOR_DATA.reflection}”
                </div>
              </div>
            </div>
          )}

          {/* Slide 14: Contacto */}
          {currentSlide.id === 14 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentSlide.lead}
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`https://wa.me/1${FACILITATOR_DATA.phoneRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/70 border border-emerald-700/50 text-emerald-200 text-xs font-medium hover:bg-emerald-900/80 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp: {FACILITATOR_DATA.phone}</span>
                  </a>
                  <a
                    href={`mailto:${FACILITATOR_DATA.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-purple-950/60 border border-purple-700/40 text-purple-200 text-xs font-medium hover:bg-purple-900/70 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Correo: {FACILITATOR_DATA.email}</span>
                  </a>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <div className="text-xs font-bold text-[#00C4CC] uppercase tracking-wider mb-2">
                  Próxima Sesión
                </div>
                <div className="text-lg font-bold text-white font-display mb-2">
                  Creación de PDFs Complejos con Prompts
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Aprenderemos a generar informes estructurados, cartillas y recursos educativos listos para impresión.
                </p>
                <span className="text-[11px] text-purple-300 font-mono">
                  ¡Gracias a todos por su participación!
                </span>
              </div>
            </div>
          )}

          {/* Generic Slide Layout for other slides */}
          {![1, 2, 3, 11, 13, 14].includes(currentSlide.id) && (
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-3xl">
                {currentSlide.lead}
              </p>

              {currentSlide.bullets && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentSlide.bullets.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00C4CC] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}

              {currentSlide.quote && (
                <div className="p-4 rounded-xl bg-slate-950/90 border border-purple-500/25 mt-4">
                  <blockquote className="text-xs sm:text-sm text-white italic">
                    “{currentSlide.quote.text}”
                  </blockquote>
                  <span className="text-[11px] text-[#00C4CC] font-bold block mt-1">
                    — {currentSlide.quote.author} ({currentSlide.quote.role})
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Slide Footer & Navigation */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Usa las teclas</span>
            <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">←</kbd>
            <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">→</kbd>
            <span>o Espacio para avanzar</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className={`flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentSlideIndex === 0
                  ? 'opacity-40 text-slate-600 cursor-not-allowed'
                  : 'bg-slate-800 hover:bg-slate-700 text-white active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === totalSlides - 1}
              className={`flex items-center gap-1 px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentSlideIndex === totalSlides - 1
                  ? 'opacity-40 text-slate-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#6420FF] to-[#00C4CC] text-white hover:opacity-95 active:scale-95 shadow-md shadow-purple-900/30'
              }`}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Thumbnails Drawer (When toggled) */}
      {showThumbnails && (
        <div className="absolute bottom-4 left-4 right-4 z-30 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl max-h-48 overflow-x-auto flex items-center gap-3">
          {SLIDES_COLLECTION.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentSlideIndex(idx);
                setShowThumbnails(false);
              }}
              className={`shrink-0 w-36 h-24 p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                currentSlideIndex === idx
                  ? 'bg-slate-900 border-[#00C4CC] shadow-lg shadow-cyan-900/40 scale-105'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="font-bold text-[#00C4CC]">Lámina {idx + 1}</span>
              </div>
              <span className="text-[11px] font-medium text-white line-clamp-2 leading-tight">
                {s.title}
              </span>
              <span className="text-[9px] text-slate-500 truncate">{s.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
