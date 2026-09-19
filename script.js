(function() {
  'use strict';

  /* ─── Workout Data v7.0 (ULTER System - High Intensity 3-Set Bias) ─── */
  const workoutData = [
    { "day": 1, "title": "Upper 1", "subtitle": "Clavicular & Lateral Bias", "duration": "60–70m", "exercises": [
      { "name": "Converging Incline Machine Press", "details": "3 × 6–8 reps · 150s rest", "rpe": "9–10", "instructions": "SETUP: Prime/Arsenal machine. EXECUTION: Drive hands up and inward. 2s pause in the deep stretch. Push to absolute failure on the final set." },
      { "name": "30° Incline Cable Fly", "details": "3 × 10–12 reps · 90s rest", "rpe": "10", "instructions": "EXECUTION: Focus entirely on the bottom half of the movement. Maximize the clavicular pec stretch until you can no longer move the cables." },
      { "name": "Cuffed Cross-Body Lateral Raise", "details": "3 × 10–12 reps · 90s rest", "rpe": "10", "instructions": "SETUP: Cable set to wrist height with cuffs. EXECUTION: Pull from across the body. The last 2 reps should be agonizingly slow." },
      { "name": "Single-Arm Iliac Lat Pulldown", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "SETUP: Single D-handle. EXECUTION: Pull elbow tight down to the hip. Control the negative allowing the scapula to fully open." },
      { "name": "Overhead Cable Triceps Ext.", "details": "3 × 10–12 reps · 60s rest", "rpe": "10", "instructions": "EXECUTION: Keep elbows pinned pointing forward. Full lockout at the top to target the long head." },
      { "name": "Cross-Body Cable Hammer Curl", "details": "3 × 12–15 reps · 60s rest", "rpe": "10", "instructions": "EXECUTION: Pull rope attachment across your torso to target the brachialis and push the bicep up." }
    ], "abFinisher": { "name": "Cable Crunches", "details": "3 × 12–15 reps · 60s rest", "instructions": "EXECUTION: Flex spine, ribs to pelvis. Heavy load focus, do not pivot at hips." } },
    
    { "day": 2, "title": "Lower 1", "subtitle": "Quad Sweep & Upper Glute", "duration": "70–80m", "exercises": [
      { "name": "Quad-Biased Hack Squat", "details": "3 × 8–10 reps · 150s rest", "rpe": "9–10", "instructions": "SETUP: Feet placed very low and close together. EXECUTION: Maximize forward knee travel. 2s pause at the absolute bottom stretch. Survive the burn." },
      { "name": "Deficit Bulgarian Split Squat", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "SETUP: Front foot elevated on a 2-inch plate. EXECUTION: Focus on the glute-ham tie-in and quad stretch at the bottom." },
      { "name": "Forward-Leaning Hip Abduction", "details": "3 × 12–15 reps · 90s rest", "rpe": "10", "instructions": "SETUP: Hinge torso 45° forward off the back pad. EXECUTION: Push out hard, pause for 1s at maximum contraction." },
      { "name": "Seated Adductor Machine", "details": "3 × 12–15 reps · 90s rest", "rpe": "10", "instructions": "EXECUTION: Control the negative deeply to stretch the adductors. Adds mass to the inner thigh to widen the quad profile." },
      { "name": "Lying Leg Curl", "details": "3 × 10–12 reps + Partials · 90s rest", "rpe": "10", "instructions": "EXECUTION: Technical failure on full ROM, immediately followed by 5-6 partials in the fully stretched position." },
      { "name": "Standing Calf Raise", "details": "3 × 10–12 reps · 60s rest", "rpe": "10", "instructions": "EXECUTION: 3s negative. 2s pause in the deep stretch to dissipate the Achilles reflex." }
    ] },
    
    { "day": 3, "title": "Upper 2", "subtitle": "Costal Pec & Mid-Back", "duration": "65–75m", "exercises": [
      { "name": "High-to-Low Cuffed Cable Fly", "details": "3 × 10–12 reps · 120s rest", "rpe": "10", "instructions": "SETUP: Use wrist cuffs. Pulleys set high. EXECUTION: Drive down and slightly across the body to isolate the costal pec fibers." },
      { "name": "Deficit Weighted Dips", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "EXECUTION: Torso angled 30° forward. Lower until shoulders are below elbows. 2s pause in the stretch." },
      { "name": "Machine Lateral Raise", "details": "3 × 12–15 reps · 90s rest", "rpe": "10", "instructions": "EXECUTION: Shift the resistance profile to the top. Hard 1s pause at the fully shortened (top) position on every rep." },
      { "name": "Chest-Supported T-Bar Row", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "EXECUTION: 3s negative count. 2s dead-hang stretch at the bottom before initiating the next rep." },
      { "name": "Reverse Pec-Deck", "details": "3 × 12–15 reps · 60s rest", "rpe": "10", "instructions": "SETUP: Protract scapulae. EXECUTION: Wide arc using only rear delts. Do not squeeze shoulder blades together." },
      { "name": "Incline DB Bicep Curl", "details": "3 × 10–12 reps · 60s rest", "rpe": "10", "instructions": "SETUP: Bench at 45°. EXECUTION: Let arms hang straight down for a full stretch before curling." }
    ] },
    
    { "day": 4, "title": "Lower 2", "subtitle": "Glute Overload & Rectus Femoris", "duration": "70–80m", "exercises": [
      { "name": "Leg Press (Glute Stance)", "details": "3 × 10–12 reps · 120s rest", "rpe": "9–10", "instructions": "SETUP: Feet high and wide on platform. EXECUTION: Drive through heels to bias glutes over quads. No lockout." },
      { "name": "Smith Machine RDL", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "EXECUTION: Utilize the fixed track to safely push deeper into the hamstring stretch without lower back stability failure." },
      { "name": "Seated Leg Extension", "details": "3 × 10–12 reps · 90s rest", "rpe": "10", "instructions": "SETUP: Lean torso as far back against the pad as possible. EXECUTION: Opens the hip angle to put the rectus femoris under maximum stretch tension." },
      { "name": "45° Cable Kickback", "details": "3 × 12–15 reps · 90s rest", "rpe": "10", "instructions": "SETUP: Ankle strap on low pulley. EXECUTION: Kick diagonally UP and OUT (45°). Aligns directly with upper glute medius fibers." },
      { "name": "45° Back Extension", "details": "3 × 12–15 reps · 90s rest", "rpe": "10", "instructions": "EXECUTION: Round upper back. Use ONLY glutes to pull torso up. Keep chin tucked to spine." },
      { "name": "Seated Calf Raise", "details": "3 × 12–15 reps · 60s rest", "rpe": "10", "instructions": "EXECUTION: 4s negative count. Constant slow rhythm targeting the soleus." }
    ] },
    
    { "day": 5, "title": "Upper 3", "subtitle": "Structural Polish", "duration": "65–75m", "exercises": [
      { "name": "Seated Machine Shoulder Press", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "EXECUTION: Neutral grip. Push hard into the back pad for stability. Control the negative for 3 seconds." },
      { "name": "Cuffed Cable Y-Raise", "details": "3 × 12–15 reps · 90s rest", "rpe": "10", "instructions": "SETUP: Cables crossed at bottom. EXECUTION: Pull up and out. Maximum tension is at the bottom stretch." },
      { "name": "Flat Machine Chest Press", "details": "3 × 8–10 reps · 120s rest", "rpe": "9–10", "instructions": "EXECUTION: Target the mid/sternal pec. 2s pause in the maximum stretched position." },
      { "name": "Neutral-Grip Cable Row", "details": "3 × 10–12 reps · 90s rest", "rpe": "9–10", "instructions": "EXECUTION: Keep elbows tucked tight to the torso to target the lat sweep. Pull to true failure." },
      { "name": "Cable Triceps Pushdown", "details": "3 × 10–12 reps · 60s rest", "rpe": "10", "instructions": "SETUP: Straight bar. EXECUTION: Keep elbows pinned. Lateral head focus." },
      { "name": "Machine Preacher Curl", "details": "3 × 10–12 reps · 60s rest", "rpe": "10", "instructions": "EXECUTION: Overloads the shortened position of the bicep. Squeeze hard at the peak." }
    ], "abFinisher": { "name": "Decline Bench Reverse Crunches", "details": "3 × 12–15 reps · 60s rest", "instructions": "EXECUTION: Focus on lifting the pelvis. Slow 4s eccentric back to the bench." } },
    
    { "day": 6, "title": "Lower 3", "subtitle": "Posterior Chain & Flush", "duration": "55–65m", "exercises": [
      { "name": "Machine Hip Thrust", "details": "3 × 10–12 reps · 120s rest", "rpe": "10", "instructions": "EXECUTION: Lock the pelvis in. Drive through the heels for a hard 1s contraction at the peak." },
      { "name": "Standing Cable Hip Abduction", "details": "3 × 15–20 reps · 60s rest", "rpe": "10", "instructions": "PROTOCOL: Pull the working leg directly across the body's midline under load to hit the glute medius from a new vector." },
      { "name": "Seated Leg Curl", "details": "3 × 10–12 reps · 90s rest", "rpe": "10", "instructions": "EXECUTION: Lengthened partials. Perform reps only in the top 50% of the range of motion where the hamstring is stretched." },
      { "name": "Leg Extension (Metabolic Flush)", "details": "3 × 15–20 reps · 60s rest", "rpe": "10", "instructions": "EXECUTION: High rep burnout to flush the quads with blood. Constant tension, no pausing." },
      { "name": "Tibialis Raise", "details": "3 × 15–20 reps · 45s rest", "rpe": "9", "instructions": "EXECUTION: Dorsiflex hard against the resistance to build lower leg balance against the calves." },
      { "name": "Standing Calf Raise", "details": "3 × 15–20 reps · 45s rest", "rpe": "10", "instructions": "EXECUTION: Higher rep range today. Explosive concentric, controlled eccentric." }
    ], "abFinisher": { "name": "Cable Pallof Press", "details": "3 × 12–15 reps/side · 45s rest", "instructions": "EXECUTION: Stand perpendicular to cable. Press handle straight out in front of your chest and hold for 1s." } },
    
    { "day": 7, "title": "Standby", "subtitle": "System Recovery", "duration": "—", "exercises": [], "cardio": { "name": "Zone 2 Output", "details": "1 × 30 mins", "instructions": "PACING: Maintain a brisk, steady pace. You should be able to hold a conversation without gasping for air." } }
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

  const getMondayOfCurrentWeek = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff)).toDateString();
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

    // BUGFIX: Correctly gather all items first before checking if the day is completely empty.
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
    
    // BUGFIX: Ghost Click Neutralizer. 
    // Small timeout ensures the browser's synthetic 'click' from the pointerup event 
    // doesn't instantly trigger the close handler.
    setTimeout(() => {
      el.onclick = () => {
        el.classList.remove('visible');
        el.onclick = null; // Clean up
      };
    }, 150);
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
    if (navigator.vibrate) navigator.vibrate(20);
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
    btn.addEventListener('click', function() { 
      if (navigator.vibrate) navigator.vibrate(20);
      this.classList.toggle('done'); 
    });
  });

  document.getElementById('reset-mind-btn').addEventListener('click', () => {
    document.querySelectorAll('.action-btn').forEach(c => {
      c.classList.remove('done');
    });
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

  /* ─── READINESS SYSTEM (HARDCODED BASELINE) ───────────────────── */
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

  function initReady() {
    document.querySelectorAll('.dash-input').forEach(el => el.addEventListener('input', updateReadyUI));
    updateReadyUI();
  }

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
      if (isNaN(v) || v < 0 || v > 24) validations.sleep.valid = false;
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
        navigator.serviceWorker.register('sw.js').catch(err => console.error('SW Error:', err));
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
      [btnBody, btnMind, btnReady].forEach(b => b.classList.remove('active'));
      [viewBody, viewMind, viewReady].forEach(v => v.classList.add('hidden'));
      activeBtn.classList.add('active');
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
      b.textContent = l;
      if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
      b.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        document.querySelectorAll('.day-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
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
