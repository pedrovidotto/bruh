// Workout data - Refined for 2x/Week Frequency on Arms & Calves
const workoutData = [
  { // DAY 1: Chest & Triceps
    "day": 1,
    "title": "Chest & Triceps",
    "duration": "50-60 minutes", // Slightly increased duration
    "exercises": [
      { "name": "Incline Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "...", "calories": 12 },
      { "name": "Flat Machine Press", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "...", "calories": 10 },
      { "name": "Weighted Dips (Chest Focus)", "details": "3 sets to Failure | 75s rest", "instructions": "...", "calories": 15 },
      { "name": "Pec-Deck Machine", "details": "3 sets of 12-15+ reps | 60s rest (Drop set)", "instructions": "...", "calories": 8 },
      // ADDED: Triceps Frequency Exercise
      {
        "name": "Cable Rope Pushdowns",
        "details": "3 sets of 12-15 reps | 60s rest",
        "instructions": "1. Attach a rope to a high pulley.\n2. Keep elbows tucked in close to your body.\n3. Extend your arms fully, squeezing the triceps at the bottom.\n4. Spread the rope handles apart slightly at the end of the movement.\n5. Control the negative.",
        "calories": 8
      }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "...", "calories": 30 },
    "cardio": { "name": "15 minutes moderate cardio", "details": "1 set of 15 minutes", "instructions": "...", "calories": 180 }
  },
  { // DAY 2: Back & Biceps
    "day": 2,
    "title": "Back & Biceps",
    "duration": "55-65 minutes", // Slightly increased duration
    "exercises": [
      { "name": "Weighted Pull-ups (or Lat Pulldowns)", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "...", "calories": 15 },
      { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "...", "calories": 18 },
      { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "...", "calories": 14 },
      { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 9 },
      // ADDED: Biceps Frequency Exercise
      {
        "name": "Dumbbell Hammer Curls",
        "details": "3 sets of 10-15 reps | 60s rest",
        "instructions": "1. Stand holding dumbbells with palms facing your body (neutral grip).\n2. Keep elbows pinned to your sides.\n3. Curl the dumbbells up towards your shoulders.\n4. Squeeze the biceps and brachialis at the top.\n5. Lower under control.",
        "calories": 9
      }
      // Note: Hyperextensions removed to keep focus and time manageable, covered on Hamstring day.
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3: Quads & Calves
    "day": 3,
    "title": "Quads & Calves",
    "duration": "60-75 minutes", // Unchanged
    "exercises": [
      { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "...", "calories": 25 },
      { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "...", "calories": 20 },
      { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "...", "calories": 18 },
      { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set)", "instructions": "...", "calories": 10 },
      { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "...", "calories": 5 }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 4: Chest & Shoulders
    "day": 4,
    "title": "Chest & Shoulders", // Updated title
    "duration": "60-70 minutes", // Unchanged
    "exercises": [
      { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "...", "calories": 11 },
      { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 7 },
      { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "...", "calories": 7 },
      { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "...", "calories": 11 },
      { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 8 }
    ],
    "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 35 },
    "cardio": null
  },
  { // DAY 5: Biceps + Triceps
    "day": 5,
    "title": "Biceps + Triceps", // Updated title
    "duration": "45-55 minutes", // Slightly increased duration
    "exercises": [
      { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "...", "calories": 10 },
      { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "...", "calories": 9 },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "...", "calories": 8 },
      { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "...", "calories": 8 },
      { "name": "Superset: Rope Pushdowns & Cable Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after superset", "instructions": "...", "calories": 15 }
    ],
    "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "...", "calories": 40 },
    "cardio": { "name": "20 minutes moderate cardio", "details": "1 set of 20 minutes", "instructions": "...", "calories": 220 }
  },
  { // DAY 6: Glutes & Hamstrings
    "day": 6,
    "title": "Glutes & Hamstrings", // Updated title
    "duration": "60-70 minutes", // Slightly increased duration
    "exercises": [
      { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "...", "calories": 22 },
      { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "...", "calories": 16 },
      { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set)", "instructions": "...", "calories": 9 },
      { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Drop set)", "instructions": "...", "calories": 7 },
      // ADDED: Calves Frequency Exercise
      {
        "name": "Seated Calf Raises",
        "details": "4 sets of 15-20 reps | 45s rest",
        "instructions": "1. Position yourself on the machine with pads on your lower thighs.\n2. Lower the weight slowly to get a deep stretch in your calves.\n3. Press up onto the balls of your feet as high as possible.\n4. Squeeze the calves at the top. Focus on the soleus muscle.",
        "calories": 4
      }
      // Note: 45-Degree Kickbacks removed to keep focus and time manageable, covered by Hip Thrusts/Abduction.
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 7: Back, Shoulders & Traps
    "day": 7,
    "title": "Back, Shoulders & Traps", // Updated title
    "duration": "45-55 minutes", // Unchanged
    "exercises": [
      { "name": "Machine Lat Pulldown (Neutral Grip)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 10 },
      { "name": "Seated Cable Row (Wide Grip)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 12 },
      { "name": "Dumbbell Lateral Raise", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "...", "calories": 7 },
      { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "...", "calories": 8 },
      { "name": "Dumbbell Shrugs", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "...", "calories": 6 }
    ],
    "abFinisher": null,
    "cardio": null
  }
];

// DOM Elements
const daySelector = document.getElementById("day-selector");
const workoutTitle = document.getElementById("workout-title");
const workoutDuration = document.getElementById("workout-duration");
const exerciseList = document.getElementById("exercise-list"); // Active list
const completedList = document.getElementById("completed-list"); // Completed list
const completedTitle = document.getElementById("completed-title"); // Title for completed section
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
const completionTitleEl = document.getElementById("completion-title"); // Renamed for clarity
const completionMessage = document.getElementById("completion-message");
const themeToggleBtn = document.getElementById("theme-toggle-btn"); // ADDED

// State
let progress = {};
let longPressTimer;
const LONG_PRESS_DURATION = 500;
let activeTimer = null;
let restPeriodEndTime = null;

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- Theme Functions ---
function loadTheme() {
    const savedTheme = localStorage.getItem('workoutSysTheme') || 'dark'; // Default to dark
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
function startOnScreenTimer(durationSeconds) {
    if (activeTimer) { clearInterval(activeTimer); }
    restPeriodEndTime = Date.now() + (durationSeconds * 1000);
    localStorage.setItem('restPeriodEndTime', restPeriodEndTime);
    if (durationSeconds <= 0) {
        timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        return;
    }
    let timeLeft = durationSeconds;
    timerDisplay.classList.remove('hidden');
    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(activeTimer);
            activeTimer = null;
            timerDisplay.classList.add('hidden');
            localStorage.removeItem('restPeriodEndTime');
            restPeriodEndTime = null;
            triggerHapticFeedback();
            
            const currentActive = document.querySelector('.exercise-active');
            if (currentActive) {
                currentActive.classList.remove('exercise-active');
            }
        } else { timeLeft--; }
    };
    updateTimer();
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = restPeriodEndTime || localStorage.getItem('restPeriodEndTime');
    if (!endTime) return;
    const remainingTime = Math.round((endTime - Date.now()) / 1000);
    if (remainingTime > 0) { startOnScreenTimer(remainingTime); }
    else {
        timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
    }
}


// --- Core & Helper Functions ---
function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress");
        progress = savedProgress ? JSON.parse(savedProgress) : {};
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateProgressBars(); // Still useful for day buttons
        updateCompletedSectionVisibility();
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+)s\s*rest/);
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1; // Default to 1 set if parsing fails
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of \d+\s+minutes/i);
     if (match) return 1;
    console.warn("Could not parse sets from details:", details, "Defaulting to 1");
    return 1; // Fallback
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
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        // Skip theme toggle button
        if (btn.id === 'theme-toggle-btn') return; 
        
        const dayData = workoutData[index];
        if (!dayData || dayData.exercises.length === 0) { btn.style.setProperty('--progress', '0%'); return; }
        let totalSetsForDay = 0, completedSetsForDay = 0;
        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSetsForDay += parseSets(ex.details); completedSetsForDay += progress[id] || 0; });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSetsForDay += parseSets(dayData.abFinisher.details); completedSetsForDay += progress[id] || 0; }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSetsForDay += parseSets(dayData.cardio.details); completedSetsForDay += progress[id] || 0; }
        const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}


function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// --- Event Handlers & Interaction ---
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;

    let newCompletedCount;
    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);
        if (newCompletedCount > currentCompleted) {
             triggerHapticFeedback();
             
             const currentActive = document.querySelector('.exercise-active');
             if (currentActive) {
                currentActive.classList.remove('exercise-active');
             }
             card.classList.add('exercise-active');
             
             if (!wasFullyCompleted) { 
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

             const exerciseDetailsText = card.querySelector('.exercise-details p')?.textContent || '';
             const restTime = parseRestTime(exerciseDetailsText);
             startOnScreenTimer(restTime);
        }
    } else { // 'decrement'
        newCompletedCount = Math.max(0, currentCompleted - 1);
        if (activeTimer && newCompletedCount < currentCompleted) {
            clearInterval(activeTimer);
            timerDisplay.classList.add('hidden');
            localStorage.removeItem('restPeriodEndTime');
            restPeriodEndTime = null;
            card.classList.remove('exercise-active');
        }
    }

    progress[progressId] = newCompletedCount;
    saveProgress(); 

    const isNowFullyCompleted = newCompletedCount >= totalSets;
    updateCardVisuals(card, progressId, totalSets); 

    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card);
        checkDayCompletion();
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        moveFromCompletedToActive(card);
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
        console.warn("Could not find or create correct section title, appending card to end.");
    }

    addCardListeners(card, false); 
    updateCompletedSectionVisibility();
}

// --- Completion Celebration ---
function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData) return;
    const allItems = [
        ...dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })),
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];
    if (allItems.length === 0) return; 

    const isDayComplete = allItems.every(item => {
        const totalSets = parseSets(item.details);
        const completedSets = progress[item.id] || 0;
        return completedSets >= totalSets;
    });

    if (isDayComplete) {
        const isWeekComplete = activeDayIndex === 5; 
        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; 
        completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        completionOverlay.classList.remove('hidden');
        if (isWeekComplete) {
            setTimeout(() => {
                progress = {};
                localStorage.removeItem("workoutSysProgress");
                localStorage.removeItem('restPeriodEndTime');
                location.reload();
            }, 5000);
        } else { setTimeout(() => completionOverlay.classList.add('hidden'), 4000); }
    }
}


// --- DOM Rendering & Listener Management ---
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
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
            e.preventDefault();
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
            const exerciseName = card.querySelector('h3').textContent;
            const dayNum = parseInt(progressId.match(/day(\d+)/)[1], 10);
            const type = progressId.match(/-([a-z]+)-/)[1];
            const index = parseInt(progressId.match(/-(\d+)$/)[1], 10);
            const dayData = workoutData.find(d => d.day === dayNum);
            let exerciseData;
            if (dayData) {
                 if (type === 'exercise') exerciseData = dayData.exercises[index];
                 else if (type === 'ab') exerciseData = dayData.abFinisher;
                 else if (type === 'cardio') exerciseData = dayData.cardio;
            }
            if (exerciseData) {
                openInfoModal(exerciseData.name, exerciseData.instructions);
            } else {
                 console.error("Could not find exercise data for modal:", progressId);
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
             if (sectionTitleElement) {
                exerciseList.appendChild(el); 
             } else {
                 exerciseList.appendChild(el); 
             }
        }
    });
};


function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;

    exerciseList.innerHTML = ""; 
    completedList.innerHTML = ""; 

    if (dayData.day === 7 || dayData.exercises.length === 0) { 
        workoutTitle.innerHTML = `<span class="workout-day-num">7.</span> Rest Day`;
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON NUTRITION, HYDRATION, AND SLEEP.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }

    updateCompletedSectionVisibility(); 
}


function setActiveDay(dayIndex) { 
    document.querySelectorAll(".day-btn").forEach(btn => {
        // Skip theme toggle button
        if (btn.id === 'theme-toggle-btn') return;
        btn.classList.remove("active")
    });
    
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");

    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) {
        currentActive.classList.remove('exercise-active');
    }
    
    if (activeTimer) {
        clearInterval(activeTimer);
        timerDisplay.classList.add('hidden');
        activeTimer = null;
    }
    localStorage.removeItem('restPeriodEndTime');
    restPeriodEndTime = null;
    renderWorkout(dayIndex); 
}

// --- Modal Functions --- 
function openInfoModal(title, instructions) { 
    infoModalOverlay.classList.remove("hidden");
    infoModalOverlay.setAttribute('aria-hidden', 'false');
    infoModalTitle.textContent = title.toUpperCase();
    infoModalInstructions.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = instructions;
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
    loadTheme(); // ADDED: Load theme on init
    loadProgress();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });

    const dayLabels = ["M", "T", "W", "T", "F", "S", "S"]; 
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button");
        btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = dayLabels[index]; 
        btn.appendChild(textSpan);
        btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        daySelector.appendChild(btn);
    });

    // --- MODIFIED BLOCK: Add SVG to theme toggle button ---
    themeToggleBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <clipPath id="half-clip">
              <rect x="0" y="0" width="10" height="20" />
            </clipPath>
          </defs>
          <circle cx="10" cy="10" r="9" class="svg-bg-circle"/>
          <circle cx="10" cy="10" r="9" class="svg-fg-circle" clip-path="url(#half-clip)"/>
        </svg>
    `;
    themeToggleBtn.setAttribute('aria-label', 'Switch theme'); // Accessibility
    themeToggleBtn.addEventListener("click", toggleTheme); 
    // --- END MODIFIED BLOCK ---

    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {};
        saveProgress(); 

        const currentActive = document.querySelector('.exercise-active');
        if (currentActive) {
            currentActive.classList.remove('exercise-active');
        }
        
        const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
        if(activeTimer) {
            clearInterval(activeTimer);
            timerDisplay.classList.add('hidden');
        }
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        renderWorkout(parseInt(activeDayIndex, 10)); 
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    
    const today = new Date().getDay();
    const initialDayIndex = today === 0 ? 6 : today - 1; 
    setActiveDay(initialDayIndex); 
    checkTimerOnFocus();
}

init();
