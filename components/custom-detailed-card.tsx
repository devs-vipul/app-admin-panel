import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

interface CustomDetailedCardProps {
  title: string;
  description: string;
  cookTime: string;
  prepTime: string;
  servings: string;
  image: string;
  onClick?: () => void;
}

export function CustomDetailedCard({
  title,
  description,
  cookTime,
  prepTime,
  servings,
  image,
  onClick,
}: CustomDetailedCardProps) {
  console.log(onClick);
  return (
    <div
      className="group relative flex flex-col justify-end h-[200px] rounded-lg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-white hover:bg-black/20"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-32 bg-zinc-900 border-zinc-800"
          >
            <DropdownMenuItem className="text-white hover:bg-zinc-800">
              View
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-zinc-800">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 hover:bg-zinc-800">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-300 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between pt-2 text-xs text-white">
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/images/cook-time-icon.png"
              width={12}
              height={15}
              alt="cook time"
            />
            <span>{cookTime}</span>
            <span className="text-zinc-400">Cook Time</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/images/prep-time-icon.png"
              width={16}
              height={16}
              alt="prep-time"
            />
            <span>{prepTime}</span>
            <span className="text-zinc-400">Prep Time</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image
              src="/images/servings-icon.png"
              width={18}
              height={18}
              alt="servings"
            />
            <span>{servings}</span>
            <span className="text-zinc-400">Servings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
