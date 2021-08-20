import React from "react";
import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa";
import { H3, P } from "../../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.875rem;
  gap: 1.125rem;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CheckIcon = styled(FaRegCheckCircle)`
  align-self: baseline;
  font-size: 1.125rem;
  color: #91b83d;
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Item = ({ children }) => (
  <ItemWrapper>
    <CheckIcon />
    <P small>{children}</P>
  </ItemWrapper>
);

export const IsPositiveYogaRight = () => (
  <Wrapper>
    <H3>Is Positive Yoga right for me?</H3>
    <ItemsList>
      <Item>Each program adapts to your age or fitness level</Item>
      <Item>Mindful way to exercise and get real results</Item>
      <Item>Effective and long-term lasting results</Item>
      <Item>Suited activities that benefit both the mind and body</Item>
      <Item>Low-intensity but highly-effective workouts</Item>
      <Item>Extra attention to muscle, joint and back health</Item>
    </ItemsList>
  </Wrapper>
);
