import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import CSSTest from './lab1-style/Lab1App.jsx'
import Lab2App from './lab2-proptype/Lab2App.jsx'
import EventApp from './lab3-event/Lab3App.jsx'
import ControlledComponent from './lab4-control/Lab4App.jsx'
import LifeCycleTest from './lab5-class/Test3-lifecycle-clock.jsx'
import LifrcycleTest2 from './lab5-class/Test4-Chatting.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LifrcycleTest2 />
    {/* <LifeCycleTest/> */}
    {/* <ControlledComponent /> */}
    {/* <EventApp /> */}
    {/* <Lab2App /> */}
    {/* <CSSTest /> */}
    {/* <App /> */}
    
  </React.StrictMode>,
)
