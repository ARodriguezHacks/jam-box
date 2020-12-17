import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import Header from "./components/Layout/Header";
import Form from "./components/Form";

function App() {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return (
    <main>
      <Header />
      <h1>Jam Box</h1>
      <h2>Welcome {currentUser}!</h2>
      <Form />
    </main>
  );
}

export default App;
