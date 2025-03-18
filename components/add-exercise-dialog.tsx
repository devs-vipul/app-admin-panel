"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Exercise } from "@/types/workout";
import ComponentDropdown from "./compound-component-dropdown";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface AddExerciseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (exercise: Exercise) => void;
  addedExercises: Exercise[];
}

const mockExercises: Exercise[] = [
  {
    id: "1",
    title: "Dumbbell Floor Press",
    image: "/images/exercise-card-image.png",
    type: "strength",
    sets: [],
    eachSide: false,
  },
  {
    id: "2",
    title: "Dumbbell Rear Delt Row",
    image: "/images/exercise-card-image.png",
    type: "strength",
    sets: [],
    eachSide: false,
  },
  {
    id: "3",
    title: "Jumping Jacks",
    image: "/images/exercise-card-image.png",
    type: "strength",
    sets: [],
    eachSide: false,
  },
  {
    id: "4",
    title: "Dumbbell Bicep Curl",
    image: "/images/exercise-card-image.png",
    type: "strength",
    sets: [],
    eachSide: false,
  },
  {
    id: "5",
    title: "Standing Biceps Stretch",
    image: "/images/exercise-card-image.png",
    type: "strength",
    sets: [],
    eachSide: false,
  },
];

export function AddExerciseDialog({
  open,
  onOpenChange,
  onAdd,
  addedExercises,
}: AddExerciseDialogProps) {
  const [search, setSearch] = React.useState("");
  const [selectedExercise, setSelectedExercise] = React.useState<string | null>(
    null
  );

  const filteredExercises = mockExercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleExerciseSelect = (exerciseId: string) => {
    if (!addedExercises.some((ex) => ex.id === exerciseId)) {
      setSelectedExercise((prevSelected) =>
        prevSelected === exerciseId ? null : exerciseId
      );
    }
  };

  const handleAddExercise = () => {
    if (selectedExercise) {
      const exerciseToAdd = mockExercises.find(
        (ex) => ex.id === selectedExercise
      );
      if (
        exerciseToAdd &&
        !addedExercises.some((ex) => ex.id === exerciseToAdd.id)
      ) {
        onAdd(exerciseToAdd);
        setSelectedExercise(null);
        onOpenChange(false);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#1C1C1C] border-[#F2D679]">
        <DialogHeader>
          <DialogTitle className="text-white">Choose Exercise</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Search exercises..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#1C1C1C] border-[#F2D679] text-white"
          />

          <RadioGroup
            value={selectedExercise || ""}
            onValueChange={handleExerciseSelect}
          >
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {filteredExercises.map((exercise) => {
                const isAdded = addedExercises.some(
                  (ex) => ex.id === exercise.id
                );
                return (
                  <div
                    key={exercise.id}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={exercise.id}
                      id={exercise.id}
                      className="border-[#F2D679]"
                      disabled={isAdded}
                    />
                    <Label
                      htmlFor={exercise.id}
                      className={`flex-grow ${
                        isAdded
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={() =>
                        !isAdded && handleExerciseSelect(exercise.id)
                      }
                    >
                      <ComponentDropdown
                        title={exercise.title}
                        image={exercise.image}
                        isSelected={selectedExercise === exercise.id}
                        isAdded={isAdded}
                      />
                    </Label>
                  </div>
                );
              })}
            </div>
          </RadioGroup>

          <button
            onClick={handleAddExercise}
            disabled={!selectedExercise}
            className="w-full bg-[#F2D679] text-black py-2 rounded-md disabled:opacity-50"
          >
            Add Exercise
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
