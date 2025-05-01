import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
    <div className="bg-slate-800 rounded-md p-8 shadow-lg backdrop-blur-3xl w-120 h-130">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <div className="flex justify-center item-center m-3">
        <form>
          <div>
            <label className="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="block w-72 py-2 px-1 text-sm text-white  border border-b-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative my-4">
            <label className="">Email</label>
            <input
              type="email"
              className="block w-72 py-2 px-1 text-sm text-white  border border-b-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your mailid"
            />
          </div>

          <div className="relative my-4">
            <label>Password</label>
            <input
              type="password"
              className="block w-72 py-2 px-1 text-sm text-white  border border-b-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your Password"
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="block w-72 py-2 px-1 text-sm text-white bg-transparent border border-b-2 border-gray-300   focus:ring-2 focus:ring-green-500"
              placeholder=" Again type Password"
            />
          </div>

          <div className="flex justify-center mt-5">
            <button className="bg-gray-500 m-1 p-3 rounded-2xl">
              Register
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        <span>
          Already Create an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>{" "}
        </span>
      </div>
    </div>
    </div>
  );
};

export default Register;
