import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Products from '../products/Products';

const Shop = () => {
    const [products,setproducts] = useState([])
     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setproducts(data))
         },[])
    return (
        <div className='Shop-container'>
          <div className='product-container'>
          {
            products.map(product =><Products
            product ={product}
            
            key ={name}

            >

            </Products>
            )
          }
          </div>
          <div>
            <h1>india</h1>
          </div>
        </div>
    );
};

export default Shop;