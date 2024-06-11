import React,{Component}from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductItems from './components/ProductItems/ProductItems';
import { useState } from 'react';

class App extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <ProductItems name='Macbook' brand='Apple'/>
      <ProductItems name='Vivobook' brand='Acer'/>
      <ProductItems name='Omen' brand='HP'/>
      <Footer company="Verismart" email="support@verismart.co.th"/>
    </div>
    )
  } 
};

export default App;
