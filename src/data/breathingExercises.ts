export interface BreathingExercise {
  id: string;
  name: string;
  description: string;
  inhaleTime: number;
  exhaleTime: number;
  repetitions: number;
  benefits: string[];
}

export const breathingExercises: BreathingExercise[] = [
  {
    id: "box-breathing",
    name: "Box Breathing",
    description:
      "A technique used by Navy SEALs to maintain calm and focus. Equal duration for inhale, hold, exhale, and hold.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 5,
    benefits: [
      "Reduces stress",
      "Improves focus",
      "Enhances performance under pressure",
    ],
  },
  {
    id: "4-7-8-breathing",
    name: "4-7-8 Breathing",
    description:
      "A natural tranquilizer for the nervous system. Inhale for 4, hold for 7, exhale for 8.",
    inhaleTime: 4,
    exhaleTime: 8,
    repetitions: 4,
    benefits: [
      "Promotes better sleep",
      "Reduces anxiety",
      "Helps with stress management",
    ],
  },
  {
    id: "deep-breathing",
    name: "Deep Breathing",
    description:
      "A simple but effective technique for relaxation and stress reduction.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 6,
    benefits: [
      "Reduces tension",
      "Improves oxygen flow",
      "Promotes relaxation",
    ],
  },
  {
    id: "alternate-nostril",
    name: "Alternate Nostril Breathing",
    description:
      "A yogic breathing technique that balances the left and right hemispheres of the brain.",
    inhaleTime: 4,
    exhaleTime: 4,
    repetitions: 8,
    benefits: ["Balances energy", "Reduces anxiety", "Improves focus"],
  },
  {
    id: "wim-hof",
    name: "Wim Hof Breathing",
    description:
      "A powerful breathing technique that combines deep breathing with breath retention.",
    inhaleTime: 2,
    exhaleTime: 2,
    repetitions: 30,
    benefits: [
      "Boosts immune system",
      "Increases energy",
      "Improves stress resilience",
    ],
  },
  {
    id: "relaxing-breath",
    name: "Relaxing Breath",
    description:
      "A gentle breathing pattern designed to promote relaxation and calm.",
    inhaleTime: 6,
    exhaleTime: 6,
    repetitions: 5,
    benefits: [
      "Promotes calmness",
      "Reduces heart rate",
      "Improves sleep quality",
    ],
  },
  {
    id: "energizing-breath",
    name: "Energizing Breath",
    description: "A quick breathing pattern to increase energy and alertness.",
    inhaleTime: 2,
    exhaleTime: 2,
    repetitions: 10,
    benefits: ["Increases energy", "Improves focus", "Reduces fatigue"],
  },
  {
    id: "calming-breath",
    name: "Calming Breath",
    description:
      "A longer exhale pattern to activate the parasympathetic nervous system.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 6,
    benefits: [
      "Reduces anxiety",
      "Promotes relaxation",
      "Improves emotional regulation",
    ],
  },
  {
    id: "morning-breath",
    name: "Morning Breathing",
    description:
      "A gentle breathing pattern to start your day with energy and clarity.",
    inhaleTime: 5,
    exhaleTime: 5,
    repetitions: 5,
    benefits: [
      "Increases morning energy",
      "Improves focus",
      "Sets positive tone for day",
    ],
  },
  {
    id: "evening-breath",
    name: "Evening Breathing",
    description: "A calming breathing pattern to prepare for restful sleep.",
    inhaleTime: 4,
    exhaleTime: 6,
    repetitions: 4,
    benefits: [
      "Promotes better sleep",
      "Reduces evening anxiety",
      "Prepares body for rest",
    ],
  },
];
