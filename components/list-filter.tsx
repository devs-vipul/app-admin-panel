"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import * as React from "react";

const filterOptions = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "inactive", label: "Inactive" },
  { id: "archived", label: "Archived" },
];

export function ListFilter() {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);

  const handleFilterChange = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const renderFilterLabels = () => {
    if (selectedFilters.length === 0) {
      return "Filters";
    } else if (selectedFilters.length <= 2) {
      return (
        <>
          Filters:{" "}
          {selectedFilters.map((id) => {
            const label = filterOptions.find(
              (option) => option.id === id
            )?.label;
            return (
              <div
                key={id}
                className="bg-white text-black text-sm rounded-lg px-2 inline-block ml-1"
              >
                {label}
              </div>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          Filters{" "}
          <Badge className="rounded-full" variant="secondary">
            {selectedFilters.length}
          </Badge>
        </>
      );
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "justify-start !bg-zinc-900 !text-white",
            selectedFilters.length > 0 && "border-zinc-700 bg-zinc-800"
          )}
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          {renderFilterLabels()}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0 bg-black">
        <div className="space-y-2 p-2">
          {filterOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-2 rounded-md px-2 py-1 hover:bg-zinc-800"
            >
              <Checkbox
                id={option.id}
                checked={selectedFilters.includes(option.id)}
                onCheckedChange={() => handleFilterChange(option.id)}
                className="bg-white"
              />
              <label
                htmlFor={option.id}
                className="w-full cursor-pointer text-sm font-medium text-white"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
