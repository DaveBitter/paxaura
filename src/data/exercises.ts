import { BreathingExercise } from "@/types/exercise";

export const exercises: BreathingExercise[] = [
  // Basic Breathing Exercises
  {
    id: "box-breathing",
    name: "Box Breathing",
    shortDescription:
      "A powerful technique used by Navy SEALs to maintain calm and focus under pressure.",
    description:
      "Box Breathing is a powerful technique used by Navy SEALs, athletes, and professionals to maintain calm and focus under pressure. The pattern creates a perfect square: inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, and hold for 4 seconds. This method helps regulate your autonomic nervous system, reducing stress and anxiety while improving concentration. Best used before important meetings, presentations, or when you need to maintain composure in stressful situations.",
    inhaleTime: 4,
    inhaleHoldTime: 4,
    exhaleTime: 4,
    exhaleHoldTime: 4,
    repetitions: 5,
    benefits: [
      "Reduces stress",
      "Improves focus",
      "Enhances performance under pressure",
    ],
    difficulty: "beginner",
  },
  {
    id: "4-7-8-breathing",
    name: "4-7-8 Breathing",
    shortDescription:
      "A natural tranquilizer for the nervous system, perfect for sleep and anxiety relief.",
    description:
      "The 4-7-8 breathing technique, developed by Dr. Andrew Weil, is a natural tranquilizer for the nervous system. This method involves inhaling through your nose for 4 seconds, holding the breath for 7 seconds, and exhaling through your mouth for 8 seconds. The longer exhale activates your parasympathetic nervous system, promoting relaxation and reducing anxiety. This exercise is particularly effective for falling asleep, managing anxiety attacks, and reducing stress. Practice regularly for best results.",
    inhaleTime: 4,
    inhaleHoldTime: 7,
    exhaleTime: 8,
    repetitions: 4,
    benefits: [
      "Promotes better sleep",
      "Reduces anxiety",
      "Helps with stress management",
    ],
    difficulty: "beginner",
  },
  {
    id: "deep-breathing",
    name: "Deep Breathing",
    shortDescription:
      "A fundamental technique that increases oxygen flow and promotes relaxation.",
    description:
      "Deep Breathing is a fundamental technique that forms the basis of many breathing exercises. It involves taking slow, deliberate breaths that fully expand your diaphragm and lungs. This exercise helps increase oxygen flow to your body, reduces tension, and activates your body's natural relaxation response. It's perfect for beginners and can be practiced anywhere, anytime. Regular practice can help lower blood pressure, reduce stress hormones, and improve overall well-being.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Reduces tension",
      "Improves oxygen flow",
      "Promotes relaxation",
    ],
    difficulty: "beginner",
  },
  {
    id: "alternate-nostril",
    name: "Alternate Nostril Breathing",
    shortDescription:
      "A traditional yogic technique that balances the left and right hemispheres of the brain.",
    description:
      "Alternate Nostril Breathing (Nadi Shodhana) is a traditional yogic breathing technique that balances the left and right hemispheres of the brain. This practice involves breathing through one nostril at a time while closing the other. It helps balance your energy, calm your mind, and improve focus. The technique is particularly beneficial for reducing anxiety, improving concentration, and promoting mental clarity. Best practiced in a quiet environment where you can focus on the breath.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 8,
    benefits: ["Balances energy", "Reduces anxiety", "Improves focus"],
    difficulty: "intermediate",
  },
  {
    id: "wim-hof",
    name: "Wim Hof Breathing",
    shortDescription:
      "An advanced technique that combines deep breathing with breath retention for maximum energy.",
    description:
      "The Wim Hof Method is a powerful breathing technique developed by the 'Iceman' Wim Hof. This advanced practice combines deep breathing with breath retention to increase energy, reduce stress, and boost the immune system. The technique involves taking 30-40 deep breaths, followed by a breath hold, and then a recovery breath. This method has been shown to increase adrenaline levels, reduce inflammation, and improve stress resilience. Due to its intensity, it's recommended to practice under supervision initially.",
    inhaleTime: 2,
    exhaleTime: 2,
    repetitions: 30,
    benefits: [
      "Boosts immune system",
      "Increases energy",
      "Improves stress resilience",
    ],
    difficulty: "advanced",
  },

  // Morning Exercises
  {
    id: "morning-energizer",
    name: "Morning Energizer",
    shortDescription:
      "A dynamic breathing pattern to kickstart your day with vitality and mental clarity.",
    description:
      "The Morning Energizer is a dynamic breathing pattern designed to kickstart your day with vitality and mental clarity. This exercise uses a balanced 3-3 breathing rhythm to increase oxygen flow and activate your sympathetic nervous system, helping you feel more alert and focused. The quick, energizing breaths help clear morning fog and set a positive tone for your day. Perfect for your morning routine, before exercise, or when you need a quick energy boost.",
    inhaleTime: 3,
    exhaleTime: 3,
    repetitions: 10,
    benefits: [
      "Increases morning energy",
      "Improves focus",
      "Sets positive tone for day",
    ],
    difficulty: "beginner",
  },
  {
    id: "sunrise-breath",
    name: "Sunrise Breath",
    shortDescription:
      "A gentle, mindful breathing pattern to welcome the new day with awareness.",
    description:
      "The Sunrise Breath is a gentle, mindful breathing pattern that helps you welcome the new day with awareness and intention. This exercise uses a balanced 4-4 rhythm to gradually awaken your body and mind, similar to how the sun slowly rises in the morning. The technique helps transition your body from sleep to wakefulness, improving circulation and mental clarity. Best practiced first thing in the morning, preferably with natural light, to help regulate your circadian rhythm.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 8,
    benefits: [
      "Promotes wakefulness",
      "Improves mood",
      "Enhances morning clarity",
    ],
    difficulty: "beginner",
  },
  {
    id: "morning-flow",
    name: "Morning Flow",
    shortDescription:
      "A flowing breathing pattern to energize your morning routine and improve circulation.",
    description:
      "A flowing breathing pattern to energize your morning routine.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Increases vitality",
      "Improves circulation",
      "Enhances morning focus",
    ],
    difficulty: "beginner",
  },

  // Evening Exercises
  {
    id: "evening-calming",
    name: "Evening Calming",
    shortDescription:
      "A gentle breathing pattern designed to help you wind down and prepare for restful sleep.",
    description:
      "The Evening Calming exercise is specifically designed to help you wind down and prepare for restful sleep. This technique uses a longer exhale (6 seconds) compared to the inhale (4 seconds) to activate your parasympathetic nervous system, signaling to your body that it's time to rest. The pattern helps reduce evening anxiety, lower heart rate, and prepare your mind and body for sleep. Best practiced 30 minutes before bedtime in a quiet, dimly lit environment.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 4,
    benefits: [
      "Promotes better sleep",
      "Reduces evening anxiety",
      "Prepares body for rest",
    ],
    difficulty: "beginner",
  },
  {
    id: "moonlight-breath",
    name: "Moonlight Breath",
    shortDescription:
      "A gentle evening breathing pattern to wind down and prepare for sleep.",
    description: "A gentle evening breathing pattern to wind down.",
    inhaleTime: 5,
    exhaleTime: 7,
    repetitions: 5,
    benefits: [
      "Promotes relaxation",
      "Reduces stress",
      "Improves sleep quality",
    ],
    difficulty: "beginner",
  },
  {
    id: "nighttime-flow",
    name: "Nighttime Flow",
    shortDescription:
      "A flowing breathing pattern to prepare your mind and body for restful sleep.",
    description: "A flowing breathing pattern to prepare for sleep.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 6,
    benefits: [
      "Enhances sleep quality",
      "Reduces tension",
      "Promotes calmness",
    ],
    difficulty: "beginner",
  },

  // Stress Relief Exercises
  {
    id: "stress-relief",
    name: "Stress Relief Breath",
    shortDescription:
      "A powerful technique for immediate stress reduction and emotional regulation.",
    description:
      "The Stress Relief Breath is a powerful technique for immediate stress reduction and emotional regulation. This exercise uses a 4-6 breathing pattern (4 seconds inhale, 6 seconds exhale) to quickly activate your body's relaxation response. The longer exhale helps release tension and calm your nervous system. This technique is particularly effective during moments of acute stress, anxiety, or when you need to regain composure quickly. Can be practiced anywhere, anytime you feel overwhelmed.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 6,
    benefits: ["Reduces stress", "Calms the mind", "Promotes relaxation"],
    difficulty: "beginner",
  },
  {
    id: "anxiety-relief",
    name: "Anxiety Relief Breath",
    shortDescription:
      "A calming pattern specifically designed to reduce anxiety and promote emotional balance.",
    description: "A calming pattern specifically designed for anxiety relief.",
    inhaleTime: 5,
    exhaleTime: 7,
    repetitions: 5,
    benefits: [
      "Reduces anxiety",
      "Promotes calmness",
      "Improves emotional balance",
    ],
    difficulty: "beginner",
  },
  {
    id: "peaceful-mind",
    name: "Peaceful Mind Breath",
    shortDescription:
      "A gentle breathing pattern to cultivate inner peace and mindfulness.",
    description: "A gentle breathing pattern to cultivate inner peace.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Promotes mental peace",
      "Reduces tension",
      "Enhances mindfulness",
    ],
    difficulty: "beginner",
  },

  // Energy Boosting Exercises
  {
    id: "energy-boost",
    name: "Energy Boost Breath",
    shortDescription:
      "A quick energizing breathing pattern to increase vitality and reduce fatigue.",
    description: "A quick energizing breathing pattern.",
    inhaleTime: 2,
    exhaleTime: 2,
    repetitions: 15,
    benefits: ["Increases energy", "Improves focus", "Reduces fatigue"],
    difficulty: "beginner",
  },
  {
    id: "vitality-flow",
    name: "Vitality Flow",
    shortDescription:
      "A dynamic breathing pattern to increase vitality and improve circulation.",
    description: "A dynamic breathing pattern to increase vitality.",
    inhaleTime: 3,
    exhaleTime: 3,
    repetitions: 12,
    benefits: ["Boosts energy", "Improves circulation", "Enhances vitality"],
    difficulty: "intermediate",
  },
  {
    id: "power-breath",
    name: "Power Breath",
    shortDescription:
      "An intense breathing pattern designed to maximize energy and performance.",
    description: "An intense breathing pattern for maximum energy.",
    inhaleTime: 2,
    exhaleTime: 2,
    repetitions: 20,
    benefits: ["Increases power", "Boosts energy", "Enhances performance"],
    difficulty: "advanced",
  },

  // Focus Enhancement Exercises
  {
    id: "focus-enhancer",
    name: "Focus Enhancer",
    shortDescription:
      "A specialized breathing pattern to improve concentration and mental clarity.",
    description:
      "The Focus Enhancer is a specialized breathing pattern designed to improve concentration and mental clarity. This technique uses a balanced 4-4 rhythm to optimize oxygen flow to your brain and reduce mental distractions. The exercise helps calm your mind while maintaining alertness, making it perfect for studying, working, or any task requiring sustained attention. Best practiced before important tasks or when you need to maintain focus for extended periods.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 8,
    benefits: [
      "Improves focus",
      "Enhances concentration",
      "Reduces distractions",
    ],
    difficulty: "beginner",
  },
  {
    id: "mind-clarity",
    name: "Mind Clarity Breath",
    shortDescription:
      "A technique to clear mental fog and enhance mental clarity.",
    description: "A technique to clear the mind and enhance mental clarity.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Enhances mental clarity",
      "Improves focus",
      "Reduces mental fog",
    ],
    difficulty: "intermediate",
  },
  {
    id: "concentration-flow",
    name: "Concentration Flow",
    shortDescription:
      "A flowing breathing pattern to enhance concentration and reduce mental fatigue.",
    description: "A flowing breathing pattern to enhance concentration.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 10,
    benefits: [
      "Improves concentration",
      "Enhances focus",
      "Reduces mental fatigue",
    ],
    difficulty: "intermediate",
  },

  // Meditation Support Exercises
  {
    id: "meditation-breath",
    name: "Meditation Breath",
    shortDescription:
      "A foundational breathing pattern to support and enhance your meditation practice.",
    description:
      "The Meditation Breath is a foundational breathing pattern designed to support and enhance your meditation practice. This technique uses a slow, balanced 6-6 rhythm to help quiet the mind and deepen your meditative state. The longer breath cycle helps slow down your thoughts and bring awareness to the present moment. This exercise is particularly effective for beginners in meditation, as it provides a clear focus point for attention. Best practiced in a quiet space where you can sit comfortably for extended periods.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Supports meditation",
      "Promotes mindfulness",
      "Enhances inner peace",
    ],
    difficulty: "beginner",
  },
  {
    id: "zen-breath",
    name: "Zen Breath",
    shortDescription:
      "A traditional Zen breathing technique to cultivate mindfulness and presence.",
    description: "A traditional Zen breathing technique.",
    inhaleTime: 7,
    exhaleTime: 7,
    repetitions: 4,
    benefits: [
      "Promotes zen state",
      "Enhances meditation",
      "Cultivates mindfulness",
    ],
    difficulty: "intermediate",
  },
  {
    id: "mindful-flow",
    name: "Mindful Flow",
    shortDescription:
      "A flowing breathing pattern to enhance mindfulness and present-moment awareness.",
    description: "A flowing breathing pattern for mindfulness practice.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 8,
    benefits: [
      "Enhances mindfulness",
      "Promotes presence",
      "Improves awareness",
    ],
    difficulty: "intermediate",
  },

  // Physical Performance Exercises
  {
    id: "athletic-breath",
    name: "Athletic Breath",
    shortDescription:
      "A dynamic breathing pattern to enhance physical performance and endurance.",
    description:
      "The Athletic Breath is a dynamic breathing pattern specifically designed to enhance physical performance and endurance. This technique uses a quick 3-3 rhythm to optimize oxygen intake and energy utilization during physical activity. The exercise helps improve lung capacity, increase oxygen efficiency, and maintain steady energy levels during exercise. Perfect for warm-ups, during workouts, or before athletic competitions. Regular practice can significantly improve your athletic performance and recovery.",
    inhaleTime: 3,
    exhaleTime: 3,
    repetitions: 15,
    benefits: [
      "Improves athletic performance",
      "Enhances endurance",
      "Increases oxygen efficiency",
    ],
    difficulty: "intermediate",
  },
  {
    id: "power-flow",
    name: "Power Flow",
    shortDescription:
      "An intense breathing pattern designed to maximize physical power and performance.",
    description: "A dynamic breathing pattern for physical power.",
    inhaleTime: 2,
    exhaleTime: 2,
    repetitions: 20,
    benefits: ["Increases power", "Enhances performance", "Improves stamina"],
    difficulty: "advanced",
  },
  {
    id: "endurance-breath",
    name: "Endurance Breath",
    shortDescription:
      "A breathing pattern designed to enhance physical endurance and stamina.",
    description: "A breathing pattern to enhance physical endurance.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 12,
    benefits: [
      "Improves endurance",
      "Enhances stamina",
      "Increases oxygen capacity",
    ],
    difficulty: "intermediate",
  },

  // Emotional Balance Exercises
  {
    id: "emotional-balance",
    name: "Emotional Balance Breath",
    shortDescription:
      "A powerful technique for managing emotions and promoting emotional stability.",
    description:
      "The Emotional Balance Breath is a powerful technique for managing emotions and promoting emotional stability. This exercise uses a balanced 5-5 rhythm to help regulate your emotional state and create a sense of inner equilibrium. The technique helps calm the amygdala (the brain's emotional center) and activate the prefrontal cortex (responsible for emotional regulation). Particularly effective during emotional challenges, mood swings, or when you need to maintain emotional composure. Best practiced regularly to build emotional resilience.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Promotes emotional balance",
      "Reduces mood swings",
      "Enhances stability",
    ],
    difficulty: "beginner",
  },
  {
    id: "heart-opening",
    name: "Heart Opening Breath",
    shortDescription:
      "A breathing pattern to open the heart and enhance emotional well-being.",
    description:
      "A breathing pattern to open the heart and enhance emotional well-being.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Opens the heart",
      "Enhances emotional well-being",
      "Promotes compassion",
    ],
    difficulty: "intermediate",
  },
  {
    id: "emotional-flow",
    name: "Emotional Flow",
    shortDescription:
      "A flowing breathing pattern to promote emotional release and awareness.",
    description: "A flowing breathing pattern for emotional release.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 8,
    benefits: [
      "Promotes emotional release",
      "Enhances emotional awareness",
      "Improves emotional health",
    ],
    difficulty: "intermediate",
  },

  // Creative Enhancement Exercises
  {
    id: "creative-flow",
    name: "Creative Flow Breath",
    shortDescription:
      "A specialized breathing pattern to enhance creativity and innovative thinking.",
    description:
      "The Creative Flow Breath is a specialized breathing pattern designed to enhance creativity and innovative thinking. This technique uses a balanced 5-5 rhythm to increase oxygen flow to the brain's creative centers while reducing mental blocks. The exercise helps quiet the analytical mind and open pathways to creative insights. Particularly effective before creative work, brainstorming sessions, or when you need to overcome creative blocks. Best practiced in a comfortable environment where you can let your mind wander freely.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 8,
    benefits: [
      "Enhances creativity",
      "Improves inspiration",
      "Promotes innovative thinking",
    ],
    difficulty: "beginner",
  },
  {
    id: "inspiration-breath",
    name: "Inspiration Breath",
    shortDescription:
      "A breathing pattern to cultivate inspiration and creative insights.",
    description: "A breathing pattern to cultivate inspiration.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 6,
    benefits: [
      "Cultivates inspiration",
      "Enhances creativity",
      "Promotes innovative ideas",
    ],
    difficulty: "intermediate",
  },
  {
    id: "creative-power",
    name: "Creative Power Breath",
    shortDescription:
      "A powerful breathing pattern designed to unlock creative breakthroughs.",
    description: "A powerful breathing pattern for creative breakthroughs.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 10,
    benefits: [
      "Enhances creative power",
      "Promotes breakthroughs",
      "Improves innovative thinking",
    ],
    difficulty: "advanced",
  },

  // Recovery Exercises
  {
    id: "recovery-breath",
    name: "Recovery Breath",
    shortDescription:
      "A gentle breathing pattern to support physical recovery and healing.",
    description: "A gentle breathing pattern for physical recovery.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: ["Promotes recovery", "Reduces fatigue", "Enhances healing"],
    difficulty: "beginner",
  },
  {
    id: "healing-flow",
    name: "Healing Flow",
    shortDescription:
      "A flowing breathing pattern to support the body's natural healing process.",
    description: "A flowing breathing pattern to support healing.",
    inhaleTime: 5,
    exhaleTime: 7,
    repetitions: 6,
    benefits: ["Supports healing", "Promotes recovery", "Enhances well-being"],
    difficulty: "intermediate",
  },
  {
    id: "restorative-breath",
    name: "Restorative Breath",
    shortDescription:
      "A deep breathing pattern to promote restoration and recovery.",
    description: "A deep breathing pattern for restoration.",
    inhaleTime: 7,
    exhaleTime: 7,
    repetitions: 4,
    benefits: ["Promotes restoration", "Enhances recovery", "Improves healing"],
    difficulty: "intermediate",
  },

  // Balance Exercises
  {
    id: "balance-breath",
    name: "Balance Breath",
    shortDescription:
      "A breathing pattern to promote overall balance and stability.",
    description: "A breathing pattern to promote overall balance.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Promotes balance",
      "Enhances stability",
      "Improves coordination",
    ],
    difficulty: "beginner",
  },
  {
    id: "harmony-flow",
    name: "Harmony Flow",
    shortDescription:
      "A flowing breathing pattern to promote harmony and balance.",
    description: "A flowing breathing pattern for harmony.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 8,
    benefits: ["Promotes harmony", "Enhances balance", "Improves stability"],
    difficulty: "intermediate",
  },
  {
    id: "equilibrium-breath",
    name: "Equilibrium Breath",
    shortDescription:
      "A breathing pattern to maintain equilibrium and inner balance.",
    description: "A breathing pattern to maintain equilibrium.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Maintains equilibrium",
      "Promotes balance",
      "Enhances stability",
    ],
    difficulty: "intermediate",
  },

  // Specialized Exercises
  {
    id: "public-speaking",
    name: "Public Speaking Breath",
    shortDescription:
      "A specialized technique to maintain composure and confidence during presentations.",
    description:
      "The Public Speaking Breath is a specialized technique designed to help you maintain composure and confidence during presentations and public speaking. This exercise uses a 4-6 pattern to calm nerves, regulate voice, and maintain steady breathing while speaking. The technique helps reduce speaking anxiety, improve voice control, and enhance overall presentation presence. Best practiced before important presentations, meetings, or any situation requiring confident communication. Regular practice can significantly improve your public speaking abilities.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Reduces speaking anxiety",
      "Improves voice control",
      "Enhances confidence",
    ],
    difficulty: "beginner",
  },
  {
    id: "exam-focus",
    name: "Exam Focus Breath",
    shortDescription:
      "A breathing pattern to enhance focus and reduce anxiety during exams.",
    description: "A breathing pattern to enhance focus during exams.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Improves exam focus",
      "Reduces test anxiety",
      "Enhances memory",
    ],
    difficulty: "beginner",
  },
  {
    id: "performance-breath",
    name: "Performance Breath",
    shortDescription:
      "A breathing pattern to optimize performance and reduce performance anxiety.",
    description: "A breathing pattern for optimal performance.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 8,
    benefits: [
      "Enhances performance",
      "Improves focus",
      "Reduces performance anxiety",
    ],
    difficulty: "intermediate",
  },
  {
    id: "leadership-breath",
    name: "Leadership Breath",
    shortDescription:
      "A breathing pattern to enhance leadership presence and decision-making.",
    description: "A breathing pattern to enhance leadership presence.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Enhances leadership presence",
      "Improves decision-making",
      "Promotes confidence",
    ],
    difficulty: "intermediate",
  },
  {
    id: "team-sync",
    name: "Team Sync Breath",
    shortDescription:
      "A breathing pattern to promote team harmony and enhance collaboration.",
    description: "A breathing pattern for team synchronization.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Promotes team harmony",
      "Enhances collaboration",
      "Improves communication",
    ],
    difficulty: "intermediate",
  },
];
