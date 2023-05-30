import React from "react";
//icons
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="bg-black flex text-white z-50 items-center sticky top-0 h-14 justify-evenly px-4">
      <div className="flex items-center">
        <StoreIcon fontSize="large" className=" mx-3 text-orange" />
        <h2 className="font-bold  mr-3">eShop</h2>
      </div>
      <div className="flex items-center flex-1  ">
        <input type="text" className="grow bg-background " />
        <SearchIcon  className="bg-orange h-5 text-black p-1" />
      </div>
      <div className="flex items-center">
        <div className="flex flex-col mx-3">
          <span>Hello Guest</span>
          <span className="font-bold">Sign In</span>
        </div>
        <div className="flex flex-col mx-3">
          <span >Your</span>
          <span className=" font-bold">Shop</span>
        </div>
        <div className="flex mx-3 ">
          <ShoppingBasketRoundedIcon fontSize="medium" className="mx-2"/>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;