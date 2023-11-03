import { styled } from "styled-components";

type ContainerProp = {
  bcolor: string
}

// 나중에 배경색상 리펙토링!
export const Container = styled.div<ContainerProp>`
  background-color: ${prop => prop.bcolor};
  width: 230px;
  height: 180px;
  border-radius: 13px;
  padding: 20px;
  margin-left: 20px;
  border: 1px solid black; // rㅡ림자로 효과주기
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
  height: 80px;
  font-size: 14px;
`;

export const ContentText = styled.p`
  margin: 0;
`;

export const Tags = styled.div`
  // background-color: yellow;
  display: flex;
  flex-direction: row;
  gap: 10px;
  // height: 20px;
`;

export const Tag = styled.p`
  background-color: rgba(0,0,0,0.1);
  padding: 3px 5px;
  border-radius: 10px;
  margin: 0px;
  font-size: 11px;
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

export const ReactQuillContainer = styled.div`
  .ql-container {
    height: 200px;
    background-color: ${(prop) => prop.color};
  }
`