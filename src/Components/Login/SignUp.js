import { useRef } from "react";
import { loginActions } from "../../store/login";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/login";

import "./signup.css";
import { errorActions } from "../../store/errors";

const SignUp = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");

  const dispatch = useDispatch();
  const loginSwitch = (e) => {
    dispatch(loginActions.haveAccount(true));
    dispatch(errorActions.createLoginError(false));
  };
  const signupHandler = (e) => {
    e.preventDefault();
    const inputs = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    dispatch(createUser(inputs));
  };
  return (
    <div className="signup-container">
      <h2>Hi!</h2>
      <h2>We'll need you to sign up first.</h2>
      <p>
        Already have an account?{" "}
        <button onClick={loginSwitch} id="login-0">
          Login
        </button>
      </p>
      <form onSubmit={signupHandler}>
        <p>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" ref={nameRef} required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" ref={emailRef} required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" ref={passRef} required />
        </p>

        <input type="submit" value="Sign-Up" id="signup"></input>
      </form>
    </div>
  );
};

export default SignUp;
