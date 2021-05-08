import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Players from './views/Players';
import AddPlayer from './views/AddPlayer';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute
          exact path='/players'
          user={user}
          component={() => <Players user={user} players={players} setPlayers={setPlayers} />}
        />
        <PrivateRoute
          exact path='/add-player'
          user={user}
          component={() => <AddPlayer user={user} players={players} setPlayers={setPlayers} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  players: PropTypes.array,
  setPlayers: PropTypes.func
};

export default Routes;
