"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, MoreVertical, Trash2 } from "lucide-react";
import { CoachSubscriptionType } from "./schema";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends unknown> {
    updateData: (rowIndex: number, columnId: Partial<TData>) => void;
  }
}

export const coachSubscriptionsColumns: ColumnDef<CoachSubscriptionType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => (
      <div className="text-white">{row.getValue("serialNo")}</div>
    ),
  },
  {
    accessorKey: "planName",
    header: "Plan Name",
    cell: ({ row }) => (
      <div className="text-white">{row.getValue("planName")}</div>
    ),
  },
  {
    accessorKey: "clientCap",
    header: "Client Cap",
    cell: ({ row }) => (
      <div className="text-white">{row.getValue("clientCap")}</div>
    ),
  },
  {
    accessorKey: "monthPrice",
    header: "Month Price",
    cell: ({ row }) => (
      <div className="text-white">{row.getValue("monthPrice")}</div>
    ),
  },
  {
    accessorKey: "annualPrice",
    header: "Annual Price",
    cell: ({ row }) => (
      <div className="text-white">{row.getValue("annualPrice")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row, table }) => {
      const status = row.getValue("status") as boolean;

      return (
        <div className="flex items-center">
          <Switch
            checked={status}
            onCheckedChange={(checked) => {
              const { serialNo, planName, duration, price } = row.original;
              console.log({
                serialNo,
                planName,
                duration,
                price,
                newStatus: checked,
              });
              // Update the table data
              table.options.meta?.updateData(row.index, { status: checked });
            }}
            className="data-[state=checked]:bg-custom-gold data-[state=unchecked]:bg-zinc-600"
          />
        </div>
      );
    },
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
