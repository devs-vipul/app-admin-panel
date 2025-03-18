import React, { useState } from "react";
import { useFormikContext } from "formik";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RecipeFormValues } from "../create-recipe-form";
import { GripVertical, Plus, X } from "lucide-react";

export const RecipeInstructions: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<RecipeFormValues>();
  const [newInstruction, setNewInstruction] = useState("");

  const addInstruction = () => {
    if (newInstruction.trim() !== "") {
      setFieldValue("instructions", [
        ...values.instructions,
        { id: crypto.randomUUID(), step: newInstruction },
      ]);
      setNewInstruction("");
    }
  };

  const removeInstruction = (id: string) => {
    setFieldValue(
      "instructions",
      values.instructions.filter((ins) => ins.id !== id)
    );
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newInstructions = Array.from(values.instructions);
    const [reorderedItem] = newInstructions.splice(result.source.index, 1);
    newInstructions.splice(result.destination.index, 0, reorderedItem);
    setFieldValue("instructions", newInstructions);
  };

  return (
    <div className="space-y-4 p-2">
      <div className="relative">
        <Input
          placeholder="Add Step By Step Instructions"
          className="pr-12 bg-[#1C1C1C] border-custom-gold text-white placeholder:text-zinc-500"
          value={newInstruction}
          onChange={(e) => setNewInstruction(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addInstruction();
            }
          }}
        />
        <Button
          type="button"
          size="sm"
          className="absolute right-2 text-black font-semibold top-1/2 -translate-y-1/2 h-7 p-2 bg-custom-gold hover:bg-custom-gold/90"
          onClick={addInstruction}
        >
          <Plus className="h-4 w-4 text-black" />
          <span>Add</span>
        </Button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="instructions">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {values.instructions.map((instruction, index) => (
                <Draggable
                  key={instruction.id}
                  draggableId={instruction.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="group flex items-start gap-2 bg-[#2C2C2C] p-3 rounded-md"
                    >
                      <div {...provided.dragHandleProps} className="mt-1">
                        <GripVertical className="w-4 h-4 text-custom-gold cursor-move" />
                      </div>
                      <Textarea
                        value={instruction.step}
                        onChange={(e) => {
                          const newInstructions = [...values.instructions];
                          newInstructions[index].step = e.target.value;
                          setFieldValue("instructions", newInstructions);
                        }}
                        className="flex-1 bg-transparent border-0 text-white resize-none focus:ring-0 p-0 min-h-0"
                        placeholder="Enter instruction step"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="text-custom-gold hover:text-custom-gold/80 p-0 h-auto hover:bg-transparent"
                        onClick={() => removeInstruction(instruction.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
