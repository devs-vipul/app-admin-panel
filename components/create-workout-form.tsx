"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Upload } from "lucide-react";
import { WorkoutFormValues } from "@/types/workout";
import { ExerciseList } from "./exercise-list";
import { WorkoutArrangement } from "./workout-arrangement";
import { AddSectionDialog } from "./add-section-dialog";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Workout name is required"),
  description: Yup.string().required("Description is required"),
  sections: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Section name is required"),
      type: Yup.string().required("Section type is required"),
      exercises: Yup.array().of(
        Yup.object().shape({
          title: Yup.string().required("Exercise title is required"),
        })
      ),
    })
  ),
});

export function CreateWorkoutForm() {
  const [showAddSection, setShowAddSection] = React.useState(false);

  const formik = useFormik<WorkoutFormValues>({
    initialValues: {
      name: "",
      description: "",
      sections: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const sections = Array.from(formik.values.sections);
    const [reorderedItem] = sections.splice(result.source.index, 1);
    sections.splice(result.destination.index, 0, reorderedItem);

    formik.setFieldValue("sections", sections);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("image", file);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-6 p-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Name your workout"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-[#1C1C1C] border-[#F2D679] text-white"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div>
            <Textarea
              name="description"
              placeholder="Add a description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-[#1C1C1C] border-[#F2D679] text-white min-h-[100px]"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </div>
            )}
          </div>
          <div className="relative flex-1">
            <input
              type="file"
              id="image"
              name="image"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <Button
              type="button"
              variant="outline"
              className="w-full text-custom-gold bg-transparent"
              onClick={() => document.getElementById("image")?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Workout Image
            </Button>
          </div>
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 text-custom-gold bg-transparent"
              onClick={() => setShowAddSection(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Section
            </Button>
          </div>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="workout-sections">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {formik.values.sections.map((section, index) => (
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
                      >
                        <ExerciseList
                          section={section}
                          onExerciseAdd={(exercise) => {
                            const newSections = [...formik.values.sections];
                            newSections[index].exercises.push(exercise);
                            formik.setFieldValue("sections", newSections);
                          }}
                          onExerciseRemove={(exerciseId) => {
                            const newSections = [...formik.values.sections];
                            newSections[index].exercises = newSections[
                              index
                            ].exercises.filter((e) => e.id !== exerciseId);
                            formik.setFieldValue("sections", newSections);
                          }}
                        />
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

      <WorkoutArrangement
        sections={formik.values.sections}
        onReorder={(newSections) => {
          formik.setFieldValue("sections", newSections);
        }}
      />

      <AddSectionDialog
        open={showAddSection}
        onOpenChange={setShowAddSection}
        onAdd={(section) => {
          formik.setFieldValue("sections", [
            ...formik.values.sections,
            section,
          ]);
        }}
      />

      <div className="col-span-2 flex justify-end gap-4">
        <Button
          type="submit"
          className="bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
        >
          Save & Close
        </Button>
      </div>
    </form>
  );
}
