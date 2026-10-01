(function() {
  'use strict';

  /* ─── Workout Data: Performance Hypertrophy PPL (SYS.Nomenclature) ─── */
  const workoutData = [
    {
      "day": 1, "title": "P1", "subtitle": "Anterior Load / Clavicular", "duration": "55m",
      "exercises": [
        { "name": "Flat DB Bench Press", "details": "3 × 6–8 reps · 150s rest", "instructions": "SETUP: Heavy dumbbells. EXECUTION: 3s eccentric, 1s dead-stop pause in deep stretch, explosive concentric drive. Velocity over load." },
        { "name": "Incline DB Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: 30° bench angle. EXECUTION: Isolate the clavicular pec fibers. Full stretch at the bottom." },
        { "name": "Seated DB Shoulder Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Bench at 75–80°. EXECUTION: 3s lowering, zero bounce, press to full extension without locking elbows." },
        { "name": "DB Lateral Raises", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Continuous side delt tension. Add 5 lengthened partial reps directly out of the bottom stretch on final set." },
        { "name": "Overhead Cable Triceps Ext.", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Keep elbows tucked. Pushing from overhead prioritizes the long head of the triceps." }
      ],
      "abFinisher": { "name": "Heavy Cable Crunches", "details": "3 × 10–12 reps · 60s rest", "instructions": "EXECUTION: Kneel at cable station. Lock hips in place and flex spine downward. Use heavy weight to build blocky abs." }
    },
    {
      "day": 2, "title": "PL1", "subtitle": "Scapular Retraction / Width", "duration": "50m",
      "exercises": [
        { "name": "Machine/Cable Lat Pulldown", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Neutral or D-handle. EXECUTION: Pull elbows straight down into hips. 2s negative letting scapulae fully protract." },
        { "name": "Chest-Supported Machine Row", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Overload upper back thickness without spinal fatigue. 2s stretch at bottom of each repetition." },
        { "name": "Cable Face Pulls", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Pull rope apart horizontally toward forehead, engaging rear delts and external rotators cleanly." },
        { "name": "Incline DB Bicep Curls", "details": "3 × 10–12 reps · 90s rest", "instructions": "SETUP: 45° incline bench. EXECUTION: Let arms hang completely straight for max long-head stretch before curling." },
        { "name": "DB Reverse Curls", "details": "3 × 15 reps · 60s rest", "instructions": "EXECUTION: Palms facing down. Focus entirely on the forearms and grip strength burn." }
      ],
      "abFinisher": { "name": "Cable Woodchoppers", "details": "3 × 12 reps/side · 60s rest", "instructions": "EXECUTION: Set pulley to high or mid level. Rotate through the core to target obliques. Keep hips stable." }
    },
    {
      "day": 3, "title": "L1", "subtitle": "Peak Contraction / Inner Thigh", "duration": "55m",
      "exercises": [
        { "name": "Barbell Hip Thrusts", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: Standard heavy setup. Drive through heels, lock pelvis in at the top. Hard 1s squeeze on every single rep." },
        { "name": "Hack Machine Squats", "details": "3 × 6–8 reps · 150s rest", "instructions": "SETUP: 85–90kg target. EXECUTION: Deep forward knee travel, 3s eccentric, 1s pause in full hole. Explosive ascent." },
        { "name": "Seated Leg Curls", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Seated position places hamstrings in a more lengthened state than lying. Squeeze hard at the bottom." },
        { "name": "Seated Adductor Machine", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Deep stretch on the negative. Tightens the inner thigh musculature." },
        { "name": "Standing Calf Raises", "details": "3 × 10–12 reps · 60s rest", "instructions": "EXECUTION: 3s negative. 2s dead-stop stretch at the absolute bottom to kill the Achilles stretch reflex." }
      ],
      "cardio": { "name": "Incline Walk (LISS)", "details": "1 × 15 mins", "instructions": "PACING: Maintain heart rate strictly <130 BPM on steep incline to flush metabolites without joint shear." }
    },
    {
      "day": 4, "title": "P2", "subtitle": "Vertical Axis / Upper Pectoral", "duration": "50m",
      "exercises": [
        { "name": "Machine Shoulder Press", "details": "3 × 6–8 reps · 120s rest", "instructions": "EXECUTION: Neutral grip if possible. 3s negative, explosive push. Prioritize heavy load over volume." },
        { "name": "Incline Cable Flyes", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Bench at 30°. Focus entirely on the clavicular pec stretch. Hold peak contraction for 1s." },
        { "name": "Weighted Dips / Decline Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Torso angled 30° forward. Lower shoulders below elbows for deep stretch before pressing." },
        { "name": "Lean-Away Cable Lateral Raises", "details": "3 × 10–12 reps/arm · 90s rest", "instructions": "SETUP: Wrist cuffs or D-handle. EXECUTION: Maintain constant cable profile resistance across side delts." },
        { "name": "Tricep Rope Pushdowns", "details": "3 × 12 reps · 60s rest", "instructions": "EXECUTION: Pinned elbows, lateral head focus. Keep chest up and push straight down." }
      ]
    },
    {
      "day": 5, "title": "PL2", "subtitle": "Posterior Density / Brachialis", "duration": "50m",
      "exercises": [
        { "name": "Seated Cable Rows (Wide Grip)", "details": "3 × 10–12 reps · 120s rest", "instructions": "EXECUTION: Protract scapulae in stretch, drive elbows wide and back, squeeze mid-traps and rhomboids." },
        { "name": "Single-Arm Iliac Lat Pulldown", "details": "3 × 8–10 reps/arm · 90s rest", "instructions": "SETUP: Single D-handle. EXECUTION: Pull elbow tight down to the hip to isolate the lower lats." },
        { "name": "Reverse Pec-Deck", "details": "3 × 12–15 reps · 60s rest", "instructions": "SETUP: Protract scapulae. EXECUTION: Wide arc using only rear delts. Do not squeeze shoulder blades together." },
        { "name": "Cable EZ-Bar Curls", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Constant tension. Squeeze hard at the top peak for 1 second." },
        { "name": "DB Wrist Curls", "details": "3 × 15 reps · 60s rest", "instructions": "EXECUTION: Palms facing up. Focus on flexing the forearm to failure." }
      ],
      "abFinisher": { "name": "Heavy Cable Crunches", "details": "3 × 10–12 reps · 60s rest", "instructions": "EXECUTION: Heavy load. Flex spine, ribs to pelvis. Do not pivot at hips." }
    },
    {
      "day": 6, "title": "L2", "subtitle": "Lengthened Tension", "duration": "55m",
      "exercises": [
        { "name": "DB Romanian Deadlifts", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: Push hips completely back, soft knees. Deep hamstring/glute stretch without lumbar compensation." },
        { "name": "Deficit Reverse DB Lunges", "details": "3 × 10 reps/leg · 120s rest", "instructions": "SETUP: Front foot elevated on 2-inch plate. EXECUTION: Deep stretch on glute-ham tie-in, torso angled 20° forward." },
        { "name": "Seated Leg Extensions", "details": "3 × 12–15 reps · 90s rest", "instructions": "SETUP: Lean torso back against pad. EXECUTION: Pure quad isolation. 1s hard squeeze at full extension." },
        { "name": "45° Glute Hyperextensions", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Round your upper back slightly. Use ONLY your glutes and hamstrings to pull your torso up." },
        { "name": "Leg Press Calf Raises", "details": "3 × 12–15 reps · 60s rest", "instructions": "EXECUTION: Lock knees softly. Push through the big toe. 2s pause at the bottom stretch." },
        { "name": "Seated Calf Raises", "details": "3 × 15 reps · 60s rest", "instructions": "EXECUTION: High rep, slow tempo to burn out the soleus muscle under the main calf." }
      ]
    },
    {
      "day": 7, "title": "SYS", "subtitle": "Metabolic Clearance", "duration": "—",
      "exercises": [],
      "cardio": {
        "name": "Dynamic Mobility & Walk",
        "details": "1 × 20 mins",
        "instructions": "PACING: Gentle joint decompression. METRIC CHECK: If waking HRV drops <65ms for 2 consecutive days, drop all working sets by 1 set for the upcoming week."
      }
    }
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

  document.addEventListener('visibilitychange', async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') { try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {} }
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

    document.getElementById('workout-title').innerHTML = `${data.title}<br><span style="font-size:0.5em;color:var(--text-muted);text-transform:none;letter-spacing:0.02em;">${data.subtitle}</span>`;
    document.getElementById('workout-duration').textContent = data.duration === '—' ? '' : `EST. ${data.duration}`;

    list.innerHTML = ''; compList.innerHTML = '';

    const items = [...(data.exercises || [])];
    if (data.abFinisher) items.push({ ...data.abFinisher, idType: 'ab' });
    if (data.cardio)     items.push({ ...data.cardio, idType: 'cardio' });

    if (items.length === 0) {
      compSection.classList.add('hidden');
      fill.parentElement.classList.add('hidden');
      progressLabel.classList.add('hidden');
      list.innerHTML = `<li class="rest-day-message"><h3>SYS_STANDBY</h3><p>Focus on metabolic recovery.</p></li>`;
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

  /* Engineered Breathing Engine */
  let breatheActive = false, currentBreatheMode = [], currentPhaseIndex = 0, countdownInterval = null;
  const breatheModes = { 
    vagus: [ { label: 'IN', time: 4, action: 'in' }, { label: 'OUT', time: 6, action: 'out' } ], 
    box: [ { label: 'IN', time: 4, action: 'in' }, { label: 'HOLD', time: 4, action: 'hold' }, { label: 'OUT', time: 4, action: 'out' }, { label: 'HOLD', time: 4, action: 'hold' } ], 
    relax: [ { label: 'IN', time: 4, action: 'in' }, { label: 'HOLD', time: 7, action: 'hold' }, { label: 'OUT', time: 8, action: 'out' } ] 
  };
  
  document.querySelectorAll('.breathe-trigger').forEach(btn => btn.addEventListener('click', () => openBreatheModal(btn.dataset.mode)));

  function openBreatheModal(modeKey) {
    currentBreatheMode = breatheModes[modeKey]; currentPhaseIndex = 0; breatheActive = true;
    const shape = document.getElementById('breathe-shape-huge'), label = document.getElementById('breathe-label-huge'), display = document.getElementById('breathe-display-huge');
    
    shape.style.transition = 'none'; 
    shape.style.transform = 'translate(-50%, -50%) scale(0.1)'; 
    shape.style.opacity = '0'; 
    shape.style.borderColor = 'var(--border-mid)';
    
    label.textContent = 'PREP'; display.textContent = '·';
    document.getElementById('breathe-modal-overlay').classList.add('visible');
    setTimeout(runBreathePhase, 600);
  }
  
  function stopBreathe() {
    breatheActive = false; if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    document.getElementById('breathe-modal-overlay').classList.remove('visible');
    const shape = document.getElementById('breathe-shape-huge');
    setTimeout(() => { 
      shape.style.transition = 'none'; 
      shape.style.transform = 'translate(-50%, -50%) scale(0.1)'; 
      shape.style.opacity = '0'; 
      document.getElementById('breathe-label-huge').textContent = 'PREP'; 
      document.getElementById('breathe-display-huge').textContent = '·'; 
    }, 300);
  }
  document.getElementById('breathe-stop-btn').addEventListener('click', stopBreathe);

  function runBreathePhase() {
    if (!breatheActive) return; if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    const phase = currentBreatheMode[currentPhaseIndex], display = document.getElementById('breathe-display-huge'), label = document.getElementById('breathe-label-huge'), shape = document.getElementById('breathe-shape-huge');
    label.textContent = phase.label; let count = phase.time; display.textContent = count;
    
    shape.style.transition = `transform ${phase.time}s linear, opacity ${phase.time}s ease, border-color 0.4s ease`;
    
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (phase.action === 'in') { 
        shape.style.transform = 'translate(-50%, -50%) scale(1)'; 
        shape.style.opacity = '1'; 
        shape.style.borderColor = 'var(--text)';
      }
      else if (phase.action === 'out') { 
        shape.style.transform = 'translate(-50%, -50%) scale(0.1)'; 
        shape.style.opacity = '0.3'; 
        shape.style.borderColor = 'var(--border-mid)';
      }
      else if (phase.action === 'hold') {
        shape.style.borderColor = 'var(--accent)';
      }
    }));
    
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
      daySel.parentElement.style.display = showDays ? 'block' : 'none';
    };

    document.getElementById('mode-body-btn').addEventListener('click', function() { switchTab(this, document.getElementById('view-body'), true); });
    document.getElementById('mode-mind-btn').addEventListener('click', function() { switchTab(this, document.getElementById('view-mind'), false); });
    document.getElementById('mode-ready-btn').addEventListener('click', function() { switchTab(this, document.getElementById('view-ready'), false); });

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
