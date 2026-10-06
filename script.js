(function() {
  'use strict';

  /* ─── Workout Data (Upper/Lower Split structure) ─── */
  const workoutData = [
    { "day": 1, "title": "UPPER 1", "subtitle": "ANTERIOR LOAD", "exercises": [
      { "name": "Converging Incline Machine Press", "details": "3 × 6–8 reps · 120s rest", "instructions": "SETUP: Prime/Arsenal machine. EXECUTION: Drive hands up and inward. 2s pause in the deep stretch. Push to absolute failure on the final set." },
      { "name": "30° Incline Cable Fly", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Focus entirely on the bottom half of the movement. Maximize the clavicular pec stretch until you can no longer move the cables." },
      { "name": "Cable Cross-Body Lateral Raise", "details": "3 × 10–12 reps · 90s rest", "instructions": "SETUP: Cable set to wrist height. EXECUTION: Pull from across the body. The last 2 reps should be agonizingly slow." },
      { "name": "Single-Arm Iliac Lat Pulldown", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Single D-handle. EXECUTION: Pull elbow tight down to the hip. Control the negative allowing the scapula to fully open." },
      { "name": "Overhead Cable Triceps Ext.", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Keep elbows pinned pointing forward. Full lockout at the top to target the long head." },
      { "name": "Cross-Body Cable Hammer Curl", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Pull rope attachment across your torso to target the brachialis and push the bicep up." },
      { "name": "Cable Crunches", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Flex spine, ribs to pelvis. Heavy load focus, do not pivot at hips." }
    ]},
    { "day": 2, "title": "LOWER 1", "subtitle": "BASE FOUNDATION", "exercises": [
      { "name": "Quad-Biased Hack Squat", "details": "3 × 8–10 reps · 150s rest", "instructions": "SETUP: Feet placed very low and close together. EXECUTION: Maximize forward knee travel. 2s pause at the absolute bottom stretch. Survive the burn." },
      { "name": "Deficit Bulgarian Split Squat", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Front foot elevated on a plate. EXECUTION: Focus on the glute-ham tie-in and quad stretch at the bottom." },
      { "name": "Forward-Leaning Hip Abduction", "details": "3 × 12–15 reps · 90s rest", "instructions": "SETUP: Hinge torso 45° forward off the back pad. EXECUTION: Push out hard, pause for 1s at maximum contraction." },
      { "name": "Barbell Hip Thrust", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Heavy barbell overload. EXECUTION: Drive through heels, chin tucked. Lockout hard at the top without overextending the lumbar spine." },
      { "name": "Lying Leg Curl", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Technical failure on full ROM, immediately followed by 5-6 partials in the fully stretched position." },
      { "name": "Standing Calf Raise", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: 3s negative. 2s pause in the deep stretch to dissipate the Achilles reflex." }
    ]},
    { "day": 3, "title": "UPPER 2", "subtitle": "SCAPULAR WIDTH", "exercises": [
      { "name": "Decline Dumbbell Press", "details": "3 × 10–12 reps · 120s rest", "instructions": "SETUP: Slight decline bench. EXECUTION: The definitive classic movement for costal (lower) pec mass. Strict control." },
      { "name": "Deficit Weighted Dips", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Torso angled 30° forward. Lower until shoulders are below elbows. 2s pause in the stretch." },
      { "name": "Machine Lateral Raise", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Shift the resistance profile to the top. Hard 1s pause at the fully shortened (top) position on every rep." },
      { "name": "Chest-Supported T-Bar Row", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: 3s negative count. 2s dead-hang stretch at the bottom before initiating the next rep." },
      { "name": "Chest-Supported DB Rear Delt Fly", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Eliminates machine lock-in. Strict, honest rear-delt isolation without cheating." },
      { "name": "Incline DB Bicep Curl", "details": "3 × 10–12 reps · 90s rest", "instructions": "SETUP: Bench at 45°. EXECUTION: Let arms hang straight down for a full stretch before curling." }
    ]},
    { "day": 4, "title": "LOWER 2", "subtitle": "POSTERIOR CHAIN", "exercises": [
      { "name": "Leg Press (Glute Stance)", "details": "3 × 10–12 reps · 150s rest", "instructions": "SETUP: Feet high and wide on platform. EXECUTION: Drive through heels to bias glutes over quads. No lockout." },
      { "name": "Barbell Romanian Deadlift (RDL)", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: The absolute gold standard for glute and hamstring tension. Push the hips back to maximize the stretch." },
      { "name": "Seated Leg Extension", "details": "3 × 10–12 reps · 90s rest", "instructions": "SETUP: Lean torso as far back against the pad as possible. EXECUTION: Opens the hip angle to put the rectus femoris under maximum stretch tension." },
      { "name": "45° Cable Kickback", "details": "3 × 12–15 reps · 90s rest", "instructions": "SETUP: Ankle strap on low pulley. EXECUTION: Kick diagonally UP and OUT (45°). Aligns directly with upper glute medius fibers." },
      { "name": "45° Back Extension", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Round upper back. Use ONLY glutes to pull torso up. Keep chin tucked to spine." },
      { "name": "Seated Calf Raise", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: 4s negative count. Constant slow rhythm targeting the soleus." }
    ]},
    { "day": 5, "title": "UPPER 3", "subtitle": "DELTOID DENSITY", "exercises": [
      { "name": "Seated Machine Shoulder Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Neutral grip. Push hard into the back pad for stability. Control the negative for 3 seconds." },
      { "name": "Seated Dumbbell Lateral Raise", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Strict, heavy isolation to cap the lateral deltoids. No momentum from the legs." },
      { "name": "Flat Machine Chest Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Target the mid/sternal pec. 2s pause in the maximum stretched position." },
      { "name": "Neutral-Grip Cable Row", "details": "3 × 10–12 reps · 120s rest", "instructions": "EXECUTION: Keep elbows tucked tight to the torso to target the lat sweep. Pull to true failure." },
      { "name": "Cable Triceps Pushdown", "details": "3 × 10–12 reps · 90s rest", "instructions": "SETUP: Straight bar. EXECUTION: Keep elbows pinned. Lateral head focus." },
      { "name": "Machine Preacher Curl", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Overloads the shortened position of the bicep. Squeeze hard at the peak." },
      { "name": "Decline Bench Reverse Crunches", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Focus on lifting the pelvis. Slow 4s eccentric back to the bench." }
    ]},
    { "day": 6, "title": "LOWER 3", "subtitle": "METABOLIC FLUSH", "exercises": [
      { "name": "Machine Hip Thrust", "details": "3 × 10–12 reps · 120s rest", "instructions": "EXECUTION: Lock the pelvis in. Drive through the heels for a hard 1s contraction at the peak." },
      { "name": "Cable Pull-Through", "details": "3 × 12–15 reps · 90s rest", "instructions": "SETUP: Rope attachment on low pulley. EXECUTION: Highly stable, deep-stretch hip hinge. Squeeze glutes aggressively at lockout." },
      { "name": "Seated Leg Curl", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Lengthened partials. Perform reps only in the top 50% of the range of motion where the hamstring is stretched." },
      { "name": "Leg Extension (Metabolic Flush)", "details": "3 × 15–20 reps · 90s rest", "instructions": "EXECUTION: High rep burnout to flush the quads with blood. Constant tension, no pausing." },
      { "name": "Tibialis Raise", "details": "3 × 15–20 reps · 60s rest", "instructions": "EXECUTION: Dorsiflex hard against the resistance to build lower leg balance against the calves." },
      { "name": "Standing Calf Raise", "details": "3 × 15–20 reps · 60s rest", "instructions": "EXECUTION: Higher rep range today. Explosive concentric, controlled eccentric." },
      { "name": "Cable Pallof Press", "details": "3 × 12–15 reps · 60s rest", "instructions": "EXECUTION: Stand perpendicular to cable. Press handle straight out in front of your chest and hold for 1s." }
    ]},
    { "day": 7, "title": "SYS", "subtitle": "RECOVERY PROTOCOL", "exercises": [] }
  ];

  /* ─── State ───────────────────────────────────────────────────── */
  let progress      = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
  let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
  let lastTouched   = JSON.parse(localStorage.getItem('workoutSysLastTouched')) || {};
  let activeTimer   = null;
  let wakeLock      = null;

  const parseSets = (details) => { const m = details.match(/^(\d+)\s*[×x]/); return m ? parseInt(m[1], 10) : 1; };
  const getRestSeconds = (details) => { const m = details.match(/(\d+)s\s*rest/i); return m ? parseInt(m[1], 10) : 90; };
  const save = () => { localStorage.setItem('workoutSysProgress', JSON.stringify(progress)); localStorage.setItem('workoutSysLastTouched', JSON.stringify(lastTouched)); };
  const getMondayOfCurrentWeek = () => { const d = new Date(); const day = d.getDay(); const diff = d.getDate() - day + (day === 0 ? -6 : 1); return new Date(d.setDate(diff)).toDateString(); };

  async function toggleWakeLock(shouldLock) {
    if (!('wakeLock' in navigator)) return;
    try {
      if (shouldLock && !wakeLock) wakeLock = await navigator.wakeLock.request('screen');
      else if (!shouldLock && wakeLock) { await wakeLock.release(); wakeLock = null; }
    } catch (err) {}
  }

  /* Suspend Timers & Background Processing */
  document.addEventListener('visibilitychange', async () => {
    if (document.hidden && breatheActive) {
      // Prevent infinite interval draining battery in background
      stopBreathe();
    }
    if (wakeLock !== null && document.visibilityState === 'visible') { 
      try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {} 
    }
  });

  /* ─── WORKOUT SYSTEM (FLIP Animation) ─────────────────────────── */
  function renderWorkout(idx) {
    const data = workoutData[idx];
    const list = document.getElementById('exercise-list');
    const compList = document.getElementById('completed-list');
    const compSection = document.getElementById('completed-section');
    const fill = document.getElementById('progress-bar-fill');
    const progressLabel = document.getElementById('progress-label');

    const oldPositions = new Map();
    document.querySelectorAll('.exercise-item').forEach(node => {
      if (node.dataset.id) oldPositions.set(node.dataset.id, node.getBoundingClientRect());
    });

    document.getElementById('workout-title').innerHTML = data.subtitle 
      ? `${data.title}<br><span style="font-weight:200;color:var(--text-muted);text-transform:uppercase;">${data.subtitle}</span>`
      : data.title;

    list.innerHTML = ''; compList.innerHTML = '';

    const items = [...(data.exercises || [])];
    if (data.abFinisher) items.push({ ...data.abFinisher, idType: 'ab' });
    if (data.cardio)     items.push({ ...data.cardio, idType: 'cardio' });

    if (items.length === 0) {
      compSection.classList.add('hidden');
      fill.parentElement.classList.add('hidden');
      progressLabel.classList.add('hidden');
      list.innerHTML = `<li class="rest-day-message"><h3>SYS STANDBY</h3><p>Focus on metabolic recovery.</p></li>`;
      return;
    }

    let total = 0, done = 0;
    const activeNodesData = [], pendingNodes = [], completedNodes = [];
    const fragmentActive = document.createDocumentFragment(), fragmentComp = document.createDocumentFragment();

    items.forEach((ex, i) => {
      const id = `d${idx}-${ex.idType || 'e'}${i}`;
      const sTotal = parseSets(ex.details);
      const sCurrent = Math.min(progress[id] || 0, sTotal);
      total += sTotal; done += sCurrent;

      const li = document.createElement('li');
      li.className = 'exercise-item';
      li.dataset.id = id;
      li.innerHTML = `
        <div class="set-counter ${sCurrent >= sTotal ? 'sets-complete' : ''}">${sCurrent}<span class="slash">/</span>${sTotal}</div>
        <div class="exercise-info-wrapper">
          <span class="exercise-name">${ex.name}</span>
          <span class="exercise-details-text">${ex.details}</span>
        </div>
        <button class="info-btn" aria-label="Instructions"></button>
      `;

      let pressTimer, isLongPress = false, startX = 0, startY = 0;

      li.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.info-btn')) return;
        isLongPress = false; startX = e.clientX; startY = e.clientY;
        li.setPointerCapture(e.pointerId);
        pressTimer = setTimeout(() => {
          isLongPress = true;
          if (navigator.vibrate) navigator.vibrate(40);
          progress[id] = Math.max(0, (progress[id] || 0) - 1);
          lastTouched[id] = Date.now();
          if (progress[id] < sTotal && activeTimer) {
            clearInterval(activeTimer); document.getElementById('timer-display').classList.remove('visible');
            activeTimer = null; toggleWakeLock(false);
          }
          save(); renderWorkout(idx);
        }, 450);
      });

      li.addEventListener('pointermove', (e) => { if (Math.abs(e.clientY - startY) > 12 || Math.abs(e.clientX - startX) > 12) clearTimeout(pressTimer); });
      li.addEventListener('pointerup', (e) => {
        clearTimeout(pressTimer);
        if (isLongPress || e.target.closest('.info-btn')) return;
        progress[id] = Math.min(sTotal, (progress[id] || 0) + 1);
        lastTouched[id] = Date.now();
        if (progress[id] < sTotal) startTimer(getRestSeconds(ex.details));
        save(); renderWorkout(idx);
      });
      li.addEventListener('pointercancel', () => clearTimeout(pressTimer));
      li.addEventListener('contextmenu', (e) => e.preventDefault());
      li.querySelector('.info-btn').addEventListener('click', (e) => { e.stopPropagation(); showInfo(ex.name, ex.instructions || ''); });

      if (sCurrent >= sTotal) completedNodes.push(li);
      else if (sCurrent > 0) activeNodesData.push({ node: li, ts: lastTouched[id] || 0 });
      else pendingNodes.push(li);
    });

    activeNodesData.sort((a, b) => b.ts - a.ts).forEach((item, index) => {
      item.node.classList.add(index === 0 ? 'primary-active' : 'secondary-active');
      fragmentActive.appendChild(item.node);
    });
    pendingNodes.forEach(node => fragmentActive.appendChild(node));
    completedNodes.forEach(node => fragmentComp.appendChild(node));

    list.appendChild(fragmentActive);
    compList.appendChild(fragmentComp);

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

    document.querySelectorAll('.exercise-item').forEach(node => {
      const oldPos = oldPositions.get(node.dataset.id);
      if (oldPos) {
        const newPos = node.getBoundingClientRect();
        const deltaY = oldPos.top - newPos.top;
        if (deltaY !== 0) {
          node.style.transition = 'none'; node.style.transform = `translateY(${deltaY}px)`; node.style.zIndex = '10'; 
          node.offsetHeight; 
          requestAnimationFrame(() => {
            node.style.transition = ''; node.style.transform = '';
            setTimeout(() => { node.style.zIndex = ''; }, 400); 
          });
        }
      }
    });
  }

  function startTimer(sec) {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
    toggleWakeLock(true);
    const end = Date.now() + sec * 1000;
    const el = document.getElementById('timer-display');
    el.classList.add('visible');
    function tick() {
      const rem = Math.ceil((end - Date.now()) / 1000);
      if (rem <= 0) {
        clearInterval(activeTimer); activeTimer = null;
        el.classList.remove('visible'); toggleWakeLock(false);
        if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
      } else el.textContent = `${Math.floor(rem / 60)}:${(rem % 60).toString().padStart(2, '0')}`;
    }
    tick(); activeTimer = setInterval(tick, 500);
  }

  function showInfo(title, text) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-instructions').innerHTML = text.split(/(SETUP:|EXECUTION:|PROTOCOL:|PACING:|METRIC CHECK:)/g).filter(Boolean)
      .map(l => /^(SETUP:|EXECUTION:|PROTOCOL:|PACING:|METRIC CHECK:)$/.test(l.trim()) ? `<span class="instruction-label">${l.replace(':', '').trim()}</span>` : `<p>${l.trim()}</p>`).join('');
    document.getElementById('info-modal-overlay').classList.add('visible');
  }

  function showCompletion(title) {
    document.getElementById('completion-message').textContent = `${title} logged.`;
    const el = document.getElementById('completion-overlay');
    el.classList.add('visible');
    const showTime = Date.now();
    el.onclick = () => { if (Date.now() - showTime > 350) { el.classList.remove('visible'); el.onclick = null; } };
  }

  /* ─── MIND & READY INIT ───────────────────────────────────────── */
  const nameInput = document.getElementById('name-input');
  function updateMantras() {
    const n = nameInput.value.trim() || 'USER';
    document.getElementById('master-mantra').textContent = `"${n}, right now your mind is telling a scary story about the future, and your body is trying to protect you from it. You are experiencing a feeling, not a fact."`;
    document.getElementById('loop-mantra').textContent = `"That's just an old loop playing again. I don't have to listen to it."`;
    document.getElementById('tension-mantra').textContent = `"${n}, your body is safe. This tension is just energy trying to help."`;
    document.getElementById('future-mantra').textContent = `"${n}, you don't need to solve the future today. You just need one slow breath right now."`;
  }
  nameInput.addEventListener('input', () => { localStorage.setItem('workoutSysName', nameInput.value); updateMantras(); });

  function switchMindTab(targetId) {
    if (navigator.vibrate) navigator.vibrate(20);
    document.querySelectorAll('.mind-tab').forEach(btn => { const active = btn.dataset.target === targetId; btn.classList.toggle('active', active); btn.setAttribute('aria-selected', active); });
    document.querySelectorAll('.mind-tab-content').forEach(content => content.classList.toggle('active', content.id === targetId));
  }
  document.querySelectorAll('.mind-tab').forEach(tab => tab.addEventListener('click', () => switchMindTab(tab.dataset.target)));
  document.querySelectorAll('.ground-trigger').forEach(btn => btn.addEventListener('click', function() { if (navigator.vibrate) navigator.vibrate(20); this.classList.toggle('done'); }));
  document.getElementById('reset-mind-btn').addEventListener('click', () => { document.querySelectorAll('.action-btn').forEach(c => c.classList.remove('done')); nameInput.value = ''; localStorage.removeItem('workoutSysName'); updateMantras(); switchMindTab('loop-tab'); stopBreathe(); });

  /* Edge Glow Breathing Engine (Tuned Blur & Fixed Transition) */
  let breatheActive = false, currentBreatheMode = [], currentPhaseIndex = 0, countdownInterval = null;
  
  const breatheModes = { 
    vagus: [ { label: 'IN', time: 4, action: 'in' }, { label: 'OUT', time: 6, action: 'out' } ], 
    box: [ { label: 'IN', time: 4, action: 'in' }, { label: 'HOLD', time: 4, action: 'hold-in' }, { label: 'OUT', time: 4, action: 'out' }, { label: 'HOLD', time: 4, action: 'hold-out' } ], 
    relax: [ { label: 'IN', time: 4, action: 'in' }, { label: 'HOLD', time: 7, action: 'hold-in' }, { label: 'OUT', time: 8, action: 'out' } ] 
  };
  
  document.querySelectorAll('.breathe-trigger').forEach(btn => btn.addEventListener('click', () => openBreatheModal(btn.dataset.mode)));

  function openBreatheModal(modeKey) {
    currentBreatheMode = breatheModes[modeKey]; currentPhaseIndex = 0; breatheActive = true;
    const overlay = document.getElementById('breathe-modal-overlay');
    const label = document.getElementById('breathe-label-huge');
    const display = document.getElementById('breathe-display-huge');
    
    overlay.style.transition = 'none';
    overlay.style.boxShadow = 'inset 0 0 0px 0px var(--accent)';
    overlay.classList.remove('edge-pulsing');
    
    label.textContent = 'PREP'; display.textContent = '·';
    overlay.classList.add('visible');
    setTimeout(runBreathePhase, 600);
  }
  
  function stopBreathe() {
    breatheActive = false; if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    const overlay = document.getElementById('breathe-modal-overlay');
    overlay.classList.remove('visible', 'edge-pulsing');
    
    // Clear animation instantly
    overlay.style.transition = 'box-shadow 0.3s ease';
    void overlay.offsetWidth;
    overlay.style.boxShadow = 'inset 0 0 0px 0px var(--accent)';
    
    setTimeout(() => { 
      document.getElementById('breathe-label-huge').textContent = 'PREP'; 
      document.getElementById('breathe-display-huge').textContent = '·'; 
    }, 300);
  }
  document.getElementById('breathe-stop-btn').addEventListener('click', stopBreathe);

  function runBreathePhase() {
    if (!breatheActive) return; if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    const phase = currentBreatheMode[currentPhaseIndex], display = document.getElementById('breathe-display-huge'), label = document.getElementById('breathe-label-huge'), overlay = document.getElementById('breathe-modal-overlay');
    
    label.textContent = phase.label; let count = phase.time; display.textContent = count;
    
    overlay.classList.remove('edge-pulsing');
    overlay.style.transition = `box-shadow ${phase.time}s cubic-bezier(0.4, 0, 0.2, 1)`;
    
    // Crucial fix: Force reflow before applying new box-shadow to prevent snapping
    void overlay.offsetWidth;
    
    requestAnimationFrame(() => {
      if (phase.action === 'in') { 
        overlay.style.boxShadow = 'inset 0 0 140px 20px var(--accent)';
      }
      else if (phase.action === 'out') { 
        overlay.style.boxShadow = 'inset 0 0 0px 0px var(--accent)';
      }
      else if (phase.action === 'hold-in') {
        overlay.style.boxShadow = 'inset 0 0 140px 20px var(--accent)';
        overlay.classList.add('edge-pulsing');
      }
      else if (phase.action === 'hold-out') {
        overlay.style.boxShadow = 'inset 0 0 0px 0px var(--accent)';
        overlay.classList.add('edge-pulsing');
      }
    });
    
    countdownInterval = setInterval(() => {
      if (!breatheActive) { clearInterval(countdownInterval); return; }
      count--;
      if (count > 0) display.textContent = count;
      else { clearInterval(countdownInterval); countdownInterval = null; currentPhaseIndex = (currentPhaseIndex + 1) % currentBreatheMode.length; runBreathePhase(); }
    }, 1000);
  }

  /* Readiness System */
  const READY_SEED = { hrv: { mean: 76.62, sd: 8.45 }, sleep: { mean: 435.05, sd: 99.72 }, rhr: { mean: 60.86, sd: 1.35 } };
  const zComponent = (val, m, s, inv = false) => Math.min(100, Math.max(0, 58.74 + 25 * ((val - m) / s) * (inv ? -1 : 1)));
  const getReadyBand = (score) => score >= 85 ? { label: "PRIMED", class: "score-primed" } : score >= 70 ? { label: "STEADY", class: "score-steady" } : score >= 55 ? { label: "MODERATE", class: "score-moderate" } : { label: "COMPROMISED", class: "score-compromised" };

  function initReady() {
    ['hrv', 'sleep', 'rhr'].forEach(key => {
      const el = document.getElementById(`ready-${key}-input`);
      const saved = localStorage.getItem(`workoutSysReady_${key}`);
      if (saved) el.value = saved;
      el.addEventListener('input', (e) => { localStorage.setItem(`workoutSysReady_${key}`, e.target.value); updateReadyUI(); });
    });
    updateReadyUI();
  }

  function updateReadyUI() {
    const rawHrv = document.getElementById('ready-hrv-input').value, rawSleep = document.getElementById('ready-sleep-input').value, rawRhr = document.getElementById('ready-rhr-input').value;
    const vHrv = parseFloat(rawHrv?.replace(',', '.')), vSleep = parseFloat(rawSleep?.replace(',', '.')), vRhr = parseFloat(rawRhr?.replace(',', '.'));
    const valid = { hrv: !isNaN(vHrv) && vHrv > 0 && vHrv <= 300, sleep: !isNaN(vSleep) && vSleep > 0 && vSleep <= 24, rhr: !isNaN(vRhr) && vRhr >= 20 && vRhr <= 200 };

    document.getElementById('card-hrv').classList.toggle('error', rawHrv && !valid.hrv);
    document.getElementById('card-sleep').classList.toggle('error', rawSleep && !valid.sleep);
    document.getElementById('card-rhr').classList.toggle('error', rawRhr && !valid.rhr);
    document.getElementById('ready-hrv-stats').textContent = (rawHrv && !valid.hrv) ? 'ERR' : `μ ${(READY_SEED.hrv.mean).toFixed(1)}`;
    document.getElementById('ready-sleep-stats').textContent = (rawSleep && !valid.sleep) ? 'ERR' : `μ ${(READY_SEED.sleep.mean / 60).toFixed(1)}h`;
    document.getElementById('ready-rhr-stats').textContent = (rawRhr && !valid.rhr) ? 'ERR' : `μ ${(READY_SEED.rhr.mean).toFixed(1)}`;

    if (valid.hrv && valid.sleep && valid.rhr) {
      const total = (0.7 * zComponent(vHrv, READY_SEED.hrv.mean, READY_SEED.hrv.sd)) + (0.2 * zComponent(vSleep * 60, READY_SEED.sleep.mean, READY_SEED.sleep.sd)) + (0.1 * zComponent(vRhr, READY_SEED.rhr.mean, READY_SEED.rhr.sd, true));
      const band = getReadyBand(total);
      document.getElementById('ready-score-wrapper').className = `editorial-block text-center ${band.class}`;
      document.getElementById('ready-score-val').textContent = `${total.toFixed(1)}%`;
      document.getElementById('ready-band-label').textContent = band.label;
    } else {
      document.getElementById('ready-score-wrapper').className = 'editorial-block text-center';
      document.getElementById('ready-score-val').textContent = "—.—";
      document.getElementById('ready-band-label').textContent = "AWAITING INPUT";
    }
  }

  function init() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});

    const currentWeek = getMondayOfCurrentWeek();
    if (localStorage.getItem('workoutSysCurrentWeek') !== currentWeek) {
      ['workoutSysProgress','workoutSysCompletedDays','workoutSysLastTouched'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      localStorage.setItem('workoutSysCurrentWeek', currentWeek);
    }

    const daySel = document.getElementById('day-selector');
    const switchTab = (activeBtn, activeView, showDays) => {
      if (navigator.vibrate) navigator.vibrate(15);
      ['mode-body-btn','mode-mind-btn','mode-ready-btn'].forEach(id => { const b = document.getElementById(id); b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      ['view-body','view-mind','view-ready'].forEach(id => document.getElementById(id).classList.add('hidden'));
      activeBtn.classList.add('active'); activeBtn.setAttribute('aria-selected', 'true'); activeView.classList.remove('hidden');
      daySel.classList.toggle('hidden', !showDays);
    };

    document.getElementById('mode-body-btn').addEventListener('click', function() { switchTab(this, document.getElementById('view-body'), true); });
    document.getElementById('mode-mind-btn').addEventListener('click', function() { switchTab(this, document.getElementById('view-mind'), false); });
    document.getElementById('mode-ready-btn').addEventListener('click', function() { switchTab(this, document.getElementById('view-ready'), false); });

    /* UI Toggles & Help Wiring */
    document.getElementById('help-toggle-btn').addEventListener('click', () => {
      document.getElementById('help-modal-overlay').classList.add('visible');
    });

    ['MO','TU','WE','TH','FR','SA','SU'].forEach((l, i) => {
      const b = document.createElement('button');
      b.className = 'day-btn'; b.textContent = l;
      if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
      b.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        document.querySelectorAll('.day-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active'); renderWorkout(i);
      });
      daySel.appendChild(b);
    });

    if (localStorage.getItem('workoutSysTheme')) document.body.dataset.theme = localStorage.getItem('workoutSysTheme');
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(15);
      const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      document.body.dataset.theme = next; localStorage.setItem('workoutSysTheme', next);
    });

    // Close Modals by clicking anywhere on the overlay
    document.querySelectorAll('.modal-overlay').forEach(el => el.addEventListener('click', function(e) { if(e.target===this) this.classList.remove('visible'); }));
    document.querySelectorAll('.close-btn').forEach(btn => btn.addEventListener('click', function() { this.closest('.modal-overlay').classList.remove('visible'); }));
    
    document.getElementById('reset-button').addEventListener('click', () => document.getElementById('reset-modal-overlay').classList.add('visible'));
    document.getElementById('cancel-reset-btn').addEventListener('click', () => document.getElementById('reset-modal-overlay').classList.remove('visible'));
    
    document.getElementById('confirm-reset-btn').addEventListener('click', () => {
      ['workoutSysProgress','workoutSysCompletedDays','workoutSysLastTouched'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      document.getElementById('reset-modal-overlay').classList.remove('visible');
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('day-complete'));
      const activeIdx = Array.from(daySel.children).findIndex(b => b.classList.contains('active'));
      renderWorkout(activeIdx !== -1 ? activeIdx : ((new Date().getDay() + 6) % 7));
    });

    if (localStorage.getItem('workoutSysName')) nameInput.value = localStorage.getItem('workoutSysName');
    updateMantras(); initReady(); 
    daySel.children[(new Date().getDay() + 6) % 7].click();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
