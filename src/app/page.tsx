"use client";

import { useState, useEffect, useCallback } from "react";
import { Container, Heading, Text, Grid, Box } from "@radix-ui/themes";
import ExerciseCard from "@/components/ExerciseCard";
import FilterBar from "@/components/FilterBar";
import { getFavorites } from "@/utils/localStorage";
import { exercises } from "@/data/exercises";
import type { BreathingExercise } from "@/types/exercise";

export default function Home() {
  const [filteredExercises, setFilteredExercises] =
    useState<BreathingExercise[]>(exercises);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setIsMounted(true);
    const favs = getFavorites();
    setFavorites(favs);
    if (showFavorites) {
      setFilteredExercises(exercises.filter((ex) => favs.includes(ex.id)));
    }
  }, [showFavorites]);

  const handleFilterChange = useCallback(
    (filters: {
      difficulty: string[];
      duration: string[];
      benefits: string[];
      showFavorites: boolean;
    }) => {
      setShowFavorites(filters.showFavorites);
      setFilteredExercises(
        exercises.filter((exercise) => {
          const matchesDifficulty =
            filters.difficulty.length === 0 ||
            filters.difficulty.includes(exercise.difficulty);
          const matchesDuration =
            filters.duration.length === 0 ||
            filters.duration.some((duration) => {
              const [min, max] = duration.split("-").map(Number);
              const exerciseDuration =
                (exercise.inhaleTime + exercise.exhaleTime) *
                exercise.repetitions;
              return exerciseDuration >= min && exerciseDuration <= max;
            });
          const matchesBenefits =
            filters.benefits.length === 0 ||
            filters.benefits.every((benefit) =>
              exercise.benefits.includes(benefit)
            );
          const matchesFavorites =
            !filters.showFavorites || favorites.includes(exercise.id);
          const matchesSearch =
            searchQuery === "" ||
            exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase());

          return (
            matchesDifficulty &&
            matchesDuration &&
            matchesBenefits &&
            matchesFavorites &&
            matchesSearch
          );
        })
      );
    },
    [favorites, searchQuery]
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      handleFilterChange({
        difficulty: [],
        duration: [],
        benefits: [],
        showFavorites,
      });
    },
    [handleFilterChange, showFavorites]
  );

  const handleFavoriteChange = useCallback(() => {
    setFavorites(getFavorites());
  }, []);

  if (!isMounted) {
    return (
      <Container size="2" py="6">
        <Box mb="6" style={{ textAlign: "center" }}>
          <Heading
            size="8"
            mb="3"
            style={{
              background:
                "linear-gradient(90deg, hsl(270 40% 45%), hsl(270 40% 60%), hsl(270 40% 45%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              textShadow: "0 0 30px hsl(270 76% 53% / 0.3)",
            }}
          >
            Breathing Exercises
          </Heading>
          <Text
            size="4"
            mb="6"
            style={{
              background:
                "linear-gradient(90deg, hsl(270 40% 45%), hsl(270 40% 60%), hsl(270 40% 45%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "500",
              letterSpacing: "0.01em",
              opacity: 0.95,
            }}
          >
            Find the perfect breathing exercise for your needs
          </Text>
        </Box>
        <FilterBar
          onFilterChange={handleFilterChange}
          showFavorites={showFavorites}
        />
        <Box mb="4">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid var(--gray-6)",
              backgroundColor: "var(--gray-2)",
              color: "var(--gray-12)",
              fontSize: "14px",
            }}
          />
        </Box>
        <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
          {exercises.slice(0, 6).map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              onFavoriteChange={handleFavoriteChange}
            />
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container size="2" py="6">
      <Box mb="6" style={{ textAlign: "center" }}>
        <Heading
          size="8"
          mb="3"
          style={{
            background:
              "linear-gradient(90deg, hsl(270 40% 45%), hsl(270 40% 60%), hsl(270 40% 45%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            textShadow: "0 0 30px hsl(270 76% 53% / 0.3)",
          }}
        >
          Breathing Exercises
        </Heading>
        <Text
          size="4"
          mb="6"
          style={{
            background:
              "linear-gradient(90deg, hsl(270 40% 45%), hsl(270 40% 60%), hsl(270 40% 45%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "500",
            letterSpacing: "0.01em",
            opacity: 0.95,
          }}
        >
          Find the perfect breathing exercise for your needs
        </Text>
      </Box>
      <FilterBar
        onFilterChange={handleFilterChange}
        showFavorites={showFavorites}
      />
      <Box mb="4">
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid var(--gray-6)",
            backgroundColor: "var(--gray-2)",
            color: "var(--gray-12)",
            fontSize: "14px",
          }}
        />
      </Box>
      <Grid columns={{ initial: "1", sm: "2" }} gap="4">
        {filteredExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onFavoriteChange={handleFavoriteChange}
          />
        ))}
      </Grid>
    </Container>
  );
}
