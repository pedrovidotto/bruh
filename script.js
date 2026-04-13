const workoutData = [
  { "day": 1, "title": "Upper 1: Strength", "duration": "85-95m", "exercises": [
    { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 180s rest", "rpe": "8-9", "instructions": "SETUP: Bench at 30°. Retract scapulae.\nEXECUTION: 4s negative. Pause 1s at bottom. Explosive concentric, stop at 95% lockout." },
    { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 150s rest", "rpe": "8-9", "instructions": "SETUP: Torso leaned 30° forward.\nEXECUTION: 4s negative. Full stretch. Drive up via chest compression." },
    { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 150s rest", "rpe": "8", "instructions": "SETUP: Scapular Plane (elbows 30° forward).\nEXECUTION: 4s negative. Full overhead lockout while keeping ribs tucked." },
    { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 120s rest", "rpe": "8", "instructions": "SETUP: Pad against sternum.\nEXECUTION: 3s negative. Initiate with scapular retraction. Dead-hang stretch at bottom." },
    { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Cable behind body.\nEXECUTION: 2s negative. Raise to shoulder height, pinky slightly higher than thumb." },
    { "name": "Reverse Pec-Deck", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Protract scapulae.\nEXECUTION: Wide arc using only rear delts. Do not squeeze shoulder blades." },
    { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "EXECUTION: Neutral grip. 3s negative. Focus on Brachialis width." },
    { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "EXECUTION: 3s negative. Allow hands to go deep behind head for long-head stretch." }
  ], "abFinisher": { "name": "Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "EXECUTION: Flex spine, ribs to pelvis. Do not pivot at hips. Slow controlled return." } },
  { "day": 2, "title": "Lower 1: Strength", "duration": "70-75m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 150s rest", "rpe": "8-9", "instructions": "EXECUTION: 3s negative. 2s hard squeeze at peak with Posterior Pelvic Tilt." },
    { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps | 120s rest", "rpe": "8-9", "instructions": "SETUP: Torso forward 15° for glute bias.\nEXECUTION: 3s negative. Focus on front leg glute-ham tie-in." },
    { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 150s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative. Hinge back, keep bar on shins. Stop at max hamstring tension." },
    { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "rpe": "9", "instructions": "EXECUTION: 3s negative. Toes slightly in for outer quad sweep. 1s top squeeze." },
    { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative. Pause 1s in deep stretch. Drive onto big toes." }
  ] },
  { "day": 3, "title": "Upper 2: Hypertrophy", "duration": "55-60m", "exercises": [
    { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Focus on uppermost clavicular fibers. Drive dumbbells toward midline at top." },
    { "name": "Low-to-High Cable Fly", "details": "3 sets of 10-12 reps + Partials | 90s rest", "rpe": "10", "instructions": "Cross hands at top. At failure, do 5-6 partials from bottom stretch to halfway." },
    { "name": "Seated DB Lateral Raise", "details": "4 sets of 12-15 reps + Partials | 75s rest", "rpe": "10", "instructions": "At failure, do 6-8 partials in bottom 30% of range. Stretch position focus." },
    { "name": "Lat Pulldown (Neutral)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "EXECUTION: Drive elbows straight down. Full dead-hang stretch at top." },
    { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Straight bar.\nEXECUTION: Keep elbows pinned. lateral head focus. Squeeze at bottom." },
    { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "EXECUTION: Shoulders pinned back. Constant tension: no rest at top or bottom." }
  ] },
  { "day": 4, "title": "Lower 2: Hypertrophy", "duration": "55-60m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "EXECUTION: Constant pace, 1s lockout squeeze. Target upper glute pump." },
    { "name": "Leg Press (Glute Stance)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "9", "instructions": "SETUP: Feet high and wide on platform.\nEXECUTION: Drive through heels to bias glutes." },
    { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "EXECUTION: Round upper back. Use ONLY glutes to pull torso up. Keep chin tucked." },
    { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "rpe": "10", "instructions": "EXECUTION: Technical failure followed by partials in the fully stretched position." },
    { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: 4s eccentric. Targeted to the Soleus muscle." }
  ] },
  { "day": 5, "title": "Upper 3: Metabolic", "duration": "60-65m", "exercises": [
    { "name": "Pec Deck Fly", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Set to failure. Rest 10s. Do 4-5 reps. Repeat for 4 clusters total." },
    { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "9-10", "instructions": "EXECUTION: Neutral grip. Push into seat. Machine allows for safe absolute failure." },
    { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "EXECUTION: Width rows. Pull elbows out to 45°. Squeeze rear delts and mid-traps." },
    { "name": "Cable Lateral Raise", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Myo-reps. Final side-delt assault of the week. Focus on the pump." },
    { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: Pull toward forehead, rotate fists back. Essential for 3D shoulder 'cap'." },
    { "name": "Arm Superset: Skull/Curl", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9-10", "instructions": "SETUP: Single cable station.\nEXECUTION: Complete Triceps then immediately switch to Biceps." }
  ] },
  { "day": 6, "title": "Lower 3: Metabolic", "duration": "115m", "exercises": [
    { "name": "45° Cable Kickback", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "EXECUTION: Kick diagonally UP and OUT (45°). Aligns with upper glute fibers." },
    { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop) | 75s rest", "rpe": "9-10", "instructions": "SETUP: Lean torso forward 30°.\nEXECUTION: Drop weight by 30% on final set to failure." },
    { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "SETUP: Feet low on platform.\nEXECUTION: Maximum depth. Quad-dominant finisher." },
    { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "rpe": "9", "instructions": "EXECUTION: High-rep metabolic fatigue. Do not lift butt off seat." },
    { "name": "Machine Hip Thrust", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Final glute depletion. Use machine for maximum stability and burn." },
    { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "rpe": "8-9", "instructions": "EXECUTION: High frequency volume. Pause at top, bounce-free reps." }
  ], "abFinisher": { "name": "Inclined Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "EXECUTION: Rotate pelvis upward off bench. Targets lower rectus abdominis." },
     "cardio": { "name": "40m Zone 2 Cardio", "details": "1 set of 40 mins", "instructions": "Pacing: Conversational. Clears metabolite waste from the training week." } },
  { "day": 7, "title": "Systemic Standby", "duration": "0m", "exercises": [] }
];

let progress = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
let activeTimer = null;
let touchLock = false;

function startTimer(seconds) {
    if (activeTimer) clearInterval(activeTimer);
    const endTime = Date.now() + (seconds * 1000);
    const display = document.getElementById('timer-display');
    display.classList.remove('hidden');

    activeTimer = setInterval(() => {
        const remaining = Math.round((endTime - Date.now()) / 1000);
        if (remaining <= 0) {
            clearInterval(activeTimer); display.classList.add('hidden');
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        } else {
            display.textContent = `${Math.floor(remaining / 60).toString().padStart(2, '0')}:${(remaining % 60).toString().padStart(2, '0')}`;
        }
    }, 200);
}

function renderWorkout(idx) {
    const data = workoutData[idx];
    document.getElementById('workout-title').textContent = data.title;
    document.getElementById('workout-duration').textContent = `// EST. DURATION: ${data.duration}`;
    const list = document.getElementById('exercise-list');
    const compList = document.getElementById('completed-list');
    const compSection = document.getElementById('completed-section');
    list.innerHTML = ''; compList.innerHTML = '';

    if (data.exercises.length === 0) {
        list.innerHTML = `<li class="exercise-item" style="justify-content:center;opacity:0.5;"><h3>SYSTEM IN STANDBY</h3></li>`;
        compSection.classList.add('hidden');
        return;
    }

    const items = [...data.exercises];
    if (data.abFinisher) items.push({...data.abFinisher, idType: 'ab'});
    if (data.cardio) items.push({...data.cardio, idType: 'cardio'});

    items.forEach((ex, i) => {
        const id = `d${idx}-${ex.idType || 'e'}${i}`;
        const match = ex.details.match(/(\d+)\s+sets/i) || ex.details.match(/(\d+)\s+Activation/i) || [0, 1];
        const total = parseInt(match[1]);
        const current = progress[id] || 0;
        
        const li = document.createElement('li');
        li.className = 'exercise-item';
        const rpe = ex.rpe ? `<span class="rpe-tag">RPE ${ex.rpe}</span>` : '';
        
        li.innerHTML = `
            <span class="set-counter ${current >= total ? 'sets-complete' : ''}">${current}/${total}</span>
            <div class="exercise-details">
                <h3>${ex.name}${rpe}</h3>
                <p>${ex.details}</p>
            </div>
            <button class="info-btn" onclick="event.stopPropagation(); showInfo('${ex.name}', \`${ex.instructions}\`)">ⓘ</button>
        `;

        li.oncontextmenu = (e) => { e.preventDefault(); updateProgress(id, total, -1, idx); };
        li.onclick = () => { if(!touchLock) updateProgress(id, total, 1, idx); };

        (current >= total ? compList : list).appendChild(li);
    });
    compSection.classList.toggle('hidden', compList.children.length === 0);
}

function updateProgress(id, total, delta, idx) {
    progress[id] = Math.max(0, Math.min(total, (progress[id] || 0) + delta));
    localStorage.setItem('workoutSysProgress', JSON.stringify(progress));
    
    if (delta > 0 && progress[id] < total) {
        const restMatch = workoutData[idx].exercises.find(e => e.details.includes('rest'))?.details.match(/(\d+)s/);
        if (restMatch) startTimer(parseInt(restMatch[1]));
    }
    renderWorkout(idx);
}

function showInfo(title, text) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-instructions').textContent = text;
    document.getElementById('info-modal-overlay').classList.remove('hidden');
}

function init() {
    const nav = document.getElementById('day-selector');
    ['MO','TU','WE','TH','FR','SA','SU'].forEach((label, i) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        btn.textContent = label;
        btn.onclick = () => {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWorkout(i);
        };
        nav.appendChild(btn);
    });
    const today = (new Date().getDay() + 6) % 7;
    nav.children[today].click();
    
    document.getElementById('info-modal-close-btn').onclick = () => document.getElementById('info-modal-overlay').classList.add('hidden');
    document.getElementById('reset-button').onclick = () => document.getElementById('reset-modal-overlay').classList.remove('hidden');
    document.getElementById('cancel-reset-btn').onclick = () => document.getElementById('reset-modal-overlay').classList.add('hidden');
    document.getElementById('confirm-reset-btn').onclick = () => { localStorage.clear(); location.reload(); };
}

init();
