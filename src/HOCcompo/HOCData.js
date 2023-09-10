import React, { useState } from 'react'

function HOCData(props) {
    var [num, setNum] = useState(0);
    var [results, resultf] = useState(null);
    const HandleChange = (e) => {
        setNum(e.target.value);
        console.log(num);
    }
    const HandleSubmit = () => {
        const result = Prime(num);
        console.log(result);
        console.log(num);
        resultf(result);
        console.log(results);
    }
    var Prime = () => {
        var count = 0;
        for (var i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                count++;
            }
        }
        if (count === 1) {
            console.log(count);
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div>
            <label htmlFor='num'>Enter a Number:</label>
            <input type='number' id="num" name="num" onChange={HandleChange} />
            <button onClick={HandleSubmit}>Submit</button>
            {results !== null && (
                <>
                    {
                        results ?
                            <>
                                <h3>{num} is Prime!</h3>
                                <h2>Here, Background color is set using HOC</h2>
                                <h3>-{props.name}</h3> </> :


                            <h3>{num} not a Prime number</h3>
                    }
                </>
            )}



        </div >
    )
}

export default HOCData