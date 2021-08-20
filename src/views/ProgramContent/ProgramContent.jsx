import React from "react";
import styled from "styled-components";
import { H3 } from "../../styles";
import { ReactComponent as CheckList } from "./svg/checkList.svg";
import { ReactComponent as Yoga } from "./svg/yoga.svg";
import { ReactComponent as Shoe } from "./svg/shoe.svg";
import { ReactComponent as Apple } from "./svg/apple.svg";
import { ReactComponent as Whistle } from "./svg/whistle.svg";
import { ReactComponent as Smartwatch } from "./svg/smartwatch.svg";
import { ReactComponent as Bookcheck } from "./svg/bookcheck.svg";
import { ProgramItem } from "./ProgramItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1rem;
`;

export const ProgramContent = () => (
  <Wrapper>
    <H3>What&apos;s in my program?</H3>
    <ProgramItem
      icon={<CheckList />}
      title="A personalized yoga program"
      caption="Completely safe and focused on your key goals"
    />
    <ProgramItem
      icon={<Yoga />}
      title="Easy & enjoyable yoga workouts for your level"
      caption="Program adjusts to your level and pace"
    />
    <ProgramItem
      icon={<Shoe />}
      title="No special preparation needed"
      caption="Perfect for begginners! Requires no special preparation or equipment"
    />
    <ProgramItem
      icon={<Apple />}
      title="Daily motivation & accountability"
      caption="Track your progress, develop a healthy routine, reach goals faster"
    />
    <ProgramItem
      icon={<Whistle />}
      title="Browse from various yoga challenges"
      caption="30 d morning yoga, mindful yoga, back flexibility challenge, and more!"
    />
    <ProgramItem
      icon={<Smartwatch />}
      title="Easy access on any device"
      caption="Do your yoga anywhere across all types of devices"
    />
    <ProgramItem
      icon={<Bookcheck />}
      title="A complete guide to get started"
      caption="Best tips, guidelines, advice, and recommendations for successful practice"
    />
  </Wrapper>
);
