import "./style.scss";
import { useState } from "react";
import Headline from "../Headline";
import LocationList from "../Location/LocationList";

const Results = () => {
  const checkLocal = () => {
    window.addEventListener("storage", (event) => {
      
      // event contains
      // key – the key that was changed
      // oldValue – the old value
      // newValue – the new value
      // url –
      // storageArea – either localStorage or sessionStorage object where the update happened.
    });
  };
  const test = " tes";
  const [results, setResults] = useState([]);
  return (
    <div>
      <Headline size="50px" text="Results" />
      <div className="main-container">
        <LocationList />
      </div>
    </div>
  );
};
export default Results;
