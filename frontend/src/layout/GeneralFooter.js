import React from 'react';
import { Layout} from 'antd';

const { Footer } = Layout;

class GeneralFooter extends React.Component{
  render(){
    return(
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    )
  };
}

export {GeneralFooter};