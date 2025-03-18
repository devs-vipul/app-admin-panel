"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ForceType } from "./schema";

export const forceTypeColumns: ColumnDef<ForceType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "forceTypeName",
    header: "Force Type Names",
    cell: ({ row }) => <div className="">{row.getValue("forceTypeName")}</div>,
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
