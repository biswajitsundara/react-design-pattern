import UserInfo from "../UserInfo";
import { ResourceLoader } from "./ResourceLoader";

const ResourceApp = () => {
  return (
    <ResourceLoader
      resourceUrl="http://127.0.0.1:8080/users/1234"
      resourceName="user"
    >
      <UserInfo />
    </ResourceLoader>
  );
};

export default ResourceApp;
