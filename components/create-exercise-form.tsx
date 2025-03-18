"use client";

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { useFormik } from "formik";
import { GripVertical, MoreVertical, Plus, Upload } from "lucide-react";
import * as React from "react";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const muscleGroups = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Legs",
  "Core",
];

const exerciseTypes = [
  "Strength",
  "Hypertrophy",
  "Endurance",
  "Power",
  "Flexibility",
];

const equipmentOptions = [
  "Barbell",
  "Dumbbell",
  "Kettlebell",
  "Machine",
  "Bodyweight",
  "Resistance Band",
];

const mechanicsOptions = ["Compound", "Isolation"];

const forceTypes = ["Push", "Pull", "Static"];

const experienceLevels = ["Beginner", "Intermediate", "Advanced"];

const validationSchema = Yup.object().shape({
  exerciseName: Yup.string().required("Exercise name is required"),
  targetMuscle: Yup.string().required("Target muscle is required"),
  exerciseType: Yup.string().required("Exercise type is required"),
  equipmentRequired: Yup.string().required("Equipment required is required"),
  mechanics: Yup.string().required("Mechanics is required"),
  forceType: Yup.string().required("Force type is required"),
  experienceLevel: Yup.string().required("Experience level is required"),
  secondaryMuscle: Yup.string().required("Secondary muscle is required"),
  instructions: Yup.array()
    .of(
      Yup.object().shape({
        step: Yup.string().required("Instruction step is required"),
      })
    )
    .required("Instructions are required"),
  overview: Yup.string().required("Overview is required"),
  tips: Yup.string().required("Tips are required"),
});

export function CreateExerciseForm() {
  const [newInstruction, setNewInstruction] = React.useState("");
  const [instructions, setInstructions] = React.useState([
    { id: "1", step: "Stand with your feet shoulder-width apart" },
    { id: "2", step: "Bend your knees and lower your body" },
    { id: "3", step: "Keep your chest up and your weight on your heels" },
    {
      id: "4",
      step: "Lower yourself until your thighs are parallel to the floor",
    },
  ]);

  const formik = useFormik({
    initialValues: {
      exerciseName: "",
      targetMuscle: "",
      exerciseType: "",
      equipmentRequired: "",
      mechanics: "",
      forceType: "",
      experienceLevel: "",
      secondaryMuscle: "",
      instructions: instructions,
      overview: "",
      tips: "",
      video: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const addInstruction = () => {
    if (newInstruction.trim() !== "") {
      setInstructions([
        ...instructions,
        { id: crypto.randomUUID(), step: newInstruction },
      ]);
      setNewInstruction("");
    }
  };

  const removeInstruction = (index: number) => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newInstructions = Array.from(instructions);
    const [removed] = newInstructions.splice(result.source.index, 1);
    newInstructions.splice(result.destination.index, 0, removed);
    setInstructions(newInstructions);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-8 p-4">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-white">
          Exercise Information
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label
              htmlFor="exerciseName"
              className="block text-sm font-medium text-white mb-2"
            >
              Exercise Name
            </label>
            <Input
              id="exerciseName"
              name="exerciseName"
              placeholder="Enter exercise name"
              className="bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500 focus:ring-[#F2D679] focus:border-[#F2D679]"
              value={formik.values.exerciseName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.exerciseName && formik.errors.exerciseName ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.exerciseName}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="targetMuscle"
              className="block text-sm font-medium text-white mb-2"
            >
              Target Muscle
            </label>
            <Select
              name="targetMuscle"
              onValueChange={(value) =>
                formik.setFieldValue("targetMuscle", value)
              }
              value={formik.values.targetMuscle}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white  [&>svg]:text-[#F2D679]">
                <SelectValue placeholder="Select the muscle" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {muscleGroups.map((muscle) => (
                  <SelectItem
                    key={muscle}
                    value={muscle}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {muscle}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.targetMuscle && formik.errors.targetMuscle ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.targetMuscle}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="exerciseType"
              className="block text-sm font-medium text-white mb-2"
            >
              Exercise Type
            </label>
            <Select
              name="exerciseType"
              onValueChange={(value) =>
                formik.setFieldValue("exerciseType", value)
              }
              value={formik.values.exerciseType}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
                <SelectValue placeholder="Select exercise type" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {exerciseTypes.map((type) => (
                  <SelectItem
                    key={type}
                    value={type}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.exerciseType && formik.errors.exerciseType ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.exerciseType}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="equipmentRequired"
              className="block text-sm font-medium text-white mb-2"
            >
              Equipment Required
            </label>
            <Select
              name="equipmentRequired"
              onValueChange={(value) =>
                formik.setFieldValue("equipmentRequired", value)
              }
              value={formik.values.equipmentRequired}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
                <SelectValue placeholder="Select equipment" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {equipmentOptions.map((equipment) => (
                  <SelectItem
                    key={equipment}
                    value={equipment}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {equipment}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.equipmentRequired &&
            formik.errors.equipmentRequired ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.equipmentRequired}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="mechanics"
              className="block text-sm font-medium text-white mb-2"
            >
              Mechanics
            </label>
            <Select
              name="mechanics"
              onValueChange={(value) =>
                formik.setFieldValue("mechanics", value)
              }
              value={formik.values.mechanics}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
                <SelectValue placeholder="Select mechanics" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {mechanicsOptions.map((mechanic) => (
                  <SelectItem
                    key={mechanic}
                    value={mechanic}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {mechanic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.mechanics && formik.errors.mechanics ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.mechanics}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="forceType"
              className="block text-sm font-medium text-white mb-2"
            >
              Force Type
            </label>
            <Select
              name="forceType"
              onValueChange={(value) =>
                formik.setFieldValue("forceType", value)
              }
              value={formik.values.forceType}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
                <SelectValue placeholder="Select force type" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {forceTypes.map((force) => (
                  <SelectItem
                    key={force}
                    value={force}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {force}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.forceType && formik.errors.forceType ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.forceType}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="experienceLevel"
              className="block text-sm font-medium text-white mb-2"
            >
              Experience Level
            </label>
            <Select
              name="experienceLevel"
              onValueChange={(value) =>
                formik.setFieldValue("experienceLevel", value)
              }
              value={formik.values.experienceLevel}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {experienceLevels.map((level) => (
                  <SelectItem
                    key={level}
                    value={level}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.experienceLevel && formik.errors.experienceLevel ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.experienceLevel}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="secondaryMuscle"
              className="block text-sm font-medium text-white mb-2"
            >
              Secondary Muscle
            </label>
            <Select
              name="secondaryMuscle"
              onValueChange={(value) =>
                formik.setFieldValue("secondaryMuscle", value)
              }
              value={formik.values.secondaryMuscle}
            >
              <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
                <SelectValue placeholder="Select secondary muscle" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
                {muscleGroups.map((muscle) => (
                  <SelectItem
                    key={muscle}
                    value={muscle}
                    className="text-white focus:bg-[#2C2C2C] focus:text-[#F2D679]"
                  >
                    {muscle}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formik.touched.secondaryMuscle && formik.errors.secondaryMuscle ? (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.secondaryMuscle}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Instructions</h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-end space-y-4 rounded-lg border border-[#F2D679] bg-[#1C1C1C] p-4">
            <div className="flex space-x-2 items-center w-full">
              <Input
                placeholder="Add Step By Step Instructions"
                className="bg-[#2C2C2C] border-[#F2D679] text-white"
                value={newInstruction}
                onChange={(e) => setNewInstruction(e.target.value)}
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="border-[#F2D679] text-black bg-[#F2D679] hover:text-white ml-auto"
              onClick={addInstruction}
            >
              <Plus className="w-3 h-3" />
              Add
            </Button>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="instructions">
                {(provided) => (
                  <div
                    className="w-full"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {instructions.map((instruction, index) => (
                      <Draggable
                        key={instruction.id}
                        draggableId={instruction.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={cn(
                              "group flex items-center gap-2 rounded-lg bg-[#2C2C2C] p-4 mb-2",
                              index === 0 && "ring-2 ring-blue-500"
                            )}
                          >
                            <div {...provided.dragHandleProps}>
                              <GripVertical className="w-4 h-4 text-[#F2D679]" />
                            </div>
                            <p className="flex-1 text-white text-sm">
                              {instruction.step}
                            </p>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-[#F2D679] hover:bg-[#3C3C3C]"
                                >
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-32 bg-[#1C1C1C] border-[#F2D679]"
                              >
                                <DropdownMenuItem
                                  className="text-white hover:bg-[#2C2C2C]"
                                  onClick={() => removeInstruction(index)}
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
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

          <div className="space-y-4">
            <label className="block text-sm font-medium text-white">
              Instructions Video
            </label>
            <label
              htmlFor="video"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg border-[#F2D679] bg-[#1C1C1C] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-[#F2D679]" />
                <p className="mb-2 text-sm text-zinc-400">
                  <span className="font-semibold text-[#F2D679]">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-zinc-500">
                  MP4, MOV (MAX. 800x400px)
                </p>
              </div>
              <input
                id="video"
                name="video"
                type="file"
                className="hidden"
                accept="video/*"
                onChange={(e) =>
                  formik.setFieldValue("video", e.target.files?.[0])
                }
              />
            </label>
            <p className="text-sm text-white text-end cursor-pointer">
              Reupload Video
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Overview
          </label>
          <Textarea
            name="overview"
            placeholder="Please write down the basic overview/benefits of this exercise"
            className="h-32 bg-[#1C1C1C] border-[#F2D679] text-white resize-none"
            value={formik.values.overview}
            onChange={formik.handleChange}
          />
          {formik.touched.overview && formik.errors.overview ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.overview}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Tips
          </label>
          <Textarea
            name="tips"
            placeholder="Please write down the tips you want to add for this exercise"
            className="h-32 bg-[#1C1C1C] border-[#F2D679] text-white resize-none"
            value={formik.values.tips}
            onChange={formik.handleChange}
          />
          {formik.touched.tips && formik.errors.tips ? (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.tips}
            </div>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        className="bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
      >
        Create Exercise
      </Button>
    </form>
  );
}
