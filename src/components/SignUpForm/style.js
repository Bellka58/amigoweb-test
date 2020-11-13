import styled from 'styled-components';
import { BLUE_COLOR, DARK_COLOR } from '../../constants/colors';
import CustomCheckbox from '../shared/Checkbox';
import FieldWithLabel from '../shared/FieldWithLabel';
import CustomSelect from '../shared/SelectWithLabel';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.02), 0px 32px 64px rgba(44, 39, 56, 0.04);
  border-radius: 24px;
  padding: 40px 30px;
  height: 789px;
  width: 460px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  color: ${DARK_COLOR};
`;

export const Text = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: ${DARK_COLOR};
  margin-bottom: 58px;
`;

export const Link = styled.a`
  color: ${BLUE_COLOR};
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
  &:focus {
    color: ${BLUE_COLOR};
  }
`;

export const SignUpLabelField = styled(FieldWithLabel)`
  margin-bottom: 8px;
`;

export const SignUpSelect = styled(CustomSelect)`
  margin-bottom: 34px;
`;

export const TermsCheckbox = styled(CustomCheckbox)`
  margin-bottom: 38px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100%;
`;