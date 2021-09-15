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
function MidthGym(props) {
    const { pData2, setPData2 } = props;
    return (
        <>
            <div>
                <MidthGymList Gyms={MidthGyms} setPData2={setPData2} />
            </div>
        </>
    );
}

export default MidthGym;
