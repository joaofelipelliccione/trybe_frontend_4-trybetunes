import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/trybe_frontend_4-trybetunes/" component={ Login } />
          <Route exact path="/trybe_frontend_4-trybetunes/search" component={ Search } />
          <Route exact path="/trybe_frontend_4-trybetunes/album/:id" render={ (props) => <Album { ...props } /> } />
          <Route exact path="/trybe_frontend_4-trybetunes/favorites" component={ Favorites } />
          <Route exact path="/trybe_frontend_4-trybetunes/profile" component={ Profile } />
          <Route exact path="/trybe_frontend_4-trybetunes/profile/edit" component={ ProfileEdit } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
