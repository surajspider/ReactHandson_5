import React from 'react'

function HOCcompo(props) {
    return (
        <div>
            <h1>Hello, HOC!</h1>
            <h2>HOC - High Order Component is a function that takes a component as an argument and returns a new component. HOC allows to intergrate
                additional functionality to a component without modifying the component's code. Ex: Can use HOC to add styles to a newer returned component
                and even can use to add routing capabilties to a component.
            </h2>
            <div className='prime' style={{ background: "green" }}>{<props.value />}</div><br />
            <div className='prime' style={{ background: "lightblue" }}>{<props.value name="Suraj" />}</div>
        </div>
    )
}

export default HOCcompo