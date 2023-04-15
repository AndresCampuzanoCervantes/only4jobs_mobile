import React, { useEffect, createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    const validStorage = async () => {
        try {
            const miSesion = await AsyncStorage.getItem('sesion');
            setUser(JSON.parse(miSesion));
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
        }
    };

    const setSession = async (data) => {
        await AsyncStorage.setItem('sesion', JSON.stringify(data));
        setUser(data);
    };

    useEffect(() => {
        validStorage();
    }, []);

    return (
        <UserContext.Provider value={{ user, setSession }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
