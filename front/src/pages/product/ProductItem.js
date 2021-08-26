import React from 'react'

function ProductItem () {
    return (
        <>
        <main>
            {/* 圖片與資訊 */}
            <section>
                {/* 圖片 */}
                <div>
                    {/* 小圖 */}
                    <div></div>
                    {/* 大圖 */}
                    <div></div>
                </div>
                {/* 資訊與加入購物車 */}
                <div>
                    {/* 連結 */}
                    <div>
                        <div>回上一層</div>
                        <div>分享</div>
                    </div>
                    <div>
                        <h1>商品名稱</h1>
                        <div>品名：<span>美金農</span> ｜ 總銷售量：<span>1243</span></div>
                    </div>
                    <div>
                        <h2>規格</h2>
                        <div>顏色：
                            <div>粉</div>
                            <div>灰</div>
                            <div>黑</div>
                        </div>
                        <div>尺寸：
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>
                        <div>
                            <div>
                            貨號：<span>10011031</span>
                            </div>
                            <div>
                            庫存：<span>134</span>
                            </div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 商品簡介 */}
            <section></section>
            {/* 你可能會喜歡 */}
            <section></section>
        </main>
        </>
    )
}


export default ProductItem