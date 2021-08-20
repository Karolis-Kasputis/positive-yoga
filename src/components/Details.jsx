import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { H5, P } from "../styles";

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArrowIcon = styled(IoIosArrowDown)`
  transform: ${({ open }) => open && "rotate(180deg)"};
`;

export const Details = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <DetailsWrapper onClick={() => setOpen((cur) => !cur)}>
      <TitleWrapper>
        <H5> {title}</H5> <ArrowIcon open={open} />
      </TitleWrapper>
      {open && <P small>{description} </P>}
    </DetailsWrapper>
  );
};
