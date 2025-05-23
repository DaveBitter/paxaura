"use client";

import { useState, useEffect } from "react";
import {
  BarChartIcon,
  ClockIcon,
  HeartIcon,
  CheckIcon,
  StarIcon,
  TimerIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import { Box, Card, Flex, Text, Select, Checkbox } from "@radix-ui/themes";

type Benefit =
  | "Reduces stress"
  | "Improves focus"
  | "Enhances performance under pressure"
  | "Promotes better sleep"
  | "Reduces anxiety"
  | "Helps with stress management"
  | "Reduces tension"
  | "Improves oxygen flow"
  | "Promotes relaxation"
  | "Balances energy"
  | "Boosts immune system"
  | "Increases energy"
  | "Improves stress resilience"
  | "Promotes calmness"
  | "Reduces heart rate"
  | "Improves sleep quality"
  | "Reduces fatigue"
  | "Improves emotional regulation"
  | "Sets positive tone for day"
  | "Prepares body for rest";

const BENEFITS: { value: Benefit; label: string; icon: React.ReactNode }[] = [
  {
    value: "Reduces stress",
    label: "Stress Relief",
    icon: <Cross2Icon width="16" height="16" />,
  },
  {
    value: "Improves focus",
    label: "Focus",
    icon: <BarChartIcon width="16" height="16" />,
  },
  {
    value: "Increases energy",
    label: "Energy",
    icon: <StarIcon width="16" height="16" />,
  },
  {
    value: "Promotes better sleep",
    label: "Sleep",
    icon: <TimerIcon width="16" height="16" />,
  },
  {
    value: "Reduces anxiety",
    label: "Anxiety Relief",
    icon: <HeartIcon width="16" height="16" />,
  },
];

const DIFFICULTIES = [
  {
    value: "beginner",
    label: "Beginner",
    icon: <BarChartIcon width="16" height="16" />,
  },
  {
    value: "intermediate",
    label: "Intermediate",
    icon: <BarChartIcon width="16" height="16" />,
  },
  {
    value: "advanced",
    label: "Advanced",
    icon: <BarChartIcon width="16" height="16" />,
  },
];

const DURATIONS = [
  {
    value: "0-60",
    label: "Under 1 minute",
    icon: <ClockIcon width="16" height="16" />,
  },
  {
    value: "60-120",
    label: "1-2 minutes",
    icon: <ClockIcon width="16" height="16" />,
  },
  {
    value: "120-180",
    label: "2-3 minutes",
    icon: <ClockIcon width="16" height="16" />,
  },
  {
    value: "180-300",
    label: "3-5 minutes",
    icon: <ClockIcon width="16" height="16" />,
  },
  {
    value: "300-9999",
    label: "Over 5 minutes",
    icon: <ClockIcon width="16" height="16" />,
  },
];

interface FilterBarProps {
  onFilterChange: (filters: {
    difficulty: string[];
    duration: string[];
    benefits: Benefit[];
    showFavorites: boolean;
  }) => void;
  showFavorites: boolean;
}

export default function FilterBar({
  onFilterChange,
  showFavorites,
}: FilterBarProps) {
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [durations, setDurations] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [showFavs, setShowFavs] = useState<boolean>(showFavorites);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [openDifficulty, setOpenDifficulty] = useState(false);
  const [openDuration, setOpenDuration] = useState(false);
  const [openBenefits, setOpenBenefits] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle filter changes
  useEffect(() => {
    if (isMounted) {
      onFilterChange({
        difficulty: difficulties,
        duration: durations,
        benefits,
        showFavorites: showFavs,
      });
    }
  }, [difficulties, durations, benefits, showFavs, isMounted]);

  // Handle showFavorites prop changes
  useEffect(() => {
    if (isMounted && showFavorites !== showFavs) {
      setShowFavs(showFavorites);
    }
  }, [showFavorites, isMounted]);

  const handleOpenChange = (
    open: boolean,
    setOpen: (open: boolean) => void,
    event?: Event
  ) => {
    // Only close if clicking outside or pressing escape
    if (!open && event?.type === "click") {
      const target = event.target as HTMLElement;
      if (target.closest("[data-radix-select-content]")) {
        return;
      }
    }
    setOpen(open);
  };

  const handleDifficultyChange = (value: string) => {
    if (difficulties.includes(value)) {
      setDifficulties(difficulties.filter((d) => d !== value));
    } else {
      setDifficulties([...difficulties, value]);
    }
  };

  const handleDurationChange = (value: string) => {
    if (durations.includes(value)) {
      setDurations(durations.filter((d) => d !== value));
    } else {
      setDurations([...durations, value]);
    }
  };

  const handleBenefitChange = (benefit: Benefit) => {
    if (benefits.includes(benefit)) {
      setBenefits(benefits.filter((b) => b !== benefit));
    } else {
      setBenefits([...benefits, benefit]);
    }
  };

  if (!isMounted) {
    return (
      <Card size="2" mb="4">
        <Flex gap="4" direction={{ initial: "column", md: "row" }}>
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" mb="1">
              Difficulty
            </Text>
            <Select.Root defaultValue="" disabled>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="">None</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" mb="1">
              Duration
            </Text>
            <Select.Root defaultValue="" disabled>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="">None</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" mb="1">
              Benefits
            </Text>
            <Select.Root defaultValue="" disabled>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="">None</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box style={{ flex: 1 }}>
            <Text as="label" size="2" weight="medium" mb="1">
              Favorites
            </Text>
            <Flex gap="2" align="center">
              <Checkbox disabled />
              <Text size="2">Show Favorites Only</Text>
            </Flex>
          </Box>
        </Flex>
      </Card>
    );
  }

  return (
    <Card
      size="2"
      mb="4"
      style={{
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        transform: "none",
        boxShadow: "none",
      }}
    >
      <Flex gap="4" direction={{ initial: "column", md: "row" }} align="center">
        <Box style={{ flex: 1, width: "100%" }}>
          <Flex gap="2" align="center" mb="1" style={{ width: "100%" }}>
            <Text as="label" size="2" weight="medium" aria-label="Difficulty">
              <BarChartIcon width="16" height="16" />
            </Text>
            <Box style={{ width: "100%" }}>
              <Select.Root
                defaultValue=""
                onValueChange={handleDifficultyChange}
                open={openDifficulty}
                onOpenChange={(open) =>
                  handleOpenChange(open, setOpenDifficulty)
                }
              >
                <Select.Trigger style={{ width: "100%" }}>
                  <Text>
                    {difficulties.length === 0
                      ? "None"
                      : `${difficulties.length} selected`}
                  </Text>
                </Select.Trigger>
                <Select.Content
                  position="popper"
                  sideOffset={5}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    transform: "none",
                    boxShadow: "none",
                  }}
                >
                  {DIFFICULTIES.map(({ value, label, icon }) => (
                    <Select.Item
                      key={value}
                      value={value}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        userSelect: "none",
                        WebkitTapHighlightColor: "transparent",
                        transform: "none",
                        boxShadow: "none",
                      }}
                    >
                      <Flex gap="2" align="center">
                        {icon}
                        <Text>{label}</Text>
                        {difficulties.includes(value) && (
                          <CheckIcon width="16" height="16" />
                        )}
                      </Flex>
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Box>
          </Flex>
        </Box>

        <Box style={{ flex: 1, width: "100%" }}>
          <Flex gap="2" align="center" mb="1" style={{ width: "100%" }}>
            <Text as="label" size="2" weight="medium" aria-label="Duration">
              <ClockIcon width="16" height="16" />
            </Text>
            <Box style={{ width: "100%" }}>
              <Select.Root
                defaultValue=""
                onValueChange={handleDurationChange}
                open={openDuration}
                onOpenChange={(open) => handleOpenChange(open, setOpenDuration)}
              >
                <Select.Trigger style={{ width: "100%" }}>
                  <Text>
                    {durations.length === 0
                      ? "None"
                      : `${durations.length} selected`}
                  </Text>
                </Select.Trigger>
                <Select.Content
                  position="popper"
                  sideOffset={5}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    transform: "none",
                    boxShadow: "none",
                  }}
                >
                  {DURATIONS.map(({ value, label, icon }) => (
                    <Select.Item
                      key={value}
                      value={value}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        userSelect: "none",
                        WebkitTapHighlightColor: "transparent",
                        transform: "none",
                        boxShadow: "none",
                      }}
                    >
                      <Flex gap="2" align="center">
                        {icon}
                        <Text>{label}</Text>
                        {durations.includes(value) && (
                          <CheckIcon width="16" height="16" />
                        )}
                      </Flex>
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Box>
          </Flex>
        </Box>

        <Box style={{ flex: 1, width: "100%" }}>
          <Flex gap="2" align="center" mb="1" style={{ width: "100%" }}>
            <Text as="label" size="2" weight="medium" aria-label="Benefits">
              <HeartIcon width="16" height="16" />
            </Text>
            <Box style={{ width: "100%" }}>
              <Select.Root
                defaultValue=""
                onValueChange={handleBenefitChange}
                open={openBenefits}
                onOpenChange={(open) => handleOpenChange(open, setOpenBenefits)}
              >
                <Select.Trigger style={{ width: "100%" }}>
                  <Text>
                    {benefits.length === 0
                      ? "None"
                      : `${benefits.length} selected`}
                  </Text>
                </Select.Trigger>
                <Select.Content
                  position="popper"
                  sideOffset={5}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    transform: "none",
                    boxShadow: "none",
                  }}
                >
                  {BENEFITS.map(({ value, label, icon }) => (
                    <Select.Item
                      key={value}
                      value={value}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        userSelect: "none",
                        WebkitTapHighlightColor: "transparent",
                        transform: "none",
                        boxShadow: "none",
                      }}
                    >
                      <Flex gap="2" align="center">
                        {icon}
                        <Text>{label}</Text>
                        {benefits.includes(value) && (
                          <CheckIcon width="16" height="16" />
                        )}
                      </Flex>
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Box>
          </Flex>
        </Box>

        <Box style={{ flex: 1 }}>
          <Flex gap="2" align="center" mb="1">
            <Text as="label" size="2" weight="medium" aria-label="Favorites">
              {showFavs ? (
                <HeartIcon
                  width="16"
                  height="16"
                  style={{ color: "red", fill: "red" }}
                />
              ) : (
                <HeartIcon width="16" height="16" />
              )}
            </Text>
            <Flex gap="2" align="center">
              <Checkbox
                checked={showFavs}
                onCheckedChange={(checked) => setShowFavs(checked === true)}
              />
              <Text size="2">Favorites</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
