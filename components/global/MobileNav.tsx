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
  onChildClick?: any
}

const MobileNav = ({
  menuItems = defaultMenuItems,
  featuredPosts = defaultFeaturedPosts,
  onChildClick
}: MobileNavProps) => {
  return (
    <nav className="space-y-4 bg-gray-900 py-4 text-white dark:bg-gray-900 border-b-2 border-gray-700">
      <ul className="grid grid-cols-2 gap-2 px-3 sm:grid-cols-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link href={item.href} key={item.href}>
              <li
                key={item.href}
                className="flex items-center justify-center gap-2.5 rounded-md bg-gray-800 py-4 hover:text-orange-400"
                onClick={onChildClick}
              >
                <Icon className="size-5" />
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
      {featuredPosts && featuredPosts.length > 0 && (
        <div className="space-y-3 rounded-md px-3">
          <h3 className="w-fit rounded-full py-1 text-sm font-medium text-gray-400">
            Featured Posts
          </h3>
          <ul className="flex flex-col gap-1.5">
            {featuredPosts.map((post) => (
              <Link href={post.slug} key={post.slug}>
                <li className="flex items-center gap-x-2 rounded-md p-1.5 font-medium text-orange-400 transition-colors hover:bg-gray-800 hover:underline"
                onClick={onChildClick}>
                  <CgNotes className="text-lg text-gray-400" />
                  {post.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-col items-center justify-center" onClick={onChildClick}>
        <h3 className="text-center text-sm text-gray-400">connect with me</h3>
        <SocialIconGroup />
      </div>
    </nav>
  );
};

export default MobileNav;
