import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Eye, MoreVertical, Trash2 } from "lucide-react";
import Image from "next/image";

interface CustomCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export function CustomCard({ title, image, onClick }: CustomCardProps) {
  console.log(onClick);
  return (
    <div className="flex items-center gap-3 rounded-lg bg-zinc-900 p-3">
      <Image
        src={image}
        alt={title}
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="flex-1 text-sm text-white">{title}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 text-white hover:bg- hover:text-[#F2D679]"
          >
            <MoreVertical className="h-4 w-4" />
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
    </div>
  );
}
