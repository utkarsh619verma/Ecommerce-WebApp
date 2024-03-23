import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { TbShoppingCartX } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemovefromCart } from "../Redux/actions/cartAction";
import { AddtoCart } from "../Redux/actions/cartAction";
import { useMemo } from "react";
export function Cart() {
  const { cartitems } = useSelector((state) => state.cartReducer || []);
  const { total_quantity } = useSelector((state) => state.cartQuantity);
  const dispatch = useDispatch();

  //Add another instance of an item to the cart
  function addonemore(quantity, id) {
    dispatch(AddtoCart(id, quantity));
  }
  //remove all instances of an  item from the cart
  function removeitemcompletely(id, quantity) {
    dispatch(RemovefromCart(id, quantity));
  }

  //calculate total of all items
  const total_price = useMemo(() => {
    let sum = 0;
    cartitems.forEach((element) => {
      let item_cost = element.price * element.quantity;
      sum += item_cost;
    });
    return sum.toFixed(0);
  }, [cartitems]);

  //calculate total discount on all items
  const total_discount = useMemo(() => {
    let discount = 0;
    cartitems.forEach((element) => {
      let item_discount = parseInt(element.price) * 0.01;
      console.log(item_discount);
      let item_final_cost = element.quantity * (item_discount * element.price);
      discount += item_final_cost;
    });
    return discount.toFixed(0);
  }, [cartitems]);
  return (
    <>
      <Navbar />
      {cartitems.length > 0 ? (
        <div className="max-w-[1200px] py-5 mt-16 mx-auto flex  ">
          <div className="w-[68%] mr-[24px] ">
            <div className="h-12 w-full mb-5 p-3 bg-white text-black text-xl font-semibold ">
              <h1>MY CART ({total_quantity} items) </h1>
            </div>
            <div className="bg-white p-4 ">
              {cartitems.map((element) => (
                <div key={element._id} className="flex max-h-52 ">
                  <div className="p-4 max-w-[30%] w-[100%] ">
                    <img
                      src={element.images[0]}
                      className="w-[100%] h-[80%] object-contain "
                      alt={element.title}
                    />
                    <div className="mt-1 pl-[17px]">
                      <button className="h-8 w-12 border-[1px] border-gray-300 rounded-l-3xl  ">
                        -
                      </button>
                      <span className="h-8  px-5 py-[4px] border-[1px] border-gray-300 ">
                        {element.quantity}
                      </span>
                      <button
                        onClick={() => {
                          addonemore(element.quantity, element._id);
                          console.log(element.quantity);
                        }}
                        className="h-8 w-12 border-[1px] border-gray-300 rounded-r-3xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h1 className="text-xl mt-2 ">{element.title}</h1>
                    <div className="mt-2">
                      <span className="mx-2 font-bold ">₹{element.price}</span>
                      <span className="mx-2 line-through text-gray-500 text-sm ">
                        ₹{element.price}
                      </span>
                      <span className="mx-2 text-green-500 ">
                        {element.price.discountPercentage} off
                      </span>
                    </div>
                    <div className="mt-2">
                      <p>Delivery By 23 may 2024 || 40</p>
                    </div>
                    <div className="mt-10 font-bold">
                      <button className="text-gray-400 mx-2">
                        SAVE FOR LATER
                      </button>
                      <button
                        className="mx-2"
                        onClick={() => {
                          removeitemcompletely(element._id, element.quantity);
                        }}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white h-[70px] mt-[1px] p-[10px]">
              <button className="bg-orange-500 text-white h-[100%] w-[200px] float-right font-semibold">
                Place Order
              </button>
            </div>
          </div>
          <div className="w-[30%] bg-white pb-5 h-max ">
            <div className="h-[50px] ">
              <p className="relative pl-4 top-[40%] text-[16px] font-semibold text-gray-400 ">
                PRICE DETAILS
              </p>
            </div>
            <div>
              <hr />
              <div className="flex justify-between font-medium   text-gray-600 px-4 my-[30px]  ">
                <span>Price ({total_quantity}) items</span>
                <span>₹{total_price}</span>
              </div>
              <div className="flex justify-between font-medium   text-gray-600 px-4 my-[30px]  ">
                <span>Discount</span>
                <span className="text-green-500">-₹{total_discount}</span>
              </div>
              <div className="flex justify-between font-medium   text-gray-600 px-4 my-[30px] ">
                <span>Delivery Charge</span>
                <span>₹40</span>
              </div>
              <hr />
              <div className="flex justify-between px-4 my-[30px]">
                <span className="font-bold">Total Amount</span>
                <span className="font-bold">
                  {total_price - total_discount}
                </span>
              </div>
              <hr />
            </div>
            <div className="font-bold  mt-4  text-green-500 px-4">
              <p>You will save ₹{total_discount} on this order </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-200 flex flex-col items-center justify-center h-screen w-screen p-3 ">
          <h1 className="text-3xl ">OOPS! looks like your cart is empty</h1>
          <TbShoppingCartX className="w-[100px] h-[100px] my-5 " />
          <Link to={"/"}>
            <button className="p-[10%] bg-orange-600 text-white font-bold ">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
