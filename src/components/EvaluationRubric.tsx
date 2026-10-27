import React, { useState } from 'react';
import { RUBRIC_CRITERIA, FACILITATOR_DATA } from '../data/presentationData';
import { Award, CheckSquare, Star, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

export const EvaluationRubric: React.FC = () => {
  // Score state for 4 criteria (defaulting to 5 for showcase)
  const [scores, setScores] = useState<Record<string, number>>({
    prompt_clarity: 5,
    visual_coherence: 5,
    audio_integration: 4,
    compliance_timing: 5
  });

  // Calculate total score
  const totalScore = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
  const maxScore = RUBRIC_CRITERIA.length * 5; // 20
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Pact satisfaction rating (from slide 13)
  const [pactRating, setPactRating] = useState<number>(5);

  return (
    <section id="evaluacion" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase mb-2">
          <span>SISTEMA DE EVALUACIÓN POR COMPETENCIAS</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-normal">Estándar INFOTEP</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
          Rúbrica de Evaluación y Pacto de Aula
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Criterios objetivos para valorar el Trabajo Final del participante y verificar el cumplimiento de las metas de aprendizaje de las 60 horas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Interactive Rubric Calculator */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00C4CC]" />
                <span>Criterios de Evaluación Técnica</span>
              </h3>
              <button
                onClick={() =>
                  setScores({
                    prompt_clarity: 5,
                    visual_coherence: 5,
                    audio_integration: 5,
                    compliance_timing: 5
                  })
                }
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            </div>

            <div className="space-y-6">
              {RUBRIC_CRITERIA.map((criterion) => {
                const currentScore = scores[criterion.id] || 3;
                return (
                  <div key={criterion.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white font-display">
                          {criterion.name}
                        </span>
                        <span className="text-[11px] font-mono text-purple-300">
                          ({criterion.weight})
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <button
                            key={lvl}
                            onClick={() => setScores({ ...scores, [criterion.id]: lvl })}
                            className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                              currentScore >= lvl
                                ? 'bg-gradient-to-r from-[#6420FF] to-[#00C4CC] text-white shadow'
                                : 'bg-slate-900 text-slate-600 hover:text-slate-400'
                            }`}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {criterion.description}
                    </p>

                    {/* Level Description */}
                    <div className="text-xs text-cyan-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                      <span>Nivel seleccionado: <strong>{currentScore}/5 Puntos</strong></span>
                      <span className="text-[11px] text-slate-400">
                        {currentScore >= 4 ? 'Cumple con excelencia técnica' : 'Requiere revisión e iteración'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Total Score Widget & Class Agreement Rating */}
        <div className="lg:col-span-4 space-y-6">
          {/* Final Score Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#6420FF]/25 border border-purple-500/30 shadow-2xl text-center">
            <span className="text-xs font-bold text-[#00C4CC] uppercase tracking-wider block mb-1">
              Calificación Final del Proyecto
            </span>
            <div className="text-5xl font-black text-white font-display my-3 tabular-nums">
              {totalScore} <span className="text-2xl text-slate-500 font-light">/ {maxScore}</span>
            </div>
            <div className="text-sm font-semibold text-purple-200 mb-2">
              {percentage >= 90 ? 'Sobresaliente con Honores' : percentage >= 80 ? 'Notable / Aprobado' : 'Aceptable'} ({percentage}%)
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {percentage >= 80
                ? 'El participante demuestra dominio técnico en la creación de guiones, storyboards y clips con herramientas de IA generativa.'
                : 'Se recomienda iterar sobre la estructura tabulada del prompt y la coherencia visual entre fotogramas.'}
            </p>
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
              Certificación de Competencias INFOTEP
            </div>
          </div>

          {/* Pacto de Aula (Slide 9 & 13) */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-2">
              Pacto de Aula & Convivencia
            </span>
            <h4 className="text-base font-bold text-white font-display mb-3">
              ¿Cumplimos nuestro pacto?
            </h4>
            
            <ul className="space-y-2 text-xs text-slate-300 mb-5">
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[#00C4CC]" />
                <span>Puntualidad en cada jornada</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[#00C4CC]" />
                <span>Celulares en modo silencio durante clases</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[#00C4CC]" />
                <span>Participación activa y preguntas abiertas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[#00C4CC]" />
                <span>Respeto mutuo y coevaluación constructiva</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5 text-[#00C4CC]" />
                <span>Levantar la mano al hablar</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 block mb-2 font-medium">
                Califica el cumplimiento del pacto (del 1 al 5):
              </span>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setPactRating(star)}
                    className="p-1 cursor-pointer hover:scale-110 transition-transform"
                    aria-label={`Calificar con ${star} estrellas`}
                  >
                    <Star
                      className={`w-6 h-6 ${
                        pactRating >= star
                          ? 'fill-[#00C4CC] text-[#00C4CC]'
                          : 'fill-transparent text-slate-700'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="text-center text-xs text-slate-400 mt-2">
                {pactRating === 5 ? '¡Excelente compromiso del grupo!' : `Valoración: ${pactRating} de 5`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
