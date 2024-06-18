import { FeaturedPost, MenuItem } from "@/components/global/MobileNav";
import { i_SocialIcon } from "@/components/global/SocialIconGroup";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaBookOpen,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdExplore, MdTipsAndUpdates } from "react-icons/md";

export const logoText = "Shivam Kumar"

export const defaultMenuItems: MenuItem[] = [
  {
    title: "Blogs",
    href: "/blogs",
    icon: FaBookOpen,
  },
  {
    title: "My Tips",
    href: "/tips",
    icon: MdTipsAndUpdates,
  },
  {
    title: "About Me",
    href: "/about",
    icon: MdExplore,
  },
  {
    title: "Videos",
    href: "/videos",
    icon: FaYoutube,
  },
];

export const defaultSocialIcons: i_SocialIcon[] = [
  {
    title: "Instagram",
    icon: FaInstagram,
    href: "instagram.com",
  },
  {
    title: "Twitter",
    icon: FaTwitter,
    href: "twitter.com",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    href: "linkedin.com",
  },
  {
    title: "Gmail",
    icon: BiLogoGmail,
    href: "gmail.com",
  },
];

export const defaultFeaturedPosts: FeaturedPost[] = [
  {
    title: "post title 1",
    slug: "post-title-1",
  },
  {
    title: "Post title 2",
    slug: "post-title-2"
  },
  {
    title: "Post title 3",
    slug: "post-title-3"
  }
];
