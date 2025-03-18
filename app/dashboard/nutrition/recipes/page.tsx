// import { CardList } from "@/components/card-list";
import PageHeader from "@/components/page-header";
import PageTabs from "@/components/page-tabs";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { DetailedCardList } from "@/components/detailed-card-list";
import Searchbar from "@/components/searchbar";
import { ListFilter } from "@/components/list-filter";
import PageDataCounter from "@/components/page-data-counter";
// import { CreateExerciseForm } from "@/components/create-exercise-form";
import { File, Plus } from "lucide-react";
import TableInfoSection from "@/components/table-info-section";
import { Button } from "@/components/ui/button";
// import { equipmentColumns } from "@/data/equipments/columns";
// import { equipmentTypes } from "@/data/equipments";
// import { mechanicsColumns } from "@/data/mechanics/columns";
// import { mechanicsTypes } from "@/data/mechanics";
// import { forceTypeColumns } from "@/data/force-type/columns";
// import { forceTypes } from "@/data/force-type";
// import { exerciseTypeColumns } from "@/data/exercise-type/columns";
// import { exerciseTypes } from "@/data/exercise-type";
// import { experienceLevelColumns } from "@/data/experience-level/columns";
// import { experienceLevelTypes } from "@/data/experience-level";
// import { muscleGroupsColumns } from "@/data/muscle-groups/columns";
// import { muscleGroupsData } from "@/data/muscle-groups";
import { recipeColumns } from "@/data/recipes/columns";
import { recipeTypes } from "@/data/recipes";
import { CreateRecipeForm } from "@/components/create-recipe-form";

const RecipesPage = () => {
  const tabList = [
    {
      label: "Recipe List",
      value: "recipe_list",
    },
    {
      label: "Recipe Categories",
      value: "recipe_categories",
    },
    {
      label: "Create Recipes",
      value: "create_recipes",
    },
  ];

  const recipes = [
    {
      title: "Zucchini Noodles",
      description:
        "If you want to gain weight you should follow a healthy lifestyle by taking healthy food.",
      prepTime: "02 MIN",
      cookTime: "15 MIN",
      servings: "80-85gm",
      image: "/images/recipe-image.png",
    },
    {
      title: "Zucchini Noodles",
      description:
        "If you want to gain weight you should follow a healthy lifestyle by taking healthy food.",
      prepTime: "02 MIN",
      cookTime: "15 MIN",
      servings: "80-85gm",
      image: "/images/recipe-image.png",
    },
    {
      title: "Zucchini Noodles",
      description:
        "If you want to gain weight you should follow a healthy lifestyle by taking healthy food.",
      prepTime: "02 MIN",
      cookTime: "15 MIN",
      servings: "80-85gm",
      image: "/images/recipe-image.png",
    },
    {
      title: "Zucchini Noodles",
      description:
        "If you want to gain weight you should follow a healthy lifestyle by taking healthy food.",
      prepTime: "02 MIN",
      cookTime: "15 MIN",
      servings: "80-85gm",
      image: "/images/recipe-image.png",
    },
    {
      title: "Zucchini Noodles",
      description:
        "If you want to gain weight you should follow a healthy lifestyle by taking healthy food.",
      prepTime: "02 MIN",
      cookTime: "15 MIN",
      servings: "80-85gm",
      image: "/images/recipe-image.png",
    },
    {
      title: "Zucchini Noodles",
      description:
        "If you want to gain weight you should follow a healthy lifestyle by taking healthy food.",
      prepTime: "02 MIN",
      cookTime: "15 MIN",
      servings: "80-85gm",
      image: "/images/recipe-image.png",
    },
  ];

  return (
    <section>
      <PageHeader title={"Recipes"} />
      <PageTabs tabs={tabList}>
        <TabsContent value="recipe_list">
          <div className="flex flex-row items-center justify-start gap-4">
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Search",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Go",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
              }}
            />
            <ListFilter />
          </div>
          <PageDataCounter title="Healthy Recipes" count={120} />
          <DetailedCardList data={recipes} />
        </TabsContent>
        <TabsContent value="recipe_categories">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-b-white py-4">
            <h3 className="text-sm text-white px-4">Add Recipe Category </h3>
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Enter Category Name",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Choose Category Image",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
                icon: <File className="w-2 h-2" />,
              }}
            />
            <Button
              className="ml-4 bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
              type="submit"
            >
              {" "}
              <span>
                <Plus className="w-2 h-2" />
              </span>
              Add
            </Button>
          </div>
          <TableInfoSection
            tableTitle="Recipe Category List"
            columns={recipeColumns}
            data={recipeTypes}
          />
        </TabsContent>
        <TabsContent value="create_recipes">
          <h3 className="text-sm text-white px-4">Recipe Information</h3>
          <CreateRecipeForm />
        </TabsContent>
      </PageTabs>
    </section>
  );
};

export default RecipesPage;
