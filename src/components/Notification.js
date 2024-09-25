// src/components/Notification.js
import React from 'react';

function Notification({ message, type }) {
    if (!message) return null;

    const getNotificationStyle = () => {
        switch (type) {
            case 'success':
                return { color: 'green', backgroundColor: '#e5ffe5', padding: '10px', borderRadius: '5px', marginBottom: '10px' };
            case 'error':
                return { color: 'red', backgroundColor: '#ffe5e5', padding: '10px', borderRadius: '5px', marginBottom: '10px' };
            default:
                return { color: 'black', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px', marginBottom: '10px' };
        }
    };

    return (
        <div style={getNotificationStyle()}>
            {message}
        </div>
    );
}

export default Notification;
