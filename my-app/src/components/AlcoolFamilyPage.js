import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBarTab from "./NavBarTab";
import AlcoolList from "./AlcoolList";
import styled from "styled-components";
import picture1 from "../components/assets/prohibition_family_1.jpg";
import picture2 from "../components/assets/pic_2_dark.png";
import picture3 from "../components/assets/pic_3-dark.png";

function AlcoolFamilyPage({
  alcoolList,
  handleShoppingAdd,
  handleShoppingRemove,
}) {
  const { name } = useParams();
  const [pictureFamily, setPictureFamily] = useState("");

  const getPictureFamily = () => {
    switch (name) {
      case "Gambino":
        setPictureFamily(picture1);
        break;
      case "Lucchese":
        setPictureFamily(picture2);
        break;
      case "Bonanno":
        setPictureFamily(picture3);
        break;
      default:
        return "No Famiglia";
    }
  };

  useEffect(() => {
    getPictureFamily();
  }, []);

  const FamilyPage = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Header = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${pictureFamily});
    background-size: cover;
    height: 850px;
    width: 100%;
  `;
  const Title = styled.div`
    margin: 150px;
    font-size: 200px;
    color: white;
  `;

  return (
    <FamilyPage>
      <NavBarTab />
      <Header>
        <Title>{name}'s Famiglia</Title>
      </Header>
      <Link
        to="/"
        style={{
          color: "white",
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      >
        <ion-icon
          name="arrow-back"
          color="white"
          style={{
            color: "black",
            fontSize: "60px",
            position: "absolute",
            bottom: "35px",
            left: "45px",
          }}
        ></ion-icon>
      </Link>
      <AlcoolList
        alcoolList={alcoolList}
        handleShoppingAdd={handleShoppingAdd}
        handleShoppingRemove={handleShoppingRemove}
      />
    </FamilyPage>
  );
}
export default AlcoolFamilyPage;
