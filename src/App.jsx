import React from "react";
import styled from "styled-components";
import { Floater, NavBar, PlansAndPricing } from "./components";

const Container = styled.div`
  width: 100vw;
`;

const App = () => (
  <Container>
    <Floater />
    <NavBar />
    <PlansAndPricing />
  </Container>
);

export default App;
