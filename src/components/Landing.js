import React, { Component } from "react";
import Input from "./Input";
import Winner from "./Winner";

class Landing extends Component {
    constructor() {
        super();
        this.addArmy = this.addArmy.bind(this);
        this.minusArmy = this.minusArmy.bind(this);
        this.insertArmy = this.insertArmy.bind(this);
        this.winPlayer = this.winPlayer.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            hideInput: 1,
            Attacker: 0,
            Defender: 0,
            currentArmy: "",
            winner: "",
            active: 0
        };
    }

    componentDidMount() {
        screen.orientation.lock("landscape-primary");
        StatusBar.hide();
    }

    addArmy(e) {
        this.state.Attacker > 0 && this.state.Defender > 0
            ? false
            : this.setState({ hideInput: 0, currentArmy: e.target.id });
    }

    minusArmy(amount, army) {
        this.state.Attacker > 0 && this.state.Defender > 0
            ? this.setState({ active: 1 })
            : false;
        let count = this.state[army] - amount;
        this.setState({ [army]: count });
        if (this.state.active && count <= 0) {
            this.winPlayer(army);
        }
    }

    insertArmy(count) {
        let army = this.state.currentArmy;
        this.setState({ hideInput: 1, [army]: count });
        this.state.Attacker > 0 && this.state.Defender > 0
            ? this.setState({ active: 1 })
            : false;
    }

    winPlayer(army) {
        switch (army) {
            case "Attacker":
                this.setState({ winner: "Defender" });
                break;
            case "Defender":
                this.setState({ winner: "Attacker" });
                break;
        }
    }
    reset() {
        this.setState({
            hideInput: 1,
            Attacker: 0,
            Defender: 0,
            currentArmy: "",
            winner: "",
            active: 0
        });
    }

    render() {
        return (
            <div>
                {this.state.winner == "" ? (
                    this.state.hideInput ? (
                        <div>
                            <button className="resetBtn" onClick={this.reset}>
                                &#8635;
                            </button>
                            <div className="split">
                                <div className="split left">
                                    <div className="landingTitle">Attacker</div>
                                    <div
                                        className="centered"
                                        id="Attacker"
                                        onClick={this.addArmy}
                                    >
                                        {this.state.Attacker <= 0 ? (
                                            <h1 id="Attacker">
                                                Tap to Add Army
                                            </h1>
                                        ) : (
                                            <h1 className="armyCountDisplay">
                                                {this.state.Attacker}
                                            </h1>
                                        )}
                                    </div>
                                    <div className="centeredBtns">
                                        <button
                                            className="minus2Btn"
                                            onClick={() => {
                                                this.minusArmy(2, "Attacker");
                                            }}
                                        >
                                            <h1>-2</h1>
                                        </button>
                                        <button
                                            className="minus1Btn"
                                            onClick={() => {
                                                this.minusArmy(1, "Attacker");
                                            }}
                                        >
                                            <h1>-1</h1>
                                        </button>
                                    </div>
                                </div>
                                <div className="split right">
                                    <div className="landingTitle">Defender</div>
                                    <div
                                        className="centered"
                                        id="Defender"
                                        onClick={this.addArmy}
                                    >
                                        {this.state.Defender <= 0 ? (
                                            <h1 id="Defender">
                                                Tap to Add Army
                                            </h1>
                                        ) : (
                                            <h1 className="armyCountDisplay">
                                                {this.state.Defender}
                                            </h1>
                                        )}
                                    </div>
                                    <div className="centeredBtns">
                                        <button
                                            className="minus2Btn"
                                            onClick={() => {
                                                this.minusArmy(2, "Defender");
                                            }}
                                        >
                                            <h1>-2</h1>
                                        </button>
                                        <button
                                            className="minus1Btn"
                                            onClick={() => {
                                                this.minusArmy(1, "Defender");
                                            }}
                                        >
                                            <h1>-1</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="inputDiv">
                            <Input
                                currentArmy={this.state.currentArmy}
                                insertArmy={this.insertArmy}
                            />
                        </div>
                    )
                ) : (
                    <div className="inputWinnerDiv">
                        <Winner winner={this.state.winner} reset={this.reset} />
                    </div>
                )}
            </div>
        );
    }
}

export default Landing;
