import React, { Component } from 'react';

export class NormalCompo extends Component {
    constructor() {
        super();
        this.state = {
            topic: "Normal Component",
            year: 2023,
            author: "suraj"
        }
    }
    render() {
        console.log("It is Rendered! from Normal Compo");
        return (
            <div>
                <h1>Hello, This is Normal Component!</h1>
                <h2>Topic: {this.state.topic}</h2>
                <button style={{ margin: "0px 10px 0px 0px" }} onClick={() => this.setState({ topic: "Wrong Topic" })}>Change different Topic</button>
                <button onClick={() => this.setState({ topic: "Normal Component" })}>Change Same Topic</button>
                <h3>See the magic in console!</h3>
                <h2 style={{ background: "green" }}>Here, It renders for each and every click of the buttons even when the states are not changing!!</h2>
            </div>
        )
    }
}

export default NormalCompo