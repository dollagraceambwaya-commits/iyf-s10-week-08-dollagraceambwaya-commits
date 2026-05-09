import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>About SkillSync</h2>
      <p>
        A platform for connecting people through skills, learning, and
        opportunities.
      </p>

      <h3>Popular Posts</h3>
      <ul>
        <li>Top skills to learn in 2026</li>
        <li>How to Build a Strong Professional Network</li>
        <li>How to stay consistent while learning programming</li>
        <li>How do I land my first tech job?</li>
        <li>My code is not working — need help</li>
      </ul>

      <h3>Categories</h3>
      <ul>
        <li>Trending Skills</li>
        <li>Opportunities</li>
        <li>Learning Resources</li>
        <li>Discussions</li>
        <li>Help Posts</li>
      </ul>

      <h3>Quick links</h3>
      <ul>
        <li>My Profile</li>
        <li>Settings</li>
        <li>Help Center</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
