import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  // z-index: 3;
  position: fixed;
  background-color: white;
  margin: auto auto;
  width: 60vw;
  height: 500px;
  bottom: 0px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  z-index: 1;
  // background-color: red;
  // width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    // gap: 20px;
  margin-top: 40px;
`;

export const AddTagBtn = styled.button`
  width: 100px;
  font-size: 16px;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(245,245,245);
  border: none;
  border-right: 3px solid rgb(212,212,212);
  border-bottom: 3px solid rgb(212,212,212);
`;

export const Label = styled.label`
  font-size: 17px;
  line-height: 30px;
  margin-right: 10px;
`;

export const Select = styled.select`
  margin: auto;
  width: 80px;
  height: 30px;
`;

export const CreateBtn = styled.button`
  background-color: rgb(254, 238,196);
  margin-left: auto;
  margin-top: 20px;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Input = styled.input`
  height: 80px;
  margin-bottom: 15px;
  border: 1px solid #ccc; 
  padding-left: 20px;
`;

export const Header = styled.div`
  display: flex;
  // background-color: red;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;
