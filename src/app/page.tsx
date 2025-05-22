"use client";

import { useState, useEffect, useCallback } from "react";
import { exercises } from "@/data/exercises";
import ExerciseCard from "@/components/ExerciseCard";
import FilterBar from "@/components/FilterBar";
import { BreathingExercise } from "@/types/exercise";
import { getFavorites } from "@/utils/localStorage";

export default function Home() {
  const [filteredExercises, setFilteredExercises] =
    useState<BreathingExercise[]>(exercises);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  const handleFilterChange = useCallback(
    (filters: {
      difficulty: string;
      duration: string;
      benefits: string[];
      showFavorites: boolean;
    }) => {
      let filtered = [...exercises];

      if (filters.difficulty) {
        filtered = filtered.filter(
          (exercise) => exercise.difficulty === filters.difficulty
        );
      }

      if (filters.duration) {
        const [min, max] = filters.duration.split("-").map(Number);
        filtered = filtered.filter((exercise) => {
          const totalTime =
            (exercise.inhaleTime + exercise.exhaleTime) * exercise.repetitions;
          return totalTime >= min && totalTime <= max;
        });
      }

      if (filters.benefits.length > 0) {
        filtered = filtered.filter((exercise) =>
          filters.benefits.some((benefit) =>
            exercise.benefits.includes(benefit)
          )
        );
      }

      if (filters.showFavorites) {
        filtered = filtered.filter((exercise) =>
          favorites.includes(exercise.id)
        );
      }

      setFilteredExercises(filtered);
      setShowFavorites(filters.showFavorites);
    },
    [favorites]
  );

  if (!isMounted) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Breathing Exercises
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Breathing Exercises
      </h1>
      <FilterBar
        onFilterChange={handleFilterChange}
        showFavorites={showFavorites}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
      {filteredExercises.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No exercises found matching your criteria.
        </p>
      )}
    </main>
  );
}
