"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MuscleGroupsType } from "./schema";
import { CellImage } from "@/components/cell-image";

export const muscleGroupsColumns: ColumnDef<MuscleGroupsType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "muscleName",
    header: "Muscle Name",
    cell: ({ row }) => <div className="">{row.getValue("muscleName")}</div>,
  },
  {
    accessorKey: "thumbnailImage",
    header: "Thumbnail Image",
    cell: ({ row }) => (
      <div className="flex items-start justify-start">
        <CellImage
          image={row.getValue("thumbnailImage")}
          className="h-4 w-4 text-white"
          alt={`${row.getValue("thumbnailImage")} image`}
        />
      </div>
    ),
  },
  {
    accessorKey: "targetMuscleImage",
    header: "Target Muscle Image",
    cell: ({ row }) => (
      <div className="flex items-start justify-start">
        <CellImage
          image={row.getValue("targetMuscleImage")}
          className="h-4 w-4 text-white"
          alt={`${row.getValue("targetMuscleImage")} image`}
        />
      </div>
    ),
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
