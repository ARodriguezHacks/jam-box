import { Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import Albums from "./components/Albums";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/albums" component={Albums} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
