"use client";

import * as React from "react";
import { WorkoutSection, Exercise } from "@/types/workout";
import { CustomAddExerciseCard } from "./custom-add-exercise-card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddExerciseDialog } from "./add-exercise-dialog";

interface ExerciseListProps {
  section: WorkoutSection;
  onExerciseAdd: (exercise: Exercise) => void;
  onExerciseRemove: (exerciseId: string) => void;
}

export function ExerciseList({
  section,
  onExerciseAdd,
  onExerciseRemove,
}: ExerciseListProps) {
  const [showAddExercise, setShowAddExercise] = React.useState(false);

  const handleExerciseAdd = (exercise: Exercise) => {
    if (!section.exercises.some((ex) => ex.id === exercise.id)) {
      onExerciseAdd(exercise);
    }
  };

  return (
    <div className="space-y-4 p-4 rounded-lg border border-[#F2D679] bg-[#1C1C1C]">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">{section.name}</h3>
        <span className="text-sm text-gray-400">{section.type}</span>
      </div>

      <div className="space-y-2">
        {section.exercises.map((exercise) => (
          <CustomAddExerciseCard
            key={exercise.id}
            title={exercise.title}
            image={exercise.image}
            onRemove={() => onExerciseRemove(exercise.id)}
          />
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full bg-custom-gold"
        onClick={() => setShowAddExercise(true)}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Exercise
      </Button>

      <AddExerciseDialog
        open={showAddExercise}
        onOpenChange={setShowAddExercise}
        onAdd={handleExerciseAdd}
        addedExercises={section.exercises}
      />
    </div>
  );
}
