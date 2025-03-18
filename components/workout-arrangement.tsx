"use client";

import * as React from "react";
import { WorkoutSection } from "@/types/workout";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface WorkoutArrangementProps {
  sections: WorkoutSection[];
  onReorder: (newSections: WorkoutSection[]) => void;
}

export function WorkoutArrangement({
  sections,
  onReorder,
}: WorkoutArrangementProps) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onReorder(items);
  };

  return (
    <Card className="bg-[#1C1C1C] border-[#F2D679]">
      <CardContent className="p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Workout Arrangement
        </h2>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="workout-arrangement">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {sections.map((section, index) => (
                  <Draggable
                    key={section.id}
                    draggableId={section.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-4"
                      >
                        <div className="flex items-center gap-2 text-white mb-2">
                          <ChevronDown className="w-4 h-4" />
                          <span className="text-sm text-custom-gold">
                            {section.name} ({section.exercises.length})
                          </span>
                        </div>

                        <div className="pl-6 space-y-2">
                          {section.exercises.map((exercise) => (
                            <div
                              key={exercise.id}
                              className="flex items-center gap-2 text-gray-400"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#F2D679]" />
                              <span className="text-sm text-muted-foreground">
                                {exercise.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CardContent>
    </Card>
  );
}
