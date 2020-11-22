import React, { useState, useEffect } from "react";
import styled from "styled-components";

function FamilySection({ name, picture, alcoolList, message }) {
  const [isHover, setIsHover] = useState(false);

  //   console.log(picture);
  //   console.log(alcoolList);
  //   const [listAlcool, setlistAlcool] = useState([]);
  //   const randomAlcool = () => {
  //     if (alcoolList.length) {
  //       const min = 1;
  //       const max = alcoolList.length;
  //       const rand = Math.round(min + Math.random() * (max - min));
  //       const newSmallList = [
  //         alcoolList[rand],
  //         alcoolList[rand],
  //         alcoolList[rand],
  //         alcoolList[rand],
  //       ];
  //       setlistAlcool(newSmallList);
  //       console.log(listAlcool);
  //     }
  //   };

  //   useEffect(() => {
  //     randomAlcool();
  //   }, []);

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        margin: "25px 0px",
        padding: "0px 15px",
        backgroundColor: isHover ? "rgba(0, 0, 0, 0.2)" : "white",
      }}
    >
      <img
        src={picture}
        alt="Famiglia's picture"
        style={{ height: "15%", width: "20%" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontSize: "80px", padding: "10px 120px", color: "black" }}
        >
          {name}'s brewery
        </div>
        <div
          style={{
            fontSize: "30px",
            padding: "40px 120px",
            color: "black",
            textAlign: "center",
          }}
        >
          "{message}"
        </div>
      </div>
    </div>
  );
}
export default FamilySection;
