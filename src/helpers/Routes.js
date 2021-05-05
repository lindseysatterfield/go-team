import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Players from './views/Players';
import AddPlayer from './views/AddPlayer';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/players' component={Players} />
        <Route exact path='/add-player' component={AddPlayer} />
      </Switch>
    </div>
  );
}
