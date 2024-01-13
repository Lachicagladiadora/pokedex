import styled from "styled-components";

export const SecondDisplayBase = styled.div`
  border: solid 2px rgb(101, 13, 13);
  height: 640px;
  width: 478px;
  position: absolute;
  top: 152px;
  right: 10px;
  border-radius: 0px 0px 40px 0px;
  border-top: transparent;
`;

export const HeaderSecondDisplay = styled.div`
  width: 233px;
  height: 90px;
  position: absolute;
  top: 44px;
  right: 0px;
  background-color: #242424;
  box-shadow: 2px 2px 5px black;
`;

export const HeaderLargeSecondDisplay = styled.div`
  width: 101px;
  height: 44px;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #242424;
  box-shadow: 2px 2px 5px black;
  z-index: -2;
`;

export const HeaderWhitoutShadowSecondDisplay = styled.div`
  width: 233px;
  height: 44px;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 0px 50px 0px 0px;
  background-color: #242424;
  z-index: -2;
`;

export const WhitoutShadowSecondDisplay = styled.div`
  width: 166px;
  height: 44px;
  position: absolute;
  top: 0px;
  left: 101px;
  background-color: #242424;
`;

export const TriangleSecondDisplay = styled.div`
  position: absolute;
  top: 14px;
  right: 181px;
  width: 0;
  height: 0;
  border-left: 148px solid transparent;
  border-right: 64px solid transparent;
  border-bottom: 94px solid #242424;
  box-shadow: 2px 2px 5px black;
  transform: rotate(33deg);
  border-radius: 0px 0px 60px 0px;
  z-index: -1;
`;

export const TriangleDisplayBaseMayorSecondDisplay = styled.div`
  position: absolute;
  top: -54px;
  left: 130px;
  width: 217px;
  height: 194px;
  background-color: transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid rgb(101, 13, 13);
  transform: rotate(33deg);
  border-radius: 0px 0px 80px 0px;
  z-index: -1;
`;

export const ShadowTopSecondDisplay = styled.div`
  width: 244px;
  height: 2px;
  position: absolute;
  top: 150px;
  right: 11px;
  background-color: transparent;
  border-bottom: solid 2px rgba(101, 13, 13);
`;

export const ShadowTopRightSecondDisplay = styled.div`
  width: 86px;
  height: 90px;
  position: absolute;
  top: 64px;
  left: 10px;
  background-color: transparent;
  border-top: solid 2px rgba(101, 13, 13);
  border-left: solid 2px rgba(101, 13, 13);
`;

export const BorderDisplaySecondDisplay = styled.div`
  height: 322px;
  width: 420px;
  position: absolute;
  top: 200px;
  right: 40px;
  background-color: white;
  border-radius: 10px 10px 0px 10px;
`;
