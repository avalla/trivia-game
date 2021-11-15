import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorBoundary from '../errors/ErrorBoundary';
import NotFound from '../errors/NotFound';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from './home';
import * as Game from './game';
import GameOver from './game-over';
import HallOfFame from './hall-of-fame';
import Register from './register';
import SubmitScore from './submit-score';
import Unknown from '../errors/Unknown';

function Routes() {
  return (
    <Router>
      <ErrorBoundary>
        <DefaultLayout
          footer={
            <Switch>
              <Route path="/game" exact component={Game.Footer} />
            </Switch>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/game" exact component={Game.Body} />
            <Route path="/game-over" exact component={GameOver} />
            <Route path="/hall-of-fame" exact component={HallOfFame} />
            <Route path="/register" exact component={Register} />
            <Route path="/submit-score" exact component={SubmitScore} />
            <Route path="/500" exact component={Unknown} />
            <Route component={NotFound} />
          </Switch>
        </DefaultLayout>
      </ErrorBoundary>
    </Router>
  );
}

Routes.defaultProps = {};
Routes.propTypes = {};
export default Routes;
