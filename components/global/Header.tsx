"use client";
import { useState } from "react";
import MainLogo from "./MainLogo";
import { IoClose, IoMenu } from "react-icons/io5";
import { DarkModeToggle } from "./DarkModeToggle";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="fixed top-0 h-14 z-50 w-full bg-gray-900 dark:bg-gray-900 text-white">
        <div className="flex justify-between  items-center h-full max-w-7xl mx-auto ">
          <MainLogo className="rounded-md hover:bg-gray-700 px-3" />
          <div className="flex h-full justify-center items-center gap-2 md:hidden px-3">
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
        className={`fixed top-14 z-40 w-full md:hidden transition-transform duration-300 ${
          isDropdownOpen
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <MobileNav />
      </div>
    </>
  );
}
