import React, { useState } from 'react';
import EasthGymList from './components/EasthGymList';

const EasthGyms = [
    {
        name: '台東運動中心',
        phone: '4444-4444',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台東市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台東運動中心',
        phone: '4444-4444',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台東市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台東運動中心',
        phone: '4444-4444',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台東市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台東運動中心',
        phone: '4444-4444',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台東市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
];
function EasthGym() {
    return (
        <>
            <div>
                <EasthGymList Gyms={EasthGyms} />
            </div>
        </>
    );
}

export default EasthGym;
