import { Fragment } from "react";
import "./App.css";
import { useSelector } from "react-redux";

import FlightList from "./Components/Flights/FlightList";

import Wrapper from "./Components/Layout/Wrapper";
import Search from "./Components/Flights/Search";
import SignUp from "./Components/Login/SignUp";
import Loading from "./Components/Flights/Loading";
import Welcome from "./Components/Layout/Welcome";
import Login from "./Components/Login/Login";
function App() {
  const isloggedIn = useSelector((state) => state.loginReducer.isloggedIn);
  const account = useSelector((state) => state.loginReducer.account);
  const vis = useSelector((state) => state.flightSliceReducer.isVisible);
  const lvis = useSelector((state) => state.flightSliceReducer.loadingVisible);
  return (
    <Fragment>
      <Wrapper>
        <Welcome />
        {!isloggedIn && !account && <SignUp></SignUp>}
        {!isloggedIn && account && <Login />}
        {isloggedIn && <Search />}
        {isloggedIn && lvis && <Loading />}
        {isloggedIn && vis && <FlightList />}
      </Wrapper>
    </Fragment>
  );
}

export default App;
