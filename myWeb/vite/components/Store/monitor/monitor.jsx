import React, { Component } from "react";
import Calculator from "./Calculator.jsx";
import ProductList from "../product/ProductList.jsx";
import axios from "axios";

class Monitor extends Component {

    constructor(props) {
        super(props);
        // กำหนด state เก็บค่า totalPrice เริ่มที่ 0 และ orders เป็น array ว่าง
        this.state = {totalPrice: 0, orders: [], confirm: false, msg: ''}
        this.addOrder = this.addOrder.bind(this); //bind(this)กำหนดให้componentอื่นๆมาเรียกthisที่นี้//
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        if(findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({product: product, quantity: 1});
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice); //unitPriceในprops productระบุค่าเป็นstringต้องเปลี่ยนเป็นinteger//
        this.setState({totalPrice: totalPrice, orders: this.state.orders});
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId == product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId != product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({totalPrice: totalPrice, orders: resultOrder});
    }

    cancelOrder() {
        this.setState({totalPrice: 0, orders: [],confirm: false});
    }

    confirmOrder() {
        const {totalPrice, orders} = this.state;
        if(orders && orders.length >0) {
            axios.post("http://localhost:3000/orders",{orderedDate: new Date(), totalPrice, orders})
        .then (res => {this.setState({totalPrice: 0, orders: [],confirm: true, msg: "ยืนยันการสั่งซื้อเรียบร้อย" })});
        } else {this.setState({totalPrice: 0, orders: [],confirm: true, msg: "กรุณาเลือกสินค้าก่อน" })}
        
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.confirm &&
                <div className="alert alert-secondary title text-right" role="alert">{this.state.msg}</div>
                }
                <div className="row">
                    <div className="col-md-9 ">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;