import "./flightitem.css";

const FlightItem = (props) => {
  return (
    <li>
      <div className="container">
        <p>{props.airline}</p>
        <p> Rs {props.cost}</p>
        <p>Flight No: {props.flightNo}</p>
      </div>
    </li>
  );
};

export default FlightItem;
