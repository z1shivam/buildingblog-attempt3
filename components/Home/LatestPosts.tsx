import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { latestPostsArray } from "@/data/blogData";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface i_PostCard {
  title: string;
  publishedDate: string;
  featuredImage: string;
  slug: string;
}

interface i_LatestPosts {
  posts?: i_PostCard[];
}

export default function LatestPosts({
  posts = latestPostsArray,
}: i_LatestPosts) {
  let numOfEl = 0;


  return (
    <section className="mx-auto max-w-7xl px-3 py-4 sm:px-7">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-orange-500 dark:text-orange-400">
          Latest Posts
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
      <ul className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => {
          numOfEl++;
          const classNameToLimit = `hidden sm:block`;

          return (
            <li
              key={post.slug}
              className={cn(
                "cursor-pointer rounded-md border-2 border-transparent p-1 hover:border-orange-300 hover:bg-orange-50 dark:hover:border-gray-700 dark:hover:bg-gray-900 sm:p-3",
                numOfEl > 4 ? classNameToLimit : ""
              )}
            >
              <Image
                src={post.featuredImage}
                width={1280}
                height={720}
                alt={`Featured Image for ${post.title}`}
                className="aspect-video rounded-md"
              />
              <div>
                <h3>{post.title}</h3>
                <p>{post.publishedDate}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
