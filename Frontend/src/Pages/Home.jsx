import { CategoryBanner } from "../Components/CategoryBanner";
import { PromotionBanner } from "../Components/PromoitionBanner";



export function Home() {
  return (
    <div>
      <CategoryBanner />
      <PromotionBanner />
    </div>
  );
}
