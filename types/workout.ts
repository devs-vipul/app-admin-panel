export interface Exercise {
  id: string;
  title: string;
  image: string;
  type: string;
  sets: {
    set: number;
    weight: string;
    reps: string;
    rest: string;
  }[];
  notes?: string;
  eachSide: boolean;
  tempo?: string;
  usePercentage?: number;
}

export interface WorkoutSection {
  id: string;
  name: string;
  type: "Regular" | "Interval" | "AMRAP" | "Timed" | "Freestyle";
  exercises: Exercise[];
}

export interface WorkoutFormValues {
  name: string;
  description: string;
  image?: File;
  sections: WorkoutSection[];
}
