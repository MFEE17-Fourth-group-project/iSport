import React from 'react';
import { Link } from 'react-router-dom';
function GymItem(props) {
    const { phone, name, image, address } = props;

    return (
        <>
            <Link to="">
                <div className="flex items-center my-2">
                    <img className="h-24" src={image} alt="" />
                    <div className="text-white">
                        <h5 className="text-2xl">{name}</h5>
                        <p className="">
                            {phone} <br />
                            {address}
                            <br />
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default GymItem;
