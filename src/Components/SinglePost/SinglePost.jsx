import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../../Context/context";

export default function SinglePost() {
  const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  // path will return the id of the post and we can fetch the post by using _id
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  // this states are for edit posts
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      // console.log(res.data.post);
      setPost(res.data.post);
      setTitle(res.data.post.title);
      setDesc(res.data.post.desc);
    };
    getPost();
  }, [path]);
  // when ever path is changes fire this useEffect

  // delete function
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/api/posts/" + path, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/api/posts/" + path, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setEditMode(false);
    } catch (error) {}
  };
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img
              // "https://source.unsplash.com/1600x900/?library"
              src={publicFolder + post.photo}
              alt=""
              className="singlePostImg"
            />
          )}

          {
            // if its edit mode take input
            editMode ? (
              <input
                type="text"
                value={title}
                className="singlePostTitleEditModeInput"
                onChange={(e) => setTitle(e.target.value)}
                // autoFocus
              />
            ) : (
              // if its not update mode write this h1 text
              <h1 className="singlePostTitle">
                {title}
                {/* if post username is same as login username then edit options are visible */}
                {post.username === user?.username && (
                  <div className="singlePostEdit">
                    <i
                      className="singlePostIcon fa-regular fa-pen-to-square"
                      onClick={() => setEditMode(true)}
                    ></i>
                    <i
                      className="singlePostIcon fa-regular fa-trash-can"
                      onClick={handleDelete}
                    ></i>
                  </div>
                )}
              </h1>
            )
          }
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
          {editMode ? (
            <textarea
              className="singlePostDescEditModeInput"
              value={desc}
              // autoFocus
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}
          {/* if edit mode then show update button */}
          {editMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
}
