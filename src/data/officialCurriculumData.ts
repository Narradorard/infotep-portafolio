export interface CurricularUnit {
  code: string;
  type: string;
  name: string;
  elements: string[];
  performanceCriteria: string[];
  learningOutcomes: string[];
  evaluationCriteria: string[];
  evidences: string;
}

export interface DetailedSession {
  sessionNumber: number;
  moduleId: number;
  moduleName: string;
  name: string;
  theoryHours: number;
  practiceHours: number;
  totalHours: number;
  activity: string;
  evidence: string;
}

export interface QuizQuestion {
  number: number;
  question: string;
  expectedAnswer: string;
  rubricNote: string;
}

export const PDF_DOCUMENT_INFO = {
  title: "Programa de Formación Técnico Profesional: Introducción a la Ingeniería de Prompts para la Creación de Contenido Audiovisual",
  subtitle: "Documento Curricular Completo — Trabajo Final de Facilitadora",
  author: "Ruth García",
  institution: "INFOTEP (Dirección de Formación Profesional)",
  date: "Octubre de 2026",
  city: "Santo Domingo, República Dominicana",
  pagesCount: 38,
  duration: "60 horas (20 horas teóricas, 40 horas prácticas)",
  referenceDocument: "Programa Técnico en Artes Gráficas, INFOTEP (14/11/2022)",
  pdfPath: "/assets/aistudio/Programa_Prompts_Ruth_Garcia_Completo__1__92849029.pdf"
};

export const OFFICIAL_UNITS_OF_COMPETENCE: CurricularUnit[] = [
  {
    code: "UC1",
    type: "Específica",
    name: "Formular y mejorar prompts de acuerdo con una necesidad de contenido audiovisual",
    elements: [
      "Definir tarea, contexto, restricciones y salida.",
      "Comprobar resultados y límites de la IA generativa."
    ],
    performanceCriteria: [
      "Redacta instrucciones completas y compara dos versiones.",
      "Detecta errores y revisa la respuesta críticamente."
    ],
    learningOutcomes: [
      "Formula y mejora un prompt.",
      "Evalúa el resultado de la IA."
    ],
    evaluationCriteria: [
      "Incluye objetivo, audiencia, tarea, contexto y formato; registra una mejora justificada.",
      "Identifica al menos dos errores o limitaciones; no presenta datos sin verificar."
    ],
    evidences: "Archivos producidos, historial de versiones, lista de cotejo, observación de la práctica y explicación oral de decisiones."
  },
  {
    code: "UC2",
    type: "Específica",
    name: "Desarrollar guiones y recursos visuales mediante prompts estructurados",
    elements: [
      "Planificar una historia breve (brief, público, mensaje, duración).",
      "Describir recursos visuales (sujeto, acción, entorno, encuadre, iluminación, estilo)."
    ],
    performanceCriteria: [
      "Construye una secuencia narrativa acorde al público objetivo.",
      "Mantiene sujeto, estilo, paleta e iluminación consistentes."
    ],
    learningOutcomes: [
      "Elabora guion audiovisual y storyboard.",
      "Genera y mejora imágenes con IA."
    ],
    evaluationCriteria: [
      "Guion con inicio, desarrollo y cierre; tiempos suman la duración prevista de 30 a 60 segundos.",
      "Produce tres imágenes coherentes y documenta al menos un ajuste de prompt."
    ],
    evidences: "Brief, guion técnico, storyboard de 4 a 6 escenas y 3 imágenes seleccionadas con historial de prompts."
  },
  {
    code: "UC3",
    type: "Específica",
    name: "Crear recursos sonoros y secuencias de video mediante instrucciones específicas",
    elements: [
      "Especificar recursos sonoros (texto para voz, tono, ritmo, pronunciación, pausas, ambiente).",
      "Describir secuencias de video (acción del sujeto vs movimiento de cámara, continuidad)."
    ],
    performanceCriteria: [
      "Define texto, tono, modulación, pausas y duración en audio.",
      "Expresa acción, cámara, encuadre y continuidad en video procedural."
    ],
    learningOutcomes: [
      "Produce narración y sonido.",
      "Produce escenas breves de video."
    ],
    evaluationCriteria: [
      "Narración inteligible, texto revisado y recursos con procedencia registrada y consentimientos.",
      "Escenas alineadas al storyboard; distingue movimiento de sujeto y cámara."
    ],
    evidences: "Pista de narración inteligible, recurso sonoro y 2 escenas breves con registro de pruebas y fuentes."
  },
  {
    code: "UC4",
    type: "Específica",
    name: "Integrar y evaluar una pieza audiovisual, documentando prompts, ajustes y fuentes",
    elements: [
      "Integrar materiales (montaje, secuencia, transiciones, sincronización, niveles de audio).",
      "Evaluar y documentar el proyecto final (rúbrica, trazabilidad, fuentes, autoevaluación)."
    ],
    performanceCriteria: [
      "Organiza escenas, audio equilibrado y subtítulos legibles.",
      "Aplica la rúbrica oficial y justifica cambios realizados en la versión final."
    ],
    learningOutcomes: [
      "Exporta una pieza audiovisual de 30 a 60 segundos.",
      "Entrega producto final y portafolio documentado."
    ],
    evaluationCriteria: [
      "Video reproducible de 30 a 60s; audio comprensible y subtítulos legibles; formato acorde al brief.",
      "Incluye prompts iniciales y finales, resultados, fuentes y autoevaluación reflexiva."
    ],
    evidences: "Pieza audiovisual exportada (30-60s) y carpeta de portafolio completa con trazabilidad de prompts."
  }
];

export const RT03_MINUTE_PLAN = [
  { time: "20 min", type: "Práctica", content: "Bienvenida y expectativas", activity: "Cada persona expresa una meta y acuerda normas del grupo.", evaluation: "Ficha DD y observación." },
  { time: "20 min", type: "Teoría", content: "Diagnóstico y conceptos", activity: "Participantes explican experiencias. La facilitadora aclara IA generativa y prompt.", evaluation: "Preguntas abiertas sin nota." },
  { time: "40 min", type: "Teoría", content: "Usos y límites", activity: "Exposición dialogada y comparación de resultados con errores.", evaluation: "Identificación de usos y límites." },
  { time: "40 min", type: "Práctica", content: "Análisis de resultados", activity: "En parejas detectan errores y proponen verificación.", evaluation: "Lista de cotejo y explicación." },
  { time: "40 min", type: "Teoría", content: "Estructura del prompt", activity: "Demostración de objetivo, público, tarea, contexto y formato.", evaluation: "Preguntas de comprobación." },
  { time: "40 min", type: "Práctica", content: "Primer prompt de guion", activity: "Redactan y prueban un prompt para un guion de 30 segundos.", evaluation: "Prompt y resultado guardados." },
  { time: "20 min", type: "Teoría", content: "Síntesis y mejora", activity: "El grupo revisa ejemplos y explica cómo precisar instrucciones.", evaluation: "Justificación oral de ajustes." },
  { time: "20 min", type: "Práctica", content: "Segunda versión y cierre", activity: "Mejoran una instrucción y comparan versiones. Revisan su expectativa.", evaluation: "Comparación y autoevaluación." }
];

export const GLOBAL_15_SESSIONS: DetailedSession[] = [
  { sessionNumber: 1, moduleId: 1, moduleName: "Fundamentos de IA y Prompts", name: "IA, límites y primer prompt", theoryHours: 2, practiceHours: 2, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Diagnóstico y comparación de versiones." },
  { sessionNumber: 2, moduleId: 1, moduleName: "Fundamentos de IA y Prompts", name: "Estructura y ejemplos de instrucciones", theoryHours: 2, practiceHours: 2, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Cinco prompts estructurados." },
  { sessionNumber: 3, moduleId: 1, moduleName: "Fundamentos de IA y Prompts", name: "Iteración y revisión de calidad", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Registro de cambios justificados." },
  { sessionNumber: 4, moduleId: 2, moduleName: "Prompts para Guiones e Imágenes", name: "Brief, público y guion breve", theoryHours: 2, practiceHours: 2, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Brief y guion de 30 a 60 segundos." },
  { sessionNumber: 5, moduleId: 2, moduleName: "Prompts para Guiones e Imágenes", name: "Storyboard y secuencia de escenas", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Storyboard de cuatro a seis escenas." },
  { sessionNumber: 6, moduleId: 2, moduleName: "Prompts para Guiones e Imágenes", name: "Descripción visual e imágenes", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Tres imágenes generadas y prompts." },
  { sessionNumber: 7, moduleId: 2, moduleName: "Prompts para Guiones e Imágenes", name: "Continuidad y comparación de variantes", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Imágenes corregidas y fuentes registradas." },
  { sessionNumber: 8, moduleId: 3, moduleName: "Prompts para Audio y Video", name: "Texto para narración y voz", theoryHours: 2, practiceHours: 2, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Narración inicial y pruebas de locución." },
  { sessionNumber: 9, moduleId: 3, moduleName: "Prompts para Audio y Video", name: "Sonidos y ajustes de narración", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Audio revisado y procedencia sonoro." },
  { sessionNumber: 10, moduleId: 3, moduleName: "Prompts para Audio y Video", name: "Acción y cámara en prompts de video", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Prompts y escenas de prueba." },
  { sessionNumber: 11, moduleId: 3, moduleName: "Prompts para Audio y Video", name: "Escenas y continuidad audiovisual", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Dos escenas útiles y ajustes de cámara." },
  { sessionNumber: 12, moduleId: 4, moduleName: "Integración y Evaluación", name: "Plan de montaje y recursos", theoryHours: 2, practiceHours: 2, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Secuencia de edición estructurada." },
  { sessionNumber: 13, moduleId: 4, moduleName: "Integración y Evaluación", name: "Edición, audio y subtítulos", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Primer montaje con subtítulos." },
  { sessionNumber: 14, moduleId: 4, moduleName: "Integración y Evaluación", name: "Exportación y rúbrica", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Video revisado y portafolio de evidencias." },
  { sessionNumber: 15, moduleId: 4, moduleName: "Integración y Evaluación", name: "Presentación, cuestionario y cierre", theoryHours: 1, practiceHours: 3, totalHours: 4, activity: "Demostración o lectura, práctica y revisión.", evidence: "Video final entregado y autoevaluación." }
];

export const OFFICIAL_100_POINTS_BREAKDOWN = {
  total: 100,
  minPassScore: 70,
  practicesAndPortfolio: {
    totalPoints: 40,
    module1: 10,
    module2: 15,
    module3: 15
  },
  finalProject: {
    totalPoints: 60,
    criteria: [
      { id: "objective", name: "Objetivo y adecuación al público", points: 10, evidence: "Mensaje claro, formato y duración ajustados al brief." },
      { id: "quality_prompt", name: "Calidad y mejora de los prompts", points: 15, evidence: "Instrucciones completas; comparación de versiones y mejoras justificadas." },
      { id: "visual_coherence", name: "Coherencia narrativa y visual", points: 10, evidence: "Secuencia comprensible; imágenes y escenas mantienen continuidad." },
      { id: "audio_accessibility", name: "Audio y accesibilidad", points: 10, evidence: "Narración inteligible; música no tapa la voz; subtítulos legibles." },
      { id: "integration_export", name: "Integración y exportación", points: 10, evidence: "Video reproducible, sincronizado y sin interrupciones involuntarias." },
      { id: "documentation_ethics", name: "Documentación y uso responsable", points: 5, evidence: "Fuentes, autorizaciones y autoevaluación; sin información privada innecesaria." }
    ]
  }
};

export const OFFICIAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    number: 1,
    question: "¿Qué es un prompt y qué función cumple en la creación audiovisual?",
    expectedAnswer: "Instrucción que orienta a una herramienta de IA para realizar una tarea y producir un resultado específico (texto, imagen, audio o video).",
    rubricNote: "2 puntos: correcta y suficiente. 1 punto: parcialmente correcta. 0: incorrecta o ausente."
  },
  {
    number: 2,
    question: "Menciona cinco elementos de una instrucción estructurada.",
    expectedAnswer: "Objetivo, público, tarea, contexto y formato. Se aceptan también restricciones o ejemplos cuando el conjunto sea claro.",
    rubricNote: "Debe nombrar al menos 5 componentes canónicos de la ingeniería de prompts."
  },
  {
    number: 3,
    question: "Mejora esta instrucción: 'Haz un video educativo'. Define tema, público, duración y salida.",
    expectedAnswer: "Ejemplo oficial: 'Escribe un guion de 30 segundos sobre ahorrar agua para adolescentes. Usa lenguaje sencillo y entrega una tabla con escenas, narración y duración.'",
    rubricNote: "Evalúa la capacidad de transformar una idea vaga en un prompt con especificaciones medibles."
  },
  {
    number: 4,
    question: "¿Cómo comprobarías si una segunda versión del prompt mejora el resultado?",
    expectedAnswer: "Comparando ambas versiones con los mismos criterios del brief y registrando qué cambió, qué mejoró y qué falta por corregir.",
    rubricNote: "Enfoque de iteración basada en evidencias objetivas."
  },
  {
    number: 5,
    question: "¿Qué elementos incluirías en un prompt para mantener coherencia entre tres imágenes?",
    expectedAnswer: "Sujeto consistente, rasgos de referencia física, estilo artístico/lente, entorno, encuadre, paleta de iluminación y formato.",
    rubricNote: "Clave para la continuidad del storyboard."
  },
  {
    number: 6,
    question: "¿Qué diferencia hay entre describir la acción del sujeto y el movimiento de cámara?",
    expectedAnswer: "La acción describe qué hace el personaje o elemento en la escena. El movimiento de cámara describe cómo cambia el punto de vista, ángulo o encuadre (pan, tilt, zoom, dolly, tracking shot).",
    rubricNote: "Diferenciación cinematográfica esencial en prompts de video."
  },
  {
    number: 7,
    question: "Menciona dos aspectos que revisarías en una narración generada con voz sintética.",
    expectedAnswer: "Inteligibilidad, pronunciación correcta, ritmo, pausas de respiración, adecuación del tono al texto y duración temporal.",
    rubricNote: "Revisión de calidad sonora y accesibilidad auditiva."
  },
  {
    number: 8,
    question: "¿Qué medidas aplicarías antes de utilizar la voz o imagen de otra persona?",
    expectedAnswer: "Contar con autorización expresa y consentimiento informado, revisar condiciones legales de uso de la plataforma, evitar datos privados y registrar la procedencia.",
    rubricNote: "Compromiso ético y legal indispensable."
  },
  {
    number: 9,
    question: "¿Qué debe contener el portafolio del proyecto final?",
    expectedAnswer: "Brief audiovisual, guion técnico, storyboard, prompts iniciales y finales, resultados obtenidos, ajustes iterados, fuentes registradas y autoevaluación con rúbrica.",
    rubricNote: "Trazabilidad completa del proceso de producción."
  },
  {
    number: 10,
    question: "Describe cómo revisarías el video final de 30 a 60 segundos antes de entregarlo.",
    expectedAnswer: "Comprobando duración exacta, claridad del mensaje, continuidad visual entre escenas, balance de audio (voz clara sobre música), subtítulos legibles y exportación correcta en formato reproducible.",
    rubricNote: "Criterio de control de calidad final según rúbrica del INFOTEP."
  }
];

export const MASTER_EQUIPMENT_LIST = [
  { item: "Computadora para facilitadora", qty: "1 Unidad" },
  { item: "Computadoras para participantes", qty: "15 Unidades" },
  { item: "Proyector multimedia y pantalla", qty: "1 Juego" },
  { item: "Bocinas y sistema de sonido", qty: "1 Juego" },
  { item: "Auriculares individuales para edición", qty: "15 Unidades" },
  { item: "Micrófono para demostraciones de voz", qty: "1 Unidad" },
  { item: "Cuentas autorizadas en herramientas de IA (ChatGPT, Gemini, Meta AI)", qty: "Acceso formativo" },
  { item: "Guías, plantillas de brief, guion y storyboard", qty: "15 Juegos digitales" },
  { item: "Listas de cotejo y rúbricas oficiales INFOTEP", qty: "15 Juegos digitales" },
  { item: "Carpeta de recursos autorizados y portafolio", qty: "15 Carpetas de respaldo" }
];
