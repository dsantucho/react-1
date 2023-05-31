import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//img
import BannerAdd from '../img/banner-add.png';
import ImgPrueba from '../img/hielo.jpg'

//component
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className='bg-gradient-to-r from-yellowLight to-orange h-full flex'>
      <div>
        <img src={BannerAdd} alt='banner add' className='max-h-[500px] p-5'/>
        <h2 className='font-bold text-2xl ms-5'>Your shopping basket</h2>
        <CheckoutProduct id={1232} image={ImgPrueba} title='Somethign sdfsdfsdfsdfsdf sdfsdf sdf sdf ' price={100.99} rating={5}/>
      </div>
      <div className='bg-yellowLight w-2/4'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout