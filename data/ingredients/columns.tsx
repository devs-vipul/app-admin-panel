"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export type Ingredient = {
  id: string;
  serialNo: string;
  name: string;
  protein: string;
  fat: string;
  carb: string;
  calorie: string;
};

export const ingredientColumns: ColumnDef<Ingredient>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
  },
  {
    accessorKey: "name",
    header: "Ingredient Name",
  },
  {
    accessorKey: "protein",
    header: "Protein",
    cell: ({ row }) => <div>{row.getValue("protein")} g</div>,
  },
  {
    accessorKey: "fat",
    header: "Fat",
    cell: ({ row }) => <div>{row.getValue("fat")} g</div>,
  },
  {
    accessorKey: "carb",
    header: "Carb",
    cell: ({ row }) => <div>{row.getValue("carb")} g</div>,
  },
  {
    accessorKey: "calorie",
    header: "Calorie",
    cell: ({ row }) => <div>{row.getValue("calorie")} cal</div>,
  },
  {
    id: "edit",
    header: "Edit",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        className="text-custom-gold hover:text-custom-gold/80 hover:bg-transparent"
      >
        <Pencil className="h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "delete",
    header: "Delete",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="icon"
        className="text-red-500 hover:text-red-500/80"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    ),
  },
];
