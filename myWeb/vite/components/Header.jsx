import React,{Component} from 'react';

class Header extends React.Component {
    render() {
        const style = {height : 80}
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 text-left'>
                        <h1 className='text-success'>
                            <img style = {style} 
                            src = '/images/logo/logo.png' alt='ร้านอาหาร'/>Healthy Cafe's</h1>
                    </div>
                </div>
                <h1>Hello World!!!</h1>
            </div>
        )
    };
}
export default Header;