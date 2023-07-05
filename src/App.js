import "./App.css";
import CountryDetails from "./components/country-details/details";
import Home from "./page-home/home";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Header from "../src/components/header/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/country/:name" component={CountryDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
