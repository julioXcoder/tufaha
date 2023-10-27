"use client";

import { IconTab } from "@/components";
import { Tab } from "@/types";
import Assignments from "./assignments";
import Resources from "./resources";
import Results from "./results";
import { FaTasks } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const tabs: Tab[] = [
  { title: "assignments", Component: Assignments, Icon: FaTasks },
  { title: "resources", Component: Resources, Icon: BsBoxes },
  { title: "results", Component: Results, Icon: BiSolidBarChartAlt2 },
];

const ClassroomPage = () => {
  return (
    <div>
      <IconTab tabs={tabs} />
    </div>
  );
};

export default ClassroomPage;
