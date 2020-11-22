import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bottle from "./assets/bottlePeaky.png";
import axios from "axios";
import CardAlcool from "./CardAlcool";

function AlcoolInfoCard({ alcool, handleShoppingAdd, handleShoppingRemove }) {
  const [getPic, setGetPic] = useState([]);

  const getPicures = () => {
    if (alcool.img_url !== null) {
      axios
        .get("https://evening-citadel-85778.herokuapp.com/whiskey/")
        .then((res) => {
          setGetPic((prevState) => [...prevState, res.url]);
        })
        .catch((error) => {
          console.log(error);
          setGetPic((prevState) => [...prevState, bottle]);
        });
    } else {
      console.log("pas axios");
    }
  };

  useEffect(() => {
    getPicures();
  }, []);

  const AlcoolCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 250px;
    margin: 5px;
    background-color: #464646;
    color: #d4d4d4;
  `;
  const AlcoolImg = styled.div`
    background-image: url(${alcool.list_img_url
      ? alcool.list_img_url
      : bottle});
    background-size: cover;
    height: 80%;
    width: 100%;
  `;
  const AlcoolContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  align-text: center
  width: 250px;
  `;

  return (
    <AlcoolCard>
      <AlcoolImg />
      <AlcoolContent>
        <p style={{ margin: "0 10px" }}>{alcool.title}</p>
        <p style={{ margin: "0 10px" }}>Price : {alcool.price} $</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "250px",
            marginTop: "8px",
          }}
        >
          <button
            style={{ width: "50%", color: "#464646", padding: "1px 0 " }}
            onClick={(e) => {
              handleShoppingAdd(e, alcool);
            }}
          >
            Add
          </button>
          <button
            style={{ backgroundColor: "transparent", width: "50%" }}
            onClick={(e) => {
              handleShoppingRemove(e, alcool);
            }}
          >
            Remove
          </button>
        </div>
      </AlcoolContent>
    </AlcoolCard>
  );
}
export default AlcoolInfoCard;
