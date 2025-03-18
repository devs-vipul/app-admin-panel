"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Edit,
  Eye,
  GripVertical,
  MessageCircleMore,
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoachType } from "./schema";
import { CellImage } from "@/components/cell-image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const coachesColumns: ColumnDef<CoachType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "userName",
    header: "User's Name",
    cell: ({ row }) => <div className="">{row.getValue("userName")}</div>,
  },
  {
    accessorKey: "subscriptionPlan",
    header: "Subscription Plan",
    cell: ({ row }) => (
      <div className="">{row.getValue("subscriptionPlan")}</div>
    ),
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
            <MessageCircleMore className="h-4 w-4 text-custom-gold" />
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
