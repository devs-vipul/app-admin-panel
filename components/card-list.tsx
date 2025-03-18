import { CustomCard } from "./custom-card";

interface Exercise {
  title: string;
  image: string;
}

export function CardList({ listData }: { listData: Exercise[] }) {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {listData.map((exercise, index) => (
        <CustomCard key={index} {...exercise} />
      ))}
    </div>
  );
}
