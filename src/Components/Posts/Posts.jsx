import Post from "../Post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((value, index) => (
        <Post key={index} post={value} />
      ))}
    </div>
  );
}
// export default Posts;
