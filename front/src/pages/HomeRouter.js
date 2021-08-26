import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Articles from './article/Article';
import Products from './product/Product';
import User from './user/User';
import Video from './video/Video';
import Nav from '../global/Nav';
import Footer from '../global/Footer';
import ProductItem from './product/ProductItem'


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
                    <Route path="/product/item">
                        <ProductItem />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/product">
                        <Products />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                    <Route path="/video">
                        <Video />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default HomeRouter;
