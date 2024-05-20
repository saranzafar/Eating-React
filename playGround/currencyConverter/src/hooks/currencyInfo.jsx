import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function CurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/1c9b84114ccc1ef587bdcffb/latest/${currency}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseData = await response.json();
                setData(responseData.conversion_rates);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [currency]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return data;
}

export default CurrencyInfo;
