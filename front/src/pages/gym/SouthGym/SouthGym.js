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
function SouthGym() {
    return (
        <>
            <div>
                <SouthGymList Gyms={SouthGyms} />
            </div>
        </>
    );
}

export default SouthGym;
