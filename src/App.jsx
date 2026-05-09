import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./components/Layout";
import UserGreeting from "./components/UserGreeting";
import MyCounter from "./components/MyCounter";
import MyToggle from "./components/MyToggle";
import UserForm from "./components/UserForm";
import EventExamples from "./components/EventExamples";
import ContactForm from "./components/ContactForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import Stats from "./components/Stats";

function App() {
  const hour = new Date().getHours();
  const today = new Date().toLocaleDateString();
  const user = { name: "Guest", isLoggedIn: true };
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 },
    { id: 3, title: "Third Post", likes: 0 },
  ]);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <>
      <Layout>
        <UserGreeting user={user} />
        <h1>Dolla Grace</h1>
        <Sidebar />
        <p>
          I am a passionate software developer with a love for creating
          innovative solutions.{" "}
        </p>
        <p>
          With a background in web development, I enjoy building user-friendly
          applications that make a difference.{" "}
        </p>
        <p>
          My expertise includes JavaScript, React, and Vite, and I'm always
          eager to learn new technologies and improve my skills.
        </p>
        {/* Current Date */}
        <p>Today is {today}.</p>
        {/* Conditional Greeting based on time of day */}
        <p>
          {hour < 12
            ? "Good morning!"
            : hour < 18
              ? "Good afternoon!"
              : "Good evening!"}
        </p>
        <h1>Home Page</h1>
        <Card title="Welcome">
          <p>This is the card content!</p>
          <button>Click Me</button>
        </Card>
        <Stats totalPosts={posts.length} totalLikes={totalLikes} />
        <PostList posts={posts} onLike={handleLike} />
        <MyCounter />
        <MyToggle />
        <UserForm />
        <EventExamples />
        <ContactForm />
        <TodoList />
        {/* Using Button with different props */}
        <Button text="Submit" variant="primary" />
        <Button text="Cancel" variant="secondary" />
        <Button text="Delete" variant="danger" />
        <Button /> {/* Uses all defaults */}
      </Layout>
    </>
  );
}

export default App;
