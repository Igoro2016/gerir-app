// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/items';
const EXTRA_DATA_URL = 'http://localhost:3001/extra-data';

export const getItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addItem = async (item) => {
    const response = await axios.post(API_URL, item);
    return response.data;
};

export const updateItem = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

export const deleteItem = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const getApiData = async () => {
    const response = await axios.get(EXTRA_DATA_URL);
    return response.data;
};
