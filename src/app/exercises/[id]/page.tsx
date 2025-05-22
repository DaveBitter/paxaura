"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, HeartIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import BreathingAnimation from "@/components/BreathingAnimation";
import { exercises } from "@/data/exercises";
import { toggleFavorite, isFavorite } from "@/utils/localStorage";
import type { BreathingExercise } from "@/types/exercise";

interface ExercisePageProps {
  params: {
    id: string;
  };
}

export default function ExercisePage({ params }: ExercisePageProps) {
  const router = useRouter();
  const [exercise, setExercise] = useState<BreathingExercise | null>(null);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const foundExercise = exercises.find((e) => e.id === params.id);
    if (foundExercise) {
      setExercise(foundExercise);
      setFavorite(isFavorite(foundExercise.id));
    }
  }, [params.id]);

  const handleFavoriteClick = () => {
    if (exercise) {
      const newFavorites = toggleFavorite(exercise.id);
      setFavorite(newFavorites.includes(exercise.id));
    }
  };

  if (!isMounted || !exercise) {
    return (
      <Container size="2" py="6">
        <Button variant="ghost" onClick={() => router.back()} size="2">
          <ArrowLeftIcon width="20" height="20" />
          <Text size="2">Back</Text>
        </Button>
        <Card size="2" mt="4">
          <Flex direction="column" gap="4" align="center">
            <Heading size="6">Loading...</Heading>
          </Flex>
        </Card>
      </Container>
    );
  }

  return (
    <Container size="2" py="6">
      <Button variant="ghost" onClick={() => router.back()} size="2">
        <ArrowLeftIcon width="20" height="20" />
        <Text size="2">Back</Text>
      </Button>

      <Card size="2" mt="4">
        <Flex direction="column" gap="4">
          <Flex justify="between" align="center">
            <Heading size="6">{exercise.name}</Heading>
            <Button
              variant="ghost"
              color={favorite ? "red" : "gray"}
              onClick={handleFavoriteClick}
              size="2"
            >
              <HeartIcon width="20" height="20" />
            </Button>
          </Flex>

          <Text size="2" color="gray">
            {exercise.description}
          </Text>

          <Flex gap="4" wrap="wrap">
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              <Text size="2" weight="medium">
                {exercise.difficulty}
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              <Text size="2" weight="medium">
                {exercise.inhaleTime}s inhale
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              <Text size="2" weight="medium">
                {exercise.exhaleTime}s exhale
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
              }}
            >
              <Text size="2" weight="medium">
                {exercise.repetitions} reps
              </Text>
            </Box>
          </Flex>

          <Flex gap="2" wrap="wrap">
            {exercise.benefits.map((benefit: string) => (
              <Box
                key={benefit}
                style={{
                  backgroundColor: "var(--gray-3)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                <Text size="1">{benefit}</Text>
              </Box>
            ))}
          </Flex>

          <Box mt="4">
            <BreathingAnimation
              inhaleTime={exercise.inhaleTime}
              exhaleTime={exercise.exhaleTime}
              repetitions={exercise.repetitions}
            />
          </Box>
        </Flex>
      </Card>
    </Container>
  );
}
