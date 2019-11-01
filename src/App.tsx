import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import styled from 'styled-components';

const App: React.FC = () => {
  const MainContainer = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const Button = styled.button`
    color: papayawhip;
    border-radius: 3px;
    background-color: palevioletred;
    border: none;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 1rem;
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
      filter: brightness(85%);
    }
  `;

  const ButtonContainer = styled.div`
    display: flex;
  `;

  const OtherButton = styled(Button)`
    background-color: tomato;
  `;

  const Header = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem;
  `;

  const Error = styled.div`
    font-weight: bold;
    color: darkred;
    padding: 1rem;
  `;

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showSpinner, setshowSpinner] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    setshowSpinner(true);
    Axios.get('http://echo.jsontest.com/name/Per')
      .then(response => {
        setTimeout(() => {
          setName(response.data.name);
          setshowSpinner(false);
        }, 1000);
      })
      .catch(error => {
        setError(error.message);
        setshowSpinner(false);
      });
  };

  return (
    <MainContainer>
      <Header>PER-APP </Header>
      <ButtonContainer>
        <Button data-cy="button1" onClick={handleClick}>
          What's my name?
        </Button>
        <OtherButton data-cy="button2" onClick={handleClick}>
          What's my name?
        </OtherButton>
      </ButtonContainer>
      {error ? (
        <Error data-cy="error">{error}</Error>
      ) : (
        name && <div data-cy="result">{showSpinner ? 'laster data...' : `Name: ${name}`}</div>
      )}
    </MainContainer>
  );
};

export default App;
