import React , {Component} from 'react';

const react = require('react') ;

const Footer = (props) => {
    const {company,email} = props ;
    return (
        <div className='container-fluid'>
            <hr />
                <div className="col-md-9">
                    <small>
                        <h1><span className='red'>Powered by {company} | contact : {email}</span></h1>
                    </small>
                </div>
        </div>
    )
}

export default Footer ;