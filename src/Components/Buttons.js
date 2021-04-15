import React, { Component } from 'react';
import './Buttons.css';
class Buttons extends Component{
    buttonPressed = (X) => {
        this.props.buttonPressed(X.target.value);
    }
    render(){ 
        return(
            <div className="buttons">
                <button id="OpenP" value='(' onClick={this.buttonPressed}> ( </button>
                <button id="CloseP" value=')' onClick={this.buttonPressed}> ) </button>
                <button id="Clear" value='C' onClick={this.buttonPressed}> C </button>
                <button id="AllClear" value='AC' onClick={this.buttonPressed}> AC </button>
                <br/>

                <button value='7' onClick={this.buttonPressed}> 7 </button>
                <button value='8' onClick={this.buttonPressed}> 8 </button>
                <button value='9' onClick={this.buttonPressed}> 9 </button>
                <button id="Divide" value='/' onClick={this.buttonPressed}> ÷ </button>
                <br/>

                <button value='4' onClick={this.buttonPressed}> 4 </button>
                <button value='5' onClick={this.buttonPressed}> 5 </button>
                <button value='6' onClick={this.buttonPressed}> 6 </button>
                <button id="time" value='*' onClick={this.buttonPressed}> x </button>
                <br/>

                <button value='1' onClick={this.buttonPressed}> 1 </button>
                <button value='2' onClick={this.buttonPressed}> 2 </button>
                <button value='3' onClick={this.buttonPressed}> 3 </button>
                <button id="minus" value='-' onClick={this.buttonPressed}> - </button>
                <br/>

                <button value='.' onClick={this.buttonPressed}> . </button>
                <button value='0' onClick={this.buttonPressed}> 0 </button>
                <button id="equal" value='=' onClick={this.buttonPressed}> = </button>
                <button id="add" value='+' onClick={this.buttonPressed}> + </button>
                <br/>
            </div>
        );
    }
}
export default Buttons;