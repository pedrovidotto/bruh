const workoutData = [
  { // DAY 1: UPPER 1 (Strength + AEL + Extended Isolation)
    "day": 1,
    "title": "Upper 1: Strength + AEL", 
    "duration": "85-95 minutes", 
    "exercises": [ 
      { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 3m rest", "rpe": "8-9", "instructions": "Tempo: 4-1-X-0. 4s eccentric, 1s pause at the bottom stretch, explode up." },
      { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 2-3m rest", "rpe": "8-9", "instructions": "Tempo: 4-1-X-0. Torso leaned forward. 4s eccentric, 1s pause in the stretch." },
      { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 2-3m rest", "rpe": "8", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Full overhead lockout." },
      { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 2m rest", "rpe": "8", "instructions": "Tempo: 3-0-X-0. 3s eccentric." },
      { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "Tempo: 2-0-1-0. 2s eccentric, pause at the bottom." },
      { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9", "instructions": "Isolate the posterior deltoid. Keep scapulae protracted." },
      { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "Brachialis focus to build arm thickness." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "Tempo: 3-0-X-0. 3s eccentric. Triceps long-head focus." }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "Treat the core like a skeletal muscle. Load it heavily. Flex the spine, pulling the ribs to the pelvis. Do not pull with the arms." }, 
    "cardio": null 
  },
  { // DAY 2: LOWER 1 (Strength + AEL)
    "day": 2,
    "title": "Lower 1: Strength + AEL",
    "duration": "70-75 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 2-3m rest", "rpe": "8-9", "instructions": "Tempo: 3-2-X-0. 3s eccentric, 2s hard squeeze at peak contraction." },
      { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps (per leg) | 2m rest", "rpe": "8-9", "instructions": "Tempo: 3-1-X-0. Torso leaned 15° forward for glute bias. 3s eccentric." },
      { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 2-3m rest", "rpe": "8", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Feel maximal load in hamstrings at the bottom." },
      { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "rpe": "9", "instructions": "Tempo: 3-1-1-0. 3s eccentric, 1s squeeze at the top." },
      { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "rpe": "8", "instructions": "Tempo: 4-1-1-0. 4s eccentric into a deep stretch, 1s hold." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3: UPPER 2 (Time-Optimized Hypertrophy)
    "day": 3,
    "title": "Upper 2: Hypertrophy + Partials",
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Higher angle than Day 1 to shift emphasis to the clavicular head." },
      { "name": "Low-to-High Cable Fly", "details": "3 sets of 10-12 reps + Partials | 90s rest", "rpe": "10", "instructions": "Full ROM to technical failure, immediately followed by 5-6 partial reps in the bottom stretch position." },
      { "name": "Seated DB Lateral Raise", "details": "3 sets of 12-15 reps + Partials | 75s rest", "rpe": "10", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Lat Pulldown (Neutral Grip)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "Elbows drive down and back. Full dead-hang stretch at the top." },
      { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "Keep elbows pinned. Isolate the triceps lateral head." },
      { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "Constant tension through the full range of motion." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 4: LOWER 2 (Time-Optimized Hypertrophy)
    "day": 4,
    "title": "Lower 2: Hypertrophy + Partials", 
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Focus on full ROM and the squeeze at the top." },
      { "name": "Leg Press (High/Wide Stance)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "9", "instructions": "High wide foot placement to bias glute over quad." },
      { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "Rounded upper back to isolate glutes and prevent lumbar hyperextension." },
      { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "rpe": "10", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "rpe": "8", "instructions": "Soleus focus. 4s eccentric into a full stretch." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 5: UPPER 3 (Metabolic Stress)
    "day": 5,
    "title": "Upper 3: Metabolic + Myo-Reps", 
    "duration": "60-65 minutes", 
    "exercises": [
      { "name": "Pec Deck / Machine Fly", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "rpe": "9-10", "instructions": "Myo-reps: 1 set to 1 RIR. Rack for 3 breaths. Do 4-5 reps. Rack 3 breaths. Repeat until only 2 reps are possible." },
      { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "9-10", "instructions": "Machine format allows safe pushing to failure under high fatigue." },
      { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "Upper back thickness." },
      { "name": "Cable Lateral Raise", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "rpe": "9-10", "instructions": "Myo-rep protocol. Third side delt session of the week." },
      { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "rpe": "8", "instructions": "Rear delt and trap stabilization." },
      { "name": "Superset: Cable Skull Crusher + Cable Curl", "details": "3 sets of 12-15 reps each | 60s rest", "rpe": "9-10", "instructions": "Perform at a single cable station. Triceps immediately into biceps." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 6: LOWER 3 (Metabolic Stress + Capillary Density)
    "day": 6,
    "title": "Lower 3: Metabolic + Active Recovery", 
    "duration": "115-120 minutes", 
    "exercises": [
      { "name": "45° Cable Kickback", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "rpe": "9-10", "instructions": "Myo-reps per leg. Kick diagonally up and out to engage upper glute fibers." },
      { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop Set) | 75s rest", "rpe": "9-10", "instructions": "30° forward lean to load glute medius. Drop set on the final set only." },
      { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "Quad primary. Feet low and close on the platform." },
      { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "rpe": "9", "instructions": "High rep metabolic hamstring work." },
      { "name": "Machine Hip Thrust", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "rpe": "9-10", "instructions": "Myo-reps. Third glute session of the week at high metabolic stress." },
      { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "rpe": "8-9", "instructions": "High rep, high frequency volume accumulation." }
    ],
    "abFinisher": { "name": "Inclined Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Set a bench to a 30-45 degree decline. Hold the top pad. Focus on rotating the pelvis upward off the bench. Do not just pivot the legs at the hip joint." },
    "cardio": { "name": "40 Minutes Zone 2 Cardio", "details": "1 set of 40 minutes", "instructions": "Stationary bike or incline treadmill. You must be able to hold a conversation. If you are gasping, you are entering Zone 3 and inducing systemic fatigue. Keep it strictly aerobic." }
  },
  { // DAY 7: SYSTEMIC STANDBY
    "day": 7,
    "title": "Systemic Standby", 
    "duration": "0 minutes", 
    "exercises": [],
    "abFinisher": null,
    "cardio": null
  }
];

// DOM Elements
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

// State
let progress = {};
let completedDays = []; 
let activeTimer = null;
let restPeriodEndTime = null;
const LONG_PRESS_DURATION = 500;

// LocalStorage Keys
const PROGRESS_KEY = "workoutSysProgress";
const COMPLETED_DAYS_KEY = "workoutSysCompletedDays"; 
const TIMER_END_KEY = "restPeriodEndTime";

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// Theme Functions
function loadTheme() {
    const savedTheme = localStorage.getItem('workoutSysTheme') || 'dark';
    document.body.dataset.theme = savedTheme;
    const themeColor = savedTheme === 'light' ? '#f2ece7' : '#2d2a27';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
}

function toggleTheme() {
    const currentTheme = document.body.dataset.theme || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('workoutSysTheme', newTheme);
    const themeColor = newTheme === 'light' ? '#f2ece7' : '#2d2a27';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);
}

// Timer Functions
function triggerHapticFeedback() { if ('vibrate' in navigator) navigator.vibrate(50); }

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

        if (timeLeft <= 0) {
            clearTimerState();
            triggerHapticFeedback();
            return;
        }
        timeLeft--;
    };

    updateTimer();
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = localStorage.getItem(TIMER_END_KEY);
    if (!endTime) { clearTimerState(); return; }
    const remainingTime = Math.round((parseInt(endTime, 10) - Date.now()) / 1000);
    if (remainingTime > 0) startOnScreenTimer(remainingTime); 
    else clearTimerState();
}

// Core Functions
function loadProgress() {
    try { progress = JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
    catch (e) { progress = {}; }
}
function saveProgress() {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    updateProgressBars(); updateCompletedSectionVisibility();
}
function loadCompletedDays() {
    try { completedDays = JSON.parse(localStorage.getItem(COMPLETED_DAYS_KEY)) || []; }
    catch (e) { completedDays = []; }
}
function saveCompletedDays() {
    localStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(completedDays));
}

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
    match = details.match(/1\s+set of/i) || details.match(/1\s+Activation Set/i);
    if (match) return 1;
    return 1; 
}

// UI Functions
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
        const dataIndex = parseInt(btn.dataset.day, 10); 
        if (isNaN(dataIndex)) return; 

        const dayData = workoutData[dataIndex];
        if (!dayData || !dayData.exercises || dayData.exercises.length === 0) { 
            btn.style.setProperty('--progress', '0%'); return; 
        }
        
        let totalSets = 0, completedSets = 0;
        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSets += parseSets(ex.details); completedSets += progress[id] || 0; });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSets += parseSets(dayData.abFinisher.details); completedSets += progress[id] || 0; }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSets += parseSets(dayData.cardio.details); completedSets += progress[id] || 0; }
        
        btn.style.setProperty('--progress', totalSets > 0 ? `${(completedSets / totalSets) * 100}%` : '0%');
    });
}

function updateDayButtonCompletionMarks() {
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        const dayIndex = parseInt(btn.dataset.day, 10);
        if (!isNaN(dayIndex)) {
            btn.classList.toggle('day-complete', completedDays.includes(dayIndex));
        }
    });
}

function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;
    let newCompletedCount = currentCompleted; 
    let shouldStartTimer = false; 

    if (direction === 'increment') {
        const potentialCount = Math.min(totalSets, currentCompleted + 1);
        if (potentialCount > currentCompleted) {
            newCompletedCount = potentialCount; 
            shouldStartTimer = true; 
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

    const isNowFullyCompleted = newCompletedCount >= totalSets;
    updateCardVisuals(card, progressId, totalSets); 

    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card); 
        checkDayCompletion(); 
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        moveFromCompletedToActive(card);
        const dayIndex = parseInt(card.closest('[data-day]')?.dataset.day ?? document.querySelector('.day-btn.active')?.dataset.day ?? -1, 10);
        if (dayIndex !== -1 && completedDays.includes(dayIndex)) {
            completedDays = completedDays.filter(d => d !== dayIndex);
            saveCompletedDays(); updateDayButtonCompletionMarks();
        }
    }
}

function animateAndMoveToCompleted(card) {
    card.classList.add('reordering'); card.classList.remove('exercise-active'); removeCardListeners(card); 
    setTimeout(() => {
        completedList.appendChild(card); card.classList.remove('reordering');
        addCardListeners(card, true); updateCompletedSectionVisibility();
    }, 300);
}

function moveFromCompletedToActive(card) {
    removeCardListeners(card); 
    const isAb = card.classList.contains('ab-finisher');
    const isCardio = card.classList.contains('cardio-session');
    const sectionTitleText = isAb ? "Ab Finisher" : isCardio ? "Post-Workout Cardio" : "Main Workout";
    const sectionOrder = isAb ? 1 : isCardio ? 2 : 0; 

    let targetTitleElement = Array.from(exerciseList.querySelectorAll('.category-title')).find(t => t.textContent === sectionTitleText);

    if (!targetTitleElement) {
        targetTitleElement = document.createElement("h3");
        targetTitleElement.className = "category-title"; targetTitleElement.textContent = sectionTitleText;
        let anchor = null;
        if (sectionOrder === 1) anchor = exerciseList.querySelector('.exercise-item:last-of-type') || exerciseList.querySelector('.category-title');
        else if (sectionOrder === 2) anchor = exerciseList.querySelector('.ab-finisher:last-of-type') || Array.from(exerciseList.querySelectorAll('.category-title')).find(t => t.textContent === "Ab Finisher") || exerciseList.querySelector('.exercise-item:last-of-type');
        
        if (anchor) anchor.after(targetTitleElement);
        else if (sectionOrder === 0) exerciseList.prepend(targetTitleElement); 
        else exerciseList.appendChild(targetTitleElement); 
    }

    targetTitleElement.after(card);
    addCardListeners(card, false); updateCompletedSectionVisibility();
}

function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const dayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[dayIndex];
    if (!dayData) return;

    const allItems = [
        ...(dayData.exercises || []).map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })), 
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];
    if (!allItems.length) return; 

    const isDayComplete = allItems.every(item => (progress[item.id] || 0) >= parseSets(item.details));

    if (isDayComplete) {
        if (!completedDays.includes(dayIndex)) {
            completedDays.push(dayIndex); saveCompletedDays(); updateDayButtonCompletionMarks(); 
        }

        const isWeekComplete = workoutData.every((_, idx) => completedDays.includes(idx));
        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; 
        completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        completionOverlay.classList.remove('hidden');
        
        const dismissHandler = () => { completionOverlay.classList.add('hidden'); completionOverlay.removeEventListener('click', dismissHandler); };
        completionOverlay.addEventListener('click', dismissHandler);
        
        if (isWeekComplete) {
            setTimeout(() => {
                progress = {}; completedDays = []; 
                localStorage.removeItem(PROGRESS_KEY); localStorage.removeItem(COMPLETED_DAYS_KEY); localStorage.removeItem(TIMER_END_KEY);
                location.reload(); 
            }, 5000);
        } else { setTimeout(() => completionOverlay.classList.add('hidden'), 4000); }
    }
}

function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (card._longPressTriggered) { card._longPressTriggered = false; return; }
            if (card.parentElement === exerciseList) handleSeriesUpdate(card, progressId, totalSets, 'increment');
        };
        card.addEventListener('click', clickHandler); card._clickHandler = clickHandler;
    }

    const contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); };
    card.addEventListener('contextmenu', contextHandler); card._contextHandler = contextHandler;

    let timeoutId = null;
    const touchStart = (e) => {
        if (e.target.closest('.info-btn')) return;
        card._longPressTriggered = false;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            card._longPressTriggered = true;
            handleSeriesUpdate(card, progressId, totalSets, 'decrement');
            timeoutId = null;
        }, LONG_PRESS_DURATION);
    };
    const clearTouch = () => { if (timeoutId) clearTimeout(timeoutId); timeoutId = null; };

    card.addEventListener('touchstart', touchStart, { passive: false });
    ['touchend', 'touchcancel', 'touchmove'].forEach(evt => card.addEventListener(evt, clearTouch)); 

    card._touchStart = touchStart; card._clearTouch = clearTouch;

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClick = (e) => {
            e.stopPropagation();
            const data = _getExerciseData(progressId);
            if (data) openInfoModal(data.name, data.instructions);
        };
        infoBtn.addEventListener('click', infoClick); infoBtn._infoClick = infoClick;
    }
}

function _getExerciseData(progressId) {
    const [_, dayNum, type, index] = progressId.match(/day(\d+)-([a-z]+)-(\d+)$/) || [];
    if (!dayNum) return null;
    const dayData = workoutData.find(d => d.day === parseInt(dayNum, 10));
    if (!dayData) return null;
    return type === 'exercise' ? dayData.exercises?.[parseInt(index, 10)] : type === 'ab' ? dayData.abFinisher : dayData.cardio;
}

function removeCardListeners(card) {
    if (card._clickHandler) card.removeEventListener('click', card._clickHandler);
    if (card._contextHandler) card.removeEventListener('contextmenu', card._contextHandler);
    if (card._touchStart) card.removeEventListener('touchstart', card._touchStart);
    if (card._clearTouch) ['touchend', 'touchcancel', 'touchmove'].forEach(evt => card.removeEventListener(evt, card._clearTouch));
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn && infoBtn._infoClick) infoBtn.removeEventListener('click', infoBtn._infoClick);
}

const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId; li.dataset.totalSets = totalSets;

    const rpeTag = exercise.rpe ? `<span style="font-size: 0.75rem; background: var(--border-color-muted); padding: 2px 6px; border-radius: 4px; margin-left: 8px; color: var(--text-color);">RPE: ${exercise.rpe}</span>` : '';

    li.innerHTML = `
        <span class="set-counter">0/${totalSets}</span>
        <div class="exercise-details">
            <h3 style="display: flex; align-items: center;">${exercise.name} ${rpeTag}</h3>
            <p>${exercise.details}</p>
        </div>
        <button class="info-btn" aria-label="Open info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        </button>`;

    const isInitiallyCompleted = (progress[progressId] || 0) >= totalSets;
    addCardListeners(li, isInitiallyCompleted); updateCardVisuals(li, progressId, totalSets);
    return li;
};

const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;
    const arr = Array.isArray(items) ? items : [items];
    
    if (arr.some((_, i) => (progress[`day${dayNum}-${idType}-${i}`] || 0) < parseSets(arr[i].details))) {
        const titleEl = document.createElement("h3"); titleEl.className = "category-title"; titleEl.textContent = title;
        exerciseList.appendChild(titleEl);
    }

    arr.forEach((item, i) => {
        const el = createExerciseItem(item, cssClass, idType, i, dayNum);
        ((progress[el.dataset.progressId] || 0) >= parseInt(el.dataset.totalSets, 10) ? completedList : exerciseList).appendChild(el);
    });
};

function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) return;

    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    exerciseList.innerHTML = ""; completedList.innerHTML = ""; 

    if (!dayData.exercises || !dayData.exercises.length) { 
        exerciseList.innerHTML = '<li class="exercise-item standby-card"><div class="exercise-details"><h3>SYSTEM IN STANDBY</h3><p>FOCUS ON RECOVERY.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }
    updateCompletedSectionVisibility(); 
}

function setActiveDay(dayIndex) { 
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");

    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) currentActive.classList.remove('exercise-active');
    
    clearTimerState(); renderWorkout(dayIndex); 
}

function openInfoModal(title, instructions) { 
    infoModalOverlay.classList.remove("hidden"); infoModalOverlay.setAttribute('aria-hidden', 'false');
    infoModalTitle.textContent = title; 
    infoModalInstructions.innerHTML = `<p>${instructions || "No instructions available."}</p>`;
}
function closeInfoModal() { infoModalOverlay.classList.add("hidden"); infoModalOverlay.setAttribute('aria-hidden', 'true'); }
function openResetModal() { resetModalOverlay.classList.remove("hidden"); resetModalOverlay.setAttribute('aria-hidden', 'false'); }
function closeResetModal() { resetModalOverlay.classList.add("hidden"); resetModalOverlay.setAttribute('aria-hidden', 'true'); }

function init() {
    loadTheme(); loadProgress(); loadCompletedDays(); 
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkTimerOnFocus(); });

    const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    workoutData.forEach((_, index) => {
        const btn = document.createElement("button"); btn.className = "day-btn"; btn.dataset.day = index;
        btn.innerHTML = `<span>${dayLabels[index] || `D${index + 1}`}</span>`;
        btn.addEventListener("click", () => setActiveDay(index)); daySelector.appendChild(btn);
    });

    themeToggleBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><defs><clipPath id="half-clip"><rect x="0" y="0" width="10" height="20" /></clipPath></defs><circle cx="10" cy="10" r="9" class="svg-bg-circle"/><circle cx="10" cy="10" r="9" class="svg-fg-circle" clip-path="url(#half-clip)"/></svg>`;
    themeToggleBtn.addEventListener("click", toggleTheme); 

    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {}; completedDays = []; saveProgress(); saveCompletedDays(); 
        const currentActive = document.querySelector('.exercise-active'); if (currentActive) currentActive.classList.remove('exercise-active');
        clearTimerState(); 
        const activeDayIndex = parseInt(document.querySelector(".day-btn.active")?.dataset.day || 0, 10);
        renderWorkout(activeDayIndex); updateDayButtonCompletionMarks(); closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    
    const today = new Date().getDay(); 
    setActiveDay(today === 0 ? 6 : today - 1); 
    updateDayButtonCompletionMarks(); checkTimerOnFocus(); 
}

init();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(err => console.error('SYSTEM ERROR: ServiceWorker registration failed:', err));
  });
}
