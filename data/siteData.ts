import { i_HeroHomeText } from "@/components/Home/HeroHome";
import { i_NewsletterTemplate } from "@/components/global/FWEmailSignup";
import { i_FooterItem } from "@/components/global/Footer";
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

export const logoText = "Shivam Kumar";
export const searchPlaceholder = "Search this site..."
export const defaultHeroHomeText: i_HeroHomeText = {
  line1: "Hi, I am a",
  line2: "FullStack Developer"
}

export const defaultNewsLetterComponent:i_NewsletterTemplate = {
  heading: "Email Newsletter",
  subHeading: "Keep updated with tech!"
}

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
    slug: "post-title-2",
  },
  {
    title: "Post title 3",
    slug: "post-title-3",
  },
];

export const defaultFooterContent: i_FooterItem[] = [
  {
    heading: "About Us",
    links: [
      { title: "About Shivam", href: "/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Copyright", href: "/copyright" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    heading: "Navigation",
    links: [
      { title: "Home", href: "/about" },
      { title: "About", href: "/contact" },
      { title: "Sitemap", href: "/copyright" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];
