// Workout data (assuming this is the same as before)
const workoutData = [
  {
    "day": 1,
    "title": "Chest",
    "duration": "45-55 minutes",
    "exercises": [
      { "name": "Incline Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Set bench to a 30-45 degree angle.\n2. Lie back with dumbbells on your thighs, then kick them up to your shoulders.\n3. Press the weights up until your arms are extended, but not locked out.\n4. Lower the dumbbells slowly and controlled back to the sides of your chest.", "calories": 12 },
      { "name": "Flat Machine Press", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Adjust the seat so the handles align with your mid-chest.\n2. Press forward, focusing on squeezing your chest muscles together.\n3. Stop just short of locking your elbows.\n4. Return slowly to the starting position, feeling a stretch in your chest.", "calories": 10 },
      { "name": "Weighted Dips (Chest Focus)", "details": "3 sets to Failure | 75s rest", "instructions": "1. Use parallel bars and add weight if possible.\n2. Lean your torso forward significantly as you perform the movement.\n3. Lower yourself until your shoulders are slightly below your elbows.\n4. Press back up, focusing on your chest.", "calories": 15 },
      { "name": "Pec-Deck Machine", "details": "3 sets of 12-15+ reps | 60s rest (Drop set on last set)", "instructions": "1. Adjust the seat so your shoulders are level with the handles.\n2. Press the pads together in a controlled arc, squeezing your chest at the peak.\n3. Slowly return to the starting position, allowing a good stretch.", "calories": 8 },
      { "name": "Cable Crossover (Low to High)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to the lowest position.\n2. Grab the handles, step forward, and stand with a slight bend in your torso.\n3. Bring your hands up and together in an arc, squeezing your upper chest at the top.", "calories": 8 }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "1. Kneel facing a high pulley with a rope attachment.\n2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.\n3. Focus on contracting your abs, not pulling with your arms.", "calories": 30 },
    "cardio": { "name": "15 minutes of moderate-intensity cardio", "details": "1 set of 15 minutes", "instructions": "Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation.", "calories": 180 }
  },
  {
    "day": 2,
    "title": "Back",
    "duration": "50-60 minutes",
    "exercises": [
        { "name": "Weighted Pull-ups (or Lat Pulldowns)", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar slightly wider than shoulder-width.\n2. Drive your elbows down and back to pull your chest towards the bar.\n3. Squeeze your back muscles at the top.\n4. Lower yourself slowly and fully extend your arms at the bottom.", "calories": 15 },
        { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Hinge at your hips, keeping your back straight.\n2. Pull the barbell towards your lower stomach, not your chest.\n3. Squeeze your shoulder blades together at the top.\n4. Lower the bar under control.", "calories": 18 },
        { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Lie face down on the pad.\n2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.\n3. Squeeze hard at the peak of the contraction.", "calories": 14 },
        { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Stand facing a high pulley with a straight bar.\n2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.\n3. Focus on using your lats, not your triceps.", "calories": 9 },
        { "name": "Hyperextensions", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Position yourself on a hyperextension bench.\n2. Lower your torso until you feel a stretch in your hamstrings.\n3. Raise back up by squeezing your glutes and lower back.", "calories": 8 }
    ],
    "abFinisher": null,
    "cardio": null
  },
    // ... (rest of workoutData remains the same) ...
  { "day": 7, "title": "Rest Day", "duration": "Focus on recovery", "exercises": [], "abFinisher": null, "cardio": null }
];


// DOM Elements
const daySelector = document.getElementById("day-selector");
const workoutTitle = document.getElementById("workout-title");
const workoutDuration = document.getElementById("workout-duration");
const exerciseList = document.getElementById("exercise-list");
const completedList = document.getElementById("completed-list"); // New list
const completedTitle = document.getElementById("completed-title"); // New title
const resetButton = document.getElementById("reset-button");
const dailyCaloriesEl = document.getElementById("daily-calories");
const weeklyCaloriesContainer = document.getElementById("weekly-calories-container");
const timerDisplay = document.getElementById('timer-display');

// Modal Elements
const infoModalOverlay = document.getElementById("info-modal-overlay");
const infoModalCloseBtn = document.getElementById("info-modal-close-btn");
const infoModalTitle = document.getElementById("info-modal-title");
const infoModalInstructions = document.getElementById("info-modal-instructions");
const resetModalOverlay = document.getElementById("reset-modal-overlay");
const confirmResetBtn = document.getElementById("confirm-reset-btn");
const cancelResetBtn = document.getElementById("cancel-reset-btn");

// Completion Overlay Elements
const completionOverlay = document.getElementById("completion-overlay");
const completionTitle = document.getElementById("completion-title");
const completionMessage = document.getElementById("completion-message");

// State
let progress = {};
let longPressTimer;
const LONG_PRESS_DURATION = 500; // ms
let activeTimer = null;
let restPeriodEndTime = null;

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.",
    "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.",
    "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- Timer, and Haptic Functions ---
function triggerHapticFeedback() {
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
}

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
        updateCalorieCounters();
        updateProgressBars();
        updateCompletedSectionVisibility(); // Check visibility after saving
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+)s\s*rest/);
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1;
    const match = details.match(/^(\d+)\s+sets/);
    return match ? parseInt(match[1], 10) : 1;
}

// --- UI Update Functions ---
function updateCardVisuals(card, progressId, totalSets) {
    const completedSets = progress[progressId] || 0;
    const percentage = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
    card.style.setProperty('--series-progress', `${percentage}%`);
    // Keep class for logic, but styling is handled by list placement
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}


function updateCalorieCounters() {
    let weeklyTotal = 0;
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const activeDayData = workoutData[activeDayIndex];
    if (!activeDayData) return;
    let dailyTotal = 0;
    workoutData.forEach((dayData) => {
        const allExercises = [
            ...dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })),
            ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
            ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
        ];
        allExercises.forEach(ex => {
            const completedSets = progress[ex.id] || 0;
            if (completedSets > 0) {
                const caloriesBurned = completedSets * (ex.calories || 0);
                weeklyTotal += caloriesBurned;
                if (dayData.day === activeDayData.day) { dailyTotal += caloriesBurned; }
            }
        });
    });
    weeklyCaloriesContainer.textContent = `// WEEKLY: ${weeklyTotal} KCAL`;
    dailyCaloriesEl.textContent = `// DAILY: ${dailyTotal} KCAL`;
}

function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData || dayData.exercises.length === 0) { btn.style.setProperty('--progress', '0%'); return; }
        let totalSets = 0, completedSets = 0;
        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSets += parseSets(ex.details); completedSets += progress[id] || 0; });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSets += parseSets(dayData.abFinisher.details); completedSets += progress[id] || 0; }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSets += parseSets(dayData.cardio.details); completedSets += progress[id] || 0; }
        const progressPercentage = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}

// Shows/hides the completed section title based on list content
function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// --- Event Handlers & Interaction ---
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;

    if (direction === 'increment') {
        progress[progressId] = Math.min(totalSets, currentCompleted + 1);
        triggerHapticFeedback();
        const exerciseDetails = card.querySelector('p').textContent;
        const restTime = parseRestTime(exerciseDetails);
        startOnScreenTimer(restTime);
    } else { // 'decrement'
        progress[progressId] = Math.max(0, currentCompleted - 1);
        if (activeTimer) {
            clearInterval(activeTimer);
            timerDisplay.classList.add('hidden');
            localStorage.removeItem('restPeriodEndTime');
            restPeriodEndTime = null;
        }
    }
    
    saveProgress(); // Calls updateCompletedSectionVisibility indirectly
    
    updateCardVisuals(card, progressId, totalSets); // Update the card's progress bar
    const isNowFullyCompleted = (progress[progressId] || 0) >= totalSets;

    // Move between lists based on completion status change
    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card);
        checkDayCompletion(); // Check if the whole day is done
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        // Find the correct place to re-insert in the active list
        const correctSectionTitle = findCorrectSectionTitle(card);
        moveFromCompletedToActive(card, correctSectionTitle);
    }
}

// Helper to find the H3 title element preceding where an item should go
function findCorrectSectionTitle(card) {
    const cardType = card.classList.contains('exercise-item') ? 'exercise' : (card.classList.contains('ab-finisher') ? 'ab' : 'cardio');
    let targetTitleText = "Main Workout";
    if (cardType === 'ab') targetTitleText = "Ab Finisher";
    if (cardType === 'cardio') targetTitleText = "Post-Workout Cardio";

    // Find the H3 with matching text content within #exercise-list
    const titles = exerciseList.querySelectorAll('.category-title');
    for (let title of titles) {
        if (title.textContent === targetTitleText) {
            return title;
        }
    }
    return null; // Should not happen if titles exist
}

// Moves item to completed list with animation
function animateAndMoveToCompleted(card) {
    card.classList.add('reordering');
    // No need for dataset.moved anymore
    setTimeout(() => {
        completedList.appendChild(card); // Append to #completed-list
        card.classList.remove('reordering');
        updateCompletedSectionVisibility(); // Update title visibility
    }, 300); // Shorter duration for smoother feel
}

// Moves item from completed back to its correct section in active list
function moveFromCompletedToActive(card, sectionTitleElement) {
    if (sectionTitleElement) {
         // Insert after the title, before the next title or end of list
        let insertBeforeNode = sectionTitleElement.nextElementSibling;
        while(insertBeforeNode && !insertBeforeNode.classList.contains('category-title')) {
             insertBeforeNode = insertBeforeNode.nextElementSibling;
        }
        exerciseList.insertBefore(card, insertBeforeNode);

    } else {
        // Fallback: append to the end of the active list if title not found
        exerciseList.appendChild(card);
    }
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
    if (allItems.length === 0) return; // Don't show completion for rest day
    
    // Check if ALL items for this day are in the progress object and completed
    const isDayComplete = allItems.every(item => {
        const totalSets = parseSets(item.details);
        const completedSets = progress[item.id] || 0;
        return completedSets >= totalSets;
    });

    if (isDayComplete) {
        const isWeekComplete = activeDayIndex === 5; // Day 6 is index 5
        completionTitle.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE";
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


// --- DOM Rendering ---
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;
    li.innerHTML = `
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
    
    // Attach event listeners ONLY if the item is NOT completed initially
    const completedSets = progress[progressId] || 0;
    if (completedSets < totalSets) {
        li.addEventListener('click', (e) => {
            if (e.target.closest('.info-btn')) return;
            handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'increment');
        });
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'decrement');
        });
        li.addEventListener('touchstart', (e) => {
            if (e.target.closest('.info-btn')) return;
            longPressTimer = setTimeout(() => {
                e.preventDefault();
                handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'decrement');
            }, LONG_PRESS_DURATION);
        }, { passive: false });
        li.addEventListener('touchend', () => clearTimeout(longPressTimer));
        li.addEventListener('touchmove', () => clearTimeout(longPressTimer));
    }

    // Info button listener is always attached
    li.querySelector(".info-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openInfoModal(exercise.name, exercise.instructions);
    });

    updateCardVisuals(li, progressId, totalSets); // Still useful for progress bar
    return li;
};

// Modified to append titles to active list only
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    const sectionTitle = document.createElement("h3");
    sectionTitle.className = "category-title";
    sectionTitle.textContent = title;
    exerciseList.appendChild(sectionTitle); // Append title to active list

    const elements = (Array.isArray(items)
        ? items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum))
        : [createExerciseItem(items, cssClass, idType, 0, dayNum)]);

    // Separate into active and completed during rendering
    elements.forEach(el => {
        const progressId = el.dataset.progressId;
        const totalSets = parseInt(el.dataset.totalSets, 10);
        const completedSets = progress[progressId] || 0;
        if (completedSets >= totalSets) {
            completedList.appendChild(el); // Add completed items to completed list
        } else {
             // Append active items *after* the section title we just added
            exerciseList.insertBefore(el, sectionTitle.nextSibling); // This appends right after the title
        }
    });

     // Re-sort active items within their section (Optional, good for consistency)
     const activeItemsInSection = Array.from(sectionTitle.parentElement.children).filter(child => child.tagName === 'LI' && !child.classList.contains('fully-completed') && child.previousElementSibling === sectionTitle);
     activeItemsInSection.forEach(item => exerciseList.insertBefore(item, sectionTitle.nextElementSibling));


};


function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    exerciseList.innerHTML = ""; // Clear active list
    completedList.innerHTML = ""; // Clear completed list

    if (dayData.exercises.length === 0) {
        workoutTitle.textContent = "7. Rest Day";
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON NUTRITION, HYDRATION, AND SLEEP TO MAXIMIZE GROWTH.</p></div></li>';
        updateCalorieCounters();
        updateCompletedSectionVisibility(); // Important for rest day
        return;
    }

    renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
    renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
    renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);

    updateCalorieCounters();
    updateCompletedSectionVisibility(); // Update visibility after rendering all sections
}


function setActiveDay(dayIndex) {
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
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
// (Keep modal functions as they were)
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
    loadProgress();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button");
        btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
        btn.appendChild(textSpan);
        btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        daySelector.appendChild(btn);
    });
    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {};
        saveProgress(); // Calls updateCompletedSectionVisibility
        const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
        if(activeTimer) {
            clearInterval(activeTimer);
            timerDisplay.classList.add('hidden');
        }
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        renderWorkout(parseInt(activeDayIndex, 10)); // Re-render clears lists correctly
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
