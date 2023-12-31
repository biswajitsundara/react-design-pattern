const LargeProductList = ({ product }) => {
    const { name, price, description, rating } = product;
  
    return (
      <>
        <h3>{name}</h3>
        <p>{price}</p>
        <h3>{description}</h3>
        <p>{rating}</p>
      </>
    );
  };
  
  export default LargeProductList;