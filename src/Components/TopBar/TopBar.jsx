// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../Modals/Modal";
import "./TopBar.css";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from "../../Redux/AuthSlice";
import axios from "axios";
import { useRef } from "react";
function TopBar() {
  // const { user, dispatch } = useContext(Context);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const publicFolder = "http://localhost:5001/images/";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const userRef = useRef();
  const passwordRef = useRef();

  const handleLogout = () => {
    // dispatch({ type: "LOGOUT" });
    dispatch(logout());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsLoginModalOpen(false);
    setStep(1); // Reset step when modal closes
  };

  const handleSubmit = async (e) => {
    // if we dont use preventDefault then all the time when we click on register button page will refresh all the time
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("http://localhost:5001/api/auth/register/", {
        username,
        email,
        password,
      });
      // console.log(res);
      // if register susscessfully go to login page
      res.data && window.location.replace("/login");
      // console.log(res.data.user);
    } catch (error) {
      // console.log(error);
      setError(true);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    // start
    // dispatch({ type: "LOGIN_START" });
    dispatch(loginStart());

    // api calling
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // fetching successful
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.others });
      dispatch(loginSuccess(res.data.others));
    } catch (error) {
      // login failure
      // dispatch({ type: "LOGIN_FAILURE" });
      dispatch(loginFailure());
    }
  };

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {/* if user exist then he can logout */}
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {/* if user exist show profile pic on top right */}
          {user ? (
            <Link to="/setting">
              <img
                className="topImg"
                src={publicFolder + user.profilePic}
                alt=""
              />
            </Link>
          ) : (
            // if user is not exist then they can login or register
            <ul className="topList">
              <li className="topListItem">
                {/* <Link className="link" to="/login">
                  LOGIN
                </Link> */}
                <button
                  className="register-button"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  LOGIN
                </button>
              </li>
              <li className="topListItem">
                {/* <Link className="link" to="/register">
                  REGISTER
                </Link> */}
                <button
                  className="register-button"
                  onClick={() => setIsModalOpen(true)}
                >
                  REGISTER
                </button>
              </li>
            </ul>
          )}

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {step === 1 && (
            <div className="modal-container">
              <h2 className="modal-title">Join Articles</h2>
              <div className="modal-button-container">
                <button className="google-btn">Sign in with Google</button>
                <button className="email-btn" onClick={() => setStep(2)}>
                  Sign in with Email
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="register-with-email">
              <h2>Register with Email</h2>
              <form
                className="register-with-email-form"
                onSubmit={handleSubmit}
              >
                <input
                  className="input-field"
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email or Phone"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button
                  className="register-with-email-submit-btn"
                  type="submit"
                >
                  Submit
                </button>
              </form>

              {error && (
                <span style={{ color: "red", marginTop: "15px" }}>
                  Something went wrong!
                </span>
              )}

              <button
                className="all-signin-btn"
                onClick={() => setStep(step - 1)}
              >
                All SignIn
              </button>
            </div>
          )}
          <div className="forget">
            <p>
              Dont have an account? <a href="/forget"> Create.</a>
            </p>
          </div>

          <div className="forget">
            <p>
              Forgot email or trouble signing in?{" "}
              <a href="/forget"> Get help.</a>
            </p>
          </div>
          <div className="modal-footer">
            <p>
              By continuing, you agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </Modal>

        <Modal isOpen={isLoginModalOpen} onClose={handleCloseModal}>
          {step === 1 && (
            <div className="modal-container">
              <h2 className="modal-title">Join Articles</h2>
              <div className="modal-button-container">
                <button className="google-btn">Sign in with Google</button>
                <button className="email-btn" onClick={() => setStep(2)}>
                  Sign in with Email
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="register-with-email">
              <h2>SignIn</h2>
              <form
                className="register-with-email-form"
                onSubmit={handleSubmitLogin}
              >
                <input
                  className="input-field"
                  type="text"
                  placeholder="Username"
                />
                <br />
                {/* <input
                  className="input-field"
                  type="email"
                  placeholder="Email or Phone"
                />
                <br /> */}
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                />
                <br />
                <button
                  className="register-with-email-submit-btn"
                  type="submit"
                >
                  Submit
                </button>
              </form>

              <button
                className="all-signin-btn"
                onClick={() => setStep(step - 1)}
              >
                All SignIn
              </button>
            </div>
          )}

          <div className="forget">
            <p>
              Forgot email or trouble signing in?{" "}
              <a href="/forget"> Get help.</a>
            </p>
          </div>
          <div className="modal-footer">
            <p>
              By continuing, you agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default TopBar;
