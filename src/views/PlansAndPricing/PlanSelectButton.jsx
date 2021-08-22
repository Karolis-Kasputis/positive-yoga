import React from "react";
import styled from "styled-components";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const CircleIcon = styled(FaCircle)`
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.08);
`;
const CheckIcon = styled(FaCheckCircle)`
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  font-size: 1.25rem;
  color: #ff9b4e;
`;

const Wrapper = styled.div`
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 150ms;

  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: ${({ selected }) =>
    selected ? `2px #ff9b4e solid` : "2px solid rgba(0, 0, 0, 0.08)"};
  border-radius: 1rem;

  :hover {
    border-color: #e66400;
    svg {
      color: #e66400;
    }
  }

  :focus {
    border-color: #e66400;
    svg {
      color: #e66400;
    }
  }
  :active {
    border-color: #ff7d1a;
    svg {
      color: #ff7d1a;
    }
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PlanSelectButton = ({ selected, children, onClick }) => (
  <Wrapper selected={selected} onClick={onClick}>
    <FlexCol>{children}</FlexCol>
    {selected ? <CheckIcon /> : <CircleIcon />}
  </Wrapper>
);
