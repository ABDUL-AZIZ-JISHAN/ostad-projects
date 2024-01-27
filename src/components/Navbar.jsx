"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = ({ categories = [] }) => {
  
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState("/");
  const debounceTimeout = 500;

  const isMenuItemActive = (path) => {
    return router.pathname === path;
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = debounce((value) => {
    router.push(`/news/search?by=${value}`);
  }, debounceTimeout);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-600 bg-opacity-90 backdrop-filter backdrop-blur-lg py-4 shadow-lg">
      <div className="container-fluid px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white whitespace-nowrap text-3xl font-bold"
            >
              Trendy News
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li
              className={` font-medium hover:text-blue-300 transition duration-100 rounded py-1 px-4  ${
                current === "/"
                  ? "bg-white text-black hover:text-black"
                  : "text-white"
              }`}
            >
              <Link
                href={`/`}
                onClick={() => setCurrent("/")}
                className=" transition duration-100"
              >
                Home
              </Link>
            </li>
            {categories.map((category) => {
              const { id, name } = category;
              return (
                <li
                  key={id}
                  className={` font-medium hover:text-blue-300 transition duration-100 rounded py-1 px-4  ${
                    current === name
                      ? "bg-white text-black hover:text-black"
                      : "text-white"
                  }`}
                >
                  <Link
                    href={`/news/category?id=${id}`}
                    onClick={() => setCurrent(name)}
                    className=" transition duration-100"
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <div className="flex items-center ml-4">
              <input
                type="text"
                className="border border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                placeholder="Search..."
                value={search}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center ml-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300">
                Login
              </button>
              <button className="bg-blue-500 ml-2 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
