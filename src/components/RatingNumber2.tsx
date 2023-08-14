import "../App.css";

interface Props {
  scorevalue: number;
}

const RatingNumber2 = ({ scorevalue }: Props) => {
  return (
    <div className="badge2 text-orangee bg-dark-blue cursor-default select-none">
      You selected {scorevalue} out of 5
    </div>
  );
};

export default RatingNumber2;
