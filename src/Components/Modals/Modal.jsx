// components/Modal.js
import React from 'react';
import './Modal.css'; // Styles including blur effect

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </>
  );
};

export default Modal;
