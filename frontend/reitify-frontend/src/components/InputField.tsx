import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default InputField;
