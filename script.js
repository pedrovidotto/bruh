document.addEventListener('DOMContentLoaded', () => {

    // --- WORKOUT DATA ---
    // All workout information is stored here.
    const workoutData = [
        {
            day: 1, title: "Chest", duration: "45-55 minutes",
            exercises: [
                { name: "Incline Dumbbell Press", details: "4 sets of 8-12 reps | 90s rest", instructions: "1. Set bench to a 30-45 degree angle.\n2. Lie back with dumbbells on your thighs, then kick them up to your shoulders.\n3. Press the weights up until your arms are extended, but not locked out.\n4. Lower the dumbbells slowly and controlled back to the sides of your chest." },
                { name: "Flat Machine Press", details: "3 sets of 10-15 reps | 75s rest", instructions: "1. Adjust the seat so the handles align with your mid-chest.\n2. Press forward, focusing on squeezing your chest muscles together.\n3. Stop just short of locking your elbows.\n4. Return slowly to the starting position, feeling a stretch in your chest." },
                { name: "Weighted Dips (Chest Focus)", details: "3 sets to Failure | 75s rest", instructions: "1. Use parallel bars and add weight if possible.\n2. Lean your torso forward significantly as you perform the movement.\n3. Lower yourself until your shoulders are slightly below your elbows.\n4. Press back up, focusing on your chest." },
                { name: "Pec-Deck Machine", details: "3 sets of 12-15+ reps | 60s rest (Drop set on last set)", instructions: "1. Adjust the seat so your shoulders are level with the handles.\n2. Press the pads together in a controlled arc, squeezing your chest at the peak.\n3. Slowly return to the starting position, allowing a good stretch." },
                { name: "Cable Crossover (Low to High)", details: "3 sets of 12-15 reps | 60s rest", instructions: "1. Set pulleys to the lowest position.\n2. Grab the handles, step forward, and stand with a slight bend in your torso.\n3. Bring your hands up and together in an arc, squeezing your upper chest at the top." }
            ],
            abFinisher: { name: "Cable Crunches", details: "3 sets of 15-20 reps | 45s rest", instructions: "1. Kneel facing a high pulley with a rope attachment.\n2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.\n3. Focus on contracting your abs, not pulling with your arms." },
            cardio: { name: "15 minutes of moderate-intensity cardio", instructions: "Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation." }
        },
        {
            day: 2, title: "Back", duration: "50-60 minutes",
            exercises: [
                { name: "Weighted Pull-ups (or Lat Pulldowns)", details: "4 sets of 8-12 reps | 90s rest", instructions: "1. Grip the bar slightly wider than shoulder-width.\n2. Drive your elbows down and back to pull your chest towards the bar.\n3. Squeeze your back muscles at the top.\n4. Lower yourself slowly and fully extend your arms at the bottom." },
                { name: "Barbell Row", details: "4 sets of 8-12 reps | 90s rest", instructions: "1. Hinge at your hips, keeping your back straight.\n2. Pull the barbell towards your lower stomach, not your chest.\n3. Squeeze your shoulder blades together at the top.\n4. Lower the bar under control." },
                { name: "Chest-Supported T-Bar Row", details: "3 sets of 10-15 reps | 75s rest", instructions: "1. Lie face down on the pad.\n2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.\n3. Squeeze hard at the peak of the contraction." },
                { name: "Straight-Arm Pulldown", details: "3 sets of 12-15 reps | 60s rest", instructions: "1. Stand facing a high pulley with a straight bar.\n2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.\n3. Focus on using your lats, not your triceps." },
                { name: "Hyperextensions", details: "3 sets of 12-15 reps | 60s rest", instructions: "1. Position yourself on a hyperextension bench.\n2. Lower your torso until you feel a stretch in your hamstrings.\n3. Raise back up by squeezing your glutes and lower back." }
            ],
            abFinisher: null, cardio: null
        },
        {
            day: 3, title: "Shoulders", duration: "50-60 minutes",
            exercises: [
                { name: "Seated Dumbbell Press", details: "4 sets of 8-12 reps | 90s rest", instructions: "1. Sit on a bench with back support.\n2. Press the dumbbells overhead until your arms are almost fully extended.\n3. Lower the dumbbells slowly to shoulder height." },
                { name: "Cable Lateral Raise", details: "4 sets of 12-15 reps | 60s rest", instructions: "1. Stand side-on to a low cable pulley.\n2. Raise your arm out to the side, leading with your elbow.\n3. Keep a slight bend in your arm. Control the negative." },
                { name: "Reverse Pec-Deck", details: "4 sets of 15-20 reps | 60s rest", instructions: "1. Sit facing the machine with your chest against the pad.\n2. Drive your arms back and out in a wide arc, squeezing your rear delts." },
                { name: "Barbell Front Raise", details: "3 sets of 10-15 reps | 75s rest", instructions: "1. Hold a barbell with an overhand grip.\n2. Raise the bar to shoulder level, keeping your arms straight.\n3. Lower with control. Avoid using momentum." },
                { name: "Heavy Dumbbell Shrugs", details: "4 sets of 10-15 reps | 60s rest", instructions: "1. Hold heavy dumbbells at your sides.\n2. Elevate your shoulders straight up towards your ears.\n3. Squeeze for 2 seconds at the top." }
            ],
            abFinisher: { name: "Decline Reverse Crunches", details: "3 sets of 12-15 reps | 60s rest", instructions: "1. Lie on a decline bench, holding the top for support.\n2. Bring your knees toward your chest.\n3. Focus on lifting your hips off the bench using your lower abs." },
            cardio: null
        },
        {
            day: 4, title: "Quads & Calves", duration: "60-75 minutes",
            exercises: [
                { name: "Barbell Back Squats", details: "4 sets of 8-12 reps | 120s rest", instructions: "1. Place the bar on your upper back, not your neck.\n2. Keep your chest up and back straight.\n3. Squat down until your hips are at or below parallel.\n4. Drive up through your heels." },
                { name: "Leg Press", details: "4 sets of 10-15 reps | 90s rest", instructions: "1. Place your feet shoulder-width apart on the platform.\n2. Lower the weight until your knees are near a 90-degree angle.\n3. Press up, but do not lock your knees." },
                { name: "Bulgarian Split Squats", details: "3 sets of 10-12 reps (per leg) | 75s rest", instructions: "1. Place the top of your rear foot on a bench.\n2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.\n3. Drive up through your front heel." },
                { name: "Leg Extensions", details: "3 sets of 15-20+ reps | 60s rest (Drop set on last set)", instructions: "1. Squeeze your quads hard for 2 seconds at the top of each rep.\n2. Control the weight as you lower it." },
                { name: "Standing Calf Raises", details: "5 sets of 10-15 reps | 45s rest", instructions: "1. Get a deep stretch at the bottom of the movement.\n2. Press up onto your big toes and pause at the top." }
            ],
            abFinisher: null, cardio: null
        },
        {
            day: 5, title: "Arms (Biceps & Triceps)", duration: "35-45 minutes",
            exercises: [
                { name: "Close-Grip Bench Press", details: "4 sets of 8-12 reps | 90s rest", instructions: "1. Grip the bar narrower than shoulder-width.\n2. Keep your elbows tucked in close to your body as you lower the bar.\n3. Press up, focusing on your triceps." },
                { name: "Barbell Curls", details: "4 sets of 8-12 reps | 75s rest", instructions: "1. Keep your elbows pinned to your sides.\n2. Curl the weight up without using momentum or swinging your body.\n3. Squeeze your biceps at the top and lower with control." },
                { name: "Overhead Rope Extension", details: "3 sets of 10-15 reps | 60s rest", instructions: "1. Use a high cable pulley with a rope attachment.\n2. Extend your arms fully overhead, feeling a stretch in your triceps.\n3. Spread the rope apart at the top." },
                { name: "Incline Dumbbell Curls", details: "3 sets of 10-15 reps | 60s rest", instructions: "1. Sit back on an incline bench.\n2. Let your arms hang straight down to stretch the biceps.\n3. Curl the dumbbells up, rotating your palms to face you." },
                { name: "Superset: Rope Pushdowns & Cable Hammer Curls", details: "3 sets of 12-15 reps each | 60s rest after superset", instructions: "Pushdowns: Keep elbows pinned and spread the rope at the bottom.\nHammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip." }
            ],
            abFinisher: { name: "Landmine Twists", details: "3 sets of 10-12 reps (per side) | 60s rest", instructions: "1. Place one end of a barbell in a landmine attachment or corner.\n2. Hold the other end with both hands and rotate from your core, pivoting your feet." },
            cardio: { name: "20 minutes of moderate-intensity cardio", instructions: "Choose a machine like the stationary bike or elliptical. This is a great way to improve cardiovascular health without high impact." }
        },
        {
            day: 6, title: "Hamstrings & Glutes", duration: "55-65 minutes",
            exercises: [
                { name: "Romanian Deadlifts (RDLs)", details: "4 sets of 8-12 reps | 120s rest", instructions: "1. Hinge at your hips, keeping your back flat and legs almost straight.\n2. Lower the bar until you feel a deep stretch in your hamstrings.\n3. Drive your hips forward to return to the start." },
                { name: "Barbell Hip Thrusts", details: "4 sets of 8-12 reps | 90s rest", instructions: "1. Rest your upper back on a bench.\n2. Drive your hips up powerfully, squeezing your glutes hard at the top.\n3. Keep your chin tucked." },
                { name: "Seated or Lying Leg Curls", details: "4 sets of 12-15 reps | 75s rest (Drop set on last set)", instructions: "1. Point your toes to better engage the hamstrings.\n2. Squeeze at the peak of the curl and control the negative." },
                { name: "Hip Abduction Machine", details: "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)", instructions: "1. Lean your torso forward to better target the upper glute shelf.\n2. Control the movement, especially on the way back in." },
                { name: "45-Degree Kickbacks (Cable/Band)", details: "3 sets of 15-20 reps (per leg) | 45s rest", instructions: "1. Kick your leg back and out at a 45-degree angle.\n2. Squeeze your upper glute for a full second at the peak of the movement." }
            ],
            abFinisher: null, cardio: null
        },
        { day: 7, title: "Rest Day", duration: "Focus on recovery", exercises: [], abFinisher: null, cardio: null }
    ];

    // --- DOM ELEMENTS ---
    const daySelector = document.getElementById('day-selector');
    const workoutTitle = document.getElementById('workout-title');
    const workoutDuration = document.getElementById('workout-duration');
    const exerciseList = document.getElementById('exercise-list');
    const resetButton = document.getElementById('reset-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalInstructions = document.getElementById('modal-instructions');
    
    // --- STATE MANAGEMENT ---
    // Load progress from localStorage, or create an empty object if none exists.
    let progress = JSON.parse(localStorage.getItem('broSplitProgressV2')) || {};

    // Save the current progress object to localStorage.
    function saveProgress() {
        localStorage.setItem('broSplitProgressV2', JSON.stringify(progress));
    }

    // --- CORE LOGIC ---

    // Calculate the weighted progress for a given day (0 to 1).
    function calculateDayProgress(dayIndex) {
        const dayData = workoutData[dayIndex];
        if (dayData.exercises.length === 0) return 0;

        const numMainExercises = dayData.exercises.length;
        let completedMainCount = 0;
        for (let i = 0; i < numMainExercises; i++) {
            if (progress[`day${dayData.day}-exercise-item-${i}`]) {
                completedMainCount++;
            }
        }

        const hasAbs = !!dayData.abFinisher;
        const hasCardio = !!dayData.cardio;
        
        const mainWeight = (hasAbs || hasCardio) ? 0.9 : 1.0;
        const extraWeight = (hasAbs && hasCardio) ? 0.05 : 0.1;

        // BUG FIX: Prevent division by zero if a day has no main exercises.
        const mainProgress = numMainExercises > 0 ? (completedMainCount / numMainExercises) * mainWeight : 0;
        
        let extraProgress = 0;
        if (hasAbs && progress[`day${dayData.day}-ab-finisher-0`]) extraProgress += extraWeight;
        if (hasCardio && progress[`day${dayData.day}-cardio-session-0`]) extraProgress += extraWeight;

        return mainProgress + extraProgress;
    }

    // Loop through all day buttons and update their progress bars.
    function updateAllProgressBars() {
        document.querySelectorAll('.day-btn').forEach((btn) => {
            const dayIndex = parseInt(btn.dataset.day, 10);
            const progressValue = calculateDayProgress(dayIndex);
            const progressBar = btn.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = `${progressValue * 100}%`;
            }
        });
    }
    
    // --- MODAL LOGIC ---

    // Open the instruction modal with specific content.
    function openModal(title, instructions) {
        modalTitle.textContent = title;
        modalInstructions.textContent = instructions;
        modalOverlay.classList.remove('hidden');
    }

    // Close the instruction modal.
    function closeModal() {
        modalOverlay.classList.add('hidden');
    }

    // --- RENDERING LOGIC ---

    // Render the workout for the selected day.
    function renderWorkout(dayIndex) {
        const dayData = workoutData[dayIndex];
        workoutTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
        workoutDuration.textContent = `Estimated Duration: ${dayData.duration}`;
        exerciseList.innerHTML = ''; 

        if (dayData.exercises.length === 0 && !dayData.abFinisher && !dayData.cardio) {
            exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center;"><div class="exercise-details"><h3>Enjoy your rest!</h3><p>Focus on nutrition, hydration, and sleep to maximize growth.</p></div></li>';
            return;
        }

        // Helper function to create a single list item.
        const createExerciseItem = (exercise, type, index) => {
            const li = document.createElement('li');
            li.className = type;
            const progressId = `day${dayData.day}-${type}-${index}`;
            
            li.innerHTML = `
                <div class="exercise-details">
                    <h3>${exercise.name}</h3>
                    <p>${exercise.details}</p>
                </div>
                <button class="info-btn">i</button>
            `;
            
            if (progress[progressId]) {
                li.classList.add('completed');
            }

            // Click exercise item to toggle completion.
            li.addEventListener('click', (e) => {
                if (e.target.classList.contains('info-btn')) return;
                progress[progressId] = !progress[progressId];
                li.classList.toggle('completed');
                saveProgress();
                updateAllProgressBars();
            });

            // Click info button to open modal.
            li.querySelector('.info-btn').addEventListener('click', () => {
                openModal(exercise.name, exercise.instructions);
            });

            return li;
        };
        
        if (dayData.exercises.length > 0) {
            const mainTitle = document.createElement('h3');
            mainTitle.className = 'category-title';
            mainTitle.textContent = 'Main Workout';
            exerciseList.appendChild(mainTitle);
            dayData.exercises.forEach((ex, i) => exerciseList.appendChild(createExerciseItem(ex, 'exercise-item', i)));
        }

        if (dayData.abFinisher) {
            const abTitle = document.createElement('h3');
            abTitle.className = 'category-title';
            abTitle.textContent = 'Ab Finisher';
            exerciseList.appendChild(abTitle);
            exerciseList.appendChild(createExerciseItem(dayData.abFinisher, 'ab-finisher', 0));
        }

        if (dayData.cardio) {
            const cardioTitle = document.createElement('h3');
            cardioTitle.className = 'category-title';
            cardioTitle.textContent = 'Post-Workout Cardio';
            exerciseList.appendChild(cardioTitle);
            exerciseList.appendChild(createExerciseItem(dayData.cardio, 'cardio-session', 0));
        }
    }

    // Set the currently active day button and render its workout.
    function setActiveDay(dayIndex) {
        document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
        const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
        if (currentBtn) {
            currentBtn.classList.add('active');
        }
        renderWorkout(dayIndex);
    }
    
    // --- INITIALIZATION & EVENT LISTENERS ---

    // Create day selector buttons when the page loads.
    workoutData.forEach((day, index) => {
        const btn = document.createElement('button');
        btn.className = 'day-btn';
        const dayTitle = day.title === 'Rest Day' ? 'Rest' : `Day ${day.day}`;
        btn.innerHTML = `<span class="btn-text">${dayTitle}</span><div class="progress-bar"></div>`;
        btn.dataset.day = index;
        btn.addEventListener('click', () => setActiveDay(index));
        daySelector.appendChild(btn);
    });

    // Add listener for the reset button.
    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all your progress for the week?')) {
            progress = {};
            saveProgress();
            const activeDayIndex = document.querySelector('.day-btn.active').dataset.day;
            renderWorkout(activeDayIndex);
            updateAllProgressBars();
        }
    });

    // Add listeners for closing the modal.
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // --- APP START ---
    updateAllProgressBars();
    const today = new Date().getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    const initialDayIndex = today === 0 ? 6 : today - 1; // Map to our 0-indexed workoutData array
    setActiveDay(initialDayIndex);
});
