import React from 'react';
import styled from 'styled-components';
import { BLUE_COLOR, LIGHT_BLUE_COLOR } from '../../constants/colors';
import Loader from './Loader';

const Button = styled.button`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${BLUE_COLOR};
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  cursor: pointer;
  color: ${LIGHT_BLUE_COLOR};
  position: relative;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  outline: none;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16); 
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    border: 2px solid rgba(44, 39, 56, 0.86);
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);

    &::after {
      opacity: 0;
    }
  }

  ${({ disabled }) => disabled ? `
    background-color: #dbe2ea;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    color: #B1B5BF;
    cursor: not-allowed;
    &:hover::after {
      opacity: 0;
    }
  ` : ''}
`;

const CustomButton = ({ disabled, children, isLoading = false, ...props}) => {
  return (
  <Button disabled={disabled} {...props}>
    {isLoading ? <Loader size={16} lineWidth={2} /> : children}
  </Button>
  );
};

export default CustomButton;
