import Card from "./Card";
import Header from "./Header";

const TrendingPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="grid grid-cols-3 gap-x-2 gap-y-6 py-10">
        {[...Array(9)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
