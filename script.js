/* ─── Workout Data ────────────────────────────────────────────── */
const workoutData = [
  { "day": 1, "title": "Upper 1", "subtitle": "Strength + AEL", "duration": "75–85m", "exercises": [
    { "name": "Incline DB Press (30°)", "details": "4 × 5–7 reps · 180s rest", "rpe": "8–9", "instructions": "SETUP: Bench at 30°. EXECUTION: 4s negative. 1s pause at bottom stretch. Stop at 95% lockout." },
    { "name": "Weighted Dips (Chest Lean)", "details": "3 × 5–7 reps · 150s rest", "rpe": "8–9", "instructions": "SETUP: Torso 30° forward. EXECUTION: 4s negative. Full chest stretch. Drive up via pec compression." },
    { "name": "Seated DB Overhead Press", "details": "4 × 6–8 reps · 150s rest", "rpe": "8", "instructions": "SETUP: Scapular Plane (elbows 30° forward). EXECUTION: 4s negative. Press to full lockout, ribs tucked." },
    { "name": "Chest-Supported T-Bar Row", "details": "4 × 8–10 reps · 120s rest", "rpe": "8", "instructions": "3s negative count. Initiate with scapular retraction. Full dead-hang stretch at bottom." },
    { "name": "Cable Lateral Raise", "details": "3 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "2s negative. Cable behind body. Raise to shoulder height, pinky slightly higher than thumb." },
    { "name": "Reverse Pec-Deck", "details": "3 × 12–15 reps · 60s rest", "rpe": "9", "instructions": "SETUP: Protract scapulae. EXECUTION: Wide arc using only rear delts. Do not squeeze shoulder blades." }
  ], "abFinisher": { "name": "Cable Crunches", "details": "4 × 10–12 reps · 60s rest", "instructions": "EXECUTION: Flex spine, ribs to pelvis. Do not pivot at hips. Slow controlled return. Heavy load focus." } },

  { "day": 2, "title": "Lower 1", "subtitle": "Strength + AEL", "duration": "65–75m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 × 6–8 reps · 150s rest", "rpe": "8–9", "instructions": "EXECUTION: 3s negative. 2s hard squeeze at peak with Posterior Pelvic Tilt (tuck tailbone)." },
    { "name": "Bulgarian Split Squat", "details": "4 × 7–9 reps · 120s rest", "rpe": "8–9", "instructions": "SETUP: Torso forward 15° for glute bias. EXECUTION: 3s negative. Focus on front leg glute-ham tie-in." },
    { "name": "Romanian Deadlift", "details": "3 × 7–9 reps · 150s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative. Hinge back, keep bar on shins. Stop at max hamstring tension." },
    { "name": "Leg Extension", "details": "3 × 10–12 reps · 75s rest", "rpe": "9", "instructions": "EXECUTION: 3s negative. Toes slightly in for outer quad sweep. 1s top squeeze." },
    { "name": "Hip Abduction Machine", "details": "3 × 12–15 reps · 60s rest", "rpe": "9", "instructions": "SETUP: Lean torso forward 30°. EXECUTION: Push out hard. Pause at peak contraction. Upper glute shelf focus." },
    { "name": "Standing Calf Raise", "details": "4 × 10–12 reps · 60s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative. Pause 1s in deep stretch. Drive onto big toes and squeeze." }
  ] },

  { "day": 3, "title": "Upper 2", "subtitle": "Hypertrophy + Partials", "duration": "50–60m", "exercises": [
    { "name": "Incline DB Press (45°)", "details": "3 × 9–11 reps · 90s rest", "rpe": "9", "instructions": "Higher angle targets uppermost clavicular fibers. Drive dumbbells toward midline at top." },
    { "name": "Low-to-High Cable Fly", "details": "4 × 10–12 reps + Partials · 90s rest", "rpe": "10", "instructions": "Cross hands at top. At failure, do 5-6 partials from bottom stretch to halfway up." },
    { "name": "Seated DB Lateral Raise", "details": "4 × 12–15 reps + Partials · 75s rest", "rpe": "10", "instructions": "At failure, do 6-8 partials in bottom 30% of range. Stretch position focus for side delt growth." },
    { "name": "Lat Pulldown (Neutral)", "details": "3 × 10–12 reps · 90s rest", "rpe": "8–9", "instructions": "EXECUTION: Drive elbows straight down. Full dead-hang stretch at top. Focus on lat width." },
    { "name": "Cable Triceps Pushdown", "details": "3 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "SETUP: Straight bar. EXECUTION: Keep elbows pinned. lateral head focus. Squeeze hard at bottom." }
  ], "abFinisher": { "name": "Inclined Leg Raises", "details": "3 × 12–15 reps · 60s rest", "instructions": "SETUP: Incline bench (head at top). EXECUTION: Rotate pelvis upward off bench. Target lower abs." } },

  { "day": 4, "title": "Lower 2", "subtitle": "Hypertrophy + Partials", "duration": "60–70m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 × 9–11 reps · 90s rest", "rpe": "9", "instructions": "Constant pace, 1s lockout squeeze. Focus on high-rep endurance for the upper glutes." },
    { "name": "Leg Press (Glute Stance)", "details": "3 × 10–12 reps · 90s rest", "rpe": "9", "instructions": "SETUP: Feet high and wide on platform. EXECUTION: Drive through heels to bias glutes over quads." },
    { "name": "45° Back Extension", "details": "3 × 12–15 reps · 75s rest", "rpe": "8–9", "instructions": "EXECUTION: Round upper back. Use ONLY glutes to pull torso up. Keep chin tucked to spine." },
    { "name": "Lying Leg Curl", "details": "3 × 10–12 reps + Partials · 75s rest", "rpe": "10", "instructions": "EXECUTION: Technical failure followed by partials in the fully stretched (legs straight) position." },
    { "name": "Glute Medius Kickbacks", "details": "3 × 12–15 reps · 60s rest", "rpe": "9", "instructions": "Ankle strap. Kick diagonally back and slightly out to target the upper glute shelf fibers." },
    { "name": "Seated Calf Raise", "details": "4 × 12–15 reps · 60s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative count. Targeted to the Soleus muscle. Constant slow rhythm." }
  ] },

  { "day": 5, "title": "Upper 3", "subtitle": "Metabolic + Myo-Reps", "duration": "65–75m", "exercises": [
    { "name": "Pec Deck Fly", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "PROTOCOL: Set failure at 12-15 reps. Rest 10s. Do 4-5 reps. Repeat for 4 clusters total." },
    { "name": "Machine Shoulder Press", "details": "3 × 12–15 reps · 75s rest", "rpe": "9–10", "instructions": "EXECUTION: Neutral grip. Push into seat. Machine allows for safe absolute failure." },
    { "name": "Cable Lateral Raise", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "PROTOCOL: Myo-reps. Final side-delt assault. Focus on the pump and cell swelling." },
    { "name": "Chest-Supported Row", "details": "3 × 12–15 reps · 75s rest", "rpe": "8–9", "instructions": "EXECUTION: Width rows. Pull elbows out to 45°. Squeeze rear delts and mid-traps." },
    { "name": "Arm Superset: Skull/Curl", "details": "3 × 12–15 reps · 60s rest", "rpe": "9–10", "instructions": "SETUP: Single cable station. EXECUTION: Complete Triceps then immediately switch to Biceps." },
    { "name": "Face Pulls", "details": "3 × 15–20 reps · 60s rest", "rpe": "8", "instructions": "EXECUTION: Pull toward forehead, rotate fists back. Essential for 3D shoulder 'cap' appearance." }
  ], "cardio": { "name": "20m Zone 2 Cardio", "details": "1 × 20 mins", "instructions": "PACING: Conversational pace. Facilitates nutrient delivery and waste clearance. Do not gasp." } },

  { "day": 6, "title": "Lower 3", "subtitle": "Metabolic Stress", "duration": "60–70m", "exercises": [
    { "name": "45° Cable Kickback", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "EXECUTION: Kick diagonally UP and OUT (45°). Aligns with upper glute medius fibers. Myo-reps." },
    { "name": "Hip Abduction Machine", "details": "4 × 15–20 reps (Drop) · 75s rest", "rpe": "9–10", "instructions": "SETUP: Lean torso forward 30°. EXECUTION: Drop weight by 30% on final set to technical failure." },
    { "name": "Hack Squat", "details": "4 × 10–12 reps · 90s rest", "rpe": "8–9", "instructions": "SETUP: Feet low on platform. EXECUTION: Maximum depth. Quad-dominant finisher. Control the negative." },
    { "name": "Seated Leg Curl", "details": "4 × 15–20 reps · 75s rest", "rpe": "9", "instructions": "EXECUTION: High-rep metabolic fatigue. Do not lift butt off seat. Constant tension." },
    { "name": "Machine Hip Thrust", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "PROTOCOL: Final glute depletion. Use machine for stability so you can focus purely on the burn." },
    { "name": "Standing Calf Raise", "details": "4 × 15–20 reps · 45s rest", "rpe": "8–9", "instructions": "EXECUTION: High frequency volume. Pause at top, bounce-free reps. Full stretch at bottom." }
  ] },

  { "day": 7, "title": "Standby", "subtitle": "Recovery", "duration": "—", "exercises": [] }
];

/* ─── State ───────────────────────────────────────────────────── */
let progress      = JSON.parse(localStorage.getItem('workoutSysProgress'))      || {};
let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
let lastTouched   = JSON.parse(localStorage.getItem('workoutSysLastTouched'))   || {};
let activeTimer   = null;

/* ─── WORKOUT SYSTEM ──────────────────────────────────────────── */
function renderWorkout(idx) {
  const data = workoutData[idx];
  const list = document.getElementById('exercise-list');
  const compList = document.getElementById('completed-list');
  const compSection = document.getElementById('completed-section');
  const fill = document.getElementById('progress-bar-fill');
  
  document.getElementById('workout-title').innerHTML = `${data.title}<br><span style="font-weight:300;opacity:0.5;">${data.subtitle}</span>`;
  document.getElementById('workout-duration').textContent = data.duration === '—' ? '' : `EST. ${data.duration}`;
  
  list.innerHTML = ''; compList.innerHTML = '';
  
  if (data.exercises.length === 0) {
    compSection.classList.add('hidden');
    fill.parentElement.classList.add('hidden');
    list.innerHTML = `<li class="rest-day-message"><h3 class="title-light">System Standby</h3><p>Focus on metabolic recovery and protein synthesis.</p></li>`;
    return;
  }

  const items = [...data.exercises];
  if (data.abFinisher) items.push({...data.abFinisher, idType: 'ab'});
  if (data.cardio) items.push({...data.cardio, idType: 'cardio'});

  let total = 0, done = 0;
  const activeNodesData = []; 
  const pendingNodes = [];
  const completedNodes = [];

  items.forEach((ex, i) => {
    const id = `d${idx}-${ex.idType || 'e'}${i}`;
    const setsMatch = ex.details.match(/(\d+)\s*[×x]/) || ex.details.match(/(\d+)\s+Activation/i) || [0, 1];
    const sTotal = parseInt(setsMatch[1]) || 1;
    const sCurrent = progress[id] || 0;
    
    total += sTotal; done += Math.min(sCurrent, sTotal);

    const li = document.createElement('li');
    li.className = 'exercise-item';

    li.innerHTML = `
      <div class="set-counter ${sCurrent >= sTotal ? 'sets-complete' : ''}">${sCurrent}<span class="slash">/</span>${sTotal}</div>
      <div class="exercise-details">
        <h3>${ex.name}</h3>
        <p>${ex.details}</p>
      </div>
      ${ex.rpe ? `<span class="rpe-tag">RPE ${ex.rpe}</span>` : ''}
      <button class="info-btn">i</button>
    `;

    let pressTimer;
    let isLongPress = false;
    let startX = 0, startY = 0;

    li.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.info-btn')) return;
      isLongPress = false; startX = e.clientX; startY = e.clientY;
      li.setPointerCapture(e.pointerId);
      pressTimer = setTimeout(() => {
        isLongPress = true;
        if (navigator.vibrate) navigator.vibrate(50);
        progress[id] = Math.max(0, (progress[id] || 0) - 1);
        lastTouched[id] = Date.now();
        save(); renderWorkout(idx);
      }, 400); 
    });

    li.addEventListener('pointermove', (e) => {
      if (Math.abs(e.clientY - startY) > 20 || Math.abs(e.clientX - startX) > 20) clearTimeout(pressTimer);
    });

    li.addEventListener('pointerup', (e) => {
      clearTimeout(pressTimer);
      if (!isLongPress && !e.target.closest('.info-btn')) {
        progress[id] = Math.min(sTotal, (progress[id] || 0) + 1);
        lastTouched[id] = Date.now();
        if (progress[id] < sTotal) startTimer(ex.details.match(/(\d+)s/)?.[1] || 90);
        save(); renderWorkout(idx);
      }
    });

    li.addEventListener('pointercancel', () => clearTimeout(pressTimer));

    li.querySelector('.info-btn').onclick = (e) => {
      e.stopPropagation(); showInfo(ex.name, ex.instructions);
    };

    if (sCurrent >= sTotal) completedNodes.push(li);
    else if (sCurrent > 0) activeNodesData.push({ node: li, ts: lastTouched[id] || 0 });
    else pendingNodes.push(li);
  });

  activeNodesData.sort((a, b) => b.ts - a.ts);
  activeNodesData.forEach((item, index) => {
    if (index === 0) item.node.classList.add('primary-active');
    else item.node.classList.add('secondary-active');
    list.appendChild(item.node);
  });
  
  pendingNodes.forEach(node => list.appendChild(node));
  completedNodes.forEach(node => compList.appendChild(node));

  fill.parentElement.classList.remove('hidden');
  fill.style.width = `${(done/total)*100}%`;
  compSection.classList.toggle('hidden', compList.children.length === 0);
  
  if (done === total && total > 0 && !completedDays.includes(`day-${idx}`)) {
    completedDays.push(`day-${idx}`);
    localStorage.setItem('workoutSysCompletedDays', JSON.stringify(completedDays));
    document.querySelectorAll('.day-btn')[idx].classList.add('day-complete');
    showCompletion(data.title);
  }
}

function save() { 
  localStorage.setItem('workoutSysProgress', JSON.stringify(progress)); 
  localStorage.setItem('workoutSysLastTouched', JSON.stringify(lastTouched));
}

function startTimer(sec) {
  if (activeTimer) clearInterval(activeTimer);
  const end = Date.now() + sec * 1000;
  const el = document.getElementById('timer-display');
  el.classList.add('visible');
  function update() {
    const rem = Math.ceil((end - Date.now()) / 1000);
    if (rem <= 0) { clearInterval(activeTimer); el.classList.remove('visible'); }
    else { el.textContent = `${Math.floor(rem/60)}:${(rem%60).toString().padStart(2,'0')}`; }
  }
  update();
  activeTimer = setInterval(update, 1000);
}

function showInfo(title, text) {
  document.getElementById('info-modal-title').textContent = title;
  document.getElementById('info-modal-instructions').innerHTML = text.split(/(SETUP:|EXECUTION:|PROTOCOL:|PACING:)/g)
    .filter(Boolean).map(l => {
      l = l.trim();
      return /^(SETUP:|EXECUTION:|PROTOCOL:|PACING:)$/.test(l) ? 
        `<span class="instruction-label" style="margin-top: 12px;">${l.replace(':','')}</span>` : `<p>${l}</p>`;
    }).join('');
  document.getElementById('info-modal-overlay').classList.add('visible');
}

function showCompletion(title) {
  document.getElementById('completion-message').textContent = `${title} logged. Recover well.`;
  const el = document.getElementById('completion-overlay');
  el.classList.add('visible');
  el.onclick = () => el.classList.remove('visible');
}

/* ─── MIND SYSTEM (ANXIETY PROTOCOL) ──────────────────────────── */
const nameInput = document.getElementById('name-input');
function updateMantras() {
  const n = nameInput.value.trim() || 'Pedro';
  document.getElementById('master-mantra').textContent = `"${n}, right now your mind is telling a scary story about the future, and your body is trying to protect you from it. You are experiencing a feeling, not a fact."`;
  document.getElementById('loop-mantra').textContent = `"That's just an old loop playing again. I don't have to listen to it."`;
  document.getElementById('tension-mantra').textContent = `"${n}, your body is safe. This tension is just energy trying to help."`;
  document.getElementById('future-mantra').textContent = `"${n}, you don't need to solve the future today. You just need one slow breath right now."`;
}
nameInput.addEventListener('input', updateMantras);

function switchMindTab(targetId) {
  document.querySelectorAll('.mind-tab').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(targetId));
  });
  document.querySelectorAll('.mind-tab-content').forEach(content => {
    content.classList.toggle('active', content.id === targetId);
  });
}

function toggleGround(el) {
  el.classList.toggle('done');
}

/* Hardened GPU-Accelerated Breathing Engine */
let breatheTimer = null;
let breatheActive = false;
let currentBreatheMode = [];
let currentBreathePhaseIndex = 0;

const breatheModes = {
  vagus: [
    { label: 'INHALE', time: 4, action: 'in' },
    { label: 'EXHALE', time: 6, action: 'out' }
  ],
  box: [
    { label: 'INHALE', time: 4, action: 'in' },
    { label: 'HOLD', time: 4, action: 'hold' },
    { label: 'EXHALE', time: 4, action: 'out' },
    { label: 'HOLD', time: 4, action: 'hold' }
  ],
  relax: [
    { label: 'INHALE', time: 4, action: 'in' },
    { label: 'HOLD', time: 7, action: 'hold' },
    { label: 'EXHALE', time: 8, action: 'out' }
  ]
};

function openBreatheModal(modeKey) {
  currentBreatheMode = breatheModes[modeKey];
  currentBreathePhaseIndex = 0;
  breatheActive = true;
  
  const circle = document.getElementById('breathe-circle-huge');
  const label = document.getElementById('breathe-label-huge');
  
  // Reset states
  circle.style.transition = 'none';
  circle.style.transform = 'translate(-50%, -50%) scale(0.2)';
  circle.style.opacity = '0';
  label.style.transition = 'none';
  label.style.transform = 'scale(1)';
  label.style.opacity = '1';

  document.getElementById('breathe-modal-overlay').classList.add('visible');
  runBreathePhase();
}

function stopBreathe() {
  breatheActive = false;
  clearInterval(breatheTimer);
  document.getElementById('breathe-modal-overlay').classList.remove('visible');
  
  const circle = document.getElementById('breathe-circle-huge');
  circle.style.transition = 'none';
  circle.style.transform = 'translate(-50%, -50%) scale(0.2)';
  circle.style.opacity = '0';
  
  const label = document.getElementById('breathe-label-huge');
  label.textContent = 'PREPARE';
  label.style.transition = 'none';
  label.style.transform = 'scale(1)';
  label.style.opacity = '1';
  
  document.getElementById('breathe-display-huge').textContent = '·';
}

function runBreathePhase() {
  if (!breatheActive) return;

  const phase = currentBreatheMode[currentBreathePhaseIndex];
  const display = document.getElementById('breathe-display-huge');
  const label = document.getElementById('breathe-label-huge');
  const circle = document.getElementById('breathe-circle-huge');

  label.textContent = phase.label;
  let count = phase.time;
  display.textContent = count;

  // Direct CSS Injection for Synchronized Animation
  circle.style.transition = `transform ${phase.time}s cubic-bezier(0.4, 0, 0.2, 1), opacity ${phase.time}s ease-in-out`;
  label.style.transition = `transform ${phase.time}s cubic-bezier(0.4, 0, 0.2, 1), opacity ${phase.time}s ease-in-out`;
  
  requestAnimationFrame(() => {
    if (phase.action === 'in') {
      circle.style.transform = 'translate(-50%, -50%) scale(1)';
      circle.style.opacity = '1';
      label.style.transform = 'scale(1.05)';
      label.style.opacity = '1';
    } else if (phase.action === 'out') {
      circle.style.transform = 'translate(-50%, -50%) scale(0.3)';
      circle.style.opacity = '0.2';
      label.style.transform = 'scale(0.95)';
      label.style.opacity = '0.6';
    } else if (phase.action === 'hold') {
      // Gentle opacity pulse during hold state
      circle.style.opacity = '0.5';
      label.style.opacity = '0.8';
    }
  });

  breatheTimer = setInterval(() => {
    count--;
    if (count > 0) {
      display.textContent = count;
    } else {
      clearInterval(breatheTimer);
      currentBreathePhaseIndex = (currentBreathePhaseIndex + 1) % currentBreatheMode.length;
      runBreathePhase();
    }
  }, 1000);
}

function resetMind() {
  document.querySelectorAll('.action-btn').forEach(c => {
    c.classList.remove('done');
  });
  nameInput.value = ''; 
  updateMantras();
  switchMindTab('loop-tab');
  stopBreathe();
}

/* ─── INIT & DOM BINDINGS ─────────────────────────────────────── */
function init() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>null);

  // Mode Switcher Logic
  const btnBody = document.getElementById('mode-body-btn');
  const btnMind = document.getElementById('mode-mind-btn');
  const viewBody = document.getElementById('view-body');
  const viewMind = document.getElementById('view-mind');
  const daySelector = document.getElementById('day-selector');

  btnBody.onclick = () => {
    btnBody.classList.add('active'); btnMind.classList.remove('active');
    viewBody.classList.remove('hidden'); daySelector.classList.remove('hidden');
    viewMind.classList.add('hidden');
  };

  btnMind.onclick = () => {
    btnMind.classList.add('active'); btnBody.classList.remove('active');
    viewMind.classList.remove('hidden');
    viewBody.classList.add('hidden'); daySelector.classList.add('hidden');
  };

  // Workout Days
  ['MO','TU','WE','TH','FR','SA','SU'].forEach((l, i) => {
    const b = document.createElement('button');
    b.className = 'day-btn'; b.textContent = l;
    if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
    b.onclick = () => {
      document.querySelectorAll('.day-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active'); renderWorkout(i);
    };
    daySelector.appendChild(b);
  });
  
  // Theme
  document.getElementById('theme-toggle-btn').onclick = () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    localStorage.setItem('workoutSysTheme', next);
  };
  if (localStorage.getItem('workoutSysTheme')) document.body.dataset.theme = localStorage.getItem('workoutSysTheme');

  // Modals
  const infoOverlay = document.getElementById('info-modal-overlay');
  infoOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
  document.getElementById('info-modal-close-btn').onclick = () => infoOverlay.classList.remove('visible');

  const resetOverlay = document.getElementById('reset-modal-overlay');
  resetOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
  document.getElementById('reset-button').onclick = () => resetOverlay.classList.add('visible');
  
  document.getElementById('confirm-reset-btn').onclick = () => {
    localStorage.removeItem('workoutSysProgress');
    localStorage.removeItem('workoutSysCompletedDays');
    localStorage.removeItem('workoutSysLastTouched');
    progress = {}; completedDays = []; lastTouched = {};
    resetOverlay.classList.remove('visible');
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('day-complete'));
    const activeIdx = Array.from(daySelector.children).findIndex(b => b.classList.contains('active'));
    renderWorkout(activeIdx !== -1 ? activeIdx : ((new Date().getDay() + 6) % 7));
  };
  document.getElementById('cancel-reset-btn').onclick = () => resetOverlay.classList.remove('visible');

  updateMantras();
  const today = (new Date().getDay() + 6) % 7;
  daySelector.children[today].click();
}

init();
