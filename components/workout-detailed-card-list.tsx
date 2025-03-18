import { WorkoutCustomDetailedCard } from "./workout-custom-detailed-card";

interface Workout {
  title: string;
  description: string;
  goal: string;
  level: string;
  duration: string;
  image: string;
}

interface WorkoutDetailedCardListProps {
  data: Workout[];
}

export function WorkoutDetailedCardList({
  data,
}: WorkoutDetailedCardListProps) {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((workout, index) => (
        <WorkoutCustomDetailedCard key={index} {...workout} />
      ))}
    </div>
  );
}
