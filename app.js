/* =========================================================
   WORKOUT DATA — gym, calisthenics (no equipment), calisthenics (dumbbells)
   ========================================================= */

const PLANS = {

  gym: {
    title: "5-Day Gym Plan",
    kicker: "Beginner · Fat Loss + Strength",
    sub: "Tap a day · track your sets · get results",
    showGuide: false,
    days: [
      {
        day: "Day 1", focus: "💪 Chest + Triceps", tag: "Push",
        color: "#EF4444", warmup: null, cardio: null,
        exercises: [
          { name: "Flat Barbell / Dumbbell Bench Press", sets: 3, reps: "10–12", muscle: "Chest" },
          { name: "Incline Dumbbell Press", sets: 3, reps: "10–12", muscle: "Upper Chest" },
          { name: "Cable Chest Flye", sets: 3, reps: "12–15", muscle: "Chest" },
          { name: "Tricep Pushdown (Cable)", sets: 3, reps: "12–15", muscle: "Triceps" },
          { name: "Overhead Tricep Extension", sets: 3, reps: "12", muscle: "Triceps" },
        ],
      },
      {
        day: "Day 2", focus: "🏋️ Back + Biceps", tag: "Pull",
        color: "#3B82F6", warmup: null, cardio: null,
        exercises: [
          { name: "Lat Pulldown", sets: 3, reps: "10–12", muscle: "Back" },
          { name: "Seated Cable Row", sets: 3, reps: "10–12", muscle: "Back" },
          { name: "Dumbbell Single-Arm Row", sets: 3, reps: "10 each", muscle: "Back" },
          { name: "Face Pulls", sets: 3, reps: "15", muscle: "Rear Delt" },
          { name: "Dumbbell Bicep Curl", sets: 3, reps: "12", muscle: "Biceps" },
          { name: "Hammer Curl", sets: 3, reps: "12", muscle: "Biceps" },
        ],
      },
      {
        day: "Day 3", focus: "🦵 Legs", tag: "Lower",
        color: "#10B981", warmup: null, cardio: null,
        exercises: [
          { name: "Goblet Squat / Leg Press", sets: 4, reps: "10–12", muscle: "Quads" },
          { name: "Romanian Deadlift (Dumbbells)", sets: 3, reps: "10–12", muscle: "Hamstrings" },
          { name: "Leg Extension", sets: 3, reps: "12–15", muscle: "Quads" },
          { name: "Leg Curl", sets: 3, reps: "12–15", muscle: "Hamstrings" },
          { name: "Walking Lunges", sets: 3, reps: "10 each leg", muscle: "Glutes" },
          { name: "Calf Raises", sets: 3, reps: "15–20", muscle: "Calves" },
        ],
      },
      {
        day: "Day 4", focus: "🎯 Shoulders + Core", tag: "Push + Core",
        color: "#8B5CF6", warmup: null, cardio: null,
        exercises: [
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "10–12", muscle: "Shoulders" },
          { name: "Lateral Raises", sets: 3, reps: "12–15", muscle: "Side Delt" },
          { name: "Front Raises", sets: 3, reps: "12", muscle: "Front Delt" },
          { name: "Rear Delt Flye", sets: 3, reps: "12–15", muscle: "Rear Delt" },
          { name: "Plank", sets: 3, reps: "30–45 sec", muscle: "Core" },
          { name: "Cable Crunch", sets: 3, reps: "15", muscle: "Core" },
          { name: "Hanging Knee Raise", sets: 3, reps: "12", muscle: "Core" },
        ],
      },
      {
        day: "Day 5", focus: "🔥 Full Body + Cardio", tag: "Full Body",
        color: "#F59E0B", warmup: null, cardio: null,
        exercises: [
          { name: "Deadlift (Light — learn form)", sets: 3, reps: "8–10", muscle: "Full Body" },
          { name: "Dumbbell Goblet Squat", sets: 3, reps: "12", muscle: "Legs" },
          { name: "Push-Ups", sets: 3, reps: "15", muscle: "Chest" },
          { name: "Dumbbell Row", sets: 3, reps: "10 each", muscle: "Back" },
          { name: "Battle Ropes / Rowing Machine", sets: 3, reps: "30s on / 15s off", muscle: "Cardio" },
          { name: "Treadmill Incline Walk", sets: 1, reps: "15 min", muscle: "Cardio" },
        ],
      },
    ],
    schedule: [
      { label: "Mon", dayIdx: 0 }, { label: "Tue", dayIdx: 1 }, { label: "Wed", dayIdx: 2 },
      { label: "Thu", dayIdx: 3 }, { label: "Fri", dayIdx: 4 }, { label: "Sat", dayIdx: null }, { label: "Sun", dayIdx: null },
    ],
    tips: [
      { icon: "⏱️", title: "Rest Between Sets", desc: "60–90 sec for toning; up to 2 min for strength moves." },
      { icon: "🏃", title: "Cardio Bonus", desc: "Add 10–15 min incline walk after Days 1–4 for extra fat burn." },
      { icon: "📈", title: "Progressive Overload", desc: "Increase weight slightly every 1–2 weeks to keep improving." },
      { icon: "🥩", title: "Protein Target", desc: "Aim for 0.7–1g of protein per lb of bodyweight daily." },
    ],
  },

  "cali-nodumbbell": {
    title: "Calisthenics Plan",
    kicker: "6-Day Program",
    sub: "Burn fat · Build muscle · No equipment needed",
    showGuide: false,
    days: [
      {
        day: "Day 1", focus: "Push — Power", tag: "Chest · Shoulders · Triceps", color: "#E8572A",
        warmup: "5 min jumping jacks / arm circles / wrist rolls",
        cardio: "10 min HIIT: 30s burpees / 30s rest × 10",
        exercises: [
          { name: "Push-Ups", sets: 4, reps: "15–20", rest: "45s", tip: "Full range, chest touches floor" },
          { name: "Pike Push-Ups", sets: 3, reps: "10–12", rest: "45s", tip: "Hips high, head toward floor" },
          { name: "Diamond Push-Ups", sets: 3, reps: "8–12", rest: "60s", tip: "Hands form a diamond under chest" },
          { name: "Dips (chair/bench)", sets: 3, reps: "12–15", rest: "45s", tip: "Elbows back, not flared out" },
          { name: "Wide Push-Ups", sets: 3, reps: "12–15", rest: "45s", tip: "Hands wider than shoulders, targets chest" },
          { name: "Plank Shoulder Taps", sets: 3, reps: "20 total", rest: "30s", tip: "Hips still, tap opposite shoulder" },
        ],
      },
      {
        day: "Day 2", focus: "Pull — Strength", tag: "Back · Biceps · Rear Delts", color: "#2A7BE8",
        warmup: "5 min light jog / shoulder rolls / band pull-aparts",
        cardio: "15 min steady jog or brisk walk",
        exercises: [
          { name: "Pull-Ups / Negatives", sets: 4, reps: "6–10", rest: "60s", tip: "Full hang at bottom, chin over bar" },
          { name: "Chin-Ups", sets: 3, reps: "6–10", rest: "60s", tip: "Palms toward you, squeeze biceps at top" },
          { name: "Inverted Rows", sets: 3, reps: "12–15", rest: "45s", tip: "Table or low bar, chest to hands" },
          { name: "Superman Hold", sets: 3, reps: "12 × 3s", rest: "30s", tip: "Lift arms and legs simultaneously" },
          { name: "Towel Bicep Curls", sets: 3, reps: "12–15", rest: "30s", tip: "Loop towel around door handle, lean back" },
          { name: "Dead Hangs", sets: 3, reps: "30–45s", rest: "30s", tip: "Builds grip strength & decompresses spine" },
        ],
      },
      {
        day: "Day 3", focus: "Legs — Power", tag: "Quads · Hamstrings · Glutes · Calves", color: "#2ABA6A",
        warmup: "5 min leg swings / hip circles / bodyweight squats",
        cardio: "10 min jump rope or stair sprints",
        exercises: [
          { name: "Jump Squats", sets: 4, reps: "15", rest: "45s", tip: "Land soft, knees slightly bent" },
          { name: "Bulgarian Split Squats", sets: 3, reps: "12 each", rest: "60s", tip: "Back foot elevated, hips drop straight down" },
          { name: "Sumo Squats", sets: 3, reps: "20", rest: "45s", tip: "Wide stance, toes out 45°, targets inner thighs" },
          { name: "Single-Leg Glute Bridge", sets: 3, reps: "15 each", rest: "30s", tip: "Drive through heel, squeeze glute at top" },
          { name: "Reverse Lunges", sets: 3, reps: "12 each", rest: "45s", tip: "Step back, knee hovers above floor" },
          { name: "Calf Raise Pulses", sets: 3, reps: "25", rest: "30s", tip: "Stay elevated, pulse at the top" },
        ],
      },
      {
        day: "Day 4", focus: "Push — Endurance", tag: "Shoulders · Chest · Triceps", color: "#E84B8A",
        warmup: "5 min dynamic stretching / arm swings",
        cardio: "Tabata: 20s max effort push-ups / 10s rest × 8 rounds",
        exercises: [
          { name: "Decline Push-Ups", sets: 4, reps: "12–15", rest: "45s", tip: "Feet elevated, targets upper chest & shoulders" },
          { name: "Archer Push-Ups", sets: 3, reps: "8 each", rest: "60s", tip: "Shift weight side to side, one arm at a time" },
          { name: "Pseudo Planche Lean", sets: 3, reps: "20–30s", rest: "45s", tip: "Fingers forward, lean forward from straight arms" },
          { name: "Tricep Push-Ups", sets: 3, reps: "10–12", rest: "45s", tip: "Elbows tight to sides throughout" },
          { name: "Push-Up to Side Plank", sets: 3, reps: "10", rest: "30s", tip: "Rotate fully, arm points to ceiling" },
          { name: "Mountain Climbers", sets: 3, reps: "40s", rest: "20s", tip: "Fast knees, keep hips level" },
        ],
      },
      {
        day: "Day 5", focus: "Pull + Core", tag: "Back · Biceps · Abs", color: "#9B2AE8",
        warmup: "5 min cat-cow / thread the needle / hip flexor stretch",
        cardio: "12 min EMOM: 8 pull-ups every minute on the minute",
        exercises: [
          { name: "Wide-Grip Pull-Ups", sets: 4, reps: "6–8", rest: "60s", tip: "Wide grip targets lats more broadly" },
          { name: "L-Sit Hold (floor)", sets: 3, reps: "15–30s", rest: "30s", tip: "Hands beside hips, legs straight out" },
          { name: "Inverted Rows — Slow", sets: 3, reps: "10 × 3s up", rest: "60s", tip: "3 seconds on the way up, control down" },
          { name: "Hollow Body Hold", sets: 3, reps: "30–45s", rest: "30s", tip: "Lower back pressed firmly to floor" },
          { name: "Hanging Knee Raises", sets: 3, reps: "12–15", rest: "30s", tip: "From a dead hang, drive knees to chest" },
          { name: "Russian Twists", sets: 3, reps: "20 total", rest: "30s", tip: "Feet off floor, rotate fully each side" },
        ],
      },
      {
        day: "Day 6", focus: "Legs + Full Body HIIT", tag: "Fat Burn · Legs · Conditioning", color: "#E8A52A",
        warmup: "5 min jumping jacks / high knees / hip openers",
        cardio: "10 min HIIT circuit: 40s on / 20s off (burpees → skaters → high knees → squat jumps)",
        exercises: [
          { name: "Burpees", sets: 4, reps: "10", rest: "30s", tip: "Chest to floor, jump and clap overhead" },
          { name: "Pistol Squat Progressions", sets: 3, reps: "8 each", rest: "60s", tip: "Use a chair for support, work toward full range" },
          { name: "Plyometric Lunges", sets: 3, reps: "12 each", rest: "45s", tip: "Jump and switch legs in mid-air" },
          { name: "Speed Skaters", sets: 3, reps: "40s", rest: "20s", tip: "Wide lateral bound, touch floor on each side" },
          { name: "Tuck Jumps", sets: 3, reps: "12", rest: "30s", tip: "Drive knees to chest, land quiet" },
          { name: "Bear Crawl", sets: 3, reps: "20m", rest: "30s", tip: "Knees 1 inch off ground, move opposite arm & leg" },
        ],
      },
    ],
    schedule: [
      { label: "Mon", dayIdx: 0 }, { label: "Tue", dayIdx: 1 }, { label: "Wed", dayIdx: 2 },
      { label: "Thu", dayIdx: 3 }, { label: "Fri", dayIdx: 4 }, { label: "Sat", dayIdx: 5 }, { label: "Sun", dayIdx: null },
    ],
    tips: [
      "💧 Hydrate well — aim for 2–3L of water daily",
      "🥗 Eat in a 200–300 kcal deficit to lose fat without muscle loss",
      "🍗 Hit 0.7–1g protein per lb of bodyweight each day",
      "😴 Sleep 7–9 hrs — recovery is when muscle actually grows",
      "📈 Increase reps or slow tempo weekly to keep progressing",
      "🧘 Sunday: active recovery only — walk, swim, or stretch",
    ],
  },

  "cali-dumbbell": {
    title: "Calisthenics + Dumbbells",
    kicker: "5-Day Program · Dumbbells",
    sub: "Burn fat · Build muscle · Minimal equipment",
    showGuide: true,
    days: [
      {
        day: "Day 1", focus: "Push + Chest", tag: "Chest · Shoulders · Triceps", color: "#E8572A",
        warmup: "5 min arm circles / jumping jacks / wrist rolls",
        cardio: "10 min HIIT: 30s burpees / 30s rest × 10",
        exercises: [
          { name: "Dumbbell Bench Press (floor)", sets: 4, reps: "12–15", rest: "60s", tip: "Lie on floor, press up and in, squeeze chest at top" },
          { name: "Dumbbell Shoulder Press", sets: 3, reps: "10–12", rest: "60s", tip: "Elbows at 90°, press overhead, don't lock out hard" },
          { name: "Dumbbell Lateral Raises", sets: 3, reps: "12–15", rest: "45s", tip: "Slight bend in elbows, raise to shoulder height only" },
          { name: "Dumbbell Chest Flyes (floor)", sets: 3, reps: "12", rest: "45s", tip: "Wide arc down, slight bend in elbows throughout" },
          { name: "Dumbbell Tricep Kickbacks", sets: 3, reps: "12 each", rest: "45s", tip: "Upper arm parallel to floor, extend fully" },
          { name: "Push-Ups (weighted)", sets: 3, reps: "12–15", rest: "45s", tip: "Place DB on back or go bodyweight with slow tempo" },
        ],
      },
      {
        day: "Day 2", focus: "Pull + Back", tag: "Back · Biceps · Rear Delts", color: "#2A7BE8",
        warmup: "5 min light jog / shoulder rolls / band pull-aparts",
        cardio: "15 min steady jog or brisk walk",
        exercises: [
          { name: "Dumbbell Bent-Over Row", sets: 4, reps: "10–12", rest: "60s", tip: "Hinge at hips, pull DB to hip, squeeze shoulder blade" },
          { name: "Single-Arm DB Row", sets: 3, reps: "12 each", rest: "60s", tip: "Knee on chair, pull elbow back past torso" },
          { name: "Dumbbell Bicep Curls", sets: 3, reps: "12–15", rest: "45s", tip: "Elbows fixed at sides, supinate wrist at top" },
          { name: "Dumbbell Hammer Curls", sets: 3, reps: "12", rest: "45s", tip: "Neutral grip, targets brachialis for arm thickness" },
          { name: "Dumbbell Rear Delt Flyes", sets: 3, reps: "12–15", rest: "45s", tip: "Hinge forward 45°, arms wide, pinch shoulder blades" },
          { name: "DB Renegade Row", sets: 3, reps: "8 each", rest: "60s", tip: "Plank on DBs, row one arm, keep hips square" },
        ],
      },
      {
        day: "Day 3", focus: "Legs + Glutes", tag: "Quads · Hamstrings · Glutes · Calves", color: "#2ABA6A",
        warmup: "5 min leg swings / hip circles / bodyweight squats",
        cardio: "10 min jump rope or stair sprints",
        exercises: [
          { name: "Dumbbell Goblet Squat", sets: 4, reps: "15–20", rest: "60s", tip: "Hold DB at chest, sit deep, knees track toes" },
          { name: "DB Romanian Deadlift", sets: 4, reps: "12", rest: "60s", tip: "Hinge hips back, soft knees, feel hamstring stretch" },
          { name: "DB Reverse Lunges", sets: 3, reps: "12 each", rest: "45s", tip: "Step back, back knee hovers 1 inch off floor" },
          { name: "DB Sumo Squat", sets: 3, reps: "15", rest: "45s", tip: "Wide stance, toes out, DB between legs, drop hips" },
          { name: "DB Hip Thrust (floor bridge)", sets: 3, reps: "15", rest: "45s", tip: "DB on hips, drive through heels, squeeze glutes hard" },
          { name: "Single-Leg Calf Raises (weighted)", sets: 3, reps: "20 each", rest: "30s", tip: "Hold DB in same hand, full range of motion" },
        ],
      },
      {
        day: "Day 4", focus: "Full Body HIIT", tag: "Fat Burn · Strength · Conditioning", color: "#9B2AE8",
        warmup: "5 min dynamic stretching / high knees / arm swings",
        cardio: "Tabata finisher: 20s DB thrusters / 10s rest × 8 rounds",
        exercises: [
          { name: "DB Thrusters", sets: 4, reps: "12", rest: "45s", tip: "Squat + press in one fluid motion, power from legs" },
          { name: "DB Swing (kettlebell style)", sets: 3, reps: "15", rest: "30s", tip: "Hinge at hips, snap hips forward, arms guide the DB" },
          { name: "DB Burpee Deadlift", sets: 3, reps: "10", rest: "45s", tip: "Burpee down to DBs, deadlift up explosively" },
          { name: "DB Man Makers", sets: 3, reps: "8", rest: "60s", tip: "Push-up → renegade row each side → squat → press" },
          { name: "DB Lateral Lunge", sets: 3, reps: "10 each", rest: "45s", tip: "Step wide, sit into one hip, DB at chest" },
          { name: "DB Suitcase Carry", sets: 3, reps: "30m each", rest: "30s", tip: "Heavy DB one side, walk tall, core braced" },
        ],
      },
      {
        day: "Day 5", focus: "Core + Mobility", tag: "Abs · Obliques · Flexibility", color: "#E8A52A",
        warmup: "5 min cat-cow / world's greatest stretch / hip flexor opener",
        cardio: "20 min yoga flow or full-body stretching session",
        exercises: [
          { name: "DB Weighted Sit-Ups", sets: 3, reps: "15", rest: "30s", tip: "Hold DB at chest, full range, slow on the way down" },
          { name: "DB Russian Twists", sets: 3, reps: "20 total", rest: "30s", tip: "Feet off floor, hold DB with both hands, rotate fully" },
          { name: "DB Side Bend", sets: 3, reps: "15 each", rest: "30s", tip: "DB in one hand, bend sideways, feel the oblique stretch" },
          { name: "DB Pallof Press (kneeling)", sets: 3, reps: "12 each", rest: "30s", tip: "Hold DB at chest, press out, resist rotation, brace core" },
          { name: "DB Leg Raises (hold DB)", sets: 3, reps: "12", rest: "30s", tip: "Hold DB between feet, lower legs slow and controlled" },
          { name: "Dead Bug with DB", sets: 3, reps: "10 each", rest: "30s", tip: "Hold DB overhead, extend opposite arm & leg slowly" },
        ],
      },
    ],
    schedule: [
      { label: "Mon", dayIdx: 0 }, { label: "Tue", dayIdx: 1 }, { label: "Wed", dayIdx: 2 },
      { label: "Thu", dayIdx: 3 }, { label: "Fri", dayIdx: 4 }, { label: "Sat", dayIdx: null }, { label: "Sun", dayIdx: null },
    ],
    tips: [
      "🏋️ Start with lighter DBs — form first, weight second",
      "💧 Drink water before, during & after every session",
      "🥗 Eat in a 200–300 kcal deficit for steady fat loss",
      "🍗 Aim for 0.7–1g protein per lb of bodyweight daily",
      "😴 Sleep 7–9 hrs — muscle is built during recovery",
      "📈 Increase DB weight when you can do the top rep range easily",
    ],
    dbGuide: [
      { level: "Beginner", color: "#2ABA6A", push: "5–10 kg", pull: "5–10 kg", legs: "10–15 kg" },
      { level: "Intermediate", color: "#E8A52A", push: "10–15 kg", pull: "12–20 kg", legs: "15–25 kg" },
      { level: "Advanced", color: "#E8572A", push: "15–25 kg", pull: "20–30 kg", legs: "25–40 kg" },
    ],
  },
};

/* =========================================================
   STATE
   ========================================================= */
let currentPlanKey = null;
let activeDay = 0;

const STORAGE_KEY = "workout-progress-v1";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
function setKey(planKey, dayIdx, exIdx, setIdx) {
  return `${planKey}|${dayIdx}|${exIdx}|${setIdx}`;
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

document.querySelectorAll(".choice-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    if (choice === "gym") {
      openPlan("gym");
    } else if (choice === "calisthenics") {
      showScreen("screen-cali");
    } else if (choice === "cali-dumbbell" || choice === "cali-nodumbbell") {
      openPlan(choice);
    }
  });
});

document.querySelectorAll("[data-back]").forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.back));
});

document.getElementById("plan-back-btn").addEventListener("click", () => {
  if (currentPlanKey === "gym") {
    showScreen("screen-main");
  } else {
    showScreen("screen-cali");
  }
});

document.getElementById("guide-toggle").addEventListener("click", () => {
  const body = document.getElementById("guide-body");
  const arrow = document.getElementById("guide-arrow");
  body.classList.toggle("open");
  arrow.textContent = body.classList.contains("open") ? "▲" : "▼";
});

/* =========================================================
   RENDER PLAN
   ========================================================= */
function openPlan(planKey) {
  currentPlanKey = planKey;
  activeDay = 0;

  const plan = PLANS[planKey];
  document.getElementById("plan-kicker").textContent = plan.kicker;
  document.getElementById("plan-title").textContent = plan.title;
  document.getElementById("plan-sub").textContent = plan.sub;

  // Day tabs
  const tabsEl = document.getElementById("day-tabs");
  tabsEl.innerHTML = "";
  plan.days.forEach((d, i) => {
    const b = document.createElement("button");
    b.className = "day-tab-btn" + (i === activeDay ? " active" : "");
    b.style.setProperty("--accent", d.color);
    b.textContent = d.day;
    b.addEventListener("click", () => {
      activeDay = i;
      renderDay();
      tabsEl.querySelectorAll(".day-tab-btn").forEach((el, idx) => {
        el.classList.toggle("active", idx === i);
      });
    });
    tabsEl.appendChild(b);
  });

  // Dumbbell guide (only for cali-dumbbell)
  const guideCard = document.getElementById("guide-card");
  if (plan.showGuide && plan.dbGuide) {
    guideCard.style.display = "block";
    const guideBody = document.getElementById("guide-body");
    guideBody.innerHTML = "";
    plan.dbGuide.forEach((row) => {
      const div = document.createElement("div");
      div.className = "guide-row";
      div.innerHTML = `
        <div class="guide-level" style="color:${row.color}">${row.level}</div>
        <div class="guide-tags">
          <span class="guide-tag">Push: ${row.push}</span>
          <span class="guide-tag">Pull: ${row.pull}</span>
          <span class="guide-tag">Legs: ${row.legs}</span>
        </div>`;
      guideBody.appendChild(div);
    });
  } else {
    guideCard.style.display = "none";
  }

  // Schedule
  const scheduleEl = document.getElementById("schedule-list");
  scheduleEl.innerHTML = "";
  plan.schedule.forEach(({ label, dayIdx }) => {
    const day = dayIdx !== null ? plan.days[dayIdx] : null;
    const row = document.createElement("div");
    row.className = "schedule-row";
    row.innerHTML = `
      <div class="schedule-day">${label}</div>
      <div class="schedule-bar" style="${
        day ? `background:${day.color}20;border-color:${day.color}40;color:${day.color};` : ""
      }">${day ? day.focus : "Rest / Active Recovery"}</div>`;
    scheduleEl.appendChild(row);
  });

  // Tips
  const tipsEl = document.getElementById("tips-list");
  tipsEl.innerHTML = "";
  if (planKey === "gym") {
    tipsEl.className = "tips-grid";
    plan.tips.forEach((tip) => {
      const card = document.createElement("div");
      card.className = "tip-row-card";
      card.innerHTML = `
        <div class="tip-icon">${tip.icon}</div>
        <p class="tip-title-text">${tip.title}</p>
        <p class="tip-desc-text">${tip.desc}</p>`;
      tipsEl.appendChild(card);
    });
  } else {
    tipsEl.className = "";
    plan.tips.forEach((tip) => {
      const row = document.createElement("div");
      row.className = "tip-row";
      row.textContent = tip;
      tipsEl.appendChild(row);
    });
  }

  renderDay();
  showScreen("screen-plan");
}

function renderDay() {
  const plan = PLANS[currentPlanKey];
  const d = plan.days[activeDay];
  const card = document.getElementById("day-card");
  card.style.setProperty("--accent", d.color);

  document.getElementById("day-label").textContent = d.day;
  document.getElementById("day-focus").textContent = d.focus;
  document.getElementById("day-tag").textContent = d.tag;
  document.getElementById("exercise-count").textContent = `${d.exercises.length} exercises`;

  // Warmup
  const warmupBox = document.getElementById("warmup-box");
  if (d.warmup) {
    warmupBox.style.display = "block";
    warmupBox.innerHTML = `🔥 <strong>Warm-up:</strong> ${d.warmup}`;
  } else {
    warmupBox.style.display = "none";
  }

  // Cardio
  const cardioBox = document.getElementById("cardio-box");
  if (d.cardio) {
    cardioBox.style.display = "block";
    cardioBox.innerHTML = `<div class="cardio-label">Cardio Finisher</div><div class="cardio-text">${d.cardio}</div>`;
  } else {
    cardioBox.style.display = "none";
  }

  renderExercises();
}

function renderExercises() {
  const plan = PLANS[currentPlanKey];
  const d = plan.days[activeDay];
  const progress = loadProgress();
  const list = document.getElementById("exercise-list");
  list.innerHTML = "";

  let totalSets = 0;
  let doneSets = 0;

  d.exercises.forEach((ex, exIdx) => {
    const row = document.createElement("div");
    row.className = "exercise-row";

    const metaPills = [
      `<span class="meta-pill">${ex.sets} sets</span>`,
      `<span class="meta-pill">${ex.reps} reps</span>`,
    ];
    if (ex.rest) metaPills.push(`<span class="meta-pill rest">${ex.rest} rest</span>`);
    if (ex.muscle) metaPills.push(`<span class="meta-pill muscle" style="background:${d.color}22;color:${d.color}">${ex.muscle}</span>`);

    row.innerHTML = `
      <div class="exercise-top">
        <div class="exercise-num">${exIdx + 1}</div>
        <div style="flex:1">
          <div class="exercise-name">${ex.name}</div>
          <div class="exercise-meta">${metaPills.join("")}</div>
          ${ex.tip ? `<div class="exercise-tip">💡 ${ex.tip}</div>` : ""}
        </div>
      </div>
      <div class="set-trackers" data-ex="${exIdx}"></div>
    `;
    list.appendChild(row);

    const trackerEl = row.querySelector(".set-trackers");
    const numSets = parseInt(ex.sets, 10) || 1;
    totalSets += numSets;

    for (let s = 0; s < numSets; s++) {
      const key = setKey(currentPlanKey, activeDay, exIdx, s);
      const done = !!progress[key];
      if (done) doneSets++;

      const btn = document.createElement("button");
      btn.className = "set-btn" + (done ? " done" : "");
      btn.style.setProperty("--accent", d.color);
      btn.textContent = done ? "✓" : (s + 1).toString();
      btn.addEventListener("click", () => {
        const p = loadProgress();
        p[key] = !p[key];
        saveProgress(p);
        renderExercises();
      });
      trackerEl.appendChild(btn);
    }
  });

  const pct = totalSets ? Math.round((doneSets / totalSets) * 100) : 0;
  document.getElementById("progress-pct").textContent = `${pct}%`;
  document.getElementById("progress-sets").textContent = `${doneSets}/${totalSets} sets`;
  document.getElementById("progress-bar-fill").style.width = `${pct}%`;
  document.getElementById("progress-bar-fill").style.background = d.color;
}
