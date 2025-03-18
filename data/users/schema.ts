import { LucideIcon } from "lucide-react";

export interface UserType {
  id: string;
  serialNo: string;
  userName: string;
  phoneNumber: string;
  email: string;
  message: string;
  messageIcon?: LucideIcon;
}
