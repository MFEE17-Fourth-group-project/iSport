import React from 'react';
import product from '../../../../images/product/1002-3.png';

function OrderRecord(props) {
    const { order_no, paytype, delivery, status } = props;

    return (
        <>
            <div className="mb-8 p-4 rounded-lg bg-gray-700 border-r-8 border-yellow-400 flex">
                <figure className="mr-4 sm:w-32 sm:h-32 w-1/3 overflow-hidden rounded-lg self-center">
                    <img
                        src={product}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </figure>
                <div className="text-sm py-2  flex-grow grid sm:grid-flow-col sm:grid-cols-3 sm:grid-rows-4 gap-y-px">
                    <p>
                        訂單編號：<span>{order_no}</span>
                    </p>
                    <p>
                        購買時間：
                        <span>2021-08-08</span>
                    </p>
                    <p>
                        商品名稱：<span>居家健身組</span>
                    </p>
                    <p>
                        訂單總額：<span>250元</span>
                    </p>
                    <p>
                        購買數量：<span>1</span>
                    </p>
                    <p>
                        商品顏色：<span>紅色</span>
                    </p>
                    <p>
                        商品尺寸：<span>無</span>
                    </p>
                    <p>
                        付款方式：<span>{paytype}</span>
                    </p>
                    <p>
                        運送方式：<span>{delivery}</span>
                    </p>
                    <p>
                        訂單狀態：
                        <span>{status}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default OrderRecord;
