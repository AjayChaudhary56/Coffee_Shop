import React from "react";
import coffee from "../../assets/coffee.png";
const ServicesData = [
  {
    id: 1,
    img: coffee,
    name: "Espresso",
    desc: "Strong coffee made with 7-8 grams of coffee powder and the pouring time is 20-21sec.Also, its volume is 30ml",
    aosDelay: "100",
  },
  {
    id: 2,
    img: coffee,
    name: "Americano",
    desc: "Strong coffee made with 7-8 grams of coffee powder and the pouring time is 20-21sec.Also, its volume is 30ml",
    aosDelay: "300",
  },
  {
    id: 3,
    img: coffee,
    name: "Cappuccino",
    desc: "Strong coffee made with 7-8 grams of coffee powder and the pouring time is 20-21sec.Also, its volume is 30ml",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
    <span id="services"></span>
    <div className="py-10">
      <div className="container">
        {/* header title  */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Best coffee for you
          </h1>
        </div>
        {/* Services Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {ServicesData.map((data, index) => {
            return (
              
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={index}
                className=" rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group realtive"
              >
                {/* Image Section  */}
                <div className="h-[122px]">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                  />
                </div>
                {/* Text Content */}
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
