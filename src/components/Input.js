import React, { Component } from "react";

class Landing extends Component {
    constructor() {
        super();
        this.inputComplete = this.inputComplete.bind(this);
        this.getCount = this.getCount.bind(this);
        this.handleBtn = this.handleBtn.bind(this);
        this.state = {
            armyCount: 0,
            buttons: [7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "OK"]
        };
    }

    componentDidMount() {
        this.setState({ currentArmy: this.props.currentArmy });
    }

    getCount(e) {
        this.setState({ armyCount: e.target.value });
    }

    inputComplete() {
        let armyCount = this.state.armyCount;
        this.props.insertArmy(armyCount);
    }

    handleBtn(btnFiller) {
        let currentArmy = this.state.armyCount.toString();
        if (btnFiller > -1) {
            let newArmy = currentArmy * 10 + btnFiller;
            this.setState({ armyCount: [newArmy] });
        }
        if (btnFiller === "C") {
            this.setState({ armyCount: 0 });
        }
        if (btnFiller === "OK") {
            this.props.insertArmy(this.state.armyCount);
        }
    }

    render() {     
        return (
            <div>
                <div className="armyName"> {this.props.currentArmy} </div>
                <div className="armyCount" id="armyCount">
                    {this.state.armyCount}
                </div>
                <div className="centeredInput">
                    <div className="inputBtnsContainer">
                        {this.state.buttons.map(btnFiller => (
                            <button
                                className="inputBtns"
                                id={
                                    btnFiller == "OK"
                                        ? 'okBtn'
                                        : btnFiller == "C"
                                        ? 'cBtn'
                                        : ""
                                }
                                key={btnFiller}
                                onClick={() => {
                                    this.handleBtn(btnFiller);
                                }}
                            >
                                {btnFiller}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
