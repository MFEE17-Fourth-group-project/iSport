import React, { useState } from 'react';
import GymItem from './SouthGymItem';
// import GymMap from '../../GymMap';
function GymList(props) {
    const { Gyms } = props;
    // 專門給子女B設定資料回來的callback
    const [pData2, setPData2] = useState('');
    return (
        <div className="col-md-8 cart">
            {Gyms.map((gym, index) => (
                <GymItem
                    key={index}
                    phone={gym.phone}
                    name={gym.name}
                    image={gym.image}
                    address={gym.address}
                    latitude={gym.latitude}
                    longitude={gym.longitude}
                    setPData2={setPData2}
                />
            ))}
        </div>
    );
}

export default GymList;
