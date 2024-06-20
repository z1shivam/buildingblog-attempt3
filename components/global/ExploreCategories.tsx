import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { defaultExploreMoreContent } from "@/data/siteData";

export interface i_CategoryItem {
  heading?: string,
  image?: string,
  subHeading?: string
}

interface i_exploreCategories{
  categoryItem?: i_CategoryItem[]
}

export default function ExploreCategories({categoryItem = defaultExploreMoreContent}:i_exploreCategories) {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
          Explore More
        </h2>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="text-orange-600 dark:text-orange-400 sm:hidden"
        >
          <ArrowRight />
        </Button>
        <Button
          variant={"default"}
          size={"sm"}
          className="hidden h-full items-center bg-transparent py-1.5 text-orange-600 dark:text-orange-400 sm:flex hover:bg-orange-100"
        >
          view more
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <Separator className="h-0.5 bg-orange-400" />
        <div></div>
      </div>
    </section>
  );
}
