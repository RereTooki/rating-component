import "../App.css";

interface Props {
  onSelectItem: (key: number) => void;
}

const RatingNumber = ({ onSelectItem }: Props) => {
  return (
    <>
      <div className="flex">
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          onClick={() => {
            onSelectItem(1);
          }}
        >
          1
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          onClick={() => {
            onSelectItem(2);
          }}
        >
          2
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          onClick={() => {
            onSelectItem(3);
          }}
        >
          3
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          onClick={() => {
            onSelectItem(4);
          }}
        >
          4
        </button>
        <button
          className="badge text-light-grey bg-dark-blue hover:bg-orangee hover:text-whitee hover:animate-bounce focus:bg-light-grey focus:text-whitee"
          onClick={() => {
            onSelectItem(5);
          }}
        >
          5
        </button>
      </div>
    </>
  );
};

export default RatingNumber;
