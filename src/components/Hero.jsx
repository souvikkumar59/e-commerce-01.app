import React from "react";

const Hero = () => {
  return (
    <div className="  h-[calc(100vh-56px)] bg-teal-900 text-white px-8      ">
      <div className="flex justify-around max-w-7xl mx-auto items-center h-full ">
        <div className="flex flex-col gap-4 max-w-md ">
          <div className="bg-gray-600 w-28 py-1 px-3 rounded-full text-sm">
            Our Products
          </div>
          <h1 className="text-6xl font-bold leading-tight">
            Lorem ipsum dolor sit...
          </h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex flex-col gap-4 w-[35%]">
            <button className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-full font-medium hover:bg-yellow-400">
              Shop Now
            </button>
            <div className="flex gap-2">
              <button className="text-yellow-500 border-2 border-yellow-500 rounded-full p-2 w-20 hover:bg-yellow-500 hover:text-gray-900">
                <span className="sr-only">Previous</span> ←
              </button>
              <button className="text-yellow-500 border-2 border-yellow-500 rounded-full p-2 w-20 hover:bg-yellow-500 hover:text-gray-900">
                <span className="sr-only">Next</span> →
              </button>
            </div>
          </div>
        </div>

        <div className=" flex gap-4">
          <div className=" border-2 border-white rounded-xl w-96 h-96 "></div>
          <div className="flex gap-2">
          <div className=" border-2 border-white rounded-xl w-40 h-96 "></div>
          <div className=" border-2 border-white rounded-xl w-40 h-96 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
