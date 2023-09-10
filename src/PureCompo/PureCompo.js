import React, { PureComponent } from 'react'
import PropsCompo from './PropsCompo';
// import { NormalCompo } from './NormalCompo';

export class PureCompo extends PureComponent {
    constructor() {
        super();
        this.state = {
            topic: "Pure Component",
            year: 2023,
            author: "suraj"
        }
    }
    render() {
        console.log("It is Rendered!");
        return (
            <div style={{ background: "lightblue" }}>
                <h1>Hello, This is Pure Component!</h1>
                <h2>Simple definition: PureComponent is similar to Component but it skips re-renders for same props and state. </h2>
                <h2>Topic: {this.state.topic}</h2>
                <button style={{ margin: "0px 10px 0px 0px" }} onClick={() => this.setState({ topic: "Wrong Topic" })}>Change different Topic</button>
                <button onClick={() => this.setState({ topic: "Pure Component" })}>Change Same Topic</button>
                <PropsCompo render="see the magic in console!" />
                <div style={{ background: "orange" }}>{<this.props.value />}</div>
            </div>
        )
    }
}

export default PureCompo