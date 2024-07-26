import { Component } from "react";
import DateandTime from 'date-and-time'

class Clock extends Component {
    state = {
        currentTime: new Date()
    }
    intervalHandler = 0

    componentDidMount = () => {
        this.intervalHandler = setInterval(() => {
            console.log('## tick~~')
            this.setState({ currentTime: new Date() })
        }, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalHandler)
    }

    render() {
        return (
            <div className="boxStyle">
                <h3>{DateandTime.format(this.state.currentTime, this.props.formatString)}</h3>
            </div>
        )
    }
}

export default class LifeCycleTest extends Component {
    state = {
        clockVisible: false
    }
    render() {
        return (
            <div>
                <h2>simple clock test</h2>
                <button onClick={() => this.setState(
                    { clockVisible: !this.state.clockVisible }
                )}>toggle clock</button>
                <hr />
                {this.state.clockVisible ? <Clock formatString={"HH:mm:ss"} /> : ""}
            </div>
        )
    }
}