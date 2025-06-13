import type { BreathingExercise } from "@/types/exercise";

const FAVORITES_KEY = "breathing-exercises-favorites";
const DAILY_HIGHLIGHT_KEY = "breathing-exercise-daily-highlight";

export const getFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (exerciseId: string): string[] => {
  const favorites = getFavorites();
  const newFavorites = favorites.includes(exerciseId)
    ? favorites.filter((id) => id !== exerciseId)
    : [...favorites, exerciseId];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return newFavorites;
};

export const isFavorite = (exerciseId: string): boolean => {
  const favorites = getFavorites();
  return favorites.includes(exerciseId);
};

interface DailyHighlight {
  exerciseId: string;
  date: string;
}

export const getDailyHighlightedExercise = (
  exercises: BreathingExercise[]
): string | null => {
  if (typeof window === "undefined") return null;

  const today = new Date().toISOString().split("T")[0];
  const stored = localStorage.getItem(DAILY_HIGHLIGHT_KEY);

  let storedHighlight: DailyHighlight | null = null;

  if (stored) {
    try {
      storedHighlight = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored daily highlight:", e);
    }
  }

  // If we have a stored highlight for today, return it
  if (storedHighlight && storedHighlight.date === today) {
    // Verify the exercise still exists
    const exerciseExists = exercises.some(
      (ex) => ex.id === storedHighlight!.exerciseId
    );
    if (exerciseExists) {
      return storedHighlight.exerciseId;
    }
  }

  // Select a new random exercise for today
  if (exercises.length === 0) return null;

  // Use the date as seed for consistent daily selection
  const dateNumber = new Date(today).getTime();
  const randomIndex = dateNumber % exercises.length;
  const selectedExercise = exercises[randomIndex];

  // Store the selection
  const newHighlight: DailyHighlight = {
    exerciseId: selectedExercise.id,
    date: today,
  };

  localStorage.setItem(DAILY_HIGHLIGHT_KEY, JSON.stringify(newHighlight));
  return selectedExercise.id;
};
