import "./App.css";
import MainPage from "./components/MainPage";
import AlcoolFamilyPage from "./components/AlcoolFamilyPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [alcoolFamily1, setFamilyAlcool1] = useState([]);
  const [alcoolFamily2, setFamilyAlcool2] = useState([]);
  const [alcoolFamily3, setFamilyAlcool3] = useState([]);

  const getAlcool1 = () => {
    axios
      .get("https://evening-citadel-85778.herokuapp.com:443/whiskey/")
      .then((res) => {
        console.log(res);
        setFamilyAlcool1(res.data.results);
      });
  };

  useEffect(() => {
    getAlcool1();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} />} />
        <Route
          exact
          path="/family/:name"
          render={(props) => (
            <AlcoolFamilyPage {...props} alcoolList={alcoolFamily1} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
