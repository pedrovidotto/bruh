const workoutData = [
  { // DAY 1: UPPER 1 (Strength + AEL + Extended Isolation)
    "day": 1,
    "title": "Upper 1: Strength + AEL", 
    "duration": "85-95 minutes", 
    "exercises": [ 
      { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 3m rest", "instructions": "Tempo: 4-1-X-0. 4s eccentric, 1s pause at the bottom stretch, explode up." },
      { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 2-3m rest", "instructions": "Tempo: 4-1-X-0. Torso leaned forward. 4s eccentric, 1s pause in the stretch." },
      { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 2-3m rest", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Full overhead lockout." },
      { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 2m rest", "instructions": "Tempo: 3-0-X-0. 3s eccentric." },
      { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 2-0-1-0. 2s eccentric, pause at the bottom." },
      { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Isolate the posterior deltoid. Keep scapulae protracted." },
      { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Brachialis focus to build arm thickness." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 3-0-X-0. 3s eccentric. Triceps long-head focus." }
    ],
    "abFinisher": { "name": "Heavy Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "Treat the core like a skeletal muscle. Load it heavily. Flex the spine, do not pull with the arms." }, 
    "cardio": null 
  },
  { // DAY 2: LOWER 1 (Strength + AEL)
    "day": 2,
    "title": "Lower 1: Strength + AEL",
    "duration": "70-75 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 2-3m rest", "instructions": "Tempo: 3-2-X-0. 3s eccentric, 2s hard squeeze at peak contraction." },
      { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps (per leg) | 2m rest", "instructions": "Tempo: 3-1-X-0. Torso leaned 15° forward for glute bias. 3s eccentric." },
      { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 2-3m rest", "instructions": "Tempo: 4-0-X-0. 4s eccentric. Feel maximal load in hamstrings at the bottom." },
      { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "instructions": "Tempo: 3-1-1-0. 3s eccentric, 1s squeeze at the top." },
      { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "Tempo: 4-1-1-0. 4s eccentric into a deep stretch, 1s hold." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 3: UPPER 2 (Time-Optimized Hypertrophy)
    "day": 3,
    "title": "Upper 2: Hypertrophy + Partials",
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "instructions": "Higher angle than Day 1 to shift emphasis to the clavicular head." },
      { "name": "Low-to-High Cable Fly", "details": "3 sets of 10-12 reps + Partials | 90s rest", "instructions": "Full ROM to technical failure, immediately followed by 5-6 partial reps in the bottom stretch position." },
      { "name": "Seated DB Lateral Raise", "details": "3 sets of 12-15 reps + Partials | 75s rest", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Lat Pulldown (Neutral Grip)", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "Elbows drive down and back. Full dead-hang stretch at the top." },
      { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Keep elbows pinned. Isolate the triceps lateral head." },
      { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "instructions": "Constant tension through the full range of motion." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 4: LOWER 2 (Time-Optimized Hypertrophy)
    "day": 4,
    "title": "Lower 2: Hypertrophy + Partials", 
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "instructions": "Focus on full ROM and the squeeze at the top." },
      { "name": "Leg Press (High/Wide Stance)", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "High wide foot placement to bias glute over quad." },
      { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Rounded upper back to isolate glutes and prevent lumbar hyperextension." },
      { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "instructions": "Full ROM to failure, immediately followed by 6-8 bottom-range partials." },
      { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "instructions": "Soleus focus. 4s eccentric into a full stretch." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 5: UPPER 3 (Metabolic Stress)
    "day": 5,
    "title": "Upper 3: Metabolic + Myo-Reps", 
    "duration": "60-65 minutes", 
    "exercises": [
      { "name": "Pec Deck / Machine Fly", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-reps: 1 set to 1 RIR. Rack for 3 breaths. Do 4-5 reps. Rack 3 breaths. Repeat until only 2 reps are possible." },
      { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Machine format allows safe pushing to failure under high fatigue." },
      { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "instructions": "Upper back thickness." },
      { "name": "Cable Lateral Raise", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-rep protocol. Third side delt session of the week." },
      { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "instructions": "Rear delt and trap stabilization." },
      { "name": "Superset: Cable Skull Crusher + Cable Curl", "details": "3 sets of 12-15 reps each | 60s rest", "instructions": "Perform at a single cable station. Triceps immediately into biceps." }
    ],
    "abFinisher": null,
    "cardio": null
  },
  { // DAY 6: LOWER 3 (Metabolic Stress + Capillary Density)
    "day": 6,
    "title": "Lower 3: Metabolic + Active Recovery", 
    "duration": "115-120 minutes", 
    "exercises": [
      { "name": "45° Cable Kickback", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-reps per leg. Kick diagonally up and out to engage upper glute fibers." },
      { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop Set) | 75s rest", "instructions": "30° forward lean to load glute medius. Drop set on the final set only." },
      { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "instructions": "Quad primary. Feet low and close on the platform." },
      { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "instructions": "High rep metabolic hamstring work." },
      { "name": "Machine Hip Thrust", "details": "1 Activation Set + 3-4 Clusters | 90s rest", "instructions": "Myo-reps. Third glute session of the week at high metabolic stress." },
      { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "instructions": "High rep, high frequency volume accumulation." }
    ],
    "abFinisher": { "name": "Hanging Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "Focus on rotating the pelvis upward. Do not just swing the legs." },
    "cardio": { "name": "40 Minutes Zone 2 Cardio", "details": "1 set of 40 minutes", "instructions": "Stationary bike or incline treadmill. You must be able to hold a conversation. If you are gasping, you are entering Zone 3 and inducing systemic fatigue. Keep it strictly aerobic." }
  },
  { // DAY 7: SYSTEMIC STANDBY
    "day": 7,
    "title": "Systemic Standby", 
    "duration": "0 minutes", 
    "exercises": [],
    "abFinisher": null,
    "cardio": null
  }
];
