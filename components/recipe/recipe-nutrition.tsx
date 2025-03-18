import React from "react";
import { useFormikContext } from "formik";
import { RecipeFormValues } from "../create-recipe-form";

export const RecipeNutrition: React.FC = () => {
  const { values } = useFormikContext<RecipeFormValues>();

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8 p-6">
      <div className="flex justify-between items-center">
        <span className="text-custom-gold text-sm">Protein</span>
        <span className="text-white text-sm">{values.protein}g</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-custom-gold text-sm">Fats</span>
        <span className="text-white text-sm">{values.fats}g</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-custom-gold text-sm">Carbs</span>
        <span className="text-white text-sm">{values.carbs}g</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-custom-gold text-sm">Calorie</span>
        <span className="text-white text-sm">{values.calories}cal</span>
      </div>
    </div>
  );
};
