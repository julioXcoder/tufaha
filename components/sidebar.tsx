"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsGridFill } from "react-icons/bs";

import { Path } from "@/types";

const links: Path[] = [
  {
    title: "dashboard",
    path: "/",
    Icon: BsGridFill,
  },
  {
    title: "gazette",
    path: "/student/application/results",
    Icon: IoNewspaperOutline,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0">
      <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {links.map(({ title, path, Icon }, index) => (
            <li key={index}>
              <a
                href={path}
                className={`group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                  pathname.startsWith(path)
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }`}
              >
                <Icon
                  size={26}
                  className={`flex-shrink-0 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white ${
                    pathname.startsWith(path)
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                />
                <span className="ml-3 capitalize">{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
