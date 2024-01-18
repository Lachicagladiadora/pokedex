import styled from "styled-components";

export const HFDLeftCorner = styled.div`
  /* border: solid 2px peru; */
  width: 50%;
  height: 16.7%;
  /* height: 800px; */
  /* position: absolute; */
  /* top: 0%; */
  /* left: 0px; */
  background-color: red;
  /* background-color: pink; */
  box-shadow: 0 10px 0px rgba(101, 13, 13);
  border-radius: 4vw 0px 0px 0px;
  /* z-index: 1; */
`;

export const HFDRightCorner = styled.div`
  width: 50.5%;
  /* height: 44px; */
  height: 4.7%;
  position: absolute;
  top: 0%;
  right: 0%;
  /* left: 50%; */
  background-color: red;
  box-shadow: 4px 10px 0px rgba(101, 13, 13);
  /* z-index: -2; */
`;

// export const HeaderWhitoutShadow = styled.div`
//   width: 233px;
//   height: 44px;
//   position: absolute;
//   top: 0px;
//   border-radius: 50px 0px 0px 0px;
//   background-color: red;
//   z-index: -2;
// `;

// export const WhitoutShadow = styled.div`
//   width: 166px;
//   height: 44px;
//   position: absolute;
//   top: 0px;
//   right: 101px;
//   background-color: red;
// `;

export const Triangle = styled.div`
  position: absolute;
  top: 1%;
  left: 40%;
  width: 12%;
  height: 0%;
  border-left: 65px solid transparent;
  border-right: 133px solid transparent;
  border-bottom: 99px solid red;
  /* box-shadow: 0 12px 0px rgba(101, 13, 13); */
  transform: rotate(-37deg);
  border-radius: 0px 0px 0px 28%;
  /* z-index: -1; */
`;

export const TriangleShadow = styled.div`
  position: absolute;
  top: 3.1%;
  left: 42%;
  width: 12%;
  height: 0%;
  border-left: 60px solid transparent;
  border-right: 128px solid transparent;
  border-bottom: 80px solid transparent;
  box-shadow: 0px 12px 0px rgba(101, 13, 13);
  transform: rotate(-37deg);
  border-radius: 0px 0px 0px 28%;
  /* z-index: -1; */
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
