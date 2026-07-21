/** Artículos del blog — calendario editorial Manus (Mes 2–6) */
export const blogPostsExtra = [
  {
    "slug": "automatizacion-procesos-pymes-mexicanas",
    "title": "Automatización de procesos: guía para PyMEs mexicanas",
    "description": "Guía paso a paso de automatización de procesos en México para PyMEs: qué automatizar, en qué orden y cómo evitar digitalizar el caos.",
    "datePublished": "2026-08-01",
    "keyword": "automatización de procesos México",
    "sections": [
      {
        "h2": "Introducción: automatizar no es comprar otra herramienta",
        "paragraphs": [
          "La automatización de procesos en México se vende como magia: “conecta todo y ahorra horas”. En PyMEs reales el problema suele ser otro: procesos que viven en Excel, WhatsApp y la memoria de tres personas. Automatizar eso sin ordenar primero multiplica errores a mayor velocidad.",
          "Esta guía está escrita para dueños y gerentes de operaciones de PyMEs mexicanas que quieren reducir trabajo manual sin montar un departamento de TI. El foco es priorizar, medir y entregar en fases. En Arissa el ticket mínimo de implementación es USD 2,000 porque por debajo es difícil dejar algo estable y adoptado.",
          "Si llegaste buscando “automatización de procesos México” porque ya pagas licencias y aun así tu equipo copia datos a mano, este artículo te da un método concreto: mapa, criterios, checklist y un caso ilustrativo. No necesitas un ERP nuevo para empezar; necesitas un cuello de botella bien elegido."
        ]
      },
      {
        "h2": "El problema: herramientas sin proceso (o proceso sin dueño)",
        "paragraphs": [
          "Síntomas típicos: cotizaciones en una hoja, clientes en un CRM a medias, inventario en otra pantalla, seguimiento en chats. Cada área “cumple”, pero el handoff falla. Los reportes semanales se arman el domingo. Nadie sabe cuál es la fuente de verdad de un pedido o un lead.",
          "Otro problema es la falsa automatización: un Zapier que mueve filas sin validar, un formulario que llega a un inbox que nadie revisa, o un bot de WhatsApp que promete respuestas mientras el equipo sigue anotando en papel. La automatización sin reglas de negocio es tubería rota.",
          "En PyMEs mexicanas también pesa la dependencia de personas clave. Si “solo María sabe cómo se factura el caso especial”, ninguna integración te salva. Primero documentas el caso especial; después lo automatizas. Esa disciplina es lo que separa proyectos que reducen horas de proyectos que generan tickets eternos.",
          "La métrica que falta: horas semanales de trabajo manual, tasa de error, tiempo de ciclo (lead → cerrado, pedido → entregado). Sin números, “automatizar” es una opinión de comité."
        ]
      },
      {
        "h2": "La solución: automatizar por capas y por riesgo",
        "paragraphs": [
          "Capa 1 — Captura limpia: un solo formulario o pantalla donde nace el dato, con validaciones. Capa 2 — Estados visibles: nuevo, en proceso, bloqueado, cerrado. Capa 3 — Notificaciones con dueño. Capa 4 — Integraciones entre sistemas cuando el flujo manual ya es estable. Capa 5 — Reportes automáticos.",
          "Orden recomendado para PyMEs: (1) el proceso que más dinero o tiempo quema, (2) el que más errores genera, (3) el que más depende de una persona. No empieces por lo “interesante” técnicamente. Empieza por lo que duele el viernes a las 6 pm.",
          "Técnicamente, a veces basta con un módulo a medida + notificaciones + tablero. Otras veces conviene integrar CRM existente con hojas controladas o ERP. La decisión no es “código vs no-code”; es “¿quién mantiene esto en 12 meses?”. Si nadie en tu equipo puede operar un flujo frágil de 14 conectores, prefieres un sistema más simple y documentado.",
          "Criterios de éxito por fase: reducir X horas/semana, bajar errores de captura Y%, o acortar tiempo de respuesta a Z horas. Dos o tres métricas bastan. Si no puedes medir, no puedes priorizar la fase 2.",
          "Tabla mental útil: si el proceso ocurre <5 veces al mes, quizá no vale automatizar aún. Si ocurre diario y con reglas claras, sí. Si ocurre diario pero las reglas cambian cada semana, primero estabiliza reglas. Automatización premia la consistencia.",
          "En México, considera también facturación, permisos de usuarios y continuidad: ¿qué pasa si el freelancer que armó el Zap desaparece? Un proveedor serio deja accesos, documentación mínima y un runbook de fallos. Eso también es automatización de procesos: automatizar la operación, no solo el happy path."
        ]
      },
      {
        "h2": "Caso práctico: de estatus en WhatsApp a tablero semanal",
        "paragraphs": [
          "Imagina una PyME de servicios B2B en Guadalajara: 12 personas, cotizaciones en Sheets, seguimiento en WhatsApp, facturación en otro sistema. Pierden ~12 horas semanales armando “¿en qué va esto?” y cometen errores de versión de cotización.",
          "Fase 1 (alcance cerrado): catálogo de servicios, flujo de cotización con estados, asignación de ejecutivo, tablero semanal y alerta si una cotización lleva 5 días sin movimiento. Sin ERP todavía. Resultado esperado en 4–8 semanas: menos mensajes de estatus y una sola versión de la cotización.",
          "Fase 2 se decide con datos: ¿integrar facturación? ¿portal para el cliente? ¿automatizar recordatorios? El punto es no comprar “automatización total” el día uno. Arissa trabaja así: diagnóstico o mapa corto, luego fase medible desde USD 2,000."
        ]
      },
      {
        "h2": "FAQ operativa antes de invertir",
        "paragraphs": [
          "¿Por dónde empezar si todo duele? Por el proceso con dueño claro y volumen alto. ¿Necesito IA? Casi nunca al inicio; primero estados y datos limpios. ¿Cuánto tarda? Un MVP útil se mide en semanas, no en un fin de semana mágico. ¿Qué presupuesto? Depende del alcance; evita cotizaciones “todo incluido” sin exclusiones.",
          "Descarga también nuestro checklist de 20 procesos automatizables para marcar prioridades con tu equipo. Luego agenda un diagnóstico si el mapa ya muestra un cuello de botella de software, no solo de disciplina."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué es automatización de procesos en una PyME?",
        "a": "Es reducir pasos manuales repetibles con reglas claras: captura, estados, notificaciones e integraciones, midiendo horas y errores."
      },
      {
        "q": "¿Empiezo con un ERP grande?",
        "a": "Casi nunca. Primero el flujo crítico con alcance cerrado. Un ERP sin proceso limpio digitaliza el caos."
      },
      {
        "q": "¿No-code basta?",
        "a": "A veces para prototipos. Si hay roles, auditoría o reglas complejas, un módulo a medida suele ser más mantenible."
      },
      {
        "q": "¿Cuánto cuesta en México?",
        "a": "Varía por alcance. En Arissa las fases parten desde USD 2,000; el diagnóstico acreditable ayuda a no cotizar a ciegas."
      },
      {
        "q": "¿Cómo sé si funcionó?",
        "a": "Define 2–3 métricas antes: horas manuales, tiempo de ciclo o tasa de error. Sin baseline, no hay éxito medible."
      }
    ],
    "ctaText": "Si tu PyME ya paga herramientas pero sigue copiando datos a mano, agenda un diagnóstico de automatización o descarga el checklist de 20 procesos.",
    "leadMagnet": "checklist-automatizacion-procesos"
  },
  {
    "slug": "como-elegir-consultora-software-mexico",
    "title": "Cómo elegir una consultora de software en México",
    "description": "Comparativo práctico para elegir consultora de software en México: señales de buen fit, red flags y preguntas que debes hacer antes de firmar.",
    "datePublished": "2026-08-15",
    "keyword": "consultora de software México",
    "sections": [
      {
        "h2": "Introducción: no elijas por el deck más bonito",
        "paragraphs": [
          "Elegir una consultora de software en México suele terminar en una competencia de slides: logos, “metodologías ágiles” y promesas de transformación. El dueño necesita otra cosa: alguien que entienda su proceso, cierre alcance y entregue en producción sin sorpresas eternas.",
          "Esta guía compara criterios reales —no marketing— para decidir entre freelancers, fábricas de software, agencias digitales y consultoras enfocadas en sistemas a medida. Está pensada para clínicas y empresas con ticket de proyecto a partir de unos USD 2,000, donde la calidad mínima importa.",
          "Si ya tienes tres cotizaciones incomparables, usa esta lista para forzar supuestos por escrito. El objetivo no es “la más barata”; es la que reduce riesgo de scope, adopción y mantenimiento."
        ]
      },
      {
        "h2": "El problema: cotizaciones que no se pueden comparar",
        "paragraphs": [
          "Una propuesta habla de horas; otra de “módulos”; otra incluye discovery infinito. Una omite capacitaciones; otra omite hosting; otra asume que tus datos están limpios. Comparar precios en ese escenario es autoengaño.",
          "También confunde el branding: agencias que hacen landings se presentan como “desarrollo de software empresarial”; freelancers excelentes se ven “pequeños” frente a consultoras con 40 account managers. El tamaño no garantiza fit. El fit se ve en exclusiones, riesgos nombrados y criterios de aceptación.",
          "En México aparece además la tensión USD vs MXN, facturación y soporte post go-live. Pregunta eso al inicio. Un precio atractivo sin dueño de soporte es deuda disfrazada."
        ]
      },
      {
        "h2": "La solución: un scorecard simple de 8 criterios",
        "paragraphs": [
          "1) Entienden tu proceso as-is con un ejemplo real. 2) Separan diagnóstico / fase 1 / backlog. 3) Escriben exclusiones. 4) Definen métricas de éxito. 5) Hablan de adopción (capacitación, no solo pantallas). 6) Clarifican propiedad de código y accesos. 7) Explican cómo manejan cambios de alcance. 8) Dejan canal y SLA de soporte inicial.",
          "Pide una propuesta corta con supuestos. Si no pueden listar supuestos, no tienen estimación: tienen deseo. Una buena consultora de software en México te dirá qué no harán en la fase 1. Esa honestidad es señal de senioridad.",
          "Compara contra tu costo actual: horas en Excel, leads perdidos, errores. Si el proveedor no pregunta por eso, probablemente venderá features, no resultados.",
          "Tabla comparativa mental: freelancer (rápido, riesgo de continuidad), fábrica (capacidad, riesgo de communication lag), agencia marketing+dev (bueno en captación, a veces débil en operación interna), consultora a medida (mejor cuando el proceso es el producto). Arissa se sitúa en el último grupo: captación digital, sistemas a medida e integración de procesos, con diagnóstico acreditable.",
          "Red flags: “lo tenemos listo en una semana” para un sistema multi-rol; precio cerrado enorme sin discovery; no quieren hablar con usuarios reales; no documentan; prometen IA como respuesta a un problema de captura básica.",
          "También evalúa la química operativa: ¿responden con ejemplos de tu industria o con generalidades? ¿Pueden describir un fracaso pasado y qué cambiaron? Una consultora madura habla de trade-offs. Una inmadura solo habla de “excelencia”.",
          "En México, pregunta por facturación, horarios de soporte y si el equipo que vende es el que construye. La distancia entre account y desarrollo es una de las mayores fuentes de malentendidos en proyectos de software empresarial.",
          "No subestimes referencias verificables. Aunque no publiquen marcas, deberían poder describir un caso con métricas y restricciones. Si solo hay testimonios vagos (“fueron muy profesionales”), pide detalle del problema y del entregable."
        ]
      },
      {
        "h2": "Caso práctico: tres propuestas, una decisión",
        "paragraphs": [
          "Una clínica recibe: (A) landing + ads por bajo costo, (B) CRM genérico + consultoría de configuración, (C) fase 1 a medida de landing + CRM/agenda con métricas. Sin scorecard, gana A por precio. Con scorecard, descubren que el dolor es respuesta y no-shows, no creatividades. C encaja; A se vuelve complemento después.",
          "La lección: elige la propuesta que ataca el cuello de botella medible. Luego escala. Eso es seleccionar consultora con criterio de operaciones, no de moda tecnológica.",
          "Documento útil: pide un one-pager de exclusiones de la fase 1. Si se niegan, interpreta el silencio. El precio sin borde no es precio: es apertura de negociación eterna.",
          "Finalmente, alinea incentivos: pagos por hitos de entrega usable, no 100% por adelantado sin protección. Un esquema justo protege a ambas partes y filtra proveedores desesperados o opacos."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Preguntas exactas para tu próxima llamada",
        "paragraphs": [
          "¿Qué queda fuera del precio? ¿Quién es interlocutor técnico? ¿Cómo miden adopción? ¿Qué pasa si el alcance crece? ¿Quién hospeda y quién paga? ¿Puedo ver un ejemplo de propuesta con exclusiones? Si las respuestas son vagas, sigue buscando."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué es una consultora de software a medida?",
        "a": "Un equipo que diseña e implementa sistemas alrededor de tu proceso, con alcance por fases, no solo una plantilla renombrada."
      },
      {
        "q": "¿Mejor freelance o consultora?",
        "a": "Depende de complejidad y continuidad. Multi-rol, integraciones y soporte suelen requerir un equipo con proceso."
      },
      {
        "q": "¿Debo pedir RFP enorme?",
        "a": "No al inicio. Un brief con flujo real + scorecard basta para comparar. El RFP largo suele generar propuestas genéricas."
      },
      {
        "q": "¿El diagnóstico vale la pena?",
        "a": "Sí cuando el problema es difuso. En Arissa cuesta USD 200–500 y es acreditable al proyecto."
      },
      {
        "q": "¿Cómo evitar vendor lock-in?",
        "a": "Exige accesos, documentación y claridad de propiedad en contrato. Desconfía de cajas negras."
      }
    ],
    "ctaText": "Si estás comparando proveedores, contáctanos con tu scorecard. Te respondemos con supuestos claros o te diremos si no somos buen fit."
  },
  {
    "slug": "integracion-sistemas-conecta-herramientas",
    "title": "Integración de sistemas: conecta tus herramientas y ahorra horas",
    "description": "Caso de uso de integración de procesos software en México: cómo conectar CRM, sheets y ERP sin copiar datos a mano.",
    "datePublished": "2026-09-01",
    "keyword": "integración de procesos software",
    "sections": [
      {
        "h2": "Introducción: tus herramientas no se hablan (y tu equipo paga el precio)",
        "paragraphs": [
          "Tener CRM, ERP, agenda y hojas de cálculo no significa tener operación integrada. Si el dato viaja por copy-paste, WhatsApp o “exportar CSV los viernes”, tienes islas. La integración de procesos software existe para definir qué dato es maestro, quién lo actualiza y qué se dispara cuando cambia un estado.",
          "Esta nota es un caso de uso práctico para empresas en México que ya gastan en licencias pero siguen perdiendo horas en handoffs. No es un catálogo de conectores; es un método para integrar sin romper la operación.",
          "En Arissa tratamos la integración como fase con entregable y monitoreo, no como “un Zap y listo”. El ticket mínimo de proyecto es USD 2,000 porque una integración seria incluye pruebas, permisos y un plan cuando falle."
        ]
      },
      {
        "h2": "El problema: múltiples verdades y cero dueño del dato",
        "paragraphs": [
          "Comercial actualiza el CRM; operaciones vive en una hoja; finanzas confía en el ERP; dirección arma un Excel “oficial” cada mes. Tres números distintos para “pedidos abiertos”. Nadie miente: nadie comparte contrato de datos.",
          "Los síntomas: retrabajo, reclamos de clientes por estatus contradictorios, inventarios que no cuadran, y miedo a automatizar porque “si conectamos, se rompe”. Ese miedo es racional cuando no hay IDs comunes ni reglas de conflicto.",
          "Integrar sin mapear el as-is solo acelera el caos. Primero el mapa de flujos; después el conector."
        ]
      },
      {
        "h2": "La solución: contratos de datos + flujos delgados",
        "paragraphs": [
          "Paso 1: inventario de sistemas y campos críticos. Paso 2: elegir maestro por entidad (cliente, pedido, cita, SKU). Paso 3: definir eventos (creado, aprobado, cancelado). Paso 4: implementar un flujo delgado de punta a punta. Paso 5: monitoreo y runbook.",
          "Prefiere pocas integraciones confiables a un spaghetti de 20 automatizaciones. Un middleware o módulo puente ayuda cuando las APIs son pobres o inestables. A veces la mejor “integración” es un formulario controlado que alimenta dos sistemas con validación.",
          "Seguridad: least privilege, tokens rotables, logs. En contextos clínicos o con PII, la integración no es solo técnica: es de acceso y retención. Documenta qué viaja y qué no.",
          "Métricas: horas de captura doble eliminadas, % de registros con ID consistente, incidentes de sync por mes, tiempo para reconciliar diferencias. Si no mides incidentes, celebrarás un go-live frágil.",
          "Stack típico en PyMEs mexicanas: CRM ↔ hoja controlada ↔ ERP/facturación; o agenda ↔ CRM clínico. El patrón importa más que la marca del conector.",
          "Ejemplo de contrato de datos: el CRM es maestro de “cliente”; el ERP es maestro de “factura”; el módulo a medida es maestro de “cotización”. Los IDs se propagan; los conflictos se resuelven con regla explícita (última escritura gana solo si el campo no es financiero, etc.).",
          "Pruebas: sandbox primero, luego piloto con un equipo, luego expansión. Integra con feature flags mentales: si el sync falla, el equipo debe poder operar en modo degradado documentado. Sin plan B, la integración es un SPOF.",
          "Costo oculto: mantener mapeos cuando un vendor cambia API. Presupuesta horas de mantenimiento anual. Una integración “lista y olvidada” es un mito en software empresarial vivo."
        ]
      },
      {
        "h2": "Caso práctico: cotización → pedido → estatus",
        "paragraphs": [
          "Empresa de uniformes: cotización compleja en Sheet, pedido en correo, estatus en WhatsApp. Se implementó flujo: cotización aprobada genera pedido con ID, estatus visible al ejecutivo, alerta de retraso. Integración puntual con inventario cuando existía SKU confiable.",
          "Resultado esperado: menos llamadas de “¿cómo va?”, menos versiones de cotización, y una base para fase 2 (portal cliente). El ahorro no fue “magia de API”; fue una sola narrativa del pedido.",
          "Si tu stack incluye WhatsApp Business, trátalo como canal, no como base de datos. La integración correcta registra el resultado del chat en el CRM con estado y responsable. Dejar la verdad en el teléfono de recepción es el anti-patrón más caro de 2026."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Cuándo no integrar todavía",
        "paragraphs": [
          "Si los catálogos están sucios, si no hay dueño del proceso, o si el volumen es mínimo, limpia primero. Integrar basura produce basura sincronizada en tres sistemas. Un diagnóstico de 1–2 semanas suele costar menos que deshacer una mala integración."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué es integración de procesos software?",
        "a": "Conectar sistemas y reglas para que el dato fluya con dueño, estados y menos captura manual."
      },
      {
        "q": "¿API es obligatoria?",
        "a": "Ideal sí. Si no hay API estable, se diseñan puentes controlados o módulos intermedios con validación."
      },
      {
        "q": "¿Cuánto tarda?",
        "a": "Un flujo delgado puede ser semanas; un mapa completo multi-sistema, más. Se entrega por fases."
      },
      {
        "q": "¿Qué pasa si falla la sync?",
        "a": "Debe existir monitoreo, alerta y runbook. Sin eso, la integración es un riesgo operativo."
      },
      {
        "q": "¿Por dónde empezar?",
        "a": "Por el handoff que más dinero o tiempo quema, con IDs claros y un solo flujo punta a punta."
      }
    ],
    "ctaText": "Si tu equipo copia datos entre CRM, sheets y ERP, agenda un diagnóstico de integración y priorizamos un flujo delgado medible."
  },
  {
    "slug": "diseno-ui-ux-software-empresarial",
    "title": "Diseño UI/UX en software empresarial: por qué importa la adopción",
    "description": "Por qué el diseño UI/UX en software empresarial determina adopción, errores y ROI — con criterios prácticos para dueños no diseñadores.",
    "datePublished": "2026-09-15",
    "keyword": "diseño UI/UX software empresarial",
    "sections": [
      {
        "h2": "Introducción: el software bonito que nadie usa",
        "paragraphs": [
          "En software empresarial, el diseño UI/UX no es decoración: es la diferencia entre un sistema adoptado y un expediente caro que convive con Excel. Si la captura pide 30 campos “por si acaso”, el usuario inventa atajos. Si el flujo no coincide con el trabajo real, el sistema pierde.",
          "Esta guía explica, en español de México y sin jerga vacía, qué mirar como dueño o líder de operaciones cuando te proponen pantallas. El objetivo es adopción medible, no premios de estética.",
          "Arissa diseña interfaces alrededor de roles y tareas: recepción, ejecutivo, supervisor, admin. La belleza importa; la claridad manda."
        ]
      },
      {
        "h2": "El problema: features sin flujo",
        "paragraphs": [
          "Equipos piden “un módulo de reportes”, “un CRM”, “una app”. Llegan pantallas densas, menús infinitos y validaciones hostiles. Capacitación de un día no arregla un modelo mental roto. A las dos semanas, WhatsApp vuelve a ser el sistema.",
          "Otro fallo: diseñar para el sponsor (dirección) y no para quien captura. El dashboard queda lindo; el formulario diario es un castigo. El ROI se juega en la captura, no en el slide del comité."
        ]
      },
      {
        "h2": "La solución: UI/UX como reducción de fricción",
        "paragraphs": [
          "Principios prácticos: menos campos al inicio; defaults inteligentes; estados visibles; lenguaje del negocio (no “entity_id”); permisos que esconden lo irrelevante; feedback inmediato al guardar; diseño responsive si hay uso en piso o recepción.",
          "Pruebas con 3–5 usuarios reales antes del go-live. Observa dónde dudan. Mide tiempo de tarea y tasa de error. Itera. Eso es UX serio en software empresarial: evidencia, no opiniones de gusto.",
          "Accesibilidad básica: contraste, tamaños tocables, no depender solo del color. En clínicas y operaciones, fatiga y prisa son el contexto real.",
          "Tabla: “bonito” vs “usable”. Bonito sin jerarquía falla. Usable con tipografía clara y espaciado gana. El brand puede vivir en header y CTA; el cuerpo debe ser escaneable en 3 segundos.",
          "En proyectos a medida, el diseño no es una fase cosmética final: va con el mapa de procesos. Si el proceso está mal, ninguna UI lo salva. Por eso en Arissa el discovery incluye pantallas de flujo, no solo wireframes decorativos.",
          "Patrones que funcionan en operaciones: tablas con filtros guardados, acciones masivas con confirmación, vacíos con CTA (“aún no hay pedidos — crear”), y mensajes de error que digan qué corregir. Evita modales en cascada. Evita jerga inglesa si tu equipo habla en términos de negocio mexicanos.",
          "Microcopy: “Guardar borrador” vs “Enviar a aprobación” cambia el comportamiento. Etiqueta estados con verbos del proceso real. Un buen UI/UX de software empresarial se nota cuando un usuario nuevo completa la tarea crítica en la primera sesión con ayuda mínima.",
          "Design system ligero: espaciado, tipografía, botones primarios/secundarios, y color de estado (éxito, alerta, bloqueo). No necesitas un sistema de 200 componentes el día uno; necesitas consistencia en el camino crítico."
        ]
      },
      {
        "h2": "Caso práctico: de 22 campos a 7 + progresivos",
        "paragraphs": [
          "Un equipo de ventas B2B tenía un formulario de alta de 22 campos obligatorios. La gente ponía “N/A”. Se rediseñó: 7 campos para crear, el resto bajo “completar después”, con recordatorio al ejecutivo. Tiempo de alta bajó; calidad de datos subió porque los campos críticos sí se llenaban.",
          "Lección: UX reduce campos hasta el mínimo que desbloquea el siguiente estado. El resto se pide cuando el valor ya está en juego.",
          "Métrica de UX olvidada: número de preguntas a “la persona que sí sabe”. Si después del go-live ese número no baja, el diseño falló aunque la demo hubiera lucido bien."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Qué pedir a tu proveedor",
        "paragraphs": [
          "Flujos por rol, prototipo clickeable del camino crítico, criterios de aceptación de usabilidad, y plan de ajustes post go-live. Si solo entregan mockups estáticos sin prueba, estás comprando riesgo de adopción."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿UI y UX son lo mismo?",
        "a": "UI es interfaz; UX es la experiencia de completar el trabajo. En empresarial, UX incluye tiempos, errores y entrenamiento."
      },
      {
        "q": "¿Necesito un diseñador de producto?",
        "a": "Necesitas alguien que pruebe con usuarios reales. Puede ser parte del equipo de la consultora si tiene método."
      },
      {
        "q": "¿El dark mode importa?",
        "a": "Menos que claridad de captura y estados. Prioriza legibilidad y velocidad de tarea."
      },
      {
        "q": "¿Cuándo rediseñar un sistema legacy?",
        "a": "Cuando el costo de error/hora manual supera el de una fase de UX+flujo. Empieza por la pantalla más usada."
      },
      {
        "q": "¿Cómo medir adopción?",
        "a": "Usuarios activos semanales, % de registros completos, tiempo de tarea y tickets de “¿cómo se hace X?”."
      }
    ],
    "ctaText": "Si tu sistema se ve bien en la demo pero vive en Excel, pidamos un diagnóstico de adopción y rediseñemos el flujo crítico."
  },
  {
    "slug": "sistema-captacion-pacientes-clinicas",
    "title": "Sistema de captación de pacientes: qué incluye y cómo funciona",
    "description": "Qué incluye un sistema de captación de pacientes para clínicas en México: landing, CRM, agenda, métricas y fase 1 realista.",
    "datePublished": "2026-10-01",
    "keyword": "sistema captación pacientes clínicas",
    "sections": [
      {
        "h2": "Introducción: captación no es solo marketing",
        "paragraphs": [
          "Un sistema de captación de pacientes para clínicas no es “más anuncios”. Es el conjunto de piezas que llevan a una persona interesada hasta una cita confirmada y medible: mensaje claro, captura, respuesta, CRM, agenda y seguimiento.",
          "Esta guía detalla qué incluye un sistema serio en México, qué puede quedar fuera en la fase 1, y cómo saber si ya lo necesitas. En Arissa construimos estas piezas con ticket desde USD 2,000 por fase, porque un formulario suelto no cambia la tasa de asistencia.",
          "Si tu clínica pierde pacientes entre Instagram y la recepción, aquí tienes el mapa. Descarga también la plantilla de diagnóstico de captación para llenarla con tu equipo."
        ]
      },
      {
        "h2": "El problema: demanda sin sistema",
        "paragraphs": [
          "Leads en varios inboxes, WhatsApp como base de datos, agenda sin estados, nadie mide tiempo de primera respuesta, no-shows invisibles hasta que duele la ocupación. Marketing y recepción se culpan mutuamente.",
          "Sin sistema, cada peso en ads tiene ROI opaco. Puedes estar comprando clics que tu operación no puede absorber."
        ]
      },
      {
        "h2": "La solución: componentes de un sistema de captación",
        "paragraphs": [
          "1) Landing por servicio o sede con CTA claro. 2) Formulario corto + UTMs. 3) CRM con estados (nuevo, contactado, agendado, asistió, no-show, descartado). 4) SLA de respuesta. 5) Agenda con confirmación/recordatorio. 6) Tablero semanal. 7) Permisos y cuidado de datos.",
          "Fase 1 típica: 1–3 landings, CRM ligero, notificaciones, métricas básicas. Fase 2: automatizaciones finas, multi-sede, listas de espera, integración ads más profunda.",
          "Qué no es obligatorio al día uno: app del paciente, IA de triage, portal completo. Esas capas vienen cuando el embudo mínimo ya convierte.",
          "Métricas núcleo: tiempo de primera respuesta, tasa de agendado, tasa de asistencia, costo por cita si hay ads. Dos de ellas bastan para gobernar la operación semanal.",
          "Cumplimiento: pide solo datos necesarios, informa uso, controla accesos. En salud, confianza es conversión.",
          "Detalle de CRM clínico ligero: ficha con origen del lead, consentimiento, notas de llamada, historial de citas y motivo de descarte. No es expediente clínico completo; es embudo. Mezclar demasiado pronto historial clínico sensible complica accesos sin mejorar conversión.",
          "Agenda: reglas de duración por servicio, buffers, y confirmación 24h antes. El recordatorio por WhatsApp o SMS funciona cuando el mensaje es claro y el opt-in existe. Medir no-show por sede y por tratamiento revela problemas de expectativa (“pensé que era evaluación gratis”).",
          "Landing: prueba social sobria, mapa, especialidades, y una sola acción primaria. Velocidad móvil importa: un paciente en el camión no espera 8 segundos. Core Web Vitals no son vanidad en captación clínica; son conversión.",
          "Gobernanza semanal: 30 minutos con marketing + recepción mirando el tablero. Sin ese ritual, el sistema se pudre. El software no sustituye la reunión corta de operaciones.",
          "Ampliación práctica para sistema captación pacientes clínicas: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima."
        ]
      },
      {
        "h2": "Caso práctico: de mensajes a citas medibles",
        "paragraphs": [
          "Clínica multi-tratamiento medía “mensajes”. Al mapear, 40% sin respuesta el mismo día. Se implementó landing por tratamiento + CRM + recordatorio. En semanas, dirección vio embudo real y decidió personal en horas pico antes de subir ads.",
          "Eso es un sistema de captación de pacientes trabajando: no magia creativa; operación digital."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Cómo empezar esta semana",
        "paragraphs": [
          "Define dueño del lead. Mide respuesta 5 días. Unifica estados mínimos. Reescribe la landing del servicio de mayor margen. Si las herramientas no aguantan, usa la plantilla de diagnóstico y agenda una fase 1."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué incluye un sistema de captación de pacientes?",
        "a": "Landing, captura, CRM con estados, agenda/confirmación, métricas y un dueño operativo del lead."
      },
      {
        "q": "¿WhatsApp puede ser el CRM?",
        "a": "Como canal sí; como sistema no. Necesitas registro, estados y reportes."
      },
      {
        "q": "¿Cuánto cuesta?",
        "a": "Depende de sedes e integraciones. En Arissa, fases desde USD 2,000 con alcance cerrado."
      },
      {
        "q": "¿Necesito ads primero?",
        "a": "No. Primero deja de perder la demanda actual. Luego escala inversión."
      },
      {
        "q": "¿Sirve para una sola especialidad?",
        "a": "Sí. De hecho es mejor empezar con un servicio estrella y expandir."
      }
    ],
    "ctaText": "Descarga la plantilla de diagnóstico de captación o agenda una llamada para diseñar la fase 1 de tu clínica.",
    "leadMagnet": "plantilla-diagnostico-captacion-clinicas"
  },
  {
    "slug": "software-a-medida-vs-generico",
    "title": "Software a la medida vs. software genérico: comparativa para empresas",
    "description": "Comparativa clara entre software a medida y software genérico para empresas en México: costos, riesgos, cuándo conviene cada uno.",
    "datePublished": "2026-10-15",
    "keyword": "software a medida vs genérico",
    "sections": [
      {
        "h2": "Introducción: la pregunta no es moda, es fricción",
        "paragraphs": [
          "Software a la medida vs software genérico no se resuelve con un tweet. Se resuelve mirando tu proceso: si es estándar, un SaaS suele ganar; si tu diferenciador está en reglas, roles y excepciones, el genérico te cobra en trabajo manual.",
          "Esta comparativa ayuda a dueños en México a decidir con criterios de TCO (costo total) y adopción, no solo licencia mensual. En Arissa construimos a medida cuando el SaaS ya demostró sus límites; el ticket mínimo es USD 2,000 por fase.",
          "Si estás entre renovar licencias o encargar un MVP, usa esta guía junto con nuestra guía de precios 2026."
        ]
      },
      {
        "h2": "El problema: comparar licencia con proyecto",
        "paragraphs": [
          "El SaaS parece barato por mes; el a medida parece caro por proyecto. La comparación correcta incluye: horas de captura doble, conectores, consultoría, errores, dependencia de personas y reportes manuales. Sin eso, siempre “gana” el genérico en la diapositiva y pierde en la operación.",
          "También existe el genérico mal configurado: pagaste el SaaS y lo usas como Excel caro. Eso no prueba que el a medida sea mejor; prueba que nadie hizo discovery."
        ]
      },
      {
        "h2": "La solución: matriz de decisión",
        "paragraphs": [
          "Elige genérico si: proceso estándar, poca personalización, equipo pequeño, necesidad de time-to-value en días, y el vendor cubre tu caso. Elige a medida si: reglas propias, multi-rol con auditoría, Excel crítico, integraciones raras, o el SaaS te obliga a contorsiones semanales.",
          "Híbrido frecuente: SaaS donde encaja + módulo a medida en el cuello de botella. No es traición ideológica; es arquitectura adulta.",
          "Costos: genérico = licencia + configuración + trabajo sombra. A medida = fase 1 + adopción + soporte. En México, un módulo acotado a medida puede partir desde ~USD 2,000–8,000 conceptuales; sistemas amplios suben. El diagnóstico acreditable reduce sorpresas.",
          "Riesgos del a medida: mal alcance, vendor lock-in, sobreingeniería. Mitigas con fases, exclusiones y propiedad clara. Riesgos del genérico: te adaptas tú al software hasta romper el diferenciador.",
          "Tabla rápida: time-to-first-value (genérico suele ganar), ajuste fino (a medida gana), control de roadmap (a medida), ecosistema de apps (genérico).",
          "Señal de que el genérico te quedó corto: campos custom inmanejables, reportes exportados a Excel cada semana, dos herramientas “oficiales” para el mismo dato, y usuarios que piden excepciones diarias que el admin no puede configurar.",
          "Señal de que el a medida es overkill: tu proceso cabe en un flujo estándar, el volumen es bajo, y no hay diferenciador en la regla de negocio. En ese caso, configura bien el SaaS y disciplina de captura. Arissa también te lo dirá en un diagnóstico si aplica.",
          "Negociación con vendors SaaS: pregunta por APIs, límites de custom objects, y costo de conectores. A veces el “barato” se vuelve caro al tercer conector. Negociación con a medida: pregunta por mantenimiento y deuda técnica explícita.",
          "Ampliación práctica para software a medida vs genérico: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima."
        ]
      },
      {
        "h2": "Caso práctico: CRM genérico vs módulo de cotización",
        "paragraphs": [
          "Empresa B2B forzó cotizaciones complejas en CRM genérico. Campos custom ilegibles, reportes imposibles, WhatsApp paralelo. Fase 1 a medida del motor de cotización + estatus, dejando el CRM para pipeline simple. Resultado: menos errores de precio y menos sombra operativa.",
          "No “mataron” el SaaS; lo pusieron en su lugar."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Cómo decidir en 90 minutos",
        "paragraphs": [
          "Lista 5 fricciones semanales. Marca cuáles son disciplina vs software. Si 3+ son límites del genérico, cotiza fase 1 a medida. Si son disciplina, arregla proceso primero. Si dudas, diagnóstico."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿El software a medida siempre es mejor?",
        "a": "No. Es mejor cuando tu proceso no cabe en el genérico sin fricción cara."
      },
      {
        "q": "¿Puedo empezar genérico y migrar?",
        "a": "Sí. Muchas empresas lo hacen. Migra el módulo doloroso primero, no “todo el universo”."
      },
      {
        "q": "¿Qué es más caro a 3 años?",
        "a": "Depende del TCO. Suma licencias, trabajo manual y errores; no solo el proyecto inicial."
      },
      {
        "q": "¿Arissa vende SaaS propio?",
        "a": "El foco comercial es software a medida e integración para el proceso del cliente."
      },
      {
        "q": "¿Cuánto tarda un MVP a medida?",
        "a": "Semanas con alcance cerrado, no días mágicos. La adopción es parte del tiempo real."
      }
    ],
    "ctaText": "¿Dudas entre renovar el SaaS o encargar fase 1? Agenda un diagnóstico o descarga la guía de precios 2026.",
    "leadMagnet": "guia-precios-software-a-medida-2026"
  },
  {
    "slug": "diagnostico-software-antes-de-invertir",
    "title": "Cómo hacer un diagnóstico de software antes de invertir",
    "description": "Guía educativa para hacer un diagnóstico de software empresarial antes de invertir: alcance, entregables, costos y señales de que lo necesitas.",
    "datePublished": "2026-11-01",
    "keyword": "diagnóstico software empresarial",
    "sections": [
      {
        "h2": "Introducción: cotizar a ciegas es caro",
        "paragraphs": [
          "Un diagnóstico de software empresarial es un análisis corto y pagado para mapear procesos, sistemas, riesgos y un plan de fase 1 antes de invertir en construcción. No es una demoshow. Es reducir incertidumbre.",
          "En Arissa el diagnóstico dura 1–2 semanas, cuesta USD 200–500 y es acreditable al proyecto. Esta guía te explica cómo hacerlo bien —con nosotros o internamente— antes de firmar un desarrollo de miles de dólares.",
          "Si te han cotizado “el sistema completo” sin ver tu Excel crítico, necesitas esta lectura."
        ]
      },
      {
        "h2": "El problema: supuestos invisibles",
        "paragraphs": [
          "Las cotizaciones esconden supuestos: datos limpios, un solo interlocutor, APIs estables, usuarios disponibles para pruebas, reglas simples. Cuando el supuesto falla, el precio y la fecha se mueven. Sin diagnóstico, compras una promesa.",
          "Internamente también falla el “ya sabemos qué necesitamos” cuando cada área tiene una película distinta del proceso."
        ]
      },
      {
        "h2": "La solución: método de diagnóstico en 5 bloques",
        "paragraphs": [
          "1) Entrevistas con operación real (no solo sponsors). 2) Recorrido de herramientas y muestras de datos. 3) Mapa as-is / to-be del flujo crítico. 4) Riesgos (datos, integraciones, adopción, compliance). 5) Propuesta de fase 1 con métricas, exclusiones y rango de inversión.",
          "Entregable mínimo: documento de hallazgos, backlog priorizado, recomendación go / no-go, y criterios de éxito. Si el diagnóstico solo produce slides motivacionales, no es diagnóstico.",
          "Quién participa: dueño del proceso, alguien de captura diaria, y quien paga. Sin el usuario diario, el mapa miente.",
          "Duración: 1–2 semanas suele bastar para un flujo. Multi-sede o multi-sistema puede extenderse. Mejor un diagnóstico profundo de un cuello de botella que uno superficial de “toda la empresa”.",
          "Costo vs valor: USD 200–500 es barato frente a un mal proyecto de USD 10,000+. Acreditarlo al proyecto alinea incentivos.",
          "Artefactos recomendados: diagrama de flujo as-is, lista de sistemas con dueños, muestra de 10 registros reales anonimizados, y top 5 dolores rankeados por costo. Con eso, cualquier consultora seria puede cotizar mejor —o rechazar el trabajo.",
          "Errores comunes del diagnóstico: entrevistar solo a dirección; no observar captura real; no abrir la hoja “oficial”; no preguntar por excepciones; no definir métricas. Un diagnóstico sin excepciones es ficción: las excepciones son el software.",
          "Después del diagnóstico: 48–72 horas para decidir go/no-go de fase 1. Si dejas pasar meses, el mapa se pudre. El valor del diagnóstico es fresco.",
          "Ampliación práctica para diagnóstico software empresarial: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima.",
          "Ampliación práctica para diagnóstico software empresarial: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima."
        ]
      },
      {
        "h2": "Caso práctico: el dolor no era “una app”",
        "paragraphs": [
          "Dirección pedía “app de gestión”. El diagnóstico encontró que el 70% del dolor era cotización + estatus, no RRHH ni inventario. Fase 1 se acotó. Se evitó un monstruo de alcance. Seis meses después, fase 2 se decidió con datos de uso real.",
          "Eso es el ROI del diagnóstico: decir que no a lo innecesario."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Checklist para comprar un diagnóstico",
        "paragraphs": [
          "¿Incluye entregable escrito? ¿Habla con usuarios reales? ¿Nombra riesgos? ¿Propone métricas? ¿Aclara qué pasa si no continúas? Si no, es una llamada de ventas con precio."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Qué es un diagnóstico de software empresarial?",
        "a": "Un análisis pagado y acotado que mapea proceso, sistemas y riesgos para proponer una fase 1 realista."
      },
      {
        "q": "¿Cuánto cuesta en Arissa?",
        "a": "USD 200–500 según profundidad, acreditable al proyecto si continúas."
      },
      {
        "q": "¿Puedo hacerlo interno?",
        "a": "Sí, con el mismo método. El riesgo es sesgo interno; un tercero aporta contraste."
      },
      {
        "q": "¿Reemplaza la cotización?",
        "a": "La fundamenta. Después del diagnóstico, la cotización tiene supuestos explícitos."
      },
      {
        "q": "¿Cuándo no hace falta?",
        "a": "Cuando el alcance ya está cristalino, hay dueño, datos y un MVP obvio de una semana de trabajo real."
      }
    ],
    "ctaText": "Agenda un diagnóstico acreditable y sal con un plan de fase 1 — o con la certeza de no invertir todavía."
  },
  {
    "slug": "casos-exito-arissa-procesos-mexico",
    "title": "Casos de éxito: cómo Arissa transforma procesos en empresas mexicanas",
    "description": "Casos de éxito de software a medida en México: patrones de reaseguros, uniformes y clínicas — problema, intervención y resultados esperados.",
    "datePublished": "2026-11-15",
    "keyword": "casos de éxito software México",
    "sections": [
      {
        "h2": "Introducción: casos útiles, no logos vacíos",
        "paragraphs": [
          "Un caso de éxito de software en México debería explicar problema operativo, restricciones, intervención por fases y cambio en indicadores. Los logos sin contexto no ayudan a decidir. Aquí compartimos patrones de proyecto alineados al trabajo de Arissa en reaseguros, uniformes empresariales y captación clínica.",
          "Son casos tipo realistas: describen lo que suele ocurrir cuando se reemplaza fricción manual por sistemas a medida con alcance cerrado. Si tu industria es otra, el método aplica igual.",
          "Ticket de referencia: fases desde USD 2,000; diagnóstico acreditable USD 200–500."
        ]
      },
      {
        "h2": "El problema común: Excel + WhatsApp como sistema crítico",
        "paragraphs": [
          "Across industrias: estatus opacos, doble captura, reportes de domingo, dependencia de héroes. El software genérico parcial convive con sombra operativa. Dirección no ve números accionables."
        ]
      },
      {
        "h2": "Patrones de intervención Arissa",
        "paragraphs": [
          "Reaseguros / operaciones reguladas: captura estructurada, validaciones, estados de flujo, roles, alertas de vencimiento, tableros de pendientes. Uniformes / comercial complejo: cotización parametrizada, aprobación, pedido, estatus, menos WhatsApp como sistema. Clínicas: landing + CRM + agenda + métricas de respuesta y asistencia.",
          "En los tres, la fase 1 ataca el cuello de botella medible. La fase 2 se gana con evidencia. Capacitación breve al núcleo de usuarios. Documentación mínima. Soporte de hiperatención post go-live.",
          "Resultados típicos buscados: menos horas de estatus, menos errores de captura, tiempo de ciclo más corto, visibilidad semanal para dirección. No prometemos milagros de ocupación al día 3; prometemos un sistema usable y medible.",
          "Lo que no hacemos en un caso serio: reescribir toda la empresa en un sprint, esconder exclusiones, o entregar sin dueño interno del proceso.",
          "Indicadores que suelen moverse en 30–60 días post go-live de una fase bien acotada: horas de seguimiento manual, % de registros con estado actualizado, tiempo para responder “¿en qué va X?”, y reducción de versiones de documentos. Si a 60 días no hay movimiento, el problema es adopción o alcance mal elegido —y se corrige.",
          "Transparencia: no todos los proyectos son portada. A veces el éxito es “no construir” después del diagnóstico. Eso también evita un mal caso. Preferimos un no-go honesto a un logo forzado.",
          "Replicabilidad: documentamos decisiones de alcance para que la fase 2 no reinventé la rueda. Un caso de éxito sostenible es aquel que el cliente puede operar sin llamarnos para cada clic.",
          "Ampliación práctica para casos de éxito software México: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima.",
          "Ampliación práctica para casos de éxito software México: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima."
        ]
      },
      {
        "h2": "Caso ilustrativo compuesto",
        "paragraphs": [
          "Una operación multi-sede con leads desordenados y cotizaciones erráticas priorizó primero captación/CRM (métrica: respuesta <60 min y tasa de agendado). Luego motor de cotización. Cada fase con go-live propio. El “caso de éxito” no fue un big bang; fue una secuencia de victorias operativas.",
          "Esa narrativa es la que deberías exigir a cualquier proveedor en México."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Cómo traer tu caso",
        "paragraphs": [
          "Cuéntanos industria, dolor, herramientas, volumen y métrica. Te diremos si cabe en fase 1 o si el siguiente paso es diagnóstico. Mira también /portafolio para el detalle de patrones."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Pueden nombrar clientes públicos?",
        "a": "Cuando el contrato lo permite. Si no, compartimos casos tipo con el mismo rigor de proceso."
      },
      {
        "q": "¿Trabajan solo reaseguros y uniformes?",
        "a": "No. Son dominios representativos; el método aplica a clínicas, distribución y servicios B2B."
      },
      {
        "q": "¿Qué evidencia entregan?",
        "a": "Métricas acordadas por fase, accesos, y documentación operativa mínima."
      },
      {
        "q": "¿Hay soporte después?",
        "a": "Sí, por acuerdo: correcciones, mejoras y nuevas fases."
      },
      {
        "q": "¿Cómo empiezo?",
        "a": "Contacto con brief corto o diagnóstico acreditable."
      }
    ],
    "ctaText": "Si quieres un caso parecido al tuyo, agenda diagnóstico o escríbenos con tu proceso crítico."
  },
  {
    "slug": "tendencias-software-empresarial-mexico-2026",
    "title": "Tendencias de software empresarial en México 2026",
    "description": "Tendencias de software empresarial en México 2026: adopción real, integraciones, IA sobria, datos limpios y compra por fases.",
    "datePublished": "2026-12-01",
    "keyword": "tendencias software empresarial México",
    "sections": [
      {
        "h2": "Introducción: menos humo, más operación",
        "paragraphs": [
          "Las tendencias de software empresarial en México 2026 no deberían ser una lista de buzzwords. Deberían ayudar a dueños a invertir con menos riesgo: qué maduró, qué sigue siendo moda, y qué cambia el presupuesto real.",
          "Desde Arissa vemos cinco corrientes prácticas: compra por fases, integración antes que “suite total”, UI enfocada en adopción, IA solo sobre datos limpios, y compliance/accesos como requisito de diseño —no parche.",
          "Si tomas decisiones de stack este año, usa estas tendencias como filtro, no como shopping list."
        ]
      },
      {
        "h2": "El problema: fatiga de herramientas",
        "paragraphs": [
          "Las PyMEs mexicanas acumularon SaaS durante años. El resultado frecuente: solapamiento, datos rotos y equipos cansados de “la nueva plataforma”. 2026 premia consolidar y conectar, no coleccionar logos."
        ]
      },
      {
        "h2": "Tendencias que sí importan",
        "paragraphs": [
          "1) Fases con métricas: menos proyectos monstruo. 2) Integración de procesos como producto: handoffs CRM–ERP–agenda. 3) Captación digital operativa en salud y servicios: respuesta y show-up, no solo leads. 4) Diseño UI/UX medido por tiempo de tarea. 5) Automatización sobria: reglas claras antes que bots creativos.",
          "IA: útil para clasificación, resumen y asistencia cuando hay datos estructurados. Inútil (o peligrosa) cuando el CRM es un caos. La tendencia madura es “IA encima de proceso limpio”, no “IA en lugar de proceso”.",
          "Talento y vendor: equipos pequeños senior, propuestas con exclusiones, y soporte post go-live explícito. El mercado castiga la caja negra.",
          "Costos: presupuestos en USD para proyectos de software siguen siendo comunes por claridad; lo crítico es alcance. El ticket mínimo serio para trabajo mantenible ronda miles de USD por fase —en Arissa, desde USD 2,000.",
          "Datos y privacidad: más sensibilidad en salud y PII. Diseñar roles y bitácoras desde el día uno es tendencia de supervivencia, no de compliance theater.",
          "Mobile: no siempre app nativa. Responsive sólido en recepción y piso suele bastar en fase 1. Nativa cuando hay offline o uso intensivo en campo.",
          "Nearshore y equipos distribuidos siguen madurando: lo que cambia es la exigencia de rituales (demos semanales, criterios de aceptación, ambientes claros). La tendencia no es “remoto vs oficina”; es “cadencia visible”.",
          "Seguridad básica como default: MFA donde aplique, roles, backups, y least privilege. En 2026 ya no es diferencial de enterprise: es higiene. Quien no la presupuesta, te la cobrará en un incidente.",
          "Contenido y SEO como canal de captación B2B también es tendencia para consultoras: el comprador investiga antes de escribir. Por eso este blog existe. La tendencia comercial es educar con profundidad operativa, no con eslóganes.",
          "Ampliación práctica para tendencias software empresarial México: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima.",
          "Ampliación práctica para tendencias software empresarial México: define un piloto de 2–4 semanas con un equipo pequeño, criterios de salida claros y una reunión semanal de 30 minutos. Si el piloto no mueve la métrica acordada, no escales: ajusta el flujo o detén. Escalar un proceso defectuoso solo multiplica el costo. Esta disciplina es más valiosa que cualquier feature adicional en el backlog.",
          "También registra las excepciones reales durante el piloto. Cada excepción es un candidato a regla, a entrenamiento o a “fuera de alcance”. Sin registro, el sistema se llena de atajos informales y vuelves al punto de partida con una herramienta nueva encima."
        ]
      },
      {
        "h2": "Caso práctico: roadmap 2026 de una PyME",
        "paragraphs": [
          "Q1: diagnóstico + fase 1 del cuello de botella. Q2: adopción y métricas. Q3: una integración delgada. Q4: evaluar IA solo si los datos ya son confiables. Ese calendario aburre a un keynote; funciona en una empresa real."
        ]
      },
      {
        "h2": "Detalle operativo que suele omitirse",
        "paragraphs": [
          "La diferencia entre un proyecto que reduce fricción y uno que genera tickets está en los detalles: quién aprueba excepciones, qué pasa con los datos históricos, cómo se capacita al suplente cuando la persona clave sale de vacaciones, y qué métrica se revisa cada lunes. Esos detalles no caben en un eslogan de “transformación digital”; caben en un alcance de fase 1.",
          "En México, además, conviene explicitar husos, facturación, canales de soporte y el idioma de la interfaz. Un sistema “inglés por defecto” para un equipo de recepción eleva la curva de adopción sin necesidad. Lo mismo aplica a formatos de fecha, moneda y reglas fiscales cuando tocan el flujo.",
          "Documenta supuestos por escrito antes de construir. Si el supuesto es “los catálogos están limpios” y no lo están, el calendario miente. Un buen proveedor actualiza el plan cuando el supuesto se rompe; uno malo esconde el desvío en horas extra no anunciadas. Pide ese comportamiento en el contrato o al menos en el correo de kickoff.",
          "Finalmente, reserva presupuesto y tiempo para la semana posterior al go-live. Ahí se descubren fricciones reales de captura, textos confusos y permisos mal calibrados. Tratar esa semana como parte del proyecto —no como “soporte opcional”— es la práctica que más correlación tiene con adopción sostenida en software empresarial."
        ]
      },
      {
        "h2": "Qué ignorar con elegancia",
        "paragraphs": [
          "Promesas de “transformación integral en 15 días”, agentes autónomos sin dueño de proceso, y rediseños totales sin baseline. 2026 premia la disciplina operativa."
        ]
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la tendencia #1 para PyMEs?",
        "a": "Comprar software por fases con métricas, e integrar antes de acumular más licencias."
      },
      {
        "q": "¿Debo invertir en IA ya?",
        "a": "Solo si tus datos y procesos básicos están limpios. Si no, primero captura y estados."
      },
      {
        "q": "¿SaaS o a medida en 2026?",
        "a": "Híbrido: SaaS donde el proceso es estándar; a medida en el diferenciador."
      },
      {
        "q": "¿Qué medir este año?",
        "a": "Horas manuales, tiempo de ciclo, errores de captura y adopción semanal."
      },
      {
        "q": "¿Cómo aplica Arissa estas tendencias?",
        "a": "Con diagnóstico acreditable, fases desde USD 2,000 y foco en captación, sistemas a medida e integración."
      }
    ],
    "ctaText": "Arma tu roadmap 2026 con un diagnóstico corto: priorizamos una fase que reduzca fricción real, no moda."
  }
]
