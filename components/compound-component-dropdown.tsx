import Image from "next/image";

interface ComponentDropdownProps {
  title: string;
  image: string;
  isSelected: boolean;
  isAdded: boolean;
}

const ComponentDropdown = ({
  title,
  image,
  isSelected,
  isAdded,
}: ComponentDropdownProps) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg p-3 ${
        isAdded
          ? "bg-white text-black"
          : isSelected
          ? "bg-[#F2D679] text-black"
          : "bg-zinc-900 text-white"
      }`}
    >
      <Image
        src={image}
        alt={title}
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="flex-1 text-sm">{title}</span>
    </div>
  );
};

export default ComponentDropdown;
