// Optimized 6-Day Split + 1 Day System Standby
const workoutData = [
  { // DAY 1: UPPER 1 (Mechanical Chest + Lateral Delt Focus)
    "day": 1,
    "title": "Upper 1: Chest Focus", 
    "duration": "60-70 minutes", 
    "exercises": [ 
      { "name": "Incline Press (Dumbbell or Machine)", "details": "4 sets of 6-10 reps | 120s rest", "instructions": "Focus on the clavicular head. Control the eccentric. Stop just short of lockout at the top to maintain tension." },
      { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 90s rest", "instructions": "Focus on maximum stretch at the bottom of the movement." },
      { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "Cable at hand height, pulling from behind the body. Absolute focus on the lateral deltoid." },
      { "name": "Lat Pulldown - Maintenance", "details": "3 sets of 8-12 reps | 90s rest", "instructions": "Vertical pull for lat maintenance. Keep scapulae down and back." },
      { "name": "High Pulley Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "Focus on rear delts and mid-traps. Pull towards your eyes, externally rotating the shoulders." }
    ],
    "abFinisher": null, 
    "cardio": { "name": "15 minutes light cardio", "details": "1 set of 15 minutes", "instructions": "Active recovery pacing." } 
  },
  { // DAY 2: LOWER 1 (Upper Glute Focus)
    "day": 2,
    "title": "Lower 1: Upper Glute Focus",
    "duration": "65-75 minutes", 
    "exercises": [
      { "name": "Cable Hip Abduction", "details": "4 sets of 12-15 reps (per leg) | 60s rest", "instructions": "Low cable. Torso leaning slightly forward. Total focus on gluteus medius/upper glute. Controlled movement." },
      { "name": "Barbell Hip Thrust", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "Full 1-second pause at the top with maximum glute contraction." },
      { "name": "Romanian Deadlift (RDL)", "details": "3 sets of 8-10 reps | 120s rest", "instructions": "Focus on hamstring and gluteus maximus stretch. Keep the bar glued to your body." },
      { "name": "Leg Extensions", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Baseline volume for quads." },
      { "name": "Standing Calf Raises", "details": "4 sets of 10-15 reps | 60s rest", "instructions": "Maximum stretch at the bottom, 1-second pause in the stretched position." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3: UPPER 2 (Shoulder + Upper Chest Focus)
    "day": 3,
    "title": "Upper 2: Shoulder Focus",
    "duration": "60-70 minutes", 
    "exercises": [
      { "name": "Seated Dumbbell Press", "details": "4 sets of 8-10 reps | 120s rest", "instructions": "Bench at roughly 75-80 degrees (not 90). Press with elbows slightly in front of the shoulder line." },
      { "name": "Low-to-High Cable Crossover", "details": "4 sets of 12-15 reps | 90s rest", "instructions": "Pulling upward to target the clavicular portion of the chest again." },
      { "name": "Dumbbell Lateral Raise", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "High reps for metabolite accumulation in the lateral deltoid." },
      { "name": "Chest-Supported Row (T-Bar or Dumbbell)", "details": "3 sets of 8-12 reps | 90s rest", "instructions": "Back thickness maintenance. The chest support spares the lower back." },
      { "name": "Dumbbell Shrugs (Traps)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Pure vertical movement. 1-second pause at maximum contraction at the top." }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "Focus on spinal flexion, not pulling with the arms." },
    "cardio": null
  },
  { // DAY 4: LOWER 2 (Glute + Base Quads Focus)
    "day": 4,
    "title": "Lower 2: Glute Focus", 
    "duration": "65-75 minutes", 
    "exercises": [
      { "name": "45-Degree Cable Kickbacks", "details": "4 sets of 12-15 reps (per leg) | 60s rest", "instructions": "Kick back diagonally to align with the upper fibers of the gluteus maximus and gluteus medius." },
      { "name": "Bulgarian Split Squat", "details": "3 sets of 8-12 reps (per leg) | 90s rest", "instructions": "Torso leaning slightly forward for greater glute emphasis." },
      { "name": "Leg Press", "details": "3 sets of 10-15 reps | 120s rest", "instructions": "Feet placed slightly higher on the platform." },
      { "name": "Seated Leg Curl", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "Focus on maximum contraction (peak) of the hamstrings." },
      { "name": "Seated Calf Raises", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "Focus on the soleus. Slow and controlled movement." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 5: UPPER 3 (Metabolic Volume + Back Stabilization)
    "day": 5,
    "title": "Upper 3: Continuous Tension", 
    "duration": "55-65 minutes", 
    "exercises": [
      { "name": "Cable Flys (Mid-Pulley)", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "Focus on squeezing the mid-chest (sternal head). Stop if the shoulder protracts forward." },
      { "name": "Dumbbell Upright Row", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Pull with the elbows driving the movement. Hits lateral delts and upper traps simultaneously." },
      { "name": "Seated Cable Row (V-Bar)", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Maintenance of lower lats and scapular stabilization." },
      { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "Keep scapulae abducted (spread apart) to isolate the posterior deltoid." },
      { "name": "Superset: Rope Pushdowns + Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after", "instructions": "Sole baseline arm volume for the week, sufficient due to the high volume of heavy compounds." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 6: LOWER 3 (Quad Focus + Metabolic Glute)
    "day": 6,
    "title": "Lower 3: Quad Focus", 
    "duration": "60-70 minutes", 
    "exercises": [
      { "name": "Hack Squat or Back Squat", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "Focus on maximum depth for full quad and glute activation." },
      { "name": "Hip Abductor Machine", "details": "3 sets of 15-20 reps (Drop-set on last) | 60s rest", "instructions": "Lean torso forward. Final metabolic work for the upper glute." },
      { "name": "Lying Leg Curl", "details": "4 sets of 12-15 reps | 75s rest", "instructions": "Hamstring work in a stretched position." },
      { "name": "45-Degree Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Perform with a slightly rounded upper back (thoracic flexion) to take the load off the erectors and focus strictly on the glutes." }
    ],
    "abFinisher": { "name": "Hanging Leg Raises", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "Focus on rotating the pelvis upward, not just lifting the legs." },
    "cardio": null
  },
  { // DAY 7: MANDATORY RECOVERY
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
        } else {
            timeLeft--;
        }
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

// FIX: Robust Regex Parsing decoupling from strict structures
function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/(\d+)(?:-\d+)?s\s*rest/i); 
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1; 
    const match = details.match(/(\d+)\s+sets?/i) || details.match(/1\s+set/i);
    return match ? parseInt(match[1] || 1, 10) : 1;
}

// --- UI Update Functions ---
function updateCardVisuals(card, progressId, totalSets) {
    const completedSets = progress[progressId] || 0;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${Math.min(completedSets, totalSets)}/${totalSets}`;
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
    } else { // 'decrement'
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

// FIX: Null Reference bug avoided with proper array checks
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

// FIX: Mathematical Week Complete Validation
function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData) return;
    
    // Day 7 Standby check (no exercises) auto-completes if selected
    const allItems = [
        ...(dayData.exercises ? dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })) : []), 
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];
    
    let isDayComplete = true;
    if (allItems.length > 0) {
        isDayComplete = allItems.every(item => {
            const totalSets = parseSets(item.details);
            const completedSets = progress[item.id] || 0;
            return completedSets >= totalSets;
        });
    }

    if (isDayComplete) {
        if (!completedDays.includes(activeDayIndex)) {
            completedDays.push(activeDayIndex);
            saveCompletedDays();
            updateDayButtonCompletionMarks(); 
        }

        // Precise Week Complete Logic
        const isWeekComplete = completedDays.length === workoutData.length; 
        
        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; 
        completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        completionOverlay.classList.remove('hidden');
        
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


// FIX: iOS Ghost Click Neutralization
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);
    let ignoreNextClick = false;

    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (ignoreNextClick) {
                ignoreNextClick = false; // Block iOS ghost click
                return;
            }
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
    const touchStartHandler = (e) => {
        if (e.target.closest('.info-btn')) return;
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = setTimeout(() => {
            ignoreNextClick = true; // Engage block for subsequent click
            handleSeriesUpdate(card, progressId, totalSets, 'decrement');
            longPressTimeoutId = null;
        }, LONG_PRESS_DURATION);
    };
    const clearLongPress = () => {
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = null;
    };

    card.addEventListener('touchstart', touchStartHandler, { passive: true });
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
            
            // FIX: Safe Regex extraction to prevent crashes
            const matchDay = progressId.match(/day(\d+)/);
            const matchType = progressId.match(/-([a-z]+)-/);
            const matchIndex = progressId.match(/-(\d+)$/);
            
            if (!matchDay || !matchType || !matchIndex) return;

            const dayNum = parseInt(matchDay[1], 10);
            const type = matchType[1];
            const index = parseInt(matchIndex[1], 10);
            
            const dayData = workoutData.find(d => d.day === dayNum);
            let exerciseData;
            
            if (dayData) {
                 if (type === 'exercise') exerciseData = dayData.exercises[index];
                 else if (type === 'ab') exerciseData = dayData.abFinisher;
                 else if (type === 'cardio') exerciseData = dayData.cardio;
            }
            if (exerciseData) {
                openInfoModal(exerciseData.name, exerciseData.instructions);
            }
        };
        if (infoBtn._infoClickHandler) {
            infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
        }
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._infoClickHandler = infoClickHandler;
    }
}


function removeCardListeners(card) {
    if (card._clickHandler) card.removeEventListener('click', card._clickHandler);
    if (card._contextHandler) card.removeEventListener('contextmenu', card._contextHandler);
    if (card._touchStartHandler) card.removeEventListener('touchstart', card._touchStartHandler);
    if (card._touchEndHandler) {
         card.removeEventListener('touchend', card._touchEndHandler);
         card.removeEventListener('touchcancel', card._touchEndHandler); 
    }
    if (card._touchMoveHandler) card.removeEventListener('touchmove', card._touchMoveHandler);

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn && infoBtn._infoClickHandler) {
        infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
    }
    card._clickHandler = null; card._contextHandler = null;
    card._touchStartHandler = null; card._touchEndHandler = null; card._touchMoveHandler = null;
    if (infoBtn) infoBtn._infoClickHandler = null;
}


const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

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

    const completedSets = progress[progressId] || 0;
    const isInitiallyCompleted = completedSets >= totalSets;
    addCardListeners(li, isInitiallyCompleted);
    updateCardVisuals(li, progressId, totalSets);

    return li;
};


const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    const activeItems = (Array.isArray(items) ? items : [items]).filter((item, i) => {
        const progressId = `day${dayNum}-${idType}-${i}`;
        const totalSets = parseSets(item.details);
        const completedSets = progress[progressId] || 0;
        return completedSets < totalSets;
    });

    let sectionTitleElement = null;
    if (activeItems.length > 0) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement);
    }

    const elements = (Array.isArray(items)
        ? items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum))
        : [createExerciseItem(items, cssClass, idType, 0, dayNum)]);

    elements.forEach(el => {
        const progressId = el.dataset.progressId;
        const totalSets = parseInt(el.dataset.totalSets, 10);
        const completedSets = progress[progressId] || 0;
        if (completedSets >= totalSets) {
            completedList.appendChild(el); 
        } else {
            exerciseList.appendChild(el); 
        }
    });
};


function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) return;

    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;

    exerciseList.innerHTML = ""; 
    completedList.innerHTML = ""; 

    if (!dayData.exercises || dayData.exercises.length === 0) { 
        workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title || 'Rest Day'}`; 
        exerciseList.innerHTML = '<li class="exercise-item standby-card"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON RECOVERY.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }

    updateCompletedSectionVisibility(); 
}

function setActiveDay(dayIndex) { 
    document.querySelectorAll(".day-btn").forEach(btn => {
        if (btn.id === 'theme-toggle-btn') return;
        btn.classList.remove("active")
    });
    
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");

    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) {
        currentActive.classList.remove('exercise-active');
    }
    
    clearTimerState(); 
    renderWorkout(dayIndex); 
}

// --- Modal Functions --- 
function openInfoModal(title, instructions) { 
    infoModalOverlay.classList.remove("hidden");
    infoModalOverlay.setAttribute('aria-hidden', 'false');
    infoModalTitle.textContent = title; 
    infoModalInstructions.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = instructions || "No instructions available."; 
    infoModalInstructions.appendChild(p);
}
function closeInfoModal() { 
    infoModalOverlay.classList.add("hidden");
    infoModalOverlay.setAttribute('aria-hidden', 'true');
}
function openResetModal() { 
    resetModalOverlay.classList.remove("hidden");
    resetModalOverlay.setAttribute('aria-hidden', 'false');
}
function closeResetModal() { 
    resetModalOverlay.classList.add("hidden");
    resetModalOverlay.setAttribute('aria-hidden', 'true');
}


// --- App Initialization ---
function init() {
    loadTheme(); 
    loadProgress();
    loadCompletedDays(); 
    
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });

    // FIX: Distinct Day Labels 
    const dayLabels = ["D1", "D2", "D3", "D4", "D5", "D6", "D7"]; 
    workoutData.forEach((day, index) => {
        const label = dayLabels[index]; 
        
        const btn = document.createElement("button");
        btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = label; 
        btn.appendChild(textSpan);
        btn.dataset.day = index; 
        btn.addEventListener("click", () => setActiveDay(index));
        daySelector.appendChild(btn);
    });

    themeToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <clipPath id="half-clip"><rect x="0" y="0" width="10" height="20" /></clipPath>
          </defs>
          <circle cx="10" cy="10" r="9" class="svg-bg-circle"/>
          <circle cx="10" cy="10" r="9" class="svg-fg-circle" clip-path="url(#half-clip)"/>
        </svg>
    `;
    themeToggleBtn.addEventListener("click", toggleTheme); 

    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {};
        completedDays = []; 
        saveProgress(); 
        saveCompletedDays(); 
        
        const currentActive = document.querySelector('.exercise-active');
        if (currentActive) {
            currentActive.classList.remove('exercise-active');
        }
        clearTimerState(); 
        
        const activeDayIndex = parseInt(document.querySelector(".day-btn.active")?.dataset.day || 0, 10);
        renderWorkout(activeDayIndex); 
        updateDayButtonCompletionMarks(); 
        closeResetModal();
    });
    
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    
    // FIX: Click-to-Dismiss Completion Overlay
    completionOverlay.addEventListener("click", () => {
        completionOverlay.classList.add('hidden');
    });
    
    const today = new Date().getDay(); 
    const initialDayIndex = today === 0 ? 6 : today - 1; 
    
    setActiveDay(initialDayIndex); 
    updateDayButtonCompletionMarks(); 
    checkTimerOnFocus(); 
}

init();
