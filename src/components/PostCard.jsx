function PostCard({ post, onLike, onDelete }) {
  return (
    <div className="post-meta">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <strong>Author:</strong> {post.author || "Anonymous"}
      </p>
      <p>
        <strong>Date:</strong> {post.date || new Date().toLocaleDateString()}
      </p>
      <p>
        <strong>Likes:</strong> {post.likes}
      </p>
      <button onClick={onLike}>Like</button>
      <button onClick={onDelete} style={{ marginLeft: "10px", color: "red" }}>
        Delete
      </button>
    </div>
  );
}

export default PostCard;
