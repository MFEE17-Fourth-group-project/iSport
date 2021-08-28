import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Articles from './article/Article';
import Product from './product/Product';
import User from './user/User';
import Video from './video/Video';
import Cart from './cart/Cart';
import Checkout from './cart/Checkout';
import Nav from '../global/Nav';
import Footer from '../global/Footer';
import ProductItem from './product/ProductItem';
import VideoId from './video/VideoId';
import FavouriteProduct from './user/cart/FavouriteProduct.js';

function HomeRouter() {
    return (
        <Router>
            <>
                {/* <Link to="/articles">Articles</Link>
        <Link to="/products">Products</Link>
        <Link to="/user">User</Link>
        <Link to="/video">Video</Link> */}
                <Nav />
                <Switch>
                    <Route path="/user/cart/favourite">
                        <FavouriteProduct />
                    </Route>
                    <Route path="/product/item">
                        <ProductItem />
                    </Route>
                    <Route path="/articles">
                        <Articles />
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
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default HomeRouter;
