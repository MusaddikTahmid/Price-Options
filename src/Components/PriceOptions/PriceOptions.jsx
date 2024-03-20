import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio and weightlifting equipment",
        "Group fitness classes",
        "Locker room access",
        "Personalized workout plans",
        "Free Wi-Fi access",
        "Monthly fitness challenges",
        "Discounts on gym merchandise",
      ],
      price: "$29.99",
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "All features of Basic Membership",
        "Access to sauna and steam room",
        "Discounts on personal training sessions",
        "Nutritional counseling sessions",
        "Complimentary towel service",
        "Guest passes for friends/family",
        "Priority booking for fitness classes",
      ],
      price: "$49.99",
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "All features of Standard Membership",
        "Unlimited access to all gym facilities",
        "Free access to premium fitness classes",
        "Priority booking for fitness assessments",
        "Access to exclusive members-only events",
        "Monthly one-on-one sessions with a personal trainer",
        "Discounts on local wellness partners",
      ],
      price: "$79.99",
    },
  ];

  return (
    <div className="m-12 ">
      <h2 className="text-5xl my-10 text-center">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
