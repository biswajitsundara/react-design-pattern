import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import UserInfo from "./UserInfo";

const ContainerApp = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userid="1234">
        <UserInfo />
      </UserLoader>

      <UserLoader userid="44567">
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default ContainerApp;
