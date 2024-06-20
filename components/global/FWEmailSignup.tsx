import { cn } from "@/lib/utils";
import { Caveat } from "next/font/google";
import { EmailForm } from "./EmailForm";
import { defaultNewsLetterComponent } from "@/data/siteData";

const cv = Caveat({
  subsets: ["latin"],
});

export interface i_NewsletterTemplate {
  heading: string;
  subHeading: string;
}

export default function FullWidthEmailSignup({
  heading = defaultNewsLetterComponent.heading,
  subHeading = defaultNewsLetterComponent.subHeading,
}: i_NewsletterTemplate) {
  return (
    <section className="w-full bg-orange-600 py-5 text-white">
      <div className="mx-auto flex max-w-7xl flex-col">
        <div>
          <h1 className="px-3 text-5xl font-bold sm:px-6">{heading}</h1>
          <h2 className={cn(cv.className, "px-4 text-2xl sm:px-8")}>
            {subHeading}
          </h2>
        </div>
        <div className="px-4 py-3 sm:px-6">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}
