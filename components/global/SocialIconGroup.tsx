import { defaultSocialIcons } from "@/data/siteData";
import { IconType } from "react-icons";

export interface i_SocialIcon {
  title: string;
  icon: IconType;
  href: string
}

export interface i_SocialIconGroup {
  icon?: i_SocialIcon[];
}

export default function SocialIconGroup({
  icon = defaultSocialIcons,
}: i_SocialIconGroup) {
  return (
    <div className="flex space-x-8 justify-center py-3">
      {icon.map((icon) => {
        const Icon = icon.icon;
        return (
          <a href={icon.href}>
            <Icon className="size-7" />
          </a>
        );
      })}
    </div>
  );
}
