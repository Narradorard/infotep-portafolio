import heroImageAsset from '../assets/images/hero_audiovisual_ai_studio_1793134186625.jpg';
import storyboardImage from '../assets/images/module_storyboard_prompts_1793134187496.jpg';
import audioVideoImage from '../assets/images/module_audio_video_synth_1793134187979.jpg';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Video, Film, Sparkles, Volume2, Camera, CheckCircle2 } from 'lucide-react';

interface SceneStep {
  secondsRange: string;
  startSec: number;
  endSec: number;
  name: string;
  camera: string;
  prompt: string;
  audioVoiceover: string;
  visualDescription: string;
  image: string;
}

const SCENES: SceneStep[] = [
  {
    secondsRange: "00s — 03s",
    startSec: 0,
    endSec: 3,
    name: "Escena 1: El Gancho (Hook)",
    camera: "Primerísimo primer plano (Extreme Close-up) · Lente macro · Cámara lenta 60fps",
    prompt: "Extreme macro shot of human eye widening in awe with reflection of neon purple and cyber cyan holographic interface in retina, shallow depth of field, 35mm film grain, cinematic lighting.",
    audioVoiceover: "“¿Sabías que una idea de 10 segundos puede cambiar una marca entera?” (Locución juvenil enérgica).",
    visualDescription: "Reflexión cibernética en el iris del protagonista con destellos violeta y turquesa.",
    image: audioVideoImage
  },
  {
    secondsRange: "03s — 07s",
    startSec: 3,
    endSec: 7,
    name: "Escena 2: La Transformación (Acción Central)",
    camera: "Travelling lateral rápido (Whip pan) · Plano holandés dinámico",
    prompt: "Fast whip-pan transition into a creative designer manipulating floating glowing storyboard panels in mid-air, volumetric light rays, electric cyan particles, cinematic motion blur.",
    audioVoiceover: "“Con un prompt preciso, tu mente programa la pantalla sin tocar una sola línea de código.”",
    visualDescription: "Transición cinemática acelerada mostrando paneles de storyboard flotantes e interactivos.",
    image: storyboardImage
  },
  {
    secondsRange: "07s — 10s",
    startSec: 7,
    endSec: 10,
    name: "Escena 3: Llamado a la Acción (Cierre)",
    camera: "Plano medio con retroceso continuo (Dolly out) · Tipografía animada de alto impacto",
    prompt: "Smooth dolly-out camera move revealing the complete modern studio workspace, bold typographic title 'CREA CON IA' floating in 3D, warm studio rim lighting, fade out to black.",
    audioVoiceover: "“Aprende con Ruth García en INFOTEP. Diseña el futuro hoy.” (Crescendo musical y silencio).",
    visualDescription: "Cámara retrocede mostrando el estudio completo con logotipo y tipografía en negrita.",
    image: heroImageAsset
  }
];

export const ProjectSimulator10s: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 10) {
            setIsPlaying(false);
            return 10;
          }
          return Number((prev + 0.1).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  // Find active scene based on currentTime
  const activeSceneIndex = SCENES.findIndex(
    (s) => currentTime >= s.startSec && currentTime <= s.endSec
  );
  const activeScene = SCENES[activeSceneIndex >= 0 ? activeSceneIndex : 0];

  return (
    <section id="proyecto" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#00C4CC] tracking-wider uppercase mb-2">
          <span>SIMULADOR DE TALLER EN VIVO (40 MINUTOS)</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-normal">Práctica del Aula</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
          Prototipo de Video de 10 Segundos
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          La práctica individual del curso: los participantes producen una pieza audiovisual condensada de 10 segundos con continuidad de cámara, locución sincronizada y estética definida.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Interactive 10s Video Player Simulator */}
        <div className="lg:col-span-7 flex flex-col p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl">
          {/* Virtual Player Screen */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-slate-800 aspect-video mb-5 group shadow-inner">
            <img
              src={activeScene.image}
              alt={activeScene.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

            {/* Timecode overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-xs font-mono font-bold text-cyan-300 border border-slate-700">
                {currentTime.toFixed(1)}s / 10.0s
              </span>
              <span className="px-2 py-0.5 rounded bg-[#6420FF]/80 text-[11px] font-semibold text-white">
                {activeScene.name.split(':')[0]}
              </span>
            </div>

            {/* Subtitles Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="inline-block p-2.5 px-4 rounded-lg bg-black/80 backdrop-blur-md border border-slate-700/60 text-xs sm:text-sm text-yellow-300 font-medium">
                {activeScene.audioVoiceover}
              </div>
            </div>
          </div>

          {/* Timeline Scrubbing Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span>00:00:00</span>
              <span className="text-[#00C4CC] font-bold">Timeline 10 Segundos</span>
              <span>00:00:10</span>
            </div>
            
            {/* Clickable timeline bar */}
            <div 
              className="relative w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newTime = (clickX / rect.width) * 10;
                setCurrentTime(Number(Math.min(10, Math.max(0, newTime)).toFixed(1)));
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-[#6420FF] via-purple-500 to-[#00C4CC] transition-all duration-100"
                style={{ width: `${(currentTime / 10) * 100}%` }}
              />
            </div>

            {/* Scene Markers */}
            <div className="grid grid-cols-3 text-center text-[11px] text-slate-500 mt-1 font-mono">
              <span className="text-left">0-3s: Hook</span>
              <span>3-7s: Acción</span>
              <span className="text-right">7-10s: Cierre</span>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (currentTime >= 10) setCurrentTime(0);
                  setIsPlaying(!isPlaying);
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6420FF] to-[#00C4CC] text-white text-xs font-bold transition-all hover:opacity-90 active:scale-95 cursor-pointer shadow-lg shadow-purple-900/30"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pausar Simulación' : 'Reproducir Secuencia'}</span>
              </button>

              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>

            <span className="text-xs text-slate-400 font-mono">
              Escena {activeSceneIndex + 1} de 3
            </span>
          </div>
        </div>

        {/* Right Column: Storyboard Breakdown & Prompts */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs font-semibold text-[#00C4CC] uppercase tracking-wider mb-1">
              Ficha Técnica del Prototipo
            </div>
            <h4 className="text-base font-bold text-white font-display mb-2">
              Desglose de Escena Activa
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="text-slate-400 block mb-0.5">Encuadre y Cámara:</span>
                <span className="text-slate-200 font-medium">{activeScene.camera}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="text-cyan-300 block mb-0.5 font-mono text-[11px]">Prompt Maestro de la Escena:</span>
                <span className="text-slate-300 font-mono text-[11px] leading-relaxed block">
                  {activeScene.prompt}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80">
                <span className="text-purple-300 block mb-0.5">Locución & Efecto Sonoro:</span>
                <span className="text-slate-200 italic">{activeScene.audioVoiceover}</span>
              </div>
            </div>
          </div>

          {/* 40-minute structure card from Canva */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
              Estructura de la Práctica (40 Minutos)
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-[#00C4CC] font-bold block">10 min: Conceptualización</span>
                <span className="text-slate-400 text-[11px]">Mensaje clave y público.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-purple-400 font-bold block">10 min: Redacción de Prompt</span>
                <span className="text-slate-400 text-[11px]">Fórmula técnica tabulada.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-white font-bold block">10 min: Generación Visual</span>
                <span className="text-slate-400 text-[11px]">Imágenes y voz en off.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="text-emerald-400 font-bold block">10 min: Coevaluación</span>
                <span className="text-slate-400 text-[11px]">Revisión y feedback mutuo.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
