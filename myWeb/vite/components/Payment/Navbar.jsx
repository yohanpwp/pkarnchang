import React,{useState,FormEvent,Component} from "react";
import CreateQR from "./CreateQR";
import Payment from "./Payment";

function NavbarComponent(props) {
  const [amounts, setAmount] = useState(0);
  const saveItems = () => {
    console.log("บันทึกข้อมูลเรียบร้อย");
    const itemData = Number(amounts) //สร้างตัวแปรเพื่อเก็บข้อมูลในstate
    props.addAmount(itemData)
    setAmount(0)
  }
  
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SCB Payment</a>
        <span style= {{marginRight: 8}} className="text-nowrap navbar-text" >กรุณากรอกจำนวนเงินของท่าน </span>
        <form>
        <input className="form-control me-2" type="number" value={amounts} onChange={e => setAmount(e.target.value)}
        placeholder="จำนวนเงินของคุณ" aria-label="Search"/>
        </form>
        <button className="btn btn-online-success" type="submit" onClick={() => saveItems()}>สร้าง</button> 
        {amounts < 0 &&
          <span className="text-danger navbar-text">กรุณากรอกจำนวนเงินให้ถูกต้อง</span>
        }
  </div>
</nav>
  )
};
export default NavbarComponent;