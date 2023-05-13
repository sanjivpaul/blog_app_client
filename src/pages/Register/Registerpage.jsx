import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Your Username..."
            onChange={e=>setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter Your Email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter Your Password..."
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </div>
    </>
  );
}
