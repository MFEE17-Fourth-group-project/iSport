import React, { useState, useEffect } from 'react';

function ProductTypeValue(props) {
    const { typeValue } = props;
    return (
        <div className="px-3 py-0 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 hover:border-transparent cursor-pointer">
            {typeValue}
        </div>
    );
}

export default ProductTypeValue;
