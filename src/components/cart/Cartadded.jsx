import './Cartadded.css'

const Cartadded = ({Cart}) => {
      console.log(Cart)
      let total = 0;
      let shipping = 0;
      for(const products of Cart){
        total =    total + products.price;
        shipping = shipping + products.shipping;
      }
      const text = total*5/100;
      const gradent = total + shipping + text
    return (
        <div className='cart'>
          <h1>Bangladesh{Cart.length}</h1>
      <h5>Price:{total}</h5>
      <p>shipping : {shipping} </p>
      <p>text : {text} </p>
      <p>gradent : {gradent}</p>
        </div>
    );
};

export default Cartadded;