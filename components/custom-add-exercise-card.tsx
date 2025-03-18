"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  ChevronUp,
  Edit,
  Eye,
  Minus,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";

interface Set {
  id: string;
  weight: string;
  reps: string;
  rest: string;
}

interface CustomAddExerciseCardProps {
  title: string;
  image: string;
  onRemove?: () => void;
}

export function CustomAddExerciseCard({
  title,
  image,
  onRemove,
}: CustomAddExerciseCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [sets, setSets] = React.useState<Set[]>([
    { id: "1", weight: "", reps: "", rest: "00:00" },
  ]);
  const [eachSide, setEachSide] = React.useState(false);

  const addSet = () => {
    setSets((prev) => [
      ...prev,
      {
        id: String(prev.length + 1),
        weight: "",
        reps: "",
        rest: "00:00",
      },
    ]);
  };

  const removeSet = (id: string) => {
    setSets((prev) => prev.filter((set) => set.id !== id));
  };

  const updateSet = (id: string, field: keyof Set, value: string) => {
    setSets((prev) =>
      prev.map((set) => (set.id === id ? { ...set, [field]: value } : set))
    );
  };

  return (
    <div className="rounded-lg bg-zinc-900 p-3">
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="flex-1 text-sm text-white">{title}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-transparent hover:bg-transparent"
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-custom-gold" />
          ) : (
            <ChevronDown className="h-4 w-4 text-custom-gold" />
          )}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-white hover:bg-transparent hover:text-[#F2D679]"
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
            <DropdownMenuItem
              className="flex items-center gap-2 text-red-500 focus:bg-zinc-800 focus:text-red-500"
              onClick={onRemove}
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-sm font-medium text-white">Set</div>
            <div className="text-sm font-medium text-white">Weight (kg)</div>
            <div className="text-sm font-medium text-white">Reps</div>
            <div className="text-sm font-medium text-white">Rest</div>
          </div>

          {sets.map((set) => (
            <div key={set.id} className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center">
                <span className="text-sm text-white">{set.id}</span>
                {sets.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSet(set.id)}
                    className="ml-2 h-6 w-6 p-0 text-red-500 hover:text-red-400 hover:bg-transparent"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="h-9 flex rounded-lg border border-custom-gold overflow-hidden">
                <Input
                  type="number"
                  value={set.weight}
                  onChange={(e) => updateSet(set.id, "weight", e.target.value)}
                  className="border-0 rounded-none bg-[#1C1C1C] text-white focus-visible:ring-0 text-center"
                  placeholder="-"
                />
              </div>
              <div className="h-9 flex rounded-lg border border-custom-gold overflow-hidden">
                <Input
                  type="number"
                  value={set.reps}
                  onChange={(e) => updateSet(set.id, "reps", e.target.value)}
                  className="border-0 rounded-none bg-[#1C1C1C] text-white focus-visible:ring-0 text-center"
                  placeholder="-"
                />
              </div>
              <div className="h-9 flex rounded-lg border border-custom-gold overflow-hidden">
                <Input
                  type="text"
                  value={set.rest}
                  onChange={(e) => updateSet(set.id, "rest", e.target.value)}
                  className="border-0 rounded-none bg-[#1C1C1C] text-white focus-visible:ring-0 text-center"
                  placeholder="00:00"
                />
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="eachSide"
                  checked={eachSide}
                  onCheckedChange={(checked) => setEachSide(checked as boolean)}
                  className="border-custom-gold"
                />
                <Label htmlFor="eachSide" className="text-sm text-white">
                  Each Side
                </Label>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-custom-gold text-white bg-transparent"
              >
                Tempo
              </Button>
            </div>
            <Button
              onClick={addSet}
              variant="outline"
              size="sm"
              className="border-custom-gold bg-transparent text-custom-gold"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Set
            </Button>
          </div>

          <div className="pt-4">
            <Input
              placeholder="Add note for this exercise"
              className="bg-[#1C1C1C] border-custom-gold text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
