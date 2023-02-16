import { Outlet } from "react-router-dom";
import UserChatComponent from "../../components/UserChatComponent";

const RoutesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent /> <Outlet />{" "}
    </>
  );
};

export default RoutesWithUserChatComponent;
