import { exercises } from "@/data/exercises";
import { notFound } from "next/navigation";
import BreathingAnimation from "@/components/BreathingAnimation";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ExercisePage({ params }: PageProps) {
  const exercise = exercises.find((e) => e.id === params.id);

  if (!exercise) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {exercise.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{exercise.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {exercise.benefits.map((benefit, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <BreathingAnimation
            inhaleTime={exercise.inhaleTime}
            exhaleTime={exercise.exhaleTime}
            repetitions={exercise.repetitions}
          />
        </div>
      </div>
    </main>
  );
}
