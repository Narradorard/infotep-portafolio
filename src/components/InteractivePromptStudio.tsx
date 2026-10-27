import React, { useState } from 'react';
import { PROMPT_FORMULA_PARTS } from '../data/presentationData';
import { Sparkles, Copy, Check, ArrowRight, Table, Wand2, Terminal, Info } from 'lucide-react';

export const InteractivePromptStudio: React.FC = () => {
  // Generator state
  const [selectedRole, setSelectedRole] = useState(PROMPT_FORMULA_PARTS.roles[0].id);
  const [selectedTask, setSelectedTask] = useState(PROMPT_FORMULA_PARTS.tasks[0].id);
  const [selectedTone, setSelectedTone] = useState(PROMPT_FORMULA_PARTS.tones[1].id);
  const [selectedParam, setSelectedParam] = useState(PROMPT_FORMULA_PARTS.technicalParameters[0].id);
  const [customTopic, setCustomTopic] = useState('Concientización sobre la gestión eficiente de recursos en el hogar');
  const [copied, setCopied] = useState(false);

  // Active comparison tab
  const [comparisonTab, setComparisonTab] = useState<'side-by-side' | 'script-table'>('side-by-side');

  // Compute live prompt
  const roleObj = PROMPT_FORMULA_PARTS.roles.find((r) => r.id === selectedRole);
  const taskObj = PROMPT_FORMULA_PARTS.tasks.find((t) => t.id === selectedTask);
  const toneObj = PROMPT_FORMULA_PARTS.tones.find((t) => t.id === selectedTone);
  const paramObj = PROMPT_FORMULA_PARTS.technicalParameters.find((p) => p.id === selectedParam);

  const generatedPrompt = `${roleObj?.snippet}

Tema central del proyecto: "${customTopic}".

Tarea específica:
${taskObj?.snippet}

Tono y estilo de comunicación:
${toneObj?.snippet}

Parámetros técnicos y cinematográficos requeridos:
${paramObj?.snippet}

Reglas de entrega:
1. Asegura continuidad estética entre escenas correlativas.
2. Cada indicación de cámara debe incluir tipo de plano (close-up, plano medio, plano general) y movimiento intencional.
3. Optimiza las locuciones para una dicción natural y pausas emotivas de respiración.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="prompt-lab" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase mb-2">
          <span>LABORATORIO PRÁCTICO & CASO DE ESTUDIO</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-normal">Metodología de Ruth García</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
          Laboratorio de Ingeniería de Prompts Audiovisuales
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Descubre cómo estructurar instrucciones precisas que eliminan la vaguedad algorítmica y producen resultados cinematográficos consistentes.
        </p>
      </div>

      {/* Part 1: Case Study Evolution (From Canva Slides 10 & 11) */}
      <div className="mb-16">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white font-display">
            Caso de Estudio: La Evolución de un Prompt
          </h3>
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setComparisonTab('side-by-side')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                comparisonTab === 'side-by-side'
                  ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Comparativa Vago vs Preciso
            </button>
            <button
              onClick={() => setComparisonTab('script-table')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                comparisonTab === 'script-table'
                  ? 'bg-gradient-to-r from-[#6420FF] to-[#7B2CBF] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tabla de Guion Resultante (30s)
            </button>
          </div>
        </div>

        {comparisonTab === 'side-by-side' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vague prompt card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                  <span>Idea Inicial (Vaga / Sin Estructura)</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/70 border border-red-800/40 text-red-300">
                    Bajo Control
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 font-mono text-sm text-slate-300 italic mb-4">
                  “Haz un video sobre ahorrar agua.”
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-200">¿Por qué falla?</strong> No define formato, duración, público objetivo, emoción, lenguaje ni tipo de salida. El modelo genera un texto genérico o un video aleatorio sin narrativa comercial ni continuidad.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
                Resultado: Tiempo perdido corrigiendo alucinaciones e inconsistencias visuales.
              </div>
            </div>

            {/* Engineered prompt card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#6420FF]/20 border border-cyan-500/35 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#00C4CC] uppercase tracking-wider mb-3">
                  <span>Instrucción con Ingeniería Audiovisual</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-800/40 text-cyan-300">
                    Alto Rendimiento
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-900/50 font-mono text-xs sm:text-sm text-cyan-100 leading-relaxed mb-4">
                  “Escribe un guion audiovisual de 30 segundos para adolescentes. Presenta tres acciones cotidianas para ahorrar agua en casa. Usa lenguaje sencillo y cercano. Entrega una tabla estructurada con cuatro columnas: Escena, Movimiento de cámara, Narración/Voz y Duración.”
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">¿Por qué triunfa?</strong> Establece restricción de tiempo exacta (30s), público meta (adolescentes), contenido específico (3 acciones caseras), tono verbal (cercano) y formato reproducible (tabla de 4 campos).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-[#00C4CC] flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Salida directa para producción en CapCut, Runway o ElevenLabs.</span>
              </div>
            </div>
          </div>
        ) : (
          /* Table View of 30-Second Script */
          <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold text-[#00C4CC]">Escena & Tiempo</th>
                    <th className="py-3.5 px-4 font-semibold text-white">Plano & Movimiento de Cámara</th>
                    <th className="py-3.5 px-4 font-semibold text-white">Locución en Off / Texto</th>
                    <th className="py-3.5 px-4 font-semibold text-right text-purple-300">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-light">
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-cyan-300 whitespace-nowrap">
                      Escena 01 (00-06s)
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">
                      Plano detalle (close-up) de un grifo goteando en lavamanos, cámara lenta 60fps con iluminación azulada fría.
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 italic">
                      “¿Sabías que una gota por segundo equivale a 30 litros de agua limpia tirados a la basura cada día?”
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-400">
                      6s
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-cyan-300 whitespace-nowrap">
                      Escena 02 (06-14s)
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">
                      Plano medio, adolescente cerrando el grifo mientras se cepilla los dientes, ritmo dinámico y luz cálida.
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 italic">
                      “Acción 1: Cierra la llave al cepillarte. Acción 2: Dúchate en lo que dura tu canción favorita de 4 minutos.”
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-400">
                      8s
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-cyan-300 whitespace-nowrap">
                      Escena 03 (14-22s)
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">
                      Plano general de jardín urbano, regadera ecológica reutilizando agua de enjuague de vegetales.
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 italic">
                      “Acción 3: Riega plantas temprano por la mañana con agua reutilizada de la cocina antes que evapore el sol.”
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-400">
                      8s
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-cyan-300 whitespace-nowrap">
                      Escena 04 (22-30s)
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">
                      Plano frontal directo, tipografía cinética enérgica en pantalla, corte a logotipo ecológico y cierre con impacto.
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 italic">
                      “Pequeñas acciones, gran impacto. ¿Aceptas el reto de hoy? Súmate ahora.”
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-400">
                      8s
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Estructura desarrollada en el Módulo 2 del curso</span>
              <span className="font-mono text-purple-300">Total: 30 segundos exactos</span>
            </div>
          </div>
        )}
      </div>

      {/* Part 2: Live Prompt Engineering Studio Generator */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase mb-2">
          <Wand2 className="w-4 h-4 text-[#00C4CC]" />
          <span>GENERADOR DE PROMPTS AUDIOVISUALES EN VIVO</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
          Construye tu Prompt Audiovisual Maestro
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-8 max-w-3xl">
          Selecciona las 4 variables clave de la fórmula pedagógica enseñada por Ruth García para armar una directiva profesional lista para copiar y pegar en ChatGPT, Gemini o Meta AI.
        </p>

        {/* Form controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* 1. Rol */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              1. Rol y Especialidad
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#00C4CC] transition-colors"
            >
              {PROMPT_FORMULA_PARTS.roles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Tarea */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              2. Tarea y Formato
            </label>
            <select
              value={selectedTask}
              onChange={(e) => setSelectedTask(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#00C4CC] transition-colors"
            >
              {PROMPT_FORMULA_PARTS.tasks.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {/* 3. Tono */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              3. Tono & Emoción
            </label>
            <select
              value={selectedTone}
              onChange={(e) => setSelectedTone(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#00C4CC] transition-colors"
            >
              {PROMPT_FORMULA_PARTS.tones.map((to) => (
                <option key={to.id} value={to.id}>
                  {to.label}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Parámetro Técnico */}
          <div className="flex flex-col">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              4. Parámetro de Cámara / Lente
            </label>
            <select
              value={selectedParam}
              onChange={(e) => setSelectedParam(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-[#00C4CC] transition-colors"
            >
              {PROMPT_FORMULA_PARTS.technicalParameters.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Custom topic input */}
        <div className="mb-6">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 block">
            Tema o Idea del Proyecto:
          </label>
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="Ejemplo: Lanzamiento de producto artesanal, tutorial de reciclaje, cortometraje de ciencia ficción..."
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#00C4CC] transition-colors"
          />
        </div>

        {/* Prompt Output Box */}
        <div className="relative rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <Terminal className="w-4 h-4 text-[#00C4CC]" />
              <span>Prompt Estructurado · Listo para Usar</span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#6420FF] to-[#00C4CC] hover:opacity-90 active:scale-95 text-white text-xs font-semibold transition-all cursor-pointer shadow"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white" />
                  <span>Copiar al Portapapeles</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 sm:p-5 text-xs sm:text-sm text-cyan-100 font-mono whitespace-pre-wrap leading-relaxed max-h-[260px] overflow-y-auto">
            {generatedPrompt}
          </pre>

          <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>Compatible con: ChatGPT 4o, Gemini 1.5 Pro, Meta AI Llama 3</span>
            <span className="text-[#00C4CC]">Fórmula pedagógica: Rol + Tarea + Tono + Parámetros</span>
          </div>
        </div>
      </div>
    </section>
  );
};
