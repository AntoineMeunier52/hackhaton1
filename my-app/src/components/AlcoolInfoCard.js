import React from "react";
import styled from "styled-components";
import bottle from "./assets/bottle.JPG";

function AlcoolInfoCard({ alcool }) {
  console.log(alcool.list_img_url);
  const AlcoolCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 150px;
    text-align: center;
    background-color: lightgreen;
  `;

  const AlcoolImg = styled.div`
    background-image: url(${alcool.img_url ? alcool.img_url : bottle});
    background-size: cover;
    height: 65%;
    width: 100%;
  `;

  return (
    <AlcoolCard>
      <AlcoolImg />
      <p>Nom</p>
      <p>Price : {alcool.price}$</p>
    </AlcoolCard>
  );
}
export default AlcoolInfoCard;
