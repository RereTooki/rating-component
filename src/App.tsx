import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RatingCard from "./components/RatingCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RatingCard />
      </div>
    </>
  );
}

export default App;
5;
