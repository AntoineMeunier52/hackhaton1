import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/assets/logoPeaky.png";

function FinishAchat() {
  const [pwd, setPwd] = useState([]);

  const passwordType = [
    "drinking so wildy",
    "Fake it, until you drink it",
    "Caput draconis",
    "Alea jacta est",
    "Wild is coming",
  ];

  const randomPwd = () => {
    const min = 1;
    const max = passwordType.length;
    const rand = Math.round(min + Math.random() * (max - min));
    setPwd(passwordType[rand]);
    return rand;
  };

  useEffect(() => {
    randomPwd();
  }, []);

  return (
    <>
      <img src={logo} className="confirm-logo" />
      <div className="finishAchat-container">
        <p className="finishAchat-remerciement">thank you for your purchase</p>
        <p className="finishAchat-password">your order arrives in: 1H</p>
        <p className="finishAchat-password">le mot de passe: {pwd} </p>
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
