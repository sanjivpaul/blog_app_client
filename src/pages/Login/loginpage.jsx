import { Link } from "react-router-dom";

export default function LoginPage() {

  // const handleSubmit = (e)=>{}
  return (
    <>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input className="loginInput" type="text" placeholder="Enter Your Username..." />
          <label>Password</label>
          <input className="loginInput" type="password" placeholder="Enter Your Password..." />
          <button className="loginButton" type="submit">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
      </div>
    </>
  );
}
