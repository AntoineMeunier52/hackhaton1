import React from "react";
import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { InputLabel, Input, FormHelperText } from "@material-ui/core";
import teamPic from "../components/assets/bigteam.jpg";
import { Link } from "react-router-dom";

function Postulate() {
  const Header = styled.div`
    background-image: url(${teamPic});
    background-size: cover;
    height: 100vh;
    width: 50%;
    background-position-x: 40%;
  `;

  const Title = styled.div`
    font-size: 85px;
    font-weight: bold;
    margin: 70px;
    color: black;
  `;

  const Subtitle = styled.h2`
    font-size: 70px;
    font-weight: bold;
    margin: 70px;
    color: black;
  `;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <Title>Join the team </Title>
          <Subtitle>Part of the force</Subtitle>
          <Subtitle>(217) 509-6995 </Subtitle>
          <Link to="/" style={{ color: "black" }}>
            <ion-icon
              name="arrow-back"
              style={{
                fontSize: "100px",
                position: "absolute",
                bottom: "130px",
                left: "240px",
              }}
            ></ion-icon>
          </Link>
        </div>
        <Header />
      </div>
    </div>
  );
}
export default Postulate;
