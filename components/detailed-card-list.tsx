import { CustomDetailedCard } from "./custom-detailed-card";

interface Recipe {
  title: string;
  description: string;
  cookTime: string;
  prepTime: string;
  servings: string;
  image: string;
}

interface DetailedCardListProps {
  data: Recipe[];
}

export function DetailedCardList({ data }: DetailedCardListProps) {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((recipe, index) => (
        <CustomDetailedCard key={index} {...recipe} />
      ))}
    </div>
  );
}
