import React, { useState, useEffect } from 'react';
import ProductTypeValue from './ProductTypeValue';

function ProductType(props) {
    const { typeName, typeValue } = props;
    console.log(typeName, typeValue);
    return (
        <>
            <div className="py-1 flex items-center ">
                {typeName}：
                {typeValue &&
                    typeValue.map((item) => {
                        return (
                            <ProductTypeValue
                                key={item.id}
                                typeValue={item.type_value}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default ProductType;
