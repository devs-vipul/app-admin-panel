"use client";

import * as Icons from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CellImageProps {
  image: {
    type: "icon" | "image";
    name?: string;
    src?: string;
  };
  className?: string;
  alt?: string;
}

export function CellImage({ image, className, alt = "Image" }: CellImageProps) {
  if (image.type === "icon" && image.name) {
    const Icon = Icons[image.name as keyof typeof Icons] as React.ElementType;
    if (!Icon) return null;
    return <Icon className={cn("text-foreground", className)} />;
  }

  if (image.type === "image" && image.src) {
    return (
      <div className={cn("relative", className)}>
        <Image src={image.src} alt={alt} fill className="object-contain" />
      </div>
    );
  }

  return null;
}
