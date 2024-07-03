import React,{useEffect,useState}from "react";
import NavbarComponent from "./Navbar";
import CreateQR from "./CreateQR";
function Payment() {
    const qrBody = {
        qrType: "PP",
        ppType: "BILLERID",
        ppId: "010555413150501",
        amount: 0,
        ref1: "RFC1",
        ref2: "RFC2",
        ref3: "VER"
    }
    const [qrRequest, setData] = useState(qrBody);
    const onAddAmount = (newAmount) => {
        console.log('ข้อมูลที่ส่งมาจาก Form Navbar : ',newAmount); 
        setData((values) =>({...values,
           amount:newAmount})
        )      
    }
    useEffect(() => { console.log(qrRequest);
    },[qrRequest])
    
    return (
    <>
    <NavbarComponent addAmount={onAddAmount} /> {/*ส่งฟังก์ชั่น onAddAmount ไปที่ component Navbar*/}
    <p>แสดง QR Code</p>
    <div>
        {qrRequest !== qrBody && 
        <CreateQR qrReq = {qrRequest} />}
    </div>
   
    </>
)};

export default Payment ;