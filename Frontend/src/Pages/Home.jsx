import { Navbar } from "../Components/Navbar";
import { CategoryBanner } from "../Components/CategoryBanner";
import { PromotionBanner } from "../Components/PromoitionBanner";

export function Home() {
  return (
    <>
      <Navbar />
      <CategoryBanner />
      <PromotionBanner />
    </>
  );
}
