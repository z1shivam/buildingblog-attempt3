import { logoText } from "@/data/siteData";
import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";
import Link from "next/link";

const logoFont = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});

interface MainLogoProps {
  className?: string;
}

export default function MainLogo({className}:MainLogoProps) {
  return <Link href={"/"} className={cn( logoFont.className, "text-3xl pt-1.5", className)}>{logoText}</Link>;
}
