import React from 'react';
import { SiOpenstreetmap } from 'react-icons/si';

function GymItem(props) {
    const { phone, name, image, address, latitude, longitude } = props;
    const LatLng = () => {
        let lat = this.data - lng,
            lng = this.data - lat;
        console.log(lat);
        console.log(lng);
    };
    return (
        <>
            <div className="flex items-center my-2">
                <img className="h-24" src={image} alt="" />
                <div className="text-white mx-3">
                    <h5 className="text-2xl">{name}</h5>
                    <p className="">
                        {phone} <br />
                        {address}
                        <br />
                    </p>
                </div>
                <button
                    className="text-white"
                    data-lng={latitude}
                    data-lat={longitude}
                    onClick={LatLng}
                >
                    <SiOpenstreetmap className="text-5xl" />
                    {latitude}
                    <br />
                    {longitude}
                </button>
            </div>
        </>
    );
}

export default GymItem;
