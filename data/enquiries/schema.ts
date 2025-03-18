import { LucideIcon } from "lucide-react";

export interface EnquiryType {
  id: string;
  serialNo: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
  messageIcon?: LucideIcon;
}
