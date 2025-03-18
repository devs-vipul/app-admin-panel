"use client";

import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeBasicInfo } from "./recipe/recipe-basic-info";
import { RecipeIngredients } from "./recipe/recipe-ingredients";
import { RecipeInstructions } from "./recipe/recipe-instructions";
import { RecipeNutrition } from "./recipe/recipe-nutrition";

// Types
export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface Instruction {
  id: string;
  step: string;
}

export interface RecipeFormValues {
  recipeName: string;
  recipeDescription: string;
  recipeImage: File | null;
  recipeCategory: string;
  prepTimeHours: number | undefined;
  prepTimeMinutes: number | undefined;
  cookTimeHours: number | undefined;
  cookTimeMinutes: number | undefined;
  servings: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  protein: number;
  fats: number;
  carbs: number;
  calories: number;
}

// Constants
export const recipeCategories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Dessert",
  "Beverage",
] as const;

export const units = [
  "g",
  "mg",
  "ml",
  "l",
  "tsp",
  "tbsp",
  "cup",
  "piece",
] as const;

export type RecipeCategory = (typeof recipeCategories)[number];
export type Unit = (typeof units)[number];

const validationSchema = Yup.object().shape({
  recipeName: Yup.string().required("Recipe name is required"),
  recipeDescription: Yup.string().required("Recipe description is required"),
  recipeCategory: Yup.string().required("Recipe category is required"),
  prepTimeHours: Yup.number().min(0, "Hours cannot be negative"),
  prepTimeMinutes: Yup.number()
    .min(0, "Minutes cannot be negative")
    .max(59, "Minutes cannot exceed 59"),
  cookTimeHours: Yup.number().min(0, "Hours cannot be negative"),
  cookTimeMinutes: Yup.number()
    .min(0, "Minutes cannot exceed 59")
    .max(59, "Minutes cannot exceed 59"),
  servings: Yup.number().min(1, "Servings must be at least 1"),
  ingredients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Ingredient name is required"),
      quantity: Yup.number()
        .required("Quantity is required")
        .min(0, "Quantity cannot be negative"),
      unit: Yup.string().required("Unit is required"),
    })
  ),
  instructions: Yup.array().of(
    Yup.object().shape({
      step: Yup.string().required("Instruction step is required"),
    })
  ),
  protein: Yup.number().min(0, "Protein cannot be negative"),
  fats: Yup.number().min(0, "Fats cannot be negative"),
  carbs: Yup.number().min(0, "Carbs cannot be negative"),
  calories: Yup.number().min(0, "Calories cannot be negative"),
});

const initialValues: RecipeFormValues = {
  recipeName: "",
  recipeDescription: "",
  recipeImage: null,
  recipeCategory: "",
  prepTimeHours: undefined,
  prepTimeMinutes: undefined,
  cookTimeHours: undefined,
  cookTimeMinutes: undefined,
  servings: 1,
  ingredients: [],
  instructions: [],
  protein: 0,
  fats: 0,
  carbs: 0,
  calories: 0,
};

export function CreateRecipeForm() {
  const handleSubmit = (values: RecipeFormValues) => {
    console.log(values); // Here you would typically send the data to your backend
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center gap-4 space-y-8 text-white p-4">
          <RecipeBasicInfo />

          <Tabs
            defaultValue="ingredients"
            className="bg-[#0D0D0D] w-full border rounded-lg border-custom-gold"
          >
            <TabsList className="grid w-full grid-cols-3 bg-[#0D0D0D]">
              <TabsTrigger
                value="ingredients"
                className=" text-white border-b border-b-white data-[state=active]:bg-black data-[state=active]:text-[#F2D679] data-[state=active]:border-b rounded-none data-[state=active]:border-b-[#F2D679] bg-black py-3"
              >
                Ingredients
              </TabsTrigger>
              <TabsTrigger
                value="instructions"
                className="text-white border-b border-b-white data-[state=active]:bg-black data-[state=active]:text-[#F2D679] data-[state=active]:border-b rounded-none data-[state=active]:border-b-[#F2D679] bg-black py-3"
              >
                Instructions
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="text-white border-b border-b-white data-[state=active]:bg-black data-[state=active]:text-[#F2D679] data-[state=active]:border-b rounded-none data-[state=active]:border-b-[#F2D679] bg-black py-3"
              >
                Nutrition Info
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ingredients" className="mt-4">
              <RecipeIngredients />
            </TabsContent>
            <TabsContent value="instructions" className="mt-4">
              <RecipeInstructions />
            </TabsContent>
            <TabsContent value="nutrition" className="mt-4">
              <RecipeNutrition />
            </TabsContent>
          </Tabs>

          <Button
            type="submit"
            className="m-auto bg-custom-gold text-black hover:bg-custom-gold/90"
            disabled={isSubmitting}
          >
            Create Recipe
          </Button>
        </Form>
      )}
    </Formik>
  );
}
