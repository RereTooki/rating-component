import React from "react";
import "../App.css";
import Button from "./Button";
import RatingNumber from "./RatingNumber";
import RatingText from "./RatingText";

const RatingCard = () => {
  return (
    <div className="flex justify-center font-overpass items-center h-screen bg-very-dark-blue">
      <div className="flex flex-col px-5 py-4 w-[296.5px] gradient text-center rounded-[12px]">
        RatingCards fnasmfb
        <RatingText />
        <RatingNumber />
        <Button />
      </div>
    </div>
  );
};

export default RatingCard;
