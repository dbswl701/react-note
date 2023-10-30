import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid rgba(239, 239, 239);
  width: 80vw;
  height: 60px;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 60px;
  font-size: 1.5rem;
  padding-left: 20px;
`;

export const AddBtn = styled.button`
  margin: auto 40px auto auto;
  height: 40px;
  width: 60px;
  background-color: rgb(254, 238,196);
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;