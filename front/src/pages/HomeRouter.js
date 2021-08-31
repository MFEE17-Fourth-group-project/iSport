import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Articles from './article/Article';
import Product from './product/Product';
import User from './user/User';
import Video from './video/Video';
import Cart from './user/cart/Cart';
import Finished from './user/cart/Finished';
import Checkout2 from './user/cart/Checkout2';
import Checkout from './user/cart/Checkout';
import Nav from '../global/Nav';
import Footer from '../global/Footer';
import ProductItem from './product/ProductItem';
import VideoId from './video/VideoId';
import FavouriteProduct from './user/cart/FavouriteProduct.js';
import ArticleCategory from './article/ArticleCategory';
import ArticleId from './article/ArticleId';
import HomePage from './HomePage';
import TradingRecord from './user/cart/TradingRecord';
import Gym from './gym/Gym';
import SignUp from './user/sign/SignUp';
import SignIn from './user/sign/SignIn';

// import Aside from '../global/Aside';

function HomeRouter() {
    const [counts, setCounts] = useState(1);
    return (
        <Router>
            <>
                <Nav />
                <Switch>
                    <Route path="/user/cart/TradingRecord">
                        <TradingRecord />
                    </Route>
                    <Route path="/user/cart/favourite">
                        <FavouriteProduct />
                    </Route>
                    <Route path="/user/cart">
                        <Cart counts={counts} setCounts={setCounts} />
                    </Route>
                    <Route path="/product/item">
                        <ProductItem />
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
                    <Route path="/ArticleId">
                        <ArticleId />
                    </Route>
                    <Route path="/products">
                        <Product />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                    <Route path="/video/:videoId">
                        <VideoId />
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
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default HomeRouter;
