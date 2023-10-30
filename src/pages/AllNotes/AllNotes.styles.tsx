import { styled } from "styled-components";

export const Input = styled.input`
  width: 70vw;
  margin-left: 50px;
  height: 35px;
  margin-top: 20px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  border-bottom: 2px solid #bdbdbd;
  color: #bdbdbd;
  &: focus{
    outline: none;
    border-bottom: 3.5px solid #bdbdbd;
  }
`;
