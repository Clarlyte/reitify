import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const baseStyles = 'p-4 mb-4 rounded';
  const typeStyles =
    type === 'success'
      ? 'bg-green-100 text-green-700'
      : type === 'error'
      ? 'bg-red-100 text-red-700'
      : 'bg-blue-100 text-blue-700';

  return <div className={`${baseStyles} ${typeStyles}`}>{message}</div>;
};

export default Alert;
