/*
  DATOS DEL PORTAFOLIO
  Este archivo concentra casi todo el contenido editable del sitio.

  Para cambiar textos del portafolio, edita title, label, body, details o evidence.
*/

const portfolioData = {
  profile: {
    name: "Daniel Fernando Xiquin Tezén",
    summary:
      "Estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información. Este portafolio reúne evidencias, reflexiones y aprendizajes desarrollados durante el curso Ciencias de la Vida.",
    photo: "../../Portafolio_1/Alumnos ENA-32 (2).jpg",
    caption: "Perfil académico usado como presentación del portafolio.",
    facts: [
      { label: "Carrera", value: "Ingeniería en Ciencias de la Computación y Tecnologías de la Información" },
      { label: "Universidad", value: "Universidad del Valle de Guatemala" },
      { label: "Curso", value: "Ciencias de la Vida, ciclo 1 de 2026" },
      { label: "Enfoque", value: "Aprendizaje aplicado, reflexión crítica y conexión con la tecnología" }
    ]
  },

  homeBlocks: [
    {
      label: "Introducción",
      title: "Quién soy",
      body:
        "Soy estudiante de ingeniería y como tal, suelo relacionar el aprendizaje con sistemas, lógica, análisis y resolución de problemas. Aunque la biología no siempre fue una materia que percibiera como cercana a mi carrera, el curso me permitió comprender que los procesos biológicos también pueden analizarse como sistemas complejos conectados entre sí."
    },
    {
      label: "Intereses biológicos",
      title: "Lo que me llama la atención",
      body:
        "Mis intereses se orientan hacia la biodiversidad, los ecosistemas, la vida natural, la vida submarina y los procesos que permiten mantener el equilibrio de los seres vivos. Me interesa especialmente entender cómo la observación, la tecnología y el análisis pueden apoyar el estudio de estos fenómenos."
    },
    {
      label: "Reflexión actualizada",
      title: "Cómo cambió mi percepción",
      body:
        "Durante el semestre comprendí que la biología aporta una cultura general importante para cualquier profesional. El curso me ayudó a manejar conceptos aplicables en contextos reales, especialmente en genética, evolución, biogeografía y biodiversidad. Las actividades prácticas fueron las que más fortalecieron mi aprendizaje porque me permitieron conectar teoría, evidencia y experiencia."
    }
  ],

  theory: {
    integrativeCases: [
      {
        label: "Caso 1",
        title: "Primer caso integrador",
        body:
          "El primer caso integrador mostró que mi preparación todavía necesitaba más profundidad y mejor organización. El resultado fue 67/100, con aproximadamente una hora de estudio por tema evaluado. El equipo trabajó de forma parcialmente coordinada, pero avanzó lento y se abrumó en las últimas preguntas.",
        details: ["Resultado: 67/100", "Unidades evaluadas: 4", "Método: apuntes, imágenes, cuaderno y anotaciones"],
        evidence: [{ label: "Caso integrador PDF", href: "../01_Casos_Integradores/Caso1/Caso_integrador.pdf" }]
      },
      {
        label: "Caso 2",
        title: "Segundo caso integrador",
        body:
          "En el segundo caso integrador el trabajo fue más ordenado y estratégico. El equipo leyó, comprendió el caso, analizó interrogantes, dividió preguntas independientes y formuló respuestas en conjunto. La mejora en organización y tiempo de estudio se reflejó en un resultado de 91.",
        details: ["Resultado: 91", "Tiempo: 3 horas por unidad", "Estrategia: lectura, análisis, delegación y revisión grupal"],
        evidence: [{ label: "Evidencia del caso", href: "../01_Casos_Integradores/Caso2/Caso2.jpeg" }]
      },
      {
        label: "Caso 3",
        title: "Tercer caso integrador",
        body:
          "El tercer caso integrador se enfocó en biodiversidad, biodiversidad de Guatemala, evolución, genética y biogeografía. El proceso mantuvo la estrategia organizada del caso anterior, con estudio previo, uso de apuntes y división de tareas.",
        details: ["Tiempo: 2 horas por unidad", "Tema central: biodiversidad"]
      }
    ],

    favoriteActivities: [
      {
        label: "Favorita 1",
        title: "Actividad de biodiversidad: documental",
        body:
          "Fue una de mis actividades favoritas porque permitió acercarme a la biodiversidad desde una mirada documentada y narrada por expertos. Ayudó a comprender la importancia de la biodiversidad y el impacto humano sobre el planeta.",
        evidence: [{ label: "Actividad Biodiversidad PDF", href: "../02_Actividades_Favoritas/Actividad Biodiversidad - Documental.pdf" }]
      },
      {
        label: "Favorita 2",
        title: "Actividad de biogeografía",
        body:
          "Esta actividad conectó distribución geográfica, evolución y deriva continental. Me permitió entender cómo la ubicación de los organismos puede revelar procesos históricos y ambientales importantes.",
        evidence: [{ label: "Actividad Biogeografía DOCX", href: "../02_Actividades_Favoritas/Actividad Biogeografía.docx" }]
      },
      {
        label: "Favorita 3",
        title: "BioHunt",
        body:
          "BioHunt destacó porque trasladó el aprendizaje al entorno cercano. A diferencia de una actividad completamente teórica, permitió observar biodiversidad real y relacionarla con conceptos trabajados en clase.",
        evidence: [{ label: "Presentación BioHunt", href: "../02_Actividades_Favoritas/BioHunt_Presentacion.pptx" }]
      }
    ],

    leastFavoriteActivities: [
      {
        label: "No llamativa 1",
        title: "Actividad de genética",
        body:
          "No fue una actividad llamativa porque resultó demasiado larga, cansada y con una sensación fuerte de autoaprendizaje. Considero que podría mejorar si se relacionara con conceptos más concretos, menos extensos y con una guía más gradual.",
        evidence: [{ label: "Actividad Genética PDF", href: "../03_Actividades_No_Favoritas/Actividad_11_Genética.pdf" }]
      }
    ],

    theoryShorts:
      "Para los cortos de teoría dediqué aproximadamente media hora de estudio, utilizando apuntes del cuaderno, repasos y videos explicativos. Considero que esta fue una de las áreas donde tuve más dificultad, porque no comprendía completamente la información y debí dedicar más tiempo de preparación."
  },

  lab: {
    passports: [
      {
        label: "Pasaporte útil",
        title: "Pasaporte 10: genética y procesos evolutivos",
        body:
          "Este pasaporte fue útil porque amplió términos vistos en teoría y me preparó para el corto, el vocabulario y los conceptos aplicados en la práctica de laboratorio.",
        evidence: [{ label: "Pasaporte 10 PDF", href: "../05_Pasaportes/Útil/Pasaporte_10.pdf" }]
      },
      {
        label: "Pasaporte menos útil",
        title: "Pasaporte 8: metabolismo",
        body:
          "Este pasaporte fue menos útil porque contenía demasiada información conceptual ya vista en teoría. Hubiera sido más conveniente enfocarlo en la preparación experimental y no únicamente en conceptos.",
        evidence: [{ label: "Pasaporte 8 PDF", href: "../05_Pasaportes/Menos_útil/Pasaporte_8.pdf" }]
      }
    ],

    labShorts:
      "Los cortos de laboratorio fortalecieron mi aprendizaje de manera significativa. Al ser evaluaciones con punteo, me impulsaron a preparar mejor los pasaportes, estudiar con más atención y comprender mejor la práctica antes de realizarla.",

    labs: [
      {
        label: "Favorita 1",
        title: "Práctica 11: biotecnología aplicada",
        body:
          "Fue una práctica favorita porque permitió trabajar con herramientas y procesos relacionados con la biotecnología, mostrando cómo la biología puede aplicarse en contextos reales de investigación.",
        evidence: [{ label: "Informe 11 PDF", href: "../07_Laboratorios/Actividades-favoritas/Informe_11.pdf" }]
      },
      {
        label: "Favorita 2",
        title: "Práctica 12: biodiversidad urbana",
        body:
          "Esta práctica fue significativa porque llevó el aprendizaje al entorno real mediante observación de biodiversidad urbana. Permitió reconocer que la biología también se estudia fuera del aula.",
        evidence: [{ label: "Informe 12 PDF", href: "../07_Laboratorios/Actividades-favoritas/Informe_12.pdf" }]
      },
      {
        label: "Favorita 3",
        title: "Práctica 13: biodiversidad de Guatemala",
        body:
          "Fue una práctica destacada porque permitió conocer colecciones biológicas y comprender mejor la biodiversidad de Guatemala desde un entorno académico y aplicado.",
        evidence: [{ label: "Informe 13 PDF", href: "../07_Laboratorios/Actividades-favoritas/Informe_13.pdf" }]
      },
      {
        label: "Menos favorita",
        title: "Práctica 10: genética y procesos evolutivos",
        body:
          "Esta actividad fue menos favorable porque se percibió simple y cansada. Para mejorarla, podría integrarse una dinámica más aplicada o visual que conecte mejor los procedimientos con su utilidad práctica.",
        evidence: [{ label: "Informe práctica 10 PDF", href: "../07_Laboratorios/Actividad-no-favorita/Informe_práctica_10.pdf" }]
      }
    ],

    csi:
      "En el CSI apliqué conocimientos de biodiversidad, factores que afectan la fotosíntesis, presencia de enzimas en tejidos, colecciones biológicas, reproducción celular y sus fases. La actividad funcionó como una integración de habilidades desarrolladas en laboratorio."
  },

  finalReflection:
    "Mi opinión general del curso es positiva porque permite adquirir una cultura general de biología y manejar conceptos aplicables a contextos reales, incluso para profesionales que no se dedican directamente a esta área. Aprendí principalmente sobre genética, evolución, biogeografía y biodiversidad. Las actividades prácticas, tanto de teoría como de laboratorio, fueron las que más me ayudaron porque me permitieron explorar conceptos en experiencias concretas. También enfrenté dificultades con actividades que no me resultaban tan cercanas o que se sentían demasiado extensas, pero aun así las realicé con esfuerzo. Considero que el curso podría mejorar reduciendo la carga de actividades, ya que consume bastante tiempo. Relaciono la biología con la Ingeniería en Computación porque la tecnología puede desarrollar herramientas, sistemas y métodos que contribuyan a la investigación, práctica y desarrollo de las ciencias biológicas."
};
