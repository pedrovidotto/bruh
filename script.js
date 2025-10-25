// Workout data (Make sure 'calories' property is removed from all entries)
const workoutData = [ /* ... Same data as before, ensure no calories ... */ ];
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
const undoButton = document.getElementById("undo-button"); // New Undo Button

// State
let progress = {};
let longPressTimer;
const LONG_PRESS_DURATION = 500;
let activeTimer = null;
let restPeriodEndTime = null;
let currentExerciseCard = null; // Track the card with the active indicator
let lastAction = null; // For Undo functionality { progressId: string, previousCount: number }

const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

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
        // If timer is 0, also remove active indicator
        removeActiveIndicator();
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
            removeActiveIndicator(); // Remove indicator when timer finishes
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
        removeActiveIndicator(); // Ensure indicator removed if timer expired while away
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
        updateProgressBars(); // Update day button progress
        updateCompletedSectionVisibility();
        // Update Undo button state AFTER saving potential change
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

// NEW: Add/Remove Active Indicator Class
function setActiveIndicator(cardElement) {
    removeActiveIndicator(); // Remove from previous
    if (cardElement && cardElement.parentElement === exerciseList) { // Only apply to cards in active list
        cardElement.classList.add('is-current-exercise');
        currentExerciseCard = cardElement;
    }
}
function removeActiveIndicator() {
    if (currentExerciseCard) {
        currentExerciseCard.classList.remove('is-current-exercise');
    }
    currentExerciseCard = null;
}

// Update card visuals (Set Counter)
function updateCardVisuals(card, progressId, totalSets) {
    const completedSets = progress[progressId] || 0;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', completedSets >= totalSets);
    }
    // Keep class for logic, used by checkDayCompletion and move logic
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

// Update Day Button Progress
function updateProgressBars() { /* ... same ... */ }
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData || (dayData.exercises.length === 0 && !dayData.abFinisher && !dayData.cardio)) {
             btn.style.setProperty('--progress', '0%');
             return;
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
             completedSetsForDay += progress[item.id] || 0;
         });
        const progressPercentage = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}

// Show/Hide Completed Section Title
function updateCompletedSectionVisibility() {
    completedTitle.classList.toggle('hidden', completedList.children.length === 0);
}

// NEW: Update Undo Button State
function updateUndoButtonState() {
    undoButton.disabled = !lastAction;
}

// --- Event Handlers & Interaction ---

// Store previous state BEFORE making changes
function recordLastAction(progressId, previousCount) {
    lastAction = { progressId, previousCount };
    // Don't save here, save happens after the action completes
    updateUndoButtonState(); // Enable button immediately
}

// Undo Functionality
function undoLastAction() {
    if (!lastAction) return;

    const { progressId, previousCount } = lastAction;
    const card = document.querySelector(`[data-progress-id="${progressId}"]`);
    if (!card) {
        console.error("Could not find card to undo:", progressId);
        lastAction = null; // Clear invalid action
        updateUndoButtonState();
        return;
    }

    const totalSets = parseInt(card.dataset.totalSets, 10);
    const currentCount = progress[progressId] || 0;
    const wasFullyCompleted = currentCount >= totalSets;
    const willBeFullyCompleted = previousCount >= totalSets;

    // Revert progress state
    progress[progressId] = previousCount;

    // Move card between lists if completion status changed due to undo
    if (wasFullyCompleted && !willBeFullyCompleted) {
        moveFromCompletedToActive(card); // Moves card, re-adds listeners
    } else if (!wasFullyCompleted && willBeFullyCompleted) {
        // This case shouldn't happen often with undo, but handle it
        animateAndMoveToCompleted(card); // Moves card, re-adds listeners
    } else {
        // If it didn't move lists, just update visuals
        updateCardVisuals(card, progressId, totalSets);
    }

     // If the undone action had started a timer, stop it.
    // Check if the card that was undone is the current one with the indicator/timer.
    if (currentExerciseCard === card && activeTimer) {
        clearInterval(activeTimer);
        timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
        removeActiveIndicator();
    }


    lastAction = null; // Clear the stored action
    saveProgress(); // Save the reverted state & update UI (undo button, etc.)

    // Optional: Maybe scroll the undone item into view if needed
    // card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;

    // --- Record Undo State ---
    recordLastAction(progressId, currentCompleted);

    let newCompletedCount;
    let movedToTop = false; // Flag to track if moved

    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);

        // --- Move to Top Logic ---
        if (newCompletedCount > currentCompleted && card.parentElement === exerciseList) { // Only move active items
            const firstActiveItem = exerciseList.querySelector('li:not(.fully-completed)');
            if (firstActiveItem && card !== firstActiveItem) {
                // Find the start of its section
                 let currentElement = card;
                 let sectionStartNode = card; // Default to card itself
                 while (currentElement.previousElementSibling) {
                    currentElement = currentElement.previousElementSibling;
                    if (currentElement.classList.contains('category-title')) {
                        sectionStartNode = currentElement.nextElementSibling; // The first item after title
                        break;
                    }
                    if (currentElement.tagName === 'LI') {
                         sectionStartNode = currentElement; // Keep track of the earliest LI in section
                    } else {
                        break; // Stop if we hit something unexpected
                    }
                 }
                 // If the sectionStartNode is the first item overall, use it, else use the title's next sibling
                 const actualFirstItemInList = exerciseList.querySelector('li');
                 const insertBeforeNode = sectionStartNode === actualFirstItemInList ? sectionStartNode : sectionStartNode?.previousElementSibling?.classList.contains('category-title') ? sectionStartNode : exerciseList.firstChild;

                 if (insertBeforeNode) {
                    exerciseList.insertBefore(card, insertBeforeNode);
                    movedToTop = true;
                }
            }
        }

        // --- Start Timer & Haptic ---
        if (newCompletedCount > currentCompleted) {
             triggerHapticFeedback();
             const exerciseDetailsText = card.querySelector('.exercise-details p')?.textContent || '';
             const restTime = parseRestTime(exerciseDetailsText);
             startOnScreenTimer(restTime);
             setActiveIndicator(card); // Set indicator on increment
        }

    } else { // 'decrement'
        newCompletedCount = Math.max(0, currentCompleted - 1);
        // --- Stop Timer ---
        if (activeTimer && newCompletedCount < currentCompleted) {
            clearInterval(activeTimer);
            timerDisplay.classList.add('hidden');
            localStorage.removeItem('restPeriodEndTime');
            restPeriodEndTime = null;
            removeActiveIndicator(); // Remove indicator if timer stopped by decrement
        }
    }

    progress[progressId] = newCompletedCount; // Update progress state
    const isNowFullyCompleted = newCompletedCount >= totalSets;

    // Move between lists FIRST if completion status flipped
    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card); // Moves card
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        // Don't animate when moving back, just move instantly before saving
        moveFromCompletedToActive(card); // Moves card
    }

    // Save progress AFTER potential move
    saveProgress();

    // Update visuals AFTER potential move
    // Find the card again in the DOM in case it moved lists
    const potentiallyMovedCard = document.querySelector(`[data-progress-id="${progressId}"]`);
    if(potentiallyMovedCard) {
      updateCardVisuals(potentiallyMovedCard, progressId, totalSets);
    }


    // Check day completion AFTER potential move and save
    if (!wasFullyCompleted && isNowFullyCompleted) {
        checkDayCompletion();
    }
     // If moved to top, maybe scroll into view
     if (movedToTop) {
         card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
     }
}


function animateAndMoveToCompleted(card) { /* ... same ... */ }
function animateAndMoveToCompleted(card) {
    card.classList.add('reordering');
    removeCardListeners(card); // Remove active listeners
    setTimeout(() => {
        completedList.appendChild(card); // Append to #completed-list
        card.classList.remove('reordering');
        addCardListeners(card, true); // Add listeners for completed state (allows decrement)
        updateCompletedSectionVisibility();
        removeActiveIndicator(); // Remove indicator when moved to completed
    }, 300);
}

function moveFromCompletedToActive(card) { /* ... same corrected logic ... */ }
function moveFromCompletedToActive(card) {
    removeCardListeners(card); // Remove completed listeners

    // Determine the section based on original class
    const isExercise = card.classList.contains('exercise-item');
    const isAb = card.classList.contains('ab-finisher');

    let targetSectionTitle = null;
    const titles = exerciseList.querySelectorAll('.category-title');

    // Find the correct H3 title element
    if (isExercise && titles.length > 0) targetSectionTitle = titles[0];
    else if (isAb && titles.length > 1) targetSectionTitle = titles[1];
    else if (titles.length > 2) targetSectionTitle = titles[2]; // Cardio
    else targetSectionTitle = titles.length > 0 ? titles[titles.length-1] : null;


    if (targetSectionTitle) {
         // Insert *after* its corresponding title, before next title or item
         let insertBeforeNode = targetSectionTitle.nextElementSibling;
         while(insertBeforeNode && !insertBeforeNode.classList.contains('category-title')) {
             // If we find an item already completed in the active list, insert before it
             if (insertBeforeNode.classList.contains('fully-completed')) break;
             insertBeforeNode = insertBeforeNode.nextElementSibling;
         }
         exerciseList.insertBefore(card, insertBeforeNode); // Handles null insertBeforeNode (appends)
    } else {
        // Fallback if no titles exist yet
        exerciseList.insertBefore(card, exerciseList.firstChild);
    }

    addCardListeners(card, false); // Add back listeners for active state
    updateCompletedSectionVisibility();
}


// --- Completion Celebration --- (Keep as is)
function checkDayCompletion() { /* ... same ... */ }
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
                progress = {}; localStorage.removeItem("workoutSysProgress"); localStorage.removeItem('restPeriodEndTime'); location.reload();
            }, 5000);
        } else { setTimeout(() => completionOverlay.classList.add('hidden'), 4000); }
    }
}


// --- DOM Rendering & Listener Management ---

// Central function to add listeners
function addCardListeners(card, isCompleted) { /* ... same corrected logic ... */ }
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    // Click/Tap to Increment (only add if NOT completed)
    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            // Double check it's still in the active list before handling
             if (card.parentElement === exerciseList) {
                handleSeriesUpdate(card, progressId, totalSets, 'increment');
            }
        };
        card.addEventListener('click', clickHandler);
        card._clickHandler = clickHandler;
    }

    // Context Menu / Long Press to Decrement (ALWAYS add, logic inside handles state)
    const contextHandler = (e) => {
        e.preventDefault();
        handleSeriesUpdate(card, progressId, totalSets, 'decrement');
    };
    card.addEventListener('contextmenu', contextHandler);
    card._contextHandler = contextHandler;

    let longPressTimeoutId = null;
    const touchStartHandler = (e) => {
        if (e.target.closest('.info-btn')) return;
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId); // Clear previous timer just in case
        longPressTimeoutId = setTimeout(() => {
            e.preventDefault(); // Prevent context menu / selection
            handleSeriesUpdate(card, progressId, totalSets, 'decrement');
            longPressTimeoutId = null; // Reset timer ID after firing
        }, LONG_PRESS_DURATION);
    };
     const clearLongPress = () => { // Used for touchend, touchcancel, touchmove
        if (longPressTimeoutId) clearTimeout(longPressTimeoutId);
        longPressTimeoutId = null;
    };

    card.addEventListener('touchstart', touchStartHandler, { passive: false });
    card.addEventListener('touchend', clearLongPress);
    card.addEventListener('touchcancel', clearLongPress); // Important for interruptions
    card.addEventListener('touchmove', clearLongPress); // Cancel on scroll

    // Store references for removal
    card._touchStartHandler = touchStartHandler;
    card._touchEndHandler = clearLongPress;
    card._touchMoveHandler = clearLongPress;


    // Info Button Listener (always add)
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation(); // Prevent LI click handler
            // Find exercise data again
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
        // Ensure listener isn't added multiple times if element reused
        if (infoBtn._infoClickHandler) {
            infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
        }
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._infoClickHandler = infoClickHandler;
    }
}


// Central function to remove listeners
function removeCardListeners(card) { /* ... same corrected logic ... */ }
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

    // Clear stored references after removing
    card._clickHandler = card._contextHandler = card._touchStartHandler =
    card._touchEndHandler = card._touchMoveHandler = null;
    if (infoBtn) infoBtn._infoClickHandler = null;
}


// Creates the exercise item LI element, adding the indicator span
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    // ADDED: Active indicator span + Set counter span
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


// Renders a section (title + items) into the correct lists
const renderSection = (title, items, cssClass, idType, dayNum) => { /* ... same corrected logic ... */ }
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

     // --- Logic to Check if Section Title is Needed ---
     let hasActiveItems = false;
     let sectionItems = []; // Store created elements to append later

     if (Array.isArray(items)) {
         sectionItems = items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum));
     } else {
         sectionItems.push(createExerciseItem(items, cssClass, idType, 0, dayNum));
     }

     // Check if *any* item in this section is initially active
     hasActiveItems = sectionItems.some(el => {
         const progressId = el.dataset.progressId;
         const totalSets = parseInt(el.dataset.totalSets, 10);
         const completedSets = progress[progressId] || 0;
         return completedSets < totalSets;
     });

    // --- Append Title and Items ---
    let sectionTitleElement = null;
    if (hasActiveItems) {
        sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        exerciseList.appendChild(sectionTitleElement); // Append title to active list ONLY if needed
    }

    // Append elements to the correct list
    sectionItems.forEach(el => {
        const progressId = el.dataset.progressId;
        const totalSets = parseInt(el.dataset.totalSets, 10);
        const completedSets = progress[progressId] || 0;
        if (completedSets >= totalSets) {
            completedList.appendChild(el); // Move completed to bottom list
        } else {
             // Append active items *after* their section title (if it exists)
             if (sectionTitleElement) {
                // Find the correct spot - after the title, before the next title
                let insertBeforeNode = sectionTitleElement.nextSibling;
                 while(insertBeforeNode && !insertBeforeNode.classList.contains('category-title')) {
                     insertBeforeNode = insertBeforeNode.nextSibling;
                 }
                exerciseList.insertBefore(el, insertBeforeNode); // Handles null correctly (appends)
             } else {
                 // This case should ideally not happen if hasActiveItems check is correct
                 exerciseList.appendChild(el);
             }
        }
    });
};


// Main function to render the workout for a given day
function renderWorkout(dayIndex) { /* ... same corrected logic ... */ }
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    exerciseList.innerHTML = ""; // Clear active list
    completedList.innerHTML = ""; // Clear completed list
    removeActiveIndicator(); // Clear indicator on day change
    lastAction = null; // Clear undo on day change
    updateUndoButtonState(); // Disable undo button

    if (dayData.day === 7 || (dayData.exercises.length === 0 && !dayData.abFinisher && !dayData.cardio)) {
        workoutTitle.textContent = "7. Rest Day";
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON NUTRITION, HYDRATION, AND SLEEP.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }

    updateCompletedSectionVisibility(); // Update visibility after rendering all sections
}


function setActiveDay(dayIndex) { /* ... same ... */ }
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
    renderWorkout(dayIndex); // Clears lists, renders new day, clears undo/indicator
}

// --- Modal Functions --- (Keep as is)
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
        progress = {}; lastAction = null; // Clear undo on reset
        saveProgress();
        const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
        if(activeTimer) { clearInterval(activeTimer); timerDisplay.classList.add('hidden'); }
        localStorage.removeItem('restPeriodEndTime'); restPeriodEndTime = null; removeActiveIndicator();
        renderWorkout(parseInt(activeDayIndex, 10));
        closeResetModal();
    });
    cancelResetBtn.addEventListener("click", closeResetModal);
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });
    undoButton.addEventListener('click', undoLastAction); // Add listener for Undo button

    const today = new Date().getDay();
    const initialDayIndex = today === 0 ? 6 : today - 1;
    setActiveDay(initialDayIndex);
    checkTimerOnFocus();
    updateUndoButtonState(); // Set initial state of undo button
}

init();
