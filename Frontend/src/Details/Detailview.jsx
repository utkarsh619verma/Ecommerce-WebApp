import { Navbar } from "../Components/Navbar";
import { AddtoCart } from "../Redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../Redux/actions/productAction";
import { useSelector } from "react-redux";

export function Detailview() {
  const dispatch = useDispatch();
  const [warranty_status, setWarrantyStatus] = useState(false);
  const [quantity, setquantity] = useState(0);
  const [read_status, setReadStatus] = useState(true);

  const { id } = useParams();

  // review and rating and set warranty
  let random_review = useMemo(() => {
    return Math.floor(Math.random() * 100) + 1;
  }, []);
  let random_rating = useMemo(() => {
    return (Math.random() * 5).toFixed(1);
  }, []);

  // delivery date and day

  const getdeliverydate = () => {
    const today_date = new Date();
    const end_date = new Date(today_date);
    end_date.setDate(today_date.getDate() + 20);
    const random_time =
      today_date.getTime() +
      Math.random() * (end_date.getTime() - today_date.getTime());
    const random_date = new Date(random_time);
    return random_date;
  };

  const getdeliveryday = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const day = date.toLocaleDateString("en-US", options);
    return day;
  };

  let random_delivery_date = useMemo(() => {
    return getdeliverydate();
  }, []);
  let random_delivery_day = useMemo(() => {
    return getdeliveryday(random_delivery_date);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { loader, product } = useSelector(
    (state) => state.getProductDetails || {}
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
    if (random_rating > 3) setWarrantyStatus(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //adding to cart
  useEffect(() => {
    console.log(quantity);
  }, [quantity]);
  function movetocart() {
    dispatch(AddtoCart(product.data._id, quantity));
  }

  return (
    <>
      <Navbar />
      {product && product.data && (
        <div className="py-4  lg:px-[70px] bg-white  grid lg:grid-cols-2  xl:grid-rows-1 grid-rows max-h-[1100px] px-[30px] gap-x-3 ">
          <div className="grid grid-cols-1 h-[100%] ">
            <img
              src={product.data.detailurl}
              alt={product.data.title.shortTitle}
              className="object-contain h-[100%] w-[90%] mx-auto shadow-[5px 10px 5px #e7dede] "
            />

            <div className="flex m-4 flex-column justify-between  ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setquantity(quantity + 1);
                  movetocart();
                }}
                className="h-[58px] w-[49%] bg-yellow-500 text-white font-bold  "
              >
                ADD TO CART
              </button>
              <button className="h-[58px] w-[49%] bg-orange-600 text-white font-bold  ">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl">{product.data.title.longTitle}</h1>
              <div className="flex mt-2 ">
                <p>
                  {random_rating} ratings and {random_review} reviews
                </p>
                <img
                  className="ml-2"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                  width={"90px"}
                  height={"50px"}
                />
              </div>
              <div className="mt-2">
                <span className="text-3xl mr-3 ">
                  {product.data.price.cost}
                </span>
                <span className="text-gray-600 text-l line-through mr-2 ">
                  {product.data.price.mrp}
                </span>
                <span className="text-green-400">
                  {" "}
                  {product.data.price.discount}
                </span>
              </div>
              <div className="mt-3">
                <h1 className="text-lg mb-1 ">Available Offers </h1>
                <p>
                  <span className="font-bold my-4 ">-</span>Get extra 20%off up
                  Rs50 on one item(s) T&C{" "}
                </p>
                <p>
                  <span className="font-bold my-4 ">-</span>Get extra 13% off
                  (price inclusive of discount) T&C
                </p>
                <p>
                  <span className="font-bold my-4 ">-</span>Sign up for Flipkart
                  Pay Later and get Flipkart Gift Card worth Rs100 Know More
                </p>
                <p>
                  <span className="font-bold my-4 ">-</span>Buy 2 items save
                  5%;Buy 3 or more save 10% T&C
                </p>
                <p>
                  <span className="font-bold my-4 ">-</span>5% Cashback on
                  Flipkart Axis Band Card
                </p>
                <p>
                  <span className="font-bold">-</span>No Cost EMI on Bajaj
                  Finserv EMI Card on cart value above Rs2999 T&C
                </p>
              </div>
              <div className="mt-4">
                <div className="flex">
                  <p className="mr-[50px] text-gray-400 w-[63px]">Delivery</p>
                  <p className="font-bold">
                    Delivery by {random_delivery_day} || $40
                  </p>
                </div>
                <div className="flex mt-4 ">
                  <p className="mr-[50px] text-gray-400 w-[63px]">Warranty</p>
                  {warranty_status == true ? (
                    <p>2-year warranty</p>
                  ) : (
                    <p>No warranty</p>
                  )}
                </div>
                <div className="flex mt-4 ">
                  <p className="mr-[50px] text-gray-400 w-[63px]">Seller</p>
                  <div>
                    <p>SuperComNet</p>
                    <p>GST invoice available</p>
                    <p>View more sellers starting from {product.data.cost}</p>
                  </div>
                </div>
                <img
                  src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
                  height={"130px"}
                  width={"100%"}
                  alt=""
                />
                <div className="flex mt-4 ">
                  <p className="mr-[50px] text-gray-400 w-[63px] ">
                    Description
                  </p>
                  <p>
                    {product.data.description.substring(0, 150) +
                      (read_status
                        ? ""
                        : product.data.description.substring(150))}
                    <span
                      className="font-bold cursor-pointer "
                      onClick={() => {
                        setReadStatus(!read_status);
                      }}
                    >
                      {read_status ? "...Read More" : " Read Less"}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
