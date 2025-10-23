import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import Login from "./Login";

function Navbar() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("users");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("users");
      setUser(null);
      toast.success("Logout Successfully! 👋");
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      toast("Logout cancelled.", { icon: "❌" });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleCourseClick = () => {
    if (!user) {
      // If the user is not logged in, redirect them to Home page
      navigate("/");
      toast.error("You must be logged in to access the course.");
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-pink-400 p-4 z-50 shadow-md">
      <div className="max-w-screen-2xl container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="logo.png" alt="Book Store Logo" className="h-12 w-590" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-black font-bold text-lg hover:text-white">Home</Link></li>
          <li><Link to="/About" className="text-black font-bold text-lg hover:text-white">About</Link></li>
          <li>
            <button
              onClick={handleCourseClick}
              className="text-black font-bold text-lg hover:text-white"
            >
              Course
            </button>
          </li>
          <li><Link to="/Authors" className="text-black font-bold text-lg hover:text-white">Authors</Link></li>
        </ul>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Search books..."
            className="px-3 py-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-2 top-1 text-gray-500 hover:text-black">🔍</button>
        </form>

        {/* User Section */}
        <div className="hidden md:flex space-x-3">
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-black font-bold">{user.fullname} 😊</span>
              <button
                onClick={handleLogout}
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-600"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-pink-400 text-center transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col space-y-4 py-4">
          <li><Link to="/" className="text-black font-bold text-lg hover:text-white">Home</Link></li>
          <li><Link to="/About" className="text-black font-bold text-lg hover:text-white">About</Link></li>
          <li>
            <button
              onClick={handleCourseClick}
              className="text-black font-bold text-lg hover:text-white"
            >
              Course
            </button>
          </li>
          <li><Link to="/Authors" className="text-black font-bold text-lg hover:text-white">Authors</Link></li>
          <li>
            <form onSubmit={handleSearch} className="relative mx-4">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-1 rounded-md border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button type="submit" className="absolute right-2 top-1 text-gray-500 hover:text-black">🔍</button>
            </form>
          </li>
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-600"
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-600"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
      <Login />
    </div>
  );
}

export default Navbar;
