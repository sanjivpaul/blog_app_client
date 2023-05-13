import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  // path will return the id of the post and we can fetch the post by using _id
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      // console.log(res.data.post);
      setPost(res.data.post);
    };
    getPost();
  }, [path]);
  // when ever path is changes fire this useEffect
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img
              // "https://source.unsplash.com/1600x900/?library"
              src={post.photo}
              alt=""
              className="singlePostImg"
            />
          )}
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author:
              <Link className="link" to={`/?user=${post.username}`}>
                <b>{post.username}</b>
              </Link>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          <p className="singlePostDesc">{post.desc}</p>
        </div>
      </div>
    </>
  );
}
