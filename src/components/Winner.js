import React, { Component } from "react";

class Winner extends Component {
    constructor() {
        super();
        this.winnerClick = this.winnerClick.bind(this);
    }
   
    winnerClick() {
        this.props.reset();
    }
   
    render() {
        return (
           <div className="allWinner"  onClick={() => {
            this.winnerClick();
        }}>
        <div className="winnerText">
        The {this.props.winner} wins!
         <br/>Tap anywhere to continue 
            </div>
            </div>
        );
    }
}

export default Winner;
