import React from 'react';
import HomeRouter from './pages/HomeRouter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './utils/config';
import { AuthContext } from './context/auth';

function App() {
    const [member, setMember] = useState(null);
    // const [token, setToken] = useState(null);

    const setAuthMember = (m) => {
        setMember(m);
    };

    // //取得jwt token用
    // const setJWTToken = (token) => {
    //     localStorage.setItem('token', token);
    //     setToken(token);
    // };

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     setToken(token);
    //     //每次驗證都會帶token
    //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    //     const getMember = async () => {
    //         try {
    //             let result = await axios.get(
    //                 `${API_URL}/users/`
    //                 // { withCredentials: true,}
    //             );
    //             setMember(result.data);
    //         } catch (e) {}
    //     };
    //     getMember();
    // }, []);

    useEffect(() => {
        // 每次重新整理或開啟頁面時，都去確認一下是否在已經登入的狀態。
        const getMember = async () => {
            try {
                let result = await axios.get(`${API_URL}/users/resect`, {
                    withCredentials: true,
                });
                setMember(result.data);
            } catch (e) {}
        };
        getMember();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                member,
                setMember: setAuthMember,
                // token,
                // setToken: setJWTToken,
            }}
        >
            <div className="bg-gray-800 min-h-screen">
                <HomeRouter />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
