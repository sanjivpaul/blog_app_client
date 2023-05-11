import Post from "../Post/Post";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {/* {posts.map((p) => (
        // passing p as a props of post
        <Post post={p} />
      ))}; */}

      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
// export default Posts;
