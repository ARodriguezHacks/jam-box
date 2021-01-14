import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
//import Form from "./components/Form";

function App() {
  //const { currentUser } = useContext(UserContext);

  //console.log(currentUser);
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
