import { DataSource } from "./DataSource";
import UserInfo from "../UserInfo";
import axios from "axios";

const DataApp = () => {
  const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const getLocalStorageData = async (key) => {
    console.log(localStorage.getItem(key));
    return localStorage.getItem(key);
  };

  const Text = ({ message }) => <h1>{message}</h1>;

  return (
    <>
      <DataSource
        getDataFunc={() =>
          getDataFromServer("http://127.0.0.1:8080/users/1234")
        }
        resourceName="user"
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={()=>getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
};

export default DataApp;
