import './App.css';
import React, { Component } from 'react';
import HelperBot from './components/HelperBot';
import Videochat from './components/Videochat';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      callOn: false,
      name:""
    }
  }
  call=(e)=>{
    e.preventDefault();
    this.setState({
      callOn: true,
      name: e.target.name.value
    });
  }
  render(){
    return(
      <div className="App">
        <h1>Basic Chatbot App</h1>
        <div className="chatbox">
          {this.state.callOn ? <Videochat name={this.state.name}/> : <HelperBot startCall={this.call}/>}
        </div>
      </div>
    );
  }
}

export default App;
