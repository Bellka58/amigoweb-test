import React from 'react'
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: inline-block;
  width: ${({ size }) => size ? size + 16 : 80}px;
  height: ${({ size }) => size ? size + 16 : 80}px;
`;

const Inner = styled.div`
  display: block;
  width: ${({ size }) => size || 64}px;
  height: ${({ size }) => size || 64}px;
  margin: 8px;
  border-radius: 50%;
  border: ${({ lineWidth }) => lineWidth || 6}px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ${rotate} 1.2s linear infinite;
`;


const Loader = ({ size, lineWidth }) => (
  <Container size={size}>
    <Inner size={size} lineWidth={lineWidth} />
  </Container>
);

export default Loader;
