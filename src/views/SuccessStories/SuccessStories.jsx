import React from "react";
import styled from "styled-components";
import { H3, Button } from "../../styles";
import { StoryCard } from "./StoryCard";
import { data } from "./data";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1.5rem;
`;

const CardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.875rem;
  padding-inline: 1rem;
  padding-block: 1.5rem;
  margin-bottom: 1rem;
  overflow-x: auto;

  @media (min-width: 450px) {
    justify-content: center;
  }
`;

export const SuccessStories = ({ startYourProgramRef }) => (
  <Wrapper>
    <H3 padding="">Hear success stories from our clients</H3>
    <CardListWrapper>
      {data.map((data) => (
        <StoryCard
          key={data.nameAndAge}
          nameAndAge={data.nameAndAge}
          location={data.location}
          rating={data.rating}
          pic={data.pic}
          review={data.review}
        />
      ))}
    </CardListWrapper>
    <Button
      margin="0 1rem"
      onClick={() => startYourProgramRef?.current?.scrollIntoView()}
    >
      Get my plan
    </Button>
  </Wrapper>
);
