import styled from "styled-components";

export const Text = styled.span`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  white-space: pre-wrap;
  font-weight: ${({ fontWeight = "inherit", bold }) =>
    bold ? "bold" : fontWeight};
  font-size: ${({ fontSize = "inherit" }) => fontSize};
  color: ${({ color = "inherit" }) =>
    color === "primary" ? "#FF9B4E" : color};
  text-decoration: ${({ lineThrough }) => (lineThrough ? "line-through" : "")};
`;

export const H1 = styled.h1`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  color: #22222c;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  color: #000000;

  @media (max-width: 480px) {
    text-align: left;
    font-size: 28px;
    line-height: 36px;
  } ;
`;

export const H2 = styled.h2`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  color: #22222c;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const H3 = styled.h3`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  color: #22222c;
  font-family: SF Pro Display, inherit;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const H5 = styled.h5`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const P = styled.p`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  color: #22222c;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  ${({ small }) =>
    small &&
    `
		font-size: 14px;
		line-height: 20px;
	`}
  ${({ regular = true }) =>
    regular &&
    `
    font-size: 16px;
    line-height: 24px;
	`}
`;

export const Caption = styled.p`
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ textAlign = "left" }) => textAlign};
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Chip = styled.span`
  height: 24px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: #ffe082;
  border-radius: 6px;

  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
`;

export const Button = styled.button.attrs(({ type = "button", ...rest }) => ({
  type,
  ...rest
}))`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2.5rem;
  height: 3.5rem;
  background: #ff9b4e;
  box-shadow: 0 1rem 2rem rgba(255, 155, 78, 0.24);
  border-radius: 0.5rem;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  color: white;
  border: none;

  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 150ms;

  :hover {
    background: #e66400;
  }
  :focus {
    background: #e66400;
  }
  :active {
    background: #ff7d1a;
  }
`;
