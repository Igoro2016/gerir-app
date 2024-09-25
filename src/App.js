// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import ItemList from './components/ItemList';
import ApiData from './components/ApiData';
import Notification from './components/Notification';
import { getItems, addItem, updateItem, deleteItem } from './api';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [notification, setNotification] = useState({ message: '', type: '' });

  // Carregar itens da API quando o componente monta
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      setNotification({ message: 'Erro ao carregar itens', type: 'error' });
    }
  };

  const handleAddItem = async (item) => {
    try {
      const newItem = await addItem(item);
      setItems([...items, newItem]);
      setNotification({ message: 'Item adicionado com sucesso!', type: 'success' });
    } catch (error) {
      setNotification({ message: 'Erro ao adicionar item', type: 'error' });
    }
  };

  const handleUpdateItem = async (id, updatedData) => {
    try {
      const updatedItem = await updateItem(id, updatedData);
      setItems(items.map(item => item.id === id ? updatedItem : item));
      setNotification({ message: 'Item atualizado com sucesso!', type: 'success' });
    } catch (error) {
      setNotification({ message: 'Erro ao atualizar item', type: 'error' });
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
      setNotification({ message: 'Item removido com sucesso!', type: 'success' });
    } catch (error) {
      setNotification({ message: 'Erro ao remover item', type: 'error' });
    }
  };

  return (
    <div className="App">
      <Header title="Gerenciamento de Itens" />
      <Notification message={notification.message} type={notification.type} />
      <Form onAddItem={handleAddItem} />
      <ItemList items={items} onUpdateItem={handleUpdateItem} onDeleteItem={handleDeleteItem} />
      <ApiData />
      <Footer />
    </div>
  );
}

export default App;
