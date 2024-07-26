import React, { Component } from "react"

export default class LifrcycleTest2 extends Component {

    chatRef = React.createRef()

    state = {
        msgList: [],
        msg: ""
    }

    setMsg = (e) => {
        this.setState({ ...this.state, msg: e.target.value })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const chat = this.chatRef.current
        if (prevState.msgList !== this.state.msgList && chat !== null) {
            return chat.offsetHeight
        }
        return 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const chat = this.chatRef.current
        if (snapshot > 0 && chat !== null) {
            chat.scrollTop = chat.scrollHeight - snapshot
        }
    }

    msgKeyup = (e) => {
        if (e.key === "Enter") {
            this.setState({
                msg: "",
                msgList: [...this.state.msgList, this.state.msg]
            })
        }
    }

    render() {
        return (
            <div>
                <h2> 채팅목록 </h2>
                <div id="a" ref={this.chatRef} style={{ width: 300, height: 120, overflow: 'auto', border: 'solid 1px black' }}>
                    {this.state.msgList.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })}
                </div>
                <input type="text" value={this.state.msg}
                    onChange={this.setMsg}
                    onKeyUp={this.msgKeyup} />
            </div>
        )
    }
}