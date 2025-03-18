"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WorkoutSection } from "@/types/workout";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface AddSectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (section: WorkoutSection) => void;
}

const sectionTypes = [
  {
    id: "regular",
    name: "Regular",
    description: "Exercise by exercise, mostly used for strength workouts",
    icon: "https://d327mhnbii227g.cloudfront.net/static/media/section_format_regular.0c7e8adc.svg",
  },
  {
    id: "interval",
    name: "Interval",
    description:
      "Runs built-in timer for exercise and rest (HIIT, Tabata, Circuit)",
    icon: "https://d327mhnbii227g.cloudfront.net/static/media/section_format_regular.0c7e8adc.svg",
  },
  {
    id: "amrap",
    name: "AMRAP",
    description: "Track total rounds completed based on time assigned",
    icon: "https://d327mhnbii227g.cloudfront.net/static/media/section_format_regular.0c7e8adc.svg",
  },
  {
    id: "timed",
    name: "Timed",
    description: "Track total duration based on rounds assigned",
    icon: "https://d327mhnbii227g.cloudfront.net/static/media/section_format_regular.0c7e8adc.svg",
  },
  {
    id: "freestyle",
    name: "Freestyle",
    description: "Best for warmups, Crossfit, or any follow-along videos",
    icon: "https://d327mhnbii227g.cloudfront.net/static/media/section_format_regular.0c7e8adc.svg",
  },
];

export function AddSectionDialog({
  open,
  onOpenChange,
  onAdd,
}: AddSectionDialogProps) {
  const [step, setStep] = React.useState(1);
  const [sectionName, setSectionName] = React.useState("");
  const [sectionType, setSectionType] = React.useState<string>("");

  const handleAdd = () => {
    onAdd({
      id: crypto.randomUUID(),
      name: sectionName,
      type: sectionType as WorkoutSection["type"],
      exercises: [],
    });
    onOpenChange(false);
    setStep(1);
    setSectionName("");
    setSectionType("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] bg-[#1C1C1C] border-[#F2D679]">
        <DialogHeader>
          <DialogTitle className="text-white">
            {step === 1
              ? "Choose your section format"
              : "Create Regular Section"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 ? (
          <div className="grid grid-cols-2 gap-4">
            {sectionTypes.map((type) => (
              <Card
                key={type.id}
                className={`cursor-pointer bg-[#2C2C2C] border-[#F2D679] ${
                  sectionType === type.id ? "ring-2 ring-[#F2D679]" : ""
                }`}
                onClick={() => {
                  setSectionType(type.id);
                  setStep(2);
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Image
                      src={type.icon}
                      alt={type.name}
                      width={72}
                      height={72}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-medium text-white">{type.name}</h3>
                      <p className="text-sm text-gray-400">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-white">
                Section Name
              </label>
              <Input
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
                placeholder="Please add a section name"
                className="bg-[#1C1C1C] border-[#F2D679] text-white mt-2"
              />
            </div>
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="text-custom-gold bg-transparent"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAdd}
                disabled={!sectionName}
                className="bg-custom-gold text-black hover:bg-custom-gold"
              >
                Create Section
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
