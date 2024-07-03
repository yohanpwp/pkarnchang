import React,{Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import { Stack } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        const style = {height : 40}
        return (
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg bg-light">
                <div>
                    <div className='text-left'>
                    <img style = {style} 
                            src = '/images/logo/logo2.png' alt='ตาลุง'/>
                        <h1 className='text-success me-auto'>Training</h1>
                    </div>
                </div>
                <div className='container'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <Nav className="ms-auto">
                        <Nav.Link bg="primary" data-bs-theme="dark" href='/payment'>Payment</Nav.Link>
                        <Nav.Link href="about">About Us</Nav.Link>
                        <Nav.Link href="/api">ข้อมูลผู้ใช้งาน</Nav.Link>
                        <Nav.Link href='/store'>ร้านอาหาร</Nav.Link>
                    </Nav>
                    </div>
                </div>
                </nav>
            </div>
        )
    };
}
export default Header;