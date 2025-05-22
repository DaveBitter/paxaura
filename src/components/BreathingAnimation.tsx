"use client";

import { useState, useEffect, useRef } from "react";
import { createTickSound, initAudioContext } from "@/utils/audio";
import { Card } from "@radix-ui/themes";

interface BreathingAnimationProps {
  inhaleTime: number;
  exhaleTime: number;
  repetitions: number;
}

export default function BreathingAnimation({
  inhaleTime,
  exhaleTime,
  repetitions,
}: BreathingAnimationProps) {
  const [phase, setPhase] = useState<"inhale" | "exhale" | "rest">("inhale");
  const [currentRep, setCurrentRep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(inhaleTime);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now();
      const animate = () => {
        if (!startTimeRef.current) return;

        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        const remaining =
          phase === "inhale" ? inhaleTime - elapsed : exhaleTime - elapsed;

        if (remaining <= 0) {
          if (phase === "inhale") {
            setPhase("exhale");
            setTimeLeft(exhaleTime);
            setElapsedTime(0);
            startTimeRef.current = Date.now();
            if (!isMuted) {
              createTickSound();
            }
          } else if (phase === "exhale") {
            if (currentRep < repetitions) {
              setPhase("inhale");
              setTimeLeft(inhaleTime);
              setElapsedTime(0);
              setCurrentRep((prev) => prev + 1);
              startTimeRef.current = Date.now();
              if (!isMuted) {
                createTickSound();
              }
            } else {
              setPhase("rest");
              setIsActive(false);
              startTimeRef.current = null;
            }
          }
        } else {
          setTimeLeft(Math.ceil(remaining));
          setElapsedTime(elapsed);
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    isActive,
    phase,
    currentRep,
    inhaleTime,
    exhaleTime,
    repetitions,
    isMuted,
  ]);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const getCircleSize = () => {
    if (phase === "inhale") {
      return 100 + elapsedTime * (100 / inhaleTime);
    } else if (phase === "exhale") {
      return 200 - elapsedTime * (100 / exhaleTime);
    }
    return 100;
  };

  return (
    <Card size="2" data-exercise-card>
      <div className="flex flex-col items-center p-8">
        <div className="relative w-64 h-64 mb-8">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            style={{
              width: `${getCircleSize()}px`,
              height: `${getCircleSize()}px`,
              opacity: phase === "rest" ? 0.5 : 1,
              transition: "all 0.1s ease-out",
            }}
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-foreground">
            {phase === "inhale"
              ? "Breathe In"
              : phase === "exhale"
              ? "Breathe Out"
              : "Complete"}
          </h2>
          <p className="text-muted-foreground">
            {phase !== "rest" ? `${timeLeft}s remaining` : "Exercise complete!"}
          </p>
          <p className="text-muted-foreground mt-2">
            Repetition {currentRep} of {repetitions}
          </p>
        </div>

        <div className="flex gap-4">
          {!isActive ? (
            <button
              onClick={handleStart}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Exercise
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
            >
              Reset
            </button>
          )}
          <button
            onClick={toggleMute}
            className="px-6 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/90 transition-colors"
          >
            {isMuted ? "🔇 Unmute" : "🔊 Mute"}
          </button>
        </div>
      </div>
    </Card>
  );
}
