import React, { useState } from 'react';
// import spareParts from './spareParts'; // spareParts has View and Model arrays.

const SpareParts = () => {
    const [selectedPart, setSelectedPart] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [message, setMessage] = useState('');

    const handlePartChange = (event) => {
        setSelectedPart(event.target.value);
        setMessage('See');
    };

    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
        setMessage('');
    };

    const handlePurchase = () => {
        if (selectedPart && selectedModel) {
            setMessage(`You have purchased ${selectedPart} for your ${selectedModel}.`);
        } else {
            setMessage('Kindly choose a part and a model.');
        }
    };

    return (
        <div>
            <h1>Spare Parts</h1>
            <div>
                <label>
                    Select Part:
                    <select value={selectedPart} onChange={handlePartChange}>
                        <option value="">--Select a part--</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Select Model:
                    <select value={selectedModel} onChange={handleModelChange}>
                        <option value="">--Select a model--</option>
                    </select>
                </label>
            </div>
            <button onClick={handlePurchase}>Purchase</button>
            {/* Conditional rendering for message */}
            {message && <p>{message}</p>}
        </div>
    );
};

export default SpareParts;
