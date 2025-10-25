// Ensure workoutData is defined globally or loaded appropriately
// const workoutData = [ ... ]; // (Assuming it's loaded as before, ensure calories are removed)
const workoutData = [
  {
    "day": 1,
    "title": "Chest",
    "duration": "45-55 minutes",
    "exercises": [
      { "name": "Incline Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Set bench to a 30-45 degree angle.\n2. Lie back with dumbbells on your thighs, then kick them up to your shoulders.\n3. Press the weights up until your arms are extended, but not locked out.\n4. Lower the dumbbells slowly and controlled back to the sides of your chest." },
      { "name": "Flat Machine Press", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Adjust the seat so the handles align with your mid-chest.\n2. Press forward, focusing on squeezing your chest muscles together.\n3. Stop just short of locking your elbows.\n4. Return slowly to the starting position, feeling a stretch in your chest." },
      { "name": "Weighted Dips (Chest Focus)", "details": "3 sets to Failure | 75s rest", "instructions": "1. Use parallel bars and add weight if possible.\n2. Lean your torso forward significantly as you perform the movement.\n3. Lower yourself until your shoulders are slightly below your elbows.\n4. Press back up, focusing on your chest." },
      { "name": "Pec-Deck Machine", "details": "3 sets of 12-15+ reps | 60s rest (Drop set on last set)", "instructions": "1. Adjust the seat so your shoulders are level with the handles.\n2. Press the pads together in a controlled arc, squeezing your chest at the peak.\n3. Slowly return to the starting position, allowing a good stretch." },
      { "name": "Cable Crossover (Low to High)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to the lowest position.\n2. Grab the handles, step forward, and stand with a slight bend in your torso.\n3. Bring your hands up and together in an arc, squeezing your upper chest at the top." }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "3 sets of 15-20 reps | 45s rest", "instructions": "1. Kneel facing a high pulley with a rope attachment.\n2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.\n3. Focus on contracting your abs, not pulling with your arms." },
    "cardio": { "name": "15 minutes of moderate-intensity cardio", "details": "1 set of 15 minutes", "instructions": "Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation." }
  },
   {
    "day": 2,
    "title": "Back",
    "duration": "50-60 minutes",
    "exercises": [
        { "name": "Weighted Pull-ups (or Lat Pulldowns)", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar slightly wider than shoulder-width.\n2. Drive your elbows down and back to pull your chest towards the bar.\n3. Squeeze your back muscles at the top.\n4. Lower yourself slowly and fully extend your arms at the bottom." },
        { "name": "Barbell Row", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Hinge at your hips, keeping your back straight.\n2. Pull the barbell towards your lower stomach, not your chest.\n3. Squeeze your shoulder blades together at the top.\n4. Lower the bar under control." },
        { "name": "Chest-Supported T-Bar Row", "details": "3 sets of 10-15 reps | 75s rest", "instructions": "1. Lie face down on the pad.\n2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.\n3. Squeeze hard at the peak of the contraction." },
        { "name": "Straight-Arm Pulldown", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Stand facing a high pulley with a straight bar.\n2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.\n3. Focus on using your lats, not your triceps." },
        { "name": "Hyperextensions", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Position yourself on a hyperextension bench.\n2. Lower your torso until you feel a stretch in your hamstrings.\n3. Raise back up by squeezing your glutes and lower back." }
    ],
    "abFinisher": null,
    "cardio": null
  },
     {
    "day": 3,
    "title": "Quads & Calves",
    "duration": "60-75 minutes",
    "exercises": [
        { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Place the bar on your upper back, not your neck.\n2. Keep your chest up and back straight.\n3. Squat down until your hips are at or below parallel.\n4. Drive up through your heels." },
        { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "1. Place your feet shoulder-width apart on the platform.\n2. Lower the weight until your knees are near a 90-degree angle.\n3. Press up, but do not lock your knees." },
        { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "1. Place the top of your rear foot on a bench.\n2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.\n3. Drive up through your front heel." },
        { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set on last set)", "instructions": "1. Squeeze your quads hard for 2 seconds at the top of each rep.\n2. Control the weight as you lower it." },
        { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "1. Get a deep stretch at the bottom of the movement.\n2. Press up onto your big toes and pause at the top." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  {
    "day": 4,
    "title": "Shoulders & Chest",
    "duration": "60-70 minutes",
    "exercises": [
        { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Sit on a bench with back support.\n2. Press the dumbbells overhead until your arms are almost fully extended.\n3. Lower the dumbbells slowly to shoulder height." },
        { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "1. Stand side-on to a low cable pulley.\n2. Raise your arm out to the side, leading with your elbow.\n3. Keep a slight bend in your arm. Control the negative." },
        { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "1. Sit facing the machine with your chest against the pad.\n2. Drive your arms back and out in a wide arc, squeezing your rear delts." },
        { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "1. Lie flat on the bench.\n2. Press the dumbbells up until your arms are extended but not locked.\n3. Lower slowly, feeling a stretch in your chest." },
        { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to chest height.\n2. Step forward and bring the handles together in a wide arc.\n3. Squeeze your chest hard at the peak of the movement." }
    ],
    "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Lie on a decline bench, holding the top for support.\n2. Bring your knees toward your chest.\n3. Focus on lifting your hips off the bench using your lower abs." },
    "cardio": null
  },
  {
    "day": 5,
    "title": "Arms (Biceps & Triceps)",
    "duration": "35-45 minutes",
    "exercises": [
        { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar narrower than shoulder-width.\n2. Keep your elbows tucked in close to your body as you lower the bar.\n3. Press up, focusing on your triceps." },
        { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "1. Keep your elbows pinned to your sides.\n2. Curl the weight up without using momentum or swinging your body.\n3. Squeeze your biceps at the top and lower with control." },
        { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Use a high cable pulley with a rope attachment.\n2. Extend your arms fully overhead, feeling a stretch in your triceps.\n3. Spread the rope apart at the top." },
        { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Sit back on an incline bench.\n2. Let your arms hang straight down to stretch the biceps.\n3. Curl the dumbbells up, rotating your palms to face you." },
        { "name": "Superset: Rope Pushdowns & Cable Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after superset", "instructions": "Pushdowns: Keep elbows pinned and spread the rope at the bottom.\nHammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip." }
    ],
    "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "1. Place one end of a barbell in a landmine attachment or corner.\n2. Hold the other end with both hands and rotate from your core, pivoting your feet." },
    "cardio": { "name": "20 minutes of moderate-intensity cardio", "details": "1 set of 20 minutes", "instructions": "Choose a machine like the stationary bike or elliptical. This is a great way to improve cardiovascular health without high impact." }
  },
  {
    "day": 6,
    "title": "Hamstrings & Glutes",
    "duration": "55-65 minutes",
    "exercises": [
        { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Hinge at your hips, keeping your back flat and legs almost straight.\n2. Lower the bar until you feel a deep stretch in your hamstrings.\n3. Drive your hips forward to return to the start." },
        { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Rest your upper back on a bench.\n2. Drive your hips up powerfully, squeezing your glutes hard at the top.\n3. Keep your chin tucked." },
        { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set on last set)", "instructions": "1. Point your toes to better engage the hamstrings.\n2. Squeeze at the peak of the curl and control the negative." },
        { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)", "instructions": "1. Lean your torso forward to better target the upper glute shelf.\n2. Control the movement, especially on the way back in." },
        { "name": "45-Degree Kickbacks (Cable/Band)", "details": "3 sets of 15-20 reps (per leg) | 45s rest", "instructions": "1. Kick your leg back and out at a 45-degree angle.\n2. Squeeze your upper glute for a full second at the peak of the movement." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { "day": 7, "title": "Rest Day", "duration": "Focus on recovery", "exercises": [], "abFinisher": null, "cardio": null }
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
const completionTitleEl = document.getElementById("completion-title");
const completionMessage = document.getElementById("completion-message");
const undoButton = document.getElementById("undo-button");

// State
let progress = {};
let activeTimer = null;
let restPeriodEndTime = null;
let currentExerciseCard = null; // Track the card with the active indicator
let lastAction = null; // For Undo: { progressId: string, previousCount: number }

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- Timer, Haptic Functions --- (Robust versions)
function triggerHapticFeedback() {
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
        try { navigator.vibrate(50); } catch (e) { console.warn("Haptic feedback failed:", e); }
    }
}

function stopActiveTimer() {
    if (activeTimer) {
        clearInterval(activeTimer);
        activeTimer = null;
        timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        removeActiveIndicator(); // Remove indicator when timer stops explicitly
    }
}

function startOnScreenTimer(durationSeconds) {
    stopActiveTimer(); // Stop any existing timer first
    if (durationSeconds <= 0) {
         removeActiveIndicator(); // Ensure no indicator if duration is 0
         return;
    }

    restPeriodEndTime = Date.now() + (durationSeconds * 1000);
    localStorage.setItem('restPeriodEndTime', restPeriodEndTime);

    let timeLeft = durationSeconds;
    timerDisplay.classList.remove('hidden');

    const updateTimer = () => {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            stopActiveTimer(); // Use central stop function
            triggerHapticFeedback();
        } else {
            timeLeft--;
        }
    };
    updateTimer(); // Initial display
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = localStorage.getItem('restPeriodEndTime'); // Read directly from storage
    if (!endTime) {
        removeActiveIndicator(); // Ensure no indicator if no timer in storage
        return;
    }
    restPeriodEndTime = parseInt(endTime, 10); // Update global state
    const remainingTime = Math.round((restPeriodEndTime - Date.now()) / 1000);

    if (remainingTime > 0) {
        startOnScreenTimer(remainingTime);
        // Try to find the card that should be active based on progressId if needed
        // This is complex, might be better to just show timer without indicator on reload
    } else {
        stopActiveTimer(); // Ensure timer/indicator are cleared if expired
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
        updateProgressBars();
        updateCompletedSectionVisibility();
        updateUndoButtonState();
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details) { /* ... same ... */ }
function parseSets(details) { /* ... same ... */ }
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
    return 1;
}

// --- UI Update Functions ---

// Add/Remove Active Indicator Class
function setActiveIndicator(cardElement) {
    removeActiveIndicator(); // Remove from previous card
    if (cardElement && cardElement.parentElement === exerciseList) {
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

// Update card visuals (Set Counter, completed class)
function updateCardVisuals(card, progressId, totalSets) {
    if (!card) return;
    const completedSets = progress[progressId] || 0;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', completedSets >= totalSets);
    }
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

// Update Day Button Progress
function updateProgressBars() { /* ... same ... */ }
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData || (dayData.exercises.length === 0 && !dayData.abFinisher && !dayData.cardio)) {
             btn.style.setProperty('--progress', '0%'); return;
        }
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
         if (!isNaN(progressPercentage)) { btn.style.setProperty('--progress', `${progressPercentage}%`); }
         else { btn.style.setProperty('--progress', `0%`); }
    });
}


// Show/Hide Completed Section Title
function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// Update Undo Button State
function updateUndoButtonState() {
    undoButton.disabled = !lastAction;
}

// --- Event Handlers & Interaction ---

// Store previous state BEFORE making changes
function recordLastAction(progressId, previousCount) {
    lastAction = { progressId, previousCount: Number(previousCount) || 0 };
    updateUndoButtonState();
}

// Undo Functionality - Rewritten for robustness
function undoLastAction() {
    if (!lastAction) return;

    const { progressId, previousCount } = lastAction;
    const card = document.querySelector(`[data-progress-id="${progressId}"]`); // Find card potentially in either list

    if (!card) {
        console.error("Undo: Card not found:", progressId);
        lastAction = null; updateUndoButtonState(); return;
    }

    const totalSets = parseInt(card.dataset.totalSets, 10);
    const currentCountInState = progress[progressId] || 0; // Current state before undo
    const wasFullyCompleted = currentCountInState >= totalSets;
    const willBeFullyCompleted = previousCount >= totalSets;

    // --- Stop Timer/Remove Indicator if reverting the current exercise ---
    if (currentExerciseCard === card) stopActiveTimer();

    // --- Revert Progress State ---
    progress[progressId] = previousCount;
    lastAction = null; // Clear *before* save

    // --- Move Card if Completion Status Flipped ---
    // Make sure card exists and check its CURRENT parent list
    if (wasFullyCompleted && !willBeFullyCompleted && card.parentElement === completedList) {
        moveFromCompletedToActive(card); // Moves card, re-adds ACTIVE listeners
    } else if (!wasFullyCompleted && willBeFullyCompleted && card.parentElement === exerciseList) {
        moveFromActiveToCompleted(card); // Moves card, re-adds COMPLETED listeners
    } else {
        // If it didn't move lists, just update its visuals and ensure correct listeners
        updateCardVisuals(card, progressId, totalSets);
        // Re-attach listeners just in case, based on its *new* state (willBeFullyCompleted)
        removeCardListeners(card);
        addCardListeners(card, willBeFullyCompleted);
    }

    // --- Save and Update UI ---
    saveProgress(); // This updates button states and visibility

    // Ensure visuals are correct *after* potential move and listener re-attachment
    const finalCardElement = document.querySelector(`[data-progress-id="${progressId}"]`);
    if (finalCardElement) updateCardVisuals(finalCardElement, progressId, totalSets);

}

// Non-animated move FROM Active TO Completed (for Undo/Initial Render)
function moveFromActiveToCompleted(card) {
     if (!card || card.parentElement !== exerciseList) return;
     removeCardListeners(card);
     completedList.appendChild(card);
     addCardListeners(card, true); // Add listeners for completed state
     updateCompletedSectionVisibility();
     if (currentExerciseCard === card) removeActiveIndicator();
}

// Main handler for increment/decrement
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;

    recordLastAction(progressId, currentCompleted); // Record state *before* change

    let newCompletedCount;
    let actionOccurred = false; // Flag if the count actually changed
    let movedToTop = false;

    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);
        if (newCompletedCount > currentCompleted) { // Check if count increased
            actionOccurred = true;
            triggerHapticFeedback();
            const detailsP = card.querySelector('.exercise-details p');
            const restTime = parseRestTime(detailsP ? detailsP.textContent : '');
            startOnScreenTimer(restTime);
            setActiveIndicator(card);

            // Move to Top Logic (only if in active list and not already at top of section)
            if (card.parentElement === exerciseList) {
                let precedingElement = card.previousElementSibling;
                // Move if it's not the first item OR if the preceding item isn't its category title
                if (precedingElement && !precedingElement.classList.contains('category-title')) {
                     // Find the category title *before* this card
                     let currentElement = card.previousElementSibling;
                     let precedingTitle = null;
                     while (currentElement) {
                         if (currentElement.classList.contains('category-title')) {
                             precedingTitle = currentElement;
                             break;
                         }
                         currentElement = currentElement.previousElementSibling;
                     }
                    // Insert after the preceding title, or at the very beginning of the list
                    const insertBeforeNode = precedingTitle ? precedingTitle.nextSibling : exerciseList.firstChild;
                    if (insertBeforeNode !== card) { // Don't re-insert if already in place
                         exerciseList.insertBefore(card, insertBeforeNode);
                         movedToTop = true;
                    }
                }
            }
        }
    } else { // 'decrement'
        newCompletedCount = Math.max(0, currentCompleted - 1);
        if (newCompletedCount < currentCompleted) { // Check if count decreased
            actionOccurred = true;
            if (currentExerciseCard === card) stopActiveTimer(); // Stop timer if decrementing current
        }
    }

    // --- Process the action only if the count changed ---
    if (actionOccurred) {
        progress[progressId] = newCompletedCount;
        const isNowFullyCompleted = newCompletedCount >= totalSets;

        // Move between lists FIRST if completion status flipped
        if (!wasFullyCompleted && isNowFullyCompleted) {
            animateAndMoveToCompleted(card); // Animate move TO completed
        } else if (wasFullyCompleted && !isNowFullyCompleted) {
            moveFromCompletedToActive(card); // Move instantly back FROM completed
        }

        saveProgress(); // Save state

        // Update visuals AFTER potential move
        const finalCardElement = document.querySelector(`[data-progress-id="${progressId}"]`);
        if (finalCardElement) updateCardVisuals(finalCardElement, progressId, totalSets);

        // Check day completion AFTER potential move and save
        if (!wasFullyCompleted && isNowFullyCompleted) {
            checkDayCompletion();
        }

        // Scroll if moved to top
        if (movedToTop && card.parentElement === exerciseList) { // Ensure card is still in viewable list
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    } else {
        // If no action occurred, clear the last action so undo is disabled
        lastAction = null;
        updateUndoButtonState();
    }
}


// Animate move TO completed list
function animateAndMoveToCompleted(card) {
    if (!card) return;
    card.classList.add('reordering');
    removeCardListeners(card);
    if (currentExerciseCard === card) removeActiveIndicator();
    // Use transitionend event for smoother removal/addition
    const handleTransitionEnd = () => {
        card.removeEventListener('transitionend', handleTransitionEnd);
        if (card.parentElement !== completedList) { // Prevent adding if already moved (e.g., rapid clicks)
             completedList.appendChild(card);
             addCardListeners(card, true);
             updateCompletedSectionVisibility();
        }
        // Ensure reordering class is removed *after* appending
        card.classList.remove('reordering');

    };
    card.addEventListener('transitionend', handleTransitionEnd);
     // Fallback timeout in case transitionend doesn't fire
    setTimeout(() => {
        handleTransitionEnd(); // Manually call if event didn't fire
    }, 350); // Slightly longer than transition duration
}


// Instantly move FROM completed list back to active list
function moveFromCompletedToActive(card) {
    if (!card || card.parentElement !== completedList) return; // Only move if currently in completed list
    removeCardListeners(card);

    const isExercise = card.classList.contains('exercise-item');
    const isAb = card.classList.contains('ab-finisher');
    let targetSectionTitle = null;
    const titles = exerciseList.querySelectorAll('.category-title');

    if (isExercise && titles[0]) targetSectionTitle = titles[0];
    else if (isAb && titles.length > 1) targetSectionTitle = titles[1];
    else if (titles.length > 2) targetSectionTitle = titles[2]; // Cardio
    else targetSectionTitle = titles.length > 0 ? titles[titles.length - 1] : null;

    if (targetSectionTitle) {
        let insertBeforeNode = targetSectionTitle.nextElementSibling;
        while (insertBeforeNode && !insertBeforeNode.classList.contains('category-title')) {
             // Stop before the first completed item in this section
             if (insertBeforeNode.classList.contains('fully-completed')) break;
            insertBeforeNode = insertBeforeNode.nextElementSibling;
        }
        exerciseList.insertBefore(card, insertBeforeNode);
    } else {
        // Insert before the first category title or first item if no titles exist
        exerciseList.insertBefore(card, exerciseList.firstChild);
    }

    addCardListeners(card, false); // Add back listeners for active state
    updateCompletedSectionVisibility();
}


// --- DOM Rendering & Listener Management ---

function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    // --- Clear existing listeners before adding new ones ---
    removeCardListeners(card);

    // Click/Tap to Increment (only add if NOT completed)
    if (!isCompleted) {
        const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            // Check parent again before handling
            if (card.parentElement === exerciseList) {
                handleSeriesUpdate(card, progressId, totalSets, 'increment');
            }
        };
        card.addEventListener('click', clickHandler);
        card._clickHandler = clickHandler; // Store reference
    }

    // Context Menu / Long Press to Decrement (ALWAYS add)
    const contextHandler = (e) => {
        e.preventDefault();
        handleSeriesUpdate(card, progressId, totalSets, 'decrement');
    };
    card.addEventListener('contextmenu', contextHandler);
    card._contextHandler = contextHandler; // Store reference

    let longPressTimeoutId = null;
    const touchStartHandler = (e) => {
        if (e.target.closest('.info-btn')) return;
        clearTimeout(longPressTimeoutId); // Clear previous timer
        longPressTimeoutId = setTimeout(() => {
            e.preventDefault();
            handleSeriesUpdate(card, progressId, totalSets, 'decrement');
            longPressTimeoutId = null;
        }, LONG_PRESS_DURATION);
    };
    const clearLongPress = () => { clearTimeout(longPressTimeoutId); longPressTimeoutId = null; };

    card.addEventListener('touchstart', touchStartHandler, { passive: false });
    card.addEventListener('touchend', clearLongPress);
    card.addEventListener('touchcancel', clearLongPress);
    card.addEventListener('touchmove', clearLongPress); // Cancel on scroll is important

    // Store references for removal
    card._touchStartHandler = touchStartHandler;
    card._touchEndHandler = clearLongPress;
    card._touchMoveHandler = clearLongPress;

    // Info Button Listener (always add)
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            // Find exercise data again (more robust)
            const dayNum = parseInt(progressId.match(/day(\d+)/)[1], 10);
            const type = progressId.match(/-([a-z]+)-/)[1];
            const index = parseInt(progressId.match(/-(\d+)$/)[1], 10);
            const dayData = workoutData.find(d => d.day === dayNum);
            let exerciseData;
             if (dayData) {
                 if (type === 'exercise' && dayData.exercises) exerciseData = dayData.exercises[index];
                 else if (type === 'ab' && dayData.abFinisher) exerciseData = dayData.abFinisher;
                 else if (type === 'cardio' && dayData.cardio) exerciseData = dayData.cardio;
             }
             if (exerciseData) {
                 openInfoModal(exerciseData.name, exerciseData.instructions);
             } else { console.error("Could not find exercise data for modal:", progressId); }
        };
        // Remove previous before adding
        if (infoBtn._infoClickHandler) infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._infoClickHandler = infoClickHandler;
    }
}


function removeCardListeners(card) {
    // Use stored references to remove specific listeners
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

    // Clear stored references after removing
    card._clickHandler = card._contextHandler = card._touchStartHandler =
    card._touchEndHandler = card._touchMoveHandler = null;
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

    // Determine initial state from progress
    const completedSets = progress[progressId] || 0;
    const isInitiallyCompleted = completedSets >= totalSets;

    // Add listeners based on initial state
    addCardListeners(li, isInitiallyCompleted);

    // Set initial visual state (set counter, classes)
    updateCardVisuals(li, progressId, totalSets);

    return li;
};


// Renders sections correctly into active/completed lists
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    let hasActiveItems = false;
    const sectionItemElements = []; // Store elements before appending

    if (Array.isArray(items)) {
        items.forEach((item, i) => sectionItemElements.push(createExerciseItem(item, cssClass, idType, i, dayNum)));
    } else {
        sectionItemElements.push(createExerciseItem(items, cssClass, idType, 0, dayNum));
    }

    // Check if *any* item needs to go in the active list
    hasActiveItems = sectionItemElements.some(el => !el.classList.contains('fully-completed'));

    let sectionTitleElement = null;
    if (hasActiveItems) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement); // Add title ONLY if section has active items
    }

    // Append items to the correct lists
    sectionItemElements.forEach(el => {
        if (el.classList.contains('fully-completed')) {
            completedList.appendChild(el);
        } else {
            // Append active items *after* their section title
            exerciseList.appendChild(el); // Simpler append, order within section handled by 'move to top'
        }
    });
};


// Main function to render the workout
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    exerciseList.innerHTML = ""; // Clear active list
    completedList.innerHTML = ""; // Clear completed list
    removeActiveIndicator();
    lastAction = null; // Clear undo on day change
    updateUndoButtonState();

    if (dayData.day === 7 || (!dayData.exercises && !dayData.abFinisher && !dayData.cardio)) { // More robust check
        workoutTitle.textContent = "7. Rest Day";
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none; padding-left: 0;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON RECOVERY.</p></div></li>';
    } else {
        // Render sections. The function now handles placing items correctly.
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }

    updateCompletedSectionVisibility();
}


function setActiveDay(dayIndex) { /* ... same ... */ }
function setActiveDay(dayIndex) {
    // Input validation
     if (dayIndex < 0 || dayIndex >= workoutData.length) {
         console.error("Invalid day index:", dayIndex);
         dayIndex = 0; // Default to first day
     }

    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");

    stopActiveTimer(); // Use the stop function

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


// --- App Initialization ---
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
        progress = {}; lastAction = null;
        saveProgress(); // Update UI including undo button
        const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
        stopActiveTimer(); // Stop timer on reset
        renderWorkout(parseInt(activeDayIndex, 10));
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    undoButton.addEventListener('click', undoLastAction);

    const today = new Date().getDay();
    const initialDayIndex = today === 0 ? 6 : today - 1;
    setActiveDay(initialDayIndex); // Includes initial render
    checkTimerOnFocus(); // Check if timer was running
    updateUndoButtonState(); // Set initial button state
}

// --- Run ---
init();
