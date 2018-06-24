import React from 'react';
import reqwest from 'reqwest';

import QuizList from './QuizList';

const quizlizturl = 'http://127.0.0.1:8080/api/quiz/';
class QuizListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }
    
  getData = (callback) => {
    reqwest({
      url: quizlizturl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  };

  componentDidMount() {
    this.getData(
      (res) => {
        console.log(res);
        this.setState({
          data: res
        }
        );
      }
    );
  }
  
  render(){
    return(
      <div>
      <p style={{ margin: '16px 0' }}>当前可用的测验:</p>
      <div style={{ padding: '30px' }}>
        
        {console.log(this.state.data)}
        <QuizList list = {this.state.data}/>
        
      </div>
      </div>
    );
  };
}

export default QuizListContainer;