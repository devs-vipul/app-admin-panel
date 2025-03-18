import React from "react";
interface pageHeaderProps {
  title: string;
}
const PageHeader = ({ title }: pageHeaderProps) => {
  return <div className="text-white px-8 py-5">{title}</div>;
};

export default PageHeader;
