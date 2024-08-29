import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
