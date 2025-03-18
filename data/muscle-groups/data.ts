import { MuscleGroupsType } from "./schema";

export const muscleGroupsData: MuscleGroupsType[] = [
  {
    id: "1",
    serialNo: "01",
    muscleName: "Dumbbell",
    thumbnailImage: {
      type: "icon",
      name: "Dumbbell",
    },
    targetMuscleImage: {
      type: "icon",
      name: "Dumbbell",
    },
  },
  {
    id: "2",
    serialNo: "02",
    muscleName: "Barbell",
    thumbnailImage: {
      type: "icon",
      name: "Dumbbell",
    },
    targetMuscleImage: {
      type: "icon",
      name: "Dumbbell",
    },
  },
  {
    id: "3",
    serialNo: "03",
    muscleName: "Flat Bench",
    thumbnailImage: {
      type: "icon",
      name: "Dumbbell",
    },
    targetMuscleImage: {
      type: "icon",
      name: "Dumbbell",
    },
  },
  // Can pass custom image path also in src below and icons in icon above
  // {
  //   id: "3",
  //   serialNo: "03",
  //   muscleName: "Flat Bench",
  //   thumbnailImage: {
  //     type: "icon",
  //     src: "Dumbbell",
  //   },
  // },
];
