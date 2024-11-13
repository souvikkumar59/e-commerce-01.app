const Header = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between ">
        <h1 className="text-4xl font-bold flex flex-col gap-2">
          <span> Trending Products </span>
          <span>for you!</span>
        </h1>
        <button className="bg-yellow-500 px-4  text-2xl text-white rounded-full">
          View All Products
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
