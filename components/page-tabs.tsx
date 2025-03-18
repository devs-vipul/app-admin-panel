import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface TabsProps {
  label: string;
  value: string;
}

interface PageTabsProps {
  tabs: TabsProps[];
  children: React.ReactNode;
  defaultTab?: string;
}

const PageTabs = ({
  tabs,
  children,
  defaultTab = "exercise_list",
}: PageTabsProps) => {
  return (
    <div className="w-full">
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="flex items-center bg-black justify-start">
          {tabs.map((item: TabsProps, index: number) => {
            return (
              <TabsTrigger
                key={index}
                className="text-white border-b border-b-white data-[state=active]:bg-black data-[state=active]:text-[#F2D679] data-[state=active]:border-b rounded-none data-[state=active]:border-b-[#F2D679] bg-black"
                value={item.value}
              >
                {item.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
};

export default PageTabs;
