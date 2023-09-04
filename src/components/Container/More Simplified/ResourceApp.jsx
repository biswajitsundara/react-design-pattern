import UserInfo from "../UserInfo";
import ProductInfo from "../ProductInfo";
import { ResourceLoader } from "./ResourceLoader";

const ResourceApp = () => {
  return (
    <>
      <ResourceLoader
        resourceUrl="http://127.0.0.1:8080/users/1234"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl="http://127.0.0.1:8080/products/34567890"
        resourceName="product"
      >
        <ProductInfo />
      </ResourceLoader>
    </>
  );
};

export default ResourceApp;
