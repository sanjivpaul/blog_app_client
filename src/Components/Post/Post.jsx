import { Link } from "react-router-dom";
export default function Post({ post }) {
  // access local file from backend
  const publicFolder = "http://localhost:5000/images/";
  return (
    <>
      <div className="post">
        {post.photo && (
          <img
            // "https://source.unsplash.com/1600x900/?cars"
            className="postImg"
            src={publicFolder + post.photo}
            alt=""
          />
        )}
        <div className="postInfo">
          <div className="postCategories">
            {post.categories.map((c, index) => (
              <span className="postCategorie" key={index}>
                {c}
              </span>
            ))}
          </div>
          <Link className="link" to={`/post/${post._id}`}>
            <span className="postTitle">{post.title}.</span>
          </Link>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </>
  );
}
// export default Post;
