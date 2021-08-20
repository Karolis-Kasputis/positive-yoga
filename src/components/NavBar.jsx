import React from "react";
import styled from "styled-components";
import { ReactComponent as YogaLogo } from "../svg/yogaLogo.svg";

const FloaterContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  justify-content: center;
  background-color: #ffffff;
  color: white;
  width: 100%;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`;
export const NavBar = () => (
  <FloaterContainer>
    <YogaLogo />
  </FloaterContainer>
);
