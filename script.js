// Global Workout Data (Ensure calories are removed from your actual data)
const workoutData = [
  {
    "day": 1, "title": "Chest", "duration": "45-55 minutes",
    "exercises": [ { "name": "Incline Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "..." }, { "name": "Flat Machine Press", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "..." }, { "name": "Weighted Dips (Chest Focus)", "details": "3 sets to Failure | 75s rest", "instructions": "..." }, { "name": "Pec-Deck Machine", "details": "3 sets of 12-15+ reps | 60s rest (Drop set on last set)", "instructions": "..." }, { "name": "Cable Crossover (Low to High)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "..." } ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "..." },
    "cardio": { "name": "15 minutes of moderate-intensity cardio", "details": "1 set of 15 minutes", "instructions": "..." }
  },
  {
    "day": 2, "title": "Back", "duration": "50-60 minutes",
    "exercises": [ { "name": "Weighted Pull-ups (or Lat Pulldowns)", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "..." }, { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "..." }, { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "..." }, { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "..." }, { "name": "Hyperextensions", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "..." } ],
    "abFinisher": null, "cardio": null
  },
  {
      "day": 3, "title": "Quads & Calves", "duration": "60-75 minutes",
      "exercises": [ { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "..." }, { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "..." }, { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "..." }, { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set on last set)", "instructions": "..." }, { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "..." } ],
      "abFinisher": null, "cardio": null
  },
   {
      "day": 4, "title": "Shoulders & Chest", "duration": "60-70 minutes",
      "exercises": [ { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "..." }, { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "..." }, { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "..." }, { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "..." }, { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "..." } ],
      "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "..." }, "cardio": null
   },
   {
      "day": 5, "title": "Arms (Biceps & Triceps)", "duration": "35-45 minutes",
      "exercises": [ { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "..." }, { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "..." }, { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "..." }, { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "..." }, { "name": "Superset: Rope Pushdowns & Cable Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after superset", "instructions": "..." } ],
      "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "..." },
      "cardio": { "name": "20 minutes of moderate-intensity cardio", "details": "1 set of 20 minutes", "instructions": "..." }
   },
   {
       "day": 6, "title": "Hamstrings & Glutes", "duration": "55-65 minutes",
       "exercises": [ { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "..." }, { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "..." }, { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set on last set)", "instructions": "..." }, { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)", "instructions": "..." }, { "name": "45-Degree Kickbacks (Cable/Band)", "details": "3 sets of 15-20 reps (per leg) | 45s rest", "instructions": "..." } ],
       "abFinisher": null, "cardio": null
   },
  { "day": 7, "title": "Rest Day", "duration": "Focus on recovery", "exercises": [], "abFinisher": null, "cardio": null }
];


// DOM Elements
const daySelector = document.getElementById("day-selector");
const workoutTitle = document.getElementById("workout-title");
const workoutDuration = document.getElementById("workout-duration");
const exerciseList = document.getElementById("exercise-list"); // Active list UL
const completedList = document.getElementById("completed-list"); // Completed list UL
const completedTitle = document.getElementById("completed-title"); // H3 title for completed section
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
const completionTitleEl = document.getElementById("completion-title"); // Corrected ID from HTML
const completionMessage = document.getElementById("completion-message");

// State
let progress = {}; // Stores { progressId: completedSets }
let activeTimer = null; // Interval ID for the timer
let restPeriodEndTime = null; // Timestamp when the current rest period ends
let currentExerciseCard = null; // Reference to the LI element with the active indicator

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- Core Utility Functions ---

function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress");
        progress = savedProgress ? JSON.parse(savedProgress) : {};
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateProgressBars(); // Update day button styles
        updateCompletedSectionVisibility(); // Show/hide completed title
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+)s\s*rest/);
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1;
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of \d+\s+minutes/i); // Handle cardio format
    if (match) return 1;
    // console.warn("Could not parse sets from details:", details, "- Defaulting to 1");
    return 1; // Default fallback
}

// --- Timer and Haptic Feedback ---

function triggerHapticFeedback() {
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
        try { navigator.vibrate(50); } catch (e) { /* Silently fail */ }
    }
}

function stopActiveTimer() {
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
        timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        removeActiveIndicator(); // Remove indicator when timer stops
    }
}

function startOnScreenTimer(durationSeconds) {
    stopActiveTimer(); // Ensure only one timer runs
    if (durationSeconds <= 0) { removeActiveIndicator(); return; } // No timer needed

    restPeriodEndTime = Date.now() + (durationSeconds * 1000);
    localStorage.setItem('restPeriodEndTime', restPeriodEndTime);

    let timeLeft = durationSeconds;
    timerDisplay.classList.remove('hidden');

    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            stopActiveTimer();
            triggerHapticFeedback();
        } else { timeLeft--; }
    };
    updateTimer(); // Show initial time immediately
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = localStorage.getItem('restPeriodEndTime');
    if (!endTime) { removeActiveIndicator(); return; }
    restPeriodEndTime = parseInt(endTime, 10);
    const remainingTime = Math.round((restPeriodEndTime - Date.now()) / 1000);
    if (remainingTime > 0) { startOnScreenTimer(remainingTime); }
    else { stopActiveTimer(); } // Clear expired timer
}

// --- UI Update Functions ---

function setActiveIndicator(cardElement) {
    removeActiveIndicator(); // Clear previous
    if (cardElement && cardElement.parentElement === exerciseList) { // Only on active items
        cardElement.classList.add('is-current-exercise');
        currentExerciseCard = cardElement;
    }
}
function removeActiveIndicator() {
    if (currentExerciseCard) {
        currentExerciseCard.classList.remove('is-current-exercise');
        currentExerciseCard = null;
    }
}

// Updates the 'X/Y' counter and 'sets-complete' class on a card
function updateSetCounter(card, progressId, totalSets) {
    if (!card) return;
    const completedSets = progress[progressId] || 0;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', completedSets >= totalSets);
    }
    // Keep 'fully-completed' class for logic (moving lists, day completion check)
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

// Updates the bottom progress bar on the day selector buttons
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData) return; // Safety check
        // Check if day has any trackable items
        const hasItems = (dayData.exercises && dayData.exercises.length > 0) || dayData.abFinisher || dayData.cardio;
        if (!hasItems) { btn.style.setProperty('--progress', '0%'); return; }

        let totalSetsForDay = 0, completedSetsForDay = 0;
        const allDayItems = [
             ...(dayData.exercises || []).map((ex, i) => ({ details: ex.details, id: `day${dayData.day}-exercise-${i}` })),
             ...(dayData.abFinisher ? [{ details: dayData.abFinisher.details, id: `day${dayData.day}-ab-0` }] : []),
             ...(dayData.cardio ? [{ details: dayData.cardio.details, id: `day${dayData.day}-cardio-0` }] : [])
         ];

         allDayItems.forEach(item => {
            const totalSetsForItem = parseSets(item.details);
             totalSetsForDay += totalSetsForItem;
             completedSetsForDay += Number(progress[item.id]) || 0;
         });

         const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
         btn.style.setProperty('--progress', `${isNaN(progressPercentage) ? 0 : progressPercentage}%`);
    });
}

// Shows/hides the "// COMPLETED" title
function updateCompletedSectionVisibility() {
    // Check if the completedList *actually* contains any LI elements
    const hasCompletedItems = completedList.querySelector('li') !== null;
    completedTitle.classList.toggle('hidden', !hasCompletedItems);
}

// --- List Item Movement ---

// Animate move TO completed list
function animateAndMoveToCompleted(card) {
    if (!card) return;
    card.classList.add('reordering');
    removeCardListeners(card); // Remove active listeners before animation
    if (currentExerciseCard === card) removeActiveIndicator(); // Clear indicator if it was active

    // Use transitionend for smoother removal/addition
    const handleTransitionEnd = () => {
        card.removeEventListener('transitionend', handleTransitionEnd);
        // Ensure it's not already moved by another rapid event
        if (card.parentElement !== completedList) {
            completedList.appendChild(card);
            addCardListeners(card, true); // Add listeners for completed state
            updateCompletedSectionVisibility(); // Show title if needed
        }
        card.classList.remove('reordering'); // Ensure class removed
    };
    card.addEventListener('transitionend', handleTransitionEnd);
    // Fallback timer
    setTimeout(() => { if (card.classList.contains('reordering')) handleTransitionEnd(); }, 350);
}

// Instantly move FROM completed list back to the correct place in active list
function moveFromCompletedToActive(card) {
    if (!card || card.parentElement !== completedList) return; // Ensure it's in completed list
    removeCardListeners(card); // Remove completed listeners

    // Find the correct section title in the active list
    const isExercise = card.classList.contains('exercise-item');
    const isAb = card.classList.contains('ab-finisher');
    let targetSectionTitle = null;
    const titles = exerciseList.querySelectorAll('.category-title');

    if (isExercise && titles[0]) targetSectionTitle = titles[0];
    else if (isAb && titles.length > 1) targetSectionTitle = titles[1];
    else if (titles.length > 2) targetSectionTitle = titles[2]; // Cardio
    else if (titles.length > 0) targetSectionTitle = titles[titles.length - 1]; // Fallback: last title
    else targetSectionTitle = null; // Fallback: no titles yet

    // Determine where to insert: After title, before the next title or first completed item
    let insertBeforeNode = null;
    if (targetSectionTitle) {
        insertBeforeNode = targetSectionTitle.nextElementSibling;
        while (insertBeforeNode && !insertBeforeNode.classList.contains('category-title') && !insertBeforeNode.classList.contains('fully-completed')) {
            insertBeforeNode = insertBeforeNode.nextElementSibling;
        }
    } else {
        insertBeforeNode = exerciseList.firstChild; // Insert at the beginning if no titles
    }

    exerciseList.insertBefore(card, insertBeforeNode); // insertBefore(node, null) appends
    addCardListeners(card, false); // Add back listeners for active state
    updateCompletedSectionVisibility(); // Hide completed title if list is now empty
}

// Moves an active item to the top of its section
function moveToTopOfSection(card) {
    if (!card || card.parentElement !== exerciseList) return;

    // Find the category title *immediately* preceding this card
    let precedingTitle = null;
    let currentElement = card.previousElementSibling;
    while (currentElement) {
        if (currentElement.classList.contains('category-title')) {
            precedingTitle = currentElement;
            break;
        }
        currentElement = currentElement.previousElementSibling;
    }

    // Determine the node to insert before (either the title's next sibling or the list's first child)
    const insertBeforeNode = precedingTitle ? precedingTitle.nextSibling : exerciseList.firstChild;

    // Only move if it's not already the first item after the title (or first overall)
    if (card !== insertBeforeNode) {
        exerciseList.insertBefore(card, insertBeforeNode);
        // Optional: Scroll into view smoothly
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return true; // Indicate that a move occurred
    }
    return false; // Indicate no move occurred
}

// --- Main Action Handler ---

function handleSeriesUpdate(card, progressId, totalSets, direction) {
    if (!card || !progressId || isNaN(totalSets)) {
        console.error("Invalid data passed to handleSeriesUpdate", { card, progressId, totalSets });
        return;
    }

    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;
    let newCompletedCount;
    let actionOccurred = false; // Did the count change?
    let movedToTop = false;    // Did it move to the top?

    // Determine new count
    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);
        if (newCompletedCount > currentCompleted) actionOccurred = true;
    } else { // 'decrement'
        newCompletedCount = Math.max(0, currentCompleted - 1);
        if (newCompletedCount < currentCompleted) actionOccurred = true;
    }

    // Only proceed if the count actually changed
    if (!actionOccurred) return;

    // --- Perform actions based on direction ---
    if (direction === 'increment') {
        triggerHapticFeedback();
        const detailsP = card.querySelector('.exercise-details p');
        const restTime = parseRestTime(detailsP ? detailsP.textContent : '');
        startOnScreenTimer(restTime);
        setActiveIndicator(card); // Set this card as active
        if (card.parentElement === exerciseList) { // Only move if in active list
            movedToTop = moveToTopOfSection(card); // Attempt to move
        }
    } else { // 'decrement'
        if (currentExerciseCard === card) stopActiveTimer(); // Stop timer if decrementing current
    }

    // --- Update State ---
    progress[progressId] = newCompletedCount;
    saveProgress(); // Save the new state to localStorage and update day buttons etc.

    // --- Update DOM (Move Lists / Visuals) ---
    const isNowFullyCompleted = newCompletedCount >= totalSets;

    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card); // Moves card, updates visuals+listeners inside
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        moveFromCompletedToActive(card); // Moves card, updates visuals+listeners inside
    } else {
        // If it didn't move lists, just update its visuals
        updateCardVisuals(card, progressId, totalSets);
    }

    // Check if day is complete only when an item *becomes* complete
    if (!wasFullyCompleted && isNowFullyCompleted) {
        checkDayCompletion();
    }
}


// --- Completion Celebration ---
function checkDayCompletion() { /* ... same ... */ }
function checkDayCompletion() {
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return;
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const dayData = workoutData[activeDayIndex];
    if (!dayData) return;
    const allItems = [
        ...(dayData.exercises || []).map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}` })),
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
                progress = {}; localStorage.removeItem("workoutSysProgress"); localStorage.removeItem('restPeriodEndTime'); location.reload();
            }, 5000);
        } else { setTimeout(() => completionOverlay.classList.add('hidden'), 4000); }
    }
}


// --- DOM Rendering & Listener Management ---

// Remove/Add Listeners (Robust version)
function removeCardListeners(card) { /* ... same ... */ }
function addCardListeners(card, isCompleted) { /* ... same ... */ }
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
    if (infoBtn && infoBtn._infoClickHandler) infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
    card._clickHandler=card._contextHandler=card._touchStartHandler=card._touchEndHandler=card._touchMoveHandler=null;
    if(infoBtn)infoBtn._infoClickHandler=null;
}
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId; if (!progressId) return;
    const totalSets = parseInt(card.dataset.totalSets, 10); if (isNaN(totalSets)) return;
    removeCardListeners(card); // Clear previous first

    // Click/Tap to Increment (only for active items)
    if (!isCompleted) {
        const clickHandler = (e) => { if (e.target.closest('.info-btn')) return; if (card.parentElement === exerciseList) handleSeriesUpdate(card, progressId, totalSets, 'increment'); };
        card.addEventListener('click', clickHandler); card._clickHandler = clickHandler;
    }

    // Decrement listeners (always add)
    const contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); };
    card.addEventListener('contextmenu', contextHandler); card._contextHandler = contextHandler;
    let longPressTimeoutId = null;
    const touchStartHandler = (e) => { if (e.target.closest('.info-btn')) return; clearTimeout(longPressTimeoutId); longPressTimeoutId = setTimeout(() => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); longPressTimeoutId = null; }, LONG_PRESS_DURATION); };
    const clearLongPress = () => { clearTimeout(longPressTimeoutId); longPressTimeoutId = null; };
    card.addEventListener('touchstart', touchStartHandler, { passive: false }); card.addEventListener('touchend', clearLongPress); card.addEventListener('touchcancel', clearLongPress); card.addEventListener('touchmove', clearLongPress);
    card._touchStartHandler = touchStartHandler; card._touchEndHandler = clearLongPress; card._touchMoveHandler = clearLongPress;

    // Info Button Listener (always add)
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            const dayNumMatch=progressId.match(/day(\d+)/); const typeMatch=progressId.match(/-([a-z]+)-/); const indexMatch=progressId.match(/-(\d+)$/);
            if (!dayNumMatch || !typeMatch || !indexMatch) { console.error("Could not parse progressId:", progressId); return; }
            const dayNum = parseInt(dayNumMatch[1], 10); const type = typeMatch[1]; const index = parseInt(indexMatch[1], 10);
            const dayData = workoutData.find(d => d.day === dayNum); let exerciseData;
             if (dayData) {
                 if (type === 'exercise' && dayData.exercises && index < dayData.exercises.length) exerciseData = dayData.exercises[index];
                 else if (type === 'ab' && dayData.abFinisher) exerciseData = dayData.abFinisher;
                 else if (type === 'cardio' && dayData.cardio) exerciseData = dayData.cardio;
             }
             if (exerciseData) { openInfoModal(exerciseData.name, exerciseData.instructions); }
             else { console.error("Could not find exercise data for modal:", progressId); }
        };
        if (infoBtn._infoClickHandler) infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
        infoBtn.addEventListener('click', infoClickHandler); infoBtn._infoClickHandler = infoClickHandler;
    }
}

// Creates the LI element with structure and initial state/listeners
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => { /* ... same ... */ }
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass; // e.g., "exercise-item"
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    li.innerHTML = `
        <span class="active-indicator"></span>
        <div class="exercise-details">
            <h3>${exercise.name}</h3>
            <p>${exercise.details}</p>
        </div>
        <span class="set-counter">0/${totalSets}</span>
        <button class="info-btn" aria-label="Open exercise info for ${exercise.name}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
        </button>`;

    const completedSets = progress[progressId] || 0;
    const isInitiallyCompleted = completedSets >= totalSets;

    addCardListeners(li, isInitiallyCompleted); // Add listeners based on initial state
    updateCardVisuals(li, progressId, totalSets); // Set initial visual state

    return li;
};


// Renders sections correctly into active/completed lists
const renderSection = (title, items, cssClass, idType, dayNum) => { /* ... same corrected logic ... */ }
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

     let hasActiveItems = false;
     const sectionItemElements = []; // Store elements before appending

     // Create elements first
     if (Array.isArray(items)) {
         items.forEach((item, i) => sectionItemElements.push(createExerciseItem(item, cssClass, idType, i, dayNum)));
     } else {
         sectionItemElements.push(createExerciseItem(items, cssClass, idType, 0, dayNum));
     }

     // Check if *any* item needs to go in the active list
     hasActiveItems = sectionItemElements.some(el => !el.classList.contains('fully-completed'));

    // Append title to active list ONLY if section has active items
    let sectionTitleElement = null;
    if (hasActiveItems) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement);
    }

    // Append items to the correct lists
    sectionItemElements.forEach(el => {
        if (el.classList.contains('fully-completed')) {
            completedList.appendChild(el);
        } else {
            // Append active items *after* their section title in #exercise-list
             exerciseList.appendChild(el); // Append at the end simplifies initial render
        }
    });
};


// Main function to render the workout
function renderWorkout(dayIndex) { /* ... same corrected logic ... */ }
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    exerciseList.innerHTML = ""; // Clear active list
    completedList.innerHTML = ""; // Clear completed list
    removeActiveIndicator();
    // REMOVED: lastAction = null;
    // REMOVED: updateUndoButtonState();

    if (dayData.day === 7 || (!dayData.exercises && !dayData.abFinisher && !dayData.cardio)) {
        workoutTitle.textContent = "7. Rest Day";
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none; padding-left: 0;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON RECOVERY.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }
    updateCompletedSectionVisibility();
}


function setActiveDay(dayIndex) { /* ... same corrected logic ... */ }
function setActiveDay(dayIndex) {
     if (dayIndex < 0 || dayIndex >= workoutData.length) { dayIndex = 0; }
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
    stopActiveTimer();
    renderWorkout(dayIndex);
}


// --- Modal Functions --- (Unchanged)
function openInfoModal(title, instructions) { /* ... same ... */ }
function closeInfoModal() { /* ... same ... */ }
function openResetModal() { /* ... same ... */ }
function closeResetModal() { /* ... same ... */ }
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


// --- App Initialization --- (Removed Undo listener init)
function init() {
    loadProgress();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button"); btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
        btn.appendChild(textSpan); btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index)); daySelector.appendChild(btn);
    });
    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {};
        // REMOVED: lastAction = null;
        saveProgress(); // Update UI
        const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
        stopActiveTimer();
        renderWorkout(parseInt(activeDayIndex, 10));
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    // REMOVED: Undo button listener

    const today = new Date().getDay();
    const initialDayIndex = today === 0 ? 6 : today - 1;
    setActiveDay(initialDayIndex); // Includes initial render
    checkTimerOnFocus();
    // REMOVED: updateUndoButtonState();
}

// --- Run ---
init();
