import axios from "axios";
import { useState } from "react";

import SearchBar from "../SearchBar/index";
import Logo from "../Logo/index";
import useLocalStorage from "../../hooks/useLocalStorage";
import stringLengthValidator from "../../validators/stringLengthValidator";
import "./style.scss";
import LocationItem from "../Location/LocationItem";
import Headline from "../Headline";
import Error from "../Error";

const MIN_LENGHT = 3;
const MAX_LENGHT = 30;

const Results = () => {
  const [query, setQuery] = useLocalStorage("query", "");
  const [data, setData] = useLocalStorage("data", []);
  const [validity, setValidity] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (stringLengthValidator(query, MIN_LENGHT, MAX_LENGHT)) {
      // FETCH
      setValidity(true);

      const options = {
        method: "GET",
        url: `https://kipras.me/location/search/${query}`,
        params: { lang: "en" },
        headers: {},
      };
      axios
        .request(options)
        .then((response) => {
          setData(response.data.locations.slice(0, 5));
        })
        .catch((error) => {
          console.error(error);
        });
      //
    } else {
      setValidity(false);
    }
  };

  return (
    <div>
      <div id="header-container">
        <Logo />
        <div id="default-searchbar-style">
          <SearchBar
            setQuery={setQuery}
            handleSubmit={handleSubmit}
            query={query}
          />
          {!validity && (
            <Error message="Query should be between 3 and 30 characters." />
          )}
        </div>
      </div>
      <div className="main-container">
        <Headline text="Results" />
        <div className="grid-container main-container">
          {data.length > 0 &&
            data.map((location) => <LocationItem location={location} />)}
          {!data.length && <h1>No results</h1>}
        </div>
      </div>
    </div>
  );
};

export default Results;
