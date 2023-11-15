import { Menu } from "./Menu";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

export function Navbar() {
  return (
    <div className="flex flex-row py-5 px-5 max-h-16 bg-candy-red w-full xl:px-[130px] justify-between  ">
      <div className="flex items-center md:space-x-3 space-x-10 ">
        <div className="logo">
          <h1 className="text-white font-semibold italic text-lg md:text-xl">
            ShopCart
          </h1>
        </div>
        <div className="flex items-center">
          <input
            className="outline-none px-3 w-[300px] md:w-[500px] "
            type="search"
            name=""
            id=""
          />
          <p className="bg-white relative right-[29px]  ">
            <BsSearch size={20} />
          </p>
        </div>
      </div>
      <div className=" text-white text-lg items-center lg:flex space-x-6  hidden ">
        <button className="bg-white w-[100px] h-[30px] rounded-[3px] text-candy-red  ">
          Login
        </button>
        <p>Become a Seller</p>
        <p>More</p>
        <div className="flex items-center ">
          <p>
            <FaShoppingCart />
          </p>
          <p>Cart</p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col ">
        <Menu />
      </div>
    </div>
  );
}
