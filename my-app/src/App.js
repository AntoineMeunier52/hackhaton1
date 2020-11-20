import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ConfirmPage from "./components/ConfirmPage";
import MainPage from "./components/MainPage";
import AlcoolFamilyPage from "./components/AlcoolFamilyPage";
import Postulate from "./Postulate";
import Manifesto from "./Manifesto";

function App() {
  const [alcoolFamily1, setFamilyAlcool1] = useState([]);
  const [alcoolFamily2, setFamilyAlcool2] = useState([]);
  const [alcoolFamily3, setFamilyAlcool3] = useState([]);
  const [shoppingCart, setShoppintCart] = useState([]);
  const [status, setStatus] = useState(false);

  const getAlcool1 = () => {
    axios
      .get("https://evening-citadel-85778.herokuapp.com:443/whiskey/")
      .then((res) => {
        console.log(res);
        setFamilyAlcool1(res.data.results);
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAlcool1();
  }, []);

  const handleShoppingAdd = (alcool) => {
    console.log("New product", alcool);
    setShoppintCart((prevState) => [...prevState, alcool]);
  };

  const handleShoppingRemove = (alcool) => {
    console.log("Remove product", alcool);
    setShoppintCart((prevState) => {
      if (prevState.includes(alcool)) {
        return prevState.filter((product) => product !== alcool);
      } else {
        return [...prevState];
      }
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} />} />
        <Route
          exact
          path="/family/:name"
          render={(props) => (
            <AlcoolFamilyPage
              {...props}
              alcoolList={alcoolFamily1}
              handleShoppingAdd={handleShoppingAdd}
              handleShoppingRemove={handleShoppingRemove}
            />
          )}
        />
        <Route exact path="/postulate">
          <Postulate />
        </Route>
        <Route exact path="/manifesto">
          <Manifesto />
        </Route>
        <Route
          exact
          path="/shopping"
          render={(props) => (
            <ConfirmPage shoppingCart={shoppingCart} status={status} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
