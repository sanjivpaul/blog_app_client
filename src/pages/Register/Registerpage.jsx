import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    // if we dont use preventDefault then all the time when we click on register button page will refresh all the time
    e.preventDefault();
    setError(false)

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register/", {
        username,
        email,
        password,
      });
      // console.log(res);
      // if register susscessfully go to login page
      res.data && window.location.replace("/login")
      // console.log(res.data.user);
    } catch (error) {
      // console.log(error);
      setError(true)
    }
  };

  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Your Username..."
            autoComplete="username"
            // onchange update username
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Your Email..."
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter Your Password..."
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        {error && <span style={{color:"red", marginTop:"15px"}}>Something went wrong!</span>}
      </div>
    </>
  );
}
