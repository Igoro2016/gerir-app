// src/components/Item.js
import React, { useState } from 'react';

function Item({ item, onUpdateItem, onDeleteItem }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);

    const handleUpdate = () => {
        if (!newName.trim()) return;
        onUpdateItem(item.id, { name: newName });
        setIsEditing(false);
    };

    return (
        <div style={styles.itemContainer}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={handleUpdate} style={styles.button}>Salvar</button>
                    <button onClick={() => setIsEditing(false)} style={styles.button}>Cancelar</button>
                </>
            ) : (
                <>
                    <span>{item.name}</span>
                    <button onClick={() => setIsEditing(true)} style={styles.button}>Editar</button>
                    <button onClick={() => onDeleteItem(item.id)} style={styles.button}>Remover</button>
                </>
            )}
        </div>
    );
}

const styles = {
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0'
    },
    input: {
        padding: '5px',
        fontSize: '16px',
        marginRight: '10px'
    },
    button: {
        marginLeft: '5px',
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px'
    }
};

export default Item;
