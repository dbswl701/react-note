import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(254, 238,196);
  width: 20vw;
  height: 100vh;
`;

export const TitleContainer = styled.div`
  height: 60px;
  // background-color: green;
  border-bottom: 4px solid rgb(254,242,206);
`;

export const Title = styled.h1`
  padding-left: 20px;
  font-size: 32px;
  font-weight: 700;
  margin: 0px;
  line-height: 60px;
  
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: green;
  border-bottom: 1px solid black;
  padding-left: 20px;
`;

export const MenuText = styled.p`
  font-size: 20px;
  font-weight: 550;
  padding-left: 20px;
`;