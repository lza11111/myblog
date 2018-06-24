import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu} from 'antd';


import './GeneralHeader.css';
const { Header } = Layout;

class GeneralHeader extends React.Component {

  render(){
    return (
      <Header>
        <div className="logo" >
          <p className='logotext'>QUIZ</p>
          <p className='logoalpha'>pre-alpha</p>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="quiz"><Link to="/quiz">测验</Link></Menu.Item>
          <Menu.Item key="ques"><Link to="/ques">问卷</Link></Menu.Item>
          {/* <Menu.Item key="other">其他</Menu.Item> */}
        </Menu>
      </Header>
    );
  };
}

export {GeneralHeader};