import React from 'react';
import './CustomModal.css';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button className="modal-close-button" onClick={onRequestClose}>Close</button>
            </div>
        </div>
    );
};

export default CustomModal;