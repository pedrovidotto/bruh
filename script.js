document.addEventListener('DOMContentLoaded', () => {

    const workoutData = [
        {
            day: 1, title: "Chest", duration: "45-55 minutes",
            exercises: [
                { name: "Incline Dumbbell Press", details: "4 sets of 8-12 reps | 90s rest", instructions: `1. Set bench to a 30-45 degree angle.
2. Lie back with dumbbells on your thighs, then kick them up to your shoulders.
3. Press the weights up until your arms are extended, but not locked out.
4. Lower the dumbbells slowly and controlled back to the sides of your chest.` },
                { name: "Flat Machine Press", details: "3 sets of 10-15 reps | 75s rest", instructions: `1. Adjust the seat so the handles align with your mid-chest.
2. Press forward, focusing on squeezing your chest muscles together.
3. Stop just short of locking your elbows.
4. Return slowly to the starting position, feeling a stretch in your chest.` },
                { name: "Weighted Dips (Chest Focus)", details: "3 sets to Failure | 75s rest", instructions: `1. Use parallel bars and add weight if possible.
2. Lean your torso forward significantly as you perform the movement.
3. Lower yourself until your shoulders are slightly below your elbows.
4. Press back up, focusing on your chest.` },
                { name: "Pec-Deck Machine", details: "3 sets of 12-15+ reps | 60s rest (Drop set on last set)", instructions: `1. Adjust the seat so your shoulders are level with the handles.
2. Press the pads together in a controlled arc, squeezing your chest at the peak.
3. Slowly return to the starting position, allowing a good stretch.` },
                { name: "Cable Crossover (Low to High)", details: "3 sets of 12-15 reps | 60s rest", instructions: `1. Set pulleys to the lowest position.
2. Grab the handles, step forward, and stand with a slight bend in your torso.
3. Bring your hands up and together in an arc, squeezing your upper chest at the top.` }
            ],
            abFinisher: { name: "Cable Crunches", details: "3 sets of 15-20 reps | 45s rest", instructions: `1. Kneel facing a high pulley with a rope attachment.
2. Hold the rope by your head and crunch down, bringing your ribs toward your pelvis.
3. Focus on contracting your abs, not pulling with your arms.` },
            cardio: { name: "15 minutes of moderate-intensity cardio", instructions: `Choose a machine like the StairMaster or an incline treadmill. Keep a steady pace where you can hold a conversation.` }
        },
        {
            day: 2, title: "Back", duration: "50-60 minutes",
            exercises: [
                { name: "Weighted Pull-ups (or Lat Pulldowns)", details: "4 sets of 8-12 reps | 90s rest", instructions: `1. Grip the bar slightly wider than shoulder-width.
2. Drive your elbows down and back to pull your chest towards the bar.
3. Squeeze your back muscles at the top.
4. Lower yourself slowly and fully extend your arms at the bottom.` },
                { name: "Barbell Row", details: "4 sets of 8-12 reps | 90s rest", instructions: `1. Hinge at your hips, keeping your back straight.
2. Pull the barbell towards your lower stomach, not your chest.
3. Squeeze your shoulder blades together at the top.
4. Lower the bar under control.` },
                { name: "Chest-Supported T-Bar Row", details: "3 sets of 10-15 reps | 75s rest", instructions: `1. Lie face down on the pad.
2. Pull the handles, focusing on retracting your shoulder blades and driving your elbows back.
3. Squeeze hard at the peak of the contraction.` },
                { name: "Straight-Arm Pulldown", details: "3 sets of 12-15 reps | 60s rest", instructions: `1. Stand facing a high pulley with a straight bar.
2. Keeping your arms straight, pull the bar down in an arc until it touches your thighs.
3. Focus on using your lats, not your triceps.` },
                { name: "Hyperextensions", details: "3 sets of 12-15 reps | 60s rest", instructions: `1. Position yourself on a hyperextension bench.
2. Lower your torso until you feel a stretch in your hamstrings.
3. Raise back up by squeezing your glutes and lower back.` }
            ],
            abFinisher: null, cardio: null
        },
        {
            day: 3, title: "Shoulders", duration: "50-60 minutes",
            exercises: [
                { name: "Seated Dumbbell Press", details: "4 sets of 8-12 reps | 90s rest", instructions: `1. Sit on a bench with back support.
2. Press the dumbbells overhead until your arms are almost fully extended.
3. Lower the dumbbells slowly to shoulder height.` },
                { name: "Cable Lateral Raise", details: "4 sets of 12-15 reps | 60s rest", instructions: `1. Stand side-on to a low cable pulley.
2. Raise your arm out to the side, leading with your elbow.
3. Keep a slight bend in your arm. Control the negative.` },
                { name: "Reverse Pec-Deck", details: "4 sets of 15-20 reps | 60s rest", instructions: `1. Sit facing the machine with your chest against the pad.
2. Drive your arms back and out in a wide arc, squeezing your rear delts.` },
                { name: "Barbell Front Raise", details: "3 sets of 10-15 reps | 75s rest", instructions: `1. Hold a barbell with an overhand grip.
2. Raise the bar to shoulder level, keeping your arms straight.
3. Lower with control. Avoid using momentum.` },
                { name: "Heavy Dumbbell Shrugs", details: "4 sets of 10-15 reps | 60s rest", instructions: `1. Hold heavy dumbbells at your sides.
2. Elevate your shoulders straight up towards your ears.
3. Squeeze for 2 seconds at the top.` }
            ],
            abFinisher: { name: "Decline Reverse Crunches", details: "3 sets of 12-15 reps | 60s rest", instructions: `1. Lie on a decline bench, holding the top for support.
2. Bring your knees toward your chest.
3. Focus on lifting your hips off the bench using your lower abs.` },
            cardio: null
        },
        {
            day: 4, title: "Quads & Calves", duration: "60-75 minutes",
            exercises: [
                { name: "Barbell Back Squats", details: "4 sets of 8-12 reps | 120s rest", instructions: `1. Place the bar on your upper back, not your neck.
2. Keep your chest up and back straight.
3. Squat down until your hips are at or below parallel.
4. Drive up through your heels.` },
                { name: "Leg Press", details: "4 sets of 10-15 reps | 90s rest", instructions: `1. Place your feet shoulder-width apart on the platform.
2. Lower the weight until your knees are near a 90-degree angle.
3. Press up, but do not lock your knees.` },
                { name: "Bulgarian Split Squats", details: "3 sets of 10-12 reps (per leg) | 75s rest", instructions: `1. Place the top of your rear foot on a bench.
2. Lower your back knee towards the floor, keeping your front knee aligned with your foot.
3. Drive up through your front heel.` },
                { name: "Leg Extensions", details: "3 sets of 15-20+ reps | 60s rest (Drop set on last set)", instructions: `1. Squeeze your quads hard for 2 seconds at the top of each rep.
2. Control the weight as you lower it.` },
                { name: "Standing Calf Raises", details: "5 sets of 10-15 reps | 45s rest", instructions: `1. Get a deep stretch at the bottom of the movement.
2. Press up onto your big toes and pause at the top.` }
            ],
            abFinisher: null, cardio: null
        },
        {
            day: 5, title: "Arms (Biceps & Triceps)", duration: "35-45 minutes",
            exercises: [
                { name: "Close-Grip Bench Press", details: "4 sets of 8-12 reps | 90s rest", instructions: `1. Grip the bar narrower than shoulder-width.
2. Keep your elbows tucked in close to your body as you lower the bar.
3. Press up, focusing on your triceps.` },
                { name: "Barbell Curls", details: "4 sets of 8-12 reps | 75s rest", instructions: `1. Keep your elbows pinned to your sides.
2. Curl the weight up without using momentum or swinging your body.
3. Squeeze your biceps at the top and lower with control.` },
                { name: "Overhead Rope Extension", details: "3 sets of 10-15 reps | 60s rest", instructions: `1. Use a high cable pulley with a rope attachment.
2. Extend your arms fully overhead, feeling a stretch in your triceps.
3. Spread the rope apart at the top.` },
                { name: "Incline Dumbbell Curls", details: "3 sets of 10-15 reps | 60s rest", instructions: `1. Sit back on an incline bench.
2. Let your arms hang straight down to stretch the biceps.
3. Curl the dumbbells up, rotating your palms to face you.` },
                { name: "Superset: Rope Pushdowns & Cable Hammer Curls", details: "3 sets of 12-15 reps each | 60s rest after superset", instructions: `Pushdowns: Keep elbows pinned and spread the rope at the bottom.
Hammer Curls: Use a rope on a low pulley, keeping a neutral (hammer) grip.` }
            ],
            abFinisher: { name: "Landmine Twists", details: "3 sets of 10-12 reps (per side) | 60s rest", instructions: `1. Place one end of a barbell in a landmine attachment or corner.
2. Hold the other end with both hands and rotate from your core, pivoting your feet.` },
            cardio: { name: "20 minutes of moderate-intensity cardio", instructions: `Choose a machine like the stationary bike or elliptical. This is a great way to improve cardiovascular health without high impact.` }
        },
        {
            day: 6, title: "Hamstrings & Glutes", duration: "55-65 minutes",
            exercises: [
                { name: "Romanian Deadlifts (RDLs)", details: "4 sets of 8-12 reps | 120s rest", instructions: `1. Hinge at your hips, keeping your back flat and legs almost straight.
2. Lower the bar until you feel a deep stretch in your hamstrings.
3. Drive your hips forward to return to the start.` },
                { name: "Barbell Hip Thrusts", details: "4 sets of 8-12 reps | 90s rest", instructions: `1. Rest your upper back on a bench.
2. Drive your hips up powerfully, squeezing your glutes hard at the top.
3. Keep your chin tucked.` },
                { name: "Seated or Lying Leg Curls", details: "4 sets of 12-15 reps | 75s rest (Drop set on last set)", instructions: `1. Point your toes to better engage the hamstrings.
2. Squeeze at the peak of the curl and control the negative.` },
                { name: "Hip Abduction Machine", details: "4 sets of 15-20+ reps | 60s rest (Double drop set on last set)", instructions: `1. Lean your torso forward to better target the upper glute shelf.
2. Control the movement, especially on the way back in.` },
                { name: "45-Degree Kickbacks (Cable/Band)", details: "3 sets of 15-20 reps (per leg) | 45s rest", instructions: `1. Kick your leg back and out at a 45-degree angle.
2. Squeeze your upper glute for a full second at the peak of the movement.` }
            ],
            abFinisher: null, cardio: null
        },
        {
            day: 7, title: "Rest Day", duration: "Focus on recovery",
            exercises: [], abFinisher: null, cardio: null
        }
    ];

    const daySelector = document.getElementById('day-selector');
    const workoutTitle = document.getElementById('workout-title');
    const workoutDuration = document.getElementById('workout-duration');
    const exerciseList = document.getElementById('exercise-list');
    const resetButton = document.getElementById('reset-button');
    const infoModalOverlay = document.getElementById('info-modal-overlay');
    const infoModalCloseBtn = document.getElementById('info-modal-close-btn');
    const infoModalTitle = document.getElementById('info-modal-title');
    const infoModalInstructions = document.getElementById('info-modal-instructions');
    const resetModalOverlay = document.getElementById('reset-modal-overlay');
    const confirmResetBtn = document.getElementById('confirm-reset-btn');
    const cancelResetBtn = document.getElementById('cancel-reset-btn');
    let progress = {};

    function loadProgress() {
        try {
            const savedProgress = localStorage.getItem('broSplitProgress');
            progress = savedProgress ? JSON.parse(savedProgress) : {};
        } catch (e) {
            console.error("Could not load progress from localStorage:", e);
            progress = {};
        }
    }
    
    function saveProgress() {
        try {
            localStorage.setItem('broSplitProgress', JSON.stringify(progress));
        } catch (e) {
            console.error("Could not save progress to localStorage:", e);
        }
    }

    function openInfoModal(title, instructions) {
        infoModalTitle.textContent = title;
        infoModalInstructions.textContent = instructions;
        infoModalOverlay.classList.remove('hidden');
    }

    function closeInfoModal() {
        infoModalOverlay.classList.add('hidden');
    }

    function openResetModal() {
        resetModalOverlay.classList.remove('hidden');
    }

    function closeResetModal() {
        resetModalOverlay.classList.add('hidden');
    }

    function renderWorkout(dayIndex) {
        const dayData = workoutData[dayIndex];
        workoutTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
        workoutDuration.textContent = `Estimated Duration: ${dayData.duration}`;
        exerciseList.innerHTML = ''; 

        if (dayData.exercises.length === 0) {
            exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center;"><div class="exercise-details"><h3>Enjoy your rest!</h3><p>Focus on nutrition, hydration, and sleep to maximize growth.</p></div></li>';
            return;
        }

        const createExerciseItem = (exercise, type, index) => {
            const li = document.createElement('li');
            li.className = type;
            const progressId = `day${dayData.day}-${type}-${index}`;
            
            li.innerHTML = `
                <input type="checkbox" class="checkbox" id="${progressId}" ${progress[progressId] ? 'checked' : ''}>
                <div class="exercise-details">
                    <h3>${exercise.name}</h3>
                    <p>${exercise.details}</p>
                </div>
                <button class="info-btn">i</button>
            `;
            
            if (progress[progressId]) {
                li.classList.add('completed');
            }

            li.querySelector('.checkbox').addEventListener('change', (e) => {
                progress[progressId] = e.target.checked;
                li.classList.toggle('completed');
                saveProgress();
            });

            li.querySelector('.info-btn').addEventListener('click', () => {
                openInfoModal(exercise.name, exercise.instructions);
            });

            return li;
        };
        
        const mainTitle = document.createElement('h3');
        mainTitle.className = 'category-title';
        mainTitle.textContent = 'Main Workout';
        exerciseList.appendChild(mainTitle);
        dayData.exercises.forEach((ex, i) => exerciseList.appendChild(createExerciseItem(ex, 'exercise-item', i)));

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

    function setActiveDay(dayIndex) {
        document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
        const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
        if (currentBtn) {
            currentBtn.classList.add('active');
        }
        renderWorkout(dayIndex);
    }
    
    function init() {
        loadProgress();
        
        workoutData.forEach((day, index) => {
            const btn = document.createElement('button');
            btn.className = 'day-btn';
            btn.textContent = day.title === 'Rest Day' ? 'Rest' : `Day ${day.day}`;
            btn.dataset.day = index;
            btn.addEventListener('click', () => setActiveDay(index));
            daySelector.appendChild(btn);
        });

        resetButton.addEventListener('click', openResetModal);
        
        confirmResetBtn.addEventListener('click', () => {
            progress = {};
            saveProgress();
            const activeDayIndex = document.querySelector('.day-btn.active')?.dataset.day || 0;
            renderWorkout(parseInt(activeDayIndex));
            closeResetModal();
        });

        cancelResetBtn.addEventListener('click', closeResetModal);

        infoModalCloseBtn.addEventListener('click', closeInfoModal);
        infoModalOverlay.addEventListener('click', (e) => {
            if (e.target === infoModalOverlay) {
                closeInfoModal();
            }
        });
         resetModalOverlay.addEventListener('click', (e) => {
            if (e.target === resetModalOverlay) {
                closeResetModal();
            }
        });

        const today = new Date().getDay();
        const initialDayIndex = today === 0 ? 6 : today - 1;
        setActiveDay(initialDayIndex);
    }

    init();
});

