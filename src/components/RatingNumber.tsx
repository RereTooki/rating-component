import React from "react";
import "../App.css";

const RatingNumber = () => {
  return (
    <>
      <div className="flex">
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee">
          1
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee">
          2
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee">
          3
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee">
          4
        </button>
        <button className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee">
          5
        </button>
      </div>
    </>
  );
};

export default RatingNumber;
