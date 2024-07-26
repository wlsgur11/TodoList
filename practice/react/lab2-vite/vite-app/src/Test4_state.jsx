import { useState } from 'react'

const MusicItem = (props) => {
    let item = props.item
    return <li>{item.no} - {item.title} - ({item.artist})</li>
}

const Musiclist = (props) => {
    const list = props.music
    let items = list.map((item, index) => {
        return <MusicItem key={item.no} item={item} />
    })
    return <ul className='list-group'>{items}</ul>
}

const StateTest = () => {
    let [list, setList] = useState([
        { no: 1, title: 'supernova', artist: 'aespa' },
        { no: 2, title: 'How Sweet', artist: 'New Jeans' },
        { no: 3, title: '바보', artist: '바보' }
    ])
    const [count, setCount] = useState(0)

    const changeList = () => {
        list.unshift(list.pop())
        setList([...list])
        setCount(count+1)
    }

    return (
        <>
            <h2>State Tests</h2>
            <p><Musiclist music={list}/></p>
            <p>{count}</p>
            <button onClick={changeList}>change list</button>
            <button onClick={()=>setCount(count+1)}>change count</button>
        </>
    )
}

export default StateTest