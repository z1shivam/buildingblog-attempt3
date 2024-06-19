import { defaultFooterContent } from "@/data/siteData";
import { Separator } from "../ui/separator";
import MainLogo from "./MainLogo";
import SocialIconGroup from "./SocialIconGroup";

interface FooterLink {
  title: string;
  href: string;
}

export interface i_FooterItem {
  heading: string;
  links: FooterLink[];
}

const TopColumn = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between w-full ">
      <MainLogo />
      <p className="text-sm text-gray-400 sm:hidden pt-4">Lets Connect!</p>
      <SocialIconGroup />
    </div>
  );
};

export default function Footer() {
  return (
    <footer className=" w-full bg-gray-900 text-white py-3 border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <TopColumn />
        <Separator className="bg-gray-700 dark:bg-gray-700" />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {defaultFooterContent.map((obj) => {
            const { heading, links } = obj;
            return (
              <div className="py-5" key={heading}>
                <h3 className="text-lg font-semibold text-orange-400 ">
                  {heading}
                </h3>

                {links.map((link) => {
                  return (
                    <div className="py-1.5" key={link.href}>
                      <a
                        href={link.href}
                        key={link.href}
                        className=" hover:underline hover:text-orange-400 text-gray-400"
                      >
                        {link.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col justify-center items-center py-8 text-sm text-orange-400">
          Designed and Developed by Shivam.
          <p className="text-gray-400 pt-5">Copyright @ 2024</p>
        </div>
     
      </div>
    </footer>
  );
}
