// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>Fechar</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
