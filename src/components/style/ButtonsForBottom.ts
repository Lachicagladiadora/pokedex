import styled from "styled-components";

export const ButtonLarge1 = styled.div`
  position: absolute;
  bottom: 200px;
  left: 120px;
  width: 60px;
  height: 12px;
  background: red;
  border: solid 2px #480000;
  border-radius: 8px;
`;

export const ButtonLarge2 = styled.div`
  position: absolute;
  bottom: 200px;
  left: 200px;
  width: 60px;
  height: 12px;
  background: #00a1ff;
  border: solid 2px #480000;
  border-radius: 8px;
`;

export const Rounded = styled.div`
  position: absolute;
  bottom: 170px;
  left: 40px;
  width: 60px;
  height: 60px;
  background: #480000;
  border: solid 2px #480000;
  border-radius: 50%;
`;

export const ButtonSmall1 = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50px;
  background: #00a1ff;
  border: solid 4px black;
  border-radius: 8px;
`;

export const ButtonSmall2 = styled.div`
  position: absolute;
  bottom: 120px;
  left: 80px;
  background: #00a1ff;
  border: solid 4px black;
  border-radius: 8px;
`;

export const DisplaySmall = styled.div`
  height: 80px;
  width: 180px;
  position: absolute;
  bottom: 50px;
  left: 104px;
  background-color: green;
  border-radius: 4px;
  box-shadow: inset 0px 0px 5px rgba(101, 13, 13);
`;

export const DivForPointsAndLines = styled.div`
  width: 100px;
  height: 10px;
  position: absolute;
  bottom: 30px;
  right: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PointLarge = styled.div`
  background: #00a1ff;
  border: solid 4px black;
  border-radius: 8px;
`;

export const DivForTwoLines = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PointSmall = styled.div`
  background: #00a1ff;
  border: solid 2px black;
  border-radius: 50%;
`;

export const LineSmall1 = styled.div`
  width: 20px;
  background: #00a1ff;
  border: solid 2px black;
  border-radius: 2px;
`;

export const LineSmall2 = styled.div`
  width: 20px;
  background: #00a1ff;
  border: solid 2px black;
  border-radius: 2px;
`;

export const HorizontalButton = styled.div`
  width: 120px;
  height: 30px;
  background: #242424;
  border-radius: 3px;
  position: absolute;
  bottom: 100px;
  right: 50px;
  box-shadow: 0px 0px 5px #242424;
  /* transform: rotate(90deg); */
`;

export const VerticalButton = styled.div`
  width: 120px;
  height: 30px;
  background: #242424;
  border-radius: 3px;
  position: absolute;
  bottom: 100px;
  right: 50px;
  transform: rotate(90deg);
  box-shadow: 0px 0px 5px #242424;
`;
