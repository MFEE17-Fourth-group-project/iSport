import React from 'react';
import { useEffect, useState } from 'react';
import BannerSection from './homeComponents/BannerSection';
import ProductSection from './homeComponents/ProductSection';
import VideoSection from './homeComponents/VideoSection';
import ArticleSection from './homeComponents/ArticleSection';
import GymSection from './homeComponents/GymSection';
import AOS from 'aos';
import Sport1 from '../images/homepage/1.png';
import Sport2 from '../images/homepage/2.png';
import Sport3 from '../images/homepage/3.png';
import '../../node_modules/aos/dist/aos.css';
// const HomePage = () => {
class HomePage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        AOS.init({
            duration: 500,
            easing: 'ease-out-back',
            delay: 0,
        });
    }
    render() {
        return (
            <div className="max-w-screen-2xl mx-auto">
                {/* Banner Section */}
                <div className="max-h-full bg-gray-900">
                    <BannerSection />
                </div>

                {/* Video Section */}
                <section className="h-full flex bg-gray-800 ">
                    <VideoSection />
                </section>

                {/* Product Section */}
                <section
                    className="max-h-full flex bg-gray-900 relative"
                    id="trigger-right"
                >
                    <ProductSection />
                    <img
                        className="absolute z-30 w-1/4 -top-64 -left-72"
                        src={Sport1}
                        alt=""
                        data-aos="fade-right"
                        data-aos-anchor="#trigger-right"
                        data-aos-anchor-placement="top-center"
                    />
                </section>

                {/* Article Section */}
                <section
                    className="max-h-full flex bg-gray-800 relative"
                    id="trigger-left"
                >
                    <ArticleSection />
                    <img
                        className="absolute z-30 w-1/2 -top-72 -right-96"
                        src={Sport3}
                        alt=""
                        data-aos="fade-left"
                        data-aos-anchor="#trigger-left"
                        data-aos-anchor-placement="top-center"
                    />
                </section>

                {/* Gym Section */}
                <section
                    className="max-h-full flex bg-gray-900  relative"
                    id="trigger"
                >
                    <GymSection />
                    <img
                        className="absolute z-30 w-1/2 -top-48 -left-72"
                        src={Sport2}
                        alt=""
                        data-aos="fade-right"
                        data-aos-anchor="#trigger"
                        data-aos-anchor-placement="top-center"
                    />
                </section>
            </div>
        );
    }
}

export default HomePage;
