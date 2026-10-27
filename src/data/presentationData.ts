export interface Module {
  id: number;
  title: string;
  subtitle: string;
  hours: { theory: number; practice: number; total: number };
  description: string;
  keyTopics: string[];
  deliverable: string;
  tools: string[];
  image: string;
}

export interface SlideData {
  id: number;
  slideNumber: number;
  category: string;
  title: string;
  subtitle?: string;
  lead: string;
  bullets?: string[];
  quote?: { text: string; author: string; role: string };
  metrics?: { label: string; value: string; detail: string }[];
  comparison?: {
    beforeLabel: string;
    beforeText: string;
    afterLabel: string;
    afterText: string;
    tableData?: { scene: string; narration: string; camera: string; duration: string }[];
  };
  interactiveType?: 'intro' | 'facilitator' | 'ethics' | 'modules' | 'agreement' | 'prompt-lab' | 'project' | 'rubric' | 'reflection' | 'contact';
}

export const FACILITATOR_DATA = {
  name: "Ruth García Medina",
  title: "Diseñadora Gráfica & Creadora de Contenido",
  subRole: "Especialista en Marketing Digital, Facilitadora INFOTEP e IA Audiovisual",
  bio: "Creativa apasionada por la convergencia entre arte, pedagogía y tecnología. Con amplia trayectoria en diseño gráfico y producción multimedia, Ruth facilita la adopción de herramientas de inteligencia artificial generativa para transformar ideas en piezas audiovisuales de alto impacto sin necesidad de código.",
  phone: "+1 (829) 299-0544",
  phoneRaw: "8292990544",
  email: "marketingandcoach@gmail.com",
  institution: "INFOTEP (Instituto Nacional de Formación Técnico Profesional)",
  avatar: "/src/assets/images/avatar_ruth_garcia_1793134186814.jpg",
  heroImage: "/src/assets/images/hero_audiovisual_ai_studio_1793134186625.jpg",
  quote: {
    text: "La inteligencia artificial es una herramienta. La elección sobre cómo se utiliza depende de nosotros.",
    author: "Dra. Fei-Fei Li",
    role: "Profesora de Stanford, investigadora y pionera de la IA moderna"
  },
  reflection: "El arte con tecnología es una ayuda idónea para la productividad, democratización y crecimiento de los seres humanos."
};

export const COURSE_SPECS = {
  title: "Ingeniería de Prompts para la Creación de Contenido Audiovisual",
  subtitle: "Guiones, imágenes, audio y video con Inteligencia Artificial",
  totalHours: 60,
  theoryHours: 20,
  practiceHours: 40,
  sessions: 15,
  sessionDuration: "4 horas por sesión",
  targetAudience: "Comunicadores, educadores, diseñadores gráficos, creadores de contenido y público general con interés en producción multimedia.",
  requirements: [
    "Edad: 16 años o más",
    "Manejo básico de computadora / smartphone",
    "Lectura y escritura funcional",
    "No requiere conocimientos previos de programación"
  ],
  ecosystemTools: ["ChatGPT", "Gemini", "Meta AI", "Midjourney / Imagen", "Runway Gen-3 / Pika", "ElevenLabs / Suno"]
};

export const MODULES_DATA: Module[] = [
  {
    id: 1,
    title: "Módulo 1: Fundamentos de IA y Construcción de Prompts",
    subtitle: "Instrucciones claras, evaluación crítica e iteración",
    hours: { theory: 6, practice: 9, total: 15 },
    description: "Comprende la arquitectura conceptual del prompt: rol, contexto, tarea específica, tono y restricciones de salida. Aprende a evaluar respuestas de LLMs y refinar mediante iteraciones progresivas.",
    keyTopics: [
      "Qué es un prompt y cómo razonan los modelos generativos",
      "Estructura atómica: Rol + Instrucción + Contexto + Formato",
      "Comparativa técnica entre ChatGPT, Gemini y Meta AI",
      "Uso responsable, sesgos algorítmicos y verificación de datos"
    ],
    deliverable: "Banco de 5 prompts maestros iterados para conceptualización de contenidos.",
    tools: ["ChatGPT", "Gemini", "Meta AI"],
    image: "/src/assets/images/module_storyboard_prompts_1793134187496.jpg"
  },
  {
    id: 2,
    title: "Módulo 2: Prompts para Guiones e Imágenes",
    subtitle: "Historia, storyboard, coherencia de personajes y estética visual",
    hours: { theory: 5, practice: 10, total: 15 },
    description: "Genera estructuras narrativas cinematográficas (3 actos, ganchos de atención en 3 segundos) y transfórmalas en storyboards visuales con consistencia estilística y encuadres de cámara.",
    keyTopics: [
      "Desarrollo de guiones audiovisuales tabulados (Escena, Narración, Duración)",
      "Vocabulario cinematográfico para prompts (planos, lentes, iluminación, arte)",
      "Técnicas de consistencia visual entre fotogramas correlativos",
      "Generación de arte conceptual y storyboards publicitarios"
    ],
    deliverable: "Guion audiovisual tabulado de 30 segundos con storyboard de 4 escenas clave.",
    tools: ["Gemini 1.5/2.5", "Midjourney", "Canva Magic Studio"],
    image: "/src/assets/images/module_storyboard_prompts_1793134187496.jpg"
  },
  {
    id: 3,
    title: "Módulo 3: Prompts para Audio y Video",
    subtitle: "Narración, clonación vocal, paisaje sonoro, movimiento y cámara",
    hours: { theory: 5, practice: 10, total: 15 },
    description: "Domina la síntesis de voz humana hiperrealista, musicalización adaptativa con IA y generación de video procedural con control de movimiento de cámara, continuidad y velocidad.",
    keyTopics: [
      "Prompts para dirección de voces en off (emoción, ritmo, acento, pausas)",
      "Creación de bandas sonoras y efectos foley sincronizados",
      "Dirección de cámara con prompts (pan, tilt, zoom, dolly in, tracking shot)",
      "Parámetros de movimiento, interpolación y coherencia temporal en video"
    ],
    deliverable: "Pistas maestras de audio (voz + música) y secuencias de video generadas con IA.",
    tools: ["ElevenLabs", "Suno AI", "Runway Gen-3", "Pika Labs"],
    image: "/src/assets/images/module_audio_video_synth_1793134187979.jpg"
  },
  {
    id: 4,
    title: "Módulo 4: Integración y Evaluación del Proyecto Final",
    subtitle: "Montaje, subtítulos, sincronización y defensa ante jurado",
    hours: { theory: 4, practice: 11, total: 15 },
    description: "Ensambla todas las piezas generadas en una obra audiovisual cohesiva con subtítulos dinámicos y audio sincronizado, cumpliendo la rúbrica oficial de calidad técnica del INFOTEP.",
    keyTopics: [
      "Edición y montaje rápido en herramientas en la nube y móviles",
      "Subtitulado accesible automatizado y optimización de codecs",
      "Autoevaluación con rúbrica por competencias",
      "Presentación pública de la pieza audiovisual y defensa de prompts"
    ],
    deliverable: "Pieza audiovisual final lista para emisión (10 a 30 segundos) con ficha de prompts.",
    tools: ["CapCut / Premiere", "Canva Video Suite", "Submagic"],
    image: "/src/assets/images/hero_audiovisual_ai_studio_1793134186625.jpg"
  }
];

export const SLIDES_COLLECTION: SlideData[] = [
  {
    id: 1,
    slideNumber: 1,
    category: "Presentación Oficial",
    title: "Ingeniería de Prompts para la Creación de Contenido Audiovisual",
    subtitle: "Guiones, imágenes, audio y video con Inteligencia Artificial",
    lead: "Programa de formación técnica profesional de 60 horas. Facilitadora: Ruth García Medina. Presentación de Trabajo Final.",
    interactiveType: "intro",
    metrics: [
      { label: "Duración", value: "60 Horas", detail: "20h Teoría · 40h Práctica" },
      { label: "Sesiones", value: "15 Clases", detail: "4 horas por jornada guiada" },
      { label: "Institución", value: "INFOTEP", detail: "Certificación Técnico Profesional" }
    ]
  },
  {
    id: 2,
    slideNumber: 2,
    category: "Debate Ético & Fundamentación",
    title: "¿Es mala la Inteligencia Artificial?",
    subtitle: "Pensamiento crítico antes de la generación algorítmica",
    lead: "Una tecnología no es intrínsecamente buena ni mala: es un multiplicador del propósito de quien la diseña, alimenta y utiliza.",
    bullets: [
      "¿Quién la creó? — Científicos, matemáticos y lingüistas humanos.",
      "¿Quién la alimenta a diario? — Cada usuario que busca, escribe y sube contenido a la red.",
      "¿Quién la desarrolla y hacia dónde va? — Comunidades globales de ingeniería con supervisión ética.",
      "Responsabilidad profesional: Crear con veracidad, respeto a la privacidad y valor humano."
    ],
    quote: {
      text: "La inteligencia artificial es una herramienta. La elección sobre cómo se utiliza depende de nosotros.",
      author: "Dra. Fei-Fei Li",
      role: "Profesora en Stanford University y pionera de Computer Vision"
    },
    interactiveType: "ethics"
  },
  {
    id: 3,
    slideNumber: 3,
    category: "Perfil de la Facilitadora",
    title: "Ruth García Medina",
    subtitle: "Diseñadora Gráfica, Creadora de Contenido & Especialista en Marketing Digital",
    lead: "En este curso practicaremos cómo convertir una idea abstracta en instrucciones claras que generen una pieza audiovisual completa.",
    bullets: [
      "Más de 10 años en dirección de arte, diseño gráfico e identidad visual.",
      "Facilitadora certificada por el INFOTEP en metodologías teórico-prácticas activas.",
      "Especialista en IA generativa aplicada a la optimización de flujos de trabajo multimedia.",
      "Enfoque pedagógico: 'Aprender haciendo', demostraciones guiadas y acompañamiento personalizado."
    ],
    interactiveType: "facilitator"
  },
  {
    id: 4,
    slideNumber: 4,
    category: "Dinámica de Diagnóstico",
    title: "Nos Conocemos: Romper el Hielo",
    subtitle: "Activación del grupo y detección de necesidades",
    lead: "La inteligencia artificial adquiere sentido cuando conecta con los proyectos reales de los participantes.",
    bullets: [
      "¿Cómo te llamas y a qué te dedicas profesionalmente?",
      "Comparte tu experiencia previa con la creación de contenido.",
      "¿Has utilizado alguna herramienta de inteligencia artificial recientemente?",
      "Cuéntanos una duda o expectativa puntual que tengas.",
      "¿Qué te gustaría crear durante este curso? (Video educativo, spot de marca, cortometraje o reel)."
    ],
    interactiveType: "intro"
  },
  {
    id: 5,
    slideNumber: 5,
    category: "Requisitos de Admisión",
    title: "Descripción y Requisitos de Entrada",
    subtitle: "Democratizando el acceso a la tecnología audiovisual",
    lead: "El diseño de prompts no es un privilegio de programadores; está al alcance de cualquier persona con curiosidad y estructura mental.",
    bullets: [
      "Perfil destinatario: Comunicadores, diseñadores, docentes, emprendedores y creativos.",
      "Edad: 16 años o más.",
      "Manejo básico de computadora personal o teléfono móvil inteligente.",
      "Lectoescritura funcional y pensamiento analítico.",
      "Cero barreras: ¡No se requiere saber código ni programación previa!"
    ],
    quote: {
      text: "Cualquier persona puede hacerlo si sabe leer y escribir. Hasta mi abuela puede crear un prompt efectivo.",
      author: "Ruth García",
      role: "Enunciado del método didáctico"
    },
    interactiveType: "intro"
  },
  {
    id: 6,
    slideNumber: 6,
    category: "Estructura Pedagógica",
    title: "Organización de las 60 Horas",
    subtitle: "Metodología orientada al saber hacer y al resultado tangible",
    lead: "El curso equilibra rigurosamente la teoría conceptual con la producción audiovisual en tiempo real.",
    bullets: [
      "20 Horas Teóricas: Fundamentos, vocabulario técnico, semántica de prompts y ética.",
      "40 Horas Prácticas: Talleres de laboratorio, edición en vivo y refinamiento de parámetros.",
      "15 Sesiones estructuradas de 4 horas cada una.",
      "Ciclo de clase: Demostración breve (15 min) → Práctica guiada (45 min) → Trabajo individual → Coevaluación.",
      "El Proyecto Final es transversal y se construye durante el transcurso de las 60 horas."
    ],
    metrics: [
      { label: "Horas Teóricas", value: "20h", detail: "33% Conceptual y semántica" },
      { label: "Horas Prácticas", value: "40h", detail: "67% Producción y montaje" },
      { label: "Total Horas", value: "60h", detail: "15 sesiones intensivas" }
    ],
    interactiveType: "modules"
  },
  {
    id: 7,
    slideNumber: 7,
    category: "Malla Curricular",
    title: "Los Cuatro Módulos de Aprendizaje",
    subtitle: "Ruta secuencial desde el concepto hasta la exportación final",
    lead: "Cada módulo entrega una competencia técnica verificable que alimenta al siguiente eslabón de la cadena de producción.",
    bullets: [
      "Módulo 1: Fundamentos de IA y Construcción de Prompts (instrucciones, evaluación e iteración).",
      "Módulo 2: Prompts para Guiones e Imágenes (storyboard, narrativa y coherencia visual).",
      "Módulo 3: Prompts para Audio y Video (voz en off, música, dirección de cámara y acción).",
      "Módulo 4: Integración y Evaluación del Proyecto (montaje, subtítulos, render y defensa)."
    ],
    interactiveType: "modules"
  },
  {
    id: 8,
    slideNumber: 8,
    category: "Impacto y Empleabilidad",
    title: "El Valor Real de Aprender este Tema",
    subtitle: "¿Cómo transformar este aprendizaje en oportunidades económicas?",
    lead: "La creación de recursos propios elimina costos de producción y acelera la capacidad de comercializar ideas.",
    bullets: [
      "¿Para qué aprenderlo? Para estimular la creatividad en entornos educativos, artísticos y comerciales.",
      "Ahorro directo de costos: Producir imágenes, locuciones y videos propios sin pagar bancos caros de recursos.",
      "Nuevas fuentes de ingresos: Ofrecer servicios de creación de reels publicitarios, guiones y contenido para marcas.",
      "Productividad exponencial: Lo que antes tomaba 3 semanas de producción ahora se prototipa en horas."
    ],
    interactiveType: "intro"
  },
  {
    id: 9,
    slideNumber: 9,
    category: "Pacto de Convivencia",
    title: "Reglas de Oro del Aula y Compromiso",
    subtitle: "Garantizando un entorno seguro, productivo y colaborativo",
    lead: "El pacto de aula es nuestro acuerdo compartido para maximizar el aprovechamiento de cada sesión.",
    bullets: [
      "Puntualidad rigurosa: Iniciar y concluir en el tiempo programado.",
      "Dispositivos en modo silencio: Foco absoluto durante las explicaciones técnicas.",
      "Participación activa: Preguntar, experimentar sin miedo a equivocarse y compartir hallazgos.",
      "Respeto y empatía: Retroalimentación constructiva entre compañeros.",
      "Pedir la palabra: Mantener el orden levantando la mano en intervenciones."
    ],
    interactiveType: "agreement"
  },
  {
    id: 10,
    slideNumber: 10,
    category: "Fundamento Técnico",
    title: "¿Qué es un Prompt Audiovisual?",
    subtitle: "De la orden textual básica a la dirección cinematográfica procedural",
    lead: "Un prompt no es una frase cualquiera: es un conjunto estructurado de directivas que programa la salida de un modelo de IA.",
    bullets: [
      "Prompt General: Una instrucción que orienta a una IA para realizar una tarea y generar una respuesta útil.",
      "Prompt Audiovisual: Inspira y condiciona la creación multimedia (imagen, video, sonido) especificando estética, plano, luz y ritmo.",
      "Ejemplo analógico: Un director de cine dando indicaciones a su iluminador, fotógrafo y actor.",
      "Ecosistema base instalado: ChatGPT, Google Gemini y Meta AI listos en smartphone o portátil."
    ],
    interactiveType: "prompt-lab"
  },
  {
    id: 11,
    slideNumber: 11,
    category: "Caso de Estudio Práctico",
    title: "Evolución de un Prompt: Vago vs Preciso",
    subtitle: "Caso: Campaña de concientización sobre el ahorro de agua",
    lead: "Compara el resultado entre una instrucción genérica y un prompt con verdadera ingeniería audiovisual.",
    comparison: {
      beforeLabel: "Idea Inicial (Vaga / Sin Estructura)",
      beforeText: "“Haz un video sobre ahorrar agua.”",
      afterLabel: "Instrucción de Ingeniería Audiovisual (Precisa / Estructurada)",
      afterText: "“Actúa como guionista y director audiovisual. Escribe un guion técnico de 30 segundos orientado a adolescentes. Presenta tres acciones cotidianas y realizables para ahorrar agua en el hogar. Usa un lenguaje dinámico, cercano y sin sermones aburridos. Entrega el resultado en una tabla con cuatro columnas: Número de escena, Plano y movimiento de cámara, Locución o texto en pantalla, y Duración en segundos.”",
      tableData: [
        { scene: "Escena 1 (0-6s)", camera: "Plano detalle (close-up) de un grifo goteando, cámara lenta 60fps.", narration: "Voz en off juvenil: '¿Sabías que una gota por segundo son 30 litros al día tirados a la basura?'", duration: "6 segundos" },
        { scene: "Escena 2 (6-14s)", camera: "Plano medio, adolescente cerrando la llave mientras se cepilla los dientes.", narration: "Voz en off: 'Acción 1: Cierra el grifo al cepillarte. Acción 2: Dúchate con tu canción favorita.'", duration: "8 segundos" },
        { scene: "Escena 3 (14-22s)", camera: "Plano general de jardín con regadera reciclada, luz solar natural brillante.", narration: "Voz en off: 'Acción 3: Riega plantas temprano con agua reutilizada de la cocina.'", duration: "8 segundos" },
        { scene: "Escena 4 (22-30s)", camera: "Plano frontal dinámico con texto tipográfico animado y logotipo ecológico.", narration: "Texto en pantalla: 'Pequeñas acciones, gran impacto. Únete al reto.' Música crescendo y corte a negro.", duration: "8 segundos" }
      ]
    },
    interactiveType: "prompt-lab"
  },
  {
    id: 12,
    slideNumber: 12,
    category: "Taller Modelo",
    title: "Práctica de la Sesión: Video de 10 Segundos",
    subtitle: "Aplicación inmediata en 40 minutos",
    lead: "Cada estudiante genera su primer prototipo audiovisual completo antes de finalizar la jornada.",
    bullets: [
      "Tiempo de ejecución: 40 minutos divididos en 4 fases de 10 min.",
      "Fase 1: Definición de mensaje, emoción central y público objetivo.",
      "Fase 2: Redacción del prompt con fórmula maestra (Rol + Tarea + Restricción + Tabla).",
      "Fase 3: Generación del activo visual y prueba de locución con IA.",
      "Fase 4: Exposición relámpago individual y coevaluación entre pares."
    ],
    interactiveType: "project"
  },
  {
    id: 13,
    slideNumber: 13,
    category: "Cierre & Evaluación",
    title: "Síntesis y Cumplimiento del Pacto",
    subtitle: "¿Logramos la meta general y el compromiso de clase?",
    lead: "Medimos el impacto real y evaluamos cuantitativa y cualitativamente la experiencia de aprendizaje.",
    bullets: [
      "Meta General: Producir escenas audiovisuales coherentes mediante prompts que describan acción, cámara y continuidad.",
      "Evaluación del pacto de aula del 1 al 5 en cumplimiento y satisfacción.",
      "Próxima sesión: 'Creación de documentos y guías PDF complejas mediante prompts estructurados'.",
      "Recordatorio: Explorar la amplia oferta formativa complementaria del INFOTEP."
    ],
    quote: {
      text: "El arte con tecnología es una ayuda idónea para la productividad, democratización y crecimiento de los seres humanos.",
      author: "Ruth García Medina",
      role: "Reflexión final del curso"
    },
    interactiveType: "rubric"
  },
  {
    id: 14,
    slideNumber: 14,
    category: "Contacto & Redes",
    title: "Conectemos y Creemos Juntos",
    subtitle: "Canales oficiales de Ruth García Medina",
    lead: "¿Deseas coordinar un taller, consultar sobre el curso o explorar asesorías en IA audiovisual? ¡Escríbeme directamente!",
    bullets: [
      "Facilitadora: Ruth García Medina",
      "Teléfono / WhatsApp: +1 (829) 299-0544",
      "Correo electrónico: marketingandcoach@gmail.com",
      "Google Classroom: Código de clase activo para participantes",
      "Grupo de WhatsApp oficial de soporte y recursos continuos"
    ],
    interactiveType: "contact"
  }
];

export const PROMPT_FORMULA_PARTS = {
  roles: [
    { id: "director", label: "Director Audiovisual Cinematográfico", snippet: "Actúa como un galardonado director de cine y comerciales de televisión." },
    { id: "scriptwriter", label: "Guionista de Storytelling Digital", snippet: "Actúa como un guionista experto en videos virales y retención en redes sociales." },
    { id: "art_director", label: "Director de Arte & Fotografía", snippet: "Actúa como un director de fotografía especializado en estética cinematográfica y lentes anamórficos." },
    { id: "voice_coach", label: "Diseñador Sonoro & Productor de Voz", snippet: "Actúa como un ingeniero de audio y director de locución publicitaria profesional." }
  ],
  tasks: [
    { id: "script_table", label: "Guion tabulado de 30s con planos de cámara", snippet: "Escribe un guion técnico audiovisual estructurado en una tabla de 4 columnas (Escena, Encuadre/Cámara, Diálogo/Voz, Duración)." },
    { id: "visual_storyboard", label: "Prompt para storyboard fotográfico hiperrealista", snippet: "Genera una descripción visual ultra-detallada para 4 fotogramas continuos, manteniendo consistente la vestimenta y rostro del protagonista." },
    { id: "voiceover_prompt", label: "Prompt para dirección de locución en ElevenLabs", snippet: "Diseña un guion de voz en off con anotaciones de pausas [pausa 1s], tono entusiasta, modulación cálida y énfasis rítmico." },
    { id: "video_runway", label: "Prompt para generador de video Runway Gen-3 / Pika", snippet: "Genera una directiva cinemática de movimiento de cámara continua (slow push-in), iluminación volumétrica y grano de película 35mm." }
  ],
  tones: [
    { id: "inspirational", label: "Inspirador & Emotivo", snippet: "Tono emotivo, inspiracional, con narrativa que apele a la superación y empatía." },
    { id: "educational", label: "Educativo & Dinámico", snippet: "Tono pedagógico, claro, ameno, sin tecnicismos innecesarios, ideal para jóvenes estudiantes." },
    { id: "corporate", label: "Corporativo de Alta Gama", snippet: "Tono sofisticado, profesional, enfocado en innovación y excelencia técnica." },
    { id: "humorous", label: "Cercano & Humorístico", snippet: "Tono juvenil, fresco, con toques sutiles de humor y lenguaje conversacional." }
  ],
  technicalParameters: [
    { id: "anamorphic", label: "Lente Anamórfico 35mm · Aspecto 16:9", snippet: "Shot on 35mm anamorphic lens, aspect ratio 16:9, shallow depth of field, f/1.8 bokeh, cinematic color grading." },
    { id: "vertical_reel", label: "Formato Vertical 9:16 · Alta Iluminación", snippet: "Aspect ratio 9:16, dynamic high-key studio lighting, vibrant colors, fast-paced composition for mobile devices." },
    { id: "slow_motion", label: "Cámara Lenta 120fps · Golden Hour", snippet: "Slow-motion 120fps, golden hour natural backlight, lens flare, crisp focus, 8k resolution, filmic texture." }
  ]
};

export const RUBRIC_CRITERIA = [
  {
    id: "prompt_clarity",
    name: "Claridad y Estructura del Prompt",
    weight: "25%",
    description: "El prompt incluye de manera inequívoca rol, tarea, restricciones de tiempo y formato de salida tabulado.",
    levels: [
      { score: 5, label: "Sobresaliente", detail: "Estructura impecable con variables cinematográficas claras." },
      { score: 4, label: "Notable", detail: "Instrucción clara aunque omite un parámetro menor de encuadre." },
      { score: 3, label: "Aceptable", detail: "Instrucción genérica que requirió varias correcciones manuales." },
      { score: 1, label: "Insuficiente", detail: "Instrucción ambigua sin formato ni delimitación de tiempo." }
    ]
  },
  {
    id: "visual_coherence",
    name: "Coherencia Narrativa y Visual",
    weight: "25%",
    description: "Las escenas generadas mantienen continuidad en personajes, paleta cromática e intención estética.",
    levels: [
      { score: 5, label: "Sobresaliente", detail: "Consistencia total de personajes y estilo visual entre planos." },
      { score: 4, label: "Notable", detail: "Mínimas variaciones de iluminación que no rompen la historia." },
      { score: 3, label: "Aceptable", detail: "Cambios notables de estilo que dificultan la continuidad." },
      { score: 1, label: "Insuficiente", detail: "Escenas inconexas sin relación estilística ni narrativa." }
    ]
  },
  {
    id: "audio_integration",
    name: "Integración de Audio y Locución",
    weight: "25%",
    description: "Sincronización rítmica entre la voz generada por IA, la música de fondo y los cortes de video.",
    levels: [
      { score: 5, label: "Sobresaliente", detail: "Voz expresiva, mezcla balanceada y sincronía exacta con la acción." },
      { score: 4, label: "Notable", detail: "Buen ritmo aunque el volumen de la música compite ligeramente." },
      { score: 3, label: "Aceptable", detail: "Voz monótona o pausas desincronizadas con las imágenes." },
      { score: 1, label: "Insuficiente", detail: "Audio ininteligible, sin musicalización o ausente." }
    ]
  },
  {
    id: "compliance_timing",
    name: "Cumplimiento del Formato y Duración",
    weight: "25%",
    description: "El producto final respeta la duración establecida (10s a 30s) y los requisitos técnicos de entrega.",
    levels: [
      { score: 5, label: "Sobresaliente", detail: "Duración exacta al segundo, resolución HD y subtítulos legibles." },
      { score: 4, label: "Notable", detail: "Cumple la duración pero faltó pulir la tipografía de subtítulos." },
      { score: 3, label: "Aceptable", detail: "Se excede o queda corto por más de 5 segundos." },
      { score: 1, label: "Insuficiente", detail: "No cumple con la duración ni el formato requerido." }
    ]
  }
];
