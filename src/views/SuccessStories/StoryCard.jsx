import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { H5, Caption, P } from "../../styles";

const StarIcon = styled(FaStar)`
  color: #ffcc80;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  min-width: 20rem;
  padding: 1rem;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: 16px;
`;

const RatingWrapper = styled.div`
  display: flex;
  padding-block: 1rem;
  font-size: 1.25rem;
`;

export const StoryCard = ({ nameAndAge, location, rating, pic, review }) => (
  <CardWrapper>
    <H5>{nameAndAge}</H5>
    <Caption opacity="0.64">{location}</Caption>
    <RatingWrapper>
      {[...new Array(rating)].map(() => (
        <StarIcon />
      ))}
    </RatingWrapper>
    <img src={pic} alt="Emily" height="200px" width="200px" />
    <P padding="1rem 0">
      {review.map((textOrHtml, i) => (
        // eslint-disable-next-line
        <React.Fragment key={i}>{textOrHtml}</React.Fragment>
      ))}
    </P>
  </CardWrapper>
);
