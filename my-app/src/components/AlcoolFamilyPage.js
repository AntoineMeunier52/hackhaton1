import React from "react";
import { Link } from "react-router-dom";
import NavBarTab from "./NavBarTab";
import AlcoolList from "./AlcoolList";
import styled from "styled-components";
import picture1 from "./assets/prohibition_family_1.jpg";
function AlcoolFamilyPage({ alcoolList }) {
  console.log(alcoolList);

  const FamilyPage = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Header = styled.div`
    background-image: url("./assets/prohibition_family_1.jpg");
    background-size: cover;
    height: 500px;
    width: 100%;
  `;

  return (
    <FamilyPage>
      <NavBarTab />
      <Header />
      <Link to="/">
        <div>Back</div>
      </Link>
      <AlcoolList alcoolList={alcoolList} />
    </FamilyPage>
  );
}
export default AlcoolFamilyPage;
