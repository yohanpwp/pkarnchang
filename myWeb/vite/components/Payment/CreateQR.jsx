import React,{useState,useEffect} from 'react';
import Payment from './Payment';
import NavbarComponent from './Navbar';

function CreateQR (props) {
    const qrHead = {
        Content-Type : 'application/json',
        accept-language : 'EN',
        authorization : 'Bearer <Your Access Token>',
        requestUId : '1b01dff2-b3a3-4567-adde-cd9dd73c8b6d',
        resourceOwnerId : '<Your API Key>'
    }
    const {qrReq} = props; 
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
           .post('https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/create', {
              headers: qrHead,
              body: qrReq,
           })
           .then((res) => {
              setPosts((posts) => [res.data, ...posts]);
              setTitle('');
              setBody('');
           })
           .catch((err) => {
              console.log(err.message);
           });
     }; 
};
export default CreateQR;