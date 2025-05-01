import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
    <div className="bg-slate-800 rounded-md p-8 shadow-lg backdrop-blur-3xl w-120 h-100 ">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <div className="flex justify-center item-center m-3">
        <form >
          <div className="">
            <label className="">Email</label>
            <input
              type="email"
              className="block w-72 py-2 px-1 text-sm text-white bg-transparent border border-b-2 border-gray-300  focus:ring-green-500"
              placeholder="Enter your mailid"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              className="block w-72 py-2 px-1 text-sm text-white bg-transparent border border-b-2 border-gray-300  focus:ring-green-500"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex justify-center mt-5">
            <button className="bg-gray-500 m-1 p-3 rounded-2xl">Submit</button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <span>
          New Here?{" "}
          <Link to="/Register" className="text-blue-600">
            Create an account
          </Link>{" "}
        </span>
      </div>
    </div>
    </div>
  );
};

export default Login;
