import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 70vw;
  margin-left: 50px;
  height: 35px;
  margin-top: 20px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  border-bottom: 2px solid #bdbdbd;
  // color: #bdbdbd;
  &: focus{
    outline: none;
    border-bottom: 3.5px solid #bdbdbd;
  }
`;

export const SortingBtn = styled.button`
  width: 90px;
  height: 45px;
  margin-right: 80px;
  margin-left: auto;
  margin-top: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  border-bottom: 2px solid #bdbdbd;
  &: hover {
    border-bottom: 3.5px solid #bdbdbd;
  }
  &:active {
    box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
    position: relative;
    top:2px;
  }
`;