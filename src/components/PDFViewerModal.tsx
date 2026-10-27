import React from 'react';
import { X, Download, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { PDF_DOCUMENT_INFO } from '../data/officialCurriculumData';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6">
      <div className="relative w-full max-w-6xl h-[92vh] bg-[#090D16] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#6420FF]/30 border border-purple-500/40 text-[#00C4CC]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#00C4CC] uppercase tracking-wider font-mono">
                  DOCUMENTO OFICIAL INFOTEP · 38 PÁGINAS
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">Octubre 2026</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-display truncate max-w-xl">
                {PDF_DOCUMENT_INFO.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PDF_DOCUMENT_INFO.pdfPath}
              download="Programa_Prompts_Ruth_Garcia_INFOTEP.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
              title="Descargar archivo PDF completo"
            >
              <Download className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span className="hidden sm:inline">Descargar PDF</span>
            </a>

            <a
              href={PDF_DOCUMENT_INFO.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
              title="Abrir en pestaña nueva"
            >
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Nueva Pestaña</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="flex-1 w-full bg-slate-950 relative">
          <iframe
            src={`${PDF_DOCUMENT_INFO.pdfPath}#toolbar=1&navpanes=1`}
            title="Visor del Programa Curricular de Ingeniería de Prompts"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Bottom Status */}
        <div className="px-6 py-2.5 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span>Autora: Ruth García Medina · Dirección de Formación Profesional INFOTEP</span>
          <span className="text-[#00C4CC] font-mono">Formación Continua en Centro · 60 Horas</span>
        </div>
      </div>
    </div>
  );
};
