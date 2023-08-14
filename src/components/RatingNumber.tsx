import React from "react";
import "../App.css";

const RatingNumber = () => {
  return (
    <>
      <div className="flex">
        <div className="badge text-light-grey bg-dark-blue">1</div>
        <div className="badge text-light-grey bg-dark-blue">2</div>
        <div className="badge text-light-grey bg-dark-blue">3</div>
        <div className="badge text-light-grey bg-dark-blue">4</div>
        <div className="badge text-light-grey bg-dark-blue">5</div>
      </div>
    </>
  );
};

export default RatingNumber;
