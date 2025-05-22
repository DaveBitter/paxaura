"use client";

import { useState, useEffect, useRef } from "react";
import { createTickSound, initAudioContext } from "@/utils/audio";
import { Card, Button } from "@radix-ui/themes";

interface BreathingAnimationProps {
  inhaleTime: number;
  exhaleTime: number;
  repetitions: number;
}

type Phase = "inhale" | "exhale" | "rest";

export default function BreathingAnimation({
  inhaleTime,
  exhaleTime,
  repetitions,
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
    const phaseDuration = currentPhase === "inhale" ? inhaleTime : exhaleTime;
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

    if (currentPhase === "inhale") {
      setPhase("exhale");
      setTimeLeft(exhaleTime);
      setElapsedTime(0);
      startTimeRef.current = Date.now();
      if (!isMuted) {
        createTickSound();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    } else if (currentPhase === "exhale") {
      if (currentRepCount < repetitions) {
        setPhase("inhale");
        setTimeLeft(inhaleTime);
        setElapsedTime(0);
        setCurrentRep((prev) => prev + 1);
        startTimeRef.current = Date.now();
        if (!isMuted) {
          createTickSound();
        }
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setPhase("rest");
        setIsActive(false);
        startTimeRef.current = null;
      }
    }
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

    if (phase === "inhale") {
      const progress = elapsedTime / inhaleTime;
      return baseSize + (maxSize - baseSize) * progress;
    } else if (phase === "exhale") {
      const progress = elapsedTime / exhaleTime;
      return maxSize - (maxSize - baseSize) * progress;
    }
    return baseSize;
  };

  // Phase text
  const getPhaseText = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In";
      case "exhale":
        return "Breathe Out";
      default:
        return "Complete";
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
            <h2 className="text-2xl font-semibold tracking-wide text-white select-none">
              {getPhaseText()}
            </h2>
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
              Reset
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
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
