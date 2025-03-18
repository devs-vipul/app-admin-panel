"use client";

import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Ingredient name is required"),
  amount: Yup.string().required("Amount is required"),
  protein: Yup.number().required("Protein is required"),
  carbs: Yup.number().required("Carbs is required"),
  fat: Yup.number().required("Fat is required"),
  calories: Yup.number().required("Calories is required"),
});

interface IngredientFormValues {
  name: string;
  amount: string;
  protein: string | number;
  carbs: string | number;
  fat: string | number;
  calories: string | number;
}

interface CreateIngredientFormProps {
  onSubmit: (values: IngredientFormValues) => void;
}

export function CreateIngredientForm({ onSubmit }: CreateIngredientFormProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      amount: "100g",
      protein: "",
      carbs: "",
      fat: "",
      calories: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 p-4">
      <h3 className="text-sm text-white">Ingredients Information</h3>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Ingredient Name
          </label>
          <Input
            name="name"
            placeholder="Enter Ingredient Name"
            className="bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Amount per
          </label>
          <Select
            name="amount"
            value={formik.values.amount}
            onValueChange={(value) => formik.setFieldValue("amount", value)}
          >
            <SelectTrigger className="bg-[#1C1C1C] border-[#F2D679] text-white">
              <SelectValue placeholder="100g" />
            </SelectTrigger>
            <SelectContent className="bg-[#1C1C1C] border-[#F2D679]">
              <SelectItem value="100g" className="text-white">
                100g
              </SelectItem>
              <SelectItem value="200g" className="text-white">
                200g
              </SelectItem>
              <SelectItem value="300g" className="text-white">
                300g
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Protein
          </label>
          <div className="relative">
            <Input
              name="protein"
              type="number"
              className="bg-[#1C1C1C] border-[#F2D679] text-white pr-6"
              value={formik.values.protein}
              onChange={formik.handleChange}
            />
            <span className="absolute right-3 text-sm top-1/2 -translate-y-1/2 text-zinc-400">
              g
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Carbs
          </label>
          <div className="relative">
            <Input
              name="carbs"
              type="number"
              className="bg-[#1C1C1C] border-[#F2D679] text-white pr-6"
              value={formik.values.carbs}
              onChange={formik.handleChange}
            />
            <span className="absolute right-3 text-sm top-1/2 -translate-y-1/2 text-zinc-400">
              g
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Fat
          </label>
          <div className="relative">
            <Input
              name="fat"
              type="number"
              className="bg-[#1C1C1C] border-[#F2D679] text-white pr-6"
              value={formik.values.fat}
              onChange={formik.handleChange}
            />
            <span className="absolute right-3 text-sm top-1/2 -translate-y-1/2 text-zinc-400">
              g
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Calories
          </label>
          <div className="relative">
            <Input
              name="calories"
              type="number"
              className="bg-[#1C1C1C] border-[#F2D679] text-white pr-6"
              value={formik.values.calories}
              onChange={formik.handleChange}
            />
            <span className="absolute right-3 text-sm top-1/2 -translate-y-1/2 text-zinc-400">
              g
            </span>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        className="w-auto bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
      >
        Add New Ingredient
      </Button>
    </form>
  );
}
