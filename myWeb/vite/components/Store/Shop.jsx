import React, { Component } from 'react';
import Header from "./Header.jsx";
import Monitor from "./monitor/monitor.jsx";
import Footer from "./Footer.jsx";
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
// import ProductItem from "./components/product/ProductItem";
import { connect } from 'react-redux';
import { productsFetch} from '../../src/actions/ProductActions.jsx'
class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = { products : []} 
  }

  componentDidMount() {
    // this.props.productsFetch();
    /*วิธที่1
    this.setState({products : [
      { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/product/1.jpg" },
      { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/product/2.jpg" },
      { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/product/3.jpg" },
      { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/product/4.jpg" },
      { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/product/5.jpg" },
      { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/product/6.jpg" }
  ]}) */
    /*วิธีที่2 รับข้อมูลจากhtml
    fetch("http://localhost:3000/products",{method : "GET"})
     .then(res => res.json())
     .then(res => {this.setState({ products: res})})*/
    /*วิธีที่3 รับข้อมูลจากaxios*/
    axios.get("http://localhost:3000/products")
   .then(res => {
    this.setState({ products: res.data})})
  }
  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="Firefly" email="MC@harmony.com" />
      </div>
    );
  }

}

// function mapStateToProps({ products }) { 
//   return { products };
  
// }

// export default connect(mapStateToProps,{productsFetch})(Shop);
export default Shop