import React from 'react';
import { useStateValue } from '../context/StateProvider';

const Product = ({id, title, image, price, rating}) => {

  const [state, dispatch] = useStateValue();

  const addToBasket = ()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        image: image,
        price:price,
        rating:rating
      },
    });
  };

  return (
    <div className='flex flex-col bg-background justify-between m-3 p-5 min-w-[100px] max-h-[600px]'>
        <div className=' flex flex-col content-start justify-between flex-wrap'>
            <h3>{title}</h3>
            <p className='mt-2'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='flex'>
                {Array(rating)
                .fill()
                .map(
                   (_,i)=>(
                    <p>⭐</p>
                   ))}
            </div>
        </div>
        <img src={image} alt='product' className='max-h-[200px] w-screen my-5 object-contain'></img>
        <button className='bg-orange text-black p-2' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product