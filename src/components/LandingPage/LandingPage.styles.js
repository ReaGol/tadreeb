import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

export const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
  transition: all 0.5s ease;
`;
