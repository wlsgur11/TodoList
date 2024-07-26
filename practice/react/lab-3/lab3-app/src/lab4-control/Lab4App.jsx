import { useState } from "react"

const ControlledComponent = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const changeValue = (e) => {
        let newValue = parseInt(e.target.value)
        if (isNaN(newValue)) newValue = 0
        if(e.target.id === 'x') setX(newValue)
        else setY(newValue)

    }

    return (
        <>
            <h2>uncontrolled component</h2>
            name: <input type="text" />
            <br />
            name: <input type="text" value={'kim'} />

            <h2>controlled component</h2>
            x : <input id='x' type="text" value={x} onChange={changeValue} />
            <br />
            y : <input id='y' type="text" value={y} onChange={changeValue} />
            <br />
            result : <span>{x + y}</span>
        </>
    )
}

export default ControlledComponent