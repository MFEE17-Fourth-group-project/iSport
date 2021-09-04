import React, { useState } from 'react';
import MidthGymList from './components/MidthGymList';

const MidthGyms = [
    {
        name: '台南運動中心',
        phone: '2222-2222',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台南市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台南運動中心',
        phone: '2222-2222',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台南市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台南運動中心',
        phone: '2222-2222',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台南市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台南運動中心',
        phone: '2222-2222',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '台南市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
];
function MidthGym() {
    return (
        <>
            <div>
                <MidthGymList Gyms={MidthGyms} />
            </div>
        </>
    );
}

export default MidthGym;
