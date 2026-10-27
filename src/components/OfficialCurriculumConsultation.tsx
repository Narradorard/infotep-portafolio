import React, { useState } from 'react';
import {
  OFFICIAL_UNITS_OF_COMPETENCE,
  GLOBAL_15_SESSIONS,
  RT03_MINUTE_PLAN,
  OFFICIAL_100_POINTS_BREAKDOWN,
  OFFICIAL_QUIZ_QUESTIONS,
  MASTER_EQUIPMENT_LIST,
  PDF_DOCUMENT_INFO
} from '../data/officialCurriculumData';
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  Award,
  HelpCircle,
  Eye,
  Search,
  ChevronDown,
  ChevronUp,
  Cpu,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface OfficialCurriculumConsultationProps {
  onOpenPdfViewer: () => void;
}

export const OfficialCurriculumConsultation: React.FC<OfficialCurriculumConsultationProps> = ({
  onOpenPdfViewer
}) => {
  const [activeTab, setActiveTab] = useState<
    'competencies' | 'sessions' | 'session1' | 'evaluation' | 'quiz' | 'resources'
  >('competencies');

  const [expandedQuizIndex, setExpandedQuizIndex] = useState<number | null>(null);
  const [sessionSearch, setSessionSearch] = useState<string>('');
  const [sessionModuleFilter, setSessionModuleFilter] = useState<number>(0);

  // Filter sessions
  const filteredSessions = GLOBAL_15_SESSIONS.filter((s) => {
    const matchesModule = sessionModuleFilter === 0 || s.moduleId === sessionModuleFilter;
    const matchesSearch =
      s.name.toLowerCase().includes(sessionSearch.toLowerCase()) ||
      s.activity.toLowerCase().includes(sessionSearch.toLowerCase()) ||
      s.evidence.toLowerCase().includes(sessionSearch.toLowerCase());
    return matchesModule && matchesSearch;
  });

  return (
    <section id="programa-oficial" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Institutional Header Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#6420FF]/20 border border-slate-800 shadow-2xl mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase font-mono">
              <span className="px-2.5 py-1 rounded-md bg-[#6420FF]/40 border border-purple-500/40 text-purple-200">
                INFOTEP · ISO 9001
              </span>
              <span>·</span>
              <span>DIRECCIÓN DE FORMACIÓN PROFESIONAL</span>
              <span>·</span>
              <span className="text-slate-400">DOCUMENTO OFICIAL (38 PÁGINAS)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Programa Curricular Técnico Profesional
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-light">
              Consulta en línea y descarga el documento pedagógico completo elaborado por la facilitadora <strong className="text-white font-medium">Ruth García</strong> para el curso de 60 horas. Incluye unidades de competencia (UC1 a UC4), planificación minuto a minuto RT-03, rúbrica de 100 puntos y banco de evaluación.
            </p>
          </div>

          {/* Consultation Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenPdfViewer}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#6420FF] to-[#00C4CC] hover:brightness-110 active:scale-95 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-purple-950/50 cursor-pointer whitespace-nowrap"
            >
              <Eye className="w-4 h-4 text-cyan-200" />
              <span>Ver Documento PDF Completo</span>
            </button>

            <a
              href={PDF_DOCUMENT_INFO.pdfPath}
              download="Programa_Prompts_Ruth_Garcia_INFOTEP.pdf"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 text-xs sm:text-sm font-semibold transition-all border border-slate-700/80 cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-[#00C4CC]" />
              <span>Descargar PDF (38 págs)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl mb-8">
        <button
          onClick={() => setActiveTab('competencies')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'competencies'
              ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          1. Unidades de Competencia (UC1–UC4)
        </button>

        <button
          onClick={() => setActiveTab('sessions')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'sessions'
              ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          2. Plan de 15 Sesiones (RT-03)
        </button>

        <button
          onClick={() => setActiveTab('session1')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'session1'
              ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          3. Sesión 1 al Detalle (240 min)
        </button>

        <button
          onClick={() => setActiveTab('evaluation')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'evaluation'
              ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          4. Sistema de Evaluación (100 Pts)
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'quiz'
              ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          5. Cuestionario & Solucionario (Anexo 4)
        </button>

        <button
          onClick={() => setActiveTab('resources')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'resources'
              ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          6. Recursos & Lista Maestra
        </button>
      </div>

      {/* Tab 1: Unidades de Competencia (UC1 to UC4) */}
      {activeTab === 'competencies' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Sección 3.2 del Programa Oficial</span>
            <span className="text-[#00C4CC]">Páginas 5 a 7 del PDF</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFICIAL_UNITS_OF_COMPETENCE.map((uc) => (
              <div
                key={uc.code}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-[#6420FF]/30 border border-purple-500/30 text-xs font-mono font-bold text-cyan-300">
                      {uc.code} · Competencia {uc.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-display mb-4">
                    {uc.name}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[11px] font-semibold text-[#00C4CC] uppercase tracking-wider block mb-1">
                        Resultados de Aprendizaje:
                      </span>
                      <ul className="space-y-1">
                        {uc.learningOutcomes.map((ro, i) => (
                          <li key={i} className="text-xs text-slate-200 flex items-start gap-1.5">
                            <span className="text-cyan-400 font-bold">›</span>
                            <span>{ro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider block mb-1">
                        Criterios de Evaluación Oficial:
                      </span>
                      <ul className="space-y-1">
                        {uc.evaluationCriteria.map((ec, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-1.5">
                            <span className="text-purple-400 font-bold">›</span>
                            <span>{ec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300 font-medium">Evidencia exigida:</strong> {uc.evidences}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Plan Global de 15 Sesiones (RT-03) */}
      {activeTab === 'sessions' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Plan Global de las 15 Sesiones (Anexo 2 · RT-03)
              </h3>
              <p className="text-xs text-slate-400">
                Páginas 31 a 33 del documento oficial. 4 horas por sesión = 60 horas totales.
              </p>
            </div>

            {/* Filter and Search */}
            <div className="flex items-center gap-2">
              <select
                value={sessionModuleFilter}
                onChange={(e) => setSessionModuleFilter(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-slate-200"
              >
                <option value={0}>Todos los Módulos (15)</option>
                <option value={1}>Módulo 1: Fundamentos (Ses. 1-3)</option>
                <option value={2}>Módulo 2: Guiones e Imágenes (Ses. 4-7)</option>
                <option value={3}>Módulo 3: Audio y Video (Ses. 8-11)</option>
                <option value={4}>Módulo 4: Integración (Ses. 12-15)</option>
              </select>

              <div className="relative">
                <input
                  type="text"
                  value={sessionSearch}
                  onChange={(e) => setSessionSearch(e.target.value)}
                  placeholder="Buscar sesión..."
                  className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-500 w-36 sm:w-48"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 font-semibold text-[#00C4CC]">Sesión</th>
                    <th className="py-3 px-4 font-semibold text-white">Contenido y Nombre</th>
                    <th className="py-3 px-4 font-semibold text-purple-300">T / P</th>
                    <th className="py-3 px-4 font-semibold text-white">Actividad Didáctica</th>
                    <th className="py-3 px-4 font-semibold text-white">Evidencia Requerida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-light">
                  {filteredSessions.map((s) => (
                    <tr key={s.sessionNumber} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-cyan-300 whitespace-nowrap">
                        Sesión {s.sessionNumber}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-200">
                        <div>{s.name}</div>
                        <span className="text-[10px] text-slate-500">{s.moduleName}</span>
                      </td>
                      <td className="py-3 px-4 font-mono tabular-nums text-purple-300 whitespace-nowrap">
                        {s.theoryHours}h T / {s.practiceHours}h P
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        {s.activity}
                      </td>
                      <td className="py-3 px-4 text-slate-300 italic">
                        {s.evidence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Total de sesiones: 15 (20h Teóricas + 40h Prácticas = 60h)</span>
              <span className="text-[#00C4CC] font-mono">100% de cumplimiento curricular</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Sesión 1 al Detalle (RT-03 Minuto a Minuto) */}
      {activeTab === 'session1' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Anexo 2 · RT-03 · Ejemplo Detallado de la Sesión 1</span>
            <span className="text-purple-300">Página 30 del PDF</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Resultado de aprendizaje de la sesión 1:</strong> Al finalizar, el participante distingue usos y límites de la IA y formula un prompt para guion con objetivo, público, tarea, contexto y formato, justificando una mejora documentada.
          </div>

          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 font-semibold text-[#00C4CC]">Tiempo</th>
                    <th className="py-3 px-4 font-semibold text-white">Contenido Temático</th>
                    <th className="py-3 px-4 font-semibold text-white">Actividades Centradas en el Participante</th>
                    <th className="py-3 px-4 font-semibold text-purple-300">Evaluación / Instrumento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-light">
                  {RT03_MINUTE_PLAN.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-cyan-300 whitespace-nowrap">
                        {item.time} ({item.type === 'Práctica' ? 'P' : 'T'})
                      </td>
                      <td className="py-3.5 px-4 font-medium text-white">
                        {item.content}
                      </td>
                      <td className="py-3.5 px-4 text-slate-300">
                        {item.activity}
                      </td>
                      <td className="py-3.5 px-4 text-slate-400 italic">
                        {item.evaluation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-900/80 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Total: 240 minutos (120 min teoría + 120 min práctica)</span>
              <span className="text-purple-300 font-mono">Sesión 1 de 15</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Sistema Oficial de Evaluación de 100 Puntos */}
      {activeTab === 'evaluation' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Guía de Prácticas · Proyecto Integrador y Rúbrica</span>
            <span className="text-[#00C4CC]">Página 25 del PDF</span>
          </div>

          {/* Breakdown cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-purple-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">
                  Bloque 1: Prácticas Formativas y Portafolio
                </span>
                <span className="text-2xl font-black text-white font-display tabular-nums">
                  40 Pts
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Evaluación continua acumulativa registrada durante los módulos 1, 2 y 3:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span>Módulo 1: Cinco prompts estructurados e iterados</span>
                  <span className="font-mono font-bold text-purple-300">10 Puntos</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span>Módulo 2: Brief, guion, storyboard y 3 imágenes coherentes</span>
                  <span className="font-mono font-bold text-purple-300">15 Puntos</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                  <span>Módulo 3: Narración sonora y 2 escenas de video procedural</span>
                  <span className="font-mono font-bold text-purple-300">15 Puntos</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#00C4CC] uppercase tracking-wider">
                  Bloque 2: Proyecto Final Integrador (Módulo 4)
                </span>
                <span className="text-2xl font-black text-white font-display tabular-nums">
                  60 Pts
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Pieza audiovisual final de 30 a 60 segundos con defensa del portafolio:
              </p>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                Consigna: Crear una pieza audiovisual (educativa, informativa o promocional) con brief, guion, storyboard, video final y portafolio con trazabilidad de prompts.
              </div>
            </div>
          </div>

          {/* Criteria Table */}
          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80 shadow-2xl">
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Rúbrica Oficial del Proyecto Final (60 Puntos)
              </span>
              <span className="text-xs font-mono text-[#00C4CC]">
                Criterio mínimo de logro: 70/100 Puntos
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900/60 border-b border-slate-800 text-slate-400">
                    <th className="py-3 px-4 font-semibold text-white">Criterio Evaluado</th>
                    <th className="py-3 px-4 font-semibold text-white">Evidencia de Logro Esperada</th>
                    <th className="py-3 px-4 text-right font-semibold text-[#00C4CC]">Puntaje Máximo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-light">
                  {OFFICIAL_100_POINTS_BREAKDOWN.finalProject.criteria.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-200">
                        {c.name}
                      </td>
                      <td className="py-3 px-4 text-slate-300">
                        {c.evidence}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-cyan-300 tabular-nums">
                        {c.points} Pts
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-900/90 font-bold">
                    <td className="py-3 px-4 text-white">Total Proyecto Final</td>
                    <td className="py-3 px-4 text-slate-400">Suma de los 6 criterios pedagógicos</td>
                    <td className="py-3 px-4 text-right font-mono text-[#00C4CC]">60 Puntos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Cuestionario & Solucionario (Anexo 4) */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Cuestionario del Participante & Clave de Respuestas (Anexo 4)
              </h3>
              <p className="text-xs text-slate-400">
                Páginas 36 a 38 del documento oficial. Diez preguntas de comprobación con retroalimentación.
              </p>
            </div>
            <span className="text-xs font-mono text-purple-300">
              Duración: 30 minutos · 2 pts por pregunta
            </span>
          </div>

          <div className="space-y-3">
            {OFFICIAL_QUIZ_QUESTIONS.map((q) => {
              const isExpanded = expandedQuizIndex === q.number;
              return (
                <div
                  key={q.number}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedQuizIndex(isExpanded ? null : q.number)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-850 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#6420FF]/30 border border-purple-500/30 text-cyan-300 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                        {q.number}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-100">
                        {q.question}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <span className="text-[11px] text-[#00C4CC] hidden sm:inline">
                        {isExpanded ? 'Ocultar clave' : 'Ver solución'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800/80 space-y-3">
                      <div>
                        <span className="text-[11px] font-semibold text-[#00C4CC] uppercase tracking-wider block mb-1">
                          Respuesta Esperada Oficial (Clave de Ruth García):
                        </span>
                        <p className="text-xs sm:text-sm text-cyan-100 font-mono leading-relaxed bg-slate-900/80 p-3 rounded-lg border border-cyan-900/40">
                          {q.expectedAnswer}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                        <span>Criterio de corrección: {q.rubricNote}</span>
                        <span className="font-mono text-purple-300">Puntaje: 2/2 pts</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 6: Recursos & Lista Maestra */}
      {activeTab === 'resources' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Secciones 7 y 8 · Requerimiento de Recursos y Lista Maestra</span>
            <span className="text-[#00C4CC]">Páginas 19 y 20 del PDF</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white font-display mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#00C4CC]" />
                <span>Ambiente y Equipos del Laboratorio</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Laboratorio acondicionado para 15 participantes con computadoras conectadas a internet de alta velocidad, proyector audiovisual, micrófonos y auriculares para trabajo sonoro individual.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white font-display mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Protocolo de Contingencia</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Si alguna plataforma o conexión falla durante la clase, la facilitadora dispone de carpetas de recursos pre-generados para continuar el análisis y redacción de mejoras sin detener el aprendizaje.
              </p>
            </div>
          </div>

          {/* Master equipment list table */}
          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80 shadow-2xl">
            <div className="p-4 bg-slate-900 border-b border-slate-800">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Lista Maestra Oficial de Equipos e Insumos (15 Participantes)
              </span>
            </div>
            <div className="divide-y divide-slate-800">
              {MASTER_EQUIPMENT_LIST.map((eq, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 px-4 text-xs hover:bg-slate-900/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-500">{i + 1}.</span>
                    <span className="text-slate-200 font-medium">{eq.item}</span>
                  </div>
                  <span className="font-mono text-[#00C4CC] font-semibold">{eq.qty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
