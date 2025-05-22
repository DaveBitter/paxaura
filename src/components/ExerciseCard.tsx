"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BreathingExercise } from "@/types/exercise";
import { isFavorite, toggleFavorite } from "@/utils/localStorage";

interface ExerciseCardProps {
  exercise: BreathingExercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [isFav, setIsFav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsFav(isFavorite(exercise.id));
  }, [exercise.id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the favorite button
    const newFavorites = toggleFavorite(exercise.id);
    setIsFav(newFavorites.includes(exercise.id));
  };

  if (!isMounted) {
    return (
      <Link href={`/exercises/${exercise.id}`}>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 pr-8">
            {exercise.name}
          </h2>
          <p className="text-gray-600 mb-4">{exercise.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {exercise.difficulty}
            </span>
            <span className="text-gray-500 text-sm">
              {exercise.repetitions} reps
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {exercise.benefits.map((benefit, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/exercises/${exercise.id}`}>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative">
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFav ? "currentColor" : "none"}
            stroke="currentColor"
            className={`w-6 h-6 ${isFav ? "text-yellow-400" : "text-gray-400"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-2 pr-8">
          {exercise.name}
        </h2>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {exercise.difficulty}
          </span>
          <span className="text-gray-500 text-sm">
            {exercise.repetitions} reps
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {exercise.benefits.map((benefit, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
