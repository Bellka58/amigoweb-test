import React, { useState } from 'react';
import styled from 'styled-components';
import { DARK_GREY_COLOR, LIGHT_BLUE_COLOR } from '../../constants/colors';

const Container = styled.div`
  width: 100%;
`;

const Label = styled.label`
  color: ${DARK_GREY_COLOR};
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  display: block;
`;

const Select = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid #DBE2EA;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  width: 100%;
  height: 52px;
  padding: 16px 16px 15px;
  font-size: 16px;
  line-height: 21px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 30px;
    top: 0px;
    right: 10px;
    background: url("/img/arrow.svg") center no-repeat;
  }

  ${({ active }) => active ? ` 
    border: 2px solid #0880AE;
  ` : ''}
`;

const OptionsContainer = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  max-height: 0;
  opacity: 0;
  background-color: #fff;
  z-index: 5;
  border: 1px solid #DBE2EA;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  width: 100%;
  overflow-y: scroll;

  transition: all 0.3s ease-in-out;

  ${({ active }) => active ? `
  padding: 12px 0;
  max-height: 200px;
  opacity: 1;
  ` : ''}

  &::-webkit-scrollbar {
    display: none;
}
`;

const Option = styled.div`
  padding: 12px 15px 11px;
  cursor: pointer;
  ${({ selected }) => selected ? `` : ''}

  &:hover {
    background-color: ${LIGHT_BLUE_COLOR};
  }
`;

const OptionLabel = styled.label`
  color: ${DARK_GREY_COLOR};
`;

const CustomSelect = ({ options = [], label, value, setValue, ...props }) => {
  const [isActive, setIsActive] = useState(false);
  const defaultOption = options.find(({ value: optionValue }) => optionValue === value);
  const [selectedOption, setSelectedOption] = useState(defaultOption || '');

  const handleSelect = (option) => {
    setValue(option.value);
    setSelectedOption(option);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Select
        onClick={() => setIsActive(prev => !prev)}
        active={isActive}
        {...props}
      >
        {selectedOption.label}
        <OptionsContainer active={isActive} >
        {options.map((option) => {
          const { value, label: optionLabel } = option;
          return (
            <Option key={value} onClick={() => handleSelect(option)}>
              <OptionLabel htmlFor={value}>{optionLabel}</OptionLabel>
            </Option>
          );
        })}
        </OptionsContainer>
      </Select>
    </Container>
  );
};

export default CustomSelect;
