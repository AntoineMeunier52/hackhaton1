import React from "react";

class ConfirmProduit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="produit-container">
        <div
          style={{ backgroundImage: `url(${this.props.productImage})` }}
          className="produit-image"
        ></div>
        <p>{this.props.name}</p>
        <p className="produit-prix">{this.props.price}</p>
      </div>
    );
  }
}

export default ConfirmProduit;