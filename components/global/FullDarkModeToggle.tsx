"use client";

import { MdNightsStay } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { TbDeviceDesktop } from "react-icons/tb";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function FullDarkModeToggle({
  size = "default",
  color = "auto",
}) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const getButtonSize = () => {
    switch (size) {
      case "sm":
        return "p-1 text-md";
      case "lg":
        return "p-3 text-lg";
      default:
        return "p-2 text-base";
    }
  };

  const getColor = (iconTheme: string) => {
    switch (color) {
      case "light":
        return "text-gray-900";
      case "dark":
        return "text-gray-100";
      default:
        return iconTheme === theme ? "text-blue-500" : "text-gray-500";
    }
  };

  return (
    <div
      className={cn(
        "flex items-center rounded-full border-2 border-gray-800",
        size === "sm"
          ? "gap-1 px-1.5 py-1"
          : size === "lg"
            ? "gap-2 px-4 py-2"
            : "gap-1.5 px-3 py-1.5",
      )}
    >
      <button
        className={`flex items-center justify-center rounded-full ${getButtonSize()} ${getColor("system")}`}
        onClick={() => handleThemeChange("system")}
      >
        <TbDeviceDesktop size={size === "sm" ? 20 : size === "lg" ? 32 : 24} />
      </button>

      <button
        className={`flex items-center justify-center rounded-full ${getButtonSize()} ${getColor("dark")}`}
        onClick={() => handleThemeChange("dark")}
      >
        <MdNightsStay size={size === "sm" ? 20 : size === "lg" ? 32 : 24} />
      </button>

      <button
        className={`flex items-center justify-center rounded-full ${getButtonSize()} ${getColor("light")}`}
        onClick={() => handleThemeChange("light")}
      >
        <IoSunny size={size === "sm" ? 20 : size === "lg" ? 32 : 24} />
      </button>
    </div>
  );
}
