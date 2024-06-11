import React,{Component} from 'react';
const react = require('react') ;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date : new Date()}
        setInterval(() => this.tick(),1000) ;
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000) ;
        console.log('componentDidMount') ;
    }
    
    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerID) ;
    }

    tick(){ this.setState({ date : new Date()}) };

    render() {
        return (<div>
            <h1>Hello world</h1>
            <p>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }

}
export default Header ;