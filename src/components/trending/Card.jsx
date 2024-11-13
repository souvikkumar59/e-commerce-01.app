import { CiShoppingCart } from "react-icons/ci";

import { CiHeart } from "react-icons/ci";

const Card = () => {
  return (
    <div className="flex flex-col h-[60vh] w-[25vw] justify-center  rounded-xl p-4 bg-gray-100 gap-2 ">
      <div className="flex justify-between items-center">
        <div className="bg-green-900 p-1 rounded-xl text-white">-30%</div>
        <CiHeart className="h-6 w-6 hover:fill-red-700" />
      </div>
      <div className="">
        <div className="h-[40vh] w-[22vw] border-2 border-green-700 rounded-xl"></div>
      </div>
      <div>
        <div className="bg-green-700 rounded-xl p-2 flex justify-between ">
          <div className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          <CiShoppingCart className="h-12 w-14 p-1 text-yellow-500 bg-white rounded-full" />

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
