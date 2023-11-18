import { useState } from "react";
import axios from "axios";
import { URL } from "../../url";

export function Register() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [errormsg, setErrorMsg] = useState("");
  const [err, setError] = useState(false);

  const userdata = {
    username: firstname,
    email: email,
    password: password,
    phone: phone,
  };

  const handleUserData = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", userdata, {
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      setError(true);
      setErrorMsg(error.response.data);
    }
  };

  return (
    <>
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
              <label htmlFor="firstname">Enter Username</label>
              <br />
              <input
                className="border-b w-full focus:bg-slate-300 focus:outline-none   border-b-gray-600 "
                type="text"
                name="firstname"
                id="firstname"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              <label className="w-full" htmlFor="email">
                Enter Email
              </label>
              <br />
              <input
                className="border-b w-full focus:bg-slate-300 focus:outline-none  border-b-gray-600 "
                type="text"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
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
            <div className="w-full">
              <label className="w-full" htmlFor="phone">
                Enter Phone
              </label>
              <br />
              <input
                className="border-b w-full focus:bg-slate-300 focus:outline-none  border-gray-600 "
                type="text"
                name="phone"
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
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
              Continue
            </button>
          </form>
          {err && <p className="text-red-600 text-lg p-4">{errormsg}</p>}
        </div>
      </div>
    </>
  );
}
