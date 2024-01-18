
import React from 'react';
import CardProduct from "./CardProduct.js";
import Data from './Data.js';
import ProductNavbar from './ProductNavbar.js';

export default function Product(props){
    const dataComp = Data.map((item) => 
      <div> 
        {
          <div className="p-6">
          <p id={item.section} className="text-3xl font-bold flex py-6">{item.section}</p>
          <div className='flex justify-start flex-wrap gap-6 md:justify-around'>
          {   
              item.detail.map((data) => 
              <CardProduct image={data.image} name={data.name}/>
              )
              
          } 
          </div>
          </div>
       }
       </div> 
      )

   return(
    <section>
    <ProductNavbar/>
    {dataComp}
    </section>
   )
}