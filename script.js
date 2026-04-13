const workoutData = [
  { // DAY 1: UPPER 1
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
    "abFinisher": {
      "name": "Pallof Press + Dead Bug Superset",
      "details": "3 sets of 10-12 reps each | 60s rest",
      "instructions": "Pallof Press: anti-rotation, keep hips square, press cable straight out and hold 2s. Dead Bug: lower opposite arm/leg slowly to the floor, 4s eccentric. No spinal flexion. Core braced throughout."
    },
    "cardio": null
  },
  { // DAY 2: LOWER 1
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
  { // DAY 3: UPPER 2
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
  { // DAY 4: LOWER 2
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
  { // DAY 5: UPPER 3
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
  { // DAY 6: LOWER 3
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
    "abFinisher": { "name": "Hanging Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Focus on rotating the pelvis upward. Do not just swing the legs." },
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
let longPressTimer;
const LONG_PRESS_DURATION = 500;
let activeTimer = null;
let restPeriodEndTime = null;

// LocalStorage Keys
const PROGRESS_KEY = "workoutSysProgress";
const COMPLETED_DAYS_KEY = "workoutSysCompletedDays"; 
const TIMER_END_KEY = "restPeriodEndTime";

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- Theme Functions ---
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

// --- Timer, Haptic Functions ---
function triggerHapticFeedback() { if ('vibrate' in navigator) { navigator.vibrate(50); } }

function clearTimerState() {
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
    }
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
    if (!endTime) {
        clearTimerState(); 
        return;
    }

    const remainingTime = Math.round((parseInt(endTime, 10) - Date.now()) / 1000);

    if (remainingTime > 0) {
        startOnScreenTimer(remainingTime); 
    } else {
        clearTimerState();
    }
}

// --- Core & Helper Functions ---
function loadProgress() {
    try {
        const savedProgress = localStorage.getItem(PROGRESS_KEY);
        progress = savedProgress ? JSON.parse(savedProgress) : {};
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
        updateProgressBars(); 
        updateCompletedSectionVisibility();
    } catch (e) { console.error("Could not save progress:", e); }
}

function loadCompletedDays() {
    try {
        const savedDays = localStorage.getItem(COMPLETED_DAYS_KEY);
        completedDays = savedDays ? JSON.parse(savedDays) : [];
    } catch (e) { console.error("Could not load completed days:", e); completedDays = []; }
}

function saveCompletedDays() {
    try {
        localStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(completedDays));
    } catch (e) { console.error("Could not save completed days:", e); }
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
    match = details.match(/^1\s+set of \d+\s+minutes/i);
     if (match) return 1;
    return 1; 
}

// --- UI Update Functions ---
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
        
        const dataIndex = btn.dataset.day ? parseInt(btn.dataset.day, 10) : null; 
        if (dataIndex === null) return; 

        const dayData = workoutData[dataIndex];

        if (!dayData || !dayData.exercises || dayData.exercises.length === 0) { 
            btn.style.setProperty('--progress', '0%'); 
            return; 
        }
        
        let totalSetsForDay = 0, completedSetsForDay = 0;
        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSetsForDay += parseSets(ex.details); completedSetsForDay += progress[id] || 0; });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSetsForDay += parseSets(dayData.abFinisher.details); completedSetsForDay += progress[id] || 0; }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSetsForDay += parseSets(dayData.cardio.details); completedSetsForDay += progress[id] || 0; }
        
        const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}

function updateDayButtonCompletionMarks() {
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        const dayIndex = parseInt(btn.dataset.day, 10);
        if (!isNaN(dayIndex)) { 
             if (completedDays.includes(dayIndex)) {
                btn.classList.add('day-complete');
            } else {
                btn.classList.remove('day-complete');
            }
        }
    });
}

function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// --- Event Handlers & Interaction ---
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
            if (currentActive && currentActive !== card) { 
                currentActive.classList.remove('exercise-active');
            }
            card.classList.add('exercise-active');
             
            if (newCompletedCount < totalSets && !wasFullyCompleted) { 
                let previousSibling = card.previousElementSibling;
                let titleElement = null;
                while (previousSibling) {
                    if (previousSibling.classList.contains('category-title')) {
                        titleElement = previousSibling;
                        break;
                    }
                    previousSibling = previousSibling.previousElementSibling;
                }
                if (titleElement) {
                    titleElement.after(card);
                }
            }
        }
    } else { 
        const potentialCount = Math.max(0, currentCompleted - 1);
        if (potentialCount < currentCompleted) {
            newCompletedCount = potentialCount; 
            if (card.classList.contains('exercise-active') && activeTimer) {
               clearTimerState();
            }
        }
    }

    if (newCompletedCount !== currentCompleted) {
        progress[progressId] = newCompletedCount;
        saveProgress(); 
    }
    
    if (shouldStartTimer && newCompletedCount < totalSets) {
        const exerciseDetailsText = card.querySelector('.exercise-details p')?.textContent || '';
        const restTime = parseRestTime(exerciseDetailsText);
        startOnScreenTimer(restTime);
    } 
    else if (shouldStartTimer && newCompletedCount >= totalSets) {
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

    const cardTypeClass = card.classList.contains('exercise-item') ? 'exercise-item'
                        : card.classList.contains('ab-finisher') ? 'ab-finisher'
                        : 'cardio-session';
    
    let targetTitleElement = null;
    let sectionTitleText = "";
    let sectionOrder = 0; 

    if (cardTypeClass === 'exercise-item') {
        sectionTitleText = "Main Workout";
        sectionOrder = 0;
    } else if (cardTypeClass === 'ab-finisher') {
        sectionTitleText = "Ab Finisher";
        sectionOrder = 1;
    } else if (cardTypeClass === 'cardio-session') {
        sectionTitleText = "Post-Workout Cardio";
        sectionOrder = 2;
    }

    const titles = exerciseList.querySelectorAll('.category-title');
    titles.forEach(title => {
        if (title.textContent === sectionTitleText) {
            targetTitleElement = title;
        }
    });

    if (!targetTitleElement) {
        targetTitleElement = document.createElement("h3");
        targetTitleElement.className = "category-title";
        targetTitleElement.textContent = sectionTitleText;
        
        let anchorElement = null;
        if (sectionOrder === 1) { 
            const mainItems = exerciseList.querySelectorAll('.exercise-item');
            if (mainItems.length > 0) {
                anchorElement = mainItems[mainItems.length - 1];
            } else if (titles.length > 0 && titles[0].textContent === "Main Workout") {
                anchorElement = titles[0]; 
            }
        } else if (sectionOrder === 2) { 
            const abItems = exerciseList.querySelectorAll('.ab-finisher');
            if (abItems.length > 0) {
                anchorElement = abItems[abItems.length - 1];
            } else if (titles.length > 0) { 
                 titles.forEach(t => { 
                    if(t.textContent === "Ab Finisher") anchorElement = t; 
                });
            }
            if (!anchorElement) { 
                 const mainItems = exerciseList.querySelectorAll('.exercise-item');
                 if (mainItems.length > 0) anchorElement = mainItems[mainItems.length - 1];
            }
        }
        
        if (anchorElement) {
            anchorElement.after(targetTitleElement);
        } else if (sectionOrder === 0) {
            exerciseList.prepend(targetTitleElement); 
        } else {
            exerciseList.appendChild(targetTitleElement); 
        }
    }

    if (targetTitleElement) {
        targetTitleElement.after(card);
    } else {
        exerciseList.appendChild(card);
    }

    addCardListeners(card, false); 
    updateCompletedSectionVisibility();
}

function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData) return;
    const allItems = [
        ...(dayData.exercises ? dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })) : []), 
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];
    if (!allItems || allItems.length === 0) return; 

    const isDayComplete = allItems.every(item => {
        const totalSets = parseSets(item.details);
        const completedSets = progress[item.id] || 0;
        return completedSets >= totalSets;
    });

    if (isDayComplete) {
        if (!completedDays.includes(activeDayIndex)) {
            completedDays.push(activeDayIndex);
            saveCompletedDays();
            updateDayButtonCompletionMarks(); 
        }

        const isWeekComplete = workoutData.every((_, idx) => completedDays.includes(idx));
        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; 
        completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        completionOverlay.classList.remove('hidden');
        
        const dismissHandler = () => {
            completionOverlay.classList.add('hidden');
            completionOverlay.removeEventListener('click', dismissHandler);
        };
        completionOverlay.addEventListener('click', dismissHandler);
        if (isWeekComplete) {
            setTimeout(() => {
                progress = {};
                completedDays = []; 
                localStorage.removeItem(PROGRESS_KEY);
                localStorage.removeItem(COMPLETED_DAYS_KEY); 
                localStorage.removeItem(TIMER_END_KEY);
                location.reload(); 
            }, 5000);
        } else { 
            setTimeout(() => completionOverlay.classList.add('hidden'), 4000); 
        }
    }
}

function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (longPressTriggered) { longPressTriggered = false; return; }
            if (card.parentElement === exerciseList) { 
                handleSeriesUpdate(card, progressId, totalSets, 'increment');
            }
        };
        card.addEventListener('click', clickHandler);
        card._clickHandler = clickHandler;
    }

    const contextHandler = (e) => {
        e.preventDefault();
        handleSeriesUpdate(card, progressId, totalSets, 'decrement');
    };
    card.addEventListener('contextmenu', contextHandler);
    card._contextHandler = contextHandler;

    let longPressTimeoutId = null;
    let longPressTriggered = false;
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
    const clearLongPress = () => {
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = null;
    };

    card.addEventListener('touchstart', touchStartHandler, { passive: false });
    card.addEventListener('touchend', clearLongPress);
    card.addEventListener('touchcancel', clearLongPress);
    card.addEventListener('touchmove', clearLongPress); 

    card._touchStartHandler = touchStartHandler;
    card._touchEndHandler = clearLongPress; 
    card._touchMoveHandler = clearLongPress;

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            const exerciseData = _getExerciseDataFromProgressId(progressId);
            if (exerciseData) {
                openInfoModal(exerciseData.name, exerciseData.instructions);
            }
