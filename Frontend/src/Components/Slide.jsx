import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const Responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Renderer = ({ hours, minutes, seconds }) => {
  return (
    <p className="md:text-[18px]  text-[15px] ">
      {hours}::{minutes}::{seconds} left
    </p>
  );
};
export function Slide({ products, title, timer }) {
  const [countdownstate, setcountdown] = useState(false);
  return (
    <div className="bg-[#F2F2F2] my-3">
      <div className="flex mb-[3px] bg-white p-6 justify-between">
        <div className="flex items-center">
          <p className="font-bold  sm:text-2xl  text-lg sm:mr-5 mr-3   ">
            {title}
          </p>
          {countdownstate ? (
            <p>Sale Begins!</p>
          ) : (
            timer && (
              <Countdown
                date={Date.now() + 5.04e7}
                onComplete={() => {
                  setcountdown(true);
                }}
                renderer={Renderer}
              />
            )
          )}
        </div>
        <button className=" w-[85px] h-[45px] sm:w-[130px] sm:h-[50px] bg-blue-700 text-white sm:font-bold   ">
          View All
        </button>
      </div>
      <div>
        <Carousel
          className="bg-white"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          swipeable={false}
          draggable={false}
          autoPlaySpeed={4000}
          responsive={Responsive}
        >
          {products.map((item, index) => (
            <div key={index}>
              <Link
                className="flex flex-col py-2 px-6  h-[200px] w-full items-center justify-center"
                to={`/product/${item._id}`}
              >
                <img
                  src={item.images[0]}
                  className="max-h-[60%] max-w-[100%] "
                  alt={item.title}
                />
                <p className="font-bold text-[#212121]">{item.title}</p>
                <p className="text-green-400">
                  Upto {Math.round(item.discountPercentage)}% off
                </p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
