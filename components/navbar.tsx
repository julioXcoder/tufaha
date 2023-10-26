"use client";

import logo from "@/public/logo.png";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSortDown, FaUser } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Dropdown>
              <DropdownTrigger>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
                >
                  <BiMenuAltLeft size={26} />
                </button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="new">New file</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <a href="/" className="ml-2 flex md:mr-24">
              <Image
                src={logo}
                width={50}
                height={30}
                className="mr-3"
                alt="SIMS Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
                SIMS
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="ml-3 flex items-center">
              <div className="flex items-center gap-x-1">
                {/* <ThemeSwitcher /> */}
                <Dropdown>
                  <DropdownTrigger>
                    <span className="flex cursor-pointer items-center gap-x-1">
                      {/* <Avatar src="/gon.png" size="md" /> */}
                      <User
                        name="Gon Freecss"
                        description={
                          <span className="flex items-center gap-x-1">
                            <MdSchool color="silver" />
                            Computer Science
                          </span>
                        }
                        avatarProps={{
                          src: "/gon.png",
                        }}
                      />
                      <FaSortDown />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                  >
                    <DropdownItem
                      startContent={
                        <FaUser className="pointer-events-none flex-shrink-0 text-xl text-default-500" />
                      }
                    >
                      Profile
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              {/* <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    Neil Sims
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
