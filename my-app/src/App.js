import React from "react";
import axios from "axios";
import "./App.css";
import ConfirmPage from "./components/ConfirmPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wisky: [],
      status: null,
    };
  }

  getAlcool1 = () => {
    axios
      .get("https://evening-citadel-85778.herokuapp.com:443/whiskey/")
      .then((res) => {
        this.setState({ wisky: res.data.results, status: "OK" });
      });
  };

  componentDidMount() {
    this.getAlcool1();
  }

  render() {
    return (
      <div className="App">
        <ConfirmPage wisky={this.state.wisky} status={this.state.status} />
      </div>
    );
  }
}

export default App;
