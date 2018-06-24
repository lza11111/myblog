import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import { Layout} from 'antd';
import QuesList from '../apps/ques/QuesList';
import QuizRouter from '../apps/quiz/QuizRouter';
const { Content } = Layout;

class GeneralContent extends React.Component{
  render(){
    return(
      <Content style={{ padding: '0 50px' }}>
        <Switch>
          <Route path="/quiz" component={QuizRouter}/>
          <Route path="/ques" component={QuesList}/>
        </Switch>
      </Content>
    )
  };
}

export {GeneralContent};