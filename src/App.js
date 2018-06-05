import React, { Component } from 'react';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import NavBar from './components/NavBar';
import PostShow from './components/PostShow';
import PostEdit from './components/PostEdit';

import { Route, Switch, withRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div className="container my-4">
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id/edit" component={PostEdit} />
            <Route path="/posts/:id" component={PostShow} />
            <Route path="/" exact component={PostsIndex} />
          </Switch>

        </div>

      </div>
    );
  }
}

export default withRouter(App);
