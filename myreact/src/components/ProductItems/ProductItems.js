import React, {Component} from "react";
const react = require("react");

class ProductItems extends Component {
    constructor(props) {
        super(props);{
            console.log("constructor|" + props.brand + "|" )
        }
        
        }
    
    render() {
        const {brand, name} = this.props;
        return (
            <div>
            <h1>{brand}</h1>
            <p>{name}</p>
            </div>
        )
    }
}
export default ProductItems ;