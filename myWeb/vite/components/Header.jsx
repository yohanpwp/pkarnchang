import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        const style = {height : 60}
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 text-left'>
                        <h1 className='text-success'>
                            <img style = {style} 
                            src = '/images/logo/logo2.png' alt='ตาลุง'/>Pkarnchang</h1>
                    </div>
                    <Link to='/store'>ร้านอาหาร</Link>
                </div>
            </div>
        )
    };
}
export default Header;