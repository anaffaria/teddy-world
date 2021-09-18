import UserOff from "../UserOff/UserOff";
import UserOn from "../UserOn/UserOn";

export function ToggleUser() {
  const token = sessionStorage.getItem("token");
  if (token !== null) {
    return <UserOn />;
  }
  return <UserOff />;
}
