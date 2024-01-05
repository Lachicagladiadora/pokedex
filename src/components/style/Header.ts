import styled from "styled-components";

export const Header = styled.div`
  width: 50%;
  height: 16.7%;
  position: absolute;
  top: 0%;
  left: 0px;
  background-color: red;
  box-shadow: 0 10px 0px rgba(101, 13, 13);
  border-radius: 40px 0px 0px 0px;
`;

export const HeaderLarge = styled.div`
  width: 101px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: green;
  box-shadow: 0 10px 0px rgba(101, 13, 13);
  z-index: -2;
`;

export const HeaderWhitoutShadow = styled.div`
  width: 233px;
  height: 44px;
  position: absolute;
  top: 0px;
  border-radius: 50px 0px 0px 0px;
  background-color: red;
  z-index: -2;
`;

export const WhitoutShadow = styled.div`
  width: 166px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 101px;
  background-color: red;
`;

export const Triangle = styled.div`
  position: absolute;
  top: 14px;
  left: 181px;
  width: 0;
  height: 0;
  border-left: 64px solid transparent;
  border-right: 148px solid transparent;
  border-bottom: 94px solid red;
  box-shadow: 0 12px 0px rgba(101, 13, 13);
  transform: rotate(-33deg);
  border-radius: 0px 0px 0px 60px;
  z-index: -1;
`;

export const BigLight = styled.div`
  border: solid 5px #dfdfdf;
  background-image: radial-gradient(#2fffc2 30%, #5eaa9c 82%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 30px;
`;

export const LightLargeSmallRed = styled.div`
  border: solid 2px #dfdfdf;
  background-image: radial-gradient(#ff2f2f 30%, #f2a4a4 82%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 120px;
`;

export const LightLargeSmallYellow = styled.div`
  border: solid 2px #dfdfdf;
  background-image: radial-gradient(#e8ff2f 30%, #d1c676 82%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 150px;
`;

export const LightLargeSmallGreen = styled.div`
  border: solid 2px #dfdfdf;
  background-image: radial-gradient(#39ff2f 30%, #5eaa6b 82%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 180px;
`;
