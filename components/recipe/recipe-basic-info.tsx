import React from "react";
import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RecipeFormValues, recipeCategories } from "../create-recipe-form";

export const RecipeBasicInfo: React.FC = () => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } =
    useFormikContext<RecipeFormValues>();

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg border-custom-gold bg-[#1C1C1C]">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-custom-gold"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-zinc-400">
              <span className="font-semibold text-custom-gold">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-zinc-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="recipeImage"
            name="recipeImage"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(event) => {
              setFieldValue(
                "recipeImage",
                event.currentTarget.files?.[0] || null
              );
            }}
          />
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="recipeName"
              className="block text-sm font-medium mb-2 text-white"
            >
              Recipe Name
            </label>
            <Input
              id="recipeName"
              name="recipeName"
              placeholder="Enter Recipe Name"
              className="bg-[#1C1C1C] border-custom-gold text-white placeholder:text-zinc-500"
              value={values.recipeName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.recipeName && errors.recipeName && (
              <div className="text-red-500 text-xs mt-1">
                {errors.recipeName}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="recipeDescription"
              className="block text-sm font-medium mb-2 text-white"
            >
              Recipe Description
            </label>
            <Textarea
              id="recipeDescription"
              name="recipeDescription"
              placeholder="Please Write The Down The Basic Overview/Benefits Of This Recipe"
              className="h-32 bg-[#1C1C1C] border-custom-gold text-white placeholder:text-zinc-500 resize-none"
              value={values.recipeDescription}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.recipeDescription && errors.recipeDescription && (
              <div className="text-red-500 text-xs mt-1">
                {errors.recipeDescription}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        <div>
          <label
            htmlFor="recipeCategory"
            className="block text-sm font-medium mb-2 text-white"
          >
            Recipe Category
          </label>
          <Select
            name="recipeCategory"
            onValueChange={(value) => setFieldValue("recipeCategory", value)}
            value={values.recipeCategory}
          >
            <SelectTrigger className="bg-[#1C1C1C] border-custom-gold text-white">
              <SelectValue placeholder="Enter Recipe Category" />
            </SelectTrigger>
            <SelectContent className="bg-[#1C1C1C] border-custom-gold">
              {recipeCategories.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className="text-white focus:bg-[#2C2C2C] focus:text-custom-gold"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {touched.recipeCategory && errors.recipeCategory && (
            <div className="text-red-500 text-xs mt-1">
              {errors.recipeCategory}
            </div>
          )}
        </div>
        <RecipeTime
          label="Prep Time"
          hourName="prepTimeHours"
          minuteName="prepTimeMinutes"
        />
        <RecipeTime
          label="Cook Time"
          hourName="cookTimeHours"
          minuteName="cookTimeMinutes"
        />
        <div className="flex flex-row items-center justify-start">
          <RecipeServings />
        </div>
      </div>
    </div>
  );
};

interface RecipeTimeProps {
  label: string;
  hourName: "prepTimeHours" | "cookTimeHours";
  minuteName: "prepTimeMinutes" | "cookTimeMinutes";
}

const RecipeTime: React.FC<RecipeTimeProps> = ({
  label,
  hourName,
  minuteName,
}) => {
  const { values, handleChange, handleBlur } =
    useFormikContext<RecipeFormValues>();

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-white">
        {label}
      </label>
      <div className="flex rounded-lg border border-custom-gold overflow-hidden">
        <Input
          type="number"
          name={hourName}
          placeholder="h"
          className="w-1/2 border-0 rounded-none bg-[#1C1C1C] text-white placeholder:text-zinc-500 focus-visible:ring-0 text-center"
          value={values[hourName] === undefined ? "" : values[hourName]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="w-[1px] bg-custom-gold" />
        <Input
          type="number"
          name={minuteName}
          placeholder="min"
          className="w-1/2 border-0 rounded-none bg-[#1C1C1C] text-white placeholder:text-zinc-500 focus-visible:ring-0 text-center"
          value={values[minuteName] === undefined ? "" : values[minuteName]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

const RecipeServings: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<RecipeFormValues>();

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-white">
        Servings
      </label>
      <div className="h-9 flex rounded-lg border border-custom-gold overflow-hidden">
        <button
          type="button"
          className="flex items-center px-3 text-custom-gold hover:bg-custom-gold/10"
          onClick={() =>
            setFieldValue("servings", Math.max(1, values.servings - 1))
          }
        >
          -
        </button>
        <div className="w-[1px] bg-custom-gold" />
        <Input
          type="number"
          name="servings"
          className="w-12 border-0 rounded-none bg-[#1C1C1C] text-white focus-visible:ring-0 text-center"
          value={values.servings}
          onChange={(e) =>
            setFieldValue("servings", parseInt(e.target.value) || 1)
          }
        />
        <div className="w-[1px] bg-custom-gold" />
        <button
          type="button"
          className="flex items-center px-3 text-custom-gold hover:bg-custom-gold/10"
          onClick={() => setFieldValue("servings", values.servings + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
