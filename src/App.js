import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import HttpGet from './components/HttpGet';
import HttpPost from './components/HttpPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HttpGet/> */}
        <HttpPost/>
      </div>
    );
  }
}

export default App;
