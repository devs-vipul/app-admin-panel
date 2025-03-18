"use client";

import { CreateIngredientForm } from "@/components/create-ingredient-form";
import PageHeader from "@/components/page-header";
import PageTabs from "@/components/page-tabs";
import TableInfoSection from "@/components/table-info-section";
import { TabsContent } from "@/components/ui/tabs";
import { ingredientColumns, type Ingredient } from "@/data/ingredients/columns";
import { useState } from "react";

interface IngredientFormValues {
  name: string;
  protein: string | number;
  fat: string | number;
  carbs: string | number;
  calories: string | number;
}

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: "1",
      serialNo: "01",
      name: "Egg",
      protein: "2.1",
      fat: "2",
      carb: "2.1",
      calorie: "300",
    },
    {
      id: "2",
      serialNo: "02",
      name: "Milk",
      protein: "1.7",
      fat: "3",
      carb: "1.7",
      calorie: "300",
    },
    {
      id: "3",
      serialNo: "03",
      name: "Butter",
      protein: "1.42",
      fat: "4",
      carb: "1.42",
      calorie: "300",
    },
  ]);

  const tabList = [
    {
      label: "Ingredients List",
      value: "ingredients_list",
    },
  ];

  const handleAddIngredient = (values: IngredientFormValues) => {
    const newIngredient: Ingredient = {
      id: (ingredients.length + 1).toString(),
      serialNo: (ingredients.length + 1).toString().padStart(2, "0"),
      name: values.name,
      protein: values.protein.toString(),
      fat: values.fat.toString(),
      carb: values.carbs.toString(),
      calorie: values.calories.toString(),
    };
    setIngredients([...ingredients, newIngredient]);
  };

  return (
    <section>
      <PageHeader title="Ingredients" />
      <PageTabs tabs={tabList}>
        <TabsContent value="ingredients_list">
          <CreateIngredientForm onSubmit={handleAddIngredient} />
          <TableInfoSection
            tableTitle="Ingredients List"
            columns={ingredientColumns}
            data={ingredients}
          />
        </TabsContent>
      </PageTabs>
    </section>
  );
};

export default IngredientsPage;
