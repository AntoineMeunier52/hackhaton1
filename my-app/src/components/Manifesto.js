import React from "react";
import whyski_B from "../components/assets/whyski_bw.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Manifesto() {
  const BackImg = styled.div`
    background-image: url(${whyski_B});
    background-size: cover;
    height: 100vh;
    width: 100%;
    font-family: "Oswald", sans-serif;
  `;

  return (
    <BackImg>
      <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
        <div
          style={{ fontWeight: "bold", fontSize: "55px", margin: "100px 45px" }}
        >
          Manifesto of Peaky Prohibition
        </div>

        <div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              margin: "90px 10px 0px 45px ",
            }}
          >
            Individuals and interactions
          </span>
          <span style={{ fontSize: "20px" }}>over mad governement.</span>
        </div>
        <div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              margin: "90px 10px 0px 45px ",
            }}
          >
            Distinguished breweries
          </span>
          <span style={{ fontSize: "20px" }}>over common beverages.</span>
        </div>
        <div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              margin: "90px 10px 0px 45px ",
            }}
          >
            Adapting to change
          </span>
          <span style={{ fontSize: "20px" }}>
            {" "}
            over letting our freedom go.
          </span>
        </div>
        <Link to="/" style={{ color: "white" }}>
          <ion-icon
            name="arrow-back"
            color="white"
            style={{
              color: "white",
              fontSize: "55px",
              position: "absolute",
              bottom: "35px",
              left: "45px",
            }}
          ></ion-icon>
        </Link>
      </div>
    </BackImg>
  );
}
export default Manifesto;
