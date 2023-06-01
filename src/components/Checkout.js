import React from 'react';

//img
import BannerAdd from '../img/banner-add.png';


//component
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
//context
import {useStateValue} from '../context/StateProvider'

const Checkout = () => {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='bg-gradient-to-r from-yellowLight to-orange h-full flex p-3'>
      <div className='flex flex-col '>
        <img src={BannerAdd} alt='banner add' className='max-h-[400px] mb-3'/>
        <h2 className='font-bold text-2xl'>Your shopping basket</h2>
        {basket.map(item =>(
          <CheckoutProduct
            id = {item.id}
            image={item.image}
            title ={item.title}
            price = {item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className='bg-grey w-2/4 ms-3 h-fit p-5 rounded border-solid border-greyDarker flex flex-col'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout