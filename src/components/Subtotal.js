import React from 'react';
import CurrencyFormat from 'react-currency-format';

//context
import { useStateValue } from '../context/StateProvider';
import {getBasketTotal} from '../context/reducer';

const Subtotal = () => {
  const [{basket}, dispatch] =useStateValue();
  return (
    <div className='flex flex-col justify-between'>
      <CurrencyFormat
        renderText = {(value)=>(
          <>  
            <p className='my-3'>
              Subtotal ({basket.length} items): <strong>${value}</strong>
            </p>
            <small className='flex items-center'>
              <input type='checkbox' className='my-1 mr-1'/> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator = {true}

      />
      <button className="bg-orange text-black p-2 my-1">Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal