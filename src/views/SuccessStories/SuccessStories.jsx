import React from "react";
import styled from "styled-components";
import { H3, Button } from "../../styles";
import { StoryCard } from "./StoryCard";
import { fakeData } from "./fakeData";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 0.75rem;

  @media (max-width: 960px) {
    width: 375px;
  }
`;

const CardListWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 960px;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
  flex-wrap: nowrap;
  gap: 0.875rem;
  padding: 1rem;
  padding-bottom: 3rem;
  margin-bottom: 1rem;
  overflow-x: auto;
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
      Get my plan
    </Button>
  </Wrapper>
);
