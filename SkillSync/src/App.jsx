import { useState } from "react";
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";
import Sidebar from "../src/components/Layout/Sidebar";
import PostList from "../src/components/Post/PostList";
import CreatePost from "../src/components/Post/CreatePost";

function App() {
  const [posts, setPosts] = useState([
    {
      title: "Welcome to SkillSync",
      content: "Your go-to platform for sharing and discovering skills.",
      author: "Dolla Grace",
      likes: 0,
    },
  ]);

  const addPost = (post) => setPosts([...posts, post]);

  // Toggle like
  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  // Delete post
  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <CreatePost onAddPost={addPost} />
        <PostList
          posts={posts}
          onToggleLike={toggleLike}
          onDeletePost={deletePost}
        />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
