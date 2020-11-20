import React, { useState, useEffect } from "react";
import AlcoolInfoCard from "./AlcoolInfoCard";
import styled from "styled-components";

function AlcoolList({ alcoolList, handleShoppingAdd, handleShoppingRemove }) {
  console.log(alcoolList);

  const [isLoaded, setIsLoaded] = useState(false);

  const Wrapper = styled.div`
    padding-top: 20px 66px 20px 66px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 60px;
  `;

  useEffect(() => {
    alcoolList.length ? setIsLoaded(true) : setIsLoaded(false);
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          <Wrapper>
            {alcoolList.map((alcool, index) => (
              <AlcoolInfoCard
                alcool={alcool}
                key={index}
                handleShoppingAdd={handleShoppingAdd}
                handleShoppingRemove={handleShoppingRemove}
              />
            ))}
          </Wrapper>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
export default AlcoolList;
