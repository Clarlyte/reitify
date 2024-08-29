import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300'
      : 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300';

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
};

export default Button;
