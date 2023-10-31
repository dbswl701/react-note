import { styled } from "styled-components";

export const Container = styled.div`
  // background-color: red;
  z-index: 3;
  width: 300px;
  // height: 300px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;

  // 
  border: 1px solid black;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Input = styled.input`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  // justify-content: center;
  border: none;
  border-bottom: 3px solid black;
  height: 30px;
  &: focus {
    outline: none;
  }
  font-size: 18px;
`;

export const TagListContainer = styled.div`
  margin-top: 30px;
  
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  // border: 1px solid red;  
  justify-content: space-between;
  padding: 10px;
`;

export const TagTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;