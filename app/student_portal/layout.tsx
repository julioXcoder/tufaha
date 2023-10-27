"use client";

import { Navbar, Sidebar } from "@/components";
import { Path } from "@/types";
import { ReactNode } from "react";
import { BsGridFill } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";

const links: Path[] = [
  {
    title: "dashboard",
    path: "/student_portal/dashboard",
    Icon: BsGridFill,
  },
  {
    title: "classroom",
    path: "/student_portal/classroom",
    Icon: SiGoogleclassroom,
  },
  {
    title: "gazette",
    path: "/student_portal/gazette",
    Icon: IoNewspaperOutline,
  },
];

const StudentPortalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Sidebar links={links} />
      <main className="p-4 sm:ml-64">
        <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          {children}
        </div>
      </main>
    </>
  );
};

export default StudentPortalLayout;
