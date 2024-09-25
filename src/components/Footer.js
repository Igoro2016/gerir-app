// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2024 - Todos os direitos reservados Igor Gomes.</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    }
};

export default Footer;
