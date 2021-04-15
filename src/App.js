import React, { Component } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import DisplayBar from './Components/DisplayBar';
import History from './Components/History';


class App extends Component {
  state = {
    result: "" , q: "", ans:""
  }
  buttonPressed = (buttonsValue) => {
    if (buttonsValue === "=") {
      this.calculate();
    } 
    else if (buttonsValue === "AC") {
      this.reset();
    } 
    else if (buttonsValue === "C") {
      this.clear();
    }
    else {
      this.setState({
        result: this.state.result + buttonsValue
      });
    }
  }

  calculate = () => {
    let RESULT = " ";
    let ANSWER = " ";
    if(this.state.result.includes("--")){
      RESULT = this.state.result.replace("--","+")
    }
    else{
      RESULT = this.state.result
    }
    this.question(RESULT);
    try{
      this.setState({
        result: (eval(RESULT)) + ""
      });
      ANSWER = eval(RESULT)
      this.answer(ANSWER);
    }
    catch (error) {
      this.setState({
        result : "error"
      })
    }
  }

  question = (RESULT) => {
    this.setState({
      q: RESULT + "="
    });
  }
  answer = (ANSWER) =>{
    this.setState({
      ans: ANSWER
    })
  }
  reset = () => {
    this.setState({
      result : " " , q : " "
    })
  }

  clear = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
      <div className="App">
        <History q={this.state.q} ans={this.state.ans}/>
        <DisplayBar result={this.state.result} q={this.state.q}/>
        <Buttons buttonPressed={this.buttonPressed}/>
      </div>
  );
  }
}

export default App;
