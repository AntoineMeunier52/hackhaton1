import { Link } from "react-router-dom";
import NavBarTab from "./NavBarTab";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderCarousel from "./Header";
import styled from "styled-components";
import FamilySection from "./FamilySection";
import picBonanno from "../components/assets/tommy.JPG";

function MainPage() {
  const [alcoolFamily1, setFamilyAlcool1] = useState([]);
  const [alcoolFamily2, setFamilyAlcool2] = useState([]);
  const [alcoolFamily3, setFamilyAlcool3] = useState([]);

  const Header = styled.div`
    height: 600px;
    width: 100%;
    background-color: lightblue;
  `;

  const getAlcool1 = () => {
    axios
      // .get("https://evening-citadel-85778.herokuapp.com:443/whiskey/")
      .get("https://evening-citadel-85778.herokuapp.com/whiskey/?page=2")
      .then((res) => {
        console.log(res);
        setFamilyAlcool1(res.data.results);
      });
  };

  useEffect(() => {
    getAlcool1();
  }, []);

  return (
    <>
      <NavBarTab />
      <HeaderCarousel />
      <div
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "50px",
          margin: " 10px 0px",
          padding: "0px 200px",
          textDecoration: "underline",
        }}
      >
        Select one family Brewery and pick your poison :{" "}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link
          to={"/Family/Gambino"}
          alcoolList={alcoolFamily1}
          style={{ color: "rgba(0, 0, 0, 1)" }}
        >
          <FamilySection
            name={"Gambino"}
            picture={
              "https://upload.wikimedia.org/wikipedia/commons/6/62/Carlo_Gambino.jpg"
            }
            message={
              "Strong men are molded by what is around them, it's in our tradtion to make sure they are surround by the best whiskey "
            }
          />
        </Link>
        <Link to={"/Family/Lucchese"} alcoolList={alcoolFamily1}>
          <div>
            <FamilySection
              name={"Lucchese"}
              alcoolList={alcoolFamily1}
              picture={
                "https://media2.nekropole.info/2015/01/Joseph-Bonanno.jpg"
              }
              message={
                "The true power of our whiskey is to bring the best of men "
              }
            />
          </div>
        </Link>
        <Link to={"/Family/Bonanno"} alcoolList={alcoolFamily1}>
          <div>
            <FamilySection
              name={"Bonanno"}
              picture={picBonanno}
              message={
                "Long is the list of whiskeys, but Bonanno's make offer no one can resist"
              }
            />
          </div>
        </Link>
      </div>
    </>
  );
}
export default MainPage;
