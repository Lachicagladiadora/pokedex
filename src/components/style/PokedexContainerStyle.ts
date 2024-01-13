import styled from "styled-components";

export const PokedexContainerStyle = styled.div<{ $scale?: number }>`
  max-width: 1820px;
  max-height: 1370px;
  width: 100%;
  height: 100%;
  border: solid 4px green;
  display: flex;
  /* margin: 40px auto; */
  transform: scale(${(props) => props.$scale});
  position: relative;
`;
