import React, { useEffect, useState } from "react";
import List from "../utils/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Freebook = () => {
  const [freeBooks, setFreeBooks] = useState([]);

  const getFreeBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getbook");
      if (response.data.success) {
        const freeBookFilter = response.data.book.filter(
          (data) => data.category === "free"
        );
        setFreeBooks(freeBookFilter);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  console.log(freeBooks);

  useEffect(() => {
    getFreeBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        corrupti autem id ex sunt molestiae voluptate itaque exercitationem ab,
        animi temporibus illo sint. Quis, minus quaerat? Velit in ea nisi?
      </p>
      <div className="slider-container mt-5">
        <Slider {...settings}>
          {freeBooks?.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
