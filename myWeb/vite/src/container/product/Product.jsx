import React,{Component} from "react";
import Header from "../../../components/Store/Header";
import Footer from "../../../components/Store/Footer";
import ProductList from "../../../components/Store/product/ProductList";
import axios from "axios";
import { useNavigate } from 'react-router';

const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products:[]};
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:3000/products")
            .then(res => {
                this.setState({products: res.data});
            });
    }

    delProduct(product) {
        axios.delete("http://localhost:3000/products/" + product.id)
        .then(res => {
            this.setState({products: res.data});
        });
}

    editProduct(product) {
        this.props.history.push('products/edit' + product.id)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h1>สินค้า</h1>
                        </div>
                        <div className="col-6 text-right">
                            <button className="btn btn-success tile float-right" 
                            onClick={() => this.props.history.push('products/add')}>เพิ่มสินค้า</button>
                        </div>
                    </div>
                    <ProductList products={this.state.products} onDelProduct={this.delProduct} onEditProduct={this.editProduct} />
                </div>
                
                
                <Footer company="Firefly" email="MC@harmony.com" />
            </div>
        );
    };
}
export default withRouter(Product);