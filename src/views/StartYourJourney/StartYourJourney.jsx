import React from "react";
import styled from "styled-components";
import { H3 } from "../../styles";
import { ReactComponent as MobileScreens } from "./svg/mobileScreens.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0.875rem;
  overflow: hidden;
`;

const Stripe = styled.div`
  z-index: -1;
  position: absolute;
  width: 150px;
  height: 200px;
  left: 0;
  top: 4rem;

  background: #ebebeb;
  transform: matrix(2, 1, -7, 2, 80, 90);
  overflow: hidden;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const StartYourJourney = () => (
  <Wrapper>
    <H3>Start your yoga journey now!</H3>
    <MobileScreens />
    <Stripe />
  </Wrapper>
);
