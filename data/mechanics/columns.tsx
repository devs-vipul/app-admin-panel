"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MechanicsType } from "./schema";

export const mechanicsColumns: ColumnDef<MechanicsType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "mechanicsName",
    header: "Mechanics Name",
    cell: ({ row }) => <div className="">{row.getValue("mechanicsName")}</div>,
  },
  {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => (
      <Button
        variant="default"
        size="icon"
        className="h-8 w-8 !text-custom-primary"
        onClick={() => console.log("Edit", row.original)}
      >
        <Pencil className="h-4 w-4" />
      </Button>
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
