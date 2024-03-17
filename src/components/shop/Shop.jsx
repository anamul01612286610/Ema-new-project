import { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products , setproducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data =>setproducts(data))
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
              
            </div>
            <div className="card-container">
            
            </div>
        </div>
    );
};

export default Shop;