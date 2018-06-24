import React from 'react';
import { List,Radio, Button } from 'antd';
import reqwest from 'reqwest';
import './QuizDetailContainer.css';


const RadioGroup = Radio.Group;


class QuizDetailContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quizid: props.match.params.id,
            quizdata: {},
        };
        this.state.quizdata.problem = []
    }
    componentWillMount(){
        const url = `http://127.0.0.1:8080/api/quiz/${this.state.quizid}`;
        this.getData(
            url,
            (res) => {
                this.setState({quizdata:res});
            }
        );
        
    };
    getData = (url,callback) => {
        reqwest({
            url: url,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    };

    
    render(){
        console.log(this.state.data);
        return(
            <div>
                <h1 className = 'quiztitle'>{this.state.quizdata.title}</h1>
                <h3 className = 'quizdescrip'>{this.state.quizdata.description}</h3>
                <List
                    className = "quizdetailcontainer"
                    bordered = "true"
                    itemLayout="horizontal"
                    dataSource={this.state.quizdata.problem}
                    renderItem={item =>(
                        <List.Item>
                            <div>
                            <List.Item.Meta title={item.title} description={item.description}/>
                        
                            <RadioGroup>
                                {item.problem_option && item.problem_option.map(option => (<Radio key={option.id} value={option.id}>{option.title}</Radio>))}
                            </RadioGroup>
                            </div>
                        </List.Item>
                    )
                    }
                >

                </List>
                <div className="buttoncontainer"><Button type="primary" className="submitbutton">提交</Button></div>
            </div>
        )
    };
}

export default QuizDetailContainer;