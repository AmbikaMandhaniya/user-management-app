import React from 'react';

const Alert = ({ type, message }) => {
  const bgColor = type === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 
                 type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 
                 'bg-blue-100 border-blue-400 text-blue-700';

  return (
    <div className={`p-4 mb-4 rounded border ${bgColor}`} role="alert">
      <p>{message}</p>
    </div>
  );
};

export default Alert;
