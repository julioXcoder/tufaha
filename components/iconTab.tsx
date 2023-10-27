"use client";

import { Tab as TabType } from "@/types";
import { Tab, Tabs } from "@nextui-org/react";

interface Props {
  tabs: TabType[];
}

const IconTab = ({ tabs }: Props) => {
  return (
    <Tabs
      color="primary"
      variant="underlined"
      classNames={{
        tabList:
          "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#22d3ee]",
        tab: "max-w-fit px-0 h-12",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]",
      }}
    >
      {tabs.map(({ title, Component, Icon }, index) => (
        <Tab
          key={index}
          title={
            <div className="flex items-center space-x-2">
              {Icon && <Icon size={20} />}
              <span className="capitalize">{title}</span>
            </div>
          }
        >
          <Component />
        </Tab>
      ))}
    </Tabs>
  );
};

export default IconTab;
