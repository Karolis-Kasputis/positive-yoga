import React from "react";
import styled from "styled-components";
import { H5, Caption } from "../../styles";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const ProgramItem = ({ icon, title, caption }) => (
  <ItemWrapper>
    <div>{icon}</div>
    <div>
      <H5>{title}</H5>
      <Caption opacity="0.64">{caption}</Caption>
    </div>
  </ItemWrapper>
);
