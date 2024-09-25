// src/components/ItemList.js
import React from 'react';
import Item from './Item';

function ItemList({ items, onUpdateItem, onDeleteItem }) {
    return (
        <div style={styles.listContainer}>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onUpdateItem={onUpdateItem}
                    onDeleteItem={onDeleteItem}
                />
            ))}
        </div>
    );
}

const styles = {
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

export default ItemList;
