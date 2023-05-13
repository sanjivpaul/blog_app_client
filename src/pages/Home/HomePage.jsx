import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  // console.log(location.search)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/"+search);
      // console.log(res);
      setPosts(res.data.posts);
    };
    fetchPosts();
  }, [search]);
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
// export default HomePage;
