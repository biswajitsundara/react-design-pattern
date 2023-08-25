import NumberedList from "./NumberedList";
import LargePersonList from "./Person/LargePersonList";
import SmallPersonList from "./Person/SmallPersonList";
import LargeProductList from "./Product/LargeProductList";
import RegularList from "./RegularList";
import { people } from "./data/People";
import { products } from "./data/Products";

const ListApp = () => {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonList}
      />

      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonList}
      />

      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductList}
      />
    </>
  );
};

export default ListApp;
