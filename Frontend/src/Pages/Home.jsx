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
  const skincare_products = products.filter((element) => {
    if (element.category == "skincare") return 1;
  });
  const smartphones = products.filter((element) => {
    if (element.category == "smartphones") {
      return 1;
    }
  });
  const laptop = products.filter((element) => {
    if (element.category == "laptops") {
      return 1;
    }
  });
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <CategoryBanner />
        <PromotionBanner />
        <Slide products={products} title="Deal of the Day" timer={true} />
        <Slide
          products={smartphones}
          title="Smartphones, your way!"
          timer={false}
        />
        <Slide
          products={skincare_products}
          title="Skincare Products"
          timer={false}
        />
        <Slide products={laptop} title="Boost your work" timer={false} />
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
    </>
  );
}
