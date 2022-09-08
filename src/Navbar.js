const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dogo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            backgroundColor: "pink",
            color: "darkpink",
            borderRadius: "10px"
          }}
        >
          Create new
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
