import axios from "axios";
import { PRODUCT_FETCH } from "./types";

// กำหนด action เพื่อเอาไปใช้ใน Reducers

export const productsFetch = () =>{
    return dispatch => {
        axios.get("http://localhost:3000/products").then(
         res => {
            dispatch( { type : PRODUCT_FETCH , payload : res.data });//ตั้งชื่อ action
         });
        }
}

export const productDelete = id =>{
    return dispatch => {
        axios.delete("http://localhost:3000/products" + id).then(
         res => {
            axios.get("http://localhost:3000/products").then(
            res => {dispatch( { type : PRODUCT_FETCH , payload : res.data });
         });
        });
    }
}