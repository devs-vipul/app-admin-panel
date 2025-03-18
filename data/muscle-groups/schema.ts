import { LucideIcon } from "lucide-react";

export interface MuscleGroupsType {
  id: string;
  serialNo: string;
  muscleName: string;
  thumbnailImage?: {
    type: string;
    name: string;
  };
  targetMuscleImage: {
    type: string;
    name: string;
  };
}
