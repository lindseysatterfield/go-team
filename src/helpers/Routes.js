import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Players from './views/Players';
import AddPlayer from './views/AddPlayer';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user}/>} />
        <Route exact path='/players' component={() => <Players user={user}/>} />
        <Route exact path='/add-player' component={() => <AddPlayer user={user}/>} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};

export default Routes;
