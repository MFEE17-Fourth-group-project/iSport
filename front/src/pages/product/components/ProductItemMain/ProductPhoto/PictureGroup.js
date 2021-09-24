import React, { useState, useEffect } from 'react';

function PictureGroup(props) {
    const { imgName, id } = props;
    console.log(imgName);
    const photoUrl = require('../../../../../images/product/' + imgName);
    return (
        <>
            <figure className="mb-2 sm:mr-2 xl:mr-0 lx:mb-2 sm:w-20 sm:h-20 xl:w-28 xl:h-28 rounded-md overflow-hidden flex-shrink-0">
                <div></div>
                <img
                    src={photoUrl.default}
                    alt="product"
                    className="w-full h-full object-cover object-center"
                />
            </figure>
        </>
    );
}

export default PictureGroup;
