
import { combineReducers } from '@reduxjs/toolkit';
import { reducer as reduxForm} from 'redux-form';
import ProductReducer from './ProductReducer.jsx'; //ต้องการรวม state productและorder มารวมใน reducers
import OrderReducer from './OrderReducer.jsx' ;

const rootReducer = combineReducers({
  orders: OrderReducer, //ค้องการเปลี่ยนค่า order ต้องส่ง action มาที่นี่
  products: ProductReducer,
  form : reduxForm, //
})

export default rootReducer;


S