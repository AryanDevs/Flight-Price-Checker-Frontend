import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFlights } from "../../store/flightlist";
import "./search.css";

const Search = () => {
  const srcRef = useRef("");
  const destRef = useRef("");
  const dateRef = useRef("");
  const passRef = useRef(1);
  const dispatch = useDispatch();

  const searchError = useSelector((state) => state.errorReducer.searchError);

  const searchHandler = (e) => {
    e.preventDefault();
    const inputs = {
      src: srcRef.current.value.toUpperCase(),
      dest: destRef.current.value.toUpperCase(),
      date: dateRef.current.value,
      passengers: passRef.current.value,
    };

    console.log(inputs);
    dispatch(getFlights(inputs));
  };
  return (
    <div className="search-container">
      <form onSubmit={searchHandler}>
        <p>
          <label htmlFor="source">From (IATA Code )</label>
          <br />
          <input
            type="text"
            id="source"
            name="source"
            ref={srcRef}
            placeholder="DEL (Delhi)"
            required
          />
        </p>

        <p>
          <label htmlFor="destination">Destination (IATA Code )</label>
          <br />
          <input
            type="text"
            id="destination"
            name="destination"
            ref={destRef}
            placeholder="SIN (Singapore)"
            required
          />
        </p>

        <p>
          <label htmlFor="date">Travelling Date </label>
          <br />
          <input type="date" id="date" name="date" ref={dateRef} required />
        </p>

        <p>
          <label htmlFor="passengers">Number of Passengers</label>
          <br />
          <input
            type="number"
            id="passengers"
            name="passengers"
            min="1"
            max="9"
            ref={passRef}
            required
          />
        </p>

        <input type="submit" value="Find Flights" id="submit-button" />
        <br></br>
        {searchError && (
          <p id="erm-2">
            Could not search for flights. Please ensure that you:
            <ul>
              <li>Are putting correct IATA codes for aiports</li>
              <li>
                Are choosing a travel date in the right format and picking date
                ahead of today and in the near future
              </li>
            </ul>
          </p>
        )}
      </form>
    </div>
  );
};

export default Search;
