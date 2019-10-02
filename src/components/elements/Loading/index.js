import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
`;

export const Loading = ({ text = "Loading..." }) => (
  <StyledLoading>{text}</StyledLoading>
);
