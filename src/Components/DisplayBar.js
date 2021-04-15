import React, { Component } from 'react';
class DisplayBar extends Component{
    render() {
        return(
            <div className="displayBar">
                <p>{this.props.q}</p>
                <h1>{this.props.result}</h1>
            </div>
        )
    }
}
export default DisplayBar;
