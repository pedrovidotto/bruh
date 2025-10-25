// Workout data (REMOVED 'calories' property)
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
    "title": "Biceps & Triceps",
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
    "title": "Glutes & Hamstrings",
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
// REMOVED: dailyCaloriesEl, weeklyCaloriesContainer
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

// --- Timer, Haptic Functions --- (Keep as is)
function triggerHapticFeedback() { if ('vibrate' in navigator) { navigator.vibrate(50); } }
function startOnScreenTimer(durationSeconds) { /* ... same as before ... */ }
function checkTimerOnFocus() { /* ... same as before ... */ }
// --- Timer, Haptic Functions ---
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
            
            // --- MODIFIED ---
            // Remove active bar when timer finishes
            const currentActive = document.querySelector('.exercise-active');
            if (currentActive) {
                currentActive.classList.remove('exercise-active');
            }
            // --- END MODIFICATION ---

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
        // REMOVED: updateCalorieCounters();
        updateProgressBars(); // Still useful for day buttons
        updateCompletedSectionVisibility();
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details) { /* ... same as before ... */ }
function parseSets(details) { /* ... same as before ... */ }
function parseRestTime(details) {
    if (!details) return 0;
    const match = details.match(/\|\s*(\d+)s\s*rest/);
    return match ? parseInt(match[1], 10) : 0;
}

function parseSets(details) {
    if (!details) return 1; // Default to 1 set if parsing fails
    // Handle "X sets to Failure" -> treat as X sets
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
     // Handle "X sets of ..."
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    // Handle "1 set of X minutes" (for cardio)
    match = details.match(/^1\s+set of \d+\s+minutes/i);
     if (match) return 1;

    console.warn("Could not parse sets from details:", details, "Defaulting to 1");
    return 1; // Fallback
}


// --- UI Update Functions ---
function updateCardVisuals(card, progressId, totalSets) {
    const completedSets = progress[progressId] || 0;
    // REMOVED: Progress bar style update

    // UPDATE Set Counter
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', completedSets >= totalSets);
    }

    // Keep class for logic if needed, but styling primarily relies on list placement
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

// REMOVED: updateCalorieCounters()

function updateProgressBars() { /* ... same as before, useful for day buttons ... */ }
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
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

// --- Event Handlers & Interaction --- (Logic largely same, calls updated functions)
function handleSeriesUpdate(card, progressId, totalSets, direction) { /* ... same core logic ... */ }
function animateAndMoveToCompleted(card) { /* ... same as before ... */ }
function moveFromCompletedToActive(card) { /* ... same corrected logic ... */ }
// --- Event Handlers & Interaction ---
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasFullyCompleted = currentCompleted >= totalSets;

    let newCompletedCount;
    if (direction === 'increment') {
        newCompletedCount = Math.min(totalSets, currentCompleted + 1);
        if (newCompletedCount > currentCompleted) {
             triggerHapticFeedback();
             
             // --- MODIFIED ---
             // Remove from old active item
             const currentActive = document.querySelector('.exercise-active');
             if (currentActive) {
                currentActive.classList.remove('exercise-active');
             }
             // Add to new active item
             card.classList.add('exercise-active');
             
             // --- NEW: Move to top of section ---
             if (!wasFullyCompleted) { // Don't move if it's about to be completed
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
                    // Move card to be immediately after its title
                    titleElement.after(card);
                }
                // If no titleElement is found, we don't move it.
             }
             // --- END NEW BLOCK ---

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
            
            // --- MODIFIED ---
            card.classList.remove('exercise-active'); // Remove if timer is stopped
            // --- END MODIFICATION ---
        }
    }

    progress[progressId] = newCompletedCount;
    saveProgress(); // Calls updateCompletedSectionVisibility indirectly

    const isNowFullyCompleted = newCompletedCount >= totalSets;
    updateCardVisuals(card, progressId, totalSets); // Update set counter immediately

    // Move between lists ONLY if completion status flipped
    if (!wasFullyCompleted && isNowFullyCompleted) {
        animateAndMoveToCompleted(card);
        checkDayCompletion();
    } else if (wasFullyCompleted && !isNowFullyCompleted) {
        moveFromCompletedToActive(card);
    }
}

function animateAndMoveToCompleted(card) {
    card.classList.add('reordering');
    card.classList.remove('exercise-active'); // Remove active bar on completion
    removeCardListeners(card); // Remove listeners before moving
    setTimeout(() => {
        completedList.appendChild(card);
        card.classList.remove('reordering');
        addCardListeners(card, true); // Add listeners for completed state
        updateCompletedSectionVisibility();
    }, 300);
}

// --- MODIFIED FUNCTION ---
// This function now finds or creates the correct section title
// when moving an item from "Completed" back to "Active".
function moveFromCompletedToActive(card) {
    removeCardListeners(card); // Remove listeners before moving

    const cardTypeClass = card.classList.contains('exercise-item') ? 'exercise-item'
                        : card.classList.contains('ab-finisher') ? 'ab-finisher'
                        : 'cardio-session';
    
    // --- NEW LOGIC TO FIND/CREATE TITLE ---
    let targetTitleElement = null;
    let sectionTitleText = "";
    let sectionOrder = 0; // 0 = Main, 1 = Abs, 2 = Cardio

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

    // Try to find the title
    const titles = exerciseList.querySelectorAll('.category-title');
    titles.forEach(title => {
        if (title.textContent === sectionTitleText) {
            targetTitleElement = title;
        }
    });

    // If title doesn't exist, create it and insert it
    if (!targetTitleElement) {
        targetTitleElement = document.createElement("h3");
        targetTitleElement.className = "category-title";
        targetTitleElement.textContent = sectionTitleText;
        
        // Find the correct insertion point
        let anchorElement = null;
        if (sectionOrder === 1) { // Find last "Main Workout" item
            const mainItems = exerciseList.querySelectorAll('.exercise-item');
            if (mainItems.length > 0) {
                anchorElement = mainItems[mainItems.length - 1];
            } else if (titles.length > 0 && titles[0].textContent === "Main Workout") {
                 anchorElement = titles[0]; // Insert after title if no items
            }
        } else if (sectionOrder === 2) { // Find last "Ab Finisher" item
            const abItems = exerciseList.querySelectorAll('.ab-finisher');
            if (abItems.length > 0) {
                anchorElement = abItems[abItems.length - 1];
            } else if (titles.length > 0) { // Find last "Ab Finisher" title
                 titles.forEach(t => { 
                    if(t.textContent === "Ab Finisher") anchorElement = t; 
                });
            }
            if (!anchorElement) { // Fallback: find last "Main Workout" item
                 const mainItems = exerciseList.querySelectorAll('.exercise-item');
                 if (mainItems.length > 0) anchorElement = mainItems[mainItems.length - 1];
            }
        }
        
        if (anchorElement) {
            anchorElement.after(targetTitleElement);
        } else if (sectionOrder === 0) {
            exerciseList.prepend(targetTitleElement); // "Main Workout" always first
        } else {
            exerciseList.appendChild(targetTitleElement); // Fallback
        }
    }
    // --- END NEW LOGIC ---


    if (targetTitleElement) {
         // Insert the card *after* its corresponding title
        targetTitleElement.after(card);
    } else {
        // Fallback: append to the end
        exerciseList.appendChild(card);
        console.warn("Could not find or create correct section title, appending card to end.");
    }

    addCardListeners(card, false); // Add back listeners for active state
    updateCompletedSectionVisibility();
}
// --- END MODIFIED FUNCTION ---


// --- Completion Celebration --- (Keep as is)
function checkDayCompletion() { /* ... same as before ... */ }
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

    const isDayComplete = allItems.every(item => {
        const totalSets = parseSets(item.details);
        const completedSets = progress[item.id] || 0;
        return completedSets >= totalSets;
    });

    if (isDayComplete) {
        const isWeekComplete = activeDayIndex === 5; // Day 6 is index 5
        completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE"; // Use updated ID
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

// Central function to add listeners (Modified for completed state interaction)
function addCardListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    const totalSets = parseInt(card.dataset.totalSets, 10);

    // Click/Tap to Increment (only if NOT completed)
    if (!isCompleted) {
         const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            if (card.parentElement === exerciseList) { // Check it's in the active list
                handleSeriesUpdate(card, progressId, totalSets, 'increment');
            }
        };
        card.addEventListener('click', clickHandler);
        card._clickHandler = clickHandler;
    }

    // Context Menu / Long Press to Decrement (ALWAYS add)
    const contextHandler = (e) => {
        e.preventDefault();
        // Allow decrement even if completed (moves it back)
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
    card.addEventListener('touchmove', clearLongPress); // Cancel on scroll

    card._touchStartHandler = touchStartHandler;
    card._touchEndHandler = clearLongPress; // Use the clearer function
    card._touchMoveHandler = clearLongPress;

    // Info Button Listener (always add)
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            const exerciseName = card.querySelector('h3').textContent;
            // Simplified data fetching - assumes workoutData is accessible
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
        // Remove existing listener before adding, prevents duplicates
        if (infoBtn._infoClickHandler) {
            infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
        }
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._infoClickHandler = infoClickHandler;
    }
}


// Central function to remove listeners
function removeCardListeners(card) {
    if (card._clickHandler) card.removeEventListener('click', card._clickHandler);
    if (card._contextHandler) card.removeEventListener('contextmenu', card._contextHandler);
    if (card._touchStartHandler) card.removeEventListener('touchstart', card._touchStartHandler);
    if (card._touchEndHandler) {
         card.removeEventListener('touchend', card._touchEndHandler);
         card.removeEventListener('touchcancel', card._touchEndHandler); // Use same handler
    }
    if (card._touchMoveHandler) card.removeEventListener('touchmove', card._touchMoveHandler);

    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn && infoBtn._infoClickHandler) {
        infoBtn.removeEventListener('click', infoBtn._infoClickHandler);
    }
    // Clear stored references
    card._clickHandler = null; card._contextHandler = null;
    card._touchStartHandler = null; card._touchEndHandler = null; card._touchMoveHandler = null;
    if (infoBtn) infoBtn._infoClickHandler = null;
}


// Creates the exercise item LI element
const createExerciseItem = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    li.dataset.progressId = progressId;
    li.dataset.totalSets = totalSets;

    // --- MODIFIED BLOCK ---
    // The set-counter span is now first, before the details div.
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
    // --- END MODIFIED BLOCK ---

    // Determine initial state
    const completedSets = progress[progressId] || 0;
    const isInitiallyCompleted = completedSets >= totalSets;

    // Add listeners based on initial state
    addCardListeners(li, isInitiallyCompleted);

    // Set initial visual state (set counter text and class)
    updateCardVisuals(li, progressId, totalSets);

    return li;
};


// Renders a section (title + items) into the correct lists
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    // Create and append the category title *only if there are active items* in this section
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

    // Create all element nodes
    const elements = (Array.isArray(items)
        ? items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum))
        : [createExerciseItem(items, cssClass, idType, 0, dayNum)]);

    // Append elements to the correct list
    elements.forEach(el => {
        const progressId = el.dataset.progressId;
        const totalSets = parseInt(el.dataset.totalSets, 10);
        const completedSets = progress[progressId] || 0;
        if (completedSets >= totalSets) {
            completedList.appendChild(el); // Move completed to bottom list
        } else {
             // Append active items *after* their section title (if it exists)
             if (sectionTitleElement) {
                // --- MODIFIED (FIX) ---
                // Appends to the end of the list, after the title
                exerciseList.appendChild(el); 
                // --- END MODIFICATION ---
             } else {
                 exerciseList.appendChild(el); // Fallback if no title was added (e.g., all items completed initially)
             }
        }
    });
};


// Main function to render the workout for a given day
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    // --- MODIFIED BLOCK ---
    // Use innerHTML to allow for styled number span
    workoutTitle.innerHTML = `<span class="workout-day-num">${dayData.day}.</span> ${dayData.title}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    // --- END MODIFIED BLOCK ---

    exerciseList.innerHTML = ""; // Clear active list
    completedList.innerHTML = ""; // Clear completed list

    if (dayData.day === 7 || dayData.exercises.length === 0) { // Check for day 7 specifically
        // --- MODIFIED BLOCK ---
        workoutTitle.innerHTML = `<span class="workout-day-num">7.</span> Rest Day`;
        // --- END MODIFIED BLOCK ---
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8; border-bottom: none;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON NUTRITION, HYDRATION, AND SLEEP.</p></div></li>';
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }

    // REMOVED: updateCalorieCounters();
    updateCompletedSectionVisibility(); // Update visibility after rendering all sections
}


function setActiveDay(dayIndex) { /* ... same as before ... */ }
function setActiveDay(dayIndex) {
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");

    // --- MODIFIED ---
    // Remove active bar when changing days
    const currentActive = document.querySelector('.exercise-active');
    if (currentActive) {
        currentActive.classList.remove('exercise-active');
    }
    // --- END MODIFICATION ---
    
    if (activeTimer) {
        clearInterval(activeTimer);
        timerDisplay.classList.add('hidden');
        activeTimer = null;
    }
    localStorage.removeItem('restPeriodEndTime');
    restPeriodEndTime = null;
    renderWorkout(dayIndex); // This now correctly clears both lists before rendering
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

        // --- MODIFIED ---
        // Remove active bar on reset
        const currentActive = document.querySelector('.exercise-active');
        if (currentActive) {
            currentActive.classList.remove('exercise-active');
        }
        // --- END MODIFICATION ---
        
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
    const initialDayIndex = today === 0 ? 6 : today - 1; // Sunday is 0 -> index 6 (Rest Day)
    setActiveDay(initialDayIndex); // This call includes the first render
    checkTimerOnFocus();
}

init();
