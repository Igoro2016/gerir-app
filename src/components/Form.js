// src/components/Form.js
import React, { useState } from 'react';

function Form({ onAddItem }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        onAddItem({ name: inputValue });
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Novo item"
                style={styles.input}
            />
            <button type="submit" style={styles.button}>Adicionar</button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '60%',
        marginRight: '10px'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px'
    }
};

export default Form;
