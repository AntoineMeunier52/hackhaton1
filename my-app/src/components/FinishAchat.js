import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/assets/logoPeaky.png";

function FinishAchat() {
  const [pwd, setPwd] = useState([]);

  const passwordType = [
    "Drinking so wildy",
    "Drinking so wildy",
    "Fake it, until you drink it",
    "Snitches are for the fishes",
    "Wild is coming",
  ];

  const randomPwd = () => {
    const min = 1;
    const max = passwordType.length - 1;
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
        <p className="finishAchat-remerciement">Thank you for your purchase</p>
        <p className="finishAchat-password">your order arrives within 1 hour</p>
        <p className="finishAchat-password">Password for the boy : {pwd} </p>
        <p className="finishAchat-message">
          *when you the delivery man ask "Peaky P ?" in your location please
          repeat the password
        </p>
        <p className="finishAchat-message">*Tips for the boys are welcomed</p>
        <Link to="/" className="finishAchat-link">
          return to the site
        </Link>
      </div>
    </>
  );
}
export default FinishAchat;
