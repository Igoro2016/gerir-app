// src/components/Header.js
import React from 'react';

function Header({ title }) {
    return (
        <header style={styles.header}>
            <h1>{title}</h1>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
        textAlign: 'center'
    }
};

export default Header;
