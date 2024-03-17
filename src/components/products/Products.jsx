import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const {name,id,img,price,seller,ratings} = props.product;
   const handleAddToCard = props.handleAddToCard;
    
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3> 
            <h4>Prince: ${price}</h4>
            <h5>Manufacturer:{seller}</h5>
            <h6>Rating:{ratings}</h6>

            </div>
         <button onClick={()=>handleAddToCard(props.product)} className='btn-product'>
            Add to cord
            <FontAwesomeIcon icon={faCoffee} />
            </button>
        </div>
    );
};

export default Products;