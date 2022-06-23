import React from 'react';
import HomeRouter from './pages/HomeRouter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, REACT_APP_GOOGLE_ID } from './utils/config';
import { AuthContext } from './context/auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    const [member, setMember] = useState(null);
    const setAuthMember = (m) => {
        setMember(m);
    };

    useEffect(() => {
        // 每次重新整理或開啟頁面時，都去確認一下是否在已經登入的狀態。
        const getMember = async () => {
            try {
                let result = await axios.get(`${API_URL}/users/reset`, {
                    withCredentials: true,
                });
                setMember(result.data);
            } catch (e) { }
        };
        getMember();
    }, []);

    return (
        <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_ID}>
            <AuthContext.Provider
                value={{
                    member,
                    setMember: setAuthMember,
                }}
            >
                <div className="bg-gray-800 min-h-screen">
                    <HomeRouter />
                </div>
            </AuthContext.Provider>
        </GoogleOAuthProvider>
    );
}

export default App;
