import React,{Component} from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        this.state = { date : new Date()}
    }
    tick(){ this.setState({ date : new Date()}) };

    componentDidMount() {
        setInterval(() => this.tick(),1000) ;
        this.timerID = setInterval(() => this.tick(),1000) ;
    }
    
    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID) ;
    }

    
    render() {
        return (<div>
            <h3>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }

}
export default Time ;