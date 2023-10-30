import { styled } from "styled-components";

type ContainerProp = {
  bcolor: string
}

// 나중에 배경색상 리펙토링!
export const Container = styled.div<ContainerProp>`
  background-color: ${prop => prop.bcolor === 'red'? 'rgb(255,205,205)': 'rgb(203,223,255)'};
  width: 300px;
  height: 200px;
  border-radius: 13px;
  padding: 20px;
  margin-left: 20px;
`;

export const NoteHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NoteHeaderSide = styled.div`
// background-color: green;
display: flex;
flex-direction: row;
`;

export const Title = styled.h3`
  // font-size: 1.2rem;
  margin: 0;
`;

export const Priority = styled.p`
margin: 0;
margin-right: 10px;
font-weight: 600;
`;

export const Content = styled.div`
// background-color: red;
height: 100px;
`;

export const ContentText = styled.p``;

export const Tags = styled.div`
// background-color: yellow;
display: flex;
flex-direction: row;
`;

export const Tag = styled.p`
background-color: rgba(0,0,0,0.1);
padding: 3px;
border-radius: 15px;
margin: 0px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // background-color: pink;
`;

export const DateText = styled.p`
  margin: 10;
  color: rgb(140, 111, 110);
`;

export const FooterSide = styled.div`
display: flex;
flex-direction: row;
margin: auto 0px;
color : rgb(140, 111, 110);
height: 20px;
gap: 10px;
`;