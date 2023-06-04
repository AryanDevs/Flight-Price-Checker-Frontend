import "./welcome.css";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/login";
import { flightListAction } from "../../store/flightlist";
import { errorActions } from "../../store/errors";

const Welcome = () => {
  const isloggedIn = useSelector((state) => state.loginReducer.isloggedIn);
  const username = useSelector((state) => state.loginReducer.username);
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    dispatch(loginActions.logout());
    dispatch(flightListAction.setVisible(false));
    dispatch(loginActions.haveAccount(false));
    dispatch(errorActions.createSearchError(false));
    dispatch(flightListAction.setLoadingVisible(false));
  };
  return (
    <div>
      <h1>Flight Price Checker</h1>
      {isloggedIn && (
        <div className="welcome-bar">
          <h3>Welcome {username}!</h3>
          <button onClick={logoutHandler}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
