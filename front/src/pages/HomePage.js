import { useEffect, useState } from 'react';
import BannerSection from './homeComponents/BannerSection';
import ProductSection from './homeComponents/ProductSection';
import VideoSection from './homeComponents/VideoSection';
import ArticleSection from './homeComponents/ArticleSection';
import GymSection from './homeComponents/GymSection';

const HomePage = () => {
    return (
        <div className="flex mr-auto">
            <div className="max-w-screen-2xl">

                {/* Banner Section */}
                <div className="h-175 w-full">
                    <BannerSection />
                </div>

                {/* Video Section */}
                <section className="h-208 flex mt-7">
                    <VideoSection />
                </section>

                {/* Product Section */}
                <section className="h-208 flex mt-7 bg-gray-900">
                    <ProductSection />
                </section>

                {/* Article Section */}
                <section className="h-208 flex mt-7">
                    <ArticleSection />
                </section>

                {/* Gym Section */}
                <section className="h-208 flex bg-gray-900">
                    <GymSection />
                </section>

            </div>
        </div>
    );
};

export default HomePage;
