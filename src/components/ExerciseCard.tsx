"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeartIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Text, Button } from "@radix-ui/themes";
import { toggleFavorite, isFavorite } from "@/utils/localStorage";
import type { BreathingExercise } from "@/types/exercise";

interface ExerciseCardProps {
  exercise: BreathingExercise;
  onFavoriteChange?: () => void;
}

export default function ExerciseCard({
  exercise,
  onFavoriteChange,
}: ExerciseCardProps) {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    setFavorite(isFavorite(exercise.id));
  }, [exercise.id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavorites = toggleFavorite(exercise.id);
    setFavorite(newFavorites.includes(exercise.id));
    onFavoriteChange?.();
  };

  if (!isMounted) {
    return (
      <Card size="2" style={{ height: "100%" }}>
        <Flex direction="column" gap="2">
          <Text size="4" weight="medium">
            {exercise.name}
          </Text>
          <Text size="2" color="gray">
            {exercise.description}
          </Text>
          <Flex gap="2" mt="2">
            <Text size="2" color="gray">
              {exercise.inhaleTime}s inhale
            </Text>
            <Text size="2" color="gray">
              {exercise.exhaleTime}s exhale
            </Text>
            <Text size="2" color="gray">
              {exercise.repetitions} reps
            </Text>
          </Flex>
        </Flex>
      </Card>
    );
  }

  return (
    <div style={{ display: "block", position: "relative" }}>
      <Link href={`/exercises/${exercise.id}`} style={{ display: "contents" }}>
        <Card size="2" data-exercise-card>
          <Flex direction="column" gap="3" p="4">
            <Flex justify="between" align="center">
              <Text size="4" weight="medium">
                {exercise.name}
              </Text>
            </Flex>

            <Text size="2" color="gray">
              {exercise.description}
            </Text>

            <Flex gap="2" wrap="wrap">
              {exercise.benefits.slice(0, 2).map((benefit) => (
                <Box
                  key={benefit}
                  style={{
                    background:
                      "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  <Text size="1" style={{ color: "white" }}>
                    {benefit}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Flex gap="2" align="center">
              <Box
                style={{
                  background:
                    "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                <Text size="1" style={{ color: "white" }}>
                  {exercise.difficulty}
                </Text>
              </Box>
              <Text size="2" color="gray">
                {exercise.repetitions} reps
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Link>
      <Button
        variant="ghost"
        onClick={handleFavoriteClick}
        size="1"
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 1,
          padding: "8px",
          borderRadius: "50%",
          backgroundColor: favorite ? "var(--purple-3)" : "var(--gray-1)",
          border: favorite ? "1px solid var(--purple-9)" : "none",
        }}
      >
        <HeartIcon
          width="16"
          height="16"
          style={{
            fill: favorite ? "var(--purple-9)" : "none",
            stroke: "var(--purple-9)",
            transition: "all 0.2s ease-in-out",
            transform: favorite ? "scale(1.1)" : "scale(1)",
          }}
        />
      </Button>
    </div>
  );
}
