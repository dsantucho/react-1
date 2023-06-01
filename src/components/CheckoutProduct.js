import React from "react";
//context
import { useStateValue } from "../context/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id: id
    })
  }
  return (
    <div className="flex bg-background my-2 p-4">
      <div>
        <img
          src={image}
          alt="product"
          className="max-h-[180px] m-5 object-contain"
        ></img>
      </div>
      <div className=" flex flex-col content-start justify-between flex-wrap ms-4">
        <h3 className="text-xl font-extrabold">{title}</h3>
        <p className="mt-2">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="bg-orange text-black p-2" onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
