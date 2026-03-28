// ╔══════════════════════════════════════════════════════════════╗
// ║  CONFIGURACIÓN — edita estos valores según prefieras         ║
// ╚══════════════════════════════════════════════════════════════╝

const RETOS_POR_LLAMA = 3;   // Cuántos retos hay que completar por cada 🔥 antes de subir de nivel
const TOTAL_LLAMAS    = 5;   // Número total de niveles (llamas)

// ╔══════════════════════════════════════════════════════════════╗
// ║  ACCESORIOS / EXTRAS DISPONIBLES                             ║
// ╚══════════════════════════════════════════════════════════════╝

// Cada accesorio tiene:
//   id       → identificador único (usado para filtrar retos extra)
//   icon     → emoji
//   label    → nombre visible
//   modes    → en qué modos aparece: 'fisica', 'virtual', 'ambos'

const ACCESSORIES = [
  { id: 'vibrador',     icon: '📳', label: 'Vibrador',        modes: 'ambos' },
  { id: 'plug',         icon: '🔌', label: 'Plug anal',       modes: 'ambos' },
  { id: 'consolador',   icon: '💜', label: 'Consolador',      modes: 'ambos' },
  { id: 'traje',        icon: '👙', label: 'Traje sexy',      modes: 'ambos' },
  { id: 'venda',        icon: '🎀', label: 'Venda de ojos',   modes: 'fisica' },
  { id: 'esposasacc',   icon: '⛓️', label: 'Esposas',         modes: 'fisica' },
  { id: 'dados',        icon: '🎲', label: 'Dados eróticos',  modes: 'fisica' },
  { id: 'plumas',       icon: '🪶', label: 'Plumas / cosqui', modes: 'fisica' },
  { id: 'aceite',       icon: '💧', label: 'Aceite de masaje', modes: 'fisica' },
  { id: 'camara',       icon: '📷', label: 'Cámara / fotos',  modes: 'virtual' },
  { id: 'microfono',    icon: '🎙️', label: 'Micrófono / ASMR', modes: 'virtual' },
  { id: 'hielo',        icon: '🧊', label: 'Hielo / calor',   modes: 'fisica' },
];

// ╔══════════════════════════════════════════════════════════════╗
// ║  BANCO DE RETOS BASE — por nivel y modo                      ║
// ╚══════════════════════════════════════════════════════════════╝

const CHALLENGES_BASE = {
  fisica: [
    // Nivel 1 🔥
    [
      { text: "{A}, dale a {B} un beso suave en el cuello durante 30 segundos.", timer: 30 },
      { text: "{A}, acaricia el cabello de {B} muy despacio durante 1 minuto.", timer: 60 },
      { text: "{A}, susúrrale al oído a {B} tres cosas que te gustan de él/ella.", timer: 0 },
      { text: "{B}, dale un masaje en los hombros a {A} durante 1 minuto.", timer: 60 },
      { text: "{A}, toma la mano de {B} y acaríciala en silencio durante 45 segundos.", timer: 45 },
      { text: "{B}, mira a los ojos a {A} y dile una cosa que te encante de él/ella.", timer: 0 },
      { text: "{A}, besa a {B} en la frente, las mejillas y los labios muy suavemente.", timer: 0 },
    ],
    // Nivel 2 🔥🔥
    [
      { text: "{A}, haz un baile seductor para {B} durante 2 minutos.", timer: 120 },
      { text: "{A}, besa a {B} en los labios sin parar durante 1 minuto.", timer: 60 },
      { text: "{B}, traza con el dedo el contorno del cuerpo de {A} muy despacio.", timer: 60 },
      { text: "{A}, describe en voz alta qué parte del cuerpo de {B} te vuelve loco/a.", timer: 0 },
      { text: "{B}, besa a {A} en la oreja y en el cuello durante 1 minuto sin parar.", timer: 60 },
      { text: "Ambos: daos el beso más lento y profundo que podáis durante 90 segundos.", timer: 90 },
      { text: "{A}, muérdele suavemente el lóbulo de la oreja a {B} durante 30 segundos.", timer: 30 },
    ],
    // Nivel 3 🔥🔥🔥
    [
      { text: "{A}, quítale una prenda de ropa a {B} muy lentamente.", timer: 0 },
      { text: "{B}, dale a {A} un masaje sensual en la espalda durante 2 minutos.", timer: 120 },
      { text: "{A}, besa a {B} desde el cuello hasta el hombro durante 90 segundos.", timer: 90 },
      { text: "Ambos: miradlos a los ojos sin reíros durante 2 minutos sin dejar de acariciarse.", timer: 120 },
      { text: "{A}, recorre con los labios el brazo de {B} de la muñeca al hombro muy despacio.", timer: 60 },
      { text: "{B}, di en voz alta tu fantasía favorita con {A} con todo el detalle que puedas.", timer: 0 },
      { text: "{A}, explora con las yemas de los dedos la espalda de {B} durante 2 minutos.", timer: 120 },
    ],
    // Nivel 4 🔥🔥🔥🔥
    [
      { text: "{A}, besa a {B} de arriba abajo durante 2 minutos sin llegar a los labios.", timer: 120 },
      { text: "{B}, lleva a {A} de la mano y bésalo/a durante 3 minutos.", timer: 180 },
      { text: "{A}, explora con las manos el cuerpo de {B} durante 2 minutos.", timer: 120 },
      { text: "Ambos: desnúdense mutuamente muy despacio sin ninguna prisa.", timer: 0 },
      { text: "{A}, besa a {B} en la parte del cuerpo que creas que más le gusta durante 2 minutos.", timer: 120 },
      { text: "{B}, decide cómo quieres que {A} te toque durante 3 minutos y guíalo/a.", timer: 180 },
      { text: "{A}, recorre con los labios el cuerpo de {B} de cintura para arriba.", timer: 0 },
    ],
    // Nivel 5 🔥🔥🔥🔥🔥 — FINAL
    [
      { text: "Momento final 💜 — Elijan juntos la postura que más ganas les dé y déjense llevar sin límites. No hay prisa. Solo vosotros.", timer: 0, isFinal: true },
      { text: "Momento final 💜 — {A}, elige la postura favorita y sorprende a {B}. A partir de aquí no hay instrucciones: solo vosotros dos.", timer: 0, isFinal: true },
      { text: "Momento final 💜 — Apagad el móvil, dejad fluir lo que sienten y disfrutad sin prisa. Esta noche es vuestra.", timer: 0, isFinal: true },
    ],
  ],

  virtual: [
    // Nivel 1 🔥
    [
      { text: "{A}, muéstrale a {B} tu sonrisa más sexy mirando a la cámara durante 30 segundos.", timer: 30 },
      { text: "{A}, dile a {B} en voz alta tres cosas que te gustan de su cuerpo.", timer: 0 },
      { text: "{B}, manda a {A} una foto de tu parte favorita de ti mismo/a.", timer: 0 },
      { text: "{A}, léele a {B} el mensaje más atrevido que se te ocurra ahora mismo.", timer: 0 },
      { text: "{B}, ponte la prenda con la que más sexy te sientas y muéstrasela a {A}.", timer: 0 },
      { text: "Ambos: mandaos un audio de voz con lo que más os gusta del otro. Sin escribir.", timer: 0 },
      { text: "{A}, describe con detalle cómo sería el primer beso si estuvierais juntos/as.", timer: 0 },
    ],
    // Nivel 2 🔥🔥
    [
      { text: "{A}, haz un baile sexy frente a la cámara durante 2 minutos para {B}.", timer: 120 },
      { text: "{B}, describe en detalle cómo besarías a {A} si estuvierais juntos/as.", timer: 0 },
      { text: "{A}, susurra al micrófono lo que harías esta noche con {B}.", timer: 0 },
      { text: "Ambos: poned una canción sexy y bailad solos mirándoos por cámara durante 2 minutos.", timer: 120 },
      { text: "{B}, escribe a {A} el mensaje más atrevido que te atrevas a mandar.", timer: 0 },
      { text: "{A}, durante 1 minuto descríbele a {B} con voz lenta lo que harías si estuvieras allí.", timer: 60 },
      { text: "{B}, tócate lentamente el cuello y el escote mientras {A} te mira durante 1 minuto.", timer: 60 },
    ],
    // Nivel 3 🔥🔥🔥
    [
      { text: "{A}, quítate una prenda muy lentamente frente a la cámara.", timer: 0 },
      { text: "{B}, muéstrale a {A} tu parte del cuerpo favorita durante 1 minuto.", timer: 60 },
      { text: "{A}, léele a {B} en voz alta un mensaje muy atrevido que describa lo que sientes.", timer: 0 },
      { text: "Ambos: miradlos a los ojos por cámara sin decir nada durante 2 minutos.", timer: 120 },
      { text: "{B}, quítate la ropa de cintura para arriba frente a la cámara y quédate así 1 minuto.", timer: 60 },
      { text: "{A}, dile a {B} la fantasía que nunca te has atrevido a contarle.", timer: 0 },
      { text: "{B}, guía a {A} con tu voz diciéndole cómo quieres que se toque durante 1 minuto.", timer: 60 },
    ],
    // Nivel 4 🔥🔥🔥🔥
    [
      { text: "{A}, muéstrate ante la cámara durante 2 minutos de la forma más seductora que se te ocurra.", timer: 120 },
      { text: "{B}, dile a {A} con todo detalle qué le haría si estuviera allí ahora mismo.", timer: 0 },
      { text: "Ambos: quedaos lo más desvestidos posible y miradlos a los ojos por cámara durante 3 minutos.", timer: 180 },
      { text: "{A}, escribe y lee en voz alta tu fantasía favorita con {B}.", timer: 0 },
      { text: "{B}, durante 2 minutos guía a {A} con tu voz diciéndole exactamente cómo quieres que se toque.", timer: 120 },
      { text: "Ambos: a la vez y en silencio, haced lo que más os apetezca frente a la cámara durante 3 minutos.", timer: 180 },
      { text: "{A}, quédate sin ropa frente a la cámara y deja que {B} te mire durante 2 minutos.", timer: 120 },
    ],
    // Nivel 5 🔥🔥🔥🔥🔥 — FINAL
    [
      { text: "Momento final 💜 — Tenéis la pantalla solo para vosotros dos. Sin guión, sin turnos. Dejad que fluya la noche.", timer: 0, isFinal: true },
      { text: "Momento final 💜 — {A}, decide cómo quieres que acabe esta noche y díselo a {B}. La pantalla es vuestra.", timer: 0, isFinal: true },
      { text: "Momento final 💜 — Apagad todo lo que no seáis vosotros dos y dejad que la noche siga sola. Os lo habéis ganado.", timer: 0, isFinal: true },
    ],
  ]
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  RETOS EXTRA POR ACCESORIO                                   ║
// ║  Cada accesorio inyecta retos en el nivel indicado           ║
// ║  tag → etiqueta pequeña que se muestra en el reto            ║
// ╚══════════════════════════════════════════════════════════════╝

const CHALLENGES_EXTRAS = {
  vibrador: {
    fisica: {
      1: [{ text: "{A}, enciende el vibrador al mínimo y pásaselo a {B} por el cuello durante 30 segundos.", timer: 30 }],
      2: [{ text: "{B}, pon el vibrador en modo medio y úsalo sobre la ropa de {A} donde él/ella indique, durante 1 minuto.", timer: 60 }],
      3: [{ text: "{A}, usa el vibrador en {B} al nivel que prefiera durante 2 minutos. {B} elige la zona.", timer: 120 }],
      4: [{ text: "{B}, controla el vibrador mientras {A} intenta mantener la calma durante 3 minutos.", timer: 180 }],
    },
    virtual: {
      1: [{ text: "{A}, enciende el vibrador y sostenlo cerca del micrófono para que {B} lo escuche.", timer: 30 }],
      2: [{ text: "{B}, usa el vibrador en la intensidad que quieras durante 1 minuto mientras {A} te observa.", timer: 60 }],
      3: [{ text: "{A}, usa el vibrador durante 2 minutos mientras {B} te da instrucciones por voz.", timer: 120 }],
      4: [{ text: "Ambos: usad vuestros vibradores a la vez durante 3 minutos sin apartar los ojos de la cámara.", timer: 180 }],
    }
  },
  plug: {
    fisica: {
      2: [{ text: "{A}, ponle el plug a {B} muy despacio. {B} avisa cuando esté listo/a.", timer: 0 }],
      3: [{ text: "{B}, lleva el plug puesto durante el siguiente reto. {A} no puede tocarlo.", timer: 0 }],
      4: [{ text: "{A}, retira el plug de {B} muy suavemente cuando él/ella lo pida.", timer: 0 }],
    },
    virtual: {
      2: [{ text: "{A}, ponte el plug y confirma a {B} cuando estés listo/a. Luego continúa mirando a cámara.", timer: 0 }],
      3: [{ text: "{B}, lleva el plug puesto durante los próximos 2 minutos mientras seguís en llamada.", timer: 120 }],
    }
  },
  consolador: {
    fisica: {
      3: [{ text: "{A}, prepara el consolador y deja que {B} decida cómo y dónde usarlo.", timer: 0 }],
      4: [{ text: "{B}, usa el consolador en {A} durante 2 minutos al ritmo que {A} te pida.", timer: 120 }],
    },
    virtual: {
      3: [{ text: "{A}, usa el consolador durante 1 minuto mientras {B} te observa y te dice lo que piensa.", timer: 60 }],
      4: [{ text: "Ambos: usad vuestros consoladores a la vez durante 2 minutos mirándoos a los ojos por cámara.", timer: 120 }],
    }
  },
  traje: {
    fisica: {
      1: [{ text: "{A}, ponte el traje sexy y aparece delante de {B}. Deja que te mire en silencio durante 1 minuto.", timer: 60 }],
      2: [{ text: "{B}, camina lentamente por la habitación con el traje puesto mientras {A} te observa durante 1 minuto.", timer: 60 }],
    },
    virtual: {
      1: [{ text: "{A}, ponte el traje sexy y vuelve a la cámara. {B} tiene 1 minuto para mirarte sin decir nada.", timer: 60 }],
      2: [{ text: "{B}, muéstrate ante la cámara con el traje puesto y posa durante 1 minuto para {A}.", timer: 60 }],
    }
  },
  venda: {
    fisica: {
      2: [{ text: "{A}, cúbrete los ojos con la venda. {B} tiene 1 minuto para tocarte donde quiera.", timer: 60 }],
      3: [{ text: "{B}, ponte la venda. {A} te guiará con su voz y sus manos durante 2 minutos.", timer: 120 }],
      4: [{ text: "{A}, con la venda puesta, adivina con las manos qué parte del cuerpo de {B} estás tocando.", timer: 0 }],
    }
  },
  esposasacc: {
    fisica: {
      3: [{ text: "{A}, esposa a {B} suavemente. {B} tiene los brazos inmovilizados durante el siguiente reto.", timer: 0 }],
      4: [{ text: "Ambos: decidid juntos quién lleva las esposas y durante cuánto tiempo. El otro/a toma el control.", timer: 0 }],
    }
  },
  dados: {
    fisica: {
      1: [{ text: "{A}, lanza los dados eróticos y haz exactamente lo que indiquen durante 1 minuto.", timer: 60 }],
      2: [{ text: "{B}, lanza los dados y el resultado lo ejecutáis los dos juntos.", timer: 0 }],
      3: [{ text: "Ambos: lanzad los dados por turnos — lo que salga, se hace sin preguntas.", timer: 0 }],
    }
  },
  plumas: {
    fisica: {
      1: [{ text: "{A}, recorre el cuello y los brazos de {B} con la pluma muy despacio durante 1 minuto.", timer: 60 }],
      2: [{ text: "{B}, usa la pluma en la espalda desnuda de {A} durante 2 minutos sin repetir la misma zona.", timer: 120 }],
      3: [{ text: "{A}, con los ojos de {B} cerrados, recorre su cuerpo con la pluma y que adivine la zona.", timer: 0 }],
    }
  },
  aceite: {
    fisica: {
      2: [{ text: "{A}, calienta el aceite entre las manos y dale a {B} un masaje en los hombros y cuello durante 2 minutos.", timer: 120 }],
      3: [{ text: "{B}, usa el aceite de masaje para explorar la espalda de {A} durante 3 minutos.", timer: 180 }],
      4: [{ text: "{A}, da a {B} un masaje completo con aceite por todo el cuerpo.", timer: 0 }],
    }
  },
  hielo: {
    fisica: {
      2: [{ text: "{A}, pasa un cubito de hielo por el cuello y los hombros de {B} durante 30 segundos.", timer: 30 }],
      3: [{ text: "{B}, alterna hielo y calor (cubito + tu boca) en el cuello de {A} durante 1 minuto.", timer: 60 }],
      4: [{ text: "{A}, elige una zona del cuerpo de {B} y usa el hielo durante 1 minuto mientras lo/a besas.", timer: 60 }],
    }
  },
  camara: {
    virtual: {
      2: [{ text: "{A}, hazte una foto seductora ahora mismo y mándasela a {B}. {B} responde con otra.", timer: 0 }],
      3: [{ text: "{B}, tómate una foto de la parte del cuerpo que más te guste ahora mismo y compártela con {A}.", timer: 0 }],
      4: [{ text: "Ambos: tomaos fotos el uno al otro durante 2 minutos por videollamada. Los mejores momentos quedan.", timer: 120 }],
    }
  },
  microfono: {
    virtual: {
      2: [{ text: "{A}, susurra al micrófono algo que le ponga los pelos de punta a {B} durante 1 minuto.", timer: 60 }],
      3: [{ text: "{B}, cierra los ojos y deja que {A} te describa con su voz lo que haría contigo durante 2 minutos.", timer: 120 }],
      4: [{ text: "{A}, graba un audio de voz muy íntimo para {B} y mándaselo. {B} lo escucha en bucle.", timer: 0 }],
    }
  },
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  ESTADO DEL JUEGO                                            ║
// ╚══════════════════════════════════════════════════════════════╝

let state = {
  type:            null,    // 'fisica' | 'virtual'
  name1:           '',
  name2:           '',
  accessories:     [],      // IDs de accesorios seleccionados
  levelIndex:      0,       // nivel actual 0..4
  retoEnNivel:     0,       // cuántos retos se han hecho en este nivel
  pool:            [],      // pool mezclado para el nivel actual
  poolIdx:         0,       // posición en el pool
  currentChallenge: null,
  timerInterval:   null,
  timerLeft:       0,
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  INICIALIZACIÓN DE ACCESORIOS                                ║
// ╚══════════════════════════════════════════════════════════════╝

function buildAccessoriesScreen() {
  const grid = document.getElementById('acc-grid');
  grid.innerHTML = '';
  const mode = state.type;
  ACCESSORIES
    .filter(a => a.modes === 'ambos' || a.modes === mode)
    .forEach(acc => {
      const btn = document.createElement('button');
      btn.className = 'acc-btn';
      btn.dataset.id = acc.id;
      btn.innerHTML = `
        <span class="acc-check">✓</span>
        <span class="acc-icon">${acc.icon}</span>
        <span class="acc-label">${acc.label}</span>
      `;
      btn.addEventListener('click', () => toggleAccessory(acc.id, btn));
      grid.appendChild(btn);
    });
}

function toggleAccessory(id, btn) {
  btn.classList.toggle('selected');
  if (btn.classList.contains('selected')) {
    if (!state.accessories.includes(id)) state.accessories.push(id);
  } else {
    state.accessories = state.accessories.filter(a => a !== id);
  }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  CONSTRUCCIÓN DEL POOL DE RETOS PARA UN NIVEL                ║
// ╚══════════════════════════════════════════════════════════════╝

function buildPool(levelIdx) {
  const mode = state.type;
  // Retos base
  let base = [...(CHALLENGES_BASE[mode][levelIdx] || [])];

  // Inyectar retos de accesorios seleccionados
  state.accessories.forEach(accId => {
    const accData = CHALLENGES_EXTRAS[accId];
    if (!accData) return;
    const modeData = accData[mode] || accData['fisica'] || {};
    const extras = modeData[levelIdx + 1]; // los extras usan 1-based
    if (extras && extras.length) {
      // Añadir tag visual al texto
      const tagged = extras.map(c => ({
        ...c,
        text: c.text + ` <span class="acc-tag">${getAccIcon(accId)}</span>`
      }));
      base = base.concat(tagged);
    }
  });

  // No mezclar el nivel final — siempre mostrar uno al azar
  if (levelIdx === TOTAL_LLAMAS - 1) {
    return shuffle(base);
  }

  return shuffle(base);
}

function getAccIcon(id) {
  const a = ACCESSORIES.find(x => x.id === id);
  return a ? a.icon : '';
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  NAVEGACIÓN                                                  ║
// ╚══════════════════════════════════════════════════════════════╝

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectType(type, btn) {
  state.type = type;
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  document.getElementById('btn-type-next').disabled = false;
}

function goToNames() {
  if (!state.type) return;
  showScreen('screen-names');
}

function goToAccessories() {
  const n1 = document.getElementById('name1').value.trim();
  const n2 = document.getElementById('name2').value.trim();
  if (!n1 || !n2) {
    const card = document.querySelector('#screen-names .card');
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 400);
    return;
  }
  state.name1 = cap(n1);
  state.name2 = cap(n2);
  state.accessories = [];
  buildAccessoriesScreen();
  showScreen('screen-accessories');
}

function startGame() {
  state.levelIndex  = 0;
  state.retoEnNivel = 0;
  state.pool        = buildPool(0);
  state.poolIdx     = 0;
  showScreen('screen-challenge');
  renderChallenge();
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); }

// ╔══════════════════════════════════════════════════════════════╗
// ║  RENDER DE RETO                                              ║
// ╚══════════════════════════════════════════════════════════════╝

function renderChallenge() {
  clearTimer();

  const lvl     = state.levelIndex;
  const isFinal = (lvl === TOTAL_LLAMAS - 1);
  const flames  = lvl + 1;

  // Obtener reto del pool
  if (state.poolIdx >= state.pool.length) {
    // Pool agotado — regenerar evitando el último reto
    const last = state.currentChallenge;
    state.pool = buildPool(lvl).filter(c => c !== last);
    if (state.pool.length === 0) state.pool = buildPool(lvl);
    state.poolIdx = 0;
  }
  const challenge = state.pool[state.poolIdx++];
  state.currentChallenge = challenge;

  // Progreso global: cada llama vale (100/TOTAL_LLAMAS)%, dentro de la llama avanza por retos
  const progressBase = (lvl / TOTAL_LLAMAS) * 100;
  const progressInner = isFinal ? 100 : (state.retoEnNivel / RETOS_POR_LLAMA) * (100 / TOTAL_LLAMAS);
  const progress = Math.min(progressBase + progressInner, 98);

  const flamesHtml = Array.from({length: TOTAL_LLAMAS}, (_, i) =>
    `<span class="flame-icon ${i < flames ? 'active' : ''}">🔥</span>`
  ).join('');

  const levelLabels = ['Calentando motores','Subiendo temperatura','El fuego crece','Intensidad máxima','La noche es vuestra'];

  // Contador de retos dentro del nivel (no se muestra en el final)
  const counterHtml = isFinal ? '' :
    `<div class="challenge-counter">Reto ${state.retoEnNivel + 1} de ${RETOS_POR_LLAMA} en este nivel</div>`;

  // Timer
  let timerSection = '';
  const isTimed = !!(challenge.timer && challenge.timer > 0);
  if (isTimed) {
    const r = 44, circ = 2 * Math.PI * r;
    timerSection = `
      <div class="timer-display">
        <div class="timer-ring">
          <svg viewBox="0 0 100 100">
            <circle class="track" cx="50" cy="50" r="${r}"/>
            <circle class="prog" id="timer-circle" cx="50" cy="50" r="${r}"
              stroke-dasharray="${circ}" stroke-dashoffset="0"/>
          </svg>
          <div class="timer-number" id="timer-num">${fmtTime(challenge.timer)}</div>
        </div>
        <div class="timer-label">Tiempo restante</div>
      </div>`;
  } else if (!isFinal) {
    timerSection = `<div class="no-timer-badge">⏸ A vuestro ritmo</div>`;
  }

  // Botón principal
  const isLastRetoInLevel = (state.retoEnNivel + 1 >= RETOS_POR_LLAMA);
  let mainBtnText;
  if (isFinal)             mainBtnText = '¡Disfrutad! 💜';
  else if (isLastRetoInLevel) mainBtnText = 'Siguiente llama 🔥';
  else                     mainBtnText = 'Siguiente reto →';

  // Botones extra
  const extraBtns = isFinal ? '' : `
    <div class="action-row">
      <button class="btn-action" onclick="changeChallenge()">🔀 Cambiar reto</button>
      <button class="btn-action" onclick="skipLevel()">⏭ Saltar nivel</button>
    </div>`;

  document.getElementById('challenge-content').innerHTML = `
    <div class="progress-bar-wrap">
      <div class="progress-bar-fill" style="width:${progress}%"></div>
    </div>
    <div class="flames-row">${flamesHtml}</div>
    <div class="challenge-level">${levelLabels[lvl]}</div>
    ${counterHtml}
    <div class="challenge-text">${fmtText(challenge.text)}</div>
    ${timerSection}
    <button class="btn-main" id="btn-continue" onclick="advanceGame()" ${isTimed ? 'disabled' : ''}>
      ${mainBtnText}
    </button>
    ${extraBtns}
  `;

  if (isTimed) startTimer(challenge.timer);
}

// Sustituye {A} y {B} por nombres coloreados (aleatoriamente)
function fmtText(text) {
  let a, b;
  if (Math.random() > 0.5) { a = state.name1; b = state.name2; }
  else                      { a = state.name2; b = state.name1; }
  return text
    .replace(/{A}/g, `<span class="nh">${a}</span>`)
    .replace(/{B}/g, `<span class="nh">${b}</span>`);
}

function fmtTime(secs) {
  const m = Math.floor(secs / 60), s = secs % 60;
  return m > 0 ? `${m}:${s.toString().padStart(2,'0')}` : `${s}s`;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  LÓGICA DE AVANCE                                            ║
// ╚══════════════════════════════════════════════════════════════╝

function advanceGame() {
  clearTimer();
  const isFinal = (state.levelIndex === TOTAL_LLAMAS - 1);
  if (isFinal) { showFinalScreen(); return; }

  state.retoEnNivel++;

  if (state.retoEnNivel >= RETOS_POR_LLAMA) {
    // Subir de nivel
    state.levelIndex++;
    state.retoEnNivel = 0;
    if (state.levelIndex >= TOTAL_LLAMAS) { showFinalScreen(); return; }
    state.pool    = buildPool(state.levelIndex);
    state.poolIdx = 0;
  }

  renderChallenge();
}

// Cambiar reto: mismo nivel, no avanza contador
function changeChallenge() {
  clearTimer();
  renderChallenge();
}

// Saltar nivel completo
function skipLevel() {
  clearTimer();
  state.levelIndex++;
  state.retoEnNivel = 0;
  if (state.levelIndex >= TOTAL_LLAMAS) { showFinalScreen(); return; }
  state.pool    = buildPool(state.levelIndex);
  state.poolIdx = 0;
  renderChallenge();
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TIMER                                                       ║
// ╚══════════════════════════════════════════════════════════════╝

function startTimer(seconds) {
  const r = 44, circ = 2 * Math.PI * r, total = seconds;
  state.timerLeft = seconds;
  state.timerInterval = setInterval(() => {
    state.timerLeft--;
    const numEl  = document.getElementById('timer-num');
    const circEl = document.getElementById('timer-circle');
    const btn    = document.getElementById('btn-continue');
    if (!numEl) { clearTimer(); return; }
    numEl.textContent = fmtTime(state.timerLeft);
    circEl.style.strokeDashoffset = circ * (1 - state.timerLeft / total);
    if (state.timerLeft <= 0) {
      clearTimer();
      numEl.textContent = '✓';
      if (btn) { btn.disabled = false; btn.style.animation = 'pulse 1s ease-in-out infinite'; }
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  PANTALLA FINAL                                              ║
// ╚══════════════════════════════════════════════════════════════╝

function showFinalScreen() {
  clearTimer();
  showScreen('screen-final');
  document.getElementById('final-msg').innerHTML =
    `<span class="nh">${state.name1}</span> y <span class="nh">${state.name2}</span>, la noche es vuestra 💜 Sin reglas, sin turnos, sin prisa. Solo vosotros dos.`;
  launchFinalEmojis();
  randomPostura();
}

function launchFinalEmojis() {
  const container = document.getElementById('final-emojis');
  container.innerHTML = '';
  const emojis = ['🌡️','💊','🛡️','❤️‍🔥','💜','✨','🔥','💋','🫦','💑'];
  for (let i = 0; i < 26; i++) {
    const el = document.createElement('div');
    el.className = 'final-emoji';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (5 + Math.random() * 8) + 's';
    el.style.animationDelay    = (Math.random() * 5) + 's';
    el.style.fontSize          = (20 + Math.random() * 20) + 'px';
    container.appendChild(el);
  }
}

function playAgain() {
  document.getElementById('final-emojis').innerHTML = '';
  state.accessories = [];
  document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('btn-type-next').disabled = true;
  state.type = null;
  showScreen('screen-type');
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  POSTURAS KAMASUTRA                                          ║
// ╚══════════════════════════════════════════════════════════════╝

// Sustituye src por tus imágenes reales del Kamasutra
const POSTURAS = [
  {
    nombre: 'El Loto Entrelazado',
    desc: 'Ambos sentados frente a frente con las piernas entrelazadas. Cuerpos bien pegados, miradas encontradas. Ideal para una conexión lenta e íntima.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🪷'
  },
  {
    nombre: 'La Mariposa',
    desc: 'Una persona tumbada al borde de la cama, la otra de pie sujetando sus caderas. Profundo y apasionado, con total control del ritmo.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🦋'
  },
  {
    nombre: 'El Arco',
    desc: 'Una persona arqueada hacia atrás apoyada en las manos, la otra arrodillada. Requiere flexibilidad y genera una tensión deliciosa.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🏹'
  },
  {
    nombre: 'La Cuchara de Fuego',
    desc: 'Posición de cucharita con máxima proximidad. Movimientos lentos y profundos, perfecta para noches largas y sin prisas.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🔥'
  },
  {
    nombre: 'El Tronco Partido',
    desc: 'Una persona tumbada con las piernas alzadas en vertical contra el pecho de la otra. Sensación intensa, ángulo único.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🌳'
  },
  {
    nombre: 'La Cobra',
    desc: 'Uno boca abajo ligeramente alzado en los codos, el otro encima siguiendo la curva del cuerpo. Lento, envolvente y muy sensual.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🐍'
  },
  {
    nombre: 'La Silla Imperial',
    desc: 'Una persona sentada en el borde de la silla o cama, la otra a horcajadas de frente. Ambos mandan por igual. Máxima complicidad.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=👑'
  },
  {
    nombre: 'El Puente de Jade',
    desc: 'Una persona en puente invertido mientras la otra se arrodilla debajo. Acrobático y muy estético. Para los más atrevidos.',
    img: 'https://placehold.co/400x400/2a0035/e879f9?text=🌉'
  },
];

let lastPosturaIdx = -1;

function randomPostura() {
  let idx;
  do { idx = Math.floor(Math.random() * POSTURAS.length); } while (idx === lastPosturaIdx && POSTURAS.length > 1);
  lastPosturaIdx = idx;
  const p = POSTURAS[idx];
  document.getElementById('postura-img').src    = p.img;
  document.getElementById('postura-img').alt    = p.nombre;
  document.getElementById('postura-nombre').textContent = p.nombre;
  document.getElementById('postura-desc').textContent   = p.desc;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  PARTÍCULAS DE FONDO                                         ║
// ╚══════════════════════════════════════════════════════════════╝

(function initParticles() {
  const container = document.getElementById('particles');
  const symbols = ['✦','·','∗','✧','◦'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (8 + Math.random() * 10) + 'px';
    p.style.color = `hsl(${270 + Math.random() * 60}, 80%, 70%)`;
    p.style.animationDuration = (12 + Math.random() * 15) + 's';
    p.style.animationDelay   = (-Math.random() * 15) + 's';
    container.appendChild(p);
  }
})();
</script>
