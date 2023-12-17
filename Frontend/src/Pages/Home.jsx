import { getProducts } from "../Redux/actions/productAction";
import { Navbar } from "../Components/Navbar";
import { CategoryBanner } from "../Components/CategoryBanner";
import { PromotionBanner } from "../Components/PromoitionBanner";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

export function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  useEffect(() => {
    console.log("Dispatching");
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <CategoryBanner />
      <PromotionBanner />
    </>
  );
}
