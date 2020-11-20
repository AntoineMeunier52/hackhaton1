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
          console.log(res);
          setGetPic((prevState) => [...prevState, res.url]);
          console.log(getPic);
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
    background-color: lightgreen;
    border: 5px solid black;
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
  `;

  return (
    <AlcoolCard>
      <AlcoolImg />
      <AlcoolContent>
        <p>{alcool.title}</p>
        <p>Price : {alcool.price} $</p>
        <button
          onClick={() => {
            handleShoppingAdd(alcool);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            handleShoppingRemove(alcool);
          }}
        >
          Remove
        </button>
      </AlcoolContent>
    </AlcoolCard>
  );
}
export default AlcoolInfoCard;
