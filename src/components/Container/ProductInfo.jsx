const ProductInfo = ({ product }) => {
    const { name, price, description, rating } = product || {};
  
    return product ? (
      <>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{description}</p>
        <p>{rating}</p>
      </>
    ) : (
      <p>Loading..</p>
    );
  };
  
  export default ProductInfo;
  