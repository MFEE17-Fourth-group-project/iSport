import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Articles from './article/Article';
import Products from './product/Product';
import User from './user/User';
import Nav from '../global/Nav';
import Footer from '../global/Footer';

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
                    <Route path="/articles">
                        <Articles />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/user">
                        <User />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default HomeRouter;
