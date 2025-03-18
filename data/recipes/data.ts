import { RecipeType } from "./schema";

export const recipeTypes: RecipeType[] = [
  {
    id: "1",
    serialNo: "01",
    equipmentType: "Dumbbell",
    equipmentImage: {
      type: "icon",
      name: "Dumbbell",
    },
  },
  {
    id: "2",
    serialNo: "02",
    equipmentType: "Barbell",
    equipmentImage: {
      type: "icon",
      name: "Dumbbell",
    },
  },
  {
    id: "3",
    serialNo: "03",
    equipmentType: "Flat Bench",
    equipmentImage: {
      type: "icon",
      name: "Dumbbell",
    },
  },
  // Can pass custom image path also in src below and icons in icon above
  // {
  //   id: "3",
  //   serialNo: "03",
  //   equipmentType: "Flat Bench",
  //   equipmentImage: {
  //     type: "icon",
  //     src: "Dumbbell",
  //   },
  // },
];
