import React from 'react';
import { useEffect, useState } from 'react';
import BannerSection from './homeComponents/BannerSection';
import ProductSection from './homeComponents/ProductSection';
import VideoSection from './homeComponents/VideoSection';
import ArticleSection from './homeComponents/ArticleSection';
import GymSection from './homeComponents/GymSection';

const HomePage = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            {/* Banner Section */}
            <div className="h-175 bg-gray-900">
                <BannerSection />
            </div>

            {/* Video Section */}
            <section className="h-208 flex bg-gray-800">
                <VideoSection />
            </section>

            {/* Product Section */}
            <section className="h-208 flex bg-gray-900">
                <ProductSection />
            </section>

            {/* Article Section */}
            <section className="flex bg-gray-800">
                <ArticleSection />
            </section>

            {/* Gym Section */}
            <section className="h-208 flex bg-gray-900">
                <GymSection />
            </section>
        </div>
    );
};

export default HomePage;
