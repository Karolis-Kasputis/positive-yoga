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
  align-items: center;
  padding: 0.875rem;
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const App = () => (
  <div>
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
    <IsPositiveYogaRight />
    <StartYourJourney />
    <FAQ />
    <Header>
      <H2>Start your yoga program today!</H2>
    </Header>
    <PlansAndPricing />
    <ProgramContent />
  </div>
);

export default App;
