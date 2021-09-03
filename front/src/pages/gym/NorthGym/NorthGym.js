import React, { useState } from 'react';
import NorthGymList from './components/NorthGymList';

const NorthGyms = [
    {
        name: '台北運動中心',
        phone: '1111-1111',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '臺北市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台北運動中心',
        phone: '1111-1111',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '臺北市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台北運動中心',
        phone: '1111-1111',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '臺北市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
    {
        name: '台北運動中心',
        phone: '1111-1111',
        image: 'https://i.imgur.com/1j5uLaq.jpg',
        address: '臺北市中山區中山北路二段44巷2號',
        latitude: '25.0548895',
        longitude: '121.5192045',
    },
];
function NorthGym() {
    return (
        <>
            <div>
                <NorthGymList Gyms={NorthGyms} />
            </div>
        </>
    );
}

export default NorthGym;
