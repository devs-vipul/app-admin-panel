"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageType } from "./schema";
import { CellImage } from "@/components/cell-image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const packagesColumns: ColumnDef<PackageType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "paymentType",
    header: "Payment Type",
    cell: ({ row }) => <div className="">{row.getValue("paymentType")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div className="">{row.getValue("price")}</div>,
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-transparent hover:bg-transparent"
            onClick={() => console.log("Delete", row.original)}
          >
            <MoreVertical className="text-custom-gold hover:bg-transparent h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-32 bg-black border-[#d0c7ab]"
        >
          <DropdownMenuItem className="flex items-center gap-2 text-white focus:bg-zinc-800 focus:text-white">
            <Eye className="h-4 w-4" />
            View
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-white focus:bg-zinc-800 focus:text-white">
            <Edit className="h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-red-500 focus:bg-zinc-800 focus:text-red-500">
            <Trash2 className="h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
