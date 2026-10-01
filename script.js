(function() {
  'use strict';

  /* ─── Workout Data: 75kg Peak Performance (Strict 3-Set Cap & Bio-Aligned) ─── */
  const workoutData = [
    {
      "day": 1,
      "title": "Upper A",
      "subtitle": "Chest Heavy & Side Delt",
      "duration": "55m",
      "exercises": [
        { "name": "Flat DB Bench Press", "details": "3 × 6–8 reps · 150s rest", "instructions": "SETUP: 34–36kg dumbbells. EXECUTION: 3s eccentric, 1s dead-stop pause in deep stretch, explosive concentric drive. Velocity over load." },
        { "name": "Seated DB Shoulder Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: 26–28kg dumbbells, bench at 75–80°. EXECUTION: 3s lowering, zero bounce, press to full extension without locking elbows." },
        { "name": "Machine/Cable Lat Pulldown", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Neutral or D-handle. EXECUTION: Pull elbows straight down into hips. 2s negative letting scapulae fully protract." },
        { "name": "Machine Chest Flyes", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Focus on bottom-half clavicular stretch. Hold peak contraction for 1s. Push final set to failure." },
        { "name": "DB Lateral Raises", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Continuous side delt tension. Add 5 lengthened partial reps directly out of the bottom stretch on final set." }
      ],
      "cardio": { "name": "Incline Walk (LISS)", "details": "1 × 15 mins", "instructions": "PACING: Maintain heart rate strictly <130 BPM on steep incline to flush metabolites without joint shear." }
    },
    
    {
      "day": 2,
      "title": "Lower A",
      "subtitle": "Anterior Focus & Upper Glute",
      "duration": "55m",
      "exercises": [
        { "name": "Barbell / Hack Machine Squats", "details": "3 × 6–8 reps · 150s rest", "instructions": "SETUP: 85–90kg target. EXECUTION: Deep forward knee travel, 3s eccentric, 1s pause in full hole. Explosive ascent." },
        { "name": "KAS Glute Bridge", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: Barbell or Smith with heavy loop band above knees. EXECUTION: Hinge strictly at hips. 10s max-effort isometric hold at peak of set 3." },
        { "name": "Linear Leg Press", "details": "3 × 10–12 reps · 120s rest", "instructions": "SETUP: Feet placed low and narrow to isolate quads. EXECUTION: Smooth tempo, constant tension, no top lockout." },
        { "name": "Seated Machine Hip Abduction", "details": "3 × 15 reps · 90s rest", "instructions": "SETUP: Torso hinged 45° forward off back pad. EXECUTION: 1s hard isometric contraction at wide abduction on every rep." }
      ],
      "abFinisher": { "name": "Hanging Leg / Knee Raises", "details": "3 × 12 reps · 60s rest", "instructions": "EXECUTION: Posterior pelvic tilt at peak. Strictly eliminate swinging or momentum." }
    },
    
    {
      "day": 3,
      "title": "Upper B",
      "subtitle": "Upper Chest & Lateral Delt",
      "duration": "55m",
      "exercises": [
        { "name": "Incline DB Press", "details": "3 × 8–10 reps · 150s rest", "instructions": "SETUP: 30° incline to isolate clavicular pec fibers. EXECUTION: 3s eccentric, dead stop at bottom stretch, explode up." },
        { "name": "Chest-Supported Machine Row", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Overload upper back thickness without spinal fatigue. 2s stretch at bottom of each repetition." },
        { "name": "Low-to-High Cable Flyes", "details": "3 × 12 reps · 90s rest", "instructions": "EXECUTION: Pull handles diagonally up, converging at upper sternum level for maximum contraction." },
        { "name": "Lean-Away Cable Lateral Raises", "details": "3 × 10–12 reps/arm · 90s rest", "instructions": "SETUP: Wrist cuffs or D-handle. EXECUTION: Maintain constant cable profile resistance across side delts." },
        { "name": "Cable Face Pulls", "details": "3 × 15 reps · 90s rest", "instructions": "EXECUTION: Pull rope apart horizontally toward forehead, engaging rear delts and external rotators cleanly." }
      ],
      "cardio": { "name": "Stationary Bike (LISS)", "details": "1 × 15 mins", "instructions": "PACING: Steady cadence. Heart rate locked <130 BPM." }
    },
    
    {
      "day": 4,
      "title": "Lower B",
      "subtitle": "Posterior Chain Overload",
      "duration": "55m",
      "exercises": [
        { "name": "DB Romanian Deadlifts", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: Push hips completely back, soft knees. Deep hamstring/glute stretch without lumbar compensation." },
        { "name": "Deficit Reverse DB Lunges", "details": "3 × 10 reps/leg · 120s rest", "instructions": "SETUP: Front foot elevated on 2-inch plate. EXECUTION: Deep stretch on glute-ham tie-in, torso angled 20° forward." },
        { "name": "Lying Machine Leg Curls", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Hips pushed firmly down into pad. 3s eccentric count; avoid hip rise." },
        { "name": "Standing Cable Hip Abduction", "details": "3 × 12–15 reps/leg · 90s rest", "instructions": "SETUP: Ankle cuff on low pulley. EXECUTION: Kick back and out at 45° to isolate upper gluteus medius." }
      ],
      "cardio": { "name": "Incline Walk (LISS)", "details": "1 × 15 mins", "instructions": "PACING: Low-impact posterior chain flush. <130 BPM." }
    },
    
    {
      "day": 5,
      "title": "Upper C",
      "subtitle": "Hypertrophy Burnout & Arms",
      "duration": "55m",
      "exercises": [
        { "name": "Weighted Chest Dips / Decline Press", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: Torso angled 30° forward. Lower shoulders below elbows for deep stretch before pressing." },
        { "name": "DB Lateral Raises", "details": "3 × 12 reps · 90s rest", "instructions": "EXECUTION: Strict form. On set 3, immediately drop weight 30% and perform an extended drop-set to failure." },
        { "name": "Seated Cable Rows (Wide Grip)", "details": "3 × 10–12 reps · 120s rest", "instructions": "EXECUTION: Protract scapulae in stretch, drive elbows wide and back, squeeze mid-traps and rhomboids." },
        { "name": "Tricep Rope Pushdowns", "details": "3 × 12 reps · 0s rest", "instructions": "EXECUTION: Pinned elbows, lateral head focus. Superset directly into bicep curls without resting." },
        { "name": "Incline DB Bicep Curls", "details": "3 × 12 reps · 90s rest", "instructions": "SETUP: 45° incline bench. EXECUTION: Let arms hang completely straight for max long-head stretch before curling." }
      ],
      "abFinisher": { "name": "Ab Wheel Rollouts", "details": "3 × 10 reps · 60s rest", "instructions": "EXECUTION: Tuck pelvis, lock core solid, slow 4s eccentric back toward body." }
    },
    
    {
      "day": 6,
      "title": "Lower C",
      "subtitle": "Posterior Machine Overload",
      "duration": "50m",
      "exercises": [
        { "name": "Hex-Bar Deadlifts", "details": "3 × 5 reps · 180s rest", "instructions": "EXECUTION: Neutral grip, explosive neural drive off floor. Reset fully between reps; no touch-and-go." },
        { "name": "DB Bulgarian Split Squats", "details": "3 × 8–10 reps/leg · 120s rest", "instructions": "SETUP: Torso locked forward at 30° angle. EXECUTION: Load stays purely on working glute and quad." },
        { "name": "Seated Leg Press (Glute Stance)", "details": "3 × 12 reps · 120s rest", "instructions": "SETUP: Feet placed high and wide on platform. EXECUTION: Drive through heels, no knee lockout." },
        { "name": "Continuous Band-Walks", "details": "3 × 20 paces · 60s rest", "instructions": "EXECUTION: Continuous lateral tension; stay deep in semi-squat. Constant glute burn." }
      ],
      "cardio": { "name": "Incline Walk (Recovery)", "details": "1 × 15 mins", "instructions": "PACING: Steady LISS flush to clear metabolic accumulation. Zero HIIT to preserve CNS integrity." }
    },
    
    {
      "day": 7,
      "title": "Standby",
      "subtitle": "Strategic Recovery",
      "duration": "—",
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

  const getMondayOfCurrentWeek = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff)).toDateString();
  };

  /* ─── Wake Lock (Screen Dim & Sleep Throttling Shield) ────────── */
  async function toggleWakeLock(shouldLock) {
    if (!('wakeLock' in navigator)) return;
    try {
      if (shouldLock && !wakeLock) {
        wakeLock = await navigator.wakeLock.request('screen');
      } else if (!shouldLock && wakeLock) {
        await wakeLock.release();
        wakeLock = null;
      }
    } catch (err) {
      // Wake Lock failures fail gracefully without breaking execution
    }
  }

  document.addEventListener('visibilitychange', async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
      try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {}
    }
  });

  /* ─── WORKOUT SYSTEM (DOM Fragment High-Performance Rendering) ─ */
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

    const items = [...(data.exercises || [])];
    if (data.abFinisher) items.push({ ...data.abFinisher, idType: 'ab' });
    if (data.cardio)     items.push({ ...data.cardio, idType: 'cardio' });

    if (items.length === 0) {
      compSection.classList.add('hidden');
      fill.parentElement.classList.add('hidden');
      progressLabel.classList.add('hidden');
      list.innerHTML = `<li class="rest-day-message"><h3>System Standby</h3><p>Focus on metabolic recovery and protein synthesis.</p></li>`;
      return;
    }

    let total = 0, done = 0;
    const activeNodesData = [];
    const pendingNodes    = [];
    const completedNodes  = [];
    const fragmentActive  = document.createDocumentFragment();
    const fragmentComp    = document.createDocumentFragment();

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
        </div>
        <button class="info-btn" aria-label="Instructions"></button>
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
            toggleWakeLock(false);
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
      li.addEventListener('contextmenu', (e) => e.preventDefault());

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
        clearInterval(activeTimer);
        activeTimer = null;
        el.classList.remove('visible');
        if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
        toggleWakeLock(false);
      } else {
        el.textContent = `${Math.floor(rem / 60)}:${(rem % 60).toString().padStart(2, '0')}`;
      }
    }
    tick();
    activeTimer = setInterval(tick, 500);
  }

  function showInfo(title, text) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-instructions').innerHTML = text
      .split(/(SETUP:|EXECUTION:|PROTOCOL:|PACING:|METRIC CHECK:)/g)
      .filter(Boolean)
      .map(l => {
        l = l.trim();
        return /^(SETUP:|EXECUTION:|PROTOCOL:|PACING:|METRIC CHECK:)$/.test(l)
          ? `<span class="instruction-label">${l.replace(':', '')}</span>`
          : `<p>${l}</p>`;
      }).join('');
    document.getElementById('info-modal-overlay').classList.add('visible');
  }

  function showCompletion(title) {
    document.getElementById('completion-message').textContent = `${title} logged. Recover well.`;
    const el = document.getElementById('completion-overlay');
    el.classList.add('visible');
    
    const showTime = Date.now();
    el.onclick = () => {
      if (Date.now() - showTime > 350) {
        el.classList.remove('visible');
        el.onclick = null;
      }
    };
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

  nameInput.addEventListener('input', () => {
    localStorage.setItem('workoutSysName', nameInput.value);
    updateMantras();
  });

  function switchMindTab(targetId) {
    if (navigator.vibrate) navigator.vibrate(20);
    document.querySelectorAll('.mind-tab').forEach(btn => {
      const active = btn.dataset.target === targetId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', active);
    });
    document.querySelectorAll('.mind-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === targetId);
    });
  }

  document.querySelectorAll('.mind-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMindTab(tab.dataset.target));
  });

  document.querySelectorAll('.ground-trigger').forEach(btn => {
    btn.addEventListener('click', function() { 
      if (navigator.vibrate) navigator.vibrate(20);
      this.classList.toggle('done'); 
    });
  });

  document.getElementById('reset-mind-btn').addEventListener('click', () => {
    document.querySelectorAll('.action-btn').forEach(c => c.classList.remove('done'));
    nameInput.value = '';
    localStorage.removeItem('workoutSysName');
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

  /* ─── READINESS SYSTEM (Persistent State & Math Validation) ──── */
  const READY_SEED = { 
    hrv: { mean: 76.62, sd: 8.45 }, 
    sleep: { mean: 435.05, sd: 99.72 }, 
    rhr: { mean: 60.86, sd: 1.35 } 
  };
  
  const READY_WEIGHTS = { hrv: 0.7, sleep: 0.2, rhr: 0.1 };
  const READY_SCALE = 25;
  const READY_CENTER = 58.74;

  function zComponent(value, m, s, invert = false) {
    let z = (value - m) / s;
    if (invert) z = -z;
    return Math.min(100, Math.max(0, READY_CENTER + READY_SCALE * z));
  }

  function getReadyBand(score) {
    if (score >= 85) return { label: "PRIMED", class: "score-primed", note: "Full load cleared. Push intensity." };
    if (score >= 70) return { label: "STEADY", class: "score-steady", note: "Normal training load. Maintain progression." };
    if (score >= 55) return { label: "MODERATE", class: "score-moderate", note: "Autoregulate volume. Watch fatigue." };
    return { label: "COMPROMISED", class: "score-compromised", note: "Prioritize recovery. Consider active rest." };
  }

  function fmt1(n) { return Number.isFinite(n) ? n.toFixed(1) : "—"; }

  function safelyParseNum(val) {
    if (!val) return NaN;
    return parseFloat(val.replace(',', '.'));
  }

  function checkInputValidations(rawHrv, rawSleep, rawRhr) {
    const validations = {
      hrv: { valid: true, val: NaN },
      sleep: { valid: true, val: NaN },
      rhr: { valid: true, val: NaN },
      allValid: false
    };

    const wrapHrv = document.getElementById('card-hrv');
    const wrapSleep = document.getElementById('card-sleep');
    const wrapRhr = document.getElementById('card-rhr');

    if (rawHrv) {
      const v = safelyParseNum(rawHrv);
      if (isNaN(v) || v <= 0 || v > 300) validations.hrv.valid = false;
      else validations.hrv.val = v;
    } else { validations.hrv.valid = false; }
    wrapHrv.classList.toggle('error', rawHrv && !validations.hrv.valid);

    if (rawSleep) {
      const v = safelyParseNum(rawSleep);
      if (isNaN(v) || v <= 0 || v > 24) validations.sleep.valid = false;
      else validations.sleep.val = v * 60;
    } else { validations.sleep.valid = false; }
    wrapSleep.classList.toggle('error', rawSleep && !validations.sleep.valid);

    if (rawRhr) {
      const v = safelyParseNum(rawRhr);
      if (isNaN(v) || v < 20 || v > 200) validations.rhr.valid = false;
      else validations.rhr.val = v;
    } else { validations.rhr.valid = false; }
    wrapRhr.classList.toggle('error', rawRhr && !validations.rhr.valid);

    validations.allValid = validations.hrv.valid && validations.sleep.valid && validations.rhr.valid;
    return validations;
  }

  function initReady() {
    ['hrv', 'sleep', 'rhr'].forEach(key => {
      const el = document.getElementById(`ready-${key}-input`);
      const saved = localStorage.getItem(`workoutSysReady_${key}`);
      if (saved) el.value = saved;
      el.addEventListener('input', (e) => {
        localStorage.setItem(`workoutSysReady_${key}`, e.target.value);
        updateReadyUI();
      });
    });
    updateReadyUI();
  }

  function updateReadyUI() {
    const rawHrv = document.getElementById('ready-hrv-input').value;
    const rawSleep = document.getElementById('ready-sleep-input').value;
    const rawRhr = document.getElementById('ready-rhr-input').value;

    const data = checkInputValidations(rawHrv, rawSleep, rawRhr);
    const stats = READY_SEED;
    
    document.getElementById('ready-hrv-stats').textContent = (rawHrv && !data.hrv.valid) ? 'Error' : `μ ${fmt1(stats.hrv.mean)}`;
    document.getElementById('ready-sleep-stats').textContent = (rawSleep && !data.sleep.valid) ? 'Error' : `μ ${fmt1(stats.sleep.mean / 60)}h`;
    document.getElementById('ready-rhr-stats').textContent = (rawRhr && !data.rhr.valid) ? 'Error' : `μ ${fmt1(stats.rhr.mean)}`;

    const scoreWrapper = document.getElementById('ready-score-wrapper');

    if (!data.allValid) {
      scoreWrapper.className = 'mind-card text-center';
      document.getElementById('ready-score-val').textContent = "—.—";
      document.getElementById('ready-band-label').textContent = "AWAITING INPUT";
      document.getElementById('ready-band-note').textContent = "Complete metrics grid above.";
    } else {
      const hrvC = zComponent(data.hrv.val, stats.hrv.mean, stats.hrv.sd);
      const sleepC = zComponent(data.sleep.val, stats.sleep.mean, stats.sleep.sd);
      const rhrC = zComponent(data.rhr.val, stats.rhr.mean, stats.rhr.sd, true);

      const hrvW = READY_WEIGHTS.hrv * hrvC;
      const sleepW = READY_WEIGHTS.sleep * sleepC;
      const rhrW = READY_WEIGHTS.rhr * rhrC;
      const total = hrvW + sleepW + rhrW;

      const band = getReadyBand(total);

      scoreWrapper.className = `mind-card text-center ${band.class}`;
      document.getElementById('ready-score-val').textContent = `${fmt1(total)}%`;
      document.getElementById('ready-band-label').textContent = band.label;
      document.getElementById('ready-band-note').textContent = band.note;
    }
  }

  /* ─── INIT ────────────────────────────────────────────────────── */
  function init() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }

    const savedWeek = localStorage.getItem('workoutSysCurrentWeek');
    const currentWeek = getMondayOfCurrentWeek();
    
    if (savedWeek && savedWeek !== currentWeek) {
      ['workoutSysProgress','workoutSysCompletedDays','workoutSysLastTouched'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      localStorage.setItem('workoutSysCurrentWeek', currentWeek);
    } else if (!savedWeek) {
      localStorage.setItem('workoutSysCurrentWeek', currentWeek);
    }

    const btnBody = document.getElementById('mode-body-btn');
    const btnMind = document.getElementById('mode-mind-btn');
    const btnReady = document.getElementById('mode-ready-btn'); 
    const viewBody = document.getElementById('view-body');
    const viewMind = document.getElementById('view-mind');
    const viewReady = document.getElementById('view-ready');
    const daySel = document.getElementById('day-selector');

    const switchTab = (activeBtn, activeView, showDays) => {
      if (navigator.vibrate) navigator.vibrate(15);
      [btnBody, btnMind, btnReady].forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      [viewBody, viewMind, viewReady].forEach(v => v.classList.add('hidden'));
      activeBtn.classList.add('active');
      activeBtn.setAttribute('aria-selected', 'true');
      activeView.classList.remove('hidden');
      daySel.classList.toggle('hidden', !showDays);
    };

    btnBody.addEventListener('click', () => switchTab(btnBody, viewBody, true));
    btnMind.addEventListener('click', () => switchTab(btnMind, viewMind, false));
    btnReady.addEventListener('click', () => switchTab(btnReady, viewReady, false));

    ['MO','TU','WE','TH','FR','SA','SU'].forEach((l, i) => {
      const b = document.createElement('button');
      b.className = 'day-btn';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', 'false');
      b.textContent = l;
      if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
      b.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        document.querySelectorAll('.day-btn').forEach(x => {
          x.classList.remove('active');
          x.setAttribute('aria-selected', 'false');
        });
        b.classList.add('active');
        b.setAttribute('aria-selected', 'true');
        renderWorkout(i);
      });
      daySel.appendChild(b);
    });

    const savedTheme = localStorage.getItem('workoutSysTheme');
    if (savedTheme) document.body.dataset.theme = savedTheme;
    
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(15);
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

    const savedName = localStorage.getItem('workoutSysName');
    if (savedName) nameInput.value = savedName;

    updateMantras();
    initReady(); 

    const today = (new Date().getDay() + 6) % 7;
    daySel.children[today].click();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
