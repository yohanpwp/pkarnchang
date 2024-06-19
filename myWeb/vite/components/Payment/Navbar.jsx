function NavbarComponent() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SCB Payment</a>
        <span style= {{marginRight: 8}} className="text-nowrap navbar-text" >กรุณากรอกจำนวนเงินของท่าน </span>
        <span></span>
        <input class="form-control me-2" type="number" 
        placeholder="จำนวนเงินของคุณ" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">สร้าง</button>
  </div>
</nav>
  )};
export default NavbarComponent;