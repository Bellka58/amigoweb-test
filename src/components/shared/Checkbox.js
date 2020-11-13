import React from 'react';
import styled from 'styled-components';
import { DARK_GREY_COLOR, GREY_BLUE_COLOR } from '../../constants/colors';

const Container = styled.label`
  position: relative;
  width: 100%;
  min-height: 28px;
  padding-left: 36px;
  display: flex;
  align-items: center;
  color: ${DARK_GREY_COLOR};
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

const ChildrenContainer = styled.div``;

const Checkbox = styled.input.attrs((type) => ({ type: "checkbox"}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 28px;
  width: 28px;
  border: 1px solid #DBE2EA;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 4px;
  cursor: pointer;

  ${({ checked }) => checked ? `
    border: 2px solid ${GREY_BLUE_COLOR};
    background: url('/img/checked.svg') center no-repeat;
  ` : ''}
`;

const CustomCheckbox = ({ children, setValue, value, ...props }) => {
  return(
    <Container {...props}>
        <ChildrenContainer>
            {children}
        </ChildrenContainer>
        <Checkbox />
        <Checkmark checked={value} onClick={() => setValue(!value)} />
    </Container>
  );
}

export default CustomCheckbox;
