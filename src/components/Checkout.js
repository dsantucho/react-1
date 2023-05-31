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
    <div className='bg-gradient-to-r from-yellowLight to-orange h-full flex p-3'>
      <div className='flex flex-col '>
        <img src={BannerAdd} alt='banner add' className='max-h-[400px] mb-3'/>
        <h2 className='font-bold text-2xl'>Your shopping basket</h2>
        <CheckoutProduct id={234234234234} image={ImgPrueba} title='Somethign sdfsdfsdfsdfsdf sdfsdf sdf sdf ' price={100.99} rating={5}/>
        <CheckoutProduct id={22212} image={ImgPrueba} title='Somethign sdfsdfsdfsdfsdf sdfsdf sdf sdf 123123123 ' price={1100.99} rating={5}/>
        <CheckoutProduct id={123321} image={ImgPrueba} title='Somethign sdfsdfsdfsdfsdf sdfsdf sdf sdf asdasd' price={10.99} rating={2}/>
        <CheckoutProduct id={4432423} image={ImgPrueba} title='Somethign sdfsdfsdfsdfsdf sdfsdf sdf asdsadsasdf ' price={10.99} rating={1}/>
      </div>
      <div className='bg-grey w-2/4 ms-3 h-fit p-5 rounded border-solid border-greyDarker flex flex-col'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout