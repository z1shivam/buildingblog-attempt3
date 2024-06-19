import heroImage from "@/public/hero-home-image.jpg";
import Image from "next/image";
import { SearchBox } from "../global/SearchBox";
import { defaultHeroHomeText } from "@/data/siteData";

export interface i_HeroHomeText {
  line1: string;
  line2: string;
}

const HeroHome = () => {
  return (
    <>
      <section className="sm:hidden">
        <div className="relative z-0 h-96 w-full">
          <Image
            src={heroImage}
            alt="Hero Home Image"
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute bottom-0 z-0 h-full w-full bg-gradient-to-tr from-gray-900 to-black/0">
            <div className="absolute bottom-16 w-full px-3 pt-5 text-white">
              <h1 className="px-1 text-orange-400">
                {defaultHeroHomeText.line1}
              </h1>
              <h2 className="bg-gradient-to-tr from-violet-200 to-pink-200 bg-clip-text pb-4 text-5xl font-bold text-transparent">
                {defaultHeroHomeText.line2}
              </h2>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 w-full px-3 py-4">
            <SearchBox />
          </div>
        </div>
      </section>
      <section className="hidden sm:block">
        <div className="relative z-0 h-[450px] w-full">
          <Image
            src={heroImage}
            alt="Hero Home Image"
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute bottom-0 h-full w-full bg-gradient-to-tr from-gray-950 to-gray-400/0"></div>
          <div className="mx-auto max-w-7xl px-8">
            <div className="absolute top-1/2 flex flex-col gap-6">
              <div>
                <h2 className="px-1 text-2xl text-orange-400">
                  {defaultHeroHomeText.line1}
                </h2>
                <h1 className="bg-gradient-to-tr from-violet-200 to-pink-200 bg-clip-text text-6xl font-bold text-transparent pb-4">
                  {defaultHeroHomeText.line2}
                </h1>
              </div>
              <div className="w-full">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHome;
