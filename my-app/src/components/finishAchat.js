import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/assets/logoPeaky.png";

function FinishAchat() {
  return (
    <>
      <img src={logo} className="confirm-logo" />
      <div className="finishAchat-container">
        <p className="finishAchat-remerciement">thank you for your purchase</p>
        <p className="finishAchat-password">
          le mot de passe: drinking so wildy
        </p>
        <p className="finishAchat-message">
          *when you the delivery man say the password in your location please
          repet the password
        </p>
        <Link to="/" className="finishAchat-link">
          return to the site{" "}
        </Link>
      </div>
    </>
  );
}
export default FinishAchat;
