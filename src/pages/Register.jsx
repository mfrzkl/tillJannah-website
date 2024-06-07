import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="__wrapper  shadow-md px-5 py-5 rounded-md w-[400px]">
        <section>
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-xl mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Register
              </button>
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 text-xl"
              >
                Login
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;