(function() {
  'use strict';

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
      { "name": "Cable Triceps Pushdown", "details": "3 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "SETUP: Straight bar. EXECUTION: Keep elbows pinned. Lateral head focus. Squeeze hard at bottom." }
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
    { "day": 7, "title": "Structural", "subtitle": "Weak Points + Base", "duration": "50–60m", "exercises": [
      { "name": "Heels-Elevated DB Sissy Squat", "details": "4 × 10–12 reps · 90s rest", "rpe": "8–9", "instructions": "SETUP: Elevate heels on a wedge or plates. EXECUTION: Drive knees forward over toes, keeping torso perfectly upright to isolate the quads." },
      { "name": "Single-Arm Iliac Lat Pulldown", "details": "3 × 10–12 reps · 90s rest", "rpe": "9", "instructions": "SETUP: Use a single D-handle. EXECUTION: Pull your elbow tight down to your hip to target the lower iliac lat fibers. Control the negative." },
      { "name": "Incline DB Bicep Curl", "details": "4 × 10–12 reps · 60s rest", "rpe": "9", "instructions": "SETUP: Bench at 45–60°. EXECUTION: Let arms hang straight down for a full stretch. Supinate (turn palms up) as you curl." },
      { "name": "Overhead Cable Triceps Ext.", "details": "4 × 12–15 reps · 60s rest", "rpe": "9", "instructions": "SETUP: Set cable low. EXECUTION: Keep elbows fixed in place pointing forward. Press up to full lockout to target the long head." },
      { "name": "Cable Pallof Press", "details": "3 × 12–15 reps/side · 45s rest", "rpe": "8", "instructions": "EXECUTION: Stand perpendicular to cable. Press handle straight out in front of your chest and hold for 1s. Resist the rotational pull." }
    ], "cardio": { "name": "Zone 2 Walk", "details": "1 × 30 mins", "instructions": "PACING: Maintain a brisk, steady pace. You should be able to hold a conversation without gasping for air." } }
  ];

  /* ─── State ───────────────────────────────────────────────────── */
  let progress      = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
  let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
  let lastTouched   = JSON.parse(localStorage.getItem('workoutSysLastTouched')) || {};
  let activeTimer   = null;

  /* ─── Helpers ─────────────────────────────────────────────────── */
  const parseSets = (details) => {
    const m = details.match(/^(\d+)\s*[×x]/) || details.match(/^(\d+)\s+Activation/i);
    return m ? parseInt(m[1], 10) : 1;
  };

  const getRestSeconds = (details) => {
    const m = details.match(/(\d+)s\s*rest/i);
    return m ? parseInt(m[1], 10) : 90;
  };

  const save = () => {
    localStorage.setItem('workoutSysProgress', JSON.stringify(progress));
    localStorage.setItem('workoutSysLastTouched', JSON.stringify(lastTouched));
  };

  /* ─── WORKOUT SYSTEM ──────────────────────────────────────────── */
  function renderWorkout(idx) {
    const data = workoutData[idx];
    const list = document.getElementById('exercise-list');
    const compList = document.getElementById('completed-list');
    const compSection = document.getElementById('completed-section');
    const fill = document.getElementById('progress-bar-fill');
    const progressLabel = document.getElementById('progress-label');

    document.getElementById('workout-title').innerHTML =
      `${data.title}<br><span style="font-weight:200;font-size:0.5em;opacity:0.4;letter-spacing:0.02em;">${data.subtitle}</span>`;
    document.getElementById('workout-duration').textContent =
      data.duration === '—' ? '' : `EST. ${data.duration}`;

    list.innerHTML = '';
    compList.innerHTML = '';

    if (data.exercises.length === 0) {
      compSection.classList.add('hidden');
      fill.parentElement.classList.add('hidden');
      progressLabel.classList.add('hidden');
      list.innerHTML = `<li class="rest-day-message"><h3>System Standby</h3><p>Focus on metabolic recovery and protein synthesis.</p></li>`;
      return;
    }

    const items = [...data.exercises];
    if (data.abFinisher) items.push({ ...data.abFinisher, idType: 'ab' });
    if (data.cardio)     items.push({ ...data.cardio, idType: 'cardio' });

    let total = 0, done = 0;
    const activeNodesData = [];
    const pendingNodes    = [];
    const completedNodes  = [];

    items.forEach((ex, i) => {
      const id = `d${idx}-${ex.idType || 'e'}${i}`;
      const sTotal = parseSets(ex.details);
      const sCurrent = Math.min(progress[id] || 0, sTotal);

      total += sTotal;
      done  += sCurrent;

      const li = document.createElement('li');
      li.className = 'exercise-item';
      li.innerHTML = `
        <div class="set-counter ${sCurrent >= sTotal ? 'sets-complete' : ''}">${sCurrent}<span class="slash">/</span>${sTotal}</div>
        <span class="exercise-name">${ex.name}</span>
        <div class="exercise-meta">
          <span class="exercise-details-text">${ex.details}</span>
          ${ex.rpe ? `<span class="rpe-tag">RPE ${ex.rpe}</span>` : ''}
        </div>
        <button class="info-btn" aria-label="Instructions">i</button>
      `;

      let pressTimer, isLongPress = false, startX = 0, startY = 0;

      li.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.info-btn')) return;
        isLongPress = false;
        startX = e.clientX; startY = e.clientY;
        li.setPointerCapture(e.pointerId);
        pressTimer = setTimeout(() => {
          isLongPress = true;
          if (navigator.vibrate) navigator.vibrate(40);
          const newVal = Math.max(0, (progress[id] || 0) - 1);
          progress[id] = newVal;
          lastTouched[id] = Date.now();
          if (newVal < sTotal && activeTimer) {
            clearInterval(activeTimer);
            document.getElementById('timer-display').classList.remove('visible');
            activeTimer = null;
          }
          save();
          renderWorkout(idx);
        }, 450);
      });

      li.addEventListener('pointermove', (e) => {
        if (Math.abs(e.clientY - startY) > 12 || Math.abs(e.clientX - startX) > 12) clearTimeout(pressTimer);
      });

      li.addEventListener('pointerup', (e) => {
        clearTimeout(pressTimer);
        if (isLongPress || e.target.closest('.info-btn')) return;
        const newVal = Math.min(sTotal, (progress[id] || 0) + 1);
        progress[id] = newVal;
        lastTouched[id] = Date.now();
        if (newVal < sTotal) startTimer(getRestSeconds(ex.details));
        save();
        renderWorkout(idx);
      });

      li.addEventListener('pointercancel', () => clearTimeout(pressTimer));

      li.querySelector('.info-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        showInfo(ex.name, ex.instructions || '');
      });

      if (sCurrent >= sTotal) completedNodes.push(li);
      else if (sCurrent > 0) activeNodesData.push({ node: li, ts: lastTouched[id] || 0 });
      else pendingNodes.push(li);
    });

    activeNodesData.sort((a, b) => b.ts - a.ts);
    activeNodesData.forEach((item, index) => {
      item.node.classList.add(index === 0 ? 'primary-active' : 'secondary-active');
      list.appendChild(item.node);
    });
    pendingNodes.forEach(node => list.appendChild(node));
    completedNodes.forEach(node => compList.appendChild(node));

    fill.parentElement.classList.remove('hidden');
    progressLabel.classList.remove('hidden');
    fill.style.width = `${(done / total) * 100}%`;
    progressLabel.textContent = `${done} / ${total} SETS`;

    compSection.classList.toggle('hidden', compList.children.length === 0);

    if (done === total && total > 0 && !completedDays.includes(`day-${idx}`)) {
      completedDays.push(`day-${idx}`);
      localStorage.setItem('workoutSysCompletedDays', JSON.stringify(completedDays));
      document.querySelectorAll('.day-btn')[idx].classList.add('day-complete');
      showCompletion(data.title);
    }
  }

  /* ─── Timer ───────────────────────────────────────────────────── */
  function startTimer(sec) {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
    const end = Date.now() + sec * 1000;
    const el = document.getElementById('timer-display');
    el.classList.add('visible');

    function tick() {
      const rem = Math.ceil((end - Date.now()) / 1000);
      if (rem <= 0) {
        clearInterval(activeTimer);
        activeTimer = null;
        el.classList.remove('visible');
        if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
      } else {
        el.textContent = `${Math.floor(rem / 60)}:${(rem % 60).toString().padStart(2, '0')}`;
      }
    }
    tick();
    activeTimer = setInterval(tick, 500);
  }

  /* ─── Overlays ────────────────────────────────────────────────── */
  function showInfo(title, text) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-instructions').innerHTML = text
      .split(/(SETUP:|EXECUTION:|PROTOCOL:|PACING:)/g)
      .filter(Boolean)
      .map(l => {
        l = l.trim();
        return /^(SETUP:|EXECUTION:|PROTOCOL:|PACING:)$/.test(l)
          ? `<span class="instruction-label">${l.replace(':', '')}</span>`
          : `<p>${l}</p>`;
      }).join('');
    document.getElementById('info-modal-overlay').classList.add('visible');
  }

  function showCompletion(title) {
    document.getElementById('completion-message').textContent = `${title} logged. Recover well.`;
    const el = document.getElementById('completion-overlay');
    el.classList.add('visible');
    el.onclick = () => el.classList.remove('visible');
  }

  /* ─── MIND SYSTEM ─────────────────────────────────────────────── */
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
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });
    document.querySelectorAll('.mind-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === targetId);
    });
  }

  document.querySelectorAll('.mind-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMindTab(tab.dataset.target));
  });

  document.querySelectorAll('.ground-trigger').forEach(btn => {
    btn.addEventListener('click', function() { this.classList.toggle('done'); });
  });

  document.getElementById('reset-mind-btn').addEventListener('click', () => {
    document.querySelectorAll('.action-btn').forEach(c => c.classList.remove('done'));
    nameInput.value = '';
    updateMantras();
    switchMindTab('loop-tab');
    stopBreathe();
  });

  /* ─── Breathing Engine ────────────────────────────────────────── */
  let breatheActive = false;
  let currentBreatheMode = [];
  let currentPhaseIndex = 0;
  let countdownInterval = null;

  const breatheModes = {
    vagus: [ { label: 'Inhale', time: 4, action: 'in' }, { label: 'Exhale', time: 6, action: 'out' } ],
    box: [ { label: 'Inhale', time: 4, action: 'in' }, { label: 'Hold', time: 4, action: 'hold' }, { label: 'Exhale', time: 4, action: 'out' }, { label: 'Hold', time: 4, action: 'hold' } ],
    relax: [ { label: 'Inhale', time: 4, action: 'in' }, { label: 'Hold', time: 7, action: 'hold' }, { label: 'Exhale', time: 8, action: 'out' } ]
  };

  document.querySelectorAll('.breathe-trigger').forEach(btn => {
    btn.addEventListener('click', () => openBreatheModal(btn.dataset.mode));
  });

  function openBreatheModal(modeKey) {
    currentBreatheMode = breatheModes[modeKey];
    currentPhaseIndex = 0;
    breatheActive = true;

    const circle = document.getElementById('breathe-circle-huge');
    const label = document.getElementById('breathe-label-huge');
    const display = document.getElementById('breathe-display-huge');

    circle.style.transition = 'none';
    circle.style.transform = 'translate(-50%, -50%) scale(0.15)';
    circle.style.opacity = '0';
    label.textContent = 'Prepare';
    display.textContent = '·';

    document.getElementById('breathe-modal-overlay').classList.add('visible');
    setTimeout(runBreathePhase, 600);
  }

  function stopBreathe() {
    breatheActive = false;
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    document.getElementById('breathe-modal-overlay').classList.remove('visible');

    const circle = document.getElementById('breathe-circle-huge');
    setTimeout(() => {
      circle.style.transition = 'none';
      circle.style.transform = 'translate(-50%, -50%) scale(0.15)';
      circle.style.opacity = '0';
      document.getElementById('breathe-label-huge').textContent = 'Prepare';
      document.getElementById('breathe-display-huge').textContent = '·';
    }, 300);
  }

  document.getElementById('breathe-stop-btn').addEventListener('click', stopBreathe);

  function runBreathePhase() {
    if (!breatheActive) return;
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }

    const phase = currentBreatheMode[currentPhaseIndex];
    const display = document.getElementById('breathe-display-huge');
    const label = document.getElementById('breathe-label-huge');
    const circle = document.getElementById('breathe-circle-huge');

    label.textContent = phase.label;
    let count = phase.time;
    display.textContent = count;

    circle.style.transition = `transform ${phase.time}s cubic-bezier(0.45,0,0.55,1), opacity ${phase.time}s ease`;
    label.style.transition = `opacity ${phase.time * 0.5}s ease`;

    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (phase.action === 'in') {
        circle.style.transform = 'translate(-50%, -50%) scale(1)';
        circle.style.opacity = '0.9';
        label.style.opacity = '1';
      } else if (phase.action === 'out') {
        circle.style.transform = 'translate(-50%, -50%) scale(0.25)';
        circle.style.opacity = '0.15';
        label.style.opacity = '0.55';
      } else {
        label.style.opacity = '0.7';
      }
    }));

    countdownInterval = setInterval(() => {
      if (!breatheActive) { clearInterval(countdownInterval); return; }
      count--;
      if (count > 0) {
        display.textContent = count;
      } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
        currentPhaseIndex = (currentPhaseIndex + 1) % currentBreatheMode.length;
        runBreathePhase();
      }
    }, 1000);
  }

  /* ─── INIT ────────────────────────────────────────────────────── */
  function init() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.error('SW Error:', err));
      });
    }

    const btnBody = document.getElementById('mode-body-btn');
    const btnMind = document.getElementById('mode-mind-btn');
    const viewBody = document.getElementById('view-body');
    const viewMind = document.getElementById('view-mind');
    const daySel = document.getElementById('day-selector');

    btnBody.addEventListener('click', () => {
      btnBody.classList.add('active'); btnMind.classList.remove('active');
      viewBody.classList.remove('hidden'); viewMind.classList.add('hidden');
      daySel.classList.remove('hidden');
    });

    btnMind.addEventListener('click', () => {
      btnMind.classList.add('active'); btnBody.classList.remove('active');
      viewMind.classList.remove('hidden'); viewBody.classList.add('hidden');
      daySel.classList.add('hidden');
    });

    ['MO','TU','WE','TH','FR','SA','SU'].forEach((l, i) => {
      const b = document.createElement('button');
      b.className = 'day-btn';
      b.setAttribute('role', 'tab');
      b.textContent = l;
      if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
      b.addEventListener('click', () => {
        document.querySelectorAll('.day-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        renderWorkout(i);
      });
      daySel.appendChild(b);
    });

    const savedTheme = localStorage.getItem('workoutSysTheme');
    if (savedTheme) document.body.dataset.theme = savedTheme;
    
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      document.body.dataset.theme = next;
      localStorage.setItem('workoutSysTheme', next);
    });

    const infoOverlay = document.getElementById('info-modal-overlay');
    infoOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.getElementById('info-modal-close-btn').addEventListener('click', () => infoOverlay.classList.remove('visible'));

    const resetOverlay = document.getElementById('reset-modal-overlay');
    resetOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.getElementById('reset-button').addEventListener('click', () => resetOverlay.classList.add('visible'));

    document.getElementById('confirm-reset-btn').addEventListener('click', () => {
      ['workoutSysProgress','workoutSysCompletedDays','workoutSysLastTouched'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      resetOverlay.classList.remove('visible');
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('day-complete'));
      const activeIdx = Array.from(daySel.children).findIndex(b => b.classList.contains('active'));
      renderWorkout(activeIdx !== -1 ? activeIdx : ((new Date().getDay() + 6) % 7));
    });
    
    document.getElementById('cancel-reset-btn').addEventListener('click', () => resetOverlay.classList.remove('visible'));

    document.getElementById('breathe-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) stopBreathe();
    });

    updateMantras();
    const today = (new Date().getDay() + 6) % 7;
    daySel.children[today].click();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
