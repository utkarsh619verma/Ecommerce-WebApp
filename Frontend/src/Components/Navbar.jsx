import { useContext, useEffect, useState } from "react";
import { getProducts } from "../Redux/actions/productAction";
import { Menu } from "./Menu";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Login } from "../Pages/login";
import { usercontext } from "../Context/user";
import { useNavigate } from "react-router-dom";
import { URL } from "../../url";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export function Navbar() {
  const [login, setLogin] = useState(false);
  const { user, setUser } = useContext(usercontext);
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { total_quantity } = useSelector((state) => state.cartQuantity);
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

  // suggesting product in search bar
  const { products } = useSelector((state) => state.getProducts || {});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // debouncing search bar
  useEffect(() => {
    let timer;

    timer = setTimeout(() => {
      console.log(userInput);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [userInput]);

  return (
    <>
      {login && <Login setLogin={setLogin} />}
      <div className="flex flex-row py-5 px-5 max-h-16 bg-blue-500 w-full xl:px-[130px] justify-between fixed top-0 z-[10000]  ">
        <div className="flex items-center md:space-x-3 space-x-10 ">
          <Link to="/">
            <div className="logo">
              <h1 className="text-white font-semibold italic text-lg md:text-xl">
                ShopCart
              </h1>
            </div>
          </Link>
          <div className="flex relative items-center">
            <input
              className="outline-none px-3 border-b border-b-black focus:border-b-gray-400 w-[40vw]  "
              type="search"
              name=""
              id=""
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <p className=" relative right-[29px]  ">
              <BsSearch size={20} />
            </p>
            {userInput != "" && (
              <div className="text-black text-lg z-50 absolute top-[25px]  bg-white ">
                {products
                  .filter((product) =>
                    product.title.longTitle
                      .toLowerCase()
                      .includes(userInput.toLowerCase())
                  )
                  .map((product) => (
                    <p
                      key={product._id}
                      className="my-3 px-2 border-b-[rgb(217,212,208)] border-b-[1px] w-full"
                    >
                      {product.title.longTitle}
                    </p>
                  ))}
              </div>
            )}
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
              {user.username}
            </button>
          ) : (
            <button
              onClick={() => {
                setLogin(true);
              }}
              className="bg-white w-[100px] h-[30px] rounded-[3px] text-blue-500 "
            >
              Login
            </button>
          )}
          <p>Become a Seller</p>
          <p>More</p>
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className="flex items-center relative cursor-pointer "
          >
            {total_quantity > 0 && (
              <p className="absolute bottom-3 cursor-pointer left-14 w-[30px] h-[30px] py-[2px] bg-yellow-300 border-2 border-white rounded-2xl text-sm text-center  ">
                {total_quantity}
              </p>
            )}
            <p>
              <FaShoppingCart />
            </p>
            <p className="px-[3px]">Cart</p>
          </div>
        </div>
        <div className="lg:hidden flex flex-col ">
          <Menu />
        </div>
      </div>
    </>
  );
}
