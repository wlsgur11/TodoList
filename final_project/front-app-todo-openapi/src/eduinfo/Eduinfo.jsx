import { useEffect, useState } from "react";
import axios from 'axios';
import {produce} from 'immer';
import { BsCalendarPlus } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { BsPinAngle } from "react-icons/bs";

const BASEURL = 'http://apis.data.go.kr/6260000/BusanCrsTrnngInfoService/getCrsTrnngInfo?ServiceKey=l3yf0gVaKs9evGlQxpYSqpELCb31FmCIkxbuLTYQdCxTfEbI2tGocF3T9y%2Bhtzubt%2B8Gh1Z9tgmsbHuMRNkw3Q%3D%3D&pageNo=1&numOfRows=50&resultType=json';

const Eduinfo = () => {
    let [eduLust, setEduList] = useState([]);
    let [todoList, setTodoList] = useState([]);
    let [alertMessage, setAlertMessage] = useState('');
    let [alertType, setAlertType] = useState('');
    let [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가
    

    const getServerData = async () => {
        try {
            const response = await axios.get(BASEURL);
            let rows = response.data['getCrsTrnngInfo']['body']['items']['item'];
            console.log(rows.length);
            setEduList(rows);
        } catch (e) {
            console.log(e);
        }
    };

    const addTodo = async (todo, desc, callback) => {
        try {
            const response = await axios.post('http://localhost:8000/todolist/gdhong', { todo, desc });
            if (response.data.status === 'success') {
                const newTodoList = produce(todoList, (draft) => {
                    draft.push({ ...response.data.item, cone: false });
                });
                setTodoList(newTodoList);
                callback();
                setShowModal(true); // 추가 성공 시 모달 표시
            } else {
                setAlertMessage("추가실패 : " + response.data.message);
                setAlertType('danger');
            }
        } catch (e) {
            if (e instanceof Error) {
                setAlertMessage("등록실패 : " + e.message);
                setAlertType('danger');
            } else {
                setAlertMessage('등록실패: ' + e);
                setAlertType('danger');
            }
        }
    };

    const handleAddTodo = (lctreNm, adres) => {
        addTodo(lctreNm, adres, () => {
            console.log('투두 리스트에 추가됨:', lctreNm, adres);
        });
    };

    const closeModal = () => {
        setShowModal(false); // 모달 닫기
    };

    let items = eduLust.map((item, index) => {
        let lctreNm = item['lctreNm'];
        let progrsSttusNm = item['progrsSttusNm'];
        let adres = item['adres'];
        let lctreBeginDttm = item['lctreBeginDttm'];
        let lctreEndDttm = item['lctreEndDttm'];

        return (
            <tr key={lctreNm}>
                <td style={{ width: '25%', textAlign: 'left' }}><a style={{color: 'green', fontWeight: 'bold'}}>{index+1}.</a> {lctreNm}</td>
                <td style={{ width: '10%', textAlign: 'left' }}>{progrsSttusNm}</td>
                <td style={{ width: '25%', textAlign: 'left' }}>{adres}</td>
                <td style={{ width: '10%', textAlign: 'left' }}>{lctreBeginDttm}</td>
                <td style={{ width: '10%', textAlign: 'left' }}>{lctreEndDttm}</td>
                <td>
                    <button 
                        className="btn btn-outline-success" 
                        onClick={() => handleAddTodo(lctreNm, adres)}
                    >
                        <BsCalendarPlus /> 추가
                    </button>
                </td>
            </tr>
        );
    });

    useEffect(() => {
        getServerData();
    }, []);

    return (
        <>
            <h3>부산시 교육 강좌 현황 <BsPinAngle /></h3>
            <br />
            <table className="table table-hover" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th scope="col" style={{ width: '20%' , paddingLeft: 'auto'}}>강좌명</th>
                        <th scope="col" style={{ width: '20%' }}>접수상태</th>
                        <th scope="col" style={{ width: '20%' }}>주소</th>
                        <th scope="col" style={{ width: '10%' }}>시작날짜</th>
                        <th scope="col" style={{ width: '10%' }}>종료날짜</th>
                        <th scope="col" style={{ width: '20%' }}>Todo</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
            {alertMessage && <div className={`alert alert-${alertType}`}>{alertMessage}</div>}

            {/* 모달 컴포넌트 */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} >
                    <div className="modal-dialog modal-dialog-centered" role="dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">추가 성공 <BsStars /></h5>
                            </div>
                            <div className="modal-body">
                                <p>투두 리스트에 항목이 성공적으로 추가되었습니다!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={closeModal}>
                                    닫기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Eduinfo;
