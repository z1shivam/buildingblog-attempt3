import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";

const cv = Caveat({
  subsets: ["latin"],
});

export default function FullWidthEmailSignup() {
  return (
    <section className="w-full bg-orange-600 py-5 text-white">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row">
        <div>
          <h1 className="px-3 text-5xl font-bold sm:px-6">Email Newsletters</h1>
          <h2 className={cn(cv.className, "px-4 text-2xl sm:px-8")}>
            Keep Updated With Tech
          </h2>
        </div>
        <div>
         
        </div>
      </div>
    </section>
  );
}
