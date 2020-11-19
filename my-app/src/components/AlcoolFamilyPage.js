import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBarTab from "./NavBarTab";
import AlcoolList from "./AlcoolList";
import styled from "styled-components";
import picture1 from "../components/assets/prohibition_family_1.jpg";
import picture2 from "../components/assets/Prohibition_pic2.jpg";
import picture3 from "../components/assets/picture-3.jpg";

function AlcoolFamilyPage({
  alcoolList,
  handleShoppingAdd,
  handleShoppingRemove,
}) {
  console.log(alcoolList);

  const { name } = useParams();
  const [pictureFamily, setPictureFamily] = useState("");

  const getPictureFamily = () => {
    switch (name) {
      case "Yaniso":
        setPictureFamily(picture1);
        break;
      case "Elvio":
        setPictureFamily(picture2);
        break;
      case "Alfonso":
        setPictureFamily(picture3);
        break;
      default:
        return "No Famiglia";
    }
  };

  useEffect(() => {
    console.log(name);
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
        {" "}
        <Title>{name}'s Famiglia</Title>{" "}
      </Header>
      <Link to="/">
        <div>Back</div>
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
