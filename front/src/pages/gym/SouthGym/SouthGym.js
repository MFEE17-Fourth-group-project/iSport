import React, { useState } from 'react';
import SouthGymList from './components/SouthGymList';

const SouthGyms = [
    {
        name: '高雄運動中心',
        phone: '3333-3333',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '高雄市中山區中山北路二段44巷2號',
        latitude: '11.0548895',
        longitude: '111.5192045',
    },
    {
        name: '高雄運動中心',
        phone: '3333-3333',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '高雄市中山區中山北路二段44巷2號',
        latitude: '22.0548895',
        longitude: '222.5192045',
    },
    {
        name: '高雄運動中心',
        phone: '3333-3333',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '高雄市中山區中山北路二段44巷2號',
        latitude: '33.0548895',
        longitude: '333.5192045',
    },
    {
        name: '高雄運動中心',
        phone: '3333-3333',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '高雄市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
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
