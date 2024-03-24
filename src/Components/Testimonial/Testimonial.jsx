import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Ajay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus amet saepe sint nihil corrupti, a illo. Ab laboriosam vitae vero numquam repellendus. Dignissimos sit odit, soluta illo aperiam harum.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Bjay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus amet saepe sint nihil corrupti, a illo. Ab laboriosam vitae vero numquam repellendus. Dignissimos sit odit, soluta illo aperiam harum.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Cjay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus amet saepe sint nihil corrupti, a illo. Ab laboriosam vitae vero numquam repellendus. Dignissimos sit odit, soluta illo aperiam harum.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Djay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus amet saepe sint nihil corrupti, a illo. Ab laboriosam vitae vero numquam repellendus. Dignissimos sit odit, soluta illo aperiam harum.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Ejay",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus amet saepe sint nihil corrupti, a illo. Ab laboriosam vitae vero numquam repellendus. Dignissimos sit odit, soluta illo aperiam harum.",
    img: "https://picsum.photos/105/105",
  },
];
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    // fade:true,
    autoplaySpeed: 2000,
    pauseonHover: true,
    pauseonFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          iniatialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header section  */}
        <div data-aos="fade-up" className="text-center mb-10">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>
        {/* Testimonial section  */}
        <div data-aos="zoom-in" className="">
          <Slider {...settings}>
            {TestimonialData.map((data, index) => {
              return (
                <div className="my-6" key={index}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 mx-4 rounded-xl bg-primary/10 relative">
                    {/* Image Section  */}
                    <div className="mb-4 mx-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* Content Section  */}
                    <div className="flex flex-col gap-4 items-center">
                      <div className="mx-5 space-y-3">
                        <p className="text-xs font-serif text-gray-500 ">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/60 font-cursive">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 font-serif text-9xl top-0 right-0 absolute">,,</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
