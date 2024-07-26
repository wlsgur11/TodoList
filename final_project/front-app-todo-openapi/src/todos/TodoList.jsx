import { Link } from 'react-router-dom'
import TodoItem from './TodoItem'
import { useCallback } from 'react'
import { BsClipboardPlus } from "react-icons/bs";

const TodoList = ({ states, callbacks }) => {
    let todoItems = states.todoList.map((item) => {
        return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />
    })
    return (
        <>
            <div className='row'>
                <div className='col p-3'>
                    <Link className='btn btn-outline-success' to='/todos/add'>
                    <BsClipboardPlus /> 할 일 추가
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <ul className='list-group'>{todoItems}</ul>
                </div>
            </div>
        </>
    )
}

export default TodoList