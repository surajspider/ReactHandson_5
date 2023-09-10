import React from 'react'

function PropsCompo(props) {
    console.log("Propscompo rendered!")
    return (
        <div>
            <h2>{props.render}</h2>
            <h3>Whenever we click the same button from the anytwo buttons.. only for the first time, it'll render,
                when clicked the button again, it won't render the same content once again!
            </h3>
            <h4>But, when we click two buttons alternatively, it'll render again and again that's because the state and props are changing.
                so, when the states changes it'll render and don't render when the states don't change!
            </h4>
        </div>
    )
}

export default PropsCompo