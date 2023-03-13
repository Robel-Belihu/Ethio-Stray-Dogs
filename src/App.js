import React from "react";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="text-gray-600 grid md:grid-cols-3">
      <div className="bg-white text-gray-500 col-span-3 md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold p-4 border-b border-gray-100">
              <a className="hover:text-gray-700" href="/">
                Humanity First
              </a>
            </h1>
            <div className="px-4 cursor-pointer md:hidden flex">
              <svg
                id="burger"
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                cd
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
          <ul className="text-sm mt-6 hidden md:block" id="menu">
            <li className="text-gray-700 text-lg font-bold py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-right border-r-4 border-primary"
              >
                <span>Home</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-right border-r-4 border-white"
              >
                <span>About</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="px-4 flex justify-end border-right border-r-4 border-white"
              >
                <span>Contact</span>
                <svg
                  className="w-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="bg-gray-300 px-16 py-6 col-span-3 md:col-span-2">
        <div className="flex justify-center md:justify-end">
          <a
            href="#"
            className="btn border-primary md:border-2 text-primary hover:bg-primary hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="btn border-primary md:border-2 text-primary hover:bg-primary hover:text-white"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-500 text-4xl font-Megrim">
            Ethio Stray Dogs
          </h2>
          <h3 className="text-2xl">For Ninjas</h3>
        </header>

        <div>
          <h4 className="mt-12 pb-2 text-gray-800 text-semibold border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="mt-8">
            <div>
              <img
                className="w-full h-32 sm:h-48 object-cover"
                src={require("./img/dog-3.jpg")}
                alt="doggy"
              />
              <div>
                <span className=" text-gray-700 font-semibold">
                  The streets are too harsh for these delicate puppies
                </span>
                <span className="block">Photo taken from internet</span>
              </div>
            </div>
          </div>

          <h4 className="mt-12 pb-2">Most Popular</h4>

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="card">
              <img
                className=" w-full h-32 sm:h-48 object-cover"
                src={require("./img/dog-1.webp")}
                alt="dog-poster"
              />
              <div className="p-4">
                <span className="font-bold">
                  Perfectly healthy puppy, without an owner, wondering on the
                  streets
                </span>
                <span className="block text-gray-500">
                  Photo taken by Joseph
                </span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                className=" w-full h-32 sm:h-48 object-cover"
                src={require("./img/dog-2.jpg")}
              />
              <div className="p-4">
                <span className="font-bold">
                  Perfectly healthy puppy, without an owner, wondering on the
                  streets
                </span>
                <span className="block text-gray-500">
                  Photo taken by Joseph
                </span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                className=" w-full h-32 sm:h-48 object-cover"
                src={require("./img/dog-4.jpg")}
              />
              <div className="p-4">
                <span className="font-bold">
                  Perfectly healthy puppy, without an owner, wondering on the
                  streets
                </span>
                <span className="block text-gray-500">
                  Photo taken by Joseph
                </span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="btn bg-gray-500 text-white hover:shadow-inner">
            Load more
          </div>
        </div>
      </main>
      <HelmetProvider>
        <script src="./header.js" />
      </HelmetProvider>
    </div>
  );
}

export default App;
