function UserGreeting({ user }) {
  // Pattern: && operator (show if true)
  // If user exists,showwelcome. If not, show login.
  return (
    <div>
      {user && <p>Welcome back, {user.name}!</p>}
      {!user && <p>Please log in.</p>}
    </div>
  );
}

export default UserGreeting;
