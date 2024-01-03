import styled from "styled-components";

export const DisplayBaseMayor = styled.div`
  border: solid 2px rgb(101, 13, 13);
  height: 640px;
  width: 479px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 0px 0px 0px 40px;
  border-top: transparent;
`;

export const TriangleDisplayBaseMayor = styled.div`
  position: absolute;
  top: -54px;
  left: 154px;
  width: 217px;
  height: 194px;
  background-color: transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid rgb(101, 13, 13);
  transform: rotate(-33deg);
  border-radius: 0px 0px 0px 80px;
  z-index: -1;
`;

export const ShadowTop = styled.div`
  width: 250px;
  height: 2px;
  position: absolute;
  top: 149px;
  left: 10px;
  background-color: transparent;
  border-bottom: solid 2px rgba(101, 13, 13);
`;

export const ShadowTopRight = styled.div`
  width: 86px;
  height: 90px;
  position: absolute;
  top: 64px;
  right: 11px;
  background-color: transparent;
  border-top: solid 2px rgba(101, 13, 13);
  border-right: solid 2px rgba(101, 13, 13);
`;

export const BorderDisplay = styled.div`
  height: 322px;
  width: 420px;
  position: absolute;
  top: 200px;
  right: 40px;
  background-color: white;
  border-radius: 10px 10px 0px 10px;
`;

export const DisplayForImage = styled.div`
  height: 250px;
  width: 350px;
  position: absolute;
  top: 240px;
  right: 70px;
  background-color: black;
  border-radius: 8px;
`;

export const TriangleDisplayBorder = styled.div`
  position: absolute;
  top: 509px;
  left: 45px;
  width: 0;
  height: 0;
  border-left: 35px solid transparent;
  border-right: 34px solid transparent;
  border-bottom: 38px solid white;
  transform: rotate(44.5deg);
  z-index: -1;
`;

export const DisplayBorderBottom = styled.div`
  position: absolute;
  top: 514px;
  left: 87px;
  width: 373px;
  height: 54px;
  background: white;
  border-radius: 0px 0px 10px 10px;
  z-index: -1;
`;

export const Speaker1 = styled.div`
  position: absolute;
  top: 518px;
  right: 70px;
  width: 50px;
  height: 0;
  border: solid 2px grey;
  border-radius: 2px;
`;

export const Speaker2 = styled.div`
  position: absolute;
  top: 528px;
  right: 70px;
  width: 50px;
  height: 0;
  border: solid 2px grey;
  border-radius: 2px;
`;

export const Speaker3 = styled.div`
  position: absolute;
  top: 538px;
  right: 70px;
  width: 50px;
  height: 0;
  border: solid 2px grey;
  border-radius: 2px;
`;

export const Speaker4 = styled.div`
  position: absolute;
  top: 548px;
  right: 70px;
  width: 50px;
  height: 0;
  border: solid 2px grey;
  border-radius: 2px;
`;

export const LighSmallRedTop1 = styled.div`
  border: solid 2px #dfdfdf;
  background-image: radial-gradient(#ff2f2f 30%, #f2a4a4 82%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 205px;
  left: 220px;
`;

export const LighSmallRedTop2 = styled.div`
  border: solid 2px #dfdfdf;
  background-image: radial-gradient(#ff2f2f 30%, #f2a4a4 82%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 205px;
  left: 260px;
`;

export const LightBigRed = styled.div`
  border: solid 2px #dfdfdf;
  background-image: radial-gradient(#ff2f2f 30%, #f2a4a4 82%);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: absolute;
  top: 505px;
  left: 105px;
`;
