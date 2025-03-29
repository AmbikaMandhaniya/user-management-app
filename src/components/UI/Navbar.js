import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          User Management
        </Link>
        <button
          onClick={logout}
          className="px-4 py-2 bg-white text-indigo-600 rounded hover:bg-gray-100 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;