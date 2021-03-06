import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import { GeneralHeader as Header } from './layout/GeneralHeader';
import { GeneralContent as Content } from './layout/GeneralContent';
import { GeneralFooter as Footer } from './layout/GeneralFooter';


class App extends Component {
  
  render() {
    
    
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <Router>
        <Layout>
          <Header/>
          <Content/>
          <Footer/>
        </Layout>
      </Router>
      //   <div>
      //     <ul>
      //       <li><Link to="/">Home</Link></li>
      //       <li><Link to="/about">About</Link></li>
      //       <li><Link to="/topics">Topics</Link></li>
      //     </ul>

      //     <hr/>

      //     <Route exact path="/" component={Home}/>
      //     <Route path="/about" component={About}/>
      //     <Route path="/topics" component={Topics}/>
      //   </div>
      // </Router>
    );
  }
}

export default App;
