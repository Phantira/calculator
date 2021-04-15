import React, { Component } from 'react';
class History extends Component{
    render() {
        return(
            <div className="history">
                <p>HISTORY</p>
                <p>{this.props.q} {this.props.ans}</p>
            </div>
        )
    }
}
export default History;