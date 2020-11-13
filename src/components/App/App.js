import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../SignUpForm/SignUpForm';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh
`;

const App = () => (
  <Container>
    <SignUpForm />
  </Container>
);

export default App;
