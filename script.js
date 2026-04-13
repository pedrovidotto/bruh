const workoutData = [
  { // DAY 1: UPPER 1 (Strength + AEL)
    "day": 1,
    "title": "Upper 1: Strength + AEL", 
    "duration": "85-95 minutes", 
    "exercises": [ 
      { "name": "Incline DB Press (30°)", "details": "4 sets of 5-7 reps | 3m rest", "rpe": "8-9", "instructions": "SETUP: Bench at 30°. Retract and depress scapulae. EXECUTION: Lower weights for a strict 4s count. Focus on a deep stretch in the upper pectorals. Pause 1s at the bottom. Drive explosively but stop at 95% lockout to maintain tension on the clavicular head." },
      { "name": "Weighted Dips (Chest Lean)", "details": "3 sets of 5-7 reps | 2-3m rest", "rpe": "8-9", "instructions": "SETUP: Torso leaned 30° forward, chin tucked. EXECUTION: 4s negative. Descend until shoulders are slightly below elbows. Feel the lower pec stretch. Pause 1s at bottom. Drive up using chest compression, avoiding excessive tricep takeover at the top." },
      { "name": "Seated DB Overhead Press", "details": "4 sets of 6-8 reps | 2-3m rest", "rpe": "8", "instructions": "SETUP: Bench at 80°. Position elbows 30° forward (Scapular Plane). EXECUTION: 4s negative. Lower dumbbells to ear level. Press to full lockout while keeping ribs tucked to avoid lumbar hyperextension. Targets anterior deltoid and upper pec." },
      { "name": "Chest-Supported T-Bar Row", "details": "4 sets of 8-10 reps | 2m rest", "rpe": "8", "instructions": "SETUP: Pad firmly against sternum. EXECUTION: 3s negative. Initiate with scapular retraction (squeeze blades). Pull elbows past the midline. Full dead-hang stretch at the bottom to maximize lat and rhomboid recruitment." },
      { "name": "Cable Lateral Raise", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Cable at hand height, pulling from behind the body. EXECUTION: 2s negative. Raise to shoulder height with pinky slightly higher than thumb. Pause at peak. Targets the lateral deltoid in its most stretched position." },
      { "name": "Reverse Pec-Deck (Rear Delt)", "details": "3 sets of 12-15 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Seat height so handles are at eye level. EXECUTION: Keep scapulae protracted (rounded forward) throughout. Pull out in a wide arc using only the rear delts. Do not squeeze shoulder blades together; that uses traps." },
      { "name": "DB Hammer Curls", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "EXECUTION: Neutral grip (palms facing). Slow 3s eccentric. Focus on the Brachialis (muscle under the bicep) to push the bicep up, increasing arm width." },
      { "name": "Overhead Rope Extension", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "8-9", "instructions": "SETUP: High pulley. Back to machine. EXECUTION: 3s negative. Allow hands to go deep behind the head for maximum long-head stretch. Flare the rope at the top of the movement for peak lateral head contraction." }
    ],
    "abFinisher": { "name": "Cable Crunches", "details": "4 sets of 10-12 reps | 60s rest", "instructions": "SETUP: Kneeling. Rope behind neck. EXECUTION: Flex the spine, attempting to touch elbows to knees. DO NOT pivot at the hips; this is not a hip-flexor movement. Exhale and crunch the ribs into the pelvis. Slow controlled return." } 
  },
  { // DAY 2: LOWER 1 (Strength + AEL)
    "day": 2,
    "title": "Lower 1: Strength + AEL",
    "duration": "70-75 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 6-8 reps | 2-3m rest", "rpe": "8-9", "instructions": "SETUP: Bench at scapula level. Chin tucked. EXECUTION: 3s negative. Drive through heels. 2s hard squeeze at peak contraction with a Posterior Pelvic Tilt (tuck the tailbone). Do not hyperextend the lower back." },
      { "name": "Bulgarian Split Squat", "details": "4 sets of 7-9 reps (per leg) | 2m rest", "rpe": "8-9", "instructions": "SETUP: Torso leaned 15° forward. Short stride for glute bias. EXECUTION: 3s negative. Sink deep until the glute is at maximum stretch. Drive up, focusing all tension on the front leg's glute-ham tie-in." },
      { "name": "Romanian Deadlift", "details": "3 sets of 7-9 reps | 2-3m rest", "rpe": "8", "instructions": "SETUP: Feet hip-width. EXECUTION: 4s negative. Hinge back as if closing a door with your glutes. Keep bar glued to shins. Stop when hamstrings are at maximum tension (usually just below knees). Do not round the spine." },
      { "name": "Leg Extension", "details": "3 sets of 10-12 reps | 75s rest", "rpe": "9", "instructions": "EXECUTION: 3s negative. Lean slightly back in the seat. Point toes slightly inward to target the vastus lateralis (outer quad sweep). 1s hard squeeze at the top." },
      { "name": "Standing Calf Raise", "details": "4 sets of 10-12 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: 4s negative. Lower into a deep, uncomfortable stretch. Pause for 1s in the stretch to kill the stretch-reflex. Drive onto big toes and squeeze for 1s." }
    ]
  },
  { // DAY 3: UPPER 2 (Hypertrophy + Partials)
    "day": 3,
    "title": "Upper 2: Hypertrophy + Partials",
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Incline DB Press (45°)", "details": "3 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Higher angle targets the uppermost clavicular fibers. Focus on driving the dumbbells toward each other at the top (adduction) without touching them." },
      { "name": "Low-to-High Cable Fly", "details": "3 sets of 10-12 reps + Partials | 90s rest", "rpe": "10", "instructions": "EXECUTION: Cross hands over at the top for peak upper-pec contraction. Upon reaching full ROM failure, perform 5-6 'lengthened partials'—moving only from the bottom stretch to halfway up." },
      { "name": "Seated DB Lateral Raise", "details": "3 sets of 12-15 reps + Partials | 75s rest", "rpe": "10", "instructions": "EXECUTION: Raise to shoulder height. Upon failure, immediately perform partials in the bottom 30% of the ROM. The stretch position is where the side delt receives the highest hypertrophic signal." },
      { "name": "Lat Pulldown (Neutral Grip)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "SETUP: Palms facing each other. EXECUTION: Drive elbows straight down. Full dead-hang at the top to stretch the lats. Focus on pulling with the lats, not the biceps." },
      { "name": "Cable Triceps Pushdown", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "SETUP: Straight bar. EXECUTION: Keep elbows pinned. Focus on the 'lateral head' of the triceps. Squeeze hard at the bottom. Control the return to eye level." },
      { "name": "Cable Bicep Curl", "details": "3 sets of 10-12 reps | 60s rest", "rpe": "9", "instructions": "EXECUTION: Keep shoulders pinned back. Do not allow elbows to drift forward. Constant tension: do not rest at the bottom or top of the rep." }
    ]
  },
  { // DAY 4: LOWER 2 (Hypertrophy + Partials)
    "day": 4,
    "title": "Lower 2: Hypertrophy + Partials", 
    "duration": "55-60 minutes", 
    "exercises": [
      { "name": "Barbell Hip Thrust", "details": "4 sets of 9-11 reps | 90s rest", "rpe": "9", "instructions": "Focus on high-rep endurance. Maintain a constant pace, but never skip the 1s lockout squeeze. Your upper glutes should feel 'pumped' by set 2." },
      { "name": "Leg Press (High/Wide Stance)", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "9", "instructions": "SETUP: Feet at the very top of the platform, wider than shoulders. EXECUTION: Lower as deep as possible without the tailbone lifting off the seat. Drive through heels to bias glutes." },
      { "name": "45° Back Extension", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "SETUP: Pad just below the hip bone. EXECUTION: Round the upper back (flexion). Use ONLY the glutes to pull the torso up. Do not look up or flatten your back; this keeps tension off the spine and on the glute shelf." },
      { "name": "Lying Leg Curl", "details": "3 sets of 10-12 reps + Partials | 75s rest", "rpe": "10", "instructions": "EXECUTION: Keep hips pressed into the pad. Upon full ROM failure, perform partial reps in the fully stretched (legs straight) position to hit the distal hamstring fibers." },
      { "name": "Seated Calf Raise", "details": "4 sets of 12-15 reps | 60s rest", "rpe": "8", "instructions": "EXECUTION: Specific to the Soleus muscle. Use a 4s eccentric. This muscle requires higher volume and slower tempos to grow." }
    ]
  },
  { // DAY 5: UPPER 3 (Metabolic Stress)
    "day": 5,
    "title": "Upper 3: Metabolic + Myo-Reps", 
    "duration": "60-65 minutes", 
    "exercises": [
      { "name": "Pec Deck Fly", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Activation set of 12-15 reps to failure. Rest 10s (3-5 breaths). Do 4-5 reps. Rest 10s. Repeat for 4 clusters total. Keep constant tension; do not let weights touch." },
      { "name": "Machine Shoulder Press", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "9-10", "instructions": "EXECUTION: Neutral or standard grip. Push into the seat to create stability. Take every set to 0 RIR. The machine allows for safe failure." },
      { "name": "Chest-Supported Row", "details": "3 sets of 12-15 reps | 75s rest", "rpe": "8-9", "instructions": "EXECUTION: Focus on 'width' rows. Pull elbows out to 45°. Squeeze the rear delts and mid-traps. High metabolic stress with short rest." },
      { "name": "Cable Lateral Raise", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Same as Pec Deck. This is the final side-delt assault of the week. Focus on the burn and cell swelling." },
      { "name": "Face Pulls", "details": "3 sets of 15-20 reps | 60s rest", "rpe": "8", "instructions": "SETUP: Rope at eye level. EXECUTION: Pull toward forehead while rotating fists back (external rotation). Squeeze rear delts. Essential for shoulder health and 'cap' appearance." },
      { "name": "Arm Superset: Skull Crushers + Curls", "details": "3 sets of 12-15 reps each | 60s rest", "rpe": "9-10", "instructions": "SETUP: Use a single cable station with EZ-bar or rope. EXECUTION: Complete Triceps then immediately switch to Biceps. No rest between exercises. 60s rest between supersets." }
    ]
  },
  { // DAY 6: LOWER 3 (Metabolic Stress + Capillary Density)
    "day": 6,
    "title": "Lower 3: Metabolic + Active Recovery", 
    "duration": "115-120 minutes", 
    "exercises": [
      { "name": "45° Cable Kickback", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "SETUP: Ankle strap. EXECUTION: Kick diagonally UP and OUT (45°). This aligns with the upper fibers of the gluteus maximus and medius. Myo-rep protocol." },
      { "name": "Hip Abduction Machine", "details": "3 sets of 15-20 reps (Drop Set) | 75s rest", "rpe": "9-10", "instructions": "SETUP: Lean your torso forward 30°. EXECUTION: Push out hard. Drop weight by 30% on the final set and go to absolute failure. Targets the 'glute shelf'." },
      { "name": "Hack Squat", "details": "3 sets of 10-12 reps | 90s rest", "rpe": "8-9", "instructions": "SETUP: Feet low on platform. EXECUTION: Maximum depth. This is a quad-dominant finisher. Keep heels pinned. Control the negative." },
      { "name": "Seated Leg Curl", "details": "3 sets of 15-20 reps | 75s rest", "rpe": "9", "instructions": "EXECUTION: Focus on high-rep metabolic fatigue. Do not allow your butt to lift off the seat during the curl." },
      { "name": "Machine Hip Thrust", "details": "1 Activation + 4 Myo-Clusters | 90s rest", "rpe": "9-10", "instructions": "PROTOCOL: Final glute depletion. Use the machine for maximum stability so you can focus purely on the mind-muscle connection and the Myo-rep burn." },
      { "name": "Standing Calf Raise", "details": "4 sets of 15-20 reps | 45s rest", "rpe": "8-9", "instructions": "EXECUTION: High frequency volume. Bounce-free reps. Squeeze at the top like you are trying to stand on your tiptoes." }
    ],
    "abFinisher": { "name": "Inclined Leg Raises", "details": "3 sets of 12-15 reps | 60s rest", "instructions": "SETUP: Incline bench (head at top). EXECUTION: Lift your butt off the bench at the top of the movement (Posterior Pelvic Tilt). This is a pelvic rotation, not just a leg lift. Targets lower rectus abdominis." },
    "cardio": { "name": "40 Minutes Zone 2 Cardio", "details": "1 set of 40 minutes", "instructions": "Pacing: Conversational. You should be able to speak full sentences. This clears the metabolic waste (H+ ions/Phosphate) from the week's training. Do not enter Zone 3." }
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
