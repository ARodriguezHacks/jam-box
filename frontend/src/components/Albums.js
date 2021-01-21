import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Albums() {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {currentUser}! This is the Albums Page</h1>
    </div>
  );
}

export default Albums;
