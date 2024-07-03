import React,{useState} from "react";
import { Button } from "react-bootstrap";

function NavbarComponent(props) {
  const [amounts, setAmount] = useState(0);
  const saveItems = () => {
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
        <Button variant="outline-success" className="btn btn-online-success" type="submit" onClick={() => saveItems()}>สร้าง</Button> 
        {amounts < 0 &&
          <span className="text-danger navbar-text">กรุณากรอกจำนวนเงินให้ถูกต้อง</span>
        }
  </div>
</nav>
  )
};
export default NavbarComponent;