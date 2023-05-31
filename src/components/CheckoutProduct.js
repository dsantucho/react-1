import React from "react";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
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
        <button className="bg-orange text-black p-2">Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
