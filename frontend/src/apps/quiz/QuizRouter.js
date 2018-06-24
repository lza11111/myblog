import React from 'react';
import { Route, Switch } from 'react-router-dom';

import QuizListContainer from './QuizListContainer';
import QuizDetailContainr from './QuizDetailContainer';

class Contest extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}`} component={QuizListContainer} />
        <Route path={`${match.url}/:id`} component={QuizDetailContainr} />
      </Switch>
    );
  }
}

export default Contest;

