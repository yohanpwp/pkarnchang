import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        return (
        <div className='container-fluid'>
            <div className='row'>
            <small><h5 className='col-md-4 text-right' color='#3B7EE5'>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</h5></small>
            </div>
        </div>
        )
    }

}
export default Time ;