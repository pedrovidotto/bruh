// Ensure workoutData is defined globally or loaded appropriately
const workoutData = [
  {
    "day": 1, "title": "Chest", "duration": "45-55 minutes",
    "exercises": [ { "name": "Incline Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Set bench to a 30-45 degree angle.\n2. Lie back with dumbbells on your thighs, then kick them up to your shoulders.\n3. Press the weights up until your arms are extended, but not locked out.\n4. Lower the dumbbells slowly and controlled back to the sides of your chest." }, { "name": "Flat Machine Press", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Adjust the seat so the handles align with your mid-chest.\n2. Press forward, focusing on squeezing your chest muscles together.\n3. Stop just short of locking your elbows.\n4. Return slowly to the starting position, feeling a stretch in your chest." }, { "name": "Weighted Dips (Chest Focus)", "details": "3 sets to Failure | 75s rest", "instructions": "1. Use parallel bars and add weight if possible.\n2. Lean your torso forward significantly as you perform the movement.\n3. Lower yourself until your shoulders are slightly below your elbows.\n4. Press back up, focusing on your chest." }, { "name": "Pec-Deck Machine", "details": "3 sets of 12-15+ reps | 60s rest (Drop set on last set)", "instructions": "1. Adjust the seat so your shoulders are level with the handles.\n2. Press the pads together in a controlled arc, squeezing your chest at the peak.\n3. Slowly return to the starting position, allowing a good stretch." }, { "name": "Cable Crossover (Low to High)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to the lowest position.\n2. Grab the handles, step forward, and stand with a slight bend in your torso.\n3. Bring your hands up and together in an arc, squeezing your upper chest at the top." } ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "1. Kneel facing a high pulley with a rope attachment.\n2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.\n3. Focus on contracting your abs, not pulling with your arms." },
    "cardio": { "name": "15 minutes of moderate-intensity cardio", "details": "1 set of 15 minutes", "instructions": "Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation." }
  },
  {
    "day": 2, "title": "Back", "duration": "50-60 minutes",
    "exercises": [ { "name": "Weighted Pull-ups (or Lat Pulldowns)", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar slightly wider than shoulder-width.\n2. Drive your elbows down and back to pull your chest towards the bar.\n3. Squeeze your back muscles at the top.\n4. Lower yourself slowly and fully extend your arms at the bottom." }, { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Hinge at your hips, keeping your back straight.\n2. Pull the barbell towards your lower stomach, not your chest.\n3. Squeeze your shoulder blades together at the top.\n4. Lower the bar under control." }, { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Lie face down on the pad.\n2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.\n3. Squeeze hard at the peak of the contraction." }, { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Stand facing a high pulley with a straight bar.\n2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.\n3. Focus on using your lats, not your triceps." }, { "name": "Hyperextensions", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Position yourself on a hyperextension bench.\n2. Lower your torso until you feel a stretch in your hamstrings.\n3. Raise back up by squeezing your glutes and lower back." } ],
    "abFinisher": null, "cardio": null
  },
   {
      "day": 3, "title": "Quads & Calves", "duration": "60-75 minutes",
      "exercises": [ { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Place the bar on your upper back, not your neck.\n2. Keep your chest up and back straight.\n3. Squat down until your hips are at or below parallel.\n4. Drive up through your heels." }, { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "1. Place your feet shoulder-width apart on the platform.\n2. Lower the weight until your knees are near a 90-degree angle.\n3. Press up, but do not lock your knees." }, { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "1. Place the top of your rear foot on a bench.\n2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.\n3. Drive up through your front heel." }, { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set on last set)", "instructions": "1. Squeeze your quads hard for 2 seconds at the top of each rep.\n2. Control the weight as you lower it." }, { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "1. Get a deep stretch at the bottom of the movement.\n2. Press up onto your big toes and pause at the top." } ],
      "abFinisher": null, "cardio": null
  },
   {
      "day": 4, "title": "Shoulders & Chest", "duration": "60-70 minutes",
      "exercises": [ { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Sit on a bench with back support.\n2. Press the dumbbells overhead until your arms are almost fully extended.\n3. Lower the dumbbells slowly to shoulder height." }, { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "1. Stand side-on to a low cable pulley.\n2. Raise your arm out to the side, leading with your elbow.\n3. Keep a slight bend in your arm. Control the negative." }, { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "1. Sit facing the machine with your chest against the pad.\n2. Drive your arms back and out in a wide arc, squeezing your rear delts." }, { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "1. Lie flat on the bench.\n2. Press the dumbbells up until your arms are extended but not locked.\n3. Lower slowly, feeling a stretch in your chest." }, { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to chest height.\n2. Step forward and bring the handles together in a wide arc.\n3. Squeeze your chest hard at the peak of the movement." } ],
      "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Lie on a decline bench, holding the top for support.\n2. Bring your knees toward your chest.\n3. Focus on lifting your hips off the bench using your lower abs." }, "cardio": null
   },
   {
      "day": 5, "title": "Arms (Biceps & Triceps)", "duration": "35-45 minutes",
      "exercises": [ { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar narrower than shoulder-width.\n2. Keep your elbows tucked in close to your body as you lower the bar.\n3. Press up, focusing on your triceps." }, { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "1. Keep your elbows pinned to your sides.\n2. Curl the weight up without using momentum or swinging your body.\n3. Squeeze your biceps at the top and lower with control." }, { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Use a high cable pulley with a rope attachment.\n2. Extend your arms fully overhead, feeling a stretch in your triceps.\n3. Spread the rope apart at the top." }, { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Sit back on an incline bench.\n2. Let your arms hang straight down to stretch the biceps.\n3. Curl the dumbbells up, rotating your palms to face you." }, { "name": "Superset: Rope Pushdowns & Cable Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after superset", "instructions": "Pushdowns: Keep elbows pinned and spread the rope at the bottom.\nHammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip." } ],
      "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "1. Place one end of a barbell in a landmine attachment or corner.\n2. Hold the other end with both hands and rotate from your core, pivoting your feet." },
      "cardio": { "name": "20 minutes of moderate-intensity cardio", "details": "1 set of 20 minutes", "instructions": "Choose a machine like the stationary bike or elliptical." }
   },
   {
       "day": 6, "title": "Hamstrings & Glutes", "duration": "55-65 minutes",
       "exercises": [ { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Hinge at your hips, keeping your back flat and legs almost straight.\n2. Lower the bar until you feel a deep stretch in your hamstrings.\n3. Drive your hips forward to return to the start." }, { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Rest your upper back on a bench.\n2. Drive your hips up powerfully, squeezing your glutes hard at the top.\n3. Keep your chin tucked." }, { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set on last set)", "instructions": "1. Point your toes to better engage the hamstrings.\n2. Squeeze at the peak of the curl and control the negative." }, { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)", "instructions": "1. Lean your torso forward to better target the upper glute shelf.\n2. Control the movement, especially on the way back in." }, { "name": "45-Degree Kickbacks (Cable/Band)", "details": "3 sets of 15-20 reps (per leg) | 45s rest", "instructions": "1. Kick your leg back and out at a 45-degree angle.\n2. Squeeze your upper glute for a full second at the peak of the movement." } ],
       "abFinisher": null, "cardio": null
   },
  { "day": 7, "title": "Rest Day", "duration": "Focus on recovery", "exercises": [], "abFinisher": null, "cardio": null }
];


// --- DOM Element References ---
const DOMElements = {
    daySelector: document.getElementById("day-selector"),
    workoutTitle: document.getElementById("workout-title"),
    workoutDuration: document.getElementById("workout-duration"),
    exerciseList: document.getElementById("exercise-list"), // Active list UL
    completedList: document.getElementById("completed-list"), // Completed list UL
    completedTitle: document.getElementById("completed-title"), // H3 title
    resetButton: document.getElementById("reset-button"),
    timerDisplay: document.getElementById('timer-display'),
    infoModalOverlay: document.getElementById("info-modal-overlay"),
    infoModalCloseBtn: document.getElementById("info-modal-close-btn"),
    infoModalTitle: document.getElementById("info-modal-title"),
    infoModalInstructions: document.getElementById("info-modal-instructions"),
    resetModalOverlay: document.getElementById("reset-modal-overlay"),
    confirmResetBtn: document.getElementById("confirm-reset-btn"),
    cancelResetBtn: document.getElementById("cancel-reset-btn"),
    completionOverlay: document.getElementById("completion-overlay"),
    completionTitleEl: document.getElementById("completion-title"), // Note: ID matches H3, maybe rename var?
    completionMessage: document.getElementById("completion-message")
};

// --- State Variables ---
let progress = {}; // { progressId: completedSets }
let activeTimer = null;
let restPeriodEndTime = null;
let currentExerciseCard = null; // Reference to LI with active indicator
const LONG_PRESS_DURATION = 500; // Milliseconds for long press

// --- Utility Functions ---

function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress");
        progress = savedProgress ? JSON.parse(savedProgress) : {};
        // Ensure progress values are numbers
        for (const key in progress) {
            if (typeof progress[key] !== 'number') {
                progress[key] = 0; // Default to 0 if invalid
            }
        }
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateProgressBars();
        updateCompletedSectionVisibility();
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
    match = details.match(/^1\s+set of \d+\s+minutes/i);
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
        try { navigator.vibrate(50); } catch (e) { /* Silently fail */ }
    }
}
function stopActiveTimer() {
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
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
    activeTimer = setInterval(updateTimer, 1000);
}
function checkTimerOnFocus() {
    const endTime = localStorage.getItem('restPeriodEndTime');
    if (!endTime) { removeActiveIndicator(); return; }
    restPeriodEndTime = parseInt(endTime, 10);
    if (isNaN(restPeriodEndTime)) { // Handle potential invalid stored data
         localStorage.removeItem('restPeriodEndTime');
         removeActiveIndicator();
         return;
     }
    const remainingTime = Math.round((restPeriodEndTime - Date.now()) / 1000);
    if (remainingTime > 0) { startOnScreenTimer(remainingTime); }
    else { stopActiveTimer(); }
}

// --- UI Update Functions ---

function setActiveIndicator(cardElement) {
    removeActiveIndicator();
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

// Updates the 'X/Y' counter and related classes
function updateSetCounterVisuals(card, progressId, totalSets) {
    if (!card) return;
    const completedSets = progress[progressId] || 0;
    const isComplete = completedSets >= totalSets;
    const setCounter = card.querySelector('.set-counter');

    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', isComplete);
    }
    // Add/remove 'fully-completed' for logical checks elsewhere
    card.classList.toggle('fully-completed', isComplete);
}

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
         allDayItems.forEach(item => {
            const totalSetsForItem = parseSets(item.details);
             totalSetsForDay += totalSetsForItem;
             completedSetsForDay += Number(progress[item.id]) || 0;
         });
         const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
         btn.style.setProperty('--progress', `${isNaN(progressPercentage) ? 0 : progressPercentage}%`);
    });
}

function updateCompletedSectionVisibility() { /* ... same ... */ }
function updateCompletedSectionVisibility() {
    const hasCompletedItems = DOMElements.completedList.querySelector('li') !== null;
    DOMElements.completedTitle.classList.toggle('hidden', !hasCompletedItems);
}


// --- DOM Manipulation & List Management ---

function animateAndMoveToCompleted(card) {
    if (!card || card.parentElement !== DOMElements.exerciseList) return;
    removeCardListeners(card); // Remove active listeners
    if (currentExerciseCard === card) removeActiveIndicator(); // Clear indicator if needed
    card.classList.add('reordering');

    const handleTransitionEnd = () => {
        card.removeEventListener('transitionend', handleTransitionEnd);
        // Check parentage *before* appending to prevent race conditions
        if (card.parentElement !== DOMElements.completedList) {
            DOMElements.completedList.appendChild(card);
            addCardListeners(card, true); // Add listeners for completed state
            updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10)); // Ensure visuals updated
            updateCompletedSectionVisibility();
        }
        card.classList.remove('reordering'); // Ensure removal
    };
    card.addEventListener('transitionend', handleTransitionEnd);
    setTimeout(() => { if (card.classList.contains('reordering')) handleTransitionEnd(); }, 350); // Fallback
}

function moveFromCompletedToActive(card) {
    if (!card || card.parentElement !== DOMElements.completedList) return;
    removeCardListeners(card); // Remove completed listeners

    // Find the correct section title in the active list
    const isExercise = card.classList.contains('exercise-item');
    const isAb = card.classList.contains('ab-finisher');
    let targetSectionTitle = null;
    const titles = DOMElements.exerciseList.querySelectorAll('.category-title');

    // Determine target title based on card type
    if (isExercise && titles[0]) targetSectionTitle = titles[0];
    else if (isAb && titles.length > 1) targetSectionTitle = titles[1];
    else if (titles.length > 2) targetSectionTitle = titles[2]; // Cardio assumed third
    else if (titles.length > 0) targetSectionTitle = titles[titles.length - 1]; // Fallback: last title
    // No else needed, targetSectionTitle remains null if no titles found

    // Determine insertion point: After title, before next title or first completed item in that section
    let insertBeforeNode = null;
    if (targetSectionTitle) {
        insertBeforeNode = targetSectionTitle.nextElementSibling;
        // Iterate siblings *after* the title
        while (insertBeforeNode && !insertBeforeNode.classList.contains('category-title')) {
             // Find the first item that *is* completed to insert before it
             if (insertBeforeNode.classList.contains('fully-completed')) break;
            insertBeforeNode = insertBeforeNode.nextElementSibling;
        }
    } else {
        // If no titles, insert before the very first item (completed or not)
        insertBeforeNode = DOMElements.exerciseList.firstChild;
    }

    // Insert the card into the active list at the calculated position
    DOMElements.exerciseList.insertBefore(card, insertBeforeNode); // insertBefore(node, null) appends

    addCardListeners(card, false); // Add back listeners for active state
    updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10)); // Ensure counter updated
    updateCompletedSectionVisibility(); // Check if completed list is now empty
}


function moveToTopOfSection(card) {
    if (!card || card.parentElement !== DOMElements.exerciseList) return false;

    // Find the category title *immediately* preceding this card
    let precedingTitle = null;
    let currentElement = card.previousElementSibling;
    while (currentElement) {
        if (currentElement.classList.contains('category-title')) {
            precedingTitle = currentElement; break;
        }
        currentElement = currentElement.previousElementSibling;
    }

    // Determine node to insert before (either title's next sibling or list's first child)
    const insertBeforeNode = precedingTitle ? precedingTitle.nextSibling : DOMElements.exerciseList.firstChild;

    // Only move if it's not already the first item in its section
    if (card !== insertBeforeNode) {
        DOMElements.exerciseList.insertBefore(card, insertBeforeNode);
        // Scroll into view smoothly
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return true; // Moved
    }
    return false; // Not moved
}

// --- Main Action Handler (Simplified, Robust) ---

function handleSeriesUpdate(card, progressId, totalSets, direction) {
    if (!card || !progressId || isNaN(totalSets)) return;

    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;
    let newCompletedCount;
    let actionOccurred = false;

    // Determine new count
    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);
        if (newCompletedCount > currentCompleted) actionOccurred = true;
    } else { // 'decrement'
        newCompletedCount = Math.max(0, currentCompleted - 1);
        if (newCompletedCount < currentCompleted) actionOccurred = true;
    }

    if (!actionOccurred) return; // Exit if count didn't change

    // --- Update State FIRST ---
    progress[progressId] = newCompletedCount;
    saveProgress(); // Save the new state immediately

    // --- Perform Side Effects ---
    if (direction === 'increment') {
        triggerHapticFeedback();
        const detailsP = card.querySelector('.exercise-details p');
        const restTime = parseRestTime(detailsP ? detailsP.textContent : '');
        setActiveIndicator(card); // Set indicator before timer
        startOnScreenTimer(restTime);
        if (card.parentElement === DOMElements.exerciseList) {
            moveToTopOfSection(card); // Attempt move, scroll happens inside
        }
    } else { // 'decrement'
        if (currentExerciseCard === card) stopActiveTimer(); // Stop timer if decrementing current
    }

    // --- Update DOM (Move Lists / Visuals) ---
    const isNowFullyCompleted = newCompletedCount >= totalSets;
    const needsMoveToCompleted = !wasFullyCompleted && isNowFullyCompleted;
    const needsMoveToActive = wasFullyCompleted && !isNowFullyCompleted;

    // Perform DOM move only if status flipped
    if (needsMoveToCompleted) {
        animateAndMoveToCompleted(card); // Moves card, updates visuals+listeners inside
    } else if (needsMoveToActive) {
        moveFromCompletedToActive(card); // Moves card, updates visuals+listeners inside
    } else {
        // If it didn't move lists, just update its visuals
        updateSetCounterVisuals(card, progressId, totalSets);
    }

    // Check day completion AFTER potential move and save, only if item just became complete
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
        // Use DOMElements reference for completion title
        DOMElements.completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE";
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

// Creates the LI element with structure, indicator, counter, button
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass; // e.g., "exercise-item"
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);

    // Validate data before setting attributes
    if (!progressId || isNaN(totalSets)) {
        console.error("Invalid data for exercise item:", { exercise, cssClass, idType, index, dayNum });
        return null; // Return null if data is invalid
    }

    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    li.innerHTML = `
        <span class="active-indicator"></span>
        <div class="exercise-details">
            <h3>${exercise.name || 'Unnamed Exercise'}</h3>
            <p>${exercise.details || 'No details'}</p>
        </div>
        <span class="set-counter">0/${totalSets}</span>
        <button class="info-btn" aria-label="Open exercise info for ${exercise.name || 'Unnamed Exercise'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </button>`;

    const completedSets = progress[progressId] || 0;
    const isInitiallyCompleted = completedSets >= totalSets;

    addCardListeners(li, isInitiallyCompleted); // Add listeners based on initial state
    updateSetCounterVisuals(li, progressId, totalSets); // Set initial visual state

    return li;
};


// Renders a section title (if needed) and appends items to correct lists
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    let hasActiveItems = false;
    const sectionItemElements = []; // Store elements before appending

    // Create all element nodes for this section
    const itemsArray = Array.isArray(items) ? items : [items];
    itemsArray.forEach((item, i) => {
         const element = createExerciseItem(item, cssClass, idType, i, dayNum);
         if (element) { // Only add if element creation was successful
             sectionItemElements.push(element);
             if (!element.classList.contains('fully-completed')) {
                 hasActiveItems = true; // Mark if any item is active
             }
         }
    });

    // Append title to active list ONLY if section has active items
    let sectionTitleElement = null;
    if (hasActiveItems) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        DOMElements.exerciseList.appendChild(sectionTitleElement);
    }

    // Append items to the correct lists
    sectionItemElements.forEach(el => {
        if (el.classList.contains('fully-completed')) {
            DOMElements.completedList.appendChild(el);
        } else {
            // Append active items to the main list (order within section handled by move-to-top)
            DOMElements.exerciseList.appendChild(el);
        }
    });
};


// Main function to render the workout - Clears lists, renders sections
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    DOMElements.workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    DOMElements.workoutDuration.textContent = `// EST. DURATION: ${dayData.duration ? dayData.duration.toUpperCase() : 'N/A'}`;
    DOMElements.exerciseList.innerHTML = ""; // Clear active list
    DOMElements.completedList.innerHTML = ""; // Clear completed list
    removeActiveIndicator(); // Ensure no lingering indicator

    if (dayData.day === 7 || (!dayData.exercises && !dayData.abFinisher && !dayData.cardio)) {
        DOMElements.workoutTitle.textContent = "7. Rest Day";
        DOMElements.exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none; padding-left: 0;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON RECOVERY.</p></div></li>';
    } else {
        // Render sections. Function now correctly places items.
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
    stopActiveTimer(); // Clear timer and indicator before rendering new day
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
    DOMElements.infoModalInstructions.innerHTML = '';
    const p = document.createElement('p');
    p.textContent = instructions || 'No instructions provided.';
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
    // Add basic checks for essential elements
    if (!DOMElements.exerciseList || !DOMElements.completedList || !DOMElements.daySelector) {
        console.error("Essential DOM elements not found. Aborting initialization.");
        return;
    }

    loadProgress();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') { checkTimerOnFocus(); }
    });

    // Create Day Buttons
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button"); btn.className = "day-btn";
        const textSpan = document.createElement("span");
        textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
        btn.appendChild(textSpan); btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        DOMElements.daySelector.appendChild(btn);
    });

    // Reset Button
    DOMElements.resetButton.addEventListener("click", openResetModal);
    DOMElements.confirmResetBtn.addEventListener("click", () => {
        progress = {};
        saveProgress(); // Update storage & UI
        const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
        stopActiveTimer();
        renderWorkout(parseInt(activeDayIndex, 10)); // Re-render the current day
        closeResetModal();
    });
    DOMElements.cancelResetBtn.addEventListener("click", closeResetModal);

    // Modal Closing
    DOMElements.infoModalCloseBtn.addEventListener("click", closeInfoModal);
    DOMElements.infoModalOverlay.addEventListener("click", e => { if (e.target === DOMElements.infoModalOverlay) closeInfoModal(); });
    DOMElements.resetModalOverlay.addEventListener("click", e => { if (e.target === DOMElements.resetModalOverlay) closeResetModal(); });

    // Set Initial Day
    const today = new Date().getDay(); // 0 = Sunday
    const initialDayIndex = today === 0 ? 6 : today - 1;
    setActiveDay(initialDayIndex >= 0 && initialDayIndex < workoutData.length ? initialDayIndex : 0); // Render initial day
    checkTimerOnFocus(); // Check if timer needs resuming
}

// --- Run ---
// Ensure DOM is ready before running init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // DOM is already ready
}
