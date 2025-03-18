import { LucideIcon } from "lucide-react";

export interface RecipeType {
  id: string;
  serialNo: string;
  equipmentType: string;
  equipmentImage?: {
    type: string;
    name: string;
  };
}
