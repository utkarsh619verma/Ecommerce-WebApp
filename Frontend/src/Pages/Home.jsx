import { getProducts } from "../Redux/actions/productAction";
import { Navbar } from "../Components/Navbar";
import { Slide } from "../Components/Slide";
import { CategoryBanner } from "../Components/CategoryBanner";
import { PromotionBanner } from "../Components/PromoitionBanner";
import { Midsection } from "../Components/Midsection";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

export function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Navbar />
      <CategoryBanner />
      <PromotionBanner />
      <Slide products={products} title="Deal of the Day" timer={true} />
      <Slide products={products} title="Discounts for you!" timer={false} />
      <Slide products={products} title="Suggested Items" timer={false} />
      <Slide products={products} title="Top Selection" timer={false} />
      <Midsection />
      <Slide products={products} title="Recommended Items" timer={false} />
      <Slide products={products} title="Trending Offers" timer={false} />
      <Slide products={products} title="Season's top picks" timer={false} />
      <Slide
        products={products}
        title="Top Deals on Accessories"
        timer={false}
      />{" "}
    </div>
  );
}
