import React from "react";
import Cards from "../components/Cards";
import List from "../utils/list.json";
import { Link } from "react-router-dom";
const Course = () => {
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
        {List.map((item) => (
          <div>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
