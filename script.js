/*
  This script waits for the DOM to load, then initializes the app.
  It assumes `data.js` has already been loaded and the `workoutData`
  and `motivationalMessages` variables are available.
*/
document.addEventListener('DOMContentLoaded', () => {

  const App = {
    // --- STATE ---
    progress: {},
    longPressTimer: null,
    notificationsEnabled: false,
    activeTimer: null,
    
    // --- CONSTANTS ---
    LONG_PRESS_DURATION: 500, // ms

    // --- DOM ELEMENTS ---
    elements: {
      daySelector: document.getElementById("day-selector"),
      workoutTitle: document.getElementById("workout-title"),
      workoutDuration: document.getElementById("workout-duration"),
      exerciseList: document.getElementById("exercise-list"),
      resetButton: document.getElementById("reset-button"),
      dailyCaloriesEl: document.getElementById("daily-calories"),
      weeklyCaloriesContainer: document.getElementById("weekly-calories-container"),
      enableNotificationsBtn: document.getElementById("enable-notifications-btn"),
      timerDisplay: document.getElementById('timer-display'),
      infoModalOverlay: document.getElementById("info-modal-overlay"),
      infoModalCloseBtn: document.getElementById("info-modal-close-btn"),
      infoModalTitle: document.getElementById("info-modal-title"),
      infoModalInstructions: document.getElementById("info-modal-instructions"),
      resetModalOverlay: document.getElementById("reset-modal-overlay"),
      confirmResetBtn: document.getElementById("confirm-reset-btn"),
      cancelResetBtn: document.getElementById("cancel-reset-btn"),
      completionOverlay: document.getElementById("completion-overlay"),
      completionTitle: document.getElementById("completion-title"),
      completionMessage: document.getElementById("completion-message"),
    },

    // --- HELPER FUNCTIONS ---
    triggerHapticFeedback() {
      if ('vibrate' in navigator) {
          navigator.vibrate(50);
      }
    },

    parseRestTime(details) {
      if (!details) return 0;
      const match = details.match(/\|\s*(\d+)s\s*rest/);
      return match ? parseInt(match[1], 10) : 0;
    },

    findNextExercise(currentProgressId) {
      const [day, type, indexStr] = currentProgressId.replace('day', '').split('-');
      const dayData = workoutData.find(d => d.day == day);
      if (!dayData) return null;
      
      const index = parseInt(indexStr, 10);
      if (type === 'exercise-item' && index < dayData.exercises.length - 1) {
          return dayData.exercises[index + 1].name;
      } else if (type === 'exercise-item' && dayData.abFinisher) {
          return dayData.abFinisher.name;
      } else if ((type === 'exercise-item' || type === 'ab-finisher-session') && dayData.cardio) {
          return dayData.cardio.name;
      }
      return null;
    },

    parseSets(details) {
      if (!details) return 1;
      const match = details.match(/^(\d+)\s+sets/);
      return match ? parseInt(match[1], 10) : 1;
    },

    // --- STATE & PROGRESS ---
    loadProgress() {
      try {
          const savedProgress = localStorage.getItem("broSplitProgress");
          this.progress = savedProgress ? JSON.parse(savedProgress) : {};
      } catch (e) { 
          console.error("Could not load progress from localStorage:", e); 
          this.progress = {}; 
      }
    },

    saveProgress() {
      try {
          localStorage.setItem("broSplitProgress", JSON.stringify(this.progress));
          this.updateCalorieCounters();
          this.updateProgressBars();
      } catch (e) { 
          console.error("Could not save progress to localStorage:", e); 
      }
    },

    resetProgress() {
      this.progress = {};
      localStorage.removeItem("broSplitProgress");
      if(this.activeTimer) {
          clearInterval(this.activeTimer);
          this.elements.timerDisplay.classList.add('hidden');
      }
      // Refresh the UI completely
      this.updateAllUI();
    },

    // --- NOTIFICATIONS & TIMER ---
    startOnScreenTimer(durationSeconds) {
      if (this.activeTimer) {
          clearInterval(this.activeTimer);
      }
      if (durationSeconds <= 0) {
          this.elements.timerDisplay.classList.add('hidden');
          return;
      }
      let timeLeft = durationSeconds;
      this.elements.timerDisplay.classList.remove('hidden');
      
      const updateTimer = () => {
          const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
          const seconds = (timeLeft % 60).toString().padStart(2, '0');
          this.elements.timerDisplay.textContent = `${minutes}:${seconds}`;
          if (timeLeft <= 0) {
              clearInterval(this.activeTimer);
              this.elements.timerDisplay.classList.add('hidden');
          } else {
              timeLeft--;
          }
      };
      updateTimer();
      this.activeTimer = setInterval(updateTimer, 1000);
    },

    async requestNotificationPermission() {
      if (!('Notification' in window)) {
          alert('This browser does not support desktop notification');
          return;
      }
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
          this.notificationsEnabled = true;
          this.elements.enableNotificationsBtn.textContent = 'Timers Enabled ✅';
          this.elements.enableNotificationsBtn.classList.add('activated');
          this.elements.enableNotificationsBtn.disabled = true;
          if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('sw.js');
          }
      }
    },

    scheduleNotification(title, body, delaySeconds) {
      if (!this.notificationsEnabled || delaySeconds <= 0) return;
      setTimeout(() => {
          if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
              navigator.serviceWorker.ready.then(registration => {
                  registration.showNotification(title, {
                      body: body,
                      icon: 'icon-192.png',
                      badge: 'icon-192.png'
                  });
              });
          } else {
              new Notification(title, { body: body, icon: 'icon-192.png' });
          }
      }, delaySeconds * 1000);
    },

    // --- UI UPDATE FUNCTIONS ---
    updateCardVisuals(card, progressId, totalSets) {
      const completedSets = this.progress[progressId] || 0;
      const percentage = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
      card.style.setProperty('--series-progress', `${percentage}%`);
      card.classList.toggle('fully-completed', completedSets >= totalSets);
    },

    updateCalorieCounters() {
      let weeklyTotal = 0; 
      let dailyTotal = 0;
      const activeDayIndex = parseInt(this.elements.daySelector.querySelector('.day-btn.active')?.dataset.day || '0', 10);
      
      workoutData.forEach((dayData, dayIndex) => {
          const allExercises = [ ...dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-item-${i}` })),
              ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-finisher-session-0` }] : []),
              ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-session-0` }] : []) ];
          
          allExercises.forEach(ex => {
              const completedSets = this.progress[ex.id] || 0;
              if (completedSets > 0) {
                  const totalSets = this.parseSets(ex.details);
                  // Prorate calories for "sets to failure" which has 1 set but multiple calories
                  const caloriesPerSet = totalSets > 0 ? ex.calories / totalSets : ex.calories;
                  const caloriesBurned = completedSets * (caloriesPerSet || 0);
                  
                  weeklyTotal += caloriesBurned;
                  if (dayIndex === activeDayIndex) { 
                      dailyTotal += caloriesBurned; 
                  }
              }
          });
      });
      this.elements.weeklyCaloriesContainer.textContent = `🔥 Weekly Total: ${Math.round(weeklyTotal)} kcal`;
      this.elements.dailyCaloriesEl.textContent = `🔥 Daily: ${Math.round(dailyTotal)} kcal`;
    },

    updateProgressBars() {
      document.querySelectorAll(".day-btn").forEach((btn, index) => {
          const dayData = workoutData[index];
          if (dayData.exercises.length === 0) { 
              btn.style.setProperty('--progress', '0%'); 
              return; 
          }
          let totalSets = 0, completedSets = 0;
          
          dayData.exercises.forEach((ex, i) => { 
              const id = `day${dayData.day}-exercise-item-${i}`; 
              totalSets += this.parseSets(ex.details); 
              completedSets += this.progress[id] || 0; 
          });
          if (dayData.abFinisher) { 
              const id = `day${dayData.day}-ab-finisher-session-0`; 
              totalSets += this.parseSets(dayData.abFinisher.details); 
              completedSets += this.progress[id] || 0; 
          }
          if (dayData.cardio) { 
              const id = `day${dayData.day}-cardio-session-0`; 
              totalSets += this.parseSets(dayData.cardio.details); 
              completedSets += this.progress[id] || 0; 
          }
          
          const progressPercentage = totalSets > 0 ? (completedSets / totalSets) * 100 : 0;
          btn.style.setProperty('--progress', `${progressPercentage}%`);
      });
    },

    updateAllUI() {
      const activeDayIndex = parseInt(this.elements.daySelector.querySelector('.day-btn.active')?.dataset.day || '0', 10);
      this.renderWorkout(activeDayIndex);
      this.updateCalorieCounters();
      this.updateProgressBars();
    },

    // --- DOM RENDERING ---
    createExerciseItem(exercise, type, index, dayData) {
      const li = document.createElement("li");
      li.className = type; // e.g., 'exercise-item'
      
      const progressId = `day${dayData.day}-${type}-${index}`;
      const totalSets = this.parseSets(exercise.details);
      
      li.dataset.progressId = progressId;
      li.dataset.totalSets = totalSets;
      li.innerHTML = `<div class="exercise-details"><h3>${exercise.name}</h3><p>${exercise.details}</p></div><button class="info-btn" aria-label="Open exercise info for ${exercise.name}">i</button>`;
      
      li.addEventListener('click', () => this.handleSeriesUpdate(li, progressId, totalSets, 'increment'));
      li.addEventListener('contextmenu', (e) => { 
          e.preventDefault(); 
          this.handleSeriesUpdate(li, progressId, totalSets, 'decrement'); 
      });
      li.addEventListener('touchstart', (e) => { 
          this.longPressTimer = setTimeout(() => this.handleSeriesUpdate(e.currentTarget, progressId, totalSets, 'decrement'), this.LONG_PRESS_DURATION); 
      }, { passive: true });
      li.addEventListener('touchend', () => clearTimeout(this.longPressTimer));
      li.addEventListener('touchmove', () => clearTimeout(this.longPressTimer));
      
      li.querySelector(".info-btn").addEventListener("click", (e) => { 
          e.stopPropagation(); 
          this.openInfoModal(exercise.name, exercise.instructions); 
      });
      
      this.updateCardVisuals(li, progressId, totalSets);
      return li;
    },

    renderSection(title, items, type, dayData) {
      if (!items || (Array.isArray(items) && items.length === 0)) return [];
      
      const sectionTitle = document.createElement("h3");
      sectionTitle.className = "category-title";
      sectionTitle.textContent = title;
      
      const elements = Array.isArray(items) 
          ? items.map((item, i) => this.createExerciseItem(item, `${type}-item`, i, dayData)) 
          : [this.createExerciseItem(items, `${type}-session`, 0, dayData)];
          
      elements.sort((a, b) => { 
          const completedA = a.classList.contains('fully-completed'); 
          const completedB = b.classList.contains('fully-completed'); 
          return completedA - completedB; 
      });
      
      return [sectionTitle, ...elements];
    },

    renderWorkout(dayIndex) {
      const dayData = workoutData[dayIndex];
      this.elements.workoutTitle.textContent = `Day ${dayData.day}: ${dayData.title}`;
      this.elements.workoutDuration.textContent = `Estimated Duration: ${dayData.duration}`;
      this.elements.exerciseList.innerHTML = "";
      
      if (dayData.exercises.length === 0) { 
          this.elements.exerciseList.innerHTML = '<li class="exercise-item" style="justify-content:center; cursor: default;"><div class="exercise-details"><h3>Enjoy your rest!</h3><p>Focus on nutrition, hydration, and sleep to maximize growth.</p></div></li>'; 
          this.updateCalorieCounters(); 
          return; 
      }
      
      this.elements.exerciseList.append(...this.renderSection("Main Workout", dayData.exercises, 'exercise', dayData));
      this.elements.exerciseList.append(...this.renderSection("Ab Finisher", dayData.abFinisher, 'ab-finisher', dayData));
      this.elements.exerciseList.append(...this.renderSection("Post-Workout Cardio", dayData.cardio, 'cardio', dayData));
      
      this.updateCalorieCounters();
    },

    setActiveDay(dayIndex) { 
      document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active")); 
      const currentBtn = document.querySelector(`.day-btn[data-day="${dayIndex}"]`); 
      if (currentBtn) currentBtn.classList.add("active"); 
      this.renderWorkout(dayIndex); 
    },

    // --- EVENT HANDLERS ---
    handleSeriesUpdate(card, progressId, totalSets, direction) {
      const currentCompleted = this.progress[progressId] || 0;
      const wasCompleted = currentCompleted >= totalSets;

      if (direction === 'increment') {
          this.progress[progressId] = Math.min(totalSets, currentCompleted + 1);
          this.triggerHapticFeedback();
          
          const exerciseDetails = card.querySelector('p').textContent;
          const restTime = this.parseRestTime(exerciseDetails);
          const isNowLastSet = this.progress[progressId] === totalSets;
          this.startOnScreenTimer(restTime);

          if (isNowLastSet && !wasCompleted) {
              const nextExercise = this.findNextExercise(progressId);
              const title = "Exercise Complete! 🔥";
              const body = nextExercise ? `Next up: ${nextExercise}` : "You've finished the workout!";
              this.scheduleNotification(title, body, restTime);
          } else if (!isNowLastSet) {
              const title = "Rest Over! 💪";
              const body = `Time for set ${this.progress[progressId] + 1} of ${totalSets}.`;
              this.scheduleNotification(title, body, restTime);
          }
      } else { // 'decrement'
          this.progress[progressId] = Math.max(0, currentCompleted - 1);
          if (this.activeTimer) {
              clearInterval(this.activeTimer);
              this.elements.timerDisplay.classList.add('hidden');
          }
      }
      
      this.saveProgress();
      
      this.updateCardVisuals(card, progressId, totalSets);
      
      const isNowCompleted = (this.progress[progressId] || 0) >= totalSets;
      if (!wasCompleted && isNowCompleted) {
          this.animateAndMoveToEnd(card);
          this.checkDayCompletion();
      }
    },

    animateAndMoveToEnd(card) {
      card.classList.add('reordering'); 
      card.dataset.moved = 'true';
      setTimeout(() => { 
          this.elements.exerciseList.appendChild(card); 
          card.classList.remove('reordering'); 
      }, 500);
    },

    // --- MODAL FUNCTIONS ---
    openInfoModal(title, instructions) { 
      this.elements.infoModalOverlay.classList.remove("hidden"); 
      this.elements.infoModalOverlay.setAttribute('aria-hidden', 'false'); 
      this.elements.infoModalTitle.textContent = title; 
      this.elements.infoModalInstructions.textContent = instructions; 
    },
    closeInfoModal() { 
      this.elements.infoModalOverlay.classList.add("hidden"); 
      this.elements.infoModalOverlay.setAttribute('aria-hidden', 'true'); 
    },
    openResetModal() { 
      this.elements.resetModalOverlay.classList.remove("hidden"); 
      this.elements.resetModalOverlay.setAttribute('aria-hidden', 'false'); 
    },
    closeResetModal() { 
      this.elements.resetModalOverlay.classList.add("hidden"); 
      this.elements.resetModalOverlay.setAttribute('aria-hidden', 'true'); 
    },

    // --- COMPLETION LOGIC ---
    triggerConfetti() {
      for (let i = 0; i < 100; i++) {
          const confetti = document.createElement('div'); 
          confetti.className = 'confetti';
          confetti.style.left = `${Math.random() * 100}vw`;
          // Use the @keyframes 'fall' defined in styles.css
          confetti.style.animation = `fall ${1 + Math.random() * 2}s linear ${Math.random() * 2}s forwards`;
          confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 15}, 85%, 60%)`;
          document.body.appendChild(confetti);
          setTimeout(() => confetti.remove(), 4000);
      }
    },

    checkDayCompletion() {
      const activeDayIndex = parseInt(this.elements.daySelector.querySelector('.day-btn.active').dataset.day, 10);
      const dayData = workoutData[activeDayIndex];
      
      const allItems = [ ...dayData.exercises.map((ex, i) => ({ ...ex, id: `day${dayData.day}-exercise-item-${i}` })),
          ...(dayData.abFinisher ? [{ ...dayData.abFinisher, id: `day${dayData.day}-ab-finisher-session-0` }] : []),
          ...(dayData.cardio ? [{ ...dayData.cardio, id: `day${dayData.day}-cardio-session-0` }] : []) ];
      
      if (allItems.length === 0) return;
      
      const isDayComplete = allItems.every(item => { 
          const totalSets = this.parseSets(item.details); 
          const completedSets = this.progress[item.id] || 0; 
          return completedSets >= totalSets; 
      });
      
      if (isDayComplete) {
          const isWeekComplete = activeDayIndex === 5; // Day 6 (index 5) is the last *workout*
          this.elements.completionTitle.textContent = isWeekComplete ? "🎉 Week Complete! 🎉" : "💪 Day Complete! 💪";
          this.elements.completionMessage.textContent = isWeekComplete 
              ? "Incredible work! Your progress will now reset for a fresh start." 
              : motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
          
          this.elements.completionOverlay.classList.remove('hidden'); 
          this.triggerConfetti();
          
          if (isWeekComplete) {
              // --- REWRITTEN LOGIC ---
              // Reset progress in the background, update UI, and hide modal. No reload!
              setTimeout(() => { 
                  this.resetProgress();
                  this.elements.completionOverlay.classList.add('hidden');
              }, 5000);
          } else { 
              setTimeout(() => this.elements.completionOverlay.classList.add('hidden'), 4000); 
          }
      }
    },

    // --- BIND EVENTS ---
    bindEvents() {
      this.elements.enableNotificationsBtn.addEventListener('click', () => this.requestNotificationPermission());
      
      this.elements.resetButton.addEventListener("click", () => this.openResetModal());
      this.elements.confirmResetBtn.addEventListener("click", () => {
          this.resetProgress();
          this.closeResetModal();
      });
      this.elements.cancelResetBtn.addEventListener("click", () => this.closeResetModal());

      this.elements.infoModalCloseBtn.addEventListener("click", () => this.closeInfoModal());
      this.elements.infoModalOverlay.addEventListener("click", e => { 
          if (e.target === this.elements.infoModalOverlay) this.closeInfoModal(); 
      });
      this.elements.resetModalOverlay.addEventListener("click", e => { 
          if (e.target === this.elements.resetModalOverlay) this.closeResetModal(); 
      });
    },
    
    // --- APP INITIALIZATION ---
    init() {
      // Check for existing notification permission
      if ('Notification' in window && Notification.permission === 'granted') {
          this.notificationsEnabled = true;
          this.elements.enableNotificationsBtn.textContent = 'Timers Enabled ✅';
          this.elements.enableNotificationsBtn.classList.add('activated');
          this.elements.enableNotificationsBtn.disabled = true;
          if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('sw.js');
          }
      }

      this.loadProgress();
      this.bindEvents();

      // Create day selector buttons
      workoutData.forEach((day, index) => {
          const btn = document.createElement("button");
          btn.className = "day-btn";
          const textSpan = document.createElement("span");
          textSpan.textContent = day.title === "Rest Day" ? "Rest" : `Day ${day.day}`;
          btn.appendChild(textSpan);
          btn.dataset.day = index;
          btn.addEventListener("click", () => this.setActiveDay(index));
          this.elements.daySelector.appendChild(btn);
      });

      this.updateProgressBars();

      // Set initial day based on today's date
      const today = new Date().getDay(); // Sunday = 0
      const initialDayIndex = today === 0 ? 6 : today - 1; // Map to 0-indexed week (Mon-Sun)
      this.setActiveDay(initialDayIndex);
    }
  };

  // Start the app
  App.init();

});
