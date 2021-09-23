import React, { useState } from 'react';
import SouthGymList from './components/SouthGymList';

const SouthGyms = [
    {
        name: '高雄市鳳山運動中心',
        phone: '(07)790-2288',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '830高雄市鳳山區光華路68號',
        latitude: '22.626029100180858',
        longitude: '120.35393548581638',
    },
    {
        name: '青少年文化體育活動中心',
        phone: '(08)736-258',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '812高雄市小港區學府路115號',
        latitude: '22.56646349031065',
        longitude: '120.35895019887515',
    },
    {
        name: '屏東市國民運動中心',
        phone: '(08)737-1388',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '900屏東縣屏東市勝利東路50號',
        latitude: '22.67760067648531',
        longitude: '120.49853954149451',
    },
    {
        name: '屏東縣立體育館',
        phone: '(08)736-2589',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '900屏東縣屏東市勝利路9號',
        latitude: '22.677719470805414',
        longitude: '120.49388490101751',
    },
];
function SouthGym(props) {
    // 專門給子女B設定資料回來的callback
    // const [pData2, setPData2] = useState('');
    const { pData2, setPData2 } = props;
    return (
        <>
            <div>
                <SouthGymList Gyms={SouthGyms} setPData2={setPData2} />
            </div>
        </>
    );
}

export default SouthGym;
