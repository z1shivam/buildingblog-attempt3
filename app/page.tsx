import HeroHome from "@/components/Home/HeroHome";
import LatestPosts from "@/components/Home/LatestPosts";
import ExploreCategories from "@/components/global/ExploreCategories";
import FullWidthEmailSignup from "@/components/global/FWEmailSignup";

export default function Home() {
  return (
    <main className="">
      <HeroHome />
      <LatestPosts />
      <FullWidthEmailSignup />
      <ExploreCategories />
    </main>
  );
}