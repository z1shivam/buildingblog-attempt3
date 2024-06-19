import { Button } from "@/components/ui/button";
import { PiSealWarning } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center text-red-500 dark:text-red-300 space-y-4">
      <PiSealWarning className="size-12" />
      <p className="text-center text-lg font-semibold px-12">
        The page you are looking for is not available!
      </p>
      <p className="text-sm font-bold font-mono bg-red-100 dark:bg-red-900 border border-red-400 px-2 py-0.5 rounded-md">
        Error Code - 404
      </p>
  
        <Button variant={"destructive"} asChild>
        <Link href={"/"}>
          <FaArrowLeft className="size-3 mr-2" />
          Home
      </Link>
        </Button>
    </main>
  );
}
