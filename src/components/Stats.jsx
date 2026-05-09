function Stats({ totalPosts, totalLikes }) {
  return (
    <div className="stats">
      <span>{totalPosts} posts</span>
      <span>{totalLikes} total likes</span>
    </div>
  );
}

export default Stats;
