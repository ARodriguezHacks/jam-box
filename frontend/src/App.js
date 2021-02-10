import { Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import About from "./pages/About";
import Songs from "./pages/Songs";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/search" component={Songs} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
