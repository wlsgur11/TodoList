import { useEffect, useState } from "react";
import TodoHome from "./TodoHome";
import { produce } from 'immer'
import axios from 'axios'
import TodoItem from "./TodoItem";

const BASEURL = 'http://localhost:8000/todolist/gdhong'

const TodoContainer = () => {
    let [todoList, setTodoList] = useState([]);
    let [alertMessage, setAlertMessage] = useState('');
    let [alertType, setAlertType] = useState(''); // 'danger' 또는 'success'와 같은 유형

    const fetchTodoList = async () => {
        setTodoList([]);
        setAlertMessage(''); // 이전 알림 메시지 초기화
        try {
            const response = await axios.get(BASEURL);
            setTodoList(response.data);
        } catch (e) {
            if (e instanceof Error) {
                setAlertMessage("조회실패 : " + e.message);
                setAlertType('danger'); // 오류 알림 유형
            } else {
                setAlertMessage('조회실패: ' + e);
                setAlertType('danger');
            }
        }
    }

    useEffect(() => {
        fetchTodoList();
    }, []);

    const addTodo = async (todo, desc, callback) => {
        try{
            const response = await axios.post(BASEURL, {todo, desc})
            if (response.data.status === 'success'){
                let newTodoList = produce(todoList, (draft) => {
                    draft.push({...response.data.item, cone: false})
                })
                setTodoList(newTodoList)
                callback()
            }else{
                setAlertMessage("추가실패 : " + response.data.message);
                setAlertType('danger'); // 오류 알림 유형
            }
        }catch(e){
            if (e instanceof Error) {
                setAlertMessage("등록실패 : " + e.message);
                setAlertType('danger'); // 오류 알림 유형
            } else {
                setAlertMessage('등록실패: ' + e);
                setAlertType('danger');
            }
        }
    }

    const updateTodo = async (id, todo, desc, done, callback) => {
        try {
            const response = await axios.put(`${BASEURL}/${id}`, { todo, desc, done });
            if (response.data.status === 'success') {
                let index = todoList.findIndex((item) => item.id === id);
                let newTodoList = produce(todoList, (draft) => {
                    draft[index] = { ...draft[index], todo, desc, done };
                });
                setTodoList(newTodoList);
                callback();
            } else {
                setAlertMessage("수정 실패: " + response.data.message);
                setAlertType('danger');
            }
        } catch (e) {
            if (e instanceof Error) {
                setAlertMessage("업데이트 실패: " + e.message);
                setAlertType('danger');
            } else {
                setAlertMessage('업데이트 실패: ' + e);
                setAlertType('danger');
            }
        }
    }

    const toggleDone = async (id) => {
        try {
            let todoItem = todoList.find((todo) => todo.id === id);
            const response = await axios.put(`${BASEURL}/${id}`, { ...todoItem, done: !todoItem.done });
            if (response.data.status === 'success') {
                let index = todoList.findIndex((todo) => todo.id === id);
                let newTodoList = produce(todoList, (draft) => {
                    draft[index].done = !draft[index].done;
                });
                setTodoList(newTodoList);
            }
        } catch (e) {
            setAlertMessage('토글 실패: ' + e.message);
            setAlertType('danger');
        }
    }

    const deleteTodo = async (id) => {
        try{
            const response = await axios.delete(`${BASEURL}/${id}`)
            if (response.data.status === 'success'){
                let index = todoList.findIndex((todo) => todo.id === id)
                let newTodoList = produce(todoList, (draft) =>{
                    draft.splice(index, 1)
                })
                setTodoList(newTodoList)
            }
        }catch(e){
            setAlertMessage('삭제 실패: ' + e);
            setAlertType('danger');
        }
    }

    const callbacks = { addTodo, updateTodo, toggleDone, deleteTodo };
    const states = { todoList };

    return (
        <div style={{ width: '600px',  margin: 'auto', padding: '20px' }}>
            {alertMessage && (
                <div className={`alert alert-${alertType} d-flex align-items-center`} role="alert">
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:">
                        <use xlinkHref="#exclamation-triangle-fill" />
                    </svg>
                    <div>
                        {alertMessage}
                    </div>
                </div>
            )}
            <TodoHome callbacks={callbacks} states={states} />
        </div>
    )
}

export default TodoContainer;