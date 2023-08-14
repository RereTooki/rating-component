import React from "react";
import "../App.css";
import Button from "./Button";
import RatingNumber from "./RatingNumber";
import RatingText from "./RatingText";
import IconHolder from "./IconHolder";
import IconHolder2 from "./IconHolder2";
import RatingNumber2 from "./RatingNumber2";
import RatingText2 from "./RatingText2";

const RatingCard = () => {
  return (
    <div className="flex justify-center font-overpass items-center h-screen bg-very-dark-blue">
      <div className="flex flex-col px-5 py-4 w-[296.5px] gradient text-center rounded-[22px]">
        <IconHolder />
        <RatingText />
        <RatingNumber />
        <Button />
      </div>
      <div className="flex flex-col justify-center items-center px-5 py-4 w-[296.5px] h-[365.25px] gradient text-center rounded-[22px]">
        <IconHolder2 />
        <RatingNumber2 />
        <RatingText2 />
      </div>
    </div>
  );
};

export default RatingCard;
