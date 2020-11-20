import React from "react";
import bottle from "./assets/bottlePeaky.png";
class ConfirmProduit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="produit-container">
        <p className="produit-name">{this.props.name}</p>
        <p className="produit-prix">{this.props.price}</p>
      </div>
    );
  }
}
export default ConfirmProduit;
