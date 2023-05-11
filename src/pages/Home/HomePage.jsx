import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import axios from "axios";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/");
      // console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="homePage">
        <Header />
        <div className="home">
          {/* pass posts as props */}
          <Posts posts={posts} />
          <SideBar />
        </div>
      </div>
    </>
  );
}
export default HomePage;
