import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../Data";

const Responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function PromotionBanner() {
  return (
    <>
      <Carousel
        className="bg-[#F2F2F2]  py-3 "
        autoPlay={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
        responsive={Responsive}
      >
        {bannerData.map((element) => (
          <img key={element.id} src={element.url} alt="" />
        ))}
      </Carousel>
    </>
  );
}
