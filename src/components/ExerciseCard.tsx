"use client";

import { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import {
  HeartIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  LoopIcon,
  BarChartIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { Box, Card, Flex, Text, Button, Grid } from "@radix-ui/themes";
import { toggleFavorite, isFavorite } from "@/utils/localStorage";
import type { BreathingExercise } from "@/types/exercise";

interface ExerciseCardProps {
  exercise: BreathingExercise;
  onFavoriteChange?: () => void;
  isHighlighted?: boolean;
}

export default function ExerciseCard({
  exercise,
  onFavoriteChange,
  isHighlighted = false,
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
            {exercise.shortDescription}
          </Text>
          <Flex gap="2" mt="2">
            <Flex gap="1" align="center">
              <ArrowUpIcon width="14" height="14" />
              <Text size="2" color="gray">
                {exercise.inhaleTime}s inhale
              </Text>
            </Flex>
            <Flex gap="1" align="center">
              <ArrowDownIcon width="14" height="14" />
              <Text size="2" color="gray">
                {exercise.exhaleTime}s exhale
              </Text>
            </Flex>
            <Flex gap="1" align="center">
              <LoopIcon width="14" height="14" />
              <Text size="2" color="gray">
                {exercise.repetitions} reps
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    );
  }

  const cardStyle = {
    viewTransitionName: `exercise-${exercise.id}`,
    cursor: "pointer",
    transition: "all 0.2s ease",
    ...(isHighlighted && {
      background: "linear-gradient(135deg, var(--purple-2), var(--violet-2))",
      border: "2px solid var(--purple-6)",
      boxShadow: "0 0 20px var(--purple-4)",
    }),
  };

  return (
    <div style={{ display: "block", position: "relative" }}>
      {isHighlighted && (
        <Box
          style={{
            position: "absolute",
            top: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            background:
              "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
            color: "white",
            padding: "4px 12px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "500",
            whiteSpace: "nowrap",
          }}
        >
          <Flex gap="1" align="center">
            <StarIcon width="12" height="12" />
            Today&apos;s Highlight
          </Flex>
        </Box>
      )}
      <Link
        href={`/exercises/${exercise.id}`}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          borderRadius: "var(--radius-2)",
          outline: "none",
        }}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            window.location.href = `/exercises/${exercise.id}`;
          }
        }}
      >
        <Card size="2" data-exercise-card style={cardStyle} tabIndex={-1}>
          <Flex direction="column" gap="3" p="4">
            <Flex justify="between" align="center">
              <Text
                size="4"
                weight="medium"
                style={{
                  viewTransitionName: `exercise-title-${exercise.id}`,
                  ...(isHighlighted && { color: "var(--purple-11)" }),
                }}
              >
                {exercise.name}
              </Text>
            </Flex>

            <Text
              size="2"
              color="gray"
              style={{
                viewTransitionName: `exercise-desc-${exercise.id}`,
              }}
            >
              {exercise.shortDescription}
            </Text>

            <Grid columns={{ initial: "2", sm: "2" }} gap="2">
              {exercise.benefits.slice(0, 2).map((benefit, index) => (
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
                  <Flex gap="1" align="center" justify="center">
                    <StarIcon
                      width="12"
                      height="12"
                      style={{ color: "white" }}
                    />
                    <Text
                      size="1"
                      style={{
                        color: "white",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
                    >
                      {benefit}
                    </Text>
                  </Flex>
                </Box>
              ))}
              <Box
                style={{
                  background:
                    "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  viewTransitionName: `exercise-difficulty-${exercise.id}`,
                }}
              >
                <Flex gap="1" align="center" justify="center">
                  <BarChartIcon
                    width="12"
                    height="12"
                    style={{ color: "white" }}
                  />
                  <Text
                    size="1"
                    style={{
                      color: "white",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {exercise.difficulty}
                  </Text>
                </Flex>
              </Box>
            </Grid>

            <Grid columns={{ initial: "1", sm: "3" }} gap="2">
              <Box
                style={{
                  background: "var(--gray-3)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  viewTransitionName: `exercise-reps-${exercise.id}`,
                }}
              >
                <Flex gap="1" align="center">
                  <LoopIcon
                    width="14"
                    height="14"
                    style={{ color: "var(--gray-11)" }}
                  />
                  <Text
                    size="2"
                    color="gray"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {exercise.repetitions} reps
                  </Text>
                </Flex>
              </Box>

              <Box
                style={{
                  background: "var(--gray-3)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  viewTransitionName: `exercise-inhale-${exercise.id}`,
                }}
              >
                <Flex gap="1" align="center">
                  <ArrowUpIcon
                    width="14"
                    height="14"
                    style={{ color: "var(--gray-11)" }}
                  />
                  <Text
                    size="2"
                    color="gray"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {exercise.inhaleTime}s inhale
                  </Text>
                </Flex>
              </Box>

              <Box
                style={{
                  background: "var(--gray-3)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  viewTransitionName: `exercise-exhale-${exercise.id}`,
                }}
              >
                <Flex gap="1" align="center">
                  <ArrowDownIcon
                    width="14"
                    height="14"
                    style={{ color: "var(--gray-11)" }}
                  />
                  <Text
                    size="2"
                    color="gray"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
                    }}
                  >
                    {exercise.exhaleTime}s exhale
                  </Text>
                </Flex>
              </Box>
            </Grid>
          </Flex>
        </Card>
      </Link>
      <Button
        variant="ghost"
        onClick={handleFavoriteClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const mouseEvent = {
              preventDefault: () => {},
              stopPropagation: () => {},
            } as React.MouseEvent;
            handleFavoriteClick(mouseEvent);
          }
        }}
        size="1"
        style={{
          position: "absolute",
          top: isHighlighted ? "24px" : "16px",
          right: "16px",
          zIndex: 1,
          padding: "8px",
          borderRadius: "50%",
          backgroundColor: favorite ? "var(--purple-3)" : "var(--gray-1)",
          border: favorite ? "1px solid var(--purple-9)" : "none",
        }}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
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
