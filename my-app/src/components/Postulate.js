import React from "react";
import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { InputLabel, Input, FormHelperText } from "@material-ui/core";
import NavBarTab from "./NavBarTab";
import teamPic from "./assets/bigteam.jpg";
import { Link } from "react-router-dom";

function Postulate() {
  const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${teamPic});
    background-size: cover;
    color: white;
    height: 850px;
    width: 50%;
    background-position-x: 40%;
  `;

  const Title = styled.div`
    font-size: 85px;
    font-weight: bold;
    margin: 70px;
  `;

  const Subtitle = styled.h2`
    font-size: 80px;
    font-weight: bold;
    margin: 70px;
  `;

  return (
    <div>
      <NavBarTab />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <div>
          <Title>Join the team </Title>
          <Subtitle>Part of the force</Subtitle>
          <Subtitle>(217) 509-6995 </Subtitle>
          <Link to="/" style={{ color: "black" }}>
            <ion-icon
              name="arrow-back"
              style={{
                fontSize: "75px",
                position: "absolute",
                bottom: "35px",
                right: "300px",
              }}
            ></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Postulate;
