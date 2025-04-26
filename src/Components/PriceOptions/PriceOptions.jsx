import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      member: "Individual",
      features: [
        "Access to gym equipment",
        "1 Personal Training Session per month",
        "Free Wi-Fi",
        "Locker Room Access",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 50,
      member: "Individual or Couple",
      features: [
        "Access to gym equipment",
        "3 Personal Training Sessions per month",
        "Free Wi-Fi",
        "Locker Room Access",
        "Access to Pool & Sauna",
        "Discounts on Classes",
      ],
    },
    {
      id: 3,
      name: "Family Membership",
      price: 120,
      member: "Family (up to 4 members)",
      features: [
        "Access to gym equipment for the whole family",
        "5 Personal Training Sessions per month",
        "Free Wi-Fi",
        "Locker Room Access",
        "Access to Pool & Sauna",
        "Discounts on Classes",
        "Family Group Classes",
      ],
    },
    {
      id: 4,
      name: "Student Membership",
      price: 20,
      member: "Student",
      features: [
        "Access to gym equipment",
        "1 Personal Training Session per month",
        "Free Wi-Fi",
        "Locker Room Access",
        "Discount on Special Classes",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-7xl text-center font-bold">Best price in the town</h2>
      <div className="grid grid-cols-3 gap-4 m-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
