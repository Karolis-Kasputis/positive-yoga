import React from "react";
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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.875rem;
  text-align: center;

  @media (max-width: 769px) {
    text-align: left;
  }
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <AppWrapper>
    <Floater />
    <NavBar />
    <Header>
      <P small>
        Over <b>234234</b> plans ordered.
      </P>
      <H1>Get access to your yoga program now!</H1>
    </Header>
    <ResponsiveWrapper>
      <PlansAndPricing />
      <ProgramContent />
    </ResponsiveWrapper>
    <SuccessStories />
    <ResponsiveWrapper>
      <IsPositiveYogaRight />
      <StartYourJourney />
    </ResponsiveWrapper>
    <FAQ />
    <Header>
      <H2>Start your yoga program today!</H2>
    </Header>
    <ResponsiveWrapper>
      <PlansAndPricing />
      <ProgramContent />
    </ResponsiveWrapper>
  </AppWrapper>
);

export default App;
