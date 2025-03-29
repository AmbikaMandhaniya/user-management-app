import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/api';
import UserCard from './UserCard';
import Pagination from '../UI/Pagination';
import Spinner from '../UI/Spinner';
import Alert from '../UI/Alert';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const data = await getUsers(page);
      setUsers(data.data);
      setFilteredUsers(data.data);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(
        user => 
          user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchTerm, users]);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteUser(id);
      
      // Remove user from state
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
      setFilteredUsers(
        filteredUsers.filter(user => user.id !== id)
      );
      
      showNotification('success', 'User deleted successfully!');
    } catch (err) {
      showNotification('error', 'Failed to delete user. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">User Management</h1>
      
      {notification.show && (
        <Alert type={notification.type} message={notification.message} />
      )}
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      {loading && <Spinner />}
      
      {error && <Alert type="error" message={error} />}
      
      {!loading && !error && (
        <>
          {filteredUsers.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No users found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUsers.map(user => (
                <UserCard 
                  key={user.id} 
                  user={user} 
                  onDelete={handleDelete} 
                />
              ))}
            </div>
          )}
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      )}
    </div>
  );
};

export default UserList;