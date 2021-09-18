import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// GLOBAL
import HomePage from './HomePage';
import Gym from './gym/Gym';
import Nav from '../global/Nav';
import Footer from '../global/Footer';
import MobileAside from '../global/MobileAside';

// USER
import User from './user/User';
import SignUp from './user/sign/SignUp';
import SignIn from './user/sign/SignIn';
import SearchPassword from './user/sign/SearchPassword';
import CustomerService from './user/sign/CustomerService';

// ARTICLE
import Articles from './article/Article';
import ArticleId from './article/ArticleId';
import ArticleAdd from './user/articles/ArticleAdd';
import ArticleMyart from './user/articles/ArticleMyart';
import ArticleCollect from './user/articles/ArticleCollect';
import ArticleCategory from './article/ArticleCategory';

// VIDEO
import Video from './video/Video';
import VideoId from './video/VideoId';
import VideoCollection from './user/videos/VideoCollection';
import WatchLater from './user/videos/WatchLater';

// PRODUCT
import Product from './product/Product';
import ProductItem from './product/components/ProductItem'; //改路徑

// CART, ORDER
import Cart from './user/cart/Cart';
import Checkout from './user/cart/Checkout';
import Checkout2 from './user/cart/Checkout2';
import Finished from './user/cart/Finished';
import TradingRecord from './user/cart/TradingRecord';
import FavoriteProduct from './user/cart/FavoriteProduct.js';

// import Aside from '../global/Aside';

function HomeRouter() {
    const [counts, setCounts] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const showMobileAside = () => {
        setIsOpen(true);
    };

    const hideMobileAside = () => {
        setIsOpen(false);
    };

    // ******************** 手機側欄隨瀏覽器調整隱藏 *****************
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(false);
                console.log('i resizeeed');
            }
        };

        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });

    return (
        <Router>
            <>
                <Nav showMobileAside={showMobileAside} />
                <MobileAside
                    isOpen={isOpen}
                    showMobileAside={showMobileAside}
                    hideMobileAside={hideMobileAside}
                />
                <Switch>
                    <Route path="/SearchPassword">
                        <SearchPassword />
                    </Route>
                    <Route path="/user/CustomerService">
                        <CustomerService />
                    </Route>
                    <Route path="/user/cart/TradingRecord">
                        <TradingRecord />
                    </Route>
                    <Route path="/user/cart/favorite">
                        <FavoriteProduct />
                    </Route>
                    <Route path="/user/cart">
                        <Cart counts={counts} setCounts={setCounts} />
                    </Route>
                    {/* <Route path="/ProductCategory">
                        <ProductCategory />
                    </Route> */}
                    <Route path="/product/item">
                        <ProductItem />
                    </Route>
                    <Route path="/products/:category?">
                        <Product />
                    </Route>
                    <Route path="/gym">
                        <Gym />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/ArticleCategory">
                        <ArticleCategory />
                    </Route>
                    <Route path="/ArticleId/:id?">
                        <ArticleId />
                    </Route>
                    <Route path="/user/ArticleCollect">
                        <ArticleCollect />
                    </Route>
                    <Route path="/user/ArticleMyart">
                        <ArticleMyart />
                    </Route>
                    <Route path="/user/ArticleAdd">
                        <ArticleAdd />
                    </Route>
                    <Route path="/video/:videoId">
                        <VideoId />
                    </Route>
                    <Route path="/user/videoCollection">
                        <VideoCollection />
                    </Route>
                    <Route path="/user/watchLater">
                        <WatchLater />
                    </Route>
                    <Route path="/video">
                        <Video />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/checkout2">
                        <Checkout2 />
                    </Route>
                    <Route path="/finished">
                        <Finished />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route path="/user" exact>
                        <User />
                    </Route>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default HomeRouter;
