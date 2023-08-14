import React from "react";
import "../App.css";

const RatingNumber = () => {
  return (
    <>
      <div className="flex">
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce">
          1
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce">
          2
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce">
          3
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce">
          4
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce">
          5
        </button>
      </div>
    </>
  );
};

export default RatingNumber;
