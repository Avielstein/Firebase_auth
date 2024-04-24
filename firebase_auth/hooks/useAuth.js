import { useState, useEffect } from 'react';
import { auth } from '../APIs/firebase';
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
    const [user, setUser] = useState(null);

    // Monitor authentication state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return { user };
};
export default useAuth;