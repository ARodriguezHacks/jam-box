import { useContext } from "react";
import UserContext from "./contexts/UserContext";

function App() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Jam Box</h1>
      <h2>Welcome {user.name}</h2>
    </div>
  );
}

export default App;
