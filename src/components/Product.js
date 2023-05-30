import React from 'react'

const Product = ({id, title, image, price, rating}) => {
  return (
    <div className='flex flex-col bg-background justify-end m-3 p-5 min-w-[100px] max-h-[400px]'>
        <div className=' flex flex-col content-start flex-wrap'>
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
        <button className='bg-orange text-black p-2'>Add to Basket</button>
    </div>
  )
}

export default Product