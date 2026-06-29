import { useState } from "react";

// ─── GYM DATA ───────────────────────────────────────────────────────────────
const gymDays = [
  {
    day: 1, label: "Chest + Triceps", emoji: "💪", color: "#EF4444", muscle: "Push",
    exercises: [
      { name: "Flat Barbell / Dumbbell Bench Press", sets: 3, reps: "10–12", muscle: "Chest" },
      { name: "Incline Dumbbell Press", sets: 3, reps: "10–12", muscle: "Upper Chest" },
      { name: "Cable Chest Flye", sets: 3, reps: "12–15", muscle: "Chest" },
      { name: "Tricep Pushdown (Cable)", sets: 3, reps: "12–15", muscle: "Triceps" },
      { name: "Overhead Tricep Extension", sets: 3, reps: "12", muscle: "Triceps" },
    ],
  },
  {
    day: 2, label: "Back + Biceps", emoji: "🏋️", color: "#3B82F6", muscle: "Pull",
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
    day: 3, label: "Legs", emoji: "🦵", color: "#10B981", muscle: "Lower",
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
    day: 4, label: "Shoulders + Core", emoji: "🎯", color: "#8B5CF6", muscle: "Push + Core",
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
    day: 5, label: "Full Body + Cardio", emoji: "🔥", color: "#F59E0B", muscle: "Full Body",
    exercises: [
      { name: "Deadlift (Light — learn form)", sets: 3, reps: "8–10", muscle: "Full Body" },
      { name: "Dumbbell Goblet Squat", sets: 3, reps: "12", muscle: "Legs" },
      { name: "Push-Ups", sets: 3, reps: "15", muscle: "Chest" },
      { name: "Dumbbell Row", sets: 3, reps: "10 each", muscle: "Back" },
      { name: "Battle Ropes / Rowing Machine", sets: 3, reps: "30s on / 15s off", muscle: "Cardio" },
      { name: "Treadmill Incline Walk", sets: 1, reps: "15 min", muscle: "Cardio" },
    ],
  },
];

// ─── CALISTHENICS (NO DUMBBELLS) ────────────────────────────────────────────
const caliDays = [
  {
    day: "Day 1", focus: "Push — Power", tag: "Chest · Shoulders · Triceps", color: "#E8572A",
    warmup: "5 min jumping jacks / arm circles / wrist rolls",
    cardio: "10 min HIIT: 30s burpees / 30s rest × 10",
    exercises: [
      { name: "Push-Ups", sets: 4, reps: "15–20", rest: "45s", tip: "Full range, chest touches floor" },
      { name: "Pike Push-Ups", sets: 3, reps: "10–12", rest: "45s", tip: "Hips high, head toward floor" },
      { name: "Diamond Push-Ups", sets: 3, reps: "8–12", rest: "60s", tip: "Hands form a diamond under chest" },
      { name: "Dips (chair/bench)", sets: 3, reps: "12–15", rest: "45s", tip: "Elbows back, not flared out" },
      { name: "Wide Push-Ups", sets: 3, reps: "12–15", rest: "45s", tip: "Hands wider than shoulders" },
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
      { name: "Sumo Squats", sets: 3, reps: "20", rest: "45s", tip: "Wide stance, toes out 45°" },
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
];

// ─── CALISTHENICS + DUMBBELLS ────────────────────────────────────────────────
const dbDays = [
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
];

const muscleTagColors = {
  Chest: "#EF4444", "Upper Chest": "#F87171", Triceps: "#FB923C",
  Back: "#3B82F6", "Rear Delt": "#60A5FA", Biceps: "#2563EB",
  Quads: "#10B981", Hamstrings: "#059669", Glutes: "#34D399",
  Calves: "#6EE7B7", Shoulders: "#8B5CF6", "Side Delt": "#A78BFA",
  "Front Delt": "#7C3AED", Core: "#EC4899", "Full Body": "#F59E0B",
  Legs: "#D97706", Cardio: "#EF4444",
};

const gymTips = [
  { icon: "⏱️", title: "Rest Between Sets", desc: "60–90 sec for toning; up to 2 min for strength moves." },
  { icon: "🏃", title: "Cardio Bonus", desc: "Add 10–15 min incline walk after Days 1–4 for extra fat burn." },
  { icon: "📈", title: "Progressive Overload", desc: "Increase weight slightly every 1–2 weeks to keep improving." },
  { icon: "🥩", title: "Protein Target", desc: "Aim for 0.7–1g of protein per lb of bodyweight daily." },
];

const caliTips = [
  "💧 Hydrate well — aim for 2–3L of water daily",
  "🥗 Eat in a 200–300 kcal deficit to lose fat without muscle loss",
  "🍗 Hit 0.7–1g protein per lb of bodyweight each day",
  "😴 Sleep 7–9 hrs — recovery is when muscle actually grows",
  "📈 Increase reps or slow tempo weekly to keep progressing",
  "🧘 Sunday: active recovery only — walk, swim, or stretch",
];

const dbTips = [
  "🏋️ Start with lighter DBs — form first, weight second",
  "💧 Drink water before, during & after every session",
  "🥗 Eat in a 200–300 kcal deficit for steady fat loss",
  "🍗 Aim for 0.7–1g protein per lb of bodyweight daily",
  "😴 Sleep 7–9 hrs — muscle is built during recovery",
  "📈 Increase DB weight when you can do the top rep range easily",
];

const dbGuide = [
  { level: "Beginner", push: "5–10 kg", pull: "5–10 kg", legs: "10–15 kg" },
  { level: "Intermediate", push: "10–15 kg", pull: "12–20 kg", legs: "15–25 kg" },
  { level: "Advanced", push: "15–25 kg", pull: "20–30 kg", legs: "25–40 kg" },
];

// ─── SET TRACKER COMPONENT ───────────────────────────────────────────────────
function SetTracker({ exercises, planKey, activeDay, color }) {
  const [completedSets, setCompletedSets] = useState({});

  const toggleSet = (exIdx, setIdx) => {
    const key = `${planKey}-${activeDay}-${exIdx}-${setIdx}`;
    setCompletedSets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSets = exercises.reduce((a, e) => a + (typeof e.sets === "string" ? parseInt(e.sets) : e.sets), 0);
  const doneSets = Object.keys(completedSets).filter(k => k.startsWith(`${planKey}-${activeDay}-`) && completedSets[k]).length;
  const progress = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;

  return { exercises, completedSets, toggleSet, totalSets, doneSets, progress };
}

// ─── GYM PLAN ────────────────────────────────────────────────────────────────
function GymPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [completedSets, setCompletedSets] = useState({});
  const day = gymDays[activeDay];

  const toggleSet = (exIdx, setIdx) => {
    const key = `gym-${activeDay}-${exIdx}-${setIdx}`;
    setCompletedSets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSets = day.exercises.reduce((a, e) => a + e.sets, 0);
  const doneSets = Object.keys(completedSets).filter(k => k.startsWith(`gym-${activeDay}-`) && completedSets[k]).length;
  const progress = Math.round((doneSets / totalSets) * 100);

  return (
    <div>
      {/* Day Tabs */}
      <div style={{ display: "flex", gap: 8, padding: "16px 16px 4px", overflowX: "auto", scrollbarWidth: "none" }}>
        {gymDays.map((d, i) => (
          <button key={i} onClick={() => setActiveDay(i)} style={{
            flexShrink: 0, padding: "10px 16px", borderRadius: 12, border: "none", cursor: "pointer",
            background: activeDay === i ? d.color : "#161625",
            color: activeDay === i ? "#fff" : "#94A3B8",
            fontWeight: 700, fontSize: 13, transition: "all 0.2s",
            boxShadow: activeDay === i ? `0 4px 20px ${d.color}55` : "none",
          }}>
            <div style={{ fontSize: 18, marginBottom: 2 }}>{d.emoji}</div>
            Day {d.day}
          </button>
        ))}
      </div>

      <div style={{ padding: "0 16px" }}>
        {/* Day Header + Progress */}
        <div style={{ background: "#161625", borderRadius: 16, padding: 20, margin: "16px 0 12px", border: `1px solid ${day.color}33` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: day.color, textTransform: "uppercase" }}>{day.muscle}</p>
              <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>{day.emoji} {day.label}</h2>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: day.color }}>{progress}%</div>
              <div style={{ fontSize: 11, color: "#64748B" }}>{doneSets}/{totalSets} sets</div>
            </div>
          </div>
          <div style={{ height: 6, background: "#0A0A0F", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: day.color, borderRadius: 99, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* Exercises */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {day.exercises.map((ex, exIdx) => (
            <div key={exIdx} style={{ background: "#161625", borderRadius: 14, padding: 16, border: "1px solid #1E1E30" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ flex: 1, paddingRight: 8 }}>
                  <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 15 }}>{ex.name}</p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: "#0A0A0F", color: "#94A3B8", fontWeight: 600 }}>
                      {ex.sets} sets × {ex.reps}
                    </span>
                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 99, background: `${muscleTagColors[ex.muscle] || "#6366F1"}22`, color: muscleTagColors[ex.muscle] || "#6366F1", fontWeight: 700 }}>
                      {ex.muscle}
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {Array.from({ length: ex.sets }).map((_, setIdx) => {
                  const key = `gym-${activeDay}-${exIdx}-${setIdx}`;
                  const done = !!completedSets[key];
                  return (
                    <button key={setIdx} onClick={() => toggleSet(exIdx, setIdx)} style={{
                      width: 42, height: 42, borderRadius: 10,
                      border: `2px solid ${done ? day.color : "#2A2A3E"}`,
                      background: done ? `${day.color}22` : "transparent",
                      color: done ? day.color : "#475569",
                      fontWeight: 800, fontSize: 13, cursor: "pointer", transition: "all 0.15s",
                    }}>
                      {done ? "✓" : setIdx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div style={{ marginTop: 24 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#6366F1", textTransform: "uppercase", margin: "0 0 12px" }}>Key Tips</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {gymTips.map((tip, i) => (
              <div key={i} style={{ background: "#161625", borderRadius: 14, padding: 14, border: "1px solid #1E1E30" }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{tip.icon}</div>
                <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 13 }}>{tip.title}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CALISTHENICS PLAN (shared layout for both variants) ────────────────────
function CaliPlan({ days, tips, planKey, showDbGuide }) {
  const [activeDay, setActiveDay] = useState(0);
  const [completedSets, setCompletedSets] = useState({});
  const [showGuide, setShowGuide] = useState(false);
  const d = days[activeDay];

  const toggleSet = (exIdx, setIdx) => {
    const key = `${planKey}-${activeDay}-${exIdx}-${setIdx}`;
    setCompletedSets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalSets = d.exercises.reduce((a, e) => a + (typeof e.sets === "string" ? parseInt(e.sets) : e.sets), 0);
  const doneSets = Object.keys(completedSets).filter(k => k.startsWith(`${planKey}-${activeDay}-`) && completedSets[k]).length;
  const progress = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;

  return (
    <div>
      {/* Day Tabs */}
      <div style={{ display: "flex", overflowX: "auto", padding: "16px 16px 4px", gap: 8, scrollbarWidth: "none" }}>
        {days.map((day, i) => (
          <button key={i} onClick={() => setActiveDay(i)} style={{
            flexShrink: 0, padding: "10px 14px", borderRadius: 10,
            border: activeDay === i ? `2px solid ${day.color}` : "2px solid #222",
            background: activeDay === i ? `${day.color}18` : "#18181f",
            color: activeDay === i ? day.color : "#888",
            fontWeight: 700, fontSize: 12, cursor: "pointer", transition: "all 0.2s",
          }}>
            {day.day}
          </button>
        ))}
      </div>

      <div style={{ padding: "12px 16px 0" }}>
        {/* Day Card */}
        <div style={{ background: "#18181f", borderRadius: 16, border: `1px solid ${d.color}40`, overflow: "hidden" }}>
          {/* Day Header */}
          <div style={{
            background: `linear-gradient(135deg, ${d.color}22, ${d.color}08)`,
            borderBottom: `1px solid ${d.color}30`, padding: "20px 20px 16px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 3, color: d.color, textTransform: "uppercase", marginBottom: 4 }}>{d.day}</div>
                <div style={{ fontSize: 22, fontWeight: 800 }}>{d.focus}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>{d.tag}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: d.color }}>{progress}%</div>
                <div style={{ fontSize: 11, color: "#666" }}>{doneSets}/{totalSets} sets</div>
              </div>
            </div>
            {/* Progress bar */}
            <div style={{ height: 5, background: "#00000030", borderRadius: 99, overflow: "hidden", marginTop: 14 }}>
              <div style={{ height: "100%", width: `${progress}%`, background: d.color, borderRadius: 99, transition: "width 0.4s ease" }} />
            </div>
            <div style={{ marginTop: 10, background: "#ffffff08", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#aaa" }}>
              🔥 <strong style={{ color: "#ddd" }}>Warm-up:</strong> {d.warmup}
            </div>
          </div>

          {/* Exercises */}
          <div style={{ padding: "12px 16px" }}>
            {d.exercises.map((ex, exIdx) => {
              const setsCount = typeof ex.sets === "string" ? parseInt(ex.sets) : ex.sets;
              return (
                <div key={exIdx} style={{
                  padding: "12px 0",
                  borderBottom: exIdx < d.exercises.length - 1 ? "1px solid #222" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 7,
                      background: `${d.color}22`, color: d.color,
                      fontWeight: 800, fontSize: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 2,
                    }}>
                      {exIdx + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{ex.name}</div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 5 }}>
                        <span style={{ background: "#222", borderRadius: 5, padding: "2px 8px", fontSize: 11, color: "#ccc" }}>{ex.sets} sets</span>
                        <span style={{ background: "#222", borderRadius: 5, padding: "2px 8px", fontSize: 11, color: "#ccc" }}>{ex.reps} reps</span>
                        <span style={{ background: "#222", borderRadius: 5, padding: "2px 8px", fontSize: 11, color: "#888" }}>{ex.rest} rest</span>
                      </div>
                      <div style={{ fontSize: 11, color: "#666", fontStyle: "italic" }}>💡 {ex.tip}</div>
                    </div>
                  </div>
                  {/* Set Trackers */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingLeft: 40 }}>
                    {Array.from({ length: setsCount }).map((_, setIdx) => {
                      const key = `${planKey}-${activeDay}-${exIdx}-${setIdx}`;
                      const done = !!completedSets[key];
                      return (
                        <button key={setIdx} onClick={() => toggleSet(exIdx, setIdx)} style={{
                          width: 42, height: 42, borderRadius: 10,
                          border: `2px solid ${done ? d.color : "#2A2A3E"}`,
                          background: done ? `${d.color}22` : "transparent",
                          color: done ? d.color : "#475569",
                          fontWeight: 800, fontSize: 13, cursor: "pointer", transition: "all 0.15s",
                        }}>
                          {done ? "✓" : setIdx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cardio Finisher */}
          <div style={{
            margin: "0 16px 16px", background: `${d.color}12`,
            border: `1px solid ${d.color}30`, borderRadius: 10, padding: "12px 14px",
          }}>
            <div style={{ fontSize: 11, color: d.color, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
              Cardio Finisher
            </div>
            <div style={{ fontSize: 13, color: "#ddd" }}>{d.cardio}</div>
          </div>
        </div>

        {/* DB Weight Guide (only for dumbbell variant) */}
        {showDbGuide && (
          <div style={{ marginTop: 16, background: "#18181f", borderRadius: 14, border: "1px solid #222", overflow: "hidden" }}>
            <button onClick={() => setShowGuide(!showGuide)} style={{
              width: "100%", background: "none", border: "none", padding: "14px 16px",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              cursor: "pointer", color: "#F0EEE8",
            }}>
              <div style={{ fontSize: 11, letterSpacing: 3, color: "#555", textTransform: "uppercase" }}>🏋️ Dumbbell Weight Guide</div>
              <div style={{ color: "#555", fontSize: 16 }}>{showGuide ? "▲" : "▼"}</div>
            </button>
            {showGuide && (
              <div style={{ padding: "0 16px 16px" }}>
                {dbGuide.map((row, i) => (
                  <div key={i} style={{
                    background: "#111", borderRadius: 10, padding: "12px 14px",
                    marginBottom: i < dbGuide.length - 1 ? 8 : 0, border: "1px solid #1e1e1e",
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: ["#2ABA6A", "#E8A52A", "#E8572A"][i] }}>
                      {row.level}
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ background: "#222", borderRadius: 5, padding: "3px 10px", fontSize: 11, color: "#ccc" }}>Push: {row.push}</span>
                      <span style={{ background: "#222", borderRadius: 5, padding: "3px 10px", fontSize: 11, color: "#ccc" }}>Pull: {row.pull}</span>
                      <span style={{ background: "#222", borderRadius: 5, padding: "3px 10px", fontSize: 11, color: "#ccc" }}>Legs: {row.legs}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tips */}
        <div style={{ marginTop: 16, background: "#18181f", borderRadius: 14, border: "1px solid #222", padding: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#555", textTransform: "uppercase", marginBottom: 12 }}>Key Tips</div>
          {tips.map((tip, i) => (
            <div key={i} style={{ fontSize: 13, color: "#aaa", padding: "6px 0", borderBottom: i < tips.length - 1 ? "1px solid #1a1a1a" : "none", lineHeight: 1.5 }}>
              {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── LANDING SCREEN ──────────────────────────────────────────────────────────
function LandingScreen({ onSelect }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", padding: 24,
      background: "radial-gradient(ellipse at 50% 0%, #1a0a2e 0%, #0A0A0F 60%)",
    }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🏆</div>
        <h1 style={{ fontSize: 30, fontWeight: 900, margin: "0 0 8px", letterSpacing: "-1px", color: "#F1F5F9" }}>
          Workout Planner
        </h1>
        <p style={{ color: "#64748B", fontSize: 14, margin: 0 }}>Choose your training style to get started</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 360 }}>
        <button onClick={() => onSelect("gym")} style={{
          padding: "24px 28px", borderRadius: 20, border: "1px solid #EF444430",
          background: "linear-gradient(135deg, #EF444415, #EF444405)",
          cursor: "pointer", textAlign: "left", transition: "all 0.2s",
        }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🏋️</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: "#F1F5F9", marginBottom: 4 }}>Gym Workout</div>
          <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>5-day plan · Machines, barbells & dumbbells · Fat loss + strength</div>
          <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
            {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((d, i) => (
              <span key={i} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 99, background: "#EF444420", color: "#EF4444", fontWeight: 700 }}>{d}</span>
            ))}
          </div>
        </button>

        <button onClick={() => onSelect("cali")} style={{
          padding: "24px 28px", borderRadius: 20, border: "1px solid #10B98130",
          background: "linear-gradient(135deg, #10B98115, #10B98105)",
          cursor: "pointer", textAlign: "left", transition: "all 0.2s",
        }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🤸</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: "#F1F5F9", marginBottom: 4 }}>Calisthenics</div>
          <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>Bodyweight or dumbbells · 5–6 day plans · No gym needed</div>
          <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
            <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 99, background: "#10B98120", color: "#10B981", fontWeight: 700 }}>Bodyweight</span>
            <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 99, background: "#10B98120", color: "#10B981", fontWeight: 700 }}>+ Dumbbells</span>
          </div>
        </button>
      </div>
    </div>
  );
}

// ─── CALISTHENICS SUB-SELECT ─────────────────────────────────────────────────
function CaliSelectScreen({ onSelect, onBack }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", padding: 24,
      background: "radial-gradient(ellipse at 50% 0%, #0a2218 0%, #0A0A0F 60%)",
    }}>
      <button onClick={onBack} style={{
        position: "absolute", top: 20, left: 20,
        background: "#161625", border: "1px solid #222", borderRadius: 10,
        color: "#94A3B8", padding: "8px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600,
      }}>← Back</button>

      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🤸</div>
        <h1 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 8px", letterSpacing: "-1px", color: "#F1F5F9" }}>Calisthenics</h1>
        <p style={{ color: "#64748B", fontSize: 14, margin: 0 }}>Do you have dumbbells available?</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 360 }}>
        <button onClick={() => onSelect("bodyweight")} style={{
          padding: "24px 28px", borderRadius: 20, border: "1px solid #E8572A30",
          background: "linear-gradient(135deg, #E8572A15, #E8572A05)",
          cursor: "pointer", textAlign: "left",
        }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>💪</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: "#F1F5F9", marginBottom: 4 }}>Bodyweight Only</div>
          <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>6-day plan · Zero equipment · Pull-ups, push-ups, dips</div>
          <div style={{ marginTop: 10, fontSize: 11, padding: "4px 10px", borderRadius: 99, background: "#E8572A20", color: "#E8572A", fontWeight: 700, display: "inline-block" }}>
            6 Days / Week
          </div>
        </button>

        <button onClick={() => onSelect("dumbbells")} style={{
          padding: "24px 28px", borderRadius: 20, border: "1px solid #9B2AE830",
          background: "linear-gradient(135deg, #9B2AE815, #9B2AE805)",
          cursor: "pointer", textAlign: "left",
        }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>🏋️</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: "#F1F5F9", marginBottom: 4 }}>With Dumbbells</div>
          <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>5-day plan · Dumbbells + bodyweight · More muscle overload</div>
          <div style={{ marginTop: 10, fontSize: 11, padding: "4px 10px", borderRadius: 99, background: "#9B2AE820", color: "#9B2AE8", fontWeight: 700, display: "inline-block" }}>
            5 Days / Week
          </div>
        </button>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function WorkoutApp() {
  const [screen, setScreen] = useState("landing"); // landing | cali-select | gym | bodyweight | dumbbells

  const headerConfig = {
    gym: { label: "5-Day Gym Plan", sub: "Beginner · Fat Loss + Strength", accent: "#EF4444", emoji: "🏋️" },
    bodyweight: { label: "Calisthenics Plan", sub: "6-Day · Bodyweight · No Equipment", accent: "#E8572A", emoji: "🤸" },
    dumbbells: { label: "Calisthenics + Dumbbells", sub: "5-Day · Minimal Equipment", accent: "#9B2AE8", emoji: "🏋️" },
  };

  const cfg = headerConfig[screen];

  if (screen === "landing") return <LandingScreen onSelect={s => setScreen(s === "gym" ? "gym" : "cali-select")} />;
  if (screen === "cali-select") return <CaliSelectScreen onSelect={s => setScreen(s)} onBack={() => setScreen("landing")} />;

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F1F5F9", fontFamily: "'Inter', system-ui, sans-serif", paddingBottom: 80 }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, #0F0F1A 0%, #1A0A2E 100%)`,
        padding: "28px 20px 20px", borderBottom: "1px solid #1E1E30",
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setScreen(screen === "gym" ? "landing" : "cali-select")} style={{
            background: "#161625", border: "1px solid #222", borderRadius: 10,
            color: "#94A3B8", padding: "8px 12px", cursor: "pointer", fontSize: 13, fontWeight: 600, flexShrink: 0,
          }}>←</button>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: cfg.accent, textTransform: "uppercase", margin: "0 0 3px" }}>
              {cfg.emoji} {screen === "gym" ? "Gym" : screen === "bodyweight" ? "Bodyweight" : "Dumbbells"}
            </p>
            <h1 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.5px" }}>{cfg.label}</h1>
            <p style={{ fontSize: 12, color: "#64748B", margin: 0 }}>{cfg.sub}</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {screen === "gym" && <GymPlan />}
        {screen === "bodyweight" && <CaliPlan days={caliDays} tips={caliTips} planKey="cali" showDbGuide={false} />}
        {screen === "dumbbells" && <CaliPlan days={dbDays} tips={dbTips} planKey="db" showDbGuide={true} />}
      </div>
    </div>
  );
}
