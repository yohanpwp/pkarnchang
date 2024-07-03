import React,{useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function CreateQR ({qrReq}) {
   CreateQR.propTypes = {
      qrReq: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        // add other required properties here
      }).isRequired,
    };

    function generateUUID() { // Public Domain/MIT
      var d = new Date().getTime();//Timestamp
      var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16;//random number between 0 and 16
          if(d > 0){//Use timestamp until depleted
              r = (d + r)%16 | 0;
              d = Math.floor(d/16);
          } else {//Use microseconds since page-load if supported
              r = (d2 + r)%16 | 0;
              d2 = Math.floor(d2/16);
          }
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
  }
   const $guid = generateUUID(); //สร้าง guid ใหม่ที่จะใช้ในการส่งค่า authorization เป็น header ใน request
   const authHeader = { 
      'Content-Type': 'application/json', 
      'resourceOwnerId': '"l78c16602cd0b24922a2d42292cf71cc7f"', 
      'requestUId': $guid , 
      'accept-language': 'EN',
    };
    const authBody = { 
      'applicationKey': 'l78c16602cd0b24922a2d42292cf71cc7f',
      'applicationSecret' : '768899b0cb614c6687a8625c0af67d97',
      'authCode' : ''
   }; 
   //ส่งค่า authorization เป็น json ให้ scb เพื่อรับค่า token
   let [token,setToken] = useState('');
   function  postToken() { //สร้างฟังก์ชั้นเพื่อขอ Token
      let config = {
         method: 'post',
         maxBodyLength: Infinity,
         url: 'https://api-uat.partners.scb/partners/v1/oauth/token',
         headers: JSON.stringify(authHeader),
         data : JSON.stringify(authBody)
      }
      async () => { await
      axios.request(config).then(res => {
         res.status(200)
         console.log(JSON.stringify(res.data));;
         setToken("accessToken",res.data.accessToken);  // รับค่า access token เพื่อขอข้อมูลจาก api
   })
   .catch((err) => {
      console.log(err.message);
   });
}
   };

    const qrHead = { 
      'Content-Type': 'application/json', 
      'authorization': 'Bearer '+ token,  //ต้องรับค่า token ไว้ให้ นปก.
      'resourceOwnerId': 'l78c16602cd0b24922a2d42292cf71cc7f', 
      'requestUId': $guid , 
      'accept-language': 'EN'
    }

   const qrRequest = JSON.stringify(qrReq); 
   const [qrImage,setImage] = useState('');

   function getQRCode() {
      let config = {
         method: 'post',
         maxBodyLength: Infinity,
         url: 'https://api-uat.partners.scb/partners/v1/payment/qrcode/create',
         headers: JSON.stringify(qrHead),
         data : qrRequest
       };
    axios.request(config).then((response) => {
    console.log(response.data)
    setImage(response.data.qrImage); //ดึงข้อมูล qrImage จาก property data ใน web API
    
 })
   .catch((err) => {
      console.log(err.message);
   });
}; 

   async function main() {
      await postToken(); 
      await getQRCode();
      await console.log('QR Code is successfully generated')
   } 
   main();
   
   return (
      (<div>
         {/* <img src='data:image/png;base64,'+{qrImage}/> */}
         <img src='data:image/png;base64,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'/>
         <p>จำนวนเงินของคุณคือ {qrReq.amount} บาท</p>
      </div>)
   )
};
export default CreateQR;