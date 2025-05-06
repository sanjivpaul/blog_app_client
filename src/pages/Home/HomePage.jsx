import { useEffect, useState } from "react";
// import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
// import SideBar from "../../Components/SideBar/SideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./HomePage.css";
import NewSidebar from "../../Components/SideBar/NewSidebar";
import TopTabBar from "../../Components/TopTabBar/TopTabBar";
import dummyPosts from "../../dummy/DummyPost";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location.search)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5001/api/posts/" + search);
      // console.log(res);
      setPosts(res.data.posts);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div className="homePage">
        {/* <Header /> */}
        <TopTabBar />

        <div className="home">
          {/* pass posts as props */}

          <Posts posts={dummyPosts} />
          {/* <SideBar /> */}
          <NewSidebar />
        </div>
      </div>
    </>
  );
}
// export default HomePage;
