import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      // console.log(res.data);
      setCats(res.data.cats);
    };
    getCats();
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://source.unsplash.com/300x240/?education" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            aspernatur modi quia dolor fugit necessitatibus natus ab nobis
            adipisci sapiente.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c, index) => (
              <Link className="link" to={`/?cat=${c.name}`}>
                <li className="sidebarListItem" key={index}>
                  {c.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
