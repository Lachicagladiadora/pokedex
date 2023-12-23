import styled from "styled-components";

export const Header = styled.div`
  /* border: solid 2px red; */
  width: 293px;
  height: 70px;
  position: absolute;
  top: 44px;
  left: 0px;
  /* border-radius: 63px 50px 24% 0px; */
  background-color: orange;
  box-shadow: 0 10px 0px rgba(101, 13, 13);
`;

export const HeaderLarge = styled.div`
  /* border: solid 2px pink; */
  width: 71px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 0px;
  /* border-radius: 50px 0px 0px 0px; */
  background-color: yellow;
  box-shadow: 0 10px 0px rgba(101, 13, 13);
  z-index: -2;
`;

export const HeaderWhitoutShadow = styled.div`
  /* border: solid 2px pink; */
  width: 293px;
  height: 44px;
  position: absolute;
  top: 0px;
  /* border-radius: 50px 0px 0px 0px; */
  background-color: yellowgreen;
  /* box-shadow: 0 10px 0px rgba(101, 13, 13); */
  z-index: -2;
`;

export const WhitoutShadow = styled.div`
  /* border: solid 2px pink; */
  width: 136px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 71px;
  /* border-radius: 50px 0px 0px 0px; */
  background-color: violet;
  /* box-shadow: 0 10px 0px rgba(101, 13, 13); */
  /* z-index: -2; */
`;

export const Triangle = styled.div`
  /* border-right: solid 2px pink; */
  /* background-color: red; */
  /* border-radius: 60% 60% 100% 60%; */

  /* width: 50px;
  height: 168px;
  background-color: red;
  border-radius: 309% 28% 83% 1%;
  transform: rotate(62deg);*/

  position: absolute;
  top: 16px;
  left: 241px;
  width: 0;
  height: 0;
  border-left: 45px solid transparent; /* la mitad del ancho del triángulo */
  border-right: 138px solid transparent; /* la mitad del ancho del triángulo */
  border-bottom: 76px solid pink;
  box-shadow: 0 10px 0px rgba(0, 0, 0);
  /* box-shadow: 10px 10 0px rgba(101, 13, 13); */
  transform: rotate(-29deg);
  border-radius: 0px 0px 0px 50px;
  z-index: -1;
`;

export const LightLarge = styled.div`
  border: solid 5px #dfdfdf;
  background-image: radial-gradient(#2fffc2 30%, #5eaa9c 82%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 30px;
`;
