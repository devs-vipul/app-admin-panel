"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationType } from "./schema";
import { CellImage } from "@/components/cell-image";

export const notificationColumns: ColumnDef<NotificationType>[] = [
  {
    accessorKey: "serialNo",
    header: "S. No",
    cell: ({ row }) => <div className="">{row.getValue("serialNo")}</div>,
  },
  {
    accessorKey: "notificationFor",
    header: "Notification For",
    cell: ({ row }) => (
      <div className="">{row.getValue("notificationFor")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div className="">{row.getValue("description")}</div>,
  },
];
