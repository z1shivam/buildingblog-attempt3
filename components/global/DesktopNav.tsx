import { defaultMenuItems } from "@/data/siteData";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";

export default function DesktopNav() {
  return (
    <nav className="flex h-full items-center">
      <ul className="flex gap-x-2 h-full items-center">
        {defaultMenuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link href={item.href} key={item.href}>
              <li className="px-4 py-2.5 hover:bg-gray-700 dark:hover:bg-gray-950 rounded-md flex items-center gap-2">
                <Icon className="size-5"/>
                {item.title}</li>
            </Link>
          );
        })}
      </ul>
      <DarkModeToggle/>
    </nav>
  );
}
