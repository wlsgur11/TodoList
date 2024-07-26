import React, {useState} from "react"

const EventApp = () => {
    const [count, setCount] = useState(0)

    const asyncIncrement = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }
    const syncIncrement = () => {
        setCount((count) => count+1)
        setCount((count) => count+1)
        setCount((count) => count+1)
    }
    return (
        <>
            <h2>Event 상태 변경 테스트</h2>
            <p>count : {count}</p>
            <div>
                <button onClick={asyncIncrement}>async increment</button>
                <button onClick={syncIncrement}>sync increment</button>
            </div>
        </>
    )

}

export default EventApp