const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Murshyne Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: 'Red',
                    borderRadius: '5px',
                }}>New Blog</a>
            </div>
        </nav>
      );
}
 
export default Navbar;
