import React, { useState } from 'react';
import Modal from './components/modal';
import './App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="app-container">
            <h1>Welcome to the Alert Resolution</h1>
            <button onClick={openModal}>Show Alert Info</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default App;
