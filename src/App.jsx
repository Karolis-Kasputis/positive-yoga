import React, { useRef } from "react";
import styled from "styled-components";
import { Floater, NavBar } from "./components";
import { P, H1, H2 } from "./styles";
import {
  IsPositiveYogaRight,
  FAQ,
  StartYourJourney,
  PlansAndPricing,
  ProgramContent,
  SuccessStories
} from "./views";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 0 0.875rem;
  text-align: center;

  @media (max-width: 900px) {
    max-width: 375px;
    gap: 0.5rem;
    text-align: left;
  }
`;

const ResponsiveP = styled(P)`
  @media (min-width: 450px) {
    margin-top: 2rem;
  }
`;

const ResponsiveWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1.5rem 0;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: ${({ mobileColumnReverse }) =>
      mobileColumnReverse ? "column-reverse" : "column"};
    align-items: center;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
`;

const App = () => {
  const startYourProgramRef = useRef(null);

  return (
    <AppWrapper>
      <Floater />
      <NavBar />
      <HeaderWrapper>
        <ResponsiveP small>
          Over <b>52 147</b> plans ordered.
        </ResponsiveP>
        <H1>Get access to your yoga program now!</H1>
      </HeaderWrapper>
      <ResponsiveWrapper>
        <PlansAndPricing />
        <ProgramContent />
      </ResponsiveWrapper>
      <SuccessStories startYourProgramRef={startYourProgramRef} />
      <ResponsiveWrapper mobileColumnReverse>
        <StartYourJourney />
        <IsPositiveYogaRight />
      </ResponsiveWrapper>
      <FAQ startYourProgramRef={startYourProgramRef} />
      <HeaderWrapper ref={startYourProgramRef}>
        <H2>Start your yoga program today!</H2>
      </HeaderWrapper>
      <ResponsiveWrapper>
        <PlansAndPricing />
        <ProgramContent />
      </ResponsiveWrapper>
    </AppWrapper>
  );
};

export default App;
