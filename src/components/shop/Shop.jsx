import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Products from '../products/Products';

const Shop = () => {
    const [products,setproducts] = useState([])
    const [Cart,setCart] = useState([])
    
     useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setproducts(data))
         },[])
   const handleAddToCard = (props)=>{
        const newCart = [...Cart,products]
        setCart(newCart);
   }


    return (
        <div className='Shop-container'>
          <div className='product-container'>
          {
            products.map(product =><Products
            product ={product}
            
            key ={name}
            handleAddToCard = {handleAddToCard}
            >

            </Products>
            )
          }
          </div>
          <div>
            <h1>Count: {Cart.length}</h1>
          </div>
        </div>
    );
};

export default Shop;