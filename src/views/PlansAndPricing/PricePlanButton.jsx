import React from "react";
import styled from "styled-components";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: ${({ selected }) =>
    selected ? `2px #ff9b4e solid` : "2px solid rgba(0, 0, 0, 0.08)"};
  border-radius: 1rem;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CircleIcon = styled(FaCircle)`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.08);
`;
const CheckIcon = styled(FaCheckCircle)`
  font-size: 1.25rem;
  color: #ff9b4e;
`;

export const PricePlanButton = ({ selected, children, onClick }) => (
  <Wrapper selected={selected} onClick={onClick}>
    <FlexCol>{children}</FlexCol>
    {selected ? <CheckIcon /> : <CircleIcon />}
  </Wrapper>
);
