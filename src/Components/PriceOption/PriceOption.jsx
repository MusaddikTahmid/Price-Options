import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-600 text-white p-5 rounded-xl text-center">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center my-5">{name}</h4>
      <div className="pl-5">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-xl hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
