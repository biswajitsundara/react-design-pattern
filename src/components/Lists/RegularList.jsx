/**
 * const resourceName = "product";
   const item = {
       name: "Smartphone",
       price: 499.99,
    };
  const newItem = {...{[resourceName]:item}};  
  console.log(newItem);
 */

const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
