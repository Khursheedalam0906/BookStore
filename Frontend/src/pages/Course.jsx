import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import List from "../utils/list.json";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [books, setBooks] = useState([]);

  const getBook = async () => {
    try {
      const response = await axios.get("http://localhost:8000/getbook");
      if (response.data.success) {
        setBooks(response.data.book);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  min-h-screen">
      <div className="pt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We are delighted to have you
          <span className="text-pink-500"> Here! :)</span>
        </h1>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          assumenda voluptatem laboriosam! Minima, deleniti molestiae error
          libero deserunt quia impedit natus iure provident hic delectus quis
          corrupti fugiat veritatis! Maiores. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Non eaque qui id, natus modi, eos
          tenetur odit rerum at quibusdam cupiditate nobis obcaecati ullam
          repudiandae aliquid incidunt reiciendis quam velit.
        </p>
        <Link to="/">
          <button className="btn btn-secondary mt-5 hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((item, index) => (
          <div key={index}>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
