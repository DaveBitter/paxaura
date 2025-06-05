"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  HeartIcon,
  BarChartIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  LoopIcon,
} from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Text,
} from "@radix-ui/themes";
import { Link } from "next-view-transitions";
import BreathingAnimation from "@/components/BreathingAnimation";
import { toggleFavorite, isFavorite } from "@/utils/localStorage";
import type { BreathingExercise } from "@/types/exercise";

interface ExerciseClientProps {
  exercise: BreathingExercise;
}

export default function ExerciseClient({ exercise }: ExerciseClientProps) {
  const router = useRouter();
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const isFav = isFavorite(exercise.id);
    setFavorite(isFav);
  }, [exercise.id]);

  const handleFavoriteClick = () => {
    const newFavorites = toggleFavorite(exercise.id);
    setFavorite(newFavorites.includes(exercise.id));
  };

  if (!isMounted) {
    return (
      <Container size="2" py="6">
        <Button variant="ghost" onClick={() => router.back()} size="2">
          <ArrowLeftIcon width="20" height="20" />
          <Text size="2">Back</Text>
        </Button>
        <Card size="2" mt="4">
          <Flex direction="column" gap="4" align="center">
            <Heading size="6">{exercise.name}</Heading>
            <Text size="2" color="gray">
              {exercise.description}
            </Text>
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

      <Card
        size="2"
        mt="4"
        style={{
          viewTransitionName: `exercise-${exercise.id}`,
        }}
      >
        <Flex direction="column" gap="4">
          <Flex justify="between" align="center">
            <Heading
              size="6"
              style={{
                viewTransitionName: `exercise-title-${exercise.id}`,
              }}
            >
              {exercise.name}
            </Heading>
            <Button
              variant="ghost"
              onClick={handleFavoriteClick}
              size="1"
              style={{
                padding: "8px",
                borderRadius: "50%",
                backgroundColor: favorite ? "var(--purple-3)" : "var(--gray-1)",
                border: favorite ? "1px solid var(--purple-9)" : "none",
              }}
              aria-label={
                favorite ? "Remove from favorites" : "Add to favorites"
              }
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
          </Flex>

          <Text
            size="2"
            color="gray"
            style={{
              viewTransitionName: `exercise-desc-${exercise.id}`,
            }}
          >
            {exercise.description}
          </Text>

          <Flex gap="4" wrap="wrap">
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
                viewTransitionName: `exercise-difficulty-${exercise.id}`,
              }}
            >
              <Flex gap="2" align="center">
                <BarChartIcon width="16" height="16" />
                <Text size="2" weight="medium">
                  {exercise.difficulty}
                </Text>
              </Flex>
            </Box>
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
                viewTransitionName: `exercise-inhale-${exercise.id}`,
              }}
            >
              <Flex gap="2" align="center">
                <ArrowUpIcon width="16" height="16" />
                <Text size="2" weight="medium">
                  {exercise.inhaleTime}s inhale
                </Text>
              </Flex>
            </Box>
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
                viewTransitionName: `exercise-exhale-${exercise.id}`,
              }}
            >
              <Flex gap="2" align="center">
                <ArrowDownIcon width="16" height="16" />
                <Text size="2" weight="medium">
                  {exercise.exhaleTime}s exhale
                </Text>
              </Flex>
            </Box>
            <Box
              style={{
                backgroundColor: "var(--gray-3)",
                padding: "8px 16px",
                borderRadius: "4px",
                viewTransitionName: `exercise-reps-${exercise.id}`,
              }}
            >
              <Flex gap="2" align="center">
                <LoopIcon width="16" height="16" />
                <Text size="2" weight="medium">
                  {exercise.repetitions} reps
                </Text>
              </Flex>
            </Box>
          </Flex>

          <Flex gap="2" wrap="wrap">
            {exercise.benefits.map((benefit: string, index: number) => (
              <Box
                key={benefit}
                style={{
                  background:
                    "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  viewTransitionName: `exercise-benefit-${exercise.id}-${index}`,
                }}
              >
                <Text size="1" style={{ color: "white" }}>
                  {benefit}
                </Text>
              </Box>
            ))}
          </Flex>

          <Link
            href="/learn"
            style={{
              color: "var(--purple-9)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              display: "inline-block",
              marginTop: "8px",
            }}
          >
            Learn More →
          </Link>

          <Box mt="4">
            <BreathingAnimation
              inhaleTime={exercise.inhaleTime}
              exhaleTime={exercise.exhaleTime}
              inhaleHoldTime={exercise.inhaleHoldTime}
              exhaleHoldTime={exercise.exhaleHoldTime}
              repetitions={exercise.repetitions}
            />
          </Box>
        </Flex>
      </Card>
    </Container>
  );
}
