import React from "react";
import styled from "styled-components";
import { H3, Button } from "../../styles";
import { StoryCard } from "./StoryCard";
import { fakeData } from "./fakeData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 0.75rem;
`;

const CardListWrapper = styled.div`
  display: flex;
  z-index: 100;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 0.875rem;
  padding: 1rem;
  padding-bottom: 3rem;
  overflow-x: scroll;
`;

export const SuccessStories = () => (
  <Wrapper>
    <H3 padding="0.875rem">Hear success stories from our clients</H3>
    <CardListWrapper>
      {fakeData.map((data) => (
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
    <Button margin="0 1rem" onClick={() => console.log("wut")}>
      Get your Plan
    </Button>
  </Wrapper>
);
