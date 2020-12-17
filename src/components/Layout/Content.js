import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Form from "../Form";

function Content() {
  const { currentUser } = useContext(UserContext);
  return (
    <main className="content">
      <h1>Jam Box</h1>
      <h2>Welcome {currentUser}!</h2>
      <Form />
    </main>
  );
}

export default Content;
