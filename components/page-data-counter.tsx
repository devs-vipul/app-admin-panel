import React from "react";

interface PageDataCounterProps {
  title: string;
  count: number;
}

const PageDataCounter = ({ title, count }: PageDataCounterProps) => {
  return (
    <div className="text-sm text-custom-muted px-4">
      {title}&nbsp;({count})
    </div>
  );
};

export default PageDataCounter;
