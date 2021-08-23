import React from "react";
import styled from "styled-components";
import { H3 } from "../../styles";
import mobileScreens from "./pics/mobileScreens.png";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 420px;
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
  overflow: visible;

  background: #ebebeb;
  transform: matrix(1, 1, -5, 2, 90, 90);
  @media (min-width: 420px) {
    display: none;
  }
`;

const MobileScreens = styled.img.attrs({
  src: mobileScreens,
  alt: "Mobile Screens"
})`
  max-width: 460px;
`;

export const StartYourJourney = () => (
  <Wrapper>
    <H3>Start your yoga journey now!</H3>
    <MobileScreens />
    <Stripe />
  </Wrapper>
);
