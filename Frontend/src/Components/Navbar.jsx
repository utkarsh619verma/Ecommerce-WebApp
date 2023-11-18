import { useContext, useState } from "react";
import { Menu } from "./Menu";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Login } from "../Pages/login";
import { usercontext } from "../Context/user";
import { useNavigate } from "react-router-dom";
import { URL } from "../../url";
import axios from "axios";

export function Navbar() {
  const [login, setLogin] = useState(false);
  const { user, setUser } = useContext(usercontext);
  const navigate = useNavigate();
  const handlelogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(res);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {login && <Login setLogin={setLogin} />}
      <div className="flex flex-row py-5 px-5 max-h-16 bg-candy-red w-full xl:px-[130px] justify-between  ">
        <div className="flex items-center md:space-x-3 space-x-10 ">
          <div className="logo">
            <h1 className="text-white font-semibold italic text-lg md:text-xl">
              ShopCart
            </h1>
          </div>
          <div className="flex items-center">
            <input
              className="outline-none px-3 rounded-lg border-b border-b-black focus:border-b-gray-400 w-[40vw]  "
              type="search"
              name=""
              id=""
            />
            <p className=" relative right-[29px]  ">
              <BsSearch size={20} />
            </p>
          </div>
        </div>
        <div className=" text-white text-lg items-center lg:flex space-x-6  hidden ">
          {user ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                handlelogout();
              }}
              className="bg-white w-[100px] h-[30px] rounded-[3px] text-candy-red  "
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                console.log("ad");
                setLogin(true);
              }}
              className="bg-white w-[100px] h-[30px] rounded-[3px] text-candy-red  "
            >
              Login
            </button>
          )}
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
    </>
  );
}
