import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root.jsx';
import ErrorPage from './routes/error-page.jsx';
import Contact from "./routes/contact";
import Todo from "../components/Todo.jsx";
import Payment from "../components/Payment/Payment.jsx" ;
import Orders from './container/order/Orders.jsx'
import Product from './container/product/Product.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import NotFound from './container/error/NotFound.jsx';
import Shop from '../components/Store/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="contact">Contact Us</Link>
      </div>
        ),
  },
  { path: "/about/contact",
    element: (<div className='container-fluid'>
      <h1>About the author</h1>
      <hr/><h2>pkarnchang "มือใหม่แต่ก็เก๋าพอตัวนะ"</h2>
      <span className='text-danger'>Powered by Verismart</span>
      </div>) 
  },
  {
    path: "/api",
    element: <Root />,
  },
  {
    path: "/contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/store",
    element: <Shop />,
  },
  {
    path: "/store/orders",
    element: <Orders />,
  },
  {
    path: "/products",
    element: <Product />,
  },

]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);