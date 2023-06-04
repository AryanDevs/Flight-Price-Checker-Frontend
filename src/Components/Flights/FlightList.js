import FlightItem from "./FlightItem";
import { useSelector } from "react-redux";

const FlightList = () => {
  const flights = useSelector((state) => state.flightSliceReducer.flightList);
  return (
    <>
      <h1>Here are some flights...</h1>
      <ul>
        {flights.map((flight, index) => {
          return (
            <FlightItem
              key={index}
              airline={flight.airline}
              cost={flight.price}
              flightNo={flight.flightnumber}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FlightList;
