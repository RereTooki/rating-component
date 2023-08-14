import { useState } from "react";
import "../App.css";
import Button from "./Button";
import RatingNumber from "./RatingNumber";
import RatingText from "./RatingText";
import IconHolder from "./IconHolder";
import IconHolder2 from "./IconHolder2";
import RatingNumber2 from "./RatingNumber2";
import RatingText2 from "./RatingText2";

const RatingCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scoreValue, setScoreValue] = useState(0);

  return (
    <div className="flex flex-col justify-center font-overpass items-center h-screen bg-very-dark-blue">
      {isVisible || (
        <div className="flex flex-col px-5 py-4 w-[296.5px] gradient text-center rounded-[22px]">
          <IconHolder />
          <RatingText />
          <RatingNumber
            onSelectItem={(key: number) => {
              setScoreValue(key);
            }}
          />
          <Button onClick={() => setIsVisible(true)} />
        </div>
      )}
      {isVisible && (
        <div className="flex flex-col justify-center items-center px-5 py-4 w-[296.5px] h-[365.25px] gradient text-center rounded-[22px]">
          <IconHolder2 />
          <RatingNumber2 scorevalue={scoreValue} />
          <RatingText2 />
        </div>
      )}
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
          target="_blank"
        >
          Rere Tooki
        </a>
        .
      </div>
    </div>
  );
};

export default RatingCard;
