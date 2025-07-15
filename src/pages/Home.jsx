// src/pages/Home.jsx
const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Welcome {user?.name || 'Guest'}!</h2>
      <p>You are logged in as: <strong>{user?.role || 'Unknown'}</strong></p>
    </div>
  );
};

export default Home;
