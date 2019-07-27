import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.css'
import Users from './Containers/Users'
import Posts from './Containers/Posts'
import { ROUTES } from './Constants'
import Albums from './Containers/Albums'
import { Layout } from 'antd';
import NavBar from './Components/NavBar';

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Layout>
          <NavBar {...this.props} />
          <Switch>
            <Route exact path={ROUTES.home} render={() => (<Redirect to={ROUTES.users} />)} />
            <Route exact path={ROUTES.users} component={Users} />
            <Route exact path={ROUTES.user} component={Users} />
            <Route exact path={ROUTES.posts} component={Posts} />
            <Route exact path={ROUTES.albums} component={Albums} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App)
