import { IconType } from "react-icons";
import { defaultMenuItems, defaultFeaturedPosts } from "@/data/siteData";
import Link from "next/link";
import SocialIconGroup from "./SocialIconGroup";
import { CgNotes } from "react-icons/cg";

export interface MenuItem {
  title: string;
  href: string;
  icon: IconType;
}

export interface FeaturedPost {
  title: string;
  slug: string;
}

export interface MobileNavProps {
  menuItems?: MenuItem[];
  featuredPosts?: FeaturedPost[];
}

const MobileNav = ({
  menuItems = defaultMenuItems,
  featuredPosts =defaultFeaturedPosts
}: MobileNavProps) => {
  return (
    <nav className="bg-gray-900 dark:bg-gray-900 text-white py-4 space-y-4">
      <ul className="grid grid-cols-2 sm:grid-cols-4  gap-2 px-3 ">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.href}>
              <li
                key={item.href}
                className="py-4 bg-gray-800 rounded-md flex gap-2.5 items-center justify-center"
              >
                <Icon className="size-5" />
                {item.title}{" "}
              </li>
            </Link>
          );
        })}
      </ul>
      {featuredPosts && featuredPosts.length > 0 && (
        <div className="px-3  rounded-md space-y-3 ">
          <h3 className="text-sm text-gray-400 rounded-full w-fit  py-1   font-medium">
            Featured Posts
          </h3>
          <ul className="flex-col flex gap-1.5 ">
            {featuredPosts.map((post) => (
              <Link href={post.slug} key={post.slug}>
                <li className="flex items-center gap-x-2 text-orange-400 hover:bg-gray-800 transition-colors font-medium rounded-md p-1.5 ">
                  <CgNotes className="text-lg text-gray-400" />
                  {post.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <div className="">
        <h3 className="text-center text-sm text-gray-400 ">connect with me</h3>
        <SocialIconGroup />
      </div>
    </nav>
  );
};

export default MobileNav;
