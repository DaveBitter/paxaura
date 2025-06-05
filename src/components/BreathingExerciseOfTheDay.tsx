"use client";

import { useState, useEffect } from "react";
import { Card, Heading, Text, Box, Flex, Button } from "@radix-ui/themes";
import { Link } from "next-view-transitions";
import { exercises } from "@/data/exercises";
import type { BreathingExercise } from "@/types/exercise";

const STORAGE_KEY = "breathing_exercise_of_the_day";

interface StoredExercise {
  id: string;
  date: string;
}

export default function BreathingExerciseOfTheDay() {
  const [exercise, setExercise] = useState<BreathingExercise | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const stored = localStorage.getItem(STORAGE_KEY);
    let storedExercise: StoredExercise | null = null;

    if (stored) {
      try {
        storedExercise = JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored exercise:", e);
      }
    }

    if (storedExercise && storedExercise.date === today) {
      const foundExercise = exercises.find(
        (ex) => ex.id === storedExercise!.id
      );
      if (foundExercise) {
        setExercise(foundExercise);
        return;
      }
    }

    // If no stored exercise for today or stored exercise not found, select a random one
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const randomExercise = exercises[randomIndex];
    setExercise(randomExercise);

    // Store the selected exercise
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        id: randomExercise.id,
        date: today,
      })
    );
  }, []);

  if (!exercise) {
    return null;
  }

  return (
    <Card size="2" style={{ backgroundColor: "var(--purple-3)" }}>
      <Flex direction="column" gap="3">
        <Heading size="4">Breathing Exercise of the Day</Heading>
        <Text size="3" weight="medium">
          {exercise.name}
        </Text>
        <Text size="2" color="gray">
          {exercise.shortDescription}
        </Text>
        <Flex gap="2" wrap="wrap">
          {exercise.benefits.slice(0, 3).map((benefit) => (
            <Box
              key={benefit}
              style={{
                backgroundColor: "var(--purple-4)",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              {benefit}
            </Box>
          ))}
        </Flex>
        <Link
          href={`/exercises/${exercise.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button variant="solid" color="purple">
            Try This Exercise
          </Button>
        </Link>
      </Flex>
    </Card>
  );
}
