import axios from "axios";
import { ORDERS_FETCH } from "./types";

// กำหนด action เพื่อเอาไปใช้ใน Reducers

export const ordersFetch = () =>{
    return dispatch => {
        axios.get("http://localhost:3000/orders").then(
         res => {
            dispatch( { type : ORDERS_FETCH ,payload : res.data });//ตั้งชื่อ action
         });
        }
}

export const orderDelete = id =>{
    return dispatch => {
        axios.delete("http://localhost:3000/orders/" + id).then(
         res => {
            axios.get("http://localhost:3000/orders").then(
            res => {dispatch( { type : ORDERS_FETCH ,payload : res.data });
         });
        });
    }
}