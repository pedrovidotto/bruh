// --- Global Data & Configuration ---
const workoutData = [
  {"day":1,"title":"Chest","duration":"45-55 min","exercises":[{"name":"Incline DB Press","details":"4 sets 8-12 reps | 90s","instructions":"1. Bench 30-45deg..."},{"name":"Flat Machine Press","details":"3 sets 10-15 reps | 75s","instructions":"1. Seat align mid-chest..."}],"abFinisher":{"name":"Cable Crunches","details":"3 sets 15-20 reps | 45s","instructions":"1. Kneel high pulley..."}},
  {"day":2,"title":"Back","duration":"50-60 min","exercises":[{"name":"Pull-ups / Pulldowns","details":"4 sets 8-12 reps | 90s","instructions":"1. Grip wide..."},{"name":"Barbell Row","details":"4 sets 8-12 reps | 90s","instructions":"1. Hinge hips..."}],"abFinisher":null},
  {"day":3,"title":"Quads & Calves","duration":"60-75 min","exercises":[{"name":"Barbell Squats","details":"4 sets 8-12 reps | 120s","instructions":"1. Bar upper back..."},{"name":"Leg Press","details":"4 sets 10-15 reps | 90s","instructions":"1. Feet shoulder-width..."}],"abFinisher":null},
  {"day":4,"title":"Shoulders & Chest","duration":"60-70 min","exercises":[{"name":"Seated DB Press","details":"4 sets 8-12 reps | 90s","instructions":"1. Sit support..."},{"name":"Cable Lateral Raise","details":"4 sets 12-15 reps | 60s","instructions":"1. Stand side low cable..."}],"abFinisher":{"name":"Decline Reverse Crunch","details":"3 sets 12-15 reps | 60s","instructions":"1. Lie decline..."}},
  {"day":5,"title":"Arms","duration":"35-45 min","exercises":[{"name":"Close-Grip Bench","details":"4 sets 8-12 reps | 90s","instructions":"1. Narrow grip..."},{"name":"Barbell Curls","details":"4 sets 8-12 reps | 75s","instructions":"1. Elbows pinned..."}],"abFinisher":{"name":"Landmine Twists","details":"3 sets 10-12/side | 60s","instructions":"1. Bar corner..."}},
  {"day":6,"title":"Hams & Glutes","duration":"55-65 min","exercises":[{"name":"RDLs","details":"4 sets 8-12 reps | 120s","instructions":"1. Hinge hips flat back..."},{"name":"Barbell Hip Thrusts","details":"4 sets 8-12 reps | 90s","instructions":"1. Upper back on bench..."}],"abFinisher":null},
  {"day":7,"title":"Rest Day","duration":"Focus Recovery","exercises":[],"abFinisher":null,"cardio":null}
]; // Simplified details for brevity, ensure your full data is here


const LONG_PRESS_DURATION = 500;
const motivationalMessages = [
    "TASK COMPLETE. AWAITING NEXT INPUT.", "PROCESSING... POSITIVE RESULTS. REST.",
    "EXECUTION SUCCESSFUL. RECOVER.", "SESSION LOGGED. SYSTEM OPTIMIZED.",
    "GOALS PROGRESSED. CONTINUE.",
];

// --- DOM Element References --- Cache elements
const DOMElements = {}; // Object to hold references
function cacheDOMElements() {
    const ids = [
        "day-selector", "workout-title", "workout-duration", "exercise-list",
        "completed-list", "completed-title", "reset-button", "timer-display",
        "info-modal-overlay", "info-modal-close-btn", "info-modal-title",
        "info-modal-instructions", "reset-modal-overlay", "confirm-reset-btn",
        "cancel-reset-btn", "completion-overlay", "completion-message"
    ];
    ids.forEach(id => {
        DOMElements[id.replace(/-./g, m => m[1].toUpperCase())] = document.getElementById(id); // CamelCase IDs
    });
     // Special case for completion title inside the card
     DOMElements.completionTitleEl = DOMElements.completionOverlay?.querySelector("h2");
}

// --- State Variables ---
let progress = {}; // { progressId: completedSets }
let activeTimerId = null;
let restPeriodEndTime = null;
let currentExerciseCard = null; // Reference to LI with active indicator

// --- Utility Functions ---

function loadProgress() { /* ... same robust version ... */ }
function saveProgress() { /* ... same robust version ... */ }
function parseRestTime(details = '') { /* ... same robust version ... */ }
function parseSets(details = '') { /* ... same robust version ... */ }
function loadProgress() {
    try {
        const savedProgress = localStorage.getItem("workoutSysProgress");
        progress = savedProgress ? JSON.parse(savedProgress) : {};
        for (const key in progress) { progress[key] = Number(progress[key]) || 0; }
    } catch (e) { console.error("Could not load progress:", e); progress = {}; }
}
function saveProgress() {
    try {
        localStorage.setItem("workoutSysProgress", JSON.stringify(progress));
        updateUI(); // Central UI update
    } catch (e) { console.error("Could not save progress:", e); }
}
function parseRestTime(details = '') {
    const match = details.match(/\|\s*(\d+)s/); // Simplified regex for rest
    return match ? parseInt(match[1], 10) : 0;
}
function parseSets(details = '') {
    let match = details.match(/^(\d+)\s+sets to Failure/i);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^(\d+)\s+sets/);
    if (match) return parseInt(match[1], 10);
    match = details.match(/^1\s+set of/i); // Handle cardio/timed sets
    if (match) return 1;
    return 1; // Default
}

// --- Timer and Haptic Feedback ---

function triggerHapticFeedback() { /* ... same ... */ }
function stopActiveTimer() { /* ... same ... */ }
function startOnScreenTimer(durationSeconds) { /* ... same ... */ }
function checkTimerOnFocus() { /* ... same ... */ }
function triggerHapticFeedback() { if ('vibrate' in navigator && typeof navigator.vibrate === 'function') { try { navigator.vibrate(50); } catch (e) {} }}
function stopActiveTimer() { if (activeTimerId) { clearInterval(activeTimerId); activeTimerId = null; DOMElements.timerDisplay.classList.add('hidden'); localStorage.removeItem('restPeriodEndTime'); restPeriodEndTime = null; removeActiveIndicator(); }}
function startOnScreenTimer(durationSeconds) { stopActiveTimer(); if (durationSeconds <= 0) { removeActiveIndicator(); return; } restPeriodEndTime = Date.now() + durationSeconds * 1000; localStorage.setItem('restPeriodEndTime', restPeriodEndTime); let timeLeft = durationSeconds; DOMElements.timerDisplay.classList.remove('hidden'); const updateTimer = () => { const m = Math.floor(timeLeft/60).toString().padStart(2,'0'); const s = (timeLeft%60).toString().padStart(2,'0'); DOMElements.timerDisplay.textContent = `${m}:${s}`; if (timeLeft <= 0) { stopActiveTimer(); triggerHapticFeedback(); } else { timeLeft--; } }; updateTimer(); activeTimerId = setInterval(updateTimer, 1000); }
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
    card.classList.toggle('fully-completed', isComplete); // Maintain for logic
}

// Updates day button progress bars
function updateProgressBars() { /* ... same robust version ... */ }
function updateProgressBars() {
    document.querySelectorAll(".day-btn").forEach((btn, index) => {
        const dayData = workoutData[index];
        if (!dayData) { btn.style.setProperty('--progress', '0%'); return; }
        const hasItems = (dayData.exercises?.length > 0) || dayData.abFinisher || dayData.cardio;
        if (!hasItems) { btn.style.setProperty('--progress', '0%'); return; }
        let totalSetsForDay=0, completedSetsForDay=0;
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
function updateCompletedSectionVisibility() { /* ... same ... */ }
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

// Function to find the correct insertion point (node to insert *before*)
function findInsertionPoint(cardToMoveBack) {
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
function animateAndMoveToCompleted(card) {
    if (!card || card.parentElement !== DOMElements.exerciseList) return;
    removeCardListeners(card);
    if (currentExerciseCard === card) removeActiveIndicator();
    card.classList.add('reordering');
    const handleTransitionEnd = () => {
        card.removeEventListener('transitionend', handleTransitionEnd);
        if (card.parentElement !== DOMElements.completedList) {
            DOMElements.completedList.appendChild(card);
            addOrRemoveListeners(card, true); // Add listeners for completed state
            updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10));
            updateCompletedSectionVisibility();
        }
        card.classList.remove('reordering');
    };
    card.addEventListener('transitionend', handleTransitionEnd);
    setTimeout(() => { if (card.classList.contains('reordering')) handleTransitionEnd(); }, 350);
}

// Instantly move FROM completed list back to active list
function moveFromCompletedToActive(card) {
    if (!card || card.parentElement !== DOMElements.completedList) return;
    removeCardListeners(card);
    const insertBeforeNode = findInsertionPoint(card);
    DOMElements.exerciseList.insertBefore(card, insertBeforeNode);
    addOrRemoveListeners(card, false); // Add back listeners for active state
    updateSetCounterVisuals(card, card.dataset.progressId, parseInt(card.dataset.totalSets, 10));
    updateCompletedSectionVisibility();
}

// Moves an active item to the top of its section
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

    // 3. Perform Side Effects
    let movedToTop = false;
    if (direction === 'increment') {
        triggerHapticFeedback();
        const detailsP = card.querySelector('.exercise-details p');
        const restTime = parseRestTime(detailsP ? detailsP.textContent : '');
        setActiveIndicator(card); // Set indicator BEFORE timer
        startOnScreenTimer(restTime);
        if (card.parentElement === DOMElements.exerciseList) { // Only move if still active
            movedToTop = moveToTopOfSection(card);
        }
    } else { // 'decrement'
        if (currentExerciseCard === card) stopActiveTimer(); // Stop timer if decrementing current
    }

    // 4. Update DOM (Move Lists / Visuals)
    const isNowFullyCompleted = newCompletedCount >= totalSets;
    const needsMoveToCompleted = !wasFullyCompleted && isNowFullyCompleted;
    const needsMoveToActive = wasFullyCompleted && !isNowFullyCompleted;

    if (needsMoveToCompleted) {
        animateAndMoveToCompleted(card); // Moves card, re-adds listeners for completed
    } else if (needsMoveToActive) {
        moveFromCompletedToActive(card); // Moves card, re-adds listeners for active
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
    const isDayComplete = allItems.every(item => { const sets = parseSets(item.details); const completed = progress[item.id] || 0; return completed >= sets; });
    if (isDayComplete) {
        const isWeekComplete = activeDayIndex === 5;
        if (DOMElements.completionTitleEl) DOMElements.completionTitleEl.textContent = isWeekComplete ? "// WEEK COMPLETE" : "// DAY COMPLETE";
        DOMElements.completionMessage.textContent = isWeekComplete ? "SYSTEM RESET IN 5S..." : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        DOMElements.completionOverlay.classList.remove('hidden');
        if (isWeekComplete) { setTimeout(() => { progress = {}; localStorage.removeItem("workoutSysProgress"); localStorage.removeItem('restPeriodEndTime'); location.reload(); }, 5000); }
        else { setTimeout(() => DOMElements.completionOverlay.classList.add('hidden'), 4000); }
    }
}

// --- Event Listener Management ---

// Attaches the correct listeners based on completion state
function addOrRemoveListeners(card, isCompleted) {
    const progressId = card.dataset.progressId;
    if (!progressId) return;
    const totalSets = parseInt(card.dataset.totalSets, 10);
    if (isNaN(totalSets)) return;

    // --- Always Remove Existing Listeners First ---
    if (card._eventListeners) {
        Object.keys(card._eventListeners).forEach(type => {
            card.removeEventListener(type, card._eventListeners[type].handler, card._eventListeners[type].options);
        });
        const infoBtn = card.querySelector(".info-btn");
        if (infoBtn && infoBtn._eventListeners) {
            infoBtn.removeEventListener('click', infoBtn._eventListeners.click.handler);
        }
    }
    card._eventListeners = {}; // Reset stored listeners object
    const infoBtn = card.querySelector(".info-btn");
     if(infoBtn) infoBtn._eventListeners = {};


    // --- Add Listeners Based on Current State ---

    // Click/Tap to Increment (Only for Active Items)
    if (!isCompleted) {
        const clickHandler = (e) => {
            if (e.target.closest('.info-btn')) return;
            handleSeriesUpdate(card, progressId, totalSets, 'increment');
        };
        card.addEventListener('click', clickHandler);
        card._eventListeners.click = { handler: clickHandler, options: false };
    }

    // Decrement listeners (Always add, logic inside handler decides action)
    const contextHandler = (e) => { e.preventDefault(); handleSeriesUpdate(card, progressId, totalSets, 'decrement'); };
    card.addEventListener('contextmenu', contextHandler);
    card._eventListeners.contextmenu = { handler: contextHandler, options: false };

    let longPressTimeoutId = null;
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
    // Store touch listeners (optional, but good practice if needed later)
    card._eventListeners.touchstart = { handler: touchStartHandler, options: { passive: false } };
    card._eventListeners.touchend = { handler: clearLongPress, options: false };
    card._eventListeners.touchcancel = { handler: clearLongPress, options: false };
    card._eventListeners.touchmove = { handler: clearLongPress, options: false };


    // Info Button Listener (Always add)
    if (infoBtn) {
        const infoClickHandler = (e) => {
            e.stopPropagation();
             // Find exercise data robustly
             const dayNumMatch=progressId.match(/day(\d+)/); const typeMatch=progressId.match(/-([a-z]+)-/); const indexMatch=progressId.match(/-(\d+)$/);
             if (!dayNumMatch || !typeMatch || !indexMatch) return;
             const dayNum = parseInt(dayNumMatch[1], 10); const type = typeMatch[1]; const index = parseInt(indexMatch[1], 10);
             const dayData = workoutData.find(d => d.day === dayNum); let exerciseData;
             if (dayData) {
                 if (type === 'exercise' && dayData.exercises?.[index]) exerciseData = dayData.exercises[index];
                 else if (type === 'ab' && dayData.abFinisher) exerciseData = dayData.abFinisher;
                 else if (type === 'cardio' && dayData.cardio) exerciseData = dayData.cardio;
             }
             if (exerciseData) { openInfoModal(exerciseData.name, exerciseData.instructions); }
             else { console.error("Could not find exercise data for modal:", progressId); }
        };
        infoBtn.addEventListener('click', infoClickHandler);
        infoBtn._eventListeners = { click: { handler: infoClickHandler, options: false } }; // Store on button
    }
}

// --- DOM Rendering ---

// Creates the LI element structure
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
    return li;
};

// Renders a section title (if needed) and appends items to correct lists, adding listeners after appending
const renderSection = (title, items, cssClass, idType, dayNum) => {
    if (!items || (Array.isArray(items) && items.length === 0)) return;

    let sectionHasActiveItems = false;
    const sectionElements = []; // Store created LI elements

    // 1. Create all LI elements
    const itemsArray = Array.isArray(items) ? items : [items];
    itemsArray.forEach((item, i) => {
        const element = createExerciseItemElement(item, cssClass, idType, i, dayNum);
        if (element) {
             const progressId = element.dataset.progressId;
             const totalSets = parseInt(element.dataset.totalSets);
             const completedSets = progress[progressId] || 0;
             const isCompleted = completedSets >= totalSets;
             element.classList.toggle('fully-completed', isCompleted); // Set initial class
             sectionElements.push({ element, isCompleted }); // Store element and its state
             if (!isCompleted) sectionHasActiveItems = true;
        }
    });

    // 2. Add category title only if section contains active items
    if (sectionHasActiveItems) {
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
        addOrRemoveListeners(element, isCompleted);
        // Update visuals after listeners added (ensures counter correct)
        updateSetCounterVisuals(element, element.dataset.progressId, parseInt(element.dataset.totalSets));
    });
};

// Main function to render the workout - Clears lists, renders sections
function renderWorkout(dayIndex) {
    const dayData = workoutData[dayIndex];
    if (!dayData) return;

    DOMElements.workoutTitle.textContent = `${dayData.day}. ${dayData.title}`;
    DOMElements.workoutDuration.textContent = `// EST. DURATION: ${dayData.duration ? dayData.duration.toUpperCase() : 'N/A'}`;

    // --- Clear previous content and listeners ---
    // Detach listeners before clearing innerHTML (more robust)
    [...DOMElements.exerciseList.querySelectorAll('li')].forEach(li => addOrRemoveListeners(li, true)); // Effectively removes all listeners
    [...DOMElements.completedList.querySelectorAll('li')].forEach(li => addOrRemoveListeners(li, true));
    DOMElements.exerciseList.innerHTML = "";
    DOMElements.completedList.innerHTML = "";
    removeActiveIndicator(); // Ensure indicator is cleared

    // --- Render new content ---
    if (dayData.day === 7 || (!dayData.exercises?.length && !dayData.abFinisher && !dayData.cardio)) {
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
}


function setActiveDay(dayIndex) { /* ... same robust version ... */ }
function setActiveDay(dayIndex) {
     if (dayIndex < 0 || dayIndex >= workoutData.length) dayIndex = 0;
    document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) currentBtn.classList.add("active");
    stopActiveTimer();
    renderWorkout(dayIndex);
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
    cacheDOMElements(); // Cache elements first
    // Basic element check
    if (!DOMElements.exerciseList || !DOMElements.completedList || !DOMElements.daySelector || !DOMElements.resetButton) { console.error("Essential DOM elements not found."); document.body.innerHTML = '<p style="color:red;padding:20px;">Error: App could not initialize.</p>'; return; }

    loadProgress(); // Load saved state
    checkTimerOnFocus(); // Check for running timer

    // Create Day Buttons
    workoutData.forEach((day, index) => {
        const btn = document.createElement("button"); btn.className = "day-btn";
        const textSpan = document.createElement("span"); textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
        btn.appendChild(textSpan); btn.dataset.day = index;
        btn.addEventListener("click", () => setActiveDay(index));
        DOMElements.daySelector.appendChild(btn);
    });

    // Attach Reset Button Logic
    DOMElements.resetButton.addEventListener("click", openResetModal);
    DOMElements.confirmResetBtn.addEventListener("click", () => {
        progress = {}; saveProgress();
        const activeDayIndex = parseInt(document.querySelector(".day-btn.active")?.dataset.day || '0', 10);
        stopActiveTimer(); renderWorkout(activeDayIndex); closeResetModal();
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

    // Listener for visibility change
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { checkTimerOnFocus(); } });
}

// --- Run ---
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); }
else { init(); } // DOM is already ready
