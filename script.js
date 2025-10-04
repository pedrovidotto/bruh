// Workout data (kept externally in this file for easy editing)
const workoutData = [
  {
    "day": 1,
    "title": "Chest",
    "duration": "45-55 minutes",
    "exercises": [
      {
        "name": "Incline Dumbbell Press",
        "details": "4 sets of 8-12 reps | 90s rest",
        "instructions": "1. Set bench to a 30-45 degree angle.\n2. Lie back with dumbbells on your thighs, then kick them up to your shoulders.\n3. Press the weights up until your arms are extended, but not locked out.\n4. Lower the dumbbells slowly and controlled back to the sides of your chest.",
        "calories": 50 // Per Set
      },
      {
        "name": "Flat Machine Press",
        "details": "3 sets of 10-15 reps | 75s rest",
        "instructions": "1. Adjust the seat so the handles align with your mid-chest.\n2. Press forward, focusing on squeezing your chest muscles together.\n3. Stop just short of locking your elbows.\n4. Return slowly to the starting position, feeling a stretch in your chest.",
        "calories": 55 // Per Set
      },
      {
        "name": "Weighted Dips (Chest Focus)",
        "details": "3 sets to Failure | 75s rest",
        "instructions": "1. Use parallel bars and add weight if possible.\n2. Lean your torso forward significantly as you perform the movement.\n3. Lower yourself until your shoulders are slightly below your elbows.\n4. Press back up, focusing on your chest.",
        "calories": 60 // Per Set
      },
      {
        "name": "Pec-Deck Machine",
        "details": "3 sets of 12-15+ reps | 60s rest (Drop set on last set)",
        "instructions": "1. Adjust the seat so your shoulders are level with the handles.\n2. Press the pads together in a controlled arc, squeezing your chest at the peak.\n3. Slowly return to the starting position, allowing a good stretch.",
        "calories": 30 // Per Set
      },
      {
        "name": "Cable Crossover (Low to High)",
        "details": "3 sets of 12-15 reps | 60s rest",
        "instructions": "1. Set pulleys to the lowest position.\n2. Grab the handles, step forward, and stand with a slight bend in your torso.\n3. Bring your hands up and together in an arc, squeezing your upper chest at the top.",
        "calories": 30 // Per Set
      }
    ],
    "abFinisher": {
      "name": "Cable Crunches",
      "details": "3 sets of 15-20 reps | 45s rest",
      "instructions": "1. Kneel facing a high pulley with a rope attachment.\n2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.\n3. Focus on contracting your abs, not pulling with your arms.",
      "calories": 110 // Total
    },
    "cardio": {
      "name": "15 minutes of moderate-intensity cardio",
      "instructions": "Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation.",
      "calories": 200 // Total
    }
  },
  {
    "day": 2,
    "title": "Back",
    "duration": "50-60 minutes",
    "exercises": [
      {
        "name": "Weighted Pull-ups (or Lat Pulldowns)",
        "details": "4 sets of 8-12 reps | 90s rest",
        "instructions": "1. Grip the bar slightly wider than shoulder-width.\n2. Drive your elbows down and back to pull your chest towards the bar.\n3. Squeeze your back muscles at the top.\n4. Lower yourself slowly and fully extend your arms at the bottom.",
        "calories": 60 // Per Set
      },
      {
        "name": "Barbell Row",
        "details": "4 sets of 8-12 reps | 90s rest",
        "instructions": "1. Hinge at your hips, keeping your back straight.\n2. Pull the barbell towards your lower stomach, not your chest.\n3. Squeeze your shoulder blades together at the top.\n4. Lower the bar under control.",
        "calories": 60 // Per Set
      },
      {
        "name": "Chest-Supported T-Bar Row",
        "details": "3 sets of 10-15 reps | 75s rest",
        "instructions": "1. Lie face down on the pad.\n2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.\n3. Squeeze hard at the peak of the contraction.",
        "calories": 60 // Per Set
      },
      {
        "name": "Straight-Arm Pulldown",
        "details": "3 sets of 12-15 reps | 60s rest",
        "instructions": "1. Stand facing a high pulley with a straight bar.\n2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.\n3. Focus on using your lats, not your triceps.",
        "calories": 35 // Per Set
      },
      {
        "name": "Hyperextensions",
        "details": "3 sets of 12-15 reps | 60s rest",
        "instructions": "1. Position yourself on a hyperextension bench.\n2. Lower your torso until you feel a stretch in your hamstrings.\n3. Raise back up by squeezing your glutes and lower back.",
        "calories": 30 // Per Set
      }
    ],
    "abFinisher": null,
    "cardio": null
  },
  {
    "day": 3,
    "title": "Shoulders",
    "duration": "65-75 minutes",
    "exercises": [
      {
        "name": "Seated Dumbbell Press",
        "details": "4 sets of 8-12 reps | 90s rest",
        "instructions": "1. Sit on a bench with back support.\n2. Press the dumbbells overhead until your arms are almost fully extended.\n3. Lower the dumbbells slowly to shoulder height.",
        "calories": 45 // Per Set
      },
      {
        "name": "Cable Lateral Raise",
        "details": "4 sets of 12-15 reps | 60s rest",
        "instructions": "1. Stand side-on to a low cable pulley.\n2. Raise your arm out to the side, leading with your elbow.\n3. Keep a slight bend in your arm. Control the negative.",
        "calories": 25 // Per Set
      },
      {
        "name": "Reverse Pec-Deck",
        "details": "4 sets of 15-20 reps | 60s rest",
        "instructions": "1. Sit facing the machine with your chest against the pad.\n2. Drive your arms back and out in a wide arc, squeezing your rear delts.",
        "calories": 25 // Per Set
      },
      {
        "name": "Barbell Front Raise",
        "details": "3 sets of 10-15 reps | 75s rest",
        "instructions": "1. Hold a barbell with an overhand grip.\n2. Raise the bar to shoulder level, keeping your arms straight.\n3. Lower with control. Avoid using momentum.",
        "calories": 35 // Per Set
      },
      {
        "name": "Heavy Dumbbell Shrugs",
        "details": "4 sets of 10-15 reps | 60s rest",
        "instructions": "1. Hold heavy dumbbells at your sides.\n2. Elevate your shoulders straight up towards your ears.\n3. Squeeze for 2 seconds at the top.",
        "calories": 20 // Per Set
      }
    ],
    "abFinisher": {
      "name": "Decline Reverse Crunches",
      "details": "3 sets of 12-15 reps | 60s rest",
      "instructions": "1. Lie on a decline bench, holding the top for support.\n2. Bring your knees toward your chest.\n3. Focus on lifting your hips off the bench using your lower abs.",
      "calories": 130 // Total
    },
    "cardio": {
      "name": "15 minutes of moderate-intensity cardio",
      "instructions": "Choose a machine like the elliptical or a stationary bike. This helps increase blood flow for recovery without overly taxing the shoulder joints.",
      "calories": 200 // Total
    }
  },
  {
    "day": 4,
    "title": "Quads & Calves",
    "duration": "60-75 minutes",
    "exercises": [
      {
        "name": "Barbell Back Squats",
        "details": "4 sets of 8-12 reps | 120s rest",
        "instructions": "1. Place the bar on your upper back, not your neck.\n2. Keep your chest up and back straight.\n3. Squat down until your hips are at or below parallel.\n4. Drive up through your heels.",
        "calories": 68 // Per Set
      },
      {
        "name": "Leg Press",
        "details": "4 sets of 10-15 reps | 90s rest",
        "instructions": "1. Place your feet shoulder-width apart on the platform.\n2. Lower the weight until your knees are near a 90-degree angle.\n3. Press up, but do not lock your knees.",
        "calories": 55 // Per Set
      },
      {
        "name": "Bulgarian Split Squats",
        "details": "3 sets of 10-12 reps (per leg) | 75s rest",
        "instructions": "1. Place the top of your rear foot on a bench.\n2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.\n3. Drive up through your front heel.",
        "calories": 60 // Per Set
      },
      {
        "name": "Leg Extensions",
        "details": "3 sets of 15-20+ reps | 60s rest (Drop set on last set)",
        "instructions": "1. Squeeze your quads hard for 2 seconds at the top of each rep.\n2. Control the weight as you lower it.",
        "calories": 35 // Per Set
      },
      {
        "name": "Standing Calf Raises",
        "details": "5 sets of 10-15 reps | 45s rest",
        "instructions": "1. Get a deep stretch at the bottom of the movement.\n2. Press up onto your big toes and pause at the top.",
        "calories": 20 // Per Set
      }
    ],
    "abFinisher": null,
    "cardio": null
  },
  {
    "day": 5,
    "title": "Arms (Biceps & Triceps)",
    "duration": "35-45 minutes",
    "exercises": [
      {
        "name": "Close-Grip Bench Press",
        "details": "4 sets of 8-12 reps | 90s rest",
        "instructions": "1. Grip the bar narrower than shoulder-width.\n2. Keep your elbows tucked in close to your body as you lower the bar.\n3. Press up, focusing on your triceps.",
        "calories": 40 // Per Set
      },
      {
        "name": "Barbell Curls",
        "details": "4 sets of 8-12 reps | 75s rest",
        "instructions": "1. Keep your elbows pinned to your sides.\n2. Curl the weight up without using momentum or swinging your body.\n3. Squeeze your biceps at the top and lower with control.",
        "calories": 35 // Per Set
      },
      {
        "name": "Overhead Rope Extension",
        "details": "3 sets of 10-15 reps | 60s rest",
        "instructions": "1. Use a high cable pulley with a rope attachment.\n2. Extend your arms fully overhead, feeling a stretch in your triceps.\n3. Spread the rope apart at the top.",
        "calories": 35 // Per Set
      },
      {
        "name": "Incline Dumbbell Curls",
        "details": "3 sets of 10-15 reps | 60s rest",
        "instructions": "1. Sit back on an incline bench.\n2. Let your arms hang straight down to stretch the biceps.\n3. Curl the dumbbells up, rotating your palms to face you.",
        "calories": 35 // Per Set
      },
      {
        "name": "Superset: Rope Pushdowns & Cable Hammer Curls",
        "details": "3 sets of 12-15 reps each | 60s rest after superset",
        "instructions": "Pushdowns: Keep elbows pinned and spread the rope at the bottom.\nHammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip.",
        "calories": 60 // Per Set
      }
    ],
    "abFinisher": {
      "name": "Landmine Twists",
      "details": "3 sets of 10-12 reps (per side) | 60s rest",
      "instructions": "1. Place one end of a barbell in a landmine attachment or corner.\n2. Hold the other end with both hands and rotate from your core, pivoting your feet.",
      "calories": 130 // Total
    },
    "cardio": {
      "name": "20 minutes of moderate-intensity cardio",
      "instructions": "Choose a machine like the stationary bike or elliptical. This is a great way to improve cardiovascular health without high impact.",
      "calories": 275 // Total
    }
  },
  {
    "day": 6,
    "title": "Hamstrings & Glutes",
    "duration": "55-65 minutes",
    "exercises": [
      {
        "name": "Romanian Deadlifts (RDLs)",
        "details": "4 sets of 8-12 reps | 120s rest",
        "instructions": "1. Hinge at your hips, keeping your back flat and legs almost straight.\n2. Lower the bar until you feel a deep stretch in your hamstrings.\n3. Drive your hips forward to return to the start.",
        "calories": 65 // Per Set
      },
      {
        "name": "Barbell Hip Thrusts",
        "details": "4 sets of 8-12 reps | 90s rest",
        "instructions": "1. Rest your upper back on a bench.\n2. Drive your hips up powerfully, squeezing your glutes hard at the top.\n3. Keep your chin tucked.",
        "calories": 50 // Per Set
      },
      {
        "name": "Seated or Lying Leg Curls",
        "details": "4 sets of 12-15 reps | 75s rest (Drop set on last set)",
        "instructions": "1. Point your toes to better engage the hamstrings.\n2. Squeeze at the peak of the curl and control the negative.",
        "calories": 35 // Per Set
      },
      {
        "name": "Hip Abduction Machine",
        "details": "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)",
        "instructions": "1. Lean your torso forward to better target the upper glute shelf.\n2. Control the movement, especially on the way back in.",
        "calories": 25 // Per Set
      },
      {
        "name": "45-Degree Kickbacks (Cable/Band)",
        "details": "3 sets of 15-20 reps (per leg) | 45s rest",
        "instructions": "1. Kick your leg back and out at a 45-degree angle.\n2. Squeeze your upper glute for a full second at the peak of the movement.",
        "calories": 30 // Per Set
      }
    ],
    "abFinisher": null,
    "cardio": null
  },
  {
    "day": 7,
    "title": "Rest Day",
    "duration": "Focus on recovery",
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
const resetButton = document.getElementById("reset-button");

// Info Modal Elements
const infoModalOverlay = document.getElementById("info-modal-overlay");
const infoModalCloseBtn = document.getElementById("info-modal-close-btn");
const infoModalTitle = document.getElementById("info-modal-title");
const infoModalInstructions = document.getElementById("info-modal-instructions");

// Reset Modal Elements
const resetModalOverlay = document.getElementById("reset-modal-overlay");
const confirmResetBtn = document.getElementById("confirm-reset-btn");
const cancelResetBtn = document.getElementById("cancel-reset-btn");

// State
let progress = {};

// Functions
function loadProgress() {
  try {
    const savedProgress = localStorage.getItem("broSplitProgress");
    progress = savedProgress ? JSON.parse(savedProgress) : {};
  } catch (e) {
    console.error("Could not load progress from localStorage:", e);
    progress = {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem("broSplitProgress", JSON.stringify(progress));
    updateProgressBars();
    updateWeeklyCalories();
  } catch (e) {
    console.error("Could not save progress to localStorage:", e);
  }
}

function openInfoModal(title, instructions) {
  infoModalTitle.textContent = title;
  infoModalInstructions.textContent = instructions;
  infoModalOverlay.classList.remove("hidden");
  infoModalOverlay.setAttribute('aria-hidden', 'false');
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

function calculateDayProgress(dayIndex) {
    const dayData = workoutData[dayIndex];
    const numMain = dayData.exercises.length;
    if (numMain === 0) return 0; // Rest Day

    const numExtras = (dayData.abFinisher ? 1 : 0) + (dayData.cardio ? 1 : 0);

    let completedMain = 0;
    for (let i = 0; i < numMain; i++) {
        if (progress[`day${dayData.day}-exercise-item-${i}`]) {
            completedMain++;
        }
    }

    let completedExtras = 0;
    if (dayData.abFinisher && progress[`day${dayData.day}-ab-finisher-0`]) {
        completedExtras++;
    }
    if (dayData.cardio && progress[`day${dayData.day}-cardio-session-0`]) {
        completedExtras++;
    }

    if (numExtras === 0) {
        return numMain > 0 ? completedMain / numMain : 0;
    } else {
        const mainProgress = (completedMain / numMain) * 0.9;
        const extraProgress = (completedExtras / numExtras) * 0.1;
        return mainProgress + extraProgress;
    }
}

function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const progressPercentage = calculateDayProgress(index) * 100;
        btn.style.setProperty('--progress', `${progressPercentage}%`);
    });
}

/**
 * Parses the number of sets from an exercise detail string.
 * @param {string} details - The string like "4 sets of 8-12 reps".
 * @returns {number} The number of sets, or 1 if not found.
 */
function parseSets(details) {
    const match = details.match(/^(\d+)\s+sets/);
    return match ? parseInt(match[1], 10) : 1;
}

function updateWeeklyCalories() {
    let totalCalories = 0;
    workoutData.forEach((dayData) => {
        // Main exercises (calories per set)
        dayData.exercises.forEach((ex, exIndex) => {
            if (progress[`day${dayData.day}-exercise-item-${exIndex}`]) {
                const sets = parseSets(ex.details);
                totalCalories += (ex.calories || 0) * sets;
            }
        });
        // Ab finisher (total calories)
        if (dayData.abFinisher && progress[`day${dayData.day}-ab-finisher-0`]) {
            totalCalories += dayData.abFinisher.calories || 0;
        }
        // Cardio (total calories)
        if (dayData.cardio && progress[`day${dayData.day}-cardio-session-0`]) {
            totalCalories += dayData.cardio.calories || 0;
        }
    });
    const calorieCounter = document.getElementById("calorie-counter");
    if (calorieCounter) {
        calorieCounter.textContent = `🔥 Weekly Total: ${totalCalories} kcal`;
    }
}


function renderWorkout(dayIndex) {
  const dayData = workoutData[dayIndex];
  workoutTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
  workoutDuration.textContent = `Estimated Duration: ${dayData.duration}`;
  exerciseList.innerHTML = "";

  if (dayData.exercises.length === 0) {
    exerciseList.innerHTML =
      '<li class="exercise-item" style="justify-content:center; cursor: default;"><div class="exercise-details"><h3>Enjoy your rest!</h3><p>Focus on nutrition, hydration, and sleep to maximize growth.</p></div></li>';
    return;
  }

  const createExerciseItem = (exercise, type, index) => {
    const li = document.createElement("li");
    li.className = type;
    const progressId = `day${dayData.day}-${type}-${index}`;

    li.innerHTML = `
            <input type="checkbox" class="checkbox" id="${progressId}">
            <div class="exercise-details">
                <h3>${exercise.name}</h3>
                <p>${exercise.details}</p>
            </div>
            <button class="info-btn" aria-label="Open exercise info">i</button>
        `;

    const checkbox = li.querySelector(".checkbox");
    checkbox.checked = progress[progressId] || false;
     if (checkbox.checked) {
      li.classList.add("completed");
    }

    const handleChange = () => {
        progress[progressId] = checkbox.checked;
        li.classList.toggle("completed", checkbox.checked);
        saveProgress();
    };

    li.addEventListener('click', (e) => {
        if (e.target.closest('.info-btn')) {
            return;
        }
        checkbox.checked = !checkbox.checked;
        handleChange();
    });

    li.querySelector(".info-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openInfoModal(exercise.name, exercise.instructions);
    });

    return li;
  };

  const mainTitle = document.createElement("h3");
  mainTitle.className = "category-title";
  mainTitle.textContent = "Main Workout";
  exerciseList.appendChild(mainTitle);
  dayData.exercises.forEach((ex, i) =>
    exerciseList.appendChild(createExerciseItem(ex, "exercise-item", i))
  );

  if (dayData.abFinisher) {
    const abTitle = document.createElement("h3");
    abTitle.className = "category-title";
    abTitle.textContent = "Ab Finisher";
    exerciseList.appendChild(abTitle);
    exerciseList.appendChild(
      createExerciseItem(dayData.abFinisher, "ab-finisher", 0)
    );
  }

  if (dayData.cardio) {
    const cardioTitle = document.createElement("h3");
    cardioTitle.className = "category-title";
    cardioTitle.textContent = "Post-Workout Cardio";
    exerciseList.appendChild(cardioTitle);
    exerciseList.appendChild(
      createExerciseItem(dayData.cardio, "cardio-session", 0)
    );
  }
}

function setActiveDay(dayIndex) {
  document
    .querySelectorAll(".day-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
  if (currentBtn) {
    currentBtn.classList.add("active");
  }
  renderWorkout(dayIndex);
}

// App Initialization
function init() {
  loadProgress();

  // Create Day Buttons
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
  
  // Create and append Calorie Counter
  const calorieCounter = document.createElement("div");
  calorieCounter.id = "calorie-counter";
  daySelector.appendChild(calorieCounter);

  updateProgressBars();
  updateWeeklyCalories();

  resetButton.addEventListener("click", openResetModal);

  confirmResetBtn.addEventListener("click", () => {
    progress = {};
    saveProgress();
    const activeDayIndex =
      document.querySelector(".day-btn.active")?.dataset.day || 0;
    renderWorkout(parseInt(activeDayIndex, 10));
    closeResetModal();
  });

  cancelResetBtn.addEventListener("click", closeResetModal);

  infoModalCloseBtn.addEventListener("click", closeInfoModal);
  infoModalOverlay.addEventListener("click", (e) => {
    if (e.target === infoModalOverlay) {
      closeInfoModal();
    }
  });
  resetModalOverlay.addEventListener("click", (e) => {
    if (e.target === resetModalOverlay) {
      closeResetModal();
    }
  });

  // Set initial day
  const today = new Date().getDay(); // Sunday = 0, Monday = 1...
  const initialDayIndex = today === 0 ? 6 : today - 1; // Map to our 0-indexed array
  setActiveDay(initialDayIndex);
}

init();
