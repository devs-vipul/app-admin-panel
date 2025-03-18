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
  prepTimeHours: number;
  prepTimeMinutes: number;
  cookTimeHours: number;
  cookTimeMinutes: number;
  servings: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  protein: number;
  fats: number;
  carbs: number;
  calories: number;
}

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
