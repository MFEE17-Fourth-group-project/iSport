import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Articles from './pages/Articles'
import Products from './pages/products/Product'
import User from './pages/user/User'
import Video from './pages/videos/Video'

function RouterPages() {

  return (
    <Router>
      <>
        <Link to="/articles">Articles</Link>
        <Link to="/products">Products</Link>
        <Link to="/user">User</Link>
        <Link to="/video">Video</Link>

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
          <Route path="/video">
            <Video />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default RouterPages
