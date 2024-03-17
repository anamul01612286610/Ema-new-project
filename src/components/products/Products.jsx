import './Products.css'
const Products = (props) => {
    const {name,id,img,price,seller,ratings} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3> 
            <h4>Prince: ${price}</h4>
            <h5>Manufacturer:{seller}</h5>
            <h6>Rating:{ratings}</h6>

            </div>
         <button className='btn-product'>Add to cord</button>
        </div>
    );
};

export default Products;