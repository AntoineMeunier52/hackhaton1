import { Link } from "react-router-dom";
import NavBarTab from "./NavBarTab";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import FamilySection from "./FamilySection";

function MainPage() {
  const [alcoolFamily1, setFamilyAlcool1] = useState([]);
  const [alcoolFamily2, setFamilyAlcool2] = useState([]);
  const [alcoolFamily3, setFamilyAlcool3] = useState([]);



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
      <Header></Header>
      <Link to={"/Family/Gambino"} alcoolList={alcoolFamily1}>
      <FamilySection name={"Gambino"} urlx ={'https://upload.wikimedia.org/wikipedia/commons/6/62/Carlo_Gambino.jpg'} >

      </FamilySection>
      </Link>
      <Link to={"/Family/Lucchese"} alcoolList={alcoolFamily1}>
        <div>
          
        </div>
      </Link>
      <Link to={"/Family/Bonanno"} alcoolList={alcoolFamily1}>
        <div>
          <div>Photo 3</div>
          <text>fAMILY 3</text>
        </div>
      </Link>
    </>
  );
}
export default MainPage;
