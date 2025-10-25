// --- Global Data & Configuration ---
const workoutData = [
  {"day":1,"title":"Chest","duration":"45-55 minutes","exercises":[{"name":"Incline Dumbbell Press","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Set bench...\n4. Lower slowly."},{"name":"Flat Machine Press","details":"3 sets of 10-15 reps | 75s rest","instructions":"1. Adjust seat...\n4. Return slowly."},{"name":"Weighted Dips (Chest Focus)","details":"3 sets to Failure | 75s rest","instructions":"1. Use bars...\n4. Press back up."},{"name":"Pec-Deck Machine","details":"3 sets of 12-15+ reps | 60s rest (Drop set)","instructions":"1. Adjust seat...\n3. Slowly return."},{"name":"Cable Crossover (Low to High)","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Set pulleys low...\n3. Bring hands up."}],"abFinisher":{"name":"Cable Crunches","details":"3 sets of 15-20 reps | 45s rest","instructions":"1. Kneel...\n3. Focus on abs."},"cardio":{"name":"15 min cardio","details":"1 set of 15 minutes","instructions":"StairMaster or incline treadmill."}},
  {"day":2,"title":"Back","duration":"50-60 minutes","exercises":[{"name":"Weighted Pull-ups / Lat Pulldowns","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Grip...\n4. Lower slowly."},{"name":"Barbell Row","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Hinge...\n4. Lower control."},{"name":"Chest-Supported T-Bar Row","details":"3 sets of 10-15 reps | 75s rest","instructions":"1. Lie down...\n3. Squeeze peak."},{"name":"Straight-Arm Pulldown","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Stand facing...\n3. Use lats."},{"name":"Hyperextensions","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Position...\n3. Squeeze glutes/back."}],"abFinisher":null,"cardio":null},
  {"day":3,"title":"Quads & Calves","duration":"60-75 minutes","exercises":[{"name":"Barbell Back Squats","details":"4 sets of 8-12 reps | 120s rest","instructions":"1. Bar upper back...\n4. Drive heels."},{"name":"Leg Press","details":"4 sets of 10-15 reps | 90s rest","instructions":"1. Feet shoulder-width...\n3. Don't lock knees."},{"name":"Bulgarian Split Squats","details":"3 sets of 10-12 reps (per leg) | 75s rest","instructions":"1. Rear foot on bench...\n3. Drive front heel."},{"name":"Leg Extensions","details":"3 sets of 15-20+ reps | 60s rest (Drop set)","instructions":"1. Squeeze quads 2s...\n2. Control lower."},{"name":"Standing Calf Raises","details":"5 sets of 10-15 reps | 45s rest","instructions":"1. Deep stretch...\n2. Press big toes."}],"abFinisher":null,"cardio":null},
  {"day":4,"title":"Shoulders & Chest","duration":"60-70 minutes","exercises":[{"name":"Seated Dumbbell Press","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Sit back support...\n3. Lower slowly."},{"name":"Cable Lateral Raise","details":"4 sets of 12-15 reps | 60s rest","instructions":"1. Stand side low cable...\n3. Control negative."},{"name":"Reverse Pec-Deck","details":"4 sets of 15-20 reps | 60s rest","instructions":"1. Sit facing...\n2. Squeeze rear delts."},{"name":"Flat Dumbbell Press","details":"3 sets of 8-12 reps | 75s rest","instructions":"1. Lie flat...\n3. Lower slowly."},{"name":"Cable Flys","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Pulleys chest height...\n3. Squeeze chest."}],"abFinisher":{"name":"Decline Reverse Crunches","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Lie decline...\n3. Lift hips."},"cardio":null},
  {"day":5,"title":"Arms","duration":"35-45 minutes","exercises":[{"name":"Close-Grip Bench Press","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Narrow grip...\n3. Focus triceps."},{"name":"Barbell Curls","details":"4 sets of 8-12 reps | 75s rest","instructions":"1. Elbows pinned...\n3. Squeeze biceps."},{"name":"Overhead Rope Extension","details":"3 sets of 10-15 reps | 60s rest","instructions":"1. High cable rope...\n3. Spread rope."},{"name":"Incline Dumbbell Curls","details":"3 sets of 10-15 reps | 60s rest","instructions":"1. Sit incline...\n3. Curl & rotate."},{"name":"Superset: Rope Pushdowns & Hammer Curls","details":"3 sets of 12-15 reps each | 60s rest","instructions":"Pushdowns: Elbows pinned.\nHammer: Low pulley rope."}],"abFinisher":{"name":"Landmine Twists","details":"3 sets of 10-12 reps (per side) | 60s rest","instructions":"1. Bar in corner...\n2. Rotate core."},"cardio":{"name":"20 min cardio","details":"1 set of 20 minutes","instructions":"Bike or elliptical."}},
  {"day":6,"title":"Hamstrings & Glutes","duration":"55-65 minutes","exercises":[{"name":"Romanian Deadlifts (RDLs)","details":"4 sets of 8-12 reps | 120s rest","instructions":"1. Hinge hips...\n3. Drive hips forward."},{"name":"Barbell Hip Thrusts","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Upper back on bench...\n3. Chin tucked."},{"name":"Seated/Lying Leg Curls","details":"4 sets of 12-15 reps | 75s rest (Drop set)","instructions":"1. Point toes...\n2. Control negative."},{"name":"Hip Abduction Machine","details":"4 sets of 15-20+ reps | 60s rest (Drop set x2)","instructions":"1. Lean forward...\n2. Control return."},{"name":"45-Degree Kickbacks","details":"3 sets of 15-20 reps (per leg) | 45s rest","instructions":"1. Kick back/out 45deg...\n2. Squeeze upper glute."}],"abFinisher":null,"cardio":null},
  {"day":7,"title":"Rest Day","duration":"Focus on recovery","exercises":[],"abFinisher":null,"cardio":null}
];
const LONG_PRESS_DURATION = 500; // ms for long press/right-click action
const motivationalMessages = [ /* ... messages ... */ ];
const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- DOM Element References --- Cache frequently used elements
const DOMElements = {
    daySelector: document.getElementById("day-selector"),
    workoutTitle: document.getElementById("workout-title"),
    workoutDuration: document.getElementById("workout-duration"),
    exerciseList: document.getElementById("exercise-list"), // Active list UL
    completedList: document.getElementById("completed-list"), // Completed list UL
    completedTitle: document.getElementById("completed-title"), // H3 title
    resetButton: document.getElementById("reset-button"),
    timerDisplay: document.getElementById('timer-display'),
    // Modals & Controls
    infoModalOverlay: document.getElementById("info-modal-overlay"),
    infoModalCloseBtn: document.getElementById("info-modal-close-btn"),
    infoModalTitle: document.getElementById("info-modal-title"),
    infoModalInstructions: document.getElementById("info-modal-instructions"),
    resetModalOverlay: document.getElementById("reset-modal-overlay"),
    confirmResetBtn: document.getElementById("confirm-reset-btn"),
    cancelResetBtn: document.getElementById("cancel-reset-btn"),
    completionOverlay: document.getElementById("completion-overlay"),
    completionTitleEl: document.getElementById("completion-card")?.querySelector("h2"), // More specific query
    completionMessage: document.getElementById("completion-message")
};

// --- State Variables ---
let progress = {}; // { progressId: completedSets }
let activeTimerId = null; // Use ID for clarity
let restPeriodEndTime = null;
let currentExerciseCard = null; // Reference to LI with active indicator

// --- Utility Functions ---

function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress");
        progress = savedProgress ? JSON.parse(savedProgress) : {};
        // Ensure progress values are numbers
        for (const key in progress) {
            progress[key] = Number(progress[key]) || 0;
        }
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateUI(); // Central UI update function
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details = '') { // Default empty string
    const match = details.match(/\|\s*(\d+)s\s*rest/);
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details = '') { // Default empty string
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of \d+\s+minutes/i); // Handle cardio
    if (match) return 1;
    return 1; // Default fallback
}

// --- Timer and Haptic Feedback ---

function triggerHapticFeedback() { /* ... same ... */ }
function stopActiveTimer() { /* ... same ... */ }
function startOnScreenTimer(durationSeconds) { /* ... same ... */ }
function checkTimerOnFocus() { /* ... same ... */ }
function triggerHapticFeedback() {
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
        try { navigator.vibrate(50); } catch (e) {}
    }
}
function stopActiveTimer() {
    if (activeTimerId) {
        clearInterval(activeTimerId);
        activeTimerId = null;
        DOMElements.timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        removeActiveIndicator();
    }
}
function startOnScreenTimer(durationSeconds) {
    stopActiveTimer();
    if (durationSeconds <= 0) { removeActiveIndicator(); return; }
    restPeriodEndTime = Date.now() + (durationSeconds * 1000);
    localStorage.setItem('restPeriodEndTime', restPeriodEndTime);
    let timeLeft = durationSeconds;
    DOMElements.timerDisplay.classList.remove('hidden');
    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        DOMElements.timerDisplay.textContent = `${minutes}:${seconds}`;
        if (timeLeft <= 0) { stopActiveTimer(); triggerHapticFeedback(); }
        else { timeLeft--; }
    };
    updateTimer();
    activeTimerId = setInterval(updateTimer, 1000);
}
function checkTimerOnFocus() {
    const endTime = localStorage.getItem('restPeriodEndTime');
    if (!endTime) { removeActiveIndicator(); return; }
    restPeriodEndTime = parseInt(endTime, 10);
    if (isNaN(restPeriodEndTime)) { localStorage.removeItem('restPeriodEndTime'); removeActiveIndicator(); return; }
    const remainingTime = Math.round((restPeriodEndTime - Date.now()) / 1000);
    if (remainingTime > 0) { startOnScreenTimer(remainingTime); }
    else { stopActiveTimer(); }
}


// --- UI Update Functions ---

function setActiveIndicator(cardElement) { /* ... same ... */ }
function removeActiveIndicator() { /* ... same ... */ }
function setActiveIndicator(cardElement) {
    removeActiveIndicator(); // Clear previous first
    if (cardElement && cardElement.parentElement === DOMElements.exerciseList) {
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


// Updates ONLY the 'X/Y' counter and related classes on a specific card
function updateSetCounterVisuals(card, progressId, totalSets) {
    if (!card) return;
    const completedSets = progress[progressId] || 0;
    const isComplete = completedSets >= totalSets;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', isComplete);
    }
    card.classList.toggle('fully-completed', isComplete); // Maintain for logic
}

// Updates the bottom progress bar on the day selector buttons
function updateProgressBars() { /* ... same robust version ... */ }
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData) { btn.style.setProperty('--progress', '0%'); return; }
        const hasItems = (dayData.exercises && dayData.exercises.length > 0) || dayData.abFinisher || dayData.cardio;
        if (!hasItems) { btn.style.setProperty('--progress', '0%'); return; }
        let totalSetsForDay = 0, completedSetsForDay = 0;
        const allDayItems = [
             ...(dayData.exercises || []).map((ex, i) => ({ details: ex.details, id: `day${dayData.day}-exercise-${i}` })),
             ...(dayData.abFinisher ? [{ details: dayData.abFinisher.details, id: `day${dayData.day}-ab-0` }] : []),
             ...(dayData.cardio ? [{ details: dayData.cardio.details, id: `day${dayData.day}-cardio-0` }] : [])
         ];
         allDayItems.forEach(item => { const totalSetsForItem = parseSets(item.details); totalSetsForDay += totalSetsForItem; completedSetsForDay += Number(progress[item.id]) || 0; });
         const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
         btn.style.setProperty('--progress', `${isNaN(progressPercentage) ? 0 : progressPercentage}%`);
    });
}


// Shows/hides the "// COMPLETED" title
function updateCompletedSectionVisibility() {
    const hasCompletedItems = DOMElements.completedList.querySelector('li') !== null;
    DOMElements.completedTitle.classList.toggle('hidden', !hasCompletedItems);
}

// Central function to update all relevant UI parts after a state change
function updateUI() {
    updateProgressBars();
    updateCompletedSectionVisibility();
    // No need to update individual cards here, that happens in handleSeriesUpdate or renderWorkout
}

// --- DOM Manipulation & List Management ---

// Finds the correct insertion point (node to insert *before*) for moving an item back to active
function findInsertionPoint(cardToMoveBack) {
    const isExercise = cardToMoveBack.classList.contains('exercise-item');
    const isAb = cardToMoveBack.classList.contains('ab-finisher');
    let targetSectionTitle = null;
    const titles = DOMElements.exerciseList.querySelectorAll('.category-title');

    // Find the H3 title element for the card's section
    if (isExercise && titles[0]) targetSectionTitle = titles[0];
    else if (isAb && titles.length > 1) targetSectionTitle = titles[1];
    else if (titles.length > 2) targetSectionTitle = titles[2]; // Cardio assumed third
    else if (titles.length > 0) targetSectionTitle = titles[titles.length - 1]; // Fallback: last title if structure is different
    // If no titles found, targetSectionTitle remains null

    let insertBeforeNode = null;
    if (targetSectionTitle) {
        // Find the first node *after* the title that is either the next title or a completed item
        insertBeforeNode = targetSectionTitle.nextElementSibling;
        while (insertBeforeNode && !insertBeforeNode.classList.contains('category-title') && !insertBeforeNode.classList.contains('fully-completed')) {
            insertBeforeNode = insertBeforeNode.nextElementSibling;
        }
    } else {
        // If no relevant title found, insert before the first completed item in the whole list
        insertBeforeNode = DOMElements.exerciseList.querySelector('.fully-completed');
        if (!insertBeforeNode) { // If no completed items, insert at the end (null)
            insertBeforeNode = null;
        }
    }
    return insertBeforeNode; // This can be null, which means appendChild
}


function animateAndMoveToCompleted(card) {
    if (!card || card.parentElement !== DOMElements.exerciseList) return;
    removeCardListeners(card); // Remove active listeners
    if (currentExerciseCard === card) removeActiveIndicator();
    card.classList.add('reordering');

    const handleTransitionEnd = () => {
        card.removeEventListener('transitionend', handleTransitionEnd);
        if (card.parentElement !== DOMElements.completedList) {
            DOMElements.completedList.appendChild(card);
            addCardListeners(card, true); // Add listeners for completed state
            updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10));
            updateCompletedSectionVisibility();
        }
        card.classList.remove('reordering');
    };
    card.addEventListener('transitionend', handleTransitionEnd);
    setTimeout(() => { if (card.classList.contains('reordering')) handleTransitionEnd(); }, 350); // Fallback
}


function moveFromCompletedToActive(card) {
    if (!card || card.parentElement !== DOMElements.completedList) return;
    removeCardListeners(card); // Remove completed listeners

    const insertBeforeNode = findInsertionPoint(card); // Find where it should go
    DOMElements.exerciseList.insertBefore(card, insertBeforeNode); // Insert/Append

    addCardListeners(card, false); // Add back listeners for active state
    updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10));
    updateCompletedSectionVisibility(); // Check if completed list is now empty
}


function moveToTopOfSection(card) {
    if (!card || card.parentElement !== DOMElements.exerciseList) return false;
    let precedingTitle = null; let currentElement = card.previousElementSibling;
    while (currentElement) { if (currentElement.classList.contains('category-title')) { precedingTitle = currentElement; break; } currentElement = currentElement.previousElementSibling; }
    const insertBeforeNode = precedingTitle ? precedingTitle.nextSibling : DOMElements.exerciseList.firstChild;
    if (card !== insertBeforeNode) { DOMElements.exerciseList.insertBefore(card, insertBeforeNode); card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return true; }
    return false;
}


// --- Main Action Handler ---

function handleSeriesUpdate(card, progressId, totalSets, direction) {
    if (!card || !progressId || isNaN(totalSets)) return;

    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;
    let newCompletedCount;
    let actionOccurred = false;

    // 1. Determine New Count
    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);
        if (newCompletedCount > currentCompleted) actionOccurred = true;
    } else { // 'decrement'
        newCompletedCount = Math.max(0, currentCompleted - 1);
        if (newCompletedCount < currentCompleted) actionOccurred = true;
    }

    if (!actionOccurred) return; // Exit if count didn't change

    // 2. Update State FIRST
    progress[progressId] = newCompletedCount;
    saveProgress(); // Save the new state

    // 3. Perform Side Effects (Timer, Indicator, Haptics, MoveToTop)
    let movedToTop = false;
    if (direction === 'increment') {
        triggerHapticFeedback();
        const detailsP = card.querySelector('.exercise-details p');
        const restTime = parseRestTime(detailsP ? detailsP.textContent : '');
        setActiveIndicator(card); // Set indicator BEFORE timer
        startOnScreenTimer(restTime);
        if (card.parentElement === DOMElements.exerciseList) { // Only move active items
            movedToTop = moveToTopOfSection(card);
        }
    } else { // 'decrement'
        if (currentExerciseCard === card) stopActiveTimer(); // Stop timer if decrementing current active
    }

    // 4. Update DOM (Move Lists / Visuals) based on OLD vs NEW state
    const isNowFullyCompleted = newCompletedCount >= totalSets;
    const needsMoveToCompleted = !wasFullyCompleted && isNowFullyCompleted;
    const needsMoveToActive = wasFullyCompleted && !isNowFullyCompleted;

    if (needsMoveToCompleted) {
        animateAndMoveToCompleted(card); // Moves card, re-adds listeners for completed state
    } else if (needsMoveToActive) {
        moveFromCompletedToActive(card); // Moves card, re-adds listeners for active state
    } else {
        // If it didn't move lists, just update its visuals
        updateSetCounterVisuals(card, progressId, totalSets);
    }

    // 5. Check Day Completion only if an item just became complete
    if (needsMoveToCompleted) {
        checkDayCompletion();
    }
}


// --- Completion Celebration ---
function checkDayCompletion() { /* ... same robust version ... */ }
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
         // Ensure completionTitleEl is correctly referenced
        const titleElement = DOMElements.completionOverlay.querySelector("h2"); // More direct query
        if (titleElement) titleElement.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE";

        DOMElements.completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S... PREPARE FOR NEXT CYCLE." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        DOMElements.completionOverlay.classList.remove('hidden');
        if (isWeekComplete) {
            setTimeout(() => {
                progress = {}; localStorage.removeItem("workoutSysProgress"); localStorage.removeItem('restPeriodEndTime'); location.reload();
            }, 5000);
        } else { setTimeout(() => DOMElements.completionOverlay.classList.add('hidden'), 4000); }
    }
}


// --- DOM Rendering & Listener Management ---

// Attaches/Removes necessary listeners based on completion state
function addOrRemoveListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    if (!progressId) return;
    const totalSets = parseInt(card.dataset.totalSets, 10);
    if (isNaN(totalSets)) return;

    // --- Always Remove Existing Listeners First ---
    // Retrieve stored handlers or use anonymous function wrappers if not stored
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

    // --- Add Listeners Based on Current State ---

    // Click/Tap to Increment (Only for Active Items)
    if (!isCompleted) {
        const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            handleSeriesUpdate(card, progressId, totalSets, 'increment');
        };
        card.addEventListener('click', clickHandler);
        card._clickHandler = clickHandler; // Store reference
    } else {
        card._clickHandler = null; // Ensure no stale reference
    }

    // Decrement listeners (Always add, logic inside handler decides action)
    const contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); };
    card.addEventListener('contextmenu', contextHandler);
    card._contextHandler = contextHandler;

    let longPressTimeoutId = null; // Use local variable for timeout
    const touchStartHandler = (e) => {
        if (e.target.closest('.info-btn')) return;
        clearTimeout(longPressTimeoutId); // Clear previous timer
        longPressTimeoutId = setTimeout(() => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); longPressTimeoutId = null; }, LONG_PRESS_DURATION);
    };
    const clearLongPress = () => { clearTimeout(longPressTimeoutId); longPressTimeoutId = null; };
    card.addEventListener('touchstart', touchStartHandler, { passive: false });
    card.addEventListener('touchend', clearLongPress);
    card.addEventListener('touchcancel', clearLongPress);
    card.addEventListener('touchmove', clearLongPress);
    card._touchStartHandler = touchStartHandler; card._touchEndHandler = clearLongPress; card._touchMoveHandler = clearLongPress;

    // Info Button Listener (Always add)
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            // Fetch exercise data robustly
             const dayNumMatch=progressId.match(/day(\d+)/); const typeMatch=progressId.match(/-([a-z]+)-/); const indexMatch=progressId.match(/-(\d+)$/);
             if (!dayNumMatch || !typeMatch || !indexMatch) { console.error("Could not parse progressId:", progressId); return; }
             const dayNum = parseInt(dayNumMatch[1], 10); const type = typeMatch[1]; const index = parseInt(indexMatch[1], 10);
             const dayData = workoutData.find(d => d.day === dayNum); let exerciseData;
             if (dayData) { /* ... find exerciseData ... */ }
              if (dayData) {
                 if (type === 'exercise' && dayData.exercises && index < dayData.exercises.length) exerciseData = dayData.exercises[index];
                 else if (type === 'ab' && dayData.abFinisher) exerciseData = dayData.abFinisher;
                 else if (type === 'cardio' && dayData.cardio) exerciseData = dayData.cardio;
             }
             if (exerciseData) { openInfoModal(exerciseData.name, exerciseData.instructions); }
             else { console.error("Could not find exercise data for modal:", progressId); }
        };
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._infoClickHandler = infoClickHandler; // Store reference
    }
}

// Creates the LI element with structure BUT does NOT add listeners initially
const createExerciseItemElement = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    if (!progressId || isNaN(totalSets)) return null; // Validate before creating

    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    li.innerHTML = `
        <span class="active-indicator"></span>
        <div class="exercise-details">
            <h3>${exercise.name || 'Unnamed'}</h3>
            <p>${exercise.details || ''}</p>
        </div>
        <span class="set-counter">0/${totalSets}</span>
        <button class="info-btn" aria-label="Info for ${exercise.name || ''}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </button>`;

    // Set initial visual state based on progress
    updateSetCounterVisuals(li, progressId, totalSets);
    return li;
};

// Renders sections: Creates elements, appends titles/items to correct lists, THEN adds listeners
function renderSection(title, items, cssClass, idType, dayNum) {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    let sectionHasActiveItems = false;
    const sectionElements = []; // Store created LI elements

    // 1. Create all LI elements for this section
    const itemsArray = Array.isArray(items) ? items : [items];
    itemsArray.forEach((item, i) => {
        const element = createExerciseItemElement(item, cssClass, idType, i, dayNum);
        if (element) {
            sectionElements.push(element);
            if (!element.classList.contains('fully-completed')) {
                sectionHasActiveItems = true;
            }
        }
    });

    // 2. Add category title only if needed
    if (sectionHasActiveItems) {
        const sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        DOMElements.exerciseList.appendChild(sectionTitleElement);
    }

    // 3. Append elements to appropriate lists and add listeners
    sectionElements.forEach(el => {
        const isCompleted = el.classList.contains('fully-completed');
        if (isCompleted) {
            DOMElements.completedList.appendChild(el);
        } else {
            DOMElements.exerciseList.appendChild(el); // Append to active list
        }
        addOrRemoveListeners(el, isCompleted); // Add listeners AFTER appending
    });
}


// Main function to render the workout for a given day
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    DOMElements.workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    DOMElements.workoutDuration.textContent = `// EST. DURATION: ${dayData.duration ? dayData.duration.toUpperCase() : 'N/A'}`;

    // --- Clear previous content and listeners ---
    // Remove listeners from existing items before clearing innerHTML
    [...DOMElements.exerciseList.querySelectorAll('li')].forEach(removeCardListeners);
    [...DOMElements.completedList.querySelectorAll('li')].forEach(removeCardListeners);
    DOMElements.exerciseList.innerHTML = "";
    DOMElements.completedList.innerHTML = "";
    removeActiveIndicator(); // Ensure indicator is cleared

    // --- Render new content ---
    if (dayData.day === 7 || (!dayData.exercises?.length && !dayData.abFinisher && !dayData.cardio)) {
        DOMElements.workoutTitle.textContent = "7. Rest Day";
        DOMElements.exerciseList.innerHTML = '<li class="exercise-item rest-day-message"><div class="exercise-details"><h3>SYSTEM IN STANDBY</h3><p>FOCUS ON RECOVERY.</p></div></li>';
        // Add specific style for rest day message if needed
        const restMsg = DOMElements.exerciseList.querySelector('.rest-day-message');
        if (restMsg) {
             restMsg.style.justifyContent = 'center';
             restMsg.style.cursor = 'default';
             restMsg.style.opacity = '0.8';
             restMsg.style.borderBottom = 'none';
             restMsg.style.paddingLeft = '0';
        }

    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }

    updateCompletedSectionVisibility(); // Update visibility after rendering
}


function setActiveDay(dayIndex) {
     if (dayIndex < 0 || dayIndex >= workoutData.length) { dayIndex = 0; }
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
    stopActiveTimer(); // Clear timer and indicator
    renderWorkout(dayIndex); // Render the newly selected day
}

// --- Modal Functions --- (Unchanged)
function openInfoModal(title, instructions) { /* ... same ... */ }
function closeInfoModal() { /* ... same ... */ }
function openResetModal() { /* ... same ... */ }
function closeResetModal() { /* ... same ... */ }
function openInfoModal(title, instructions) {
    DOMElements.infoModalOverlay.classList.remove("hidden");
    DOMElements.infoModalOverlay.setAttribute('aria-hidden', 'false');
    DOMElements.infoModalTitle.textContent = title ? title.toUpperCase() : 'Instructions';
    DOMElements.infoModalInstructions.innerHTML = ''; // Clear previous
    const p = document.createElement('p');
    p.textContent = instructions || 'No instructions provided.'; // Use textContent
    DOMElements.infoModalInstructions.appendChild(p);
}
function closeInfoModal() {
    DOMElements.infoModalOverlay.classList.add("hidden");
    DOMElements.infoModalOverlay.setAttribute('aria-hidden', 'true');
}
function openResetModal() {
    DOMElements.resetModalOverlay.classList.remove("hidden");
    DOMElements.resetModalOverlay.setAttribute('aria-hidden', 'false');
}
function closeResetModal() {
    DOMElements.resetModalOverlay.classList.add("hidden");
    DOMElements.resetModalOverlay.setAttribute('aria-hidden', 'true');
}


// --- App Initialization ---
function init() {
    // Basic element check
    if (!DOMElements.exerciseList || !DOMElements.completedList || !DOMElements.daySelector || !DOMElements.resetButton) {
        console.error("Essential DOM elements not found. Aborting initialization.");
        document.body.innerHTML = '<p style="color: red; padding: 20px;">Error: Could not initialize app. Essential elements missing.</p>';
        return;
    }

    loadProgress(); // Load saved state first
    checkTimerOnFocus(); // Check if a timer was running

    // Create Day Buttons
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button"); btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
        btn.appendChild(textSpan); btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        DOMElements.daySelector.appendChild(btn);
    });

    // Attach Reset Button Logic
    DOMElements.resetButton.addEventListener("click", openResetModal);
    DOMElements.confirmResetBtn.addEventListener("click", () => {
        progress = {};
        saveProgress(); // Save empty progress & update UI
        const activeDayIndex = parseInt(document.querySelector(".day-btn.active")?.dataset.day || '0', 10);
        stopActiveTimer(); // Stop timer
        renderWorkout(activeDayIndex); // Re-render the current day
        closeResetModal();
    });
    DOMElements.cancelResetBtn.addEventListener("click", closeResetModal);

    // Attach Modal Closing Logic
    DOMElements.infoModalCloseBtn.addEventListener("click", closeInfoModal);
    DOMElements.infoModalOverlay.addEventListener("click", e => { if (e.target === DOMElements.infoModalOverlay) closeInfoModal(); });
    DOMElements.resetModalOverlay.addEventListener("click", e => { if (e.target === DOMElements.resetModalOverlay) closeResetModal(); });

    // Set Initial Day and Render
    const today = new Date().getDay(); // 0 = Sunday
    const initialDayIndex = today === 0 ? 6 : today - 1;
    setActiveDay(initialDayIndex >= 0 && initialDayIndex < workoutData.length ? initialDayIndex : 0);

    // Listener for visibility change (resuming timer)
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });
}

// --- Run ---
// Use DOMContentLoaded to ensure elements exist before running init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // DOM is already ready
}
