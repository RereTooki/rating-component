import React from "react";
import "../App.css";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button
      className=" text-[12px] tracking-widest rounded-full bg-orangee hover:bg-whitee text-whitee hover:text-orangee hover:animate-pulse py-3 mb-4"
      onClick={onClick}
    >
      SUBMIT
    </button>
  );
};

export default Button;
