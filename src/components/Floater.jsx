import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdPricetag } from "react-icons/io";
import { Text, H5 } from "../styles";

const FloaterContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: 3.5rem;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  background-color: #90caf9;
  color: white;
  font-size: 1rem;
  width: 100%;
`;

const PriceTag = styled(IoMdPricetag)`
  transform: scaleX(-1);
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

export const Floater = ({ initialSeconds: initialTotalSeconds = 300 }) => {
  const [totalSeconds, setTotalSeconds] = useState(initialTotalSeconds);

  useEffect(() => {
    const timeoutId = setTimeout(() => setTotalSeconds((cur) => cur - 1), 1000);

    return () => clearTimeout(timeoutId);
  });

  // add padding to numbers less than 10. e.g.:  5 => 05
  const addPadding = (number) => (number <= 9 ? `0${number}` : number);

  const hours = addPadding(Math.floor(totalSeconds / 3600));
  const minutes = addPadding(Math.floor(totalSeconds / 60));
  const seconds = addPadding(totalSeconds % 60);

  if (totalSeconds < 0) return null; // render nothing when time expires

  return (
    <FloaterContainer>
      <PriceTag />
      <H5>
        <Text bold>50%</Text> discount only valid for
        <Text bold>
          {` `}
          {hours}:{minutes}:{seconds}
        </Text>
      </H5>
    </FloaterContainer>
  );
};
