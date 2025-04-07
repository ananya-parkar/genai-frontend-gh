import React from 'react';
import './Modal.css'; // Optional: for styling

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Alert Information</h2>
                <p><strong>Alert Name:</strong> System Overload</p>
                <p><strong>Alert ID:</strong> 12345</p>
                <p><strong>Created Timestamp:</strong> 2025-03-20 12:39 PM IST</p>
                <p><strong>Solution Steps:</strong></p>
                <ul>
                    <li>Check server load.</li>
                    <li>Restart services if necessary.</li>
                    <li>Notify the admin.</li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;
