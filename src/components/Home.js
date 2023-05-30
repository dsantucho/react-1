import React from 'react';
import BannerImg from '../img/online-shopping.jpg';

//component
import Product from './Product';

const Home = () => {

  return (
    <div class="flex flex-col">
        <div className='border-y-2 border-yellowLight'>
            <img src={BannerImg} alt='banner img' ></img>
        </div>
        <div class="bg-gradient-to-r from-yellowLight to-orange h-full flex  flex-col justify-around ">
            {/* using props */}
            <div className='flex'>
                <Product
                    id='1'
                    title='WLIVE Mesa de centro elevadora para sala de estar, mesa de centro pequeña con almacenamiento'
                    price= {109.99}
                    rating={1}
                    image="https://m.media-amazon.com/images/I/81xhCy8yQ6L._AC_SL1500_.jpg"
                />
                <Product
                    id='2'
                    title='Christopher Knight Home Ottilie - Otomana'
                    price= {209.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/81-YtRA355L._AC_SL1500_.jpg"
                />
            </div>
            <div className='flex'>
                <Product
                    id='3'
                    title='Taburete estilo otomano de terciopelo'
                    price= {309.99}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/71p4Ki4Yp1S._AC_SL1500_.jpg"
                />
                <Product
                    id='4'
                    title='Apple AirTag 4 paquete'
                    price= {409.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71gY9E+cTaS._AC_SL1500_.jpg"
                />           
                <Product
                    id='5'
                    title='Máquina de hielo para encimera, máquina de hielo de 6 minutos'
                    price= {509.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Qf8Ztg1FL._SL1500_.jpg"
                />
            </div>
            <div className='flex'>
                <Product
                    id='6'
                    title='INSIGNIA All-New 50-inch Class F30 Series LED 4K UHD Smart Fire TV (NS-50F301NA24, 2023 Model)'
                    price= {609.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81DM+ZzL8rL._AC_SL1500_.jpg"
                />
            </div>


        </div>

    </div>
  )
}

export default Home