import HomePage1 from './../../images/homepage/homepage-1.jpg';
import HomePage2 from './../../images/homepage/homepage-2.jpg';
import HomePage3 from './../../images/homepage/homepage-3.jpg';
import HomePage4 from './../../images/homepage/homepage-4.jpg';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const BannerSection = () => {
    const imageData = [
        {
            id: 1,
            imageSource: HomePage1
        },
        {
            id: 2,
            imageSource: HomePage2
        },
        {
            id: 3,
            imageSource: HomePage3
        },
        {
            id: 4,
            imageSource: HomePage4
        },
    ];

    const [current, setCurrent] = useState(0);
    const length = imageData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const lastIndex = images.length - 1;
    //     if (index < 0) {
    //         setIndex(lastIndex);
    //     }
    //     if (index > lastIndex) {
    //         setIndex(0);
    //     }
    // }, [index, images]);

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setIndex(index + 1);
    //     }, 5000);
    //     return () => {
    //         clearInterval(slider);
    //     };
    // }, [index]);

    return (
        <div className="relative h-full w-full">
            {imageData.map((image, index) => {

                // let position = 'nextSlide';
                // if (imageIndex === index) {
                //     position = 'activeSlide';
                // }
                // if (imageIndex === index - 1 || (index === 0 && images.length - 1)) {
                //     position = 'lastSlide';
                // }
                // console.log(id, imageSource);

                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={image.imageSource} className="h-208 w-full object-cover" />
                        )}
                    </div>
                );
            })}

            <BsFillCaretLeftFill
                className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 transform
                -translate-y-1/2 cursor-pointer"
                onClick={prevSlide}
            />
            <BsFillCaretRightFill
                className="text-yellow-400 w-16 h-16 absolute inset-y-1/2 right-0 
                transform -translate-y-1/2 cursor-pointer"
                onClick={nextSlide}
            />
            <div className="absolute bottom-40 left-40">
                <h1 className="font-normal text-5xl text-white tracking-wide leading-snug mb-4">
                    提供健身資訊分享平台與眾多
                    <br />
                    專業健身影片、文章分享、商城。
                </h1>
                <button className="btn-yellow">立即加入</button>
            </div>
        </div>
    );
};

export default BannerSection;
