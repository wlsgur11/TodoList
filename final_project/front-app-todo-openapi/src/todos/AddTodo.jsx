import { useState } from "react";
import { useNavigate } from "react-router";
import { BsFillExclamationDiamondFill  } from "react-icons/bs";

const AddTodo = ({ callbacks }) => {
    const navigate = useNavigate();

    let [todo, setTodo] = useState("");
    let [desc, setDesc] = useState("");
    let [alertMessage, setAlertMessage] = useState('');
    let [alertType, setAlertType] = useState('');

    const addTodoHandler = () => {
        if (todo.trim() === '' || desc.trim() === '') {
            setAlertMessage('반드시 할일, 설명을 입력해야합니다.');
            setAlertType('danger'); // 오류 알림 유형
            return;
        }

        callbacks.addTodo(todo, desc, () => {
            navigate('/todos');
        });
    }

    return (
        <>
            {alertMessage && (
                <div className={`alert alert-${alertType} d-flex align-items-center text-start`} role="alert" style={{ padding: '0.5rem 1rem' }}>
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:" style={{ width: '1.5rem', height: '1.5rem' }}>
                        <use xlinkHref="#exclamation-triangle-fill" />
                    </svg>
                    <div style={{ marginLeft: '5rem' }}>
                    <BsFillExclamationDiamondFill  />  {alertMessage}
                    </div>
                </div>
            )}
            <div className="row">
                <div className="col p-3"><h2>할 일 추가</h2></div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="todo"
                            placeholder="해야할 일"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)} 
                        />
                        <label htmlFor="todo">제목</label>
                    </div>
                    <div className="form-floating">
                        <textarea 
                            className="form-control"
                            style={{height: "100px"}}
                            id="desc"
                            placeholder="설명"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)} 
                        ></textarea>
                        <label htmlFor="desc">설명</label>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-success" onClick={addTodoHandler}>추가</button>
                        <button type="button" className="btn btn-outline-danger" onClick={() => navigate('/todos')}>취소</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTodo;
