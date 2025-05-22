export interface BreathingExercise {
  id: string;
  name: string;
  description: string;
  inhaleTime: number; // in seconds
  exhaleTime: number; // in seconds
  repetitions: number;
  benefits: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
}
