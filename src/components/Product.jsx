import NewCollection from "./NewCollection";

const Product = () => {
  return (
    <div className="max-w-7xl mx-auto flex gap-4">
      <div className="w-2/3 bg-gray-100">
        <div className="w-full">
          <NewCollection />
        </div>
        <div className="flex flex-col">
          <div>
            <NewCollection />
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-1/3">
        <NewCollection />
      </div>
    </div>
  );
};

export default Product;
