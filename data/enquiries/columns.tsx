"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryType } from "./schema";
import { CellImage } from "@/components/cell-image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const enquiryColumns: ColumnDef<EnquiryType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => <div className="">{row.getValue("fullName")}</div>,
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => <div className="">{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="cursor-pointer flex items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Eye className="h-4 w-4 text-custom-gold" />
          </DialogTrigger>
          <DialogContent className="border border-custom-gold bg-[#1C1C1C] text-white">
            <DialogHeader>
              <DialogTitle className="text-lg text-semibold text-custom-gold">
                Message
              </DialogTitle>
            </DialogHeader>
            {row.getValue("message")}
          </DialogContent>
        </Dialog>
      </div>
    ),
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-red-500 hover:text-red-600"
        onClick={() => console.log("Delete", row.original)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    ),
  },
];
