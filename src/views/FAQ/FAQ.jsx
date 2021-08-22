import React from "react";
import styled from "styled-components";
import { Details } from "../../components";
import { H3, Button } from "../../styles";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  padding-block: 1.5rem;
  padding-inline: 0.875rem;
  max-width: 750px;
`;

const PositionedButton = styled(Button)`
  margin-top: 3rem;
  align-self: center;
`;

export const FAQ = ({ startYourProgramRef }) => (
  <Wrapper>
    <H3>Frequently Asked Questions</H3>
    <Details
      title="What happens after I order?"
      description="After you place your order, we get to work!
Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve. "
    />
    <Details
      title="Where I can access my plan?"
      description="Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase."
    />
    <Details
      title="How can I cancel my subscription?"
      description="You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app"
    />
    <Details
      title="Why this program is paid?"
      description="We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! "
    />

    <PositionedButton
      onClick={() => startYourProgramRef?.current?.scrollIntoView()}
    >
      Get my Plan
    </PositionedButton>
  </Wrapper>
);
