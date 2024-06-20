"use client";
import { useState } from "react";
import MainLogo from "./MainLogo";
import { IoClose, IoMenu } from "react-icons/io5";
import { DarkModeToggle } from "./DarkModeToggle";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 h-14 w-full border-gray-700 bg-gray-900 text-white dark:bg-gray-900",
          isDropdownOpen ? "border-none" : "border-b-2",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
          <MainLogo className="rounded-md px-3 hover:bg-gray-700 sm:px-5 md:px-3" />
          <div className="flex h-full items-center justify-center gap-2 px-3 sm:px-5 md:hidden">
            <DarkModeToggle />
            <div className="" onClick={toggleDropdown}>
              {!isDropdownOpen ? (
                <IoMenu className="h-8 w-8" />
              ) : (
                <IoClose className="h-8 w-8" />
              )}
            </div>
          </div>
          <div className="hidden md:block">
            <DesktopNav />
          </div>
        </div>
      </header>
      <div
        className={`fixed top-14 z-40 w-full transition-transform duration-300 md:hidden ${
          isDropdownOpen
            ? "translate-y-0 transform"
            : "-translate-y-full transform"
        }`}
      >
        <MobileNav onChildClick={toggleDropdown}/>
      </div>
    </>
  );
}
