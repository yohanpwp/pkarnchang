import React,{Component} from "react";
import Header from "../../../components/Store/Header";
import Footer from "../../../components/Store/Footer";
import axios from "axios";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {orders: null};
    }

    componentDidMount() {
        // ใช้axiosรับข้อมูลจากjson(res)เพื่อแสดงผลข้อมูล(setState)เข้าไปในpropertyชื่อorders
        axios.get("http://localhost:3000/orders")
            .then(res => {
                this.setState({orders: res.data});
            });
    }

    delOrder(order) {
        axios.delete("http://localhost:3000/orders/" + order.id)
            .then(res => {
                this.setState({orders: this.state.orders.filter(o => o.orderId != order.orderId)});
            });
    }

    showOrders() {
        // เช็คว่ามีordersอยู่ในstateแล้วแสดงผลโดยใช้ฟังก์ชั่นmap
        return this.state.orders && this.state.orders.map(order => {
            // แปลงข้อมูลวันเวลาเป็นวันที่และเวลาในproperty orderedDate ของorder
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm tite" onClick = {() => this.delOrder(order) }>X</button></p>
                <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                <ul>
                    {order.orders && order.orders.map(record => {
                        return (
                            <li key={record.product.id}>
                                {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                            </li>
                        )
                    })}
                </ul>
                <p className="title">ยอดรวม {order.totalPrice} บาท</p>
                </div>
            )
        })};
    render() {
        return (
        <div>
            <Header/>
                <div className="container-fluid">
                    <h4>รายการสั่งซื้อ</h4>
                    <div className="row">{this.showOrders()}</div>
                </div>
            <Footer company="Firefly" email="mc@harmony.com" />
        </div>
    )}
}

export default Orders;