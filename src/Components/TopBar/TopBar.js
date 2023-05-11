import { Link } from "react-router-dom";
function TopBar() {
  const user = false;
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
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about" >ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/" >CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write" >WRITE</Link>
            </li>
            <li className="topListItem">
              {/* if user exist then he can logout */}
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {/* if user exist show profile pic on top right */}
          {
            user ? (<img className="topImg" src="https://source.unsplash.com/1600x900/?nature" alt="" />) : (
              // if user is not exist then they can login or register
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login" >LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register" >REGISTER</Link>
                </li>
              </ul>
            )
          }

          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}
export default TopBar;
