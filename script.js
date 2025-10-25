// Workout data with added calories per series/activity
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
  {
    "day": 3,
    "title": "Quads & Calves",
    "duration": "60-75 minutes",
    "exercises": [
        { "name": "Barbell Back Squats", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Place the bar on your upper back, not your neck.\n2. Keep your chest up and back straight.\n3. Squat down until your hips are at or below parallel.\n4. Drive up through your heels.", "calories": 25 },
        { "name": "Leg Press", "details": "4 sets of 10-15 reps | 90s rest", "instructions": "1. Place your feet shoulder-width apart on the platform.\n2. Lower the weight until your knees are near a 90-degree angle.\n3. Press up, but do not lock your knees.", "calories": 20 },
        { "name": "Bulgarian Split Squats", "details": "3 sets of 10-12 reps (per leg) | 75s rest", "instructions": "1. Place the top of your rear foot on a bench.\n2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.\n3. Drive up through your front heel.", "calories": 18 },
        { "name": "Leg Extensions", "details": "3 sets of 15-20+ reps | 60s rest (Drop set on last set)", "instructions": "1. Squeeze your quads hard for 2 seconds at the top of each rep.\n2. Control the weight as you lower it.", "calories": 10 },
        { "name": "Standing Calf Raises", "details": "5 sets of 10-15 reps | 45s rest", "instructions": "1. Get a deep stretch at the bottom of the movement.\n2. Press up onto your big toes and pause at the top.", "calories": 5 }
    ],
    "abFinisher": null,
    "cardio": null
  },
  {
    "day": 4,
    "title": "Shoulders & Chest",
    "duration": "60-70 minutes",
    "exercises": [
        { "name": "Seated Dumbbell Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Sit on a bench with back support.\n2. Press the dumbbells overhead until your arms are almost fully extended.\n3. Lower the dumbbells slowly to shoulder height.", "calories": 11 },
        { "name": "Cable Lateral Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "1. Stand side-on to a low cable pulley.\n2. Raise your arm out to the side, leading with your elbow.\n3. Keep a slight bend in your arm. Control the negative.", "calories": 7 },
        { "name": "Reverse Pec-Deck", "details": "4 sets of 15-20 reps | 60s rest", "instructions": "1. Sit facing the machine with your chest against the pad.\n2. Drive your arms back and out in a wide arc, squeezing your rear delts.", "calories": 7 },
        { "name": "Flat Dumbbell Press", "details": "3 sets of 8-12 reps | 75s rest", "instructions": "1. Lie flat on the bench.\n2. Press the dumbbells up until your arms are extended but not locked.\n3. Lower slowly, feeling a stretch in your chest.", "calories": 11 },
        { "name": "Cable Flys", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Set pulleys to chest height.\n2. Step forward and bring the handles together in a wide arc.\n3. Squeeze your chest hard at the peak of the movement.", "calories": 8 }
    ],
    "abFinisher": { "name": "Decline Reverse Crunches", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "1. Lie on a decline bench, holding the top for support.\n2. Bring your knees toward your chest.\n3. Focus on lifting your hips off the bench using your lower abs.", "calories": 35 },
    "cardio": null
  },
  {
    "day": 5,
    "title": "Arms (Biceps & Triceps)",
    "duration": "35-45 minutes",
    "exercises": [
        { "name": "Close-Grip Bench Press", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Grip the bar narrower than shoulder-width.\n2. Keep your elbows tucked in close to your body as you lower the bar.\n3. Press up, focusing on your triceps.", "calories": 10 },
        { "name": "Barbell Curls", "details": "4 sets of 8-12 reps | 75s rest", "instructions": "1. Keep your elbows pinned to your sides.\n2. Curl the weight up without using momentum or swinging your body.\n3. Squeeze your biceps at the top and lower with control.", "calories": 9 },
        { "name": "Overhead Rope Extension", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Use a high cable pulley with a rope attachment.\n2. Extend your arms fully overhead, feeling a stretch in your triceps.\n3. Spread the rope apart at the top.", "calories": 8 },
        { "name": "Incline Dumbbell Curls", "details": "3 sets of 10-15 reps | 60s rest", "instructions": "1. Sit back on an incline bench.\n2. Let your arms hang straight down to stretch the biceps.\n3. Curl the dumbbells up, rotating your palms to face you.", "calories": 8 },
        { "name": "Superset: Rope Pushdowns & Cable Hammer Curls", "details": "3 sets of 12-15 reps each | 60s rest after superset", "instructions": "Pushdowns: Keep elbows pinned and spread the rope at the bottom.\nHammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip.", "calories": 15 }
    ],
    "abFinisher": { "name": "Landmine Twists", "details": "3 sets of 10-12 reps (per side) | 60s rest", "instructions": "1. Place one end of a barbell in a landmine attachment or corner.\n2. Hold the other end with both hands and rotate from your core, pivoting your feet.", "calories": 40 },
    "cardio": { "name": "20 minutes of moderate-intensity cardio", "details": "1 set of 20 minutes", "instructions": "Choose a machine like the stationary bike or elliptical. This is a great way to improve cardiovascular health without high impact.", "calories": 220 }
  },
  {
    "day": 6,
    "title": "Hamstrings & Glutes",
    "duration": "55-65 minutes",
    "exercises": [
        { "name": "Romanian Deadlifts (RDLs)", "details": "4 sets of 8-12 reps | 120s rest", "instructions": "1. Hinge at your hips, keeping your back flat and legs almost straight.\n2. Lower the bar until you feel a deep stretch in your hamstrings.\n3. Drive your hips forward to return to the start.", "calories": 22 },
        { "name": "Barbell Hip Thrusts", "details": "4 sets of 8-12 reps | 90s rest", "instructions": "1. Rest your upper back on a bench.\n2. Drive your hips up powerfully, squeezing your glutes hard at the top.\n3. Keep your chin tucked.", "calories": 16 },
        { "name": "Seated or Lying Leg Curls", "details": "4 sets of 12-15 reps | 75s rest (Drop set on last set)", "instructions": "1. Point your toes to better engage the hamstrings.\n2. Squeeze at the peak of the curl and control the negative.", "calories": 9 },
        { "name": "Hip Abduction Machine", "details": "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)", "instructions": "1. Lean your torso forward to better target the upper glute shelf.\n2. Control the movement, especially on the way back in.", "calories": 7 },
        { "name": "45-Degree Kickbacks (Cable/Band)", "details": "3 sets of 15-20 reps (per leg) | 45s rest", "instructions": "1. Kick your leg back and out at a 45-degree angle.\n2. Squeeze your upper glute for a full second at the peak of the movement.", "calories": 8 }
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
const exerciseList = document.getElementById("exercise-list");
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

// Updated motivational messages to fit the new theme
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
        navigator.vibrate(50); // Short, crisp vibration
    }
}

function startOnScreenTimer(durationSeconds) {
    if (activeTimer) {
        clearInterval(activeTimer);
    }

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
            triggerHapticFeedback(); // Vibrate when timer finishes
        } else {
            timeLeft--;
        }
    };
    updateTimer();
    activeTimer = setInterval(updateTimer, 1000);
}

function checkTimerOnFocus() {
    const endTime = restPeriodEndTime || localStorage.getItem('restPeriodEndTime');
    if (!endTime) return;

    const remainingTime = Math.round((endTime - Date.now()) / 1000);

    if (remainingTime > 0) {
        startOnScreenTimer(remainingTime);
    } else {
        timerDisplay.classList.add('hidden');
        localStorage.removeItem('restPeriodEndTime');
        restPeriodEndTime = null;
    }
}

// --- Core & Helper Functions ---
function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress"); // Renamed localStorage key
        progress = savedProgress ? JSON.parse(savedProgress) : {};
    } catch (e) { console.error("Could not load progress from localStorage:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateCalorieCounters();
        updateProgressBars();
    } catch (e) { console.error("Could not save progress to localStorage:", e); }
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
    card.classList.toggle('fully-completed', completedSets >= totalSets);
}

function updateCalorieCounters() {
    let weeklyTotal = 0;
    const activeDayBtn = document.querySelector('.day-btn.active');
    if (!activeDayBtn) return; // Exit if no active day
    
    const activeDayIndex = parseInt(activeDayBtn.dataset.day, 10);
    const activeDayData = workoutData[activeDayIndex];
    if (!activeDayData) return; // Exit if data mismatch

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
                
                if (dayData.day === activeDayData.day) {
                    dailyTotal += caloriesBurned;
                }
            }
        });
    });

    // Updated text to new technical style
    weeklyCaloriesContainer.textContent = `// WEEKLY: ${weeklyTotal} KCAL`;
    dailyCaloriesEl.textContent = `// DAILY: ${dailyTotal} KCAL`;
}


function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData || dayData.exercises.length === 0) { 
            btn.style.setProperty('--progress', '0%'); 
            return; 
        }
        
        let totalSets = 0, completedSets = 0;
        
        dayData.exercises.forEach((ex, i) => { const id = `day${dayData.day}-exercise-${i}`; totalSets += parseSets(ex.details); completedSets += progress[id] || 0; });
        if (dayData.abFinisher) { const id = `day${dayData.day}-ab-0`; totalSets += parseSets(dayData.abFinisher.details); completedSets += progress[id] || 0; }
        if (dayData.cardio) { const id = `day${dayData.day}-cardio-0`; totalSets += parseSets(dayData.cardio.details); completedSets += progress[id] || 0; }

        const progressPercentage = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}

// --- Event Handlers & Interaction ---
function handleSeriesUpdate(card, progressId, totalSets, direction) {
    const currentCompleted = progress[progressId] || 0;
    const wasCompleted = currentCompleted >= totalSets;

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
    
    saveProgress();
    
    updateCardVisuals(card, progressId, totalSets);
    const isNowCompleted = (progress[progressId] || 0) >= totalSets;
    if (!wasCompleted && isNowCompleted) {
        animateAndMoveToEnd(card);
        checkDayCompletion();
    }
}

function animateAndMoveToEnd(card) {
    card.classList.add('reordering'); card.dataset.moved = 'true';
    setTimeout(() => { 
        // Only append if it's not already the last element of its type
        const parentList = card.parentElement;
        if (parentList && parentList.lastChild !== card) {
            parentList.appendChild(card);
        }
        card.classList.remove('reordering'); 
    }, 500);
}

// --- Completion Celebration (REMOVED CONFETTI) ---
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
        } else { 
            setTimeout(() => completionOverlay.classList.add('hidden'), 4000); 
        }
    }
}


// --- DOM Rendering (FIXED) ---

// This function creates the item but does NOT append it.
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
    
    li.addEventListener('click', (e) => {
        if (e.target.closest('.info-btn')) return; // Don't register set if info btn is clicked
        handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'increment');
    });
    li.addEventListener('contextmenu', (e) => { 
        e.preventDefault(); 
        handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'decrement'); 
    });
    li.addEventListener('touchstart', (e) => { 
        if (e.target.closest('.info-btn')) return;
        longPressTimer = setTimeout(() => {
            e.preventDefault(); // Prevent click from firing after long-press
            handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'decrement');
        }, LONG_PRESS_DURATION);
    }, { passive: false }); // Set passive to false to allow preventDefault
    
    li.addEventListener('touchend', () => clearTimeout(longPressTimer));
    li.addEventListener('touchmove', () => clearTimeout(longPressTimer)); // Cancel on scroll
    
    li.querySelector(".info-btn").addEventListener("click", (e) => { 
        e.stopPropagation(); 
        openInfoModal(exercise.name, exercise.instructions); 
    });
    
    updateCardVisuals(li, progressId, totalSets);
    return li;
};

// This function appends titles and sorted elements to the list
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    const sectionTitle = document.createElement("h3");
    sectionTitle.className = "category-title";
    sectionTitle.textContent = title;
    exerciseList.appendChild(sectionTitle); // Appends title

    const elements = (Array.isArray(items)
        ? items.map((item, i) => createExerciseItem(item, cssClass, idType, i, dayNum))
        : [createExerciseItem(items, cssClass, idType, 0, dayNum)]);
    
    // Sorts items to show completed ones at the bottom
    elements.sort((a, b) => { 
        const completedA = a.classList.contains('fully-completed'); 
        const completedB = b.classList.contains('fully-completed'); 
        return completedA - completedB; 
    });
    
    elements.forEach(el => exerciseList.appendChild(el)); // Appends items
};

function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error("No data for day index:", dayIndex); return; }

    workoutTitle.textContent = `DAY ${dayData.day}: ${dayData.title.toUpperCase()}`;
    workoutDuration.textContent = `// EST. DURATION: ${dayData.duration.toUpperCase()}`;
    exerciseList.innerHTML = "";
    
    if (dayData.exercises.length === 0) { 
        exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default; opacity: 0.8;"><div class="exercise-details"><h3 style="font-weight: 500;">SYSTEM IN STANDBY</h3><p style="font-weight: 300;">FOCUS ON NUTRITION, HYDRATION, AND SLEEP TO MAXIMIZE GROWTH.</p></div></li>'; 
        updateCalorieCounters(); 
        return; 
    }
    
    // BUG FIX: Pass dayData.day to renderSection
    renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
    renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
    renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);

    updateCalorieCounters();
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
function openInfoModal(title, instructions) { 
    infoModalOverlay.classList.remove("hidden"); 
    infoModalOverlay.setAttribute('aria-hidden', 'false'); 
    infoModalTitle.textContent = title.toUpperCase(); 
    
    // Clear previous instructions and add new ones
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

    // Re-check timer if window gains focus
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            checkTimerOnFocus();
        }
    });

    // Create day buttons
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

    // Reset button logic
    resetButton.addEventListener("click", openResetModal);
    confirmResetBtn.addEventListener("click", () => {
        progress = {};
        saveProgress();
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

    // Modal close logic
    infoModalCloseBtn.addEventListener("click", closeInfoModal);
    infoModalOverlay.addEventListener("click", e => { if (e.target === infoModalOverlay) closeInfoModal(); });
    resetModalOverlay.addEventListener("click", e => { if (e.target === resetModalOverlay) closeResetModal(); });

    // Set initial day
    const today = new Date().getDay(); // Sunday = 0
    const initialDayIndex = today === 0 ? 6 : today - 1; // Map to 0-indexed week (Mon-Sun)
    setActiveDay(initialDayIndex);

    // Check for active timer on load
    checkTimerOnFocus();
}

// Run the app
init();
