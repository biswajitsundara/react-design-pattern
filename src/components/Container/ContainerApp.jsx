import { CurrentUserLoader } from "./CurrentUserLoader";
import UserInfo from "./UserInfo";

const ContainerApp = () => {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
};

export default ContainerApp;
