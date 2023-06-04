import { useRef } from "react";
import { loginActions } from "../../store/login";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/login";
import "./login.css";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const loginError = useSelector((state) => state.errorReducer.loginError);

  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    const inputs = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    dispatch(loginUser(inputs));
  };

  const signUpSwitch = (e) => {
    dispatch(loginActions.haveAccount(false));
  };
  return (
    <div className="login-container">
      <form onSubmit={loginHandler}>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            ref={emailRef}
            required
            placeholder="registered email"
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            ref={passRef}
            required
            placeholder="registered password"
          />
        </p>

        <input type="submit" value="Login" id="login"></input>
        <button onClick={signUpSwitch} id="signup">
          Sign up
        </button>
        <br></br>
        {loginError && (
          <p id="erm">
            Incorrect username or password.
            <br />
            Try logging in again or continue with signing up.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
