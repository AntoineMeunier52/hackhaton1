import React from "react";
import styled from "styled-components";
import AlCapone from "./assets/Al_Capone.jpg";
import Don from "./assets/don.png";

function WhoWeAre({}) {
  const Container = styled.div`
  width: 100%
  height: 100%
  display: flex;
  flex-direction : column;
  `;
  const Card = styled.div`
    height: 650px;
    width: 100%;
    display: flex;
    flex-direction: row;
  `;
  const CardImageAl = styled.div`
    margin: 25px;
    height: 550px;
    width: 450px;
    background-image: url(${AlCapone});
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const CardImageDon = styled.div`
    margin: 25px;
    height: 550px;
    width: 450px;
    background-image: url(${Don});
    background-size: cover;
    background-repeat: no-repeat;
  `;

  const Content = styled.div`
    margin: 25px 0px;
    text-align: center;
    font-weight: bold;
  `;

  return (
    <Container>
      <Card>
        <CardImageAl />
        <Content>
          <h1 style={{ fontSize: "80px", margin: "0px 0px 50px 0px" }}>
            Al capone
          </h1>

          <div style={{ fontSize: "40px", margin: "0px 0px 50px 0px" }}>
            Business man willing to help his brother when the governement is
            against us.
          </div>
        </Content>
      </Card>
      <Card>
        <CardImageDon />
        <Content>
          <h1 style={{ fontSize: "80px", margin: "0px 25px 25px 0px" }}>
            Don Corleone
          </h1>
          <div style={{ fontSize: "30px", margin: "0px 25px px 0px" }}>
            Loving and charming godfather of the people that always an offer
            people can't refuse.
          </div>
        </Content>
      </Card>
    </Container>
  );
}
export default WhoWeAre;
