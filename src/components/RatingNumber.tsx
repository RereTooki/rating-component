import React from "react";
import "../App.css";

interface Props {
  onSelectItem: (key: string) => void;
}

const RatingNumber = ({ onSelectItem }: Props) => {
  return (
    <>
      <div className="flex">
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          key="1"
          onClick={() => {
            onSelectItem("1");
          }}
        >
          1
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          key="2"
          onClick={() => {
            onSelectItem("2");
          }}
        >
          2
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          key="3"
          onClick={() => {
            onSelectItem("3");
          }}
        >
          3
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          key="4"
          onClick={() => {
            onSelectItem("4");
          }}
        >
          4
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          key="5"
          onClick={() => {
            onSelectItem("5");
          }}
        >
          5
        </button>
      </div>
    </>
  );
};

export default RatingNumber;
