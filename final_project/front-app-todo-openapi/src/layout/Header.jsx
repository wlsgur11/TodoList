import { useState } from "react"
import { Link } from 'react-router-dom'
import { BsClipboardCheck } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsBookmarksFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

// html 에서는 되는데 여기선 안되니까 className -> className, <a> -> <Link>, href -> to, 
// 토글버튼 useState로 바꾸기, 화면전환 컴포넌트 사용 Ln: 17

const Header = () => {

    let [isNavShow, setIsNavShow] = useState(false)

    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand">Todo App <BsClipboardCheck /></span>
                <button onClick={() => setIsNavShow(!isNavShow)} className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end ${isNavShow ? 'show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><BsListUl /> Category</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setIsNavShow(false)}></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'><BsFillHouseDoorFill /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/todos'><BsBookmarksFill /> Todo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/eduinfo'><BsInfoCircleFill /> Edu Info</Link>
                            </li>
                            <li className="nav-item">
                                
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-footer">
                        <a className="nav-link" disabled style={{textAlign: "right", marginRight: '20px'}}> <h4><FaReact  /> Made with React</h4></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header