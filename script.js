// --- Global Data & Configuration ---
// Embed workout data directly, remove 'calories' property
const workoutData = [
  {"day":1,"title":"Chest","duration":"45-55 min","exercises":[{"name":"Incline DB Press","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Set bench...\n4. Lower slowly."},{"name":"Flat Machine Press","details":"3 sets of 10-15 reps | 75s rest","instructions":"1. Adjust seat...\n4. Return slowly."},{"name":"Weighted Dips (CF)","details":"3 sets to Failure | 75s rest","instructions":"1. Use bars...\n4. Press back up."},{"name":"Pec-Deck Machine","details":"3 sets of 12-15+ reps | 60s rest (DS)","instructions":"1. Adjust seat...\n3. Slowly return."},{"name":"Cable Crossover (L2H)","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Set pulleys low...\n3. Bring hands up."}],"abFinisher":{"name":"Cable Crunches","details":"3 sets of 15-20 reps | 45s rest","instructions":"1. Kneel high pulley...\n3. Focus on abs."},"cardio":{"name":"15 min cardio","details":"1 set of 15 minutes","instructions":"StairMaster or incline treadmill."}},
  {"day":2,"title":"Back","duration":"50-60 min","exercises":[{"name":"Pull-ups / Pulldowns","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Grip wide...\n4. Lower slowly."},{"name":"Barbell Row","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Hinge hips...\n4. Lower control."},{"name":"Chest-Sup T-Bar Row","details":"3 sets of 10-15 reps | 75s rest","instructions":"1. Lie down...\n3. Squeeze peak."},{"name":"Straight-Arm Pulldown","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Stand facing...\n3. Use lats."},{"name":"Hyperextensions","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Position...\n3. Squeeze glutes/back."}],"abFinisher":null,"cardio":null},
  {"day":3,"title":"Quads & Calves","duration":"60-75 min","exercises":[{"name":"Barbell Squats","details":"4 sets of 8-12 reps | 120s rest","instructions":"1. Bar upper back...\n4. Drive heels."},{"name":"Leg Press","details":"4 sets of 10-15 reps | 90s rest","instructions":"1. Feet shoulder-width...\n3. Don't lock."},{"name":"Bulgarian Split Squat","details":"3 sets of 10-12 reps/leg | 75s rest","instructions":"1. Rear foot on bench...\n3. Drive front heel."},{"name":"Leg Extensions","details":"3 sets of 15-20+ reps | 60s rest (DS)","instructions":"1. Squeeze quads 2s...\n2. Control lower."},{"name":"Standing Calf Raises","details":"5 sets of 10-15 reps | 45s rest","instructions":"1. Deep stretch...\n2. Press big toes."}],"abFinisher":null,"cardio":null},
  {"day":4,"title":"Shoulders & Chest","duration":"60-70 min","exercises":[{"name":"Seated DB Press","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Sit support...\n3. Lower slowly."},{"name":"Cable Lateral Raise","details":"4 sets of 12-15 reps | 60s rest","instructions":"1. Stand side low cable...\n3. Control negative."},{"name":"Reverse Pec-Deck","details":"4 sets of 15-20 reps | 60s rest","instructions":"1. Sit facing...\n2. Squeeze rear delts."},{"name":"Flat DB Press","details":"3 sets of 8-12 reps | 75s rest","instructions":"1. Lie flat...\n3. Lower slowly."},{"name":"Cable Flys","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Pulleys chest height...\n3. Squeeze chest."}],"abFinisher":{"name":"Decline Reverse Crunch","details":"3 sets of 12-15 reps | 60s rest","instructions":"1. Lie decline...\n3. Lift hips."},"cardio":null},
  {"day":5,"title":"Arms","duration":"35-45 min","exercises":[{"name":"Close-Grip Bench","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Narrow grip...\n3. Focus triceps."},{"name":"Barbell Curls","details":"4 sets of 8-12 reps | 75s rest","instructions":"1. Elbows pinned...\n3. Squeeze biceps."},{"name":"Overhead Rope Ext","details":"3 sets of 10-15 reps | 60s rest","instructions":"1. High cable rope...\n3. Spread rope."},{"name":"Incline DB Curls","details":"3 sets of 10-15 reps | 60s rest","instructions":"1. Sit incline...\n3. Curl & rotate."},{"name":"SS: Rope Pushdowns & Hammer Curls","details":"3 sets of 12-15 reps each | 60s rest","instructions":"Pushdowns: Elbows pinned.\nHammer: Low pulley."}],"abFinisher":{"name":"Landmine Twists","details":"3 sets of 10-12/side | 60s rest","instructions":"1. Bar corner...\n2. Rotate core."},"cardio":{"name":"20 min cardio","details":"1 set of 20 minutes","instructions":"Bike or elliptical."}},
  {"day":6,"title":"Hams & Glutes","duration":"55-65 min","exercises":[{"name":"RDLs","details":"4 sets of 8-12 reps | 120s rest","instructions":"1. Hinge hips...\n3. Drive hips."},{"name":"Barbell Hip Thrusts","details":"4 sets of 8-12 reps | 90s rest","instructions":"1. Upper back on bench...\n3. Chin tucked."},{"name":"Leg Curls","details":"4 sets of 12-15 reps | 75s rest (DS)","instructions":"1. Point toes...\n2. Control negative."},{"name":"Hip Abduction","details":"4 sets of 15-20+ reps | 60s rest (DSx2)","instructions":"1. Lean forward...\n2. Control return."},{"name":"45deg Kickbacks","details":"3 sets of 15-20 reps/leg | 45s rest","instructions":"1. Kick back/out 45deg...\n2. Squeeze glute."}],"abFinisher":null,"cardio":null},
  {"day":7,"title":"Rest Day","duration":"Focus Recovery","exercises":[],"abFinisher":null,"cardio":null}
]; // Simplified details for brevity
const LONG_PRESS_DURATION = 500;
const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- DOM Element References ---
// Use a function to ensure elements exist after DOM load
let DOMElements = {};
function cacheDOMElements() {
    const ids = [
        "day-selector", "workout-title", "workout-duration", "exercise-list",
        "completed-list", "completed-title", "reset-button", "timer-display",
        "info-modal-overlay", "info-modal-close-btn", "info-modal-title",
        "info-modal-instructions", "reset-modal-overlay", "confirm-reset-btn",
        "cancel-reset-btn", "completion-overlay", "completion-message"
    ];
    let allFound = true;
    ids.forEach(id => {
        const camelCaseId = id.replace(/-./g, m => m[1].toUpperCase());
        DOMElements[camelCaseId] = document.getElementById(id);
        if (!DOMElements[camelCaseId]) {
            console.error(`DOM Element not found: #${id}`);
            allFound = false;
        }
    });
     // Special case for completion title inside the card
     DOMElements.completionTitleEl = DOMElements.completionOverlay?.querySelector("h2#completion-title");
     if (!DOMElements.completionTitleEl && DOMElements.completionOverlay) {
         // Fallback if ID wasn't found but overlay exists
         DOMElements.completionTitleEl = DOMElements.completionOverlay.querySelector("h2");
         // console.warn("Using fallback selector for completion title.");
     }
     if (!DOMElements.completionTitleEl) {
         console.error("DOM Element not found: #completion-title inside #completion-overlay");
         allFound = false;
     }

    return allFound; // Return true if all essential elements were found
}


// --- State Variables ---
let progress = {}; // { progressId: completedSets }
let activeTimerId = null;
let restPeriodEndTime = null;
let currentExerciseCard = null; // Reference to LI with active indicator

// --- Utility Functions ---

function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress"); // Use new key
        progress = savedProgress ? JSON.parse(savedProgress) : {};
        // Ensure progress values are numbers after loading
        for (const key in progress) { progress[key] = Number(progress[key]) || 0; }
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}

function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateUI(); // Central UI update
    } catch (e) { console.error("Could not save progress:", e); }
}

function parseRestTime(details = '') { /* ... same ... */ }
function parseSets(details = '') { /* ... same ... */ }
function parseRestTime(details = '') {
    const match = details.match(/\|\s*(\d+)s/);
    return match ? parseInt(match[1], 10) : 0;
}
function parseSets(details = '') {
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of/i);
    if (match) return 1;
    // console.warn("Could not parse sets from details:", details);
    return 1; // Default
}

// --- Timer and Haptic Feedback ---

function triggerHapticFeedback() { /* ... same ... */ }
function stopActiveTimer() { /* ... same ... */ }
function startOnScreenTimer(durationSeconds) { /* ... same ... */ }
function checkTimerOnFocus() { /* ... same ... */ }
function triggerHapticFeedback() { if ('vibrate' in navigator && typeof navigator.vibrate === 'function') { try { navigator.vibrate(50); } catch (e) {} }}
function stopActiveTimer() { if (activeTimerId) { clearInterval(activeTimerId); activeTimerId = null; DOMElements.timerDisplay.classList.add('hidden'); localStorage.removeItem('restPeriodEndTime'); restPeriodEndTime = null; removeActiveIndicator(); }}
function startOnScreenTimer(durationSeconds) { stopActiveTimer(); if (durationSeconds <= 0) { removeActiveIndicator(); return; } restPeriodEndTime = Date.now() + durationSeconds * 1000; localStorage.setItem('restPeriodEndTime', restPeriodEndTime); let timeLeft = durationSeconds; DOMElements.timerDisplay.classList.remove('hidden'); const updateTimer = () => { const m=Math.floor(timeLeft/60).toString().padStart(2,'0'); const s=(timeLeft%60).toString().padStart(2,'0'); DOMElements.timerDisplay.textContent = `${m}:${s}`; if (timeLeft <= 0) { stopActiveTimer(); triggerHapticFeedback(); } else { timeLeft--; } }; updateTimer(); activeTimerId = setInterval(updateTimer, 1000); }
function checkTimerOnFocus() { const endTime = localStorage.getItem('restPeriodEndTime'); if (!endTime) { removeActiveIndicator(); return; } restPeriodEndTime = parseInt(endTime, 10); if (isNaN(restPeriodEndTime)) { localStorage.removeItem('restPeriodEndTime'); removeActiveIndicator(); return; } const remainingTime = Math.round((restPeriodEndTime - Date.now()) / 1000); if (remainingTime > 0) { startOnScreenTimer(remainingTime); } else { stopActiveTimer(); }}


// --- UI Update Functions ---

function setActiveIndicator(cardElement) { /* ... same ... */ }
function removeActiveIndicator() { /* ... same ... */ }
function setActiveIndicator(cardElement) { removeActiveIndicator(); if (cardElement && cardElement.parentElement === DOMElements.exerciseList) { cardElement.classList.add('is-current-exercise'); currentExerciseCard = cardElement; }}
function removeActiveIndicator() { if (currentExerciseCard) { currentExerciseCard.classList.remove('is-current-exercise'); currentExerciseCard = null; }}

// Updates the 'X/Y' counter and related classes
function updateSetCounterVisuals(card, progressId, totalSets) {
    if (!card || !progressId || isNaN(totalSets)) return;
    const completedSets = progress[progressId] || 0;
    const isComplete = completedSets >= totalSets;
    const setCounter = card.querySelector('.set-counter');
    if (setCounter) {
        setCounter.textContent = `${completedSets}/${totalSets}`;
        setCounter.classList.toggle('sets-complete', isComplete);
    }
    card.classList.toggle('fully-completed', isComplete);
}

// Updates day button progress bars
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData) { btn.style.setProperty('--progress', '0%'); return; }
        const hasItems = (dayData.exercises?.length > 0) || dayData.abFinisher || dayData.cardio;
        if (!hasItems) { btn.style.setProperty('--progress', '0%'); return; }
        let totalSetsForDay=0, completedSetsForDay=0;
        const allDayItems = [ /* ... construct allDayItems ... */ ];
        const allDayItems = [
             ...(dayData.exercises || []).map((ex, i) => ({ details: ex.details, id: `day${dayData.day}-exercise-${i}`})),
             ...(dayData.abFinisher ? [{ details: dayData.abFinisher.details, id: `day${dayData.day}-ab-0` }] : []),
             ...(dayData.cardio ? [{ details: dayData.cardio.details, id: `day${dayData.day}-cardio-0` }] : [])
         ];

         allDayItems.forEach(item => { const sets = parseSets(item.details); totalSetsForDay += sets; completedSetsForDay += Number(progress[item.id]) || 0; });
         const perc = totalSetsForDay > 0 ? (completedSetsForDay / totalSetsForDay) * 100 : 0;
         btn.style.setProperty('--progress', `${isNaN(perc) ? 0 : perc}%`);
    });
}

// Shows/hides the "// COMPLETED" title
function updateCompletedSectionVisibility() {
    const hasCompletedItems = DOMElements.completedList.querySelector('li') !== null;
    DOMElements.completedTitle.classList.toggle('hidden', !hasCompletedItems);
}

// Central UI update function
function updateUI() {
    updateProgressBars();
    updateCompletedSectionVisibility();
}

// --- DOM Manipulation & Listener Management ---

// Finds correct insertion point for moving item back to active
function findInsertionPointInActiveList(cardToMoveBack) { /* ... same robust version ... */ }
function findInsertionPointInActiveList(cardToMoveBack) {
    const isExercise = cardToMoveBack.classList.contains('exercise-item');
    const isAb = cardToMoveBack.classList.contains('ab-finisher');
    let targetSectionTitle = null;
    const titles = DOMElements.exerciseList.querySelectorAll('.category-title');
    if (isExercise && titles[0]) targetSectionTitle = titles[0];
    else if (isAb && titles.length > 1) targetSectionTitle = titles[1];
    else if (titles.length > 2) targetSectionTitle = titles[2]; // Cardio
    else if (titles.length > 0) targetSectionTitle = titles[titles.length - 1];
    let insertBeforeNode = null;
    if (targetSectionTitle) {
        insertBeforeNode = targetSectionTitle.nextElementSibling;
        while (insertBeforeNode && !insertBeforeNode.classList.contains('category-title') && !insertBeforeNode.classList.contains('fully-completed')) { insertBeforeNode = insertBeforeNode.nextElementSibling; }
    } else { insertBeforeNode = DOMElements.exerciseList.firstChild; }
    return insertBeforeNode;
}


// Animate move TO completed list
function animateAndMoveToCompleted(card) { /* ... same robust version ... */ }
function animateAndMoveToCompleted(card) {
    if (!card || card.parentElement !== DOMElements.exerciseList) return;
    removeListenersFromCard(card); // Use the correct removal function name
    if (currentExerciseCard === card) removeActiveIndicator();
    card.classList.add('reordering');
    const handleTransitionEnd = () => {
        card.removeEventListener('transitionend', handleTransitionEnd);
        if (card.parentElement !== DOMElements.completedList) {
            DOMElements.completedList.appendChild(card);
            attachListenersToCard(card, true); // Use the correct attachment function name
            updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10));
            updateCompletedSectionVisibility();
        }
        card.classList.remove('reordering');
    };
    card.addEventListener('transitionend', handleTransitionEnd);
    setTimeout(() => { if (card.classList.contains('reordering')) handleTransitionEnd(); }, 350);
}


// Instantly move FROM completed list back to active list
function moveFromCompletedToActive(card) { /* ... same robust version ... */ }
function moveFromCompletedToActive(card) {
    if (!card || card.parentElement !== DOMElements.completedList) return;
    removeListenersFromCard(card); // Use the correct removal function name
    const insertBeforeNode = findInsertionPointInActiveList(card);
    DOMElements.exerciseList.insertBefore(card, insertBeforeNode);
    attachListenersToCard(card, false); // Use the correct attachment function name
    updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10));
    updateCompletedSectionVisibility();
}


// Moves an active item to the top of its section
function moveToTopOfSection(card) { /* ... same robust version ... */ }
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

    if (!actionOccurred) return;

    // 2. Update State FIRST
    progress[progressId] = newCompletedCount;
    saveProgress(); // Save the new state & update general UI (day buttons, completed title visibility)

    // 3. Perform Side Effects
    let movedToTop = false;
    if (direction === 'increment') {
        triggerHapticFeedback();
        const detailsP = card.querySelector('.exercise-details p');
        const restTime = parseRestTime(detailsP ? detailsP.textContent : '');
        setActiveIndicator(card); // Set indicator BEFORE timer
        startOnScreenTimer(restTime);
        if (card.parentElement === DOMElements.exerciseList) {
            movedToTop = moveToTopOfSection(card); // Attempt move
        }
    } else { // 'decrement'
        if (currentExerciseCard === card) stopActiveTimer(); // Stop timer if decrementing current
    }

    // 4. Update DOM (Move Lists / Visuals)
    const isNowFullyCompleted = newCompletedCount >= totalSets;
    const needsMoveToCompleted = !wasFullyCompleted && isNowFullyCompleted;
    const needsMoveToActive = wasFullyCompleted && !isNowFullyCompleted;

    // Perform DOM move only if status flipped
    if (needsMoveToCompleted) {
        animateAndMoveToCompleted(card); // Moves card, re-adds listeners inside
    } else if (needsMoveToActive) {
        moveFromCompletedToActive(card); // Moves card, re-adds listeners inside
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
    const allItems = [ /* ... construct allItems ... */];
    const allItems = [
        ...(dayData.exercises || []).map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-${i}`})),
        ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-0` }] : []),
        ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-0` }] : [])
    ];

    if (allItems.length === 0) return;
    const isDayComplete = allItems.every(item => { const sets = parseSets(item.details); const completed = progress[item.id] || 0; return completed >= sets; });
    if (isDayComplete) {
        const isWeekComplete = activeDayIndex === 5; // Day 6 is index 5
        const titleElement = DOMElements.completionOverlay?.querySelector("h2#completion-title");
        if (titleElement) titleElement.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE";

        DOMElements.completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S..." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        DOMElements.completionOverlay.classList.remove('hidden');
        if (isWeekComplete) { setTimeout(() => { progress = {}; localStorage.removeItem("workoutSysProgress"); localStorage.removeItem('restPeriodEndTime'); location.reload(); }, 5000); }
        else { setTimeout(() => DOMElements.completionOverlay.classList.add('hidden'), 4000); }
    }
}


// --- Event Listener Management ---

// Removes ALL listeners added by attachListenersToCard
function removeListenersFromCard(card) {
    if (!card || !card._eventHandlers) return; // Exit if no card or no handlers stored
    Object.keys(card._eventHandlers).forEach(type => {
        const handlerData = card._eventHandlers[type];
        if (handlerData) { card.removeEventListener(type, handlerData.handler, handlerData.options); }
    });
    const infoBtn = card.querySelector(".info-btn");
    if (infoBtn && infoBtn._eventHandlers?.click) { infoBtn.removeEventListener('click', infoBtn._eventHandlers.click.handler); infoBtn._eventHandlers = null; }
    card._eventHandlers = null; // Clear handlers from card
}

// Attaches the correct listeners based on completion state
function attachListenersToCard(card, isCompleted) {
    const progressId = card.dataset.progressId; if (!progressId) return;
    const totalSets = parseInt(card.dataset.totalSets, 10); if (isNaN(totalSets)) return;

    removeListenersFromCard(card); // Remove existing listeners first
    card._eventHandlers = {}; // Initialize handler storage
    const infoBtn = card.querySelector(".info-btn");
     if(infoBtn) infoBtn._eventHandlers = {};

    // Click/Tap to Increment (Only for Active Items)
    if (!isCompleted) {
        const clickHandler = (e) => { if (!e.target.closest('.info-btn')) handleSeriesUpdate(card, progressId, totalSets, 'increment'); };
        card.addEventListener('click', clickHandler);
        card._eventHandlers.click = { handler: clickHandler, options: false };
    }

    // Decrement listeners (Always add)
    const contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); };
    card.addEventListener('contextmenu', contextHandler);
    card._eventHandlers.contextmenu = { handler: contextHandler, options: false };

    let longPressTimeoutId = null; // Use local variable
    const touchStartHandler = (e) => { if (e.target.closest('.info-btn')) return; clearTimeout(longPressTimeoutId); longPressTimeoutId = setTimeout(() => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); longPressTimeoutId = null; }, LONG_PRESS_DURATION); };
    const clearLongPress = () => { clearTimeout(longPressTimeoutId); longPressTimeoutId = null; };
    card.addEventListener('touchstart', touchStartHandler, { passive: false });
    card.addEventListener('touchend', clearLongPress);
    card.addEventListener('touchcancel', clearLongPress);
    card.addEventListener('touchmove', clearLongPress);
    // Store refs for removal
    card._eventHandlers.touchstart = { handler: touchStartHandler, options: { passive: false } };
    card._eventHandlers.touchend = { handler: clearLongPress, options: false };
    card._eventHandlers.touchcancel = { handler: clearLongPress, options: false };
    card._eventHandlers.touchmove = { handler: clearLongPress, options: false };

    // Info Button Listener (Always add)
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
            // Fetch exercise data robustly
            const dayNumMatch=progressId.match(/day(\d+)/); const typeMatch=progressId.match(/-([a-z]+)-/); const indexMatch=progressId.match(/-(\d+)$/);
            if (!dayNumMatch || !typeMatch || !indexMatch) return;
            const dayNum=parseInt(dayNumMatch[1],10); const type=typeMatch[1]; const index=parseInt(indexMatch[1],10);
            const dayData = workoutData.find(d => d.day === dayNum); let exerciseData;
             if (dayData) {
                 if (type === 'exercise' && dayData.exercises?.[index]) exerciseData = dayData.exercises[index];
                 else if (type === 'ab' && dayData.abFinisher) exerciseData = dayData.abFinisher;
                 else if (type === 'cardio' && dayData.cardio) exerciseData = dayData.cardio;
             }
             if (exerciseData) { openInfoModal(exerciseData.name, exerciseData.instructions); }
             else { console.error("Could not find data for modal:", progressId); }
        };
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._eventHandlers.click = { handler: infoClickHandler, options: false };
    }
}


// --- DOM Rendering ---

// Creates the LI element structure WITHOUT listeners
const createExerciseItemElement = (exercise, cssClass, idType, index, dayNum) => {
    const li = document.createElement("li");
    li.className = cssClass;
    const progressId = `day${dayNum}-${idType}-${index}`;
    const totalSets = parseSets(exercise.details);
    if (!progressId || isNaN(totalSets)) return null;

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

    // Set initial visual state based on progress (counter text + class)
    updateSetCounterVisuals(li, progressId, totalSets); // Sets 'fully-completed' class too
    return li;
};


// Renders sections: Creates elements, appends titles/items, adds listeners AFTER appending
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    let hasActiveItems = false;
    const sectionElements = []; // Store { element, isCompleted }

    // 1. Create all LI elements for this section
    const itemsArray = Array.isArray(items) ? items : [items];
    itemsArray.forEach((item, i) => {
        const element = createExerciseItemElement(item, cssClass, idType, i, dayNum);
        if (element) {
            const isCompleted = element.classList.contains('fully-completed');
            sectionElements.push({ element, isCompleted });
            if (!isCompleted) hasActiveItems = true;
        }
    });

    // 2. Add category title only if section contains active items
    if (hasActiveItems) {
        const sectionTitleElement = document.createElement("h3");
        sectionTitleElement.className = "category-title";
        sectionTitleElement.textContent = title;
        DOMElements.exerciseList.appendChild(sectionTitleElement);
    }

    // 3. Append elements to appropriate lists and THEN add listeners
    sectionElements.forEach(({ element, isCompleted }) => {
        if (isCompleted) {
            DOMElements.completedList.appendChild(element);
        } else {
            DOMElements.exerciseList.appendChild(element); // Append active items
        }
        // Add listeners *after* element is in the DOM
        attachListenersToCard(element, isCompleted);
    });
};


// Main function to render the workout - Rewritten for clarity and correctness
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) { console.error(`No data for day index: ${dayIndex}`); return; }

    DOMElements.workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    DOMElements.workoutDuration.textContent = `// EST. DURATION: ${dayData.duration ? dayData.duration.toUpperCase() : 'N/A'}`;

    // --- Clear previous content and listeners reliably ---
    const clearList = (listElement) => {
        [...listElement.children].forEach(child => { if(child.tagName === 'LI') removeListenersFromCard(child); });
        listElement.innerHTML = "";
    };
    clearList(DOMElements.exerciseList);
    clearList(DOMElements.completedList);
    removeActiveIndicator(); // Ensure indicator is cleared

    // --- Render new content ---
    const isRestDay = dayData.day === 7 || (!dayData.exercises?.length && !dayData.abFinisher && !dayData.cardio);
    if (isRestDay) {
        DOMElements.workoutTitle.textContent = "7. Rest Day";
        DOMElements.exerciseList.innerHTML = '<li class="exercise-item rest-day-message" style="/* styles */"><div class="exercise-details"><h3>SYSTEM IN STANDBY</h3><p>FOCUS ON RECOVERY.</p></div></li>';
        const restMsg = DOMElements.exerciseList.querySelector('.rest-day-message');
        if(restMsg){ restMsg.style.cssText = 'justify-content:center; cursor: default; opacity: 0.8; border-bottom: none; padding-left: 0;';}
    } else {
        renderSection("Main Workout", dayData.exercises, 'exercise-item', 'exercise', dayData.day);
        renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', 'ab', dayData.day);
        renderSection("Post-Workout Cardio", dayData.cardio, 'cardio-session', 'cardio', dayData.day);
    }
    updateCompletedSectionVisibility(); // Update visibility after rendering
    updateProgressBars(); // Update day button progress after render
}


function setActiveDay(dayIndex) {
     if (dayIndex < 0 || dayIndex >= workoutData.length) dayIndex = 0;
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
    stopActiveTimer(); // Clear timer and indicator before rendering
    renderWorkout(dayIndex); // Render the new day
}

// --- Modal Functions --- (Unchanged)
function openInfoModal(title, instructions) { /* ... same ... */ }
function closeInfoModal() { /* ... same ... */ }
function openResetModal() { /* ... same ... */ }
function closeResetModal() { /* ... same ... */ }
function openInfoModal(title, instructions) { DOMElements.infoModalOverlay.classList.remove("hidden"); DOMElements.infoModalOverlay.setAttribute('aria-hidden','false'); DOMElements.infoModalTitle.textContent = title ? title.toUpperCase() : 'Instructions'; DOMElements.infoModalInstructions.innerHTML = ''; const p = document.createElement('p'); p.textContent = instructions || 'No instructions provided.'; DOMElements.infoModalInstructions.appendChild(p); }
function closeInfoModal() { DOMElements.infoModalOverlay.classList.add("hidden"); DOMElements.infoModalOverlay.setAttribute('aria-hidden','true'); }
function openResetModal() { DOMElements.resetModalOverlay.classList.remove("hidden"); DOMElements.resetModalOverlay.setAttribute('aria-hidden','false'); }
function closeResetModal() { DOMElements.resetModalOverlay.classList.add("hidden"); DOMElements.resetModalOverlay.setAttribute('aria-hidden','true'); }

// --- App Initialization ---
function init() {
    cacheDOMElements(); // Cache elements
    if (!DOMElements.exerciseList || !DOMElements.completedList || !DOMElements.daySelector || !DOMElements.resetButton) { console.error("DOM Init Failed."); return; }

    loadProgress(); // Load state
    checkTimerOnFocus(); // Check timer

    // Create Day Buttons
    workoutData.forEach((day, index) => { /* ... create buttons ... */ });
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button"); btn.className = "day-btn";
        const textSpan = document.createElement("span"); textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
        btn.appendChild(textSpan); btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        DOMElements.daySelector.appendChild(btn);
    });


    // Attach Global Listeners
    DOMElements.resetButton.addEventListener("click", openResetModal);
    DOMElements.confirmResetBtn.addEventListener("click", () => { progress = {}; saveProgress(); const idx = parseInt(document.querySelector(".day-btn.active")?.dataset.day||'0'); stopActiveTimer(); renderWorkout(idx); closeResetModal(); });
    DOMElements.cancelResetBtn.addEventListener("click", closeResetModal);
    DOMElements.infoModalCloseBtn.addEventListener("click", closeInfoModal);
    DOMElements.infoModalOverlay.addEventListener("click", e => { if (e.target === DOMElements.infoModalOverlay) closeInfoModal(); });
    DOMElements.resetModalOverlay.addEventListener("click", e => { if (e.target === DOMElements.resetModalOverlay) closeResetModal(); });
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkTimerOnFocus(); });

    // Set Initial Day and Render
    const today = new Date().getDay(); // 0 = Sunday
    const initialDayIndex = today === 0 ? 6 : today - 1;
    setActiveDay(initialDayIndex >= 0 && initialDayIndex < workoutData.length ? initialDayIndex : 0);
}

// --- Run ---
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
else { init(); } // DOM already ready
