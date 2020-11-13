import React from 'react';
import styled from 'styled-components';
import { DARK_GREY_COLOR, GREY_BLUE_COLOR, RED_COLOR } from '../../constants/colors';

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: ${DARK_GREY_COLOR};
  display: block;
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;

const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  width: 100%;
  height: 52px;
  padding: 16px 16px 15px;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 8px;

  &::placeholder {
    color: ${GREY_BLUE_COLOR}
  }
`;

const ValidationError = styled.div`
  color: ${RED_COLOR};
  font-size: 14px;
  line-height: 18px;
  min-height: 18px;
  width: 100%;
`;

const FieldWithLabel = ({ label = 'Имя', placeholder, setValue, validationError = '', ...props }) => (
  <Container {...props}>
    <Label>{label}</Label>
    <Input
      type="text"
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
    <ValidationError>{validationError}</ValidationError>
  </Container>
);

export default FieldWithLabel;
