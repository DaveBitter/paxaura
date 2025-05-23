"use client";

import { useState, useEffect, useRef } from "react";
import { createTickSound, initAudioContext } from "@/utils/audio";
import { Card, Button, Flex, Text } from "@radix-ui/themes";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  PauseIcon,
  CheckIcon,
  ResetIcon,
  SpeakerLoudIcon,
  SpeakerOffIcon,
} from "@radix-ui/react-icons";
import React from "react";

interface BreathingAnimationProps {
  inhaleTime: number;
  exhaleTime: number;
  repetitions: number;
  inhaleHoldTime?: number; // Optional hold after inhale
  exhaleHoldTime?: number; // Optional hold after exhale
}

type Phase = "inhale" | "inhaleHold" | "exhale" | "exhaleHold" | "rest";

export default function BreathingAnimation({
  inhaleTime,
  exhaleTime,
  repetitions,
  inhaleHoldTime = 0,
  exhaleHoldTime = 0,
}: BreathingAnimationProps) {
  // State management
  const [phase, setPhase] = useState<Phase>("inhale");
  const [currentRep, setCurrentRep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(inhaleTime);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Refs
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const phaseRef = useRef<Phase>(phase);
  const currentRepRef = useRef(currentRep);

  // Keep refs in sync with state
  useEffect(() => {
    phaseRef.current = phase;
    currentRepRef.current = currentRep;
  }, [phase, currentRep]);

  // Animation logic
  const animate = () => {
    if (!startTimeRef.current) return;

    const currentTime = Date.now();
    const elapsed = (currentTime - startTimeRef.current) / 1000;
    const currentPhase = phaseRef.current;

    let phaseDuration = 0;
    switch (currentPhase) {
      case "inhale":
        phaseDuration = inhaleTime;
        break;
      case "inhaleHold":
        phaseDuration = inhaleHoldTime;
        break;
      case "exhale":
        phaseDuration = exhaleTime;
        break;
      case "exhaleHold":
        phaseDuration = exhaleHoldTime;
        break;
    }

    const remaining = Math.max(0, phaseDuration - elapsed);

    if (remaining <= 0) {
      handlePhaseTransition();
    } else {
      setTimeLeft(Math.ceil(remaining));
      setElapsedTime(elapsed);
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (!isActive) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    startTimeRef.current = Date.now();
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive]);

  const handlePhaseTransition = () => {
    const currentPhase = phaseRef.current;
    const currentRepCount = currentRepRef.current;

    switch (currentPhase) {
      case "inhale":
        if (inhaleHoldTime > 0) {
          setPhase("inhaleHold");
          setTimeLeft(inhaleHoldTime);
        } else {
          setPhase("exhale");
          setTimeLeft(exhaleTime);
        }
        break;
      case "inhaleHold":
        setPhase("exhale");
        setTimeLeft(exhaleTime);
        break;
      case "exhale":
        if (exhaleHoldTime > 0) {
          setPhase("exhaleHold");
          setTimeLeft(exhaleHoldTime);
        } else if (currentRepCount < repetitions) {
          setPhase("inhale");
          setTimeLeft(inhaleTime);
          setCurrentRep((prev) => prev + 1);
        } else {
          setPhase("rest");
          setIsActive(false);
          startTimeRef.current = null;
          return;
        }
        break;
      case "exhaleHold":
        if (currentRepCount < repetitions) {
          setPhase("inhale");
          setTimeLeft(inhaleTime);
          setCurrentRep((prev) => prev + 1);
        } else {
          setPhase("rest");
          setIsActive(false);
          startTimeRef.current = null;
          return;
        }
        break;
    }

    setElapsedTime(0);
    startTimeRef.current = Date.now();
    if (!isMuted) {
      createTickSound();
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // Control handlers
  const handleStart = () => {
    initAudioContext();
    setIsActive(true);
    setPhase("inhale");
    setTimeLeft(inhaleTime);
    setElapsedTime(0);
    setCurrentRep(1);
    if (!isMuted) {
      createTickSound();
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase("inhale");
    setTimeLeft(inhaleTime);
    setElapsedTime(0);
    setCurrentRep(1);
    startTimeRef.current = null;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);

  // Circle size calculation
  const getCircleSize = () => {
    const baseSize = 150;
    const maxSize = 300;

    switch (phase) {
      case "inhale":
        const inhaleProgress = elapsedTime / inhaleTime;
        return baseSize + (maxSize - baseSize) * inhaleProgress;
      case "inhaleHold":
        return maxSize;
      case "exhale":
        const exhaleProgress = elapsedTime / exhaleTime;
        return maxSize - (maxSize - baseSize) * exhaleProgress;
      case "exhaleHold":
        return baseSize;
      default:
        return baseSize;
    }
  };

  // Phase text and icon
  const getPhaseContent = () => {
    switch (phase) {
      case "inhale":
        return {
          text: "Breathe In",
          icon: <ArrowUpIcon width="24" height="24" />,
        };
      case "inhaleHold":
        return { text: "Hold", icon: <PauseIcon width="24" height="24" /> };
      case "exhale":
        return {
          text: "Breathe Out",
          icon: <ArrowDownIcon width="24" height="24" />,
        };
      case "exhaleHold":
        return { text: "Hold", icon: <PauseIcon width="24" height="24" /> };
      default:
        return { text: "Complete", icon: <CheckIcon width="24" height="24" /> };
    }
  };

  return (
    <Card
      size="2"
      data-exercise-card
      className="max-w-md mx-auto flex items-center justify-center"
    >
      <div className="w-full flex flex-col items-center justify-center p-8 min-h-[500px]">
        {/* Breathing Circle */}
        <div className="relative w-[300px] h-[300px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute rounded-full flex items-center justify-center"
            style={{
              width: `${getCircleSize()}px`,
              height: `${getCircleSize()}px`,
              opacity: phase === "rest" ? 0.5 : 1,
              background:
                "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "50%",
              aspectRatio: "1 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col items-center gap-2">
              {React.cloneElement(getPhaseContent().icon, {
                style: { color: "white" },
              })}
              <h2 className="text-2xl font-semibold tracking-wide text-white select-none">
                {getPhaseContent().text}
              </h2>
            </div>
          </div>
        </div>

        {/* Status Information */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            {phase !== "rest" ? `${timeLeft}s remaining` : "Exercise complete!"}
          </p>
          <p className="text-muted-foreground mt-2">
            Repetition {currentRep} of {repetitions}
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4 mt-8">
          {!isActive ? (
            <Button
              onClick={handleStart}
              size="3"
              style={{
                background:
                  "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
                color: "white",
              }}
            >
              Start Exercise
            </Button>
          ) : (
            <Button
              onClick={handleReset}
              size="3"
              style={{
                background:
                  "linear-gradient(135deg, var(--purple-9), var(--violet-9))",
                color: "white",
              }}
            >
              <Flex gap="2" align="center">
                <ResetIcon width="16" height="16" />
                <Text>Reset</Text>
              </Flex>
            </Button>
          )}
          <Button
            onClick={toggleMute}
            variant="soft"
            size="3"
            style={{
              background: "var(--gray-3)",
              color: "var(--gray-11)",
            }}
          >
            <Flex gap="2" align="center">
              {isMuted ? (
                <SpeakerOffIcon width="16" height="16" />
              ) : (
                <SpeakerLoudIcon width="16" height="16" />
              )}
              <Text>{isMuted ? "Unmute" : "Mute"}</Text>
            </Flex>
          </Button>
        </div>
      </div>
    </Card>
  );
}
