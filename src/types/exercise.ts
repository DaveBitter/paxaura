export interface BreathingExercise {
  id: string;
  name: string;
  description: string;
  inhaleTime: number; // in seconds
  exhaleTime: number; // in seconds
  inhaleHoldTime?: number; // in seconds, optional
  exhaleHoldTime?: number; // in seconds, optional
  repetitions: number;
  benefits: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
}
