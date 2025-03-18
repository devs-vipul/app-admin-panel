import { LucideIcon } from "lucide-react";

export interface EquipmentType {
  id: string;
  serialNo: string;
  equipmentType: string;
  equipmentImage?: {
    type: string;
    name: string;
  };
}
