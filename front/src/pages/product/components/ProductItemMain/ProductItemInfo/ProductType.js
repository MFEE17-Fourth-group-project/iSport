import React, { useState, useEffect } from 'react';
import ProductTypeValue from './ProductTypeValue';

function ProductType(props) {
    const { typeName, typeValue } = props;
    console.log(typeName, typeValue);
    return (
        <>
            <div className="py-1 flex items-start">
                {typeName}：
                <div className="grid grid-cols-3 gap-2">
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
            </div>
        </>
    );
}

export default ProductType;
