import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as GuaranteedSafeCheckout } from "./svg/guaranteedSafeCheckout.svg";
import { PricePlanButton } from "./PricePlanButton";
import { Text, H2, H3, H5, Chip, Button, Caption } from "../../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;
  gap: 1.125rem;
  padding: 0.875rem;
`;

const SafeCheckout = styled(GuaranteedSafeCheckout)`
  width: 100%;
`;

export const PlansAndPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  return (
    <Wrapper>
      <H3>
        Choose your plan and get <Text color="primary">7 days free trial</Text>
      </H3>
      <PricePlanButton
        selected={selectedPlan === 1}
        onClick={() => setSelectedPlan(1)}
      >
        <H5 margin="0 0 0.75rem 0">
          6 month plan <Chip>Save 50%</Chip>
        </H5>
        <H2>
          $9.99
          <Text fontSize="0.875rem" fontWeight="400">
            / month
          </Text>
        </H2>
        <div>
          <Text lineThrough fontSize="0.875rem">
            $119.94
          </Text>
          <Text
            fontSize="0.875rem"
            color="primary"
            fontWeight="600"
            margin="0 0.375rem"
          >
            $59.94
          </Text>
          billed every 6 months
        </div>
      </PricePlanButton>
      <PricePlanButton
        selected={selectedPlan === 2}
        onClick={() => setSelectedPlan(2)}
      >
        <H5 margin="0 0 0.75rem 0">6 month plan</H5>
        <H2>
          $14.99
          <Text fontSize="0.875rem" fontWeight="400">
            / month
          </Text>
        </H2>
        <div>
          <Text lineThrough fontSize="0.875rem">
            $59.97
          </Text>
          <Text
            fontSize="0.875rem"
            color="primary"
            fontWeight="600"
            margin="0 0.375rem"
          >
            $44.97
          </Text>
          billed every 3 months
        </div>
      </PricePlanButton>
      <PricePlanButton
        selected={selectedPlan === 3}
        onClick={() => setSelectedPlan(3)}
      >
        <H5 margin="0 0 0.75rem 0">1 month plan</H5>
        <H2>
          $19.99
          <Text fontSize="0.875rem" fontWeight="400">
            / month
          </Text>
        </H2>
        <div>
          <Text fontSize="0.875rem">Billed monthly</Text>
        </div>
      </PricePlanButton>
      <Button onClick={() => alert(`Selected plan: ${selectedPlan}`)}>
        Get your Plan
      </Button>
      <Caption textAlign="center">
        After 7 days free trial subscription payment is automatically charged
        from your account unless it is canceled at least 24 hours before the end
        of the trial period.
      </Caption>
      <Caption textAlign="center">
        By choosing a payment method you agree to the{" "}
        <a href="https://www.google.com/">T&Cs</a> and{" "}
        <a href="https://www.google.com/">Privacy Policy</a>
      </Caption>
      <SafeCheckout />
    </Wrapper>
  );
};
