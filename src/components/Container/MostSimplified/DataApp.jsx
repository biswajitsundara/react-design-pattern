import { DataSource } from "./DataSource";
import UserInfo from '../UserInfo';
import axios from "axios";

const DataApp = () => {
  const getDataFromBackend = async () => {
    const response = await axios.get("http://127.0.0.1:8080/users/1234");
    return response.data;
  };
  return (
    <DataSource getDataFunc={getDataFromBackend} resourceName="user">
      <UserInfo />
    </DataSource>
  );
};

export default DataApp;
