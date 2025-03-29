import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) {
      onDelete(user.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex flex-col items-center">
        <img 
          src={user.avatar} 
          alt={`${user.first_name} ${user.last_name}`} 
          className="w-32 h-32 rounded-full object-cover"
        />
        <h3 className="mt-4 text-xl font-semibold text-gray-800">
          {user.first_name} {user.last_name}
        </h3>
        <p className="text-gray-600">{user.email}</p>
        
        <div className="mt-4 flex space-x-3 w-full">
          <Link 
            to={`/edit/${user.id}`}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded text-center hover:bg-indigo-700 transition-colors"
          >
            Edit
          </Link>
          <button 
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;