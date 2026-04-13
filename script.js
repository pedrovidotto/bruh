const workoutData = [
  { "day": 1, "title": "Upper 1: Strength", "duration": "85-95m", "exercises": [
    { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 180s rest", "rpe": "8-9", "instructions": "SETUP: Bench at 30°. Retract and depress scapulae to create a stable platform.\nEXECUTION: Lower weights for a strict 4s count. Focus on a deep stretch in the upper pectorals. Pause 1s at the bottom stretch position. Drive explosively but stop at 95% lockout to maintain continuous tension on the clavicular head." },
    { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 150s rest", "rpe": "8-9", "instructions": "SETUP: Torso leaned 30° forward, chin tucked to chest. EXECUTION: 4s negative count. Descend until shoulders are slightly below elbows. Feel the lower pec stretch. Pause 1s at bottom. Drive up using chest compression, avoiding excessive tricep takeover at the top." },
    { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 150s rest", "rpe": "8", "instructions": "SETUP: Bench at 80°. Position elbows 30° forward in the Scapular Plane. EXECUTION: 4s negative. Lower dumbbells to ear level. Press to full lockout while keeping ribs tucked to avoid lumbar hyperextension. Targets anterior deltoid and upper pec." },
    { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 120s rest", "rpe": "8", "instructions": "SETUP: Pad firmly against sternum. EXECUTION: 3s negative. Initiate with scapular retraction (squeeze blades). Pull elbows past the midline. Full dead-hang stretch at the bottom to maximize lat and rhomboid recruitment." },
    { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Cable at hand height, pulling from behind the body. EXECUTION: 2s negative. Raise to shoulder height with pinky slightly higher than thumb. Pause at peak. Targets the lateral deltoid in its most stretched position." },
    { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Seat height so handles are at eye level. EXECUTION: Keep scapulae protracted (rounded forward) throughout. Pull out in a wide arc using only the rear delts. Do not squeeze shoulder blades together; that uses traps." },
    { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "EXECUTION: Neutral grip (palms facing). Slow 3s eccentric. Focus on the Brachialis (muscle under the bicep) to push the bicep up, increasing arm width." },
    { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "SETUP: High pulley. Back to machine. EXECUTION: 3s negative. Allow hands to go deep behind the head for maximum long-head stretch. Flare the rope at the top of the movement for peak lateral head contraction." }
  ], "abFinisher": { "name": "Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "SETUP: Kneeling. Rope behind neck. EXECUTION: Flex the spine, attempting to touch elbows to knees. DO NOT pivot at the hips. Exhale and crunch the ribs into the pelvis. Slow controlled return." } },
  { "day": 2, "title": "Lower 1: Strength", "duration": "70-75m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 150s rest", "rpe": "8-9", "instructions": "SETUP: Bench at scapula level. Chin tucked. EXECUTION: 3s negative. Drive through heels. 2s hard squeeze at peak contraction with a Posterior Pelvic Tilt (tuck the tailbone). Do not hyperextend the lower back." },
    { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps | 120s rest", "rpe": "8-9", "instructions": "SETUP: Torso leaned 15° forward. Short stride for glute bias. EXECUTION: 3s negative. Sink deep until the glute is at maximum stretch. Drive up, focusing all tension on the front leg glute-ham tie-in." },
    { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 150s rest", "rpe": "8", "instructions": "SETUP: Feet hip-width. EXECUTION: 4s negative. Hinge back as if closing a door with your glutes. Keep bar glued to shins. Stop when hamstrings are at maximum tension. Do not round the spine." },
    { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "rpe": "9", "instructions": "EXECUTION: 3s negative. Lean slightly back in the seat. Point toes slightly inward to target the vastus lateralis (outer quad sweep). 1s hard squeeze at the top." },
    { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative. Lower into a deep stretch. Pause for 1s in the stretch to kill the stretch-reflex. Drive onto big toes and squeeze for 1s." }
  ] },
  { "day": 3, "title": "Upper 2: Hypertrophy", "duration": "55-60m", "exercises": [
    { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Higher angle targets the uppermost clavicular fibers. Focus on driving the dumbbells toward each other at the top (adduction) without touching them." },
    { "name": "Low-to-High Cable Fly", "details": "4 sets of 10-12 reps + Partials | 90s rest", "rpe": "10", "instructions": "EXECUTION: Cross hands over at the top for peak upper-pec contraction. Upon reaching full ROM failure, perform 5-6 'lengthened partials' moving only from the bottom stretch to halfway up." },
    { "name": "Seated DB Lateral Raise", "details": "4 sets of 12-15 reps + Partials | 75s rest", "rpe": "10", "instructions": "EXECUTION: Raise to shoulder height. Upon failure, immediately perform partials in the bottom 30% of the ROM. The stretch position is where the side delt receives the highest hypertrophic signal." },
    { "name": "Lat Pulldown (Neutral)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "SETUP: Palms facing each other. EXECUTION: Drive elbows straight down. Full dead-hang at the top to stretch the lats. Focus on pulling with the lats, not the biceps." },
    { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Straight bar. EXECUTION: Keep elbows pinned. Focus on the lateral head of the triceps. Squeeze hard at the bottom. Control the return to eye level." },
    { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "EXECUTION: Keep shoulders pinned back. Do not allow elbows to drift forward. Constant tension: do not rest at the bottom or top of the rep." }
  ] },
  { "day": 4, "title": "Lower 2: Hypertrophy", "duration": "55-60m", "exercises": [
    { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Focus on high-rep endurance. Maintain a constant pace, but never skip the 1s lockout squeeze. Your upper glutes should feel 'pumped' by set 2." },
    { "name": "Leg Press (Glute Stance)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "9", "instructions": "SETUP: Feet at the very top of the platform, wider than shoulders. EXECUTION: Lower as deep as possible without the tailbone lifting off the seat. Drive through heels to bias glutes." },
    { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "SETUP: Pad just below the hip bone. EXECUTION: Round the upper back (flexion). Use ONLY the glutes to pull the torso up. Do not look up or flatten your back; this keeps tension strictly on the glute shelf." },
    { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "rpe": "10", "instructions": "EXECUTION: Keep hips pressed into the pad. Upon full ROM failure, perform partial reps in the fully stretched position to hit the distal hamstring fibers." },
    { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: Specific to the Soleus muscle. Use a 4s eccentric. This muscle requires higher volume and slower tempos to grow." }
  ] },
  { "day": 5, "title": "Upper 3: Metabolic", "duration": "60-65m", "exercises": [
    { "name": "Pec Deck Fly", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Set failure at 12-15 reps. Rest 10s (3-5 breaths). Do 4-5 reps. Rest 10s. Repeat for 4 clusters total. Keep constant tension; do not let weights touch." },
    { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "9-10", "instructions": "EXECUTION: Neutral or standard grip. Push into the seat to create stability. Take every set to technical failure. The machine allows for safe absolute failure." },
    { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "EXECUTION: Focus on width rows. Pull elbows out to 45°. Squeeze the rear delts and mid-traps. High metabolic stress with short rest." },
    { "name": "Cable Lateral Raise", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Myo-reps. Same as Pec Deck. This is the final side-delt assault of the week. Focus on the burn and cell swelling." },
    { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "rpe": "8", "instructions": "SETUP: Rope at eye level. EXECUTION: Pull toward forehead while rotating fists back. Squeeze rear delts. Essential for shoulder health and 3D appearance." },
    { "name": "Arm Superset: Skull/Curl", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9-10", "instructions": "SETUP: Single cable station with EZ-bar or rope. EXECUTION: Complete Triceps then immediately switch to Biceps. No rest between exercises." }
  ] },
  { "day": 6, "title": "Lower 3: Metabolic", "duration": "115m", "exercises": [
    { "name": "45° Cable Kickback", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "SETUP: Ankle strap. EXECUTION: Kick diagonally UP and OUT (45°). This aligns with the upper fibers of the gluteus maximus and medius. Myo-rep protocol." },
    { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop) | 75s rest", "rpe": "9-10", "instructions": "SETUP: Lean torso forward 30°. EXECUTION: Push out hard. Drop weight by 30% on the final set and go to absolute failure. Targets the 'glute shelf'." },
    { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "SETUP: Feet low on platform. EXECUTION: Maximum depth. This is a quad-dominant finisher. Keep heels pinned. Control the negative." },
    { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "rpe": "9", "instructions": "EXECUTION: Focus on high-rep metabolic fatigue. Do not allow your butt to lift off the seat during the curl." },
    { "name": "Machine Hip Thrust", "details": "1 Activation + 4 Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Final glute depletion. Use machine for maximum stability so you can focus purely on the Myo-rep burn." },
    { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "rpe": "8-9", "instructions": "EXECUTION: High frequency volume. Bounce-free reps. Squeeze at the top like you are trying to stand on your tiptoes." }
  ], "abFinisher": { "name": "Inclined Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "SETUP: Incline bench (head at top). EXECUTION: Lift your butt off the bench at the top of the movement (Posterior Pelvic Tilt). Pelvic rotation, not just a leg lift." },
     "cardio": { "name": "40m Zone 2 Cardio", "details": "1 set of 40 mins", "instructions": "Pacing: Conversational. This clears the metabolic waste from the training week. Do not enter Zone 3." } },
  { "day": 7, "title": "Systemic Standby", "duration": "0m", "exercises": [] }
];

let progress = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
let activeTimer = null;
let clickLock = false;

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
            const m = Math.floor(remaining / 60).toString().padStart(2, '0');
            const s = (remaining % 60).toString().padStart(2, '0');
            display.textContent = `${m}:${s}`;
        }
    }, 250);
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
        list.innerHTML = `<li class="exercise-item" style="justify-content:center;opacity:0.5;border:none;"><h3>SYSTEM IN STANDBY</h3></li>`;
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
        li.onclick = () => { if(!clickLock) updateProgress(id, total, 1, idx); };

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

function toggleTheme() {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = next;
    localStorage.setItem('workoutSysTheme', next);
    const themeColor = next === 'light' ? '#f2ece7' : '#2d2a27';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
}

function init() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    themeBtn.onclick = toggleTheme;
    document.body.dataset.theme = localStorage.getItem('workoutSysTheme') || 'dark';

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
