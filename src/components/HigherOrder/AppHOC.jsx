import PrintProps from "./PrintProps";
import UserInfo from "./UserInfo";

const UserInforWrapped = PrintProps(UserInfo);

const AppHOC = () => {
    return ( <UserInforWrapped a={1} b="Hello" c={{name: 'Bis'}}/> );
}
 
export default AppHOC;