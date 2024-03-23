import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { z } from "zod";
import validator from "validator";
import { usercontext } from "../Context/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../../url";

export function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setverify] = useState("Email");
  const [altverify, setaltverify] = useState("Phone no.");
  const [phone, setPhone] = useState(0);
  const [errormsg, setErrorMsg] = useState("");
  const [err, setError] = useState(false);
  const { user, setUser } = useContext(usercontext);
  const navigate = useNavigate();

  let userdata = {};
  const verify_phone = z.string().length(10);
  if (user) setLogin(false);

  const handleUserData = async () => {
    if (verify == "Email") {
      if (!validator.isEmail(email)) {
        setError(true);
        setErrorMsg("Email format not correct");
        return;
      }
      userdata = {
        email: email,
        password: password,
      };
    } else {
      if (
        !validator.isNumeric(phone) ||
        !verify_phone.safeParse(phone).success
      ) {
        setError(true);
        setErrorMsg(
          "Phone number should be 10 digits long and have digts only"
        );
        return;
      }
      userdata = {
        phone: phone,
        password,
      };
    }
    console.log(userdata);
    try {
      const res = await axios.post(URL + "/api/auth/login", userdata, {
        withCredentials: true,
      });
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError(true);
      setErrorMsg(error.response.data);
    }
  };
  const changeverify = () => {
    if (verify == "Email") {
      setverify("Phone no.");
      setaltverify("Email");
    } else {
      setverify("Email");
      setaltverify("Phone no.");
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setLogin(false);
        }}
        className="w-full absolute top-0 left-0 h-screen opacity-[0.7] bg-black z-10"
      ></div>
      <div className="flex z-50 left-[10%] top-[20%] w-[80vw]  sm:w-[60vw] sm:left-[20%] xl:w-[50vw] xl:left-[25%]  absolute   ">
        <div className="bg-[#2874f0] w-[40%]  font-semibold text-white flex flex-col p-[20px] ">
          <h1 className="sm:text-3xl text-2xl ">Login</h1>
          <p className="mt-5 lg:text-xl grow-[2] text-lg">
            Get access to your Orders, <br /> Wishlist and <br />{" "}
            Recommendations
          </p>
          <img
            className="mt-[100px]"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
            alt=""
          />
        </div>
        <div className="bg-white w-[60%]  sm:text-xl text-lg  p-[50px]  text-gray-600  ">
          <form className="space-y-14" method="post">
            <div className="w-full">
              <label className="w-full" htmlFor="email">
                Enter {verify}
              </label>
              <br />
              <input
                className="border-b w-full focus:bg-slate-300 focus:outline-none  border-b-gray-600 "
                type="text"
                name="email"
                id="email"
                onChange={(e) => {
                  if (verify != "Email") setPhone(e.target.value);
                  else setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <label className="w-full" htmlFor="password">
                Enter Password
              </label>
              <br />
              <input
                className="border-b w-full focus:bg-slate-300 focus:outline-none  border-gray-600 "
                type="text"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleUserData();
              }}
              className="bg-orange-600 w-full p-4 rounded-lg text-white"
            >
              Login
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                changeverify();
              }}
              className="bg-[#2874f0] w-full p-4 rounded-lg text-white "
            >
              Use {altverify}
            </button>
          </form>
          {err && <p className="text-red-600 text-lg p-4">{errormsg}</p>}
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  setLogin: PropTypes.func.isRequired, //indicates that a prop is expected to be provided cannot be undefined, if it is undefined a warning will be given in the browser
};
