/* ─── Workout Data ────────────────────────────────────────────── */
const workoutData = [
  { "day": 1, "title": "Upper 1", "subtitle": "Strength", "duration": "85–95m", "exercises": [
    { "name": "Incline DB Press (30°)", "details": "4 × 5–7 reps · 180s rest", "rpe": "8–9", "instructions": "SETUP\nBench at 30°. Retract and depress scapulae to create a stable platform.\n\nEXECUTION\nLower weights for a strict 4s count. Focus on a deep stretch in the upper pectorals. Pause 1s at the bottom stretch position. Drive explosively but stop at 95% lockout to maintain continuous tension on the clavicular head." },
    { "name": "Weighted Dips (Chest Lean)", "details": "3 × 5–7 reps · 150s rest", "rpe": "8–9", "instructions": "SETUP\nTorso leaned 30° forward, chin tucked to chest.\n\nEXECUTION\n4s negative count. Descend until shoulders are slightly below elbows. Feel the lower pec stretch. Pause 1s at bottom. Drive up using chest compression, avoiding excessive tricep takeover at the top." },
    { "name": "Seated DB Overhead Press", "details": "4 × 6–8 reps · 150s rest", "rpe": "8", "instructions": "SETUP\nBench at 80°. Position elbows 30° forward in the Scapular Plane.\n\nEXECUTION\n4s negative. Lower dumbbells to ear level. Press to full lockout while keeping ribs tucked to avoid lumbar hyperextension. Targets anterior deltoid and upper pec." },
    { "name": "Chest-Supported T-Bar Row", "details": "4 × 8–10 reps · 120s rest", "rpe": "8", "instructions": "SETUP\nPad firmly against sternum.\n\nEXECUTION\n3s negative. Initiate with scapular retraction (squeeze blades). Pull elbows past the midline. Full dead-hang stretch at the bottom to maximize lat and rhomboid recruitment." },
    { "name": "Cable Lateral Raise", "details": "3 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "SETUP\nCable at hand height, pulling from behind the body.\n\nEXECUTION\n2s negative. Raise to shoulder height with pinky slightly higher than thumb. Pause at peak. Targets the lateral deltoid in its most stretched position." },
    { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 × 12–15 reps · 60s rest", "rpe": "9", "instructions": "SETUP\nSeat height so handles are at eye level.\n\nEXECUTION\nKeep scapulae protracted (rounded forward) throughout. Pull out in a wide arc using only the rear delts. Do not squeeze shoulder blades together; that uses traps." },
    { "name": "DB Hammer Curls", "details": "3 × 10–12 reps · 60s rest", "rpe": "8–9", "instructions": "EXECUTION\nNeutral grip (palms facing). Slow 3s eccentric. Focus on the Brachialis (muscle under the bicep) to push the bicep up, increasing arm width." },
    { "name": "Overhead Rope Extension", "details": "3 × 10–12 reps · 60s rest", "rpe": "8–9", "instructions": "SETUP\nHigh pulley. Back to machine.\n\nEXECUTION\n3s negative. Allow hands to go deep behind the head for maximum long-head stretch. Flare the rope at the top of the movement for peak lateral head contraction." }
  ], "abFinisher": { "name": "Cable Crunches", "details": "4 × 10–12 reps · 60s rest", "instructions": "SETUP\nKneeling. Rope behind neck.\n\nEXECUTION\nFlex the spine, attempting to touch elbows to knees. DO NOT pivot at the hips. Exhale and crunch the ribs into the pelvis. Slow controlled return." } },

  { "day": 2, "title": "Lower 1", "subtitle": "Strength", "duration": "70–75m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 × 6–8 reps · 150s rest", "rpe": "8–9", "instructions": "SETUP\nBench at scapula level. Chin tucked.\n\nEXECUTION\n3s negative. Drive through heels. 2s hard squeeze at peak contraction with a Posterior Pelvic Tilt (tuck the tailbone). Do not hyperextend the lower back." },
    { "name": "Bulgarian Split Squat", "details": "4 × 7–9 reps · 120s rest", "rpe": "8–9", "instructions": "SETUP\nTorso leaned 15° forward. Short stride for glute bias.\n\nEXECUTION\n3s negative. Sink deep until the glute is at maximum stretch. Drive up, focusing all tension on the front leg glute-ham tie-in." },
    { "name": "Romanian Deadlift", "details": "3 × 7–9 reps · 150s rest", "rpe": "8", "instructions": "SETUP\nFeet hip-width.\n\nEXECUTION\n4s negative. Hinge back as if closing a door with your glutes. Keep bar glued to shins. Stop when hamstrings are at maximum tension. Do not round the spine." },
    { "name": "Leg Extension", "details": "3 × 10–12 reps · 75s rest", "rpe": "9", "instructions": "EXECUTION\n3s negative. Lean slightly back in the seat. Point toes slightly inward to target the vastus lateralis (outer quad sweep). 1s hard squeeze at the top." },
    { "name": "Standing Calf Raise", "details": "4 × 10–12 reps · 60s rest", "rpe": "8", "instructions": "EXECUTION\n4s negative. Lower into a deep stretch. Pause for 1s in the stretch to kill the stretch-reflex. Drive onto big toes and squeeze for 1s." }
  ] },

  { "day": 3, "title": "Upper 2", "subtitle": "Hypertrophy", "duration": "55–60m", "exercises": [
    { "name": "Incline DB Press (45°)", "details": "3 × 9–11 reps · 90s rest", "rpe": "9", "instructions": "Higher angle targets the uppermost clavicular fibers. Focus on driving the dumbbells toward each other at the top (adduction) without touching them." },
    { "name": "Low-to-High Cable Fly", "details": "4 × 10–12 reps + Partials · 90s rest", "rpe": "10", "instructions": "EXECUTION\nCross hands over at the top for peak upper-pec contraction. Upon reaching full ROM failure, perform 5–6 lengthened partials moving only from the bottom stretch to halfway up." },
    { "name": "Seated DB Lateral Raise", "details": "4 × 12–15 reps + Partials · 75s rest", "rpe": "10", "instructions": "EXECUTION\nRaise to shoulder height. Upon failure, immediately perform partials in the bottom 30% of the ROM. The stretch position is where the side delt receives the highest hypertrophic signal." },
    { "name": "Lat Pulldown (Neutral)", "details": "3 × 10–12 reps · 90s rest", "rpe": "8–9", "instructions": "SETUP\nPalms facing each other.\n\nEXECUTION\nDrive elbows straight down. Full dead-hang at the top to stretch the lats. Focus on pulling with the lats, not the biceps." },
    { "name": "Cable Triceps Pushdown", "details": "3 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "SETUP\nStraight bar.\n\nEXECUTION\nKeep elbows pinned. Focus on the lateral head of the triceps. Squeeze hard at the bottom. Control the return to eye level." },
    { "name": "Cable Bicep Curl", "details": "3 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "EXECUTION\nKeep shoulders pinned back. Do not allow elbows to drift forward. Constant tension: do not rest at the bottom or top of the rep." }
  ] },

  { "day": 4, "title": "Lower 2", "subtitle": "Hypertrophy", "duration": "55–60m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 × 9–11 reps · 90s rest", "rpe": "9", "instructions": "Focus on high-rep endurance. Maintain a constant pace, but never skip the 1s lockout squeeze. Your upper glutes should feel pumped by set 2." },
    { "name": "Leg Press (Glute Stance)", "details": "3 × 10–12 reps · 90s rest", "rpe": "9", "instructions": "SETUP\nFeet at the very top of the platform, wider than shoulders.\n\nEXECUTION\nLower as deep as possible without the tailbone lifting off the seat. Drive through heels to bias glutes." },
    { "name": "45° Back Extension", "details": "3 × 12–15 reps · 75s rest", "rpe": "8–9", "instructions": "SETUP\nPad just below the hip bone.\n\nEXECUTION\nRound the upper back (flexion). Use ONLY the glutes to pull the torso up. Do not look up or flatten your back; this keeps tension strictly on the glute shelf." },
    { "name": "Lying Leg Curl", "details": "3 × 10–12 reps + Partials · 75s rest", "rpe": "10", "instructions": "EXECUTION\nKeep hips pressed into the pad. Upon full ROM failure, perform partial reps in the fully stretched position to hit the distal hamstring fibers." },
    { "name": "Seated Calf Raise", "details": "4 × 12–15 reps · 60s rest", "rpe": "8", "instructions": "EXECUTION\nSpecific to the Soleus muscle. Use a 4s eccentric. This muscle requires higher volume and slower tempos to grow." }
  ] },

  { "day": 5, "title": "Upper 3", "subtitle": "Metabolic", "duration": "60–65m", "exercises": [
    { "name": "Pec Deck Fly", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "PROTOCOL\nSet failure at 12–15 reps. Rest 10s (3–5 breaths). Do 4–5 reps. Rest 10s. Repeat for 4 clusters total. Keep constant tension; do not let weights touch." },
    { "name": "Machine Shoulder Press", "details": "3 × 12–15 reps · 75s rest", "rpe": "9–10", "instructions": "EXECUTION\nNeutral or standard grip. Push into the seat to create stability. Take every set to technical failure. The machine allows for safe absolute failure." },
    { "name": "Chest-Supported Row", "details": "3 × 12–15 reps · 75s rest", "rpe": "8–9", "instructions": "EXECUTION\nFocus on width rows. Pull elbows out to 45°. Squeeze the rear delts and mid-traps. High metabolic stress with short rest." },
    { "name": "Cable Lateral Raise", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "PROTOCOL\nMyo-reps. Same as Pec Deck. This is the final side-delt assault of the week. Focus on the burn and cell swelling." },
    { "name": "Face Pulls", "details": "3 × 15–20 reps · 60s rest", "rpe": "8", "instructions": "SETUP\nRope at eye level.\n\nEXECUTION\nPull toward forehead while rotating fists back. Squeeze rear delts. Essential for shoulder health and 3D appearance." },
    { "name": "Arm Superset: Skull/Curl", "details": "3 × 12–15 reps · 60s rest", "rpe": "9–10", "instructions": "SETUP\nSingle cable station with EZ-bar or rope.\n\nEXECUTION\nComplete Triceps then immediately switch to Biceps. No rest between exercises." }
  ] },

  { "day": 6, "title": "Lower 3", "subtitle": "Metabolic", "duration": "115m", "exercises": [
    { "name": "45° Cable Kickback", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "SETUP\nAnkle strap.\n\nEXECUTION\nKick diagonally UP and OUT (45°). This aligns with the upper fibers of the gluteus maximus and medius. Myo-rep protocol." },
    { "name": "Hip Abduction Machine", "details": "3 × 15–20 reps (Drop) · 75s rest", "rpe": "9–10", "instructions": "SETUP\nLean torso forward 30°.\n\nEXECUTION\nPush out hard. Drop weight by 30% on the final set and go to absolute failure. Targets the glute shelf." },
    { "name": "Hack Squat", "details": "3 × 10–12 reps · 90s rest", "rpe": "8–9", "instructions": "SETUP\nFeet low on platform.\n\nEXECUTION\nMaximum depth. This is a quad-dominant finisher. Keep heels pinned. Control the negative." },
    { "name": "Seated Leg Curl", "details": "3 × 15–20 reps · 75s rest", "rpe": "9", "instructions": "EXECUTION\nFocus on high-rep metabolic fatigue. Do not allow your butt to lift off the seat during the curl." },
    { "name": "Machine Hip Thrust", "details": "1 Activation + 4 Clusters · 90s rest", "rpe": "9–10", "instructions": "PROTOCOL\nFinal glute depletion. Use machine for maximum stability so you can focus purely on the Myo-rep burn." },
    { "name": "Standing Calf Raise", "details": "4 × 15–20 reps · 45s rest", "rpe": "8–9", "instructions": "EXECUTION\nHigh frequency volume. Bounce-free reps. Squeeze at the top like you are trying to stand on your tiptoes." }
  ], "abFinisher": { "name": "Inclined Leg Raises", "details": "3 × 12–15 reps · 60s rest", "instructions": "SETUP\nIncline bench (head at top).\n\nEXECUTION\nLift your butt off the bench at the top of the movement (Posterior Pelvic Tilt). Pelvic rotation, not just a leg lift." },
     "cardio": { "name": "40m Zone 2 Cardio", "details": "1 × 40 mins", "instructions": "PACING\nConversational. This clears the metabolic waste from the training week. Do not enter Zone 3." } },

  { "day": 7, "title": "Standby", "subtitle": "Recovery", "duration": "—", "exercises": [] }
];

/* ─── State ───────────────────────────────────────────────────── */
let progress      = JSON.parse(localStorage.getItem('workoutSysProgress'))      || {};
let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
let activeTimer   = null;
let timerEndTime  = 0;
let clickLock     = false;
let longPressTimer = null;

/* ─── Timer ───────────────────────────────────────────────────── */
function startTimer(seconds) {
  if (activeTimer) clearInterval(activeTimer);
  timerEndTime = Date.now() + seconds * 1000;
  const display = document.getElementById('timer-display');
  display.classList.remove('hidden', 'urgent');
  display.classList.add('visible');

  const tick = () => {
    const remaining = Math.round((timerEndTime - Date.now()) / 1000);
    if (remaining <= 0) {
      clearInterval(activeTimer);
      activeTimer = null;
      display.classList.remove('visible', 'urgent');
      if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
    } else {
      const m = Math.floor(remaining / 60).toString().padStart(2, '0');
      const s = (remaining % 60).toString().padStart(2, '0');
      display.textContent = `${m}:${s}`;
      if (remaining <= 10) display.classList.add('urgent');
    }
  };
  tick();
  activeTimer = setInterval(tick, 250);
}

function stopTimer() {
  if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
  const display = document.getElementById('timer-display');
  display.classList.remove('visible', 'urgent');
}

/* ─── Render ──────────────────────────────────────────────────── */
function renderWorkout(idx) {
  const data = workoutData[idx];
  const titleEl    = document.getElementById('workout-title');
  const durEl      = document.getElementById('workout-duration');
  const list       = document.getElementById('exercise-list');
  const compList   = document.getElementById('completed-list');
  const compSection= document.getElementById('completed-section');
  const progressWrap = document.getElementById('progress-bar-wrap');
  const progressFill = document.getElementById('progress-bar-fill');

  // Title
  titleEl.innerHTML = `${data.title}<br><em style="font-style:italic;opacity:0.55;">${data.subtitle}</em>`;
  durEl.textContent = data.duration === '—' ? '' : `EST. ${data.duration}`;

  list.innerHTML = '';
  compList.innerHTML = '';

  // Rest day
  if (data.exercises.length === 0) {
    compSection.classList.add('hidden');
    progressWrap.classList.add('hidden');
    list.innerHTML = `
      <li class="rest-day-message">
        <h3 class="serif-title">Rest &<br><em>Recover</em></h3>
        <p style="margin-top:16px;">No loading today. Let the adaptation happen.</p>
      </li>`;
    return;
  }

  // Build exercise items
  const items = [...data.exercises];
  if (data.abFinisher) items.push({ ...data.abFinisher, idType: 'ab' });
  if (data.cardio)     items.push({ ...data.cardio,     idType: 'cardio' });

  let totalSets = 0;
  let doneSets  = 0;

  items.forEach((ex, i) => {
    const id      = `d${idx}-${ex.idType || 'e'}${i}`;
    const match   = ex.details.match(/(\d+)\s*[×x]\s*\d/) || ex.details.match(/(\d+)\s+Activation/i) || [0, 1];
    const total   = parseInt(match[1]) || 1;
    const current = progress[id] || 0;

    totalSets += total;
    doneSets  += Math.min(current, total);

    const li = document.createElement('li');
    li.className = 'exercise-item';
    li.dataset.id = id;
    li.dataset.total = total;
    li.dataset.idx = idx;
    li.dataset.exName = ex.name;
    li.dataset.instructions = ex.instructions || '';

    const rpe = ex.rpe
      ? `<span class="rpe-tag">RPE ${ex.rpe}</span>`
      : '';

    li.innerHTML = `
      <span class="set-counter ${current >= total ? 'sets-complete' : ''}">${current}/${total}</span>
      <div class="exercise-details">
        <h3>${ex.name}${rpe}</h3>
        <p>${ex.details}</p>
      </div>
      <button class="info-btn" aria-label="Instructions">i</button>
    `;

    // Tap: increment
    li.addEventListener('click', (e) => {
      if (e.target.closest('.info-btn')) return;
      if (clickLock) return;
      updateProgress(id, total, 1, idx);
    });

    // Long press / right-click: decrement
    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      updateProgress(id, total, -1, idx);
    });
    li.addEventListener('touchstart', () => {
      longPressTimer = setTimeout(() => {
        clickLock = true;
        updateProgress(id, total, -1, idx);
        if (navigator.vibrate) navigator.vibrate(30);
      }, 500);
    }, { passive: true });
    li.addEventListener('touchend', () => {
      clearTimeout(longPressTimer);
      setTimeout(() => { clickLock = false; }, 50);
    });

    // Info button
    li.querySelector('.info-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      showInfo(ex.name, ex.instructions || 'No instructions available.');
    });

    (current >= total ? compList : list).appendChild(li);
  });

  // Progress bar
  progressWrap.classList.remove('hidden');
  const pct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;
  progressFill.style.width = `${pct}%`;

  compSection.classList.toggle('hidden', compList.children.length === 0);

  // Check for day complete
  const dayKey = `day-${idx}`;
  if (doneSets === totalSets && totalSets > 0 && !completedDays.includes(dayKey)) {
    completedDays.push(dayKey);
    localStorage.setItem('workoutSysCompletedDays', JSON.stringify(completedDays));
    markDayComplete(idx);
    setTimeout(() => showCompletion(data.title), 400);
  }
}

/* ─── Update progress ─────────────────────────────────────────── */
function updateProgress(id, total, delta, idx) {
  const prev = progress[id] || 0;
  progress[id] = Math.max(0, Math.min(total, prev + delta));
  localStorage.setItem('workoutSysProgress', JSON.stringify(progress));

  // Start rest timer on increment (not on last set)
  if (delta > 0 && progress[id] < total) {
    const day  = workoutData[idx];
    const allEx = [
      ...day.exercises,
      ...(day.abFinisher ? [day.abFinisher] : []),
      ...(day.cardio     ? [day.cardio]     : [])
    ];
    // Find matching exercise by scanning rendered items
    const liEl = document.querySelector(`[data-id="${id}"]`);
    if (liEl) {
      const detailsText = liEl.querySelector('.exercise-details p')?.textContent || '';
      const secMatch = detailsText.match(/(\d+)s\s*rest/i);
      if (secMatch) startTimer(parseInt(secMatch[1]));
    }
  }

  // Stop timer if decrement resets a completed exercise
  if (delta < 0 && prev >= total) stopTimer();

  renderWorkout(idx);
}

/* ─── Mark day btn complete ───────────────────────────────────── */
function markDayComplete(idx) {
  const btns = document.querySelectorAll('.day-btn');
  if (btns[idx]) btns[idx].classList.add('day-complete');
}

/* ─── Info modal ──────────────────────────────────────────────── */
function showInfo(title, rawText) {
  document.getElementById('info-modal-title').textContent = title;
  const body = document.getElementById('info-modal-instructions');

  // Parse SECTION\nText into styled blocks
  const lines = (rawText || '').split('\n');
  let html = '';
  let buffer = [];

  const flush = (label) => {
    if (!label && buffer.length) {
      html += `<p>${buffer.join('<br>')}</p>`;
    } else if (label) {
      html += `<div class="instruction-section"><span class="instruction-label">${label}</span><p>${buffer.join('<br>')}</p></div>`;
    }
    buffer = [];
  };

  let currentLabel = '';
  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;
    // Detect section header: all caps, ends with no period, short
    if (/^[A-Z][A-Z\s\/]+$/.test(trimmed) && trimmed.length < 30) {
      flush(currentLabel);
      currentLabel = trimmed;
    } else {
      buffer.push(trimmed);
    }
  });
  flush(currentLabel);

  body.innerHTML = html;
  openModal('info-modal-overlay');
}

/* ─── Modal helpers ───────────────────────────────────────────── */
function openModal(id) {
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  requestAnimationFrame(() => el.classList.add('visible'));
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  const el = document.getElementById(id);
  el.classList.remove('visible');
  document.body.style.overflow = '';
  el.addEventListener('transitionend', () => el.classList.add('hidden'), { once: true });
}

/* ─── Completion ──────────────────────────────────────────────── */
function showCompletion(title) {
  document.getElementById('completion-message').textContent =
    `${title} logged. Rest, eat, and come back stronger.`;
  const overlay = document.getElementById('completion-overlay');
  overlay.classList.remove('hidden');
  requestAnimationFrame(() => overlay.classList.add('visible'));
  overlay.onclick = () => {
    overlay.classList.remove('visible');
    overlay.addEventListener('transitionend', () => overlay.classList.add('hidden'), { once: true });
  };
}

/* ─── Theme ───────────────────────────────────────────────────── */
function toggleTheme() {
  const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = next;
  localStorage.setItem('workoutSysTheme', next);
  document.querySelector('meta[name="theme-color"]')
    .setAttribute('content', next === 'light' ? '#f5f0eb' : '#0e0d0c');
}

/* ─── Init ────────────────────────────────────────────────────── */
function init() {
  // Theme
  const savedTheme = localStorage.getItem('workoutSysTheme') || 'dark';
  document.body.dataset.theme = savedTheme;
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Day nav
  const nav = document.getElementById('day-selector');
  const labels = ['MO','TU','WE','TH','FR','SA','SU'];
  labels.forEach((label, i) => {
    const btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.textContent = label;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-label', `Day ${i + 1}`);
    if (completedDays.includes(`day-${i}`)) btn.classList.add('day-complete');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      stopTimer();
      renderWorkout(i);
    });
    nav.appendChild(btn);
  });

  // Auto-select today
  const today = (new Date().getDay() + 6) % 7;
  nav.children[today].click();

  // Modals
  document.getElementById('info-modal-close-btn').addEventListener('click', () => closeModal('info-modal-overlay'));
  document.getElementById('info-modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('info-modal-overlay');
  });

  document.getElementById('reset-button').addEventListener('click', () => openModal('reset-modal-overlay'));
  document.getElementById('cancel-reset-btn').addEventListener('click', () => closeModal('reset-modal-overlay'));
  document.getElementById('confirm-reset-btn').addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  // Tap timer to dismiss
  document.getElementById('timer-display').addEventListener('click', stopTimer);

  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();
