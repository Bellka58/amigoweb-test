import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Link,
  SignUpLabelField,
  SignUpSelect,
  TermsCheckbox,
  Form
} from './style';
import CustomButton from '../shared/Button';
import { emptyAllFieldsChecking, emptyFieldsChecking } from '../../utils/fieldsChecking';
import { options } from '../../constants/languagesOptions';

const SignUpForm = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'ru',
    termsAgreement: false,
  });

  const [validErrors, setValidErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [loading, setLoading] = useState(false);

  const fieldsRegs = {
    name: /^(?![\s-]+$)[a-zA-Z\s-]*$/gm,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm,
    phone: /^[+]?[0-9][(]?[0-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/gm,
  }

  const setValue = (field) => (value) => {
    if (validErrors[field]) {
      setValidErrors(prev => ({
        ...prev,
        [field]: '',
      }))
    }
    setFields(prev => ({
      ...prev,
      [field]: value,
    }))
  };

  const generateError = (value, reg) => {
    if (!value.match(reg)) {
      return 'Введено не корректное значение'
    }
    return ''
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const newValidErrors = Object.keys(validErrors).reduce((acc, key) => {
      acc[key] = generateError(fields[key], fieldsRegs[key]);
      return acc;
    }, {})
    setValidErrors(newValidErrors)
    if (emptyAllFieldsChecking(newValidErrors)) {
      setLoading(true)
      new Promise((res) => {
        setTimeout(() => res(), 1000)
      }).then(() => {
        setLoading(false);
        alert(`Ваши данные успешно отправлены: \n${JSON.stringify(fields, null, 4)}`)
      })
    }
  };

  return (
    <Container>
      <Title>Регистрация</Title>
      <Text>Уже есть аккаунт? <Link>Войти</Link></Text>
      <Form>
        <SignUpLabelField
          label="Имя"
          name="name"
          placeholder="Введите Ваше имя"
          value={fields.name}
          setValue={setValue('name')}
          validationError={validErrors.name}
        />
        <SignUpLabelField
          label="Email"
          name="email"
          placeholder="Введите ваш email"
          value={fields.email}
          setValue={setValue('email')}
          validationError={validErrors.email}
        />
        <SignUpLabelField
          label="Номер телефона"
          name="number"
          placeholder="Введите ваш номер телефона"
          value={fields.phone}
          setValue={setValue('phone')}
          validationError={validErrors.phone}
        />
        <SignUpSelect
          label="Язык"
          options={options}
          setValue={setValue('language')}
          value={fields.language}
        />
        <TermsCheckbox
          value={fields.termsAgreement}
          setValue={setValue('termsAgreement')}>
          Принимаю <Link>условия</Link> использования
        </TermsCheckbox>
        <CustomButton
          disabled={emptyFieldsChecking(fields)}
          onClick={handleSignUp}
          isLoading={loading}>
          Зарегистрироваться
        </CustomButton>
      </Form>
    </Container>
  );
};

export default SignUpForm;
