'use client'
import React, { createContext, useEffect, useState } from 'react';
import {Order} from 'src/types/apps/order.ts';

import axios from '../../utils/axios';

interface OrderContextType {
    orders?: Order[];
    loading?: boolean;
    error?: Error | null;
    deleteEmail?: () => {},
    addOrder?: (newOrder: Order) => void;
    updateOrder?: (updated: Order) => void;
}

export const AdminOrderContext = createContext<OrderContextType>({});

export const AdminOrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/order/all');
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                // setError(error);
                setLoading(false);
            }
        };

        fetchData().catch(e => console.error(e));
    }, []);

    return (
        <AdminOrderContext.Provider value={{ orders, loading, error }}>
            {children}
        </AdminOrderContext.Provider>
    );
};