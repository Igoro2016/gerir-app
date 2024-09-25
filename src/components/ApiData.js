// src/components/ApiData.js
import React, { useEffect, useState } from 'react';
import { getApiData } from '../api';

function ApiData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const apiData = await getApiData();
                setData(apiData);
            } catch (error) {
                console.error("Erro ao buscar dados adicionais:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            <h2>Dados Adicionais da API</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.info}</li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        marginTop: '20px',
        textAlign: 'left'
    }
};

export default ApiData;
