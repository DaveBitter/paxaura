import { exercises } from "@/data/exercises";
import ExerciseClient from "./ExerciseClient";
import { notFound } from "next/navigation";

interface ExercisePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const { id } = await params;
  const exercise = exercises.find((e) => e.id === id);

  if (!exercise) {
    notFound();
  }

  return <ExerciseClient exercise={exercise} />;
}
