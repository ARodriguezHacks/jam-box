import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Form from "../Form";

function Content() {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  // const getName = () => {
  //   if ()
  // }
  // const userName = currentUser ? currentUser : "currentUser";
  return (
    <>
      <h1>Jam Box</h1>
      <h2>Welcome {currentUser}!</h2>
      <Form />
    </>
  );
}

export default Content;
