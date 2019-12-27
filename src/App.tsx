import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {StylesProvider} from '@material-ui/core/styles';


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

    const ButtonContainer = styled.div`
    display: flex;
    height: 100px;
  `;

  const MyButton = styled.button`
    color: papayawhip;
    border-radius: 3px;
    background-color: palevioletred;
    border: none;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 1rem;
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
      filter: brightness(85%);
    }
  `;

  const OtherButton = styled(MyButton)`
    background-color: tomato;
  `;

    const StyledMUIButton = styled(Button)`
    color: black;
    padding: 1rem 2rem;
    background-color: pink;
    margin: 1rem;
    height: 50px;
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
        <StylesProvider injectFirst>
            <MainContainer>
          <Header>PER-APP </Header>
                <ButtonContainer>
            <MyButton data-cy="button1" onClick={handleClick}>
              Styled Comp-button
            </MyButton>
            <OtherButton data-cy="button2" onClick={handleClick}>
              Styled Comp-button based on first button
            </OtherButton>
          </ButtonContainer>

          <ButtonContainer>
            <Button variant="contained" color="primary">
              MUI-Button
            </Button>

            <StyledMUIButton variant="contained" color="primary">
              styled MUI-Button
                    </StyledMUIButton>
                </ButtonContainer>
                {error ? (
                    <Error data-cy="error">{error}</Error>
                ) : (
                    name && <div data-cy="result">{showSpinner ? 'laster data...' : `Name: ${name}`}</div>
                )}
            </MainContainer>
        </StylesProvider>
    );
};

export default App;
