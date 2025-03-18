import { LucideIcon } from "lucide-react";

export interface CoachType {
  id: string;
  serialNo: string;
  userName: string;
  subscriptionPlan: string;
  phoneNumber: string;
  email: string;
  message: string;
  messageIcon?: LucideIcon;
}
