import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

export default function LoginPage() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // start
    dispatch({ type: "LOGIN_START" });
    // api calling
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // fetching successful
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.others });
    } catch (error) {
      // login failure
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  // console.log(user);
  // console.log(isFetching);
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            autoComplete="username"
            className="loginInput"
            type="text"
            placeholder="Enter Your Username..."
            // collecting username
            ref={userRef}
          />
          <label>Password</label>
          <input
            autoComplete="current-password"
            className="loginInput"
            type="password"
            placeholder="Enter Your Password..."
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </>
  );
}
