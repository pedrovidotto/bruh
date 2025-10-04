document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const daySelector = document.getElementById("day-selector");
  const workoutTitle = document.getElementById("workout-title");
  const workoutDuration = document.getElementById("workout-duration");
  const exerciseList = document.getElementById("exercise-list");
  const resetButton = document.getElementById("reset-button");
  const toast = document.getElementById("toast-notification");

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
  let workoutData = [];
  let elementToFocusOnClose;

  // --- Data and State Management ---
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
    } catch (e) {
      console.error("Could not save progress to localStorage:", e);
    }
  }

  // --- Toast Notification ---
  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      // Use transitionend event to hide it after fade out
      toast.addEventListener('transitionend', () => {
          toast.classList.add("hidden");
      }, { once: true });
    }, 3000);
  }

  // --- Modal Management (with A11y Focus Trap) ---
  function openModal(modalOverlay) {
    elementToFocusOnClose = document.activeElement;
    modalOverlay.classList.remove("hidden");
    modalOverlay.setAttribute("aria-hidden", "false");
    
    const focusableElements = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    modalOverlay.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    });
  }

  function closeModal(modalOverlay) {
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("aria-hidden", "true");
    elementToFocusOnClose?.focus();
  }

  function openInfoModal(title, instructions) {
    infoModalTitle.textContent = title;
    infoModalInstructions.textContent = instructions;
    openModal(infoModalOverlay);
  }

  // --- UI Rendering ---
  function createDaySelector(workoutData) {
    daySelector.innerHTML = "";
    workoutData.forEach((day, index) => {
      const btn = document.createElement("button");
      btn.className = "day-btn";
      btn.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
      btn.dataset.day = index;
      btn.addEventListener("click", () => setActiveDay(index, workoutData));
      daySelector.appendChild(btn);
    });
    updateDayButtonProgress(workoutData);
  }

  function renderWorkout(dayIndex, workoutData) {
    const dayData = workoutData[dayIndex];
    workoutTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
    workoutDuration.textContent = `Estimated Duration: ${dayData.duration}`;
    exerciseList.innerHTML = "";

    if (dayData.exercises.length === 0) {
      exerciseList.innerHTML = `<li class="list-item" style="justify-content:center;"><div class="exercise-details"><h3>Enjoy your rest!</h3><p>Focus on nutrition, hydration, and sleep to maximize growth.</p></div></li>`;
      return;
    }

    const template = document.getElementById("exercise-template");
    
    const createExerciseItem = (exercise, type, index) => {
      const clone = template.content.cloneNode(true);
      const li = clone.querySelector(".list-item");
      const checkbox = clone.querySelector(".checkbox");
      const name = clone.querySelector("h3");
      const details = clone.querySelector("p");

      const progressId = `day${dayData.day}-${type}-${index}`;
      
      li.className = `list-item ${type}`;
      li.dataset.progressId = progressId;
      li.dataset.dayIndex = dayIndex;
      li.dataset.type = type;
      li.dataset.index = index;

      name.textContent = exercise.name;
      details.textContent = exercise.details;
      checkbox.checked = !!progress[progressId];

      if (checkbox.checked) {
        li.classList.add("completed");
      }
      return clone;
    };
    
    const createCategoryTitle = (title) => {
        const h3 = document.createElement("h3");
        h3.className = "category-title";
        h3.textContent = title;
        return h3;
    }

    exerciseList.appendChild(createCategoryTitle("Main Workout"));
    dayData.exercises.forEach((ex, i) => exerciseList.appendChild(createExerciseItem(ex, "exercise", i)));

    if (dayData.abFinisher) {
      exerciseList.appendChild(createCategoryTitle("Ab Finisher"));
      exerciseList.appendChild(createExerciseItem(dayData.abFinisher, "abFinisher", 0));
    }

    if (dayData.cardio) {
      exerciseList.appendChild(createCategoryTitle("Post-Workout Cardio"));
      exerciseList.appendChild(createExerciseItem(dayData.cardio, "cardio", 0));
    }
  }

  function setActiveDay(dayIndex, workoutData) {
    document.querySelectorAll(".day-btn").forEach((btn) => btn.classList.remove("active"));
    const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`);
    if (currentBtn) {
      currentBtn.classList.add("active");
    }
    // REMOVED: localStorage.setItem("lastActiveDay", dayIndex);
    renderWorkout(dayIndex, workoutData);
  }

  function updateDayButtonProgress(workoutData) {
    workoutData.forEach((day, index) => {
      const button = document.querySelector(`.day-btn[data-day="${index}"]`);
      if (!button || day.title === "Rest Day") return;

      const items = day.exercises.map((_, i) => `day${day.day}-exercise-${i}`);
      if (day.abFinisher) items.push(`day${day.day}-abFinisher-0`);
      if (day.cardio) items.push(`day${day.day}-cardio-0`);
      
      const isComplete = items.length > 0 && items.every(id => progress[id]);
      
      button.classList.toggle("completed", isComplete);
    });
  }

  // --- App Initialization ---
  async function init() {
    try {
        const response = await fetch('workout-data.json');
        if (!response.ok) throw new Error('Network response was not ok.');
        workoutData = await response.json();
    } catch (error) {
        console.error("Failed to load workout data:", error);
        workoutTitle.textContent = "Error";
        workoutDuration.textContent = "Could not load workout data. Please refresh the page.";
        return;
    }
    
    loadProgress();
    createDaySelector(workoutData);

    // Set initial day
    const today = new Date().getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    const initialDayIndex = today === 0 ? 6 : today - 1; // Map to 0-indexed [Mon-Sun]
    setActiveDay(initialDayIndex, workoutData);

    // --- Event Listeners (Delegation) ---
    exerciseList.addEventListener("click", (e) => {
      const listItem = e.target.closest(".list-item");
      if (!listItem) return;

      const { progressId, dayIndex, type, index } = listItem.dataset;

      // Handle Checkbox
      if (e.target.matches(".checkbox")) {
        progress[progressId] = e.target.checked;
        listItem.classList.toggle("completed", e.target.checked);
        saveProgress();
        updateDayButtonProgress(workoutData);
      }
      
      // Handle Info Button
      if (e.target.closest(".info-btn")) {
        const dayData = workoutData[dayIndex];
        let exercise;
        if (type === 'exercise') exercise = dayData.exercises[index];
        else if (type === 'abFinisher') exercise = dayData.abFinisher;
        else if (type === 'cardio') exercise = dayData.cardio;

        if (exercise?.instructions) {
          openInfoModal(exercise.name, exercise.instructions);
        }
      }
    });

    resetButton.addEventListener("click", () => openModal(resetModalOverlay));

    confirmResetBtn.addEventListener("click", () => {
      progress = {};
      saveProgress();
      const activeDayIndex = document.querySelector(".day-btn.active")?.dataset.day || 0;
      renderWorkout(parseInt(activeDayIndex), workoutData);
      updateDayButtonProgress(workoutData);
      closeModal(resetModalOverlay);
      showToast("Weekly progress has been cleared.");
    });

    cancelResetBtn.addEventListener("click", () => closeModal(resetModalOverlay));

    infoModalCloseBtn.addEventListener("click", () => closeModal(infoModalOverlay));
    infoModalOverlay.addEventListener("click", (e) => e.target === infoModalOverlay && closeModal(infoModalOverlay));
    resetModalOverlay.addEventListener("click", (e) => e.target === resetModalOverlay && closeModal(resetModalOverlay));
  }

  init();
});
