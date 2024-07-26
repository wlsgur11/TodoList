import { useNavigate } from "react-router"
import { useState } from "react"
import { BsCheckSquare } from "react-icons/bs";


const TodoItem = ({ todoItem, callbacks }) => {
    const navigate = useNavigate()
    const [newTodo, setNewTodo] = useState(todoItem.todo)
    const [newDesc, setNewDesc] = useState(todoItem.desc)
    const [isEditing, setIsEditing] = useState(false)

    const handleUpdate = () => {
        callbacks.updateTodo(todoItem.id, newTodo, newDesc, todoItem.done, () => {
            setIsEditing(false)
        });
    };

    return (
        <li className={`list-group-item ${todoItem.done ? 'list-group-item-success' : ''}`}>
            <div>
                <span onClick={() => callbacks.toggleDone(todoItem.id)}>
                    {todoItem.done ? <BsCheckSquare /> : ""}
                    <a> </a>
                    {todoItem.todo}

                </span>
                <button className="float-end badge bg-secondary pointer m-1" onClick={() => setIsEditing(!isEditing)}>
                    편집
                </button>
                <button className="float-end badge bg-secondary pointer m-1" onClick={() => callbacks.deleteTodo(todoItem.id)}>
                    삭제
                </button>
            </div>

            {/* Collapse 영역 */}
            <div className={`collapse ${isEditing ? 'show' : ''}`} id={`collapse-${todoItem.id}`}>
                <div className="card card-body mt-2">
                    <input
                        type="text"
                        className="form-control mb-2"
                        style={{ width: '100%' }} // 너비를 100%로 설정
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control mb-2"
                        style={{ width: '100%' }} // 너비를 100%로 설정
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleUpdate}>저장</button>
                    <hr />
                    <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>취소</button>
                </div>
            </div>
        </li>
    )
}

export default TodoItem;
