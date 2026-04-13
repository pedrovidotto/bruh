const workoutData = [
  { "day": 1, "title": "Upper 1: Strength + AEL", "duration": "85-95m", "exercises": [
    { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 180s rest", "rpe": "8-9", "instructions": "SETUP: Bench at 30°. EXECUTION: 4s negative. deep stretch in upper pectorals. Pause 1s at bottom. Stop at 95% lockout." },
    { "name": "Weighted Dips (Chest)", "details": "3 sets of 5-7 reps | 150s rest", "rpe": "8-9", "instructions": "SETUP: Torso 30° forward. EXECUTION: 4s negative. shoulders slightly below elbows. Drive up via chest compression." },
    { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 150s rest", "rpe": "8", "instructions": "SETUP: Scapular Plane (elbows 30° forward). EXECUTION: 4s negative. Press to full lockout, ribs tucked." },
    { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 120s rest", "rpe": "8", "instructions": "3s negative. Initiate with scapular retraction. Full dead-hang stretch at bottom." },
    { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "2s negative. Cable behind body. Raise to shoulder height, pinky higher than thumb." },
    { "name": "Reverse Pec-Deck", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9", "instructions": "Keep scapulae protracted (rounded) throughout. wide arc using only rear delts." },
    { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "3s negative. Focus on Brachialis to increase arm width." },
    { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "3s negative. deep behind head for long-head stretch. Flare rope at top." }
  ], "abFinisher": { "name": "Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "Flex the spine, ribs to pelvis. DO NOT pivot at hips. Slow controlled return." } },
  { "day": 2, "title": "Lower 1: Strength + AEL", "duration": "70-75m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 150s rest", "rpe": "8-9", "instructions": "3s negative. 2s hard squeeze at peak with Posterior Pelvic Tilt (tuck tailbone)." },
    { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps | 120s rest", "rpe": "8-9", "instructions": "Torso forward 15° for glute bias. 3s negative. focus front leg glute-ham tie-in." },
    { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 150s rest", "rpe": "8", "instructions": "4s negative. Hinge back, keep bar glued to shins. Stop at max hamstring tension." },
    { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "rpe": "9", "instructions": "3s negative. Point toes slightly inward for vastus lateralis target. 1s top squeeze." },
    { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "rpe": "8", "instructions": "4s negative. Pause 1s in deep stretch. Drive onto big toes." }
  ] },
  { "day": 3, "title": "Upper 2: Hypertrophy + Partials", "duration": "55-60m", "exercises": [
    { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Focus on uppermost clavicular fibers. Drive dumbbells toward midline at top." },
    { "name": "Low-to-High Cable Fly", "details": "3 sets of 10-12 reps + Partials | 90s rest", "rpe": "10", "instructions": "Cross hands at top. At failure, do 5-6 partials from bottom stretch to halfway." },
    { "name": "Seated DB Lateral Raise", "details": "3 sets of 12-15 reps + Partials | 75s rest", "rpe": "10", "instructions": "At failure, do 6-8 partials in bottom 30% of range. Stretch position focus." },
    { "name": "Lat Pulldown (Neutral)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "Drive elbows straight down. Full dead-hang stretch at top." },
    { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "Straight bar. Lateral head focus. Squeeze hard at bottom." },
    { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "Keep shoulders pinned back. Constant tension: no rest at top or bottom." }
  ] },
  { "day": 4, "title": "Lower 2: Hypertrophy + Partials", "duration": "55-60m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Constant pace, never skip 1s lockout squeeze. Target upper glute pump." },
    { "name": "Leg Press (Glute Stance)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "9", "instructions": "Feet at top of platform, wider than shoulders. Drive through heels." },
    { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "Round upper back. Use ONLY glutes to pull torso up. Keep chin tucked." },
    { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "rpe": "10", "instructions": "At failure, do partials in fully stretched (legs straight) position." },
    { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "rpe": "8", "instructions": "4s eccentric. Target Soleus muscle." }
  ] },
  { "day": 5, "title": "Upper 3: Metabolic Stress", "duration": "60-65m", "exercises": [
    { "name": "Pec Deck Fly", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "Myo-reps: set to failure, rest 10s, do 4-5 reps. Repeat for 4 clusters total." },
    { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "9-10", "instructions": "Push into seat for stability. Take every set to 0 RIR." },
    { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "Pull elbows out to 45°. Squeeze rear delts/mid-traps." },
    { "name": "Cable Lateral Raise", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "Myo-rep protocol. Final side-delt assault. Focus on cell swelling." },
    { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "rpe": "8", "instructions": "Pull toward forehead while rotating fists back. Squeeze rear delts." },
    { "name": "Arm Superset: Skull Crushers + Curls", "details": "3 sets of 12-15 reps each | 60s rest", "rpe": "9-10", "instructions": "Single station. Triceps then immediately switch to Biceps." }
  ] },
  { "day": 6, "title": "Lower 3: Metabolic + Active Recovery", "duration": "115m", "exercises": [
    { "name": "45° Cable Kickback", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "Kick diagonally UP and OUT (45°). Targets upper fibers. Myo-reps." },
    { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop) | 75s rest", "rpe": "9-10", "instructions": "Lean torso forward 30°. Final drop set to absolute failure." },
    { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "Maximum depth. Quad-dominant. Heels pinned, control negative." },
    { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "rpe": "9", "instructions": "Keep hips pressed down. High-rep metabolic fatigue." },
    { "name": "Machine Hip Thrust", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "Final glute depletion. Focus purely on mind-muscle burn." },
    { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "rpe": "8-9", "instructions": "Bounce-free. Squeeze hard at top." }
  ], "abFinisher": { "name": "Inclined Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Pelvic rotation, lift butt off bench at top. Target lower rectus abdominis." },
     "cardio": { "name": "40m Zone 2 Cardio", "details": "1 set of 40 mins", "instructions": "Conversational pace. Clears metabolic waste. Do not gasp." } },
  { "day": 7, "title": "Systemic Standby", "duration": "0m", "exercises": [] }
];

let progress = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
let activeTimer = null;
let ignoreNextClick = false;

function startTimer(seconds) {
    if (activeTimer) clearInterval(activeTimer);
    const endTime = Date.now() + (seconds * 1000);
    localStorage.setItem('timerEndTime', endTime);
    const display = document.getElementById('timer-display');
    display.classList.remove('hidden');

    activeTimer = setInterval(() => {
        const remaining = Math.round((endTime - Date.now()) / 1000);
        if (remaining <= 0) {
            clearInterval(activeTimer); display.classList.add('hidden');
            if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]);
        } else {
            display.textContent = `${Math.floor(remaining / 60).toString().padStart(2, '0')}:${(remaining % 60).toString().padStart(2, '0')}`;
        }
    }, 200);
}

function renderWorkout(idx) {
    const data = workoutData[idx];
    document.getElementById('workout-title').innerHTML = `<span style="font-weight:100; margin-right:10px;">${idx + 1}.</span>${data.title}`;
    document.getElementById('workout-duration').textContent = `// EST: ${data.duration}`;
    const list = document.getElementById('exercise-list');
    const comp = document.getElementById('completed-list');
    list.innerHTML = ''; comp.innerHTML = '';

    if (data.exercises.length === 0) {
        list.innerHTML = `<li class="exercise-item standby-card"><h3>SYSTEM IN STANDBY</h3><p>FOCUS ON RECOVERY.</p></li>`;
        document.getElementById('completed-workout').classList.add('hidden');
        return;
    }

    const items = [...data.exercises];
    if (data.abFinisher) items.push({...data.abFinisher, idType: 'ab'});
    if (data.cardio) items.push({...data.cardio, idType: 'cardio'});

    items.forEach((ex, i) => {
        const id = `d${idx}-${ex.idType || 'e'}${i}`;
        const match = ex.details.match(/(\d+)\s+sets/i) || ex.details.match(/(\d+)\s+Activation/i) || [0, 1];
        const sets = parseInt(match[1]);
        const current = progress[id] || 0;
        const li = document.createElement('li');
        li.className = 'exercise-item';
        const rpe = ex.rpe ? `<span class="rpe-badge">RPE ${ex.rpe}</span>` : '';
        li.innerHTML = `<span class="set-counter ${current >= sets ? 'sets-complete' : ''}">${current}/${sets}</span><div class="exercise-details"><h3>${ex.name}${rpe}</h3><p>${ex.details}</p></div><button class="info-btn">ⓘ</button>`;

        li.addEventListener('touchstart', () => {
            this.t = setTimeout(() => { updateProgress(id, sets, -1, idx); ignoreNextClick = true; if ('vibrate' in navigator) navigator.vibrate(30); }, 600);
        }, {passive: true});
        li.addEventListener('touchend', () => clearTimeout(this.t));
        li.addEventListener('click', (e) => {
            if (e.target.closest('.info-btn')) { showInfo(ex.name, ex.instructions); return; }
            if (ignoreNextClick) { ignoreNextClick = false; return; }
            updateProgress(id, sets, 1, idx);
        });
        (current >= sets ? comp : list).appendChild(li);
    });
    document.getElementById('completed-workout').classList.toggle('hidden', comp.children.length === 0);
}

function updateProgress(id, total, delta, idx) {
    progress[id] = Math.max(0, Math.min(total, (progress[id] || 0) + delta));
    localStorage.setItem('workoutSysProgress', JSON.stringify(progress));
    if (delta > 0 && progress[id] < total) {
        const match = workoutData[idx].exercises.find(e => e.details.includes('rest'))?.details.match(/(\d+)s/);
        if (match) startTimer(parseInt(match[1]));
    }
    renderWorkout(idx); checkDayComp(idx);
}

function checkDayComp(idx) {
    const data = workoutData[idx];
    const items = [...data.exercises];
    if (data.abFinisher) items.push(data.abFinisher);
    if (data.cardio) items.push(data.cardio);
    const complete = items.every((ex, i) => {
        const id = `d${idx}-${ex.idType || 'e'}${i}`;
        const match = ex.details.match(/(\d+)\s+sets/i) || ex.details.match(/(\d+)\s+Activation/i) || [0, 1];
        return (progress[id] || 0) >= parseInt(match[1]);
    });
    if (complete && !completedDays.includes(idx)) {
        completedDays.push(idx); localStorage.setItem('workoutSysCompletedDays', JSON.stringify(completedDays));
        document.querySelector(`[data-day="${idx}"]`).classList.add('day-complete');
    }
}

function showInfo(title, text) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-instructions').innerHTML = `<p>${text || "No specific instructions."}</p>`;
    document.getElementById('info-modal-overlay').classList.remove('hidden');
}

function toggleTheme() {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    localStorage.setItem('workoutSysTheme', next);
}

function init() {
    loadTheme();
    const nav = document.getElementById('day-selector');
    ['MO','TU','WE','TH','FR','SA','SU'].forEach((l, i) => {
        const b = document.createElement('button'); b.className = 'day-btn'; b.dataset.day = i; b.textContent = l;
        if (completedDays.includes(i)) b.classList.add('day-complete');
        b.onclick = () => { document.querySelectorAll('.day-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); renderWorkout(i); };
        nav.appendChild(b);
    });
    const today = (new Date().getDay() + 6) % 7;
    document.querySelector(`[data-day="${today}"]`).click();
    document.getElementById('theme-toggle-btn').onclick = toggleTheme;
    document.getElementById('reset-button').onclick = () => document.getElementById('reset-modal-overlay').classList.remove('hidden');
    document.getElementById('confirm-reset-btn').onclick = () => { localStorage.clear(); location.reload(); };
    document.getElementById('cancel-reset-btn').onclick = () => document.getElementById('reset-modal-overlay').classList.add('hidden');
    document.getElementById('info-modal-close-btn').onclick = () => document.getElementById('info-modal-overlay').classList.add('hidden');
}

function loadTheme() {
    const t = localStorage.getItem('workoutSysTheme') || 'dark';
    document.body.dataset.theme = t;
}

init();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
