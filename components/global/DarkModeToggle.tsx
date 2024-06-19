"use client";

import * as React from "react";
import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const { setTheme } = useTheme();
  return (
    <>
      <Button
        onClick={() => setTheme("dark")}
        variant="outline"
        size="icon"
        className="h-12 w-12 border-none bg-inherit pr-1 shadow-none hover:bg-gray-700 hover:text-white dark:hidden"
      >
        <IoSunny className="absolute h-6 w-6" />
      </Button>
      <Button
        onClick={() => setTheme("light")}
        variant="outline"
        size="icon"
        className="hidden h-12 w-12 items-center justify-center hover:text-white dark:flex dark:border-none dark:bg-inherit dark:shadow-none dark:hover:bg-gray-950"
      >
        <MdNightsStay className="absolute h-6 w-6" />
      </Button>
    </>
  );
}
