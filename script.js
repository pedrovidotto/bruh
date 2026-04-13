// ─────────────────────────────────────────────────────────────────────────────
// WORKOUT DATA — 3x Upper / 3x Lower Hypertrophy Split
// Mo=Upper A | Tu=Lower A | We=Upper B | Th=Lower B | Fr=Upper C | Sa=Lower C | Su=Rest
// ─────────────────────────────────────────────────────────────────────────────
const workoutData = [
  { // DAY 1: UPPER 1 (Strength + Accentuated Eccentric Loading)
  { // DAY 1: UPPER 1 (Strength + AEL + Extended Isolation)
    "day": 1,
    "title": "Upper 1: Strength + AEL",
    "duration": "70-75 minutes",
    "exercises": [
      { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 180s rest", "instructions": "Tempo: 4-1-X-0. 4s eccentric, 1s pause at the bottom stretch, explode up." },
      { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 150s rest", "instructions": "Tempo: 4-1-X-0. Torso leaned forward. 4s eccentric, 1s pause in the stretch." },
      { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 150s rest", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Full overhead lockout." },
      { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 120s rest", "instructions": "Tempo: 3-0-X-0. 3s eccentric." },
    "title": "Upper 1: Strength + AEL", 
    "duration": "85-95 minutes", 
    "exercises": [ 
      { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 3m rest", "instructions": "Tempo: 4-1-X-0. 4s eccentric, 1s pause at the bottom stretch, explode up." },
      { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 2-3m rest", "instructions": "Tempo: 4-1-X-0. Torso leaned forward. 4s eccentric, 1s pause in the stretch." },
      { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 2-3m rest", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Full overhead lockout." },
      { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 2m rest", "instructions": "Tempo: 3-0-X-0. 3s eccentric." },
      { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 2-0-1-0. 2s eccentric, pause at the bottom." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 3-0-X-0. 3s eccentric." }
      { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Isolate the posterior deltoid. Keep scapulae protracted." },
      { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Brachialis focus to build arm thickness." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 3-0-X-0. 3s eccentric. Triceps long-head focus." }
    ],
    "abFinisher": null,
    "cardio": null
    "abFinisher": { "name": "Heavy Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "Treat the core like a skeletal muscle. Load it heavily. Flex the spine, do not pull with the arms." }, 
    "cardio": null 
  },
  { // DAY 2: LOWER 1 (Strength + Accentuated Eccentric Loading)
  { // DAY 2: LOWER 1 (Strength + AEL)
    "day": 2,
    "title": "Lower 1: Strength + AEL",
    "duration": "70-75 minutes",
    "duration": "70-75 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 180s rest", "instructions": "Tempo: 3-2-X-0. 3s eccentric, 2s hard squeeze at peak contraction." },
      { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps (per leg) | 120s rest", "instructions": "Tempo: 3-1-X-0. Torso leaned 15° forward for glute bias. 3s eccentric." },
      { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 150s rest", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Feel maximal load in hamstrings at the bottom." },
      { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 2-3m rest", "instructions": "Tempo: 3-2-X-0. 3s eccentric, 2s hard squeeze at peak contraction." },
      { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps (per leg) | 2m rest", "instructions": "Tempo: 3-1-X-0. Torso leaned 15° forward for glute bias. 3s eccentric." },
      { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 2-3m rest", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Feel maximal load in hamstrings at the bottom." },
      { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "instructions": "Tempo: 3-1-1-0. 3s eccentric, 1s squeeze at the top." },
      { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 4-1-1-0. 4s eccentric into a deep stretch, 1s hold." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3: UPPER 2 (Hypertrophy + Lengthened Partials)
  { // DAY 3: UPPER 2 (Time-Optimized Hypertrophy)
    "day": 3,
    "title": "Upper 2: Hypertrophy + Partials",
    "duration": "65-75 minutes",
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Low-to-High Cable Fly", "details": "4 sets of 10-12 reps | 120s rest", "instructions": "Full ROM to technical failure, immediately followed by 5-6 partial reps in the bottom stretch position." },
      { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "instructions": "Higher angle than Day 1 to shift emphasis to the clavicular head." },
      { "name": "Flat DB Press", "details": "3 sets of 9-11 reps | 90s rest", "instructions": "Deep stretch priority. Allow elbows to travel below the bench." },
      { "name": "Seated DB Lateral Raise", "details": "4 sets of 12-15 reps | 75s rest", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Cross-Body Cable Lateral Raise", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "Arm starts crossing the midline at the bottom for maximum stretch." },
      { "name": "Lat Pulldown (Neutral Grip)", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "Elbows drive down and back. Full dead-hang stretch at the top." }
      { "name": "Low-to-High Cable Fly", "details": "3 sets of 10-12 reps + Partials | 90s rest", "instructions": "Full ROM to technical failure, immediately followed by 5-6 partial reps in the bottom stretch position." },
      { "name": "Seated DB Lateral Raise", "details": "3 sets of 12-15 reps + Partials | 75s rest", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Lat Pulldown (Neutral Grip)", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "Elbows drive down and back. Full dead-hang stretch at the top." },
      { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Keep elbows pinned. Isolate the triceps lateral head." },
      { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Constant tension through the full range of motion." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 4: LOWER 2 (Hypertrophy + Lengthened Partials)
  { // DAY 4: LOWER 2 (Time-Optimized Hypertrophy)
    "day": 4,
    "title": "Lower 2: Hypertrophy + Partials",
    "duration": "65-75 minutes",
    "title": "Lower 2: Hypertrophy + Partials", 
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "instructions": "Focus on full ROM and the squeeze at the top." },
      { "name": "Step-Up with Forward Lean", "details": "3 sets of 12-15 reps (per leg) | 75s rest", "instructions": "Use a knee-height box. Slow, controlled descent. Primary upper glute focus." },
      { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Rounded upper back to isolate glutes and prevent lumbar hyperextension." },
      { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps | 75s rest", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Leg Press (High/Wide Stance)", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "High wide foot placement to bias glute over quad." },
      { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Rounded upper back to isolate glutes and prevent lumbar hyperextension." },
      { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "Soleus focus. 4s eccentric into a full stretch." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 5: UPPER 3 (Metabolic Stress + Myo-Reps)
  { // DAY 5: UPPER 3 (Metabolic Stress)
    "day": 5,
    "title": "Upper 3: Metabolic + Myo-Reps",
    "duration": "60-70 minutes",
    "title": "Upper 3: Metabolic + Myo-Reps", 
    "duration": "60-65 minutes", 
    "exercises": [
      { "name": "Pec Deck / Machine Fly", "details": "1 Activation + 3-4 Clusters | 90s rest", "instructions": "Myo-reps: 1 set to 1 RIR. Rack for 3 breaths. Do 4-5 reps. Rack 3 breaths. Repeat until only 2 reps possible. Log total reps — beat it next session." },
      { "name": "Superset A1: Incline DB Press", "details": "3 sets of 12-15 reps | 0s rest", "instructions": "Agonist/antagonist superset. Move immediately to A2 with no rest." },
      { "name": "Superset A2: Chest-Supported Row", "details": "3 sets of 12-15 reps | 90s rest", "instructions": "Row potentiates the press via reciprocal inhibition. Rest 90s before next A1." },
      { "name": "Cable Lateral Raise", "details": "1 Activation + 3-4 Clusters | 90s rest", "instructions": "Myo-rep protocol. Third side delt session of the week." },
      { "name": "Superset B1: Face Pulls", "details": "3 sets of 15-20 reps | 0s rest", "instructions": "Move immediately to B2 with no rest." },
      { "name": "Superset B2: Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Machine format allows safe pushing to failure under high fatigue. Rest 75s before next B1." },
      { "name": "EZ Bar Skull Crusher", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "4s eccentric. Drop weight by 25% at technical failure and continue immediately." },
      { "name": "Incline DB Curl", "details": "1 Activation + 3-4 Clusters | 60s rest", "instructions": "Myo-rep protocol. Full arm hang at bottom to stretch the bicep." }
      { "name": "Pec Deck / Machine Fly", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-reps: 1 set to 1 RIR. Rack for 3 breaths. Do 4-5 reps. Rack 3 breaths. Repeat until only 2 reps are possible." },
      { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Machine format allows safe pushing to failure under high fatigue." },
      { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Upper back thickness." },
      { "name": "Cable Lateral Raise", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-rep protocol. Third side delt session of the week." },
      { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "Rear delt and trap stabilization." },
      { "name": "Superset: Cable Skull Crusher + Cable Curl", "details": "3 sets of 12-15 reps each | 60s rest", "instructions": "Perform at a single cable station. Triceps immediately into biceps." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 6: LOWER 3 (Metabolic Stress + Myo-Reps)
  { // DAY 6: LOWER 3 (Metabolic Stress + Capillary Density)
    "day": 6,
    "title": "Lower 3: Metabolic + Myo-Reps",
    "duration": "60-70 minutes",
    "title": "Lower 3: Metabolic + Active Recovery", 
    "duration": "115-120 minutes", 
    "exercises": [
      { "name": "45° Cable Kickback", "details": "1 Activation + 3-4 Clusters | 90s rest", "instructions": "Myo-reps per leg. Kick diagonally up and out to engage upper glute fibres." },
      { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps | 75s rest", "instructions": "30° forward lean to load glute medius. Drop set on the final set only." },
      { "name": "45° Cable Kickback", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-reps per leg. Kick diagonally up and out to engage upper glute fibers." },
      { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop Set) | 75s rest", "instructions": "30° forward lean to load glute medius. Drop set on the final set only." },
      { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "Quad primary. Feet low and close on the platform." },
      { "name": "Superset A1: Leg Extension", "details": "3 sets of 15-20 reps | 0s rest", "instructions": "Move immediately to A2 with no rest." },
      { "name": "Superset A2: Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "instructions": "Agonist/antagonist superset. Rest 75s before next A1." },
      { "name": "Machine Hip Thrust", "details": "1 Activation + 3-4 Clusters | 90s rest", "instructions": "Myo-reps. Third glute session of the week at high metabolic stress." },
      { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "instructions": "High rep metabolic hamstring work." },
      { "name": "Machine Hip Thrust", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-reps. Third glute session of the week at high metabolic stress." },
      { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "instructions": "High rep, high frequency volume accumulation." }
    ],
    "abFinisher": null,
    "cardio": null
    "abFinisher": { "name": "Hanging Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Focus on rotating the pelvis upward. Do not just swing the legs." },
    "cardio": { "name": "40 Minutes Zone 2 Cardio", "details": "1 set of 40 minutes", "instructions": "Stationary bike or incline treadmill. You must be able to hold a conversation. If you are gasping, you are entering Zone 3 and inducing systemic fatigue. Keep it strictly aerobic." }
  },
  { // DAY 7: SYSTEMIC STANDBY
    "day": 7,
    "title": "Systemic Standby",
    "duration": "0 minutes",
    "title": "Systemic Standby", 
    "duration": "0 minutes", 
    "exercises": [],
    "abFinisher": null,
    "cardio": null
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// DOM Elements
// ─────────────────────────────────────────────────────────────────────────────
const daySelector = document.getElementById("day-selector");
const workoutTitle = document.getElementById("workout-title");
const workoutDuration = document.getElementById("workout-duration");
const exerciseList = document.getElementById("exercise-list");
const completedList = document.getElementById("completed-list");
const completedTitle = document.getElementById("completed-title");
const resetButton = document.getElementById("reset-button");
const timerDisplay = document.getElementById('timer-display');
const infoModalOverlay = document.getElementById("info-modal-overlay");
const infoModalCloseBtn = document.getElementById("info-modal-close-btn");
const infoModalTitle = document.getElementById("info-modal-title");
const infoModalInstructions = document.getElementById("info-modal-instructions");
const resetModalOverlay = document.getElementById("reset-modal-overlay");
const confirmResetBtn = document.getElementById("confirm-reset-btn");
const cancelResetBtn = document.getElementById("cancel-reset-btn");
const completionOverlay = document.getElementById("completion-overlay");
const completionTitleEl = document.getElementById("completion-title");
const completionMessage = document.getElementById("completion-message");
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// ─────────────────────────────────────────────────────────────────────────────
// State
// ─────────────────────────────────────────────────────────────────────────────
let progress = {};
let completedDays = [];
const LONG_PRESS_DURATION = 500;
let activeTimer = null;
let restPeriodEndTime = null;

const PROGRESS_KEY       = "workoutSysProgress";
const COMPLETED_DAYS_KEY = "workoutSysCompletedDays";
const TIMER_END_KEY      = "restPeriodEndTime";

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.",
    "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.",
    "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// ─────────────────────────────────────────────────────────────────────────────
// Theme
// ─────────────────────────────────────────────────────────────────────────────
function loadTheme() {
    const savedTheme = localStorage.getItem('workoutSysTheme') || 'dark';
    document.body.dataset.theme = savedTheme;
    document.querySelector('meta[name="theme-color"]').setAttribute('content',
        savedTheme === 'light' ? '#f2ece7' : '#2d2a27');
}

function toggleTheme() {
    const newTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('workoutSysTheme', newTheme);
    document.querySelector('meta[name="theme-color"]').setAttribute('content',
        newTheme === 'light' ? '#f2ece7' : '#2d2a27');
}

// ─────────────────────────────────────────────────────────────────────────────
// Timer & Haptics
// ─────────────────────────────────────────────────────────────────────────────
function triggerHapticFeedback() {
    if ('vibrate' in navigator) { navigator.vibrate(50); }
}

function clearTimerState() {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
    timerDisplay.classList.add('hidden');
    localStorage.removeItem(TIMER_END_KEY);
    restPeriodEndTime = null;
}

function startOnScreenTimer(durationSeconds) {
    clearTimerState();
    if (durationSeconds <= 0) return;
    restPeriodEndTime = Date.now() + (durationSeconds * 1000);
    localStorage.setItem(TIMER_END_KEY, restPeriodEndTime);
    let timeLeft = durationSeconds;
    timerDisplay.classList.remove('hidden');
    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
        if (timeLeft <= 0) { clearTimerState(); triggerHapticFeedback(); return; }
        timeLeft--;
    };
    updateTimer();
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = localStorage.getItem(TIMER_END_KEY);
    if (!endTime) { clearTimerState(); return; }
    const remainingTime = Math.round((parseInt(endTime, 10) - Date.now()) / 1000);
    if (remainingTime > 0) { startOnScreenTimer(remainingTime); } else { clearTimerState(); }
}

// ─────────────────────────────────────────────────────────────────────────────
// Persistence
// ─────────────────────────────────────────────────────────────────────────────
function loadProgress() {
    try { const s = localStorage.getItem(PROGRESS_KEY); progress = s ? JSON.parse(s) : {}; }
    catch (e) { console.error("Could not load progress:", e); progress = {}; }
}
function saveProgress() {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); updateProgressBars(); updateCompletedSectionVisibility(); }
    catch (e) { console.error("Could not save progress:", e); }
}
function loadCompletedDays() {
    try { const s = localStorage.getItem(COMPLETED_DAYS_KEY); completedDays = s ? JSON.parse(s) : []; }
    catch (e) { console.error("Could not load completed days:", e); completedDays = []; }
}
function saveCompletedDays() {
    try { localStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(completedDays)); }
    catch (e) { console.error("Could not save completed days:", e); }
}

// ─────────────────────────────────────────────────────────────────────────────
// Parsing Helpers
// ─────────────────────────────────────────────────────────────────────────────
function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+).*?s\s*rest/);
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1;
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of \d+\s+minutes/i);
    if (match) return 1;
    // Myo-rep / activation+cluster format: treat the full sequence as 1 completable unit
    match = details.match(/^1\s+Activation/i);
    if (match) return 1;
    console.warn("Could not parse sets from details:", details, "— defaulting to 1");
    return 1;
}

function _getExerciseDataFromProgressId(progressId) {
    const dayMatch   = progressId.match(/day(\d+)/);
    const typeMatch  = progressId.match(/-([a-z]+)-/);
    const indexMatch = progressId.match(/-(\d+)$/);
    if (!dayMatch || !typeMatch || !indexMatch) return null;
    const dayNum  = parseInt(dayMatch[1], 10);
    const type    = typeMatch[1];
    const index   = parseInt(indexMatch[1], 10);
    const dayData = workoutData.find(d => d.day === dayNum);
    if (!dayData) return null;
    if (type === 'exercise') return dayData.exercises?.[index] || null;
    if (type === 'ab')       return dayData.abFinisher || null;
    if (type === 'cardio')   return dayData.cardio || null;
    return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// UI Updates
// ─────────────────────────────────────────────────────────────────────────────
function updateCardVisuals(card, progressId, totalSets) {
    const completedSets = progress[progressId] || 0;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', completedSets >= totalSets);
    }
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn) => {
        if (btn.id === 'theme-toggle-btn') return;
        const dataIndex = btn.dataset.day !== undefined ? parseInt(btn.dataset.day, 10) : null;
        if (dataIndex === null || isNaN(dataIndex)) return;
        const dayData = workoutData[dataIndex];
        if (!dayData || !dayData.exercises || dayData.exercises.length === 0) {
            btn.style.setProperty('--progress', '0%'); return;
        }
        let total = 0, done = 0;
        dayData.exercises.forEach((ex, i) => {
            const id = `day${dayData.day}-exercise-${i}`;
            const sets = parseSets(ex.details);
            total += sets; done += Math.min(progress[id] || 0, sets);
        });
        if (dayData.abFinisher) {
            const id = `day${dayData.day}-ab-0`;
            const sets = parseSets(dayData.abFinisher.details);
            total += sets; done += Math.min(progress[id] || 0, sets);
        }
        if (dayData.cardio) {
            const id = `day${dayData.day}-cardio-0`;
            const sets = parseSets(dayData.cardio.details);
            total += sets; done += Math.min(progress[id] || 0, sets);
        }
        btn.style.setProperty('--progress', `${Math.min(100, total > 0 ? (done / total) * 100 : 0)}%`);
    });
}

function updateDayButtonCompletionMarks() {
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        const dayIndex = parseInt(btn.dataset.day, 10);
        if (!isNaN(dayIndex)) btn.classList.toggle('day-complete', completedDays.includes(dayIndex));
    });
}

function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// ─────────────────────────────────────────────────────────────────────────────
// Core Interaction
// ─────────────────────────────────────────────────────────────────────────────
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted  = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;
    let newCompletedCount   = currentCompleted;
    let shouldStartTimer    = false;

    if (direction === 'increment') {
        const potentialCount = Math.min(totalSets, currentCompleted + 1);
        if (potentialCount > currentCompleted) {
            newCompletedCount = potentialCount;
            shouldStartTimer  = true;
            triggerHapticFeedback();

            const currentActive = document.querySelector('.exercise-active');
            if (currentActive && currentActive !== card) currentActive.classList.remove('exercise-active');
            card.classList.add('exercise-active');

            if (newCompletedCount < totalSets && !wasFullyCompleted) {
                let prev = card.previousElementSibling;
                let titleEl = null;
                while (prev) {
                    if (prev.classList.contains('category-title')) { titleEl = prev; break; }
                    prev = prev.previousElementSibling;
                }
                if (titleEl) titleEl.after(card);
            }
        }
    } else {
        const potentialCount = Math.max(0, currentCompleted - 1);
        if (potentialCount < currentCompleted) {
            newCompletedCount = potentialCount;
            if (card.classList.contains('exercise-active') && activeTimer) clearTimerState();
        }
    }

    if (newCompletedCount !== currentCompleted) {
        progress[progressId] = newCompletedCount;
        saveProgress();
    }

    if (shouldStartTimer && newCompletedCount < totalSets) {
        startOnScreenTimer(parseRestTime(card.querySelector('.exercise-details p')?.textContent || ''));
    } else if (shouldStartTimer && newCompletedCount >= totalSets) {
        clearTimerState();
    }

    updateCardVisuals(card, progressId, totalSets);

    const isNowFullyCompleted = newCompletedCount >= totalSets;
    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card);
        checkDayCompletion();
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        moveFromCompletedToActive(card);
        const activeDayIndex = parseInt(document.querySelector('.day-btn.active')?.dataset.day ?? -1, 10);
        if (activeDayIndex !== -1 && completedDays.includes(activeDayIndex)) {
            completedDays = completedDays.filter(d => d !== activeDayIndex);
            saveCompletedDays();
            updateDayButtonCompletionMarks();
        }
    }
}

function animateAndMoveToCompleted(card) {
    card.classList.add('reordering');
    card.classList.remove('exercise-active');
    removeCardListeners(card);
    setTimeout(() => {
        completedList.appendChild(card);
        card.classList.remove('reordering');
        addCardListeners(card, true);
        updateCompletedSectionVisibility();
    }, 300);
}

function moveFromCompletedToActive(card) {
    removeCardListeners(card);
    const cardTypeClass  = card.classList.contains('exercise-item') ? 'exercise-item'
                         : card.classList.contains('ab-finisher')   ? 'ab-finisher'
                         : 'cardio-session';
    const sectionTitle   = cardTypeClass === 'exercise-item' ? "Main Workout"
                         : cardTypeClass === 'ab-finisher'   ? "Ab Finisher"
                         : "Post-Workout Cardio";
    const sectionOrder   = cardTypeClass === 'exercise-item' ? 0
                         : cardTypeClass === 'ab-finisher'   ? 1 : 2;

    const titles = exerciseList.querySelectorAll('.category-title');
    let targetTitle = null;
    titles.forEach(t => { if (t.textContent === sectionTitle) targetTitle = t; });

    if (!targetTitle) {
        targetTitle = document.createElement("h3");
        targetTitle.className = "category-title";
        targetTitle.textContent = sectionTitle;
        let anchor = null;
        if (sectionOrder === 1) {
            const mainItems = exerciseList.querySelectorAll('.exercise-item');
            if (mainItems.length > 0) anchor = mainItems[mainItems.length - 1];
            else if (titles.length > 0 && titles[0].textContent === "Main Workout") anchor = titles[0];
        } else if (sectionOrder === 2) {
            const abItems = exerciseList.querySelectorAll('.ab-finisher');
            if (abItems.length > 0) anchor = abItems[abItems.length - 1];
            else titles.forEach(t => { if (t.textContent === "Ab Finisher") anchor = t; });
            if (!anchor) {
                const mainItems = exerciseList.querySelectorAll('.exercise-item');
                if (mainItems.length > 0) anchor = mainItems[mainItems.length - 1];
            }
        }
        if (anchor)             anchor.after(targetTitle);
        else if (sectionOrder === 0) exerciseList.prepend(targetTitle);
        else                    exerciseList.appendChild(targetTitle);
    }

    if (targetTitle) targetTitle.after(card);
    else { exerciseList.appendChild(card); console.warn("Could not find section title, appending to end."); }

    addCardListeners(card, false);
    updateCompletedSectionVisibility();
}

// ─────────────────────────────────────────────────────────────────────────────
// Day Completion
// ─────────────────────────────────────────────────────────────────────────────
function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData || !dayData.exercises || dayData.exercises.length === 0) return;

    const allItems = [
        ...dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })),
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio     ? [{ ...dayData.cardio,     id: `day${dayData.day}-cardio-0` }] : [])
    ];
    if (!allItems.length) return;

    const isDayComplete = allItems.every(item => (progress[item.id] || 0) >= parseSets(item.details));
    if (!isDayComplete) return;

    if (!completedDays.includes(activeDayIndex)) {
        completedDays.push(activeDayIndex);
        saveCompletedDays();
        updateDayButtonCompletionMarks();
    }

    // Week complete = all training days (those with exercises) are done
    const trainingDayIndices = workoutData
        .map((d, idx) => ({ d, idx }))
        .filter(({ d }) => d.exercises && d.exercises.length > 0)
        .map(({ idx }) => idx);
    const isWeekComplete = trainingDayIndices.every(idx => completedDays.includes(idx));

    completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE";
    completionMessage.textContent = isWeekComplete
        ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE."
        : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

    completionOverlay.classList.remove('hidden');
    const dismissHandler = () => {
        completionOverlay.classList.add('hidden');
        completionOverlay.removeEventListener('click', dismissHandler);
    };
    completionOverlay.addEventListener('click', dismissHandler);

    if (isWeekComplete) {
        setTimeout(() => {
            progress = {}; completedDays = [];
            localStorage.removeItem(PROGRESS_KEY);
            localStorage.removeItem(COMPLETED_DAYS_KEY);
            localStorage.removeItem(TIMER_END_KEY);
            location.reload();
        }, 5000);
    } else {
        setTimeout(() => {
            completionOverlay.classList.add('hidden');
            completionOverlay.removeEventListener('click', dismissHandler);
        }, 4000);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Listener Management — WeakMap instead of polluting DOM nodes
// ─────────────────────────────────────────────────────────────────────────────
const cardListeners = new WeakMap();

function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets  = parseInt(card.dataset.totalSets, 10);
    const handlers   = {};

    if (!isCompleted) {
        let longPressTimeoutId = null;
        let longPressTriggered = false;

        const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (longPressTriggered) { longPressTriggered = false; return; }
            if (card.parentElement === exerciseList) handleSeriesUpdate(card, progressId, totalSets, 'increment');
        };
        const touchStartHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            longPressTriggered = false;
            if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
            longPressTimeoutId = setTimeout(() => {
                longPressTriggered = true;
                handleSeriesUpdate(card, progressId, totalSets, 'decrement');
                longPressTimeoutId = null;
            }, LONG_PRESS_DURATION);
        };
        const clearLongPress = () => { if (longPressTimeoutId) clearTimeout(longPressTimeoutId); longPressTimeoutId = null; };

        card.addEventListener('click', clickHandler);
        card.addEventListener('touchstart', touchStartHandler, { passive: true });
        card.addEventListener('touchend',   clearLongPress);
        card.addEventListener('touchcancel',clearLongPress);
        card.addEventListener('touchmove',  clearLongPress);

        handlers.click       = clickHandler;
        handlers.touchstart  = touchStartHandler;
        handlers.touchend    = clearLongPress;
        handlers.touchcancel = clearLongPress;
        handlers.touchmove   = clearLongPress;
    }

    const contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); };
    card.addEventListener('contextmenu', contextHandler);
    handlers.contextmenu = contextHandler;

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            const exerciseData = _getExerciseDataFromProgressId(progressId);
            if (exerciseData) openInfoModal(exerciseData.name, exerciseData.instructions);
            else console.error("Could not find exercise data for modal:", progressId);
        };
        infoBtn.addEventListener('click', infoClickHandler);
        handlers.infoClick = infoClickHandler;
        handlers.infoBtn   = infoBtn;
    }

    cardListeners.set(card, handlers);
}

function removeCardListeners(card) {
    const handlers = cardListeners.get(card);
    if (!handlers) return;
    if (handlers.click)       card.removeEventListener('click',       handlers.click);
    if (handlers.contextmenu) card.removeEventListener('contextmenu', handlers.contextmenu);
    if (handlers.touchstart)  card.removeEventListener('touchstart',  handlers.touchstart);
    if (handlers.touchend)    card.removeEventListener('touchend',    handlers.touchend);
    if (handlers.touchcancel) card.removeEventListener('touchcancel', handlers.touchcancel);
    if (handlers.touchmove)   card.removeEventListener('touchmove',   handlers.touchmove);
    if (handlers.infoBtn && handlers.infoClick) handlers.infoBtn.removeEventListener('click', handlers.infoClick);
    cardListeners.delete(card);
}

// ─────────────────────────────────────────────────────────────────────────────
// DOM Rendering
// ─────────────────────────────────────────────────────────────────────────────
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets  = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets  = totalSets;
    li.innerHTML = `
        <span class="set-counter">0/${totalSets}</span>
        <div class="exercise-details">
            <h3>${exercise.name}</h3>
            <p>${exercise.details}</p>
        </div>
        <button class="info-btn" aria-label="Open exercise info for ${exercise.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        </button>`;
    const isInitiallyCompleted = (progress[progressId] || 0) >= totalSets;
    addCardListeners(li, isInitiallyCompleted);
    updateCardVisuals(li, progressId, totalSets);
    return li;
};

const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;
    const itemsArray  = Array.isArray(items) ? items : [items];
    const activeItems = itemsArray.filter((item, i) =>
        (progress[`day${dayNum}-${idType}-${i}`] || 0) < parseSets(item.details));

    let sectionTitleElement = null;
    if (activeItems.length > 0) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement);
    }

    itemsArray.forEach((item, i) => {
        const el         = createExerciseItem(item, cssClass, idType, i, dayNum);
        const progressId = el.dataset.progressId;
        const isComplete = (progress[progressId] || 0) >= parseInt(el.dataset.totalSets, 10);
        if (isComplete) completedList.appendChild(el);
        else            exerciseList.appendChild(el);
    });
};

function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = dayData.duration !== "0 minutes"
        ? `// EST. DURATION: ${dayData.duration.toUpperCase()}` : '';

    exerciseList.innerHTML = "";
    completedList.innerHTML = "";

    if (!dayData.exercises || dayData.exercises.length === 0) {
        exerciseList.innerHTML = '<li class="exercise-item rest-day-card"><div class="exercise-details"><h3>SYSTEM IN STANDBY</h3><p>FOCUS ON RECOVERY. SLEEP. EAT. GROW.</p></div></li>';
    } else {
        renderSection("Main Workout",        dayData.exercises,   'exercise-item',  'exercise', dayData.day);
        renderSection("Ab Finisher",         dayData.abFinisher,  'ab-finisher',    'ab',       dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio,      'cardio-session', 'cardio',   dayData.day);
    }
    updateCompletedSectionVisibility();
}

// ─────────────────────────────────────────────────────────────────────────────
// Day Selection
// ─────────────────────────────────────────────────────────────────────────────
function setActiveDay(dayIndex) {
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        btn.classList.remove("active");
    });
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) currentActive.classList.remove('exercise-active');
    clearTimerState();
    renderWorkout(dayIndex);
}

// ─────────────────────────────────────────────────────────────────────────────
// Modals
// ─────────────────────────────────────────────────────────────────────────────
function openInfoModal(title, instructions) {
    infoModalOverlay.classList.remove("hidden");
    infoModalOverlay.setAttribute('aria-hidden', 'false');
    infoModalTitle.textContent = title;
    infoModalInstructions.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = instructions || "No instructions available.";
    infoModalInstructions.appendChild(p);
}
function closeInfoModal()  { infoModalOverlay.classList.add("hidden");  infoModalOverlay.setAttribute('aria-hidden', 'true'); }
function openResetModal()  { resetModalOverlay.classList.remove("hidden"); resetModalOverlay.setAttribute('aria-hidden', 'false'); }
function closeResetModal() { resetModalOverlay.classList.add("hidden");    resetModalOverlay.setAttribute('aria-hidden', 'true'); }

// ─────────────────────────────────────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────────────────────────────────────
function init() {
    loadTheme();
    loadProgress();
    loadCompletedDays();

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') checkTimerOnFocus();
    });

    // Labels align exactly with the schedule: index 0=Mo … index 6=Su
    const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button");
        btn.className = "day-btn";
        const span = document.createElement("span");
        span.textContent = dayLabels[index] || `D${index + 1}`;
        btn.appendChild(span);
        btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        daySelector.appendChild(btn);
    });

    themeToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><clipPath id="half-clip"><rect x="0" y="0" width="10" height="20"/></clipPath></defs>
          <circle cx="10" cy="10" r="9" class="svg-bg-circle"/>
          <circle cx="10" cy="10" r="9" class="svg-fg-circle" clip-path="url(#half-clip)"/>
        </svg>`;
    themeToggleBtn.setAttribute('aria-label', 'Switch theme');
    themeToggleBtn.addEventListener("click", toggleTheme);

    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {}; completedDays = [];
        saveProgress(); saveCompletedDays();
        const currentActive = document.querySelector('.exercise-active');
        if (currentActive) currentActive.classList.remove('exercise-active');
        clearTimerState();
        renderWorkout(parseInt(document.querySelector(".day-btn.active")?.dataset.day || 0, 10));
        updateDayButtonCompletionMarks();
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click",  e => { if (e.target === infoModalOverlay)  closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });

    // new Date().getDay(): 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
    // Map to our indices:  Mo=0  Tu=1  We=2  Th=3  Fr=4  Sa=5  Su=6
    const today = new Date().getDay();
    const initialDayIndex = today === 0 ? 6 : today - 1;

    setActiveDay(initialDayIndex);
    updateDayButtonCompletionMarks();
    checkTimerOnFocus();
}

init();
