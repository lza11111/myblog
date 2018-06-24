import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col ,Row} from 'antd';

class QuizList extends React.Component{

  renderQuizList(item){
      return (
        <Col span={8} key={item.id}>
          <Link to={`/quiz/${item.id}`} >
            <Card title={item.title}>
                {item.description}
            </Card>
          </Link>
        </Col>
      );
  }

  render(){
    const list = this.props.list;
    return(
        <Row gutter={16}>
            {list.map(item => this.renderQuizList(item))}
        </Row>
    );
  };
}

export default QuizList;